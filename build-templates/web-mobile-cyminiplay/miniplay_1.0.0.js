!function(n, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (n = "undefined" != typeof globalThis ? globalThis : n || self).miniplay = e();
}(this, function() {
  "use strict";
  const n = { t: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", o: null, loadScript: function() {
    if (null != this.o)
      return this.o;
    this.o = new Promise((n2, e) => {
      const t = document.createElement("script");
      t.src = this.t, t.async = true, t.setAttribute("data-ad-frequency-hint", "30s"), t.setAttribute("data-ad-client", "ca-pub-123456789"), t.setAttribute("data-ad-channel", "1234"), t.setAttribute("data-adbreak-test", "on"), t.onload = n2, t.onerror = e, window.document.head.appendChild(t), console.log("end load google sdk");
    });
  }, i: null, l: null, isInit: function() {
    return null != this.i && null != this.l && null != this.config;
  }, isReady: false, initAsync: async function() {
    if (this.isInit())
      return Promise.resolve();
    try {
      return await this.loadScript(), window.adsbygoogle = window.adsbygoogle || [], n.i = n.l = function(n2) {
        console.log("call adsbygoogle.push(): " + JSON.stringify(n2)), window.adsbygoogle.push(n2);
      }, Promise.resolve();
    } catch (n2) {
      return Promise.reject(new Error("load js error"));
    }
  }, startAsync: async function() {
    return new Promise((e, t) => {
      let o = { sound: "on", preloadAdBreaks: "on", onReady: () => {
        n.isReady = true, e(), n.adBreak({ type: "preroll", name: "preroll_name" });
      } };
      n.l(o);
    });
  }, adBreak: function(n2) {
    let e = this.generateAdBreakParams(n2);
    this.isInit() ? this.i(e) : this.initAsync().then(() => {
      this.i(e);
    });
  }, gtag: function(...n2) {
    console.log(n2);
  }, generateAdBreakParams: function(n2) {
    let e = { type: n2.type, name: n2.name, adBreakDone: (e2) => {
      void 0 !== n2.adBreakDone && null != n2.adBreakDone && n2.adBreakDone(e2);
    } };
    return "preroll" === n2.type || ("reward" === n2.type ? (e.beforeReward = function(e2) {
      e2(), void 0 !== n2.beforeReward && null != n2.beforeReward && n2.beforeReward(e2);
    }, e.adDismissed = function() {
      void 0 !== n2.adDismissed && null != n2.adDismissed && n2.adDismissed();
    }, e.adViewed = function() {
      void 0 !== n2.adViewed && null != n2.adViewed && n2.adViewed();
    }) : (e.beforeAd = () => {
      void 0 !== n2.beforeAd && null != n2.beforeAd && n2.beforeAd();
    }, e.afterAd = () => {
      void 0 !== n2.afterAd && null != n2.afterAd && n2.afterAd();
    })), e;
  } };
  return { initAsync: async function() {
    return n.isInit() ? Promise.resolve() : n.initAsync().then(() => n.startAsync());
  }, adBreak: async function(e) {
    n.adBreak(e);
  }, gtag: function(e) {
    n.gtag(e);
  }, isReady: function() {
    return n.isReady;
  }, setLoadingProgress: function(n2) {
    console.log("progress: " + n2);
  }, showRewardAsync: async function() {
    function e() {
      return new Promise((e2, t) => {
        n.adBreak({ type: "reward", name: "reward_name", adBreakDone: (n2) => {
          "viewed" === n2.breakStatus || "dismissed" === n2.breakStatus ? e2(n2.breakStatus) : t(n2.breakStatus);
        } });
      });
    }
    return n.isInit() ? e() : n.initAsync().then(() => e());
  }, showInterstitialAsync: async function() {
    function e() {
      return new Promise((e2, t) => {
        n.adBreak({ type: "next", name: "next_name", adBreakDone: (n2) => {
          "viewed" === n2.breakStatus ? e2(n2.breakStatus) : t(n2.breakStatus);
        } });
      });
    }
    return n.isInit() ? e() : n.initAsync().then(() => e());
  } };
});
