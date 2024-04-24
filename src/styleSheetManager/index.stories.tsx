import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../components/common/Typography';

const meta: Meta = {
    title: 'styleSheetManagerProvider/StyleSheetManagerProvider',
};

export default meta;

export const Docs: StoryObj = {
    render: () => (
        <Typography variant="bodyL">
            <h1>StyleSheetManagerProvider</h1>
            <div>
                <p>
                    Необходим в тех случаях, когда есть потребность передать в{' '}
                    <code> StyleSheetManager </code> какие-либо атрибуты, например: disableCSSOMInjection
                </p>
                <pre>
                    <code>
                        {'<StyleSheetManagerProvider disableCSSOMInjection={true}> ' +
                            '<YourComponentFromInvoiceboxUi /> ' +
                            '</StyleSheetManagerProvider>'}
                    </code>
                </pre>
            </div>
        </Typography>
    ),
};
