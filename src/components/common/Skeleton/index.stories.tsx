import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '.';

const meta = {
    title: 'common/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;

export const ByContainer: StoryObj<typeof Skeleton> = {
    render: (props) => (
        <div style={{ width: 200, height: 100 }}>
            <Skeleton {...props} />
        </div>
    ),
};

export const ByOwnSize: StoryObj<typeof Skeleton> = {
    args: {
        width: '200px',
        height: '100px',
    },
};
