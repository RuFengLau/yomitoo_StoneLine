import YmtUserData from "../../tools/YmtUserData";
import YmtConstant from "../../tools/const/YmtConstant";
import GameSys from "../../tools/game_sys/GameSys";


const {ccclass, property} = cc._decorator;

@ccclass
export default class ymt_ui_authorize extends cc.Component {

    private onAgree = null;
    private onRefuse = null;

    show(on_agree?:()=>void, on_refuse?:()=>void) {
        if (this.node.parent) return;
        this.onAgree = on_agree;
        this.onRefuse = on_refuse;

        if (this.is_agree || !GameSys.isShowAuthorize && !GameSys.isShenHe && !GameSys.isShieldArea) {
            this.onAgree && this.onAgree();

            this.destroy();
        } else {
            cc.director.getScene().addChild(this.node);
            this.on_show();
        }
    }

    start() {
        this.node.zIndex = cc.macro.MAX_ZINDEX;
    }

    on_show() {
        
    }

    onOpenPrivace(){
        GameSys.Ad().openPrivaceUrl();
    }

   

    on_agree() {
        this.onAgree && this.onAgree();
        cc.sys.localStorage.setItem(`${YmtUserData.uid}privacy`, this.get_time());
        this.node.destroy();
    }

    on_refuse() {
        // if (GameSys.canPlayWithRefuse) {
        //     this.onAgree && this.onAgree();
        // } else {
        //     this.onRefuse && this.onRefuse();
        //     if (YmtConstant.IS_BYTEDANCE_GAME) {
        //         if (tt != undefined) {
        //             tt.exitMiniProgram({});
        //         }
        //     } else if (YmtConstant.IS_OPPO_GAME || YmtConstant.IS_VIVO_GAME || YmtConstant.IS_HUAWEI_GAME) {
        //         if (qg != undefined) {
        //             // qg.exitApplication({});
        //         }
        //     }else if (YmtConstant.IS_QQ_GAME) {
        //         if (qq != undefined) {
        //             qq.exitMiniProgram({});
        //         }
        //     }
        // }
        if(YmtConstant.IS_GOOGLEPLAY){
            this.onRefuse && this.onRefuse();
            window["android"].ExitGame();
        }
        this.node.destroy();
    }

    get is_agree() {
        let time = cc.sys.localStorage.getItem(`${YmtUserData.uid}privacy`);
        
        if (time == null || time == 'null' || time === '' || time === undefined) {
            time = 0;
        }
        
        return this.get_time() - time < 120 * 24 * 3600 * 1000;
    }

    get_time() {
        return new Date().getTime();
    }
}