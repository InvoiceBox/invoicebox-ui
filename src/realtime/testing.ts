import type { TRealtimeSource } from './core';
import type { TRealtimeClientOptions, TRealtimeLibrary, TRealtimeSignal, TRealtimeStatus } from './types';

/**
 * Подделки для тестов приложений (в приложение не импортируются), точка входа `@invoicebox/ui/realtime/testing`:
 * клиент `centrifuge`, события которого подаёт тест, и источник сигналов для привязок. Не зависят от
 * тестового фреймворка.
 */

export const TEST_CHANNEL = 'user:7';

export const TEST_CONTOUR = 'test';

export const createTestSignal = (type: string, contour: string = TEST_CONTOUR): TRealtimeSignal => ({
    v: 1,
    c: contour,
    type,
});

type TListener = (ctx: never) => void;

export class FakeRealtimeClient {
    readonly url: string;

    readonly options: TRealtimeClientOptions;

    isDisconnected = false;

    private listeners: Record<string, TListener[]> = {};

    constructor(url: string, options: TRealtimeClientOptions) {
        this.url = url;
        this.options = options;
    }

    on(event: string, listener: TListener) {
        this.listeners[event] = [...(this.listeners[event] ?? []), listener];

        return this;
    }

    emit(event: string, ctx: unknown) {
        (this.listeners[event] ?? []).forEach((listener) => (listener as (value: unknown) => void)(ctx));
    }

    connect() {
        this.emit('state', { newState: 'connecting', oldState: 'disconnected' });
    }

    disconnect() {
        this.isDisconnected = true;
        this.emit('state', { newState: 'disconnected', oldState: 'connected' });
        this.emit('disconnected', { code: 0, reason: 'disconnect called' });
    }

    /** Подключение с серверной подпиской на канал */
    open({ recovered = false, wasRecovering = false, publications = [] as unknown[] } = {}) {
        this.emit('state', { newState: 'connected', oldState: 'connecting' });
        this.emit('connected', { client: 'c1' });
        this.emit('subscribed', { channel: TEST_CHANNEL, recovered, wasRecovering });
        publications.forEach((data) => this.emit('publication', { channel: TEST_CHANNEL, data }));
    }

    /** Обрыв транспорта: библиотека переподключается сама */
    drop() {
        this.emit('state', { newState: 'connecting', oldState: 'connected' });
    }

    publish(data: unknown) {
        this.emit('publication', { channel: TEST_CHANNEL, data });
    }
}

/** Библиотека-подделка: считает загрузки чанка и созданные соединения */
export const createFakeLibrary = () => {
    const clients: FakeRealtimeClient[] = [];
    let loads = 0;

    const library: TRealtimeLibrary = {
        Centrifuge: class extends FakeRealtimeClient {
            constructor(url: string, options: TRealtimeClientOptions) {
                super(url, options);
                clients.push(this);
            }
        },
    };

    return {
        clients,
        last: () => clients[clients.length - 1],
        loads: () => loads,
        load: async () => {
            loads += 1;

            return library;
        },
    };
};

/**
 * Подделка соединения для привязок опросов (`TRealtimeSource`): сигналы, полное чтение и статус —
 * вручную, без клиента `centrifuge`
 */
export const createFakeRealtimeSource = () => {
    const signalHandlers = new Map<string, Set<(signal: TRealtimeSignal, channel: string) => void>>();
    const resyncHandlers = new Set<(channel: string) => void>();
    const statusListeners = new Set<(status: TRealtimeStatus) => void>();
    let status: TRealtimeStatus = 'disabled';

    const source: TRealtimeSource = {
        onSignal: (type, handler) => {
            const handlers = signalHandlers.get(type) ?? new Set();

            handlers.add(handler);
            signalHandlers.set(type, handlers);

            return () => {
                handlers.delete(handler);
            };
        },
        onResync: (handler) => {
            resyncHandlers.add(handler);

            return () => {
                resyncHandlers.delete(handler);
            };
        },
        getStatus: () => status,
        subscribeStatus: (listener) => {
            statusListeners.add(listener);

            return () => {
                statusListeners.delete(listener);
            };
        },
    };

    return {
        source,
        emit: (value: TRealtimeSignal) =>
            signalHandlers.get(value.type)?.forEach((handler) => handler(value, TEST_CHANNEL)),
        resync: () => resyncHandlers.forEach((handler) => handler(TEST_CHANNEL)),
        setStatus: (next: TRealtimeStatus) => {
            status = next;
            statusListeners.forEach((listener) => listener(next));
        },
    };
};
