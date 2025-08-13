import { TCountryRule, TSupportedCountries } from './types';

export const MASK_DIGIT_ITEM = '9';

export const getAllCountriesPhoneRules: (
    isSupportCityRusPhoneNumber: boolean,
) => Record<TSupportedCountries, TCountryRule> = (isSupportCityRusPhoneNumber) => ({
    BLR: {
        placeholder: '+375 XX XXX-XX-XX',
        mask: '+999 99 999-99-99',
        startSubsequence: '375',
        regexp: /^(\+?375)?(24|25|29|33|44)\d{7}$/,
        flag: 'BLR' as const,
    },
    AZE: {
        placeholder: '+994 (XX) XXX-XXXX',
        mask: '+999 (99) 999-9999',
        startSubsequence: '994',
        regexp: /^\+?994\d{9}$/,
        flag: 'AZE' as const,
    },
    ARM: {
        placeholder: '+374 (XX) XXX-XXX',
        mask: '+999 (99) 999-999',
        startSubsequence: '374',
        regexp: /\+?374\d{8}/,
        flag: 'ARM' as const,
    },
    KAZ: {
        placeholder: '+7 (XXX) XXX-XX-XX',
        mask: '+9 (999) 999-99-99',
        startSubsequence: '77',
        regexp: /^77\d{9}$/,
        flag: 'KAZ' as const,
    },
    RUS: {
        placeholder: '+7 (XXX) XXX-XX-XX',
        mask: '+9 (999) 999-99-99',
        startSubsequence: '7',
        regexp: isSupportCityRusPhoneNumber ? /^7\d{10}$/ : /^\+?7(9\d{9})$/,
        flag: 'RUS' as const,
    },
    KGZ: {
        placeholder: '+996 XXX-XX-XX-XX',
        mask: '+999 999-99-99-99',
        startSubsequence: '996',
        regexp: /\+?996\d{9}/,
        flag: 'KGZ' as const,
    },
    TJK: {
        placeholder: '+992-XX-XXX-XXXX',
        mask: '+999-99-999-9999',
        startSubsequence: '992',
        regexp: /^\+?992\d{9}$/,
        flag: 'TJK' as const,
    },
    UZB: {
        placeholder: '+998 XX XXXXXXX',
        mask: '+999 99 9999999',
        startSubsequence: '998',
        regexp: /\+?998\d{9}/,
        flag: 'UZB' as const,
    },

    // для всех непредусмотренных стран
    UNKNOWN: {
        placeholder: '',
        mask: '+999999999999999999',
        startSubsequence: '',
        regexp: /^\d{7,}$/,
        flag: 'UNKNOWN' as const,
    },
});
