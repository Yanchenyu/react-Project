var webpack = require("webpack");
var path = require("path");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');//帮助打开浏览器


module.exports = {
    entry: "./index.js",
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
            template: 'index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }   // 这里的options表示要带的查询参数，表示打开CSS Modules功能    
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ]
            }
        ]
    },
     output: {
		path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
	}
}