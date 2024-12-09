import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EntityAutocompleteOptionsDrawer, TProps } from '.';

const meta: Meta<typeof EntityAutocompleteOptionsDrawer> = {
    title: 'common/EntityAutocompleteOptionsDrawer',
    component: EntityAutocompleteOptionsDrawer,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        onChange: { action: 'onChange' },
    },
};

export default meta;
type TStory = StoryObj<TProps>;

const minValidLength = 3;

function Render(props: TProps) {
    const [isOpen, setIsOpen] = useState(false);

    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);

    return (
        <div>
            <button type={'button'} onClick={open}>
                Open
            </button>
            <EntityAutocompleteOptionsDrawer {...props} isOpen={isOpen} onClose={close} />
        </div>
    );
}

const commonArgs = {
    notFoundLabel: 'Не найдено',
    minValidLength,
    minLengthLabel: `Укажите более ${minValidLength} символов`,
    isLoadingOptions: false,
    searchValue: '1234',
    searchInputField: <div> Input here </div>,
    renderOption: (option: any) => {
        return <div> {option.entity.name} </div>;
    },
    options: [
        {
            value: '1',
            entity: {
                id: '1',
                name: 'Name one',
            },
        },
        {
            value: '2',
            entity: {
                id: '2',
                name: 'Name two',
            },
        },
        {
            value: '3',
            entity: {
                id: '3',
                name: 'Name three',
            },
        },
    ],
};

export const Default: TStory = {
    args: commonArgs,
    render: Render,
};

export const Loading: TStory = {
    args: { ...commonArgs, isLoadingOptions: true },
    render: Render,
};

export const NotFound: TStory = {
    args: { ...commonArgs, options: [] },
    render: Render,
};

export const SmallValueLength: TStory = {
    args: { ...commonArgs, searchValue: Array(minValidLength).fill('1').join('').slice(0, -1) },
    render: Render,
};
