import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { PositiveIntegerInput, TProps } from '.';

const noop = jest.fn();

const render = (props: Partial<TProps> = {}) =>
    renderToStaticMarkup(
        <PositiveIntegerInput
            id="count"
            label="Кол-во"
            value={2}
            onChange={noop}
            max={5}
            upAndDown
            {...props}
        />,
    );

const buttons = (markup: string) => markup.match(/<button[^>]*>/g) ?? [];
const input = (markup: string) => markup.match(/<input[^>]*>/)?.[0] ?? '';

describe('PositiveIntegerInput: стрелки «вверх/вниз» (A11Y-16)', () => {
    test('стрелки — кнопки с именами вне порядка Tab', () => {
        const [up, down] = buttons(render());
        expect(up).toContain('type="button"');
        expect(up).toContain('tabindex="-1"');
        expect(up).toContain('aria-label="Увеличить"');
        expect(up).toContain('aria-controls="count"');
        expect(up).not.toContain('disabled');
        expect(down).toContain('aria-label="Уменьшить"');
        expect(down).not.toContain('disabled');
    });

    test('имена кнопок задаются пропами', () => {
        const [up, down] = buttons(
            render({
                incrementButtonAriaLabel: 'Увеличить количество',
                decrementButtonAriaLabel: 'Уменьшить количество',
            }),
        );
        expect(up).toContain('aria-label="Увеличить количество"');
        expect(down).toContain('aria-label="Уменьшить количество"');
    });

    test('на границах недоступна соответствующая кнопка', () => {
        expect(buttons(render({ value: 5 }))[0]).toContain('disabled');
        expect(buttons(render({ value: 0 }))[1]).toContain('disabled');
    });

    test('disabled блокирует поле и обе кнопки', () => {
        const markup = render({ disabled: true });
        expect(input(markup)).toContain('disabled');
        buttons(markup).forEach((button) => expect(button).toContain('disabled'));
    });

    test('цифровая клавиатура на телефоне', () => {
        const field = input(render());
        expect(field).toContain('inputMode="numeric"');
        expect(field).toContain('pattern="[0-9]*"');
    });
});
