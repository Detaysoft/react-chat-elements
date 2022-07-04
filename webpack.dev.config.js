const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: {
    main: path.resolve(__dirname, './example/index.tsx'),
  },
  mode: "development",
  devServer: {
    hot: true,
    port: 8090,
    headers: { "Access-Control-Allow-Origin": "*" },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use:{
            loader: 'html-loader'
        }
    },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.[fullhash].css",
      chunkFilename: "chunks/[id].chunk.[fullhash].css"
    })
  ],
  stats: {
    children: true,
    errorDetails: true
  }
};