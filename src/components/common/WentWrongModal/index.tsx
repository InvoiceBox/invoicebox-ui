import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { useMobile } from '../../../hooks/useMedia';
import { useComponentPalette } from '../../../palette';
import { AdaptiveModalDrawer } from '../AdaptiveModalDrawer';
import { SecondaryButton } from '../SecondaryButton';
import { toast } from '../Toast';
import { Tooltip } from '../Tooltip';
import { Typography } from '../Typography';
import { CopyIcon, MailIcon, PhoneIcon } from './assets/icons';
import { racoonImage } from './assets/racoonImage';
import { TWentWrongModalPalette } from './palette';
import * as S from './styles';

export type TWentWrongModalContact = {
    label: string;
    href: string;
    icon?: ReactNode;
};

/** сколько держим подтверждение «Скопировано» после копирования ID */
const COPIED_FEEDBACK_MS = 2000;

const SUPPORT_PHONE_LABEL = '8 (800) 100-76-20';
const SUPPORT_PHONE = '+78001007620';
const SUPPORT_MAIL = 'c-support@invoicebox.ru';

export const WENT_WRONG_MODAL_DEFAULT_CONTACTS: TWentWrongModalContact[] = [
    { label: SUPPORT_PHONE_LABEL, href: `tel:${SUPPORT_PHONE}`, icon: <PhoneIcon /> },
    { label: SUPPORT_MAIL, href: `mailto:${SUPPORT_MAIL}`, icon: <MailIcon /> },
];

export type TProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    /** ID запроса для обращения в поддержку; показывается с возможностью скопировать */
    requestErrorId?: string;
    /** контакты поддержки; по умолчанию — телефон и почта Инвойсбокс */
    contacts?: TWentWrongModalContact[];
    /** картинка в шапке; по умолчанию — растерянный енот */
    headerImage?: string;
    closeButtonText?: string;
    palette?: Partial<TWentWrongModalPalette>;
};

export const WentWrongModal: FC<TProps> = ({
    isOpen,
    onClose,
    title,
    description,
    requestErrorId,
    contacts = WENT_WRONG_MODAL_DEFAULT_CONTACTS,
    headerImage = racoonImage,
    closeButtonText = 'Закрыть',
    palette,
}) => {
    const mergedPalette = useComponentPalette<TWentWrongModalPalette>('wentWrongModal', palette);
    const isMobile = useMobile();
    const [isCopied, setIsCopied] = useState(false);
    const copiedTimerRef = useRef<ReturnType<typeof setTimeout>>();

    // При закрытии окна и смене ID подтверждение сбрасываем, таймер не переживает размонтирование
    useEffect(() => {
        setIsCopied(false);
        clearTimeout(copiedTimerRef.current);
    }, [isOpen, requestErrorId]);

    useEffect(() => () => clearTimeout(copiedTimerRef.current), []);

    const copyRequestId = async () => {
        if (!requestErrorId || !navigator.clipboard?.writeText) return;

        try {
            await navigator.clipboard.writeText(requestErrorId);
            setIsCopied(true);
            clearTimeout(copiedTimerRef.current);
            copiedTimerRef.current = setTimeout(() => setIsCopied(false), COPIED_FEEDBACK_MS);
        } catch {
            toast.error('Не удалось скопировать');
        }
    };

    // Уводим курсор/фокус с ID — подтверждение гасим, при возврате тултип снова подсказывает про копирование
    const resetCopied = () => {
        clearTimeout(copiedTimerRef.current);
        setIsCopied(false);
    };

    const handleCopy = () => {
        void copyRequestId();
    };

    return (
        <AdaptiveModalDrawer onClose={onClose} isOpen={isOpen} drawerProps={{ isPadding: false }}>
            <S.ModalInner $palette={mergedPalette}>
                <S.Header $palette={mergedPalette} $image={headerImage} />
                <S.Content>
                    <S.Title variant="headline3">{title}</S.Title>
                    <S.Description variant="bodyMRegular" $palette={mergedPalette}>
                        {description}
                    </S.Description>
                    {contacts.length > 0 && (
                        <S.Contacts $marginBottom={requestErrorId ? '0' : '24px'}>
                            {contacts.map((contact) => (
                                <S.ContactItem key={contact.href} href={contact.href}>
                                    {contact.icon}
                                    <Typography variant="buttonM" element="span">
                                        {contact.label}
                                    </Typography>
                                </S.ContactItem>
                            ))}
                        </S.Contacts>
                    )}
                    {requestErrorId && (
                        <S.RequestIdWrapper $palette={mergedPalette}>
                            <Typography variant="bodyMRegular" element="span">
                                ID запроса:
                            </Typography>
                            {isMobile ? (
                                <>
                                    <S.RequestIdValue
                                        variant="bodyMRegular"
                                        element="span"
                                        $palette={mergedPalette}
                                    >
                                        {requestErrorId}
                                    </S.RequestIdValue>
                                    <S.ButtonCopyCode
                                        type="button"
                                        onClick={handleCopy}
                                        aria-label="Скопировать ID запроса"
                                        $palette={mergedPalette}
                                    >
                                        <CopyIcon />
                                    </S.ButtonCopyCode>
                                </>
                            ) : (
                                <Tooltip
                                    overlay={
                                        <S.CopyText>
                                            <Typography variant="captionRegular">
                                                {isCopied ? 'Скопировано' : 'Нажмите, чтобы скопировать'}
                                            </Typography>
                                        </S.CopyText>
                                    }
                                    placement="top"
                                >
                                    <S.RequestIdValue
                                        variant="bodyMRegular"
                                        element="button"
                                        type="button"
                                        onClick={handleCopy}
                                        onMouseLeave={resetCopied}
                                        onBlur={resetCopied}
                                        $palette={mergedPalette}
                                    >
                                        {requestErrorId}
                                    </S.RequestIdValue>
                                </Tooltip>
                            )}
                            {/* На мобильном подтверждение видно рядом с кнопкой, на десктопе его показывает
                                тултип, а здесь оно только для скринридеров */}
                            <S.CopiedStatus role="status" $isVisuallyHidden={!isMobile}>
                                {isCopied && (
                                    <Typography variant="bodyMRegular" element="span">
                                        Скопировано
                                    </Typography>
                                )}
                            </S.CopiedStatus>
                        </S.RequestIdWrapper>
                    )}
                    <SecondaryButton
                        onClick={onClose}
                        borderRadius="50px"
                        padding={isMobile ? '16px 40px' : '8px 16px'}
                        fullWidth={isMobile}
                    >
                        {closeButtonText}
                    </SecondaryButton>
                </S.Content>
            </S.ModalInner>
        </AdaptiveModalDrawer>
    );
};
