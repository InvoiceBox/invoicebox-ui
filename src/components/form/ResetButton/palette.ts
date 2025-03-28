import { TAbstractPalette } from '../../../palette';

export type TResetButtonPalette = {
    color: string;
};

export const generateResetButtonPalette = (abstractPalette: TAbstractPalette): TResetButtonPalette => {
    return {
        color: abstractPalette.primary,
    };
};
