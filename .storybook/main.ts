import type { StorybookConfig } from '@storybook/vue3-vite';

export default {
  stories: ['../src/**/*.stories.tsx', '../docs/**/*.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  typescript: {
    check: false,
  },
  docs: {
    autodocs: true,
  },
} satisfies StorybookConfig;
