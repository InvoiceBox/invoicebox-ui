import { TAbstractPalette } from '../../../palette';
import hexToRgba from 'hex-to-rgba';

export type TTogglePalette = {
    circle: string;
    defaultBg: string;
    activeBg: string;
    label: string;
};

export const generateTogglePalette = (abstractPalette: TAbstractPalette): TTogglePalette => {
    return {
        circle: abstractPalette.base,
        defaultBg: hexToRgba(abstractPalette.primary, 0.3),
        activeBg: abstractPalette.secondary,
        label: abstractPalette.primary,
    };
};
