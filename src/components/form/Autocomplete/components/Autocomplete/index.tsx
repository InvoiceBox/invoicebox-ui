import React, {
    ChangeEvent,
    FocusEvent,
    forwardRef,
    InputHTMLAttributes,
    MouseEvent,
    ReactNode,
    useCallback,
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
import { SIZE_PARAMS_MAP, TSizes } from '../../../constants';
import { useComponentPalette } from '../../../../../palette';
import { TAutocompleteDefaultOptionPalette } from '../AutocompleteDefaultOption/palette';
import { OptionWrapperWithPadding } from './styles';

const DefaultSkeletonItem = () => (
    <S.DefaultSkeletonWrapper>
        <Skeleton height="20px" />
    </S.DefaultSkeletonWrapper>
);

const MAX_LIST_HEIGHT = 294;

type TOption = {
    value: string;
    entity?: any;
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
        },
        ref,
    ) => {
        const isMobile = useMobile();
        const [isOpen, setIsOpen] = useState(false);
        const palette = useComponentPalette<TAutocompleteDefaultOptionPalette>('autocompleteDefaultOption');

        const { inFocus, handleFocus, handleBlur } = useInputFocus({ onFocus, onBlur });

        const handleOpen = useCallback(() => setIsOpen(true), []);
        const handleClose = useCallback(() => setIsOpen(false), []);

        const wrapperRef = useOutsideClick(handleClose);

        const handleChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
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

        return (
            <S.Wrapper ref={wrapperRef}>
                <InputLabel inFocus={inFocus} label={label} disabled={disabled} required={required}>
                    <S.InputLabelContent>
                        {children ? <S.ChildrenWrapper>{children}</S.ChildrenWrapper> : null}
                        <PureInput
                            ref={ref}
                            hasError={hasError}
                            inFocus={inFocus}
                            value={value}
                            onChange={handleChange}
                            onFocus={handleInputFocus}
                            onBlur={handleBlur}
                            name={name}
                            placeholder={placeholder}
                            disabled={disabled}
                            paddingLeft={inputPaddingLeft}
                            maxLength={inputMaxLength}
                            isOnlyNumbers={isInputOnlyNumbers}
                            autoFocus={autoFocus}
                            readOnly={readOnly}
                            {...SIZE_PARAMS_MAP[size]}
                        />
                    </S.InputLabelContent>
                </InputLabel>

                <Dropdown
                    isOpen={isOpen && (!!options.length || !!isLoading)}
                    isAutoPosition
                    width={dropdownWidth || '100%'}
                    minWidth={isMobile ? '100%' : '340px'}
                    usePadding={usePadding}
                >
                    {isLoading ? (
                        optionsLoader || (
                            <>
                                <DefaultSkeletonItem />
                                <DefaultSkeletonItem />
                                <DefaultSkeletonItem />
                            </>
                        )
                    ) : (
                        <Scrollbar maxHeight={listHeight}>
                            {options.map((option, index) => (
                                <S.OptionWrapperWithPadding
                                    $usePadding={usePadding}
                                    key={`${option.value}${index}`}
                                >
                                    <S.OptionContainer
                                        $hoverBg={palette.hoverBg}
                                        $usePadding={usePadding}
                                        key={`${option.value}${index}`}
                                    >
                                        <S.OptionWrapper
                                            key={`${option.value}${index}`}
                                            tabIndex={-1}
                                            type="button"
                                            onClick={handleSelect}
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
                        </Scrollbar>
                    )}
                </Dropdown>
            </S.Wrapper>
        );
    },
);

Autocomplete.displayName = 'Autocomplete';
