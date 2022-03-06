module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-standard'],
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
};
