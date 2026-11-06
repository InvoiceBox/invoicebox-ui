import { realtimeSource } from './core';
import type { TRealtimeSource } from './core';
import type { TRealtimeStatus } from './types';

/**
 * Соединение было (`connected`/`offline`) и кончилось без перезапуска (`disabled`) — вызвать `onLost`.
 * Первое подключение запуска (`connecting`) и отказ на нём — нет. Чтобы собственная остановка не считалась
 * потерей, отпишитесь до `stopRealtime`. Возвращает отписку.
 */
export const watchRealtimeLoss = (
    onLost: () => void,
    source: Pick<TRealtimeSource, 'subscribeStatus'> = realtimeSource,
) => {
    let hadConnection = false;

    return source.subscribeStatus((status) => {
        if (status === 'connected' || status === 'offline') {
            hadConnection = true;
        } else if (status === 'connecting') {
            hadConnection = false;
        } else if (hadConnection) {
            hadConnection = false;
            onLost();
        }
    });
};

export type TRealtimeTone = 'ok' | 'pending' | 'warn';

/** Смысл статуса для индикатора: живой сокет, подключаемся или данные идут опросом */
export const getRealtimeTone = (status: TRealtimeStatus): TRealtimeTone => {
    switch (status) {
        case 'connected':
            return 'ok';
        case 'connecting':
            return 'pending';
        default:
            return 'warn';
    }
};
