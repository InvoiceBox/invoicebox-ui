import React from 'react';
/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';

import { useLoadingSubmit } from '.';

const meta: Meta = {
    title: 'hooks/useLoadingSubmit',
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
    render: () => {
        const { isLoadingSubmit, toggleLoadingSubmit, startLoadingSubmit, endLoadingSubmit } =
            useLoadingSubmit();

        return (
            <div>
                <div>isLoadingSubmit: {isLoadingSubmit.toString()}</div>
                <button type={'button'} onClick={toggleLoadingSubmit}>
                    Toggle loading submit
                </button>
                <button type={'button'} onClick={startLoadingSubmit}>
                    Start loading submit
                </button>
                <button type={'button'} onClick={endLoadingSubmit}>
                    End loading submit
                </button>
            </div>
        );
    },
};
