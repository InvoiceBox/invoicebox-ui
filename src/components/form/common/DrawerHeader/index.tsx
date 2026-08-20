import React, { FC } from 'react';
import * as S from './styles';
import { Cross24Icon } from './components/Cross24Icon';
import { Typography } from '../../../common/Typography';
import { useComponentPalette } from '../../../../palette';
import { TDrawerHeaderPalette } from './palette';

export type TProps = {
    onClose: () => void;
    onSubmit?: () => void;
    label: string;
    isSubmitDisabled?: boolean;
    closeLabel?: string;
    submitLabel?: string;
};

export const DrawerHeader: FC<TProps> = ({
    onClose,
    label,
    onSubmit,
    isSubmitDisabled,
    closeLabel,
    submitLabel,
}) => {
    const palette = useComponentPalette<TDrawerHeaderPalette>('drawerHeader');

    return (
        <S.Wrapper $borderColor={palette.border}>
            {closeLabel ? (
                <S.CancelButton type={'button'} onClick={onClose} $color={palette.applyButton}>
                    <Typography variant={'headline6'}>{closeLabel}</Typography>
                </S.CancelButton>
            ) : (
                <S.CloseButton type={'button'} onClick={onClose}>
                    <Cross24Icon />
                </S.CloseButton>
            )}
            <S.HeadLabel $color={palette.headLabel} variant={'headline3'} $isCentered={!!closeLabel}>
                {label}
            </S.HeadLabel>
            {onSubmit && (
                <S.ApplyButton
                    disabled={isSubmitDisabled}
                    onClick={onSubmit}
                    type={'button'}
                    $color={palette.applyButton}
                >
                    <Typography variant={'headline6'}>{submitLabel || 'Готово'}</Typography>
                </S.ApplyButton>
            )}
        </S.Wrapper>
    );
};
