// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class FixSulotion extends cc.Component {

    onEnable() {
        
        const canvas = this.node.getComponent(cc.Canvas);

        // 获取屏幕宽高比
        let frameSize = cc.view.getFrameSize();
        let aspectRatio = frameSize.width / frameSize.height;

        // 设计分辨率宽高比
        let designResolution = canvas.designResolution;
        let designRatio = designResolution.width / designResolution.height;
console.error("aspectRatio:", aspectRatio)

        // iPhoneX / 超宽屏特殊处理
        if (aspectRatio > 2.0) {
            // 例如 iPhoneX: 1125 / 2436 ≈ 2.16
            canvas.fitWidth = true;
            canvas.fitHeight = false;
            console.log("超宽屏设备，强制使用 fitWidth 适配");
        }else if (aspectRatio == 0.75) {
            // 屏幕比设计分辨率更宽，优先适配高度
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            console.log("aspectRatio == 0.75 使用 fitHeight 适配");
        }
        else if (aspectRatio > designRatio) {
            // 屏幕比设计分辨率更宽，优先适配高度
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            console.log("使用 fitHeight 适配");
        }
        else {
            // 屏幕比设计分辨率更窄，优先适配宽度
            canvas.fitWidth = true;
            canvas.fitHeight = false;
            console.log("使用 fitWidth 适配");
        }

    }

    // update (dt) {}
}
