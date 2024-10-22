import React, { FC, useCallback } from 'react';
import { Controller, ControllerFieldState, ControllerRenderProps, useFormContext } from 'react-hook-form';
import { TextInput, TTextInputProps } from '../../../index';

export type TProps = Omit<TTextInputProps, 'onChange' | 'value' | 'hasError'> & {
    name: string;
};

export const RHFTextInput: FC<TProps> = ({ name, ...other }) => {
    const { control } = useFormContext();

    const render = useCallback(
        ({
            field,
            fieldState: { error, isTouched },
        }: {
            field: ControllerRenderProps;
            fieldState: ControllerFieldState;
        }) => <TextInput {...other} {...field} value={field.value || ''} hasError={!!error && isTouched} />,
        [other],
    );

    return <Controller name={name} control={control} render={render} />;
};
