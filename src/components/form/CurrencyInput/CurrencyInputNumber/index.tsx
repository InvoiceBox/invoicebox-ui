import React, { FC } from 'react';
import { CoreCurrencyInput, TProps as TCoreCurrencyInputProps } from '../CoreCurrencyInput';

export type TProps = Omit<TCoreCurrencyInputProps, 'value' | 'onValueChange'> & {
    onChange: (value?: number) => void;
};

export const CurrencyInputNumber: FC<TProps> = ({ onChange, ...other }) => {
    const handleValueChange = (newValue?: string, name?: string, values?: { float: number | null }) => {
        onChange(values?.float || undefined);
    };

    return <CoreCurrencyInput onValueChange={handleValueChange} {...other} />;
};
