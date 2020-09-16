const goToPlayStore = function() {
	window.location.replace('http://play.google.com/store/apps/details?id=kr.qrate.ziggam');
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
	
	window.location.replace('ziggam://eventcorplist?bnrSn=20200914298')	
	
	if (osChk != "pc") {
		if (osChk == "ios") {
			setTimeout(goToAppStore, 250);
		}
		else {
			setTimeout(goToPlayStore, 250);
		}
	}
};

openApp();