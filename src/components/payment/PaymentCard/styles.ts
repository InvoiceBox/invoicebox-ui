import styled, { css } from 'styled-components';
import { Typography } from '../../common/Typography';
import { TPaymentCardPalette } from './palette';

export const Wrapper = styled.div.attrs({ role: 'button' })<{
    $isActive: boolean;
    $isDisabled: boolean;
    $pallete: TPaymentCardPalette;
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

    ${({ $isActive, $pallete }) =>
        $isActive
            ? css`
                  background: ${$pallete.bgActive};
                  border: 1px solid ${$pallete.borderActive};
              `
            : css`
                  border: 1px solid ${$pallete.borderInactive};
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

export const RadioWrapper = styled.div`
    flex-shrink: 0;
    flex-grow: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
`;

export const Title = styled(Typography)<{ $ellipsis: boolean; $pallete: TPaymentCardPalette }>`
    white-space: ${({ $ellipsis }) => ($ellipsis ? 'normal' : 'nowrap')};
    text-overflow: ellipsis;
    overflow: hidden;

    ${({ $ellipsis }) =>
        $ellipsis &&
        `
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    `}

    max-width: 100%;
    color: ${({ $pallete }) => $pallete.title};
`;

export const IconWrapper = styled.div<{ $isActive: boolean; $pallete: TPaymentCardPalette }>`
    flex-shrink: 0;
    flex-grow: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${({ $isActive, $pallete }) => ($isActive ? 'transparent' : $pallete.iconBg)};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Comment = styled(Typography)<{ $pallete: TPaymentCardPalette; $isActive: boolean }>`
    color: ${({ $pallete }) => $pallete.comment};
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 8px;
    box-sizing: border-box;
    background: ${({ $pallete }) => $pallete.commentBg};
    border-radius: 6px 0 0 0;

    ${({ $isActive, $pallete }) =>
        $isActive
            ? css`
                  border-top: 1px solid ${$pallete.borderActive};
                  border-left: 1px solid ${$pallete.borderActive};
              `
            : css`
                  border-top: 1px solid ${$pallete.borderInactive};
                  border-left: 1px solid ${$pallete.borderInactive};
              `}
`;
