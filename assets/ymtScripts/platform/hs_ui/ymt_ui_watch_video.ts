import GameSys from "../../tools/game_sys/GameSys";

const { ccclass, property } = cc._decorator;

@ccclass
export default class hs_ui_watch_video extends cc.Component {
    
    @property(cc.Node)
    btnWatchAd = null;
    
    @property(cc.Node)
    innerNative = null;

    onSucc: () => void;


    start () {
        this.node.zIndex = 10000;
    }

    show(on_succ?:()=>void) {
        if (!cc.isValid(this.node, true) || this.node.parent == null) {
            cc.director.getScene().addChild(this.node);
            this.onSucc = on_succ;
        }
    }

    tapWatchVideo() {
        this.onSucc && this.onSucc();
        this.node.destroy();
    }

    tapClose() {
        this.node.destroy();
    }

    onEnable() {
        this.btnWatchAd.active = false;
        this.btnWatchAd.on(cc.Node.EventType.TOUCH_END, ()=>{
            GameSys.Ad().clickNativeInnerInterstitial();
        }, this);
        GameSys.Ad().showInterstitialNative(this.innerNative, ()=>{

        }, ()=>{
            this.btnWatchAd.active = true;
        }, ()=>{
            this.btnWatchAd.active = false;
            GameSys.Ad().showBanner();
        })
    }
}