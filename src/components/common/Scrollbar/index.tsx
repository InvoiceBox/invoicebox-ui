import React, { FC, ReactNode, useMemo } from 'react';
import { Scrollbar as LibScrollbar } from 'react-scrollbars-custom';
import { useComponentPalette } from '../../../palette';
import { TScrollbarPalette } from './palette';

export type TProps = {
    children: ReactNode;
    maxHeight: number;
};

export const Scrollbar: FC<TProps> = ({ children, maxHeight }) => {
    const palette = useComponentPalette<TScrollbarPalette>('scrollbar');

    const props = useMemo(
        () => ({
            style: { maxHeight, minWidth: '100%', maxWidth: '100%' },
            wrapperProps: {
                style: {
                    right: '0px',
                    bottom: '0px',
                },
            },
            thumbYProps: {
                style: {
                    backgroundColor: palette.thumb,
                },
            },
            trackYProps: {
                style: {
                    backgroundColor: 'transparent',
                    width: '6px',
                    height: 'calc(100% - 4px)',
                    top: '2px',
                    right: '2px',
                },
            },
            thumbXProps: {
                style: {
                    backgroundColor: palette.thumb,
                },
            },
            trackXProps: {
                style: {
                    backgroundColor: 'transparent',
                    height: '6px',
                    width: 'calc(100% - 12px)',
                    left: '2px',
                    bottom: '2px',
                },
            },
        }),
        [maxHeight, palette],
    );

    return (
        <LibScrollbar translateContentSizesToHolder {...props}>
            {children}
        </LibScrollbar>
    );
};
