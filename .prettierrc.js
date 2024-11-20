module.exports = {
  // 標準的なPrettier設定
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 80,
  tabWidth: 2,

  // Hugo独自の記法を無視する設定
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
      },
    },
    {
      files: '*.html',
      options: {
        htmlWhitespaceSensitivity: 'ignore',
        embeddedLanguageFormatting: 'off',
      },
    },
  ],

  htmlWhitespaceSensitivity: 'ignore',
  embeddedLanguageFormatting: 'off',
};
