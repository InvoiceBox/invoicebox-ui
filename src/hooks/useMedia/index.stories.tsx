import React from 'react';
/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';

import { useLargeTablet, useMiniLaptop, useMobile, useTablet } from '.';

const meta: Meta = {
    title: 'hooks/useMedia',
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
    render: () => {
        const isMobile = useMobile();
        const isTablet = useTablet();
        const isLargeTablet = useLargeTablet();
        const isMiniLaptop = useMiniLaptop();

        return (
            <div>
                {isMobile && <div>mobile</div>}
                {isTablet && <div>tablet</div>}
                {isLargeTablet && <div>large tablet</div>}
                {isMiniLaptop && <div>mini laptop</div>}
            </div>
        );
    },
};
