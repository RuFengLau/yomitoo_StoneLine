export enum ad_native_type {
    /**原生Banner */
    banner,
    /**原生大图 */
    inner_interstitial,
    /**原生插屏 */
    interstitial,  
    /**原生ICON */
    native_icon,  
}

export enum ad_native_state {
    none = 0,   //没有数据
    need_show = 1,//需要展示
    show = 2,   //上报过曝光  
    click = 3,   //上报过点击  
}

export enum PLATFORM {
    MI,
    OPPO,
    VIVO,
    CSJ
}

export enum privacy_type {
    user = 'user',
    privacy = 'privacy'
}
