import React, { ChangeEvent, FC, FocusEvent, useCallback, useRef, useState } from 'react';
import { useComponentPalette } from '../../../palette';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { logic } from '../DateInput/logic';
import * as S from './styles';
import { InputLabel, TProps as TInputLabelProps } from '../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../PureInput';
import { SIZE_PARAMS_MAP, TSizes } from '../constants';
import { CalendarIcon } from '../DateInput/components/CalendarIcon';
import { Dropdown } from '../../common/Dropdown';
import { Calendar, TProps as TCalendarProps } from '../../common/Calendar';
import { TimePicker } from './components/TimePicker';
import { CrossIcon } from './components/CrossIcon';
import { CheckIcon } from './components/CheckIcon';
import { TDropdownProps, useMobile } from '../../../index';
import { TDateTimeInputPalette } from './palette';
import { useTimePickerHeight } from './hooks/useTimePickerHeight';
import { useStringValue } from './hooks/useStringValue';
import { MobileDrawerDateTimeCalendar } from './components/MobileDrawerDateTimeCalendar';

export type TProps = {
    value: Date | null;
    onChange: (value: Date) => void;
    placeholder?: string;
    dropdownProps?: Pick<
        TDropdownProps,
        'isAutoPosition' | 'positionLeft' | 'positionRight' | 'positionVertical'
    >;
} & Pick<TPureInputProps, 'hasError' | 'name' | 'onBlur' | 'onFocus'> &
    Pick<TInputLabelProps, 'label'> &
    Pick<TCalendarProps, 'maxDate' | 'minDate'> & { size?: TSizes };

export const DateTimeInput: FC<TProps> = ({
    onChange,
    value,
    hasError,
    name,
    onBlur,
    onFocus,
    label,
    minDate,
    maxDate,
    size = 'M',
    dropdownProps,
    placeholder,
}) => {
    const palette = useComponentPalette<TDateTimeInputPalette>('dateTimeInput');
    const inputRef = useRef<HTMLInputElement>(null);
    const isMobile = useMobile();
    const withTime = true;

    const [isOpen, setOpenFlag] = useState(false);
    const [calendarDropdownValue, setCalendarDropdownValue] = useState<Date | null>(value);
    const [stringValue, setStringValue] = useStringValue(value);

    const handleClose = useCallback(() => setOpenFlag(false), []);
    const handleCloseAndSkipDropdownValue = useCallback(() => {
        setCalendarDropdownValue(value);
        handleClose();
    }, [handleClose, value]);

    const handleTrigger = useCallback(
        () => (isOpen ? handleCloseAndSkipDropdownValue() : setOpenFlag(true)),
        [handleCloseAndSkipDropdownValue, isOpen],
    );

    const elRef = useOutsideClick(handleCloseAndSkipDropdownValue);
    const { calendarRef, handleTimePickerSetHeight, timePickerHeight } = useTimePickerHeight(isOpen);

    const {
        inFocus,
        handleFocus: focusHandler,
        handleBlur: blurHandler,
    } = useInputFocus({ onFocus, onBlur });

    const handleStringValueChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setStringValue(event.target.value);
        },
        [setStringValue],
    );

    const handleBlur = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            blurHandler(event);
            const newValue = logic.stringToDate(stringValue, withTime);

            if (!logic.isValid(newValue) || !logic.isBetweenMinAndMax(newValue, minDate, maxDate)) {
                setStringValue(logic.valueToString(value, withTime));
                return;
            }

            setStringValue(logic.valueToString(newValue, withTime));
            onChange(newValue);
            setCalendarDropdownValue(newValue);
        },
        [blurHandler, maxDate, minDate, onChange, setStringValue, stringValue, value, withTime],
    );

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

    const handleApply = useCallback(() => {
        const newValue = calendarDropdownValue as Date;

        if (!logic.isValid(newValue) || !logic.isBetweenMinAndMax(newValue, minDate, maxDate)) {
            setStringValue(logic.valueToString(value, withTime));
            return;
        }

        setStringValue(logic.valueToString(newValue, withTime));
        onChange(newValue);
        handleClose();
    }, [calendarDropdownValue, handleClose, maxDate, minDate, onChange, setStringValue, value, withTime]);

    return (
        <S.Wrapper ref={isMobile ? undefined : elRef}>
            <InputLabel inFocus={inFocus} label={label}>
                <S.InputWrapper>
                    <PureInput
                        onClick={handleTrigger}
                        ref={inputRef}
                        hasError={hasError}
                        inFocus={inFocus}
                        name={name}
                        placeholder={placeholder || logic.getPlaceholder(withTime)}
                        onFocus={focusHandler}
                        onBlur={handleBlur}
                        value={stringValue}
                        onChange={handleStringValueChange}
                        paddingRight={44}
                        {...SIZE_PARAMS_MAP[size]}
                    />
                    <S.Icon onClick={handleTrigger} $palette={palette}>
                        <CalendarIcon />
                    </S.Icon>
                </S.InputWrapper>
            </InputLabel>
            {!isMobile ? (
                <Dropdown isOpen={isOpen} isAutoPosition {...dropdownProps}>
                    <S.CalendarWithTimePicker $dividerColor={palette.divider}>
                        <S.CalendarWrapper ref={calendarRef} $dividerColor={palette.divider}>
                            <Calendar
                                value={calendarDropdownValue}
                                onChange={handleCalendarChange}
                                minDate={minDate}
                                maxDate={maxDate}
                                onActiveStartDateChange={handleTimePickerSetHeight}
                            />
                        </S.CalendarWrapper>
                        <TimePicker
                            value={[
                                calendarDropdownValue?.getHours() || 0,
                                calendarDropdownValue?.getMinutes() || 0,
                            ]}
                            onChange={handleTimePickerChange}
                            height={timePickerHeight}
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
                    </S.CalendarWithTimePicker>
                    <S.DropdownActionButtons>
                        <S.ActionButton
                            type={'button'}
                            $bgColor={palette.cancelButton}
                            $disabledBgColor={palette.disabledButton}
                            onClick={handleCloseAndSkipDropdownValue}
                        >
                            <CrossIcon />
                        </S.ActionButton>
                        <S.ActionButton
                            type={'button'}
                            $bgColor={palette.applyButton}
                            $disabledBgColor={palette.disabledButton}
                            onClick={handleApply}
                            disabled={
                                !calendarDropdownValue ||
                                !logic.isBetweenMinAndMax(calendarDropdownValue, minDate, maxDate)
                            }
                        >
                            <CheckIcon />
                        </S.ActionButton>
                    </S.DropdownActionButtons>
                </Dropdown>
            ) : (
                <MobileDrawerDateTimeCalendar
                    isOpen={isOpen}
                    onClose={handleCloseAndSkipDropdownValue}
                    calendarDropdownValue={calendarDropdownValue}
                    onCalendarChange={handleCalendarChange}
                    onSubmit={handleApply}
                    afterSubmit={handleClose}
                    maxDate={maxDate}
                    minDate={minDate}
                    onTimeChange={handleTimePickerChange}
                />
            )}
        </S.Wrapper>
    );
};
