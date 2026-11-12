/**
 * Примитивы цветов — зеркало коллекции «Инвойсбокс (primitives)» из Figma (IUI Web).
 * Ступени 700/800 — текст статусов, который проходит WCAG AA и на белом, и на светлой подложке
 * своего цвета.
 * Не использовать в компонентах напрямую — только через alias/mapped уровни.
 */
export default {
    yellow: {
        550: '#EDC743',
        600: '#E1BD40',
        default: '#FAD247',
    },
    grey: {
        10: '#F6F6FA',
        100: '#F8F8FA',
        200: '#F1F2F6',
        300: '#EAEBEF',
        400: '#D7D9DA',
        500: '#C3C6C8',
        600: '#AEB2B5',
        700: '#9A9FA3',
        800: '#868C91',
        900: '#72777B',
        1000: '#202932',
        default: '#353F47',
        transparentLightest: 'rgba(53, 63, 71, 0.08)',
        transparentDarkBg: 'rgba(53, 63, 71, 0.4)',
        transparentLightBg: 'rgba(255, 255, 255, 0.6)',
    },
    green: {
        10: '#EEF9F2',
        15: '#ECFDF2',
        20: '#D5EEDF',
        400: '#59CF83',
        550: '#29A158',
        600: '#279954',
        650: '#25904F',
        // AA на белом (5.15) и на green/10 (4.53)
        700: '#207E45',
        default: '#2BAA5D',
        transparentLight: 'rgba(43, 170, 93, 0.12)',
    },
    red: {
        10: '#FEF2F2',
        20: '#FBDDDD',
        550: '#DF5353',
        600: '#D34E4E',
        650: '#C84A4A',
        // AA на белом (5.56) и на red/10 (4.51)
        700: '#B54343',
        800: '#CF3E3E',
        900: '#C82F2F',
        default: '#EB5757',
        transparentLight: 'rgba(235, 87, 87, 0.16)',
    },
    orange: {
        10: '#FFFAF2',
        20: '#FFF2DE',
        550: '#F1B355',
        600: '#E5A950',
        650: '#D8A04C',
        // AA на белом (4.98) и на orange/10 (4.58)
        700: '#8E6932',
        default: '#8E6932',
        /** Прежний default (#FEBC59) — сохранён для alias.warning.legacy (surface.warning), чтобы не менять текущие экраны. */
        legacy: '#FEBC59',
        transparentLight: 'rgba(254, 188, 89, 0.16)',
    },
    blue: {
        550: '#6089F0',
        600: '#5B82E4',
        700: '#5173CA',
        750: '#4C6CBE',
        // AA на белом (5.33) и на светлой синей подложке (4.55)
        800: '#4968B6',
        default: '#6590FD',
        transparentLight: 'rgba(101, 144, 253, 0.16)',
    },
    tealBlue: {
        default: '#006C9C',
        transparentLight: 'rgba(0, 184, 217, 0.16)',
    },
    purple: {
        default: '#5119B7',
        transparentLight: 'rgba(81, 25, 183, 0.16)',
    },
    foundation: {
        white: '#FFFFFF',
        black: '#000000',
    },
} as const;
