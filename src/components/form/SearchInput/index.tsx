import React, { ChangeEvent, useCallback, forwardRef } from 'react';
import * as S from './styles';
import { InputLabel } from '../InputLabel';
import { PureInput, TProps as PureInputProps } from '../PureInput';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { SearchIcon } from './components/SearchIcon';
import { CrossIcon } from './components/CrossIcon';
import { useComponentPalette } from '../../../palette';
import { TSearchInputPalette } from './palette';

export type TProps = Pick<
    PureInputProps,
    'placeholder' | 'hasBorder' | 'autoFocus' | 'name' | 'onFocus' | 'onBlur' | 'isOnlyNumbers' | 'maxLength'
> & {
    value: string;
    onChange: (value: string) => void;
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
                />
                <S.IconWrapper $inFocus={inFocus} $palette={palette}>
                    {value ? (
                        <S.ResetButton type="button" onClick={handleInputReset}>
                            <CrossIcon />
                        </S.ResetButton>
                    ) : (
                        <SearchIcon />
                    )}
                </S.IconWrapper>
            </InputLabel>
        );
    },
);

SearchInput.displayName = 'SearchInput';
