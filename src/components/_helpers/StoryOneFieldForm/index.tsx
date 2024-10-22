import React, { FC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { Resolver, useForm } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

export const FIELD_NAME = 'field';

type TProps = {
    children: ReactNode;
    initialValue: any;
    resolver?: Resolver<{ field: any }>;
};

export const StoryOneFieldForm: FC<TProps> = ({ children, initialValue, resolver }) => {
    const methods = useForm({
        defaultValues: { [FIELD_NAME]: initialValue },
        resolver,
        mode: 'onChange',
    });

    const { handleSubmit } = methods;

    const submit = () => {
        action('submit');
    };

    return (
        <FormProvider {...methods}>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <form onSubmit={handleSubmit(submit)}>
                {children}
                <button type="submit">Отправить</button>
                <DevTool control={methods.control} placement="top-right" />
            </form>
        </FormProvider>
    );
};
