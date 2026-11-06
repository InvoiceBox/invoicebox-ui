/**
 * Типы модуля реалтайма. Здесь нет ничего от конкретного приложения: ни стора, ни http, ни адресов.
 */

/**
 * Контур — поле `c` сигнала. Канал может быть общим у нескольких приложений, поэтому приложение
 * объявляет свой контур при запуске и обрабатывает только сигналы с таким значением `c`.
 */
export type TRealtimeContour = string;

/**
 * Состояние соединения:
 *  - `connecting` — первое подключение запуска ещё не состоялось;
 *  - `connected` — сокет подключён;
 *  - `offline` — соединение было и оборвалось, библиотека переподключается;
 *  - `disabled` — реалтайм не запущен, остановлен или выключился сам: отказ входа, несколько неудачных
 *    подключений подряд без единого успешного, разрыв без переподключения, не загрузился чанк библиотеки.
 */
export type TRealtimeStatus = 'connected' | 'connecting' | 'offline' | 'disabled';

/**
 * Сигнал инвалидации: что изменилось и идентификаторы, без самих данных
 * (`{"v":1,"c":"app","type":"entity.changed","ids":["1"]}`). Данные приложение перечитывает своими запросами.
 */
export type TRealtimeSignal = {
    v: number;
    c: TRealtimeContour;
    type: string;
    [key: string]: unknown;
};

export type TRealtimeSignalHandler = (signal: TRealtimeSignal, channel: string) => void;

/** Полное чтение: первая подписка запуска или восстановление пропуска не удалось */
export type TRealtimeResyncHandler = (channel: string) => void;

export type TRealtimeStatusListener = (status: TRealtimeStatus) => void;

export type TRealtimeStartOptions = {
    contour: TRealtimeContour;
    /** Адрес сокета, см. `toRealtimeUrl` */
    url: string;
    onStatus?: TRealtimeStatusListener;
};

/**
 * Минимум клиента `centrifuge` 5.x, которым пользуется модуль. Описан здесь: проверки подставляют
 * свой клиент, а модуль зависит от пакета только ленивым `import()`. Перегрузки по событиям, а не
 * обобщённый `on`, — так настоящий клиент подходит под тип без приведений.
 */
export type TRealtimeClient = {
    on(event: 'state', listener: (ctx: { newState: string; oldState: string }) => void): unknown;
    on(event: 'connected', listener: (ctx: { client: string }) => void): unknown;
    on(event: 'disconnected', listener: (ctx: { code: number; reason: string }) => void): unknown;
    on(event: 'error', listener: (ctx: { type: string }) => void): unknown;
    on(
        event: 'subscribed',
        listener: (ctx: { channel: string; recovered: boolean; wasRecovering: boolean }) => void,
    ): unknown;
    on(event: 'publication', listener: (ctx: { channel: string; data: unknown }) => void): unknown;
    connect(): void;
    disconnect(): void;
};

/** Опции клиента, которые задаёт модуль, — подмножество `Options` пакета */
export type TRealtimeClientOptions = {
    /** Имя клиента для наблюдаемости Centrifugo — контур */
    name: string;
    /** Нижняя граница задержки переподключения, своя у вкладки (`core.ts`) */
    minReconnectDelay: number;
    maxReconnectDelay: number;
};

export type TRealtimeLibrary = {
    Centrifuge: new (url: string, options: TRealtimeClientOptions) => TRealtimeClient;
};
