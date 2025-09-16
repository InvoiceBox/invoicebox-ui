import { Validate } from '../index';

describe('Website validate', () => {
    const validateAllFunc = (value: string) => Validate.website(value, (result: string) => result);

    test('validate web sites all variants', () => {
        expect(validateAllFunc('abc.com')).toBe(true);
        expect(validateAllFunc('http://abc.com')).toBe(true);
        expect(validateAllFunc('https://abc.com')).toBe(true);
        expect(validateAllFunc('http://www.abc.com')).toBe(true);
        expect(validateAllFunc('https://www.abc.com')).toBe(true);
        expect(validateAllFunc('https://дом.рф')).toBe(true);
        expect(validateAllFunc('дом.рф')).toBe(true);

        expect(validateAllFunc('https://www')).toBe('Некорректный адрес');
        expect(validateAllFunc('www')).toBe('Некорректный адрес');
        expect(validateAllFunc('.com')).toBe('Некорректный адрес');
        expect(validateAllFunc('дом')).toBe('Некорректный адрес');
    });

    const validateHttpsFunc = (value: string) => Validate.website(value, (result: string) => result, true);
    test('validate web sites only https variants', () => {
        expect(validateHttpsFunc('https://abc.com')).toBe(true);
        expect(validateHttpsFunc('https://www.abc.com')).toBe(true);
        expect(validateHttpsFunc('https://дом.рф')).toBe(true);

        expect(validateHttpsFunc('дом.рф')).toBe('Некорректный адрес');
        expect(validateHttpsFunc('http://www.abc.com')).toBe('Некорректный адрес');
        expect(validateHttpsFunc('abc.com')).toBe('Некорректный адрес');
        expect(validateHttpsFunc('http://abc.com')).toBe('Некорректный адрес');
        expect(validateHttpsFunc('https://www')).toBe('Некорректный адрес');
        expect(validateHttpsFunc('www')).toBe('Некорректный адрес');
        expect(validateHttpsFunc('.com')).toBe('Некорректный адрес');
        expect(validateHttpsFunc('дом')).toBe('Некорректный адрес');
    });
});
