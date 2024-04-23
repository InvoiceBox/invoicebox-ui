import type { Meta, StoryObj } from '@storybook/react';

import { Flag, TProps } from '.';

const meta: Meta<typeof Flag> = {
    title: 'common/Flag',
    component: Flag,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type TStory = StoryObj<TProps>;

export const Default: TStory = {
    args: {
        flag: 'RUS',
        isSmall: false,
    },
};
