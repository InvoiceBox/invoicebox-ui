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
    render: function Render() {
        const [time, setTime] = useState<[number, number]>([0, 0]);

        return (
            <div style={{ height: '300px', overflow: 'hidden' }}>
                <TimePicker value={time} onChange={setTime} />
            </div>
        );
    },
};
