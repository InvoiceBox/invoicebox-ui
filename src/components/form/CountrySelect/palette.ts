import { TAbstractPalette } from '../../../palette';
import hexToRgba from 'hex-to-rgba';

export type TCountrySelectPalette = {
    title: string;
    border: string;
    countryBg: string;
    countryHoverBg: string;
    countryDescription: string;
};

export const generateCountrySelectPalette = (abstractPalette: TAbstractPalette): TCountrySelectPalette => {
    return {
        title: abstractPalette.primary,
        border: hexToRgba(abstractPalette.primary, 0.2),
        countryBg: abstractPalette.base,
        countryHoverBg: hexToRgba(abstractPalette.neutralUsual, 0.5),
        countryDescription: hexToRgba(abstractPalette.primary, 0.3),
    };
};
