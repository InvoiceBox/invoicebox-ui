import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { DefaultLogo } from './components/DefaultLogo';

type TProps = {
    title: string;
    children?: ReactNode;
    isActive?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
    icon?: ReactNode;
    comment?: string;
};

export const PaymentCard: FC<TProps> = ({
    icon,
    title,
    isActive = false,
    onClick,
    isDisabled = false,
    children,
    comment,
}) => {
    const iconJSX = icon || <DefaultLogo />;

    return (
        <S.Wrapper
            $isActive={!isDisabled && isActive}
            $isDisabled={isDisabled}
            onClick={isDisabled ? undefined : onClick}
        >
            <S.UnselectedRadio />
            <S.Content>
                <S.SubPaymentTitle variant="bodyMRegular" $onlyTitle={!children}>
                    {title}
                </S.SubPaymentTitle>
                {children && <S.SubPaymentSubTitle>{children}</S.SubPaymentSubTitle>}
            </S.Content>
            <S.IconWrapper>{iconJSX}</S.IconWrapper>
            {comment ? <S.Comment variant="captionRegular">{comment}</S.Comment> : null}
        </S.Wrapper>
    );
};
