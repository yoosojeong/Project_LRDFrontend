/** dev */

const webpack = require('webpack');
const html = require('html-webpack-plugin');
const path = require("path");
const NODE_ENV = process.env.NODE_ENV || 'development';
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const package = require("./package.json");
const plugins = [
    new GenerateJsonPlugin('version.json',
        {
            "version": package.version
        }),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(NODE_ENV),
            VERSION: JSON.stringify(package.version)
        },
    }),
    new html({
        title: 'ideaLRD',
        description: 'use your brain',
        template: './index.html',
        favicon: './favicon.ico'
    }),
];
module.exports = {
    entry: {
        bundle: [
            'babel-polyfill',
            'core-js/es6',
            'raf/polyfill',
            'react-hot-loader/patch',
            './lib/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: `deploy`,
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            'node_modules'
        ]
    },
    devtool: 'source-map',
    devServer: {
        port: 9000,
        inline: true,
        historyApiFallback: true,
        hot: true,
        contentBase: '.',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Request-With, Content-Type, Accept, Key",
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.(css|scss)$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpeg|jpg|svg)$/,
                loader: 'file-loader',
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'file-loader',
            },
        ]
    },
    plugins: plugins
};
