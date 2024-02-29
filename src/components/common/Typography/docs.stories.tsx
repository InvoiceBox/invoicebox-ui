import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '.';
import Markdown from 'markdown-to-jsx';

const meta = {
    title: 'common/Typography',
} satisfies Meta<typeof Typography>;

export default meta;

export const Installation: StoryObj = {
    render: () => (
        <Typography variant="bodyL">
            <Markdown>
                {`
### Подключение шрифтов

Чтобы подключить необходимые шрифты в проект, используйте компонент \`TypographyGlobalStyle\`. 
Компонент должен вызываться один раз. Элемент должен находиться в дереве все время, 
поэтому целесообразно его расположить на самом верхнем уровне. Например в корневом компоненте, 
который, как правило, называется \`App\`.

\`\`\`ts
<TypographyGlobalStyle />
\`\`\`
`}
            </Markdown>
        </Typography>
    ),
};
