import {
    createRealtime,
    MAX_FAILED_CONNECTS,
    MAX_RECONNECT_DELAY_MS,
    MIN_RECONNECT_DELAY_FROM_MS,
    MIN_RECONNECT_DELAY_TO_MS,
    RESYNC_SPREAD_MS,
    toRealtimeUrl,
    UNAUTHORIZED_DISCONNECT_CODE,
} from './core';
import { createFakeLibrary, createTestSignal, TEST_CHANNEL, TEST_CONTOUR } from './testing';

const START = { contour: TEST_CONTOUR, url: 'ws://app.test/api/realtime/connection/websocket' };

const setup = ({ random = (): number => 0.5 }: { random?: () => number } = {}) => {
    const fake = createFakeLibrary();
    const realtime = createRealtime({ loadLibrary: fake.load, random });
    const signals: Array<{ type: string; channel: string }> = [];
    const resyncs: string[] = [];
    realtime.onSignal('entity.added', (signal, channel) => signals.push({ type: signal.type, channel }));
    realtime.onSignal('entity.read', (signal, channel) => signals.push({ type: signal.type, channel }));
    realtime.onResync((channel) => resyncs.push(channel));

    return { fake, realtime, signals, resyncs };
};

/** Дать отработать загрузке чанка (промисам) */
const flush = async () => {
    await jest.advanceTimersByTimeAsync(0);
};

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.useRealTimers();
});

describe('toRealtimeUrl', () => {
    it('относительный адрес API — хост страницы, wss при https', () => {
        expect(toRealtimeUrl('/api/', 'https://app.example.com/some/page')).toBe(
            'wss://app.example.com/api/realtime/connection/websocket',
        );
    });

    it('абсолютный адрес API — хост API, ws при http', () => {
        expect(toRealtimeUrl('http://localhost:8080/api/', 'http://localhost:3000/')).toBe(
            'ws://localhost:8080/api/realtime/connection/websocket',
        );
    });

    it('свой путь сокета', () => {
        expect(toRealtimeUrl('/api', 'https://app.example.com/', '/ws')).toBe('wss://app.example.com/api/ws');
    });
});

describe('createRealtime', () => {
    it('не запущен — disabled, библиотека не загружается', () => {
        const { fake, realtime } = setup();
        expect(realtime.getStatus()).toBe('disabled');
        expect(fake.loads()).toBe(0);
    });

    it('запуск: ленивый чанк, одно соединение, повторный запуск ничего не делает', async () => {
        const { fake, realtime } = setup();
        const statuses: string[] = [];
        realtime.start({ ...START, onStatus: (status) => statuses.push(status) });
        expect(realtime.getStatus()).toBe('connecting');
        await flush();

        realtime.start(START);
        await flush();
        expect(fake.loads()).toBe(1);
        expect(fake.clients).toHaveLength(1);
        expect(fake.last().url).toBe(START.url);
        expect(fake.last().options).toEqual({
            name: TEST_CONTOUR,
            minReconnectDelay: 2_000,
            maxReconnectDelay: MAX_RECONNECT_DELAY_MS,
        });

        fake.last().open();
        expect(statuses).toEqual(['connecting', 'connected']);
    });

    it('сигналы — только своего контура и известного типа', async () => {
        const { fake, realtime, signals } = setup();
        realtime.start(START);
        await flush();
        fake.last().open();

        fake.last().publish(createTestSignal('entity.added'));
        fake.last().publish(createTestSignal('entity.added', 'other'));
        fake.last().publish(createTestSignal('entity.unknown'));
        fake.last().publish({ v: 1, type: 'entity.read' });
        fake.last().publish('entity.read');
        fake.last().publish(null);

        expect(signals).toEqual([{ type: 'entity.added', channel: TEST_CHANNEL }]);
    });

    it('исключение обработчика не выходит наружу и не мешает другим обработчикам и следующим сигналам', async () => {
        const { fake, realtime, signals } = setup();
        const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
        realtime.onSignal('entity.added', () => {
            throw new TypeError('кривой сигнал');
        });
        realtime.start(START);
        await flush();
        fake.last().open();

        expect(() => fake.last().publish(createTestSignal('entity.added'))).not.toThrow();
        fake.last().publish(createTestSignal('entity.read'));

        expect(signals).toEqual([
            { type: 'entity.added', channel: TEST_CHANNEL },
            { type: 'entity.read', channel: TEST_CHANNEL },
        ]);
        errorSpy.mockRestore();
    });

    it('первая подписка — полное чтение сразу, даже при разбросе', async () => {
        const { fake, realtime, resyncs } = setup({ random: () => 0.99 });
        realtime.start(START);
        await flush();
        fake.last().open();

        expect(resyncs).toEqual([TEST_CHANNEL]);
    });

    it('восстановлено после обрыва — без полного чтения, пропущенные сигналы приходят', async () => {
        const { fake, realtime, signals, resyncs } = setup();
        realtime.start(START);
        await flush();
        fake.last().open();

        fake.last().drop();
        expect(realtime.getStatus()).toBe('offline');
        fake.last().open({
            recovered: true,
            wasRecovering: true,
            publications: [createTestSignal('entity.read')],
        });
        await jest.advanceTimersByTimeAsync(RESYNC_SPREAD_MS);

        expect(realtime.getStatus()).toBe('connected');
        expect(resyncs).toEqual([TEST_CHANNEL]);
        expect(signals).toEqual([{ type: 'entity.read', channel: TEST_CHANNEL }]);
    });

    it('не восстановлено после обрыва — полное чтение со случайной задержкой, одно на подряд идущие', async () => {
        const { fake, realtime, resyncs } = setup({ random: () => 0.25 });
        realtime.start(START);
        await flush();
        fake.last().open();

        fake.last().drop();
        fake.last().open({ recovered: false, wasRecovering: true });
        fake.last().drop();
        fake.last().open({ recovered: false, wasRecovering: true });

        await jest.advanceTimersByTimeAsync(RESYNC_SPREAD_MS * 0.25 - 1);
        expect(resyncs).toHaveLength(1);
        await jest.advanceTimersByTimeAsync(1);
        expect(resyncs).toHaveLength(2);
        await jest.advanceTimersByTimeAsync(RESYNC_SPREAD_MS);
        expect(resyncs).toHaveLength(2);
    });

    it(`${MAX_FAILED_CONNECTS} неудачных подключения подряд без успешного — disabled до перезагрузки`, async () => {
        const { fake, realtime } = setup();
        realtime.start(START);
        await flush();
        const client = fake.last();

        client.emit('error', { type: 'transport' });
        client.emit('error', { type: 'connect' });
        expect(realtime.getStatus()).toBe('connecting');
        client.emit('error', { type: 'transport' });
        expect(realtime.getStatus()).toBe('disabled');
        expect(client.isDisconnected).toBe(true);

        realtime.stop();
        realtime.start(START);
        await flush();
        expect(realtime.getStatus()).toBe('disabled');
        expect(fake.clients).toHaveLength(1);
    });

    it('после успешного подключения обрывы не выключают — библиотека переподключается', async () => {
        const { fake, realtime } = setup();
        realtime.start(START);
        await flush();
        fake.last().open();
        fake.last().drop();

        for (let attempt = 0; attempt < MAX_FAILED_CONNECTS * 2; attempt += 1) {
            fake.last().emit('error', { type: 'transport' });
        }

        expect(realtime.getStatus()).toBe('offline');
    });

    it('отказ входа — disabled до перезагрузки', async () => {
        const { fake, realtime } = setup();
        realtime.start(START);
        await flush();
        fake.last().emit('error', { type: 'subscribe' });
        fake.last().emit('disconnected', { code: UNAUTHORIZED_DISCONNECT_CODE, reason: 'unauthorized' });
        expect(realtime.getStatus()).toBe('disabled');

        realtime.stop();
        realtime.start(START);
        expect(realtime.getStatus()).toBe('disabled');
    });

    it('свои терминальные коды заменяют код по умолчанию', async () => {
        const fake = createFakeLibrary();
        const realtime = createRealtime({ loadLibrary: fake.load, terminalDisconnectCodes: [4999] });

        realtime.start(START);
        await flush();
        fake.last().emit('disconnected', { code: UNAUTHORIZED_DISCONNECT_CODE, reason: 'other' });
        realtime.stop();
        realtime.start(START);
        expect(realtime.getStatus()).toBe('connecting');
        await flush();

        fake.last().emit('disconnected', { code: 4999, reason: 'terminal' });
        realtime.stop();
        realtime.start(START);
        expect(realtime.getStatus()).toBe('disabled');
    });

    it('чанк библиотеки не загрузился — disabled', async () => {
        const realtime = createRealtime({ loadLibrary: () => Promise.reject(new Error('ChunkLoadError')) });
        realtime.start(START);
        await flush();

        expect(realtime.getStatus()).toBe('disabled');
    });

    it('выход закрывает соединение; события старого соединения ничего не трогают; новый вход — новое', async () => {
        const { fake, realtime, signals, resyncs } = setup();
        realtime.start(START);
        await flush();
        const client = fake.last();
        client.open();

        realtime.stop();
        expect(client.isDisconnected).toBe(true);
        expect(realtime.getStatus()).toBe('disabled');

        client.publish(createTestSignal('entity.added'));
        client.open();
        expect(signals).toEqual([]);
        expect(resyncs).toEqual([TEST_CHANNEL]);

        realtime.start(START);
        await flush();
        expect(fake.clients).toHaveLength(2);
        expect(realtime.getStatus()).toBe('connecting');
    });

    it('отписка обработчика', async () => {
        const { fake, realtime } = setup();
        const handler = jest.fn();
        const unsubscribe = realtime.onSignal('entity.added', handler);
        realtime.start(START);
        await flush();
        fake.last().open();

        unsubscribe();
        fake.last().publish(createTestSignal('entity.added'));
        expect(handler).not.toHaveBeenCalled();
    });
});

describe('задержки переподключения', () => {
    it('нижняя граница вкладки — 1–3 с, потолок — 30 с', () => {
        expect([MIN_RECONNECT_DELAY_FROM_MS, MIN_RECONNECT_DELAY_TO_MS, MAX_RECONNECT_DELAY_MS]).toEqual([
            1_000, 3_000, 30_000,
        ]);
    });

    it.each([
        [0, 1_000],
        [0.5, 2_000],
        [0.9999, 2_999],
    ])('random() = %s — minReconnectDelay %s, maxReconnectDelay 30 с', async (value, expected) => {
        const { fake, realtime } = setup({ random: () => value });
        realtime.start(START);
        await flush();

        expect(fake.last().options).toEqual({
            name: TEST_CONTOUR,
            minReconnectDelay: expected,
            maxReconnectDelay: MAX_RECONNECT_DELAY_MS,
        });
    });

    it('случайная (Math.random): целые мс в [1; 3) с, у разных вкладок разная', async () => {
        const fake = createFakeLibrary();
        const tabs = Array.from({ length: 200 }, () => createRealtime({ loadLibrary: fake.load }));
        tabs.forEach((tab) => tab.start(START));
        await flush();

        const delays = fake.clients.map((client) => client.options.minReconnectDelay);
        const outside = delays.filter(
            (delay) =>
                !Number.isInteger(delay) ||
                delay < MIN_RECONNECT_DELAY_FROM_MS ||
                delay >= MIN_RECONNECT_DELAY_TO_MS,
        );
        expect(delays).toHaveLength(200);
        expect(outside).toEqual([]);
        expect(new Set(delays).size).toBeGreaterThan(1);
        expect(
            fake.clients.every((client) => client.options.maxReconnectDelay === MAX_RECONNECT_DELAY_MS),
        ).toBe(true);
    });

    it('выбирается один раз при создании клиента: переподключения её не меняют, новый вход — заново', async () => {
        const values = [0.1, 0.9];
        const random = jest.fn(() => values.shift() ?? 0.5);
        const { fake, realtime } = setup({ random });
        realtime.start(START);
        await flush();
        fake.last().open();
        fake.last().drop();
        fake.last().open({ recovered: true, wasRecovering: true });

        expect(random).toHaveBeenCalledTimes(1);
        expect(fake.clients).toHaveLength(1);

        realtime.stop();
        realtime.start(START);
        await flush();
        expect(fake.clients.map((client) => client.options.minReconnectDelay)).toEqual([1_200, 2_800]);
    });
});
