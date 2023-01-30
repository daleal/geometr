module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    '@vue/typescript/recommended',
  ],
  plugins: ['import', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', '.storybook'],
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
    'prefer-destructuring': ['error', { VariableDeclarator: { array: true } }],
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
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-spaced-func': 'off',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],
    'vue/multi-word-component-names': 'off',
  },
};
