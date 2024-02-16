import styled, { keyframes } from 'styled-components';

const shine = keyframes`
    0% {
        left: calc(0% - 200px);
    }
    100% {
        left: calc(100% + 200px);
    }
`;

export const Wrapper = styled.div<{ $width: string; $height: string }>`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    background: #f1f2f6;
`;

export const Inner = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    background-image: linear-gradient(90deg, #f1f2f6 0px, #f9f9f9 50px, #f1f2f6 100px);
    animation: ${shine} 3s infinite linear;
`;
