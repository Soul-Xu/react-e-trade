/*
 * @Author: xulei
 * @Date:   2017-08-01 01:09:31
 * @Last Modified by:   xulei
 * @Last Modified time: 2017-08-01 01:12:54
 */

'use strict';
var _share = require('util/share.js');
var _cart = {
	// 获取购物车数量
	// resolve和reject为promise的写法
	getCartCount: function(resolve, reject) {
		// 服务器请求，即ajax请求
		_share.request({
			url: _share.getServerUrl('/cart/get_cart_product_count.do'),
			success: resolve,
			error: reject
		})
	}
};

module.exports = _cart;