import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton, TProps } from '.';

const meta = {
    title: 'Common/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;

export const ByContainer: StoryObj<TProps & { containerWidth: number; containerHeight: number }> = {
    args: {
        containerWidth: 200,
        containerHeight: 100,
    },
    render: ({ containerWidth, containerHeight, ...rest }) => (
        <div style={{ width: containerWidth, height: containerHeight }}>
            <Skeleton {...rest} />
        </div>
    ),
};

export const ByOwnSize: StoryObj<typeof Skeleton> = {
    args: {
        width: '200px',
        height: '100px',
    },
};
