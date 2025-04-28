import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { DefaultLogo } from './components/DefaultLogo';
import { SelectedRadioIcon } from './components/SelectedRadioIcon';
import { UnselectedRadioIcon } from './components/UnselectedRadioIcon';
import { TPaymentCardPalette } from './palette';
import { useComponentPalette } from '../../../palette';

type TProps = {
    title: string;
    children?: ReactNode;
    isActive?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
    icon?: ReactNode;
    comment?: string;
    isCircleIconLayout?: boolean;
};

export const PaymentCard: FC<TProps> = ({
    icon,
    title,
    isActive = false,
    onClick,
    isDisabled = false,
    children,
    comment,
    isCircleIconLayout = true,
}) => {
    const palette = useComponentPalette<TPaymentCardPalette>('paymentCard');

    return (
        <S.Wrapper
            $pallete={palette}
            $isActive={isActive}
            $isDisabled={isDisabled}
            onClick={isDisabled ? undefined : onClick}
        >
            <S.RadioWrapper>
                {isActive ? (
                    <SelectedRadioIcon
                        bgColor={palette.radioBgActive}
                        borderColor={palette.radioBorderActive}
                    />
                ) : (
                    <UnselectedRadioIcon borderColor={palette.radioBorderInactive} />
                )}
            </S.RadioWrapper>
            <S.Content>
                <S.Title $pallete={palette} variant="bodyMRegular" $ellipsis={!children}>
                    {title}
                </S.Title>
                {children}
            </S.Content>
            {isCircleIconLayout ? (
                <S.IconWrapper $pallete={palette} $isActive={isActive}>
                    {icon || <DefaultLogo />}
                </S.IconWrapper>
            ) : (
                <S.OutContainerIconWrapper>{icon || <DefaultLogo />}</S.OutContainerIconWrapper>
            )}
            {comment && (
                <S.Comment $pallete={palette} $isActive={isActive} variant="captionSRegular">
                    {comment}
                </S.Comment>
            )}
        </S.Wrapper>
    );
};
