import * as yup from 'yup';

export const LENGTH_VAT_NUMBER = {
    RUS_INDIVIDUAL_ENTREPRENEUR: 12,
    RUS_LEGAL_ENTREPRENEUR: 10,
    BLR_VAT_NUMBER: 9,
    KAZ_VAT_NUMBER: 12,
    AZE_VAT_NUMBER: 10,
    ARM_VAT_NUMBER: 8,
    KGZ_VAT_NUMBER: 14,
    MDA_VAT_NUMBER: 13,
    TJK_VAT_NUMBER_SHORT: 9,
    TJK_VAT_NUMBER_LONG: 10,
    UZB_VAT_NUMBER: 9,
};

const checkDigitFunc = (inn: string, coefficients: number[], valueDigit: number) =>
    coefficients.reduce((sum, current, index) => sum + current * Number(inn[index]), 0) % valueDigit;

const checkKaz = (
    value: string,
    path: string,
    createError: (params?: yup.CreateErrorOptions | undefined) => yup.ValidationError,
) => {
    const checkNumber = checkDigitFunc(value, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 11);
    if (checkNumber === 10) {
        const replyCheckNumber = checkDigitFunc(value, [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2], 11);
        if (replyCheckNumber === 10 || replyCheckNumber !== Number(value[11])) {
            return createError({
                path,
                message: 'Неверное контрольное число',
            });
        }
        return true;
    }
    if (checkNumber !== Number(value[11])) {
        return createError({
            path,
            message: 'Неверное контрольное число',
        });
    }
    return true;
};

export const BLRValidate = (
    value: string,
    path: string,
    createError: (params?: yup.CreateErrorOptions | undefined) => yup.ValidationError,
) => {
    if (value.length !== LENGTH_VAT_NUMBER.BLR_VAT_NUMBER) {
        return createError({
            path,
            message: 'УНБ должен состоять из 9 цифр',
        });
    }

    if (checkDigitFunc(value, [29, 23, 19, 17, 13, 7, 5, 3], 11) === Number(value[8])) {
        return true;
    }

    return createError({
        path,
        message: 'Неверное контрольное число',
    });
};

export const AZEValidate = (
    value: string,
    path: string,
    createError: (params?: yup.CreateErrorOptions | undefined) => yup.ValidationError,
) => {
    if (value.length !== LENGTH_VAT_NUMBER.AZE_VAT_NUMBER) {
        return createError({
            path,
            message: 'ИНН должен состоять из 10 цифр',
        });
    }

    if (Number(value[value.length - 1]) === 1) {
        return true;
    }

    return createError({
        path,
        message: 'Неверное контрольное число',
    });
};

export const MDAValidate = (
    value: string,
    path: string,
    createError: (params?: yup.CreateErrorOptions | undefined) => yup.ValidationError,
) => {
    if (value.length !== LENGTH_VAT_NUMBER.MDA_VAT_NUMBER) {
        return createError({
            path,
            message: 'IDNO должен состоять из 13 цифр',
        });
    }

    if (
        Number(value[0]) === 1 &&
        checkDigitFunc(value, [7, 3, 1, 7, 3, 1, 7, 3, 1, 7, 3, 1], 10) === Number(value[12])
    ) {
        return true;
    }

    return createError({
        path,
        message: 'Неверное контрольное число',
    });
};

export const KAZValidate = (
    value: string,
    path: string,
    createError: (params?: yup.CreateErrorOptions | undefined) => yup.ValidationError,
) => {
    if (value.length !== LENGTH_VAT_NUMBER.KAZ_VAT_NUMBER) {
        return createError({
            path,
            message: 'ИИН/БИН должен состоять из 12 цифр',
        });
    }

    const iinFourthValue = ['0', '1', '2', '3'];
    const binFourthValue = ['4', '5', '6'];

    if (iinFourthValue.includes(value[4])) {
        const centuryBirthdayCode = value[6];
        if (
            Number(centuryBirthdayCode) > 6 ||
            Number(value.substring(2, 3)) > 12 ||
            Number(value.substring(0, 1)) > 31
        ) {
            return createError({
                path,
                message: 'Неверное контрольное число',
            });
        }
        return checkKaz(value, path, createError);
    }

    if (binFourthValue.includes(value[4])) {
        return checkKaz(value, path, createError);
    }

    return createError({
        path,
        message: 'Неверное контрольное число',
    });
};

export const ARMValidate = (
    value: string,
    path: string,
    createError: (params?: yup.CreateErrorOptions | undefined) => yup.ValidationError,
) => {
    if (value.length !== LENGTH_VAT_NUMBER.ARM_VAT_NUMBER) {
        return createError({
            path,
            message: 'УНН должен состоять из 8 цифр',
        });
    }

    return true;
};

export const UZBValidate = (
    value: string,
    path: string,
    createError: (params?: yup.CreateErrorOptions | undefined) => yup.ValidationError,
) => {
    if (value.length !== LENGTH_VAT_NUMBER.UZB_VAT_NUMBER) {
        return createError({
            path,
            message: 'ИНН должен состоять из 9 цифр',
        });
    }

    return true;
};

export const TJKValidate = (
    value: string,
    path: string,
    createError: (params?: yup.CreateErrorOptions | undefined) => yup.ValidationError,
) => {
    if (
        value.length !== LENGTH_VAT_NUMBER.TJK_VAT_NUMBER_LONG &&
        value.length !== LENGTH_VAT_NUMBER.TJK_VAT_NUMBER_SHORT
    ) {
        return createError({
            path,
            message: 'ИНН должен состоять из 9 или 10 цифр',
        });
    }

    return true;
};

export const KGZValidate = (
    value: string,
    path: string,
    createError: (params?: yup.CreateErrorOptions | undefined) => yup.ValidationError,
) => {
    if (value.length !== LENGTH_VAT_NUMBER.KGZ_VAT_NUMBER) {
        return createError({
            path,
            message: 'ИНН должен состоять из 14 цифр',
        });
    }

    return true;
};

export const RUSValidate = (
    value: string,
    path: string,
    createError: (params?: yup.CreateErrorOptions | undefined) => yup.ValidationError,
) => {
    if (
        [LENGTH_VAT_NUMBER.RUS_LEGAL_ENTREPRENEUR, LENGTH_VAT_NUMBER.RUS_INDIVIDUAL_ENTREPRENEUR].indexOf(
            value.length,
        ) === -1
    ) {
        return createError({
            path,
            message: 'ИНН должен состоять из 10 или 12 цифр',
        });
    } else {
        switch (value.length) {
            case LENGTH_VAT_NUMBER.RUS_LEGAL_ENTREPRENEUR: {
                const n10 = checkDigitFunc(value, [2, 4, 10, 3, 5, 9, 4, 6, 8], 11) % 10;
                if (n10 === parseInt(value[9], 10)) {
                    return true;
                }
                break;
            }
            case LENGTH_VAT_NUMBER.RUS_INDIVIDUAL_ENTREPRENEUR: {
                const n11 = checkDigitFunc(value, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8], 11) % 10;
                const n12 = checkDigitFunc(value, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8], 11) % 10;
                if (n11 === parseInt(value[10], 10) && n12 === parseInt(value[11], 10)) {
                    return true;
                }
                break;
            }
            default:
                return createError({
                    path,
                    message: 'Неверное контрольное число',
                });
        }
        return createError({
            path,
            message: 'Неверное контрольное число',
        });
    }
};
