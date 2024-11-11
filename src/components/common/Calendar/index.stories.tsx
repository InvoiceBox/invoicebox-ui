import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Calendar, TProps } from '.';

import 'react-calendar/dist/Calendar.css';

const meta: Meta<typeof Calendar> = {
    title: 'common/Calendar',
    component: Calendar,
    tags: ['autodocs'],
};

export default meta;

const Component = ({ maxDate, minDate }: TProps) => {
    const [value, setValue] = useState<null | Date>(null);

    const handleChange = useCallback((date: Date) => {
        setValue(date);
        action('change')(date);
    }, []);

    return (
        <Calendar
            value={value}
            onChange={handleChange}
            maxDate={maxDate ? new Date(maxDate) : undefined}
            minDate={minDate ? new Date(minDate) : undefined}
        />
    );
};

const RangeComponent = ({ maxDate, minDate }: TProps) => {
    const [value, setValue] = useState<null | [Date, Date]>(null);

    const handleChange = useCallback((date: [Date, Date]) => {
        setValue(date);
        action('change')(date);
    }, []);

    return (
        <Calendar
            value={value}
            onChange={handleChange}
            maxDate={maxDate ? new Date(maxDate) : undefined}
            minDate={minDate ? new Date(minDate) : undefined}
            selectRange
        />
    );
};

const maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 1);

const minDate = new Date();
minDate.setMonth(minDate.getMonth() - 1);

const generalProps = {
    maxDate,
    minDate,
};

export const Default: StoryObj<typeof Calendar> = {
    render: Component,
    args: generalProps,
};

export const Range: StoryObj<typeof Calendar> = {
    render: RangeComponent,
    args: generalProps,
};
