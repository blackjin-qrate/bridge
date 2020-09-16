const goToPlayStore = function() {
// 	location.replace('http://play.google.com/store/apps/details?id=kr.qrate.ziggam');
	location.href = "http://play.google.com/store/apps/details?id=kr.qrate.ziggam";
	//window.location.replace('market://details?id=kr.qrate.ziggam');
};

const goToAppStore = function() {
// 	location.replace('itms-apps://itunes.apple.com/kr/app/id1450398047');
	location.href = "itms-apps://itunes.apple.com/kr/app/id1450398047";
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
	var visitedAt = (new Date()).getTime();	// 방문 시간
	var osChk = mo_chk();
	
	var params = window.location.search.substr(window.location.search.indexOf("?") + 1);
	
	//window.location.replace('ziggam://eventcorplist?bnrSn=20200914298')
	var callUrl = "ziggam://eventcorplist?" + params;
// 	location.href = callUrl
	
	if (osChk != "pc") {
		if (osChk == "ios") {
			setTimeout( function() {
				if ((new Date()).getTime() - visitedAt < 2000) {
					goToAppStore();
				}
			}, 500);
// 			setTimeout(goToAppStore, 2500);
			
			setTimeout( function() {
				location.href = callUrl;
			}, 0);
		}
		else {
			location.href = "Intent://" + callUrl + "#Intent;scheme=ziggam;package=kr.qrate.ziggam;end"
// 			setTimeout(goToPlayStore, 500);
		}
	}
};

openApp();
