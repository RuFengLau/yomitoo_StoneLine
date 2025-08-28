import YmtUtils from "../../tools/YmtUtils";
import GameSys from "../../tools/game_sys/GameSys";



const {ccclass, property} = cc._decorator;

@ccclass
export default class ymt_ui_click_box extends cc.Component {

    @property(cc.Node)
    title_gxhd: cc.Node = null;
    
    @property(cc.Node)
    title_zjd: cc.Node = null;
    
    @property(cc.Node)
    btn_double: cc.Node = null;
    
    @property(cc.Node)
    btn_get: cc.Node = null;
    
    @property(cc.Node)
    btn_zbx: cc.Node = null;
    
    @property(cc.Node)
    hand: cc.Node = null;
    
    @property(cc.Node)
    proMask: cc.Node = null;
    
    @property(cc.Animation)
    bxAni: cc.Animation = null;
    
    onShow: () => void;
    onGet: (is_double: boolean) => void;
    progress = 0;
    showBanner = false;

    start() {
        this.btn_get.on(cc.Node.EventType.TOUCH_END, this.tapGet, this)
        this.btn_double.on(cc.Node.EventType.TOUCH_END, this.tapDoubleGet, this)
        this.btn_zbx.on(cc.Node.EventType.TOUCH_END, this.tapClickBtn, this)
    }
    
    show(on_show?:()=>void, on_get?:(is_double?: boolean)=>void) {
        if (this.node.parent == null) {
            this.node.parent = cc.director.getScene();
            this.node.zIndex = cc.macro.MAX_ZINDEX - 1;

            this.onShow = on_show;
            this.onGet = on_get;
            this.on_show();
        }
    }

    on_show() {

        GameSys.Ad().hideBanner();

        if (GameSys.isShenHe || GameSys.isShieldArea || GameSys.adInfo.bannerMoveTime <= 0) {
            this.btn_zbx.y = -cc.winSize.height / 2 + 300;
        } else {
            this.btn_zbx.y = -cc.winSize.height / 2 + 100;
        }

        if (cc.winSize.width > cc.winSize.height) {
            this.proMask.parent.angle = -90;
            this.proMask.parent.x = 0;
            this.proMask.parent.y = -150;
        } else {
            this.proMask.parent.angle = 0;
            this.proMask.parent.x = -280;
            this.proMask.parent.y = 0;
        }

        this.setProgress();
        this.onShow && this.onShow();
    }

    tapClickBtn() {
        if (this.progress >= 0.6) {
            this.progress += 0.15;
            this.progress = Math.min(this.progress, 0.95);
            let rd = YmtUtils.randomInt(1, 10)
            if (rd > 5 && !this.showBanner) {
                if (!GameSys.isShenHe && !GameSys.isShieldArea) {
                    GameSys.Ad().showBanner();

                    this.scheduleOnce(() => {
                        this.btn_zbx.y = -cc.winSize.height / 2 + 300;
                    }, GameSys.adInfo.bannerMoveTime)
                }


                this.showBanner = true;
                this.scheduleOnce(() => {
                    this.title_gxhd.active = true;
                    this.btn_double.active = true;
                    this.btn_get.active = true;
                    this.title_zjd.active = false;
                    this.btn_zbx.active = false;
                    this.proMask.parent.active = false;
                }, 1)

            }
        } else {
            this.progress += 0.2;
        }

        this.bxAni.play();

        this.hand.active = false;

        this.setProgress();
    }

    setProgress() {
        if (this.progress > 1) this.progress = 1;
        else if (this.progress < 0) this.progress = 0;
        
        this.proMask.height = 322 * this.progress;
    }
    
    onUpdate() {
        if (this.progress > 0) {
            this.progress -= 0.02;
            this.setProgress();
        }
    }

    tapGet() {
        this.onGet && this.onGet(false);
        this.node.destroy();
    }

    tapDoubleGet() {
        GameSys.Ad().showVideo(ret=>{
            if (ret) {
                this.onGet && this.onGet(true);
                this.node.destroy();
            }
        })
    }
}
