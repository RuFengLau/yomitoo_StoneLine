
const { ccclass, property } = cc._decorator;

@ccclass
export default class BackgroundFixComponent extends cc.Component {

    private nodeWidth: number = 0;
    private nodeHeight: number = 0;

    onLoad() {
        this.nodeWidth = this.node.width;
        this.nodeHeight = this.node.height;
    }


    start() {
        var t = cc.view.getVisibleSize();
        if (this.nodeWidth / this.node.height < t.width / t.height) {
            this.node.scale = t.width / this.nodeWidth;
        } else {
            this.node.scale = t.height / this.node.height;
        }
    }

    // update (dt) {}
}
