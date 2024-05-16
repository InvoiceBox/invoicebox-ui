import type { Meta, StoryObj } from '@storybook/react';

import { ToastContainer, toast } from '.';

import 'react-toastify/dist/ReactToastify.css';

const meta = {
    title: 'common/Toast',
    component: ToastContainer,
    tags: ['autodocs'],
} satisfies Meta<typeof ToastContainer>;

export default meta;

export const Default: StoryObj<typeof ToastContainer> = {
    render: () => (
        <div>
            <ToastContainer />
            <button
                onClick={() => {
                    toast.success('Success');
                }}
            >
                Success
            </button>
            <button
                onClick={() => {
                    toast.error('Error');
                }}
            >
                Error
            </button>
        </div>
    ),
};
