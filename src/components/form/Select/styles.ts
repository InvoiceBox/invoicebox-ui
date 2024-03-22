import styled from 'styled-components';
import { Typography } from '../../common/Typography';
import { TSelectPalette } from './palette';

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const InputWrapper = styled.div`
    cursor: pointer;

    input {
        cursor: pointer;
    }
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Option = styled(Typography)<{ $palette: TSelectPalette }>`
    overflow: hidden;
    display: flex;
    width: 100%;
    text-align: left;
    flex-direction: column;
    padding: 12px 20px;
    transition: all 0.2s ease-in-out 0s;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        background-color: ${({ $palette }) => $palette.bgHover};
    }
`;
