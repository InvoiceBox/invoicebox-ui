import { realtimeSource } from './core';
import type { TRealtimeSource } from './core';
import type { TRealtimeStatus } from './types';

/**
 * Привязка существующего опроса к сокету. Опрос остаётся главным источником данных — сокет
 * только говорит ему «перечитай сейчас» и разрешает редкий страховочный интервал:
 *
 *  - сигнал из `signals` или полное чтение (первая подписка, пропуск не восстановлен) →
 *    `poller.markStale()` с дребезгом `debounceMs` (окно от первого сигнала, не сдвигается: пачка
 *    сигналов — одно чтение, а непрерывный поток не откладывает чтение бесконечно);
 *  - статус `connected` → `poller.setLive(true)`: редкий интервал, при возврате на вкладку —
 *    чтение только по отметке «устарело» (или если страховочный срок прошёл);
 *  - обрыв (`offline`) дольше `outageMs` → `poller.setLive(false)`: обычные интервалы;
 *    `connecting` (ещё не подключались) и `disabled` (выключено, выход) — обычные интервалы сразу.
 *
 * Без React и без стора.
 */

type TTimerId = ReturnType<typeof setTimeout>;

/** Дребезг сигналов: пачка за это окно — одно чтение */
export const SIGNAL_DEBOUNCE_MS = 800;

/** Обрыв короче этого опрос не замечает — переподключение обычно быстрее */
export const OUTAGE_GRACE_MS = 10_000;

export type TRealtimePoller = {
    /** Данные устарели: видимая вкладка — прочитать сейчас, скрытая — отметить и прочитать при возврате */
    markStale: () => void;
    /** Сокет живой: редкий страховочный интервал вместо обычного */
    setLive: (isLive: boolean) => void;
};

export type TBindPollerOptions = {
    /** Типы сигналов (своего контура), по которым опрос перечитывает данные */
    signals: string[];
    debounceMs?: number;
    outageMs?: number;
    source?: TRealtimeSource;
    setTimeout?: (callback: () => void, ms: number) => TTimerId;
    clearTimeout?: (id: TTimerId) => void;
};

export const bindPollerToRealtime = (
    poller: TRealtimePoller,
    {
        signals,
        debounceMs = SIGNAL_DEBOUNCE_MS,
        outageMs = OUTAGE_GRACE_MS,
        source = realtimeSource,
        setTimeout: startTimeout = (callback, ms) => setTimeout(callback, ms),
        clearTimeout: stopTimeout = (id) => clearTimeout(id),
    }: TBindPollerOptions,
) => {
    let readTimer: TTimerId | null = null;
    let outageTimer: TTimerId | null = null;
    let isLive = false;

    const requestRead = () => {
        if (readTimer !== null) {
            return;
        }

        readTimer = startTimeout(() => {
            readTimer = null;
            poller.markStale();
        }, debounceMs);
    };

    const setLive = (next: boolean) => {
        if (isLive !== next) {
            isLive = next;
            poller.setLive(next);
        }
    };

    const clearOutage = () => {
        if (outageTimer !== null) {
            stopTimeout(outageTimer);
            outageTimer = null;
        }
    };

    const handleStatus = (status: TRealtimeStatus) => {
        if (status === 'connected') {
            clearOutage();
            setLive(true);
            return;
        }

        if (status === 'offline') {
            if (isLive && outageTimer === null) {
                outageTimer = startTimeout(() => {
                    outageTimer = null;
                    setLive(false);
                }, outageMs);
            }

            return;
        }

        clearOutage();
        setLive(false);
    };

    const unsubscribers = [
        ...signals.map((type) => source.onSignal(type, requestRead)),
        // полное чтение канала касается каждого привязанного опроса
        source.onResync(requestRead),
        source.subscribeStatus(handleStatus),
    ];

    handleStatus(source.getStatus());

    return () => {
        unsubscribers.forEach((unsubscribe) => unsubscribe());
        clearOutage();

        if (readTimer !== null) {
            stopTimeout(readTimer);
            readTimer = null;
        }

        setLive(false);
    };
};
