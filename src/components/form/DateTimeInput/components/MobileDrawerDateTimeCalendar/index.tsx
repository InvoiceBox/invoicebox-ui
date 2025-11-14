import React, { FC, useState } from 'react';
import { Drawer } from '../../../../common/Drawer';
import * as S from './styles';
import { Calendar, TProps as TCalendarProps } from '../../../../common/Calendar';
import { TimePicker } from '../TimePicker';
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
};

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
}) => {
    const [isDateStep, setIsDateStep] = useState(true);

    const handleClose = () => {
        onClose();
        setIsDateStep(true);
    };

    const handleDone = () => {
        if (isDateStep) {
            setIsDateStep(false);
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
                label={isDateStep ? 'Выберите дату' : 'Выберите время'}
                isSubmitDisabled={
                    isDateStep
                        ? !calendarDropdownValue
                        : !calendarDropdownValue ||
                          !logic.isBetweenMinAndMax(calendarDropdownValue, minDate, maxDate)
                }
            />
            {isDateStep ? (
                <S.MobileCalendarWrapper>
                    <Calendar
                        value={calendarDropdownValue}
                        onChange={onCalendarChange}
                        minDate={minDate}
                        maxDate={maxDate}
                        isLargeMobileSize
                    />
                </S.MobileCalendarWrapper>
            ) : (
                <S.TimePickerWrapper>
                    <TimePicker
                        value={[
                            calendarDropdownValue?.getHours() || 0,
                            calendarDropdownValue?.getMinutes() || 0,
                        ]}
                        onChange={onTimeChange}
                        maxTime={
                            calendarDropdownValue &&
                            maxDate &&
                            calendarDropdownValue.getDay() === maxDate.getDay()
                                ? [maxDate.getHours(), maxDate.getMinutes()]
                                : undefined
                        }
                        minTime={
                            calendarDropdownValue &&
                            minDate &&
                            calendarDropdownValue.getDay() === minDate.getDay()
                                ? [minDate.getHours(), minDate.getMinutes()]
                                : undefined
                        }
                    />
                </S.TimePickerWrapper>
            )}
        </Drawer>
    );
};
