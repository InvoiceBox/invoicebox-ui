import * as yup from 'yup';

import {
    ARMValidate,
    AZEValidate,
    BLRValidate,
    KAZValidate,
    KGZValidate,
    MDAValidate,
    RUSValidate,
    TJKValidate,
    UZBValidate,
} from './utils/vatNumberValidateHelpers';

export class Validate {
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
}
