import React, { FC, useCallback } from 'react';
import LibCalendar from 'react-calendar';
import { useComponentPalette } from '../../../palette';
import { TCalendarPalette } from './palette';
import { useCss } from '../../../hooks/useCss';

const CSS_ID = 'INVOICEBOX_UI_CALENDAR';

export type TProps = {
    onChange: (value: Date) => void;
    value: null | Date;
    minDate?: Date;
    maxDate?: Date;
};

export const Calendar: FC<TProps> = ({ onChange, value, minDate, maxDate }) => {
    const palette = useComponentPalette<TCalendarPalette>('calendar');

    useCss({
        id: CSS_ID,
        css: `:root {
            --invoicebox-ui-calendar-arrow: ${palette.arrow};
            --invoicebox-ui-calendar-weekday: ${palette.weekday};
            --invoicebox-ui-calendar-tile: ${palette.tile};
            --invoicebox-ui-calendar-tile-active: ${palette.tileActive};
            --invoicebox-ui-calendar-tile-bg-active: ${palette.tileBgActive};
        }`,
    });

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
