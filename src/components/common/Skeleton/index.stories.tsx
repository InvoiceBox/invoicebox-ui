import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '.';

const meta = {
    title: 'Common/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;

export const Primary: StoryObj<{ width: number; height: number }> = {
    args: {
        width: 100,
        height: 200,
    },
    render: (args) => (
        <div style={{ width: args.width, height: args.height }}>
            <Skeleton />
        </div>
    ),
};
