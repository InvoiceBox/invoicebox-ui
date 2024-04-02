import type { Meta, StoryObj } from '@storybook/react';
import { KazFlag } from '.';

const meta: Meta<typeof KazFlag> = {
    title: 'common/Flag/_components/KazFlag',
    component: KazFlag,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof KazFlag> = {};
