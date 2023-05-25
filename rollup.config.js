import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

/** @type {(import('rollup').RollupOptions)[]} */
const config = [
  {
    input: 'src/index.js',
    output: [
      {file: 'dist/index.mjs', format: 'esm'},
      {file: 'dist/index.cjs', format: 'cjs'},
    ],
    plugins: [json()],
  },
  {
    plugins: [resolve()],
    input: 'src/resizeObserverPolyfill.js',
    output: {
      file: 'dist/resizeObserverPolyfill.js',
      format: 'iife',
    },
  },
];

export default config;
