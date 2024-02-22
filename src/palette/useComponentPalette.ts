import { usePalette } from './usePalette';

export const useComponentPalette = <TComponentPalette>(
    componentName: keyof ReturnType<typeof usePalette>,
    componentPropsPalette?: Partial<TComponentPalette>,
): TComponentPalette => {
    const palette = usePalette();

    const componentPalette = palette[componentName] as TComponentPalette;

    return { ...componentPalette, ...componentPropsPalette };
};
