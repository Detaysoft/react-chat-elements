// var webpack = require('webpack')
var path = require('path')
var nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    'react-chat-elements': './build/index',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    libraryTarget: 'commonjs2',
    library: 'ReactChatElements',
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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        include: path.join(__dirname, 'build'),
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  externals: [
    nodeExternals({
      whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
    }),
  ],
  plugins: [new MiniCssExtractPlugin({filename: 'main.css'})],
}
