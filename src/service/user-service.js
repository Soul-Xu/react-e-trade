/*
 * @Author: xulei
 * @Date:   2017-08-01 00:43:10
 * @Last Modified by:   xulei
 * @Last Modified time: 2017-08-01 01:07:46
 */

'use strict';
var _share = require('util/share.js');
var _user = {
	// 检查登录状态
	checkLogin: function(resolve, reject) {
		// 服务器请求，即ajax请求
		// 封装service的好处，抹平前端需求和后端接口的差异
		_share.request({
			url: _share.getServerUrl('/user/get_user_info.do'),
			method: 'POST',
			success: resolve,
			error: reject
		})
	},
	// 登出
	// resolve和reject为promise的写法
	logout: function(resolve, reject) {
		// 服务器请求，即ajax请求
		_share.request({
			url: _share.getServerUrl('/user/logout.do'),
			method: 'POST',
			success: resolve,
			error: reject
		})
	}
};

module.exports = _user;