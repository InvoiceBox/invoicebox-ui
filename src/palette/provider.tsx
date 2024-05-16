import React, { FC, useMemo, ReactNode } from 'react';
import { TSkeletonPalette, generateSkeletonPalette } from '../components/common/Skeleton/palette';
import { defaultAbstractPalette } from './constants';
import { TAbstractPalette } from './types';
import { PaletteContext } from './context';
import { generateInvoiceboxSpinnerPalette } from '../components/common/InvoiceboxSpinner/palette';
import { generateSecondaryButtonPalette } from '../components/common/SecondaryButton/palette';
import { generateArrowPalette } from '../components/common/Arrow/palette';
import { generateInputLabelPalette } from '../components/form/InputLabel/palette';
import { generatePureInputPalette } from '../components/form/PureInput/palette';
import { generateDropdownPalette } from '../components/common/Dropdown/palette';
import { generateScrollbarPalette } from '../components/common/Scrollbar/palette';
import { generateSelectPalette } from '../components/form/Select/palette';
import { generateDateInputPalette } from '../components/form/DateInput/palette';
import { generateWarningIconPalette } from '../components/common/WarningIcon/palette';
import { generateDividerPalette } from '../components/common/Divider/palette';
import { generateCalendarPalette } from '../components/common/Calendar/palette';
import { generateSearchInputPalette } from '../components/form/SearchInput/palette';
import { generateCountrySelectPalette } from '../components/form/CountrySelect/palette';
import { generateBgCardPalette } from '../components/common/BgCard/palette';
import { generateToastPalette } from '../components/common/Toast/palette';

type TProps = {
    children: ReactNode;
    abstract?: Partial<TAbstractPalette>;
    skeleton?: Partial<TSkeletonPalette>;
};

export const PaletteProvider: FC<TProps> = ({ children, abstract, skeleton }) => {
    const mergedAbstractPalette = useMemo(() => ({ ...defaultAbstractPalette, ...abstract }), [abstract]);

    const mergedSkeletonPalette = useMemo(
        () => ({ ...generateSkeletonPalette(mergedAbstractPalette), ...skeleton }),
        [mergedAbstractPalette, skeleton],
    );

    const value = useMemo(
        () => ({
            skeleton: mergedSkeletonPalette,
            invoiceboxSpinner: generateInvoiceboxSpinnerPalette(mergedAbstractPalette),
            secondaryButton: generateSecondaryButtonPalette(mergedAbstractPalette),
            arrow: generateArrowPalette(mergedAbstractPalette),
            inputLabel: generateInputLabelPalette(mergedAbstractPalette),
            pureInput: generatePureInputPalette(mergedAbstractPalette),
            searchInput: generateSearchInputPalette(mergedAbstractPalette),
            dropdown: generateDropdownPalette(mergedAbstractPalette),
            scrollbar: generateScrollbarPalette(mergedAbstractPalette),
            select: generateSelectPalette(mergedAbstractPalette),
            countrySelect: generateCountrySelectPalette(mergedAbstractPalette),
            dateInput: generateDateInputPalette(mergedAbstractPalette),
            warningIcon: generateWarningIconPalette(mergedAbstractPalette),
            divider: generateDividerPalette(mergedAbstractPalette),
            calendar: generateCalendarPalette(mergedAbstractPalette),
            bgCard: generateBgCardPalette(mergedAbstractPalette),
            toast: generateToastPalette(mergedAbstractPalette),
        }),
        [mergedSkeletonPalette, mergedAbstractPalette],
    );

    return <PaletteContext.Provider value={value}>{children}</PaletteContext.Provider>;
};
