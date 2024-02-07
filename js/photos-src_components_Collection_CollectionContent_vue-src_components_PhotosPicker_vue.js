/*! For license information please see photos-src_components_Collection_CollectionContent_vue-src_components_PhotosPicker_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_components_Collection_CollectionContent_vue-src_components_PhotosPicker_vue"],{55240:(t,e,n)=>{n.d(e,{c:()=>h});var i=n(82248),o=n(72948),s=n(38580),l=n(67352),a=n(3172),r=n(21136),c=n(40044),d=n.n(c);var p=n(9056);const h={name:"FetchFilesMixin",mixins:[n(31196).c],data:()=>({errorFetchingFiles:null,loadingFiles:!1,doneFetchingFiles:!1,fetchSemaphore:new p.c(1),fetchedFileIds:[]}),watch:{"$route.path"(){this.resetFetchFilesState()}},methods:{async fetchFiles(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(this.doneFetchingFiles&&!c||this.loadingFiles)return[];const p=await this.fetchSemaphore.acquire();try{this.errorFetchingFiles=null,this.loadingFiles=!0;const c=200,p=await async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e={firstResult:0,nbResults:200,mimesType:l.w7,onThisDay:!1,onlyFavorites:!1,...e};const n="/files/".concat((0,s.eo)().uid),i=e.mimesType.reduce(((t,e)=>"".concat(t,"\n\t\t<d:eq>\n\t\t\t<d:prop>\n\t\t\t\t<d:getcontenttype/>\n\t\t\t</d:prop>\n\t\t\t<d:literal>").concat(e,"</d:literal>\n\t\t</d:eq>\n\t")),""),c=e.onlyFavorites?"<d:eq>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:favorite/>\n\t\t\t\t</d:prop>\n\t\t\t\t<d:literal>1</d:literal>\n\t\t\t</d:eq>":"",p=e.onThisDay?"<d:or>".concat(Array(20).fill(1).map(((t,e)=>{const n=d()(Date.now()).startOf("day").subtract(3,"d").subtract(e+1,"y"),i=d()(Date.now()).endOf("day").add(3,"d").subtract(e+1,"y");return"<d:and>\n\t\t\t\t<d:gt>\n\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t<d:getlastmodified />\n\t\t\t\t\t</d:prop>\n\t\t\t\t\t<d:literal>".concat(n.format(d().defaultFormatUtc),"</d:literal>\n\t\t\t\t</d:gt>\n\t\t\t\t<d:lt>\n\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t<d:getlastmodified />\n\t\t\t\t\t</d:prop>\n\t\t\t\t\t<d:literal>").concat(i.format(d().defaultFormatUtc),"</d:literal>\n\t\t\t\t</d:lt>\n\t\t\t</d:and>")})).join("\n"),"</d:or>"):"";return e=Object.assign({method:"SEARCH",headers:{"content-Type":"text/xml"},data:'<?xml version="1.0" encoding="UTF-8"?>\n\t\t\t<d:searchrequest xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ns="https://github.com/icewind1991/SearchDAV/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:basicsearch>\n\t\t\t\t\t<d:select>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t'.concat(r.o,"\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t</d:select>\n\t\t\t\t\t<d:from>\n\t\t\t\t\t\t<d:scope>\n\t\t\t\t\t\t\t<d:href>").concat(n,"/").concat(t,"</d:href>\n\t\t\t\t\t\t\t<d:depth>infinity</d:depth>\n\t\t\t\t\t\t</d:scope>\n\t\t\t\t\t</d:from>\n\t\t\t\t\t<d:where>\n\t\t\t\t\t\t<d:and>\n\t\t\t\t\t\t\t<d:or>\n\t\t\t\t\t\t\t\t").concat(i,"\n\t\t\t\t\t\t\t</d:or>\n\t\t\t\t\t\t\t").concat(c,"\n\t\t\t\t\t\t\t").concat(p,"\n\t\t\t\t\t\t</d:and>\n\t\t\t\t\t</d:where>\n\t\t\t\t\t<d:orderby>\n\t\t\t\t\t\t<d:order>\n\t\t\t\t\t\t\t<d:prop><nc:metadata-photos-original_date_time/></d:prop>\n\t\t\t\t\t\t\t<d:descending/>\n\t\t\t\t\t\t</d:order>\n\t\t\t\t\t\t<d:order>\n\t\t\t\t\t\t\t<d:prop><d:getlastmodified/></d:prop>\n\t\t\t\t\t\t\t<d:descending/>\n\t\t\t\t\t\t</d:order>\n\t\t\t\t\t</d:orderby>\n\t\t\t\t\t<d:limit>\n\t\t\t\t\t\t<d:nresults>").concat(e.nbResults,"</d:nresults>\n\t\t\t\t\t\t<ns:firstresult>").concat(e.firstResult,"</ns:firstresult>\n\t\t\t\t\t</d:limit>\n\t\t\t\t</d:basicsearch>\n\t\t\t</d:searchrequest>"),deep:!0,details:!0},e),(await a.cp.getDirectoryContents("",e)).data.map((t=>(0,o.UH)(t)))}(t,{firstResult:this.fetchedFileIds.length,nbResults:c,...e,signal:this.abortController.signal});p.length!==c&&(this.doneFetchingFiles=!0);const h=p.map((t=>t.fileid)).filter((t=>!this.fetchedFileIds.includes(t.toString())));return this.fetchedFileIds.push(...h.map((t=>t.toString())).filter((t=>!n.includes(t)))),this.$store.dispatch("appendFiles",p),i.c.debug("[FetchFilesMixin] Fetched ".concat(h.length," new files: "),h),h}catch(t){var h;if(404===(null===(h=t.response)||void 0===h?void 0:h.status))this.errorFetchingFiles=404;else{if("ERR_CANCELED"===t.code)return[];this.errorFetchingFiles=t}i.c.error("Error fetching files",{error:t}),console.error(t)}finally{this.loadingFiles=!1,this.fetchSemaphore.release(p)}return[]},resetFetchFilesState(){this.doneFetchingFiles=!1,this.errorFetchingFiles=null,this.loadingFiles=!1,this.fetchedFileIds=[]}}}},88976:(t,e,n)=>{n.d(e,{c:()=>i});const i={name:"FilesByMonthMixin",computed:{fileIdsByMonth(){const t={};for(const n of this.fetchedFileIds){const i=this.files[n];var e;if(i)t[i.month]=null!==(e=t[i.month])&&void 0!==e?e:[],t[i.month].push(i.fileid)}return Object.keys(t).forEach((e=>t[e].sort(this.sortFilesByTimestamp))),t},monthsList(){return Object.keys(this.fileIdsByMonth).sort(((t,e)=>t>e?-1:1))}},methods:{sortFilesByTimestamp(t,e){return this.files[t].timestamp>this.files[e].timestamp?-1:1}}}},73824:(t,e,n)=>{n.d(e,{c:()=>a});var i=n(25648),o=n.n(i),s=n(2312),l=n.n(s)()(o());l.push([t.id,".collection[data-v-550e2ad4]{display:flex;flex-direction:column}.collection__media[data-v-550e2ad4]{padding:0 64px}@media only screen and (max-width: 1200px){.collection__media[data-v-550e2ad4]{padding:0 4px}}","",{version:3,sources:["webpack://./src/components/Collection/CollectionContent.vue"],names:[],mappings:"AAEA,6BACC,YAAA,CACA,qBAAA,CAEA,oCACC,cAAA,CAEA,2CAHD,oCAIE,aAAA,CAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.collection {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t&__media {\n\t\tpadding: 0 64px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 0 4px;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const a=l},33684:(t,e,n)=>{n.d(e,{c:()=>a});var i=n(25648),o=n.n(i),s=n(2312),l=n.n(s)()(o());l.push([t.id,"[data-v-237c32cc] .photos-picker{padding-inline-end:0 !important}.photos-picker__navigation__month[data-v-237c32cc]{margin:4px}.photos-picker__navigation__month-select[data-v-237c32cc]{flex:1;padding-inline-end:12px;padding-block-end:6px}.photos-picker__file-list[data-v-237c32cc]{flex-grow:1;min-width:0;height:100%;padding:0 4px}.photos-picker__file-list--placeholder[data-v-237c32cc]{background:var(--color-primary-element-light);border-radius:var(--border-radius-large)}.photos-picker__file-list .section-header[data-v-237c32cc]{font-weight:bold;font-size:20px;padding:8px 0 4px 0}.photos-picker__file-list[data-v-237c32cc] .empty-content{position:absolute;width:100%;margin-top:0;height:100%;display:flex;flex-direction:column;justify-content:center}","",{version:3,sources:["webpack://./src/components/PhotosPicker.vue"],names:[],mappings:"AAEA,iCAEC,+BAAA,CAMC,mDAEC,UAAA,CAGD,0DACC,MAAA,CAEA,uBAAA,CACA,qBAAA,CAIF,2CACC,WAAA,CACA,WAAA,CACA,WAAA,CACA,aAAA,CAEA,wDACC,6CAAA,CACA,wCAAA,CAGD,2DACC,gBAAA,CACA,cAAA,CACA,mBAAA,CAGD,0DACC,iBAAA,CACA,UAAA,CACA,YAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n:deep(.photos-picker) {\n\t// remove padding to move scrollbar to the very end\n\tpadding-inline-end: 0 !important;\n}\n\n.photos-picker {\n\n\t&__navigation {\n\t\t&__month {\n\t\t\t// For focus-visible outline\n\t\t\tmargin: 4px;\n\t\t}\n\n\t\t&__month-select {\n\t\t\tflex: 1;\n\t\t\t// align with other content\n\t\t\tpadding-inline-end: 12px;\n\t\t\tpadding-block-end: 6px;\n\t\t}\n\t}\n\n\t&__file-list {\n\t\tflex-grow: 1;\n\t\tmin-width: 0;\n\t\theight: 100%;\n\t\tpadding: 0 4px;\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-element-light);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t}\n\n\t\t.section-header {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 20px;\n\t\t\tpadding: 8px 0 4px 0;\n\t\t}\n\n\t\t:deep .empty-content {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\tmargin-top: 0;\n\t\t\theight: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const a=l},9824:(t,e,n)=>{n.d(e,{c:()=>o});const i={name:"AlertCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,n(1456).c)(i,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon alert-circle-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},68140:(t,e,n)=>{n.d(e,{c:()=>o});const i={name:"FolderMultipleImageIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,n(1456).c)(i,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon folder-multiple-image-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M7,15L11.5,9L15,13.5L17.5,10.5L21,15M22,4H14L12,2H6A2,2 0 0,0 4,4V16A2,2 0 0,0 6,18H22A2,2 0 0,0 24,16V6A2,2 0 0,0 22,4M2,6H0V11H0V20A2,2 0 0,0 2,22H20V20H2V6Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},38744:(t,e,n)=>{n.d(e,{c:()=>o});const i={name:"ImagePlusIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,n(1456).c)(i,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon image-plus-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},45780:(t,e,n)=>{n.d(e,{c:()=>k});var i=n(9824),o=n(68140),s=n(59804),l=n(59620),a=n(65019),r=n(52516),c=n(30112);const d={name:"CollectionContent",components:{AlertCircle:i.c,FolderMultipleImage:o.c,NcEmptyContent:s.sJ,FilesListViewer:r.c,File:c.c},mixins:[a.c,s.y8],props:{collection:{type:Object,default:()=>{}},collectionFileIds:{type:Array,required:!0},loading:{type:Boolean,default:!1},allowSelection:{type:Boolean,default:!0},error:{type:[Error,Number],default:null}},data:()=>({appContent:document.getElementById("app-content-vue")}),computed:{files(){return this.$store.getters.files},sortedCollectionFileIds(){return this.collectionFileIds.toSorted(((t,e)=>this.files[t].timestamp<this.files[e].timestamp?-1:1))}},methods:{openViewer(t){const e=this.files[t];OCA.Viewer.open({fileInfo:e,list:this.sortedCollectionFileIds.map((t=>this.files[t])).filter((t=>!t.sectionHeader)),loadMore:e.loadMore?async()=>await e.loadMore(!0):()=>[],canLoop:e.canLoop})},t:l.GS}};var p=n(14596),h=n.n(p),u=n(86520),m=n.n(u),g=n(36176),f=n.n(g),A=n(65120),C=n.n(A),_=n(66808),y=n.n(_),v=n(61936),F=n.n(v),b=n(73824),x={};x.styleTagTransform=F(),x.setAttributes=C(),x.insert=f().bind(null,"head"),x.domAPI=m(),x.insertStyleElement=y();h()(b.c,x);b.c&&b.c.locals&&b.c.locals;const k=(0,n(1456).c)(d,(function(){var t=this,e=t._self._c;return void 0===t.collection&&!t.loading||404===t.error?e("NcEmptyContent",{staticClass:"empty-content-with-illustration",attrs:{name:t.t("photos","This collection does not exist")}},[e("FolderMultipleImage",{attrs:{slot:"icon"},slot:"icon"})],1):t.error?e("NcEmptyContent",{attrs:{name:t.t("photos","An error occurred")}},[e("AlertCircle",{attrs:{slot:"icon"},slot:"icon"})],1):e("div",{staticClass:"collection"},[t._t("header",null,{selectedFileIds:t.selectedFileIds,resetSelection:t.resetSelection}),t._v(" "),0!==t.sortedCollectionFileIds.length||t.loading?t._e():t._t("empty-content"),t._v(" "),void 0!==t.collection?e("FilesListViewer",{staticClass:"collection__media",attrs:{"container-element":t.appContent,"file-ids":t.sortedCollectionFileIds,"base-height":t.isMobile?120:200,loading:t.loading},scopedSlots:t._u([{key:"default",fn:function(n){let{file:i,distance:o}=n;return e("File",{attrs:{file:t.files[i.id],"allow-selection":t.allowSelection,selected:!0===t.selection[i.id],distance:o},on:{click:t.openViewer,"select-toggled":t.onFileSelectToggle}})}}],null,!1,3813029717)}):t._e()],2)}),[],!1,null,"550e2ad4",null).exports},62964:(t,e,n)=>{n.d(e,{c:()=>V});var i=n(83080),o=n(59804),s=n(7768),l=n(48416),a=n(40044),r=n.n(a),c=n(38744),d=n(52516),p=n(30112),h=n(55240),u=n(65019),m=n(88976),g=n(51204),f=n(67352);const A=(0,s._M)({name:"PhotosPicker",components:{File:p.c,FilesListViewer:d.c,ImagePlus:c.c,NcButton:o.Ut,NcDialog:o.KA,NcLoadingIcon:o.GW,NcSelect:o.MV,UploadPicker:i.lv},mixins:[h.c,m.c,u.c,g.c],props:{open:{type:Boolean,default:!0},name:{type:String,required:!0},destination:{type:String,required:!0},blacklistIds:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},emits:["files-picked","update:open"],setup:()=>({isMobile:(0,o.m2)()}),data:()=>({allowedMimes:f.cp,targetMonth:null,uploadContext:{route:"albumpicker"}}),computed:{...(0,l.gV)(["files"])},watch:{monthsList(t){null===this.targetMonth&&(this.targetMonth=t[0])}},methods:{onFocusOut(t){null===t.relatedTarget&&t.target.focus({preventScroll:!0})},getFiles(){this.fetchFiles("",{},this.blacklistIds)},refreshFiles(){this.fetchFiles("",{firstResult:0},[...this.blacklistIds,...this.fetchedFileIds],!0)},emitPickedEvent(){this.$emit("files-picked",this.selectedFileIds)},dateMonthAndYear(t){return this.isMobile?r()(t,"YYYYMM").format("MMM YYYY"):r()(t,"YYYYMM").format("MMMM YYYY")}}});var C=n(14596),_=n.n(C),y=n(86520),v=n.n(y),F=n(36176),b=n.n(F),x=n(65120),k=n.n(x),M=n(66808),w=n.n(M),I=n(61936),T=n.n(I),S=n(33684),B={};B.styleTagTransform=T(),B.setAttributes=k(),B.insert=b().bind(null,"head"),B.domAPI=v(),B.insertStyleElement=w();_()(S.c,B);S.c&&S.c.locals&&S.c.locals;const V=(0,n(1456).c)(A,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("NcDialog",{attrs:{"content-classes":"photos-picker",name:t.name,open:t.open,"out-transition":"",size:"large"},on:{"update:open":e=>t.$emit("update:open",e)},scopedSlots:t._u([{key:"navigation",fn:function(n){let{isCollapsed:i}=n;return[i?e("NcSelect",{staticClass:"photos-picker__navigation__month-select",attrs:{"aria-label-listbox":t.t("photos","Dates"),clearable:!1,"input-label":t.t("photos","Jump to specific date in list"),options:t.monthsList},scopedSlots:t._u([{key:"selected-option",fn:function(e){let{label:n}=e;return[t._v("\n\t\t\t\t"+t._s(t.dateMonthAndYear(n))+"\n\t\t\t")]}},{key:"option",fn:function(e){let{label:n}=e;return[t._v("\n\t\t\t\t"+t._s(t.dateMonthAndYear(n))+"\n\t\t\t")]}}],null,!0),model:{value:t.targetMonth,callback:function(e){t.targetMonth=e},expression:"targetMonth"}}):e("ul",{attrs:{"aria-label":t.t("photos","Dates")}},t._l(t.monthsList,(function(n){return e("li",{key:n,staticClass:"photos-picker__navigation__month"},[e("NcButton",{attrs:{type:t.targetMonth===n?"secondary":"tertiary","aria-label":t.t("photos","Jump to {date}",{date:t.dateMonthAndYear(n)})},on:{click:function(e){t.targetMonth=n}}},[t._v("\n\t\t\t\t\t"+t._s(t.dateMonthAndYear(n))+"\n\t\t\t\t")])],1)})),0)]}},{key:"actions",fn:function(){return[e("UploadPicker",{attrs:{accept:t.allowedMimes,context:t.uploadContext,destination:t.photosLocationFolder,multiple:!0},on:{uploaded:t.refreshFiles}}),t._v(" "),e("NcButton",{attrs:{type:"primary",disabled:t.loading||0===t.selectedFileIds.length},on:{click:t.emitPickedEvent},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?t._e():e("ImagePlus"),t._v(" "),t.loading?e("NcLoadingIcon"):t._e()]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("photos","Add to {destination}",{destination:t.destination}))+"\n\t\t")])]},proxy:!0}])},[t._v(" "),t._v(" "),e("FilesListViewer",{staticClass:"photos-picker__file-list",class:{"photos-picker__file-list--placeholder":0===t.monthsList.length},attrs:{"file-ids-by-section":t.fileIdsByMonth,"empty-message":t.t("photos","There are no photos or videos yet!"),sections:t.monthsList,loading:t.loadingFiles,"base-height":100,"section-header-height":50,"scroll-to-section":t.targetMonth},on:{"need-content":t.getFiles},nativeOn:{focusout:function(e){return t.onFocusOut.apply(null,arguments)}},scopedSlots:t._u([{key:"default",fn:function(n){let{file:i,height:o,isHeader:s,distance:l}=n;return[s?e("h3",{staticClass:"section-header",style:{height:"".concat(o,"px")},attrs:{id:"photos-picker-section-header-".concat(i.id)}},[t._v("\n\t\t\t\t"+t._s(t.dateMonthAndYear(i.id))+"\n\t\t\t")]):e("File",{attrs:{file:t.files[i.id],"allow-selection":!0,selected:!0===t.selection[i.id],distance:l},on:{"select-toggled":t.onFileSelectToggle}})]}}])})],1)}),[],!1,null,"237c32cc",null).exports}}]);
//# sourceMappingURL=photos-src_components_Collection_CollectionContent_vue-src_components_PhotosPicker_vue.js.map?v=62a670e8257600871016