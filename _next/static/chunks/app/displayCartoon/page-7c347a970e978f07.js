(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{60053:function(e,t,s){Promise.resolve().then(s.bind(s,65242))},65242:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var n=s(81210),l=s(74572),a=s(35909),o=s(53179),r=s(36777),i=s(95258),c=()=>{var e;let t=null===(e=(0,o.Eu)().queryUserInfo)||void 0===e?void 0:e.data,s=(0,i.useRouter)();return(0,n.jsxs)("div",{className:" flex h-[3.75rem] flex-row w-full justify-between items-center py-5 bg-[#404040]  px-[50px]  ",children:[(0,n.jsx)("div",{className:"flex items-center  gap-5 ",children:(0,n.jsx)("img",{src:"/logo.svg",className:"shrink-0  smd:w-full smd:max-w-fulllg:ml-0 max-w-[9.375rem] h-[2.375rem] lg:rotate-0 ",alt:"Logo"})}),(null==t?void 0:t.email)?(0,n.jsxs)("div",{className:"flex  items-center gap-5",children:[(0,n.jsx)("label",{className:" font-medium text-base leading-5",children:t.email}),(0,n.jsx)("button",{className:"w-8",children:(0,n.jsx)(r.K,{name:null==t?void 0:t.email})})]}):(0,n.jsx)("button",{onClick:()=>{let e=new URLSearchParams(window.location.search),t=e.get("referral"),n=e.get("uid"),l=e.get("name");s.push("signin/?page=displayCartoon&referral=".concat(t,"&uid=").concat(n,"&name=").concat(l))},children:"Sign In"})]})},d=s(34028),u=s(49755),x=s(47608),m=s(36062);let f={like:0,list:[{uuid:"",tapFromUserId:"",tapFromcode:"",tapToUserId:"",tapTocode:"",timestamp:0,content:""}]};var h=()=>{var e,t,s;let r=null===(e=(0,o.Eu)().queryUserInfo)||void 0===e?void 0:e.data,h=(0,i.useRouter)(),p=new URLSearchParams(window.location.search),g=p.get("uid")||"",v=p.get("name")||"",j=(null==v?void 0:v.split("@")[0])||"",[b,w]=(0,u.useState)({cartoonList:f,loading:!0,current:{liked:!1}}),N=async()=>{let e=new URLSearchParams(window.location.search).get("uid")||"";try{if(e){if((null==r?void 0:r.id)&&e){let t=await l.Z.userIsLiked(e);w({current:t})}let t=await l.Z.getShareUserList(e);w({cartoonList:t,loading:!1})}}catch(e){w({...b,loading:!1}),console.error("Error fetching data:",e)}};(0,u.useEffect)(()=>{N()},[]);let y=async()=>{var e;if((null==r?void 0:r.id)!==g){if(null==r?void 0:r.id)(null===(e=b.current)||void 0===e?void 0:e.liked)&&m.Am.success("You have liked this album.");else{let e=new URLSearchParams(window.location.search),t=e.get("referral"),s=e.get("uid"),n=e.get("name");h.push("signin/?page=displayCartoon&referral=".concat(t,"&uid=").concat(s,"&name=").concat(n));return}l.Z.currentUserLike("like",g).then(e=>{"success"===e.message&&N()}).catch(e=>{m.Am.error("You need to update to Teen Berry (Lv.2 User) to unlock 'Like'.")})}},k=()=>({hat:null,head:null,eyes:null,clothes:null,hand:null,pants:null,shoes:null,logo:null}),C=(0,u.useMemo)(()=>{var e;return Array.from({length:(null===(e=b.cartoonList)||void 0===e?void 0:e.list.length)||1},()=>({one:k(),two:k(),name:""}))},[b]);return(0,u.useMemo)(()=>{var e;(null===(e=b.cartoonList)||void 0===e?void 0:e.list)&&b.cartoonList.list.map(e=>({...e,tapFromUserId2:(0,x.WN)((0,x.Ko)(e.tapFromUserId)),tapToUserId2:(0,x.WN)((0,x.Ko)(e.tapToUserId))})).forEach((e,t)=>{C[t]&&((0,x.kR)(C[t].one,e.tapFromUserId2),(0,x.kR)(C[t].two,e.tapToUserId2)),C[t].name=e.content})},[b,C]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{}),(0,n.jsxs)("div",{className:"  mx-[6.5rem] xsl:mx-[3.75rem]",children:[(0,n.jsxs)("div",{className:" flex justify-between ",children:[(0,n.jsx)("div",{className:"my-10 font-semibold text-xl leading-10",children:"".concat(g===(null==r?void 0:r.id)?"My Berry Album":j+"‘s Berry Album"," ")}),(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("button",{className:"".concat(g===(null==r?void 0:r.id)&&"cursor-not-allowed"),onClick:y,children:(null===(t=b.current)||void 0===t?void 0:t.liked)?(0,n.jsx)(d.w.SvgLiked,{}):(0,n.jsx)(d.w.SvgLike,{})}),(0,n.jsx)("span",{className:"text-xl ",children:null===(s=b.cartoonList)||void 0===s?void 0:s.like})]})]}),C[0].name&&(0,n.jsx)(a.Z,{cartoonList:C,loading:b.loading})]})]})}},35909:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var n=s(81210),l=s(49755);let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2?arguments[2]:void 0;return"".concat("/svg","/").concat(e,"/").concat(s||e).concat(t,".svg")};var o=e=>{let{data:t}=e;return(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)("svg",{id:"cartoon",width:"200",height:"450",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("foreignObject",{x:"0",y:"0",width:"260",height:"450",children:(0,n.jsxs)("div",{className:"relative m-auto flex items-center justify-center",children:[(0,n.jsx)("img",{src:a("shoes",null==t?void 0:t.shoes),alt:"shoes",crossOrigin:"anonymous",style:{position:"absolute",left:6,top:"365px",zIndex:0,width:"180px"}}),(0,n.jsx)("img",{src:a("pants",t.pants),alt:"pants",crossOrigin:"anonymous",style:{position:"absolute",left:"40px",top:"315px",zIndex:1}}),(0,n.jsx)("img",{src:a("hand",t.hand&&t.hand[0],"leftHand"),alt:"leftHand",crossOrigin:"anonymous",style:{position:"absolute",left:3,top:"305px",width:"24px",zIndex:2}}),(0,n.jsx)("img",{src:a("hand",t.hand&&t.hand[1],"rightHand"),alt:"rightHand",crossOrigin:"anonymous",style:{position:"absolute",right:70,top:"305px",width:"24px",zIndex:2}}),(0,n.jsx)("img",{src:a("clothes",t.clothes),alt:"clothes",crossOrigin:"anonymous",style:{position:"absolute",left:15,top:"225px",zIndex:2}}),(0,n.jsx)("img",{src:a("logo",t.logo),alt:"logo",crossOrigin:"anonymous",style:{position:"absolute",left:85,top:"275px",zIndex:2}}),(0,n.jsx)("img",{src:a("eyes",t.eyes),alt:"eyes",crossOrigin:"anonymous",style:{position:"absolute",left:"25px",top:"120px",width:"150px",zIndex:1e4}}),(0,n.jsx)("img",{src:a("head",t.head),alt:"head",crossOrigin:"anonymous",style:{position:"absolute",left:0,top:"50px",width:"200px",zIndex:4}}),(0,n.jsx)("img",{src:a("hat",t.hat),alt:"hat",crossOrigin:"anonymous",style:{position:"absolute",left:0,top:0,width:"200px",zIndex:5}})]})})})})})},r=s(87782),i=s(25529),c=e=>{var t,s,a,c,d;let{cartoonList:u,loading:x}=e,[m,f]=(0,l.useState)({value:void 0,isOpen:!1}),h=e=>{f({value:e,isOpen:!0})};return(0,n.jsxs)("div",{className:"grid grid-cols-3 smd:grid-cols-1  xsl:grid-cols-2 w-full gap-10",children:[u.map((e,t)=>(0,n.jsx)(i.X,{isLoaded:!x,className:" border border-[#7e7e7e] rounded-3xl !bg-[#7E7E7E] ",children:(0,n.jsxs)("button",{className:"   flex-wrap flex-col items-center justify-center rounded-3xl  !bg-[#7E7E7E] gap-5 flex  w-full ",onClick:()=>h(e),children:[(0,n.jsx)("span",{className:"text-xl pt-5",children:e.name}),(0,n.jsxs)("div",{className:"flex gap-5 smd:flex-wrap smd:flex-col smd:items-center smd:justify-center",children:[e.one&&(0,n.jsx)(o,{data:e.one}),e.two&&(0,n.jsx)(o,{data:e.two})]})]})},"cartoon_".concat(t))),m.isOpen&&(0,n.jsx)(r.Q,{tit:"",msg:(0,n.jsxs)("div",{className:"w-full flex justify-center items-center gap-5 flex-col px-5",children:[(0,n.jsx)("span",{className:"text-xl",children:null===(t=m.value)||void 0===t?void 0:t.name}),(0,n.jsxs)("div",{className:"flex gap-5",children:[(null===(s=m.value)||void 0===s?void 0:s.one)&&(0,n.jsx)(o,{data:null===(a=m.value)||void 0===a?void 0:a.one}),(null===(c=m.value)||void 0===c?void 0:c.two)&&(0,n.jsx)(o,{data:null===(d=m.value)||void 0===d?void 0:d.two})]})]}),className:" p-[1rem]",confirmText:null,cancelColor:"default",cancelText:null,isOpen:m.isOpen,onCancel:()=>f({value:void 0,isOpen:!1})})]})}},36777:function(e,t,s){"use strict";s.d(t,{K:function(){return c}});var n=s(81210),l=s(41551),a=s(84533),o=s.n(a),r=s(43249),i=s.n(r);function c(e){let{name:t,className:s,size:a,showFirst:r}=e;return(0,n.jsxs)("div",{className:(0,l.cn)("relative flex",s),style:{fontSize:Math.floor(.4*(a||24))},children:[(0,n.jsx)(o(),{name:t,size:a,variant:"marble"}),t&&r&&(0,n.jsx)("div",{className:"absolute left-0 top-0 h-full w-full flex justify-center items-center text-white font-medium",children:i()(t[0])})]})}},87782:function(e,t,s){"use strict";s.d(t,{Q:function(){return u},c:function(){return d}});var n=s(81210),l=s(34028),a=s(97427),o=s(54957),r=s(27767),i=s(77422),c=s(36957);function d(){let[e,t]=(0,o.Z)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.un,{className:"h-8",onClick:()=>t(),children:"Add New Node"}),(0,n.jsxs)(i.C,{isOpen:e,onClose:()=>t(!1),tit:"Add New Node",children:[(0,n.jsxs)("div",{className:"flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5",children:[(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5",children:[(0,n.jsx)(l.w.SvgExt,{className:"text-[3.75rem]"}),(0,n.jsxs)("p",{className:"self-stretch flex-grow-0 flex-shrink-0 text-sm text-center text-white",children:[(0,n.jsx)("span",{className:"self-stretch flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-white",children:"Chrome Extension Node"}),(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"self-stretch flex-grow-0 flex-shrink-0 text-sm text-center text-[#CBCBCB] font-AlbertSans",children:"The super light-weight node that helps EnReach Network to gain perception to the network’s capability and potential to serve the network"})]})]}),(0,n.jsx)(r.un,{className:"w-full",onClick:()=>window.open("https://chromewebstore.google.com/detail/".concat(c.u1),"_blank"),children:"Download"})]}),(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5",children:[(0,n.jsx)(a.tLz,{className:"text-[3.75rem] text-white"}),(0,n.jsxs)("p",{className:"self-stretch flex-grow-0 flex-shrink-0  text-sm text-center  opacity-40",children:[(0,n.jsx)("span",{className:"self-stretch flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-white",children:"Edge Node (Coming Soon)"}),(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"self-stretch flex-grow-0 flex-shrink-0 text-sm text-center text-[#CBCBCB] font-AlbertSans",children:"The working nodes at edge side that provides qualified edge cloud capabilities"})]})]})]})]})}function u(e){let{confirmText:t="Confirm",cancelText:s="Cancel",cancelColor:l="primary",onCancel:a,onConfirm:o,tit:c,msg:d,isOpen:u,className:x}=e;return(0,n.jsx)(i.C,{className:x,isOpen:u,tit:c,onClose:a,children:(0,n.jsxs)("div",{className:"flex flex-col gap-6 w-full",children:[(0,n.jsx)("div",{className:"text-center text-sm whitespace-pre-wrap font-AlbertSans",children:d}),(0,n.jsxs)("div",{className:"grid grid-cols-2 gap-2.5",children:[t&&(0,n.jsx)(r.un,{className:"h-10",color:"default",onClick:o,children:t}),s&&(0,n.jsx)(r.un,{className:"h-10",color:l,onClick:a,children:s})]})]})})}},77422:function(e,t,s){"use strict";s.d(t,{C:function(){return u},m:function(){return d}});var n=s(81210),l=s(29906),a=s(12014),o=s(21585),r=s(41551),i=s(10307),c=s(85947);function d(e){let{children:t,contentProps:s,bodyProps:r,...i}=e;return(0,n.jsx)(l.R,{isDismissable:!1,backdrop:"blur",classNames:{backdrop:"backdrop-blur"},hideCloseButton:!0,...i,children:(0,n.jsx)(a.A,{className:"w-[22.5rem] p-6 bg-[#404040] rounded-3xl",...s||{},children:(0,n.jsx)(o.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...r||{},children:t})})})}function u(e){let{tit:t,children:s,contentProps:d,bodyProps:u,className:x,...m}=e;return(0,n.jsx)(l.R,{hideCloseButton:!0,backdrop:"blur",className:x,classNames:{backdrop:"backdrop-blur-[6px]"},...m,children:(0,n.jsx)(a.A,{className:(0,r.cn)("w-[31.25rem] bg-[#404040] gap-6 p-6 rounded-3xl",x),...d||{},children:e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.k,{className:"justify-between p-0  ",children:[(0,n.jsx)("span",{className:"text-base font-semibold text-left text-white",children:t}),(0,n.jsx)("div",{className:"p-0 rounded-full w-6 h-6 flex justify-center items-center text-xs cursor-pointer bg-white/10 hover:bg-white/30",onClick:e,children:(0,n.jsx)(c.q5L,{})})]}),(0,n.jsx)(o.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...u||{},children:s})]})})})}},25529:function(e,t,s){"use strict";s.d(t,{X:function(){return r}});var n=s(5402),l=s(71964),a=s(81210),o=(0,l.Gp)((e,t)=>{let{Component:s,children:l,getSkeletonProps:o,getContentProps:r}=(0,n.q)({...e});return(0,a.jsx)(s,{ref:t,...o(),children:(0,a.jsx)("div",{...r(),children:l})})});o.displayName="NextUI.Skeleton";var r=o},5402:function(e,t,s){"use strict";s.d(t,{q:function(){return d}});var n=s(71964),l=(0,s(55108).tv)({slots:{base:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","pointer-events-none","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2","data-[loaded=true]:pointer-events-auto","data-[loaded=true]:overflow-visible","data-[loaded=true]:!bg-transparent","data-[loaded=true]:before:opacity-0 data-[loaded=true]:before:-z-10 data-[loaded=true]:before:animate-none","data-[loaded=true]:after:opacity-0"],content:["opacity-0","group-data-[loaded=true]:opacity-100"]},variants:{disableAnimation:{true:{base:"before:animate-none before:transition-none after:transition-none",content:"transition-none"},false:{base:"transition-background !duration-300",content:"transition-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{}}),a=s(15249),o=s(15177),r=s(41571),i=s(49755),c=s(27897);function d(e){var t,s;let d=(0,c.w)(),[u,x]=(0,n.oe)(e,l.variantKeys),{as:m,children:f,isLoaded:h=!1,className:p,classNames:g,...v}=u,j=null!=(s=null!=(t=e.disableAnimation)?t:null==d?void 0:d.disableAnimation)&&s,b=(0,i.useMemo)(()=>l({...x,disableAnimation:j}),[(0,a.Xx)(x),j,f]),w=(0,o.W)(null==g?void 0:g.base,p);return{Component:m||"div",children:f,slots:b,classNames:g,getSkeletonProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"data-loaded":(0,r.PB)(h),className:b.base({class:(0,o.W)(w,null==e?void 0:e.className)}),...v}},getContentProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{className:b.content({class:(0,o.W)(null==g?void 0:g.content,null==e?void 0:e.className)})}}}}}},function(e){e.O(0,[495,863,242,720,582,510,664,832,477,434,90,403,331,744],function(){return e(e.s=60053)}),_N_E=e.O()}]);