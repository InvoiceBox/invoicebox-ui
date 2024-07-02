import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import * as S from './styles';
import { InvoiceboxSpinner } from '../InvoiceboxSpinner';
import { TSecondaryButtonPalette } from './palette';
import { useComponentPalette } from '../../../palette';
import { TButtonSize } from './styles';

type TButtonProps = { element?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type TAnchorProps = { element: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;

export type TProps = (TButtonProps | TAnchorProps) & {
    isLoading?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    className?: never;
    size?: TButtonSize;
    borderRadius?: string;
};

export const SecondaryButton: FC<TProps> = ({
    element = 'button',
    isLoading = false,
    fullWidth = false,
    disabled = false,
    size = 'medium',
    borderRadius = '10px',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className,
    children,
    ...rest
}) => {
    const palette = useComponentPalette<TSecondaryButtonPalette>('secondaryButton');

    const isDisabled = disabled || isLoading;

    return (
        <S.Wrapper
            as={element}
            /* реализует disabled логику компонента */
            $disabled={isDisabled}
            /* отправляет аргумент, для чистоты на уровне html атрибутов, на логику не влияет */
            disabled={element === 'button' ? isDisabled : undefined}
            $palette={palette}
            $fullWidth={fullWidth}
            $size={size}
            $borderRadius={borderRadius}
            {...rest}
        >
            {isLoading && (
                <S.LoaderWrapper>
                    <InvoiceboxSpinner width="32px" />
                </S.LoaderWrapper>
            )}
            <S.Inner element="span" variant="buttonM" $isLoading={isLoading}>
                {children}
            </S.Inner>
        </S.Wrapper>
    );
};
