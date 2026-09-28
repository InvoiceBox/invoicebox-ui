import React, { FC, KeyboardEvent, MouseEvent, useCallback, useId } from 'react';
import * as S from './styles';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { InputLabel, TProps as TInputLabelProps } from '../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../PureInput';
import { Arrow } from '../../common/Arrow';
import { useFilters } from './hooks/useFilters';
import { useNormalizers } from './hooks/useNormalizers';
import { useIncrement } from './hooks/useIncrement';
import { useIncrementDisabledFlags } from './hooks/useIncrementDisabledFlags';
import { TSizes } from '../constants';
import { useInputStyles } from '../_hooks/useInputStyles';

export type TProps = {
    value: number | null;
    onChange: (value: number | null) => void;
    max?: number;
    upAndDown?: boolean;
    /** Только для скринридеров и голосового управления, на экране не выводится: aria-label кнопки «вверх» */
    incrementButtonAriaLabel?: string;
    /** Только для скринридеров и голосового управления, на экране не выводится: aria-label кнопки «вниз» */
    decrementButtonAriaLabel?: string;
} & Pick<TInputLabelProps, 'label'> &
    Pick<
        TPureInputProps,
        'placeholder' | 'hasError' | 'onFocus' | 'onBlur' | 'disabled' | 'name' | 'useModernStyles' | 'id'
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
    size,
    useModernStyles = false,
    id,
    disabled = false,
    incrementButtonAriaLabel = 'Увеличить',
    decrementButtonAriaLabel = 'Уменьшить',
}) => {
    const { inFocus, handleFocus, handleBlur } = useInputFocus({ onFocus, onBlur });

    const fallbackId = useId();
    const inputId = id ?? fallbackId;

    const { inputLabel, paddingAndVariantOptions, modernPlaceholder, fieldSize } = useInputStyles({
        isHaveValue: typeof value === 'number',
        useModernStyles,
        size,
        label,
        inFocus,
        placeholder,
    });

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

    const isUpDisabled = disabled || isIncrementDisabled;
    const isDownDisabled = disabled || isDecrementDisabled;

    // Стрелки клавиатуры в поле — как кнопки «вверх»/«вниз» (кнопки вне порядка Tab)
    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (!upAndDown) return;
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                if (!isUpDisabled) handleUp();
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                if (!isDownDisabled) handleDown();
            }
        },
        [handleDown, handleUp, isDownDisabled, isUpDisabled, upAndDown],
    );

    // Клик по кнопке не забирает фокус у поля: иначе срабатывал бы onBlur поля
    const preventFocusLoss = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => event.preventDefault(),
        [],
    );

    return (
        <InputLabel
            inFocus={inFocus}
            label={inputLabel}
            useModernStyles={useModernStyles}
            size={fieldSize}
            htmlFor={inputId}
            disabled={disabled}
        >
            <S.ControlWrapper>
                {modernPlaceholder}
                <PureInput
                    id={inputId}
                    aria-label={label && !inputLabel ? label : undefined}
                    name={name}
                    hasError={hasError}
                    inFocus={inFocus}
                    placeholder={useModernStyles ? undefined : placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={normalizeFrom(value)}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    disabled={disabled}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    paddingRight={upAndDown ? 44 : undefined}
                    {...paddingAndVariantOptions}
                    useModernStyles={useModernStyles}
                />
                {upAndDown && (
                    <S.Arrows>
                        <S.Arrow
                            type="button"
                            tabIndex={-1}
                            aria-label={incrementButtonAriaLabel}
                            aria-controls={inputId}
                            disabled={isUpDisabled}
                            onMouseDown={preventFocusLoss}
                            onClick={handleUp}
                        >
                            <Arrow isOpen outterSize={12} />
                        </S.Arrow>
                        <S.Arrow
                            type="button"
                            tabIndex={-1}
                            aria-label={decrementButtonAriaLabel}
                            aria-controls={inputId}
                            disabled={isDownDisabled}
                            onMouseDown={preventFocusLoss}
                            onClick={handleDown}
                        >
                            <Arrow isOpen={false} outterSize={12} />
                        </S.Arrow>
                    </S.Arrows>
                )}
            </S.ControlWrapper>
        </InputLabel>
    );
};
