import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TProps, OrganizationAutocompleteItem } from '.';

const meta: Meta<typeof OrganizationAutocompleteItem> = {
    title: 'form/Autocomplete/components/OrganizationAutocompleteItem',
    component: OrganizationAutocompleteItem,
    tags: ['autodocs'],
};

export default meta;
type TStory = StoryObj<TProps>;

export const Default: TStory = {
    args: {
        name: 'ООО «Название организации»',
        registrationAddress: 'Санкт-Петербург дом 30',
        vatNumber: '2323232323',
        vatNumberLabel: 'ИНН',
        taxRegistrationReasonCodeLabel: 'КПП',
        taxRegistrationReasonCode: '111111111',
        // eslint-disable-next-line react/jsx-key
        tags: [<div>Tag1</div>, <div>Tag2</div>],
    },
};
