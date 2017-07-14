
const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name]-[chunkhash:8].js',
        chunkFilename: "js/chunk-[name]-[chunkhash:8].js"
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/home.html',
            filename: 'home.html'
        }),
    ]
};

module.exports = webpackConfig;
