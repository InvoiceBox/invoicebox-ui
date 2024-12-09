import { TAbstractPalette } from '../../../palette';
import hexToRgba from 'hex-to-rgba';

export type TEntityAutocompleteOptionsDrawerPalette = {
    prompt: string;
};

export const generateEntityAutocompleteOptionsDrawerPalette = (
    abstractPalette: TAbstractPalette,
): TEntityAutocompleteOptionsDrawerPalette => {
    return {
        prompt: hexToRgba(abstractPalette.primary, 0.5),
    };
};
