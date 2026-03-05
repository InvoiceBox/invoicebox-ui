import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
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
    const [centerNumber, setCenterNumber] = useState<string | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    const isScrollingRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const rafRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);

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

        const newNumber = numbers.find((a, index) => index === closestIndex);

        if (closestIndex !== -1 && typeof newNumber === 'number') {
            setCenterNumber(newNumber.toString());
        }

        return closestIndex;
    }, [numbers]);

    useEffect(() => {
        if (value) {
            const indexValue = numbers.indexOf(value);
            snapToCenter(indexValue);
        } else {
            snapToCenter(0);
        }
    }, [numbers, snapToCenter, value]);

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

            if (isScrollingRef.current) {
                clearTimeout(isScrollingRef.current);
            }

            isScrollingRef.current = setTimeout(() => {
                const closestIndex = findCenterElement();
                if (closestIndex !== -1) {
                    snapToCenter(closestIndex);
                    const newNumber = numbers.find((item, index) => index === closestIndex);
                    if (typeof newNumber === 'number') {
                        onChange(newNumber);
                    }
                }
            }, 150);
        };

        container.addEventListener('scroll', handleScroll, { passive: true });

        setTimeout(() => findCenterElement(), 0);

        return () => {
            container.removeEventListener('scroll', handleScroll);

            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            if (isScrollingRef.current) {
                clearTimeout(isScrollingRef.current);
            }
        };
    }, [findCenterElement, numbers, onChange, snapToCenter]);

    // Функция получения стилей на основе индекса
    const getItemStyles = useCallback(
        (index: number) => {
            if (!centerNumber) return { opacity: 0.2, incline: 80 };

            const activeIndex = numbers.indexOf(Number(centerNumber));

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
        },
        [centerNumber, numbers],
    );

    const handleNumberClick = useCallback(
        (index: number) => {
            snapToCenter(index);
        },
        [snapToCenter],
    );

    return (
        <S.Wrapper ref={containerRef}>
            <S.Number $opacity={0} $isActive={false} $incline={0} />
            <S.Number $opacity={0} $isActive={false} $incline={0} />
            <S.Number $opacity={0} $isActive={false} $incline={0} />

            {numbers.map((numberItem, index) => {
                const { opacity, incline } = getItemStyles(index);
                const isActive = centerNumber === numberItem.toString();

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
                        onClick={() => handleNumberClick(index)}
                    >
                        {numberItem.toString().length === 1 ? `0${numberItem}` : numberItem}
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
