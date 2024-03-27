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
import { TInputLabelPalette, generateInputLabelPalette } from '../components/form/InputLabel/palette';
import { TPureInputPalette, generatePureInputPalette } from '../components/form/PureInput/palette';
import { generateDropdownPalette } from '../components/common/Dropdown/palette';
import { generateScrollbarPalette } from '../components/common/Scrollbar/palette';
import { generateSelectPalette } from '../components/form/Select/palette';
import { generateDateInputPalette } from '../components/form/DateInput/palette';
import { generateWarningIconPalette } from '../components/common/WarningIcon/palette';
import { generateDividerPalette } from '../components/common/Divider/palette';

type TProps = {
    children: ReactNode;
    abstract?: Partial<TAbstractPalette>;
    skeleton?: Partial<TSkeletonPalette>;
    invoiceboxSpinner?: Partial<TInvoiceboxSpinnerPalette>;
    secondaryButton?: Partial<TSecondaryButtonPalette>;
    arrow?: Partial<TArrowPalette>;
    inputLabel?: Partial<TInputLabelPalette>;
    pureInput?: Partial<TPureInputPalette>;
};

export const PaletteProvider: FC<TProps> = ({
    children,
    abstract,
    skeleton,
    invoiceboxSpinner,
    secondaryButton,
    arrow,
    inputLabel,
    pureInput,
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

    const mergedInputLabelPalette = useMemo(
        () => ({ ...generateInputLabelPalette(mergedAbstractPalette), ...inputLabel }),
        [mergedAbstractPalette, inputLabel],
    );

    const mergedPureInputPalette = useMemo(
        () => ({ ...generatePureInputPalette(mergedAbstractPalette), ...pureInput }),
        [mergedAbstractPalette, pureInput],
    );

    const value = useMemo(
        () => ({
            skeleton: mergedSkeletonPalette,
            invoiceboxSpinner: mergedInvoiceboxSpinnerPalette,
            secondaryButton: mergedSecondaryButtonPalette,
            arrow: mergedArrowPalette,
            inputLabel: mergedInputLabelPalette,
            pureInput: mergedPureInputPalette,
            dropdown: generateDropdownPalette(mergedAbstractPalette),
            scrollbar: generateScrollbarPalette(mergedAbstractPalette),
            select: generateSelectPalette(mergedAbstractPalette),
            dateInput: generateDateInputPalette(mergedAbstractPalette),
            warningIcon: generateWarningIconPalette(mergedAbstractPalette),
            divider: generateDividerPalette(mergedAbstractPalette),
        }),
        [
            mergedSkeletonPalette,
            mergedInvoiceboxSpinnerPalette,
            mergedSecondaryButtonPalette,
            mergedArrowPalette,
            mergedInputLabelPalette,
            mergedPureInputPalette,
            mergedAbstractPalette,
        ],
    );

    return <PaletteContext.Provider value={value}>{children}</PaletteContext.Provider>;
};
