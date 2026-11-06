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
        expect(validateAllFunc('http://abc.com/anyhere')).toBe(true);
        expect(validateAllFunc('http://abc.com/anyhere/anyhere')).toBe(true);
        expect(validateAllFunc('https://abc.com/anyhere/anyhere?any')).toBe(true);

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
        expect(validateAllFunc('https://abc.com/anyhere')).toBe(true);
        expect(validateAllFunc('https://abc.com/anyhere/anyhere')).toBe(true);
        expect(validateAllFunc('https://abc.com/anyhere/anyhere?any')).toBe(true);

        expect(validateHttpsFunc('дом.рф')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('http://www.abc.com')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('abc.com')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('http://abc.com')).toBe(WEBSITE_WRONG_MESSAGE);
        // expect(validateHttpsFunc('https://www')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('www')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('.com')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('дом')).toBe(WEBSITE_WRONG_MESSAGE);
    });

    test('validate web sites with digits in domain', () => {
        expect(validateHttpsFunc('https://price.24promo.ru/')).toBe(true);
        expect(validateHttpsFunc('https://24promo.ru/')).toBe(true);
        expect(validateHttpsFunc('https://shop1.example.ru/')).toBe(true);
        expect(validateHttpsFunc('https://shop.my-store.ru/')).toBe(true);
        expect(validateHttpsFunc('https://example.ru/')).toBe(true);
        expect(validateAllFunc('24promo.ru')).toBe(true);
        expect(validateAllFunc('http://price.24promo.ru/')).toBe(true);

        expect(validateHttpsFunc('24promo.ru')).toBe(WEBSITE_WRONG_MESSAGE);
    });

    test('validate web sites with digits in top level domain', () => {
        expect(validateAllFunc('1.2.3.4')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateAllFunc('http://1.2.3.4')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateAllFunc('127.0.0.1:8080')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://1.2.3.4')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://1.2.3.4/')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://example.24')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://1.2.3.ab4')).toBe(WEBSITE_WRONG_MESSAGE);
    });

    test('validate web sites with punycode top level domain', () => {
        expect(validateHttpsFunc('https://xn--80ak6aa92e.xn--p1ai')).toBe(true);
        expect(validateAllFunc('xn--80ak6aa92e.xn--p1ai')).toBe(true);

        expect(validateHttpsFunc('https://example.xn--')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://example.xn---')).toBe(WEBSITE_WRONG_MESSAGE);
    });

    test('validate web sites with path, query and fragment', () => {
        expect(validateHttpsFunc('https://example.ru/page.html')).toBe(true);
        expect(validateHttpsFunc('https://example.ru/путь')).toBe(true);
        expect(validateHttpsFunc('https://example.ru/a%20b')).toBe(true);
        expect(validateHttpsFunc('https://example.ru/a,b')).toBe(true);
        expect(validateHttpsFunc('https://example.ru/a+b')).toBe(true);
        expect(validateHttpsFunc('https://example.ru/a:b')).toBe(true);
        expect(validateHttpsFunc('https://example.ru/a=b;c')).toBe(true);
        expect(validateHttpsFunc('https://example.ru/a@b')).toBe(true);
        expect(validateHttpsFunc('https://example.ru/a(b)')).toBe(true);
        expect(validateHttpsFunc('https://example.ru:8443/a')).toBe(true);
        expect(validateHttpsFunc('https://example.ru?b=c')).toBe(true);
        expect(validateHttpsFunc('https://example.ru#d')).toBe(true);
        expect(validateHttpsFunc('https://example.ru/a?b=c&d=e#f')).toBe(true);
    });

    test('validate web sites with garbage after domain', () => {
        expect(validateHttpsFunc('https://example.ru!!!')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://example.ru мусор')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://example.ru"><script>alert(1)</script>')).toBe(
            WEBSITE_WRONG_MESSAGE,
        );
        expect(validateHttpsFunc('https://example.ru,https://other.ru')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://example.ru.')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://example.ru…')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://example.ru—мусор')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateAllFunc('example.ru!!!')).toBe(WEBSITE_WRONG_MESSAGE);
    });

    test('validate web sites with forbidden chars after domain', () => {
        expect(validateHttpsFunc('https://example.ru/"><script>alert(1)</script>')).toBe(
            WEBSITE_WRONG_MESSAGE,
        );
        expect(validateHttpsFunc('https://example.ru/?"><script>alert(1)</script>')).toBe(
            WEBSITE_WRONG_MESSAGE,
        );
        expect(validateHttpsFunc('https://example.ru/#"><script>alert(1)</script>')).toBe(
            WEBSITE_WRONG_MESSAGE,
        );
        expect(validateHttpsFunc('https://example.ru/a`b')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://example.ru/a b')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://example.ru/?q=a b')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://example.ru/#a b')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://example.ru ')).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc('https://example.ru\n')).toBe(WEBSITE_WRONG_MESSAGE);
    });

    test('validate web sites without exponential backtracking', () => {
        const startedAt = Date.now();

        expect(validateHttpsFunc(`https://example.ru${'/'.repeat(5000)}"`)).toBe(WEBSITE_WRONG_MESSAGE);
        expect(validateHttpsFunc(`https://${'a.'.repeat(5000)}!`)).toBe(WEBSITE_WRONG_MESSAGE);

        expect(Date.now() - startedAt).toBeLessThan(1000);
    });
});
