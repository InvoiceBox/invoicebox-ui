import hexToRgba from '../../../../../utils/hexToRgba';
import { TAbstractPalette } from '../../../../../palette';

export type TAutocompleteDefaultOptionPalette = {
    hoverBg: string;
};

export const generateAutocompleteDefaultOptionPalette = (
    abstractPalette: TAbstractPalette,
): TAutocompleteDefaultOptionPalette => {
    return {
        hoverBg: hexToRgba(abstractPalette.neutralUsual, 0.5),
    };
};
