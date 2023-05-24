import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
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
    plugins: [resolve(), commonjs()],
    input: 'src/vconsole.js',
    output: {
      file: 'dist/vconsole.js',
      format: 'iife',
    },
  },
];

export default config;
