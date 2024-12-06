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

function Render(args: TProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Drawer {...args} onClose={() => setIsOpen(false)} isOpen={isOpen} />
            <button type={'button'} onClick={() => setIsOpen(true)}>
                Open
            </button>
        </div>
    );
}

const commonArgs = {
    children: 'Children',
    isErrorBorder: false,
    onClose: action('close'),
    isPadding: false,
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
