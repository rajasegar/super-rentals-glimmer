/* globals process */
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import liveReload from 'rollup-plugin-livereload';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const plugins = [
  nodeResolve(),
  commonjs({
    include: 'node_modules/**',
  }),
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
  input: './src/index.js',
  output: {
    file: 'public/dist/bundle.js',
  },
  plugins,
};
