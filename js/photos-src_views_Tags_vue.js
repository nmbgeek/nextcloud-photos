/*! For license information please see photos-src_views_Tags_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Tags_vue"],{69363:(t,e,a)=>{a.d(e,{Z:()=>n});const n={name:"AbortControllerMixin",data:()=>({abortController:new AbortController}),beforeDestroy(){this.abortController.abort()},beforeRouteLeave(t,e,a){this.abortController.abort(),this.abortController=new AbortController,a()}}},17076:(t,e,a)=>{a.d(e,{Z:()=>s});var n=a(87537),i=a.n(n),r=a(23645),o=a.n(r)()(i());o.push([t.id,".tag-cover[data-v-2e7648be]{display:flex;flex-direction:column;padding:16px;border-radius:12px}.tag-cover[data-v-2e7648be]:hover,.tag-cover[data-v-2e7648be]:focus{background:var(--color-background-dark)}.tag-cover__image[data-v-2e7648be]{width:350px;height:350px;object-fit:cover;border-radius:12px}@media only screen and (max-width: 1200px){.tag-cover__image[data-v-2e7648be]{width:250px;height:250px}}.tag-cover__image--placeholder[data-v-2e7648be]{background:var(--color-primary-element-light)}.tag-cover__image--placeholder[data-v-2e7648be] .material-design-icon{width:100%;height:100%}.tag-cover__image--placeholder[data-v-2e7648be] .material-design-icon .material-design-icon__svg{fill:var(--color-primary-element)}.tag-cover__details[data-v-2e7648be]{display:flex;flex-direction:column;margin-top:16px;width:350px}@media only screen and (max-width: 1200px){.tag-cover__details[data-v-2e7648be]{width:250px}}.tag-cover__details__first-line[data-v-2e7648be]{display:flex}.tag-cover__details__second-line[data-v-2e7648be]{display:flex;color:var(--color-text-lighter)}.tag-cover__details__name[data-v-2e7648be]{flex-grow:1;margin:0;font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/components/TagCover.vue"],names:[],mappings:"AAEA,4BACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,kBAAA,CAEA,oEACC,uCAAA,CAGD,mCACC,WAAA,CACA,YAAA,CACA,gBAAA,CACA,kBAAA,CAEA,2CAND,mCAOE,WAAA,CACA,YAAA,CAAA,CAGD,gDACC,6CAAA,CAEA,sEACC,UAAA,CACA,WAAA,CAEA,iGACC,iCAAA,CAMJ,qCACC,YAAA,CACA,qBAAA,CACA,eAAA,CACA,WAAA,CAEA,2CAND,qCAOE,WAAA,CAAA,CAGD,iDACC,YAAA,CAGD,kDACC,YAAA,CACA,+BAAA,CAGD,2CACC,WAAA,CACA,QAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.tag-cover {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 16px;\n\tborder-radius: 12px;\n\n\t&:hover, &:focus {\n\t\tbackground: var(--color-background-dark);\n\t}\n\n\t&__image {\n\t\twidth: 350px;\n\t\theight: 350px;\n\t\tobject-fit: cover;\n\t\tborder-radius: 12px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t\theight: 250px;\n\t\t}\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-element-light);\n\n\t\t\t:deep .material-design-icon {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\n\t\t\t\t.material-design-icon__svg {\n\t\t\t\t\tfill: var(--color-primary-element);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__details {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin-top: 16px;\n\t\twidth: 350px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t}\n\n\t\t&__first-line {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t&__second-line {\n\t\t\tdisplay: flex;\n\t\t\tcolor: var(--color-text-lighter);\n\t\t}\n\n\t\t&__name {\n\t\t\tflex-grow: 1;\n\t\t\tmargin: 0;\n\t\t\tfont-weight: normal;\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\n\t\t}\n\t}\n\n}\n'],sourceRoot:""}]);const s=o},70101:(t,e,a)=>{a.d(e,{Z:()=>s});var n=a(87537),i=a.n(n),r=a(23645),o=a.n(r)()(i());o.push([t.id,".loader[data-v-d7c9fb6c]{margin-top:30vh}.container[data-v-d7c9fb6c]{padding-left:44px}.container>h2[data-v-d7c9fb6c]{margin-left:14px;margin-top:40px}.popular-tags[data-v-d7c9fb6c],.tags[data-v-d7c9fb6c]{display:flex;flex-direction:row;gap:8px;flex-wrap:wrap}","",{version:3,sources:["webpack://./src/views/Tags.vue"],names:[],mappings:"AAEA,yBACC,eAAA,CAGD,4BACC,iBAAA,CAEA,+BACC,gBAAA,CACA,eAAA,CAIF,sDACC,YAAA,CACA,kBAAA,CACA,OAAA,CACA,cAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.loader {\n\tmargin-top: 30vh;\n}\n\n.container {\n\tpadding-left: 44px;\n\n\t> h2 {\n\t\tmargin-left: 14px;\n\t\tmargin-top: 40px;\n\t}\n}\n\n.popular-tags, .tags {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 8px;\n\tflex-wrap: wrap;\n}\n'],sourceRoot:""}]);const s=o},57048:(t,e,a)=>{a.d(e,{Z:()=>i});const n={name:"ImageMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const i=(0,a(51900).Z)(n,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon image-multiple-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},40299:(t,e,a)=>{a.r(e),a.d(e,{default:()=>W});var n=a(20629),i=a(71329),r=a(57048),o=a(79753),s=a(69363);const l={name:"TagCover",components:{ImageMultipleIcon:r.Z},mixins:[s.Z],props:{tag:{type:Object,required:!0}},data:()=>({loadCover:!1,observer:null}),computed:{...(0,n.Se)(["files","tags"]),coverUrl(){return this.loadCover?(0,o.nu)("/core/preview?fileId=".concat(this.tag.referenceFileid,"&x=",512,"&y=",512,"&forceIcon=0&a=1")):""},count(){return this.tag.filesAssigned}},watch:{loadCover(){this.tag.filesAssigned||this.$store.dispatch("fetchTagFiles",{id:this.tag.id,signal:this.abortController.signal})}},mounted(){this.observer=new IntersectionObserver((t=>{t[0].isIntersecting&&(this.loadCover=!0,this.observer.disconnect())})),this.observer.observe(this.$el)}};var A=a(93379),c=a.n(A),g=a(7795),d=a.n(g),p=a(90569),m=a.n(p),C=a(3565),h=a.n(C),v=a(19216),u=a.n(v),_=a(44589),f=a.n(_),x=a(17076),b={};b.styleTagTransform=f(),b.setAttributes=h(),b.insert=m().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=u();c()(x.Z,b);x.Z&&x.Z.locals&&x.Z.locals;var w=a(51900);const y={name:"Tags",components:{TagCover:(0,w.Z)(l,(function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"tag-cover",attrs:{to:"/tags/".concat(t.tag.displayName)}},[0!==t.tag.filesAssigned?e("img",{staticClass:"tag-cover__image",attrs:{src:t.coverUrl}}):e("div",{staticClass:"tag-cover__image tag-cover__image--placeholder"},[e("ImageMultipleIcon",{attrs:{size:128}})],1),t._v(" "),e("div",{staticClass:"tag-cover__details"},[e("div",{staticClass:"tag-cover__details__first-line"},[e("h3",{staticClass:"tag-cover__details__name"},[t._v("\n\t\t\t\t"+t._s(t.t("recognize",t.tag.displayName))+"\n\t\t\t")])]),t._v(" "),e("div",{staticClass:"tag-cover__details__second-line"},[t._v("\n\t\t\t"+t._s(t.n("photos","%n photo","%n photos",t.count))+"\n\t\t")])])])}),[],!1,null,"2e7648be",null).exports,NcLoadingIcon:i.lb,NcEmptyContent:i.SL},mixins:[s.Z],data:()=>({error:null,loading:!1,showTags:!1}),computed:{...(0,n.Se)(["files","tags","tagsNames"]),tagsList(){return Object.keys(this.tagsNames).map((t=>this.tags[this.tagsNames[t]])).filter((t=>t&&t.id))},popularTags(){return Object.keys(this.tagsNames).filter((t=>this.tags[this.tagsNames[t]].filesAssigned>50)).sort(((t,e)=>(this.tags[this.tagsNames[e]].filesAssigned||this.tagCounts[e])-(this.tags[this.tagsNames[t]].filesAssigned||this.tagCounts[t]))).slice(0,9).map((t=>this.tags[this.tagsNames[t]]))}},async beforeMount(){await this.fetchRootContent()},methods:{async fetchRootContent(){OCA.Viewer.close(),this.error=null;try{this.tagsList.length||(this.loading=!0,await this.$store.dispatch("fetchAllTags",{signal:this.abortController.signal}))}catch(t){console.error(t),this.error=!0}finally{this.loading=!1}}}};var T=a(70101),k={};k.styleTagTransform=f(),k.setAttributes=h(),k.insert=m().bind(null,"head"),k.domAPI=d(),k.insertStyleElement=u();c()(T.Z,k);T.Z&&T.Z.locals&&T.Z.locals;const W=(0,w.Z)(y,(function(){var t=this,e=t._self._c;return e("div",[t.error?e("NcEmptyContent",{attrs:{name:t.t("photos","An error occurred")}}):t._e(),t._v(" "),t.loading||0!==t.tagsList.length?t._e():e("NcEmptyContent",{attrs:{name:t.t("photos","No tags yet"),description:t.t("photos","Photos with tags will show up here")}}),t._v(" "),t.loading?e("NcLoadingIcon",{staticClass:"loader"}):e("div",{staticClass:"container"},[t.popularTags.length?e("h2",[t._v("\n\t\t\t"+t._s(t.t("photos","Popular tags"))+"\n\t\t")]):t._e(),t._v(" "),e("div",{staticClass:"popular-tags"},t._l(t.popularTags,(function(t){return e("TagCover",{key:t.id,attrs:{tag:t}})})),1),t._v(" "),t.tagsList.length?e("h2",[t._v("\n\t\t\tAll tags\n\t\t")]):t._e(),t._v(" "),e("div",{staticClass:"tags"},t._l(t.tagsList,(function(t){return e("TagCover",{key:t.id,attrs:{tag:t}})})),1)])],1)}),[],!1,null,"d7c9fb6c",null).exports}}]);
//# sourceMappingURL=photos-src_views_Tags_vue.js.map?v=d83dc84fee4f5a45489d