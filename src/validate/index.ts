import {
    ARMValidate,
    AZEValidate,
    BLRValidate,
    KAZValidate,
    KGZValidate,
    LENGTH_VAT_NUMBER,
    MDAValidate,
    RUSValidate,
    TJKValidate,
    UZBValidate,
} from './utils/vatNumberValidateHelpers';
import { RUS_COUNTRY_CODE } from '../components/form/PhoneInput/types';
import { TCreateErrorFunc } from './types';

export class Validate {
    static bic(value: string, createError: TCreateErrorFunc) {
        if (value === '') {
            return true;
        }

        if (/[^0-9]/.test(value)) {
            return createError('БИК может состоять только из цифр');
        }

        if (value.length !== 9) {
            return createError('БИК может состоять только из 9 цифр');
        }
        return true;
    }

    static website(value: string, createError: TCreateErrorFunc, isOnlyHttpsFormat?: boolean) {
        if (value === '') {
            return true;
        }

        const basePattern =
            '(?:(?:[a-z\u00a1-\uffff](?:[a-z\u00a1-\uffff-]{0,61}[a-z\u00a1-\uffff])?\\.)+([a-z\u00a1-\uffff]{2,63}))(?::\\d+)?)(?:\\/[\\w \\/-]*)*';

        const prefix = isOnlyHttpsFormat ? '^((https:\\/\\/)' : '^((?:https?:\\/\\/)?';

        const pattern = `${prefix}${basePattern}$`;

        const regex = new RegExp(pattern, 'i');

        if (value.match(regex)) {
            return true;
        }

        return createError('Некорректный адрес');
    }

    static vatNumber(value: string, countryId: string, createError: TCreateErrorFunc) {
        switch (countryId) {
            case 'KAZ': {
                return KAZValidate(value, createError);
            }
            case 'BLR': {
                return BLRValidate(value, createError);
            }
            case 'MDA': {
                return MDAValidate(value, createError);
            }
            case 'AZE': {
                return AZEValidate(value, createError);
            }
            case 'ARM': {
                return ARMValidate(value, createError);
            }
            case 'UZB': {
                return UZBValidate(value, createError);
            }
            case 'TJK': {
                return TJKValidate(value, createError);
            }
            case 'KGZ': {
                return KGZValidate(value, createError);
            }
            default:
                return RUSValidate(value, createError);
        }
    }

    static taxRegistrationReasonCode(value: string, createError: TCreateErrorFunc) {
        if (value === '') {
            return true;
        }

        if (value.length !== 9) {
            return createError('КПП может состоять только из 9 знаков');
        }
        if (!/^[0-9]{4}[0-9A-Z]{2}[0-9]{3}$/.test(value)) {
            return createError('Неправильный формат КПП');
        }
        return true;
    }

    static settlementAccount(value: string, bic: string, createError: TCreateErrorFunc) {
        if (!bic) {
            // eslint-disable-next-line no-console
            console.error('Form dont have bic');
        }

        if (value === '') {
            return true;
        }

        if (/[^0-9]/.test(value)) {
            return createError('Расчётный счёт может состоять только из цифр');
        }

        if (value.length !== 20) {
            return createError('Расчётный счёт может состоять только из 20 цифр');
        }

        let checksum = 0;
        const bikRs = bic.toString().slice(-3) + value;
        const coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];

        coefficients.forEach((coefficient, i) => {
            checksum += coefficient * (Number(bikRs[i]) % 10);
        });

        if (checksum % 10 !== 0) {
            return createError('Неправильное контрольное число');
        }
        return true;
    }

    static correspondentAccount(value: string, bic: string, createError: TCreateErrorFunc) {
        if (!bic) {
            // eslint-disable-next-line no-console
            console.error('Form dont have bic');
        }

        if (value === '') {
            return true;
        }

        if (/[^0-9]/.test(value)) {
            return createError('Кор. счёт может состоять только из цифр');
        }

        if (value.length !== 20) {
            return createError('Кор. счёт может состоять только из 20 цифр');
        }

        let checksum = 0;
        const bikKs = `0${String(bic).slice(4, 6)}${value}`;
        const coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];

        coefficients.forEach((coefficient, i) => {
            checksum += coefficient * (Number(bikKs[i]) % 10);
        });

        if (checksum % 10 !== 0) {
            return createError('Неправильное контрольное число');
        }

        return true;
    }

    static registrationNumber(
        value: string,
        vatNumber: string,
        countryId: string,
        createError: TCreateErrorFunc,
    ) {
        if (!vatNumber || !countryId) {
            // eslint-disable-next-line no-console
            console.error('Form dont have vatNumber or countryId');
        }

        if (value === '') {
            return true;
        }

        if (countryId === RUS_COUNTRY_CODE) {
            if (value.length === 13 && vatNumber.length === LENGTH_VAT_NUMBER.RUS_LEGAL_ENTREPRENEUR) {
                const n13 = parseInt((parseInt(value.slice(0, -1), 10) % 11).toString().slice(-1), 10);

                if (n13 === parseInt(value[12], 10)) {
                    return true;
                } else {
                    return createError('Неправильное контрольное число');
                }
            }

            if (value.length === 15 && vatNumber.length === LENGTH_VAT_NUMBER.RUS_INDIVIDUAL_ENTREPRENEUR) {
                const n15 = parseInt((parseInt(value.slice(0, -1), 10) % 13).toString().slice(-1), 10);

                if (n15 === parseInt(value[14], 10)) {
                    return true;
                } else {
                    return createError('Неправильное контрольное число');
                }
            }

            return createError('ОГРН состоит из 13 или 15 знаков');
        }

        return true;
    }
}
