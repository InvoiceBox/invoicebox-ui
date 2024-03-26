import { TAbstractPalette } from '../../../palette';

export type TDateInputPalette = {
    icon: string;
};

export const generateDateInputPalette = (abstractPalette: TAbstractPalette): TDateInputPalette => {
    return {
        icon: abstractPalette.primary,
    };
};
