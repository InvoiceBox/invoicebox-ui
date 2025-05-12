import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CurrencyInputString, TProps } from './index';

const meta: Meta<typeof CurrencyInputString> = {
    title: 'form/CurrencyInputString',
    component: CurrencyInputString,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps) => {
    const [value, setValue] = useState<string | undefined | number>('22,33');

    return <CurrencyInputString {...props} value={value} onChange={setValue} />;
};

export const Default: StoryObj<TProps> = {
    args: {
        label: 'Label',
        size: 'L',
    },
    render: Component,
};
