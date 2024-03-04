import React, { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react';
import * as S from './styles';
import { typography } from './typography';
import { Helmet } from 'react-helmet';

type TDefaultElementProps = { htmlElement?: never } & HTMLAttributes<HTMLDivElement>;

type TDivProps = { htmlElement: 'div' } & HTMLAttributes<HTMLDivElement>;
type TParagraphProps = { htmlElement: 'p' } & HTMLAttributes<HTMLParagraphElement>;
type TSpanProps = { htmlElement: 'span' } & HTMLAttributes<HTMLSpanElement>;
type THeadingProps = {
    htmlElement: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLAttributes<HTMLHeadingElement>;
type TButtonProps = { htmlElement: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;

export type TProps = {
    variant: keyof typeof typography;
} & ((TDefaultElementProps | TDivProps) | TParagraphProps | TSpanProps | THeadingProps | TButtonProps);

export const Typography: FC<TProps> = ({ variant, htmlElement = 'div', ...rest }) => {
    return <S.Wrapper as={htmlElement} $variant={variant} {...rest} />;
};

export const TypographyGlobalStyle: FC = () => {
    return (
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};
