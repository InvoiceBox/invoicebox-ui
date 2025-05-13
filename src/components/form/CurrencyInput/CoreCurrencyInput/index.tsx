import React, { FC } from 'react';
import { InputLabel, TProps as TInputLabelProps } from '../../InputLabel';
import { useInputFocus } from '../../../../hooks/useInputFocus';
import { StyledCurrencyInputFromLibrary } from './styles';
import { SIZE_PADDING_MAP, TSizes } from '../../constants';
import { useComponentPalette } from '../../../../palette';
import { TPureInputPalette } from '../../PureInput/palette';
import { CurrencyInputProps } from 'react-currency-input-field';

export type TProps = Pick<
    CurrencyInputProps,
    'allowNegativeValue' | 'onValueChange' | 'value' | 'defaultValue' | 'allowDecimals'
> &
    Pick<TInputLabelProps, 'label' | 'disabled'> & {
        hasError?: boolean;
    } & {
        size?: TSizes;
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
}) => {
    const { inFocus, handleFocus, handleBlur } = useInputFocus();
    const palette = useComponentPalette<TPureInputPalette>('pureInput');

    const { paddingBottom, paddingTop } = SIZE_PADDING_MAP[size];

    return (
        <InputLabel inFocus={inFocus} label={label} disabled={disabled}>
            <StyledCurrencyInputFromLibrary
                $palette={palette}
                $hasBorder
                $paddingLeft={18}
                $paddingRight={18}
                $paddingTop={paddingTop}
                $paddingBottom={paddingBottom}
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
            />
        </InputLabel>
    );
};
