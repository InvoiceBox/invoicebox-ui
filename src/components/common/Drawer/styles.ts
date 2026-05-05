import styled, { css } from 'styled-components';
import { Sheet } from 'react-modal-sheet';

export const Title = styled.div<{ $bg: string }>`
    background-color: ${({ $bg }) => $bg};
    padding: 30px;
    position: relative;
    text-align: center;
    border-radius: 10px 10px 0 0;
`;

export const DragIndicatorWrapper = styled.div`
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
`;

export const ChildrenWrapper = styled.div<{ $isPadding: boolean; $bgColor: string }>`
    ${({ $isPadding }) => $isPadding && 'padding: 32px 16px 36px'};
    background-color: ${({ $bgColor }) => $bgColor};
`;

export const StyledSheetContainer = styled(Sheet.Container)<{
    $isErrorBorder?: boolean;
    $errorColor: string;
    $borderColor?: string;
}>`
    overflow: hidden;
    box-shadow: none;
    border-radius: 10px 10px 0 0;
    ${({ $isErrorBorder, $errorColor, $borderColor }) =>
        ($isErrorBorder || $borderColor) &&
        css`
            border-top: 2px solid ${$borderColor || $errorColor};
        `}
`;

export const StyledSheetBackdrop = styled(Sheet.Backdrop)<{ $bgColor: string }>`
    background-color: ${({ $bgColor }) => $bgColor} !important;
`;
