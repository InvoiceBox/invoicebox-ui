import React, { ChangeEvent, useCallback, forwardRef, useMemo } from 'react';
import * as S from './styles';
import { InputLabel } from '../InputLabel';
import { PureInput, TProps as PureInputProps } from '../PureInput';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { SearchIcon } from './components/SearchIcon';
import { useComponentPalette } from '../../../palette';
import { TSearchInputPalette } from './palette';
import { ResetButton } from '../ResetButton';
import { MODERN_STYLE_SIZE_PARAMS_MAP, SIZE_PARAMS_MAP, TSizes } from '../constants';

export type TProps = Pick<
    PureInputProps,
    'placeholder' | 'hasBorder' | 'autoFocus' | 'name' | 'onFocus' | 'onBlur' | 'isOnlyNumbers' | 'maxLength'
> & {
    value: string;
    onChange: (value: string) => void;
    size?: TSizes;
    useModernStyles?: boolean;
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
            size = 'M',
            useModernStyles = false,
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

        const inputPlaceholder = useMemo(() => {
            if (useModernStyles) {
                if (!inFocus) {
                    return placeholder;
                } else {
                    return undefined;
                }
            } else {
                return placeholder;
            }
        }, [placeholder, useModernStyles, inFocus]);

        const inputLabel = useMemo(() => {
            if (useModernStyles && (value || inFocus)) {
                return placeholder;
            } else {
                return undefined;
            }
        }, [inFocus, placeholder, value, useModernStyles]);

        const paddingOptions = useMemo(() => {
            if ((value || inFocus) && useModernStyles && inputLabel) {
                return MODERN_STYLE_SIZE_PARAMS_MAP[size];
            } else {
                return SIZE_PARAMS_MAP[size];
            }
        }, [value, inFocus, useModernStyles, size, inputLabel]);

        return (
            <InputLabel useModernStyles={useModernStyles} size={size} label={inputLabel}>
                <PureInput
                    ref={ref}
                    paddingRight={56}
                    hasBorder={hasBorder}
                    onChange={handleInputChange}
                    placeholder={inputPlaceholder}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    inFocus={inFocus}
                    autoFocus={autoFocus}
                    name={name}
                    maxLength={maxLength}
                    isOnlyNumbers={isOnlyNumbers}
                    {...paddingOptions}
                    useModernStyles={useModernStyles}
                />
                <S.IconWrapper
                    $inFocus={inFocus}
                    $palette={palette}
                    $wideBottomSpacing={useModernStyles || !!inputLabel}
                >
                    {value ? <ResetButton onClick={handleInputReset} /> : <SearchIcon />}
                </S.IconWrapper>
            </InputLabel>
        );
    },
);

SearchInput.displayName = 'SearchInput';
