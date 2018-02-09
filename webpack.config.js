var path = require('path');
var webpack = require('webpack');
var html = require('html-webpack-plugin');

module.exports = {
    entry: ['./lib/index.js'],
    output: {
        path: path.resolve(__dirname, 'deploy'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'env']
                }
            }
        ]
    },
    devServer:{
        port:9000,
        contentBase: __dirname,
        inline:true
    },
    devtool:'#inline-source-map'
};