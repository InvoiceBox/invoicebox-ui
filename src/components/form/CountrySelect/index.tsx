import React, { FC, useCallback, useMemo, useState } from 'react';
import * as S from './stlyes';
import { CountryItem, TProps as TCountryItemProps } from './components/CountryItem';
import { SearchInput, TProps as TSearchInputProps } from '../SearchInput';
import { logic } from './logic';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { Flag, TFlagKey } from '../../common/Flag';
import { Arrow } from '../../common/Arrow';
import { Dropdown } from '../../common/Dropdown';
import { Scrollbar } from '../../common/Scrollbar';
import { TDropdownProps } from '../../../index';
import { useComponentPalette } from '../../../palette';
import { TCountrySelectPalette } from './palette';

type TOption = {
    value: string;
    label: string;
    description: string;
    flag?: TFlagKey;
};

type TFieldProps = {
    value: TOption['value'];
    onChange: (value: TOption['value']) => void;
};

type TControlProps<T> = Pick<TSearchInputProps, 'placeholder'> &
    Pick<TCountryItemProps<T>, 'selectedLabel'> & {
        options: TOption[];
        disabled?: boolean;
    } & Pick<TDropdownProps, 'positionVertical' | 'positionLeft' | 'positionRight' | 'minWidth'>;

export type TProps = TFieldProps & TControlProps<string>;

export const CountrySelect: FC<TProps> = ({
    value,
    onChange,
    options,
    placeholder,
    disabled = false,
    selectedLabel,
    ...dropdownPositionProps
}) => {
    const palette = useComponentPalette<TCountrySelectPalette>('countrySelect');

    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');

    const selectedOption = useMemo(
        () => options.find((option) => option.value === value) as TOption,
        [options, value],
    );

    const handleClear = useCallback(() => {
        setSearch('');
    }, []);

    const handleDropdownClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleDropdownTrigger = useCallback(() => {
        setIsOpen((flag) => !flag);
    }, []);

    const wrapperRef = useOutsideClick(handleDropdownClose);

    const sortedOptions = useMemo(
        () => [selectedOption, ...options.filter((option) => option !== selectedOption)],
        [selectedOption, options],
    );

    const filtredOptions = useMemo(
        () => sortedOptions.filter((option) => logic.isSearchMatchOption(search, option.label)),
        [search, sortedOptions],
    );

    const handleSelect = (newValue: TOption['value']) => {
        onChange(newValue);
        handleDropdownClose();
    };

    return (
        <S.Wrapper ref={wrapperRef}>
            <S.HeaderWrapper type="button" onClick={handleDropdownTrigger} disabled={disabled}>
                {selectedOption.flag && <Flag height={16} width={22} flag={selectedOption.flag} />}
                <Arrow isOpen={isOpen} />
            </S.HeaderWrapper>
            <Dropdown
                isOpen={isOpen}
                onCloseTransitionEnd={handleClear}
                zIndex={6}
                isAutoPosition
                {...dropdownPositionProps}
            >
                <S.ListWrapper>
                    <S.CountrySearchWrapper $palette={palette}>
                        <SearchInput
                            onChange={setSearch}
                            placeholder={placeholder}
                            hasBorder={false}
                            value={search}
                        />
                    </S.CountrySearchWrapper>
                    <Scrollbar maxHeight={192}>
                        {filtredOptions.map((option) => (
                            <CountryItem
                                key={option.value}
                                palette={palette}
                                countryLabel={option.label}
                                onSelect={handleSelect}
                                selectedLabel={selectedLabel}
                                value={option.value}
                                isSelected={option === selectedOption}
                                description={option.description}
                                flag={option.flag}
                            />
                        ))}
                    </Scrollbar>
                </S.ListWrapper>
            </Dropdown>
        </S.Wrapper>
    );
};
