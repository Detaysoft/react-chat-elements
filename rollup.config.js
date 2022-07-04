import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import path from 'path'

export default [
  {
    input: './build/index.js',
    output: [
      {
        file: 'dist/main.js',
        format: 'cjs',
      },
      {
        file: 'dist/main.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
        extract: path.resolve('dist/main.css'),
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      commonjs(),
      external(),
      resolve(),
      terser(),
    ],
  },
]
