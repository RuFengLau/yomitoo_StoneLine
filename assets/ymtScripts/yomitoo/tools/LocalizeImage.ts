import { LocalizeMgr } from "./LocalizeMgr";

const {ccclass, property, menu} = cc._decorator;

@ccclass
@menu('yomitoo/tools/LocalizeImage')
export default class LocalizeImage extends cc.Component {

    protected start(): void {
        var spr = this.getComponent(cc.Sprite);
        var spName = spr.spriteFrame.name;
        var resourceUrl = `localizeImage/${LocalizeMgr.inst.languageType}/${spName}`;
        // console.log("多语言图片路径:", resourceUrl);
        spr.node.active = false;
        
        cc.resources.load(resourceUrl, cc.SpriteFrame, (err, spriteFrame) =>{
            if(spr && spr.node){
                spr.spriteFrame = spriteFrame;
                spr.node.active = true;
            }
            
        });
    }

    protected onDestroy(): void {
        var spr = this.getComponent(cc.Sprite);
        cc.assetManager.releaseAsset(spr.spriteFrame)
    }

}