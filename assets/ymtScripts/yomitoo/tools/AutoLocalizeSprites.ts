import LocalizeImage from "./LocalizeImage";
import LocalizeLabel from "./LocalizeLabel";
import { LanguageType, LocalizeMgr } from "./LocalizeMgr";

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu('yomitoo/tools/AutoLocalizeSprites')
export default class AutoLocalizeSprites extends cc.Component {

    start() {
        //查找所有图片
        var sprlist = this.node.getComponentsInChildren(cc.Sprite);
        if (sprlist.length > 0 ) {
            for (let index = 0; index < sprlist.length; index++) {
                const sp = sprlist[index];
                if (!sp.getComponent(LocalizeLabel) && sp.spriteFrame && sp.spriteFrame.getTexture && sp.spriteFrame.getTexture().nativeUrl) {
                    var uuid = cc.assetManager.utils.getUuidFromURL(sp.spriteFrame.getTexture().nativeUrl);
                    var resourceUrl = cc.assetManager.resources.getAssetInfo(uuid);
                    //如果图片路径包含localizeImage，则重新加载
                    if (resourceUrl && resourceUrl.path && resourceUrl.path.includes("localizeImage")) {
                        if(sp.getComponent(LocalizeImage) == null){
                            sp.addComponent(LocalizeImage);
                        }
                        
                        // console.log("需要做多语言的Sprite:", sp.name);
                        // LocalizeMgr.inst.toLocalizeImage(sp);
                    }
                }


            }
        }

        var txtList = this.node.getComponentsInChildren(cc.Label);
        if (txtList.length > 0) {
            for (let index = 0; index < txtList.length; index++) {
                const txt = txtList[index];

                if (txt.string.length > 0 && !txt.getComponent(LocalizeLabel)) {
                    if(this.hasChinese(txt.string)){
                        txt.string = LocalizeMgr.inst.toLocalize(txt.string, null, (s) => {
                            // if (s == false) {
                            //     console.log("...............需要做多语言的Label:", `${this.node.name}/${txt.name}`);
                            // }
                            let oldW = txt.node.width;
                            if (oldW > 10) {
                                txt.overflow = cc.Label.Overflow.SHRINK;
                            } else {
                                this.scheduleOnce(() => {
                                    txt.overflow = cc.Label.Overflow.SHRINK;
                                })
                            }
    
                        });
                        
                    }
                    
                }

            }
        }
    }

    protected onDestroy(): void {
        // var sprlist = this.node.getComponentsInChildren(cc.Sprite);
        // for (let index = 0; index < sprlist.length; index++) {
        //     const spr = sprlist[index];
        //     console.log(spr.spriteFrame.name);
        // }
    }

    /**是否包含中文字符 */
    private hasChinese(str: string): boolean {
        return /[\u4E00-\u9FA5]+/g.test(str);
    }
}
