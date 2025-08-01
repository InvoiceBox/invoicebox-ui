import React, { ChangeEvent, FocusEvent, ClipboardEvent, KeyboardEvent, FC } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TCodeInputPalette } from './palette';

const ONLY_NUMBERS_REGEX = /^[0-9]+$/;

export type TProps = {
    value: string;
    onChange: (value: string) => void;
    codeLength: number;
    hasError?: boolean;
    isLarge?: boolean;
    disabled?: boolean;
    autoFocus?: boolean;
};

export const CodeInput: FC<TProps> = ({
    hasError,
    onChange,
    codeLength,
    value,
    isLarge = true,
    disabled,
    autoFocus,
}) => {
    const palette = useComponentPalette<TCodeInputPalette>('codeInput');

    const getCodeArrFromCodeString = (newValue = '') =>
        [...newValue.split(''), ...Array(codeLength).fill('')].slice(0, codeLength);

    const codeArr = getCodeArrFromCodeString(value);

    const setValue = (newValue: string, index: number) => {
        const newArr = codeArr.map((codeItem, codeIndex) => (index === codeIndex ? newValue : codeItem));
        onChange(newArr.join(''));
    };

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const index = Number(event.target.dataset.index);
        const inputValue = event.target.value;

        if (ONLY_NUMBERS_REGEX.test(inputValue)) {
            setValue(inputValue.length > 1 ? inputValue.replace(codeArr[index], '') : inputValue, index);
            if (event.target.nextSibling) {
                (event.target.nextSibling as HTMLInputElement).focus();
            }
        }
    };

    const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Backspace') {
            event.preventDefault();
            const target = event.target as HTMLInputElement;
            const index = Number(target.dataset.index);

            if (target.value) {
                setValue('', index);
            } else if (target.previousSibling) {
                setValue('', index - 1);
                (target.previousSibling as HTMLInputElement).focus();
            }
        }
    };

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
        const currentInput = event.target as HTMLInputElement;
        const prevInput = currentInput.previousSibling as HTMLInputElement;

        if (prevInput && prevInput.value === '') {
            prevInput.focus();
        }
    };

    const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pasteText = event.clipboardData.getData('Text').trim();

        if (ONLY_NUMBERS_REGEX.test(pasteText)) {
            onChange(pasteText);
        }
    };

    return (
        <S.Wrapper $isLarge={isLarge}>
            {codeArr.map((codeItem, index) => (
                <S.CodeInputItem
                    $defaultBorder={palette.defaultBorder}
                    $errorBorder={palette.errorBorder}
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    data-index={String(index)}
                    onChange={changeHandler}
                    value={codeItem}
                    inputMode="numeric"
                    onKeyDown={onKeyDown}
                    onPaste={handlePaste}
                    onFocus={handleFocus}
                    placeholder="-"
                    $hasError={hasError}
                    disabled={!!disabled}
                    autoFocus={autoFocus}
                    autoComplete={'one-time-code'}
                    type="text"
                />
            ))}
        </S.Wrapper>
    );
};
