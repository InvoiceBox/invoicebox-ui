// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const fromEntries = require('object.fromentries');
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const entries = require('object.entries');
fromEntries.shim();
entries.shim();

export { Skeleton } from './components/common/Skeleton';
export { InvoiceboxLoader } from './components/common/InvoiceboxLoader';
export { Typography } from './components/common/Typography';
export { InvoiceboxSpinner } from './components/common/InvoiceboxSpinner';
export { SecondaryButton } from './components/common/SecondaryButton';
export { Arrow } from './components/common/Arrow';
export { InputLabel } from './components/form/InputLabel';
export { PureInput } from './components/form/PureInput';
export { PositiveIntegerInput } from './components/form/PositiveIntegerInput';
export type { TProps as TPositiveIntegerInputProps } from './components/form/PositiveIntegerInput';
export { TextInput } from './components/form/TextInput';
export type { TProps as TTextInputProps } from './components/form/TextInput';
export { Dropdown } from './components/common/Dropdown';
export type { TProps as TDropdownProps } from './components/common/Dropdown';
export { Drawer } from './components/common/Drawer';
export type { TProps as TDrawerProps } from './components/common/Drawer';
export { EntityAutocompleteOptionsDrawer } from './components/common/EntityAutocompleteOptionsDrawer';
export type { TProps as TEntityAutocompleteOptionsDrawerProps } from './components/common/EntityAutocompleteOptionsDrawer';
export { Scrollbar } from './components/common/Scrollbar';
export { Select } from './components/form/Select';
export type { TProps as TSelectProps } from './components/form/Select';
export { Toggle } from './components/form/Toggle';
export type { TProps as TToggleProps } from './components/form/Toggle';
export { PointsLoader } from './components/common/PointsLoader';
export { Calendar } from './components/common/Calendar';
export type { TProps as TCalendarProps } from './components/common/Calendar';
export { DateInput } from './components/form/DateInput';
export type { TProps as TDateInputProps } from './components/form/DateInput';
export { WarningIcon } from './components/common/WarningIcon';
export type { TProps as TWarningIconProps } from './components/common/WarningIcon';
export { Divider } from './components/common/Divider';
export type { TProps as TDividerProps } from './components/common/Divider';
export { ReadOnlyLabelValueField } from './components/common/ReadOnlyLabelValueField';
export type { TProps as TReadOnlyLabelValueFieldProps } from './components/common/ReadOnlyLabelValueField';
export { SearchInput } from './components/form/SearchInput';
export type { TProps as TSearchInputProps } from './components/form/SearchInput';
export { CodeInput } from './components/form/CodeInput';
export type { TProps as TCodeInputProps } from './components/form/CodeInput';
export { Flag } from './components/common/Flag';
export type { TProps as TFlagProps, TFlagKey } from './components/common/Flag';
export { CountrySelect } from './components/form/CountrySelect';
export type { TProps as TCountrySelectProps } from './components/form/CountrySelect';
export { PhoneInput } from './components/form/PhoneInput';
export type { TProps as TPhoneInputProps } from './components/form/PhoneInput';
export { CurrencyInputNumber } from './components/form/CurrencyInput/CurrencyInputNumber';
export type { TProps as TCurrencyInputNumberProps } from './components/form/CurrencyInput/CurrencyInputNumber';
export { CurrencyInputString } from './components/form/CurrencyInput/CurrencyInputString';
export type { TProps as TCurrencyInputStringProps } from './components/form/CurrencyInput/CurrencyInputString';
export { phoneLogic } from './components/form/PhoneInput/externalPhoneLogic';
export { BgCard } from './components/common/BgCard';
export { ToastContainer, toast } from './components/common/Toast';
export { PaymentCard } from './components/payment/PaymentCard';
export { AppCardLink } from './components/common/AppCardLink';
export { InvoiceboxLogo } from './components/common/InvoiceboxLogo';
export type { TProps as TAutocompleteProps } from './components/form/Autocomplete/index';
export {
    Autocomplete,
    AutocompleteDefaultOption,
    OrganizationAutocompleteItem,
} from './components/form/Autocomplete/index';
export { QRCode } from './components/common/QRCode';

export { PaletteProvider, defaultAbstractPalette } from './palette';
export type { TAbstractPalette } from './palette';

export { useOutsideClick } from './hooks/useOutsideClick';
export { useInputFocus } from './hooks/useInputFocus';
export { useUnupdatableHandler } from './hooks/useUnupdatableHandler';
export { useLoadingSubmit } from './hooks/useLoadingSubmit';

export { breakpoints } from './breakpoints';
export { useMobile, useTablet, useLargeTablet, useMiniLaptop } from './hooks/useMedia';
export { useModal } from './hooks/useModal';

export { LENGTH_VAT_NUMBER } from './validate/utils/vatNumberValidateHelpers';
export { Validate } from './validate';
