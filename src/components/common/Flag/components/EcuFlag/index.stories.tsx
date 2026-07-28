import type { Meta, StoryObj } from '@storybook/react';
import { EcuFlag } from '.';

const meta: Meta<typeof EcuFlag> = {
    title: 'common/Flag/_components/EcuFlag',
    component: EcuFlag,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof EcuFlag> = {};
