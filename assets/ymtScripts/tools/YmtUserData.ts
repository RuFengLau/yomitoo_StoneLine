import BaseUserData from "./base/BaseUserData";
import YmtUtils from "./YmtUtils";

export default class YmtUserData extends BaseUserData {
    static selectLevel = 1;

    static set gads(count: number) {
        YmtUtils.setItem('gads', count);
    }

    static get gads() {
        return YmtUtils.getItem('gads', 0);
    }

    static set deviceid(id: string) {
        YmtUtils.setItem('deviceid', id);
    }

    static get deviceid() {
        return YmtUtils.getItem('deviceid', null);
    }

    static set glv(lv: number) {
        YmtUtils.setItem('glv', lv);
    }

    static get glv() {
        return YmtUtils.getItem('glv', 0);
    }

    static set gtime(time: number) {
        YmtUtils.setItem('gtime', time);
    }

    static get gtime() {
        return YmtUtils.getItem('gtime', 0);
    }
}