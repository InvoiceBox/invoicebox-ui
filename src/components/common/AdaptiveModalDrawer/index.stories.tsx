import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useModal } from '../../../hooks/useModal';
import { AdaptiveModalDrawer, TProps } from '.';

const meta: Meta<typeof AdaptiveModalDrawer> = {
    title: 'common/AdaptiveModalDrawer',
    component: AdaptiveModalDrawer,
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
                <AdaptiveModalDrawer {...args} onClose={close} isOpen={isOpen}>
                    <div style={{ padding: 24 }}>Модалка на десктопе, шторка на мобильном</div>
                </AdaptiveModalDrawer>
            </div>
        );
    },
};
