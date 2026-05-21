import React, { FC, useCallback, useMemo } from 'react';
import * as S from './styles';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { InputLabel, TProps as TInputLabelProps } from '../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../PureInput';
import { Arrow } from '../../common/Arrow';
import { useFilters } from './hooks/useFilters';
import { useNormalizers } from './hooks/useNormalizers';
import { useIncrement } from './hooks/useIncrement';
import { useIncrementDisabledFlags } from './hooks/useIncrementDisabledFlags';
import { MODERN_STYLE_SIZE_PARAMS_MAP, SIZE_PARAMS_MAP, TSizes } from '../constants';

export type TProps = {
    value: number | null;
    onChange: (value: number | null) => void;
    max?: number;
    upAndDown?: boolean;
} & Pick<TInputLabelProps, 'label'> &
    Pick<
        TPureInputProps,
        'placeholder' | 'hasError' | 'onFocus' | 'onBlur' | 'disabled' | 'name' | 'useModernStyles'
    > & {
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
    useModernStyles = false,
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
        if (useModernStyles) {
            if (value || inFocus) {
                return label;
            } else {
                return undefined;
            }
        } else {
            return label;
        }
    }, [inFocus, label, value, useModernStyles]);

    const paddingOptions = useMemo(() => {
        if ((value || inFocus) && useModernStyles && inputLabel) {
            return MODERN_STYLE_SIZE_PARAMS_MAP[size];
        } else {
            return SIZE_PARAMS_MAP[size];
        }
    }, [value, inFocus, useModernStyles, size, inputLabel]);

    return (
        <InputLabel inFocus={inFocus} label={inputLabel} useModernStyles={useModernStyles} size={size}>
            <S.ControlWrapper>
                <PureInput
                    name={name}
                    hasError={hasError}
                    inFocus={inFocus}
                    placeholder={inputPlaceholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={normalizeFrom(value)}
                    onChange={handleChange}
                    paddingRight={upAndDown ? 44 : undefined}
                    {...paddingOptions}
                    useModernStyles={useModernStyles}
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
