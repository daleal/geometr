const {
  resolve
} = require('path');
const {
  loadConfigFromFile,
  mergeConfig
} = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  typescript: {
    check: false,
    checkOptions: {}
  },
  async viteFinal(previousConfig) {
    const configResponse = await loadConfigFromFile(
      {},
      resolve(__dirname, '../vite.config.ts'),
    );
    const { config: loadedConfig } = configResponse || { config: {} };
    const config = mergeConfig(previousConfig, loadedConfig);
    config.resolve.dedupe = ['@storybook/client-api'];
    console.log(loadedConfig);
    return config;
  },
  docs: {
    autodocs: true
  }
};
