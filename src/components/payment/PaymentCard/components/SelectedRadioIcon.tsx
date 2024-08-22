import React, { FC } from 'react';

type TProps = {
    bgColor: string;
    borderColor: string;
};

export const SelectedRadioIcon: FC<TProps> = ({ bgColor, borderColor }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
        <circle cx={10} cy={10} r={9.167} fill={borderColor} />
        <circle cx={10} cy={10} r={4.167} fill={bgColor} />
    </svg>
);
