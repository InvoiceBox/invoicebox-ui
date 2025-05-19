import React, { FC, useCallback } from 'react';
import * as S from './styles';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { InputLabel, TProps as TInputLabelProps } from '../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../PureInput';
import { Arrow } from '../../common/Arrow';
import { useFilters } from './hooks/useFilters';
import { useNormalizers } from './hooks/useNormalizers';
import { useIncrement } from './hooks/useIncrement';
import { useIncrementDisabledFlags } from './hooks/useIncrementDisabledFlags';
import { SIZE_PARAMS_MAP, TSizes } from '../constants';

export type TProps = {
    value: number | null;
    onChange: (value: number | null) => void;
    max?: number;
    upAndDown?: boolean;
} & Pick<TInputLabelProps, 'label'> &
    Pick<TPureInputProps, 'placeholder' | 'hasError' | 'onFocus' | 'onBlur' | 'disabled' | 'name'> & {
        size?: TSizes;
    };

export const PositiveIntegerInput: FC<TProps> = ({
    value,
    onChange,
    max = Infinity,
    upAndDown = false,
    label,
    placeholder,
    hasError,
    onFocus,
    onBlur,
    name,
    size = 'M',
}) => {
    const { inFocus, handleFocus, handleBlur } = useInputFocus({ onFocus, onBlur });

    const filters = useFilters({ max });
    const { normalizeFrom, normalizeTo } = useNormalizers();
    const { increment, decrement } = useIncrement();
    const { isDecrementDisabled, isIncrementDisabled } = useIncrementDisabledFlags({ max, value });

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { value: newValue } = event.target;
            const filtredValue = filters.reduce((acc, fn) => fn(acc), newValue);
            onChange(normalizeTo(filtredValue));
        },
        [normalizeTo, onChange, filters],
    );

    const handleUp = useCallback(() => {
        onChange(increment(value));
    }, [increment, value, onChange]);

    const handleDown = useCallback(() => {
        onChange(decrement(value));
    }, [decrement, value, onChange]);

    return (
        <InputLabel inFocus={inFocus} label={label}>
            <S.ControlWrapper>
                <PureInput
                    name={name}
                    hasError={hasError}
                    inFocus={inFocus}
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={normalizeFrom(value)}
                    onChange={handleChange}
                    paddingRight={upAndDown ? 44 : undefined}
                    {...SIZE_PARAMS_MAP[size]}
                />
                {upAndDown && (
                    <S.Arrows>
                        <S.Arrow onClick={handleUp} $disabled={isIncrementDisabled}>
                            <Arrow isOpen outterSize={12} />
                        </S.Arrow>
                        <S.Arrow onClick={handleDown} $disabled={isDecrementDisabled}>
                            <Arrow isOpen={false} outterSize={12} />
                        </S.Arrow>
                    </S.Arrows>
                )}
            </S.ControlWrapper>
        </InputLabel>
    );
};
