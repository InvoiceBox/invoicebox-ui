/**
 * @jest-environment jsdom
 */
import React, { act, FC } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { SIGNAL_DEBOUNCE_MS } from './bindPoller';
import { useRealtimeRefresh, useRealtimeSignal, useRealtimeStatus } from './hooks';
import { bindRealtimeRefresh, createStaleRefresher, TVisibilityTarget } from './refresh';
import { createFakeRealtimeSource, createTestSignal } from './testing';
import type { TRealtimeSignalHandler } from './types';

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let container: HTMLDivElement;
let root: Root;

const render = (element: React.ReactElement) => {
    act(() => {
        root.render(element);
    });
};

beforeEach(() => {
    jest.useFakeTimers();
    container = document.createElement('div');
    root = createRoot(container);
});

afterEach(() => {
    act(() => {
        root.unmount();
    });
    jest.useRealTimers();
});

/** Вкладка, видимость которой задаёт тест */
const createTarget = () => {
    const listeners = new Set<() => void>();
    const target = {
        visibilityState: 'visible',
        addEventListener: (_: string, listener: () => void) => listeners.add(listener),
        removeEventListener: (_: string, listener: () => void) => listeners.delete(listener),
    } as unknown as TVisibilityTarget;

    return {
        target,
        listeners,
        setVisibility: (state: DocumentVisibilityState) => {
            (target as { visibilityState: DocumentVisibilityState }).visibilityState = state;
            listeners.forEach((listener) => listener());
        },
    };
};

describe('useRealtimeSignal', () => {
    it('зовёт последний обработчик без пересоздания подписки и отписывается при размонтировании', () => {
        const fake = createFakeRealtimeSource();
        const onSignal = jest.spyOn(fake.source, 'onSignal');
        const first = jest.fn();
        const second = jest.fn();
        const Probe: FC<{ handler: TRealtimeSignalHandler }> = ({ handler }) => {
            useRealtimeSignal('a', handler, fake.source);

            return null;
        };

        render(<Probe handler={first} />);
        render(<Probe handler={second} />);
        fake.emit(createTestSignal('a'));

        expect(onSignal).toHaveBeenCalledTimes(1);
        expect(first).not.toHaveBeenCalled();
        expect(second).toHaveBeenCalledTimes(1);

        render(<div />);
        fake.emit(createTestSignal('a'));
        expect(second).toHaveBeenCalledTimes(1);
    });
});

describe('useRealtimeStatus', () => {
    it('перерисовывает компонент при смене статуса', () => {
        const fake = createFakeRealtimeSource();
        const Probe: FC = () => <span>{useRealtimeStatus(fake.source)}</span>;

        render(<Probe />);
        expect(container.textContent).toBe('disabled');

        act(() => {
            fake.setStatus('connected');
        });
        expect(container.textContent).toBe('connected');
    });
});

describe('createStaleRefresher', () => {
    it('видимая вкладка читает сразу, скрытая — один раз при возврате', () => {
        const { target, setVisibility, listeners } = createTarget();
        const refresh = jest.fn();
        const { poller, dispose } = createStaleRefresher(refresh, target);

        poller.markStale();
        expect(refresh).toHaveBeenCalledTimes(1);

        setVisibility('hidden');
        poller.markStale();
        poller.markStale();
        expect(refresh).toHaveBeenCalledTimes(1);

        setVisibility('visible');
        setVisibility('visible');
        expect(refresh).toHaveBeenCalledTimes(2);

        dispose();
        expect(listeners.size).toBe(0);
    });
});

describe('bindRealtimeRefresh', () => {
    it('сигналы — одно чтение за окно дребезга; отвязка снимает подписки', () => {
        const fake = createFakeRealtimeSource();
        const { target, listeners } = createTarget();
        const refresh = jest.fn();
        const unbind = bindRealtimeRefresh(['a'], refresh, { source: fake.source, target });

        fake.emit(createTestSignal('a'));
        fake.emit(createTestSignal('a'));
        jest.advanceTimersByTime(SIGNAL_DEBOUNCE_MS);
        expect(refresh).toHaveBeenCalledTimes(1);

        unbind();
        fake.emit(createTestSignal('a'));
        jest.advanceTimersByTime(SIGNAL_DEBOUNCE_MS);
        expect(refresh).toHaveBeenCalledTimes(1);
        expect(listeners.size).toBe(0);
    });
});

describe('useRealtimeRefresh', () => {
    it('зовёт последний refresh и отвязывается при размонтировании', () => {
        const fake = createFakeRealtimeSource();
        const first = jest.fn();
        const second = jest.fn();
        const Probe: FC<{ refresh: () => void }> = ({ refresh }) => {
            useRealtimeRefresh(['a', 'b'], refresh, fake.source);

            return null;
        };

        render(<Probe refresh={first} />);
        render(<Probe refresh={second} />);
        fake.emit(createTestSignal('b'));
        jest.advanceTimersByTime(SIGNAL_DEBOUNCE_MS);

        expect(first).not.toHaveBeenCalled();
        expect(second).toHaveBeenCalledTimes(1);

        render(<div />);
        fake.emit(createTestSignal('a'));
        jest.advanceTimersByTime(SIGNAL_DEBOUNCE_MS);
        expect(second).toHaveBeenCalledTimes(1);
    });
});
