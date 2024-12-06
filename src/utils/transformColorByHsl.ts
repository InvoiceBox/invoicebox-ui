import { hslToColorString, parseToHsl } from 'polished';

type Hsl = {
    hue: number;
    saturation: number;
    lightness: number;
};

export const transformColorByHsl = (base: string, diff: Hsl) => {
    const hslBase = parseToHsl(base);

    const hue = hslBase.hue - diff.hue;
    const saturation = hslBase.saturation - diff.saturation;
    const lightness = hslBase.lightness - diff.lightness;

    return hslToColorString({
        hue: Math.min(Math.max(hue, 0), 360),
        saturation: Math.min(Math.max(saturation, 0), 1),
        lightness: Math.min(Math.max(lightness, 0), 1),
    });
};
