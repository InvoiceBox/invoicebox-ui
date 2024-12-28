import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { CodeInput, TProps } from '.';

const meta: Meta<typeof CodeInput> = {
    title: 'common/CodeInput',
    component: CodeInput,
    tags: ['autodocs'],
    argTypes: { onChange: { action: 'onChange' } },
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: { hasError: false, codeLength: 4, value: '12', disabled: false },
};

export const Live: StoryObj<TProps> = {
    args: { hasError: false, codeLength: 4 },
    render: function Render(args) {
        const [value, setValue] = useState('');

        return (
            <div>
                <CodeInput {...args} value={value} onChange={setValue} />
            </div>
        );
    },
};
