import { HTTP_ERROR, HTTP_TYPE } from "../enum/Enum";
import GameSys from "../game_sys/GameSys";

export default class HttpManager {
    static send(url: string, params?: string, httpType?: HTTP_TYPE|string, timeout?: number,  contentType?:string);
    static send(url: string, params?: object, httpType?: HTTP_TYPE|string, timeout?: number,  contentType?:string);

    static send(url: string, params: any = null, httpType: HTTP_TYPE = HTTP_TYPE.GET, timeout: number = 40000, contentType:string = "application/x-www-form-urlencoded; charset=utf-8") {
        
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                   
                    if (xhr.status >= 200 && xhr.status < 400) {
                        try {
                            resolve(JSON.parse(xhr.responseText));
                        } catch (error) {
                            reject(xhr);
                        }
                    } else {
                        reject(xhr);
                    }
                	xhr && xhr.abort && xhr.abort();
                }
            };
            
            xhr.onerror = err => {
                console.log('request error', err);
            };
            
            xhr.ontimeout = () => {
                reject(HTTP_ERROR.TIME_OUT);
                xhr && xhr.abort && xhr.abort();
            }
            if (params && typeof (params) == "object" && !params.length && !Array.isArray(params)) {
                params = JSON.stringify(params);
            }
            if (httpType == HTTP_TYPE.GET && params) {
                url += '?' + params;
                params = null;
            }
            xhr.open(httpType, url, true);
            xhr.timeout = timeout;
            if (httpType == HTTP_TYPE.POST) {
                // xhr.setRequestHeader("Content-Type", 'application/json; charset=utf-8');
                xhr.setRequestHeader("Content-Type", contentType);
                if(GameSys.userInfo.token){
                    xhr.setRequestHeader("Authorization", `Bearer ${GameSys.userInfo.token}`);
                }
                
            }else{
                xhr.setRequestHeader("Content-Type", contentType);
                if(GameSys.userInfo.token){
                    xhr.setRequestHeader("Authorization", `Bearer ${GameSys.userInfo.token}`);
                }
            }
            xhr.send(params);
            console.log(`[YMT_GAME]Request URL:${url}`);
            // console.log(`[YMT_GAME]Request Data:${params}`);
        })
    }
}