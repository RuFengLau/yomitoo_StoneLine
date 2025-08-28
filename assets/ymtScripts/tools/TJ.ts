import YmtConstant from "./const/YmtConstant";


//1.4.5.2.mini
const CHANNELID = 'TT_AppRt';
export namespace TJ
{

    export class Num 
    {
        protected _value: number;

        public constructor(value: number)
        {
            this._value = value;
        }

        public get value(): number
        {
            return this._value;
        }

        public toString(): string
        {
            return "" + this.value;
        }
    }
    export class Int extends Num
    {
        public get value(): number
        {
            return Math.floor(this._value);
        }

        public get javaSignature(): string
        {
            return "I";
        }
    }
    export class Float extends Num
    {
        public get javaSignature(): string
        {
            return "F";
        }
    }
    export class Bool
    {
        protected _value: boolean;

        public constructor(value: boolean)
        {
            this._value = value;
        }

        public get value(): boolean
        {
            return this._value;
        }

        public toString(): string
        {
            return "" + this.value;
        }

        public get javaSignature(): string
        {
            return "Z";
        }
    }
    export class Str 
    {
        protected _value: string;

        public constructor(value: string)
        {
            this._value = value;
        }

        public get value(): string
        {
            return this._value;
        }

        public toString(): string
        {
            return "" + this.value;
        }

        public get javaSignature(): string
        {
            return "Ljava/lang/String;";
        }
    }
    export class MD5
    {

        private hexcase = 0;   /* hex output format. 0 - lowercase; 1 - uppercase        */
        private b64pad = "";  /* base-64 pad character. "=" for strict RFC compliance   */

        /*
        * These are the privates you'll usually want to call
        * They take string arguments and return either hex or base-64 encoded strings
        */
        public hex_md5(s: string) { return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s))); }//这个函数就行了，
        public b64_md5(s: string) { return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(s))); }
        public any_md5(s: string, e: string) { return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(s)), e); }
        public hex_hmac_md5(k: string, d: string) { return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d))); }
        public b64_hmac_md5(k: string, d: string) { return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d))); }
        public any_hmac_md5(k: string, d: string, e: string) { return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)), e); }

        /*
        * Calculate the MD5 of a raw string
        */
        public rstr_md5(s: string)
        {
            return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8));
        }

        /*
        * Calculate the HMAC-MD5, of a key and some data (raw strings)
        */
        public rstr_hmac_md5(key: string, data: string)
        {
            var bkey = this.rstr2binl(key);
            if (bkey.length > 16) bkey = this.binl_md5(bkey, key.length * 8);

            var ipad = Array(16), opad = Array(16);
            for (var i = 0; i < 16; i++)
            {
                ipad[i] = bkey[i] ^ 0x36363636;
                opad[i] = bkey[i] ^ 0x5C5C5C5C;
            }

            var hash = this.binl_md5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
            return this.binl2rstr(this.binl_md5(opad.concat(hash), 512 + 128));
        }

        /*
        * Convert a raw string to a hex string
        */
        public rstr2hex(input: string)
        {
            try { this.hexcase } catch (e) { this.hexcase = 0; }
            var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            var output = "";
            var x;
            for (var i = 0; i < input.length; i++)
            {
                x = input.charCodeAt(i);
                output += hex_tab.charAt((x >>> 4) & 0x0F)
                    + hex_tab.charAt(x & 0x0F);
            }
            return output;
        }

        /*
        * Convert a raw string to a base-64 string
        */
        public rstr2b64(input: string)
        {
            try { this.b64pad } catch (e) { this.b64pad = ''; }
            var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var output = "";
            var len = input.length;
            for (var i = 0; i < len; i += 3)
            {
                var triplet = (input.charCodeAt(i) << 16)
                    | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0)
                    | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
                for (var j = 0; j < 4; j++)
                {
                    if (i * 8 + j * 6 > input.length * 8) output += this.b64pad;
                    else output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
                }
            }
            return output;
        }

        /*
        * Convert a raw string to an arbitrary string encoding
        */
        public rstr2any(input: string, encoding: string)
        {
            var divisor = encoding.length;
            var i, j, q, x, quotient;

            /* Convert to an array of 16-bit big-endian values, forming the dividend */
            var dividend = Array(Math.ceil(input.length / 2));
            for (i = 0; i < dividend.length; i++)
            {
                dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
            }

            /*
            * Repeatedly perform a long division. The binary array forms the dividend,
            * the length of the encoding is the divisor. Once computed, the quotient
            * forms the dividend for the next step. All remainders are stored for later
            * use.
            */
            var full_length = Math.ceil(input.length * 8 /
                (Math.log(encoding.length) / Math.log(2)));
            var remainders = Array(full_length);
            for (j = 0; j < full_length; j++)
            {
                quotient = Array();
                x = 0;
                for (i = 0; i < dividend.length; i++)
                {
                    x = (x << 16) + dividend[i];
                    q = Math.floor(x / divisor);
                    x -= q * divisor;
                    if (quotient.length > 0 || q > 0)
                        quotient[quotient.length] = q;
                }
                remainders[j] = x;
                dividend = quotient;
            }

            /* Convert the remainders to the output string */
            var output = "";
            for (i = remainders.length - 1; i >= 0; i--)
                output += encoding.charAt(remainders[i]);

            return output;
        }

        /*
        * Encode a string as utf-8.
        * For efficiency, this assumes the input is valid utf-16.
        */
        public str2rstr_utf8(input: string)
        {
            var output = "";
            var i = -1;
            var x, y;

            while (++i < input.length)
            {
                /* Decode utf-16 surrogate pairs */
                x = input.charCodeAt(i);
                y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
                if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF)
                {
                    x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
                    i++;
                }

                /* Encode output as utf-8 */
                if (x <= 0x7F)
                    output += String.fromCharCode(x);
                else if (x <= 0x7FF)
                    output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F),
                        0x80 | (x & 0x3F));
                else if (x <= 0xFFFF)
                    output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
                        0x80 | ((x >>> 6) & 0x3F),
                        0x80 | (x & 0x3F));
                else if (x <= 0x1FFFFF)
                    output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
                        0x80 | ((x >>> 12) & 0x3F),
                        0x80 | ((x >>> 6) & 0x3F),
                        0x80 | (x & 0x3F));
            }
            return output;
        }

        /*
        * Encode a string as utf-16
        */
        public str2rstr_utf16le(input: string)
        {
            var output = "";
            for (var i = 0; i < input.length; i++)
                output += String.fromCharCode(input.charCodeAt(i) & 0xFF,
                    (input.charCodeAt(i) >>> 8) & 0xFF);
            return output;
        }

        public str2rstr_utf16be(input: string)
        {
            var output = "";
            for (var i = 0; i < input.length; i++)
                output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF,
                    input.charCodeAt(i) & 0xFF);
            return output;
        }

        /*
        * Convert a raw string to an array of little-endian words
        * Characters >255 have their high-byte silently ignored.
        */
        public rstr2binl(input: string)
        {
            var output = Array(input.length >> 2);
            for (var i = 0; i < output.length; i++)
                output[i] = 0;
            for (var i = 0; i < input.length * 8; i += 8)
                output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
            return output;
        }

        /*
        * Convert an array of little-endian words to a string
        */
        public binl2rstr(input: number[])
        {
            var output = "";
            for (var i = 0; i < input.length * 32; i += 8)
                output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
            return output;
        }

        /*
        * Calculate the MD5 of an array of little-endian words, and a bit length.
        */
        public binl_md5(x: number[], len: number)
        {
            /* append padding */
            x[len >> 5] |= 0x80 << ((len) % 32);
            x[(((len + 64) >>> 9) << 4) + 14] = len;

            var a = 1732584193;
            var b = -271733879;
            var c = -1732584194;
            var d = 271733878;

            for (var i = 0; i < x.length; i += 16)
            {
                var olda = a;
                var oldb = b;
                var oldc = c;
                var oldd = d;

                a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
                d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
                c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
                b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
                a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
                d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
                c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
                b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
                a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
                d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
                c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
                b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
                a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
                d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
                c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
                b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

                a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
                d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
                c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
                b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
                a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
                d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
                c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
                b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
                a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
                d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
                c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
                b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
                a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
                d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
                c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
                b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

                a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
                d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
                c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
                b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
                a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
                d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
                c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
                b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
                a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
                d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
                c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
                b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
                a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
                d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
                c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
                b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

                a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
                d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
                c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
                b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
                a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
                d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
                c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
                b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
                a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
                d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
                c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
                b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
                a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
                d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
                c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
                b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

                a = this.safe_add(a, olda);
                b = this.safe_add(b, oldb);
                c = this.safe_add(c, oldc);
                d = this.safe_add(d, oldd);
            }
            return [a, b, c, d];
        }

        /*
        * These privates implement the four basic operations the algorithm uses.
        */
        public md5_cmn(q: any, a: any, b: any, x: any, s: any, t: any)
        {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
        }
        public md5_ff(a: any, b: any, c: any, d: any, x: any, s: any, t: any)
        {
            return this.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
        }
        public md5_gg(a: any, b: any, c: any, d: any, x: any, s: any, t: any)
        {
            return this.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
        }
        public md5_hh(a: any, b: any, c: any, d: any, x: any, s: any, t: any)
        {
            return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
        }
        public md5_ii(a: any, b: any, c: any, d: any, x: any, s: any, t: any)
        {
            return this.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
        }

        /*
        * Add integers, wrapping at 2^32. This uses 16-bit operations internally
        * to work around bugs in some JS interpreters.
        */
        public safe_add(x: any, y: any)
        {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        }

        /*
        * Bitwise rotate a 32-bit number to the left.
        */
        public bit_rol(num: any, cnt: any)
        {
            return (num << cnt) | (num >>> (32 - cnt));
        }
    }
    export class Guid
    {
        public static New()
        {
            let date = new Date();
            let str = date.getTime().toString(16);
            while (str.length < 32)
            {
                str += Math.floor(Math.random() * 16).toString(16);
            }
            let md5 = new MD5();
            return md5.hex_md5(str);
        }
    }

    export enum Platform
    {
        Unknown, Android, AppRt, Browser
    }

    export enum Channel
    {
        Unknown, android, oppoQG, vivoQG, wxGame, ttGame, qqGame, ucGame
    }

    export namespace Extern
    {
        export namespace OPPO
        {
            export namespace QG
            {
                declare let qg: any;
                export class CallbackResult
                {
                    code: number;
                    msg: string;
                }
                export class CallbackParam
                {
                    success: (res: CallbackResult) => void;
                    fail: (res: CallbackResult) => void;
                    complete: (res: CallbackResult) => void;
                }
                export class NavigateToMiniGameParam extends CallbackParam
                {
                    pkgName: string;
                }
                export function NavigateToMiniGame(param: NavigateToMiniGameParam)
                {
                    qg.navigateToMiniGame(param);
                }
            }
        }

        export namespace WX
        {
            declare let wx: any;

            class CallbackResult
            {
                errMsg: string;
            }
            class CallbackParam
            {
                success: (res: CallbackResult) => void;
                fail: (res: CallbackResult) => void;
                complete: (res: CallbackResult) => void;
            }

            export class NavigateToMiniProgramParam extends CallbackParam
            {
                appId: string; //要打开的小程序 appId
                path: string; //打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 App.onLaunch、App.onShow 和 Page.onLoad 的回调函数或小游戏的 wx.onShow 回调函数、wx.getLaunchOptionsSync 中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。
                extraData: object; //需要传递给目标小程序的数据，目标小程序可在 App.onLaunch，App.onShow 中获取到这份数据。如果跳转的是小游戏，可以在 wx.onShow、wx.getLaunchOptionsSync 中可以获取到这份数据数据。
                envVersion: "develop" | "trial" | "release" = "release"; //要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
            }
            export function NavigateToMiniProgram(param: NavigateToMiniProgramParam)
            {
                wx.navigateToMiniProgram(param);
            }
        }
    }

    export namespace Web
    {

        export class WWW
        {
            private _form: {} = null;
            private _url: string = null;
            private _promise: Promise<void> = null;
            private _resolve: Function = null
            private _error: string = null;
            private _text: string = null;

            private guid = Guid.New();
            private get logTag()
            {
                return "WWW : " + this.guid + " ->";
            }

            constructor(url: string, form: {} = null)
            {
                this._url = url;
                this._form = form;
                this._promise = new Promise(resolve => { this._resolve = resolve; });
            }

            public logSend = true;

            public get error(): string
            {
                return this._error;
            }
            public logError = true;
            private LogError()
            {
                if (this.logError && this.error != null)
                {
                    console.log(this.logTag, "error -> " + this.error);
                }
            }

            public get text(): string
            {
                return this._text;
            }
            public logText = false;
            private LogText()
            {
                if (this.logText && this.text != null)
                {
                    console.log(this.logTag, "text -> " + this.text);
                }
            }

            public Send(method: "get" | "post" = null, format: "form" | "json" = null)
            {
                if (method == null) method = "get";
                let url = this._url;
                let data: string = null;;
                switch (format)
                {
                    case "form":
                        let keys = Object.keys(this._form);
                        for (let i = 0; i < keys.length; i++)
                        {
                            let key: string = keys[i];
                            if (i == 0)
                            {
                                data = key + "=" + this._form[key];
                            }
                            else
                            {
                                data += "&" + key + "=" + this._form[key];
                            }
                        }
                        break;
                    case "json":
                        data = JSON.stringify(this._form);
                        break;
                }
                switch (method)
                {
                    case "get":
                        if (data != null)
                        {
                            url += "?" + data;
                        }
                        break;
                    case "post":
                        break;
                }
                if (this.logSend) console.log(this.logTag, url, "<" + method + ">", data);
                switch (SystemInfo.channel)
                {
                    default:
                        let xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = () =>
                        {
                            // console.log(this.logTag, "readyState = " + xhr.readyState + "  status = " + xhr.status);
                            if (xhr.readyState == 4)
                            {
                                if (xhr.status == 200)
                                {
                                    this._text = xhr.responseText;
                                }
                                else
                                {
                                    this._error = xhr.status + " - " + xhr.responseText;
                                }
                                this._resolve();
                                this.LogError();
                                this.LogText();
                            }
                        };
                        xhr.open(method, url, true);
                        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                        switch (method)
                        {
                            case "get":
                                xhr.send();
                                break;
                            case "post":
                                xhr.send(data);
                                break;
                        }
                        break;
                }
                return this._promise;
            }

        }

        export namespace ReYun
        {
            let url = "https://log.reyun.com/receive/rest/";

            export let log = true;

            async function Request(api: string, data: {})
            {
                let www = new WWW(url + api, data);
                www.logText = log;
                www.logSend = log;
                await www.Send("post", "json");
            }

            export function Install(appid: string, deviceid: string, channelid: string)
            {
                let data = {};
                let context = {};
                context["deviceid"] = deviceid;
                context["channelid"] = channelid;
                data["appid"] = appid;
                data["context"] = context;
                Request("install", data);
            }

            export function Startup(appid: string, deviceid: string, channelid: string)
            {
                let data = {};
                let context = {};
                context["deviceid"] = deviceid;
                context["channelid"] = channelid;
                data["appid"] = appid;
                data["context"] = context;
                Request("startup", data);
            }

            export function Register(appid: string, deviceid: string, channelid: string, who: string)
            {
                let data = {};
                let context = {};
                context["deviceid"] = deviceid;
                context["channelid"] = channelid;
                data["appid"] = appid;
                data["context"] = context;
                data["who"] = who;
                Request("register", data);
            }

            export function Loggedin(appid: string, deviceid: string, channelid: string, who: string)
            {
                let data = {};
                let context = {};
                context["deviceid"] = deviceid;
                context["channelid"] = channelid;
                data["appid"] = appid;
                data["context"] = context;
                data["who"] = who;
                Request("loggedin", data);
            }

            export function Payment(appid: string, deviceid: string, channelid: string, who: string, currencyAmount: string, currencytype: string, iapamount: string, iapname: string, paymenttype: string, transactionid: string, virtualcoinamount: string)
            {
                let data = {};
                let context = {};
                context["deviceid"] = deviceid;
                context["channelid"] = channelid;
                data["appid"] = appid;
                data["context"] = context;
                data["who"] = who;
                context["currencyAmount"] = currencyAmount;
                context["currencytype"] = currencytype;
                context["iapamount"] = iapamount;
                context["iapname"] = iapname;
                context["paymenttype"] = paymenttype;
                context["transactionid"] = transactionid;
                context["virtualcoinamount"] = virtualcoinamount;
                Request("payment", data);
            }

            export function Economy(appid: string, deviceid: string, channelid: string, who: string, itemamount: string, itemname: string, itemtotalprice: string)
            {
                let data = {};
                let context = {};
                context["deviceid"] = deviceid;
                context["channelid"] = channelid;
                data["appid"] = appid;
                data["context"] = context;
                data["who"] = who;
                context["itemamount"] = itemamount;
                context["itemname"] = itemname;
                context["itemtotalprice"] = itemtotalprice;
                Request("economy", data);
            }

            export function Quest(appid: string, deviceid: string, channelid: string, who: string, questid: string, queststatus: string, questtype: string)
            {
                let data = {};
                let context = {};
                context["deviceid"] = deviceid;
                context["channelid"] = channelid;
                data["appid"] = appid;
                data["context"] = context;
                data["who"] = who;
                context["questid"] = questid;
                context["queststatus"] = queststatus;
                context["questtype"] = questtype;
                Request("quest", data);
            }

            export function Event(appid: string, deviceid: string, channelid: string, who: string, what: string)
            {
                let data = {};
                let context = {};
                context["deviceid"] = deviceid;
                context["channelid"] = channelid;
                data["appid"] = appid;
                data["context"] = context;
                data["who"] = who;
                data["what"] = what;
                Request("event", data);
            }

            export function Heartbeat(appid: string, deviceid: string, channelid: string, who: string)
            {
                let data = {};
                let context = {};
                context["deviceid"] = deviceid;
                context["channelid"] = channelid;
                data["appid"] = appid;
                data["context"] = context;
                data["who"] = who;
                Request("heartbeat", data);
            }
        }
    }

    export namespace DevKit
    {
        export namespace ReYun
        {
            export class Data
            {
                public appid: string;
                public channelid: string;
                public who: string;
                public log = true;
            }

            function GetData()
            {
                let data = new Data();
                data.appid = YmtConstant.APPID;
                data.channelid = CHANNELID;
                data.who = SystemInfo.deviceUniqueIdentifier;
                return data;
            }
                  

            export function Install(data: Data)
            {
                if (data == null) data = GetData();
                Web.ReYun.log = data.log;
                Web.ReYun.Install(data.appid, SystemInfo.deviceUniqueIdentifier, data.channelid);
                
            }
            export function Startup(data: Data)
            {
                if (data == null) data = GetData();
                Web.ReYun.log = data.log;
                Web.ReYun.Startup(data.appid, SystemInfo.deviceUniqueIdentifier, data.channelid);

            }
            export function Register(data: Data)
            {
                if (data == null) data = GetData();
                Web.ReYun.log = data.log;
                Web.ReYun.Register(data.appid, SystemInfo.deviceUniqueIdentifier, data.channelid, data.who);
            }
            export function Loggedin(data: Data)
            {
                if (data == null) data = GetData();
                Web.ReYun.log = data.log;
                Web.ReYun.Loggedin(data.appid, SystemInfo.deviceUniqueIdentifier, data.channelid, data.who);
            }
            export function Payment(data: Data, currencyAmount: string, currencytype: string, iapamount: string, iapname: string, paymenttype: string, transactionid: string, virtualcoinamount: string)
            {
                if (data == null) data = GetData();
                Web.ReYun.log = data.log;
                Web.ReYun.Payment(data.appid, SystemInfo.deviceUniqueIdentifier, data.channelid, data.who, currencyAmount, currencytype, iapamount, iapname, paymenttype, transactionid, virtualcoinamount);
            }
            export function Economy(data: Data, itemamount: string, itemname: string, itemtotalprice: string)
            {
                if (data == null) data = GetData();
                Web.ReYun.log = data.log;
                Web.ReYun.Economy(data.appid, SystemInfo.deviceUniqueIdentifier, data.channelid, data.who, itemamount, itemname, itemtotalprice);
            }
            export function Quest(data: Data, questid: string, queststatus: string, questtype: string)
            {
                if (data == null) data = GetData();
                Web.ReYun.log = data.log;
                Web.ReYun.Quest(data.appid, SystemInfo.deviceUniqueIdentifier, data.channelid, data.who, questid, queststatus, questtype);
            }
            export function Event(data: Data, what: string)
            {
                if (data == null) data = GetData();
                Web.ReYun.log = data.log;
                Web.ReYun.Event(data.appid, SystemInfo.deviceUniqueIdentifier, data.channelid, data.who, what);
            }
            export function Heartbeat(data: Data)
            {
                if (data == null) data = GetData();
                Web.ReYun.log = data.log;
                Web.ReYun.Heartbeat(data.appid, SystemInfo.deviceUniqueIdentifier, data.channelid, data.who);
            }

            setTimeout(() =>
            {
                if (YmtConstant.APPID == null || YmtConstant.APPID.replace(' ', '') == '') return;

                Install(null);
                Startup(null);
                setInterval(() => Heartbeat(null), 1000 * 60 * 5);

                let time = 0;
                let timeEvent = [5, 10, 30, 60, 120];
                for (let i = 1; i <= 12; i++)
                {
                    timeEvent.push(60 * 5 * i);
                }
                setInterval(() =>
                {
                    time += 1;
                    if (timeEvent.length > 0)
                    {
                        if (time >= timeEvent[0])
                        {
                            Event(null, "TimeEvent-" + timeEvent.shift());
                        }
                    }
                }, 1000);
            }, 0);
        }
    }

    class PlayerPrefsData
    {
        value: any = null;
        time: number = 0;
    }
    export class PlayerPrefs
    {

        public static DeleteAll()
        {
            LocalStorage.Clear();
        }

        public static DeleteKey(key: string)
        {
            let keys: string[] = [];
            for (let tag of this.tags)
            {
                keys.push(tag + key);
            }
            for (let key of keys)
            {
                LocalStorage.Set(key, null);
            }
        }

        public static GetString(key: string, defaultValue: string = null): string
        {
            let value = this.Get(this.stringTag + key);
            if (value == null)
            {
                value = defaultValue;
            }
            return value;
        }
        public static SetString(key: string, value: string)
        {
            this.Set(this.stringTag + key, new Str(value).value);
        }

        public static GetFloat(key: string, defaultValue: number = 0): number
        {
            let value = this.Get(this.floatTag + key);
            if (value == null)
            {
                value = defaultValue;
            }
            return value;
        }
        public static SetFloat(key: string, value: number)
        {
            this.Set(this.floatTag + key, new Float(value).value);
        }

        public static GetInt(key: string, defaultValue: number = 0): number
        {
            let value = this.Get(this.intTag + key);
            if (value == null)
            {
                value = defaultValue;
            }
            return value;
        }
        public static SetInt(key: string, value: number)
        {
            this.Set(this.intTag + key, new Int(value).value);
        }

        public static Set(key: string, value: any)
        {
            if (value != null)
            {
                let data = new PlayerPrefsData();
                data.value = value;
                data.time = Date.now();
                let json = JSON.stringify(data);
                LocalStorage.Set(key, json);
            }
            else
            {
                LocalStorage.Set(key, null);
            }
        }
        public static Get(key: string)
        {
            return this.GetRaw(key).value;
        }
        public static GetRaw(key: string)
        {
            let data: PlayerPrefsData = null;
            let json = LocalStorage.Get(key);
            if (json == null || json == '') 
            {
                data = new PlayerPrefsData();
            }
            else
            {
                if (typeof json != 'string' || json.substring(0, 1) != "{") 
                {
                    data = new PlayerPrefsData();
                    data.value = json;
                }
                else
                {
                    data = JSON.parse(json);
                    if (data == null)
                    {
                        data = new PlayerPrefsData();
                        data.value = json;
                    }
                    else
                    {
                        if (data.value == null)
                        {
                            data.value = json;
                        }
                    }
                }
            }
            return data;
        }

        public static HasKey(key: string): boolean
        {
            for (let tag of this.tags)
            {
                if (this.Get(tag + key) != null)
                {
                    return true;
                }
            }
            return false;
        }

        public static get intTag()
        {
            return "int:";
        }
        public static get floatTag()
        {
            return "float:";
        }
        public static get stringTag()
        {
            return "string:";
        }
        public static get tags()
        {
            let tags: string[] = [];
            tags.push(this.intTag);
            tags.push(this.floatTag);
            tags.push(this.stringTag);
            return tags;
        }
        public static get keys()
        {
            let keys: string[] = [];
            for (let key of LocalStorage.keys)
            {
                for (let tag of this.tags)
                {
                    if (key.search(tag) != -1)
                    {
                        keys.push(key);
                    }
                }
            }
            return keys;
        }

    }

    export class LocalStorage
    {
        public static get keys()
        {
            return Object.keys(cc.sys.localStorage);
        }
        public static Get(key: string)
        {
            if (key == null) return null;
            let value = cc.sys.localStorage.getItem(key);
            if (value == '') return null;
            return value;
        }
        public static Set(key: string, value: any)
        {
            if (key != null)
            {
                if (value != null)
                {
                    cc.sys.localStorage.setItem(key, value);
                }
                else
                {
                    cc.sys.localStorage.removeItem(key);
                }
            }
        }
        public static Clear()
        {
            cc.sys.localStorage.clear();
        }
    }

    export class SystemInfo
    {
        public static get deviceUniqueIdentifier()
        {
            let key = "SystemInfo.deviceUniqueIdentifier";
            if (PlayerPrefs.HasKey(key))
            {
                return PlayerPrefs.GetString(key);
            }
            let str = Guid.New();
            PlayerPrefs.SetString(key, str)
            return str;
        }

        public static get windowSize(): { width: number, height: number }
        {
            return cc.winSize;
        }

        public static get platform(): Platform
        {
            switch (this.channel)
            {
                case Channel.android:
                    return Platform.Android;
                case Channel.oppoQG:
                case Channel.vivoQG:
                case Channel.ttGame:
                case Channel.qqGame:
                case Channel.wxGame:
                case Channel.ucGame:
                    return Platform.AppRt;
            }
            return Platform.Unknown;
        }

        public static get channel(): Channel
        {
            if (typeof window['qg'] !== undefined) {
                return Channel.oppoQG;
            } else if (typeof window['wx'] !== undefined) {
                return Channel.wxGame;
            }
            return Channel.Unknown;
        }
    }

}
// window["TJ"] = TJ;
