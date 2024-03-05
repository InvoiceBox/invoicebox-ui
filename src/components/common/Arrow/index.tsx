import React, { FC } from 'react';
import { StyledSvg } from './components/StyledSvg';
import { TArrowPalette } from './palette';
import { useComponentPalette } from '../../../palette';

export type TProps = {
    isOpen: boolean;
    isLight?: boolean;
    innerSize?: number;
    outterSize?: number;
    defaultRotate?: number;
    palette?: Partial<TArrowPalette>;
};

export const Arrow: FC<TProps> = ({
    isOpen,
    isLight = false,
    innerSize = 10,
    outterSize = 24,
    defaultRotate = 0,
    palette,
}) => {
    const mergedPalette = useComponentPalette('arrow', palette);

    return (
        <StyledSvg
            $isOpen={isOpen}
            $isLight={isLight}
            $openLightColor={mergedPalette.openLight}
            $closeLightColor={mergedPalette.closeLight}
            $openUsualColor={mergedPalette.openUsual}
            $closeUsualColor={mergedPalette.closeUsual}
            size={innerSize}
            $padding={(outterSize - innerSize) / 2}
            $defaultRotate={defaultRotate}
        />
    );
};
