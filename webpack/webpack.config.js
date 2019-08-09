const path = require('path');
const htmlPlugins = require('./plugins/html-plugins');
const webpack = require('webpack');

module.exports = {
    mode: 'none',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/'
    },
    resolveLoader: {
        modules: ['node_modules', './loader/']
    },
    module: {
        rules: [{
            test: /\.json1$/,
            use: 'json1-loader'
        }, {
            test: /\.json$/,
            use: 'json-loader'
        }]
    },
    plugins: [
        new htmlPlugins({
            title: '测试',
            path: '',
            fileName: 'index.html',
        })
    ]
}