import React, { FC } from 'react';
import { InputLabel, TProps as TInputLabelProps } from '../../InputLabel';
import { useInputFocus } from '../../../../hooks/useInputFocus';
import { StyledCurrencyInputFromLibrary, InputWrapper } from './styles';
import { TSizes } from '../../constants';
import { useComponentPalette } from '../../../../palette';
import { TPureInputPalette } from '../../PureInput/palette';
import { CurrencyInputProps } from 'react-currency-input-field';
import { useInputStyles } from '../../_hooks/useInputStyles';

export type TProps = Pick<
    CurrencyInputProps,
    'allowNegativeValue' | 'onValueChange' | 'value' | 'defaultValue' | 'allowDecimals' | 'onBlur'
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
    onBlur,
    useModernStyles = false,
}) => {
    const { inFocus, handleFocus, handleBlur } = useInputFocus({ onBlur });
    const palette = useComponentPalette<TPureInputPalette>('pureInput');

    const { modernPlaceholder, paddingAndVariantOptions, inputLabel } = useInputStyles({
        isHaveValue: !!value || typeof defaultValue === 'number',
        useModernStyles,
        size,
        label,
        inFocus,
        placeholder: '',
        required,
    });

    return (
        <InputLabel
            inFocus={inFocus}
            label={inputLabel}
            disabled={disabled}
            required={required}
            useModernStyles={useModernStyles}
            size={size}
        >
            <InputWrapper>
                {modernPlaceholder}
                <StyledCurrencyInputFromLibrary
                    $palette={palette}
                    $hasBorder={!useModernStyles}
                    $paddingLeft={18}
                    $paddingRight={18}
                    $borderRadius={10}
                    $variant={paddingAndVariantOptions.variant}
                    $paddingTop={paddingAndVariantOptions.paddingTop}
                    $paddingBottom={paddingAndVariantOptions.paddingBottom}
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
                />
            </InputWrapper>
        </InputLabel>
    );
};
