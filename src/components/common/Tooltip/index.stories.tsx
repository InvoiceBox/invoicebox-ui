import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TProps } from '.';

const meta: Meta<typeof Tooltip> = {
    title: 'common/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps) => (
    <div style={{ padding: 80, display: 'flex', justifyContent: 'center' }}>
        <Tooltip {...props}>
            <span style={{ border: '1px dashed #999', padding: 8 }}>Наведи на меня</span>
        </Tooltip>
    </div>
);

export const Top: StoryObj<TProps> = {
    args: { overlay: 'Подсказка сверху', placement: 'top' },
    render: Component,
};

export const Bottom: StoryObj<TProps> = {
    args: { overlay: 'Подсказка снизу', placement: 'bottom' },
    render: Component,
};
