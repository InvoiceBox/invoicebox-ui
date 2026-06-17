import { RefObject, useEffect, useRef } from 'react';

// extraRefs — узлы, которые физически вне основного ref (например, дропдаун, вынесенный порталом
// в document.body), но логически ему принадлежат: клик по ним НЕ считается «снаружи». Без этого
// портал-дропдаун ловил бы клик как outside и схлопывался. По умолчанию пусто — обратная
// совместимость со старыми вызовами `const ref = useOutsideClick(onClick)`.
export const useOutsideClick = (onClick: () => void, extraRefs: ReadonlyArray<RefObject<HTMLElement>> = []) => {
    const ref = useRef<HTMLDivElement>(null);
    const extraRefsRef = useRef(extraRefs);
    extraRefsRef.current = extraRefs;

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as Node;
            if (ref.current && ref.current.contains(target)) return;
            if (extraRefsRef.current.some((extra) => extra.current && extra.current.contains(target))) return;
            onClick();
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClick]);

    return ref;
};
