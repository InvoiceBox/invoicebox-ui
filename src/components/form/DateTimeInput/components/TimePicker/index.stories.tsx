import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker, TProps } from './index';
import React, { useState } from 'react';

const meta: Meta<typeof TimePicker> = {
    title: 'form/DateTimeInput/_components/TimePicker',
    component: TimePicker,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        height: 300,
        minTime: [10, 30],
        maxTime: [22, 15],
    },
    render: function Render(props) {
        const [time, setTime] = useState<[number, number]>([0, 0]);

        return <TimePicker {...props} value={time} onChange={setTime} />;
    },
};
