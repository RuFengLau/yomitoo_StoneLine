
export class LanguageData {
    public _id: string = "";
    public key: string = "";
    public en_us: string = "";
    public id: string = "";
    public th: string = "";
    public pt_br: string = "";
    public ar: string = "";
}

/**
 * LanguageType
 */
export enum LanguageType {
    /**中文*/cn = "cn",
    /**印地语(印度)*/hi = "hi",
    /**英语*/en_us = "en_us",
    /**印尼语*/id = "id",
    /**泰语*/th = "th",
    /**越南语*/vi = "vi",
    /**葡语*/pt_br = "pt_br",
    /**阿拉伯*/ar = "ar",
    /**俄罗斯*/ru = "ru"
}

export class LocalizeMgr {
    /**改变语言 */
    public static onChangeLanguageEvent: string = "onChangeLanguageEvent";

    private static _inst: LocalizeMgr;
    public static get inst(): LocalizeMgr {
        if (this._inst == null) {
            this._inst = new LocalizeMgr();
        }
        return this._inst;
    }

    public languageType: LanguageType = LanguageType.cn;
    private m_data: Array<LanguageData> = new Array<LanguageData>();

    public get data(): Array<LanguageData> {
        return this.m_data;
    }

    public set data(d: Array<LanguageData>) {
        this.m_data = d;
    }

    public async loadDatas(path: string) {
        // Laya.URL.customFormat = (url: String) => {
        //     if (url.includes("localizeImage")) {
        //         return url.replace("cn", this.languageType);
        //     }
        //     return url;
        // };
        return new Promise<boolean>((resolve, reject) => {
            cc["resources"].load(path, (err, assets) => {
                if (err) {
                    console.log("加载失败:", path);
                    resolve(false);
                }

                if (assets instanceof cc.JsonAsset) {
                    this.data = assets.json["MutiLanguageConfigs"];
                    resolve(true);
                } else {
                    resolve(false);
                }

            });
        });
    }


    public toLocalizeImage(spr: cc.Sprite, callback ?:()=>void) {
        let oldActive = spr.node.active;
        var spName = spr.spriteFrame.name;
        var resourceUrl = `localizeImage/${LocalizeMgr.inst.languageType}/${spName}`;
        // spr.node.active = false;
        cc.assetManager.resources.load<cc.Texture2D>(resourceUrl, (err, t2d) => {
            spr.spriteFrame = new cc.SpriteFrame(t2d);
            spr.node.active = oldActive;
            callback && callback();
        });
    }

    /**
     * 改变语言
     * @param key 
     */
    public toLocalize(key: string, repaceStrs?: Array<string>, response?:(s:boolean)=>void) {
        var label = key;
        if (label == "") {
            return label;
        }
        if(this.hasChinese(label) == false){
            return label;
        }
        
        var data = this.m_data.find(item => item.key == key);
        if (data == null) {
            console.log("没找到匹配的翻译数据,请检查:", label);
            response && response(false);
            return label;
        }
        if (this.languageType == LanguageType.cn) {
            label = data.key;
        } else {
            label = data[this.languageType.toString()];
        }
        if (label == undefined || label == "") {
            return key;
        }
        if (repaceStrs && repaceStrs.length > 0) {
            for (let index = 0; index < repaceStrs.length; index++) {
                const repaceStr = repaceStrs[index];
                label = label.replace(`{${index}}`, repaceStr);
            }
        }
        response && response(true);
        console.error("label:", label);
        return label;
    }

    /**是否包含中文字符 */
    private hasChinese(str: string): boolean {
        return /[\u4E00-\u9FA5]+/g.test(str);
    }
}