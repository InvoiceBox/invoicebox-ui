import { TCountryRule, TSupportedCountries } from './types';

export const allCountriesPhoneRules: Record<TSupportedCountries, TCountryRule> = {
    RUS: {
        mask: '+9 (999) 999-99-99',
        startSubsequence: '7',
        regexp: /^\+?7(9\d{9})$/,
        flag: 'RUS' as const,
    },
    BLR: {
        mask: '+999 99 999-99-99',
        startSubsequence: '375',
        regexp: /^(\+?375)?(24|25|29|33|44)\d{7}$/,
        flag: 'BLR' as const,
    },
    AZE: {
        mask: '+999 (99) 999-9999',
        startSubsequence: '994',
        regexp: /^\+?994\d{9}$/,
        flag: 'AZE' as const,
    },
    ARM: {
        mask: '+999 (99) 999-999',
        startSubsequence: '374',
        regexp: /\+?374\d{8}/,
        flag: 'ARM' as const,
    },
    KAZ: {
        mask: '+9 (999) 999-99-99',
        startSubsequence: '7',
        regexp: /^(\+?7|8)?7\d{9}$/,
        flag: 'KAZ' as const,
    },
    TJK: {
        mask: '+999-99-999-9999',
        startSubsequence: '992',
        regexp: /^\+?992\d{9}$/,
        flag: 'TJK' as const,
    },
    UZB: {
        mask: '+999 99 9999999',
        startSubsequence: '998',
        regexp: /\+?998\d{9}/,
        flag: 'UZB' as const,
    },
};
