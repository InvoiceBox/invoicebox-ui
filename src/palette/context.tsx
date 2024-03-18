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
import { TInputLabelPalette, generateInputLabelPalette } from '../components/form/InputLabel/palette';
import { TPureInputPalette, generatePureInputPalette } from '../components/form/PureInput/palette';

type TContext = {
    skeleton: TSkeletonPalette;
    invoiceboxSpinner: TInvoiceboxSpinnerPalette;
    secondaryButton: TSecondaryButtonPalette;
    arrow: TArrowPalette;
    inputLabel: TInputLabelPalette;
    pureInput: TPureInputPalette;
};

export const PaletteContext = createContext<TContext>({
    skeleton: generateSkeletonPalette(defaultAbstractPalette),
    invoiceboxSpinner: generateInvoiceboxSpinnerPalette(defaultAbstractPalette),
    secondaryButton: generateSecondaryButtonPalette(defaultAbstractPalette),
    arrow: generateArrowPalette(defaultAbstractPalette),
    inputLabel: generateInputLabelPalette(defaultAbstractPalette),
    pureInput: generatePureInputPalette(defaultAbstractPalette),
});
