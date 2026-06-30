import hexToRgba from '../../../utils/hexToRgba';
import { TAbstractPalette } from '../../../palette';

export type TCheckboxPalette = {
    labelColor: string;
    mark: string;
    borderDefault: string;
    borderHover: string;
    checkedBg: string;
    checkedHoverBg: string;
    disabledBg: string;
    disabledBorder: string;
};

export const generateCheckboxPalette = (abstractPalette: TAbstractPalette): TCheckboxPalette => {
    return {
        labelColor: abstractPalette.primary,
        mark: abstractPalette.base,
        borderDefault: hexToRgba(abstractPalette.primary, 0.3),
        borderHover: hexToRgba(abstractPalette.primary, 0.5),
        checkedBg: abstractPalette.secondary,
        checkedHoverBg: '#EDC743',
        disabledBg: hexToRgba(abstractPalette.neutralBrutal, 0.3),
        disabledBorder: hexToRgba(abstractPalette.neutralBrutal, 0.3),
    };
};
