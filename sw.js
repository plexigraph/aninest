if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>n(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-33381d99"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"ff53e1a5b2d35b334b23ac301747455e"},{url:"assets/app.DwDFT_kq.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.cVud1dAQ.js",revision:null},{url:"assets/chunks/framework.DrfrbPSH.js",revision:null},{url:"assets/chunks/theme.Bbpky9_P.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.DVnnjOc9.js",revision:null},{url:"assets/index.md.CWXhI0bR.js",revision:null},{url:"assets/index.md.CWXhI0bR.lean.js",revision:null},{url:"assets/style.CYhF5ubb.css",revision:null},{url:"index.html",revision:"ad44d0a4626f287a1c45c6f22d5edf37"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons-192.png",revision:"bb5ba241608fe9f8594ac04e6368ebfa"},{url:"icons-256.png",revision:"988005e3ac796677d5e53ff061462ba5"},{url:"icons-512.png",revision:"b81c8e1fd1ce86145451d4f9d58f55f7"},{url:"manifest.webmanifest",revision:"c0272ab1472e4a015901435841453ad4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
