import darkPalette from './palette/dark';
import lightPalette from './palette/mapped';
import { TColorPalette } from './types';

type TRgb = [number, number, number];

const parse = (color: string): { rgb: TRgb; alpha: number } => {
    const hex = color.match(/^#([0-9a-f]{6})$/i);
    if (hex?.[1]) {
        const n = parseInt(hex[1], 16);
        return { rgb: [(n >> 16) & 255, (n >> 8) & 255, n & 255], alpha: 1 };
    }
    const rgba = color.match(/^rgba?\(([^)]+)\)$/);
    if (!rgba?.[1]) throw new Error(`не цвет: ${color}`);
    const [r = 0, g = 0, b = 0, a = 1] = rgba[1].split(',').map(Number);
    return { rgb: [r, g, b], alpha: a };
};

/** Полупрозрачный цвет поверх непрозрачного фона. */
const over = (top: string, bottom: string): string => {
    const t = parse(top);
    const b = parse(bottom);
    const mix = t.rgb.map((c, i) => Math.round(c * t.alpha + (b.rgb[i] ?? 0) * (1 - t.alpha)));
    return `#${mix.map((c) => c.toString(16).padStart(2, '0')).join('')}`;
};

const luminance = (color: string) => {
    const [r = 0, g = 0, b = 0] = parse(color).rgb.map((v) => {
        const c = v / 255;
        return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrast = (a: string, b: string) => {
    const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return ((hi ?? 0) + 0.05) / ((lo ?? 0) + 0.05);
};

const themes: [string, TColorPalette][] = [
    ['светлая', lightPalette],
    ['тёмная', darkPalette],
];

describe.each(themes)('%s тема', (_, p) => {
    const pages = [p.surface.bgPage, p.surface.form, p.surface.formsSecondary];
    const text = [
        'default',
        'secondary',
        'tertiary',
        'warning',
        'success',
        'error',
        'link',
        'linkHover',
    ] as const;

    it.each(text)('text.%s не ниже 4.5:1 на фоне страницы и карточек', (key) => {
        pages.forEach((bg) => expect(contrast(p.text[key], bg)).toBeGreaterThanOrEqual(4.5));
    });

    it('текст бейджей читается на своей подложке', () => {
        const pairs: [string, string][] = [
            [p.badge.okText, p.badge.okBg],
            [p.badge.warnText, p.badge.warnBg],
            [p.badge.errText, p.badge.errBg],
            [p.badge.infoText, p.badge.infoBg],
        ];
        pairs.forEach(([fg, bg]) =>
            expect(contrast(fg, over(bg, p.surface.form))).toBeGreaterThanOrEqual(4.5),
        );
    });

    it('текст на жёлтой заливке и на панели кода читается', () => {
        expect(contrast(p.text.onAccent, p.surface.accent)).toBeGreaterThanOrEqual(4.5);
        expect(contrast(p.codePanel.text, p.codePanel.bg)).toBeGreaterThanOrEqual(4.5);
        expect(contrast(p.syntax.comment, p.codePanel.bg)).toBeGreaterThanOrEqual(4.5);
    });
});

describe('тёмная тема', () => {
    const keys = (o: object, prefix = ''): string[] =>
        Object.entries(o).flatMap(([k, v]) =>
            v && typeof v === 'object' ? keys(v, `${prefix}${k}.`) : `${prefix}${k}`,
        );

    it('содержит ровно те же токены, что светлая', () => {
        expect(keys(darkPalette).sort()).toEqual(keys(lightPalette).sort());
    });
});
