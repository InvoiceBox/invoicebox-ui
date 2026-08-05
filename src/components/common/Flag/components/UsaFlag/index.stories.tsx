import type { Meta, StoryObj } from '@storybook/react';
import { UsaFlag } from '.';

const meta: Meta<typeof UsaFlag> = {
    title: 'common/Flag/_components/UsaFlag',
    component: UsaFlag,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UsaFlag> = {};
