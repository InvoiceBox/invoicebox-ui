import { TAbstractPalette } from '../../../palette';

export type TScrollbarPalette = {
    thumb: string;
};

export const generateScrollbarPalette = (abstractPalette: TAbstractPalette): TScrollbarPalette => {
    return {
        thumb: abstractPalette.neutralFoggy,
    };
};
