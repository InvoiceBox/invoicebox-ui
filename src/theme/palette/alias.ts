import primitives from './primitives';

/**
 * Алиасы — зеркало коллекции «Alies» из Figma (IUI Web).
 * Семантические роли, ссылающиеся на примитивы. Изменение роли (например,
 * primary с жёлтого на другой цвет) делается здесь и применяется везде автоматически.
 */
export default {
    primary: {
        550: primitives.yellow[550],
        600: primitives.yellow[600],
        default: primitives.yellow.default,
    },
    success: {
        10: primitives.green[10],
        15: primitives.green[15],
        20: primitives.green[20],
        400: primitives.green[400],
        550: primitives.green[550],
        600: primitives.green[600],
        650: primitives.green[650],
        700: primitives.green[700],
        default: primitives.green.default,
        transparentLight: primitives.green.transparentLight,
    },
    warning: {
        10: primitives.orange[10],
        20: primitives.orange[20],
        550: primitives.orange[550],
        600: primitives.orange[600],
        650: primitives.orange[650],
        700: primitives.orange[700],
        default: primitives.orange.default,
        legacy: primitives.orange.legacy,
        transparentLight: primitives.orange.transparentLight,
    },
    error: {
        10: primitives.red[10],
        20: primitives.red[20],
        550: primitives.red[550],
        600: primitives.red[600],
        650: primitives.red[650],
        700: primitives.red[700],
        default: primitives.red.default,
        transparentLight: primitives.red.transparentLight,
    },
    info: {
        550: primitives.blue[550],
        600: primitives.blue[600],
        700: primitives.blue[700],
        750: primitives.blue[750],
        800: primitives.blue[800],
        default: primitives.blue.default,
        transparentLight: primitives.blue.transparentLight,
    },
    neutral: {
        10: primitives.grey[10],
        100: primitives.grey[100],
        200: primitives.grey[200],
        300: primitives.grey[300],
        400: primitives.grey[400],
        500: primitives.grey[500],
        600: primitives.grey[600],
        700: primitives.grey[700],
        800: primitives.grey[800],
        900: primitives.grey[900],
        1000: primitives.grey[1000],
        default: primitives.grey.default,
        white: primitives.foundation.white,
        black: primitives.foundation.black,
        transparentLightest: primitives.grey.transparentLightest,
        transparentDarkBg: primitives.grey.transparentDarkBg,
        transparentLightBg: primitives.grey.transparentLightBg,
    },
    favourite: {
        default: primitives.red[900],
        defaultInversed: primitives.red[800],
    },
    legalEntity: {
        default: primitives.tealBlue.default,
        transparentLight: primitives.tealBlue.transparentLight,
    },
    individual: {
        default: primitives.purple.default,
        transparentLight: primitives.purple.transparentLight,
    },
} as const;
