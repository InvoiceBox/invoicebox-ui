import React from 'react';
/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';

import { useModal } from '.';

const meta: Meta = {
    title: 'hooks/useModal',
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
    render: () => {
        const [isOpen, open, close, toggle] = useModal();

        return (
            <div>
                <p>is open modal: {isOpen}</p>
                <button type={'button'} onClick={open}>
                    Open
                </button>
                <button type={'button'} onClick={close}>
                    Close
                </button>
                <button type={'button'} onClick={toggle}>
                    Toggle
                </button>
            </div>
        );
    },
};
