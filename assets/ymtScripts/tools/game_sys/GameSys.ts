import BaseGameSys from "./BaseGameSys";
import { globalExtentions } from "../../GlobalExtentions";
export default class GameSys extends BaseGameSys {

    ///////// 游点好玩 /////////
    static switchList = {
        // 游戏内原生广告开关
        YSGG: true,
        // 查看详情按钮开关
        CKXQ: true,
        // 广告进行刷新展示
        adUpdateTime: 25,
        // 开始游戏触发原生广告[a,b], 参数a：当a=0时，此功能关闭，当a=1时，此功能开启。参数b：每隔b关点击【开始游戏】时直接查看原生广告。
        KSYXYS: [1, 1],
        // 按钮延时n秒出现
        btnDelay: 0,
        // 下一关误触[a,b], 参数a：当a=0时，此功能关闭，当a=1时，此功能开启。参数b：每隔b关点击【下一关】时直接查看原生广告。
        XYGYS: [1, 1]
    };

    ///////// 其乐SDK /////////
    static lowerPhoneType = 4;
    static playGameCount = 0;

}