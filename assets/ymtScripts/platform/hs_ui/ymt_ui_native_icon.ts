import { ad_native_type } from "../../tools/ad/ymt_enum";
import GameSys from "../../tools/game_sys/GameSys";


const { ccclass, property } = cc._decorator;

@ccclass
export default class ymt_ui_native_icon extends cc.Component {

    @property(cc.Node)
    icon_close: cc.Node = null;

    @property(cc.Node)
    native_node: cc.Node = null;

    @property(cc.Sprite)
    img_icon: cc.Sprite = null;

    @property(cc.Label)
    ad_logo: cc.Label = null;


    /**
     * 原生广告数据
     */
    native_data

    constructor() {
        super()

        this.set_background_on_show()
    }

    on_click_adv() {
        this.report_click();
    }

    on_click_close() {
        
        this.hide();
    }

    /**
    * 广告被点击
    */
    report_click() {
        if (this.native_data) {
            GameSys.Ad().reportAdClick(this.native_data);

            // 自动切换
            this.update_view();
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

    show(parent, native_data) {
        if (this.node && !this.node.parent && parent && native_data) {
            this.native_data = native_data
            this.node.active = false;
            this.node.parent = parent
            this.on_show();
        }
    }

    protected update_view() {
        if (!cc.isValid(this.node) || !this.node.activeInHierarchy) return;
        let native_data = GameSys.Ad().getLocalNativeData(ad_native_type.native_icon);
        if (native_data) {
            this.native_data = native_data;
            this.refresh();
        }
    }

    /**
    * 上报点击后  重新拉取原生数据刷新界面
    */
    report_click_update_view(native_data) {
        if (this.node && this.node.parent) {
            this.native_data = native_data
            this.refresh()
        }
    }

    on_show() {
        this.icon_close.on(cc.Node.EventType.TOUCH_END, this.on_click_close, this)
        this.img_icon.node.on(cc.Node.EventType.TOUCH_END, this.on_click_adv, this)
        this.refresh()
    }

    refresh() {
        this.ad_logo.string = this.native_data.logoTxt || "广告"

        
        this.initAdIcon(this.native_data.imgUrlList[0])
            .then(() => {
                if (cc.isValid(this.node, true)) {
                    this.node.active = true;
                }
            }, () => {
                return this.initAdIcon(this.native_data.iconUrlList[0])
            })
            .then(()=>{
                if (cc.isValid(this.node, true)) {
                    this.node.active = true;
                }
            }, () => {
                this.update_view()
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

    hide() {
        if (this.node && this.node.parent) {
            this.node.parent.removeChild(this.node)
            this.on_hide();
        }
    }

    on_hide() {
        this.icon_close.off(cc.Node.EventType.TOUCH_END, this.on_click_close, this)
        this.img_icon.node.off(cc.Node.EventType.TOUCH_END, this.on_click_adv, this)
    }

    set_default() {
        
    }

    set_background_on_show() {
        let self = this
    }
}
