

import GameSys from "../../tools/game_sys/GameSys";
import YmtLog from "../../tools/YmtLog";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FirstLoad extends cc.Component {

    @property
    sceneName: string = 'Default';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        GameSys.initGame(()=>{
            YmtLog.i("LoadScene========================", this.sceneName)
            cc.director.loadScene(this.sceneName);
        });
    }

    // update (dt) {}
}
