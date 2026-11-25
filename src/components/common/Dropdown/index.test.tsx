/**
 * @jest-environment jsdom
 */
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { Dropdown } from '.';

Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });

const rect = (top: number, height: number): DOMRect => ({
    x: 20,
    y: top,
    top,
    left: 20,
    width: 420,
    height,
    right: 440,
    bottom: top + height,
    toJSON: () => ({}),
});

test('перепривязывает открытый список при загрузке опций и сдвиге поля без изменения его размера', () => {
    const field = document.createElement('div');
    document.body.appendChild(field);
    const root = createRoot(field);
    const fieldHeight = 56;
    const gap = -1;
    let fieldTop = window.innerHeight - 240;
    let panelHeight = 100;
    jest.spyOn(field, 'getBoundingClientRect').mockImplementation(() => rect(fieldTop, fieldHeight));

    const setPanel = (panel: HTMLDivElement | null) => {
        if (panel) {
            jest.spyOn(panel, 'getBoundingClientRect').mockImplementation(() => rect(0, panelHeight));
        }
    };
    const render = (children: string) =>
        act(() => {
            root.render(
                <Dropdown ref={setPanel} isOpen isAutoPosition positionVertical={gap} width="100%">
                    {children}
                </Dropdown>,
            );
        });

    try {
        render('Загружаем роли…');
        const portal = document.querySelector<HTMLDivElement>('[data-invoicebox-dropdown]');
        const panel = portal?.firstElementChild;
        if (!portal || !(panel instanceof HTMLDivElement)) throw new Error('Портал списка не отрисован');
        expect(portal.style.top).toBe(`${fieldTop}px`);
        expect(panel.style.top).toBe('55px');

        panelHeight = 294;
        render('Список ролей');
        expect(panel.style.top).toBe('');
        expect(panel.style.bottom).toBe('55px');

        fieldTop -= 120;
        render('Список ролей');
        expect(portal.style.top).toBe(`${fieldTop}px`);
        expect(panel.style.bottom).toBe('');
        expect(panel.style.top).toBe('55px');
    } finally {
        act(() => root.unmount());
        field.remove();
    }
});
