import { bindPollerToRealtime, OUTAGE_GRACE_MS, SIGNAL_DEBOUNCE_MS } from './bindPoller';
import { filterRealtimeSignals, readRealtimeSignalIds } from './signals';
import { getRealtimeTone, watchRealtimeLoss } from './status';
import { createFakeRealtimeSource, createTestSignal } from './testing';
import { getRealtimePollInterval, scheduleSignalPoll, waitForRealtimeSignal } from './wait';

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.useRealTimers();
});

describe('bindPollerToRealtime', () => {
    const setup = () => {
        const fake = createFakeRealtimeSource();
        const poller = { markStale: jest.fn(), setLive: jest.fn() };
        const unbind = bindPollerToRealtime(poller, { signals: ['entity.added'], source: fake.source });

        return { fake, poller, unbind };
    };

    it('пачка сигналов и полное чтение за окно дребезга — одно чтение', () => {
        const { fake, poller } = setup();

        fake.emit(createTestSignal('entity.added'));
        fake.resync();
        fake.emit(createTestSignal('entity.added'));
        fake.emit(createTestSignal('entity.other'));
        expect(poller.markStale).not.toHaveBeenCalled();

        jest.advanceTimersByTime(SIGNAL_DEBOUNCE_MS);
        expect(poller.markStale).toHaveBeenCalledTimes(1);
    });

    it('connected — редкий интервал; короткий обрыв не замечается, долгий возвращает обычный', () => {
        const { fake, poller } = setup();

        fake.setStatus('connected');
        expect(poller.setLive).toHaveBeenLastCalledWith(true);

        fake.setStatus('offline');
        jest.advanceTimersByTime(OUTAGE_GRACE_MS - 1);
        fake.setStatus('connected');
        expect(poller.setLive).toHaveBeenCalledTimes(1);

        fake.setStatus('offline');
        jest.advanceTimersByTime(OUTAGE_GRACE_MS);
        expect(poller.setLive).toHaveBeenLastCalledWith(false);
    });

    it('отвязка снимает подписки, таймеры и живой режим', () => {
        const { fake, poller, unbind } = setup();

        fake.setStatus('connected');
        fake.emit(createTestSignal('entity.added'));
        unbind();
        jest.advanceTimersByTime(SIGNAL_DEBOUNCE_MS);
        fake.emit(createTestSignal('entity.added'));
        jest.advanceTimersByTime(SIGNAL_DEBOUNCE_MS);

        expect(poller.markStale).not.toHaveBeenCalled();
        expect(poller.setLive).toHaveBeenLastCalledWith(false);
    });
});

describe('readRealtimeSignalIds', () => {
    it('только непустые строки; без массива — пусто', () => {
        expect(readRealtimeSignalIds({ ...createTestSignal('a'), ids: ['1', '', 2, null, '3'] })).toEqual([
            '1',
            '3',
        ]);
        expect(readRealtimeSignalIds(createTestSignal('a'))).toEqual([]);
        expect(readRealtimeSignalIds({ ...createTestSignal('a'), ids: '1' })).toEqual([]);
    });
});

describe('filterRealtimeSignals', () => {
    it('отдаёт только принятые сигналы; полное чтение и статусы — как есть', () => {
        const fake = createFakeRealtimeSource();
        const filtered = filterRealtimeSignals(fake.source, (signal) => signal.siteId === 'own');
        const signal = jest.fn();
        const resync = jest.fn();
        const status = jest.fn();

        filtered.onSignal('a', signal);
        filtered.onResync(resync);
        filtered.subscribeStatus(status);

        fake.emit({ ...createTestSignal('a'), siteId: 'other' });
        expect(signal).not.toHaveBeenCalled();
        fake.emit({ ...createTestSignal('a'), siteId: 'own' });
        expect(signal).toHaveBeenCalledTimes(1);

        fake.resync();
        fake.setStatus('connected');
        expect(resync).toHaveBeenCalledTimes(1);
        expect(status).toHaveBeenCalledWith('connected');
        expect(filtered.getStatus()).toBe('connected');
    });
});

describe('опрос с сигналом-ускорителем', () => {
    it('интервал зависит от живого сокета', () => {
        const fake = createFakeRealtimeSource();

        expect(getRealtimePollInterval(1_000, 5_000, fake.source)).toBe(1_000);
        fake.setStatus('connected');
        expect(getRealtimePollInterval(1_000, 5_000, fake.source)).toBe(5_000);
    });

    it('пауза обрывается подходящим сигналом, чужой не обрывает', async () => {
        const fake = createFakeRealtimeSource();
        const result = waitForRealtimeSignal(1_000, {
            type: 'a',
            accept: (signal) => signal.id === 'own',
            source: fake.source,
        });

        fake.emit({ ...createTestSignal('a'), id: 'other' });
        fake.emit({ ...createTestSignal('a'), id: 'own' });

        await expect(result).resolves.toBe('signal');
    });

    it('без сигнала — по сроку, подписка снята', async () => {
        const fake = createFakeRealtimeSource();
        const accept = jest.fn(() => true);
        const result = waitForRealtimeSignal(1_000, { type: 'a', accept, source: fake.source });

        jest.advanceTimersByTime(1_000);
        await expect(result).resolves.toBe('timeout');

        fake.emit(createTestSignal('a'));
        expect(accept).not.toHaveBeenCalled();
    });

    it('отмена — отказом в форме отменённого запроса, в том числе уже отменённым сигналом', async () => {
        const fake = createFakeRealtimeSource();
        const controller = new AbortController();
        const result = waitForRealtimeSignal(1_000, {
            type: 'a',
            signal: controller.signal,
            source: fake.source,
        });

        controller.abort();
        await expect(result).rejects.toMatchObject({ code: 'ERR_CANCELED', name: 'CanceledError' });
        await expect(
            waitForRealtimeSignal(1_000, { type: 'a', signal: controller.signal, source: fake.source }),
        ).rejects.toMatchObject({ code: 'ERR_CANCELED' });
    });

    it('scheduleSignalPoll: чтение по интервалу живого сокета или по сигналу, отмена его снимает', async () => {
        const fake = createFakeRealtimeSource();
        const options = { type: 'a', normalMs: 1_000, liveMs: 5_000, source: fake.source };

        const byTimer = jest.fn();
        scheduleSignalPoll(byTimer, options);
        await jest.advanceTimersByTimeAsync(1_000);
        expect(byTimer).toHaveBeenCalledTimes(1);

        fake.setStatus('connected');
        const bySignal = jest.fn();
        scheduleSignalPoll(bySignal, options);
        await jest.advanceTimersByTimeAsync(4_999);
        expect(bySignal).not.toHaveBeenCalled();
        fake.emit(createTestSignal('a'));
        await jest.advanceTimersByTimeAsync(0);
        expect(bySignal).toHaveBeenCalledTimes(1);

        const canceled = jest.fn();
        const cancel = scheduleSignalPoll(canceled, options);
        cancel();
        await jest.advanceTimersByTimeAsync(5_000);
        expect(canceled).not.toHaveBeenCalled();
    });
});

describe('watchRealtimeLoss', () => {
    it('соединение было и кончилось — onLost один раз', () => {
        const fake = createFakeRealtimeSource();
        const onLost = jest.fn();

        watchRealtimeLoss(onLost, fake.source);
        fake.setStatus('connecting');
        fake.setStatus('connected');
        fake.setStatus('offline');
        expect(onLost).not.toHaveBeenCalled();

        fake.setStatus('disabled');
        expect(onLost).toHaveBeenCalledTimes(1);
    });

    it('отказ на первом подключении и новый запуск — не потеря', () => {
        const fake = createFakeRealtimeSource();
        const onLost = jest.fn();

        watchRealtimeLoss(onLost, fake.source);
        fake.setStatus('connecting');
        fake.setStatus('disabled');

        fake.setStatus('connected');
        fake.setStatus('connecting');
        fake.setStatus('disabled');

        expect(onLost).not.toHaveBeenCalled();
    });

    it('после отписки onLost не вызывается', () => {
        const fake = createFakeRealtimeSource();
        const onLost = jest.fn();
        const unwatch = watchRealtimeLoss(onLost, fake.source);

        fake.setStatus('connected');
        unwatch();
        fake.setStatus('disabled');

        expect(onLost).not.toHaveBeenCalled();
    });
});

describe('getRealtimeTone', () => {
    it.each([
        ['connected', 'ok'],
        ['connecting', 'pending'],
        ['offline', 'warn'],
        ['disabled', 'warn'],
    ] as const)('%s — %s', (status, tone) => {
        expect(getRealtimeTone(status)).toBe(tone);
    });
});
