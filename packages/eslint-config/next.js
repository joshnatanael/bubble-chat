const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
    'eslint-config-turbo',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: ['only-warn', '@typescript-eslint', 'testing-library', 'jsx-a11y'],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
  ],
  overrides: [
    {
      env: { 'cypress/globals': true },
      files: [
        'cypress/**/?(*.)+(spec|test).[jt]s?(x)',
        'cypress/support/*',
        'cypress/cypress.config.ts',
        '*.js?(x)',
        '*.ts?(x)',
      ],
      parserOptions: {
        project: ['cypress/tsconfig.json'],
      },
      extends: ['plugin:cypress/recommended'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'no-use-before-define': 'error',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-duplicate-props': [1, { ignoreCase: false }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
      },
    ],
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.tsx',
          '**/*.spec.tsx',
          '**/*.test.ts',
          '**/*.spec.ts',
          '**/*.stories.tsx',
          'jest.setup.js',
          'src/mocks/**/*.ts',
          'cypress.config.ts',
        ],
      },
    ],
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-useless-return': 'off',
    'testing-library/prefer-screen-queries': 'off',
  },
};
