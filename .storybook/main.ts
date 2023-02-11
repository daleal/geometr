import type { StorybookConfig } from '@storybook/vue3-vite';

export const title = 'Geometr';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx', '../docs/**/*.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  typescript: {
    check: false,
  },
  docs: {
    autodocs: true,
  },
};

export default config;
