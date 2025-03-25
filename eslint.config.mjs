import { defineConfig } from 'eslint';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';

export default defineConfig({
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  languageOptions: {
    globals: globals.browser,
  },
  plugins: {
    js,
    prettier: pluginPrettier,
  },
  rules: {
    'prettier/prettier': ['error'],
  },
  extends: [
    'plugin:prettier/recommended',
    ...js.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginReact.configs.recommended,
  ],
});
