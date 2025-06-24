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

const MAX_LIST_HEIGHT = 294;
const OPTION_IDENTIFIER = 'option-identifier';

export type TOption<TValue> = { label: string; value: TValue; groupId?: string; entity?: unknown };
export type TGroup = { label: string; id: string };

export type TProps<TValue> = Pick<TInputProps, 'label' | 'hasError' | 'placeholder' | 'name' | 'size'> & {
    value: TValue | null;
    onChange: (value: TValue | null) => void;
    options: TOption<TValue>[];
    groups?: TGroup[];
    isResetButtonEnabled?: boolean;
    renderOption?: (entity?: any) => ReactNode;
    dropdownHeader?: ReactNode;
    isDrawerOptions?: boolean;
    scrollbarMaxHeight?: number;
};

export const Select = <TValue extends string | number>({
    label,
    hasError,
    placeholder,
    name,
    value,
    onChange,
    options,
    groups = [],
    isResetButtonEnabled = false,
    size,
    renderOption,
    dropdownHeader,
    isDrawerOptions = false,
    scrollbarMaxHeight = MAX_LIST_HEIGHT,
}: TProps<TValue>) => {
    const palette = useComponentPalette<TSelectPalette>('select');

    const { inFocus, handleFocus: focusHandler, handleBlur: blurHandler } = useInputFocus();

    const [isOpen, setIsOpen] = useState(false);

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

    const selectedOption = useMemo(() => options.find((option) => option.value === value), [options, value]);

    const optionGroups = useOptionGroups(options, groups);

    const handleShow = useCallback(() => setIsOpen(true), []);
    const handleHide = useCallback(() => setIsOpen(false), []);

    const wrapperRef = useOutsideClick(handleHide);

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
            onChange(newValue);
            handleHide();
            if (delayBlur.current) {
                delayBlur.current();
                delayBlur.current = null;
            }
        },
        [handleHide, onChange],
    );

    const handleReset = useCallback(() => onChange(null), [onChange]);

    const handleInputClick = () => {
        inputRef.current?.blur();
        handleShow();
    };

    const dropdownContent = (
        <Scrollbar maxHeight={scrollbarMaxHeight}>
            {dropdownHeader}

            {optionGroups.map(({ group, options: groupOptions }) => (
                <Fragment key={group?.id || null}>
                    {!group ? null : <S.Group variant="headerText">{group.label}</S.Group>}
                    {groupOptions.map((option) => (
                        <S.Option
                            key={option.value}
                            $palette={palette}
                            variant="bodyMRegular"
                            onClick={handleSelect}
                            data-value={JSON.stringify(option.value)}
                            data-option-identifier={OPTION_IDENTIFIER}
                            $isGrouped={!!group}
                        >
                            {renderOption ? (
                                renderOption(option.entity)
                            ) : (
                                <S.DefaultOptionWrapper> {option.label}</S.DefaultOptionWrapper>
                            )}
                        </S.Option>
                    ))}
                </Fragment>
            ))}
        </Scrollbar>
    );

    return (
        <S.Wrapper ref={isDrawerOptions ? undefined : wrapperRef}>
            <S.InputWrapper>
                <Input
                    ref={inputRef}
                    label={label}
                    hasError={hasError}
                    inFocus={inFocus}
                    placeholder={placeholder}
                    onFocus={isDrawerOptions ? undefined : handleFocus}
                    onBlur={isDrawerOptions ? undefined : handleBlur}
                    value={selectedOption?.label || ''}
                    name={name}
                    isOpen={isOpen}
                    onReset={isResetButtonEnabled ? handleReset : undefined}
                    size={size}
                    onClick={isDrawerOptions ? handleInputClick : undefined}
                />
            </S.InputWrapper>

            {isDrawerOptions ? (
                <Drawer onClose={handleHide} isOpen={isOpen} isPadding={false}>
                    <S.DrawerInner>{dropdownContent}</S.DrawerInner>
                </Drawer>
            ) : (
                <Dropdown isOpen={isOpen} isAutoPosition width="100%">
                    {dropdownContent}
                </Dropdown>
            )}
        </S.Wrapper>
    );
};
