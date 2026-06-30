import React, { PropsWithChildren, ReactNode, useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Typography } from '../Typography';
import { useComponentPalette } from '../../../palette';
import { TTooltipPalette } from './palette';
import * as S from './styles';

type TPlacement = 'top' | 'bottom';

export type TProps = {
    overlay: ReactNode;
    placement?: TPlacement;
    gap?: number;
};

type TCoords = { top: number; left: number };

export const Tooltip = ({ overlay, placement = 'top', gap = 8, children }: PropsWithChildren<TProps>) => {
    const palette = useComponentPalette<TTooltipPalette>('tooltip');
    const triggerRef = useRef<HTMLSpanElement>(null);
    const [coords, setCoords] = useState<TCoords | null>(null);

    const show = useCallback(() => {
        const el = triggerRef.current;
        if (!el || !overlay) return;
        const rect = el.getBoundingClientRect();
        setCoords({
            top: placement === 'top' ? rect.top - gap : rect.bottom + gap,
            left: rect.left + rect.width / 2,
        });
    }, [overlay, placement, gap]);

    const hide = useCallback(() => setCoords(null), []);

    return (
        <S.Trigger ref={triggerRef} onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
            {children}

            {coords &&
                createPortal(
                    <S.Overlay
                        $palette={palette}
                        $top={coords.top}
                        $left={coords.left}
                        $placement={placement}
                    >
                        {typeof overlay === 'string' ? (
                            <Typography variant="captionRegular">{overlay}</Typography>
                        ) : (
                            overlay
                        )}
                    </S.Overlay>,
                    document.body,
                )}
        </S.Trigger>
    );
};
