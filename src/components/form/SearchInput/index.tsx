import React, { ChangeEvent, useCallback, forwardRef } from 'react';
import * as S from './styles';
import { InputLabel } from '../InputLabel';
import { PureInput, TProps as PureInputProps } from '../PureInput';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { SearchIcon } from './components/SearchIcon';
import { useComponentPalette } from '../../../palette';
import { TSearchInputPalette } from './palette';
import { ResetButton } from '../ResetButton';
import { TSizes } from '../constants';
import { useInputStyles } from '../_hooks/useInputStyles';

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

        const { inputLabel, paddingAndVariantOptions, modernPlaceholder } = useInputStyles({
            isHaveValue: !!value,
            useModernStyles,
            size,
            label: placeholder,
            inFocus,
            placeholder,
        });

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
            <InputLabel
                useModernStyles={useModernStyles}
                size={size}
                label={useModernStyles ? inputLabel : undefined}
            >
                {modernPlaceholder}
                <PureInput
                    ref={ref}
                    paddingRight={56}
                    hasBorder={hasBorder}
                    onChange={handleInputChange}
                    placeholder={useModernStyles ? undefined : placeholder}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    inFocus={inFocus}
                    autoFocus={autoFocus}
                    name={name}
                    maxLength={maxLength}
                    isOnlyNumbers={isOnlyNumbers}
                    {...paddingAndVariantOptions}
                    useModernStyles={useModernStyles}
                />
                <S.IconWrapper $inFocus={inFocus} $palette={palette} $useModernStyles={useModernStyles}>
                    {value ? <ResetButton onClick={handleInputReset} /> : <SearchIcon />}
                </S.IconWrapper>
            </InputLabel>
        );
    },
);

SearchInput.displayName = 'SearchInput';
