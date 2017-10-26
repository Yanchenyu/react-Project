var webpack = require("webpack");
var path = require("path");
// var cleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: "./index.js",
    output: {
		path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
	},
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
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}