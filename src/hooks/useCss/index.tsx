import { useCallback, useEffect } from 'react';

const stylesInDOM = new Map<string, HTMLStyleElement>();

type TProps = {
    id: string;
    css: string;
};

export const useCss = ({ id, css }: TProps) => {
    const append = useCallback(() => {
        if (stylesInDOM.has(id)) return;
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;

        document.head.appendChild(style);
        stylesInDOM.set(id, style);
    }, [id, css]);

    const clear = useCallback(() => {
        const style = stylesInDOM.get(id);
        if (!style) return;
        document.head.removeChild(style);
        stylesInDOM.delete(id);
    }, [id]);

    append();

    useEffect(() => {
        append();

        return clear;
    }, [append, clear]);
};
