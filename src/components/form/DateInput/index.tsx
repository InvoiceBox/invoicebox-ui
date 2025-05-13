import React, { ChangeEvent, FC, FocusEvent, useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { logic } from './logic';

import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { InputLabel, TProps as TInputLabelProps } from '../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../PureInput';
import { Dropdown } from '../../common/Dropdown';
import { Calendar, TProps as TCalendarProps } from '../../common/Calendar';
import { Icon } from './components/Icon';
import { useComponentPalette } from '../../../palette';
import { TDateInputPalette } from './palette';
import { SIZE_PADDING_MAP, TSizes } from '../constants';

export type TProps = {
    value: Date | null;
    onChange: (value: Date) => void;
    withTime?: boolean;
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
    withTime = false,
    size = 'M',
}) => {
    const palette = useComponentPalette<TDateInputPalette>('dateInput');
    const inputRef = useRef<HTMLInputElement>(null);

    const [isOpen, setOpenFlag] = useState(false);

    const handleTrigger = useCallback(() => setOpenFlag((flag) => !flag), []);
    const handleClose = useCallback(() => setOpenFlag(false), []);

    const elRef = useOutsideClick(handleClose);

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

    const [stringValue, setStringValue] = useState(logic.valueToString(value, withTime));

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

            const newValue = logic.stringToDate(stringValue, withTime);

            if (!logic.isValid(newValue) || !logic.isBetweenMinAndMax(newValue, minDate, maxDate)) {
                setStringValue(logic.valueToString(value, withTime));
                return;
            }

            setStringValue(logic.valueToString(newValue, withTime));
            onChange(newValue);
        },
        [blurHandler, stringValue, minDate, maxDate, withTime, onChange, value],
    );

    const handleCalendarChange = useCallback(
        (newValue: Date) => {
            handleClose();

            if (withTime) {
                setStringValue(logic.valueToString(newValue, false) + ' ');
                inputRef.current?.focus();
            } else {
                setStringValue(logic.valueToString(newValue, false));
                onChange(newValue);
            }
        },
        [handleClose, withTime, onChange],
    );

    return (
        <S.Wrapper ref={elRef}>
            <InputLabel inFocus={inFocus} label={label}>
                <S.InputWrapper>
                    <PureInput
                        ref={inputRef}
                        hasError={hasError}
                        inFocus={inFocus}
                        name={name}
                        placeholder={logic.getPlaceholder(withTime)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={stringValue}
                        onChange={handleStringValueChange}
                        paddingRight={44}
                        {...SIZE_PADDING_MAP[size]}
                    />
                    <S.Icon onClick={handleTrigger} $palette={palette}>
                        <Icon />
                    </S.Icon>
                </S.InputWrapper>
            </InputLabel>
            <Dropdown isOpen={isOpen} isAutoPosition>
                <S.CalendarWrapper>
                    <Calendar
                        value={value}
                        onChange={handleCalendarChange}
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                </S.CalendarWrapper>
            </Dropdown>
        </S.Wrapper>
    );
};
