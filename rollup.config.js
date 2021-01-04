/* globals process */
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import css from 'rollup-plugin-css-only';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import liveReload from 'rollup-plugin-livereload';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const plugins = [
  nodeResolve(),
  commonjs({
    include: 'node_modules/**',
  }),
  image(),
  css({output: 'bundle.css'}),
  babel(),
  !IS_PRODUCTION &&
    serve({
      open: true,
      port: 8080,
      contentBase: 'public',
    }),
  IS_PRODUCTION && terser(),
  !IS_PRODUCTION && liveReload(),
];

export default {
  input: { 
    bundle: './src/index.js',
    'pages/Home': './src/pages/Home.js',
    'pages/About': './src/pages/About.js',
    'pages/Contact': './src/pages/Contact.js',
  },
  output: {
    //file: 'public/dist/bundle.js',
    dir: 'public/dist'
  },
  plugins,
};
