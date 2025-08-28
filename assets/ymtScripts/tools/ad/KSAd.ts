import GameSys from "../game_sys/GameSys";
import YmtAdManager, { RECORDER_STATE } from "./YmtAdManager";

export default class KSAd extends YmtAdManager {
    onRecoderStop: any;

    static getInstance(): KSAd {
        if (this.instance == null) {
            this.instance = new KSAd();
        }
        return this.instance;
    }

    initAd() {
        this.initVideo();

        this.initRecorder();
    }

    initVideo() {
        if (GameSys.adInfo.adunit_video == null) return;
        
        this.destroyVideo();
        this.videoAd = ks.createRewardedVideoAd({
            adUnitId: GameSys.adInfo.adunit_video
        });
        
        console.log(this.videoAd);
        
        this.videoAd.onError && this.videoAd.onError(err => {
            console.log("%c[YMT_GAME]video error: " + JSON.stringify(err), "color: red");
        });

        this.videoAd.onClose(res => {
            console.log(res);
            this.recorderResume();
            if (res && res.isEnded || res === undefined) {
                this.videocallback && this.videocallback(true);
            } else {

            }
        });
    }

    showVideo(complete?: (res: boolean) => void) {

        
        if (this.videoAd == null) {
            this.initVideo();
        }

        if (this.videoAd == null) {
            complete && complete(true);
            return;
        }

        this.videocallback = complete;

        this.videoAd.show().then(() => {
            this.recorderPause();
            console.log('视频展示成功');
        }).catch(() => {
            this.createToast('暂无视频，请稍后再试');
        })

    }

    destroyVideo() {
        if (this.videoAd) {
            this.videoAd.destroy();
        }
        this.videoAd = null;
    }

    private initRecorder() {
        this.gameRecorder = ks.getGameRecorder();

        // 设置录屏相关监听
        this.gameRecorder.on('start', () => {
            console.log('录制开始');
            this.gameRecorderState = RECORDER_STATE.START;
        })
  
        // 监听录屏过程中的错误，需根据错误码处理对应逻辑
        this.gameRecorder.on('error', (err) => {
            console.log('录制出错', JSON.stringify(err));
            this.gameRecorderState = RECORDER_STATE.NO;
        })
  
        // stop 事件的回调函数
        this.gameRecorder.on('stop', res => {
            this.gameRecorderState = RECORDER_STATE.STOP;
	    this.videoPath = null;
            if (res && res.videoID) {
                this.videoPath = res.videoID;
                console.log(`录屏停止，录制成功。videoID is ${res.videoID}`)
            } else {
                /****注意：没有videoID时不可展示分享录屏按钮，审核会过此case****/
                /****测试方法：点击右上角"..."按钮打开设置页面，关闭录屏开关，录屏不会产生videoID****/
                // 没有videoID时，可以通过onError回调获取录制失败的原因
                console.log(`录屏停止，录制失败`)
            }
            this.onRecoderStop && this.onRecoderStop(this.videoPath != null);
        })
  
        // pause 事件的回调函数
        this.gameRecorder.on('pause', () => {
            console.log('暂停录制')
            this.gameRecorderState = RECORDER_STATE.PAUSE;
        })
  
        // resume 事件的回调函数
        this.gameRecorder.on('resume', () => {
            console.log('继续录制')
            this.gameRecorderState = RECORDER_STATE.RESUME;
        })
  
        // abort 事件的回调函数，表示录制中的游戏画面已经被舍弃
        this.gameRecorder.on('abort', () => {
            console.log('废弃已录制视频')
        })
    }

    private recorderPause() {
        if (this.gameRecorder && this.gameRecorderState != RECORDER_STATE.NO) {
            this.gameRecorder.pause();
        }
    }
    
    private recorderResume() {
        if (this.gameRecorder && this.gameRecorderState != RECORDER_STATE.NO) {
            this.gameRecorder.resume();
        }
    }

    recorderStart() {
        this.gameRecorder && this.gameRecorder.start();
    }

    recorderStop(on_stop?:(ret)=>void) {
        this.onRecoderStop = on_stop;
        this.gameRecorder && this.gameRecorder.stop();
    }

    shareRecorder(on_succ?:()=>void, on_fail?:()=>void) {
        if (this.gameRecorder == null || this.videoPath == null) return;

        this.gameRecorder.publishVideo({
            video: this.videoPath,
            callback: (error) => {
                if (error != null && error != undefined) {
                    console.log("分享录屏失败: " + JSON.stringify(error));
                    on_fail && on_fail();
                    return;
                }
                console.log("分享录屏成功");
                on_succ && on_succ();
            }
        });
    }
    
    /**判断是否支持添加桌面 */
    hasAddDesktop(can_add?: () => void, has_add?: () => void, on_fail?: () => void) {
        ks.getAPKShortcutInstallStatus(result => {
            console.log('hasAddDesktop', JSON.stringify(result));
            if (result.code === 1) {
                if (!result.installed) {
                    can_add && can_add();
                } else {
                    has_add && has_add();
                }
            } else {
                on_fail && on_fail();
            }
        });
    }

    /**创建桌面图标 */
    addDesktop(on_succ?: () => void, on_fail?: () => void) {
        ks.saveAPKShortcut(result => {
            console.log('addDesktop', JSON.stringify(result));
            if (result.code === 1) {
                on_succ && on_succ();
            } else {
                on_fail && on_fail();
            }
        });
    }
}
