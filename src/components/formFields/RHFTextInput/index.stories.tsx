import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RHFTextInput, TProps } from '.';
import { FIELD_NAME, StoryOneFieldForm } from '../../_helpers/StoryOneFieldForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const meta: Meta<typeof RHFTextInput> = {
    title: 'formFields/RHFTextInput',
    component: RHFTextInput,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        label: 'Label',
    },
    render: (props) => (
        <StoryOneFieldForm
            initialValue=""
            resolver={yupResolver(
                yup.object().shape({
                    [FIELD_NAME]: yup.string().required(),
                }),
            )}
        >
            <RHFTextInput {...props} name={FIELD_NAME} />
        </StoryOneFieldForm>
    ),
};
