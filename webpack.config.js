var webpack = require("webpack");
var path = require("path");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


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
        new webpack.HotModuleReplacementPlugin()
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
                    {loader: 'css-loader'}
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