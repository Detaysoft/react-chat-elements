var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        'react-chat-elements': './src/index'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "main.js",
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
                loader: "babel-loader",
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
            },
        ]
    },
    externals: [nodeExternals({
        whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
    })],
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin("main.css"),
    ],
};
