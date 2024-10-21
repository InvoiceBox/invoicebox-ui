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
import { TDropdownPalette, generateDropdownPalette } from '../components/common/Dropdown/palette';
import { TScrollbarPalette, generateScrollbarPalette } from '../components/common/Scrollbar/palette';
import { TSelectPalette, generateSelectPalette } from '../components/form/Select/palette';
import { TDateInputPalette, generateDateInputPalette } from '../components/form/DateInput/palette';
import { TWarningIconPalette, generateWarningIconPalette } from '../components/common/WarningIcon/palette';
import { TDividerPalette, generateDividerPalette } from '../components/common/Divider/palette';
import { TCalendarPalette, generateCalendarPalette } from '../components/common/Calendar/palette';
import { generateSearchInputPalette, TSearchInputPalette } from '../components/form/SearchInput/palette';
import {
    generateCountrySelectPalette,
    TCountrySelectPalette,
} from '../components/form/CountrySelect/palette';
import { TBgCardPalette, generateBgCardPalette } from '../components/common/BgCard/palette';
import { TToastPalette, generateToastPalette } from '../components/common/Toast/palette';
import { generatePaymentCardPalette, TPaymentCardPalette } from '../components/payment/PaymentCard/palette';
import {
    generateAutocompleteDefaultOptionPalette,
    TAutocompleteDefaultOptionPalette,
} from '../components/form/Autocomplete/components/AutocompleteDefaultOption/palette';

type TContext = {
    skeleton: TSkeletonPalette;
    invoiceboxSpinner: TInvoiceboxSpinnerPalette;
    secondaryButton: TSecondaryButtonPalette;
    arrow: TArrowPalette;
    inputLabel: TInputLabelPalette;
    pureInput: TPureInputPalette;
    searchInput: TSearchInputPalette;
    dropdown: TDropdownPalette;
    scrollbar: TScrollbarPalette;
    select: TSelectPalette;
    countrySelect: TCountrySelectPalette;
    dateInput: TDateInputPalette;
    warningIcon: TWarningIconPalette;
    divider: TDividerPalette;
    calendar: TCalendarPalette;
    bgCard: TBgCardPalette;
    toast: TToastPalette;
    paymentCard: TPaymentCardPalette;
    autocompleteDefaultOption: TAutocompleteDefaultOptionPalette;
};

export const PaletteContext = createContext<TContext>({
    skeleton: generateSkeletonPalette(defaultAbstractPalette),
    invoiceboxSpinner: generateInvoiceboxSpinnerPalette(defaultAbstractPalette),
    secondaryButton: generateSecondaryButtonPalette(defaultAbstractPalette),
    arrow: generateArrowPalette(defaultAbstractPalette),
    inputLabel: generateInputLabelPalette(defaultAbstractPalette),
    pureInput: generatePureInputPalette(defaultAbstractPalette),
    searchInput: generateSearchInputPalette(defaultAbstractPalette),
    dropdown: generateDropdownPalette(defaultAbstractPalette),
    scrollbar: generateScrollbarPalette(defaultAbstractPalette),
    select: generateSelectPalette(defaultAbstractPalette),
    countrySelect: generateCountrySelectPalette(defaultAbstractPalette),
    dateInput: generateDateInputPalette(defaultAbstractPalette),
    warningIcon: generateWarningIconPalette(defaultAbstractPalette),
    divider: generateDividerPalette(defaultAbstractPalette),
    calendar: generateCalendarPalette(defaultAbstractPalette),
    bgCard: generateBgCardPalette(defaultAbstractPalette),
    toast: generateToastPalette(defaultAbstractPalette),
    paymentCard: generatePaymentCardPalette(defaultAbstractPalette),
    autocompleteDefaultOption: generateAutocompleteDefaultOptionPalette(defaultAbstractPalette),
});
