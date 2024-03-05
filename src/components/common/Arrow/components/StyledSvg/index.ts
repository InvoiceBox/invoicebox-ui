import styled from 'styled-components';
import { Svg } from '../Svg';

export const StyledSvg = styled(Svg)<{
    $isOpen: boolean;
    $isLight: boolean;
    $openLightColor: string;
    $closeLightColor: string;
    $openUsualColor: string;
    $closeUsualColor: string;
    $padding: number;
    $defaultRotate: number;
}>`
    transform: rotateZ(${({ $isOpen, $defaultRotate }) => ($isOpen ? $defaultRotate + 180 : $defaultRotate)}deg);
    transition: all 0.2s ease-in-out 0s;
    box-sizing: content-box;

    padding: ${({ $padding }) => $padding}px;

    path {
        stroke: ${({
            $isLight,
            $isOpen,
            $openLightColor,
            $closeLightColor,
            $openUsualColor,
            $closeUsualColor,
        }) => {
            if ($isLight && $isOpen) return $openLightColor;
            if ($isLight && !$isOpen) return $closeLightColor;
            if (!$isLight && $isOpen) return $openUsualColor;
            if (!$isLight && !$isOpen) return $closeUsualColor;
        }};
`;
