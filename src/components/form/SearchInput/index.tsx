import React, { ChangeEvent, useCallback, forwardRef } from 'react';
import * as S from './styles';
import { InputLabel } from '../InputLabel';
import { PureInput, TProps as PureInputProps } from '../PureInput';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { SearchIcon } from './components/SearchIcon';
import { useComponentPalette } from '../../../palette';
import { TSearchInputPalette } from './palette';
import { ResetButton } from '../ResetButton';
import { SIZE_PADDING_MAP, TSizes } from '../constants';

export type TProps = Pick<
    PureInputProps,
    'placeholder' | 'hasBorder' | 'autoFocus' | 'name' | 'onFocus' | 'onBlur' | 'isOnlyNumbers' | 'maxLength'
> & {
    value: string;
    onChange: (value: string) => void;
    size?: TSizes;
};

export const SearchInput = forwardRef<HTMLInputElement, TProps>(
    (
        {
            name,
            onFocus,
            onBlur,
            onChange,
            placeholder,
            hasBorder,
            value,
            autoFocus,
            isOnlyNumbers,
            maxLength,
            size = 'L',
        },
        ref,
    ) => {
        const { inFocus, handleFocus, handleBlur } = useInputFocus({ onFocus, onBlur });
        const palette = useComponentPalette<TSearchInputPalette>('searchInput');

        const handleInputReset = useCallback(() => {
            onChange('');
        }, [onChange]);

        const handleInputChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                onChange(event.target.value);
            },
            [onChange],
        );

        return (
            <InputLabel>
                <PureInput
                    ref={ref}
                    paddingRight={56}
                    hasBorder={hasBorder}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    inFocus={inFocus}
                    autoFocus={autoFocus}
                    name={name}
                    maxLength={maxLength}
                    isOnlyNumbers={isOnlyNumbers}
                    {...SIZE_PADDING_MAP[size]}
                />
                <S.IconWrapper $inFocus={inFocus} $palette={palette}>
                    {value ? <ResetButton onClick={handleInputReset} /> : <SearchIcon />}
                </S.IconWrapper>
            </InputLabel>
        );
    },
);

SearchInput.displayName = 'SearchInput';
