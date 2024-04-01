import React, { ChangeEvent, FC, useCallback } from 'react';
import * as S from './styles';
import { InputLabel } from '../InputLabel';
import { PureInput } from '../PureInput';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { SearchIcon } from './components/SearchIcon';
import { CrossIcon } from './components/CrossIcon';

export type TProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    hasBorder?: boolean;
};

export const SearchInput: FC<TProps> = ({ onChange, placeholder, hasBorder = true, value }) => {
    const { inFocus, handleFocus, handleBlur } = useInputFocus();

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
            <S.IconWrapper $inFocus={inFocus}>
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
