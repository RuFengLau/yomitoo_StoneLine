import { ad_native_type } from "../../tools/ad/ymt_enum";
import GameSys from "../../tools/game_sys/GameSys";


const { ccclass, property } = cc._decorator;

@ccclass
export default class ymt_ui_interstitial extends cc.Component {

    @property(cc.Node)
    icon_close: cc.Node = null;

    @property(cc.Label)
    lb_title: cc.Label = null;

    @property(cc.Label)
    lb_desc: cc.Label = null;

    @property(cc.Label)
    ad_logo: cc.Label = null;

    @property(cc.Sprite)
    img_icon: cc.Sprite = null;

    @property(cc.Node)
    btn_check: cc.Node = null;

    @property(cc.Node)
    easy_click = null;

    @property(cc.Node)
    native_node = null;

    has_easy_click: boolean;

    /**
    * 原生广告数据
    */
    native_data
    show_back: any;
    hide_back: any;

    constructor() {
        super()
    }

    start() {
        
        this.node.zIndex = 10001;
    }


    on_click_adv2() {
        this.easy_click.active = false;
        this.has_easy_click = true;
        this.report_click();
    }

    on_click_adv() {
        this.report_click();
    }

    on_click_close() {
        if (!GameSys.isShenHe && !GameSys.isShieldArea && GameSys.adInfo.closeClickRto >= 0 && Math.random() * 100 <= GameSys.adInfo.closeClickRto && !this.has_easy_click) {
            this.easy_click.active = false;
            this.report_click()
        }
        this.hide();
    }

    /**
    * 广告被点击
    */
    report_click() {
        if (this.native_data) {
            GameSys.Ad().reportAdClick(this.native_data);

            // 自动切换
            let native_data = GameSys.Ad().getLocalNativeData(ad_native_type.interstitial);
            if (native_data && cc.isValid(this.node, true)) {
                this.native_data = native_data;
                this.refresh();
            } else {
                this.hide();
            }
        }
    }

    /**
    * 广告被曝光
    */
    report_show() {
        if (this.native_data) {
            GameSys.Ad().reportAdShow(this.native_data);
        }
    }

    show(native_data, on_show, on_hide) {
        if (this.node && !this.node.parent) {
            this.native_data = native_data
            this.node.active = false;
            this.node.parent = cc.director.getScene()
            this.node.zIndex = 100000

            this.show_back = on_show || undefined
            this.hide_back = on_hide || undefined

            this.on_show()
        }
    }

    on_show() {
        this.native_node.on(cc.Node.EventType.TOUCH_END, this.on_click_adv, this)
        this.icon_close.on(cc.Node.EventType.TOUCH_END, this.on_click_close, this)
        this.img_icon.node.on(cc.Node.EventType.TOUCH_END, this.on_click_adv, this)
        this.btn_check.on(cc.Node.EventType.TOUCH_END, this.on_click_adv, this)
        this.easy_click.on(cc.Node.EventType.TOUCH_END, this.on_click_adv2, this)
        this.set_easy_click_size();

        this.refresh()

    }

    protected update_view() {
        let native_data = GameSys.Ad().getLocalNativeData(ad_native_type.interstitial);
        if (native_data && cc.isValid(this.node, true) && this.node.activeInHierarchy) {
            this.native_data = native_data;
            this.refresh();
        }
    }

    refresh() {
        this.lb_title.string = this.native_data.title || ""
        this.lb_desc.string = this.native_data.desc || ""
        this.ad_logo.string = this.native_data.logoTxt || "广告"

        this.initAdIcon(this.native_data.imgUrlList[0])
            .then(() => {
                if (cc.isValid(this.node, true)) {
                    this.node.active = true;
                    this.show_back && this.show_back()
                }
            }, () => {
                return this.initAdIcon(this.native_data.iconUrlList[0])
            })
            .then(() => {
                if (cc.isValid(this.node, true)) {
                    this.node.active = true;
                    this.show_back && this.show_back()
                }
            }, () => {
                this.update_view()
            })

        this.report_show()
        this.has_easy_click = false;
        this.set_easy_click_size();
    }

    private initAdIcon(url: string) {
        return new Promise((resolve: (value?: any) => void, reject: (reason?: any) => void) => {
            if (url == null || url == undefined) {
                reject();
                return;
            }
            cc.loader.load({
                url: url,
                type: 'png'
            }, (err: Error, tex: cc.Texture2D) => {
                if (!cc.isValid(this.node, true)) return;
                if (err) {
                    return reject();
                }
                this.img_icon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
                resolve();
            });
        })
    }

    hide() {
        if (this.node && this.node.parent) {
            this.node.destroy()
            this.on_hide();
        }
    }

    on_hide() {
        this.native_node.off(cc.Node.EventType.TOUCH_END, this.on_click_adv, this)
        this.icon_close.off(cc.Node.EventType.TOUCH_END, this.on_click_close, this)
        this.img_icon.node.off(cc.Node.EventType.TOUCH_END, this.on_click_adv, this)
        this.btn_check.off(cc.Node.EventType.TOUCH_END, this.on_click_adv, this)
        this.easy_click.off(cc.Node.EventType.TOUCH_END, this.on_click_adv2, this)

        this.hide_back && this.hide_back()
    }

    set_easy_click_size() {
        this.easy_click.active = false;
        if (!GameSys.isShenHe && !GameSys.isShieldArea && GameSys.adInfo.forceClickRto >= 0) {
            if (GameSys.adInfo.forceClickRto <= 30) {
                if (cc.winSize.width > cc.winSize.height) {
                    this.easy_click.height = cc.winSize.height;
                    this.easy_click.width = 800;
                } else {
                    this.easy_click.width = cc.winSize.width;
                    this.easy_click.height = 800;
                }
            } else if (GameSys.adInfo.forceClickRto <= 60) {
                if (cc.winSize.width > cc.winSize.height) {
                    this.easy_click.height = cc.winSize.height;
                    this.easy_click.width = 800 + (cc.winSize.width - 800) / 3;
                } else {
                    this.easy_click.width = cc.winSize.width;
                    this.easy_click.height = 800 + (cc.winSize.height - 800) / 3;
                }
            } else {
                this.easy_click.height = cc.winSize.height;
                this.easy_click.width = cc.winSize.width;
            }
            this.easy_click.active = true;
        }
    }

    onDisable() {
        this.hide_back && this.hide_back()
	    this.hide_back = null
    }
    
    onDestroy() {
	    this.hide_back = null
    }
}
