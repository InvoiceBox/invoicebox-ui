import type { Meta, StoryObj } from '@storybook/react';

import { Svg, TProps } from '.';

const meta: Meta<typeof Svg> = {
    title: 'common/Arrow/_components/Svg',
    component: Svg,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type TStory = StoryObj<TProps>;

export const Default: TStory = {
    args: {
        size: 10,
    },
};
