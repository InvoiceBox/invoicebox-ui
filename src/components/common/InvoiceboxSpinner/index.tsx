import React, { FC } from 'react';
import { TInvoiceboxSpinnerPalette } from './palette';
import { useComponentPalette } from '../../../palette';
import * as S from './styles';

export type TProps = {
    width?: string;
    palette?: Partial<TInvoiceboxSpinnerPalette>;
};

export const InvoiceboxSpinner: FC<TProps> = ({ palette, width = '100%' }) => {
    const mergedPalette = useComponentPalette('invoiceboxSpinner', palette);

    return (
        <S.Wrapper $width={width}>
            <svg width="100%" viewBox="0 0 99 51" fill="none">
                {/* smile */}
                <path
                    d="M57.7133 46.2284C53.4996 49.6836 47.955 51.3595 42.7575 50.9354C37.5451 50.5665 32.6961 48.0942 29.5896 44.4627C28.6805 43.4002 28.8405 41.8302 29.9467 40.9575C30.9185 40.1909 32.3196 40.2339 33.2567 40.971C38.8952 45.3988 47.1298 43.815 50.4422 39.1834C52.0805 36.8927 55.3418 36.3112 57.7268 37.8848C60.1117 39.4584 60.7172 42.5909 59.0788 44.8817C58.818 45.2465 58.5158 45.5678 58.1832 45.8437L57.7133 46.2284Z"
                    fill={mergedPalette.rightEye}
                />
                {/* right eye */}
                <path
                    d="M94 22.5C94 32.062 86.0453 40 76 40C65.9547 40 58 32.062 58 22.5C58 12.938 65.9547 5 76 5C86.0453 5 94 12.938 94 22.5Z"
                    stroke={mergedPalette.rightEye}
                    strokeWidth="10"
                    id="right-eye"
                />
                {/* left eye */}
                <path
                    d="M26 27.5C26 32.0754 22.0922 36 17 36C11.9078 36 8 32.0754 8 27.5C8 22.9246 11.9078 19 17 19C22.0922 19 26 22.9246 26 27.5Z"
                    stroke={mergedPalette.leftEye}
                    strokeWidth="6"
                    id="left-eye"
                />
            </svg>
        </S.Wrapper>
    );
};
