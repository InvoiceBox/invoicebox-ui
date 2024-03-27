import type { Meta, StoryObj } from '@storybook/react';
import { WarningIcon } from '.';

const meta: Meta<typeof WarningIcon> = {
    title: 'common/WarningIcon',
    component: WarningIcon,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof WarningIcon> = {};
