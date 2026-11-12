import alias from './alias';
import light, { TColorPalette } from './mapped';

/**
 * Тёмная тема: не отдельная палитра, а замена токенов страницы (поверхности, текст, иконки, границы)
 * поверх светлой. Тёмные панели кода (`codePanel`, `syntax`) остаются прежними: они и в светлой теме
 * уже инвертированы. Часть поверхностей (`surface.legalEntity`, `surface.favourite*` и др.) пока
 * совпадает со светлыми.
 *
 * Контрасты на фоне страницы #14181C: основной текст 14.8:1, вторичный 8.1:1, третичный 5.6:1,
 * ссылка 6.4:1, текст статусов не ниже 6:1 и на #232A31.
 */

const bg = {
    page: '#14181C',
    surface: '#1B2026',
    raised: '#232A31',
    hover: '#2A323A',
};

const status = {
    success: '#5FC98A',
    warning: '#E9B36A',
    error: '#F08A8A',
    info: '#8AB4F8',
};

const dark: TColorPalette = {
    ...light,
    text: {
        ...light.text,
        default: '#E8ECEF',
        secondary: '#B4BCC4',
        tertiary: '#8D97A0',
        warning: status.warning,
        success: status.success,
        error: status.error,
        link: status.info,
        linkHover: '#A9C8FA',
        defaultInversed: alias.neutral.default,
        disabled: '#5C666F',
        onAccent: alias.neutral.default,
    },
    icons: {
        ...light.icons,
        default: '#E8ECEF',
        secondary: '#B4BCC4',
        tertiary: '#8D97A0',
    },
    surface: {
        ...light.surface,
        bgPage: bg.page,
        form: bg.surface,
        formsSecondary: bg.raised,
        default: bg.raised,
        input: bg.raised,
        textArea: bg.raised,
        buttonSecondary: bg.raised,
        buttonSecondaryHovered: bg.hover,
        buttonSecondaryPressed: bg.hover,
        buttonSecondaryFocused: bg.hover,
        buttonDisabled: bg.raised,
        black: bg.raised,
        blackTransparent: 'rgba(0, 0, 0, 0.45)',
        messageSuccess: 'rgba(43, 170, 93, 0.14)',
        messageWarning: 'rgba(229, 169, 80, 0.14)',
        messageError: 'rgba(235, 87, 87, 0.14)',
        // Чистый жёлтый под светлым текстом даёт 1.9:1, приглушённый — 4.3:1 и остаётся узнаваемо жёлтым
        accentMarker: '#7A6A2E',
        headerGlass: 'rgba(20, 24, 28, 0.92)',
        overlay: 'rgba(0, 0, 0, 0.6)',
        // Код и на тёмной странице чуть глубже фона — иначе панель сливается
        code: '#0F1317',
    },
    border: {
        ...light.border,
        default: '#39424B',
        hover: '#5A656F',
        disabled: '#2E363E',
        divider: '#2E363E',
        successStrong: status.success,
        warningStrong: status.warning,
        errorStrong: status.error,
    },
    /* На тёмном фоне текст бейджа светлеет до читаемого оттенка роли */
    badge: {
        ...light.badge,
        okText: status.success,
        warnText: status.warning,
        errText: status.error,
        infoText: status.info,
    },
    codePanel: {
        ...light.codePanel,
        bg: '#0F1317',
    },
    // Заливка бейджей методов на тёмном нужна плотнее, текст — светлее
    method: {
        get: { bg: 'rgba(101, 144, 253, 0.22)', text: '#9AB8FF' },
        post: { bg: 'rgba(43, 170, 93, 0.22)', text: '#6FD79A' },
        put: { bg: 'rgba(229, 169, 80, 0.22)', text: '#F0C070' },
        delete: { bg: 'rgba(235, 87, 87, 0.22)', text: '#FF9D9D' },
        patch: { bg: 'rgba(129, 90, 220, 0.22)', text: '#BFA5F5' },
    },
};

export default dark;
