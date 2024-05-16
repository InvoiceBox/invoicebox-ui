import { TAbstractPalette } from '../../../palette';

export type TToastPalette = {
    bg: string;
    text: string;
    shadow: string;
};

export const generateToastPalette = (abstractPalette: TAbstractPalette): TToastPalette => {
    return {
        bg: abstractPalette.base,
        text: abstractPalette.primary,
        shadow: abstractPalette.primary,
    };
};
