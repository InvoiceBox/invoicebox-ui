import { TAbstractPalette } from '../../../palette';

export type TSecondaryButtonPalette = {
    text: string;
    bg: string;
    bgHover: string;
    bgActive: string;
};

export const generateSecondaryButtonPalette = (
    abstractPalette: TAbstractPalette,
): TSecondaryButtonPalette => {
    return {
        text: abstractPalette.primary,
        bg: abstractPalette.neutralUsual,
        bgHover: abstractPalette.neutralHeavy,
        bgActive: abstractPalette.neutralMassive,
    };
};
