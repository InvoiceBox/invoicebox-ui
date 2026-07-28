import React from 'react';
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

export const AllFlags: TStory = {
    render: () =>
        React.createElement(
            'div',
            { style: { display: 'flex', flexWrap: 'wrap', gap: 16 } },
            Flag.flags.map((flag) =>
                React.createElement(
                    'div',
                    { key: flag, style: { textAlign: 'center', fontFamily: 'sans-serif', fontSize: 12 } },
                    React.createElement(Flag, { flag, isSmall: false }),
                    React.createElement('div', null, flag),
                ),
            ),
        ),
};
