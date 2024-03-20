import { useCallback, useMemo } from 'react';

export const useIncrement = () => {
    const increment = useCallback((v: number | null) => (v === null ? 1 : v + 1), []);
    const decrement = useCallback((v: number | null) => (v === null || v === 0 ? 0 : v - 1), []);

    const incrementers = useMemo(() => ({ increment, decrement }), [increment, decrement]);

    return incrementers;
};
