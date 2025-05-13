export type TSizes = 'M' | 'L' | 'XS';

export const SIZE_PADDING_MAP: Record<TSizes, { paddingTop: number; paddingBottom: number }> = {
    L: { paddingTop: 16, paddingBottom: 16 },
    M: { paddingTop: 13, paddingBottom: 13 },
    XS: { paddingTop: 10, paddingBottom: 10 },
};
