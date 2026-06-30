import { TAbstractPalette } from '../../../palette';

export type TTooltipPalette = {
    bg: string;
    color: string;
    shadow: string;
};

export const generateTooltipPalette = (abstractPalette: TAbstractPalette): TTooltipPalette => {
    return {
        bg: abstractPalette.base,
        color: abstractPalette.primary,
        shadow: '0px 8px 21px rgba(53, 63, 71, 0.16)',
    };
};
