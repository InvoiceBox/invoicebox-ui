import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown, TProps } from '.';

const meta: Meta<typeof Dropdown> = {
    title: 'common/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
};

export default meta;

const args: TProps = {
    isOpen: false,
    positionVertical: 5,
    positionLeft: '0px',
    positionRight: 'auto',
    minWidth: 'auto',
    width: 'auto',
    zIndex: 5,
    onCloseTransitionEnd: action('closeTransitionEnd'),
    children: Array(100).fill('children ').join(''),
};

export const Default: StoryObj<TProps> = {
    args: {
        ...args,
        isAutoPosition: false,
    },
    render: (props) => (
        <div style={{ position: 'relative' }}>
            <div>parent</div>
            <Dropdown {...props} />
        </div>
    ),
};

export const AutoPosition: StoryObj<TProps> = {
    args: {
        ...args,
        isAutoPosition: true,
    },
    render: (props) => (
        <div>
            Дропдаун ниже ↓
            <div style={{ position: 'relative', marginTop: '800px', marginBottom: '800px' }}>
                <div>parent</div>
                <Dropdown {...props} />
            </div>
        </div>
    ),
};
