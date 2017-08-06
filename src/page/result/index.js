/*
 * @Author: Rosen
 * @Date:   2017-05-19 21:52:46
 * @Last Modified by:   xulei
 * @Last Modified time: 2017-08-05 00:01:16
 */

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _share = require('util/share.js');

$(function() {
	var type = _share.getUrlParam('type') || 'default',
		$element = $('.' + type + '-success');
	if (type === 'payment') {
		var orderNumber = _share.getUrlParam('orderNumber'),
			$orderNumber = $element.find('.order-number');
		$orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
	}
	// 显示对应的提示元素
	$element.show();
})