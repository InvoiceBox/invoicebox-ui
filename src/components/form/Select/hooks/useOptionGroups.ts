import { useMemo } from 'react';
import { TGroup, TOption } from '..';

export const useOptionGroups = <TValue>(options: TOption<TValue>[], groups: TGroup[]) => {
    return useMemo(() => {
        const optionsByGroupId = new Map<TGroup['id'] | undefined, TOption<TValue>[]>();

        options.forEach((option) => {
            const item = optionsByGroupId.get(option.groupId);
            if (item) {
                item.push(option);
            } else {
                optionsByGroupId.set(option.groupId, [option]);
            }
        });

        const optionsByGroups: { group: TGroup | null; options: TOption<TValue>[] }[] = groups.map(
            (group) => ({
                group,
                options: optionsByGroupId.get(group.id) || [],
            }),
        );

        optionsByGroups.push({ group: null, options: optionsByGroupId.get(undefined) || [] });

        return optionsByGroups.filter((item) => item.options.length > 0);
    }, [groups, options]);
};
