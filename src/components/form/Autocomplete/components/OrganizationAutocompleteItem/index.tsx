import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { AutocompleteDefaultOption } from '../AutocompleteDefaultOption';
import { useComponentPalette } from '../../../../../palette';
import { TOrganizationAutocompleteItemPalette } from './palette';

export type TProps = {
    name: string;
    registrationAddress: string;
    vatNumber: string;
    vatNumberLabel: string;
    taxRegistrationReasonCodeLabel: string;
    taxRegistrationReasonCode?: string;
    tags?: Array<ReactNode>;
};

const OrganizationAutocompleteItem: FC<TProps> = ({
    name,
    registrationAddress,
    vatNumber,
    taxRegistrationReasonCode,
    tags,
    vatNumberLabel,
    taxRegistrationReasonCodeLabel,
}) => {
    const palette = useComponentPalette<TOrganizationAutocompleteItemPalette>('organizationAutocompleteItem');

    return (
        <AutocompleteDefaultOption>
            <S.OrganizationWrapper>
                <S.OrganizationName $color={palette.title} variant="bodyMRegular">
                    {name}
                </S.OrganizationName>
                <S.OrganizationDescription $color={palette.description} variant="captionRegular">
                    {registrationAddress}
                </S.OrganizationDescription>
                <S.OrganizationDescription $color={palette.description} variant="captionRegular">
                    <S.OrganizationVatNumber>
                        <S.OrganizationLabel $color={palette.label} variant="captionRegular">
                            {vatNumberLabel}
                        </S.OrganizationLabel>{' '}
                        {vatNumber}
                    </S.OrganizationVatNumber>
                    {taxRegistrationReasonCode && (
                        <>
                            <S.OrganizationLabel $color={palette.label} variant="captionRegular">
                                {taxRegistrationReasonCodeLabel}
                            </S.OrganizationLabel>{' '}
                            {taxRegistrationReasonCode}
                        </>
                    )}
                </S.OrganizationDescription>
                {tags && (
                    <S.OrganizationProperties>
                        {tags.map((feature, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <S.Feature key={index}> {feature} </S.Feature>
                        ))}
                    </S.OrganizationProperties>
                )}
            </S.OrganizationWrapper>
        </AutocompleteDefaultOption>
    );
};

export default OrganizationAutocompleteItem;
