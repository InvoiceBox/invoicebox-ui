import { TAbstractPalette } from '../../../palette';

export type TSkeletonPalette = {
    bg: string;
    flicker: string;
};

export const generateSkeletonPalette = (abstractPalette: TAbstractPalette): TSkeletonPalette => {
    return {
        bg: abstractPalette.neutralUsual,
        flicker: abstractPalette.neutralLight,
    };
};
