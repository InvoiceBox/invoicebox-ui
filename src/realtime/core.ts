import type {
    TRealtimeClient,
    TRealtimeContour,
    TRealtimeLibrary,
    TRealtimeResyncHandler,
    TRealtimeSignal,
    TRealtimeSignalHandler,
    TRealtimeStartOptions,
    TRealtimeStatus,
    TRealtimeStatusListener,
} from './types';

/**
 * Ядро реалтайма: одно соединение Centrifugo на вкладку, без React, стора и http.
 *
 * Centrifugo здесь только транспорт: сокет несёт сигналы инвалидации («данные изменились»), данные
 * приложение перечитывает своими запросами. Поэтому любая неудача здесь — не ошибка для пользователя:
 * пока сокета нет, работает обычный опрос, и модуль никогда не бросает наружу.
 *
 *  - Сигналы: обрабатываются только сигналы своего контура (`c`); неизвестный `type` — без
 *    обработчиков, то есть игнорируется.
 *  - Подписка восстановлена без потерь (`recovered`) — пропущенные сигналы придут обычными
 *    публикациями. Не восстановлена или первая подписка запуска — «полное чтение» (`onResync`):
 *    у первого подключения запуска сразу, у переподключения — со случайной задержкой до
 *    `RESYNC_SPREAD_MS`, чтобы волна переподключений после рестарта сервера не перечитала всё
 *    у сервисов одновременно.
 *  - Самоотключение до перезагрузки страницы (статус `disabled`): отказ входа (`terminalDisconnectCodes`),
 *    `MAX_FAILED_CONNECTS` неудачных подключений подряд без единого успешного. После первого успешного
 *    подключения обрывы не выключают реалтайм — библиотека переподключается сама.
 *  - Переподключение: задержки библиотеки заданы своими (`MIN_RECONNECT_DELAY_*_MS`,
 *    `MAX_RECONNECT_DELAY_MS`) — первая попытка через 1–6 с, дальше до 30 с.
 */

type TTimerId = ReturnType<typeof setTimeout>;

/** Путь сокета относительно адреса API */
export const DEFAULT_REALTIME_SOCKET_PATH = '/realtime/connection/websocket';

/** Предел случайной задержки полного чтения после переподключения */
export const RESYNC_SPREAD_MS = 20_000;

/** Неудачных подключений подряд, после которых (без единого успешного) реалтайм выключается */
export const MAX_FAILED_CONNECTS = 3;

/** Сервер отказал во входе: сессии нет или пользователь заблокирован. Терминальный */
export const UNAUTHORIZED_DISCONNECT_CODE = 4501;

/*
 * Задержки переподключения. Библиотека ждёт `min + U[0, min·2^шаг]`, не больше `max`; шаг сбрасывает
 * только успешное подключение. С умолчаниями библиотеки (0,5 и 20 с) массовый обрыв (рестарт сервера,
 * перезагрузка балансировщика) шлёт первые попытки всех N вкладок в окне 0,5–1 с — около 2·N в секунду,
 * и такая волна может сама не рассосаться. Поэтому `min` у каждой вкладки свой, случайный в 1–3 с, и
 * выбирается один раз при создании клиента: первые попытки размазаны примерно по 1–6 с, пик — около
 * 0,35·N в секунду. Потолок 30 с вместо 20 — реже повторы, пока сервер перегружен.
 */

/** Нижняя граница `minReconnectDelay` вкладки */
export const MIN_RECONNECT_DELAY_FROM_MS = 1_000;

/** Верхняя граница `minReconnectDelay` вкладки (не включая) */
export const MIN_RECONNECT_DELAY_TO_MS = 3_000;

/** `maxReconnectDelay` — потолок задержки переподключения */
export const MAX_RECONNECT_DELAY_MS = 30_000;

/** `minReconnectDelay` вкладки: случайный в [FROM; TO), целые мс */
const pickMinReconnectDelay = (random: () => number) =>
    MIN_RECONNECT_DELAY_FROM_MS +
    Math.floor(random() * (MIN_RECONNECT_DELAY_TO_MS - MIN_RECONNECT_DELAY_FROM_MS));

/**
 * Адрес сокета по адресу API приложения: относительный адрес API → хост страницы, абсолютный (разработка) →
 * тот же хост, что у API. `wss:` при `https:`, иначе `ws:`.
 */
export const toRealtimeUrl = (
    apiBaseUrl: string,
    pageUrl: string = window.location.href,
    socketPath: string = DEFAULT_REALTIME_SOCKET_PATH,
) => {
    const url = new URL(`${apiBaseUrl.replace(/\/+$/, '')}${socketPath}`, pageUrl);
    url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';

    return url.toString();
};

const loadCentrifuge = (): Promise<TRealtimeLibrary> => import('centrifuge');

export type TRealtimeDeps = {
    loadLibrary?: () => Promise<TRealtimeLibrary>;
    setTimeout?: (callback: () => void, ms: number) => TTimerId;
    clearTimeout?: (id: TTimerId) => void;
    random?: () => number;
    /** Коды разрыва, после которых реалтайм выключается до перезагрузки страницы */
    terminalDisconnectCodes?: readonly number[];
};

export const createRealtime = ({
    loadLibrary = loadCentrifuge,
    setTimeout: startTimeout = (callback, ms) => setTimeout(callback, ms),
    clearTimeout: stopTimeout = (id) => clearTimeout(id),
    random = Math.random,
    terminalDisconnectCodes = [UNAUTHORIZED_DISCONNECT_CODE],
}: TRealtimeDeps = {}) => {
    const signalHandlers = new Map<string, Set<TRealtimeSignalHandler>>();
    const resyncHandlers = new Set<TRealtimeResyncHandler>();
    const statusListeners = new Set<TRealtimeStatusListener>();
    const resyncTimers = new Map<string, TTimerId>();

    let status: TRealtimeStatus = 'disabled';
    let onStatusOption: TRealtimeStatusListener | undefined;
    let contour: TRealtimeContour | null = null;
    let client: TRealtimeClient | null = null;
    /** Номер запуска: события прошлого запуска (до выхода или самоотключения) не трогают текущий */
    let session = 0;
    let isStarted = false;
    /** Самоотключение: не пробуем до перезагрузки страницы */
    let isTurnedOff = false;
    /** Было ли успешное подключение в этом запуске */
    let hasConnected = false;
    /** Текущее подключение — переподключение (полное чтение с разбросом) */
    let isReconnect = false;
    let failedConnects = 0;

    /*
     * Чужой обработчик зовём под try/catch: его исключение, брошенное внутри разбора сообщения библиотеки,
     * навсегда оставляет centrifuge с неразобранной очередью — ни сигналов, ни ответа на connect при
     * переподключении. Ошибка обработчика — его дело, в консоль, поток сигналов не останавливается
     */
    const callSafely = <TArgs extends unknown[]>(handler: (...args: TArgs) => void, ...args: TArgs) => {
        try {
            handler(...args);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('[realtime] handler failed', error);
        }
    };

    const setStatus = (next: TRealtimeStatus) => {
        if (status === next) {
            return;
        }

        status = next;
        if (onStatusOption) callSafely(onStatusOption, next);
        Array.from(statusListeners).forEach((listener) => callSafely(listener, next));
    };

    const clearResyncTimers = () => {
        resyncTimers.forEach((id) => stopTimeout(id));
        resyncTimers.clear();
    };

    /** Закрыть соединение текущего запуска; его события дальше игнорируются */
    const closeClient = () => {
        session += 1;
        clearResyncTimers();

        const current = client;
        client = null;
        current?.disconnect();
    };

    const turnOff = () => {
        isTurnedOff = true;
        closeClient();
        setStatus('disabled');
    };

    const runResync = (channel: string) =>
        Array.from(resyncHandlers).forEach((handler) => callSafely(handler, channel));

    const scheduleResync = (channel: string, current: number) => {
        // чтение канала уже ждёт своей очереди — второе не нужно
        if (resyncTimers.has(channel)) {
            return;
        }

        const delay = isReconnect ? Math.floor(random() * RESYNC_SPREAD_MS) : 0;

        if (delay === 0) {
            runResync(channel);
            return;
        }

        resyncTimers.set(
            channel,
            startTimeout(() => {
                resyncTimers.delete(channel);

                if (current === session) {
                    runResync(channel);
                }
            }, delay),
        );
    };

    const dispatch = (channel: string, data: unknown) => {
        const signal = data as TRealtimeSignal | null;

        // чужой контур (тот же пользователь в другом приложении) и не сигнал — мимо
        if (
            !signal ||
            typeof signal !== 'object' ||
            signal.c !== contour ||
            typeof signal.type !== 'string'
        ) {
            return;
        }

        const handlers = signalHandlers.get(signal.type);

        if (handlers) {
            Array.from(handlers).forEach((handler) => callSafely(handler, signal, channel));
        }
    };

    const connect = ({ Centrifuge }: TRealtimeLibrary, options: TRealtimeStartOptions, current: number) => {
        if (current !== session) {
            return;
        }

        // задержка выбирается здесь, один раз: переподключения этого клиента идут уже от неё
        const instance = new Centrifuge(options.url, {
            name: options.contour,
            minReconnectDelay: pickMinReconnectDelay(random),
            maxReconnectDelay: MAX_RECONNECT_DELAY_MS,
        });
        client = instance;

        instance.on('state', ({ newState }) => {
            // `connected` и `disconnected` — в своих событиях: там известны номер подключения и причина
            if (current === session && newState === 'connecting') {
                setStatus(hasConnected ? 'offline' : 'connecting');
            }
        });

        instance.on('connected', () => {
            if (current !== session) {
                return;
            }

            isReconnect = hasConnected;
            hasConnected = true;
            failedConnects = 0;
            setStatus('connected');
        });

        instance.on('error', ({ type }) => {
            // неудачная попытка подключения: транспорт не открылся или сервер отказал в connect
            if (current !== session || hasConnected || (type !== 'transport' && type !== 'connect')) {
                return;
            }

            failedConnects += 1;

            if (failedConnects >= MAX_FAILED_CONNECTS) {
                turnOff();
            }
        });

        instance.on('disconnected', ({ code }) => {
            if (current !== session) {
                return;
            }

            // библиотека больше не переподключается: отказ входа — до перезагрузки, прочее — до входа
            if (terminalDisconnectCodes.includes(code)) {
                isTurnedOff = true;
            }

            client = null;
            clearResyncTimers();
            setStatus('disabled');
        });

        instance.on('subscribed', ({ channel, recovered }) => {
            // восстановлено без потерь — пропущенные сигналы придут следом обычными публикациями
            if (current === session && !recovered) {
                scheduleResync(channel, current);
            }
        });

        instance.on('publication', ({ channel, data }) => {
            if (current === session) {
                dispatch(channel, data);
            }
        });

        instance.connect();
    };

    /** Запуск после входа. Повторный вызов при живом запуске ничего не делает */
    const start = (options: TRealtimeStartOptions) => {
        if (isStarted) {
            return;
        }

        onStatusOption = options.onStatus;

        if (isTurnedOff) {
            setStatus('disabled');
            return;
        }

        isStarted = true;
        session += 1;
        contour = options.contour;
        hasConnected = false;
        isReconnect = false;
        failedConnects = 0;
        setStatus('connecting');

        const current = session;

        // без async/await: Babel встроил бы regenerator в стартовый бандл приложения.
        // Чанк библиотеки не загрузился (сеть, новый деплой) — до перезагрузки остаётся опрос
        new Promise<TRealtimeLibrary>((resolve) => {
            resolve(loadLibrary());
        })
            .then((library) => connect(library, options, current))
            .catch(() => {
                if (current === session) {
                    turnOff();
                }
            });
    };

    /** Выход из учётной записи: соединение закрывается, следующий вход запустит заново */
    const stop = () => {
        isStarted = false;
        closeClient();
        setStatus('disabled');
    };

    /** Подписка на сигнал по `type`; возвращает отписку */
    const onSignal = (type: string, handler: TRealtimeSignalHandler) => {
        const handlers = signalHandlers.get(type) ?? new Set<TRealtimeSignalHandler>();
        signalHandlers.set(type, handlers);
        handlers.add(handler);

        return () => {
            handlers.delete(handler);
        };
    };

    /** Подписка на «полное чтение»; возвращает отписку */
    const onResync = (handler: TRealtimeResyncHandler) => {
        resyncHandlers.add(handler);

        return () => {
            resyncHandlers.delete(handler);
        };
    };

    const subscribeStatus = (listener: TRealtimeStatusListener) => {
        statusListeners.add(listener);

        return () => {
            statusListeners.delete(listener);
        };
    };

    return {
        start,
        stop,
        onSignal,
        onResync,
        getStatus: () => status,
        subscribeStatus,
    };
};

export type TRealtime = ReturnType<typeof createRealtime>;

/** Чем пользуются привязки и хелперы — проверки подставляют свой экземпляр */
export type TRealtimeSource = Pick<TRealtime, 'onSignal' | 'onResync' | 'getStatus' | 'subscribeStatus'>;

/*
 * Соединение вкладки по умолчанию. Создаётся при первом вызове, а не при импорте: у пакета `sideEffects: false`,
 * модуль верхнего уровня ничего не создаёт. Свой экземпляр — `createRealtime()` и параметр `source` у привязок.
 */
let defaultRealtime: TRealtime | null = null;

const getDefaultRealtime = () => {
    defaultRealtime = defaultRealtime ?? createRealtime();

    return defaultRealtime;
};

export const startRealtime = (options: TRealtimeStartOptions) => getDefaultRealtime().start(options);

export const stopRealtime = () => getDefaultRealtime().stop();

export const onSignal = (type: string, handler: TRealtimeSignalHandler) =>
    getDefaultRealtime().onSignal(type, handler);

export const onResync = (handler: TRealtimeResyncHandler) => getDefaultRealtime().onResync(handler);

export const getRealtimeStatus = () => getDefaultRealtime().getStatus();

export const subscribeRealtimeStatus = (listener: TRealtimeStatusListener) =>
    getDefaultRealtime().subscribeStatus(listener);

export const realtimeSource: TRealtimeSource = {
    onSignal,
    onResync,
    getStatus: getRealtimeStatus,
    subscribeStatus: subscribeRealtimeStatus,
};
