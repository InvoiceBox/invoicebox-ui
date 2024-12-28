import { TAbstractPalette } from '../../../palette';
import hexToRgba from 'hex-to-rgba';

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
