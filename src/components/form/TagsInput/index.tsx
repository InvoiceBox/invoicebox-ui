import React, { ChangeEvent, FC, useState, KeyboardEvent, useRef, FocusEvent } from 'react';
import { InputLabel, TProps as TInputLabelProps } from '../InputLabel';
import { PureInput } from '../PureInput';
import * as S from './styles';
import { SIZE_PARAMS_MAP, TSizes } from '../constants';
import { useComponentPalette } from '../../../palette';
import { TPureInputPalette } from '../PureInput/palette';
import { Typography } from '../../common/Typography';
import { Chip } from '../../common/Chip';
import { CrossIcon } from './assets/CrossIcon';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { TTagsInputPalette } from './palette';

export type TProps = Pick<TInputLabelProps, 'label'> & { hasError?: boolean } & {
    saveLabel: string;
    value?: Array<string>;
    onChange: (value?: Array<string>) => void;
    size?: TSizes;
    palette?: Partial<TTagsInputPalette>;
};

export const TagsInput: FC<TProps> = ({
    hasError = false,
    size = 'M',
    label,
    value,
    onChange,
    palette,
    saveLabel,
}) => {
    const newValueAutofillIntervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [inputValue, setInputValue] = useState('');
    const { inFocus, handleFocus, handleBlur } = useInputFocus();

    const inputRef = useRef<HTMLInputElement>(null);

    const pureInputPalette = useComponentPalette<TPureInputPalette>('pureInput');
    const tagsInputPalette = useComponentPalette<TTagsInputPalette>('tagsInput', palette);

    const { paddingBottom, paddingTop } = SIZE_PARAMS_MAP[size];

    const clearNewValueAutofillInterval = () => {
        if (newValueAutofillIntervalRef.current) {
            clearInterval(newValueAutofillIntervalRef.current);
        }
    };

    const acceptNewValue = (newValue: string) => {
        onChange(value?.includes(newValue) ? value : [...(value ? value : []), newValue]);
        setInputValue('');
    };

    const acceptValueByTimeout = (newValue: string) => {
        newValueAutofillIntervalRef.current = setTimeout(() => {
            acceptNewValue(newValue);
        }, 3000);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        clearNewValueAutofillInterval();

        if (event.target.value) {
            acceptValueByTimeout(event.target.value);
        }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Backspace' && inputValue === '' && value?.length) {
            // нужно чтобы после выполнения кода ниже - в handleChange не передалось значение и автоматически ч-з backspace не стёрся крайний символ
            event.preventDefault();
            const lastTagValue = value[value.length - 1];
            setInputValue(lastTagValue);
            handleTagRemove(lastTagValue);

            acceptValueByTimeout(lastTagValue);
        }
    };

    const handleTagRemove = (tagRemoved: string) => {
        const valueWithoutRemovedTag = value?.filter((tagItem) => tagItem !== tagRemoved);
        onChange(valueWithoutRemovedTag?.length ? valueWithoutRemovedTag : undefined);
    };

    const handlePureInputWrapperBlur = (event: FocusEvent<HTMLInputElement>) => {
        const newFocusedElement = event.relatedTarget;

        if (!event.currentTarget.contains(newFocusedElement)) {
            handleBlur(event);
            clearNewValueAutofillInterval();

            if (event.target.value) {
                acceptNewValue(event.target.value);
            }
        }
    };

    const handlePureInputWrapperFocus = (event: FocusEvent<HTMLInputElement>) => {
        handleFocus(event);
        inputRef.current?.focus();
    };

    const handleChipClick = (chipValue: string) => {
        clearNewValueAutofillInterval();
        setInputValue(chipValue);
        handleTagRemove(chipValue);
        acceptValueByTimeout(chipValue);
    };

    const handleSaveButtonClick = () => {
        clearNewValueAutofillInterval();
        acceptNewValue(inputValue);
        inputRef.current?.focus();
    };

    return (
        <InputLabel label={label}>
            <S.PureInputStyledWrapper
                $palette={pureInputPalette}
                $hasBorder
                $paddingLeft={18}
                $paddingRight={18}
                $borderRadius={10}
                $paddingTop={paddingTop}
                $paddingBottom={paddingBottom}
                $hasError={hasError}
                $inFocus={inFocus}
                onBlur={handlePureInputWrapperBlur}
                onFocus={handlePureInputWrapperFocus}
                tabIndex={-1}
            >
                <S.TagsWrapper>
                    {value?.map((tagItem, index) => (
                        <Chip
                            key={tagItem + index}
                            label={
                                <S.ChipLabel>
                                    <Typography
                                        variant={'labelsHintsBold'}
                                        onClick={() => handleChipClick(tagItem)}
                                    >
                                        {tagItem}
                                    </Typography>
                                    <S.ChipRemoveButton
                                        type={'button'}
                                        onClick={() => handleTagRemove(tagItem)}
                                    >
                                        <CrossIcon color={tagsInputPalette.chipColor} />
                                    </S.ChipRemoveButton>
                                </S.ChipLabel>
                            }
                            color={tagsInputPalette.chipColor}
                            bgColor={tagsInputPalette.chipBg}
                        />
                    ))}
                    <S.InputWithSaveButtonWrapper>
                        <PureInput
                            ref={inputRef}
                            hasBorder={inFocus}
                            paddingBottom={0}
                            paddingRight={0}
                            paddingTop={0}
                            paddingLeft={4}
                            borderRadius={6}
                            value={inputValue}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />

                        {!!inputValue.length && (value?.length ? !value.includes(inputValue) : true) && (
                            <S.SaveButton type={'button'} onClick={handleSaveButtonClick}>
                                <Typography variant={'captionRegular'}>{saveLabel}</Typography>
                            </S.SaveButton>
                        )}
                    </S.InputWithSaveButtonWrapper>
                </S.TagsWrapper>
            </S.PureInputStyledWrapper>
        </InputLabel>
    );
};
