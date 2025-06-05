import React, { FC } from 'react';
import * as S from './styles';
import { SIZE_PARAMS_MAP, TSizes } from '../../form/constants';
import { InputLabel } from '../../form/InputLabel';
import { useComponentPalette } from '../../../palette';
import { TReadOnlyLabelValueFieldPalette } from './palette';

export type TProps = {
    label: string;
    value?: string;
    size?: TSizes;
};

export const ReadOnlyLabelValueField: FC<TProps> = ({ label, value, size = 'M' }) => {
    const { paddingBottom, paddingTop, variant } = SIZE_PARAMS_MAP[size];

    const palette = useComponentPalette<TReadOnlyLabelValueFieldPalette>('readOnlyLabelValueField');

    return (
        <InputLabel label={label}>
            <S.Value
                $color={palette.value}
                $paddingTop={paddingTop}
                $paddingBottom={paddingBottom}
                variant={variant}
            >
                {value}
            </S.Value>
        </InputLabel>
    );
};
