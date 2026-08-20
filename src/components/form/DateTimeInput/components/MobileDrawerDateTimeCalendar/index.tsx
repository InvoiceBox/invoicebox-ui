import React, { FC, useState } from 'react';
import { Drawer } from '../../../../common/Drawer';
import * as S from './styles';
import { TProps as TCalendarProps } from '../../../../common/Calendar';
import { TimePicker } from '../TimePicker';
import { MobileDatePicker } from '../MobileDatePicker';
import { logic } from '../../../DateInput/logic';
import { DrawerHeader } from '../../../common/DrawerHeader';

export type TProps = Pick<TCalendarProps, 'maxDate' | 'minDate'> & {
    isOpen: boolean;
    onClose: () => void;
    calendarDropdownValue: Date | null;
    onCalendarChange: (value: Date) => void;
    onTimeChange: (newValue: [number, number]) => void;
    onSubmit: () => void;
    afterSubmit: () => void;
    minTime?: [number, number];
    maxTime?: [number, number];
};

// Барабан времени должен открываться на допустимом значении: иначе после выбора даты
// «Готово» остаётся недоступным, пока пользователь вручную не прокрутит часы.
const clampTime = (
    [hour, minute]: [number, number],
    minTime?: [number, number],
    maxTime?: [number, number],
): [number, number] => {
    if (minTime && (hour < minTime[0] || (hour === minTime[0] && minute < minTime[1]))) return minTime;
    if (maxTime && (hour > maxTime[0] || (hour === maxTime[0] && minute > maxTime[1]))) return maxTime;
    return [hour, minute];
};

/**
 * Ввод даты и времени барабанами, как в системных пикерах: сначала шаг с датой,
 * затем шаг со временем. «Отмена» закрывает шторку целиком, правая кнопка ведёт вперёд.
 */
export const MobileDrawerDateTimeCalendar: FC<TProps> = ({
    isOpen,
    onClose,
    maxDate,
    minDate,
    onCalendarChange,
    calendarDropdownValue,
    afterSubmit,
    onSubmit,
    onTimeChange,
    maxTime,
    minTime,
}) => {
    const [isDateStep, setIsDateStep] = useState(true);

    const currentHour = calendarDropdownValue?.getHours() || 0;
    const currentMinute = calendarDropdownValue?.getMinutes() || 0;

    const handleClose = () => {
        onClose();
        setIsDateStep(true);
    };

    const handleDone = () => {
        if (isDateStep) {
            setIsDateStep(false);

            const safeTime = clampTime([currentHour, currentMinute], minTime, maxTime);
            if (safeTime[0] !== currentHour || safeTime[1] !== currentMinute) onTimeChange(safeTime);
        } else {
            onSubmit();
            afterSubmit();
            setIsDateStep(true);
        }
    };

    return (
        <Drawer onClose={handleClose} isOpen={isOpen} isPadding={false}>
            <DrawerHeader
                onClose={handleClose}
                onSubmit={handleDone}
                closeLabel={'Отмена'}
                submitLabel={isDateStep ? 'Далее' : 'Готово'}
                label={isDateStep ? 'Дата' : 'Время'}
                isSubmitDisabled={
                    !calendarDropdownValue ||
                    (!isDateStep && !logic.isBetweenMinAndMax(calendarDropdownValue, minDate, maxDate))
                }
            />
            <S.PickerWrapper>
                {isDateStep ? (
                    <MobileDatePicker
                        value={calendarDropdownValue}
                        onChange={onCalendarChange}
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                ) : (
                    <TimePicker
                        isMobile
                        value={[currentHour, currentMinute]}
                        onChange={onTimeChange}
                        maxTime={maxTime}
                        minTime={minTime}
                    />
                )}
            </S.PickerWrapper>
        </Drawer>
    );
};
