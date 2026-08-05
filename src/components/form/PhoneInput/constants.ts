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
    CHN: {
        placeholder: '+86 XXX XXXX XXXX',
        mask: '+99 999 9999 9999',
        startSubsequence: '86',
        regexp: /^\+?861[3-9]\d{9}$/,
        flag: 'CHN' as const,
    },
    ESP: {
        placeholder: '+34 XXX XXX XXX',
        mask: '+99 999 999 999',
        startSubsequence: '34',
        regexp: /^\+?34\d{9}$/,
        flag: 'ESP' as const,
    },
    GBR: {
        placeholder: '+44 XXXX XXXXXX',
        mask: '+99 9999 999999',
        startSubsequence: '44',
        regexp: /^\+?44\d{10}$/,
        flag: 'ENG' as const,
    },
    ARE: {
        placeholder: '+971 XX XXX XXXX',
        mask: '+999 99 999 9999',
        startSubsequence: '971',
        regexp: /^\+?971\d{8,9}$/,
        flag: 'ARE' as const,
    },
    FRA: {
        placeholder: '+33 X XX XX XX XX',
        mask: '+99 9 99 99 99 99',
        startSubsequence: '33',
        regexp: /^\+?33\d{9}$/,
        flag: 'FRA' as const,
    },
    SRB: {
        placeholder: '+381 XX XXX XXXX',
        mask: '+999 99 999 9999',
        startSubsequence: '381',
        regexp: /^\+?381\d{8,9}$/,
        flag: 'SRB' as const,
    },
    IND: {
        placeholder: '+91 XXXXX XXXXX',
        mask: '+99 99999 99999',
        startSubsequence: '91',
        regexp: /^\+?91\d{10}$/,
        flag: 'IND' as const,
    },
    TUR: {
        placeholder: '+90 XXX XXX XX XX',
        mask: '+99 999 999 99 99',
        startSubsequence: '90',
        regexp: /^\+?90\d{10}$/,
        flag: 'TUR' as const,
    },
    SVN: {
        placeholder: '+386 XX XXX XXX',
        mask: '+999 99 999 999',
        startSubsequence: '386',
        regexp: /^\+?386\d{8}$/,
        flag: 'SVN' as const,
    },
    SVK: {
        placeholder: '+421 XXX XXX XXX',
        mask: '+999 999 999 999',
        startSubsequence: '421',
        regexp: /^\+?421\d{9}$/,
        flag: 'SVK' as const,
    },
    ECU: {
        placeholder: '+593 XX XXX XXXX',
        mask: '+999 99 999 9999',
        startSubsequence: '593',
        regexp: /^\+?593\d{8,9}$/,
        flag: 'ECU' as const,
    },
    DEU: {
        placeholder: '+49 XXX XXXXXXXX',
        mask: '+99 999 99999999',
        startSubsequence: '49',
        regexp: /^\+?49\d{10,11}$/,
        flag: 'DEU' as const,
    },
    AUS: {
        placeholder: '+61 XXX XXX XXX',
        mask: '+99 999 999 999',
        startSubsequence: '61',
        regexp: /^\+?61\d{9}$/,
        flag: 'AUS' as const,
    },
    SAU: {
        placeholder: '+966 XX XXX XXXX',
        mask: '+999 99 999 9999',
        startSubsequence: '966',
        regexp: /^\+?966\d{9}$/,
        flag: 'SAU' as const,
    },
    // США и Канада входят в общий план нумерации NANP (+1) и неотличимы по префиксу.
    // Автоопределение выберет USA (идёт первым), при этом ручной выбор CAN не сбрасывается —
    // getIsNeedChangeCountry сравнивает startSubsequence, а он у обеих стран одинаковый.
    USA: {
        placeholder: '+1 (XXX) XXX-XXXX',
        mask: '+9 (999) 999-9999',
        startSubsequence: '1',
        regexp: /^\+?1[2-9]\d{2}[2-9]\d{6}$/,
        flag: 'USA' as const,
    },
    CAN: {
        placeholder: '+1 (XXX) XXX-XXXX',
        mask: '+9 (999) 999-9999',
        startSubsequence: '1',
        regexp: /^\+?1[2-9]\d{2}[2-9]\d{6}$/,
        flag: 'CAN' as const,
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
