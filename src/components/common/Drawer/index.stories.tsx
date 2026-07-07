import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Drawer, TProps } from '.';

const meta: Meta<typeof Drawer> = {
    title: 'common/Drawer',
    component: Drawer,
    tags: ['autodocs'],
};

export default meta;

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            {count}
            <button type={'button'} onClick={() => setCount((prevState) => prevState + 1)}>
                Increment
            </button>
        </div>
    );
};

function Render(args: TProps) {
    const [isOpenDrawer1, setIsOpenDrawer1] = useState(false);
    const [isOpenDrawer2, setIsOpenDrawer2] = useState(false);

    return (
        <div>
            <Drawer {...args} onClose={() => setIsOpenDrawer1(false)} isOpen={isOpenDrawer1}>
                Drawer 1 Content
                <button
                    type={'button'}
                    onClick={() => {
                        setIsOpenDrawer2(true);
                        setIsOpenDrawer1(false);
                    }}
                >
                    Open drawer 2
                </button>
                <Counter />
            </Drawer>
            <Drawer {...args} onClose={() => setIsOpenDrawer2(false)} isOpen={isOpenDrawer2}>
                Drawer 2 Content
                <Counter />
            </Drawer>
            <button type={'button'} onClick={() => setIsOpenDrawer1(true)}>
                Open drawer 1
            </button>
        </div>
    );
}

const commonArgs = {
    children: 'Children',
    isErrorBorder: false,
    onClose: action('close'),
    isPadding: false,
    borderColor: undefined,
    overflow: 'hidden',
};

export const Default: StoryObj<TProps> = {
    args: commonArgs,
    render: Render,
};

export const WithTitle: StoryObj<TProps> = {
    args: {
        ...commonArgs,
        title: 'Title',
    },
    render: Render,
};

export const Error: StoryObj<TProps> = {
    args: {
        ...commonArgs,
        isErrorBorder: true,
    },
    render: Render,
};
