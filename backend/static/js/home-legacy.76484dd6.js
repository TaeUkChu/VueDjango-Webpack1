(function(){"use strict";var t={2601:function(t,e,o){o(6992),o(8674),o(9601),o(7727);var n=o(144),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("MainMenu"),o("div",{staticClass:"background"},[o("v-main",[o("HelloWorld")],1)],1),o("v-footer",{attrs:{app:""}},[o("span",[t._v("Copyright © 2022 by shkim")])])],1)},r=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-navigation-drawer",{attrs:{app:"",clipped:"","expend-on-hover":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",[o("v-list-item",{staticClass:"px-2"},[o("v-icon",{attrs:{large:"",center:""}},[t._v("mdi-account")])],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"text-h6"},[t._v(" 사용자 이름 ")]),o("v-list-item-subtitle",[t._v("사용자@example.com")])],1)],1)],1),o("v-divider"),o("v-list",{attrs:{nav:"",dense:""}},[o("v-list-item",{attrs:{link:"/blog/post/list/?username="+t.me.username}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-folder")])],1),o("v-list-item-title",[t._v("내 일기장")])],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-account-multiple")])],1),o("v-list-item-title",[t._v("공유한 일기장")])],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-star")])],1),o("v-list-item-title",[t._v("찜한 일기장")])],1)],1)],1),o("v-app-bar",{attrs:{app:"","clipped-left":"",color:"light-green-darken-1",dark:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("v-toolbar-title",{attrs:{id:"menutitle"}},[t._v("하루 자국")]),o("v-spacer"),o("v-btn",{attrs:{text:"",href:"/"}},[t._v("Home")]),o("v-btn",{attrs:{text:"",href:"/blog/post/img/list/"}},[t._v("그림 일기 보기")]),o("v-btn",{attrs:{text:"",href:"/blog/post/list/"}},[t._v("리스트 일기 보기")]),o("v-btn",{attrs:{text:"",href:"/admin/"}},[t._v("관리자 페이지")]),o("v-spacer"),o("v-menu",{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[o("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",i,!1),n),[o("v-icon",[t._v("mdi-account")]),t._v(t._s(t.me.username)+" "),o("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[o("v-list",["Anonymous"===t.me.username?[o("v-list-item",{on:{click:function(e){return t.dialogOpen("login")}}},[o("v-list-item-title",[t._v("로그인")])],1),o("v-list-item",{on:{click:function(e){return t.dialogOpen("register")}}},[o("v-list-item-title",[t._v("회원가입")])],1)]:[o("v-list-item",{on:{click:t.logout}},[o("v-list-item-title",[t._v("로그아웃")])],1),o("v-list-item",{on:{click:function(e){return t.dialogOpen("pwdchg")}}},[o("v-list-item-title",[t._v("비밀번호 변경")])],1)]],2)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.login,callback:function(e){t.$set(t.dialog,"login",e)},expression:"dialog.login"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[o("v-toolbar-title",[t._v("로그인")])],1),o("v-card-text",[o("v-form",{ref:"loginForm",attrs:{id:"login-form"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.save("login")}}},[o("v-text-field",{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),o("v-text-field",{attrs:{label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("login")}}},[t._v("취소")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){return t.save("login")}}},[t._v("로그인하기")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.register,callback:function(e){t.$set(t.dialog,"register",e)},expression:"dialog.register"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"success",dark:"",flat:""}},[o("v-toolbar-title",[t._v("회원 가입")])],1),o("v-card-text",[o("v-form",{ref:"registerForm",attrs:{id:"register-form"},on:{submit:function(e){return e.preventDefault(),t.save("login")}}},[o("v-text-field",{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),o("v-text-field",{attrs:{label:"Password",name:"password1","prepend-icon":"mdi-lock",type:"password",hint:"너무 흔한 비밀번호는 안되요. (예시:asdf1234)",rules:t.rules}}),o("v-text-field",{attrs:{label:"Password again",name:"password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("register")}}},[t._v("취소")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"success"},on:{click:function(e){return t.save("register")}}},[t._v("등록하기")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.pwdchg,callback:function(e){t.$set(t.dialog,"pwdchg",e)},expression:"dialog.pwdchg"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"warning",dark:"",flat:""}},[o("v-toolbar-title",[t._v("비밀번호 변경")])],1),o("v-card-text",[o("v-form",{ref:"pwdchgForm",attrs:{id:"pwdchg-form"},on:{submit:function(e){return e.preventDefault(),t.save("login")}}},[o("v-text-field",{attrs:{label:"Old password",name:"old_password","prepend-icon":"mdi-lock",type:"password"}}),o("v-text-field",{attrs:{label:"New password",name:"new_password1","prepend-icon":"mdi-lock",type:"password"}}),o("v-text-field",{attrs:{label:"New password again",name:"new_password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("pwdchg")}}},[t._v("취소")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"warning"},on:{click:function(e){return t.save("pwdchg")}}},[t._v("비밀번호 변경하기")])],1)],1)],1)],1)},s=[],l=o(9669),c=o.n(l),d=new n.Z,u=d;c().defaults.xsrfCookieName="csrftoken",c().defaults.xsrfHeaderName="X-CSRFToken";var v={data:function(){return{drawer:null,dialog:{login:!1,register:!1,pwdchg:!1},me:{username:"Anonymous"},rules:[function(t){return!!t||"필수 입력 사항입니다."},function(t){return t&&t.length>=8||"8자리 이상 입력해주세요."},function(t){return t&&isNaN(t)||"숫자와 문자를 섞어주세요."}]}},watch:{me:function(t,e){console.log("watch.me()...",t,e),u.$emit("me_change",t)}},created:function(){console.log("created()..."),this.getUserInfo()},methods:{dialogOpen:function(t){console.log("dialogOpen()...",t),"login"===t?this.dialog.login=!0:"register"===t?this.dialog.register=!0:"pwdchg"===t&&(this.dialog.pwdchg=!0)},cancel:function(t){console.log("cancel()...",t),"login"===t?(this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.dialog.register=!1,this.$refs.registerForm.reset()):"pwdchg"===t&&(this.dialog.pwdchg=!1,this.$refs.pwdchgForm.reset())},save:function(t){console.log("save()...",t),"login"===t?(this.login(),this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.register(),this.dialog.register=!1,this.$refs.registerForm.reset()):"pwdchg"===t&&(this.pwdchg(),this.dialog.pwdchg=!1,this.$refs.pwdchgForm.reset())},login:function(){var t=this;console.log("login()...");var e=new FormData(document.getElementById("login-form"));c().post("/api/login/",e).then((function(e){console.log("LOGIN POST RES",e),t.me=e.data})).catch((function(t){console.log("LOGIN POST ERR.RESPONSE",t.response),alert("로그인 실패")}))},register:function(){console.log("register()...");var t=new FormData(document.getElementById("register-form"));c().post("/api/register/",t).then((function(t){console.log("REGISTER POST RES",t),alert("user ".concat(t.data.username," 생성 완료"))})).catch((function(t){console.log("REGISTER POST ERR.RESPONSE",t.response),alert("회원가입 실패")}))},logout:function(){var t=this;console.log("logout()..."),c().get("/api/logout/").then((function(e){console.log("LOGOUT GET RES",e),alert("user ".concat(t.me.username," 로그아웃 완료")),t.me={username:"Anonymous"}})).catch((function(t){console.log("LOGOUT GET ERR.RESPONSE",t.response),alert("로그아웃 실패")}))},pwdchg:function(){var t=this;console.log("pwdchg()...");var e=new FormData(document.getElementById("pwdchg-form"));c().post("/api/pwdchg/",e).then((function(e){console.log("PWDCHG POST RES",e),alert("user ".concat(t.me.username," 패스워드 변경 완료"))})).catch((function(t){console.log("PWDCHG POST ERR.RESPONSE",t.response),alert("패스워드 변경 실패")}))},getUserInfo:function(){var t=this;console.log("getUserInfo()..."),c().get("/api/me/").then((function(e){console.log("GETUSERINFO GET RES",e),t.me=e.data})).catch((function(t){console.log("GETUSERINFO GET ERR.RESPONSE",t.response),alert(t.response.status+" "+t.response.statusText)}))}}},g=v,f=o(1001),p=o(3453),m=o.n(p),h=o(8320),b=o(5206),w=o(3150),x=o(3237),_=o(7118),y=o(4497),k=o(1418),E=o(6232),C=o(6428),O=o(6816),V=o(7620),Z=o(2059),S=o(459),T=o(6768),R=o(3347),I=o(9762),P=o(5978),F=o(6656),H=o(7921),j=(0,f.Z)(g,a,s,!1,null,null,null),G=j.exports;m()(j,{VAppBar:h.Z,VAppBarNavIcon:b.Z,VBtn:w.Z,VCard:x.Z,VCardActions:_.h7,VCardText:_.ZB,VDialog:y.Z,VDivider:k.Z,VForm:E.Z,VIcon:C.Z,VList:O.Z,VListItem:V.Z,VListItemContent:Z.km,VListItemIcon:S.Z,VListItemSubtitle:Z.oZ,VListItemTitle:Z.V9,VMenu:T.Z,VNavigationDrawer:R.Z,VSpacer:I.Z,VTextField:P.Z,VToolbar:F.Z,VToolbarTitle:H.qW});var M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"pa-4 text-center"},[o("div",{staticClass:"Text title"},[o("v-row",{staticClass:"header-container"},[o("div",{staticClass:"logo_img_cat"}),o("div",{staticClass:"logo_img_foot"}),o("p",{staticClass:"text-center Text",attrs:{id:"HomeText"}},[t._v("하루 자국")])])],1),o("div",[o("div",{staticClass:"sub-container"},[o("div",{attrs:{id:"rain-gif"}},[o("div",{staticClass:"Text content-gif"},[o("br"),o("p",[t._v("몸도 마음도 지친 하루…")]),o("br"),o("p",[t._v("하루 하루 있었던 일을 기록하고 싶지만")]),o("br"),o("p",[t._v("펜 하나 까딱할 힘도 없을 때")]),o("br"),o("p",[t._v("침대에 누워 오늘 하루 있었던 일들을")]),o("p",[t._v("하루자국에이야기해주세요")]),o("br"),o("p",[t._v("하루 자국이 한편의 그림일기로 만들어")]),o("p",[t._v("드릴게요.")])])])])]),o("br"),o("br"),o("div",{staticClass:"sub-container"},[o("div",{staticClass:"logo_img_foot"})]),o("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[t._l(t.items,(function(e,n){return o("v-col",{key:n,attrs:{cols:"6"}},[o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var i=n.hover;return[o("v-card",{class:{"on-hover":i},attrs:{elevation:i?12:2}},[o("v-img",{attrs:{src:e.img,height:"225px"}},[o("v-card-title",{staticClass:"text-h6 white--text"},[o("v-row",{staticClass:"fill-height flex-column",attrs:{justify:"space-between"}},[o("p",{staticClass:"mt-4 subheading text-left"},[t._v(" "+t._s(e.title)+" ")]),o("div",[o("p",{staticClass:"ma-10 font-weight-bold font-italic text-center",attrs:{id:"content"}},[t._v(" "+t._s(e.text)+" ")]),o("p",{staticClass:"text-caption font-weight-medium font-italic text-bottom",attrs:{id:"tag"}},[t._v(" "+t._s(e.tag)+" ")])])])],1)],1)],1)]}}],null,!0)})],1)}))],2)],1)},N=[],D={data:function(){return{items:[{title:"2023.03.21",text:"대학 축제에 나훈아가 와서 공연했어! 대박 존잼!!!!",tag:"# 축제 # 나훈아 # 공연.",img:"https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80"},{title:"2023.03.20",text:"티켓이 생겨서 처음으로 밴드 보러 갔어. 일렉기타 완전 좋았어. 행복해",tag:"# 밴드, # 행복 # 일렉기타",img:"https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"},{title:"2023.03.19",text:"와 하늘이 너무 예뻐 마치 꿈나라 같아.",tag:"# 하늘 # 예뻐 # 꿈나라",img:"https://images.unsplash.com/photo-1542320868-f4d80389e1c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80"},{title:"2023.03.18",text:"여자친구랑 고양이 카페에서 고양이랑 뒹굴뒹굴 하루종일 놀았다. 고양이 최고",tag:"# 고양이 # 카페 # 여자친구",img:"https://th.bing.com/th/id/OIP.emqIME5C3-k5aQZMAV8w2AHaFj?w=228&h=180&c=7&r=0&o=5&pid=1.7"},{title:"2023.03.17",text:"첫 면접에서 떨어졌다. 굉장히 우울하다. 꼭 붙고싶었는데.. 다음 번엔 더 열심히 준비해야겠다.",tag:"# 첫 면접 # 우울하다 # 떨어졌다.",img:"https://www.thebalancecareers.com/thmb/cKbQZLWHbj_2LmQSt-3KY3JmoH0=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/rejection-letter-sample-1919097-Final-edit-4a8b4a0963184890b7e3884f022aeda5.jpg"},{title:"2023.03.15",text:"9년간 함께했던 포피가 무지개다리를 건넜다.. 너무 슬프다... 그곳에선 꼭 행복해줘..",tag:"# 포피 # 무지개 다리 # 너무 슬프다",img:"https://th.bing.com/th/id/OIP.VNR428DrWm5WY_pCl7ohDgHaEO?w=285&h=180&c=7&r=0&o=5&pid=1.7"}],transparent:"rgba(255, 255, 255, 0)"}}},B=D,$=o(2102),L=o(9846),A=o(5189),W=o(7047),U=o(2877),q=(0,f.Z)(B,M,N,!1,null,null,null),Q=q.exports;m()(q,{VCard:x.Z,VCardTitle:_.EB,VCol:$.Z,VContainer:L.Z,VHover:A.Z,VImg:W.Z,VRow:U.Z});var Y={components:{MainMenu:G,HelloWorld:Q},data:function(){return{}}},J=Y,K=o(7524),X=o(899),z=o(7877),tt=(0,f.Z)(J,i,r,!1,null,"1aabb273",null),et=tt.exports;m()(tt,{VApp:K.Z,VFooter:X.Z,VMain:z.Z});var ot=o(9132);n.Z.use(ot.Z);var nt=new ot.Z({});n.Z.config.productionTip=!1,new n.Z({vuetify:nt,render:function(t){return t(et)},install:function(t){t.component("VideoBackground",et)}}).$mount("#app")}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,r){if(!n){var a=1/0;for(d=0;d<t.length;d++){n=t[d][0],i=t[d][1],r=t[d][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(s=!1,r<a&&(a=r));if(s){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[n,i,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.j=177}(),function(){var t={177:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,r,a=n[0],s=n[1],l=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(l)var d=l(o)}for(e&&e(n);c<a.length;c++)r=a[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(d)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(2601)}));n=o.O(n)})();
//# sourceMappingURL=home-legacy.76484dd6.js.map