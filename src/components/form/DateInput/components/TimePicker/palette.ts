import hexToRgba from 'hex-to-rgba';
import { TAbstractPalette } from '../../../../../palette';

export type TTimePickerPalette = {
    label: string;
    tile: string;
    tileActive: string;
    tileBgActive: string;
    divider: string;
};

export const generateTimePickerPalette = (abstractPalette: TAbstractPalette): TTimePickerPalette => {
    return {
        label: abstractPalette.primary,
        tile: hexToRgba(abstractPalette.primary, 0.7),
        divider: hexToRgba(abstractPalette.primary, 0.1),
        tileActive: abstractPalette.primary,
        tileBgActive: abstractPalette.secondary,
    };
};
