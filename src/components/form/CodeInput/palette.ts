import { TAbstractPalette } from '../../../palette';
import hexToRgba from '../../../utils/hexToRgba';

export type TCodeInputPalette = {
    errorBorder: string;
    defaultBorder: string;
};

export const generateCodeInputPalette = (abstractPalette: TAbstractPalette): TCodeInputPalette => {
    return {
        errorBorder: abstractPalette.error,
        defaultBorder: hexToRgba(abstractPalette.primary, 0.3),
    };
};
