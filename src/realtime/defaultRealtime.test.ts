import {
    getRealtimeStatus,
    onResync,
    onSignal,
    realtimeSource,
    startRealtime,
    stopRealtime,
    subscribeRealtimeStatus,
} from './core';
import { createTestSignal, FakeRealtimeClient, TEST_CHANNEL, TEST_CONTOUR } from './testing';
import type { TRealtimeClientOptions } from './types';

const mockClients: FakeRealtimeClient[] = [];

jest.mock('centrifuge', () => {
    const { FakeRealtimeClient: BaseClient } = jest.requireActual('./testing');

    return {
        Centrifuge: class extends BaseClient {
            constructor(url: string, options: TRealtimeClientOptions) {
                super(url, options);
                mockClients.push(this as unknown as FakeRealtimeClient);
            }
        },
    };
});

const flush = async () => {
    await jest.advanceTimersByTimeAsync(0);
};

describe('соединение по умолчанию', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        stopRealtime();
        jest.useRealTimers();
    });

    // пакет объявляет `sideEffects: false`: при импорте модуль не создаёт соединение и его коллекции
    it('импорт модуля не создаёт экземпляр', () => {
        const OriginalMap = Map;
        const mapSpy = jest
            .spyOn(globalThis, 'Map')
            .mockImplementation((() => new OriginalMap()) as unknown as () => Map<unknown, unknown>);

        jest.isolateModules(() => {
            jest.requireActual('./core');
        });

        const createdMaps = mapSpy.mock.calls.length;
        mapSpy.mockRestore();

        expect(createdMaps).toBe(0);
    });

    it('до запуска — disabled, библиотека не загружается', () => {
        expect(getRealtimeStatus()).toBe('disabled');
        expect(mockClients).toHaveLength(0);
    });

    it('функции и realtimeSource работают с одним соединением', async () => {
        const signal = jest.fn();
        const resync = jest.fn();
        const status = jest.fn();
        const sourceSignal = jest.fn();
        const unsubscribers = [
            onSignal('entity.added', signal),
            onResync(resync),
            subscribeRealtimeStatus(status),
            realtimeSource.onSignal('entity.added', sourceSignal),
        ];

        startRealtime({ contour: TEST_CONTOUR, url: 'ws://app.test/socket' });
        await flush();
        expect(mockClients).toHaveLength(1);

        const client = mockClients[0];
        client.open();
        client.publish(createTestSignal('entity.added'));

        expect(realtimeSource.getStatus()).toBe('connected');
        expect(status).toHaveBeenLastCalledWith('connected');
        expect(resync).toHaveBeenCalledWith(TEST_CHANNEL);
        expect(signal).toHaveBeenCalledTimes(1);
        expect(sourceSignal).toHaveBeenCalledTimes(1);

        stopRealtime();
        expect(client.isDisconnected).toBe(true);
        expect(getRealtimeStatus()).toBe('disabled');
        unsubscribers.forEach((unsubscribe) => unsubscribe());
    });
});
