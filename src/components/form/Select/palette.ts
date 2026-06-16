import hexToRgba from '../../../utils/hexToRgba';
import { TAbstractPalette } from '../../../palette';

export type TSelectPalette = {
    bgHover: string;
    empty: string;
};

export const generateSelectPalette = (abstractPalette: TAbstractPalette): TSelectPalette => {
    return {
        bgHover: hexToRgba(abstractPalette.neutralUsual, 0.5),
        empty: abstractPalette.neutralFoggy,
    };
};
