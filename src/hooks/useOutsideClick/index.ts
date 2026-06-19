import { RefObject, useEffect, useRef } from 'react';

export const DROPDOWN_PORTAL_ATTR = 'data-invoicebox-dropdown';

export const isDropdownPortalClick = (target: EventTarget | null): boolean =>
    target instanceof Element && target.closest(`[${DROPDOWN_PORTAL_ATTR}]`) !== null;

// extraRefs — узлы, которые физически вне основного ref (например, дропдаун, вынесенный порталом
// в document.body), но логически ему принадлежат: клик по ним НЕ считается «снаружи». Без этого
// портал-дропдаун ловил бы клик как outside и схлопывался. По умолчанию пусто — обратная
// совместимость со старыми вызовами `const ref = useOutsideClick(onClick)`.
// Клики по порталу Dropdown (см. DROPDOWN_PORTAL_ATTR) игнорируются автоматически — модалки и
// другие outside-click обработчики не закрываются при выборе пункта списка.
export const useOutsideClick = (
    onClick: () => void,
    extraRefs: ReadonlyArray<RefObject<HTMLElement>> = [],
) => {
    const ref = useRef<HTMLDivElement>(null);
    const extraRefsRef = useRef(extraRefs);
    extraRefsRef.current = extraRefs;

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as Node;
            const isOutside =
                ref.current &&
                !ref.current.contains(target) &&
                !isDropdownPortalClick(target) &&
                !extraRefsRef.current.some((extra) => extra.current && extra.current.contains(target));

            if (isOutside) {
                onClick();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClick]);

    return ref;
};
