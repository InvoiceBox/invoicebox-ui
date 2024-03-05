import React, { ButtonHTMLAttributes, FC, HTMLAttributes, useEffect } from 'react';
import * as S from './styles';
import { typography } from './typography';

type TDivProps = { element?: 'div' } & HTMLAttributes<HTMLDivElement>;
type TParagraphProps = { element: 'p' } & HTMLAttributes<HTMLParagraphElement>;
type TSpanProps = { element: 'span' } & HTMLAttributes<HTMLSpanElement>;
type THeadingProps = {
    element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLAttributes<HTMLHeadingElement>;
type TButtonProps = { element: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;

export type TProps = {
    variant: keyof typeof typography;
} & (TDivProps | TParagraphProps | TSpanProps | THeadingProps | TButtonProps);

export const Typography: FC<TProps> = ({ variant, element = 'div', ...rest }) => {
    return <S.Wrapper as={element} $variant={variant} {...rest} />;
};

export const TypographyGlobalStyle: FC = () => {
    useEffect(() => {
        const primaryLink = document.createElement('link');
        primaryLink.rel = 'preconnect';
        primaryLink.href = 'https://fonts.googleapis.com';

        const secondaryLink = document.createElement('link');
        secondaryLink.rel = 'preconnect';
        secondaryLink.href = 'https://fonts.gstatic.com';
        secondaryLink.crossOrigin = '';

        const thirdLink = document.createElement('link');
        thirdLink.rel = 'stylesheet';
        thirdLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';

        const links = [primaryLink, secondaryLink, thirdLink];

        links.forEach((link) => document.head.appendChild(link));

        return () => {
            links.forEach((link) => document.head.removeChild(link));
        };
    }, []);

    return null;
};
