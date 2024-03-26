import React, { ChangeEvent, FC, FocusEvent, InputHTMLAttributes, useCallback, useState } from 'react';
import * as S from './styles';
import { logic } from './logic';

import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { InputLabel } from '../InputLabel';
import { PureInput } from '../PureInput';
import { Dropdown } from '../../common/Dropdown';
import { Calendar } from '../../common/Calendar';

type TFieldProps = Pick<InputHTMLAttributes<HTMLInputElement>, 'name' | 'onBlur' | 'onFocus'> & {
    hasError?: boolean;
    value: Date | null;
    onChange: (value: Date) => void;
};

export type TControlProps = {
    label?: string;
    minDate?: Date;
    maxDate?: Date;
};

export type TProps = TFieldProps & TControlProps;

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
}) => {
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

    const [stringValue, setStringValue] = useState(logic.valueToString(value));

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
        [blurHandler, value, stringValue, onChange, maxDate, minDate],
    );

    const handleCalendarChange = useCallback(
        (newValue: Date) => {
            handleClose();
            setStringValue(logic.valueToString(newValue));
            onChange(newValue);
        },
        [onChange, handleClose],
    );

    return (
        <S.Wrapper ref={elRef}>
            <InputLabel inFocus={inFocus} label={label}>
                <S.InputWrapper>
                    <PureInput
                        hasError={hasError}
                        inFocus={inFocus}
                        name={name}
                        placeholder={logic.getPlaceholder()}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={stringValue}
                        onChange={handleStringValueChange}
                        paddingRight={44}
                    />
                    <S.Icon onClick={handleTrigger}>icon</S.Icon>
                </S.InputWrapper>
            </InputLabel>
            <Dropdown isOpen={isOpen} isAutoPosition>
                <S.Calendar>
                    <Calendar
                        value={value}
                        onChange={handleCalendarChange}
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                </S.Calendar>
            </Dropdown>
        </S.Wrapper>
    );
};
