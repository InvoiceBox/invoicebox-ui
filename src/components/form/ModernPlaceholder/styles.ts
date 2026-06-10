import styled from 'styled-components';
import { Typography } from '../../common/Typography';

export const Wrapper = styled(Typography)<{
    $visible: boolean;
    $paddingLeft: number;
    $paddingTop: number;
    $color: string;
}>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-left: ${({ $paddingLeft }) => $paddingLeft}px;
    padding-top: ${({ $paddingTop }) => $paddingTop}px;
    pointer-events: none;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    white-space: nowrap;
    overflow: hidden;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateY(${({ $visible }) => ($visible ? '0px' : '-6px')});
    transition:
        opacity 0.15s ease,
        transform 0.15s ease;
    color: ${({ $color }) => $color};
`;

export const Star = styled.span<{ $color: string }>`
    color: ${({ $color }) => $color};
    margin-left: 4px;
    flex-shrink: 0;
`;
