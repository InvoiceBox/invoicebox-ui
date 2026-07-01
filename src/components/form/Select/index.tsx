import React, {
    FocusEvent,
    Fragment,
    MouseEvent,
    ReactNode,
    useCallback,
    useMemo,
    useRef,
    useState,
} from 'react';
import * as S from './styles';
import { Input, TProps as TInputProps } from './components/Input';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { Dropdown } from '../../common/Dropdown';
import { Scrollbar } from '../../common/Scrollbar';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useComponentPalette } from '../../../palette';
import { TSelectPalette } from './palette';
import { useOptionGroups } from './hooks/useOptionGroups';
import { Drawer } from '../../common/Drawer';
import Loader from './components/Loader';
import { MultipleValue } from './components/MultipleValue';
import { Checkbox } from '../Checkbox';
import { TProps as TChipProps } from '../../common/Chip';

const MAX_LIST_HEIGHT = 294;
const OPTION_IDENTIFIER = 'option-identifier';

export type TOption<TValue> = { label: string; value: TValue; groupId?: string; entity?: unknown };
export type TGroup = { label: string; id: string; entity?: unknown };

type TSharedProps<TValue> = Pick<
    TInputProps,
    'label' | 'hasError' | 'placeholder' | 'name' | 'size' | 'onBlur' | 'required'
> & {
    options: TOption<TValue>[];
    groups?: TGroup[];
    isResetButtonEnabled?: boolean;
    renderOption?: (entity?: any) => ReactNode;
    renderGroup?: (entity?: any) => ReactNode;
    renderValue?: (entity?: any) => ReactNode;
    dropdownHeader?: ReactNode;
    scrollbarHeader?: ReactNode;
    isDrawerOptions?: boolean;
    scrollbarMaxHeight?: number;
    emptyOptionsLabel?: string;
    isLoading?: boolean;
    required?: boolean;
    usePadding?: boolean;
    dropdownWidth?: string;
    useModernStyles?: boolean;
};

export type TProps<TValue> = TSharedProps<TValue> & {
    isMultiple?: false;
    value: TValue | null;
    onChange: (value: TValue | null) => void;
};

export type TMultipleProps<TValue> = TSharedProps<TValue> & {
    isMultiple: true;
    value: TValue[];
    onChange: (value: TValue[]) => void;
    collapseTags?: boolean;
    chipProps?: Partial<Omit<TChipProps, 'label'>>;
};

type TAllProps<TValue> = TProps<TValue> | TMultipleProps<TValue>;

export const Select = <TValue extends string | number>(props: TAllProps<TValue>) => {
    const {
        label,
        hasError,
        placeholder,
        name,
        value,
        renderValue,
        onChange,
        options,
        groups = [],
        isResetButtonEnabled = false,
        size,
        renderOption,
        dropdownHeader,
        isDrawerOptions = false,
        renderGroup,
        scrollbarMaxHeight = MAX_LIST_HEIGHT,
        scrollbarHeader,
        emptyOptionsLabel,
        isLoading,
        onBlur,
        required,
        usePadding = false,
        dropdownWidth,
        useModernStyles = false,
    } = props;

    const isMultiple = props.isMultiple === true;
    const collapseTags = isMultiple ? ((props as TMultipleProps<TValue>).collapseTags ?? false) : false;
    const chipProps = isMultiple ? (props as TMultipleProps<TValue>).chipProps : undefined;

    const onChangeSingle = onChange as (value: TValue | null) => void;
    const onChangeMultiple = onChange as (value: TValue[]) => void;

    const palette = useComponentPalette<TSelectPalette>('select');

    const { inFocus, handleFocus: focusHandler, handleBlur: blurHandler } = useInputFocus({ onBlur });

    const [isOpen, setIsOpen] = useState(false);

    const fieldSize = useModernStyles && !size ? 'L' : size || 'M';

    /*  
        существует интеграционная проблема селекта с final-form 

        Суть:
        - пользователь выбирает опцию;
        - срабатывает onBlur;
        - final-form помечает поле, как toched;
        - если поле не валидно, hasError становится true, отображается красная рамка;
        - срабатывает onChange, и если поле валидно рамка пропадает;

        т.е. рамка мигает, хотя такого быть не должно;

        так появилась логика delayBlur
    */
    const delayBlur = useRef<null | (() => void)>(null);
    const inputRef = useRef<null | HTMLInputElement>(null);

    const multipleValue = useMemo<TValue[]>(
        () => (isMultiple ? ((value as TValue[]) ?? []) : []),
        [isMultiple, value],
    );

    const selectedOption = useMemo(
        () => (isMultiple ? undefined : options.find((option) => option.value === value)),
        [isMultiple, options, value],
    );

    const selectedOptions = useMemo(
        () => (isMultiple ? options.filter((option) => multipleValue.includes(option.value)) : []),
        [isMultiple, options, multipleValue],
    );

    const selectedValuesSet = useMemo(() => new Set<TValue>(multipleValue), [multipleValue]);

    const optionGroups = useOptionGroups(options, groups);

    const handleShow = useCallback(() => setIsOpen(true), []);
    const handleHide = useCallback(() => setIsOpen(false), []);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useOutsideClick(handleHide, [dropdownRef]);

    const handleFocus = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            handleShow();
            focusHandler(event);
        },
        [focusHandler, handleShow],
    );

    const handleBlur = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            const relatedTarget = event.relatedTarget as HTMLElement | null;
            const isOptionClick = relatedTarget?.dataset.optionIdentifier === OPTION_IDENTIFIER;

            if (!isOptionClick) {
                blurHandler(event);
                return;
            }

            delayBlur.current = () => blurHandler(event);
        },
        [blurHandler],
    );

    const handleSelect = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            const newValue = JSON.parse(event.currentTarget.dataset.value as string) as TValue;

            if (isMultiple) {
                const next = multipleValue.includes(newValue)
                    ? multipleValue.filter((item) => item !== newValue)
                    : [...multipleValue, newValue];
                onChangeMultiple(next);
                // при множественном выборе дропдаун остаётся открытым
                return;
            }

            onChangeSingle(newValue);
            handleHide();
            if (delayBlur.current) {
                delayBlur.current();
                delayBlur.current = null;
            }
        },
        [handleHide, isMultiple, multipleValue, onChangeMultiple, onChangeSingle],
    );

    const handleRemoveTag = useCallback(
        (removedValue: TValue) => onChangeMultiple(multipleValue.filter((item) => item !== removedValue)),
        [multipleValue, onChangeMultiple],
    );

    const handleReset = useCallback(
        () => (isMultiple ? onChangeMultiple([]) : onChangeSingle(null)),
        [isMultiple, onChangeMultiple, onChangeSingle],
    );

    const handleInputClick = () => {
        inputRef.current?.blur();
        handleShow();
    };

    const handleOptionRender = (option: TOption<TValue>) => {
        if (renderOption) {
            if (!option.entity) {
                // eslint-disable-next-line no-console
                console.error('option.entity not found');
                return;
            }

            return renderOption(option.entity);
        }

        return (
            <S.DefaultOptionWrapper $usePadding={usePadding} $isMultiple={isMultiple}>
                {option.label}
            </S.DefaultOptionWrapper>
        );
    };

    const handleGroupRender = (group: TGroup | null) => {
        if (group) {
            if (renderGroup) {
                if (!group.entity) {
                    // eslint-disable-next-line no-console
                    console.error('group.entity not found');
                    return;
                }

                return renderGroup(group.entity);
            }

            return <S.Group variant="headerText">{group.label}</S.Group>;
        }

        return null;
    };

    const scrollbarContent = (
        <S.ScrollbarContent>
            {scrollbarHeader}

            {optionGroups.map(({ group, options: groupOptions }) => (
                <Fragment key={group?.id || null}>
                    {handleGroupRender(group)}
                    {groupOptions.map((option) => (
                        <S.OptionWrapper $usePadding={usePadding} key={option.value}>
                            <S.Option
                                key={option.value}
                                $palette={palette}
                                variant="bodyMRegular"
                                onClick={handleSelect}
                                data-value={JSON.stringify(option.value)}
                                data-option-identifier={OPTION_IDENTIFIER}
                                $isGrouped={!!group && !renderOption}
                                $usePadding={usePadding}
                                $isSelected={!isMultiple && option.value === value}
                            >
                                {isMultiple ? (
                                    <S.OptionContent>
                                        <S.CheckboxWrapper>
                                            <Checkbox
                                                checked={selectedValuesSet.has(option.value)}
                                                readOnly
                                            />
                                        </S.CheckboxWrapper>
                                        {handleOptionRender(option)}
                                    </S.OptionContent>
                                ) : (
                                    handleOptionRender(option)
                                )}
                            </S.Option>
                        </S.OptionWrapper>
                    ))}
                </Fragment>
            ))}
        </S.ScrollbarContent>
    );

    const emptyLabel = (
        <S.DefaultOptionWrapper>
            <S.EmptyLabel variant={'bodyMRegular'} $color={palette.empty}>
                {emptyOptionsLabel || 'Нет значений'}
            </S.EmptyLabel>
        </S.DefaultOptionWrapper>
    );

    const loader = (
        <S.DefaultOptionWrapper>
            <Loader />
        </S.DefaultOptionWrapper>
    );

    const handleDropdownContentRender = () => {
        if (isLoading) {
            return loader;
        }

        if (optionGroups.length) {
            return (
                <>
                    {dropdownHeader}
                    <Scrollbar maxHeight={scrollbarMaxHeight}>{scrollbarContent}</Scrollbar>
                </>
            );
        }

        return (
            <>
                {dropdownHeader} {emptyLabel}
            </>
        );
    };

    const handleDrawerContentRender = () => {
        if (isLoading) {
            return loader;
        }

        if (optionGroups.length) {
            return (
                <>
                    {dropdownHeader}
                    <Scrollbar maxHeight={scrollbarMaxHeight}>
                        {scrollbarContent}
                        <S.DrawerBottom />
                    </Scrollbar>
                </>
            );
        }

        return (
            <>
                {dropdownHeader} {emptyLabel}
            </>
        );
    };

    const renderedValue: ReactNode | undefined = useMemo(() => {
        if (isMultiple) {
            if (!selectedOptions.length) return;
            return (
                <MultipleValue
                    selectedOptions={selectedOptions}
                    onRemove={handleRemoveTag}
                    collapse={collapseTags}
                    chipProps={chipProps}
                />
            );
        }

        if (!renderValue || !selectedOption?.entity) return;
        return renderValue(selectedOption?.entity);
    }, [
        isMultiple,
        selectedOptions,
        handleRemoveTag,
        collapseTags,
        chipProps,
        renderValue,
        selectedOption?.entity,
    ]);

    const inputValue = isMultiple
        ? selectedOptions.map((option) => option.label).join(', ')
        : selectedOption?.label || '';

    return (
        <S.Wrapper ref={isDrawerOptions ? undefined : wrapperRef}>
            <S.InputWrapper>
                <Input
                    ref={inputRef}
                    label={label}
                    hasError={hasError}
                    inFocus={isMultiple ? isOpen : inFocus}
                    placeholder={placeholder}
                    onFocus={isDrawerOptions ? undefined : handleFocus}
                    onBlur={isDrawerOptions ? undefined : handleBlur}
                    value={inputValue}
                    renderedValue={renderedValue}
                    name={name}
                    isOpen={isOpen}
                    onReset={isResetButtonEnabled ? handleReset : undefined}
                    size={fieldSize}
                    onClick={isDrawerOptions || !!renderedValue ? handleInputClick : undefined}
                    required={required}
                    useModernStyles={useModernStyles}
                />
            </S.InputWrapper>

            {isDrawerOptions ? (
                <Drawer onClose={handleHide} isOpen={isOpen} isPadding={false}>
                    <S.DrawerContent>{handleDrawerContentRender()}</S.DrawerContent>
                </Drawer>
            ) : (
                <Dropdown
                    ref={dropdownRef}
                    isOpen={isOpen}
                    isAutoPosition
                    width={dropdownWidth || '100%'}
                    usePadding={usePadding}
                    positionVertical={useModernStyles ? -1 : undefined}
                >
                    {handleDropdownContentRender()}
                </Dropdown>
            )}
        </S.Wrapper>
    );
};
