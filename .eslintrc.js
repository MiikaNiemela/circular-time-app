module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'no-console': 'warn',
    'prefer-const': 'error',
  },
  extends: '@react-native',
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
