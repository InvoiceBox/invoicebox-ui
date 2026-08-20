import React, { FC, PointerEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as S from './styles';
import {
    DRAG_THRESHOLD,
    FRAME_MS,
    FRICTION_PER_FRAME,
    ITEM_HEIGHT,
    MAX_VELOCITY,
    MIN_VELOCITY,
    SETTLE_MS,
    STALE_DRAG_MS,
} from '../../constants';
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

type TDrag = {
    pointerId: number;
    startY: number;
    lastY: number;
    lastTime: number;
    velocity: number;
    isMoved: boolean;
};

const getIndexByScrollTop = (scrollTop: number, count: number) =>
    Math.min(Math.max(Math.round(scrollTop / ITEM_HEIGHT), 0), Math.max(count - 1, 0));

const clampVelocity = (velocity: number) => Math.min(Math.max(velocity, -MAX_VELOCITY), MAX_VELOCITY);

export const WheelColumn: FC<TProps> = ({ options, value, onChange, label, align = 'center', width }) => {
    const palette = useComponentPalette<TMobileWheelPickerPalette>('mobileWheelPicker');

    const containerRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
    const settleRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isUserScrollingRef = useRef(false);
    const isMountedRef = useRef(false);

    const dragRef = useRef<TDrag | null>(null);
    const inertiaRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
    const isClickSuppressedRef = useRef(false);

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

    const stopInertia = useCallback(() => {
        if (!inertiaRef.current) return;
        cancelAnimationFrame(inertiaRef.current);
        inertiaRef.current = null;
    }, []);

    useEffect(() => stopInertia, [stopInertia]);

    // Пока барабан ведёт палец или инерция, залипание выключено: браузер иначе
    // отматывал бы scrollTop обратно к ближайшей строке на каждый кадр.
    const setSnapEnabled = useCallback((isEnabled: boolean) => {
        const container = containerRef.current;
        if (container) container.style.scrollSnapType = isEnabled ? '' : 'none';
    }, []);

    // Барабан остановился — возвращаем залипание и доводим до строки. onChange
    // отправит общий обработчик скролла, когда доводка закончится.
    const finishDrag = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        setSnapEnabled(true);

        const index = getIndexByScrollTop(container.scrollTop, optionsRef.current.length);
        container.scrollTo({ top: index * ITEM_HEIGHT, behavior: 'smooth' });
    }, [setSnapEnabled]);

    const startInertia = useCallback(
        (initialVelocity: number) => {
            const container = containerRef.current;
            if (!container) return;

            let velocity = initialVelocity;
            let previousTime = performance.now();

            const step = (now: number) => {
                // Кадр мог быть пропущен (вкладка в фоне) — не даём барабану прыгнуть.
                const elapsed = Math.min(now - previousTime, 50);
                previousTime = now;

                const shift = velocity * elapsed;
                const scrollTopBefore = container.scrollTop;
                container.scrollTop = scrollTopBefore - shift;

                velocity *= Math.pow(FRICTION_PER_FRAME, elapsed / FRAME_MS);

                // scrollTop не сдвинулся, хотя должен был — упёрлись в край списка.
                const isStuck = Math.abs(shift) >= 1 && container.scrollTop === scrollTopBefore;

                if (Math.abs(velocity) < MIN_VELOCITY || isStuck) {
                    inertiaRef.current = null;
                    finishDrag();
                    return;
                }

                inertiaRef.current = requestAnimationFrame(step);
            };

            inertiaRef.current = requestAnimationFrame(step);
        },
        [finishDrag],
    );

    const handlePointerDown = useCallback(
        (event: PointerEvent<HTMLDivElement>) => {
            // Толчок по крутящемуся барабану ловит его — как в нативных пикерах.
            stopInertia();
            setSnapEnabled(false);
            isClickSuppressedRef.current = false;
            isUserScrollingRef.current = true;

            dragRef.current = {
                pointerId: event.pointerId,
                startY: event.clientY,
                lastY: event.clientY,
                lastTime: event.timeStamp,
                velocity: 0,
                isMoved: false,
            };

            event.currentTarget.setPointerCapture?.(event.pointerId);
        },
        [setSnapEnabled, stopInertia],
    );

    const handlePointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
        const drag = dragRef.current;
        const container = containerRef.current;
        if (!drag || !container || drag.pointerId !== event.pointerId) return;

        const shift = event.clientY - drag.lastY;
        const elapsed = event.timeStamp - drag.lastTime;

        container.scrollTop -= shift;

        // Скорость сглаживаем: дрожание пальца в конце жеста иначе гасит бросок.
        if (elapsed > 0) drag.velocity = drag.velocity * 0.7 + (shift / elapsed) * 0.3;
        if (Math.abs(event.clientY - drag.startY) > DRAG_THRESHOLD) drag.isMoved = true;

        drag.lastY = event.clientY;
        drag.lastTime = event.timeStamp;
    }, []);

    const handlePointerUp = useCallback(
        (event: PointerEvent<HTMLDivElement>) => {
            const drag = dragRef.current;
            if (!drag || drag.pointerId !== event.pointerId) return;

            dragRef.current = null;
            isClickSuppressedRef.current = drag.isMoved;

            // Палец замер перед отпусканием — это доводка, а не бросок.
            const isStale = event.timeStamp - drag.lastTime > STALE_DRAG_MS;
            const velocity = isStale ? 0 : clampVelocity(drag.velocity);

            if (Math.abs(velocity) < MIN_VELOCITY) {
                finishDrag();
                return;
            }

            startInertia(velocity);
        },
        [finishDrag, startInertia],
    );

    const handleItemClick = useCallback((index: number) => {
        if (isClickSuppressedRef.current) return;
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
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
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
