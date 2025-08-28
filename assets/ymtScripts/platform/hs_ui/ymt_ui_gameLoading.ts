// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ymt_ui_gameLoading extends cc.Component {

    show() {
        cc.director.getScene().addChild(this.node);
    }

    start() {
        this.node.zIndex = cc.macro.MAX_ZINDEX;
    }
}
