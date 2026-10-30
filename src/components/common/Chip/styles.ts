import styled from 'styled-components';

export type TChipSize = 'xxs' | 'xs' | 's';

const CHIP_PADDING_MAP: Record<TChipSize, string> = {
    xxs: '0 4px',
    xs: '4px 6px',
    s: '9px 16px',
};

export const Wrapper = styled.div<{
    $color: string;
    $backgroundColor: string;
    $borderColor?: string;
    $size: TChipSize;
}>`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: ${({ $size }) => CHIP_PADDING_MAP[$size]};
    color: ${({ $color }) => $color};
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    border: 1.5px solid ${({ $borderColor }) => $borderColor ?? 'transparent'};
    border-radius: 6px;
    white-space: nowrap;
`;
