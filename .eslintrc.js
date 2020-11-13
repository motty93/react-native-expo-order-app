module.exports = {
  root: true,
  extends: [
    '@react-native-community', // https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme

    'eslint:recommended', // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    'plugin:prettier/recommended', // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'prettier/react',
    'prettier/standard',

    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'prettier/@typescript-eslint',

    'plugin:react-hooks/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: '.',
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-empty-pattern': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-floating-promises': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { 'variables': false }],
  },
}
