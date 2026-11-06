import { realtimeSource } from './core';
import type { TRealtimeSource } from './core';
import type { TRealtimeSignalAccept } from './signals';

/**
 * Опрос «пока готовится» с сигналом-ускорителем: сигнал будит чтение сразу, а опрос остаётся страховкой —
 * при живом сокете редкий интервал, без него прежний частый.
 */

/** Интервал опроса сейчас: живой сокет — страховка, нет — прежний */
export const getRealtimePollInterval = (
    normalMs: number,
    liveMs: number,
    source: Pick<TRealtimeSource, 'getStatus'> = realtimeSource,
): number => (source.getStatus() === 'connected' ? liveMs : normalMs);

/** В форме отменённого запроса axios: вызывающий код обрабатывает отмену паузы так же, как отмену запроса */
const abortError = () =>
    Object.assign(new Error('canceled'), { name: 'CanceledError', code: 'ERR_CANCELED' });

export type TWaitForRealtimeSignalOptions = {
    type: string;
    accept?: TRealtimeSignalAccept;
    signal?: AbortSignal;
    source?: Pick<TRealtimeSource, 'onSignal'>;
};

/**
 * Пауза опроса, которую обрывает подходящий сигнал: `'signal'` — пришёл сигнал, `'timeout'` — вышел срок. Отмена
 * (`signal`) — сразу отказом «отменено», как у отменённого запроса
 */
export const waitForRealtimeSignal = (
    ms: number,
    { type, accept = () => true, signal, source = realtimeSource }: TWaitForRealtimeSignalOptions,
): Promise<'signal' | 'timeout'> =>
    new Promise((resolve, reject) => {
        if (signal?.aborted) {
            reject(abortError());

            return;
        }

        let unsubscribe: () => void = () => undefined;
        const finish = () => {
            clearTimeout(timer);
            unsubscribe();
            signal?.removeEventListener('abort', onAbort);
        };
        const onAbort = () => {
            finish();
            reject(abortError());
        };
        const timer = setTimeout(() => {
            finish();
            resolve('timeout');
        }, ms);

        unsubscribe = source.onSignal(type, (incoming) => {
            if (!accept(incoming)) return;

            finish();
            resolve('signal');
        });
        signal?.addEventListener('abort', onAbort, { once: true });
    });

export type TScheduleSignalPollOptions = {
    type: string;
    normalMs: number;
    liveMs: number;
    accept?: TRealtimeSignalAccept;
    source?: Pick<TRealtimeSource, 'onSignal' | 'getStatus'>;
};

/**
 * Следующее чтение «пока готовится»: через прежний интервал без сокета, через страховочный при живом сокете — или
 * сразу по сигналу `type`. Возвращает отмену (для `useEffect`)
 */
export const scheduleSignalPoll = (
    callback: () => void,
    { type, normalMs, liveMs, accept, source = realtimeSource }: TScheduleSignalPollOptions,
): (() => void) => {
    const controller = new AbortController();

    waitForRealtimeSignal(getRealtimePollInterval(normalMs, liveMs, source), {
        type,
        accept,
        signal: controller.signal,
        source,
    }).then(callback, () => undefined);

    return () => controller.abort();
};
