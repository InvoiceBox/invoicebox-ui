import { useCallback, useMemo } from 'react';

export const useNormalizers = () => {
    const normalizeTo = useCallback((v: string) => (!v ? null : Number(v)), []);
    const normalizeFrom = useCallback((v: number | null) => (v !== null ? String(v) : ''), []);

    const normalizers = useMemo(() => ({ normalizeTo, normalizeFrom }), [normalizeTo, normalizeFrom]);

    return normalizers;
};
