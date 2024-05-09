import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {languageOptions: {globals: {...globals.browser, ...globals.node}}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'valid-jsdoc': 'off',
      'max-len': ['error', {code: 120}],
    },
  },
];
