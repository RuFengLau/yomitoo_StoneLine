import GameSys from "../../tools/game_sys/GameSys";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ymt_ui_inner_interstitial extends cc.Component {

    @property(cc.Node)
    copyright: cc.Node = null;
    
    @property(cc.Node)
    compamy: cc.Node = null;

    protected start(): void {
        this.node.zIndex = cc.macro.MAX_ZINDEX;
    }

    show(company = null, copyright = null) {
        cc.director.getScene().addChild(this.node);
        if (company) {
            this.compamy.getComponent(cc.Label).string = `著作权人：${company}`;
        }
        if (copyright) {
            this.copyright.getComponent(cc.Label).string = `软著登记号：${copyright}`;
        }
        
        const show = GameSys.isShenHe || GameSys.isShieldArea || GameSys.showCompany;

        this.copyright.active = show && company;
        this.compamy.active = show && company;
    }
}
