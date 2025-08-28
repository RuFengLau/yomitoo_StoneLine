import { EVENT_TYPE } from "../enum/Enum";
import YmtUtils from "../YmtUtils";

export default class BaseUserData {

    /**金币 */
    static set coin(coin: number) {
        YmtUtils.setItem('COIN', coin);
        YmtUtils.emit(EVENT_TYPE.CHANGE_COIN);
    }

    static get coin() {
        return YmtUtils.getItem('COIN', 0);
    }

    /**体力 */
    static set power(power: number) {
        YmtUtils.setItem('POWER', power);
        YmtUtils.emit(EVENT_TYPE.CHANGE_POWER);
    }

    static get power() {
        return YmtUtils.getItem('POWER', 10);
    }

    static set powerTime(time: number) {
        YmtUtils.setItem('POWERTIME', time);
    }

    static get powerTime() {
        return YmtUtils.getItem('POWERTIME', 0);
    }

    /**已完成最大关卡 */
    static set maxLevel(lv: number) {
        YmtUtils.setItem('MAXLEVEL', lv);
    }

    static get maxLevel(): number {
        return YmtUtils.getItem('MAXLEVEL', 0);
    }

    /**签到时间 */
    static set signDay(day: number) {
        YmtUtils.setItem('SIGNDAY', day);
    }

    static get signDay() {
        return YmtUtils.getItem('SIGNDAY', 0);
    }

    /**签到次数 */
    static set signNum(num: number) {
        YmtUtils.setItem('SIGNNUM', num);
    }

    static get signNum() {
        return YmtUtils.getItem('SIGNNUM', 0);
    }

    /**皮肤信息 */
    static set skinInfo(info) {
        YmtUtils.setItem('SKININFO', info);
    }

    static get skinInfo() {
        return YmtUtils.getItem('SKININFO', {});
    }

    /**当前使用皮肤 */
    static set curSkinUsed(type) {
        YmtUtils.setItem('CURSKINUSED', type);
    }

    static get curSkinUsed() {
        return YmtUtils.getItem('CURSKINUSED', null);
    }

    /**背景音乐是否可播放 */
    static set musicPlay(type) {
        YmtUtils.setItem('MUSIC', type);
    }

    static get musicPlay() {
        return YmtUtils.getItem('MUSIC', true);
    }

    /**音效是否可播放 */
    static set soundPlay(type) {
        YmtUtils.setItem('SOUND', type);
    }

    static get soundPlay() {
        return YmtUtils.getItem('SOUND', true);
    }

    /**是否可震动 */
    static set vibrate(type) {
        YmtUtils.setItem('VIBRATE', type);
    }

    static get vibrate() {
        return YmtUtils.getItem('VIBRATE', true);
    }

    /**是否新玩家 */
    static set isNewPlay(newPlay: boolean) {
        YmtUtils.setItem('NEWPLAY', newPlay);
    }

    static get isNewPlay() {
        return YmtUtils.getItem('NEWPLAY', true);
    }

    /**
     * 随机生成用户UUID
     */
    static get uid() {
        let uid = YmtUtils.getItem('UUID', null);
        if (uid == null) {
            let d = new Date().getTime();
            let uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                let r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });

            YmtUtils.setItem('UUID', uid);
        }
        return uid;
    }
}