import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import * as S from './styles';
import { InvoiceboxSpinner, TProps as TInvoiceboxSpinnerProps } from '../InvoiceboxSpinner';
import { TSecondaryButtonPalette } from './palette';
import { useComponentPalette } from '../../../palette';

type TButtonProps = { element?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type TAnchorProps = { element: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;

export type TProps = (TButtonProps | TAnchorProps) & {
    isLoading?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    className?: never;
    palette?: Partial<TSecondaryButtonPalette>;
    invoiceboxSpinnerProps?: Pick<TInvoiceboxSpinnerProps, 'palette'>;
};

export const SecondaryButton: FC<TProps> = ({
    element = 'button',
    isLoading = false,
    fullWidth = false,
    disabled = false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className,
    palette,
    invoiceboxSpinnerProps,
    children,
    ...rest
}) => {
    const mergedPalette = useComponentPalette('secondaryButton', palette);

    const isDisabled = disabled || isLoading;

    return (
        <S.Wrapper
            as={element}
            /* реализует disabled логику компонента */
            $disabled={isDisabled}
            /* отправляет аргумент, для чистоты на уровне html атрибутов, на логику не влияет */
            disabled={element === 'button' ? isDisabled : undefined}
            $palette={mergedPalette}
            $fullWidth={fullWidth}
            {...rest}
        >
            {isLoading && (
                <S.LoaderWrapper>
                    <InvoiceboxSpinner {...invoiceboxSpinnerProps} isSecondary width="32px" />
                </S.LoaderWrapper>
            )}
            <S.Inner element="span" variant="buttonM" $isLoading={isLoading}>
                {children}
            </S.Inner>
        </S.Wrapper>
    );
};
