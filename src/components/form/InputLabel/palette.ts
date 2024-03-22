import { TAbstractPalette } from '../../../palette';

export type TInputLabelPalette = {
    bg: string;
    text: string;
    textHighlight: string;
};

export const generateInputLabelPalette = (abstractPalette: TAbstractPalette): TInputLabelPalette => {
    return {
        bg: abstractPalette.base,
        text: abstractPalette.neutralBrutal,
        textHighlight: abstractPalette.primary,
    };
};
