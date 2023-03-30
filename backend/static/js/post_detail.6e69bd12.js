(function(){"use strict";var t={3558:function(t,e,o){var r=o(144),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("MainMenu"),o("v-main",[o("PostDetail")],1),o("v-footer",{attrs:{app:""}},[o("span",[t._v("Copyright © 2022 by shkim")])])],1)},n=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-navigation-drawer",{attrs:{app:"",clipped:"","expend-on-hover":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",[o("v-list-item",{staticClass:"px-2"},[o("v-icon",{attrs:{large:"",center:""}},[t._v("mdi-account")])],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"text-h6"},[t._v(" 사용자 이름 ")]),o("v-list-item-subtitle",[t._v("사용자@example.com")])],1)],1)],1),o("v-divider"),o("v-list",{attrs:{nav:"",dense:""}},[o("v-list-item",{attrs:{link:"/blog/post/list/?username="+t.me.username}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-folder")])],1),o("v-list-item-title",[t._v("내 일기장")])],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-account-multiple")])],1),o("v-list-item-title",[t._v("공유한 일기장")])],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-star")])],1),o("v-list-item-title",[t._v("찜한 일기장")])],1)],1)],1),o("v-app-bar",{attrs:{app:"","clipped-left":"",color:"light-green-darken-1",dark:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("v-toolbar-title",{attrs:{id:"menutitle"}},[t._v("하루 자국")]),o("v-spacer"),o("v-btn",{attrs:{text:"",href:"/"}},[t._v("Home")]),o("v-btn",{attrs:{text:"",href:"/blog/post/img/list/"}},[t._v("그림 일기 보기")]),o("v-btn",{attrs:{text:"",href:"/blog/post/list/"}},[t._v("리스트 일기 보기")]),o("v-btn",{attrs:{text:"",href:"/admin/"}},[t._v("관리자 페이지")]),o("v-spacer"),o("v-menu",{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,s=e.attrs;return[o("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",s,!1),r),[o("v-icon",[t._v("mdi-account")]),t._v(t._s(t.me.username)+" "),o("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[o("v-list",["Anonymous"===t.me.username?[o("v-list-item",{on:{click:function(e){return t.dialogOpen("login")}}},[o("v-list-item-title",[t._v("로그인")])],1),o("v-list-item",{on:{click:function(e){return t.dialogOpen("register")}}},[o("v-list-item-title",[t._v("회원가입")])],1)]:[o("v-list-item",{on:{click:t.logout}},[o("v-list-item-title",[t._v("로그아웃")])],1),o("v-list-item",{on:{click:function(e){return t.dialogOpen("pwdchg")}}},[o("v-list-item-title",[t._v("비밀번호 변경")])],1)]],2)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.login,callback:function(e){t.$set(t.dialog,"login",e)},expression:"dialog.login"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[o("v-toolbar-title",[t._v("로그인")])],1),o("v-card-text",[o("v-form",{ref:"loginForm",attrs:{id:"login-form"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.save("login")}}},[o("v-text-field",{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),o("v-text-field",{attrs:{label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("login")}}},[t._v("취소")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){return t.save("login")}}},[t._v("로그인하기")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.register,callback:function(e){t.$set(t.dialog,"register",e)},expression:"dialog.register"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"success",dark:"",flat:""}},[o("v-toolbar-title",[t._v("회원 가입")])],1),o("v-card-text",[o("v-form",{ref:"registerForm",attrs:{id:"register-form"},on:{submit:function(e){return e.preventDefault(),t.save("login")}}},[o("v-text-field",{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),o("v-text-field",{attrs:{label:"Password",name:"password1","prepend-icon":"mdi-lock",type:"password",hint:"너무 흔한 비밀번호는 안되요. (예시:asdf1234)",rules:t.rules}}),o("v-text-field",{attrs:{label:"Password again",name:"password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("register")}}},[t._v("취소")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"success"},on:{click:function(e){return t.save("register")}}},[t._v("등록하기")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.pwdchg,callback:function(e){t.$set(t.dialog,"pwdchg",e)},expression:"dialog.pwdchg"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"warning",dark:"",flat:""}},[o("v-toolbar-title",[t._v("비밀번호 변경")])],1),o("v-card-text",[o("v-form",{ref:"pwdchgForm",attrs:{id:"pwdchg-form"},on:{submit:function(e){return e.preventDefault(),t.save("login")}}},[o("v-text-field",{attrs:{label:"Old password",name:"old_password","prepend-icon":"mdi-lock",type:"password"}}),o("v-text-field",{attrs:{label:"New password",name:"new_password1","prepend-icon":"mdi-lock",type:"password"}}),o("v-text-field",{attrs:{label:"New password again",name:"new_password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("pwdchg")}}},[t._v("취소")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"warning"},on:{click:function(e){return t.save("pwdchg")}}},[t._v("비밀번호 변경하기")])],1)],1)],1)],1)},i=[],l=o(9669),c=o.n(l);const v=new r.Z;var d=v;c().defaults.xsrfCookieName="csrftoken",c().defaults.xsrfHeaderName="X-CSRFToken";var g={data:()=>({drawer:null,dialog:{login:!1,register:!1,pwdchg:!1},me:{username:"Anonymous"},rules:[t=>!!t||"필수 입력 사항입니다.",t=>t&&t.length>=8||"8자리 이상 입력해주세요.",t=>t&&isNaN(t)||"숫자와 문자를 섞어주세요."]}),watch:{me(t,e){console.log("watch.me()...",t,e),d.$emit("me_change",t)}},created(){console.log("created()..."),this.getUserInfo()},methods:{dialogOpen(t){console.log("dialogOpen()...",t),"login"===t?this.dialog.login=!0:"register"===t?this.dialog.register=!0:"pwdchg"===t&&(this.dialog.pwdchg=!0)},cancel(t){console.log("cancel()...",t),"login"===t?(this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.dialog.register=!1,this.$refs.registerForm.reset()):"pwdchg"===t&&(this.dialog.pwdchg=!1,this.$refs.pwdchgForm.reset())},save(t){console.log("save()...",t),"login"===t?(this.login(),this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.register(),this.dialog.register=!1,this.$refs.registerForm.reset()):"pwdchg"===t&&(this.pwdchg(),this.dialog.pwdchg=!1,this.$refs.pwdchgForm.reset())},login(){console.log("login()...");const t=new FormData(document.getElementById("login-form"));c().post("/api/login/",t).then((t=>{console.log("LOGIN POST RES",t),this.me=t.data})).catch((t=>{console.log("LOGIN POST ERR.RESPONSE",t.response),alert("로그인 실패")}))},register(){console.log("register()...");const t=new FormData(document.getElementById("register-form"));c().post("/api/register/",t).then((t=>{console.log("REGISTER POST RES",t),alert(`user ${t.data.username} 생성 완료`)})).catch((t=>{console.log("REGISTER POST ERR.RESPONSE",t.response),alert("회원가입 실패")}))},logout(){console.log("logout()..."),c().get("/api/logout/").then((t=>{console.log("LOGOUT GET RES",t),alert(`user ${this.me.username} 로그아웃 완료`),this.me={username:"Anonymous"}})).catch((t=>{console.log("LOGOUT GET ERR.RESPONSE",t.response),alert("로그아웃 실패")}))},pwdchg(){console.log("pwdchg()...");const t=new FormData(document.getElementById("pwdchg-form"));c().post("/api/pwdchg/",t).then((t=>{console.log("PWDCHG POST RES",t),alert(`user ${this.me.username} 패스워드 변경 완료`)})).catch((t=>{console.log("PWDCHG POST ERR.RESPONSE",t.response),alert("패스워드 변경 실패")}))},getUserInfo(){console.log("getUserInfo()..."),c().get("/api/me/").then((t=>{console.log("GETUSERINFO GET RES",t),this.me=t.data})).catch((t=>{console.log("GETUSERINFO GET ERR.RESPONSE",t.response),alert(t.response.status+" "+t.response.statusText)}))}}},p=g,u=o(1001),m=o(3453),f=o.n(m),h=o(8320),w=o(5206),_=o(3150),b=o(3237),k=o(7118),y=o(4497),E=o(1418),x=o(6232),C=o(6428),O=o(6816),T=o(7620),S=o(2059),P=o(459),Z=o(6768),R=o(3347),V=o(9762),I=o(5978),D=o(6656),$=o(7921),G=(0,u.Z)(p,a,i,!1,null,null,null),F=G.exports;f()(G,{VAppBar:h.Z,VAppBarNavIcon:w.Z,VBtn:_.Z,VCard:b.Z,VCardActions:k.h7,VCardText:k.ZB,VDialog:y.Z,VDivider:E.Z,VForm:x.Z,VIcon:C.Z,VList:O.Z,VListItem:T.Z,VListItemContent:S.km,VListItemIcon:P.Z,VListItemSubtitle:S.oZ,VListItemTitle:S.V9,VMenu:Z.Z,VNavigationDrawer:R.Z,VSpacer:V.Z,VTextField:I.Z,VToolbar:D.Z,VToolbarTitle:$.qW});var N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12",lg:"10"}},[o("h1",[t._v(t._s(t.post.title))]),o("p",{staticClass:"subtitle"},[t._v(t._s(t.post.owner)+" | "+t._s(t.post.modify_dt))]),o("div",t._l(t.post.tags,(function(e,r){return o("v-chip",{key:r,staticClass:"ma-2 my-hover",attrs:{outlined:""},on:{click:function(o){return t.serverPage(e)}}},[t._v(t._s(e))])})),1)])],1),o("v-row",{attrs:{align:"start",justify:"center"}},[o("v-col",{attrs:{cols:"12",sm:"8",lg:"7"}},[o("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[o("p",{staticClass:"content",staticStyle:{"white-space":"pre-wrap"}},[t._v(" "+t._s(t.post.content)+" ")]),o("br"),o("v-col",{staticClass:"image-container"},[o("v-img",{attrs:{id:"image",src:t.url}}),o("div",{attrs:{id:"pencil-container"}},[o("v-row",[o("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",color:"purple"},on:{click:function(e){return t.serverPageImg()}}},[o("v-icon",{attrs:{dark:""}},[t._v(" mdi-pencil ")])],1)],1),o("p",[t._v("이미지 새로 만들기")])],1)],1)],1)],1),o("v-col",{attrs:{cols:"12",sm:"4",lg:"3"}},[o("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[o("p",[t._v("prev post")]),t.post.prev?o("h2",{staticClass:"my-hover",on:{click:function(e){return t.fetchPostDetail(t.post.prev.id)}}},[t._v(" "+t._s(t.post.prev.title)+" ")]):t._e()]),o("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[o("p",[t._v("next post")]),t.post.next?o("h2",{staticClass:"my-hover",on:{click:function(e){return t.fetchPostDetail(t.post.next.id)}}},[t._v(" "+t._s(t.post.next.title)+" ")]):t._e()]),o("v-card",{staticClass:"pa-2",attrs:{tile:""}},[o("h2",[t._v("Tag cloud")]),t._l(t.tagCloud,(function(e,r){return o("v-chip",{key:r,staticClass:"ma-2 my-hover",attrs:{color:e.color,"text-color":"white"},on:{click:function(o){return t.serverPage(e.name)}}},[o("v-avatar",{class:e.color+" darken-4",attrs:{left:""}},[t._v(t._s(e.count))]),t._v(t._s(e.name)+" ")],1)}))],2)],1)],1)],1)},L=[],A={data:()=>({post:{},tagCloud:[],items:[],values:[],tag_str:"",url:""}),created(){console.log("created()...");const t=location.pathname.split("/")[3];this.fetchPostDetail(t),this.fetchTagCloud()},methods:{fetchPostDetail(t){console.log("fetchPostDetail()...",t),c().get(`/api/post/${t}/`).then((e=>{console.log("POST DETAIL GET RES",e),this.post=e.data,this.url=`http://116.38.220.14/static/imges/${t}.png`})).catch((t=>{console.log("POST DETAIL GET ERR.RESPONSE",t.response),alert(t.response.status+" "+t.response.statusText)}))},fetchTagCloud(){console.log("fetchTagCloud()..."),c().get("/api/tag/cloud/").then((t=>{console.log("TAG CLOUD GET RES",t),this.tagCloud=t.data,this.tagCloud.forEach((t=>{3===t.weight?t.color="green":2===t.weight?t.color="blue-grey":1===t.weight&&(t.color="grey")}))})).catch((t=>{console.log("TAG CLOUD GET ERR.RESPONSE",t.response),alert(t.response.status+" "+t.response.statusText)}))},serverPage(t){console.log("serverPage()...",t),location.href=`/blog/post/img/list/?tagname=${t}`},serverPageImg(){const t=location.pathname.split("/")[3];console.log("serverPage()..."),location.replace(`/blog/post/${t}/img`)}}},j=A,U=o(6370),M=o(5424),B=o(2102),H=o(9846),W=o(7047),q=o(2877),X=(0,u.Z)(j,N,L,!1,null,"71c406ec",null),z=X.exports;f()(X,{VAvatar:U.Z,VBtn:_.Z,VCard:b.Z,VChip:M.Z,VCol:B.Z,VContainer:H.Z,VIcon:C.Z,VImg:W.Z,VRow:q.Z});var J={components:{MainMenu:F,PostDetail:z},data:()=>({})},K=J,Q=o(7524),Y=o(899),tt=o(7877),et=(0,u.Z)(K,s,n,!1,null,null,null),ot=et.exports;f()(et,{VApp:Q.Z,VFooter:Y.Z,VMain:tt.Z});var rt=o(9132);r.Z.use(rt.Z);var st=new rt.Z({});r.Z.config.productionTip=!1,new r.Z({vuetify:st,render:t=>t(ot)}).$mount("#app")}},e={};function o(r){var s=e[r];if(void 0!==s)return s.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,r,s,n){if(!r){var a=1/0;for(v=0;v<t.length;v++){r=t[v][0],s=t[v][1],n=t[v][2];for(var i=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(o.O).every((function(t){return o.O[t](r[l])}))?r.splice(l--,1):(i=!1,n<a&&(a=n));if(i){t.splice(v--,1);var c=s();void 0!==c&&(e=c)}}return e}n=n||0;for(var v=t.length;v>0&&t[v-1][2]>n;v--)t[v]=t[v-1];t[v]=[r,s,n]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.j=33}(),function(){var t={33:0};o.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,n,a=r[0],i=r[1],l=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(l)var v=l(o)}for(e&&e(r);c<a.length;c++)n=a[c],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(v)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(3558)}));r=o.O(r)})();
//# sourceMappingURL=post_detail.6e69bd12.js.map