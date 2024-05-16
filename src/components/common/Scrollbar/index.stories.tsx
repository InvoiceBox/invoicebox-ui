import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Scrollbar } from '.';

const meta = {
    title: 'common/Scrollbar',
    component: Scrollbar,
    tags: ['autodocs'],
} satisfies Meta<typeof Scrollbar>;

export default meta;

const longDummyText = Array(10)
    .fill(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
    mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum.`,
    )
    .join(' ');

export const Default: StoryObj<typeof Scrollbar> = {
    args: {
        children: longDummyText,
        maxHeight: 200,
    },
};

export const Horisontall: StoryObj<typeof Scrollbar> = {
    args: {
        maxHeight: 200,
        children: <div style={{ width: 2000 }}>{longDummyText}</div>,
    },
};

export const Blocks: StoryObj<typeof Scrollbar> = {
    args: {
        maxHeight: 200,
        children: (
            <div>
                <div>Some text</div>
                <div>Some text</div>
                <div>Some text</div>
                <div>Some text</div>
                <div>Some text</div>
                <div>Some text</div>
                <div>Some text</div>
                <div>Some text</div>
                <div>Some text</div>
                <div>Some text</div>
                <div>Some text</div>
                <div>Some text</div>
                <div>Some text</div>
            </div>
        ),
    },
};

export const ByContainer: StoryObj<typeof Scrollbar> = {
    render: (args) => (
        <div style={{ height: 200 }}>
            <Scrollbar {...args}>{longDummyText}</Scrollbar>
        </div>
    ),
};
