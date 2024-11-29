import React, { ChangeEvent, FC, ReactNode, useCallback } from 'react';
import * as S from './styles';
import { InputLabel, TProps as TInputLabelProps } from '../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../PureInput';
import { useInputFocus } from '../../../hooks/useInputFocus';

type TSizes = 'M' | 'L';

const SIZE_PADDING_MAP: Record<TSizes, { paddingTop: number; paddingBottom: number }> = {
    L: { paddingTop: 12, paddingBottom: 12 },
    M: { paddingTop: 8, paddingBottom: 8 },
};

export type TProps = Pick<TInputLabelProps, 'label'> &
    Pick<
        TPureInputProps,
        'placeholder' | 'hasError' | 'onFocus' | 'onBlur' | 'disabled' | 'name' | 'paddingRight' | 'type'
    > & {
        value: string;
        onChange: (value: string) => void;
        maxLength?: number;
        size?: TSizes;
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
    type,
    children,
    size = 'L',
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
                    {...SIZE_PADDING_MAP[size]}
                />
                {children && <S.ChildrenWrapper>{children}</S.ChildrenWrapper>}
            </S.InputLabelContent>
        </InputLabel>
    );
};
