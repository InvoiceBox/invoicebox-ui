import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AutocompleteDefaultOption } from '.';
import { StoryBorderWrapper } from '../../../../_helpers/StoryBorderWrapper';

const meta: Meta<typeof AutocompleteDefaultOption> = {
    title: 'form/Autocomplete/components/AutocompleteDefaultOption',
    component: AutocompleteDefaultOption,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof AutocompleteDefaultOption> = {
    args: {
        children: (
            <>
                <div>children</div>
                <div>children</div>
            </>
        ),
    },
    render: (props) => (
        <StoryBorderWrapper>
            <AutocompleteDefaultOption {...props} />
        </StoryBorderWrapper>
    ),
};
