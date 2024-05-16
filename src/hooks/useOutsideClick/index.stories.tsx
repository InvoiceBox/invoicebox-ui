import React from 'react';
/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { useOutsideClick } from '.';

const meta: Meta = {
    title: 'hooks/useOutsideClick',
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
    render: () => {
        const ref = useOutsideClick(action('clicked outside'));

        return (
            <div ref={ref} style={{ border: '1px solid black', padding: 15 }}>
                inside
            </div>
        );
    },
};
