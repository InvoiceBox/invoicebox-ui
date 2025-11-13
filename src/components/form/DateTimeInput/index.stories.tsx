import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DateTimeInput, TProps } from '.';

import 'react-calendar/dist/Calendar.css';

const meta: Meta<typeof DateTimeInput> = {
    title: 'form/DateTimeInput',
    component: DateTimeInput,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps) => {
    const { minDate, maxDate } = props;

    const [value, setValue] = useState<null | Date>(null);

    const handleChange = useCallback((date: Date) => {
        setValue(date);
        action('change')(date);
    }, []);

    return (
        <>
            <DateTimeInput
                {...props}
                maxDate={maxDate ? new Date(maxDate) : undefined}
                minDate={minDate ? new Date(minDate) : undefined}
                value={value}
                onChange={handleChange}
            />
            <button type={'button'} onClick={() => setValue(null)}>
                Reset
            </button>
        </>
    );
};

const COMMON_ARGS = {
    hasError: false,
    label: 'Label',
    minDate: new Date().setHours(10, 10, 0, 0) as unknown as Date,
    maxDate: new Date().setDate(new Date().getDate() + 5) as unknown as Date,
};

export const Default: StoryObj<typeof DateTimeInput> = {
    args: COMMON_ARGS,
    render: Component,
};
