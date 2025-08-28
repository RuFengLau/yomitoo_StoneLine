export default class YmtLog {

    private static tag = 'YMT_GAME';
    private static debug = true;

    static setTag(tag:string) {
        this.tag = tag || 'YMT_GAME';
    }

    static setDebug(debug:boolean) {
        this.debug = debug || true;
    }

    static i(...data: any[]) {
        this.debug && console.info(`[${this.tag}]`, ...data);
    }
    
    static e(...data: any[]) {
        this.debug && console.error(`[${this.tag}]`, ...data);
    }

    static l(...data: any[]) {
        this.debug && console.log(`[${this.tag}]`, ...data);
    }

    static d(...data: any[]) {
        this.debug && console.debug(`[${this.tag}]`, ...data);
    }

    static w(...data: any[]) {
        this.debug && console.warn(`[${this.tag}]`, ...data);
    }
}