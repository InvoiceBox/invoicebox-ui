import React, { FC } from 'react';
import { StyledSvg } from './components/StyledSvg';
import { TArrowPalette } from './palette';
import { useComponentPalette } from '../../../palette';
import { disableCSSOM } from '../../../helpers/disableCSSOM';

export type TProps = {
    isOpen: boolean;
    innerSize?: number;
    outterSize?: number;
    defaultRotate?: number;
    palette?: Partial<TArrowPalette>;
};

const ArrowInner: FC<TProps> = ({ isOpen, innerSize = 10, outterSize = 24, defaultRotate = 0, palette }) => {
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

export const Arrow = disableCSSOM(ArrowInner);
