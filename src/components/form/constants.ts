export type TSizes = 'M' | 'L';

export const SIZE_PADDING_MAP: Record<TSizes, { paddingTop: number; paddingBottom: number }> = {
    L: { paddingTop: 12, paddingBottom: 12 },
    M: { paddingTop: 8, paddingBottom: 8 },
};
