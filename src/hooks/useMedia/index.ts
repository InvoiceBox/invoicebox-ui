import { useEffect, useState } from 'react';
import { breakpoints } from '../../breakpoints';

// Инлайн-замена `react-responsive` (убрали зависимость): тонкий хук поверх window.matchMedia.
// Возвращает boolean и обновляется на смену совпадения; SSR-безопасен (false без window).
const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(
        () =>
            typeof window !== 'undefined' &&
            typeof window.matchMedia === 'function' &&
            window.matchMedia(query).matches,
    );

    useEffect(() => {
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return undefined;
        const mediaQueryList = window.matchMedia(query);
        const handleChange = (event: MediaQueryListEvent) => setMatches(event.matches);
        setMatches(mediaQueryList.matches);
        mediaQueryList.addEventListener('change', handleChange);
        return () => mediaQueryList.removeEventListener('change', handleChange);
    }, [query]);

    return matches;
};

export const useMobile = () => useMediaQuery(breakpoints.sm);
export const useTablet = () => useMediaQuery(breakpoints.md);
export const useLargeTablet = () => useMediaQuery(breakpoints.ld);
export const useMiniLaptop = () => useMediaQuery(breakpoints.xl);
