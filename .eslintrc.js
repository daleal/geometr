module.exports = {
  root: true,
  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    '@vue/typescript/recommended',
  ],
  plugins: ['import', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', 'test'],
      },
      alias: {
        map: [
          ['@', './src'],
        ],
      },
      typescript: {
        project: './',
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
};
