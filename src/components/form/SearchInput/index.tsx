import React, { ChangeEvent, FC, useCallback } from 'react';
import * as S from './styles';
import { InputLabel } from '../InputLabel';
import { PureInput, TProps as PureInputProps } from '../PureInput';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { SearchIcon } from './components/SearchIcon';
import { CrossIcon } from './components/CrossIcon';
import { useComponentPalette } from '../../../palette';
import { TSearchInputPalette } from './palette';

export type TProps = Pick<PureInputProps, 'placeholder' | 'hasBorder'> & {
    value: string;
    onChange: (value: string) => void;
};

export const SearchInput: FC<TProps> = ({ onChange, placeholder, hasBorder, value }) => {
    const { inFocus, handleFocus, handleBlur } = useInputFocus();
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
                paddingRight={56}
                hasBorder={hasBorder}
                onChange={handleInputChange}
                placeholder={placeholder}
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                inFocus={inFocus}
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
};
