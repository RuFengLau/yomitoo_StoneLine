import { ad_native_type } from "../../tools/ad/ymt_enum";
import GameSys from "../../tools/game_sys/GameSys";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ymt_ui_banner extends cc.Component {

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

    /**
    * 原生广告数据
    */
    native_data

    /**
     * 是否上报过点击
     */
    is_reprot_click = false
    onShow = null;
    onHide = null;

    constructor() {
        super()
    }

    has_click_warp = false;
    click_adv_warp() {
        this.report_click();
        this.has_click_warp = true;
    }

    show(native_data?, on_show?, on_hide?) {
        this.onShow = on_show;
        this.onHide = on_hide;

        if (this.node && cc.isValid(this.node)) {
            this.node.parent = cc.director.getScene();

            cc.game.addPersistRootNode(this.node);
            this.node.zIndex = cc.macro.MAX_ZINDEX;
            this.node.active = false

        }

        if (cc.isValid(this.node) && !this.node.active) {
            if (cc.winSize.width <= cc.winSize.height) {
                this.node.scale = cc.winSize.width / this.node.width;
            }

            this.set_default_pos()
            this.on_show(native_data)
        }
    }
    
    start() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.on_click_adv, this)
    }

    protected update_view() {
        if (!cc.isValid(this.node) || !this.node.activeInHierarchy) {
            this.hide();
            return;
        }
        let native_data = GameSys.Ad().getLocalNativeData(ad_native_type.banner);
        if (native_data) {
            this.native_data = native_data;
            this.refresh();
        } else {
            this.hide();
        }
    }

    on_show(native_data?) {
        if (native_data) {
            this.native_data = native_data
        } else {
            this.native_data = GameSys.Ad().getLocalNativeData(ad_native_type.banner);
        }

        if (this.native_data) {

            this.is_reprot_click = false

            this.refresh()
        } else {
            this.hide();
        }

    }

    refresh() {
        this.lb_desc.string = this.native_data.desc || ""
        this.lb_title.string = this.native_data.title || ""
        this.ad_logo.string = this.native_data.logoTxt || "广告"

        this.initAdIcon(this.native_data.imgUrlList[0])
            .then(() => {
                if (cc.isValid(this.node, true)) {
                    this.node.active = true;
                    this.onShow && this.onShow();
                }
            }, () => {
                return this.initAdIcon(this.native_data.iconUrlList[0])
            })
            .then(() => {
                if (cc.isValid(this.node, true)) {
                    this.node.active = true;
                    this.onShow && this.onShow();
                }
            }, () => {
                return this.update_view()
            })

        this.report_show()
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
    
    on_click_adv2() {
        this.on_click_adv();
    }


    on_click_adv() {
        if (this.is_reprot_click) {
            return
        }

        this.is_reprot_click = true
        this.report_click()
    }

    on_click_close() {
        this.hide()
    }

    /**
    * 广告被点击
    */
    report_click() {
        if (this.native_data) {
            GameSys.Ad().reportAdClick(this.native_data)

            // 自动切换
            this.update_view()
        }
    }

    /**
    * 广告被曝光
    */
    report_show() {
        if (this.native_data) {
            GameSys.Ad().reportAdShow(this.native_data)
        }
    }

    hide() {
        if (this.node && this.node.active) {
            this.node.active = false
        }
        this.on_hide()
    }

    on_hide() {
        this.onHide && this.onHide();
    }

    set_default_pos() {
        this.node.x = 0
        this.node.y = -cc.winSize.height / 2
    }
    
    onDisable() {
        this.unschedule(this.update_view);
    }

    onDestroy() {
        this.unschedule(this.update_view);
    }

}
