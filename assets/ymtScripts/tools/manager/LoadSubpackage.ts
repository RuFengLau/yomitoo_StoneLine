import YmtConstant from "../const/YmtConstant";

export default class LoadSubpackage {
    private packageList = [];
    private loadedList = [];
    private loadTotalCount = 0;
    private mustLoadedCount = 0;
    private static ins: LoadSubpackage;
    private on_progress: (progress: any) => void;
    private on_complete: () => void;

    static init(on_progress?:(progress)=>void, on_complete?:()=>void) {
        if (this.ins == null) {
            this.ins = new LoadSubpackage();
        } else {
            return this.ins;
        }

        this.ins.on_progress = on_progress;
        this.ins.on_complete = on_complete;

        if (YmtConstant.subpackage.length <= 0 || YmtConstant.IS_WEB_GAME || YmtConstant.IS_ANDROID || YmtConstant.IS_IOS) {
            this.ins.on_progress && this.ins.on_progress(1);
            this.ins.on_complete && this.ins.on_complete();
        } else {
            this.ins.sortByPriority();
        }

        return this.ins;
    }

    private sortByPriority() {
        for (let data of YmtConstant.subpackage) {
            if (data.priority >= 5) {
            } else {
                ++this.loadTotalCount;
            }
            this.packageList.push(data);
        }

        this.packageList.sort((a, b) => {
            return a.priority - b.priority;
        });

        this.loadSubpackage();
    }

    private loadSubpackage() {
        let data = this.packageList[0];
        let subTask = null;

        let on_succ = ()=>{
            console.log(`[${data.name}]子包加载成功`);
            this.loadedList.push(data.name);
            if (data.priority < 5) {
                ++this.mustLoadedCount;
                this.on_progress && this.on_progress(Math.min(this.mustLoadedCount / this.loadTotalCount, 1));
                if (this.mustLoadedCount >= this.loadTotalCount) {
                    this.on_complete && this.on_complete();
                }
            }

            this.packageList.splice(0, 1);
            if (this.packageList.length > 0) {
                this.loadSubpackage();
            }
        }

        let on_fail = err => {
            console.log(`[${data.name}]子包加载失败：${JSON.stringify(err)}`);
        }
	
        
        cc.assetManager.loadBundle(data.name, (err: Error, bundle: cc.AssetManager.Bundle)=>{
            if (err) {
                return on_fail(err);
            }
            on_succ();
        })
    }

    isLoaded(name){
        return this.loadedList.indexOf(name || '') > -1;
    }
}