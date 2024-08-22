import React, { FC } from 'react';

type TProps = {
    borderColor: string;
};

export const UnselectedRadioIcon: FC<TProps> = ({ borderColor }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
        <circle cx={10} cy={10} r={8.25} stroke={borderColor} strokeOpacity={0.3} strokeWidth={1.5} />
    </svg>
);
