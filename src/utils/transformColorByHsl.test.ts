import { transformColorByHsl } from './transformColorByHsl';

// Дифф, с которым функция используется в generateDrawerPalette
const drawerDiff = {
    hue: -3.3333333333333144,
    saturation: -0.07435090479937062,
    lightness: 0.08235294117647063,
};

const zeroDiff = { hue: 0, saturation: 0, lightness: 0 };

describe('transformColorByHsl', () => {
    // Ожидаемые значения сняты с прежней реализации на polished 4.3.1 —
    // тест фиксирует, что инлайн-математика даёт байт-в-байт тот же результат
    test('drawer backdrop от дефолтного primary', () => {
        expect(transformColorByHsl('#353F47', drawerDiff)).toBe('#202932');
    });

    test('нулевой дифф возвращает тот же цвет (включая сокращение hex)', () => {
        expect(transformColorByHsl('#FFFFFF', zeroDiff)).toBe('#fff');
        expect(transformColorByHsl('#EB5757', zeroDiff)).toBe('#eb5757');
    });

    test('3-значный hex поддерживается', () => {
        expect(transformColorByHsl('#ccc', drawerDiff)).toBe('#bcb2b2');
    });

    test('white с drawer-диффом', () => {
        expect(transformColorByHsl('#FFFFFF', drawerDiff)).toBe('#ece9e8');
    });

    test('lightness клампится в [0, 1]', () => {
        expect(transformColorByHsl('#353F47', { ...zeroDiff, lightness: 5 })).toBe('#000');
        expect(transformColorByHsl('#353F47', { ...zeroDiff, lightness: -5 })).toBe('#fff');
    });

    test('не-hex вход бросает ошибку', () => {
        expect(() => transformColorByHsl('rgb(53, 63, 71)', zeroDiff)).toThrow('transformColorByHsl');
    });
});
