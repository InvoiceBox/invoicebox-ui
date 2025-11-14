import React, { FC, useState } from 'react';
import { Drawer } from '../../../../common/Drawer';
import { Cross24Icon } from '../Cross24Icon';
import * as S from './styles';
import { useComponentPalette } from '../../../../../palette';
import { TMobileDateTimeCalendarPalette } from './palette';
import { Typography } from '../../../../common/Typography';
import { Calendar, TProps as TCalendarProps } from '../../../../common/Calendar';
import { TimePicker } from '../TimePicker';
import { logic } from '../../../DateInput/logic';

export type TProps = Pick<TCalendarProps, 'maxDate' | 'minDate'> & {
    isOpen: boolean;
    onClose: () => void;
    calendarDropdownValue: Date | null;
    onCalendarChange: (value: Date) => void;
    onTimeChange: (newValue: [number, number]) => void;
    onSubmit: () => void;
    afterSubmit: () => void;
};

export const MobileDateTimeCalendar: FC<TProps> = ({
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
    const palette = useComponentPalette<TMobileDateTimeCalendarPalette>('mobileDateTimeCalendar');
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
            <S.Header $borderColor={palette.border}>
                <S.CloseButton type={'button'} onClick={handleClose}>
                    <Cross24Icon />
                </S.CloseButton>
                <S.HeadLabel $color={palette.headLabel} variant={'headline3'}>
                    {isDateStep ? 'Выберите дату' : 'Выберите время'}
                </S.HeadLabel>
                <S.ApplyButton
                    disabled={
                        isDateStep
                            ? !calendarDropdownValue
                            : !calendarDropdownValue ||
                              !logic.isBetweenMinAndMax(calendarDropdownValue, minDate, maxDate)
                    }
                    onClick={handleDone}
                    type={'button'}
                    $color={palette.applyButton}
                >
                    <Typography variant={'headline6'}>Готово</Typography>
                </S.ApplyButton>
            </S.Header>
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
                <TimePicker
                    value={[calendarDropdownValue?.getHours() || 0, calendarDropdownValue?.getMinutes() || 0]}
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
            )}
        </Drawer>
    );
};
