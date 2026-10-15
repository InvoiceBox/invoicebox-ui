import React, { FC, PropsWithChildren } from 'react';
import { useMobile } from '../../../hooks/useMedia';
import { Drawer, TProps as TDrawerProps } from '../Drawer';
import { Modal, TProps as TModalProps } from '../Modal';

export type TProps = {
    isOpen: boolean;
    onClose: () => void;
    drawerProps?: Omit<TDrawerProps, 'isOpen' | 'onClose' | 'children'>;
    modalProps?: Omit<TModalProps, 'isOpen' | 'onClose' | 'children'>;
};

/** Модалка на десктопе и шторка (Drawer) на мобильных. Скролл фона блокируют сами Modal и Drawer. */
export const AdaptiveModalDrawer: FC<PropsWithChildren<TProps>> = ({
    children,
    isOpen,
    onClose,
    drawerProps,
    modalProps,
}) => {
    const isMobile = useMobile();

    if (isMobile) {
        return (
            <Drawer onClose={onClose} isOpen={isOpen} {...drawerProps}>
                {children}
            </Drawer>
        );
    }

    return (
        <Modal onClose={onClose} isOpen={isOpen} {...modalProps}>
            {children}
        </Modal>
    );
};
