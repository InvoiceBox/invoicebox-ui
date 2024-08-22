import styled, { css } from 'styled-components';
import { Typography } from '../../common/Typography';

export const Wrapper = styled.div.attrs({ role: 'button' })<{
    $isActive: boolean;
    $isDisabled: boolean;
}>`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    overflow: hidden;

    ${({ $isActive }) =>
        $isActive
            ? css`
                  background: rgba(250, 210, 71, 0.1);
                  border: 1px solid #fad247;
              `
            : css`
                  border: 1px solid #c3c6c8;
              `}

    ${({ $isDisabled }) =>
        $isDisabled
            ? css`
                  opacity: 0.5;
                  cursor: not-allowed;
              `
            : css`
                  cursor: pointer;
              `};
`;

export const RadioWrpper = styled.div`
    flex-shrink: 0;
    flex-grow: 0;
`;

export const Content = styled.div`
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
    flex-grow: 1;
    flex-shrink: 1;
`;

export const IconWrapper = styled.div`
    flex-shrink: 0;
    flex-grow: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #f1f2f6;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Comment = styled(Typography)`
    color: #999999;
    position: absolute;
    bottom: 4px;
    right: 10px;
`;

export const SubPaymentTitle = styled(Typography)<{ $onlyTitle: boolean }>`
    max-height: ${({ $onlyTitle }) => ($onlyTitle ? '56px' : '20px')};
    white-space: ${({ $onlyTitle }) => ($onlyTitle ? 'normal' : 'nowrap')};
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
`;

export const SubPaymentSubTitle = styled.div``;
