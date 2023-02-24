/*! For license information please see photos-src_views_AlbumContent_vue.js.LICENSE.txt */
(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_AlbumContent_vue"],{53128:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var r=n(87537),o=n.n(r),i=n(23645),a=n.n(i)()(o());a.push([t.id,".file-picker[data-v-76082b60]{display:flex;flex-direction:column;padding:12px}.file-picker__content[data-v-76082b60]{display:flex;align-items:flex-start;flex-grow:1;height:500px}.file-picker__navigation[data-v-76082b60]{flex-basis:200px;overflow:scroll;margin-right:8px;padding-right:8px;height:100%}@media only screen and (max-width: 1200px){.file-picker__navigation[data-v-76082b60]{flex-basis:100px}}.file-picker__navigation--placeholder[data-v-76082b60]{background:var(--color-primary-light);border-radius:var(--border-radius-large)}.file-picker__navigation__month[data-v-76082b60]{font-weight:bold;font-size:16px;border-radius:var(--border-radius-pill);padding:8px 16px;margin:4px 0;cursor:pointer}@media only screen and (max-width: 1200px){.file-picker__navigation__month[data-v-76082b60]{text-align:center}}.file-picker__navigation__month[data-v-76082b60]:hover{background:var(--color-background-dark)}.file-picker__navigation__month.selected[data-v-76082b60]{background:var(--color-primary-element-lighter)}.file-picker__file-list[data-v-76082b60]{flex-grow:1;min-width:0;height:100%}.file-picker__file-list--placeholder[data-v-76082b60]{background:var(--color-primary-light);border-radius:var(--border-radius-large)}.file-picker__file-list .section-header[data-v-76082b60]{font-weight:bold;font-size:20px;padding:8px 0 4px 0}.file-picker__file-list[data-v-76082b60] .empty-content{position:absolute;width:100%;margin-top:0;height:100%;display:flex;flex-direction:column;justify-content:center}.file-picker__actions[data-v-76082b60]{display:flex;justify-content:space-between;justify-items:center;padding-top:16px}","",{version:3,sources:["webpack://./src/components/FilesPicker.vue"],names:[],mappings:"AAEA,8BACC,YAAA,CACA,qBAAA,CACA,YAAA,CAEA,uCACC,YAAA,CACA,sBAAA,CACA,WAAA,CACA,YAAA,CAGD,0CACC,gBAAA,CACA,eAAA,CACA,gBAAA,CACA,iBAAA,CACA,WAAA,CAEA,2CAPD,0CAQE,gBAAA,CAAA,CAGD,uDACC,qCAAA,CACA,wCAAA,CAGD,iDACC,gBAAA,CACA,cAAA,CACA,uCAAA,CACA,gBAAA,CACA,YAAA,CACA,cAAA,CAEA,2CARD,iDASE,iBAAA,CAAA,CAGD,uDACC,uCAAA,CAGD,0DACC,+CAAA,CAKH,yCACC,WAAA,CACA,WAAA,CACA,WAAA,CAEA,sDACC,qCAAA,CACA,wCAAA,CAGD,yDACC,gBAAA,CACA,cAAA,CACA,mBAAA,CAGD,wDACC,iBAAA,CACA,UAAA,CACA,YAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CAIF,uCACC,YAAA,CACA,6BAAA,CACA,oBAAA,CACA,gBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.file-picker {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 12px;\n\n\t&__content {\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\tflex-grow: 1;\n\t\theight: 500px;\n\t}\n\n\t&__navigation {\n\t\tflex-basis: 200px;\n\t\toverflow: scroll;\n\t\tmargin-right: 8px;\n\t\tpadding-right: 8px;\n\t\theight: 100%;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tflex-basis: 100px;\n\t\t}\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-light);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t}\n\n\t\t&__month {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 16px;\n\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\tpadding: 8px 16px;\n\t\t\tmargin: 4px 0;\n\t\t\tcursor: pointer;\n\n\t\t\t@media only screen and (max-width: 1200px) {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\tbackground: var(--color-background-dark);\n\t\t\t}\n\n\t\t\t&.selected {\n\t\t\t\tbackground: var(--color-primary-element-lighter);\n\t\t\t}\n\t\t}\n\t}\n\n\t&__file-list {\n\t\tflex-grow: 1;\n\t\tmin-width: 0;\n\t\theight: 100%;\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-light);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t}\n\n\t\t.section-header {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 20px;\n\t\t\tpadding: 8px 0 4px 0;\n\t\t}\n\n\t\t:deep .empty-content {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\tmargin-top: 0;\n\t\t\theight: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n\n\t&__actions {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tjustify-items: center;\n\t\tpadding-top: 16px;\n\t}\n}\n'],sourceRoot:""}]);const l=a},10057:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var r=n(87537),o=n.n(r),i=n(23645),a=n.n(i)()(o());a.push([t.id,".album__title[data-v-32861aa1]{width:100%}.album__name[data-v-32861aa1]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.album__location[data-v-32861aa1]{margin-left:-4px;display:flex;color:var(--color-text-lighter)}","",{version:3,sources:["webpack://./src/views/AlbumContent.vue"],names:[],mappings:"AAGC,+BACC,UAAA,CAGD,8BACC,eAAA,CACA,kBAAA,CACA,sBAAA,CAGD,kCACC,gBAAA,CACA,YAAA,CACA,+BAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.album {\n\t&__title {\n\t\twidth: 100%;\n\t}\n\n\t&__name {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t&__location {\n\t\tmargin-left: -4px;\n\t\tdisplay: flex;\n\t\tcolor: var(--color-text-lighter);\n\t}\n}\n'],sourceRoot:""}]);const l=a},8356:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const r={name:"ShareVariantIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,n(51900).Z)(r,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon share-variant-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},10294:(t,e,n)=>{"use strict";n.d(e,{Z:()=>M});var r=n(20629),o=n(15961),i=n(52587),a=n(80351),l=n.n(a),s=n(12571),c=n(43367),u=n(24420),d=n(66951),p=n(98171),h=n(28391),m=n(81090),f=n(3301);function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const g={name:"FilesPicker",components:{File:u.Z,FilesListViewer:c.Z,ImagePlus:s.Z,NcButton:o.P2,NcLoadingIcon:o.lb,UploadPicker:i.e},filters:{dateMonthAndYear:function(t){return l()(t,"YYYYMM").format("MMMM YYYY")}},mixins:[d.Z,h.Z,p.Z,m.Z],props:{destination:{type:String,required:!0},blacklistIds:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},data:function(){return{allowedMimes:f.ZP,targetMonth:null,uploadContext:{route:"albumpicker"}}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,r.Se)(["files"])),watch:{monthsList:function(t){null===this.targetMonth&&(this.targetMonth=t[0])}},methods:{getFiles:function(){this.fetchFiles("",{},this.blacklistIds)},emitPickedEvent:function(){this.$emit("files-picked",this.selectedFileIds)}}};var v=n(93379),C=n.n(v),y=n(7795),_=n.n(y),w=n(90569),x=n.n(w),k=n(3565),F=n.n(k),P=n(19216),N=n.n(P),E=n(44589),O=n.n(E),S=n(53128),L={};L.styleTagTransform=O(),L.setAttributes=F(),L.insert=x().bind(null,"head"),L.domAPI=_(),L.insertStyleElement=N();C()(S.Z,L);S.Z&&S.Z.locals&&S.Z.locals;const M=(0,n(51900).Z)(g,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"file-picker"},[e("div",{staticClass:"file-picker__content"},[e("div",{staticClass:"file-picker__navigation",class:{"file-picker__navigation--placeholder":0===t.monthsList.length}},t._l(t.monthsList,(function(n){return e("div",{key:n,staticClass:"file-picker__navigation__month",class:{selected:t.targetMonth===n},on:{click:function(e){t.targetMonth=n}}},[t._v("\n\t\t\t\t"+t._s(t._f("dateMonthAndYear")(n))+"\n\t\t\t")])})),0),t._v(" "),e("FilesListViewer",{staticClass:"file-picker__file-list",class:{"file-picker__file-list--placeholder":0===t.monthsList.length},attrs:{"file-ids-by-section":t.fileIdsByMonth,"empty-message":t.t("photos","There are no photos or videos yet!"),sections:t.monthsList,loading:t.loadingFiles,"base-height":100,"section-header-height":50,"scroll-to-section":t.targetMonth},on:{"need-content":t.getFiles},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.file,o=n.height,i=n.visibility;return[r.sectionHeader?e("h3",{staticClass:"section-header",style:{height:"".concat(o,"px")},attrs:{id:"file-picker-section-header-".concat(r.id)}},[t._v("\n\t\t\t\t\t"+t._s(t._f("dateMonthAndYear")(r.id))+"\n\t\t\t\t")]):e("File",{attrs:{file:t.files[r.id],"allow-selection":!0,selected:!0===t.selection[r.id],visibility:i,semaphore:t.semaphore},on:{"select-toggled":t.onFileSelectToggle}})]}}])})],1),t._v(" "),e("div",{staticClass:"file-picker__actions"},[e("UploadPicker",{attrs:{accept:t.allowedMimes,context:t.uploadContext,destination:t.photosLocation,multiple:!0},on:{uploaded:t.getFiles}}),t._v(" "),e("NcButton",{attrs:{type:"primary",disabled:t.loading||0===t.selectedFileIds.length},on:{click:t.emitPickedEvent},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?t._e():e("ImagePlus"),t._v(" "),t.loading?e("NcLoadingIcon"):t._e()]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("photos","Add to {destination}",{destination:t.destination}))+"\n\t\t")])],1)])}),[],!1,null,"76082b60",null).exports},34056:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>et});var o=r(91770),i=r(45994),a=r(20629),l=r(15961),s=r(52587),c=r(20296),u=r.n(c),d=r(98293),p=r(11341),h=r(12571),m=r(50863),f=r(49976),A=r(69141);var b=r(8356),g=r(69363),v=r(12945),C=r(66951),y=r(81090),_=r(84598),w=r(69554),x=r(3086),k=r(66524),F=r(10294),P=r(71823),N=r(94236),E=r(3301),O=r(81067),S=r(2161),L=r(59537);function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function Z(){Z=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function c(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),l=new k(o||[]);return r(a,"_invoke",{value:y(t,n,l)}),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var d={};function p(){}function h(){}function m(){}var f={};s(f,i,(function(){return this}));var A=Object.getPrototypeOf,b=A&&A(A(F([])));b&&b!==e&&n.call(b,i)&&(f=b);var g=m.prototype=p.prototype=Object.create(f);function v(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function o(r,i,a,l){var s=u(t[r],t,i);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==M(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,a,l)}),(function(t){o("throw",t,a,l)})):e.resolve(d).then((function(t){c.value=t,a(c)}),(function(t){return o("throw",t,a,l)}))}l(s.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function y(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=_(a,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function _(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function F(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=m,r(g,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:h,configurable:!0}),h.displayName=s(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,l,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},v(C.prototype),s(C.prototype,a,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new C(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},v(g),s(g,l,"Generator"),s(g,i,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=F,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function j(t,e,n,r,o,i,a){try{var l=t[i](a),s=l.value}catch(t){return void n(t)}l.done?e(s):Promise.resolve(s).then(r,o)}function B(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){j(i,r,o,a,l,"next",t)}function l(t){j(i,r,o,a,l,"throw",t)}a(void 0)}))}}function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){I(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const W={name:"AlbumContent",components:{ActionFavorite:_.Z,AlbumForm:w.Z,Close:d.default,CollaboratorsSelectionForm:x.Z,CollectionContent:k.Z,Delete:p.Z,FilesPicker:F.Z,HeaderNavigation:P.Z,ImagePlus:h.Z,MapMarker:m.Z,NcActionButton:l.Js,NcActions:l.O3,NcActionSeparator:l.rr,NcButton:l.P2,NcEmptyContent:l.SL,NcLoadingIcon:l.lb,NcModal:l.Jc,Pencil:f.default,Plus:A.Z,ShareVariant:b.Z,UploadPicker:s.e},mixins:[g.Z,v.Z,C.Z,l.tq,y.Z],props:{albumName:{type:String,default:"/"}},data:function(){var e=this;return{allowedMimes:E.ZP,showAddPhotosModal:!1,showManageCollaboratorView:!1,showEditAlbumForm:!1,loadingAddCollaborators:!1,newFileMenuEntry:{id:"album-add",displayName:t("photos","Add photos to this album"),templateName:"",if:function(t){return t.route===e.$route.name},iconSvgInline:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-plus" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>',handler:function(){e.showAddPhotosModal=!0}}}},computed:D(D({},(0,a.Se)(["albumsFiles"])),{},{album:function(){return this.albums[this.albumName]||{}},albumFileIds:function(){return this.albumsFiles[this.albumName]||[]},sharingEnabled:function(){return void 0!==OC.Share},uploadContext:function(){var t;return D(D({},this.album),{},{route:this.$route.name,root:"dav/photos/".concat(null===(t=(0,i.ts)())||void 0===t?void 0:t.uid,"/albums")})}}),watch:{album:function(t,e){t.filename!==e.filename&&this.fetchAlbumContent()}},mounted:function(){this.fetchAlbumContent(),(0,o.cd)(this.newFileMenuEntry)},destroyed:function(){(0,o.oE)(this.newFileMenuEntry)},methods:D(D({},(0,a.nv)(["appendFiles","deleteAlbum","addFilesToAlbum","removeFilesFromAlbum","updateAlbum"])),{},{fetchAlbumContent:function(){var t=this;return B(Z().mark((function e(){var n,r,o,a,l,s,c;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loadingFiles&&!t.showEditAlbumForm){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,t.semaphore.acquire((function(){return 0}),"fetchFiles");case 4:return n=e.sent,e.next=7,t.fetchSemaphore.acquire();case 7:return r=e.sent,e.prev=8,t.errorFetchingFiles=null,t.loadingFiles=!0,t.semaphoreSymbol=n,e.next=14,O.ZP.getDirectoryContents("/photos/".concat(null===(o=(0,i.ts)())||void 0===o?void 0:o.uid,"/albums/").concat(t.albumName),{data:S.Z,details:!0,signal:t.abortController.signal});case 14:if(a=e.sent,l=a.data.map((function(t){return(0,N.AX)(t)})).filter((function(t){return t.fileid})),s=l.map((function(t){return t.fileid.toString()})),t.appendFiles(l),!(l.length>0)){e.next=21;break}return e.next=21,t.$store.commit("setAlbumFiles",{albumName:t.albumName,fileIds:s});case 21:L.Z.debug("[AlbumContent] Fetched ".concat(s.length," new files: "),s),e.next=36;break;case 24:if(e.prev=24,e.t0=e.catch(8),404!==(null===(c=e.t0.response)||void 0===c?void 0:c.status)){e.next=30;break}t.errorFetchingFiles=404,e.next=35;break;case 30:if("ERR_CANCELED"!==e.t0.code){e.next=34;break}return e.abrupt("return");case 34:t.errorFetchingFiles=e.t0;case 35:L.Z.error("[AlbumContent] Error fetching album files",{error:e.t0});case 36:return e.prev=36,t.loadingFiles=!1,t.semaphore.release(n),t.fetchSemaphore.release(r),e.finish(36);case 41:return e.abrupt("return",[]);case 42:case"end":return e.stop()}}),e,null,[[8,24,36,41]])})))()},redirectToNewName:function(t){var e=t.album;this.showEditAlbumForm=!1,this.album.basename!==e.basename&&this.$router.push("/albums/".concat(e.basename))},handleFilesPicked:function(t){var e=this;return B(Z().mark((function n(){return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.showAddPhotosModal=!1,n.next=3,e.addFilesToAlbum({albumName:e.albumName,fileIdsToAdd:t});case 3:return n.next=5,e.fetchAlbumContent();case 5:case"end":return n.stop()}}),n)})))()},handleRemoveFilesFromAlbum:function(t){var e=this;return B(Z().mark((function n(){return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.$refs.collectionContent.onUncheckFiles(t),n.next=3,e.removeFilesFromAlbum({albumName:e.albumName,fileIdsToRemove:t});case 3:case"end":return n.stop()}}),n)})))()},handleDeleteAlbum:function(){var t=this;return B(Z().mark((function e(){return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.deleteAlbum({albumName:t.albumName});case 2:t.$router.push("/albums");case 3:case"end":return e.stop()}}),e)})))()},handleSetCollaborators:function(t){var e=this;return B(Z().mark((function n(){return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.loadingAddCollaborators=!0,e.showManageCollaboratorView=!1,n.next=5,e.updateAlbum({albumName:e.albumName,properties:{collaborators:t}});case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),L.Z.error(n.t0);case 10:return n.prev=10,e.loadingAddCollaborators=!1,n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))()},onUpload:u()((function(){this.fetchAlbumContent()}),500)})};var Y=r(93379),G=r.n(Y),V=r(7795),$=r.n(V),z=r(90569),H=r.n(z),R=r(3565),U=r.n(R),q=r(19216),J=r.n(q),K=r(44589),Q=r.n(K),X=r(10057),tt={};tt.styleTagTransform=Q(),tt.setAttributes=U(),tt.insert=H().bind(null,"head"),tt.domAPI=$(),tt.insertStyleElement=J();G()(X.Z,tt);X.Z&&X.Z.locals&&X.Z.locals;const et=(0,r(51900).Z)(W,(function(){var t=this,e=t._self._c;return e("div",[e("CollectionContent",{ref:"collectionContent",attrs:{collection:t.album,"collection-file-ids":t.albumFileIds,semaphore:t.semaphore,loading:t.loadingAlbums||t.loadingFiles,error:t.errorFetchingAlbums||t.errorFetchingFiles},scopedSlots:t._u([{key:"header",fn:function(n){var r=n.selectedFileIds;return e("HeaderNavigation",{key:"navigation",attrs:{loading:t.loadingFiles,params:{albumName:t.albumName},path:"/"+t.albumName,title:t.albumName},on:{refresh:t.fetchAlbumContent}},[""!==t.album.location?e("div",{staticClass:"album__location",attrs:{slot:"subtitle"},slot:"subtitle"},[e("MapMarker"),t._v(t._s(t.album.location)+"\n\t\t\t")],1):t._e(),t._v(" "),void 0!==t.album?e("template",{slot:"right"},[0!==t.album.nbItems?e("UploadPicker",{attrs:{accept:t.allowedMimes,context:t.uploadContext,destination:t.album.basename,root:t.uploadContext.root,multiple:!0},on:{uploaded:t.onUpload}}):t._e(),t._v(" "),t.sharingEnabled?e("NcButton",{attrs:{type:"tertiary","aria-label":t.t("photos","Manage collaborators for this album")},on:{click:function(e){t.showManageCollaboratorView=!0}}},[e("ShareVariant",{attrs:{slot:"icon"},slot:"icon"})],1):t._e(),t._v(" "),e("NcActions",{attrs:{"aria-label":t.t("photos","Open actions menu")}},[e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Edit album details")},on:{click:function(e){t.showEditAlbumForm=!0}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Edit album details"))+"\n\t\t\t\t\t\t"),e("Pencil",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0},on:{click:t.handleDeleteAlbum}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Delete album"))+"\n\t\t\t\t\t\t"),e("Delete",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),r.length>0?[e("NcActionSeparator"),t._v(" "),e("ActionFavorite",{attrs:{"selected-file-ids":r}}),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0},on:{click:function(e){return t.handleRemoveFilesFromAlbum(r)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.t("photos","Remove selection from album"))+"\n\t\t\t\t\t\t\t"),e("Close",{attrs:{slot:"icon"},slot:"icon"})],1)]:t._e()],2)],1):t._e()],2)}}],null,!1,230761007)},[t._v(" "),void 0===t.album||0!==t.album.nbItems||t.loadingFiles||t.loadingAlbums?t._e():e("NcEmptyContent",{staticClass:"album__empty",attrs:{slot:"empty-content",title:t.t("photos","This album does not have any photos or videos yet!")},slot:"empty-content"},[e("ImagePlus",{attrs:{slot:"icon"},slot:"icon"}),t._v(" "),e("NcButton",{staticClass:"album__empty__button",attrs:{slot:"action",type:"primary","aria-label":t.t("photos","Add photos to this album")},on:{click:function(e){t.showAddPhotosModal=!0}},slot:"action"},[e("Plus",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n\t\t\t\t"+t._s(t.t("photos","Add"))+"\n\t\t\t")],1)],1)],1),t._v(" "),t.showAddPhotosModal?e("NcModal",{attrs:{size:"large",title:t.t("photos","Add photos to the album")},on:{close:function(e){t.showAddPhotosModal=!1}}},[e("FilesPicker",{attrs:{destination:t.album.basename,"blacklist-ids":t.albumFileIds},on:{"files-picked":t.handleFilesPicked}})],1):t._e(),t._v(" "),t.showManageCollaboratorView?e("NcModal",{attrs:{title:t.t("photos","Manage collaborators")},on:{close:function(e){t.showManageCollaboratorView=!1}}},[e("CollaboratorsSelectionForm",{attrs:{"album-name":t.album.basename,collaborators:t.album.collaborators,"public-link":t.album.publicLink},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.collaborators;return[e("NcButton",{attrs:{"aria-label":t.t("photos","Save collaborators for this album."),type:"primary",disabled:t.loadingAddCollaborators},on:{click:function(e){return t.handleSetCollaborators(r)}},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loadingAddCollaborators?e("NcLoadingIcon"):t._e()]},proxy:!0}],null,!0)},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Save"))+"\n\t\t\t\t")])]}}],null,!1,4058924180)})],1):t._e(),t._v(" "),t.showEditAlbumForm?e("NcModal",{attrs:{title:t.t("photos","Edit album details")},on:{close:function(e){t.showEditAlbumForm=!1}}},[e("AlbumForm",{attrs:{album:t.album},on:{done:t.redirectToNewName}})],1):t._e()],1)}),[],!1,null,"32861aa1",null).exports},80950:()=>{},46601:()=>{},89214:()=>{},96419:()=>{},56353:()=>{},8623:()=>{},7748:()=>{},85568:()=>{},69386:()=>{},31616:()=>{},56619:()=>{},77108:()=>{}}]);
//# sourceMappingURL=photos-src_views_AlbumContent_vue.js.map?v=8791e87ce089ffbf6e50