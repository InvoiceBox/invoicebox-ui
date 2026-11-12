import alias from './alias';

/**
 * Mapped-токены — зеркало коллекции «Mapped» из Figma (IUI Web).
 * Токены назначения (текст, иконки, поверхности, бордеры) — именно их использовать в компонентах:
 * theme.palette.text.secondary и т.д.
 *
 * - Текст проходит WCAG AA на белом и на фоне страницы #F6F6FA: secondary, tertiary, link
 *   затемнены, warning/success/error и текст бейджей — ступень 700.
 * - border.*Strong — рамка в цвет текста статуса.
 * - text.onAccent, surface.accentMarker/code/codeHeader/headerGlass/overlay, badge, codePanel, syntax,
 *   method — токены для страниц документации: статьи, блоки кода, справочник API. В Figma их нет.
 */
const mapped = {
    text: {
        default: alias.neutral.default,
        // 6.86:1 на белом, 6.36:1 на #F6F6FA (neutral[900] давал 4.5:1 только на белом)
        secondary: '#565B60',
        // 5.38:1 на белом, 4.99:1 на #F6F6FA (neutral[700] давал 2.67:1)
        tertiary: '#666B70',
        warning: alias.warning[700],
        success: alias.success[700],
        error: alias.error[700],
        // info[750] — 4.64:1 на фоне страницы (info[700] давал 4.19:1), наведение на ступень темнее
        link: alias.info[750],
        linkHover: alias.info[800],
        defaultInversed: alias.neutral.white,
        disabled: alias.neutral[500],
        /* Текст на фирменной жёлтой заливке — тёмный в обеих темах */
        onAccent: alias.neutral.default,
    },
    icons: {
        primary: alias.primary.default,
        default: alias.neutral.default,
        secondary: alias.neutral[700],
        tertiary: alias.neutral[500],
        error: alias.error[600],
        warning: alias.warning[600],
        success: alias.success[600],
        link: alias.info.default,
        linkHover: alias.info[550],
        defaultInversed: alias.neutral.white,
        disabled: alias.neutral[500],
    },
    surface: {
        bgPage: alias.neutral[10],
        form: alias.neutral.white,
        formsSecondary: alias.neutral[100],
        accent: alias.primary.default,
        /* Жёлтый маркер под текстом: на светлой странице это фирменный жёлтый, в тёмной теме приглушён */
        accentMarker: alias.primary.default,
        default: alias.neutral[200],
        input: alias.neutral[100],
        textArea: alias.neutral[100],
        buttonPrimary: alias.primary.default,
        buttonPrimaryHovered: alias.primary[550],
        buttonPrimaryPressed: alias.primary[600],
        buttonPrimaryFocused: alias.primary[550],
        buttonSecondary: alias.neutral[200],
        buttonSecondaryHovered: alias.neutral[300],
        buttonSecondaryPressed: alias.neutral[400],
        buttonSecondaryFocused: alias.neutral[300],
        buttonDisabled: alias.neutral[200],
        success: alias.success.default,
        warning: alias.warning.legacy,
        error: alias.error.default,
        info: alias.info.default,
        black: alias.neutral.default,
        blackTransparent: alias.neutral.transparentLightest,
        successTransparent: alias.success.transparentLight,
        warningTransparent: alias.warning.transparentLight,
        errorTransparent: alias.error.transparentLight,
        infoTransparent: alias.info.transparentLight,
        legalEntity: alias.legalEntity.default,
        legalEntityTransparent: alias.legalEntity.transparentLight,
        individual: alias.individual.default,
        individualTransparent: alias.individual.transparentLight,
        favouriteLight: alias.favourite.default,
        favouriteDark: alias.favourite.defaultInversed,
        favouriteDarkBg: alias.neutral.transparentDarkBg,
        favouriteLightBg: alias.neutral.transparentLightBg,
        listItemMail: alias.success[15],
        messageSuccess: alias.success[10],
        messageWarning: alias.warning[10],
        messageError: alias.error[10],
        /* Блок кода — тёмная панель в обеих темах */
        code: alias.neutral[1000],
        codeHeader: 'rgba(255, 255, 255, 0.07)',
        /* Стеклянная шапка: полупрозрачный белый поверх содержимого страницы */
        headerGlass: 'rgba(255, 255, 255, 0.92)',
        /* Затемнение под модальными окнами и поиском */
        overlay: 'rgba(32, 41, 50, 0.45)',
    },
    border: {
        default: alias.neutral[500],
        hover: alias.neutral[700],
        disabled: alias.neutral[300],
        active: alias.primary.default,
        success: alias.success[20],
        warning: alias.warning[20],
        error: alias.error[20],
        successStrong: alias.success[700],
        warningStrong: alias.warning[700],
        errorStrong: alias.error[700],
        divider: alias.neutral[300],
    },
    /* Бейджи статусов в статьях: фон полупрозрачный, текст — ступень AA своего цвета */
    badge: {
        okBg: alias.success.transparentLight,
        okText: alias.success[700],
        warnBg: alias.warning.transparentLight,
        warnText: alias.warning[700],
        errBg: alias.error.transparentLight,
        errText: alias.error[700],
        infoBg: alias.info.transparentLight,
        infoText: alias.info[800],
    },
    /**
     * Тёмные панели: блоки кода, консоль запросов, примеры. Живут в своей, инвертированной, среде:
     * при переключении темы меняется страница вокруг, а сами панели остаются прежними.
     */
    codePanel: {
        bg: alias.neutral[1000],
        text: '#DCE3E8',
        muted: '#9AA6AF',
        header: 'rgba(255, 255, 255, 0.07)',
        subtle: 'rgba(255, 255, 255, 0.05)',
        border: 'rgba(255, 255, 255, 0.14)',
        borderStrong: 'rgba(255, 255, 255, 0.18)',
        divider: 'rgba(255, 255, 255, 0.1)',
        error: '#FF9D9D',
        onDark: alias.neutral.white,
        /* Бейдж «демо» и подсветка активного языка примера на тёмной панели */
        badgeBg: 'rgba(101, 144, 253, 0.2)',
        badgeText: '#9AB8FF',
        tabActive: 'rgba(255, 255, 255, 0.08)',
        inputBorder: 'rgba(255, 255, 255, 0.12)',
        /* Статус ответа консоли: успех и ошибка на тёмном */
        okBg: 'rgba(43, 170, 93, 0.18)',
        okText: '#6FD79A',
        errBg: 'rgba(235, 87, 87, 0.18)',
    },
    /** Подсветка синтаксиса на тёмной панели; контраст комментария 5.51:1 (WCAG AA) */
    syntax: {
        keyword: '#8AB4F8',
        string: '#A8D5A2',
        number: '#F2C464',
        comment: '#93A0AA',
        attr: '#E8927C',
        literal: '#F2C464',
        selection: '#202932',
        gutter: '#6F7B85',
    },
    /* HTTP-методы на справочных страницах API: заливка 12–16% и цветной текст */
    method: {
        get: { bg: alias.info.transparentLight, text: '#3D6BE8' },
        post: { bg: alias.success.transparentLight, text: '#1F8A4A' },
        put: { bg: alias.warning.transparentLight, text: '#C77E14' },
        delete: { bg: alias.error.transparentLight, text: alias.error.default },
        patch: { bg: alias.individual.transparentLight, text: alias.individual.default },
    },
};

/**
 * Литеральные типы цветов ('#353F47') мешают второй теме: тёмная палитра с теми же ключами
 * под тип светлой уже не подходит. Расширяем до string.
 */
type TWiden<T> = T extends string ? string : { [K in keyof T]: TWiden<T[K]> };

export type TColorPalette = TWiden<typeof mapped>;

export default mapped as TColorPalette;
