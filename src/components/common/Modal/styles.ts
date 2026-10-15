import styled, { css } from 'styled-components';
import { breakpoints } from '../../../breakpoints';
import { TModalPalette } from './palette';

/**
 * Растяжение flex-элемента по высоте внутри expandable-модалки: занимает свободное
 * место и умеет сжиматься, отдавая скролл вложенному контенту. Вешается на конкретные
 * обёртки по пропу (см. useModalExpansion), а не через селекторы.
 */
export const modalExpansionFlexItem = css`
    flex: 1 1 auto;
    min-height: 0;
`;

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
`;

export const ContainerInner = styled.div<{ $isExpanded?: boolean }>`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden auto;
    align-items: flex-start;
    padding: ${({ $isExpanded }) => ($isExpanded ? '20px' : '55px 0')};

    @media ${breakpoints.sm} {
        padding: ${({ $isExpanded }) => ($isExpanded ? '20px' : '15px 0')};
    }
`;

export const Backdrop = styled.div<{ $palette: TModalPalette }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: ${({ $palette }) => $palette.backdropBg};
`;

export const Content = styled.div<{
    $palette: TModalPalette;
    $overflow: string;
    $width?: number;
    $isExpandable?: boolean;
    $isExpanded?: boolean;
}>`
    margin: auto;
    max-width: calc(100vw - 10px);
    ${({ $width }) => $width && `width: ${$width}px;`}
    overflow: ${({ $overflow }) => $overflow};
    position: relative;
    background-color: ${({ $palette }) => $palette.bg};
    border-radius: 20px;
    box-shadow: ${({ $palette }) => $palette.shadow};
    outline: none;

    /* expandable-модалка не растёт выше экрана — контент скроллится внутри */
    ${({ $isExpandable }) =>
        $isExpandable &&
        css`
            display: flex;
            flex-direction: column;
            align-items: center;
            max-height: 100%;
            overflow: auto;

            @media ${breakpoints.md} {
                display: block;
                max-height: none;
            }
        `}

    ${({ $isExpanded }) =>
        $isExpanded &&
        css`
            width: 100%;
            max-width: 100%;
            height: 100%;
        `}

    @media ${breakpoints.md} {
        width: 100%;
    }
`;

export const ExpandButton = styled.button<{ $palette: TModalPalette }>`
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: 8px;
    background-color: transparent;
    cursor: pointer;
    color: ${({ $palette }) => $palette.expandButton};

    &:hover {
        background-color: ${({ $palette }) => $palette.expandButtonHoverBg};
    }

    @media ${breakpoints.md} {
        display: none;
    }
`;
