import { LocalizeMgr } from "./yomitoo/tools/LocalizeMgr";

/**
 * 多语言
 */
String.prototype.toLocalize = function (): string {
    let name = String(this);
    return LocalizeMgr.inst.toLocalize(name);
}

/**
 * 时间戳 格式化: 00:00:00
 */
Number.prototype.timeFormat = function (): string {
    let date = this;
    let sec = Math.floor(date / 1000) % 60
    let min = Math.floor(date / 1000 / 60) % 60
    let hour = Math.floor(date / 1000 / 60 / 60)
    return `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

export function globalExtentions() { }
