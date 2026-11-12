import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import darkPalette from './palette/dark';
import lightPalette from './palette/mapped';

const meta: Meta = {
    title: 'theme/Palette',
};

export default meta;

const flat = (o: object, prefix = ''): [string, string][] =>
    Object.entries(o).flatMap(([k, v]): [string, string][] =>
        v && typeof v === 'object' ? flat(v, `${prefix}${k}.`) : [[`${prefix}${k}`, String(v)]],
    );

const Column = ({ title, palette }: { title: string; palette: typeof lightPalette }) => (
    <div style={{ background: palette.surface.bgPage, color: palette.text.default, padding: 16, flex: 1 }}>
        <h3>{title}</h3>
        {flat(palette).map(([key, value]) => (
            <div
                key={key}
                style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, marginBottom: 6 }}
            >
                <span
                    style={{
                        width: 28,
                        height: 20,
                        background: value,
                        border: '1px solid rgba(128,128,128,.3)',
                    }}
                />
                <code>{key}</code>
                <span style={{ color: palette.text.tertiary }}>{value}</span>
            </div>
        ))}
    </div>
);

export const Mapped: StoryObj = {
    render: () => (
        <div style={{ display: 'flex' }}>
            <Column title="Светлая" palette={lightPalette} />
            <Column title="Тёмная" palette={darkPalette} />
        </div>
    ),
};
