import hexToRgba from 'hex-to-rgba';
import { TAbstractPalette } from '../../../palette';

export type TArrowPalette = {
    openLight: string;
    closeLight: string;
    openUsual: string;
    closeUsual: string;
};

export const generateArrowPalette = (abstractPalette: TAbstractPalette): TArrowPalette => {
    return {
        openLight: hexToRgba(abstractPalette.neutralUsual, 0.8),
        closeLight: hexToRgba(abstractPalette.neutralUsual, 0.8),
        openUsual: hexToRgba(abstractPalette.primary, 0.5),
        closeUsual: hexToRgba(abstractPalette.primary, 0.5),
    };
};
