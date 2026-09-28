import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { CountrySelect } from '.';
import { PhoneInput } from '../PhoneInput';

const options = [
    { label: 'Россия', value: 'RUS', description: '+7', flag: 'RUS' as const },
    { label: 'Казахстан', value: 'KAZ', description: '+7', flag: 'KAZ' as const },
];

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

const renderButton = (markup: string) => {
    const match = markup.match(/<button[^>]*aria-haspopup[^>]*>/);
    if (!match) throw new Error(`Кнопка выбора страны не найдена: ${markup}`);
    return match[0];
};

describe('CountrySelect: доступное имя и состояние кнопки (A11Y-12)', () => {
    test('имя по умолчанию — «Код страны: <страна>», свёрнут, раскрывает listbox', () => {
        const button = renderButton(
            renderToStaticMarkup(
                <CountrySelect value="KAZ" onChange={noop} options={options} selectedLabel="" />,
            ),
        );
        expect(button).toContain('aria-label="Код страны: Казахстан"');
        expect(button).toContain('aria-haspopup="listbox"');
        expect(button).toContain('aria-expanded="false"');
        expect(button).not.toContain('aria-controls');
    });

    test('префикс имени задаётся пропом buttonAriaLabelPrefix', () => {
        const button = renderButton(
            renderToStaticMarkup(
                <CountrySelect
                    value="RUS"
                    onChange={noop}
                    options={options}
                    selectedLabel=""
                    buttonAriaLabelPrefix="Country code"
                />,
            ),
        );
        expect(button).toContain('aria-label="Country code: Россия"');
    });

    test('PhoneInput пробрасывает buttonAriaLabelPrefix из countrySelectProps', () => {
        const button = renderButton(
            renderToStaticMarkup(
                <PhoneInput
                    label="Телефон"
                    value=""
                    onChange={noop}
                    countries={[
                        { label: 'Russia', value: 'RUS' },
                        { label: 'Belarus', value: 'BLR' },
                    ]}
                    countrySelectProps={{
                        selectedLabel: '',
                        placeholder: '',
                        buttonAriaLabelPrefix: 'Country code',
                    }}
                />,
            ),
        );
        expect(button).toContain('aria-label="Country code: Russia"');
    });
});
