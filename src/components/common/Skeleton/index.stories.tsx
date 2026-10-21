import React from 'react';
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

/** Строки текста, поле и кнопка: скругление по месту, как в личном кабинете */
export const Shapes: StoryObj<typeof Skeleton> = {
    render: () => (
        <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Skeleton circle height={36} />
                <Skeleton height={14} borderRadius={4} />
            </div>
            <Skeleton height={56} />
            <Skeleton height={36} width={132} borderRadius={20} />
        </div>
    ),
};

/** Плашка появляется через 180 мс: на быстром ответе её не видно */
export const WithShowDelay: StoryObj<typeof Skeleton> = {
    args: {
        width: 200,
        height: 56,
        showDelay: 180,
    },
};
