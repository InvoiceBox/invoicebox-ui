import React, {
    KeyboardEvent,
    PropsWithChildren,
    ReactNode,
    useCallback,
    useId,
    useRef,
    useState,
} from 'react';
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
    const tooltipId = useId();

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

    // WAI-ARIA tooltip: Escape закрывает тултип, не убирая фокус с триггера
    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLSpanElement>) => {
            if (event.key === 'Escape') hide();
        },
        [hide],
    );

    return (
        <S.Trigger
            ref={triggerRef}
            onMouseEnter={show}
            onMouseLeave={hide}
            onFocus={show}
            onBlur={hide}
            onKeyDown={handleKeyDown}
            aria-describedby={coords ? tooltipId : undefined}
        >
            {children}

            {coords &&
                createPortal(
                    <S.Overlay
                        id={tooltipId}
                        role="tooltip"
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
