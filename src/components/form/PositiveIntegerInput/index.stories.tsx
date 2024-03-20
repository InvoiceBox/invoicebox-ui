import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { PositiveIntegerInput, TProps } from '.';

const meta: Meta<typeof PositiveIntegerInput> = {
    title: 'form/PositiveIntegerInput',
    component: PositiveIntegerInput,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps) => {
    const [value, setValue] = useState<number | null>(null);

    const handleChange = useCallback((newValue: number | null) => {
        setValue(newValue);
        action('onChange')(newValue);
    }, []);

    return <PositiveIntegerInput {...props} value={value} onChange={handleChange} />;
};

export const Default: StoryObj<TProps> = {
    args: {
        max: 1000,
        upAndDown: true,
        label: 'Label',
        placeholder: 'Placeholder',
        hasError: false,
    },
    render: Component,
};
