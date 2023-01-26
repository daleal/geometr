module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  typescript: {
    check: false,
    checkOptions: {}
  },
  docs: {
    autodocs: true
  }
};
