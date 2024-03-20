import { useMemo } from 'react';
import { usePalette } from './usePalette';

export const useComponentPalette = <TComponentPalette>(
    componentName: keyof ReturnType<typeof usePalette>,
    componentPropsPalette?: Partial<TComponentPalette>,
): TComponentPalette => {
    const palette = usePalette();

    const componentPalette = palette[componentName] as TComponentPalette;

    const value = useMemo(
        () => ({ ...componentPalette, ...componentPropsPalette }),
        [componentPalette, componentPropsPalette],
    );

    return value;
};
