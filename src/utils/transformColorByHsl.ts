type Hsl = {
    hue: number;
    saturation: number;
    lightness: number;
};

type Rgb = {
    red: number;
    green: number;
    blue: number;
};

// Математика ниже повторяет parseToHsl/hslToColorString из polished 4.3.1
// (включая округление и сокращение hex до 3 знаков), чтобы не тащить polished
// как runtime-зависимость. Палитра библиотеки оперирует hex-цветами (см.
// defaultAbstractPalette и hexToRgba), поэтому поддерживается только hex.

const parseHex = (color: string): Rgb => {
    const normalized = color.startsWith('#') ? color.slice(1) : color;

    if (/^[0-9a-fA-F]{3}$/.test(normalized)) {
        return {
            red: parseInt(normalized[0] + normalized[0], 16),
            green: parseInt(normalized[1] + normalized[1], 16),
            blue: parseInt(normalized[2] + normalized[2], 16),
        };
    }

    if (/^[0-9a-fA-F]{6}$/.test(normalized)) {
        return {
            red: parseInt(normalized.slice(0, 2), 16),
            green: parseInt(normalized.slice(2, 4), 16),
            blue: parseInt(normalized.slice(4, 6), 16),
        };
    }

    throw new Error(`transformColorByHsl: unsupported color "${color}", expected #rgb or #rrggbb`);
};

const rgbToHsl = ({ red, green, blue }: Rgb): Hsl => {
    const r = red / 255;
    const g = green / 255;
    const b = blue / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lightness = (max + min) / 2;

    if (max === min) {
        return { hue: 0, saturation: 0, lightness };
    }

    const delta = max - min;
    const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    let hue;
    if (max === r) {
        hue = (g - b) / delta + (g < b ? 6 : 0);
    } else if (max === g) {
        hue = (b - r) / delta + 2;
    } else {
        hue = (r - g) / delta + 4;
    }

    return { hue: hue * 60, saturation, lightness };
};

const hslToRgb = ({ hue, saturation, lightness }: Hsl): Rgb => {
    if (saturation === 0) {
        const value = Math.round(lightness * 255);
        return { red: value, green: value, blue: value };
    }

    const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
    const huePrime = (((hue % 360) + 360) % 360) / 60;
    const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));

    let red = 0;
    let green = 0;
    let blue = 0;

    if (huePrime >= 0 && huePrime < 1) {
        red = chroma;
        green = secondComponent;
    } else if (huePrime >= 1 && huePrime < 2) {
        red = secondComponent;
        green = chroma;
    } else if (huePrime >= 2 && huePrime < 3) {
        green = chroma;
        blue = secondComponent;
    } else if (huePrime >= 3 && huePrime < 4) {
        green = secondComponent;
        blue = chroma;
    } else if (huePrime >= 4 && huePrime < 5) {
        red = secondComponent;
        blue = chroma;
    } else {
        red = chroma;
        blue = secondComponent;
    }

    const lightnessModification = lightness - chroma / 2;

    return {
        red: Math.round((red + lightnessModification) * 255),
        green: Math.round((green + lightnessModification) * 255),
        blue: Math.round((blue + lightnessModification) * 255),
    };
};

const numberToHex = (value: number): string => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
};

const rgbToHexString = ({ red, green, blue }: Rgb): string => {
    const value = `#${numberToHex(red)}${numberToHex(green)}${numberToHex(blue)}`;

    if (value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
        return `#${value[1]}${value[3]}${value[5]}`;
    }

    return value;
};

export const transformColorByHsl = (base: string, diff: Hsl) => {
    const hslBase = rgbToHsl(parseHex(base));

    const hue = hslBase.hue - diff.hue;
    const saturation = hslBase.saturation - diff.saturation;
    const lightness = hslBase.lightness - diff.lightness;

    return rgbToHexString(
        hslToRgb({
            hue: Math.min(Math.max(hue, 0), 360),
            saturation: Math.min(Math.max(saturation, 0), 1),
            lightness: Math.min(Math.max(lightness, 0), 1),
        }),
    );
};
