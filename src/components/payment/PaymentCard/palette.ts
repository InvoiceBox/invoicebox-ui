import hexToRgba from 'hex-to-rgba';
import { TAbstractPalette } from '../../../palette';

export type TPaymentCardPalette = {
    bgActive: string;
    borderActive: string;
    borderInactive: string;
    title: string;
    iconBg: string;
    comment: string;
    radioBgActive: string;
    radioBorderActive: string;
    radioBorderInactive: string;
};

export const generatePaymentCardPalette = (abstractPalette: TAbstractPalette): TPaymentCardPalette => {
    return {
        bgActive: hexToRgba(abstractPalette.secondary, 0.1),
        borderActive: abstractPalette.secondary,
        borderInactive: abstractPalette.neutralFoggy,
        title: abstractPalette.primary,
        iconBg: abstractPalette.neutralLight,
        comment: abstractPalette.neutralBrutal,
        radioBgActive: abstractPalette.base,
        radioBorderActive: abstractPalette.secondary,
        radioBorderInactive: abstractPalette.primary,
    };
};
