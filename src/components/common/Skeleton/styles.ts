import styled, { keyframes } from 'styled-components';
import { TSkeletonPalette } from './palette';

const shine = keyframes`
    0% {
        left: calc(0% - 200px);
    }
    100% {
        left: calc(100% + 200px);
    }
`;

export const Wrapper = styled.div<{ $width: string; $height: string; $palette: TSkeletonPalette }>`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    background: ${({ $palette }) => $palette.bg};
`;

export const Inner = styled.div<{ $palette: TSkeletonPalette }>`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    background-image: linear-gradient(
        90deg,
        ${({ $palette }) => $palette.bg} 0px,
        ${({ $palette }) => $palette.flicker} 50px,
        ${({ $palette }) => $palette.bg} 100px
    );
    animation: ${shine} 3s infinite linear;
`;
