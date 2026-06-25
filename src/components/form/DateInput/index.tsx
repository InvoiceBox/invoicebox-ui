import React, { ChangeEvent, FC, FocusEvent, useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { logic } from './logic';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { InputLabel, TProps as TInputLabelProps } from '../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../PureInput';
import { Dropdown } from '../../common/Dropdown';
import { Calendar, TProps as TCalendarProps } from '../../common/Calendar';
import { CalendarIcon } from './components/CalendarIcon';
import { useComponentPalette } from '../../../palette';
import { TDateInputPalette } from './palette';
import { TSizes } from '../constants';
import { TDropdownProps, useMobile } from '../../../index';
import { MobileDrawerDateCalendar } from './components/MobileDrawerDateCalendar';
import { useInputStyles } from '../_hooks/useInputStyles';

export type TProps = {
    value: Date | null;
    onChange: (value: Date) => void;
    placeholder?: string;
    dropdownProps?: Pick<
        TDropdownProps,
        'isAutoPosition' | 'positionLeft' | 'positionRight' | 'positionVertical'
    >;
    useModernStyles?: boolean;
    required?: boolean;
} & Pick<TPureInputProps, 'hasError' | 'name' | 'onBlur' | 'onFocus'> &
    Pick<TInputLabelProps, 'label'> &
    Pick<TCalendarProps, 'maxDate' | 'minDate'> & { size?: TSizes };

const resetValue = null;

export const DateInput: FC<TProps> = ({
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
    useModernStyles = false,
    required = false,
}) => {
    const palette = useComponentPalette<TDateInputPalette>('dateInput');
    const inputRef = useRef<HTMLInputElement>(null);
    const isMobile = useMobile();

    const [isOpen, setOpenFlag] = useState(false);

    const handleTrigger = useCallback(() => setOpenFlag((flag) => !flag), []);
    const handleClose = useCallback(() => setOpenFlag(false), []);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const elRef = useOutsideClick(handleClose, [dropdownRef]);

    const {
        inFocus,
        handleFocus: focusHandler,
        handleBlur: blurHandler,
    } = useInputFocus({ onFocus, onBlur });

    const handleFocus = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            handleClose();
            focusHandler(event);
        },
        [focusHandler, handleClose],
    );

    const [stringValue, setStringValue] = useState(logic.valueToString(value));

    const { inputLabel, paddingAndVariantOptions, modernPlaceholder } = useInputStyles({
        isHaveValue: !!stringValue,
        useModernStyles,
        size,
        label,
        inFocus,
        placeholder,
        conditionHideModernPlaceholder: isOpen,
        required,
    });

    useEffect(() => {
        if (stringValue && value === resetValue) {
            setStringValue('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const handleStringValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setStringValue(event.target.value);
    }, []);

    const handleBlur = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            blurHandler(event);

            const newValue = logic.stringToDate(stringValue);

            if (!logic.isValid(newValue) || !logic.isBetweenMinAndMax(newValue, minDate, maxDate)) {
                setStringValue(logic.valueToString(value));
                return;
            }

            setStringValue(logic.valueToString(newValue));
            onChange(newValue);
        },
        [blurHandler, stringValue, minDate, maxDate, onChange, value],
    );

    const handleCalendarChange = useCallback(
        (newValue: Date) => {
            handleClose();
            setStringValue(logic.valueToString(newValue, false));
            onChange(newValue);
        },
        [handleClose, onChange],
    );

    return (
        <S.Wrapper ref={isMobile ? undefined : elRef}>
            <InputLabel
                inFocus={inFocus}
                label={inputLabel}
                useModernStyles={useModernStyles}
                size={size}
                required={required}
            >
                <S.InputWrapper>
                    {modernPlaceholder}
                    <PureInput
                        onClick={handleTrigger}
                        ref={inputRef}
                        hasError={hasError}
                        inFocus={inFocus}
                        name={name}
                        placeholder={useModernStyles ? undefined : placeholder || logic.getPlaceholder()}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={stringValue}
                        onChange={handleStringValueChange}
                        paddingRight={44}
                        useModernStyles={useModernStyles}
                        {...paddingAndVariantOptions}
                    />
                    <S.Icon onClick={handleTrigger} $palette={palette}>
                        <CalendarIcon />
                    </S.Icon>
                </S.InputWrapper>
            </InputLabel>
            {isMobile ? (
                <MobileDrawerDateCalendar
                    isOpen={isOpen}
                    onClose={handleClose}
                    value={value}
                    onChange={handleCalendarChange}
                    minDate={minDate}
                    maxDate={maxDate}
                />
            ) : (
                <Dropdown ref={dropdownRef} isOpen={isOpen} isAutoPosition {...dropdownProps}>
                    <S.CalendarWrapper>
                        <Calendar
                            value={value}
                            onChange={handleCalendarChange}
                            minDate={minDate}
                            maxDate={maxDate}
                        />
                    </S.CalendarWrapper>
                </Dropdown>
            )}
        </S.Wrapper>
    );
};
