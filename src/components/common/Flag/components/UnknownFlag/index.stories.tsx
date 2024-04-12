import type { Meta, StoryObj } from '@storybook/react';
import { UnknownFlag } from '.';

const meta: Meta<typeof UnknownFlag> = {
    title: 'common/Flag/_components/UnknownFlag',
    component: UnknownFlag,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UnknownFlag> = {};
