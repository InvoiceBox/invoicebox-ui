import styled from 'styled-components';
import { Svg } from '../Svg';

export const StyledSvg = styled(Svg)<{
    $isOpen: boolean;
    $openColor: string;
    $closeColor: string;
    $padding: number;
    $defaultRotate: number;
}>`
    transform: rotateZ(${({ $isOpen, $defaultRotate }) => ($isOpen ? $defaultRotate + 180 : $defaultRotate)}deg);
    transition: all 0.2s ease-in-out 0s;
    box-sizing: content-box;

    padding: ${({ $padding }) => $padding}px;

    path {
        stroke: ${({ $isOpen, $openColor, $closeColor }) => ($isOpen ? $openColor : $closeColor)};
`;
