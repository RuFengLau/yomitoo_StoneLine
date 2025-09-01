window.resolution = (function (exports) {
    class Resolution {
        constructor() {
            this.scaleX = 1;
            this.scaleY = 1;
            this.loadNum = 0;
        }

        init(designWidth, designHeight, cb = new Function()) {
            this.designWidth = designWidth / 2;
            this.designHeight = designHeight / 2;
            this.container = document.querySelector("#Game");

            window.addEventListener("resize", () => this.resize());
            window.addEventListener("orientationchange", () => this.resize());

            setTimeout(() => {
                this.resize();
                cb && cb();
            }, 50);
        }

        get clientWidth() {
            return window.innerWidth || document.body.clientWidth;
        }

        get clientHeight() {
            return window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
        }

        isMobile() {
            const ua = navigator.userAgent.toLowerCase();
            return /iphone|ipod|ipad|android|mobile|blackberry|iemobile|opera mini/.test(ua)
                || window.innerWidth <= 768;
        }

        resize() {
            if (this.isMobile()) {
                return;
            }

            // PC 缩放逻辑
            let scaleX = this.clientWidth / this.designWidth;
            let scaleY = this.clientHeight / this.designHeight;
            let canvasWidth = this.designWidth;
            let canvasHeight = this.designHeight;
            const canvasStyle = this.container.style;

            scaleX = scaleY = Math.min(scaleX, scaleY);
            canvasWidth = Math.ceil(this.designWidth * scaleX);
            canvasHeight = Math.ceil(this.designHeight * scaleY);

            canvasStyle.width = canvasWidth + "px";
            canvasStyle.height = canvasHeight + "px";
            canvasStyle.left = "50%";
            canvasStyle.top = "50%";
            canvasStyle.transform = "translate(-50%, -50%)";
        }
    }

    return new Resolution();
}({}));
