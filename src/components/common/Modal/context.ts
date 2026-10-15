import { createContext, useContext } from 'react';

export type TModalExpansion = {
    /** модалка поддерживает разворот (см. проп isExpandable у Modal): высота окна ограничена экраном, скролл — внутри контента */
    isExpandable: boolean;
    /** модалка сейчас развёрнута на весь экран */
    isExpanded: boolean;
};

export const ModalExpansionContext = createContext<TModalExpansion>({
    isExpandable: false,
    isExpanded: false,
});

export const useModalExpansion = () => useContext(ModalExpansionContext);
