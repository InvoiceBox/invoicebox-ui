import React, { ChangeEvent, ReactNode, useCallback, useMemo } from 'react';
import * as S from './styles';
import { InputLabel, TProps as TInputLabelProps } from '../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../PureInput';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { MODERN_STYLE_SIZE_PARAMS_MAP, SIZE_PARAMS_MAP, TSizes } from '../constants';
import { ModernPlaceholder } from '../ModernPlaceholder';

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
        },
        ref,
    ) => {
        const { inFocus, handleFocus, handleBlur } = useInputFocus({ onFocus, onBlur });

        const handleChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                onChange(event.target.value.slice(0, maxLength ?? Infinity));
            },
            [onChange, maxLength],
        );

        const inputLabel = useMemo(() => {
            if (useModernStyles) {
                if (value || inFocus) {
                    return label;
                } else {
                    return undefined;
                }
            } else {
                return label;
            }
        }, [inFocus, label, value, useModernStyles]);

        const paddingOptions = useMemo(() => {
            if ((value || inFocus) && useModernStyles && inputLabel) {
                return MODERN_STYLE_SIZE_PARAMS_MAP[size];
            } else {
                return SIZE_PARAMS_MAP[size];
            }
        }, [value, inFocus, useModernStyles, size, inputLabel]);

        const inputPlaceholder = useMemo(() => {
            if (useModernStyles) {
                return undefined;
            } else {
                return placeholder;
            }
        }, [placeholder, useModernStyles]);

        const isModernPlaceholderVisible = useMemo(() => {
            return !inFocus && !value;
        }, [inFocus, value]);

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
                    {useModernStyles && placeholder && (
                        <ModernPlaceholder
                            visible={isModernPlaceholderVisible}
                            paddingTop={SIZE_PARAMS_MAP[size].paddingTop}
                            size={size}
                            required={required}
                        >
                            {placeholder}
                        </ModernPlaceholder>
                    )}
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
                        placeholder={inputPlaceholder}
                        paddingRight={paddingRight}
                        type={type}
                        isOnlyNumbers={isOnlyNumbers}
                        autoFocus={autoFocus}
                        element={element}
                        rows={rows}
                        useModernStyles={useModernStyles}
                        inputMode={inputMode}
                        readOnly={readOnly}
                        {...paddingOptions}
                    />
                    {children && <S.ChildrenWrapper>{children}</S.ChildrenWrapper>}
                </S.InputLabelContent>
            </InputLabel>
        );
    },
);

TextInput.displayName = 'TextInput';
