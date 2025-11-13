import hexToRgba from 'hex-to-rgba';
import { TAbstractPalette } from '../../../palette';

export type TCalendarPalette = {
    arrow: string;
    weekday: string;
    tile: string;
    tileActive: string;
    tileBgActive: string;
    tileBgRangeBetween: string;
    month: string;
};

export const generateCalendarPalette = (abstractPalette: TAbstractPalette): TCalendarPalette => {
    return {
        arrow: abstractPalette.primary,
        weekday: hexToRgba(abstractPalette.primary, 0.4),
        tile: hexToRgba(abstractPalette.primary, 0.7),
        tileActive: abstractPalette.primary,
        tileBgActive: abstractPalette.secondary,
        tileBgRangeBetween: hexToRgba(abstractPalette.primary, 0.05),
        month: abstractPalette.primary,
    };
};
