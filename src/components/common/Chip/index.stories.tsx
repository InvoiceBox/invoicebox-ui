import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TProps, Chip, TChipVariant, TChipType } from '.';

const meta: Meta<typeof Chip> = {
    title: 'common/Chip',
    component: Chip,
    tags: ['autodocs'],
};

export default meta;

// Старый путь — сырые цвета (обратная совместимость)
export const RawColors: StoryObj<TProps> = {
    args: {
        label: 'Название',
        color: '#FFFFFF',
        bgColor: '#2BAA5D',
    },
};

// Новый путь — семантика variant + type
export const Semantic: StoryObj<TProps> = {
    args: {
        label: 'Оплачен',
        variant: 'primary',
        type: 'soft',
    },
};

const VARIANTS: TChipVariant[] = ['primary', 'error', 'warning', 'info', 'default', 'individual', 'legal'];
const TYPES: TChipType[] = ['filled', 'soft', 'outlined'];

// Галерея: все семантические варианты × типы
export const Gallery: StoryObj = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {TYPES.map((type) => (
                <div key={type} style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ width: 72, color: '#9A9FA3', fontSize: 12 }}>{type}</span>
                    {VARIANTS.map((variant) => (
                        <Chip key={variant} label={variant} variant={variant} type={type} />
                    ))}
                </div>
            ))}
        </div>
    ),
};
