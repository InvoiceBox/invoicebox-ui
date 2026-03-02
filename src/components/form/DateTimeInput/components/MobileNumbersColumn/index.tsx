import React, { FC, useCallback, useEffect, useRef } from 'react';
import * as S from './styles';

type TProps = {
    numbers: Array<number>;
    value: number;
    onChange: (value: number) => void;
};

// Константы для оптимизации
const OPACITY_STEPS = [1, 0.8, 0.5, 0.3, 0.2];
const INCLINE_STEPS = [0, 20, 45, 70, 80];

const MobileNumbersColumn: FC<TProps> = ({ numbers, value, onChange }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const isScrollingRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const rafRef = useRef<number | null>(null);
    const activeIndexRef = useRef<number>(-1);

    // Функция для центрирования элемента
    const snapToCenter = useCallback((index: number) => {
        if (!containerRef.current || index === -1) return;

        const container = containerRef.current;
        const item = itemsRef.current[index];
        if (!item) return;

        const scrollOffset = item.offsetTop - container.clientHeight / 2 + item.clientHeight / 2;

        container.scrollTo({
            top: scrollOffset,
            behavior: 'smooth',
        });
    }, []);

    // Оптимизированная функция поиска центра
    const findCenterElement = useCallback(() => {
        if (!containerRef.current) return -1;

        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.top + containerRect.height / 2;

        let minDistance = Infinity;
        let closestIndex = -1;

        // Находим только ближайший индекс
        itemsRef.current.forEach((item, index) => {
            if (item) {
                const itemRect = item.getBoundingClientRect();
                const itemCenter = itemRect.top + itemRect.height / 2;
                const distance = Math.abs(itemCenter - containerCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            }
        });

        if (closestIndex !== -1 && closestIndex !== activeIndexRef.current) {
            activeIndexRef.current = closestIndex;
            const number = itemsRef.current[closestIndex]?.textContent || null;
            onChange(Number(number));
        }

        return closestIndex;
    }, [onChange]);

    // Оптимизированный обработчик скролла
    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        const handleScroll = () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            rafRef.current = requestAnimationFrame(() => {
                findCenterElement();
            });
        };

        const handleScrollEnd = () => {
            if (isScrollingRef.current) {
                clearTimeout(isScrollingRef.current);
            }

            isScrollingRef.current = setTimeout(() => {
                const closestIndex = findCenterElement();
                if (closestIndex !== -1) {
                    snapToCenter(closestIndex);
                }
            }, 150);
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        container.addEventListener('touchend', handleScrollEnd, { passive: true });
        container.addEventListener('mouseup', handleScrollEnd);

        setTimeout(() => findCenterElement(), 0);

        return () => {
            container.removeEventListener('scroll', handleScroll);
            container.removeEventListener('touchend', handleScrollEnd);
            container.removeEventListener('mouseup', handleScrollEnd);

            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            if (isScrollingRef.current) {
                clearTimeout(isScrollingRef.current);
            }
        };
    }, [findCenterElement, snapToCenter]);

    // Функция получения стилей на основе индекса
    const getItemStyles = useCallback((index: number) => {
        const activeIndex = activeIndexRef.current;
        if (activeIndex === -1) return { opacity: 0.2, incline: 80 };

        // Расстояние от активного элемента
        const distance = Math.abs(index - activeIndex);
        const maxDistance = 5; // Максимальное расстояние для применения эффекта

        // Выбираем стиль на основе расстояния
        const stepIndex = Math.min(distance, maxDistance);

        // Используем предвычисленные значения
        const opacityIndex = Math.min(stepIndex, OPACITY_STEPS.length - 1);
        const inclineIndex = Math.min(stepIndex, INCLINE_STEPS.length - 1);

        return {
            opacity: OPACITY_STEPS[opacityIndex],
            incline: INCLINE_STEPS[inclineIndex],
        };
    }, []);

    return (
        <S.Wrapper ref={containerRef}>
            <S.Number $opacity={0} $isActive={false} $incline={0} />
            <S.Number $opacity={0} $isActive={false} $incline={0} />
            <S.Number $opacity={0} $isActive={false} $incline={0} />

            {numbers.map((numberItem, index) => {
                const { opacity, incline } = getItemStyles(index);
                const isActive = value === numberItem;

                return (
                    <S.Number
                        key={numberItem}
                        $opacity={opacity}
                        $incline={incline}
                        $isActive={isActive}
                        ref={(el) => {
                            if (el) {
                                itemsRef.current[index] = el;
                            }
                        }}
                    >
                        {numberItem}
                    </S.Number>
                );
            })}

            <S.Number $opacity={0} $isActive={false} $incline={0} />
            <S.Number $opacity={0} $isActive={false} $incline={0} />
            <S.Number $opacity={0} $isActive={false} $incline={0} />
        </S.Wrapper>
    );
};

export default MobileNumbersColumn;
