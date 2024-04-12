import { TFlagKey } from '../../common/Flag';

export const RUS_COUNTRY_CODE = 'RUS';
export const supportedCountries = [
    RUS_COUNTRY_CODE,
    'BLR',
    'AZE',
    'ARM',
    'KAZ',
    'TJK',
    'UZB',
    'KGZ',
    'UNKNOWN',
] as const;
export type TSupportedCountries = (typeof supportedCountries)[number];

export type TCountryRule = {
    placeholder: string;
    mask: string;
    startSubsequence: string;
    regexp: RegExp;
    flag: TFlagKey;
};

export type TCountrySelectOption = {
    description: string;
    flag: string;
    label: string;
    value: string;
};
