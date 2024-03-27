import { TAbstractPalette } from '../../../palette';

export type TWarningIconPalette = {
    icon: string;
};

export const generateWarningIconPalette = (abstractPalette: TAbstractPalette): TWarningIconPalette => {
    return {
        icon: abstractPalette.error,
    };
};
