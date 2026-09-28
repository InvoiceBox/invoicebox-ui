import styled from 'styled-components';

export const Arrows = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100%;
    justify-content: center;
    top: 0;
    right: 12px;
`;

// Кнопка 24×24 (WCAG 2.5.8) со стрелкой 12 px по центру; в низком поле кнопки сжимаются по высоте,
// чтобы не вылезать за его границы
export const Arrow = styled.button`
    flex: 0 1 24px;
    min-height: 0;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    user-select: none;

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;

export const ControlWrapper = styled.div`
    position: relative;
`;
