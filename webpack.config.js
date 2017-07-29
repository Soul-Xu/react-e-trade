/*
 * @Author: xulei
 * @Date:   2017-07-27 17:21:09
 * @Last Modified by:   xulei
 * @Last Modified time: 2017-07-28 15:37:37
 */

'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name) {
		return {
			template: './src/view/' + name + '.html',
			filename: 'view/' + name + '.html',
			inject: true,
			hash: true,
			chunks: ['common', name]
		}
	}
	// webpack config
var config = {
	entry: {
		'common': ['./src/page/common/index.js'],
		'index': ['./src/page/index/index.js'],
		'login': ['./src/page/login/index.js'],
	},
	output: {
		path: './dist',
		filename: 'js/[name].js'
	},
	externals: {
		'jquery': 'window.jQuery'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
			test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,
			loader: 'url-loader?limit=100&name=resouce/[name].[ext]'
		}]
	},
	plugins: [
		// 独立通用模块js/base.js
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'js/base.js'
		}),
		// css单独打包到文件中
		new ExtractTextPlugin("css/[name].css"),
		// html模版处理
		new HtmlWebpackPlugin(getHtmlConfig('index')),
		new HtmlWebpackPlugin(getHtmlConfig('login')),
	]
}

module.exports = config;