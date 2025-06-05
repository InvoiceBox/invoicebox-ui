import { TAbstractPalette } from '../../../palette';
import hexToRgba from 'hex-to-rgba';

export type TPointsLoaderPalette = {
    active: string;
    default: string;
};

export const generatePointsLoaderPalette = (abstractPalette: TAbstractPalette): TPointsLoaderPalette => {
    return {
        active: abstractPalette.primary,
        default: hexToRgba(abstractPalette.primary, 0.2),
    };
};
