import { typography } from '../common/Typography/typography';

export type TSizes = 'L' | 'M' | 'XS';

export const SIZE_PARAMS_MAP: Record<
    TSizes,
    { paddingTop: number; paddingBottom: number; variant: keyof typeof typography }
> = {
    L: { paddingTop: 16, paddingBottom: 16, variant: 'bodyMRegular' },
    M: { paddingTop: 13, paddingBottom: 13, variant: 'bodyMRegular' },
    XS: { paddingTop: 10, paddingBottom: 10, variant: 'labelsHintsRegular' },
};

export const MODERN_STYLE_SIZE_PARAMS_MAP: Record<
    TSizes,
    {
        paddingTop: number;
        paddingBottom: number;
        variant: keyof typeof typography;
        labelVariant: keyof typeof typography;
        labelPaddingTop: number;
    }
> = {
    L: {
        paddingTop: 20,
        paddingBottom: 12,
        variant: 'bodyMRegular',
        labelVariant: 'captionRegular',
        labelPaddingTop: 14,
    },
    M: {
        paddingTop: 16,
        paddingBottom: 6,
        variant: 'bodyMRegular',
        labelVariant: 'captionRegular',
        labelPaddingTop: 12,
    },
    XS: {
        paddingTop: 12,
        paddingBottom: 4,
        variant: 'labelsHintsRegular',
        labelVariant: 'captionSRegular',
        labelPaddingTop: 10,
    },
};
