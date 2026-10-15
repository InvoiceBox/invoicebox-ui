import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useModal } from '../../../hooks/useModal';
import { Modal, TProps } from '.';

const meta: Meta<typeof Modal> = {
    title: 'common/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: {},
    render: function Render(args) {
        const [isOpen, open, close] = useModal(false);

        return (
            <div>
                <button type="button" onClick={open}>
                    Open
                </button>
                <Modal {...args} onClose={close} isOpen={isOpen}>
                    <div style={{ padding: 24 }}>Content</div>
                </Modal>
            </div>
        );
    },
};

export const Expandable: StoryObj<TProps> = {
    args: {},
    render: function Render(args) {
        const [isOpen, open, close] = useModal(false);

        return (
            <div>
                <button type="button" onClick={open}>
                    Open
                </button>
                <Modal {...args} onClose={close} isOpen={isOpen} isExpandable width={600} overflow="visible">
                    <div style={{ width: 600, flex: 1, background: '#f2f4f6', borderRadius: 20 }}>
                        <div style={{ padding: 24, height: 200 }}>Content</div>
                    </div>
                </Modal>
            </div>
        );
    },
};
