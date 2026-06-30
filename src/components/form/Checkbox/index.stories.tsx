import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, TProps } from '.';

const meta: Meta<typeof Checkbox> = {
    title: 'form/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps) => {
    const [checked, setChecked] = useState(props.checked);

    return <Checkbox {...props} checked={checked} onChange={() => setChecked((prev) => !prev)} />;
};

export const Default: StoryObj<TProps> = {
    args: {
        checked: false,
        label: 'Label',
    },
    render: Component,
};

export const Checked: StoryObj<TProps> = {
    args: {
        checked: true,
        label: 'Label',
    },
    render: Component,
};

export const Disabled: StoryObj<TProps> = {
    args: {
        checked: false,
        disabled: true,
        label: 'Label',
        disabledText: 'Недоступно',
    },
    render: Component,
};

export const DisabledChecked: StoryObj<TProps> = {
    args: {
        checked: true,
        disabled: true,
        label: 'Label',
    },
    render: Component,
};
