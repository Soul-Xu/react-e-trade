/*
 * @Author: xulei
 * @Date:   2017-07-29 22:09:32
 * @Last Modified by:   xulei
 * @Last Modified time: 2017-07-30 02:10:21
 */

'use strict';
var conf = {
	serverHost: '' // 接口地址和当前地址是一样的，所以设置为空
};
var _share = { // 将所有参数封装在一起
	// 网络请求
	request: function(param) {
		var _this = this; // 缓存_share对象
		$.ajax({
			type: param.method || 'get',
			url: param.url || '',
			dataType: param.type || 'json',
			data: param.data || '',
			success: function(res) {
				// 请求成功
				if (0 === res.status) {
					typeof param.success === 'function' && param.success(res.data, res.msg);
				}
				// 没有登录状态，需要强制登录
				else if (10 === res.status) {
					_this.doLogin(); // 没有登录的时候，直接跳转到登录页面
				}
				// 请求数据错误
				else if (1 === res.status) {
					typeof param.error === 'function' && param.error(res.msg);
				}
			},
			error: function(err) {
				typeof param.error === 'function' && param.error(err.statusTest);
			}
		});
	},
	// 获取服务器地址
	// 将这个方法提取出来的原因：如果serverHost发送改变，只需要在path中改变一次
	// 另外在请求中加入统计参数，也会方便一些
	getServerUrl: function(path) {
		return conf.serverHost + path;
	},
	// 获取url参数
	// name表示需要哪个参数
	getUrlParam: function(name) {
		// 原理：如果给定happmail.com/product/list?keyword=xxx&page=1
		// 如果是想获取上面url的keyword参数,该如何处理？
		// 1.先把后面的参数（keyword）截取出来，把前面没用的过滤掉
		// 2.将获取到的参数（格式是固定的：键值对），用&隔开，匹配到name，将value值提取出来
		// 3.利用正则表达式的方式来完成
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		// 正则表达式的内容：匹配key=value
		// 开头可能是空或者&符号，加上name还有参数字符串，非&符号表示如果不是&符号就不结束，匹配多个，
		// 一直到以&或字符串的末尾结束
		var result = window.location.search.substr(1).match(reg);
		// search就是url中问号里的参数
		return result ? decodeUrlComponent(result[2]) : null;
		// decodeUrlComponent解码，因为之前被编码过，result[2]传回的就是value的值
	},
	// 统一登录处理
	doLogin: function() {
		// 给login一个参数告诉它从哪跳转过来的，之后还要跳转回去（redirect部分）,
		// window.location.href为当前页面的路径，这样可能会出现问题，因为如果这里面有特殊字符的话，
		// 路径在传的时候可能会被截断，以及其他问题。所以要将它编码encodeURIComponent(),这样比较安全
		window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
	}
};