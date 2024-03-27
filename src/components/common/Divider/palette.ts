import { TAbstractPalette } from '../../../palette';

export type TDividerPalette = {
    divider: string;
};

export const generateDividerPalette = (abstractPalette: TAbstractPalette): TDividerPalette => {
    return {
        divider: abstractPalette.neutralUsual,
    };
};
