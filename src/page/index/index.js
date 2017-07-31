/*
 * @Author: xulei
 * @Date:   2017-07-27 12:13:50
 * @Last Modified by:   xulei
 * @Last Modified time: 2017-07-31 13:47:24
 */

'use strict';
var _share = require('util/share.js');
var html = '<div>{{data}}</div>';
var data = {
	data: 1233
};
console.log(_share.renderHtml(html, data));