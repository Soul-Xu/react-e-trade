/*
 * @Author: xulei
 * @Date:   2017-07-27 12:13:50
 * @Last Modified by:   xulei
 * @Last Modified time: 2017-08-02 02:02:08
 */

'use strict';
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _share = require('util/share.js');

// 应该传入对象
navSide.init({
	name: 'order-list'
});