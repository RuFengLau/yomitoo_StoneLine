import { ad_native_type } from "../../tools/ad/ymt_enum";
import GameSys from "../../tools/game_sys/GameSys";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ymt_ui_inner_interstitial extends cc.Component {

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

    //点击结算原生回调
    click_back: Function = undefined
    //结算原生显示回调
    show_back
    //结算原生隐藏回调
    hide_back

    constructor() {
        super()
    }

    on_click_adv() {
        this.report_click()
    }

    
    has_click_warp = false;
    click_adv_warp() {
        this.report_click();
        this.has_click_warp = true;
    }

    on_click_close() {
        this.hide();
    }

    /**
    * 广告被点击
    */
    report_click() {
        if (this.native_data) {
            this.click_back && this.click_back()
            GameSys.Ad().reportAdClick(this.native_data)
            
            // 自动切换
            this.update_view();
        } else {
        }
    }

    /**
    * 广告被曝光
    */
    report_show() {
        if (this.native_data) {
            GameSys.Ad().reportAdShow(this.native_data)
        } else {
        }
    }

    show(parent, native_data, click_back?: Function, show_back?: Function, hide_back?: Function, is_new_type?: boolean) {
        if (this.node && !this.node.parent) {
            this.native_data = native_data
            this.show_back = show_back || undefined
            this.hide_back = hide_back || undefined
            this.click_back = click_back || undefined

            this.node.active = false;

            this.node.parent = parent

            this.set_default_pos();
            
            this.on_show();
        }
    }

    protected update_view() {
        let native_data = GameSys.Ad().getLocalNativeData(ad_native_type.inner_interstitial);
        if (native_data && cc.isValid(this.node, true) && this.node.activeInHierarchy) {
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
        this.lb_title.string = this.native_data.title || ""
        this.lb_desc.string = this.native_data.desc || ""
        this.ad_logo.string = this.native_data.logoTxt || "广告"

        this.initAdIcon(this.native_data.imgUrlList[0])
        .then(()=>{
            if (cc.isValid(this.node, true)) {
                this.node.active = true;
                this.show_back && this.show_back()
            }
        }, ()=>{
            return this.initAdIcon(this.native_data.iconUrlList[0])
        })
        .then(()=>{
            if (cc.isValid(this.node, true)) {
                this.node.active = true;
                this.show_back && this.show_back()
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

        this.hide_back && this.hide_back()
    }

    set_default_pos() {
        let parent = this.node.parent;
        let x = parent.width * (0.5 - parent.anchorX);
        let y = parent.height * (0.5 - parent.anchorY);
        this.node.position = cc.v3(x, y, 0);
    }

    set_style_pos(x, y) {

    }


    onDisable() {
        this.hide_back && this.hide_back()
	    this.hide_back = null
        this.unschedule(this.update_view);
    }
    
    onDestroy() {
        this.hide_back && this.hide_back()
	    this.hide_back = null
        this.unschedule(this.update_view);
    }
}
