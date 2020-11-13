module.exports = {
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  printWidth: 110,
  arrowParens: 'avoid',
  parser: 'typescript',
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
  ],
};
