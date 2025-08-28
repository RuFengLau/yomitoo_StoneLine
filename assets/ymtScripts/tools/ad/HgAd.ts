

import { TJ } from "../TJ";
import YmtLog from "../YmtLog";
import { HTTP_TYPE } from "../enum/Enum";
import GameSys from "../game_sys/GameSys";
import HttpManager from "../http/HttpManager";
import YmtAdManager from "./YmtAdManager";

export default class HgAd extends YmtAdManager {
    static getInstance(): HgAd {
        if (this.instance == null) {
            this.instance = new HgAd();
        }
        return this.instance;
    }

    //一些功能配置
    /**是否有支付功能 */
    public hasPaySys(){
        return false;
    }

    /**是否排行榜 */
    public hasRankSys(){
        return true;
    }

    private baseURL: string = "https://api.yomitoo.com";
    private appId: string = "shouhujiayuan";

    initAd() {
        if (this.isInitAd) return;

        this.isInitAd = true;
        super.initAd();
        this.initBanner();
        this.initVideo();
    }


    login(on_succ?: (res) => void, on_fail?: (err) => void) {
        if(this.isServer == false){
            //单机版本
            hg.getUserInfo({
                success: (res) => {
                    // var userInfo = res.userInfo
                    // var nickName = userInfo.nickName  // 昵称
                    // var avatarUrl = userInfo.avatarUrl // 头像 ,分辨率为75x75
                    // var gender = userInfo.gender //性别 0：女，1：男
                    // var openid = userInfo.openid
                    //用户openid，SDK>= 291，仅在安全性没要求的情况下使用，安全校验请使用服务端code2Session接口
                    //可能含有+=等符号，如果做http请求参数，需要urlEncode 
                    on_succ && on_succ(res);
                }
            })
        }else{

            hg.login({
                success: async (loginRes) => {
                    let sysInfo = hg.getSystemInfoSync();
                    let country = encodeURIComponent(sysInfo.countryCode);
                    console.error("获取系统国家:", country)
                    let loginApi = "/open/login/loginByCode";
                    let url = `${this.baseURL}${loginApi}`;
                    let code = loginRes.code;
                    let param = `appId=${this.appId}&countryCode=${country}&code=${encodeURIComponent(code)}&openid=""`;
                    await HttpManager.send(url, param, HTTP_TYPE.POST).then(ret => {
                        hg.getUserInfo({
                            success: async (getUserInfoRes) => {
                                getUserInfoRes.token = ret.data.token;
                                getUserInfoRes.userId = ret.data.userId;
                                on_succ && on_succ(getUserInfoRes);
                                cc.game.on(cc.game.EVENT_HIDE, () => {
                                    // this.saveRemoteData(app.saveMgr.getAllAutoSaveData())
                                }, this)
                            }
                        })
                    }).catch(err => {
                        YmtLog.e("login err:", err);
    
                    });
    
                }
            })
        }
        
    }




    //#region Banner AD
    initBanner() { }

    showBanner() {
        if (hg.showBannerAd) {
            hg.showBannerAd({
                // adUnitId: GameSys.adInfo.adunit_banner,
                adUnitId: 11458,
                callback: function (res) {
                    console.log("res", JSON.stringify(res))
                }
            })
        }
    }

    hideBanner() {
        if (hg.hideBannerAd) {
            hg.hideBannerAd({
                adUnitId: 11458
            });
        }
    }

    destroyBanner() { }
    //#endregion

    //#region 激励视频
    initVideo() {
        this.videoAd = hg.createRewardedVideoAd({
            adUnitId: 11456
        });

        //res.isEnded == true的时候，用户观看完整广告并已经关闭广告窗口
        this.videoAd.onClose = (res) => {
            if (res && res.isEnded) {
                console.log('激励视频完成');
                this.videocallback && this.videocallback(true);
            } else {
                this.videocallback && this.videocallback(false);
            }
        }

        //中途关闭广告或者拉去广告失败。
        this.videoAd.onError = () => {
            console.log('hg.rewardedVideoAd.onError');
            this.canShowRewardAd = true;
            this.videocallback && this.videocallback(false);
        }
        // if(this.videoAd.cancel) this.videoAd.cancel() //用户选择不看广告，sdkVersion >= 3400, 客户端版本大于3.5.0 才能使用。
    }

    private canShowRewardAd = true;
    private rewardAdDelay = 10000;
    showVideo(complete?: (res: boolean) => void) {
        if (this.videoAd == null) this.initVideo();
        if (this.videoAd == null) return;
        if (this.canShowRewardAd == false) return;

        this.videocallback = complete;

        this.videoAd.show().then(function () {
            console.log('Success hg.rewardedVideoAd.show');
            this.canShowRewardAd = false;
            cc.director.getScheduler().schedule(() => {
                this.canShowRewardAd = true;
            }, this, this.rewardAdDelay);
        }).catch(() => {

        })
    }

    destroyVideo() { }
    //#endregion

    private canShowInterstitialAd = true;
    private interstitialAdDelay = 30000;
    /**普通插屏 */
    showInterstitial(on_show?: () => void, on_close?: () => void, forceShow: boolean = false) {
        if (this.canShowInterstitialAd == false && forceShow == false) {
            console.log("30秒内不能播放插屏======")
            return;
        }
        if (hg.interstitialAdShow) {
            hg.interstitialAdShow({
                adUnitId: 11457,
                callback: function (res) {
                    console.log("res", JSON.stringify(res))
                }
            });
        }
        this.canShowInterstitialAd = false;
        setTimeout(() => {
            console.log("可以播放插屏了!!!!!!!!!!!!!!!======")
            this.canShowInterstitialAd = true;
        }, this.interstitialAdDelay);
    }

    destroyNormalInter() {
        if (this.interAd) {
            this.interAd.destroy();
        }
        this.interAd = null;
    }

    /**
     * 原生插屏
     * @param on_show 成功展示回调 
     * @param on_hide 隐藏回调
     * @param on_fail 
     * @returns 
     */
    showNativeInterstitial(on_show?: () => void, on_hide?: () => void, delay_time = 0, type?: string, key?: string, forceShow: boolean = false) {
        this.showInterstitial(on_show, on_hide, forceShow);
    }

    hideNativeInterstitial() {
        super.hideNativeInterstitial();
        this.destroyNormalInter();
    }

    //type 需要上报的排行榜类型, 0-总榜；1-日榜
    //bigFirst 是否分数最大的排最前 bool
    //score 分数
    //name 排行榜标识，用于区分多个排行榜，如果只有一个可以不填

    setRank(obj) {

        let bigFirst = obj.bigFirst ? obj.bigFirst : true;
        let rankName = obj.rankName ? obj.rankName : "世界排行";
        // console.log("设置排行:", obj, rankName);
        hg.setRank({
            score: obj.score,
            bigFirst: bigFirst,
            type: obj.type?obj.type:0,
            name: rankName,
            success: () => {
                console.log("hg.reportRank success");
                if(obj.success){
                    obj.success(); 
                }
            },
            fail: () => {
                console.log("hg.reportRank fail")
            }
        })

    }

    // obj.type
    // obj.rankName
    // obj.success
    // obj.fail;
    async getRank(obj): Promise<any> {
        return new Promise((resolve) => {
            let rankName = obj.rankName ? obj.rankName : "世界排行";
            let ctype = obj.type ? obj.type : 0
            console.log("获得排行:", rankName);
            if (hg.getRank) {
                hg.getRank({
                    type: ctype,
                    page: 1,
                    size: 100,
                    name: rankName,
                    success: (res) => {
                        res.name = rankName;
                        console.log("hg.reportRank success", res);
                        resolve(res);
                    },
                    fail: () => {
                        console.log("hg.reportRank fail")
                        obj.fail && obj.fail();
                        resolve(null);
                    }
                });
            }else{
                resolve(null);
            }
        });
        //type 需要上报的排行榜类型, 0-总榜；1-日榜
        //page 默认1，第几页
        //size 默认20，一页的数量
        //name 排行榜标识，用于区分多个排行榜，如果只有一个可以不填
        

    }

    async getAIUser(count:number = 10): Promise<any> {
        return new Promise((resolve) => {
            hg.getAIUser({
                num: count,
                success: function (res) {
                    // console.log(JSON.stringify(res));//[{"openid":"1347677778", sex:1, "nickname":"wangtao", "avatarUrl":"https://o-id.ihago.net/uurl/101001294_1538984332.jpg"}]
                    resolve(res);
                },
                fail: function () {
                    console.log('fail');
                    resolve({});
                }
            })
        });

    }

    public async setUserCloudStorage(key: string, data: string) {
        // hg.setUserCloudStorage({
        //     KVDataList: [{
        //         key: key,
        //         value: data //只支持字符串
        //     }],
        //     success: function (res) {
        //         // console.log("Success: " + JSON.stringify(res));
        //     },
        //     fail: function () {
        //         console.error("[YMT]setUserCloudStorage fail");
        //     }
        // })
    }

    public async getUserCloudStorage(key: string): Promise<any> {
        return new Promise((resolve) => {
            hg.getUserCloudStorage({
                keyList: [key],
                success: function (res) {
                    if(res.length > 0){
                        resolve(res[0].value);
                    }else{
                        resolve(null);
                    }
                    
                },
                fail: function () {
                    resolve(null);
                }
            })
        });

    }

    async saveRemoteData(data: string) {
        let api = "/app/updateUserData/updateUserData";
        let url = `${this.baseURL}${api}`;
        //gameData 游戏数据JSON字符串
        //gameId
        //version 版本号 整形
        let ver = TJ.PlayerPrefs.GetInt(`${this.appId}_remoteSaveVer_` + GameSys.userInfo.openid, 0);
        ver++;
        TJ.PlayerPrefs.SetInt(`${this.appId}_remoteSaveVer_` + GameSys.userInfo.openid, ver);
        let param = `gameId=${this.appId}&gameData=${data}&version=${ver}`;
        await HttpManager.send(url, param, HTTP_TYPE.POST).then(ret => {
            // console.warn("保存数据成功!!!", ret);

        }).catch((err) => {
            console.error("保存数据错误!!!", err);
            // return Promise.resolve(false);
        })
    }

    async loadRemoteData(): Promise<any> {
        let ver = TJ.PlayerPrefs.GetInt(`maomimeishijie_remoteSaveVer_` + GameSys.userInfo.openid, 0);
        console.error("数据版本号：", ver);
        if (ver == 0) {
            //如果本地ver为0，就先读取网络看看是否有数据
            let api = "/app/updateUserData/getUserData";
            let url = `${this.baseURL}${api}`;
            let param = `gameId=${this.appId}`;
            await HttpManager.send(url, param, HTTP_TYPE.POST).then(ret => {
                let remoteData = JSON.parse(ret.data.gameData);
                // 最近的一次存档时间 ret.data.createdAt
                TJ.PlayerPrefs.SetInt(`${this.appId}_remoteSaveVer_` + GameSys.userInfo.openid, ret.data.version);
                return Promise.resolve(true)
            }).catch((err) => {
                YmtLog.i("远程数据错误!!!", err);
                return Promise.resolve(false);
            })
        } else {
            return Promise.resolve(false);
        }

    }

    async payItem(item): Promise<number> {
        return new Promise(resolve => {
            YmtLog.w("购买物品", item);
            this.showGameLoading();
            //向服务器创建订单号
            let api = "/app/order/createOrder";
            let url = `${this.baseURL}${api}`;
            let payInfo = {
                itemId: item.itemId,
                subject: `${encodeURIComponent(item.subject)}`
            }
            let info333 = {
                itemId: item.itemId,
            }
            this.sendEvent("pay_createorder", JSON.stringify(info333));
            HttpManager.send(url, payInfo, HTTP_TYPE.POST, 15000, "application/json; charset=utf-8").then(ret => {
                hg.requestPayment({
                    item_id: item.itemId,
                    transaction_id: ret.data.orderNo,
                    subject: item.subject,
                    success: async () => {
                        // 支付成功
                        YmtLog.w("支付成功!!!! 保存数据");
                        let info = {
                            itemId: item.itemId,
                            orderNo: ret.data.orderNo,
                        }
                        this.sendEvent("pay_complete", JSON.stringify(info));
                        this.hideGameLoading();
                        resolve(0);
                        setTimeout(() => {
                            // this.saveRemoteData(JSON.stringify(app.local.user));
                        }, 2000);

                    },
                    fail: (res) => {
                        // 支付取消-失败
                        YmtLog.w("支付取消-失败", res.errMsg, res.errCode);
                        let info2 = {
                            itemId: item.itemId,
                            orderNo: ret.data.orderNo,
                            errmsg: res.errMsg,
                            errCode: res.errCode
                        }
                        this.sendEvent("pay_cancelOrfail", JSON.stringify(info2));
                        this.hideGameLoading();
                        resolve(res.errCode);

                    }
                })

            }).catch((err) => {
                YmtLog.e("创建订单返回错误!!!", err);
                let info = {
                    itemId: item.itemId,
                    errmsg: err
                }
                this.sendEvent("pay_createorder_err", JSON.stringify(info));
                this.hideGameLoading();
                resolve(1000);

            })


        })

    }

    async getPayResult() {
        let api = "/app/order/createOrder";
        let url = `${this.baseURL}${api}`;

        //轮询5次
        this.hideGameLoading();
    }

    sendEvent(key: string, data: string) {
        if(this.isServer == false) return;
        let dataJson = {
            uid: GameSys.userInfo.uid,
            openId: GameSys.userInfo.openid,
            data: data
        }

        YmtLog.w("sendEvent:", key, JSON.stringify(dataJson));
       
    }

    private initRecorder() { }
    private recorderPause() { }
    private recorderResume() { }
    recorderStart() { }
    recorderStop(on_stop?: (ret) => void) { }
    shareRecorder(on_succ?: () => void, on_fail?: () => void) { }
    showGamePortal() { }
    showRecorderLayer(on_succ?: () => void, on_fail?: () => void) { }
    onRecoderStop: (ret) => void;
}
