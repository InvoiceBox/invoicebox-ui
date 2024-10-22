import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type TProps = {
    children: ReactNode;
};

export const Portal: FC<TProps> = ({ children }) => {
    const [container] = useState(document.createElement('div'));

    useEffect(() => {
        document.body.appendChild(container);

        return () => {
            document.body.removeChild(container);
        };
    }, [container]);

    return createPortal(children, container);
};
