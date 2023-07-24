import type { Preview } from '@storybook/vue3';

import '@/styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: ['docs', ['Installation'], 'components'],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
} satisfies Preview['parameters'];
