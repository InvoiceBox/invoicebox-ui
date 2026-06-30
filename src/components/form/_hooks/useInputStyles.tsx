import { MODERN_STYLE_SIZE_PARAMS_MAP, SIZE_PARAMS_MAP, TSizes } from '../constants';
import React, { useMemo } from 'react';
import { ModernPlaceholder } from '../ModernPlaceholder';

type TParams = {
    inFocus: boolean;
    size?: TSizes;
    isHaveValue: boolean;
    useModernStyles?: boolean;
    label?: string;
    placeholder?: string;
    required?: boolean;
    conditionHideModernPlaceholder?: boolean;
    paddingRight?: number;
};

export const useInputStyles = ({
    inFocus,
    useModernStyles,
    label,
    size,
    placeholder,
    isHaveValue,
    required,
    conditionHideModernPlaceholder = false,
    paddingRight,
}: TParams) => {
    const isHideModernPlaceholder = isHaveValue || inFocus || conditionHideModernPlaceholder;

    const fieldSize = useModernStyles && !size ? 'L' : size || 'M';

    const inputLabel = useMemo(() => {
        if (useModernStyles) {
            return isHideModernPlaceholder ? label : undefined;
        } else {
            return label;
        }
    }, [useModernStyles, isHideModernPlaceholder, label]);

    const paddingAndVariantOptions = useMemo(() => {
        if (useModernStyles) {
            if (isHideModernPlaceholder) {
                return MODERN_STYLE_SIZE_PARAMS_MAP[fieldSize];
            } else {
                return {
                    ...MODERN_STYLE_SIZE_PARAMS_MAP[fieldSize],
                    paddingTop: MODERN_STYLE_SIZE_PARAMS_MAP[fieldSize].$placeholderPaddingTop,
                    paddingBottom: MODERN_STYLE_SIZE_PARAMS_MAP[fieldSize].$placeholderPaddingTop,
                };
            }
        } else {
            return SIZE_PARAMS_MAP[fieldSize];
        }
    }, [useModernStyles, isHideModernPlaceholder, fieldSize]);

    const modernInputPlaceholder = useMemo(() => {
        return placeholder || label;
    }, [label, placeholder]);

    const modernPlaceholder = useModernStyles && modernInputPlaceholder && (
        <ModernPlaceholder
            visible={!isHideModernPlaceholder}
            paddingTop={MODERN_STYLE_SIZE_PARAMS_MAP[fieldSize].$placeholderPaddingTop}
            paddingRight={paddingRight}
            size={fieldSize}
            required={required}
        >
            {modernInputPlaceholder}
        </ModernPlaceholder>
    );

    return {
        inputLabel,
        paddingAndVariantOptions,
        modernInputPlaceholder,
        isHideModernPlaceholder,
        modernPlaceholder,
        fieldSize,
    };
};
