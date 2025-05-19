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
