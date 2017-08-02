/*
 * @Author: xulei
 * @Date:   2017-07-31 23:31:34
 * @Last Modified by:   xulei
 * @Last Modified time: 2017-08-01 15:25:46
 */

'use strict';
require('./index.css');
var _share = require('util/share.js');

// 通用页面头部
var header = {
	init: function() {
		this.bindEvent();

	},
	onload: function() {
		var keyword = _share.getUrlParam('keyword');
		// keyword如果存在，则回填搜索框
		if (keyword) {
			$('#search-input').val(keyword);
		}
	},
	bindEvent: function() {
		var _this = this; // 因为在jquery中this无效
		// 点击搜索按钮以后，做搜索提交操作
		$('#search-btn').click(function() {
			_this.searchSubmit();
		});
		// 输入回车后，做搜索提交
		$('#search-input').keyup(function(e) {
			if (e.keyCode === 13) {
				// keyCode表示按的是哪个键，13表示的是回车键
				_this.searchSubmit();
			}
		});
	},
	// 搜索的提交
	searchSubmit: function() {
		// 取到输入框的keyword,然后传回去
		var keyword = $.trim($('#search-input').val());
		// 如果提交的时候有keyword，正常跳转到list页面
		if (keyword) {
			window.location.href = './list.html?keyword=' + keyword;
		}
		// 如果keyword为空，就直接返回首页 
		else {
			_share.goHome();
		}
	}
}

header.init();