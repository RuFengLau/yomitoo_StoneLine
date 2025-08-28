import { LocalizeMgr } from "./LocalizeMgr";

const {ccclass, property, menu} = cc._decorator;

@ccclass
@menu('yomitoo/tools/LocalizeLabel')
export default class LocalizeLabel extends cc.Component {

    @property(String)
    public repaceStr:string = "";

    protected onLoad(): void {
        var label:any = this.getComponent(cc.Label);
        if(label == null){
            label = this.getComponent(cc.RichText);
        }
        if(label == null) return;
        label.node.active = false;
        if(label){
            if(this.repaceStr != ""){
                label.string = LocalizeMgr.inst.toLocalize(label.string, [this.repaceStr]);
            }else{
                label.string = LocalizeMgr.inst.toLocalize(label.string);
            }
            
            label.node.active = true;
        }
    }
}