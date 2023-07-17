module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
    'plugin:@typescript-eslint/recommended', // Added TypeScript configuration
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser', // Added TypeScript parser
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest', '@typescript-eslint'], // Added TypeScript plugin
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
  },
  overrides: [
    {
      files: ['*.js', '*.ts'], // Include TypeScript files for linting
      excludedFiles: 'babel.config.js',
    },
  ],
};
