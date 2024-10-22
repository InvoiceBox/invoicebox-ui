import React, { FC, useCallback } from 'react';
import { Controller, ControllerFieldState, ControllerRenderProps, useFormContext } from 'react-hook-form';
import { TextInput, TTextInputProps } from '../../../index';

export type TProps = Omit<TTextInputProps, 'onChange' | 'value' | 'hasError' | 'onBlur' | 'onFocus'> & {
    name: string;
};

export const RHFTextInput: FC<TProps> = ({ name, ...other }) => {
    const { control } = useFormContext();

    const render = useCallback(
        ({
            field,
            fieldState: { error },
        }: {
            field: ControllerRenderProps;
            fieldState: ControllerFieldState;
        }) => {
            return (
                <TextInput
                    {...other}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value || ''}
                    hasError={!!error}
                />
            );
        },
        [other],
    );

    return <Controller name={name} control={control} render={render} />;
};
