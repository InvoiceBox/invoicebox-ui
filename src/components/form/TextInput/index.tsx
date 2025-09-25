import React, { ChangeEvent, FC, ReactNode, Ref, useCallback } from 'react';
import * as S from './styles';
import { InputLabel, TProps as TInputLabelProps } from '../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../PureInput';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { SIZE_PARAMS_MAP, TSizes } from '../constants';

export type TProps = Pick<TInputLabelProps, 'label' | 'required'> &
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
        required?: boolean;
        ref?: Ref<HTMLInputElement>;
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
    size = 'M',
    isOnlyNumbers,
    autoFocus,
    element = 'input',
    rows,
    required = false,
    ref,
}) => {
    const { inFocus, handleFocus, handleBlur } = useInputFocus({ onFocus, onBlur });

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value.slice(0, maxLength ?? Infinity));
        },
        [onChange, maxLength],
    );

    return (
        <InputLabel inFocus={inFocus} label={label} disabled={disabled} required={required}>
            <S.InputLabelContent>
                <PureInput
                    ref={ref}
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
                    rows={rows}
                    {...SIZE_PARAMS_MAP[size]}
                />
                {children && <S.ChildrenWrapper>{children}</S.ChildrenWrapper>}
            </S.InputLabelContent>
        </InputLabel>
    );
};
