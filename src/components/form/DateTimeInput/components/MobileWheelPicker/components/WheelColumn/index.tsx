import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as S from './styles';
import { ITEM_HEIGHT, SETTLE_MS } from '../../constants';
import { useComponentPalette } from '../../../../../../../palette';
import { TMobileWheelPickerPalette } from '../../palette';

export type TWheelOption = {
    value: number;
    label: string;
};

export type TProps = {
    options: Array<TWheelOption>;
    value: number;
    onChange: (value: number) => void;
    label: string;
    align?: 'left' | 'center' | 'right';
    width?: number;
};

// Затухание строк по мере удаления от центра — имитация барабана из нативных пикеров.
const OPACITY_STEPS = [1, 0.75, 0.45, 0.28, 0.18];
const INCLINE_STEPS = [0, 22, 42, 58, 68];
const SCALE_STEPS = [1, 0.94, 0.87, 0.82, 0.78];

const getIndexByScrollTop = (scrollTop: number, count: number) =>
    Math.min(Math.max(Math.round(scrollTop / ITEM_HEIGHT), 0), Math.max(count - 1, 0));

export const WheelColumn: FC<TProps> = ({ options, value, onChange, label, align = 'center', width }) => {
    const palette = useComponentPalette<TMobileWheelPickerPalette>('mobileWheelPicker');

    const containerRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
    const settleRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isUserScrollingRef = useRef(false);
    const isMountedRef = useRef(false);

    const valueIndex = useMemo(() => {
        const index = options.findIndex((option) => option.value === value);
        return index === -1 ? 0 : index;
    }, [options, value]);

    const [activeIndex, setActiveIndex] = useState(valueIndex);

    // Подписка на скролл вешается один раз: пересоздание слушателя сбрасывало бы
    // таймер остановки барабана, и onChange мог не долететь до родителя.
    const optionsRef = useRef(options);
    const valueRef = useRef(value);
    const onChangeRef = useRef(onChange);

    useEffect(() => {
        optionsRef.current = options;
        valueRef.current = value;
        onChangeRef.current = onChange;
    });

    // Подсветка следует за значением, когда его меняют снаружи (например, клампят день после смены месяца).
    useEffect(() => setActiveIndex(valueIndex), [valueIndex]);

    // Доводим барабан до выбранного значения. Пока палец на экране не вмешиваемся,
    // иначе перерисовка родителя дёргала бы скролл из-под пользователя.
    useEffect(() => {
        const container = containerRef.current;
        if (!container || isUserScrollingRef.current) return;

        const top = valueIndex * ITEM_HEIGHT;
        if (Math.abs(container.scrollTop - top) < 1) return;

        container.scrollTo({ top, behavior: isMountedRef.current ? 'smooth' : 'auto' });
    }, [valueIndex, options.length]);

    useEffect(() => {
        isMountedRef.current = true;
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;

        const handleScroll = () => {
            isUserScrollingRef.current = true;

            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                // setState с тем же индексом React отбрасывает, поэтому перерисовка
                // происходит не на каждый кадр, а только при переходе на новую строку.
                setActiveIndex(getIndexByScrollTop(container.scrollTop, optionsRef.current.length));
            });

            if (settleRef.current) clearTimeout(settleRef.current);
            settleRef.current = setTimeout(() => {
                isUserScrollingRef.current = false;

                const index = getIndexByScrollTop(container.scrollTop, optionsRef.current.length);
                setActiveIndex(index);

                const option = optionsRef.current[index];
                if (option && option.value !== valueRef.current) onChangeRef.current(option.value);
            }, SETTLE_MS);
        };

        container.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            container.removeEventListener('scroll', handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            if (settleRef.current) clearTimeout(settleRef.current);
        };
    }, []);

    const handleItemClick = useCallback((index: number) => {
        containerRef.current?.scrollTo({ top: index * ITEM_HEIGHT, behavior: 'smooth' });
    }, []);

    const activeValue = options[activeIndex]?.value;

    return (
        <S.Wrapper
            ref={containerRef}
            $align={align}
            style={width ? { width } : undefined}
            role="listbox"
            aria-label={label}
            tabIndex={-1}
        >
            {options.map((option, index) => {
                const step = Math.min(Math.abs(index - activeIndex), OPACITY_STEPS.length - 1);
                const isActive = index === activeIndex;

                return (
                    <S.Item
                        key={option.value}
                        type="button"
                        role="option"
                        aria-selected={option.value === activeValue}
                        onClick={() => handleItemClick(index)}
                        $color={palette.value}
                        $colorActive={palette.valueActive}
                        $isActive={isActive}
                        $opacity={OPACITY_STEPS[step]}
                        $incline={INCLINE_STEPS[step]}
                        $scale={SCALE_STEPS[step]}
                    >
                        {option.label}
                    </S.Item>
                );
            })}
        </S.Wrapper>
    );
};
