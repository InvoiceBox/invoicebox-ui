import React, { FC } from 'react';

export type TProps = {
    className?: string;
    size: number;
};

export const Svg: FC<TProps> = ({ className, size }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="7 7 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16.0846 9.95825L12.0013 14.0416L7.91797 9.95825"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
