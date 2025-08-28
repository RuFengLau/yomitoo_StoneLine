/**自定义事件 */
export enum CUSTOM_EVENT {
}

/**固定事件 */

export enum EVENT_TYPE {
    /**更新体力 */
    CHANGE_POWER = 'CHANGE_POWER',
    /**更新金币 */
    CHANGE_COIN = 'CHANGE_COIN',
    /**使用新皮肤 */
    CHANGE_SKIN = 'CHANGE_SKIN',
    /**获取新皮肤 */
    GET_NEW_SKIN = 'GET_NEW_SKIN',
    /**显示Banner */
    SHOW_BANNER = 'SHOW_BANNER',
    /**隐藏Banner */
    HIDE_BANNER = 'HIDE_BANNER',
    /**更新Banner高度 */
    CHANGE_BANNER_HEIGHT = 'CHANGE_BANNER_HEIGHT',
    /**视频广告错误 */
    AD_ERROR = 'AD_ERROR',
    /**游戏结束 */
    GAME_OVER = 'GAME_OVER',
    LOAD_SUBPACKAGE_COMPLETE = "LOAD_SUBPACKAGE_COMPLETE",
    LOAD_SUBPACKAGE_PROGRESS = "LOAD_SUBPACKAGE_PROGRESS",

    OPEN_SETTING_VIEW = "OPEN_SETTING_VIEW",
    OPEN_SKIN_VIEW = "OPEN_SKIN_VIEW",
    OPEN_RESULT_VIEW = "OPEN_RESULT_VIEW",
    OPEN_PAUSE_VIEW = "OPEN_PAUSE_VIEW",
    OPEN_GAME_SCENE = "OPEN_GAME_SCENE",
    CLOSE_LOADING_VIEW = "CLOSE_LOADING_VIEW",
    CLOSE_SETTING_VIEW = "CLOSE_SETTING_VIEW",
    CLOSE_SKIN_VIEW = "CLOSE_SKIN_VIEW",
    CLOSE_RESULT_VIEW = "CLOSE_RESULT_VIEW",
    CLOSE_PAUSE_VIEW = "CLOSE_PAUSE_VIEW",
    CLOSE_WATCH_VIDEO = "CLOSE_WATCH_VIDEO",
    SHARE_RECORDER_SUCC = "SHARE_RECORDER_SUCC"
}

export enum AUTO_AD_TYPE {
    NO,
    CLICK,
    INTER,
    VIDEO
}

export enum REWARD_TYPE {
    NO,
    SHARE,
    VIDEO
};

export enum HTTP_TYPE {
    GET = 'GET',
    POST = 'POST'
}

export enum HTTP_ERROR {
    TIME_OUT
}

export enum BANNER_FIXED {
    NO,
    LEFT_TOP,
    TOP_CENTER,
    RIGHT_TOP,
    LEFT_BOTTOM,
    BOTTOM_CENTER,
    RIGHT_BOTTOM
}

export enum e_sdk_type {
    NO,
    HS,
    QL,
    YDHW
}

export enum PLATFORM {
    MI,
    OPPO,
    VIVO,
    CSJ
}