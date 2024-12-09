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

class Validate {
    static validateVatNumber(
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
}

export const validate = new Validate();
