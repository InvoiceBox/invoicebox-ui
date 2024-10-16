import React, { ChangeEvent, FC, ReactNode, useCallback } from 'react';
import * as S from './styles';
import { InputLabel, TProps as TInputLabelProps } from '../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../PureInput';
import { useInputFocus } from '../../../hooks/useInputFocus';

export type TProps = Pick<TInputLabelProps, 'label'> &
    Pick<
        TPureInputProps,
        'placeholder' | 'hasError' | 'onFocus' | 'onBlur' | 'disabled' | 'name' | 'paddingRight'
    > & {
        value: string;
        onChange: (value: string) => void;
        maxLength?: number;
        children?: ReactNode;
    };

export const TextInput: FC<TProps> = ({
    hasError = false,
    onFocus,
    onBlur,
    value,
    onChange,
    label,
    name,
    maxLength,
    disabled,
    placeholder,
    paddingRight,
    children,
}) => {
    const { inFocus, handleFocus, handleBlur } = useInputFocus({ onFocus, onBlur });

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value.slice(0, maxLength ?? Infinity));
        },
        [onChange, maxLength],
    );

    return (
        <InputLabel inFocus={inFocus} label={label} disabled={disabled}>
            <S.InputLabelContent>
                <PureInput
                    name={name}
                    disabled={disabled}
                    hasError={hasError}
                    inFocus={inFocus}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    paddingRight={paddingRight}
                />
                {children && <S.ChildrenWrapper>{children}</S.ChildrenWrapper>}
            </S.InputLabelContent>
        </InputLabel>
    );
};
