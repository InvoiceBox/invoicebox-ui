import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from '.';
import { ThemeModeProvider, useThemeMode } from '../mode';
import darkPalette from '../palette/dark';
import lightPalette from '../palette/mapped';

const Page = () => {
    const { dark } = useThemeMode();
    const p = dark ? darkPalette : lightPalette;
    return (
        <div style={{ background: p.surface.bgPage, color: p.text.default, padding: 24, borderRadius: 16 }}>
            <ThemeSwitcher />
            <p>Основной текст</p>
            <p style={{ color: p.text.secondary }}>Вторичный текст</p>
            <p style={{ color: p.text.tertiary }}>Третичный текст</p>
            <p style={{ color: p.text.link }}>Ссылка</p>
        </div>
    );
};

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'theme/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
};

export default meta;
type TStory = StoryObj<typeof ThemeSwitcher>;

export const Default: TStory = {
    render: () => (
        <ThemeModeProvider storageKey="storybook-theme">
            <Page />
        </ThemeModeProvider>
    ),
};
