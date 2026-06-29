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
        $labelVariant: keyof typeof typography;
        $labelPaddingTop: number;
        $placeholderPaddingTop: number;
    }
> = {
    L: {
        paddingTop: 24,
        paddingBottom: 8,
        variant: 'headline5Desktop',
        $labelVariant: 'labelsHintsRegular',
        $labelPaddingTop: 8,
        $placeholderPaddingTop: 16,
    },
    M: {
        paddingTop: 20,
        paddingBottom: 4,
        variant: 'bodyL',
        $labelVariant: 'labelsHintsRegular',
        $labelPaddingTop: 4,
        $placeholderPaddingTop: 12,
    },
    XS: {
        paddingTop: 6,
        paddingBottom: 6,
        variant: 'headline5Desktop',
        $labelVariant: 'labelsHintsRegular',
        $labelPaddingTop: -18,
        $placeholderPaddingTop: 6,
    },
};
