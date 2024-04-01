import { TAbstractPalette } from '../../../palette';

export type TSearchInputPalette = {
    icon: string;
};

export const generateSearchInputPalette = (abstractPalette: TAbstractPalette): TSearchInputPalette => {
    return {
        icon: abstractPalette.primary,
    };
};
