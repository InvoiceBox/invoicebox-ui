import { TAbstractPalette } from '../../../palette';
import hexToRgba from '../../../utils/hexToRgba';

export type TWentWrongModalPalette = {
    text: string;
    description: string;
    requestId: string;
    headerBg: string;
    copyIcon: string;
    copyButtonBg: string;
    copyValueHoverBg: string;
};

export const generateWentWrongModalPalette = (abstractPalette: TAbstractPalette): TWentWrongModalPalette => {
    return {
        text: abstractPalette.primary,
        // на белом фоне совпадает с grey800 (#868C91) из макета
        description: hexToRgba(abstractPalette.primary, 0.6),
        // на белом фоне ≈ text.secondary (#72777B)
        requestId: hexToRgba(abstractPalette.primary, 0.7),
        headerBg: '#EDF5F8',
        // на белом фоне совпадает с grey700 (#9A9FA3)
        copyIcon: hexToRgba(abstractPalette.primary, 0.5),
        copyButtonBg: abstractPalette.neutralUsual,
        copyValueHoverBg: abstractPalette.neutralHeavy,
    };
};
