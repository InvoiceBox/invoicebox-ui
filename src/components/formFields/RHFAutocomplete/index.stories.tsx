import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RHFAutocomplete, TProps } from '.';
import { selectOptions } from '../../_helpers/selectOptions';
import { FIELD_NAME, StoryOneFieldForm } from '../../_helpers/StoryOneFieldForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
        <StoryOneFieldForm
            initialValue=""
            resolver={yupResolver(
                yup.object().shape({
                    [FIELD_NAME]: yup.string().required(),
                }),
            )}
        >
            <RHFAutocomplete {...props} name={FIELD_NAME} />
        </StoryOneFieldForm>
    ),
};
