import React, {
    ChangeEvent,
    FocusEvent,
    forwardRef,
    InputHTMLAttributes,
    KeyboardEvent,
    MouseEvent,
    ReactNode,
    useCallback,
    useEffect,
    useId,
    useRef,
    useState,
} from 'react';
import * as S from './styles';
import { AutocompleteDefaultOption } from '../AutocompleteDefaultOption';
import { Skeleton } from '../../../../common/Skeleton';
import { useMobile } from '../../../../../hooks/useMedia';
import { useInputFocus } from '../../../../../hooks/useInputFocus';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import { InputLabel } from '../../../InputLabel';
import { PureInput } from '../../../PureInput';
import { Dropdown } from '../../../../common/Dropdown';
import { Scrollbar } from '../../../../common/Scrollbar';
import { MODERN_STYLE_SIZE_PARAMS_MAP, TSizes } from '../../../constants';
import { useComponentPalette } from '../../../../../palette';
import { TAutocompleteDefaultOptionPalette } from '../AutocompleteDefaultOption/palette';
import { LABEL_PADDING } from '../../../InputLabel/constants';
import { useInputStyles } from '../../../_hooks/useInputStyles';
import { ModernPlaceholder } from '../../../ModernPlaceholder';

const DefaultSkeletonItem = () => (
    <S.DefaultSkeletonWrapper>
        <Skeleton height="20px" />
    </S.DefaultSkeletonWrapper>
);

const MAX_LIST_HEIGHT = 294;

type TOption = {
    value: string;
    entity?: any;
    isDisabled?: boolean;
};

type TFieldProps = Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'name' | 'onBlur' | 'onFocus' | 'autoFocus' | 'readOnly'
> & {
    value: string;
    onChange: (value: string, option?: TOption) => void;
};

type TControlProps = {
    options: TOption[];
    label?: string;
    placeholder?: string;
    renderOption?: (option: TOption) => ReactNode;
    children?: ReactNode;
    inputPaddingLeft?: number;
    inputMaxLength?: number;
    isInputOnlyNumbers?: boolean;
    disabled?: boolean;
    listHeight?: number;
    hasError?: boolean;
    isLoading?: boolean;
    optionsLoader?: ReactNode;
    size?: TSizes;
    required?: boolean;
    usePadding?: boolean;
    dropdownWidth?: string;
    useModernStyles?: boolean;
    // Полностью гасит инлайн-выпадающий список (под полем). Используется, когда результаты
    // показываются в другом месте — например, на мобильном в боттомшите: поле работает как
    // обычный инпут-триггер, под ним ничего не всплывает (combobox-ARIA при этом отключается).
    isDropdownDisabled?: boolean;
};

export type TProps = TFieldProps & TControlProps;

export const Autocomplete = forwardRef<HTMLInputElement, TProps>(
    (
        {
            options,
            value,
            onChange,
            name,
            onBlur,
            onFocus,
            label,
            placeholder,
            disabled,
            renderOption,
            children,
            inputPaddingLeft,
            listHeight = MAX_LIST_HEIGHT,
            hasError,
            isLoading,
            optionsLoader,
            inputMaxLength,
            isInputOnlyNumbers = false,
            size = 'M',
            autoFocus,
            required = false,
            readOnly,
            usePadding = false,
            dropdownWidth,
            useModernStyles = false,
            isDropdownDisabled = false,
        },
        ref,
    ) => {
        const isMobile = useMobile();
        const [isOpen, setIsOpen] = useState(false);
        // Активная (подсвеченная клавиатурой) опция для combobox-навигации ↑/↓/Enter/Esc.
        const [activeIndex, setActiveIndex] = useState(-1);
        const baseId = useId();
        const listboxId = `${baseId}-listbox`;
        const activeOptionRef = useRef<HTMLButtonElement | null>(null);
        const palette = useComponentPalette<TAutocompleteDefaultOptionPalette>('autocompleteDefaultOption');

        const { inFocus, handleFocus, handleBlur } = useInputFocus({ onFocus, onBlur });

        const { inputLabel, paddingAndVariantOptions, isHideModernPlaceholder, modernInputPlaceholder } =
            useInputStyles({
                isHaveValue: !!value,
                useModernStyles,
                size,
                label,
                inFocus,
                placeholder,
                required,
            });

        const handleOpen = useCallback(() => setIsOpen(true), []);
        const handleClose = useCallback(() => {
            setIsOpen(false);
            setActiveIndex(-1);
        }, []);

        const dropdownRef = useRef<HTMLDivElement>(null);
        const wrapperRef = useOutsideClick(handleClose, [dropdownRef]);

        const handleChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                // Ввод нового запроса сбрасывает клавиатурную подсветку (результаты сменятся).
                setActiveIndex(-1);
                onChange(event.target.value);
            },
            [onChange],
        );

        const handleSelect = useCallback(
            (event: MouseEvent<HTMLButtonElement>) => {
                const optionIndex = JSON.parse(event.currentTarget.dataset.index as string) as number;
                const option = options[optionIndex];
                onChange(option.value, option);
                handleClose();
            },
            [handleClose, onChange, options],
        );

        const handleInputFocus = useCallback(
            (event: FocusEvent<HTMLInputElement>) => {
                handleOpen();
                handleFocus(event);
            },
            [handleOpen, handleFocus],
        );

        const isDropdownOpen = !isDropdownDisabled && isOpen && (!!options.length || !!isLoading);
        // Скелетоны показываем ТОЛЬКО когда опций ещё нет (первая загрузка). При повторных запросах
        // (ввод символов) держим прежние опции — иначе лоадер мерцает на каждое изменение.
        const showSkeletons = !!isLoading && options.length === 0;
        const getOptionId = (index: number) => `${baseId}-option-${index}`;

        // Активная опция всегда видна в прокручиваемом списке.
        useEffect(() => {
            activeOptionRef.current?.scrollIntoView({ block: 'nearest' });
        }, [activeIndex]);

        const handleKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (disabled || readOnly) return;
            const count = options.length;
            switch (event.key) {
                case 'ArrowDown':
                    event.preventDefault();
                    if (!isOpen) {
                        handleOpen();
                    } else if (count) {
                        setActiveIndex((prev) => (prev + 1) % count);
                    }
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    if (count) setActiveIndex((prev) => (prev <= 0 ? count - 1 : prev - 1));
                    break;
                case 'Enter':
                    if (
                        isDropdownOpen &&
                        activeIndex >= 0 &&
                        activeIndex < count &&
                        !options[activeIndex].isDisabled
                    ) {
                        event.preventDefault();
                        onChange(options[activeIndex].value, options[activeIndex]);
                        handleClose();
                    }
                    break;
                case 'Escape':
                    if (isDropdownOpen) {
                        event.preventDefault();
                        handleClose();
                    }
                    break;
                default:
                    break;
            }
        };

        return (
            <S.Wrapper ref={wrapperRef}>
                <InputLabel
                    inFocus={inFocus}
                    label={inputLabel}
                    disabled={disabled}
                    required={required}
                    useModernStyles={useModernStyles}
                    size={size}
                    left={
                        useModernStyles && typeof inputPaddingLeft === 'number'
                            ? inputPaddingLeft - LABEL_PADDING
                            : undefined
                    }
                >
                    <S.InputLabelContent>
                        {children ? <S.ChildrenWrapper>{children}</S.ChildrenWrapper> : null}
                        {useModernStyles && modernInputPlaceholder && (
                            <ModernPlaceholder
                                visible={!isHideModernPlaceholder}
                                paddingLeft={typeof inputPaddingLeft === 'number' ? inputPaddingLeft : 20}
                                paddingTop={MODERN_STYLE_SIZE_PARAMS_MAP[size].$placeholderPaddingTop}
                                size={size}
                                required={required}
                            >
                                {modernInputPlaceholder}
                            </ModernPlaceholder>
                        )}
                        <PureInput
                            ref={ref}
                            hasError={hasError}
                            inFocus={inFocus}
                            value={value}
                            onChange={handleChange}
                            onFocus={handleInputFocus}
                            onBlur={handleBlur}
                            name={name}
                            placeholder={useModernStyles ? undefined : placeholder}
                            disabled={disabled}
                            paddingLeft={inputPaddingLeft}
                            maxLength={inputMaxLength}
                            isOnlyNumbers={isInputOnlyNumbers}
                            autoFocus={autoFocus}
                            readOnly={readOnly}
                            useModernStyles={useModernStyles}
                            onKeyDown={handleKeyDown}
                            role="combobox"
                            aria-expanded={isDropdownOpen}
                            aria-controls={isDropdownOpen ? listboxId : undefined}
                            aria-autocomplete="list"
                            aria-activedescendant={
                                isDropdownOpen && activeIndex >= 0 ? getOptionId(activeIndex) : undefined
                            }
                            {...paddingAndVariantOptions}
                        />
                    </S.InputLabelContent>
                </InputLabel>

                <Dropdown
                    ref={dropdownRef}
                    isOpen={isOpen && (!!options.length || !!isLoading)}
                    isAutoPosition
                    width={dropdownWidth || '100%'}
                    minWidth={isMobile ? '100%' : '340px'}
                    usePadding={usePadding}
                >
                    {showSkeletons ? (
                        <Scrollbar maxHeight={listHeight}>
                            {optionsLoader || (
                                <>
                                    <DefaultSkeletonItem />
                                    <DefaultSkeletonItem />
                                    <DefaultSkeletonItem />
                                </>
                            )}
                        </Scrollbar>
                    ) : (
                        <Scrollbar maxHeight={listHeight}>
                            <div role="listbox" id={listboxId}>
                                {options.map((option, index) => (
                                    <S.OptionWrapperWithPadding
                                        $usePadding={usePadding}
                                        key={`${option.value}${index}`}
                                    >
                                        <S.OptionContainer
                                            $hoverBg={palette.hoverBg}
                                            $usePadding={usePadding}
                                            $active={index === activeIndex}
                                        >
                                            <S.OptionWrapper
                                                ref={index === activeIndex ? activeOptionRef : undefined}
                                                id={getOptionId(index)}
                                                role="option"
                                                aria-selected={index === activeIndex}
                                                tabIndex={-1}
                                                type="button"
                                                disabled={option.isDisabled}
                                                onClick={handleSelect}
                                                onMouseEnter={() => setActiveIndex(index)}
                                                data-index={JSON.stringify(index)}
                                            >
                                                {renderOption ? (
                                                    renderOption(option)
                                                ) : (
                                                    <AutocompleteDefaultOption usePadding={usePadding}>
                                                        {option.value}
                                                    </AutocompleteDefaultOption>
                                                )}
                                            </S.OptionWrapper>
                                        </S.OptionContainer>
                                    </S.OptionWrapperWithPadding>
                                ))}
                            </div>
                        </Scrollbar>
                    )}
                </Dropdown>
            </S.Wrapper>
        );
    },
);

Autocomplete.displayName = 'Autocomplete';
