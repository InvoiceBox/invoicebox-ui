import React from 'react';
/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';

import { useInputFocus } from '.';

const meta: Meta = {
    title: 'hooks/useInputFocus',
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
    render: () => {
        const { inFocus, handleBlur, handleFocus } = useInputFocus();

        return (
            <div>
                <input placeholder="focus me" onBlur={handleBlur} onFocus={handleFocus} />
                <div>
                    <code>{JSON.stringify({ inFocus }, null, 2)}</code>
                </div>
            </div>
        );
    },
};
