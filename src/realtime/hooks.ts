import { useEffect, useRef, useSyncExternalStore } from 'react';
import { realtimeSource } from './core';
import type { TRealtimeSource } from './core';
import { bindRealtimeRefresh } from './refresh';
import type { TRealtimeSignalHandler } from './types';

/**
 * Подписка компонента на сигнал реалтайма. Обработчик берётся последний, поэтому его смена
 * не пересоздаёт подписку. Опросы данных привязываются не этим хуком, а `bindPollerToRealtime`.
 */
export const useRealtimeSignal = (
    type: string,
    handler: TRealtimeSignalHandler,
    source: Pick<TRealtimeSource, 'onSignal'> = realtimeSource,
) => {
    const handlerRef = useRef(handler);

    useEffect(() => {
        handlerRef.current = handler;
    }, [handler]);

    useEffect(
        () => source.onSignal(type, (signal, channel) => handlerRef.current(signal, channel)),
        [type, source],
    );
};

/** Текущий статус соединения; компонент перерисовывается при его смене */
export const useRealtimeStatus = (
    source: Pick<TRealtimeSource, 'getStatus' | 'subscribeStatus'> = realtimeSource,
) => useSyncExternalStore(source.subscribeStatus, source.getStatus, source.getStatus);

/**
 * Хук экрана: по сигналам `signals` вызвать `refresh` (последний переданный — его смена не пересоздаёт привязку).
 * `refresh` должен перечитывать тихо — без индикатора загрузки и без замены списка ошибкой
 */
export const useRealtimeRefresh = (
    signals: string[],
    refresh: () => void,
    source: TRealtimeSource = realtimeSource,
) => {
    const refreshRef = useRef(refresh);
    const key = signals.join(',');

    useEffect(() => {
        refreshRef.current = refresh;
    }, [refresh]);

    useEffect(
        () => bindRealtimeRefresh(key.split(','), () => refreshRef.current(), { source }),
        [key, source],
    );
};
