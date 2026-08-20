import hexToRgba from '../../../../../utils/hexToRgba';
import { TAbstractPalette } from '../../../../../palette';

export type TMobileWheelPickerPalette = {
    value: string;
    valueActive: string;
    selectedBg: string;
    fadeBg: string;
    fadeBgTransparent: string;
};

export const generateMobileWheelPickerPalette = (
    abstractPalette: TAbstractPalette,
): TMobileWheelPickerPalette => {
    return {
        value: hexToRgba(abstractPalette.primary, 0.6),
        valueActive: abstractPalette.primary,
        selectedBg: hexToRgba(abstractPalette.primary, 0.08),
        fadeBg: abstractPalette.base,
        fadeBgTransparent: hexToRgba(abstractPalette.base, 0),
    };
};
