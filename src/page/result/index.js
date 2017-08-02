/*
 * @Author: xulei
 * @Date:   2017-08-02 17:11:10
 * @Last Modified by:   xulei
 * @Last Modified time: 2017-08-02 19:30:06
 */

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _share = require('util/share.js');

$(function() {
	var type = _share.getUrlParam('type') || 'default',
		$element = $('.' + type + '-success');
	// 显示对应的提示元素
	$element.show();
});