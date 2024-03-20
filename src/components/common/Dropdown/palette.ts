import hexToRgba from 'hex-to-rgba';
import { TAbstractPalette } from '../../../palette';

export type TDropdownPalette = {
    bg: string;
    shadow: string;
};

export const generateDropdownPalette = (abstractPalette: TAbstractPalette): TDropdownPalette => {
    return {
        bg: abstractPalette.base,
        shadow: hexToRgba(abstractPalette.primary, 0.09),
    };
};
