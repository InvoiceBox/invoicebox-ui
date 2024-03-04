import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '.';

const meta = {
    title: 'common/Typography',
    component: Typography,
    tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;

export const Default: StoryObj<typeof Typography> = {
    args: {
        variant: 'bodyL',
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid',
    },
};