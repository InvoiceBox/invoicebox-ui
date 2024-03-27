import React, { FC } from 'react';

type TProps = {
    className?: string;
};

export const Icon: FC<TProps> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className={className}
    >
        <path
            fill="currentColor"
            d="M10 16c3.312 0 6-2.688 6-6s-2.688-6-6-6-6 2.688-6 6 2.688 6 6 6Zm-.6-9h1.2v1.2H9.4V7Zm0 2.4h1.2V13H9.4V9.4Z"
        />
    </svg>
);
