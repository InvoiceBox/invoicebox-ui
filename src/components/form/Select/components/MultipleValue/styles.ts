import styled, { css } from 'styled-components';
import { Typography } from '../../../../common/Typography';

export const TAGS_GAP = 6;

export const Wrapper = styled.div<{ $collapse: boolean }>`
    display: flex;
    align-items: center;
    gap: ${TAGS_GAP}px;
    width: 100%;
    min-width: 0;

    ${({ $collapse }) =>
        $collapse
            ? css`
                  flex-wrap: nowrap;
                  overflow: hidden;
              `
            : css`
                  flex-wrap: wrap;
              `}
`;

export const ItemWrapper = styled.div`
    display: inline-flex;
    flex: 0 0 auto;
    max-width: 100%;
`;

export const TagLabel = styled(Typography)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const TagRemove = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 14px;
    height: 14px;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
`;
