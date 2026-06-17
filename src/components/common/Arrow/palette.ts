import hexToRgba from '../../../utils/hexToRgba';
import { TAbstractPalette } from '../../../palette';

export type TArrowPalette = {
    open: string;
    close: string;
};

export const generateArrowPalette = (abstractPalette: TAbstractPalette): TArrowPalette => {
    return {
        open: hexToRgba(abstractPalette.primary, 0.5),
        close: hexToRgba(abstractPalette.primary, 0.5),
    };
};
