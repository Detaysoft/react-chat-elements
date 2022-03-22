let path = require('path')

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactNwbTest',
      externals: {
        react: 'React',
      },
    },
  },
  webpack: {
    extra: {
      entry: './src/index.ts',
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.jsx'],
      },
      module: {
        rules: [{test: /\.tsx$/, loader: 'ts-loader'}],
      },
    },
  },
}