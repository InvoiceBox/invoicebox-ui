import { TAbstractPalette } from '../../../palette';

export type TBgCardPalette = {
    bg: string;
};

export const generateBgCardPalette = (abstractPalette: TAbstractPalette): TBgCardPalette => {
    return {
        bg: abstractPalette.base,
    };
};
