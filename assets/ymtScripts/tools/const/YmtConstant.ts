
import { e_sdk_type } from "../enum/Enum";
import BaseConstant from "./BaseConstant";

export default class YmtConstant extends BaseConstant {

	/**
	 * 后台游戏id
	 * 用于请求后台配置
	 */
	static readonly GID = 0;
	/**
	 * 后台游戏名
	 * 用于请求后台配置
	 */
	static readonly PROGECT_NAME = 'stone_line';

	static readonly GAME_VERSION_NAME = '1.0.0';

	/**热云AppKey */
	static readonly APPID = '';

	/**友盟AppKey */
	static readonly YM_APPID = '';

	/**SDK */
	static SDK_TYPE = e_sdk_type.NO;

	/**总关卡数 */
	static readonly TOTAL_LEVEL = 35;

	static readonly SOUND = {
	}
	
	/**
	 * 分包
	 * { name: 'res3d', priority: 0 }
	 * 优先级表示加载顺序，>= 5 表示无需等待加载完成
	*/
	static readonly subpackage = [
	];

	
}