import React, { FC, ReactElement } from 'react';
import darkPalette from '../palette/dark';
import lightPalette from '../palette/mapped';
import { TThemeMode, useThemeMode } from '../mode';
import * as S from './styles';

export type TThemeSwitcherLabels = Record<TThemeMode | 'group', string>;

const DEFAULT_LABELS: TThemeSwitcherLabels = {
    group: 'Тема',
    system: 'Как в системе',
    light: 'Светлая',
    dark: 'Тёмная',
};

const ICON_PROPS = {
    width: 15,
    height: 15,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
} as const;

const ICONS: Record<TThemeMode, ReactElement> = {
    system: (
        <svg {...ICON_PROPS}>
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
        </svg>
    ),
    light: (
        <svg {...ICON_PROPS}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
    ),
    dark: (
        <svg {...ICON_PROPS}>
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    ),
};

const MODES: TThemeMode[] = ['system', 'light', 'dark'];

export type TProps = {
    labels?: Partial<TThemeSwitcherLabels>;
    className?: string;
};

/** Переключатель режима темы. Работает внутри `ThemeModeProvider`, цвета берёт из палитры текущей темы. */
export const ThemeSwitcher: FC<TProps> = ({ labels, className }) => {
    const { mode, setMode, dark } = useThemeMode();
    const palette = dark ? darkPalette : lightPalette;
    const text = { ...DEFAULT_LABELS, ...labels };

    return (
        <S.Group role="group" aria-label={text.group} className={className} $palette={palette}>
            {MODES.map((m) => (
                <S.Button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    aria-pressed={mode === m}
                    aria-label={text[m]}
                    title={text[m]}
                    $palette={palette}
                >
                    {ICONS[m]}
                </S.Button>
            ))}
        </S.Group>
    );
};
