import React, { FC, useCallback } from 'react';
import { useComponentPalette } from '../../../palette';
import { TCalendarPalette } from './palette';
import { LibCalendar } from './styles';

type TGeneralProps = {
    minDate?: Date;
    maxDate?: Date;
    onActiveStartDateChange?: () => void;
    isLargeMobileSize?: boolean;
};

export type TProps = TGeneralProps &
    (
        | {
              onChange: (value: Date) => void;
              value: null | Date;
              selectRange?: false;
          }
        | {
              onChange: (value: [Date, Date]) => void;
              value: null | [Date, Date];
              selectRange: true;
          }
    );

export const Calendar: FC<TProps> = ({
    onChange,
    value,
    minDate,
    maxDate,
    selectRange,
    onActiveStartDateChange,
    isLargeMobileSize = false,
}) => {
    const palette = useComponentPalette<TCalendarPalette>('calendar');

    const handleChange = useCallback(
        (newValue: unknown) => {
            if (selectRange) {
                onChange(newValue as [Date, Date]);
            } else {
                onChange(newValue as Date);
            }
        },
        [onChange, selectRange],
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
            selectRange={selectRange}
            onActiveStartDateChange={onActiveStartDateChange}
            // styles
            $arrow={palette.arrow}
            $weekDay={palette.weekday}
            $tile={palette.tile}
            $tileActive={palette.tileActive}
            $tileBgActive={palette.tileBgActive}
            $tileBgRangeBetween={palette.tileBgRangeBetween}
            $month={palette.month}
            $isLargeMobileSize={isLargeMobileSize}
        />
    );
};
