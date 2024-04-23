import styled, { css } from 'styled-components';

const selectedFlagStyles = css`
    height: 16px;
    width: 22px;
    border-radius: 3px;
`;

const listFlagStyles = css`
    height: 12px;
    width: 17px;
    border-radius: 2px;

    img {
        transform: scale(0.8);
        transform-origin: left top;
    }
`;

export const FlagWrapper = styled.div<{ $isSmall: boolean }>`
    box-shadow: 0 1px 5px rgba(53, 63, 71, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    ${({ $isSmall }) => ($isSmall ? listFlagStyles : selectedFlagStyles)};
`;
