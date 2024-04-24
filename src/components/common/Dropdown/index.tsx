import React, { FC, ReactNode, TransitionEvent, useCallback, useRef, useState } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TDropdownPalette } from './palette';

type TPosition = {
    isAbove: boolean;
    translateY: string;
};

export type TProps = {
    children: ReactNode;
    isOpen: boolean;
    isAutoPosition?: boolean;
    positionVertical?: number;
    positionLeft?: string;
    positionRight?: string;
    minWidth?: string;
    width?: string;
    zIndex?: number;
    onCloseTransitionEnd?: () => void;
};

export const Dropdown: FC<TProps> = ({
    children,
    isOpen,
    isAutoPosition = false,
    positionVertical = 5,
    positionLeft = '0px',
    positionRight = 'auto',
    minWidth = 'auto',
    width = 'auto',
    zIndex,
    onCloseTransitionEnd,
}) => {
    const palette = useComponentPalette<TDropdownPalette>('dropdown');

    const position = useRef<TPosition>({ isAbove: true, translateY: '0px' });
    const [elRef, setElRef] = useState<HTMLDivElement | null>(null);

    const handleCloseTransitionEnd = useCallback(
        (event: TransitionEvent<HTMLDivElement>) => {
            if (event.propertyName !== 'opacity') return;
            if (isOpen) return;
            if (onCloseTransitionEnd) onCloseTransitionEnd();
        },
        [isOpen, onCloseTransitionEnd],
    );

    const getPosition = useCallback(
        ({
            dropdownHeight,
            belowHeight,
            aboveHeight,
            dropdownIndent,
        }: {
            dropdownHeight: number;
            belowHeight: number;
            aboveHeight: number;
            dropdownIndent: number;
        }): TPosition => {
            const isEnoughSpaceBelow = belowHeight >= dropdownHeight + dropdownIndent;
            if (isEnoughSpaceBelow) return { isAbove: false, translateY: '0px' };

            const isEnoghtSpaceAbove = aboveHeight >= dropdownHeight + dropdownIndent;
            if (isEnoghtSpaceAbove) return { isAbove: true, translateY: '0px' };

            const isMoreSpaceBelowThanAbove = belowHeight >= aboveHeight;
            if (isMoreSpaceBelowThanAbove) {
                const outOfViewPortHeight = dropdownHeight + dropdownIndent - belowHeight;
                return { isAbove: false, translateY: `-${outOfViewPortHeight}px` };
            } else {
                const outOfViewPortHeight = dropdownHeight + dropdownIndent - aboveHeight;
                return { isAbove: true, translateY: `${outOfViewPortHeight}px` };
            }
        },
        [],
    );

    const openFlagCache = useRef<boolean | null>(null);
    if (elRef) {
        const isTriggeredByFlag = openFlagCache.current !== isOpen;
        openFlagCache.current = isOpen;
        if (isTriggeredByFlag && isOpen) {
            const viewportHeight = window.innerHeight;
            const parent = elRef.parentElement as HTMLElement;
            const { bottom, top: aboveHeight } = parent.getBoundingClientRect();
            const belowHeight = viewportHeight - bottom;
            const dropdownHeight = elRef.scrollHeight;
            position.current = isAutoPosition
                ? getPosition({
                      dropdownHeight,
                      aboveHeight,
                      belowHeight,
                      dropdownIndent: positionVertical,
                  })
                : { isAbove: false, translateY: '0px' };
        }
    }

    return (
        <S.Wrapper
            ref={setElRef}
            $isVisible={isOpen}
            $isAbove={position.current.isAbove}
            $translateY={position.current.translateY}
            $positionVertical={positionVertical}
            $positionLeft={positionLeft}
            $positionRight={positionRight}
            $minWidth={minWidth}
            $width={width}
            $zIndex={zIndex}
            onTransitionEnd={handleCloseTransitionEnd}
            $palette={palette}
        >
            {children}
        </S.Wrapper>
    );
};
