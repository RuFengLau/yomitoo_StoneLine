
export default class BaseConstant {

	/**请求地址 */
	static readonly BASE_URL = "https://yomituproject-1316735335.cos.accelerate.myqcloud.com/";

	/**是否原生平台 */
	static readonly IS_IOS = cc.sys.os == cc.sys.OS_IOS && CC_JSB;

	static readonly IS_ANDROID = cc.sys.os == cc.sys.OS_ANDROID && CC_JSB;

	/**微信小游戏 */
	static readonly IS_WECHAT_GAME = (cc.sys.platform == cc.sys.WECHAT_GAME || typeof window['wx'] != 'undefined') && window['tt'] == undefined && typeof window['ks'] == 'undefined';

	/**QQ小游戏 */
	static readonly IS_QQ_GAME = cc.sys.platform == cc.sys.QQ_PLAY || typeof window['qq'] != 'undefined';

	/**OPPO小游戏 */
	static readonly IS_OPPO_GAME = cc.sys.platform == cc.sys.OPPO_GAME || typeof window['qg'] != 'undefined' && window['qg'].getProvider() == 'OPPO';

	/**VIVO小游戏 */
	static readonly IS_VIVO_GAME = cc.sys.platform == cc.sys.VIVO_GAME || typeof window['qg'] != 'undefined' && window['qg'].getProvider() == 'vivo';

	/**百度小游戏 */
	static readonly IS_BAIDU_GAME = cc.sys.platform == cc.sys.BAIDU_GAME || typeof window['swan'] != 'undefined';

	/**字节小游戏 */
	static readonly IS_BYTEDANCE_GAME = cc.sys.platform == cc.sys.BYTEDANCE_GAME || typeof window['tt'] != 'undefined';

	/**华为小游戏 */
	static readonly IS_HUAWEI_GAME = cc.sys.platform == cc.sys.HUAWEI_GAME || typeof window['hbs'] != 'undefined';

	/**魅族小游戏 */
	static readonly IS_MEIZU_GAME = typeof window['mz_jsb'] != 'undefined';

	/**UC小游戏 */
	static readonly IS_UC_GAME = typeof window['uc'] != 'undefined';

	/**快手小游戏 */
	static readonly IS_KS_GAME = typeof window['ks'] != 'undefined';

	/**Hago游戏 */
	static readonly IS_HG_GAME = typeof window['hg'] != 'undefined';

	/**小米国内游戏 */
	static readonly IS_XM_G426_Game = typeof window['xmG426'] != 'undefined';

	/**小米 */
	static readonly IS_MI_H5_Game = typeof window['mih5game'] != 'undefined';

	/**传音游戏 */
	static readonly IS_HIPPOOBOX_Game = typeof window['hippoobox'] != 'undefined';

	/**传音miniplay */
	static readonly IS_CYMiniplay_Game = typeof window['CYMiniplay'] != 'undefined';

	/**GooglePlay */
	static readonly IS_GOOGLEPLAY = typeof window['GooglePlay'] != 'undefined';

	/**rustore 俄罗斯渠道 */
	static readonly IS_RUSTORE_ANDROID = typeof window['rustore'] != 'undefined';

	/**Y8游戏 */
	static readonly IS_Y8_GAME = typeof window['Y8Game'] != 'undefined';

	/**UGGame游戏 */
	static readonly IS_UG_GAME = typeof window['UGGame'] != 'undefined';

	/**GamePix游戏 */
	static readonly IS_GamePix_GAME = typeof window['GamePixAd'] != 'undefined';

	static readonly IS_VidMate_GAME = typeof window['vidmateGame'] != 'undefined';

	static readonly IS_Jolibox_Game = typeof window['joliboxSdk'] != "undefined";

	static get IS_WEB_GAME() {
		if (this.IS_IOS || this.IS_ANDROID) return false;
		let ret = true;
		for (let name in this) {
			if (name == 'IS_WEB_GAME') continue;
			if (name.search(/IS_.*?_GAME$/i) >= 0) {
				ret = ret && !this[name];
			}
			if (!ret) return ret;
		}
		return ret;
	}

	static get PLATFORM_CODE() {
		return cc.sys.platform;
	}

}
