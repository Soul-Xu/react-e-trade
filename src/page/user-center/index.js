/*
 * @Author: xulei
 * @Date:   2017-08-07 01:43:17
 * @Last Modified by:   xulei
 * @Last Modified time: 2017-08-07 02:31:23
 */

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _share = require('util/share.js');
var _user = require('service/user-service.js')
var templateIndex = require('./index.string');

// page 逻辑部分
var page = {
	init: function() {
		this.onLoad();
	},
	onLoad: function() {
		// 初始化左侧菜单
		navSide.init({
			name: 'user-center'
		});
		// 加载用户信息
		this.loadInfo();
	},

	loadInfo: function() {
		_user.getUserInfo(function(res) {
			userHtml = _share.renderHtml(templateIndex, res);
			$('.panel-body').html(userHtml);
		}, function(errMsg) {
			_share.errorTips(errMsg);
		});
	}
};
$(function() {
	page.init();
});