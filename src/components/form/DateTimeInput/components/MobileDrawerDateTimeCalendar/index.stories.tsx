import type { Meta, StoryObj } from '@storybook/react';
import { MobileDrawerDateTimeCalendar, TProps } from './index';
import React, { useCallback, useState } from 'react';

import 'react-calendar/dist/Calendar.css';
import { logic } from '../../../DateInput/logic';

const meta: Meta<typeof MobileDrawerDateTimeCalendar> = {
    title: 'form/DateTimeInput/_components/MobileDrawerDateTimeCalendar',
    component: MobileDrawerDateTimeCalendar,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TProps> = {
    render: function Render() {
        const [isOpen, setIsOpen] = useState(false);
        const [calendarDropdownValue, setCalendarDropdownValue] = useState<Date | null>(null);

        const handleClose = () => setIsOpen(false);
        const handleOpen = () => setIsOpen(true);

        const handleSubmit = () => calendarDropdownValue;

        const handleCalendarChange = useCallback(
            (newValue: Date) => {
                const [hours, minutes] = calendarDropdownValue
                    ? logic.getHoursAndMinutesFromDate(calendarDropdownValue)
                    : [0, 0];
                const newDate = logic.addHoursAndMinutesToDate(newValue, hours, minutes);
                setCalendarDropdownValue(newDate);
            },
            [calendarDropdownValue],
        );

        const handleTimePickerChange = useCallback(
            (newValue: [number, number]) => {
                if (calendarDropdownValue) {
                    const newDate = logic.addHoursAndMinutesToDate(
                        calendarDropdownValue,
                        newValue[0],
                        newValue[1],
                    );
                    setCalendarDropdownValue(newDate);
                }
            },
            [calendarDropdownValue],
        );

        return (
            <div>
                <button type={'button'} onClick={handleOpen}>
                    Open
                </button>
                <MobileDrawerDateTimeCalendar
                    calendarDropdownValue={calendarDropdownValue}
                    onCalendarChange={handleCalendarChange}
                    isOpen={isOpen}
                    onClose={handleClose}
                    onSubmit={handleSubmit}
                    afterSubmit={handleClose}
                    onTimeChange={handleTimePickerChange}
                />
            </div>
        );
    },
};
