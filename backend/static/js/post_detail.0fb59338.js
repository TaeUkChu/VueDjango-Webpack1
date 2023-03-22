(function(){"use strict";var t={8117:function(t,e,o){var r=o(144),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("MainMenu"),o("v-main",[o("PostDetail")],1),o("v-footer",{attrs:{app:""}},[o("span",[t._v("Copyright © 2022 by shkim")])])],1)},n=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",[o("v-list-item",{staticClass:"px-2"},[o("v-icon",{attrs:{large:"",center:""}},[t._v("mdi-account")])],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"text-h6"},[t._v(" 사용자 이름 ")]),o("v-list-item-subtitle",[t._v("사용자@example.com")])],1)],1)],1),o("v-divider"),o("v-list",{attrs:{nav:"",dense:""}},[o("v-list-item",{attrs:{link:""}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-folder")])],1),o("v-list-item-title",[t._v("내 일기장")])],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-account-multiple")])],1),o("v-list-item-title",[t._v("공유한 일기장")])],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-star")])],1),o("v-list-item-title",[t._v("찜한 일기장")])],1)],1)],1),o("v-app-bar",{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("v-toolbar-title",[t._v("Vue.js - Django Web Programming")]),o("v-spacer"),o("v-btn",{attrs:{text:"",href:"/"}},[t._v("Home")]),o("v-btn",{attrs:{text:"",href:"/blog/post/list/"}},[t._v("Blog")]),o("v-btn",{attrs:{text:"",href:"/admin/"}},[t._v("Admin")]),o("v-spacer"),o("v-menu",{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,s=e.attrs;return[o("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",s,!1),r),[o("v-icon",[t._v("mdi-account")]),t._v(t._s(t.me.username)+" "),o("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[o("v-list",["Anonymous"===t.me.username?[o("v-list-item",{on:{click:function(e){return t.dialogOpen("login")}}},[o("v-list-item-title",[t._v("Login")])],1),o("v-list-item",{on:{click:function(e){return t.dialogOpen("register")}}},[o("v-list-item-title",[t._v("Register")])],1)]:[o("v-list-item",{on:{click:t.logout}},[o("v-list-item-title",[t._v("Logout")])],1),o("v-list-item",{on:{click:function(e){return t.dialogOpen("pwdchg")}}},[o("v-list-item-title",[t._v("Password change")])],1)]],2)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.login,callback:function(e){t.$set(t.dialog,"login",e)},expression:"dialog.login"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[o("v-toolbar-title",[t._v("Login form")])],1),o("v-card-text",[o("v-form",{ref:"loginForm",attrs:{id:"login-form"}},[o("v-text-field",{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),o("v-text-field",{attrs:{label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("login")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){return t.save("login")}}},[t._v("Login")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.register,callback:function(e){t.$set(t.dialog,"register",e)},expression:"dialog.register"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"success",dark:"",flat:""}},[o("v-toolbar-title",[t._v("Register form")])],1),o("v-card-text",[o("v-form",{ref:"registerForm",attrs:{id:"register-form"}},[o("v-text-field",{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),o("v-text-field",{attrs:{label:"Password",name:"password1","prepend-icon":"mdi-lock",type:"password"}}),o("v-text-field",{attrs:{label:"Password again",name:"password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("register")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"success"},on:{click:function(e){return t.save("register")}}},[t._v("Register")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.pwdchg,callback:function(e){t.$set(t.dialog,"pwdchg",e)},expression:"dialog.pwdchg"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"warning",dark:"",flat:""}},[o("v-toolbar-title",[t._v("Password change form")])],1),o("v-card-text",[o("v-form",{ref:"pwdchgForm",attrs:{id:"pwdchg-form"}},[o("v-text-field",{attrs:{label:"Old password",name:"old_password","prepend-icon":"mdi-lock",type:"password"}}),o("v-text-field",{attrs:{label:"New password",name:"new_password1","prepend-icon":"mdi-lock",type:"password"}}),o("v-text-field",{attrs:{label:"New password again",name:"new_password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("pwdchg")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"warning"},on:{click:function(e){return t.save("pwdchg")}}},[t._v("Password change")])],1)],1)],1)],1)},i=[],l=o(9669),c=o.n(l);const d=new r.Z;var g=d;c().defaults.xsrfCookieName="csrftoken",c().defaults.xsrfHeaderName="X-CSRFToken";var v={data:()=>({drawer:null,dialog:{login:!1,register:!1,pwdchg:!1},me:{username:"Anonymous"}}),watch:{me(t,e){console.log("watch.me()...",t,e),g.$emit("me_change",t)}},created(){console.log("created()..."),this.getUserInfo()},methods:{dialogOpen(t){console.log("dialogOpen()...",t),"login"===t?this.dialog.login=!0:"register"===t?this.dialog.register=!0:"pwdchg"===t&&(this.dialog.pwdchg=!0)},cancel(t){console.log("cancel()...",t),"login"===t?(this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.dialog.register=!1,this.$refs.registerForm.reset()):"pwdchg"===t&&(this.dialog.pwdchg=!1,this.$refs.pwdchgForm.reset())},save(t){console.log("save()...",t),"login"===t?(this.login(),this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.register(),this.dialog.register=!1,this.$refs.registerForm.reset()):"pwdchg"===t&&(this.pwdchg(),this.dialog.pwdchg=!1,this.$refs.pwdchgForm.reset())},login(){console.log("login()...");const t=new FormData(document.getElementById("login-form"));c().post("/api/login/",t).then((t=>{console.log("LOGIN POST RES",t),this.me=t.data})).catch((t=>{console.log("LOGIN POST ERR.RESPONSE",t.response),alert("login NOK")}))},register(){console.log("register()...");const t=new FormData(document.getElementById("register-form"));c().post("/api/register/",t).then((t=>{console.log("REGISTER POST RES",t),alert(`user ${t.data.username} created OK`)})).catch((t=>{console.log("REGISTER POST ERR.RESPONSE",t.response),alert("register NOK")}))},logout(){console.log("logout()..."),c().get("/api/logout/").then((t=>{console.log("LOGOUT GET RES",t),alert(`user ${this.me.username} logout OK`),this.me={username:"Anonymous"}})).catch((t=>{console.log("LOGOUT GET ERR.RESPONSE",t.response),alert("logout NOK")}))},pwdchg(){console.log("pwdchg()...");const t=new FormData(document.getElementById("pwdchg-form"));c().post("/api/pwdchg/",t).then((t=>{console.log("PWDCHG POST RES",t),alert(`user ${this.me.username} password change OK`)})).catch((t=>{console.log("PWDCHG POST ERR.RESPONSE",t.response),alert("password change NOK")}))},getUserInfo(){console.log("getUserInfo()..."),c().get("/api/me/").then((t=>{console.log("GETUSERINFO GET RES",t),this.me=t.data})).catch((t=>{console.log("GETUSERINFO GET ERR.RESPONSE",t.response),alert(t.response.status+" "+t.response.statusText)}))}}},p=v,u=o(1001),m=o(3453),f=o.n(m),h=o(8320),w=o(5206),_=o(680),b=o(3237),E=o(7118),y=o(4497),O=o(1418),T=o(6232),k=o(6428),x=o(6816),S=o(7620),C=o(2059),P=o(459),R=o(6768),Z=o(3347),V=o(9762),I=o(5978),G=o(6656),D=o(7921),N=(0,u.Z)(p,a,i,!1,null,null,null),L=N.exports;f()(N,{VAppBar:h.Z,VAppBarNavIcon:w.Z,VBtn:_.Z,VCard:b.Z,VCardActions:E.h7,VCardText:E.ZB,VDialog:y.Z,VDivider:O.Z,VForm:T.Z,VIcon:k.Z,VList:x.Z,VListItem:S.Z,VListItemContent:C.km,VListItemIcon:P.Z,VListItemSubtitle:C.oZ,VListItemTitle:C.V9,VMenu:R.Z,VNavigationDrawer:Z.Z,VSpacer:V.Z,VTextField:I.Z,VToolbar:G.Z,VToolbarTitle:D.qW});var $=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12",lg:"10"}},[o("h1",[t._v(t._s(t.post.title))]),o("p",[t._v(t._s(t.post.modify_dt)+", written by "+t._s(t.post.owner))])])],1),o("v-row",{attrs:{align:"start",justify:"center"}},[o("v-col",{attrs:{cols:"12",sm:"8",lg:"7"}},[o("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[o("p",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.post.content))]),o("div",[o("strong",[t._v("TAGS:")]),t._l(t.post.tags,(function(e,r){return o("v-chip",{key:r,staticClass:"ma-2 my-hover",attrs:{outlined:""},on:{click:function(o){return t.serverPage(e)}}},[t._v(t._s(e))])}))],2),o("br"),o("div",[o("v-card",{on:{click:function(e){return t.keybert(t.post.id)}}},[o("h2",{staticClass:"my-hover"},[t._v("Keybert 변환")])])],1)])],1),o("v-col",{attrs:{cols:"12",sm:"4",lg:"3"}},[o("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[o("p",[t._v("prev post")]),t.post.prev?o("h2",{staticClass:"my-hover",on:{click:function(e){return t.fetchPostDetail(t.post.prev.id)}}},[t._v(" "+t._s(t.post.prev.title)+" ")]):t._e()]),o("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[o("p",[t._v("next post")]),t.post.next?o("h2",{staticClass:"my-hover",on:{click:function(e){return t.fetchPostDetail(t.post.next.id)}}},[t._v(" "+t._s(t.post.next.title)+" ")]):t._e()]),o("v-card",{staticClass:"pa-2",attrs:{tile:""}},[o("h2",[t._v("Tag cloud")]),t._l(t.tagCloud,(function(e,r){return o("v-chip",{key:r,staticClass:"ma-2 my-hover",attrs:{color:e.color,"text-color":"white"},on:{click:function(o){return t.serverPage(e.name)}}},[o("v-avatar",{class:e.color+" darken-4",attrs:{left:""}},[t._v(t._s(e.count))]),t._v(t._s(e.name)+" ")],1)}))],2)],1)],1)],1)},F=[],A={data:()=>({post:{},tagCloud:[]}),created(){console.log("created()...");const t=location.pathname.split("/")[3];this.fetchPostDetail(t),this.fetchTagCloud()},methods:{fetchPostDetail(t){console.log("fetchPostDetail()...",t),c().get(`/api/post/${t}/`).then((t=>{console.log("POST DETAIL GET RES",t),this.post=t.data})).catch((t=>{console.log("POST DETAIL GET ERR.RESPONSE",t.response),alert(t.response.status+" "+t.response.statusText)}))},fetchTagCloud(){console.log("fetchTagCloud()..."),c().get("/api/tag/cloud/").then((t=>{console.log("TAG CLOUD GET RES",t),this.tagCloud=t.data,this.tagCloud.forEach((t=>{3===t.weight?t.color="green":2===t.weight?t.color="blue-grey":1===t.weight&&(t.color="grey")}))})).catch((t=>{console.log("TAG CLOUD GET ERR.RESPONSE",t.response),alert(t.response.status+" "+t.response.statusText)}))},serverPage(t){console.log("serverPage()...",t),location.href=`/blog/post/list/?tagname=${t}`},keybert(t){console.log("keybert()...",t),c().get(`/api/post/${t}/keybert/`).then((t=>{console.log("POST DETAIL GET RES",t),alert("Keybert 받아오는 중입니다 조금만 기다려주세요"),this.post=t.data})).catch((t=>{console.log("POST DETAIL GET ERR.RESPONSE",t.response),alert(t.response.status+" "+t.response.statusText)}))}}},j=A,U=o(6370),K=o(5424),M=o(2102),B=o(9846),H=o(2877),W=(0,u.Z)(j,$,F,!1,null,"08474e62",null),q=W.exports;f()(W,{VAvatar:U.Z,VCard:b.Z,VChip:K.Z,VCol:M.Z,VContainer:B.Z,VRow:H.Z});var X={components:{MainMenu:L,PostDetail:q},data:()=>({})},z=X,J=o(7524),Q=o(899),Y=o(7877),tt=(0,u.Z)(z,s,n,!1,null,null,null),et=tt.exports;f()(tt,{VApp:J.Z,VFooter:Q.Z,VMain:Y.Z});var ot=o(9132);r.Z.use(ot.Z);var rt=new ot.Z({});r.Z.config.productionTip=!1,new r.Z({vuetify:rt,render:t=>t(et)}).$mount("#app")}},e={};function o(r){var s=e[r];if(void 0!==s)return s.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,r,s,n){if(!r){var a=1/0;for(d=0;d<t.length;d++){r=t[d][0],s=t[d][1],n=t[d][2];for(var i=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(o.O).every((function(t){return o.O[t](r[l])}))?r.splice(l--,1):(i=!1,n<a&&(a=n));if(i){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[r,s,n]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={33:0};o.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,n,a=r[0],i=r[1],l=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(l)var d=l(o)}for(e&&e(r);c<a.length;c++)n=a[c],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(d)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(8117)}));r=o.O(r)})();
//# sourceMappingURL=post_detail.0fb59338.js.map