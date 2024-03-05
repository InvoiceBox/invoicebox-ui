import { createContext } from 'react';
import { defaultAbstractPalette } from './constants';
import { TSkeletonPalette, generateSkeletonPalette } from '../components/common/Skeleton/palette';
import {
    TInvoiceboxSpinnerPalette,
    generateInvoiceboxSpinnerPalette,
} from '../components/common/InvoiceboxSpinner/palette';
import {
    TSecondaryButtonPalette,
    generateSecondaryButtonPalette,
} from '../components/common/SecondaryButton/palette';
import { TArrowPalette, generateArrowPalette } from '../components/common/Arrow/palette';

type TContext = {
    skeleton: TSkeletonPalette;
    invoiceboxSpinner: TInvoiceboxSpinnerPalette;
    secondaryButton: TSecondaryButtonPalette;
    arrow: TArrowPalette;
};

export const PaletteContext = createContext<TContext>({
    skeleton: generateSkeletonPalette(defaultAbstractPalette),
    invoiceboxSpinner: generateInvoiceboxSpinnerPalette(defaultAbstractPalette),
    secondaryButton: generateSecondaryButtonPalette(defaultAbstractPalette),
    arrow: generateArrowPalette(defaultAbstractPalette),
});
