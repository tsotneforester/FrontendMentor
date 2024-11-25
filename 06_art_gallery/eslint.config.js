import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      //...js.configs.recommended.rules,
      //...react.configs.recommended.rules,
      //...react.configs['jsx-runtime'].rules,
      //...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-undef': 'warn', // Warn when there are undefined variables
      'spaced-comment': 'off', // Allow comments without consistent spacing
      'no-console': 'off', // Allow console statements
      'consistent-return': 'off', // Don't require consistent returns in functions
      'func-names': 'off', // Allow unnamed functions
      'object-shorthand': 'off', // Allow verbose object definitions
      'no-process-exit': 'off', // Allow process.exit() usage
      'no-param-reassign': 'off', // Allow parameter reassignment
      'no-return-await': 'off', // Allow return await
      'no-underscore-dangle': 'off', // Allow identifiers with underscores
      'class-methods-use-this': 'off', // Don't force class methods to use "this"
      'prefer-destructuring': ['error', { object: true, array: false }],
      'no-unused-vars': ['off', { argsIgnorePattern: 'req|res|next|val|_' }],
    },
  },
];
