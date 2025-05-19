import { typography } from '../common/Typography/typography';

export type TSizes = 'L' | 'M' | 'XS';

export const SIZE_PARAMS_MAP: Record<
    TSizes,
    { paddingTop: number; paddingBottom: number; variant: keyof typeof typography }
> = {
    L: { paddingTop: 15, paddingBottom: 15, variant: 'bodyMRegular' },
    M: { paddingTop: 12, paddingBottom: 12, variant: 'bodyMRegular' },
    XS: { paddingTop: 9, paddingBottom: 9, variant: 'labelsHintsRegular' },
};
