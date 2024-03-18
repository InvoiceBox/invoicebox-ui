import hexToRgba from 'hex-to-rgba';
import { TAbstractPalette } from '../../../palette';

export type TPureInputPalette = {
    text: string;
    bg: string;
    error: string;
    border: string;
    borderFocus: string;
    placeholder: string;
};

export const generatePureInputPalette = (abstractPalette: TAbstractPalette): TPureInputPalette => {
    return {
        text: abstractPalette.primary,
        bg: abstractPalette.base,
        error: abstractPalette.error,
        border: hexToRgba(abstractPalette.neutralBrutal, 0.3),
        borderFocus: abstractPalette.primary,
        placeholder: hexToRgba(abstractPalette.primary, 0.3),
    };
};
