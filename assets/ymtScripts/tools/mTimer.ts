const enum TIMER_STATE {
    NO,
    START,
    PAUSE,
    RESUME,
    STOP
}
export default class mTimer {
    private _state = TIMER_STATE.NO;
    private timeoutHandler = null;
    private remainTime = 0;
    private intervalTime = 0;
    private repeatCount = 0;
    private remainCount = 0;
    private callback = null;

    private taskStartTime = 0;

    public static loop(callback:()=>void, interval = 0, repeat = 0) {
        let timer = new mTimer();
        timer.run(callback, interval, repeat);
        return timer;
    }

    public static once(callback:()=>void, interval = 0) {
        let timer = new mTimer();
        timer.run(callback, interval, 1);
        return timer;
    }

    public loop(callback:()=>void, interval = 0, repeat = 0) {
        this.run(callback, interval, repeat);
    }

    public once(callback:()=>void, interval = 0) {
        this.run(callback, interval, 1);
    }

    private run(callback:()=>void, interval = 0, repeat = 0) {
        if (interval < 0) interval = 0;
        if (repeat < 0) repeat = 0;

        this.intervalTime = interval;
        this.remainTime = interval;
        this.repeatCount = repeat;
        this.remainCount = repeat;
        this.callback = callback;

        this.setTimeout();
    }

    private setTimeout(callback = null, interval = null) {
        if (callback == null) callback = this.callback;
        if (interval == null) interval = this.intervalTime;
        
        if (this.timeoutHandler) {
            clearTimeout(this.timeoutHandler)
        }
        this.timeoutHandler = null;

        this._state = TIMER_STATE.START;
        this.taskStartTime = (new Date()).getTime();
        this.timeoutHandler = setTimeout(()=>{
            callback && callback();
            
            if (this.repeatCount == 0 || --this.remainCount > 0) {
                this.setTimeout();
            }
        }, interval);
    }

    public pause() {
        if (this._state != TIMER_STATE.START) return console.warn('Timer Not Start');

        this._state = TIMER_STATE.PAUSE;
        this.remainTime = Math.max(this.intervalTime - (new Date()).getTime() - this.taskStartTime, 0);
        if (this.timeoutHandler) {
            clearTimeout(this.timeoutHandler)
        }
        this.timeoutHandler = null;
    }

    public resume() {
        if (this._state != TIMER_STATE.PAUSE) return console.warn('Timer Not Pause');

        this.setTimeout(this.callback, this.remainTime);
    }

    public stop() {
        if (this._state == TIMER_STATE.NO) return console.warn('Timer Not Start');
        else if (this._state == TIMER_STATE.STOP) return console.warn('Timer Has Stop');

        this._state = TIMER_STATE.STOP;
        if (this.timeoutHandler) {
            clearTimeout(this.timeoutHandler)
        }
        this.timeoutHandler = null;
        this.remainTime = 0;
        this.intervalTime = 0;
        this.repeatCount = 0;
        this.remainCount = 0;
        this.callback = null;
        this.taskStartTime = 0;
    }

    public clear() {
        this._state = TIMER_STATE.NO;
        if (this.timeoutHandler) {
            clearTimeout(this.timeoutHandler)
        }
        this.timeoutHandler = null;
        this.remainTime = 0;
        this.intervalTime = 0;
        this.repeatCount = 0;
        this.remainCount = 0;
        this.callback = null;
        this.taskStartTime = 0;
    }

    public get state() {
        return this._state;
    }
}