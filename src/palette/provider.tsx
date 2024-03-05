import React, { FC, useMemo, ReactNode } from 'react';
import { TSkeletonPalette, generateSkeletonPalette } from '../components/common/Skeleton/palette';
import { defaultAbstractPalette } from './constants';
import { TAbstractPalette } from './types';
import { PaletteContext } from './context';
import {
    TInvoiceboxSpinnerPalette,
    generateInvoiceboxSpinnerPalette,
} from '../components/common/InvoiceboxSpinner/palette';
import {
    TSecondaryButtonPalette,
    generateSecondaryButtonPalette,
} from '../components/common/SecondaryButton/palette';
import { TArrowPalette, generateArrowPalette } from '../components/common/Arrow/palette';

type TProps = {
    children: ReactNode;
    abstract?: Partial<TAbstractPalette>;
    skeleton?: Partial<TSkeletonPalette>;
    invoiceboxSpinner?: Partial<TInvoiceboxSpinnerPalette>;
    secondaryButton?: Partial<TSecondaryButtonPalette>;
    arrow?: Partial<TArrowPalette>;
};

export const PaletteProvider: FC<TProps> = ({
    children,
    abstract,
    skeleton,
    invoiceboxSpinner,
    secondaryButton,
    arrow,
}) => {
    const mergedAbstractPalette = useMemo(() => ({ ...defaultAbstractPalette, ...abstract }), [abstract]);

    const mergedSkeletonPalette = useMemo(
        () => ({ ...generateSkeletonPalette(mergedAbstractPalette), ...skeleton }),
        [mergedAbstractPalette, skeleton],
    );

    const mergedInvoiceboxSpinnerPalette = useMemo(
        () => ({ ...generateInvoiceboxSpinnerPalette(mergedAbstractPalette), ...invoiceboxSpinner }),
        [mergedAbstractPalette, invoiceboxSpinner],
    );

    const mergedSecondaryButtonPalette = useMemo(
        () => ({ ...generateSecondaryButtonPalette(mergedAbstractPalette), ...secondaryButton }),
        [mergedAbstractPalette, secondaryButton],
    );

    const mergedArrowPalette = useMemo(
        () => ({ ...generateArrowPalette(mergedAbstractPalette), ...arrow }),
        [mergedAbstractPalette, arrow],
    );

    const value = useMemo(
        () => ({
            skeleton: mergedSkeletonPalette,
            invoiceboxSpinner: mergedInvoiceboxSpinnerPalette,
            secondaryButton: mergedSecondaryButtonPalette,
            arrow: mergedArrowPalette,
        }),
        [
            mergedSkeletonPalette,
            mergedInvoiceboxSpinnerPalette,
            mergedSecondaryButtonPalette,
            mergedArrowPalette,
        ],
    );

    return <PaletteContext.Provider value={value}>{children}</PaletteContext.Provider>;
};
