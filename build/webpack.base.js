
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => {

    return {
        entry: path.resolve(__dirname, "../src/index.js"),
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: env ? "[name].[hash:5].js" : "[name].js"
        },
        resolve: {
            alias: {
              assets: path.resolve(__dirname, '../src/assets'),
              components: path.resolve(__dirname, '../src/components')
            }
        },
        externals: {
            react: 'React',
            "react-dom": "ReactDOM"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: "babel-loader"
                },
                {
                    test: /\.less$/,
                    use: [
                        env ? MiniCssExtractPlugin.loader : "style-loader", 
                        "css-loader", 
                        "less-loader",
                        "postcss-loader"
                        
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        env ? MiniCssExtractPlugin.loader : "style-loader", 
                        "css-loader",
                        "postcss-loader"
                    ]
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 1024 * 8
                        }
                    }
                },
                {
                    test: /\.(ttf|eot|woff|woff2|svg)(\?.+)?$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 10 * 1024
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/index.html')
            }),
            new webpack.DefinePlugin({
                PRODUCTION: env,
                GLOBAL_HTTP_CTX: JSON.stringify("/iuap-example")
            }),
            new CopyWebpackPlugin([
                { from: 'static', to: 'static' }
            ]),
            new MiniCssExtractPlugin({
                filename: env ? '[name].[hash:5].css' : '[name].css',
                chunkFilename: env ? '[id].[hash:5].css' : '[id].css',
            })
        ]
    }
}