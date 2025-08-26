import { TAbstractPalette } from '../../../palette';

export type TTagsInputPalette = {
    chipColor: string;
    chipBg: string;
};

export const generateTagsInputPalette = (abstractPalette: TAbstractPalette): TTagsInputPalette => {
    return {
        chipColor: abstractPalette.base,
        chipBg: abstractPalette.primary,
    };
};
