import type { TRealtimeSource } from './core';
import type { TRealtimeSignal } from './types';

export type TRealtimeSignalAccept = (signal: TRealtimeSignal) => boolean;

/**
 * Идентификаторы записей сигнала (`ids`), без мусора. Пустой результат не значит «ничего не изменилось»:
 * как трактовать сигнал без идентификаторов, решает приложение.
 */
export const readRealtimeSignalIds = (signal: TRealtimeSignal): string[] =>
    Array.isArray(signal.ids)
        ? signal.ids.filter((id: unknown): id is string => typeof id === 'string' && id !== '')
        : [];

/** Источник, который отдаёт обработчикам только принятые сигналы; статусы и полное чтение — как есть */
export const filterRealtimeSignals = (
    source: TRealtimeSource,
    accept: TRealtimeSignalAccept,
): TRealtimeSource => ({
    onSignal: (type, handler) =>
        source.onSignal(type, (signal, channel) => {
            if (accept(signal)) handler(signal, channel);
        }),
    onResync: (handler) => source.onResync(handler),
    getStatus: () => source.getStatus(),
    subscribeStatus: (listener) => source.subscribeStatus(listener),
});
