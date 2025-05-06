import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle, TProps } from './index';

const meta: Meta<typeof Toggle> = {
    title: 'form/Toggle',
    component: Toggle,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps) => {
    const [checked, setChecked] = useState(false);

    return <Toggle {...props} checked={checked} onChange={setChecked} />;
};

export const Default: StoryObj<TProps> = {
    args: {
        label: 'Label',
        variant: 'small',
    },
    render: Component,
};
