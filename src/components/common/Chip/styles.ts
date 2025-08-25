import styled from 'styled-components';

export type TChipSize = 'xxs' | 'xs';

const CHIP_PADDING_MAP: Record<TChipSize, string> = {
    xxs: '0 4px',
    xs: '4px 6px',
};

export const Wrapper = styled.div<{
    $color: string;
    $backgroundColor: string;
    $size: TChipSize;
}>`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: ${({ $size }) => CHIP_PADDING_MAP[$size]};
    color: ${({ $color }) => $color};
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    border-radius: 6px;
    white-space: nowrap;
`;
