/**
 * Реалтайм (Centrifugo): сигналы инвалидации по веб-сокету поверх существующих опросов. Отдельная точка
 * входа `@invoicebox/ui/realtime`: основной импорт пакета её не тянет. Модуль не знает ни стора, ни http
 * приложения: контур и адрес сокета передаются при запуске. Нужен `centrifuge` в зависимостях приложения.
 */
export {
    startRealtime,
    stopRealtime,
    onSignal,
    onResync,
    getRealtimeStatus,
    subscribeRealtimeStatus,
    realtimeSource,
    toRealtimeUrl,
    createRealtime,
    DEFAULT_REALTIME_SOCKET_PATH,
    RESYNC_SPREAD_MS,
    MAX_FAILED_CONNECTS,
    UNAUTHORIZED_DISCONNECT_CODE,
    MIN_RECONNECT_DELAY_FROM_MS,
    MIN_RECONNECT_DELAY_TO_MS,
    MAX_RECONNECT_DELAY_MS,
} from './core';
export type { TRealtime, TRealtimeDeps, TRealtimeSource } from './core';
export { bindPollerToRealtime, SIGNAL_DEBOUNCE_MS, OUTAGE_GRACE_MS } from './bindPoller';
export type { TBindPollerOptions, TRealtimePoller } from './bindPoller';
export { filterRealtimeSignals, readRealtimeSignalIds } from './signals';
export type { TRealtimeSignalAccept } from './signals';
export { getRealtimePollInterval, waitForRealtimeSignal, scheduleSignalPoll } from './wait';
export type { TWaitForRealtimeSignalOptions, TScheduleSignalPollOptions } from './wait';
export { watchRealtimeLoss, getRealtimeTone } from './status';
export type { TRealtimeTone } from './status';
export { createStaleRefresher, bindRealtimeRefresh } from './refresh';
export type { TRealtimeRefreshOptions, TVisibilityTarget } from './refresh';
export { useRealtimeSignal, useRealtimeStatus, useRealtimeRefresh } from './hooks';
export type {
    TRealtimeClient,
    TRealtimeClientOptions,
    TRealtimeContour,
    TRealtimeLibrary,
    TRealtimeResyncHandler,
    TRealtimeSignal,
    TRealtimeSignalHandler,
    TRealtimeStartOptions,
    TRealtimeStatus,
    TRealtimeStatusListener,
} from './types';
