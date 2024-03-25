import React, { FC, useCallback } from 'react';
import LibCalendar from 'react-calendar';

export type TProps = {
    onChange: (value: Date) => void;
    value: null | Date;
    minDate?: Date;
    maxDate?: Date;
};

export const Calendar: FC<TProps> = ({ onChange, value, minDate, maxDate }) => {
    const handleChange = useCallback(
        (newValue: unknown) => {
            onChange(newValue as Date);
        },
        [onChange],
    );

    return (
        <LibCalendar
            locale="ru"
            minDate={minDate}
            maxDate={maxDate}
            showNeighboringMonth={false}
            minDetail="month"
            next2Label={null}
            prev2Label={null}
            onChange={handleChange}
            value={value}
        />
    );
};
