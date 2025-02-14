"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{35909:function(e,t,s){s.d(t,{Z:function(){return v}});var n=s(81210),l=s(49755),r=s(13910),a=s.n(r);let i=[{type:"shoes",count:4},{type:"pants",count:4},{type:"leftHand",count:4},{type:"rightHand",count:4},{type:"clothes",count:5},{type:"logo",count:6},{type:"face",count:6},{type:"head",count:4},{type:"hat",count:5}],o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"/svg/".concat(e,"/").concat(e).concat(t,".svg")},c=(e,t,s)=>{try{let n=parseInt(e.slice(Math.round(2*t),Math.round(2*t+2)));if(Number.isSafeInteger(n))return n%s;return 0}catch(e){return 0}};var d=e=>{let{data:t,size:s=200}=e,r=(0,l.useMemo)(()=>{if("string"==typeof t){let e={};return i.forEach((s,n)=>{e[s.type]=c(t,n,s.count)}),e}return t},[t]),d=a().round(s/16,3),x=a().round(2.25*d,3);return(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)("svg",{id:"cartoon",width:d+"rem",height:x+"rem",viewBox:"0 0 200 450",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("foreignObject",{x:"0",y:"0",width:"200",height:"450",children:(0,n.jsxs)("div",{className:"relative m-auto flex items-center justify-center",children:[(0,n.jsx)("img",{src:o("shoes",r.shoes),alt:"shoes",crossOrigin:"anonymous",style:{position:"absolute",left:6,top:"365px",zIndex:0,width:"180px"}}),(0,n.jsx)("img",{src:o("pants",r.pants),alt:"pants",crossOrigin:"anonymous",style:{position:"absolute",left:"40px",top:"315px",zIndex:1}}),(0,n.jsx)("img",{src:o("leftHand",r.leftHand),alt:"leftHand",crossOrigin:"anonymous",style:{position:"absolute",left:3,top:"305px",width:"24px",zIndex:2}}),(0,n.jsx)("img",{src:o("rightHand",r.rightHand),alt:"rightHand",crossOrigin:"anonymous",style:{position:"absolute",right:10,top:"305px",width:"24px",zIndex:2}}),(0,n.jsx)("img",{src:o("clothes",r.clothes),alt:"clothes",crossOrigin:"anonymous",style:{position:"absolute",left:15,top:"225px",zIndex:2}}),(0,n.jsx)("img",{src:o("logo",r.logo),alt:"logo",crossOrigin:"anonymous",style:{position:"absolute",left:85,top:"275px",zIndex:2}}),(0,n.jsx)("img",{src:o("face",r.face),alt:"face",crossOrigin:"anonymous",style:{position:"absolute",left:"25px",top:"120px",width:"150px",zIndex:1e4}}),(0,n.jsx)("img",{src:o("head",r.head),alt:"head",crossOrigin:"anonymous",style:{position:"absolute",left:0,top:"45px",width:"210px",zIndex:4}}),(0,n.jsx)("img",{src:o("hat",r.hat),alt:"hat",crossOrigin:"anonymous",style:{position:"absolute",left:5,top:14,width:"192px",zIndex:100}})]})})})})})},x=s(87782),u=s(25529),h=s(47608),p=s(15967),f=s(74572),m=s(53179),g=s(95258),j=s(23818),v=e=>{var t,s,r,a;let{showEmpty:i,loadType:o}=e,c=(0,m.Eu)(),v=(0,g.useSearchParams)().get("uid"),{data:w,isFetching:y,fetchNextPage:N}=(0,p.N)({queryKey:["queryCartoonListByUid",o,"auth"==o?c.user:v],enabled:"auth"==o?!!c.user:!!v,queryFn:async e=>{let{pageParam:t}=e,s={pageSize:10,pageNum:t},n=await ("auth"==o?f.Z.getCartoonList(s):f.Z.getAlbumItemList(v,s));return{data:n.list,next:n.list.length<10?null:t+1}},initialPageParam:1,getNextPageParam:e=>e.next}),b=(0,l.useRef)(null),k=(0,j.Z)(b,{root:null}),C=k&&k.intersectionRatio>=1;(0,l.useEffect)(()=>{C&&!y&&N()},[C,y]);let[I,O]=(0,l.useState)({value:void 0,isOpen:!1}),z=e=>{O({value:e,isOpen:!0})},E=(null==w?void 0:w.pages)||[],A=!E||0==E.length||0==E[0].data.length;return(0,n.jsxs)("div",{className:"w-full",children:[A&&!y&&i&&(0,n.jsx)("div",{className:" text-xl w-full text-center flex justify-center ",children:"Oops! Nothing here yet."}),(0,n.jsxs)("div",{className:"grid grid-cols-[repeat(auto-fill,minmax(18.75rem,1fr))] w-full gap-5",children:[E.map((e,t)=>{let{data:s}=e;return(0,n.jsx)(l.Fragment,{children:s.map((e,s)=>(0,n.jsx)("div",{className:"flex-wrap  flex-col   items-center justify-center gap-5 flex  w-full  bg-[#7E7E7E] cursor-pointer rounded-3xl",onClick:()=>z(e),children:(0,n.jsxs)("div",{className:"flex gap-5 flex-nowrap pt-5 hover:transition-transform hover:duration-500 hover:scale-110 scale-100",children:[e.tapFromUserId&&(0,n.jsx)(d,{data:(0,h.Ko)(e.tapFromUserId),size:100}),e.tapToUserId&&(0,n.jsx)(d,{data:(0,h.Ko)(e.tapToUserId),size:100})]})},"cartoon_".concat(t,"_").concat(s)))},"page_".concat(t))}),y&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.X,{className:"rounded-2xl",children:(0,n.jsx)("div",{className:"h-[15.3125rem] rounded-3xl"})}),(0,n.jsx)(u.X,{className:"rounded-2xl",children:(0,n.jsx)("div",{className:"h-[15.3125rem] rounded-3xl"})}),(0,n.jsx)(u.X,{className:"rounded-2xl",children:(0,n.jsx)("div",{className:"h-[15.3125rem] rounded-3xl"})})]}),I.isOpen&&(0,n.jsx)(x.Q,{tit:"",msg:(0,n.jsxs)("div",{className:"w-full flex justify-center items-center gap-5 flex-col px-5",children:[(0,n.jsx)("span",{className:"text-xl",children:"Your blueberry accidentally interrupted a choir practice. Instead of leaving, it joined in, humming off-key. The choir director laughed, saying, ‘At least you’ve got spirit!’"}),(0,n.jsxs)("div",{className:"flex gap-5 flex-nowrap",children:[(null===(t=I.value)||void 0===t?void 0:t.tapFromUserId)&&(0,n.jsx)(d,{data:(0,h.Ko)(null===(s=I.value)||void 0===s?void 0:s.tapFromUserId)}),(null===(r=I.value)||void 0===r?void 0:r.tapToUserId)&&(0,n.jsx)(d,{data:(0,h.Ko)(null===(a=I.value)||void 0===a?void 0:a.tapToUserId)})]})]}),className:" p-[1rem] w-[37.5rem] max-w-2xl",confirmText:null,cancelColor:"default",cancelText:null,isOpen:I.isOpen,onCancel:()=>O({value:void 0,isOpen:!1})})]}),(0,n.jsx)("div",{ref:b,className:"h-1 opacity-0"})]})}},36777:function(e,t,s){s.d(t,{K:function(){return c}});var n=s(81210),l=s(41551),r=s(84533),a=s.n(r),i=s(43249),o=s.n(i);function c(e){let{name:t,className:s,size:r,showFirst:i}=e;return(0,n.jsxs)("div",{className:(0,l.cn)("relative flex",s),style:{fontSize:Math.floor(.4*(r||24))},children:[(0,n.jsx)(a(),{name:t,size:r,variant:"marble"}),t&&i&&(0,n.jsx)("div",{className:"absolute left-0 top-0 h-full w-full flex justify-center items-center text-white font-medium",children:o()(t[0])})]})}},87782:function(e,t,s){s.d(t,{Q:function(){return x},c:function(){return d}});var n=s(81210),l=s(34028),r=s(97427),a=s(54957),i=s(27767),o=s(77422),c=s(36957);function d(){let[e,t]=(0,a.Z)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.un,{className:"h-8",onClick:()=>t(),children:"Add New Node"}),(0,n.jsxs)(o.C,{isOpen:e,onClose:()=>t(!1),tit:"Add New Node",children:[(0,n.jsxs)("div",{className:"flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5",children:[(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5",children:[(0,n.jsx)(l.w.SvgExt,{className:"text-[3.75rem]"}),(0,n.jsxs)("p",{className:"self-stretch flex-grow-0 flex-shrink-0 text-sm text-center text-white",children:[(0,n.jsx)("span",{className:"self-stretch flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-white",children:"Chrome Extension Node"}),(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"self-stretch flex-grow-0 flex-shrink-0 text-sm text-center text-[#CBCBCB] font-AlbertSans",children:"The super light-weight node that helps EnReach Network to gain perception to the network’s capability and potential to serve the network"})]})]}),(0,n.jsx)(i.un,{className:"w-full",onClick:()=>window.open("https://chromewebstore.google.com/detail/".concat(c.u1),"_blank"),children:"Download"})]}),(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5",children:[(0,n.jsx)(r.tLz,{className:"text-[3.75rem] text-white"}),(0,n.jsxs)("p",{className:"self-stretch flex-grow-0 flex-shrink-0  text-sm text-center  opacity-40",children:[(0,n.jsx)("span",{className:"self-stretch flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-white",children:"Edge Node (Coming Soon)"}),(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"self-stretch flex-grow-0 flex-shrink-0 text-sm text-center text-[#CBCBCB] font-AlbertSans",children:"The working nodes at edge side that provides qualified edge cloud capabilities"})]})]})]})]})}function x(e){let{confirmText:t="Confirm",cancelText:s="Cancel",cancelColor:l="primary",onCancel:r,onConfirm:a,tit:c,msg:d,isOpen:x,className:u}=e;return(0,n.jsx)(o.C,{className:u,isOpen:x,tit:c,onClose:r,children:(0,n.jsxs)("div",{className:"flex flex-col gap-6 w-full",children:[(0,n.jsx)("div",{className:"text-center text-sm whitespace-pre-wrap font-AlbertSans",children:d}),(0,n.jsxs)("div",{className:"grid grid-cols-2 gap-2.5",children:[t&&(0,n.jsx)(i.un,{className:"h-10",color:"default",onClick:a,children:t}),s&&(0,n.jsx)(i.un,{className:"h-10",color:l,onClick:r,children:s})]})]})})}},77422:function(e,t,s){s.d(t,{C:function(){return x},m:function(){return d}});var n=s(81210),l=s(29906),r=s(12014),a=s(21585),i=s(41551),o=s(10307),c=s(85947);function d(e){let{children:t,contentProps:s,bodyProps:i,...o}=e;return(0,n.jsx)(l.R,{isDismissable:!1,backdrop:"blur",classNames:{backdrop:"backdrop-blur",wrapper:"py-5"},hideCloseButton:!0,...o,children:(0,n.jsx)(r.A,{className:"w-[22.5rem] p-6 bg-[#404040] rounded-3xl !my-auto",...s||{},children:(0,n.jsx)(a.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...i||{},children:t})})})}function x(e){let{tit:t,children:s,contentProps:d,bodyProps:x,className:u,...h}=e;return(0,n.jsx)(l.R,{hideCloseButton:!0,backdrop:"blur",className:u,classNames:{backdrop:"backdrop-blur-[6px]",wrapper:"py-5"},...h,children:(0,n.jsx)(r.A,{className:(0,i.cn)("w-[31.25rem] bg-[#404040] gap-6 p-6 rounded-3xl !my-auto",u),...d||{},children:e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.k,{className:"justify-between p-0  ",children:[(0,n.jsx)("span",{className:"text-base font-semibold text-left text-white",children:t}),(0,n.jsx)("div",{className:"p-0 rounded-full w-6 h-6 flex justify-center items-center text-xs cursor-pointer bg-white/10 hover:bg-white/30",onClick:e,children:(0,n.jsx)(c.q5L,{})})]}),(0,n.jsx)(a.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...x||{},children:s})]})})})}},43401:function(e,t,s){s.d(t,{F:function(){return r}});var n=s(21573),l=s(36062);function r(){let[,e]=(0,n.Z)();return t=>{e(t),l.Am.success("Copied !")}}}}]);