import { TAbstractPalette } from '../../../palette';
import { transformColorByHsl } from '../../../utils/transformColorByHsl';
import hexToRgba from 'hex-to-rgba';

export type TDrawerPalette = {
    error: string;
    bg: string;
    backdropBg: string;
    titleBg: string;
};

export const generateDrawerPalette = (abstractPalette: TAbstractPalette): TDrawerPalette => {
    return {
        error: abstractPalette.error,
        bg: abstractPalette.base,
        backdropBg: hexToRgba(
            transformColorByHsl(abstractPalette.primary, {
                hue: -3.3333333333333144,
                saturation: -0.07435090479937062,
                lightness: 0.08235294117647063,
            }),
            0.5,
        ),
        titleBg: abstractPalette.neutralUsual,
    };
};
