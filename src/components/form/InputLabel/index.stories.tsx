import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { InputLabel, TProps } from '.';
import { Typography } from '../../common/Typography';

const meta: Meta<typeof InputLabel> = {
    title: 'form/InputLabel',
    component: InputLabel,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        disabled: false,
        inFocus: false,
        label: 'Label',
        zIndex: 1,
    },
    render: (props) => (
        <InputLabel {...props}>
            <Typography
                variant="bodyL"
                style={{ border: '1px solid grey', borderRadius: 10, padding: '10px 20px' }}
            >
                Pseudo input
            </Typography>
        </InputLabel>
    ),
};
