/**
 * @jest-environment jsdom
 */
import React, { act } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { ThemeModeProvider, getThemeModeInitScript } from './mode';
import { ThemeSwitcher } from './ThemeSwitcher';

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let systemDark = false;
const listeners: ((e: { matches: boolean }) => void)[] = [];

beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        configurable: true,
        value: (query: string) => ({
            matches: systemDark,
            media: query,
            addEventListener: (_: string, fn: (e: { matches: boolean }) => void) => listeners.push(fn),
            removeEventListener: () => undefined,
        }),
    });
});

let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
    systemDark = false;
    listeners.length = 0;
    localStorage.clear();
    delete document.documentElement.dataset.theme;
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
});

afterEach(() => {
    act(() => root.unmount());
    container.remove();
});

const render = () =>
    act(() =>
        root.render(
            <ThemeModeProvider>
                <ThemeSwitcher />
            </ThemeModeProvider>,
        ),
    );

const button = (label: string) => {
    const el = container.querySelector<HTMLButtonElement>(`button[aria-label="${label}"]`);
    if (!el) throw new Error(`нет кнопки ${label}`);
    return el;
};

describe('ThemeModeProvider и ThemeSwitcher', () => {
    it('по умолчанию следует системе и переключается вместе с ней', () => {
        systemDark = true;
        render();
        expect(document.documentElement.dataset.theme).toBe('dark');
        expect(button('Как в системе').getAttribute('aria-pressed')).toBe('true');
        act(() => listeners.forEach((fn) => fn({ matches: false })));
        expect(document.documentElement.dataset.theme).toBe('light');
    });

    it('сохраняет выбор и восстанавливает его', () => {
        render();
        act(() => button('Тёмная').click());
        expect(document.documentElement.dataset.theme).toBe('dark');
        expect(localStorage.getItem('theme')).toBe('dark');
        act(() => root.unmount());
        root = createRoot(container);
        render();
        expect(button('Тёмная').getAttribute('aria-pressed')).toBe('true');
    });

    it('игнорирует мусор в хранилище', () => {
        localStorage.setItem('theme', 'purple');
        render();
        expect(button('Как в системе').getAttribute('aria-pressed')).toBe('true');
    });
});

describe('getThemeModeInitScript', () => {
    it('ставит data-theme по сохранённому выбору и по системе', () => {
        localStorage.setItem('ui-theme', 'dark');
        new Function(getThemeModeInitScript('ui-theme'))();
        expect(document.documentElement.dataset.theme).toBe('dark');
        localStorage.setItem('ui-theme', 'system');
        new Function(getThemeModeInitScript('ui-theme'))();
        expect(document.documentElement.dataset.theme).toBe('light');
    });
});
