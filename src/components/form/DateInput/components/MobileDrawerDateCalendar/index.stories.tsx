import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MobileDrawerDateCalendar, TProps } from '.';

import 'react-calendar/dist/Calendar.css';

const meta: Meta<typeof MobileDrawerDateCalendar> = {
    title: 'form/DateInput/components/MobileDrawerDateCalendar',
    component: MobileDrawerDateCalendar,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps) => {
    const { minDate, maxDate } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);
    const [value, setValue] = useState<null | Date>(null);

    const handleChange = useCallback((date: Date) => {
        setValue(date);
        action('change')(date);
    }, []);

    return (
        <>
            <button type={'button'} onClick={handleOpen}>
                Open
            </button>
            <MobileDrawerDateCalendar
                {...props}
                maxDate={maxDate ? new Date(maxDate) : undefined}
                minDate={minDate ? new Date(minDate) : undefined}
                value={value}
                onChange={handleChange}
                onClose={handleClose}
                isOpen={isOpen}
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

export const Default: StoryObj<TProps> = {
    args: COMMON_ARGS,
    render: Component,
};
