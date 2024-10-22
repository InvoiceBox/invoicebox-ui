import React, { FC, useCallback } from 'react';
import { Controller, ControllerFieldState, ControllerRenderProps, useFormContext } from 'react-hook-form';
import { Autocomplete, TAutocompleteProps } from '../../../index';

export type TProps = Omit<TAutocompleteProps, 'value' | 'onBlur' | 'onFocus'> & { name: string } & Pick<
        Partial<TAutocompleteProps>,
        'onChange'
    >;

export const RHFAutocomplete: FC<TProps> = ({ name, onChange, ...other }) => {
    const { control } = useFormContext();

    const render = useCallback(
        ({
            field,
            fieldState: { error },
        }: {
            field: ControllerRenderProps;
            fieldState: ControllerFieldState;
        }) => {
            const handleChange = (value: string, option?: { entity?: any; value: string }) => {
                field.onChange(value);
                if (onChange) {
                    onChange(value, option);
                }
            };

            return (
                <Autocomplete
                    {...other}
                    onBlur={field.onBlur}
                    onChange={handleChange}
                    value={field.value || ''}
                    hasError={!!error}
                />
            );
        },
        [onChange, other],
    );

    return <Controller name={name} control={control} render={render} />;
};
