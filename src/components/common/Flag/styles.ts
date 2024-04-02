import styled from 'styled-components';

export const FlagWrapper = styled.div<{ $width: number; $height: number }>`
    box-shadow: 0 1px 5px rgba(53, 63, 71, 0.2);
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
