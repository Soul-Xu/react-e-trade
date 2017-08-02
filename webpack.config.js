/*
 * @Author: xulei
 * @Date:   2017-07-27 17:21:09
 * @Last Modified by:   xulei
 * @Last Modified time: 2017-08-02 18:30:17
 */

'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 环境变量的配置
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
// 获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name, title) {
		return {
			template: './src/view/' + name + '.html',
			filename: 'view/' + name + '.html',
			title: title,
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
		'result': ['./src/page/result/index.js'],
	},
	output: {
		path: './dist', //存放文件时的路径
		publicPath: '/dist', //访问文件时的路径
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
		}, {
			test: /\.string$/,
			loader: 'html-loader'
		}]
	},
	resolve: {
		alias: {
			node_modules: __dirname + '/node_modules',
			util: __dirname + '/src/util',
			page: __dirname + '/src/page',
			service: __dirname + '/src/service',
			image: __dirname + '/src/image',
		}
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
		new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
		new HtmlWebpackPlugin(getHtmlConfig('login', '用户登录')),
		new HtmlWebpackPlugin(getHtmlConfig('result', '操作结果')),
	]
}
if ('dev' === WEBPACK_ENV) {
	config.entry.common.push('webpack-dev-server/client? http://localhost:8080/');
}

module.exports = config;