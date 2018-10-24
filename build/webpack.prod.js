
const path = require('path')
const webpack = require('webpack')
const common = require('./webpack.base.js')
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = env => {
    return merge(common(env), {
        mode: "production",
        devtool: "cheap-module-source-map",
        plugins: [
            new CleanWebpackPlugin(['dist'], {
                root: path.resolve(__dirname, '../')
            })
        ]
    });
}