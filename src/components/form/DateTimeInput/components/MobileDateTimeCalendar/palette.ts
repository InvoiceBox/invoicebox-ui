import { TAbstractPalette } from '../../../../../palette';
import hexToRgba from 'hex-to-rgba';

export type TMobileDateTimeCalendarPalette = {
    headLabel: string;
    applyButton: string;
    border: string;
};

export const generateMobileDateTimeCalendarPalette = (
    abstractPalette: TAbstractPalette,
): TMobileDateTimeCalendarPalette => {
    return {
        headLabel: abstractPalette.primary,
        applyButton: hexToRgba(abstractPalette.primary, 0.5),
        border: hexToRgba(abstractPalette.primary, 0.1),
    };
};
