import React, { FC } from 'react';
import LogoDarkRu from './logos/LogoDarkRu';

export type TProps = {
    width: number;
    height?: number;
};

const InvoiceboxLogo: FC<TProps> = ({ width, height }) => {
    return (
        <div>
            <LogoDarkRu height={height} width={width} />
        </div>
    );
};

export default InvoiceboxLogo;
