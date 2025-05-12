import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CurrencyInputNumber, TProps } from './index';

const meta: Meta<typeof CurrencyInputNumber> = {
    title: 'form/CurrencyInputNumber',
    component: CurrencyInputNumber,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps) => {
    const [value, setValue] = useState<number | undefined>(11);
    const [key, setKey] = useState(1);

    return (
        <>
            <button
                type={'button'}
                onClick={() => {
                    setValue(11);
                    setKey((prevState) => prevState + 1);
                }}
            >
                Reset input value
            </button>
            <CurrencyInputNumber key={key} {...props} defaultValue={value} onChange={setValue} />
        </>
    );
};

export const Default: StoryObj<TProps> = {
    args: {
        label: 'Label',
        size: 'L',
    },
    render: Component,
};
