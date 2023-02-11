module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: [
    'stylelint-scss',
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  ignoreFiles: ['./src/styles/generic/_reset.scss'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['after-same-name'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-class-pattern': null,
    'number-max-precision': null,
  },
};
