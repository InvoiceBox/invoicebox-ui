import { cleanValue } from 'react-currency-input-field';
import { normalizeDecimalSeparator } from './normalizeDecimalSeparator';

// Те же опции, что CoreCurrencyInput передаёт в библиотеку
const clean = (value: string) =>
    cleanValue({
        value,
        decimalSeparator: ',',
        groupSeparator: ' ',
        decimalsLimit: 2,
        allowDecimals: true,
        allowNegativeValue: true,
        disableAbbreviations: true,
        transformRawValue: normalizeDecimalSeparator,
    });

describe('normalizeDecimalSeparator: точка как десятичный разделитель (BUG-036)', () => {
    test.each([
        ['1500.50', '1500,50'],
        ['1.5', '1,5'],
        ['1 500.50', '1500,50'],
        ['0.99', '0,99'],
        ['-1.5', '-1,5'],
        ['1500.505', '1500,50'],
        ['1,500.50', '1500,50'],
        ['1,500,000.5', '1500000,5'],
        ['1.500.000', '1500000'],
    ])('вставка «%s» → %s', (input, expected) => {
        expect(clean(input)).toBe(expected);
    });

    test('набор точки после целой части даёт десятичный разделитель', () => {
        expect(clean('1 500.')).toBe('1500,');
    });

    test('значения без точки не меняются', () => {
        expect(clean('1 500,50')).toBe('1500,50');
        expect(clean('1500')).toBe('1500');
        expect(normalizeDecimalSeparator('')).toBe('');
    });

    test('если дробная часть уже есть, повторная точка игнорируется', () => {
        expect(clean('1 500,5.')).toBe('1500,5');
    });
});
