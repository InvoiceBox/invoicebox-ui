import { TAbstractPalette } from '../../../palette';
import { transformColorByHsl } from '../../../utils/transformColorByHsl';
import hexToRgba from '../../../utils/hexToRgba';

export type TModalPalette = {
    bg: string;
    backdropBg: string;
    shadow: string;
    expandButton: string;
    expandButtonHoverBg: string;
};

export const generateModalPalette = (abstractPalette: TAbstractPalette): TModalPalette => {
    return {
        bg: abstractPalette.base,
        // тот же затемнённый primary, что и у подложки Drawer
        backdropBg: hexToRgba(
            transformColorByHsl(abstractPalette.primary, {
                hue: -3.3333333333333144,
                saturation: -0.07435090479937062,
                lightness: 0.08235294117647063,
            }),
            0.5,
        ),
        shadow: '0 10px 30px 0 rgba(53, 63, 71, 0.1)',
        expandButton: hexToRgba(abstractPalette.primary, 0.7),
        expandButtonHoverBg: hexToRgba(abstractPalette.primary, 0.06),
    };
};
