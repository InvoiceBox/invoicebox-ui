import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MobileDatePicker, TProps } from '.';

const meta: Meta<typeof MobileDatePicker> = {
    title: 'form/DateTimeInput/_components/MobileDatePicker',
    component: MobileDatePicker,
    tags: ['autodocs'],
};

export default meta;

const Render = (args: TProps) => {
    const [value, setValue] = useState<Date | null>(args.value);

    return (
        <div>
            <MobileDatePicker {...args} value={value} onChange={setValue} />
            <div>{value ? value.toDateString() : 'не выбрано'}</div>
        </div>
    );
};

export const Default: StoryObj<TProps> = {
    args: { value: null },
    render: Render,
};

export const WithMinAndMaxDate: StoryObj<TProps> = {
    args: {
        value: null,
        minDate: new Date(2024, 5, 10),
        maxDate: new Date(2026, 8, 25),
    },
    render: Render,
};
