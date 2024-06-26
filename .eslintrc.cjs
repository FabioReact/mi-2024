module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', '@typescript-eslint', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-unused-vars': ['error', { args: 'none' }],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
  },
};
