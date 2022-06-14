// var webpack = require('webpack')
var path = require('path')
var nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // entry: {
  //   // 'react-chat-elements': './build/index',
  //   'react-chat-elements': path.resolve(__dirname, './build/index.js'),
  // },
  entry: {
    main: path.resolve(__dirname, './build/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  node: {
    global: false,
  },
  devtool: false,
  stats: {
    colors: true,
    warnings: false,
  },
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'build'),
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  externals: [
    nodeExternals({
      whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
    }),
  ],
  plugins: [new MiniCssExtractPlugin({ filename: 'main.css' })],
}
