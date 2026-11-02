/**
 * @jest-environment jsdom
 */
import React, { act, useState } from 'react';
import { createRoot, Root } from 'react-dom/client';
import userEvent from '@testing-library/user-event';
import { PhoneInput } from '.';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const VALID_PHONE = '79991234567';
const OTHER_PHONE = '79997654321';

let setExternalValue: (value: string) => void;
let lastFormValue: string;

// Аналог Controller из react-hook-form: значение хранится снаружи и может меняться без ввода
const ControlledPhone = ({ initialValue }: { initialValue: string }) => {
    const [value, setValue] = useState(initialValue);
    setExternalValue = setValue;
    lastFormValue = value;

    return <PhoneInput label="Телефон" value={value} onChange={setValue} />;
};

let container: HTMLDivElement;
let root: Root;

const render = (initialValue = '') => {
    act(() => root.render(<ControlledPhone initialValue={initialValue} />));
};

const input = () => container.querySelector('input') as HTMLInputElement;
const digits = () => input().value.replace(/\D/g, '');

beforeAll(() => {
    window.matchMedia = jest.fn().mockReturnValue({
        matches: false,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
    });
});

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
});

afterEach(() => {
    act(() => root.unmount());
    container.remove();
});

describe('PhoneInput: синхронизация с внешним value (BUG-037)', () => {
    test('начальное значение отображается', () => {
        render(VALID_PHONE);
        expect(digits()).toBe(VALID_PHONE);
        expect(lastFormValue).toBe(VALID_PHONE);
    });

    test('значение, выставленное после монтирования (reset/setValue), отображается', () => {
        render('');
        act(() => setExternalValue(VALID_PHONE));
        expect(digits()).toBe(VALID_PHONE);
        expect(lastFormValue).toBe(VALID_PHONE);
    });

    test('смена одного номера на другой снаружи', () => {
        render(VALID_PHONE);
        act(() => setExternalValue(OTHER_PHONE));
        expect(digits()).toBe(OTHER_PHONE);
    });

    test('очистка снаружи очищает поле', () => {
        render(VALID_PHONE);
        act(() => setExternalValue(''));
        expect(input().value).toBe('');
    });

    test('недописанный номер не стирается, хотя в форму уходит пустая строка', async () => {
        render('');
        const user = userEvent.setup();
        await act(async () => {
            await user.type(input(), '7999');
        });
        expect(lastFormValue).toBe('');
        expect(digits()).toBe('7999');

        await act(async () => {
            await user.type(input(), '1234567');
        });
        expect(lastFormValue).toBe(VALID_PHONE);
        expect(digits()).toBe(VALID_PHONE);
    });
});
