import hexToRgba from 'hex-to-rgba';
import { TAbstractPalette } from '../../../palette';

export type TPaymentCardPalette = {
    bgActive: string;
};

export const generatePaymentCardPalette = (abstractPalette: TAbstractPalette): TPaymentCardPalette => {
    return {
        bgActive: hexToRgba(abstractPalette.secondary, 0.1),
    };
};
