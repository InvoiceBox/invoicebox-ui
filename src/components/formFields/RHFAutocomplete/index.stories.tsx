import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RHFAutocomplete, TProps } from '.';
import { selectOptions } from '../../_helpers/selectOptions';
import { FIELD_NAME, StoryOneFieldForm } from '../../_helpers/StoryOneFieldForm';

const meta: Meta<typeof RHFAutocomplete> = {
    title: 'formFields/RHFAutocomplete',
    component: RHFAutocomplete,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        label: 'Label',
        options: selectOptions,
    },
    render: (props) => (
        <StoryOneFieldForm initialValue="">
            <RHFAutocomplete {...props} name={FIELD_NAME} />
        </StoryOneFieldForm>
    ),
};
