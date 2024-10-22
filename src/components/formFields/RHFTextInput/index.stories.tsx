import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RHFTextInput, TProps } from '.';
import { FIELD_NAME, StoryOneFieldForm } from '../../_helpers/StoryOneFieldForm';

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
        <StoryOneFieldForm initialValue="">
            <RHFTextInput {...props} name={FIELD_NAME} />
        </StoryOneFieldForm>
    ),
};
