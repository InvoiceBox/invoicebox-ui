import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TextInput, TProps } from '.';

const meta: Meta<typeof TextInput> = {
    title: 'form/TextInput',
    component: TextInput,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps) => {
    const [value, setValue] = useState('');

    return <TextInput {...props} value={value} onChange={setValue} />;
};

export const Default: StoryObj<TProps> = {
    args: {
        hasError: false,
        label: 'Label',
        name: 'name',
        onBlur: action('blur'),
        onFocus: action('focus'),
        maxLength: 30,
        placeholder: 'Placeholder',
        disabled: false,
        children: <div>Children</div>,
        size: 'L',
        autoFocus: false,
    },
    render: Component,
};
