import { TAbstractPalette } from '../../../palette';
import hexToRgba from 'hex-to-rgba';

export type TDateTimeInputPalette = {
    icon: string;
    divider: string;
    cancelButton: string;
    applyButton: string;
    disabledButton: string;
};

export const generateDateTimeInputPalette = (abstractPalette: TAbstractPalette): TDateTimeInputPalette => {
    return {
        icon: abstractPalette.primary,
        divider: hexToRgba(abstractPalette.primary, 0.1),
        cancelButton: abstractPalette.neutralUsual,
        applyButton: abstractPalette.secondary,
        disabledButton: abstractPalette.neutralFoggy,
    };
};
