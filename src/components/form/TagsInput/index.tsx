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
    value?: Array<string>;
    onChange: (value?: Array<string>) => void;
    size?: TSizes;
    palette?: Partial<TTagsInputPalette>;
};

export const TagsInput: FC<TProps> = ({ hasError = false, size = 'M', label, value, onChange, palette }) => {
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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        clearNewValueAutofillInterval();

        if (event.target.value) {
            newValueAutofillIntervalRef.current = setTimeout(() => {
                acceptNewValue(event.target.value);
            }, 3000);
        }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        const target = event.target as HTMLInputElement;

        if (event.key === 'Enter' && inputValue.length) {
            clearNewValueAutofillInterval();

            acceptNewValue(target.value);
        }

        if (event.key === 'Backspace' && inputValue === '' && value?.length) {
            // нужно чтобы после выполнения кода ниже - в handleChange не передалось значение и автоматически ч-з backspace не стёрся крайний символ
            event.preventDefault();
            const lastTagValue = value[value.length - 1];
            setInputValue(lastTagValue);
            handleTagRemove(lastTagValue);

            newValueAutofillIntervalRef.current = setTimeout(() => {
                acceptNewValue(lastTagValue);
            }, 3000);
        }
    };

    const handleTagRemove = (tagRemoved: string) => {
        const valueWithoutRemovedTag = value?.filter((tagItem) => tagItem !== tagRemoved);
        onChange(valueWithoutRemovedTag?.length ? valueWithoutRemovedTag : undefined);
    };

    const handlePureInputClick = () => {
        inputRef.current?.focus();
    };

    const handlePureInputBlur = (event: FocusEvent<HTMLInputElement>) => {
        handleBlur(event);
        clearNewValueAutofillInterval();

        if (event.target.value) {
            acceptNewValue(event.target.value);
        }
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
                onClick={handlePureInputClick}
            >
                <S.TagsWrapper>
                    {value?.map((tagItem, index) => (
                        <Chip
                            key={tagItem + index}
                            label={
                                <S.ChipLabel>
                                    <Typography variant={'labelsHintsBold'}>{tagItem}</Typography>
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
                    <S.InputWrapper>
                        <PureInput
                            ref={inputRef}
                            hasBorder={false}
                            paddingBottom={0}
                            paddingRight={0}
                            paddingTop={0}
                            paddingLeft={0}
                            borderRadius={0}
                            value={inputValue}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            onBlur={handlePureInputBlur}
                            onFocus={handleFocus}
                        />
                    </S.InputWrapper>
                </S.TagsWrapper>
            </S.PureInputStyledWrapper>
        </InputLabel>
    );
};
