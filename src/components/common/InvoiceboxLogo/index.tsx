import React, { FC } from 'react';
import LogoDarkRu from './components/LogoDarkRu';

export type TProps = {
    height: number;
};

const InvoiceboxLogo: FC<TProps> = ({ height }) => {
    return <LogoDarkRu height={height} />;
};

export default InvoiceboxLogo;
