/*! For license information please see photos-src_views_FaceContent_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_FaceContent_vue"],{46116:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(20629),a=t(86492),o=t.n(a);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const l={name:"FaceCoverMixin",computed:c({},(0,r.Se)(["faces","facesFiles","files"])),methods:{getFaceCover:function(e){var n=this;return(this.facesFiles[e]||[]).slice(0,25).map((function(e){return n.files[e]})).map((function(e){return c(c({},e),{},{faceDetections:JSON.parse(o().decode(e.faceDetections))})})).sort((function(n,t){return t.faceDetections.find((function(n){return n.title===e})).width-n.faceDetections.find((function(n){return n.title===e})).width})).sort((function(e,n){return e.faceDetections.length-n.faceDetections.length}))[0]},getCoverStyle:function(e){var n=this.getFaceCover(e);if(!n)return{};var t=n.faceDetections.find((function(n){return n.title===e})),r=Math.max(1,1/t.width*.4),a=100*(t.x+t.width/2),o=100*(t.y+t.height/2);return{width:"100%",transform:"translate(calc( var(--photos-face-width)/2 - ".concat(a,"% ), calc( var(--photos-face-width)/2 - ").concat(o,"% )) scale(").concat(r,")"),transformOrigin:"".concat(a,"% ").concat(o,"%")}}}}},99751:(e,n,r)=>{r.d(n,{Z:()=>g});var a=r(20629),o=r(82880),i=r(45994),c=r(81067),s=r(59537),l=r(4615),u=r(2161),f=r(94236);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){A(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n,t,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,a)}function h(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){m(o,r,a,i,c,"next",e)}function c(e){m(o,r,a,i,c,"throw",e)}i(void 0)}))}}const g={name:"FetchFacesMixin",data:function(){return{errorFetchingFaces:null,loadingFaces:!1,errorFetchingFiles:null,loadingFiles:!1,cancelFacesRequest:function(){},cancelFilesRequest:function(){}}},beforeMount:function(){var e=this;return h(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.fetchFaces();case 1:case"end":return n.stop()}}),n)})))()},beforeDestroy:function(){this.cancelFacesRequest("Changed view"),this.cancelFilesRequest("Changed view")},computed:p({},(0,a.Se)(["faces"])),methods:p(p({},(0,a.nv)(["appendFiles"])),{},{fetchFaces:function(){var e=this;return h(regeneratorRuntime.mark((function n(){var r,a,u,f,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.loadingFaces){n.next=2;break}return n.abrupt("return");case 2:if(!Object.keys(e.faces).length){n.next=4;break}return n.abrupt("return");case 4:return n.prev=4,e.loadingFaces=!0,e.errorFetchingFaces=null,a=(0,l.Z)(c.Z.getDirectoryContents),u=a.request,f=a.cancel,e.cancelFacesRequest=f,n.next=11,u("/recognize/".concat(null===(r=(0,i.ts)())||void 0===r?void 0:r.uid,"/faces/"));case 11:d=n.sent,e.$store.dispatch("addFaces",{faces:d}),s.Z.debug("[FetchFacesMixin] Fetched ".concat(d.length," new faces: "),d),n.next=21;break;case 16:n.prev=16,n.t0=n.catch(4),n.t0.response&&n.t0.response.status&&(404===n.t0.response.status?e.errorFetchingFaces=404:e.errorFetchingFaces=n.t0),s.Z.error(t("photos","Failed to fetch faces list."),n.t0),(0,o.x2)(t("photos","Failed to fetch faces list."));case 21:return n.prev=21,e.cancelFacesRequest=function(){},e.loadingFaces=!1,n.finish(21);case 25:case"end":return n.stop()}}),n,null,[[4,16,21,25]])})))()},fetchFaceContent:function(e,n){var t=this;return h(regeneratorRuntime.mark((function r(){var a,o,d,A,m,h,g;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.loadingFiles){r.next=2;break}return r.abrupt("return");case 2:if(n||!t.facesFiles[e]||!t.facesFiles[e].length){r.next=4;break}return r.abrupt("return");case 4:return r.prev=4,t.errorFetchingFiles=null,t.loadingFiles=!0,o=(0,l.Z)(c.Z.getDirectoryContents),d=o.request,A=o.cancel,t.cancelFilesRequest=A,r.next=11,d("/recognize/".concat(null===(a=(0,i.ts)())||void 0===a?void 0:a.uid,"/faces/").concat(e),{data:u.Z,details:!0});case 11:if(m=r.sent,h=(h=m.data).map((function(e){return(0,f.AX)(e)})).map((function(e){return p(p({},e),{},{filename:e.realpath.replace("/".concat((0,i.ts)().uid,"/files"),"")})})),g=h.map((function(e){return""+e.fileid})),t.appendFiles(h),!(h.length>0)){r.next=19;break}return r.next=19,t.$store.commit("addFilesToFace",{faceName:e,fileIdsToAdd:g});case 19:s.Z.debug("[FetchFacesMixin] Fetched ".concat(g.length," new files: "),g),r.next=26;break;case 22:r.prev=22,r.t0=r.catch(4),r.t0.response&&r.t0.response.status&&(404===r.t0.response.status?t.errorFetchingFiles=404:t.errorFetchingFiles=r.t0),s.Z.error("Error fetching face files",r.t0);case 26:return r.prev=26,t.loadingFiles=!1,t.cancelFilesRequest=function(){},r.finish(26);case 30:case"end":return r.stop()}}),r,null,[[4,22,26,30]])})))()}})}},30689:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(87537),a=t.n(r),o=t(23645),i=t.n(o)()(a());i.push([e.id,".face-list[data-v-6af87af4]{display:flex;flex-direction:row;height:350px;flex-wrap:wrap;padding:12px}.face-list__item[data-v-6af87af4]{display:flex;flex-direction:column;padding:10px;border-radius:var(--border-radius);align-items:center;cursor:pointer;width:120px}.face-list__item *[data-v-6af87af4]{cursor:pointer}.face-list__item__crop-container[data-v-6af87af4]{overflow:hidden;width:60px;height:60px;border-radius:60px;position:relative;background:var(--color-background-darker);--photos-face-width: 60px}.face-list__item[data-v-6af87af4]:hover,.face-list__item[data-v-6af87af4]:focus{background:var(--color-background-hover)}.face-list__item__details[data-v-6af87af4]{padding:10px;height:1em;overflow:hidden;text-overflow:ellipsis;width:100%;text-align:center}.loader[data-v-6af87af4]{margin-top:25%}","",{version:3,sources:["webpack://./src/components/FaceMergeForm.vue"],names:[],mappings:"AAyGA,4BACC,YAAA,CACA,kBAAA,CACA,YAAA,CACA,cAAA,CACA,YAAA,CAEA,kCACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,kCAAA,CACA,kBAAA,CACA,cAAA,CACA,WAAA,CAEA,oCACC,cAAA,CAGD,kDACC,eAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CACA,iBAAA,CACA,yCAAA,CACA,yBAAA,CAGD,gFACC,wCAAA,CAGD,2CACC,YAAA,CACA,UAAA,CACA,eAAA,CACA,sBAAA,CACA,UAAA,CACA,iBAAA,CAKH,yBACC,cAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.face-list {\n\tdisplay: flex;\n\tflex-direction: row;\n\theight: 350px;\n\tflex-wrap: wrap;\n\tpadding: 12px;\n\n\t&__item {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 10px;\n\t\tborder-radius: var(--border-radius);\n\t\talign-items: center;\n\t\tcursor: pointer;\n\t\twidth: 120px;\n\n\t\t* {\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t&__crop-container {\n\t\t\toverflow: hidden;\n\t\t\twidth: 60px;\n\t\t\theight: 60px;\n\t\t\tborder-radius: 60px;\n\t\t\tposition: relative;\n\t\t\tbackground: var(--color-background-darker);\n\t\t\t--photos-face-width: 60px;\n\t\t}\n\n\t\t&:hover, &:focus {\n\t\t\tbackground: var(--color-background-hover);\n\t\t}\n\n\t\t&__details {\n\t\t\tpadding: 10px;\n\t\t\theight: 1em;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t\twidth: 100%;\n\t\t\ttext-align: center;\n\t\t}\n\t}\n}\n\n.loader {\n\tmargin-top: 25%;\n}\n'],sourceRoot:""}]);const c=i},9744:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(87537),a=t.n(r),o=t(23645),i=t.n(o)()(a());i.push([e.id,".face[data-v-bbffc378]{display:flex;flex-direction:column}.face__empty[data-v-bbffc378]{display:flex;flex-direction:column;align-items:center}.face__empty__button[data-v-bbffc378]{margin-top:32px}.face__header[data-v-bbffc378]{display:flex;min-height:60px;align-items:center;justify-content:space-between;position:-webkit-sticky;position:sticky;top:var(--header-height);z-index:3;background:var(--color-main-background);padding:0 64px}@media only screen and (max-width: 1020px){.face__header[data-v-bbffc378]{padding:0;padding-left:64px}}.face__header__left[data-v-bbffc378]{height:100%;display:flex;align-items:center}.face__header__title[data-v-bbffc378]{margin-left:10px}.face__header__title h2[data-v-bbffc378]{margin-bottom:0}.face__header__loader[data-v-bbffc378]{margin-left:32px}.face__header__actions[data-v-bbffc378]{display:flex;align-items:center}.face__header__actions button[data-v-bbffc378]{margin-left:16px}.face__photos[data-v-bbffc378]{margin-top:16px;height:100%;min-height:0;padding:0 64px}@media only screen and (max-width: 1020px){.face__photos[data-v-bbffc378]{padding:0}}.empty-content-with-illustration[data-v-bbffc378]  .empty-content__icon{width:200px;height:200px}.empty-content-with-illustration[data-v-bbffc378]  .empty-content__icon svg{width:200px;height:200px}.rename-form[data-v-bbffc378]{display:flex;flex-direction:row;align-items:center;height:70px;padding:16px}.rename-form input[data-v-bbffc378]{width:80%}","",{version:3,sources:["webpack://./src/views/FaceContent.vue"],names:[],mappings:"AAmYA,uBACC,YAAA,CACA,qBAAA,CAEA,8BACC,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,sCACC,eAAA,CAKF,+BACC,YAAA,CACA,eAAA,CACA,kBAAA,CACA,6BAAA,CACA,uBAAA,CAAA,eAAA,CACA,wBAAA,CACA,SAAA,CACA,uCAAA,CACA,cAAA,CAEA,2CAXD,+BAYE,SAAA,CACA,iBAAA,CAAA,CAGD,qCACC,WAAA,CACA,YAAA,CACA,kBAAA,CAGD,sCACC,gBAAA,CACA,yCACC,eAAA,CAIF,uCACC,gBAAA,CAGD,wCACC,YAAA,CACA,kBAAA,CAEA,+CACC,gBAAA,CAKH,+BACC,eAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CAEA,2CAND,+BAOE,SAAA,CAAA,CAKH,wEACC,WAAA,CACA,YAAA,CAEA,4EACC,WAAA,CACA,YAAA,CAIF,8BACC,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA,CAEA,oCACC,SAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.face {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t&__empty {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\n\t\t&__button {\n\t\t\tmargin-top: 32px;\n\t\t}\n\n\t}\n\n\t&__header {\n\t\tdisplay: flex;\n\t\tmin-height: 60px;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tposition: sticky;\n\t\ttop: var(--header-height);\n\t\tz-index: 3;\n\t\tbackground: var(--color-main-background);\n\t\tpadding: 0 64px;\n\n\t\t@media only screen and (max-width: 1020px) {\n\t\t\tpadding: 0;\n\t\t\tpadding-left: 64px;\n\t\t}\n\n\t\t&__left {\n\t\t\theight: 100%;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t}\n\n\t\t&__title {\n\t\t\tmargin-left: 10px;\n\t\t\th2 {\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\t\t}\n\n\t\t&__loader {\n\t\t\tmargin-left: 32px;\n\t\t}\n\n\t\t&__actions {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\n\t\t\tbutton {\n\t\t\t\tmargin-left: 16px;\n\t\t\t}\n\t\t}\n\t}\n\n\t&__photos {\n\t\tmargin-top: 16px;\n\t\theight: 100%;\n\t\tmin-height: 0; // Prevent it from overflowing in a flex context.\n\t\tpadding: 0 64px;\n\n\t\t@media only screen and (max-width: 1020px) {\n\t\t\tpadding: 0;\n\t\t}\n\t}\n}\n\n.empty-content-with-illustration ::v-deep .empty-content__icon {\n\twidth: 200px;\n\theight: 200px;\n\n\tsvg {\n\t\twidth: 200px;\n\t\theight: 200px;\n\t}\n}\n\n.rename-form {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\theight: 70px;\n\tpadding: 16px;\n\n\tinput {\n\t\twidth: 80%;\n\t}\n}\n'],sourceRoot:""}]);const c=i},24777:(e,n,t)=>{t.d(n,{Z:()=>a});const r={name:"AlertCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const a=(0,t(51900).Z)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("span",e._b({staticClass:"material-design-icon alert-circle-icon",attrs:{"aria-hidden":!e.title,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])}),[],!1,null,null,null).exports},30818:(e,n,t)=>{t.r(n),t.d(n,{default:()=>J});var r=t(20629),a=t(91482),o=t(31894),i=t(24777),c=t(75760),s=t(2470),l=t(75400);const u={name:"MergeIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var f=t(51900);const d=(0,f.Z)(u,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("span",e._b({staticClass:"material-design-icon merge-icon",attrs:{"aria-hidden":!e.title,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M8 17L12 13H15.2C15.6 14.2 16.7 15 18 15C19.7 15 21 13.7 21 12S19.7 9 18 9C16.7 9 15.6 9.8 15.2 11H12L8 7V3H3V8H6L10.2 12L6 16H3V21H8V17Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])}),[],!1,null,null,null).exports;var p=t(76240),A=t(24073),m=t(33476),h=t(66951),g=t(98171),v=t(42408),C=t(53932),b=t(8702),_=t(59537),x=t(99751),F=t(20144),w=t(46116),y=t(79753);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){S(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const j={name:"FaceMergeForm",components:{Loader:b.Z},mixins:[w.Z,x.Z],props:{firstFace:{type:String,required:!0}},data:function(){return{loading:!1}},computed:O(O({},(0,r.Se)(["files","faces","facesFiles"])),{},{filteredFaces:function(){var e=this;return Object.values(this.faces).filter((function(n){return n.basename!==e.firstFace})).sort((function(n,t){return e.facesFiles[t.basename]&&e.facesFiles[n.basename]?e.facesFiles[t.basename].length-e.facesFiles[n.basename].length:0}))}}),methods:{getCoverUrl:function(e){var n=this.getFaceCover(e);return n?(0,y.generateUrl)("/core/preview?fileId=".concat(n.fileid,"&x=",512,"&y=",512,"&forceIcon=0&a=1")):(this.fetchFaceContent(e),"")},handleSelect:function(e){this.$emit("select",e),this.loading=!0}}};var R=t(93379),B=t.n(R),Z=t(7795),M=t.n(Z),P=t(90569),D=t.n(P),E=t(3565),T=t.n(E),I=t(19216),N=t.n(I),W=t(44589),$=t.n(W),Y=t(30689),q={};q.styleTagTransform=$(),q.setAttributes=T(),q.insert=D().bind(null,"head"),q.domAPI=M(),q.insertStyleElement=N();B()(Y.Z,q);Y.Z&&Y.Z.locals&&Y.Z.locals;function L(e,n,t,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,a)}function H(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){L(o,r,a,i,c,"next",e)}function c(e){L(o,r,a,i,c,"throw",e)}i(void 0)}))}}function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){G(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function G(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const U={name:"FaceContent",components:{FaceMergeForm:(0,f.Z)(j,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"merge-form face-list"},[e.loading?[t("Loader",{staticClass:"loader"})]:e._l(e.filteredFaces,(function(n){return t("div",{key:n.basename,staticClass:"face-list__item",on:{click:function(t){return e.handleSelect(n.basename)}}},[t("div",{staticClass:"face-list__item__crop-container"},[t("img",{staticClass:"face-list__item__image",style:e.getCoverStyle(n.basename),attrs:{src:e.getCoverUrl(n.basename)}})]),e._v(" "),t("div",{staticClass:"face-list__item__details"},[t("span",{class:{"hidden-visually":n.basename.match(/^[0-9]+$/)}},[e._v(e._s(n.basename))])])])}))],2)}),[],!1,null,"6af87af4",null).exports,Pencil:a.default,Star:c.default,Download:s.Z,Close:o.default,AlertCircle:i.Z,FilesListViewer:v.Z,File:C.Z,EmptyContent:m.EmptyContent,Loader:b.Z,Actions:m.Actions,ActionButton:m.ActionButton,Modal:m.Modal,Send:l.Z,Button:m.Button,Merge:d,ArrowLeft:p.default,AccountBoxMultipleOutline:A.Z},directives:{focus:function(e){F.ZP.nextTick((function(){return e.focus()}))}},mixins:[x.Z,h.Z,g.Z],props:{faceName:{type:String,default:"/"}},data:function(){return{showMergeModal:!1,showRenameModal:!1,loadingCount:0}},computed:V(V({},(0,r.Se)(["files","facesFiles"])),{},{face:function(){return this.faces[this.faceName]},faceFileIds:function(){return this.facesFiles[this.faceName]||[]},shouldFavoriteSelection:function(){var e=this;return this.selectedFileIds.some((function(n){return 0===e.$store.state.files.files[n].favorite}))}}),watch:{face:function(){this.face&&this.fetchFaceContent(this.faceName)}},methods:V(V({},(0,r.nv)(["appendFiles","deleteFace","renameFace","downloadFiles","toggleFavoriteForFiles","removeFilesFromFace","moveFilesToFace"])),{},{openViewer:function(e){var n=this,t=this.files[e];OCA.Viewer.open({path:t.filename,list:this.faceFileIds.map((function(e){return V(V({},n.files[e]),{},{basename:n.files[e].basename.split("-",2)[1]})})).filter((function(e){return!e.sectionHeader})),loadMore:t.loadMore?H(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadMore(!0);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))):function(){return[]},canLoop:t.canLoop})},handleRemoveFilesFromFace:function(e){var n=this;return H(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.loadingCount++,t.next=4,n.removeFilesFromFace({faceName:n.faceName,fileIdsToRemove:e});case 4:n.resetSelection(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),_.Z.error(t.t0);case 10:return t.prev=10,n.loadingCount--,t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))()},handleDeleteFace:function(){var e=this;return H(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.loadingCount++,n.next=4,e.deleteFace({faceName:e.faceName});case 4:e.$router.push("/faces"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),_.Z.error(n.t0);case 10:return n.prev=10,e.loadingCount--,n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))()},handleRenameFace:function(e){var n=this;return H(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.loadingCount++,n.showRenameModal=!1,r=n.faceName,t.next=6,n.renameFace({oldName:r,faceName:e});case 6:n.$router.push({name:"facecontent",params:{faceName:e}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),_.Z.error(t.t0);case 12:return t.prev=12,n.loadingCount--,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()},handleMerge:function(e){var n=this;return H(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.loadingCount++,t.next=4,n.moveFilesToFace({oldFace:n.faceName,faceName:e,fileIdsToMove:n.facesFiles[n.faceName]});case 4:return t.next=6,n.deleteFace({faceName:n.faceName});case 6:n.showMergeModal=!1,n.$router.push({name:"facecontent",params:{faceName:e}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),_.Z.error(t.t0);case 13:return t.prev=13,n.loadingCount--,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))()},favoriteSelection:function(){var e=this;return H(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.loadingCount++,n.next=4,e.toggleFavoriteForFiles({fileIds:e.selectedFileIds,favoriteState:!0});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),_.Z.error(n.t0);case 9:return n.prev=9,e.loadingCount--,n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[0,6,9,12]])})))()},unFavoriteSelection:function(){var e=this;return H(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.loadingCount++,n.next=4,e.toggleFavoriteForFiles({fileIds:e.selectedFileIds,favoriteState:!1});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),_.Z.error(n.t0);case 9:return n.prev=9,e.loadingCount--,n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[0,6,9,12]])})))()},downloadSelection:function(){var e=this;return H(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.loadingCount++,n.next=4,e.downloadFiles(e.selectedFileIds);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),_.Z.error(n.t0);case 9:return n.prev=9,e.loadingCount--,n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[0,6,9,12]])})))()}})};var K=t(9744),X={};X.styleTagTransform=$(),X.setAttributes=T(),X.insert=D().bind(null,"head"),X.domAPI=M(),X.insertStyleElement=N();B()(K.Z,X);K.Z&&K.Z.locals&&K.Z.locals;const J=(0,f.Z)(U,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return void 0!==e.face||e.loadingFiles||e.loadingFaces?e.errorFetchingFiles||e.errorFetchingFaces?t("EmptyContent",{scopedSlots:e._u([{key:"icon",fn:function(){return[t("AlertCircle")]},proxy:!0}])},[e._v("\n\t"+e._s(e.t("photos","An error occurred"))+"\n")]):t("div",{staticClass:"face"},[t("div",{staticClass:"face__header"},[t("div",{staticClass:"face__header__left"},[t("Actions",[t("ActionButton",{on:{click:function(n){return e.$router.push("/faces/")}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("ArrowLeft")]},proxy:!0}])},[e._v(e._s(e.t("photos","Back"))+"\n\t\t\t\t")])],1),e._v(" "),t("div",{staticClass:"face__header__title"},[void 0!==e.face?t("h2",{class:{"face-name":!0,"hidden-visually":e.face.basename.match(/^[0-9]+$/)}},[e._v("\n\t\t\t\t\t"+e._s(e.face.basename)+"\n\t\t\t\t")]):e._e()]),e._v(" "),e.loadingCount>0||e.loadingFaces?t("Loader"):e._e()],1),e._v(" "),void 0!==e.face?t("div",{staticClass:"face__header__actions"},[t("Actions",[t("ActionButton",{attrs:{"close-after-click":!0,"aria-label":e.t("photos","Rename person")},on:{click:function(n){e.showRenameModal=!0}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Pencil")]},proxy:!0}],null,!1,514409694)},[e._v("\n\t\t\t\t\t"+e._s(e.t("photos","Rename person"))+"\n\t\t\t\t")])],1),e._v(" "),t("Actions",{attrs:{"force-menu":!0}},[Object.keys(e.faces).length>1?t("ActionButton",{attrs:{"close-after-click":!0,"aria-label":e.t("photos","Merge with different person")},on:{click:function(n){e.showMergeModal=!0}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Merge")]},proxy:!0}],null,!1,3117189691)},[e._v("\n\t\t\t\t\t"+e._s(e.t("photos","Merge with different person"))+"\n\t\t\t\t")]):e._e(),e._v(" "),e.selectedFileIds.length?[t("ActionButton",{attrs:{"close-after-click":!0,"aria-label":e.t("photos","Download selected files")},on:{click:e.downloadSelection}},[t("Download",{attrs:{slot:"icon"},slot:"icon"}),e._v("\n\t\t\t\t\t\t"+e._s(e.t("photos","Download selected photos"))+"\n\t\t\t\t\t")],1),e._v(" "),e.shouldFavoriteSelection?t("ActionButton",{attrs:{"close-after-click":!0,"aria-label":e.t("photos","Mark selection as favorite")},on:{click:e.favoriteSelection}},[t("Star",{attrs:{slot:"icon"},slot:"icon"}),e._v("\n\t\t\t\t\t\t"+e._s(e.t("photos","Favorite"))+"\n\t\t\t\t\t")],1):t("ActionButton",{attrs:{"close-after-click":!0,"aria-label":e.t("photos","Remove selection from favorites")},on:{click:e.unFavoriteSelection}},[t("Star",{attrs:{slot:"icon"},slot:"icon"}),e._v("\n\t\t\t\t\t\t"+e._s(e.t("photos","Remove from favorites"))+"\n\t\t\t\t\t")],1),e._v(" "),t("ActionButton",{attrs:{"close-after-click":!0},on:{click:function(n){return e.handleRemoveFilesFromFace(e.selectedFileIds)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Close")]},proxy:!0}],null,!1,1051939733)},[e._v("\n\t\t\t\t\t\t"+e._s(e.n("photos","Remove photo from person","Remove photos from person",e.selectedFileIds.length))+"\n\t\t\t\t\t")])]:e._e(),e._v(" "),t("ActionButton",{attrs:{"close-after-click":!0},on:{click:e.handleDeleteFace},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Close")]},proxy:!0}],null,!1,1051939733)},[e._v("\n\t\t\t\t\t"+e._s(e.t("photos","Remove person"))+"\n\t\t\t\t")])],2)],1):e._e()]),e._v(" "),void 0!==e.face?t("FilesListViewer",{staticClass:"face__photos",attrs:{"use-window":!0,"file-ids":e.faceFileIds,loading:e.loadingFiles||e.loadingFaces},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.file,a=n.visibility;return t("File",{attrs:{file:e.files[r.id],"allow-selection":!0,selected:!0===e.selection[r.id],visibility:a,semaphore:e.semaphore},on:{click:e.openViewer,"select-toggled":e.onFileSelectToggle}})}}],null,!1,3592900521)}):e._e(),e._v(" "),e.showRenameModal?t("Modal",{attrs:{title:e.t("photos","Rename person")},on:{close:function(n){e.showRenameModal=!1}}},[t("div",{staticClass:"rename-form"},[t("input",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameInput",attrs:{type:"text",name:"name",required:"",placeholder:e.t("photos","Name of this person")},domProps:{value:e.faceName},on:{keydown:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handleRenameFace(e.$refs.nameInput.value)}}}),e._v(" "),t("Button",{attrs:{"aria-label":e.t("photos","Save."),type:"primary",disabled:e.$refs.nameInput&&""===e.$refs.nameInput.value.trim()},on:{click:function(n){return e.handleRenameFace(e.$refs.nameInput.value)}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.loadingCount?t("Loader"):t("Send")]},proxy:!0}],null,!1,3935163698)},[e._v("\n\t\t\t\t"+e._s(e.t("photos","Save"))+"\n\t\t\t")])],1)]):e._e(),e._v(" "),e.showMergeModal?t("Modal",{attrs:{title:e.t("photos","Merge person")},on:{close:function(n){e.showMergeModal=!1}}},[t("FaceMergeForm",{attrs:{"first-face":e.faceName},on:{select:function(n){return e.handleMerge(n)}}})],1):e._e()],1):t("EmptyContent",{staticClass:"empty-content-with-illustration",scopedSlots:e._u([{key:"icon",fn:function(){return[t("AccountBoxMultipleOutline")]},proxy:!0}],null,!1,2861705255)},[e._v("\n\t"+e._s(e.t("photos","This person could not be found"))+"\n")])}),[],!1,null,"bbffc378",null).exports}}]);
//# sourceMappingURL=photos-src_views_FaceContent_vue.js.map?v=b81f9a1351aa95512d7c