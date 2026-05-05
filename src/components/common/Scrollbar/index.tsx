import React, { FC, ReactNode } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useComponentPalette } from '../../../palette';
import { TScrollbarPalette } from './palette';

export type TProps = {
    children: ReactNode;
    maxHeight?: number;
    trackWidth?: number;
    autoHeight?: boolean;
};

export const Scrollbar: FC<TProps> = ({
    children,
    maxHeight = '100%',
    trackWidth = 4,
    autoHeight = true,
}) => {
    const palette = useComponentPalette<TScrollbarPalette>('scrollbar');

    const renderThumbVertical = (thumbProps: any) => (
        <div
            {...thumbProps}
            style={{
                ...thumbProps.style,
                backgroundColor: palette.thumb,
                width: trackWidth,
                borderRadius: '4px',
            }}
        />
    );

    const renderThumbHorizontal = (thumbProps: any) => (
        <div
            {...thumbProps}
            style={{
                ...thumbProps.style,
                backgroundColor: palette.thumb,
                height: trackWidth,
                borderRadius: '4px',
            }}
        />
    );

    return (
        <Scrollbars
            autoHeight={autoHeight}
            autoHeightMin={0}
            autoHeightMax={maxHeight}
            renderThumbHorizontal={renderThumbHorizontal}
            renderThumbVertical={renderThumbVertical}
        >
            {children}
        </Scrollbars>
    );
};
