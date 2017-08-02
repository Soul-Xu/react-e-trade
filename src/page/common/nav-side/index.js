/*
 * @Author: xulei
 * @Date:   2017-08-02 01:37:48
 * @Last Modified by:   xulei
 * @Last Modified time: 2017-08-02 02:01:33
 */

'use strict';
require('./index.css');
var _share = require('util/share.js');
var templateIndex = require('./index.string');

// 侧边导航
var navSide = {
	option: {
		name: '',
		navList: [{
			name: 'user-center',
			desc: '个人中心',
			href: './user-center.html'
		}, {
			name: 'order-list',
			desc: '我的订单',
			href: './order-list.html'
		}, {
			name: 'pass-update',
			desc: '修改密码',
			href: './pass-update.html'
		}, {
			name: 'about',
			desc: '关于SoulMall',
			href: './about.html'
		}]
	},
	init: function(option) {
		// 合并选项
		$.extend(this.option, option);
		this.renderNav();
	},
	// 渲染导航菜单
	renderNav: function() {
		// 计算active数据
		for (var i = 0, iLength = this.option.navList.length; i < iLength; i++) {
			if (this.option.navList[i].name === this.option.name) {
				this.option.navList[i].isActive = true;
			}
		};
		// 渲染list数据
		var navHtml = _share.renderHtml(templateIndex, {
			navList: this.option.navList
		});
		// 把html放入容器中
		$('.nav-side').html(navHtml);
	}
}

module.exports = navSide;