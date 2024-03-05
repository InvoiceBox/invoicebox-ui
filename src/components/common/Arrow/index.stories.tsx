import type { Meta, StoryObj } from '@storybook/react';

import { Arrow, TProps } from '.';

const meta: Meta<typeof Arrow> = {
    title: 'common/Arrow',
    component: Arrow,
    tags: ['autodocs'],
};

export default meta;
type TStory = StoryObj<TProps>;

export const Default: TStory = {
    args: {
        isOpen: false,
        isLight: false,
        innerSize: 10,
        outterSize: 24,
        defaultRotate: 0,
    },
};
