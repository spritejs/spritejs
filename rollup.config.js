import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import {string} from 'rollup-plugin-string';
import globals from 'rollup-plugin-node-globals';

const pkg = require('./package.json');

/** @type {import('rollup').RollupOptions} */
const config = {
  input: './src/index',
  output: [
    {
      format: 'es',
      sourcemap: true,
      file: pkg.module,
    },
    {
      format: 'umd',
      name: 'spritejs',
      sourcemap: true,
      file: pkg.main,
    },
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      skipPreflightCheck: true,
      exclude: /node_modules/,
    }),
    json(),
    resolve(),
    commonjs({
      transformMixedEsModules: true,
    }),
    string({
      include: ['**/*.frag', '**/*.vert', '**/*.glsl'],
    }),
    globals({
      process: false,
      buffer: false,
      dirname: false,
      filename: false,
    }),
  ],
};

export default config;
