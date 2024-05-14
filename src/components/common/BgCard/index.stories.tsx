import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { BgCard, TProps } from '.';

const meta: Meta<typeof BgCard> = {
    title: 'common/BgCard',
    component: BgCard,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        children: (
            <>
                <div>Some children</div>
                <div>Some children</div>
            </>
        ),
        isTopLeftBorderRadius: true,
    },
};
