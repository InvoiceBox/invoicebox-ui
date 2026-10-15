/**
 * @jest-environment jsdom
 */
import React, { act } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { WentWrongModal, TProps } from '.';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
    window.matchMedia = jest.fn().mockReturnValue({
        matches: false,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
    });
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
});

afterEach(() => {
    act(() => root.unmount());
    container.remove();
});

const render = (props: Partial<TProps> = {}) =>
    act(() => {
        root.render(
            <WentWrongModal isOpen onClose={jest.fn()} title="Заголовок" description="Описание" {...props} />,
        );
    });

describe('WentWrongModal', () => {
    test('рендерит заголовок, описание и контакты поддержки по умолчанию', () => {
        render();
        const dialog = document.querySelector('[role="dialog"]');
        expect(dialog?.textContent).toContain('Заголовок');
        expect(dialog?.textContent).toContain('Описание');
        const hrefs = Array.from(document.querySelectorAll('a')).map((a) => a.getAttribute('href'));
        expect(hrefs).toEqual(['tel:+78001007620', 'mailto:c-support@invoicebox.ru']);
    });

    test('показывает ID запроса только когда он передан', () => {
        render();
        expect(document.body.textContent).not.toContain('ID запроса');
        render({ requestErrorId: 'req-123' });
        expect(document.body.textContent).toContain('ID запроса');
        expect(document.body.textContent).toContain('req-123');
    });

    test('контакты и текст кнопки задаются пропами', () => {
        render({
            contacts: [{ label: 'help@example.com', href: 'mailto:help@example.com' }],
            closeButtonText: 'Ок',
        });
        const hrefs = Array.from(document.querySelectorAll('a')).map((a) => a.getAttribute('href'));
        expect(hrefs).toEqual(['mailto:help@example.com']);
        expect(document.body.textContent).toContain('Ок');
    });

    test('Escape и кнопка закрытия вызывают onClose', () => {
        const onClose = jest.fn();
        render({ onClose });
        act(() => {
            document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
        });
        expect(onClose).toHaveBeenCalledTimes(1);
        const closeButton = Array.from(document.querySelectorAll('button')).find(
            (button) => button.textContent === 'Закрыть',
        );
        act(() => closeButton?.click());
        expect(onClose).toHaveBeenCalledTimes(2);
    });

    test('закрытое окно ничего не рендерит и не блокирует скролл', () => {
        render({ isOpen: false });
        expect(document.querySelector('[role="dialog"]')).toBeNull();
        expect(document.body.style.overflow).toBe('');
    });
});
