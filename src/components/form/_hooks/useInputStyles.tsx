import { MODERN_STYLE_SIZE_PARAMS_MAP, SIZE_PARAMS_MAP, TSizes } from '../constants';
import React, { useMemo } from 'react';
import { ModernPlaceholder } from '../ModernPlaceholder';

type TParams = {
    inFocus: boolean;
    size: TSizes;
    isHaveValue: boolean;
    useModernStyles?: boolean;
    label?: string;
    placeholder?: string;
    required?: boolean;
};

export const useInputStyles = ({
    inFocus,
    useModernStyles,
    label,
    size,
    placeholder,
    isHaveValue,
    required,
}: TParams) => {
    const isHideModernPlaceholder = isHaveValue || inFocus;

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
                return MODERN_STYLE_SIZE_PARAMS_MAP[size];
            } else {
                return {
                    ...MODERN_STYLE_SIZE_PARAMS_MAP[size],
                    paddingTop: MODERN_STYLE_SIZE_PARAMS_MAP[size].$placeholderPaddingTop,
                    paddingBottom: MODERN_STYLE_SIZE_PARAMS_MAP[size].$placeholderPaddingTop,
                };
            }
        } else {
            return SIZE_PARAMS_MAP[size];
        }
    }, [useModernStyles, isHideModernPlaceholder, size]);

    const modernInputPlaceholder = useMemo(() => {
        return placeholder || label;
    }, [label, placeholder]);

    const modernPlaceholder = useModernStyles && modernInputPlaceholder && (
        <ModernPlaceholder
            visible={!isHideModernPlaceholder}
            paddingTop={MODERN_STYLE_SIZE_PARAMS_MAP[size].$placeholderPaddingTop}
            size={size}
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
    };
};
