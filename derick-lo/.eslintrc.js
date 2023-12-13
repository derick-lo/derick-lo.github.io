module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    process: 'readonly',
  },
  rules: {
    'prettier/prettier': 'error',
    'react/no-deprecated': 'off',
    'no-unused-vars': 'error',
    'no-var': 'error',
    'arrow-body-style': 'warn',
    quotes: ['error', 'single'],
    'no-console': ['warn', { allow: ['error'] }],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'sort-imports': [
      'error',
      { ignoreCase: false, ignoreDeclarationSort: true },
    ],
  },
};
