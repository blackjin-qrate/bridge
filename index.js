const goToPlayStore = function() {
	location.replace('http://play.google.com/store/apps/details?id=kr.qrate.ziggam');
	//window.location.replace('market://details?id=kr.qrate.ziggam');
};

const goToAppStore = function() {
	location.replace('itms-apps://itunes.apple.com/kr/app/id1450398047');
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
	
	//window.location.replace('ziggam://eventcorplist?bnrSn=20200914298')
	var callUrl = "ziggam://eventcorplist?" + params
	
	var clickedAt = +new Date;

	if (osChk != "pc") {
		naverAppCheckTimer = setTimeout(function() {
			if (+new Date - clickedAt < 2000) {
			    if (window.confirm("직감 앱이 설치되어 있지 않습니다.   \n설치페이지로 이동하시겠습니까?")) {
				    if (osChk == "ios") {
						goToAppStore();
					}
					else {
						goToPlayStore();
					}
			    }
			}
		}, 1500);
	
location.replace(callUrl)
		
	}
};

openApp();
