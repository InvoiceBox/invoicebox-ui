import type { Meta, StoryObj } from '@storybook/react';
import { EspFlag } from '.';

const meta: Meta<typeof EspFlag> = {
    title: 'common/Flag/_components/EspFlag',
    component: EspFlag,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof EspFlag> = {};
