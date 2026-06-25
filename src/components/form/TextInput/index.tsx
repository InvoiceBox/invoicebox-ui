import React, { ChangeEvent, ReactNode, useCallback } from 'react';
import * as S from './styles';
import { InputLabel, TProps as TInputLabelProps } from '../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../PureInput';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { TSizes } from '../constants';
import { useInputStyles } from '../_hooks/useInputStyles';

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
        | 'id'
        | 'useModernStyles'
        | 'readOnly'
        | 'inputMode'
        | 'autoComplete'
    > & {
        value: string;
        onChange: (value: string) => void;
        maxLength?: number;
        size?: TSizes;
        children?: ReactNode;
        element?: 'input' | 'textarea';
        required?: boolean;
    };

export const TextInput = React.forwardRef<HTMLInputElement, TProps>(
    (
        {
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
            useModernStyles = false,
            id,
            inputMode,
            readOnly,
            autoComplete,
        },
        ref,
    ) => {
        const { inFocus, handleFocus, handleBlur } = useInputFocus({ onFocus, onBlur });

        const { inputLabel, paddingAndVariantOptions, modernPlaceholder } = useInputStyles({
            isHaveValue: !!value,
            useModernStyles,
            size,
            label,
            inFocus,
            placeholder,
            required,
        });

        const handleChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                onChange(event.target.value.slice(0, maxLength ?? Infinity));
            },
            [onChange, maxLength],
        );

        return (
            <InputLabel
                inFocus={inFocus}
                label={inputLabel}
                disabled={disabled}
                required={required}
                size={size}
                useModernStyles={useModernStyles}
            >
                <S.InputLabelContent>
                    {modernPlaceholder}
                    <PureInput
                        id={id}
                        ref={ref}
                        name={name}
                        disabled={disabled}
                        hasError={hasError}
                        inFocus={inFocus}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={value}
                        onChange={handleChange}
                        placeholder={useModernStyles ? undefined : placeholder}
                        paddingRight={paddingRight}
                        type={type}
                        isOnlyNumbers={isOnlyNumbers}
                        autoFocus={autoFocus}
                        element={element}
                        rows={rows}
                        useModernStyles={useModernStyles}
                        inputMode={inputMode}
                        readOnly={readOnly}
                        autoComplete={autoComplete}
                        {...paddingAndVariantOptions}
                    />
                    {children && <S.ChildrenWrapper>{children}</S.ChildrenWrapper>}
                </S.InputLabelContent>
            </InputLabel>
        );
    },
);

TextInput.displayName = 'TextInput';
