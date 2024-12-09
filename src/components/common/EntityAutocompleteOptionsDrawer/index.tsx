import React, { ReactNode, useCallback, MouseEvent } from 'react';
import * as S from './styles';
import { Drawer } from '../Drawer';
import { Scrollbar } from '../Scrollbar';
import { Skeleton } from '../Skeleton';
import { useComponentPalette } from '../../../palette';
import { TEntityAutocompleteOptionsDrawerPalette } from './palette';

const loadingList = new Array(4).fill(Skeleton);

type TOption<TEntity> = { value: string; entity: TEntity };

export type TProps<TEntity> = {
    isOpen: boolean;
    onClose: () => void;
    options: Array<TOption<TEntity>>;
    renderOption: (option: TOption<TEntity>) => ReactNode;
    onChange: (value: string, option?: TOption<TEntity>) => void;
    isLoadingOptions: boolean;
    promptMessage: string;
    searchInputField: ReactNode;
};

export const EntityAutocompleteOptionsDrawer = <TEntity,>({
    isOpen,
    onClose,
    options,
    renderOption,
    onChange,
    isLoadingOptions,
    promptMessage,
    searchInputField,
}: TProps<TEntity>) => {
    const palette = useComponentPalette<TEntityAutocompleteOptionsDrawerPalette>(
        'entityAutocompleteOptionsDrawer',
    );

    const handleSelect = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const optionIndex = JSON.parse(event.currentTarget.dataset.index as string) as number;
            const option = options[optionIndex];
            onChange(option.value, option);
            onClose();
        },
        [onClose, onChange, options],
    );

    return (
        <Drawer isOpen={isOpen} onClose={onClose} isPadding={false} initialFocusRef={false}>
            <S.BodyWrapper>
                <S.InputWrapper>{searchInputField}</S.InputWrapper>
                <S.ContentWrapper>
                    <Scrollbar maxHeight={380}>
                        {promptMessage && (
                            <S.Prompt $color={palette.prompt} variant="bodyMRegular">
                                {promptMessage}
                            </S.Prompt>
                        )}
                        {isLoadingOptions && (
                            <S.SkeletonListWrapper>
                                {loadingList.map((ComponentSkeleton, index) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <ComponentSkeleton key={index} height="64px" />
                                ))}
                            </S.SkeletonListWrapper>
                        )}
                        {!isLoadingOptions &&
                            !promptMessage &&
                            options.map((option, index) => (
                                <S.OptionWrapper
                                    // eslint-disable-next-line react/no-array-index-key
                                    key={`${option.value}${index}`}
                                    tabIndex={-1}
                                    type="button"
                                    onClick={handleSelect}
                                    data-index={JSON.stringify(index)}
                                >
                                    {renderOption(option)}
                                </S.OptionWrapper>
                            ))}
                    </Scrollbar>
                </S.ContentWrapper>
            </S.BodyWrapper>
        </Drawer>
    );
};
