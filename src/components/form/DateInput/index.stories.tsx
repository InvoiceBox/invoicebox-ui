import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DateInput, TProps } from '.';

import 'react-calendar/dist/Calendar.css';

const meta: Meta<typeof DateInput> = {
    title: 'form/DateInput',
    component: DateInput,
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
        <DateInput
            {...props}
            maxDate={maxDate ? new Date(maxDate) : undefined}
            minDate={minDate ? new Date(minDate) : undefined}
            value={value}
            onChange={handleChange}
        />
    );
};

export const Default: StoryObj<typeof DateInput> = {
    args: {
        hasError: false,
        label: 'Label',
    },
    render: Component,
};
