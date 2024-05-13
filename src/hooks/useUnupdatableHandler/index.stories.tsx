/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { useUnupdatableHandler } from '.';
import { useCallback, useEffect, useState } from 'react';

const meta: Meta = {
    title: 'hooks/useUnupdatableHandler',
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
    render: () => {
        const [, setFlag] = useState(false);
        const triggerRerander = useCallback(() => setFlag((flag) => !flag), []);

        const updatableHandler = action('updatable');
        useEffect(() => {
            // срабатывает при каждом ререндере
            updatableHandler();
        }, [updatableHandler]);

        const unupdatableHandler = useUnupdatableHandler(action('unupdatable'));
        useEffect(() => {
            // срабатывает один раз при первом рендере
            unupdatableHandler();
        }, [unupdatableHandler]);

        return (
            <div>
                <button onClick={triggerRerander}>trigger rerander</button>
            </div>
        );
    },
};
