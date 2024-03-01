import React, { FC, useMemo, ReactNode } from 'react';
import { TSkeletonPalette, generateSkeletonPalette } from '../components/common/Skeleton/palette';
import { defaultAbstractPalette } from './constants';
import { TAbstractPalette } from './types';
import { PaletteContext } from './context';
import {
    TInvoiceboxSpinnerPalette,
    generateInvoiceboxSpinnerPalette,
} from '../components/common/InvoiceboxSpinner/palette';

type TProps = {
    children: ReactNode;
    abstract?: Partial<TAbstractPalette>;
    skeleton?: Partial<TSkeletonPalette>;
    invoiceboxSpinner?: Partial<TInvoiceboxSpinnerPalette>;
};

export const PaletteProvider: FC<TProps> = ({ children, abstract, skeleton, invoiceboxSpinner }) => {
    const mergedAbstractPalette = useMemo(() => ({ ...defaultAbstractPalette, ...abstract }), [abstract]);

    const mergedSkeletonPalette = useMemo(
        () => ({ ...generateSkeletonPalette(mergedAbstractPalette), ...skeleton }),
        [mergedAbstractPalette, skeleton],
    );

    const mergedInvoiceboxSpinnerPalette = useMemo(
        () => ({ ...generateInvoiceboxSpinnerPalette(mergedAbstractPalette), ...invoiceboxSpinner }),
        [mergedAbstractPalette, invoiceboxSpinner],
    );

    const value = useMemo(
        () => ({
            skeleton: mergedSkeletonPalette,
            invoiceboxSpinner: mergedInvoiceboxSpinnerPalette,
        }),
        [mergedSkeletonPalette, mergedInvoiceboxSpinnerPalette],
    );

    return <PaletteContext.Provider value={value}>{children}</PaletteContext.Provider>;
};
