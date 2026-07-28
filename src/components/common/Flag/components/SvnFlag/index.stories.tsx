import type { Meta, StoryObj } from '@storybook/react';
import { SvnFlag } from '.';

const meta: Meta<typeof SvnFlag> = {
    title: 'common/Flag/_components/SvnFlag',
    component: SvnFlag,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof SvnFlag> = {};
