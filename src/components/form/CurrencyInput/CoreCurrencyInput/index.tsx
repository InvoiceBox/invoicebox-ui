import React, { FC, useMemo } from 'react';
import { InputLabel, TProps as TInputLabelProps } from '../../InputLabel';
import { useInputFocus } from '../../../../hooks/useInputFocus';
import { StyledCurrencyInputFromLibrary } from './styles';
import { MODERN_STYLE_SIZE_PARAMS_MAP, SIZE_PARAMS_MAP, TSizes } from '../../constants';
import { useComponentPalette } from '../../../../palette';
import { TPureInputPalette } from '../../PureInput/palette';
import { CurrencyInputProps } from 'react-currency-input-field';

export type TProps = Pick<
    CurrencyInputProps,
    'allowNegativeValue' | 'onValueChange' | 'value' | 'defaultValue' | 'allowDecimals'
> &
    Pick<TInputLabelProps, 'label' | 'disabled'> & {
        hasError?: boolean;
        required?: boolean;
    } & {
        size?: TSizes;
        useModernStyles?: boolean;
    };

export const CoreCurrencyInput: FC<TProps> = ({
    label,
    size = 'M',
    hasError = false,
    value,
    allowNegativeValue = false,
    onValueChange,
    defaultValue,
    allowDecimals = true,
    disabled,
    required = false,
    useModernStyles = false,
}) => {
    const { inFocus, handleFocus, handleBlur } = useInputFocus();
    const palette = useComponentPalette<TPureInputPalette>('pureInput');

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
    }, [useModernStyles, value, inFocus, label]);

    const paddingOptions = useMemo(() => {
        if ((value || inFocus) && useModernStyles && inputLabel) {
            return MODERN_STYLE_SIZE_PARAMS_MAP[size];
        } else {
            return SIZE_PARAMS_MAP[size];
        }
    }, [value, useModernStyles, size, inFocus, inputLabel]);

    const inputPlaceholder = useMemo(() => {
        if (useModernStyles) {
            if (!inFocus) {
                return label;
            }
        }
        return undefined;
    }, [inFocus, label, useModernStyles]);

    return (
        <InputLabel
            inFocus={inFocus}
            label={inputLabel}
            disabled={disabled}
            required={required}
            useModernStyles={useModernStyles}
            size={size}
        >
            <StyledCurrencyInputFromLibrary
                $palette={palette}
                $hasBorder={!useModernStyles}
                $paddingLeft={18}
                $paddingRight={18}
                $borderRadius={10}
                $variant={paddingOptions.variant}
                $paddingTop={paddingOptions.paddingTop}
                $paddingBottom={paddingOptions.paddingBottom}
                $hasError={hasError}
                $inFocus={inFocus}
                onBlur={handleBlur}
                onFocus={handleFocus}
                // currency props
                value={value}
                allowNegativeValue={allowNegativeValue}
                onValueChange={onValueChange}
                defaultValue={defaultValue}
                allowDecimals={allowDecimals}
                decimalsLimit={2}
                decimalSeparator={','}
                groupSeparator={' '}
                disabled={disabled}
                disableAbbreviations={true}
                $useModernStyles={useModernStyles}
                placeholder={inputPlaceholder}
            />
        </InputLabel>
    );
};
