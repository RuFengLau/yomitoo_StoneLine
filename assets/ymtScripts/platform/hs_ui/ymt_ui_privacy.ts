import { privacy_type } from "../../tools/ad/ymt_enum";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ymt_ui_privacy extends cc.Component {

    @property(cc.Node)
    bg = null;

    @property(cc.ScrollView)
    textArea:cc.ScrollView = null;

    @property(cc.ToggleContainer)
    toggleContainer:cc.ToggleContainer = null;

    @property(cc.Node)
    loading = null;

    private tabType: privacy_type = null;
    private privacyCon = null;

    show(type = privacy_type.user) {
        if (this.node.parent) return;
        this.tabType = type;

        cc.director.getScene().addChild(this.node);

        this.on_show();
    }

    hide() {
        this.node.destroy();
    }

    start() {
        this.node.zIndex = cc.macro.MAX_ZINDEX;
        this.loading.active = true;
        cc.loader.loadRes('hs_cfg/privacy', cc.JsonAsset, (err, json)=>{
            this.loading.active = false;
            if (err) {
                return;
            }
            this.privacyCon = json.json;
            this.change_tab(this.tabType);
        });
    }
    
    
    on_show(): void {
        this.set_frame_roi();

        this.change_tab(this.tabType);
    }

    set_frame_roi() {
        if (cc.winSize.width <= cc.winSize.height) {
            this.bg.width = 521;
            this.bg.height = 717;
        } else {
            this.bg.width = cc.winSize.width * 0.7;
            this.bg.height = cc.winSize.height * 0.7;
            const h = cc.winSize.height * 0.15;
            const widget = this.bg.getComponent(cc.Widget) as cc.Widget;
            widget.verticalCenter = h <= 200 ? h - 200 : 0;
            widget.updateAlignment();
        }
    }

    on_change_tab(event, type) {
        if(this.tabType != type){
            this.change_tab(type);
        }
        
    }

    change_tab(type?) {
        this.tabType = type;

        for (let item of this.toggleContainer.toggleItems) {
            if (item.name.indexOf(type) >= 0) {
                item.check();
            }
        }

        if (this.privacyCon) {
            
            let label = this.textArea.content.getComponent(cc.Label);
            if (this.privacyCon.hasOwnProperty(this.tabType)) {
                label.string = this.privacyCon[this.tabType];
            } else {
                label.string = '';
            }
            this.textArea.scrollTo(cc.v2(0, 1), 0);
        }
    }

    onDisable(): void {
    }
}