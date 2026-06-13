const { defineConfig, globalIgnores } = require('eslint/config');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const reactNative = require('eslint-plugin-react-native');

module.exports = defineConfig([
  globalIgnores([
    'dist/*',
    '.expo/*',
    'node_modules/*',
    'coverage/*',
    '.tmp/*',
    'src/shared/components/atoms/**',
    '.rnstorybook/storybook.requires.ts',
  ]),

  expoConfig,

  eslintPluginPrettierRecommended,

  {
    plugins: {
      'react-native': reactNative,
      '@typescript-eslint': typescriptEslint,
    },
    settings: {
      // Use node resolver only — avoids unrs-resolver native binding issues on some Windows npm installs.
      // Run a fresh `npm install` if you want full `import/*` TypeScript resolution from eslint-config-expo.
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'],
        },
      },
    },
    rules: {
      'import/no-unresolved': 'off',
      'import/named': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      'import/export': 'off',
      'import/no-duplicates': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',

      'no-console': ['warn', { allow: ['warn', 'error'] }],

      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-no-useless-fragment': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      'react-native/no-inline-styles': 'warn',
    },
  },
]);
