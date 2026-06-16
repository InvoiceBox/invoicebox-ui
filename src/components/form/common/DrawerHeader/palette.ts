import hexToRgba from '../../../../utils/hexToRgba';
import { TAbstractPalette } from '../../../../palette';

export type TDrawerHeaderPalette = {
    headLabel: string;
    applyButton: string;
    border: string;
};

export const generateDrawerHeaderPalette = (abstractPalette: TAbstractPalette): TDrawerHeaderPalette => {
    return {
        headLabel: abstractPalette.primary,
        applyButton: hexToRgba(abstractPalette.primary, 0.5),
        border: hexToRgba(abstractPalette.primary, 0.1),
    };
};
