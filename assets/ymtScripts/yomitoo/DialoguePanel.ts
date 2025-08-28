
import YmtConstant from "../tools/const/YmtConstant";
import GameSys from "../tools/game_sys/GameSys";
import { PlatformAdManager } from "./tools/PlatformAdManager";

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu('yomitoo/tools/DialoguePanel')
export default class DialoguePanel extends cc.Component {

    @property({ type: cc.Boolean })
    public canShowBanner: boolean = true;

    @property({ type: cc.Boolean })
    public refeshBanner: boolean = true;

    @property({ type: cc.Boolean })
    public afterCloseShowBanner: boolean = false;

    @property({ type: cc.Boolean })
    public isHideBanner: boolean = true;

    @property({ type: cc.Boolean })
    public isShowInsertAd: boolean = false;

    @property({ type: Number })
    public showInsertCount: number = 1;
    
    @property({ type: Number })
    public showInsertCount_google: number = 1;

    @property({ type: String })
    public type: string = "browse";

    @property({ type: String })
    public key: string = "normal";

    private isBannerHidding = false;

    protected onLoad(): void {
        // let key = "view_" + this.node.name + GameSys.userInfo.openid;
        // localStorage.setItem(key, "1");
    }

    start() {
        
    }

    protected onEnable(): void {
        this.isBannerHidding = false;
        this.scheduleOnce(()=>{
            if(this.canShowBanner == true){
                if(this.refeshBanner){
                    PlatformAdManager.inst.showBanner();
                }
            }else{
                this.isBannerHidding = true;
                PlatformAdManager.inst.hideBanner();
            }
        }, 0.1)

        if (this.isShowInsertAd.valueOf()) {
            let insertCount = this.showInsertCount;
            if(YmtConstant.IS_MI_H5_Game){
                insertCount = this.showInsertCount_google;
            }
            if (insertCount > 0) {
                let key = "view_" + this.node.name + GameSys.userInfo.openid;
                let count = 1;
                if (localStorage.getItem(key)) {
                    count = parseInt(localStorage.getItem(key));
                }
                if (count != 0 && count % insertCount == 0) {
                    PlatformAdManager.inst.showNativeOrInsertAd(this.type, this.key);
                }
                count++;
                localStorage.setItem(key, count.toString())
            } else {
                PlatformAdManager.inst.showNativeOrInsertAd(this.type, this.key);
            }
        }
    }

    protected onDisable(): void {
        if(this.afterCloseShowBanner){
            PlatformAdManager.inst.showBanner();
            return;
        }
        if (this.isHideBanner == true && this.isBannerHidding == false) {
            this.isBannerHidding = true;
            PlatformAdManager.inst.hideBanner();
        }
    }

    protected onDestroy(): void {
        if(this.afterCloseShowBanner){
            PlatformAdManager.inst.showBanner();
            return;
        }
        if (this.isHideBanner == true  && this.isBannerHidding == false) {
            this.isBannerHidding = true;
            PlatformAdManager.inst.hideBanner();
        }
    }

    // update (dt) {}
}
