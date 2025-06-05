import { TAbstractPalette } from '../../../palette';

export type TReadOnlyLabelValueFieldPalette = {
    value: string;
};

export const generateReadOnlyLabelValueFieldPalette = (
    abstractPalette: TAbstractPalette,
): TReadOnlyLabelValueFieldPalette => {
    return {
        value: abstractPalette.primary,
    };
};
