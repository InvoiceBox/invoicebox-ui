import { TAbstractPalette } from '../../../palette';

export type TInvoiceboxSpinnerPalette = {
    leftEyePrimary: string;
    rightEyePrimary: string;
    leftEyeSecondary: string;
    rightEyeSecondary: string;
};

export const generateInvoiceboxSpinnerPalette = (
    abstractPalette: TAbstractPalette,
): TInvoiceboxSpinnerPalette => {
    return {
        leftEyePrimary: abstractPalette.primary,
        rightEyePrimary: abstractPalette.base,
        leftEyeSecondary: abstractPalette.primary,
        rightEyeSecondary: abstractPalette.secondary,
    };
};
