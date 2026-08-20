import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker, TProps } from './index';
import React, { useState } from 'react';

const meta: Meta<typeof TimePicker> = {
    title: 'form/DateTimeInput/_components/TimePicker',
    component: TimePicker,
    tags: ['autodocs'],
};

export default meta;

const Render = (props: TProps) => {
    const [time, setTime] = useState<[number, number]>([11, 0]);

    return <TimePicker {...props} value={time} onChange={setTime} />;
};

const commonArgs = {
    height: 300,
    minTime: [10, 30] as [number, number],
    maxTime: [22, 15] as [number, number],
};

export const Default: StoryObj<TProps> = {
    args: commonArgs,
    render: Render,
};

export const Mobile: StoryObj<TProps> = {
    args: { ...commonArgs, isMobile: true },
    render: Render,
};
