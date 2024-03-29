import { useEffect } from 'react';

const stylesInDOM = new Set<string>();

type TProps = {
    id: string;
    css: string;
};

export const useCss = ({ id, css }: TProps) => {
    useEffect(() => {
        if (stylesInDOM.has(id)) return;

        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;

        document.head.appendChild(style);
        stylesInDOM.add(id);

        return () => {
            document.head.removeChild(style);
            stylesInDOM.delete(id);
        };
    }, [id, css]);
};
