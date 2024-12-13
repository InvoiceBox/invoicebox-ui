import * as yup from 'yup';

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

export class Validate {
    static bic(
        value: string,
        path: string,
        createError: (params?: yup.CreateErrorOptions) => yup.ValidationError,
    ) {
        if (value === '') {
            return true;
        }

        if (/[^0-9]/.test(value)) {
            return createError({
                path,
                message: 'БИК может состоять только из цифр',
            });
        }

        if (value.length !== 9) {
            return createError({
                path,
                message: 'БИК может состоять только из 9 цифр',
            });
        }
        return true;
    }

    static website(
        value: string,
        path: string,
        createError: (params?: yup.CreateErrorOptions) => yup.ValidationError,
    ) {
        if (value === '') {
            return true;
        }

        if (
            value.match(
                /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
            )
        ) {
            return true;
        }
        return createError({ path, message: 'Некорректный адрес' });
    }

    static vatNumber(
        value: string,
        path: string,
        countryId: string,
        createError: (params?: yup.CreateErrorOptions) => yup.ValidationError,
    ) {
        switch (countryId) {
            case 'KAZ': {
                return KAZValidate(value, path, createError);
            }
            case 'BLR': {
                return BLRValidate(value, path, createError);
            }
            case 'MDA': {
                return MDAValidate(value, path, createError);
            }
            case 'AZE': {
                return AZEValidate(value, path, createError);
            }
            case 'ARM': {
                return ARMValidate(value, path, createError);
            }
            case 'UZB': {
                return UZBValidate(value, path, createError);
            }
            case 'TJK': {
                return TJKValidate(value, path, createError);
            }
            case 'KGZ': {
                return KGZValidate(value, path, createError);
            }
            default:
                return RUSValidate(value, path, createError);
        }
    }

    static taxRegistrationReasonCode(
        value: string,
        path: string,
        createError: (params?: yup.CreateErrorOptions) => yup.ValidationError,
    ) {
        if (value === '') {
            return true;
        }

        if (value.length !== 9) {
            return createError({
                path,
                message: 'КПП может состоять только из 9 знаков',
            });
        }
        if (!/^[0-9]{4}[0-9A-Z]{2}[0-9]{3}$/.test(value)) {
            return createError({ path, message: 'Неправильный формат КПП' });
        }
        return true;
    }

    static registrationNumber(
        value: string,
        path: string,
        vatNumber: string,
        countryId: string,
        createError: (params?: yup.CreateErrorOptions) => yup.ValidationError,
    ) {
        if (value === '') {
            return true;
        }

        if (countryId === RUS_COUNTRY_CODE) {
            if (value.length === 13 && vatNumber.length === LENGTH_VAT_NUMBER.RUS_LEGAL_ENTREPRENEUR) {
                const n13 = parseInt((parseInt(value.slice(0, -1), 10) % 11).toString().slice(-1), 10);

                if (n13 === parseInt(value[12], 10)) {
                    return true;
                } else {
                    return createError({
                        path,
                        message: 'Неправильное контрольное число',
                    });
                }
            }

            if (value.length === 15 && vatNumber.length === LENGTH_VAT_NUMBER.RUS_INDIVIDUAL_ENTREPRENEUR) {
                const n15 = parseInt((parseInt(value.slice(0, -1), 10) % 13).toString().slice(-1), 10);

                if (n15 === parseInt(value[14], 10)) {
                    return true;
                } else {
                    return createError({
                        path,
                        message: 'Неправильное контрольное число',
                    });
                }
            }

            return createError({
                path,
                message: 'ОГРН состоит из 13 или 15 знаков',
            });
        }

        return true;
    }
}
