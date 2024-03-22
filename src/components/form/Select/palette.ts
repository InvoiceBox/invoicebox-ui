import hexToRgba from 'hex-to-rgba';
import { TAbstractPalette } from '../../../palette';

export type TSelectPalette = {
    bgHover: string;
};

export const generateSelectPalette = (abstractPalette: TAbstractPalette): TSelectPalette => {
    return {
        bgHover: hexToRgba(abstractPalette.neutralUsual, 0.5),
    };
};
