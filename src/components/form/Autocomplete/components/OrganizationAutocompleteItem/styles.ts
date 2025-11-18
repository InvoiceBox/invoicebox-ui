import styled from 'styled-components';
import { Typography } from '../../../../common/Typography';

export const OrganizationWrapper = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 4px;
`;

export const OptionContainer = styled.div<{ $recalculateWidthAndBorder?: boolean; $hoverBg: string }>`
    width: ${({ $recalculateWidthAndBorder }) => ($recalculateWidthAndBorder ? 'calc(100% - 14px)' : '100%')};
    border-radius: ${({ $recalculateWidthAndBorder }) => ($recalculateWidthAndBorder ? '12px' : 'none')};
    &:hover {
        background-color: ${({ $hoverBg }) => $hoverBg};
    }
`;

export const OrganizationName = styled(Typography).attrs({ element: 'span' })<{
    $color: string;
}>`
    color: ${({ $color }) => $color};
`;

export const OrganizationDescription = styled(Typography).attrs({ element: 'span' })<{
    $color: string;
}>`
    color: ${({ $color }) => $color};
`;

export const OrganizationLabel = styled(Typography).attrs({ element: 'span' })<{
    $color: string;
}>`
    color: ${({ $color }) => $color};
`;

export const OrganizationVatNumber = styled.span`
    margin-right: 20px;
`;

export const OrganizationProperties = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 3px;
`;

export const Feature = styled.div`
    display: contents;
`;
