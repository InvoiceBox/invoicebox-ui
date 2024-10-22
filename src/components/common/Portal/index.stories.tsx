import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Portal, TProps } from '.';

const meta = {
    title: 'common/Portal',
    component: Portal,
    tags: ['autodocs'],
} satisfies Meta<typeof Portal>;

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        children: <div style={{ position: 'absolute', left: '30px', top: '30px' }}>Content inner portal</div>,
    },
};
