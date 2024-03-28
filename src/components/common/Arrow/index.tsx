import React, { FC } from 'react';
import { StyledSvg } from './components/StyledSvg';
import { TArrowPalette } from './palette';
import { useComponentPalette } from '../../../palette';

export type TProps = {
    isOpen: boolean;
    innerSize?: number;
    outterSize?: number;
    defaultRotate?: number;
    palette?: Partial<TArrowPalette>;
};

export const Arrow: FC<TProps> = ({
    isOpen,
    innerSize = 10,
    outterSize = 24,
    defaultRotate = 0,
    palette,
}) => {
    const mergedPalette = useComponentPalette('arrow', palette);

    return (
        <StyledSvg
            $isOpen={isOpen}
            $openColor={mergedPalette.open}
            $closeColor={mergedPalette.close}
            size={innerSize}
            $padding={(outterSize - innerSize) / 2}
            $defaultRotate={defaultRotate}
        />
    );
};
