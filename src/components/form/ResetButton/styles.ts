import styled from 'styled-components';

export const StyledButton = styled.button<{ $color: string }>`
    display: flex;
    align-content: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${({ $color }) => $color};
`;
