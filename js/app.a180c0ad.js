(function(){"use strict";var n={9889:function(n,r,e){var t=e(5130),o=e(6768);const i={id:"app"};function u(n,r,e,t,u,a){const c=(0,o.g2)("ImageGallery");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.bF)(c)])}var a=e(4232);const c={class:"gallery"},l=["src","alt"];function s(n,r,e,t,i,u){return(0,o.uX)(),(0,o.CE)("div",c,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.images,(n=>((0,o.uX)(),(0,o.CE)("div",{key:n.id,class:"image-container"},[(0,o.Lk)("img",{src:"/"===t.baseUrl?n.url:t.baseUrl+n.url,alt:n.description},null,8,l),(0,o.Lk)("p",null,(0,a.v_)(n.description),1)])))),128))])}var f=e(144),v={setup(){const n=(0,f.KR)([]),r="/origami-gallery/images.json",e="/origami-gallery/";return(0,o.sV)((()=>{fetch(r).then((n=>n.json())).then((r=>{n.value=r}))})),{images:n,baseUrl:e}}},p=e(1241);const g=(0,p.A)(v,[["render",s]]);var d=g,h={components:{ImageGallery:d}};const b=(0,p.A)(h,[["render",u]]);var m=b;(0,t.Ef)(m).mount("#app")}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return n[t].call(i.exports,i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(r,t,o,i){if(!t){var u=1/0;for(s=0;s<n.length;s++){t=n[s][0],o=n[s][1],i=n[s][2];for(var a=!0,c=0;c<t.length;c++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](t[c])}))?t.splice(c--,1):(a=!1,i<u&&(u=i));if(a){n.splice(s--,1);var l=o();void 0!==l&&(r=l)}}return r}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[t,o,i]}}(),function(){e.n=function(n){var r=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(r,{a:r}),r}}(),function(){e.d=function(n,r){for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)}}(),function(){var n={524:0};e.O.j=function(r){return 0===n[r]};var r=function(r,t){var o,i,u=t[0],a=t[1],c=t[2],l=0;if(u.some((function(r){return 0!==n[r]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(c)var s=c(e)}for(r&&r(t);l<u.length;l++)i=u[l],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(s)},t=self["webpackChunkorigami_gallery"]=self["webpackChunkorigami_gallery"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=e.O(void 0,[504],(function(){return e(9889)}));t=e.O(t)})();
//# sourceMappingURL=app.a180c0ad.js.map