import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { Typography } from '../Typography';
import { useComponentPalette } from '../../../palette';
import { TDrawerPalette } from './palette';

type TDialogCommonProps = {
    children: ReactNode;
    onClose: () => void;
    title?: string;
    isErrorBorder?: boolean;
    isOpen: boolean;
    isPadding?: boolean;
};

export type TProps = TDialogCommonProps & {
    initialFocusRef?: React.RefObject<HTMLElement> | false;
};

export const Drawer: FC<TProps> = ({
    isOpen,
    children,
    title,
    isErrorBorder,
    onClose,
    isPadding = true,
    initialFocusRef,
}) => {
    const palette = useComponentPalette<TDrawerPalette>('drawer');

    return (
        <S.BottomSheet
            open={isOpen}
            onDismiss={onClose}
            expandOnContentDrag={false}
            initialFocusRef={initialFocusRef}
            scrollLocking={false}
            header={
                !title ? undefined : (
                    <S.Title $bg={palette.titleBg}>
                        <Typography variant="headline4">{title}</Typography>
                    </S.Title>
                )
            }
            $isHaveHeader={!!title}
            $palette={palette}
        >
            <S.Body $isPadding={isPadding} $isErrorBorder={isErrorBorder} $errorColor={palette.error}>
                {children}
            </S.Body>
        </S.BottomSheet>
    );
};
