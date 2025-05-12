import React, { FC } from 'react';
import { CoreCurrencyInput, TProps as TCoreCurrencyInputProps } from '../CoreCurrencyInput';

export type TProps = Omit<TCoreCurrencyInputProps, 'defaultValue' | 'onValueChange'> & {
    onChange: (value?: string) => void;
};

export const CurrencyInputString: FC<TProps> = ({ onChange, ...other }) => {
    const handleValueChange = (newValue?: string) => {
        onChange(newValue);
    };

    return <CoreCurrencyInput onValueChange={handleValueChange} {...other} />;
};
