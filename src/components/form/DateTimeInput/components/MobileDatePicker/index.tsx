import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { MobileWheelPicker, WheelColumn } from '../MobileWheelPicker';
import { datePickerLogic } from './logic';

export type TProps = {
    value: Date | null;
    onChange: (value: Date) => void;
    minDate?: Date;
    maxDate?: Date;
};

const DAY_COLUMN_WIDTH = 56;
const MONTH_COLUMN_WIDTH = 116;
const YEAR_COLUMN_WIDTH = 76;

/**
 * Барабанный выбор даты «как в ОС»: день / месяц / год.
 * Время не трогаем — его добавляет вызывающий код, как это делает Calendar.
 */
export const MobileDatePicker: FC<TProps> = ({ value, onChange, minDate, maxDate }) => {
    const fallbackDate = useMemo(() => {
        const today = new Date();
        return datePickerLogic.clampDate(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            minDate,
            maxDate,
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [minDate?.getTime(), maxDate?.getTime()]);

    const currentDate = value || fallbackDate;

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    // В нативном пикере значение есть всегда: пустое поле открывается на сегодня,
    // и «Готово» сразу доступно. Поднимаем стартовую дату наверх один раз.
    const didInitRef = useRef(false);
    useEffect(() => {
        if (didInitRef.current || value) return;
        didInitRef.current = true;
        onChange(fallbackDate);
    }, [value, fallbackDate, onChange]);

    const yearOptions = useMemo(() => datePickerLogic.getYearOptions(minDate, maxDate), [minDate, maxDate]);
    const monthOptions = useMemo(
        () => datePickerLogic.getMonthOptions(year, minDate, maxDate),
        [year, minDate, maxDate],
    );
    const dayOptions = useMemo(
        () => datePickerLogic.getDayOptions(year, month, minDate, maxDate),
        [year, month, minDate, maxDate],
    );

    const handleDayChange = useCallback(
        (newDay: number) => onChange(datePickerLogic.clampDate(year, month, newDay, minDate, maxDate)),
        [maxDate, minDate, month, onChange, year],
    );

    const handleMonthChange = useCallback(
        (newMonth: number) => onChange(datePickerLogic.clampDate(year, newMonth, day, minDate, maxDate)),
        [day, maxDate, minDate, onChange, year],
    );

    const handleYearChange = useCallback(
        (newYear: number) => onChange(datePickerLogic.clampDate(newYear, month, day, minDate, maxDate)),
        [day, maxDate, minDate, month, onChange],
    );

    return (
        <MobileWheelPicker label={'Дата'}>
            <WheelColumn
                label={'День'}
                options={dayOptions}
                value={day}
                onChange={handleDayChange}
                width={DAY_COLUMN_WIDTH}
            />
            <WheelColumn
                label={'Месяц'}
                options={monthOptions}
                value={month}
                onChange={handleMonthChange}
                width={MONTH_COLUMN_WIDTH}
            />
            <WheelColumn
                label={'Год'}
                options={yearOptions}
                value={year}
                onChange={handleYearChange}
                width={YEAR_COLUMN_WIDTH}
            />
        </MobileWheelPicker>
    );
};
