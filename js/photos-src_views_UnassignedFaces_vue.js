"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_UnassignedFaces_vue"],{77511:(t,e,n)=>{n.d(e,{Z:()=>l});var i=n(87537),o=n.n(i),a=n(23645),s=n.n(a)()(o());s.push([t.id,".face[data-v-f2e88bbc]{display:flex;flex-direction:column}.face__empty[data-v-f2e88bbc]{display:flex;flex-direction:column;align-items:center}.face__empty__button[data-v-f2e88bbc]{margin-top:32px}.face__header[data-v-f2e88bbc]{display:flex;min-height:60px;align-items:center;justify-content:space-between;position:-webkit-sticky;position:sticky;z-index:3;background:var(--color-main-background);padding:0 64px}@media only screen and (max-width: 1020px){.face__header[data-v-f2e88bbc]{padding:0;padding-left:64px}}.face__header__left[data-v-f2e88bbc]{height:100%;display:flex;align-items:center}.face__header__title[data-v-f2e88bbc]{margin-left:10px}.face__header__title h2[data-v-f2e88bbc]{margin-bottom:0}.face__header__loader[data-v-f2e88bbc]{margin-left:32px}.face__header__actions[data-v-f2e88bbc]{display:flex;align-items:center}.face__header__actions button[data-v-f2e88bbc]{margin-left:16px}.face__photos[data-v-f2e88bbc]{margin-top:16px;height:100%;min-height:0;padding:0 64px}@media only screen and (max-width: 1020px){.face__photos[data-v-f2e88bbc]{padding:0}}.empty-content-with-illustration[data-v-f2e88bbc] .empty-content__icon{width:200px;height:200px}.empty-content-with-illustration[data-v-f2e88bbc] .empty-content__icon svg{width:200px;height:200px}.rename-form[data-v-f2e88bbc]{display:flex;flex-direction:row;align-items:center;height:70px;padding:16px}.rename-form input[data-v-f2e88bbc]{width:80%}","",{version:3,sources:["webpack://./src/mixins/FaceContent.scss"],names:[],mappings:"AAqBA,uBACC,YAAA,CACA,qBAAA,CAEA,8BACC,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,sCACC,eAAA,CAKF,+BACC,YAAA,CACA,eAAA,CACA,kBAAA,CACA,6BAAA,CACA,uBAAA,CAAA,eAAA,CACA,SAAA,CACA,uCAAA,CACA,cAAA,CAEA,2CAVD,+BAWE,SAAA,CACA,iBAAA,CAAA,CAGD,qCACC,WAAA,CACA,YAAA,CACA,kBAAA,CAGD,sCACC,gBAAA,CACA,yCACC,eAAA,CAIF,uCACC,gBAAA,CAGD,wCACC,YAAA,CACA,kBAAA,CAEA,+CACC,gBAAA,CAKH,+BACC,eAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CAEA,2CAND,+BAOE,SAAA,CAAA,CAKH,uEACC,WAAA,CACA,YAAA,CAEA,2EACC,WAAA,CACA,YAAA,CAIF,8BACC,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA,CAEA,oCACC,SAAA",sourcesContent:["/**\n * @copyright Copyright (c) 2023 Marcel Klehr <mklehr@gmx.net>\n *\n * @author Marcel Klehr <mklehr@gmx.net>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n.face {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t&__empty {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\n\t\t&__button {\n\t\t\tmargin-top: 32px;\n\t\t}\n\n\t}\n\n\t&__header {\n\t\tdisplay: flex;\n\t\tmin-height: 60px;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tposition: sticky;\n\t\tz-index: 3;\n\t\tbackground: var(--color-main-background);\n\t\tpadding: 0 64px;\n\n\t\t@media only screen and (max-width: 1020px) {\n\t\t\tpadding: 0;\n\t\t\tpadding-left: 64px;\n\t\t}\n\n\t\t&__left {\n\t\t\theight: 100%;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t}\n\n\t\t&__title {\n\t\t\tmargin-left: 10px;\n\t\t\th2 {\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\t\t}\n\n\t\t&__loader {\n\t\t\tmargin-left: 32px;\n\t\t}\n\n\t\t&__actions {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\n\t\t\tbutton {\n\t\t\t\tmargin-left: 16px;\n\t\t\t}\n\t\t}\n\t}\n\n\t&__photos {\n\t\tmargin-top: 16px;\n\t\theight: 100%;\n\t\tmin-height: 0; // Prevent it from overflowing in a flex context.\n\t\tpadding: 0 64px;\n\n\t\t@media only screen and (max-width: 1020px) {\n\t\t\tpadding: 0;\n\t\t}\n\t}\n}\n\n.empty-content-with-illustration :deep .empty-content__icon {\n\twidth: 200px;\n\theight: 200px;\n\n\tsvg {\n\t\twidth: 200px;\n\t\theight: 200px;\n\t}\n}\n\n.rename-form {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\theight: 70px;\n\tpadding: 16px;\n\n\tinput {\n\t\twidth: 80%;\n\t}\n}"],sourceRoot:""}]);const l=s},77466:(t,e,n)=>{n.r(e),n.d(e,{default:()=>E});var i=n(20629),o=n(82124),a=n(4777),s=n(41293),l=n(32219),c=n(23782),r=n(94211),A=n(66951),d=n(98171),f=n(91423),h=n(73110),p=n(59537),C=n(99751),u=n(20144),_=n(23559);const g={name:"UnassignedFaces",components:{Star:a.Z,Download:s.Z,AlertCircle:o.Z,ArrowLeft:l.Z,FaceMergeForm:_.Z,FilesListViewer:f.Z,File:h.Z,NcLoadingIcon:r.lb,NcEmptyContent:r.SL,NcActions:r.O3,NcActionButton:r.Js,NcModal:r.Jc,AccountSwitch:c.Z},directives:{focus(t){u.ZP.nextTick((()=>t.focus()))}},mixins:[C.Z,A.Z,d.Z],data:()=>({showMoveModal:!1,loadingCount:0,appContent:document.getElementById("app-content-vue")}),computed:{...(0,i.Se)(["files","unassignedFiles"]),faceFileIds(){return this.unassignedFiles||[]},shouldFavoriteSelection(){return this.selectedFileIds.some((t=>0===this.$store.state.files.files[t].favorite))}},mounted(){this.fetchUnassignedFaces()},methods:{...(0,i.nv)(["appendFiles","deleteFace","renameFace","downloadFiles","toggleFavoriteForFiles","removeFilesFromFace","moveFilesToFace"]),openViewer(t){const e=this.files[t];OCA.Viewer.open({path:"/"+e.filename.split("/").slice(3).join("/"),list:this.faceFileIds.map((t=>({...this.files[t],basename:this.files[t].basename.split("-").slice(1).join("-")}))).filter((t=>!t.sectionHeader)),loadMore:e.loadMore?async()=>await e.loadMore(!0):()=>[],canLoop:e.canLoop})},async handleMove(t,e){try{this.loadingCount++,await this.moveFilesToFace({oldFace:null,faceName:t,fileIdsToMove:e}),this.showMoveModal=!1}catch(t){p.Z.error(t)}finally{this.loadingCount--}},async favoriteSelection(){try{this.loadingCount++,await this.toggleFavoriteForFiles({fileIds:this.selectedFileIds,favoriteState:!0})}catch(t){p.Z.error(t)}finally{this.loadingCount--}},async unFavoriteSelection(){try{this.loadingCount++,await this.toggleFavoriteForFiles({fileIds:this.selectedFileIds,favoriteState:!1})}catch(t){p.Z.error(t)}finally{this.loadingCount--}},async downloadSelection(){try{this.loadingCount++,await this.downloadFiles(this.selectedFileIds)}catch(t){p.Z.error(t)}finally{this.loadingCount--}}}};var m=n(93379),v=n.n(m),b=n(7795),x=n.n(b),y=n(90569),F=n.n(y),w=n(3565),k=n.n(w),S=n(19216),B=n.n(S),M=n(44589),I=n.n(M),N=n(77511),Z={};Z.styleTagTransform=I(),Z.setAttributes=k(),Z.insert=F().bind(null,"head"),Z.domAPI=x(),Z.insertStyleElement=B();v()(N.Z,Z);N.Z&&N.Z.locals&&N.Z.locals;const E=(0,n(51900).Z)(g,(function(){var t=this,e=t._self._c;return t.errorFetchingFiles?e("NcEmptyContent",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("AlertCircle")]},proxy:!0}],null,!1,794036927)},[t._v("\n\t"+t._s(t.t("photos","An error occurred"))+"\n")]):e("div",{staticClass:"face"},[e("div",{staticClass:"face__header"},[e("div",{staticClass:"face__header__left"},[e("NcActions",[e("NcActionButton",{on:{click:function(e){return t.$router.push("/faces/")}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("ArrowLeft")]},proxy:!0}])},[t._v(t._s(t.t("photos","Back"))+"\n\t\t\t\t")])],1),t._v(" "),e("div",{staticClass:"face__header__title"},[e("h2",{class:{"face-name":!0}},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Unassigned faces"))+"\n\t\t\t\t")])]),t._v(" "),t.loadingCount>0||t.loadingFaces?e("NcLoadingIcon"):t._e()],1),t._v(" "),e("div",{staticClass:"face__header__actions"},[e("NcActions",{attrs:{"force-menu":!0}},[t.selectedFileIds.length?[e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Download selected files")},on:{click:t.downloadSelection}},[e("Download",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Download selected photos"))+"\n\t\t\t\t\t")],1),t._v(" "),t.shouldFavoriteSelection?e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Mark selection as favorite")},on:{click:t.favoriteSelection}},[e("Star",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Favorite"))+"\n\t\t\t\t\t")],1):e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Remove selection from favorites")},on:{click:t.unFavoriteSelection}},[e("Star",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Remove from favorites"))+"\n\t\t\t\t\t")],1),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0},on:{click:function(e){t.showMoveModal=!0}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("AccountSwitch")]},proxy:!0}],null,!1,2937983280)},[t._v("\n\t\t\t\t\t\t"+t._s(t.n("photos","Move photo to a different person","Move photos to a different person",t.selectedFileIds.length))+"\n\t\t\t\t\t")])]:t._e()],2)],1)]),t._v(" "),e("FilesListViewer",{staticClass:"face__photos",attrs:{"container-element":t.appContent,"file-ids":t.faceFileIds,loading:t.loadingFiles||t.loadingFaces},scopedSlots:t._u([{key:"default",fn:function(n){let{file:i,distance:o}=n;return e("File",{attrs:{file:t.files[i.id],"allow-selection":!0,selected:!0===t.selection[i.id],distance:o},on:{click:t.openViewer,"select-toggled":t.onFileSelectToggle}})}}])}),t._v(" "),t.showMoveModal?e("NcModal",{attrs:{name:t.t("photos","Move to different person")},on:{close:function(e){t.showMoveModal=!1}}},[e("FaceMergeForm",{attrs:{"first-face":"-1"},on:{select:function(e){return t.handleMove(e,t.selectedFileIds)}}})],1):t._e()],1)}),[],!1,null,"f2e88bbc",null).exports}}]);
//# sourceMappingURL=photos-src_views_UnassignedFaces_vue.js.map?v=daa45eceb50a7b707e73