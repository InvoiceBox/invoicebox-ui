import React, { FC } from 'react';

type TProps = {
    color: string;
};

export const CrossIcon: FC<TProps> = ({ color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.3307 4.6665L4.66406 11.3332L11.3307 4.6665Z" fill={color} />
            <path d="M11.3307 11.3332L4.66406 4.6665L11.3307 11.3332Z" fill={color} />
            <path
                d="M11.3307 4.6665L4.66406 11.3332M11.3307 11.3332L4.66406 4.6665"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
