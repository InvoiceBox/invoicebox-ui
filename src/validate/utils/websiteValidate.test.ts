import { Validate, WEBSITE_WRONG_MESSAGE } from '../index';

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

        expect(validateAllFunc('https://www')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateAllFunc('www')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateAllFunc('.com')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateAllFunc('дом')).toBe(WEBSITE_WRONG_MESSAGE);
    });

    const validateHttpsFunc = (value: string) => Validate.website(value, (result: string) => result, true);
    test('validate web sites only https variants', () => {
        expect(validateHttpsFunc('https://abc.com')).toBe(true);
        expect(validateHttpsFunc('https://www.abc.com')).toBe(true);
        expect(validateHttpsFunc('https://дом.рф')).toBe(true);

        expect(validateHttpsFunc('дом.рф')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('http://www.abc.com')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('abc.com')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('http://abc.com')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://www')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('www')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('.com')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('дом')).toBe(WEBSITE_WRONG_MESSAGE);
    });
});
