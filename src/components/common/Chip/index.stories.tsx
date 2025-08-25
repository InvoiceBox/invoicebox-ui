import type { Meta, StoryObj } from '@storybook/react';
import { TProps, Chip } from '.';

const meta: Meta<typeof Chip> = {
    title: 'common/Chip',
    component: Chip,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        label: 'Название',
        color: 'blue',
        bgColor: 'red',
    },
};
