import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../breakpoints';

export const useMobile = () => useMediaQuery({ query: breakpoints.sm });
export const useTablet = () => useMediaQuery({ query: breakpoints.md });
export const useLargeTablet = () => useMediaQuery({ query: breakpoints.ld });
export const useMiniLaptop = () => useMediaQuery({ query: breakpoints.xl });
