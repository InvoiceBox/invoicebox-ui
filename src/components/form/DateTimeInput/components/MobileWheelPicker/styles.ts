import styled from 'styled-components';
import { EDGE_PADDING, ITEM_HEIGHT, WHEEL_HEIGHT } from './constants';

export const Wrapper = styled.div<{ $isIphone: boolean }>`
    position: relative;
    height: ${WHEEL_HEIGHT}px;
    display: flex;
    justify-content: center;
    gap: 8px;
    box-sizing: border-box;

    font-size: 23px;
    font-weight: 400;
    line-height: ${ITEM_HEIGHT}px;

    /* Системный шрифт: барабан должен выглядеть частью ОС, а не формы. */
    font-family: ${({ $isIphone }) =>
        $isIphone ? '-apple-system, BlinkMacSystemFont' : "'Roboto', sans-serif"};
`;

export const SelectedBand = styled.div<{ $bgColor: string }>`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: ${ITEM_HEIGHT}px;
    transform: translateY(-50%);
    border-radius: 8px;
    background-color: ${({ $bgColor }) => $bgColor};
    pointer-events: none;
`;

export const Fade = styled.div<{ $from: string; $to: string; $isTop: boolean }>`
    position: absolute;
    left: 0;
    right: 0;
    height: ${EDGE_PADDING}px;
    pointer-events: none;
    ${({ $isTop }) => ($isTop ? 'top: 0;' : 'bottom: 0;')}
    background: linear-gradient(
        ${({ $isTop }) => ($isTop ? 'to bottom' : 'to top')},
        ${({ $from }) => $from},
        ${({ $to }) => $to}
    );
`;
