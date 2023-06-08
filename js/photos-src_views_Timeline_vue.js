/*! For license information please see photos-src_views_Timeline_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Timeline_vue"],{49723:(t,e,n)=>{n.d(e,{Z:()=>d});var r=n(20629),o=n(45994),i=n(69363),a=n(99622);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(){f=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),l=new S(o||[]);return r(a,"_invoke",{value:_(t,n,l)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h={};function d(){}function m(){}function v(){}var b={};s(b,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(j([])));g&&g!==e&&n.call(g,i)&&(b=g);var A=v.prototype=d.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(r,i,a,c){var s=p(t[r],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==l(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function _(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=C(a,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=p(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function C(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=p(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return m.prototype=v,r(A,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:m,configurable:!0}),m.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(A),t},t.awrap=function(t){return{__await:t}},w(x.prototype),s(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(A),s(A,c,"Generator"),s(A,i,(function(){return this})),s(A,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=j,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function p(t,e,n,r,o,i,a){try{var l=t[i](a),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(r,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){p(i,r,o,a,l,"next",t)}function l(t){p(i,r,o,a,l,"throw",t)}a(void 0)}))}}const d={name:"FetchSharedAlbumsMixin",data:function(){return{errorFetchingSharedAlbums:null,loadingSharedAlbums:!1}},mixins:[i.Z],beforeMount:function(){var t=this;return h(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fetchSharedAlbums();case 1:case"end":return e.stop()}}),e)})))()},computed:s({},(0,r.Se)(["sharedAlbums"])),methods:s(s({},(0,r.nv)(["addSharedAlbums"])),{},{fetchSharedAlbums:function(){var t=this;return h(f().mark((function e(){var n,r,i;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loadingSharedAlbums){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t.loadingSharedAlbums=!0,t.errorFetchingSharedAlbums=null,e.next=7,(0,a.CE)("/photos/".concat(null===(n=(0,o.ts)())||void 0===n?void 0:n.uid,"/sharedalbums"),t.abortController.signal);case 7:r=e.sent,t.addSharedAlbums({albums:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),404===(null===(i=e.t0.response)||void 0===i?void 0:i.status)?t.errorFetchingSharedAlbums=404:t.errorFetchingSharedAlbums=e.t0;case 14:return e.prev=14,t.loadingSharedAlbums=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})))()}})}},5267:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(87537),o=n.n(r),i=n(23645),a=n.n(i)()(o());a.push([t.id,".album-picker[data-v-f07e7e26]{padding:32px;padding-top:16px}.album-picker h2[data-v-f07e7e26]{display:flex;align-items:center;height:60px}.album-picker h2 .loading-icon[data-v-f07e7e26]{margin-left:32px}.album-picker .albums-container[data-v-f07e7e26]{min-height:150px;max-height:350px;overflow-x:scroll;padding:2px}.album-picker .albums-container .album[data-v-f07e7e26] .list-item{padding:8px 16px;box-sizing:border-box}.album-picker .albums-container .album[data-v-f07e7e26]:not(:last-child){margin-bottom:16px}.album-picker .albums-container .album__image[data-v-f07e7e26]{width:40px;height:40px;object-fit:none;border-radius:var(--border-radius)}.album-picker .albums-container .album__image--placeholder[data-v-f07e7e26]{background:var(--color-primary-element-light)}.album-picker .albums-container .album__image--placeholder[data-v-f07e7e26] .material-design-icon{width:100%;height:100%}.album-picker .albums-container .album__image--placeholder[data-v-f07e7e26] .material-design-icon .material-design-icon__svg{fill:var(--color-primary-element)}.album-picker .new-album-button[data-v-f07e7e26]{margin-top:32px}","",{version:3,sources:["webpack://./src/components/Albums/AlbumPicker.vue"],names:[],mappings:"AAEA,+BACC,YAAA,CACA,gBAAA,CAEA,kCACC,YAAA,CACA,kBAAA,CACA,WAAA,CAEA,gDACC,gBAAA,CAIF,iDACC,gBAAA,CACA,gBAAA,CACA,iBAAA,CACA,WAAA,CAIC,mEACC,gBAAA,CACA,qBAAA,CAGD,yEACC,kBAAA,CAGD,+DACC,UAAA,CACA,WAAA,CACA,eAAA,CACA,kCAAA,CAEA,4EACC,6CAAA,CAEA,kGACC,UAAA,CACA,WAAA,CAEA,6HACC,iCAAA,CAQN,iDACC,eAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.album-picker {\n\tpadding: 32px;\n\tpadding-top: 16px;\n\n\th2 {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\theight: 60px;\n\n\t\t.loading-icon {\n\t\t\tmargin-left: 32px;\n\t\t}\n\t}\n\n\t.albums-container {\n\t\tmin-height: 150px;\n\t\tmax-height: 350px;\n\t\toverflow-x: scroll;\n\t\tpadding: 2px;\n\n\t\t.album {\n\n\t\t\t:deep .list-item {\n\t\t\t\tpadding: 8px 16px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\n\t\t\t&:not(:last-child) {\n\t\t\t\tmargin-bottom: 16px;\n\t\t\t}\n\n\t\t\t&__image {\n\t\t\t\twidth: 40px;\n\t\t\t\theight: 40px;\n\t\t\t\tobject-fit: none;\n\t\t\t\tborder-radius: var(--border-radius);\n\n\t\t\t\t&--placeholder {\n\t\t\t\t\tbackground: var(--color-primary-element-light);\n\n\t\t\t\t\t:deep .material-design-icon {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 100%;\n\n\t\t\t\t\t\t.material-design-icon__svg {\n\t\t\t\t\t\t\tfill: var(--color-primary-element);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.new-album-button {\n\t\tmargin-top: 32px;\n\t}\n}\n'],sourceRoot:""}]);const l=a},26311:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(87537),o=n.n(r),i=n(23645),a=n.n(i)()(o());a.push([t.id,".timeline[data-v-fd8ee462]{display:flex;flex-direction:column}.timeline__header__left[data-v-fd8ee462]{display:flex}.timeline__file-list[data-v-fd8ee462]{padding:0 64px}@media only screen and (max-width: 1200px){.timeline__file-list[data-v-fd8ee462]{padding:0 4px}}.timeline__file-list[data-v-fd8ee462] .files-list-viewer__section-header{top:var(--photos-navigation-height)}","",{version:3,sources:["webpack://./src/views/Timeline.vue"],names:[],mappings:"AAEA,2BACC,YAAA,CACA,qBAAA,CAGC,yCACC,YAAA,CAIF,sCACC,cAAA,CAEA,2CAHD,sCAIE,aAAA,CAAA,CAGD,yEACC,mCAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.timeline {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t&__header {\n\t\t&__left {\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n\n\t&__file-list {\n\t\tpadding: 0 64px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 0 4px;\n\t\t}\n\n\t\t:deep .files-list-viewer__section-header {\n\t\t\ttop: var(--photos-navigation-height);\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const l=a},57356:(t,e,n)=>{n.r(e),n.d(e,{default:()=>it});var r=n(20629),o=n(69141),i=n(11341),a=n(63225),l=n(47741),c=n(15961),s=n(80351),u=n.n(s),f=n(3301),p=n(66951),h=n(28391),d=n(98171),m=n(68411),v=n(42375),b=n(11762),y=n(48450),g=n(79753),A=n(9944),w=n(12945),x=n(49723);function _(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const O={name:"AlbumPicker",components:{Plus:o.Z,ImageMultiple:y.Z,NcButton:c.P2,NcListItem:c.hx,NcLoadingIcon:c.lb,NcUserBubble:c.uq,AlbumForm:b.Z},filters:{toCoverUrl:function(t){return(0,g.generateUrl)("/apps/photos/api/v1/preview/".concat(t,"?x=",64,"&y=",64))}},mixins:[w.Z,x.Z],data:function(){return{showAlbumCreationForm:!1}},computed:{allAlbums:function(){return[].concat(_(Object.values(this.albums)),_(Object.values(this.sharedAlbums)))}},methods:{albumCreatedHandler:function(){this.showAlbumCreationForm=!1},pickAlbum:function(t){this.$emit("album-picked",t)},isSharedAlbum:function(t){return null!==t.filename.match(/^\/photos\/.+\/sharedalbums\//)},originalName:function(t){return this.isSharedAlbum(t)?t.basename.replace(new RegExp("\\(".concat(t.collaborators[0].id,"\\)$")),""):t.basename},t:A.translate,n:A.translatePlural}};var k=n(93379),S=n.n(k),j=n(7795),E=n.n(j),L=n(90569),P=n.n(L),F=n(3565),T=n.n(F),N=n(19216),I=n.n(N),D=n(44589),Z=n.n(D),B=n(5267),M={};M.styleTagTransform=Z(),M.setAttributes=T(),M.insert=P().bind(null,"head"),M.domAPI=E(),M.insertStyleElement=I();S()(B.Z,M);B.Z&&B.Z.locals&&B.Z.locals;var W=n(51900);const Y=(0,W.Z)(O,(function(){var t=this,e=t._self._c;return t.showAlbumCreationForm?e("AlbumForm",{attrs:{"display-back-button":!0,title:t.t("photos","New album")},on:{back:function(e){t.showAlbumCreationForm=!1},done:t.albumCreatedHandler}}):e("div",{staticClass:"album-picker"},[e("h2",[t._v("\n\t\t"+t._s(t.t("photos","Add to Album"))+"\n\t\t"),t.loadingAlbums||t.loadingSharedAlbums?e("NcLoadingIcon",{staticClass:"loading-icon"}):t._e()],1),t._v(" "),e("ul",{staticClass:"albums-container"},t._l(t.allAlbums,(function(n){return e("NcListItem",{key:n.filename,staticClass:"album",attrs:{title:t.originalName(n),"aria-label":t.t("photos","Add selection to album {albumName}",{albumName:n.basename})},on:{click:function(e){return t.pickAlbum(n)}}},[e("template",{slot:"icon"},[-1!==n.lastPhoto?e("img",{staticClass:"album__image",attrs:{src:t._f("toCoverUrl")(n.lastPhoto)}}):e("div",{staticClass:"album__image album__image--placeholder"},[e("ImageMultiple",{attrs:{size:32}})],1)]),t._v(" "),e("template",{slot:"subtitle"},[t._v("\n\t\t\t\t"+t._s(t.n("photos","%n item","%n photos and videos",n.nbItems))+"\n\t\t\t\t"),t.isSharedAlbum(n)?[t._v("\n\t\t\t\t\t⸱ "+t._s(t.t("photos","Shared by"))+" "),e("NcUserBubble",{attrs:{"display-name":n.collaborators[0].label,user:n.collaborators[0].id}})]:t._e()],2)],2)})),1),t._v(" "),e("NcButton",{staticClass:"new-album-button",attrs:{"aria-label":t.t("photos","Create a new album."),type:"tertiary"},on:{click:function(e){t.showAlbumCreationForm=!0}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Plus")]},proxy:!0}],null,!1,1489515321)},[t._v("\n\t\t"+t._s(t.t("photos","Create new album"))+"\n\t")])],1)}),[],!1,null,"f07e7e26",null).exports;var G=n(61225);function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(Object(n),!0).forEach((function(e){H(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function H(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const V={name:"ActionDownload",components:{NcActionLink:c.ih},props:{title:{type:String,required:!0},selectedFileIds:{type:Array,required:!0}},computed:q(q({},(0,r.Se)(["files"])),{},{downloadUrl:function(){var t=new URLSearchParams,e=this.fileNames.map((function(t){return"/"+t.split("/").splice(3).join("/")}));return t.append("files",JSON.stringify(e)),(0,g.generateUrl)("/apps/files/ajax/download.php?".concat(t))},fileNames:function(){var t=this;return this.selectedFileIds.map((function(e){return t.files[e].filename}))}})};const z=(0,W.Z)(V,(function(){var t=this;return(0,t._self._c)("NcActionLink",{attrs:{"close-after-click":!0,href:t.downloadUrl,download:t.downloadUrl,"aria-label":t.title}},[t._v("\n\t"+t._s(t.title)+"\n\t"),t._t("icon",null,{slot:"icon"})],2)}),[],!1,null,null,null).exports;var R=n(71823);function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function J(){J=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),l=new O(o||[]);return r(a,"_invoke",{value:w(t,n,l)}),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function p(){}function h(){}function d(){}var m={};c(m,i,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(k([])));b&&b!==e&&n.call(b,i)&&(m=b);var y=d.prototype=p.prototype=Object.create(m);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function o(r,i,a,l){var c=u(t[r],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==$(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,l)}),(function(t){o("throw",t,a,l)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,l)}))}l(c.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function w(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=x(a,n);if(l){if(l===f)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:h,configurable:!0}),h.displayName=c(d,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,l,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(A.prototype),c(A.prototype,a,(function(){return this})),t.AsyncIterator=A,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new A(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),c(y,l,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function Q(t,e,n,r,o,i,a){try{var l=t[i](a),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(r,o)}function K(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){Q(i,r,o,a,l,"next",t)}function l(t){Q(i,r,o,a,l,"throw",t)}a(void 0)}))}}function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function tt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?X(Object(n),!0).forEach((function(e){et(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const nt={name:"Timeline",components:{Delete:i.Z,PlusBoxMultiple:a.Z,Download:l.Z,Plus:o.Z,NcEmptyContent:c.SL,NcModal:c.Jc,NcActions:c.O3,NcActionButton:c.Js,NcButton:c.P2,AlbumForm:b.Z,AlbumPicker:Y,FilesListViewer:m.Z,File:v.Z,ActionFavorite:G.Z,ActionDownload:z,HeaderNavigation:R.Z},filters:{dateMonth:function(t){return u()(t,"YYYYMM").format("MMMM")},dateYear:function(t){return u()(t,"YYYYMM").format("YYYY")}},mixins:[p.Z,d.Z,h.Z,c.tq],beforeRouteLeave:function(t,e,n){window.scrollTo(0,0),n()},props:{onlyFavorites:{type:Boolean,default:!1},mimesType:{type:Array,default:function(){return f.Oj}},onThisDay:{type:Boolean,default:!1},rootTitle:{type:String,required:!0}},data:function(){return{loadingCount:0,showAlbumCreationForm:!1,showAlbumPicker:!1,appContent:document.getElementById("app-content-vue")}},computed:tt({},(0,r.Se)(["files"])),methods:tt(tt({},(0,r.nv)(["deleteFiles","addFilesToAlbum","addFilesToSharedAlbum"])),{},{getContent:function(){this.fetchFiles("",{mimesType:this.mimesType,onThisDay:this.onThisDay,onlyFavorites:this.onlyFavorites})},openViewer:function(t){var e=this,n=this.files[t];OCA.Viewer.open({fileInfo:n,list:Object.values(this.fileIdsByMonth).flat().map((function(t){return e.files[t]})),loadMore:n.loadMore?K(J().mark((function t(){return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.loadMore(!0);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))):function(){return[]},canLoop:n.canLoop})},openUploader:function(){},addSelectionToAlbum:function(t){var e=this;return K(J().mark((function n(){return J().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.showAlbumPicker=!1,null===t.filename.match(/^\/photos\/.+\/sharedalbums\//)){n.next=6;break}return n.next=4,e.addFilesToSharedAlbum({albumName:t.basename,fileIdsToAdd:e.selectedFileIds});case 4:n.next=8;break;case 6:return n.next=8,e.addFilesToAlbum({albumName:t.basename,fileIdsToAdd:e.selectedFileIds});case 8:case"end":return n.stop()}}),n)})))()},deleteSelection:function(){var t=this;return K(J().mark((function e(){var n;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.selectedFileIds,t.onUncheckFiles(n),t.fetchedFileIds=t.fetchedFileIds.filter((function(t){return!n.includes(t)})),e.next=5,t.deleteFiles(n);case 5:case"end":return e.stop()}}),e)})))()},t:A.translate})};var rt=n(26311),ot={};ot.styleTagTransform=Z(),ot.setAttributes=T(),ot.insert=P().bind(null,"head"),ot.domAPI=E(),ot.insertStyleElement=I();S()(rt.Z,ot);rt.Z&&rt.Z.locals&&rt.Z.locals;const it=(0,W.Z)(nt,(function(){var t=this,e=t._self._c;return t.errorFetchingFiles?e("NcEmptyContent",[t._v("\n\t"+t._s(t.t("photos","An error occurred"))+"\n")]):e("div",{staticClass:"timeline"},[e("HeaderNavigation",{key:"navigation",attrs:{loading:t.loadingCount>0,path:"/",title:t.rootTitle,"root-title":t.rootTitle},on:{refresh:t.resetFetchFilesState}},[e("div",{staticClass:"timeline__header__left"},[0===t.selectedFileIds.length?e("NcActions",{attrs:{"force-title":!0,"force-menu":!0,"menu-title":t.t("photos","Add")}},[e("Plus",{attrs:{slot:"icon"},slot:"icon"}),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Create a new album")},on:{click:function(e){t.showAlbumCreationForm=!0}}},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Create new album"))+"\n\t\t\t\t\t"),e("PlusBoxMultiple",{attrs:{slot:"icon"},slot:"icon"})],1)],1):[e("NcButton",{attrs:{"close-after-click":!0,type:"primary","aria-label":t.t("photos","Add selection to an album")},on:{click:function(e){t.showAlbumPicker=!0}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Plus",{attrs:{slot:"icon"},slot:"icon"})]},proxy:!0}])},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Add to album"))+"\n\t\t\t\t")]),t._v(" "),e("NcActions",{attrs:{"aria-label":t.t("photos","Open actions menu")}},[e("ActionDownload",{attrs:{"selected-file-ids":t.selectedFileIds,title:t.t("photos","Download selected files")}},[e("Download",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),e("ActionFavorite",{attrs:{"selected-file-ids":t.selectedFileIds}}),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Delete selection")},on:{click:t.deleteSelection}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Delete selection"))+"\n\t\t\t\t\t\t"),e("Delete",{attrs:{slot:"icon"},slot:"icon"})],1)],1)]],2)]),t._v(" "),e("FilesListViewer",{ref:"filesListViewer",staticClass:"timeline__file-list",attrs:{"container-element":t.appContent,"file-ids-by-section":t.fileIdsByMonth,sections:t.monthsList,loading:t.loadingFiles,"base-height":t.isMobile?120:200,"empty-message":t.t("photos","No photos or videos in here")},on:{"need-content":t.getContent},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.file,o=n.distance;return[r.sectionHeader?e("h3",{staticClass:"section-header",attrs:{id:"file-picker-section-header-".concat(r.id)}},[e("b",[t._v(t._s(t._f("dateMonth")(r.id)))]),t._v("\n\t\t\t\t"+t._s(t._f("dateYear")(r.id))+"\n\t\t\t")]):e("File",{attrs:{file:t.files[r.id],"allow-selection":!0,selected:!0===t.selection[r.id],distance:o},on:{click:t.openViewer,"select-toggled":t.onFileSelectToggle}})]}}])}),t._v(" "),t.showAlbumCreationForm?e("NcModal",{key:"albumCreationForm",attrs:{"close-button-contained":!1,title:t.t("photos","New album")},on:{close:function(e){t.showAlbumCreationForm=!1}}},[e("AlbumForm",{on:{done:function(e){t.showAlbumCreationForm=!1}}})],1):t._e(),t._v(" "),t.showAlbumPicker?e("NcModal",{key:"albumPicker",attrs:{"close-button-contained":!1,title:t.t("photos","Add to album")},on:{close:function(e){t.showAlbumPicker=!1}}},[e("AlbumPicker",{on:{"album-picked":t.addSelectionToAlbum}})],1):t._e()],1)}),[],!1,null,"fd8ee462",null).exports}}]);
//# sourceMappingURL=photos-src_views_Timeline_vue.js.map?v=3a2425f657a2bb5d450c