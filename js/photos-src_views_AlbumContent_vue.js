(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_AlbumContent_vue"],{26347:(t,o,e)=>{"use strict";e.d(o,{Z:()=>s});var l=e(87537),a=e.n(l),n=e(23645),i=e.n(n)()(a());i.push([t.id,".album__title[data-v-6ea9b732]{width:100%}.album__name[data-v-6ea9b732]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.album__location[data-v-6ea9b732]{margin-left:-4px;display:flex;color:var(--color-text-lighter)}.photos-navigation[data-v-6ea9b732]{position:relative}.photos-navigation--uploading[data-v-6ea9b732]{margin-bottom:30px}[data-v-6ea9b732] .upload-picker .upload-picker__progress{position:absolute;bottom:-30px;left:64px;margin:0}[data-v-6ea9b732] .upload-picker .upload-picker__cancel{position:absolute;bottom:-24px;right:50px}","",{version:3,sources:["webpack://./src/views/AlbumContent.vue"],names:[],mappings:"AAGC,+BACC,UAAA,CAGD,8BACC,eAAA,CACA,kBAAA,CACA,sBAAA,CAGD,kCACC,gBAAA,CACA,YAAA,CACA,+BAAA,CAIF,oCACC,iBAAA,CAEA,+CACC,kBAAA,CAKD,0DACC,iBAAA,CACA,YAAA,CACA,SAAA,CACA,QAAA,CAED,wDACC,iBAAA,CACA,YAAA,CACA,UAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.album {\n\t&__title {\n\t\twidth: 100%;\n\t}\n\n\t&__name {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t&__location {\n\t\tmargin-left: -4px;\n\t\tdisplay: flex;\n\t\tcolor: var(--color-text-lighter);\n\t}\n}\n\n.photos-navigation {\n\tposition: relative;\n\t// Add space at the bottom for the progress bar.\n\t&--uploading {\n\t\tmargin-bottom: 30px;\n\t}\n}\n\n:deep(.upload-picker) {\n\t.upload-picker__progress {\n\t\tposition: absolute;\n\t\tbottom: -30px;\n\t\tleft: 64px;\n\t\tmargin: 0;\n\t}\n\t.upload-picker__cancel {\n\t\tposition: absolute;\n\t\tbottom: -24px;\n\t\tright: 50px;\n\t}\n}\n'],sourceRoot:""}]);const s=i},20296:t=>{function o(t,o,e){var l,a,n,i,s;function r(){var c=Date.now()-i;c<o&&c>=0?l=setTimeout(r,o-c):(l=null,e||(s=t.apply(n,a),n=a=null))}null==o&&(o=100);var c=function(){n=this,a=arguments,i=Date.now();var c=e&&!l;return l||(l=setTimeout(r,o)),c&&(s=t.apply(n,a),n=a=null),s};return c.clear=function(){l&&(clearTimeout(l),l=null)},c.flush=function(){l&&(s=t.apply(n,a),n=a=null,clearTimeout(l),l=null)},c}o.debounce=o,t.exports=o},77531:(t,o,e)=>{"use strict";e.d(o,{Z:()=>a});const l={name:"PencilIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const a=(0,e(51900).Z)(l,(function(){var t=this,o=t._self._c;return o("span",t._b({staticClass:"material-design-icon pencil-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(o){return t.$emit("click",o)}}},"span",t.$attrs,!1),[o("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}},[t.title?o("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},8165:(t,o,e)=>{"use strict";e.d(o,{Z:()=>a});const l={name:"ShareVariantIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const a=(0,e(51900).Z)(l,(function(){var t=this,o=t._self._c;return o("span",t._b({staticClass:"material-design-icon share-variant-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(o){return t.$emit("click",o)}}},"span",t.$attrs,!1),[o("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"}},[t.title?o("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},41809:(t,o,e)=>{"use strict";e.d(o,{Z:()=>s});var l=e(20629),a=e(58613),n=e(34111);const i={name:"ActionFavorite",components:{Star:a.Z,NcActionButton:n.Js},props:{selectedFileIds:{type:Array,required:!0}},computed:{...(0,l.Se)(["files"]),shouldFavoriteSelection(){return this.selectedFileIds.some((t=>0===this.files[t].favorite))}},methods:{...(0,l.nv)(["toggleFavoriteForFiles"]),async favoriteSelection(){await this.toggleFavoriteForFiles({fileIds:this.selectedFileIds,favoriteState:1})},async unFavoriteSelection(){await this.toggleFavoriteForFiles({fileIds:this.selectedFileIds,favoriteState:0})}}};const s=(0,e(51900).Z)(i,(function(){var t=this,o=t._self._c;return t.shouldFavoriteSelection?o("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Mark selection as favorite")},on:{click:t.favoriteSelection}},[t._v("\n\t"+t._s(t.t("photos","Add selection to favorites"))+"\n\t"),o("Star",{attrs:{slot:"icon"},slot:"icon"})],1):o("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Remove selection from favorites")},on:{click:t.unFavoriteSelection}},[t._v("\n\t"+t._s(t.t("photos","Remove selection from favorites"))+"\n\t"),o("Star",{attrs:{slot:"icon"},slot:"icon"})],1)}),[],!1,null,null,null).exports},90624:(o,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>q});var a=l(20629),n=l(69141),i=l(77958),s=l(34111),r=l(57873),c=l(31352),u=l(20296),m=l.n(u),d=l(44893),p=l(42588),h=l(85109),b=l(41316),A=l(77531),v=l(81755);var C=l(8165),g=l(66951),f=l(60213),_=l(81090),w=l(41809),F=l(7976),k=l(13619),y=l(70877),N=l(24779),S=l(37724),x=l(3301),Z=l(59537);const M={name:"AlbumContent",components:{ActionFavorite:w.Z,AlbumForm:F.Z,Close:d.Z,CollaboratorsSelectionForm:k.Z,CollectionContent:y.Z,Delete:p.Z,PhotosPicker:N.Z,HeaderNavigation:S.Z,ImagePlus:h.Z,MapMarker:b.Z,NcActionButton:s.Js,NcActions:s.O3,NcActionSeparator:s.rr,NcButton:s.P2,NcDialog:s.a0,NcEmptyContent:s.SL,NcLoadingIcon:s.lb,NcModal:s.Jc,Pencil:A.Z,Plus:v.Z,ShareVariant:C.Z,UploadPicker:r.e},mixins:[f.Z,g.Z,s.tq,_.Z],props:{albumName:{type:String,default:"/"}},data(){return{allowedMimes:x.ZP,showAddPhotosModal:!1,showManageCollaboratorView:!1,showEditAlbumForm:!1,loadingAddCollaborators:!1,uploader:(0,r.oM)(),newFileMenuEntry:{id:"album-add",displayName:t("photos","Add photos to this album"),enabled:t=>t.basename===this.$route.params.albumName,iconSvgInline:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-plus" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>',handler:()=>{this.showAddPhotosModal=!0}}}},computed:{album(){return this.$store.getters.getAlbum(this.albumName)},albumFileIds(){return this.$store.getters.getAlbumFiles(this.albumName)},sharingEnabled:()=>void 0!==OC.Share,uploadContext(){var t;return{...this.album,route:this.$route.name,root:"dav/photos/".concat(null===(t=(0,i.ts)())||void 0===t?void 0:t.uid,"/albums")}},albumFileName(){return this.$store.getters.getAlbumName(this.albumName)},albumAsFolder(){var t,o,e,l;return new n.gt({...this.album,owner:null!==(t=null===(o=(0,i.ts)())||void 0===o?void 0:o.uid)&&void 0!==t?t:"",source:null!==(e=null===(l=this.album)||void 0===l?void 0:l.source)&&void 0!==e?e:""})}},async mounted(){this.fetchAlbum(),this.fetchAlbumContent(),(0,n.cd)(this.newFileMenuEntry)},destroyed(){(0,n.oE)(this.newFileMenuEntry)},methods:{...(0,a.nv)(["addFilesToCollection","removeFilesFromCollection","deleteCollection","updateCollection"]),async fetchAlbum(){await this.fetchCollection(this.albumFileName,["<nc:location />","<nc:dateRange />","<nc:collaborators />"])},async fetchAlbumContent(){await this.fetchCollectionFiles(this.albumFileName)},redirectToNewName(t){let{album:o}=t;this.showEditAlbumForm=!1,this.album.basename!==o.basename&&this.$router.push("/albums/".concat(o.basename))},async handleFilesPicked(t){this.showAddPhotosModal=!1,await this.addFilesToCollection({collectionFileName:this.album.filename,fileIdsToAdd:t}),await this.fetchAlbumContent()},async handleRemoveFilesFromAlbum(t){this.$refs.collectionContent.onUncheckFiles(t),await this.removeFilesFromCollection({collectionFileName:this.album.filename,fileIdsToRemove:t})},async handleDeleteAlbum(){await this.deleteCollection({collectionFileName:this.album.filename}),this.$router.push("/albums")},async handleSetCollaborators(t){try{this.loadingAddCollaborators=!0,this.showManageCollaboratorView=!1,await this.updateCollection({collectionFileName:this.album.filename,properties:{collaborators:t}})}catch(t){Z.Z.error("Error while setting album collaborators",{error:t})}finally{this.loadingAddCollaborators=!1}},onUpload:m()((function(){this.fetchAlbumContent()}),500),t:c.Iu}};var B=l(93379),I=l.n(B),P=l(7795),T=l.n(P),E=l(90569),D=l.n(E),V=l(3565),L=l.n(V),$=l(19216),W=l.n($),H=l(44589),U=l.n(H),z=l(26347),R={};R.styleTagTransform=U(),R.setAttributes=L(),R.insert=D().bind(null,"head"),R.domAPI=T(),R.insertStyleElement=W();I()(z.Z,R);z.Z&&z.Z.locals&&z.Z.locals;const q=(0,l(51900).Z)(M,(function(){var t=this,o=t._self._c;return o("div",[o("CollectionContent",{ref:"collectionContent",attrs:{collection:t.album,"collection-file-ids":t.albumFileIds,loading:t.loadingCollection||t.loadingCollectionFiles,error:t.errorFetchingCollection||t.errorFetchingCollectionFiles},scopedSlots:t._u([{key:"header",fn:function(e){var l;let{selectedFileIds:a,resetSelection:n}=e;return o("HeaderNavigation",{key:"navigation",class:{"photos-navigation--uploading":(null===(l=t.uploader.queue)||void 0===l?void 0:l.length)>0},attrs:{loading:t.loadingCollectionFiles,params:{albumName:t.albumName},path:"/"+t.albumName,title:t.albumName},on:{refresh:t.fetchAlbumContent}},[void 0!==t.album&&""!==t.album.location?o("div",{staticClass:"album__location",attrs:{slot:"subtitle"},slot:"subtitle"},[o("MapMarker"),t._v(t._s(t.album.location)+"\n\t\t\t")],1):t._e(),t._v(" "),o("template",{slot:"default"},[a.length>0?o("NcButton",{attrs:{"aria-label":t.t("photos","Unselect all")},on:{click:n},scopedSlots:t._u([{key:"icon",fn:function(){return[o("Close")]},proxy:!0}],null,!0)},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Unselect all"))+"\n\t\t\t\t")]):t._e()],1),t._v(" "),void 0!==t.album?o("template",{slot:"right"},[0!==t.album.nbItems?o("UploadPicker",{attrs:{accept:t.allowedMimes,context:t.uploadContext,destination:t.albumAsFolder,root:t.uploadContext.root,multiple:!0},on:{uploaded:t.onUpload}}):t._e(),t._v(" "),t.sharingEnabled?o("NcButton",{attrs:{type:"tertiary","aria-label":t.t("photos","Manage collaborators for this album")},on:{click:function(o){t.showManageCollaboratorView=!0}}},[o("ShareVariant",{attrs:{slot:"icon"},slot:"icon"})],1):t._e(),t._v(" "),o("NcActions",{attrs:{"aria-label":t.t("photos","Open actions menu")}},[o("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Edit album details")},on:{click:function(o){t.showEditAlbumForm=!0}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Edit album details"))+"\n\t\t\t\t\t\t"),o("Pencil",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),o("NcActionButton",{attrs:{"close-after-click":!0},on:{click:t.handleDeleteAlbum}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Delete album"))+"\n\t\t\t\t\t\t"),o("Delete",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),a.length>0?[o("NcActionSeparator"),t._v(" "),o("ActionFavorite",{attrs:{"selected-file-ids":a}}),t._v(" "),o("NcActionButton",{attrs:{"close-after-click":!0},on:{click:function(o){return t.handleRemoveFilesFromAlbum(a)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.t("photos","Remove selection from album"))+"\n\t\t\t\t\t\t\t"),o("Close",{attrs:{slot:"icon"},slot:"icon"})],1)]:t._e()],2)],1):t._e()],2)}}],null,!1,3551349678)},[t._v(" "),void 0===t.album||0!==t.album.nbItems||t.loadingCollectionFiles||t.loadingCollection?t._e():o("NcEmptyContent",{staticClass:"album__empty",attrs:{slot:"empty-content",name:t.t("photos","This album does not have any photos or videos yet!")},slot:"empty-content"},[o("ImagePlus",{attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("NcButton",{staticClass:"album__empty__button",attrs:{slot:"action",type:"primary","aria-label":t.t("photos","Add photos to this album")},on:{click:function(o){t.showAddPhotosModal=!0}},slot:"action"},[o("Plus",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n\t\t\t\t"+t._s(t.t("photos","Add"))+"\n\t\t\t")],1)],1)],1),t._v(" "),o("PhotosPicker",{attrs:{open:t.showAddPhotosModal,"blacklist-ids":t.albumFileIds,destination:t.album.basename,name:t.t("photos","Add photos to {albumName}",{albumName:t.albumName})},on:{"update:open":function(o){t.showAddPhotosModal=o},"files-picked":t.handleFilesPicked}}),t._v(" "),t.showManageCollaboratorView&&void 0!==t.album?o("NcModal",{attrs:{name:t.t("photos","Manage collaborators")},on:{close:function(o){t.showManageCollaboratorView=!1}}},[o("CollaboratorsSelectionForm",{attrs:{"album-name":t.album.basename,collaborators:t.album.collaborators},scopedSlots:t._u([{key:"default",fn:function(e){let{collaborators:l}=e;return[o("NcButton",{attrs:{"aria-label":t.t("photos","Save collaborators for this album."),type:"primary",disabled:t.loadingAddCollaborators},on:{click:function(o){return t.handleSetCollaborators(l)}},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loadingAddCollaborators?o("NcLoadingIcon"):t._e()]},proxy:!0}],null,!0)},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Save"))+"\n\t\t\t\t")])]}}],null,!1,4058924180)})],1):t._e(),t._v(" "),t.showEditAlbumForm?o("NcDialog",{attrs:{name:t.t("photos","Edit album details"),"close-on-click-outside":"",size:"normal"},on:{closing:function(o){t.showEditAlbumForm=!1}}},[o("AlbumForm",{attrs:{album:t.album},on:{done:t.redirectToNewName}})],1):t._e()],1)}),[],!1,null,"6ea9b732",null).exports}}]);
//# sourceMappingURL=photos-src_views_AlbumContent_vue.js.map?v=e756dca1fd9ececad49e