import React, { ChangeEvent, FC, ReactNode, useCallback } from 'react';
import * as S from './styles';
import { InputLabel, TProps as TInputLabelProps } from '../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../PureInput';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { SIZE_PADDING_MAP, TSizes } from '../constants';

export type TProps = Pick<TInputLabelProps, 'label'> &
    Pick<
        TPureInputProps,
        | 'placeholder'
        | 'hasError'
        | 'onFocus'
        | 'onBlur'
        | 'disabled'
        | 'name'
        | 'paddingRight'
        | 'type'
        | 'isOnlyNumbers'
        | 'autoFocus'
        | 'rows'
    > & {
        value: string;
        onChange: (value: string) => void;
        maxLength?: number;
        size?: TSizes;
        children?: ReactNode;
        element?: 'input' | 'textarea';
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
    type,
    children,
    size = 'L',
    isOnlyNumbers,
    autoFocus,
    element = 'input',
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
                    type={type}
                    isOnlyNumbers={isOnlyNumbers}
                    autoFocus={autoFocus}
                    element={element}
                    {...SIZE_PADDING_MAP[size]}
                />
                {children && <S.ChildrenWrapper>{children}</S.ChildrenWrapper>}
            </S.InputLabelContent>
        </InputLabel>
    );
};
