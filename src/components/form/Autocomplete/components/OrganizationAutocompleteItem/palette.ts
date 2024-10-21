import hexToRgba from 'hex-to-rgba';
import { TAbstractPalette } from '../../../../../palette';

export type TOrganizationAutocompleteItemPalette = {
    title: string;
    description: string;
    label: string;
};

export const generateOrganizationAutocompleteItemPalette = (
    abstractPalette: TAbstractPalette,
): TOrganizationAutocompleteItemPalette => {
    return {
        title: abstractPalette.primary,
        description: hexToRgba(abstractPalette.primary, 0.5),
        label: hexToRgba(abstractPalette.primary, 0.3),
    };
};
