import styled from 'styled-components';
import { typography } from './typography';

export const Wrapper = styled.div<{ $variant: keyof typeof typography }>`
    font-family: Roboto, sans-serif;

    ${({ $variant }) => typography[$variant]}
`;
