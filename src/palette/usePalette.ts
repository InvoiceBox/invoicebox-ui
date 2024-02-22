import { useContext } from 'react';
import { PaletteContext } from './context';

export const usePalette = () => {
    return useContext(PaletteContext);
};
