import { TAbstractPalette } from '../../../palette';

export type TInvoiceboxSpinnerPalette = {
    leftEye: string;
    rightEye: string;
};

export const generateInvoiceboxSpinnerPalette = (
    abstractPalette: TAbstractPalette,
): TInvoiceboxSpinnerPalette => {
    return {
        leftEye: abstractPalette.primary,
        rightEye: abstractPalette.secondary,
    };
};
