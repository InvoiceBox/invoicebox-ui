import React, { FC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import { Portal } from '../../common/Portal';
import { DevTool } from '@hookform/devtools';

export const FIELD_NAME = 'field';

type TProps = {
    children: ReactNode;
    initialValue: any;
};

export const StoryOneFieldForm: FC<TProps> = ({ children, initialValue }) => {
    const methods = useForm({
        defaultValues: { [FIELD_NAME]: initialValue },
    });

    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={() => handleSubmit(() => action('submit'))}>
                {children}
                <button type="submit">Отправить</button>

                <Portal>
                    <DevTool control={methods.control} placement="top-right" />
                </Portal>
            </form>
        </FormProvider>
    );
};
