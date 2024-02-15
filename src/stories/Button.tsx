import React from 'react';
import { largeStyles, mediumStyles, primaryStyles, secondaryStyles, smallStyles } from './styles';
import * as S from './styles';

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
}: ButtonProps) => {
    const modeStyles = primary ? primaryStyles : secondaryStyles;
    const sizeStyles = {
        small: smallStyles,
        medium: mediumStyles,
        large: largeStyles,
    }[size];

    return (
        <S.Wrapper
            type="button"
            style={{
                ...modeStyles,
                ...sizeStyles,
                ...(backgroundColor ? { backgroundColor } : {}),
            }}
            {...props}
        >
            {label}
        </S.Wrapper>
    );
};
