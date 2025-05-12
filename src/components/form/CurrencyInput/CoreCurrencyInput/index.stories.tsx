import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CoreCurrencyInput, TProps } from './index';

const meta: Meta<typeof CoreCurrencyInput> = {
    title: 'form/CoreCurrencyInput',
    component: CoreCurrencyInput,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps) => {
    const [value, setValue] = useState<string>();

    return <CoreCurrencyInput {...props} value={value} onValueChange={setValue} />;
};

export const Default: StoryObj<TProps> = {
    args: {
        label: 'Label',
        size: 'L',
        disabled: false,
    },
    render: Component,
};
