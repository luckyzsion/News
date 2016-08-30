(function(root, factory) {
	if(typeof module !== 'undefined' && typeof exports === 'object') {
		module.exports = factory(root.Common);
	} else if(typeof define === "function" && define.amd) {
		define(["Common"], function(Common) {
			return(root.Common = factory(Common));
		});
	} else {
		root.Common = factory(root.Common);
	}
}(this, function(Common) {
	Common = {
		version: "1.0.1",
		apikey:{'apikey':'51ac273011d0477ed6a0e81db4518907'},
		domain: "http://www.hltm.tv",
		api: "http://apis.baidu.com/3023/news/channel",
		open: function(id, url, extras) {
			mui.openWindow({
				id: id,
				url: url,
				waiting: {
					autoShow: false
				},
				extras: extras || {}
			});
		},
		showWaiting: function(msg) {
			return plus.nativeUI.showWaiting(msg ? msg : "正在很努力的加载数据", {
				loading: {
					icon: "/images/waiting.png"
				},
				padlock: true
			});
		},
		closeWaiting: function(w) {
			w.close();
		}
	};
	return Common;
}));