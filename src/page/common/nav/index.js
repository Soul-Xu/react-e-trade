/*
 * @Author: xulei
 * @Date:   2017-07-31 19:40:27
 * @Last Modified by:   xulei
 * @Last Modified time: 2017-08-01 17:17:19
 */

'use strict';
require('./index.css');
var _share = require('util/share.js');
var _user = require('service/user-service.js');
var _cart = require('service/cart-service.js');
// 导航
var nav = {
	init: function() {
		this.bindEvent();
		this.loadUserInfo();
		this.loadCartCount();
		return this; // 支持链式操作，this指向它的调用s
	},
	bindEvent: function() {
		// 登录点击事件
		$('.js-login').click(function() {
			_share.doLogin();
		});
		// 注册点击事件
		$('.js-register').click(function() {
			window.location.href = './register.html';
		});
		// 退出点击事件
		$('.js-logout').click(function() {
			_user.logout(function(res) {
				window.location.reload(); // 重新刷新页面
			}, function(errMsg) {
				_share.errorTigs(errMsg);
			});
		});
	},
	// 加载用户信息
	loadUserInfo: function() {
		_user.checkLogin(function(res) {
			$('.user.not-login').hide().siblings('.user.login').show()
				.find('.username').text(res.username);
		}, function(errMsg) {
			// do nothing
		});
	},
	// 加载购物车信息
	loadCartCount: function() {
		_cart.getCartCount(function(res) {
			$('.nav.cart-count').text(res || 0);
		}, function(errMsg) {
			$('.nav.cart-count').text(0);
		});
	}
}

module.exports = nav.init();