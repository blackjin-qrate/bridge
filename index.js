const goToPlayStore = function() {
	window.location.replace('http://play.google.com/store/apps/details?id=kr.qrate.ziggam');
	//window.location.replace('market://details?id=kr.qrate.ziggam');
};

const goToAppStore = function() {
	window.location.replace('itms-apps://itunes.apple.com/kr/app/id1450398047');
};

function mo_chk() {
	var os;
	var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));	 

	if (mobile) {
		var userAgent = navigator.userAgent.toLowerCase();
		if (userAgent.search("android") > -1) {
			return os = "android";
		}
		else if ((userAgent.search("iphone") > -1) || (userAgent.search("ipod") > -1) || (userAgent.search("ipad") > -1)) {
			return os = "ios";
		}
		else {
			return os = "otehr";
		}

	}
	else {
		return os = "pc";
	}
}

const openApp = function() {
	var osChk = mo_chk();
	
	var params = window.location.search.substr(window.location.search.indexOf("?") + 1);
	
<!--	window.location.replace('ziggam://eventcorplist?bnrSn=20200914298')	-->
	window.location.replace('ziggam://eventcorplist?' + params)
	
	if (osChk != "pc") {
		if (osChk == "ios") {
			setTimeout(goToAppStore, 500);
		}
		else {
			setTimeout(goToPlayStore, 500);
		}
	}
};

openApp();
