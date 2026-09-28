import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { DateInput, TProps } from '.';

// Серверный рендер: предупреждения про useLayoutEffect (Dropdown) ожидаемы и к проверке не относятся
// eslint-disable-next-line no-console
const originalError = console.error;
beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation((message, ...rest) => {
        if (typeof message === 'string' && message.includes('useLayoutEffect does nothing on the server'))
            return;
        // eslint-disable-next-line no-console
        originalError(message, ...rest);
    });
});
afterAll(() => jest.restoreAllMocks());

const noop = jest.fn();

// useMobile читает window.matchMedia при первом рендере
const withViewport = (isMobile: boolean, render: () => string) => {
    const globalWithWindow = globalThis as unknown as { window?: unknown };
    const previous = globalWithWindow.window;
    globalWithWindow.window = { matchMedia: () => ({ matches: isMobile }) };
    try {
        return render();
    } finally {
        globalWithWindow.window = previous;
    }
};

const renderInput = (isMobile: boolean, props: Partial<TProps> = {}) => {
    const markup = withViewport(isMobile, () =>
        renderToStaticMarkup(<DateInput id="date" label="Дата" value={null} onChange={noop} {...props} />),
    );
    return markup.match(/<input[^>]*>/)?.[0] ?? '';
};

describe('DateInput: экранная клавиатура (MOB-8)', () => {
    test('на мобильном — inputmode="none": тап открывает только календарь', () => {
        expect(renderInput(true)).toContain('inputMode="none"');
    });

    test('на десктопе inputmode не задан', () => {
        expect(renderInput(false)).not.toContain('inputMode');
    });

    test('проп inputMode переопределяет значение по умолчанию', () => {
        expect(renderInput(false, { inputMode: 'none' })).toContain('inputMode="none"');
        expect(renderInput(true, { inputMode: 'numeric' })).toContain('inputMode="numeric"');
    });
});
