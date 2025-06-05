import type { Meta, StoryObj } from '@storybook/react';
import { PointsLoader } from '.';

const meta = {
    title: 'common/PointsLoader',
    component: PointsLoader,
    tags: ['autodocs'],
} satisfies Meta<typeof PointsLoader>;

export default meta;

export const Default: StoryObj<typeof PointsLoader> = {
    args: {},
};
