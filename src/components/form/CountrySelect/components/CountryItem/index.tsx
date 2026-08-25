import React, { useCallback } from 'react';
import * as S from './stlyes';
import { Flag, TFlagKey } from '../../../../common/Flag';
import { TCountrySelectPalette } from '../../palette';
import { Typography } from '../../../../common/Typography';

export type TProps<TValue> = {
    countryLabel: string;
    onSelect: (value: TValue) => void;
    value: TValue;
    isSelected: boolean;
    description: string;
    selectedLabel: string;
    palette: TCountrySelectPalette;
    flag?: TFlagKey;
    hint?: string;
};

export const CountryItem = <TValue,>({
    isSelected,
    flag,
    onSelect,
    description,
    value,
    countryLabel,
    selectedLabel,
    palette,
    hint,
}: TProps<TValue>) => {
    const handleSelect = useCallback(() => onSelect(value), [onSelect, value]);

    return (
        <S.Wrapper $palette={palette} onClick={handleSelect} type="button">
            <S.Title $isSelected={isSelected} $palette={palette}>
                {flag && <Flag flag={flag} isSmall={true} />}
                <S.TitleTexts>
                    <Typography variant={'captionRegular'}>
                        {countryLabel} {isSelected && selectedLabel}
                    </Typography>
                    {hint && (
                        <S.Hint $palette={palette}>
                            <Typography variant={'captionSRegular'}>{hint}</Typography>
                        </S.Hint>
                    )}
                </S.TitleTexts>
            </S.Title>
            <Typography variant={'captionRegular'}>{description}</Typography>
        </S.Wrapper>
    );
};
