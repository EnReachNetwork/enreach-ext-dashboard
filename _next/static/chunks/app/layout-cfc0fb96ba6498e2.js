(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3774:function(e,t,n){Promise.resolve().then(n.bind(n,60491)),Promise.resolve().then(n.bind(n,9371)),Promise.resolve().then(n.bind(n,35802)),Promise.resolve().then(n.bind(n,59404)),Promise.resolve().then(n.bind(n,42351)),Promise.resolve().then(n.bind(n,17861)),Promise.resolve().then(n.bind(n,6419)),Promise.resolve().then(n.bind(n,72361)),Promise.resolve().then(n.bind(n,23857)),Promise.resolve().then(n.bind(n,69085)),Promise.resolve().then(n.bind(n,24714)),Promise.resolve().then(n.bind(n,89121)),Promise.resolve().then(n.bind(n,78526)),Promise.resolve().then(n.bind(n,8221)),Promise.resolve().then(n.bind(n,87844)),Promise.resolve().then(n.bind(n,72714)),Promise.resolve().then(n.bind(n,75473)),Promise.resolve().then(n.bind(n,58648)),Promise.resolve().then(n.bind(n,99250)),Promise.resolve().then(n.bind(n,79361)),Promise.resolve().then(n.bind(n,25366)),Promise.resolve().then(n.bind(n,34350)),Promise.resolve().then(n.bind(n,57250)),Promise.resolve().then(n.bind(n,77469)),Promise.resolve().then(n.bind(n,85353)),Promise.resolve().then(n.bind(n,90917)),Promise.resolve().then(n.bind(n,17075)),Promise.resolve().then(n.bind(n,62850)),Promise.resolve().then(n.bind(n,81581)),Promise.resolve().then(n.bind(n,50398)),Promise.resolve().then(n.bind(n,98967)),Promise.resolve().then(n.bind(n,40022)),Promise.resolve().then(n.bind(n,29277)),Promise.resolve().then(n.bind(n,23222)),Promise.resolve().then(n.bind(n,33233)),Promise.resolve().then(n.bind(n,23320)),Promise.resolve().then(n.bind(n,71305)),Promise.resolve().then(n.t.bind(n,86536,23)),Promise.resolve().then(n.t.bind(n,90457,23)),Promise.resolve().then(n.t.bind(n,43323,23)),Promise.resolve().then(n.t.bind(n,55398,23)),Promise.resolve().then(n.bind(n,58782)),Promise.resolve().then(n.t.bind(n,54327,23))},58782:function(e,t,n){"use strict";n.d(t,{PageLayout:function(){return g}});var r=n(81210),s=n(38722),a=n(49755),o=n(36062),i=n(53179),l=n(60164),d=n(20337),c=n(44384),u=n(87106),h=n(65843);n(77422);let m=()=>{let e="dark",t="dark";return"light"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: light)").matches)?(document.documentElement.classList.add("dark"),e="dark",t="dark"):(e="light",t="light"),"theme"in localStorage||(e="system"),{themeMode:e,theme:t}},p=(0,h.U)(e=>({...m(),setThemeMode:t=>e(()=>({themeMode:t})),setTheme:t=>e(()=>({theme:t}))}));u.EWX,u.Dq,u.pUp;let f=new l.S;function b(e){let{children:t}=e;return p(),(0,r.jsx)(s.w,{className:"App  ",children:(0,r.jsx)(c.rg,{clientId:"425165933886-vpv32tvbhfeqfujnel0fdjm88kfn1lhn.apps.googleusercontent.com",children:(0,r.jsx)(d.aH,{client:f,children:(0,r.jsx)(i.Ho,{children:t})})})})}function g(e){let{children:t}=e,[n,s]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{n||s(!0)},[n]),n)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.x7,{position:"top-right",offset:100,theme:"light",style:{"--width":"15rem"},toastOptions:{classNames:{toast:"rounded-xl bg-[#585858] border border-solid border-white/10 text-white/60 text-xs px-4 py-2"}}}),(0,r.jsx)(b,{children:t})]}):null}},53179:function(e,t,n){"use strict";n.d(t,{Vo:function(){return u},Ho:function(){return p},Eu:function(){return f}});var r=n(81210),s=n(74572),a=n(36957);let o={beta:"EnreachExt_beta",staging:"EnreachExt_staging",prod:"EnreachExt"};function i(){return window[o[a.Vi]]}var l=n(76114),d=n(95258),c=n(49755);let u=(0,c.createContext)({login:async()=>{},setUser:()=>{},logout:()=>{}}),h="last-login-user",m=()=>{try{let e=localStorage.getItem(h);if(!e)return null;return JSON.parse(e)}catch(e){return console.error(e),null}},p=e=>{let{children:t}=e,n=(0,c.useRef)(!1),a=(0,d.useRouter)(),[o,p]=(0,c.useState)(m()),f=(0,d.useSearchParams)().get("redirect");console.info("redirect:",f);let b=e=>{var t,r;e?(n.current=!1,p(e),localStorage.setItem(h,JSON.stringify(e)),e.token&&(null===(r=i())||void 0===r||r.request({name:"setAccessToken",body:e.token}).catch(console.error)),a.push(f||"/")):(n.current=!0,p(null),localStorage.removeItem(h),null===(t=i())||void 0===t||t.request({name:"clearAccessToken"}).catch(console.error),a.push("/signin"))},g=()=>{b()};(0,c.useEffect)(()=>{let e;return o&&o.token&&(e=setInterval(()=>{let e=i();if(!e){console.warn("Extension not installed");return}e.request({name:"getStat"}).then(e=>{e.logined||(console.info("sync logout from ext"),g())}).catch(console.error)},1e3)),()=>clearInterval(e)},[o]);let v=async e=>{try{if(!e.email||!e.password)return;let t=await s.Z.loginApi(e);b(t),s.Z.setAuth()}catch(e){throw console.error(e),e}};s.Z.setAuth(null==o?void 0:o.token);let w=(0,l.a)({queryKey:["QueryUserInfo",null==o?void 0:o.token],enabled:!!(null==o?void 0:o.token),queryFn:()=>s.Z.userInfo()});return(0,r.jsx)(u.Provider,{value:{user:o,login:v,logout:g,setUser:b,queryUserInfo:w},children:t})},f=()=>(0,c.useContext)(u)},77422:function(e,t,n){"use strict";n.d(t,{C:function(){return u},m:function(){return c}});var r=n(81210),s=n(29906),a=n(12014),o=n(21585),i=n(41551),l=n(10307),d=n(85947);function c(e){let{children:t,contentProps:n,bodyProps:i,...l}=e;return(0,r.jsx)(s.R,{isDismissable:!1,backdrop:"blur",classNames:{backdrop:"backdrop-blur"},hideCloseButton:!0,...l,children:(0,r.jsx)(a.A,{className:"w-[22.5rem] p-6 bg-[#404040] rounded-3xl",...n||{},children:(0,r.jsx)(o.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...i||{},children:t})})})}function u(e){let{tit:t,children:n,contentProps:c,bodyProps:u,className:h,...m}=e;return(0,r.jsx)(s.R,{hideCloseButton:!0,backdrop:"blur",className:h,classNames:{backdrop:"backdrop-blur-[6px]"},...m,children:(0,r.jsx)(a.A,{className:(0,i.cn)("w-[31.25rem] bg-[#404040] gap-6 p-6 rounded-3xl",h),...c||{},children:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.k,{className:"justify-between p-0  ",children:[(0,r.jsx)("span",{className:"text-base font-semibold text-left text-white",children:t}),(0,r.jsx)("div",{className:"p-0 rounded-full w-6 h-6 flex justify-center items-center text-xs cursor-pointer bg-white/10 hover:bg-white/30",onClick:e,children:(0,r.jsx)(d.q5L,{})})]}),(0,r.jsx)(o.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...u||{},children:n})]})})})}},74568:function(e,t,n){"use strict";n.d(t,{Ie:function(){return i},Ih:function(){return o},if:function(){return l}});var r=n(13910),s=n.n(r),a=n(28853);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=s().toNumber(e);return n?(0,a.Z)(n).format({mantissa:2,trimMantissa:!1,average:n>=1e3}).toUpperCase():t}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=s().toNumber(e),r=n?Math.min(s().round(100*n/10),100):0;return n?r<33.33?"Poor":r<66.66?"Good":"Superb":t}function l(e){return(0,a.Z)(Math.max(s().toNumber(e||"1"),1)).format({mantissa:1,trimMantissa:!1})}},74572:function(e,t,n){"use strict";n.d(t,{t:function(){return l}});var r=n(80957),s=n(36957),a=n(13910),o=n.n(a),i=n(74568);let l={beta:"https://dev-api.enreach.network/api",staging:"https://staging-api-1.enreach.network/api",prod:"https://api.enreach.network/api"}[s.Vi],d=r.default.create({baseURL:l,headers:{"Content-Type":"application/json"}}),c={setAuth:e=>{e?d.defaults.headers.common.Authorization=e.startsWith("Bearer")?e:"Bearer ".concat(e):delete d.defaults.headers.common.Authorization},loginApi:async e=>{let t=await d.post("/user/signIn",e);return c.setAuth(t.data.data.token),t.data.data},loginByGoogleApi:async e=>{let t=await d.post("/user/google/signIn",e);return c.setAuth(t.data.data.token),t.data.data},loginSetReferralApi:async e=>{let t=await d.post("/user/referral/by",e);return c.setAuth(t.data.data.token),t.data.data},registerApi:async e=>(await d.post("/user/signUp",{...e})).data.data,registerByGoogleApi:async e=>(await d.post("/user/google/signUp",{accessToken:e})).data.data,resendRegisterVerifyCode:async e=>(await d.post("/user/verify/".concat(e,"/resend")),!0),verifyRegisterCode:async(e,t)=>(await d.post("/user/verify/".concat(e,"/").concat(t))).data.data,userInfo:async()=>{let e=await d.get("/user/profile"),t=e.data.data.point;return o().keys(t).forEach(e=>{t[e]=o().toNumber(t[e])}),t.network=o().toNumber((0,i.if)(e.data.data.stat.extraBoost))*t.network,t.total=t.referral+t.network,e.data.data},sendResetPassword:async e=>(await d.post("/user/password/reset/send",{email:e}),!0),resetPassword:async e=>(await d.post("/user/password/reset",e),!0),userUpdate:async e=>(await d.post("/user/profile/update",e),!0),userReward:async()=>(await d.get("/user/reward")).data.data,nodeList:async()=>(await d.get("/node/list")).data.data,trendingRewards:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"month";return(await d.get("/trending/rewards",{params:{type:e}})).data.data},getAccessToken:async()=>(await d.get("/user/accessToken")).data.data.accessToken,getIP:async()=>(await r.default.get("https://api.bigdatacloud.net/data/client-ip")).data,updateNodeName:async(e,t)=>(await d.post("/node/rename/".concat(e.connectionId,"/").concat(encodeURIComponent(e.ipAddress),"/").concat(encodeURIComponent(t))),!0),getCartoonList:async()=>(await d.get("/extension/tap/list")).data.data,currentUserLike:async(e,t)=>(await d.post("/extension/tap/".concat(t,"/").concat(e))).data,getShareUserList:async e=>(await d.get("/common/tap/".concat(e,"/list"))).data.data,userIsLiked:async e=>(await d.get("/extension/tap/".concat(e,"/liked"))).data.data};t.Z=c},36957:function(e,t,n){"use strict";n.d(t,{Vi:function(){return r},u1:function(){return s}}),n(45303).env.NEXT_PUBLIC_BASE_PATH;let r="beta",s=""},54327:function(){}},function(e){e.O(0,[806,686,495,863,720,717,542,510,664,832,538,614,124,460,403,331,744],function(){return e(e.s=3774)}),_N_E=e.O()}]);