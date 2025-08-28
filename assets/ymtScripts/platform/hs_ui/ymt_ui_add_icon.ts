import GameSys from "../../tools/game_sys/GameSys";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ymt_ui_add_icon extends cc.Component {

    @property(cc.Node)
    btnAddIcon = null;

    @property(cc.Node)
    btnWatchAd = null;
    
    @property(cc.Node)
    innerNative = null;

    onSucc = null;
    onHide = null;

    onLoad () {}

    start () {
        this.node.zIndex = 10000;
    }

    show(on_hide?:()=>void, on_succ?:()=>void) {
        if (this.node.parent == null) {
            cc.director.getScene().addChild(this.node);
        }
        this.onSucc = on_succ;
        this.onHide = on_hide;
    }

    tapAddIcon() {
        GameSys.Ad().addDesktop(()=>{
            this.btnAddIcon.active = false;
            this.onSucc && this.onSucc();
        })
    }

    tapClose() {
        this.node.destroy();
    }

    onDestroy() {
        this.onHide && this.onHide();
    }

    onEnable() {
        this.btnWatchAd.active = false;
        GameSys.Ad().showInterstitialNative(this.innerNative, ()=>{

        }, ()=>{
            this.btnWatchAd.active = true;
        }, ()=>{
            this.btnWatchAd.active = false;
            GameSys.Ad().showBanner();
        })
    }
    
    tapWatchAd() {
        GameSys.Ad().clickNativeInnerInterstitial();
    }
}
