import { css } from 'styled-components';

// Общий миксин: отключает анимации/переходы для пользователей с системной
// настройкой reduced motion (WCAG 2.3.3). Добавлять последним в styled-блок,
// содержащий transition/animation (включая правила в ::before/::after) —
// поздние декларации побеждают. Глобального стиля здесь быть не может:
// sideEffects: false.
export const reducedMotion = css`
    @media (prefers-reduced-motion: reduce) {
        &,
        &::before,
        &::after,
        &::placeholder {
            transition: none;
            animation: none;
        }
    }
`;
