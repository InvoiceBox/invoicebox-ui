import { bindPollerToRealtime } from './bindPoller';
import type { TBindPollerOptions, TRealtimePoller } from './bindPoller';

/**
 * Перечитывание экрана без опроса: сигнал данных не несёт, экран сам перечитывает их своим запросом.
 * Без сокета сигналов нет — экран читает при открытии и после своего действия, опроса не появляется.
 */

export type TVisibilityTarget = Pick<
    Document,
    'visibilityState' | 'addEventListener' | 'removeEventListener'
>;

/**
 * «Опрос» для `bindPollerToRealtime` без интервала: устарело — видимая вкладка читает сразу, скрытая — при возврате
 * (одно чтение, сколько бы сигналов ни пришло, пока её не видели)
 */
export const createStaleRefresher = (refresh: () => void, target: TVisibilityTarget = document) => {
    let isStale = false;

    const handleVisibility = () => {
        if (isStale && target.visibilityState === 'visible') {
            isStale = false;
            refresh();
        }
    };

    target.addEventListener('visibilitychange', handleVisibility);

    const poller: TRealtimePoller = {
        markStale: () => {
            if (target.visibilityState === 'hidden') {
                isStale = true;

                return;
            }

            refresh();
        },
        // страхового интервала нет: без сокета экран не опрашивает вовсе
        setLive: () => undefined,
    };

    return {
        poller,
        dispose: () => target.removeEventListener('visibilitychange', handleVisibility),
    };
};

export type TRealtimeRefreshOptions = Omit<TBindPollerOptions, 'signals'> & {
    target?: TVisibilityTarget;
};

/** Привязка без React: сигналы → `refresh`. Возвращает отвязку */
export const bindRealtimeRefresh = (
    signals: string[],
    refresh: () => void,
    { target, ...options }: TRealtimeRefreshOptions = {},
) => {
    const refresher = createStaleRefresher(refresh, target);
    const unbind = bindPollerToRealtime(refresher.poller, { ...options, signals });

    return () => {
        unbind();
        refresher.dispose();
    };
};
