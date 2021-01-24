/* globals process */
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import css from 'rollup-plugin-css-only';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import liveReload from 'rollup-plugin-livereload';
import clear from 'rollup-plugin-clear';

import fs from 'fs';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const plugins = [
  nodeResolve(),
  commonjs({
    include: 'node_modules/**',
  }),
  clear({ targets: ['public/dist'] }),
  image(),
  css({output: 'bundle.css'}),
  babel({ babelHelpers: 'runtime', exclude: 'node_modules/**' }),
  !IS_PRODUCTION &&
  serve({
    open: true,
    port: 8080,
    contentBase: 'public',
  }),
  IS_PRODUCTION && terser(),
  !IS_PRODUCTION && liveReload(),
];

const entries = {
  bundle: './src/index.js',
};
const pages = fs.readdirSync('./src/pages');
pages.forEach(p => {
  const name = p.replace('.js','');
  const entry = `pages/${name}`;
  entries[entry] = `./src/pages/${p}`;
});

export default {
  input: entries,
  output: {
    dir: 'public/dist'
  },
  plugins,
};
