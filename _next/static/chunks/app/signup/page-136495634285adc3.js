(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{97154:function(e,t,r){Promise.resolve().then(r.bind(r,19242))},59951:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(49755),s=function(e){return(e+1)%1e6};function i(e,t){return"function"==typeof e?e.length?e(t):e():e}function a(e,t,r){void 0===e&&(e=0),void 0===t&&(t=null),void 0===r&&(r=null);var a,o,c,l=i(e);"number"!=typeof l&&console.error("initialValue has to be a number, got "+typeof e),"number"==typeof r?l=Math.max(l,r):null!==r&&console.error("min has to be a number, got "+typeof r),"number"==typeof t?l=Math.min(l,t):null!==t&&console.error("max has to be a number, got "+typeof t);var u=(a=l,o=(0,n.useRef)(i(a)),c=(0,n.useReducer)(s,0)[1],(0,n.useMemo)(function(){return[function(){return o.current},function(e){o.current=i(e,o.current),c()}]},[])),f=u[0],d=u[1];return[f(),(0,n.useMemo)(function(){var e=function(e){var n=f(),s=i(e,n);n!==s&&("number"==typeof r&&(s=Math.max(s,r)),"number"==typeof t&&(s=Math.min(s,t)),n!==s&&d(s))};return{get:f,set:e,inc:function(t){void 0===t&&(t=1);var r=i(t,f());"number"!=typeof r&&console.error("delta has to be a number or function returning a number, got "+typeof r),e(function(e){return e+r})},dec:function(t){void 0===t&&(t=1);var r=i(t,f());"number"!=typeof r&&console.error("delta has to be a number or function returning a number, got "+typeof r),e(function(e){return e-r})},reset:function(t){void 0===t&&(t=l);var r=i(t,f());"number"!=typeof r&&console.error("value has to be a number or function returning a number, got "+typeof r),l=r,e(r)}}},[l,r,t])]}},3762:function(e,t,r){"use strict";var n=r(49755);t.Z=function(e,t){var r=(0,n.useRef)(function(){});(0,n.useEffect)(function(){r.current=e}),(0,n.useEffect)(function(){if(null!==t){var e=setInterval(function(){return r.current()},t||0);return function(){return clearInterval(e)}}},[t])}},19242:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(81210),s=r(27767),i=r(36689),a=r(13882),o=r(2793),c=r(74572),l=r(47608),u=r(52897),f=r(83332),d=r(85444),m=r(17528),x=r(95258),h=r(49755),p=r(54957),g=r(59951),b=r(3762),w=r(53179),j=r(53573),v=r(41013),y=r(88918),k=r(2280);function N(){let e=(0,x.useSearchParams)(),t=(0,w.Eu)(),[r,N]=(0,h.useState)(""),[E,S]=(0,h.useState)(""),[C,R]=(0,h.useState)(""),[P,Z]=(0,h.useState)(e.get("referral")||""),[D,_]=(0,h.useState)(!1),[V,A]=(0,p.Z)(!1),[F,I]=(0,g.Z)(60,60,0);(0,b.Z)(()=>I.dec(1),1e3);let[M,U]=(0,h.useState)(""),T=(0,x.useRouter)(),B=(0,h.useRef)(),{mutate:L,isPending:G}=(0,m.D)({onError:l.rV,mutationFn:async e=>{if(e.preventDefault(),!r||!E||!C)throw Error("Please enter email or password");if(E!==C)throw Error("Please confirm password");if(!V)throw Error("Plase checked Term of Service and Privacy Policy");B.current=await c.Z.registerApi({email:r,password:E,referralCode:P||void 0}),I.reset(60),_(!0)}}),{mutate:O,isPending:z}=(0,m.D)({onError:l.rV,mutationFn:async()=>{if(!M||!0!==(0,u.jg)(M))throw Error("Please enter verify code");if(!B.current)throw Error("Please sign up");let e=await c.Z.verifyRegisterCode(B.current.userId,M);if(e&&e.token)t.setUser(e);else{let e=await c.Z.loginApi({email:r,password:E});e.token?t.setUser(e):T.push("/signin")}}}),{mutate:q,isPending:J}=(0,m.D)({onError:l.rV,mutationFn:async e=>{if(e.preventDefault(),!B.current)throw Error("Please sign up");await c.Z.resendRegisterVerifyCode(B.current.userId),I.reset(60)}}),K=z||!0!==(0,u.jg)(M),$=G||!V||!!P&&!0!==(0,u.tx)(P)||!0!==(0,u.oH)(r)||!0!==(0,u.uo)(E)||!0!==(0,u.S$)(C,E),H=F>0||J;return(0,k.Z)(),(0,n.jsx)(v.K,{children:(0,n.jsxs)(j.z,{className:"mx-auto p-5 min-h-full flex flex-col gap-5 items-center w-full max-w-[25rem]",children:[(0,n.jsx)("span",{className:y.U,children:"Sign Up"}),D?(0,n.jsxs)("div",{className:"flex flex-col items-center gap-5 w-full mb-auto",children:[(0,n.jsxs)("div",{className:"text-center whitespace-nowrap",children:["Verify your email",(0,n.jsx)("br",{}),"Enter the 6-digit verification code we sent to your inbox below:"]}),(0,n.jsx)(i.Fx,{onChange:U}),(0,n.jsx)(s.un,{className:"w-full",onClick:()=>O(),isDisabled:K,isLoading:z,children:"Verify Email"}),(0,n.jsxs)(a.g,{className:"text-xs -mt-1 flex items-center gap-2",onClick:q,isDisable:H,children:[J&&(0,n.jsx)(f.c,{size:"sm"}),F>0?"Resend Email (".concat(F,"s)"):"Resend Email"]})]}):(0,n.jsxs)("form",{onSubmit:L,className:"flex flex-col gap-5 w-full mb-auto",children:[(0,n.jsx)(i.j7,{setEmail:N}),(0,n.jsx)(i.CM,{setPassword:S}),(0,n.jsx)(i.CM,{label:"Confirm Password",setPassword:R,validate:e=>(0,u.S$)(e,E)}),(0,n.jsx)(i.e9,{value:P,setReferalCode:Z}),(0,n.jsxs)(d.K,{classNames:{wrapper:"flip_item",label:"text-xs text-white/60",icon:"w-2.5 h-2.5"},checked:V,onValueChange:A,children:["I agree to the EnReach"," ",(0,n.jsx)(a.g,{target:"_blank",className:"text-xs",href:"https://enreach.network/terms",children:"Term of Service"})," ","and"," ",(0,n.jsx)(a.g,{target:"_blank",className:"text-xs",href:"https://enreach.network/privacy",children:"Privacy Policy"}),"."]}),(0,n.jsx)(s.un,{type:"submit",isDisabled:$,isLoading:G,children:"Sign Up"}),(0,n.jsx)(o.e,{btn:"Sign up with Google",defReferralCode:P}),(0,n.jsxs)("div",{className:"flip_item text-center text-xs text-white/60",children:["Already have an account?"," ",(0,n.jsx)(a.g,{href:"/signin",className:"text-xs",children:"Sign In"})]})]})]})})}},2793:function(e,t,r){"use strict";r.d(t,{e:function(){return b}});var n=r(81210),s=r(84200),i=r(27767),a=r(77422),o=r(36689),c=r(17528),l=r(49755),u=r(44384),f=r(47608),d=r(54957),m=r(52897),x=r(74572),h=r(53179),p=r(83332),g=r(13882);function b(e){let{defReferralCode:t,btn:r="Sign in with Google",isDisabled:b}=e,w=(0,h.Eu)(),[j,v]=(0,l.useState)(""),[y,k]=(0,d.Z)(!1),[N,E]=(0,l.useState)(!1),S=(0,l.useRef)(""),{mutate:C,isPending:R}=(0,c.D)({onError:f.rV,mutationFn:async e=>{E(!1),S.current=e.access_token;let r=await x.Z.loginByGoogleApi({accessToken:e.access_token});if(r.token)w.setUser(r);else if(t&&!0===(0,m.tx)(t)){let e=await x.Z.loginSetReferralApi({accessToken:S.current,referralCode:t}).catch(f.rV);e?w.setUser(e):k()}else k()}}),P=(0,u.Nq)({flow:"implicit",onError:e=>{E(!1),(0,f.rV)(e.error_description)},onSuccess:C}),{mutate:Z,isPending:D}=(0,c.D)({onError:f.rV,mutationFn:async()=>{if(!0!==(0,m.tx)(j)||!S.current)return;let e=await x.Z.loginSetReferralApi({accessToken:S.current,referralCode:j});w.setUser(e),k(!1)}}),{mutate:_,isPending:V}=(0,c.D)({onError:f.rV,mutationFn:async()=>{if(!S.current)return;let e=await x.Z.loginSetReferralApi({accessToken:S.current});w.setUser(e),k(!1)}}),A=D||R||!0!==(0,m.tx)(j)||!S.current,F=b||R||N;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.un,{color:"default",type:"button",isDisabled:F,isLoading:R||N,onClick:()=>{E(!0),P()},children:[(0,n.jsx)(s.JM8,{})," ",r]}),(0,n.jsxs)(a.m,{isOpen:y,children:[(0,n.jsx)("p",{className:"self-stretch flex-grow-0 flex-shrink-0  text-base text-center text-white",children:"A Special Welcome"}),(0,n.jsx)("p",{className:"self-stretch flex-grow-0 flex-shrink-0  text-sm text-center text-white/50",children:"Join in EnReach's Open Edge journey and earn BERRY rewards with extra boost!"}),(0,n.jsx)(o.Fx,{onChange:v}),(0,n.jsx)(i.un,{isDisabled:A,className:"w-full",onClick:()=>Z(),isLoading:D,children:"Get Boosted"}),(0,n.jsx)("div",{className:"flex justify-center text-white/80  text-sm h-5 items-center",children:(0,n.jsx)(g.g,{onClick:()=>_(),className:"ml-2 text-xs",children:V?(0,n.jsx)(p.c,{size:"sm"}):"Skip"})})]})]})}},77422:function(e,t,r){"use strict";r.d(t,{C:function(){return f},m:function(){return u}});var n=r(81210),s=r(29906),i=r(12014),a=r(21585),o=r(41551),c=r(10307),l=r(85947);function u(e){let{children:t,contentProps:r,bodyProps:o,...c}=e;return(0,n.jsx)(s.R,{isDismissable:!1,backdrop:"blur",classNames:{backdrop:"backdrop-blur"},hideCloseButton:!0,...c,children:(0,n.jsx)(i.A,{className:"w-[22.5rem] p-6 bg-[#404040] rounded-3xl",...r||{},children:(0,n.jsx)(a.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...o||{},children:t})})})}function f(e){let{tit:t,children:r,contentProps:u,bodyProps:f,className:d,...m}=e;return(0,n.jsx)(s.R,{hideCloseButton:!0,backdrop:"blur",className:d,classNames:{backdrop:"backdrop-blur-[6px]"},...m,children:(0,n.jsx)(i.A,{className:(0,o.cn)("w-[31.25rem] bg-[#404040] gap-6 p-6 rounded-3xl",d),...u||{},children:e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.k,{className:"justify-between p-0  ",children:[(0,n.jsx)("span",{className:"text-base font-semibold text-left text-white",children:t}),(0,n.jsx)("div",{className:"p-0 rounded-full w-6 h-6 flex justify-center items-center text-xs cursor-pointer bg-white/10 hover:bg-white/30",onClick:e,children:(0,n.jsx)(l.q5L,{})})]}),(0,n.jsx)(a.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...f||{},children:r})]})})})}},13882:function(e,t,r){"use strict";r.d(t,{g:function(){return a}});var n=r(81210),s=r(41551),i=r(36805);function a(e){let{children:t,target:r="_self",className:a,onClick:o,isDisable:c,href:l="javascript:void(0);",...u}=e;return(0,n.jsx)(i.default,{target:r,href:l,onClick:e=>{c||null==o||o(e)},className:(0,s.cn)("underline text-white/60 hover:text-primary cursor-pointer",{"cursor-not-allowed hover:text-white/60":c},a),...u,children:t})}},2280:function(e,t,r){"use strict";var n=r(49755),s=r(95258);t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=(0,s.useRouter)();(0,n.useEffect)(()=>{localStorage.getItem("last-login-user")&&t.replace(e)},[t,e])}}},function(e){e.O(0,[495,863,825,242,720,364,862,510,406,987,110,444,805,180,403,331,744],function(){return e(e.s=97154)}),_N_E=e.O()}]);