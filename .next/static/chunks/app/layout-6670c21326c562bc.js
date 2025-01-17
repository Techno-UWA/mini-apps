(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1175:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,8346,23)),Promise.resolve().then(n.bind(n,5037)),Promise.resolve().then(n.t.bind(n,347,23)),Promise.resolve().then(n.bind(n,172)),Promise.resolve().then(n.bind(n,282))},172:(e,t,n)=>{"use strict";n.d(t,{default:()=>c});var r=n(5155),o=n(8173),i=n.n(o),a=n(6658),s=n(3463);let l=[{name:"Dashboard",href:"/"},{name:"Mini-Apps",href:"/mini-apps"},{name:"Settings",href:"/settings"}];function c(){let e=(0,a.usePathname)();return(0,r.jsx)("nav",{className:"navbar",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h1",{className:"logo",children:"Mini-Apps Hub"}),(0,r.jsx)("ul",{className:"nav-links",children:l.map(t=>(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:t.href,className:(0,s.A)(e===t.href?"text-gray-900":"text-gray-500 hover:text-gray-700","text-sm font-medium"),children:t.name})},t.name))})]})})}},282:(e,t,n)=>{"use strict";n.d(t,{default:()=>i});var r=n(5155),o=n(2115);function i(){let[e,t]=(0,o.useState)(null),[n,i]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=async()=>{try{var e;if(console.log("Starting service worker registration..."),!("serviceWorker"in navigator))throw Error("Service workers are not supported");if(!window.isSecureContext)throw Error("Page must be served over HTTPS or localhost");let t=await navigator.serviceWorker.getRegistrations();console.log("Existing registrations:",t.length),await Promise.all(t.map(e=>e.unregister())),console.log("Unregistered existing service workers");let n=await navigator.serviceWorker.register("/sw.js",{scope:"/",type:"classic"});console.log("Service Worker registered successfully:",{scope:n.scope,state:(null===(e=n.active)||void 0===e?void 0:e.state)||"no active worker"}),n.installing&&(console.log("Service Worker installing..."),n.installing.addEventListener("statechange",()=>{var e;console.log("Service Worker state changed:",null===(e=n.installing)||void 0===e?void 0:e.state)})),n.waiting&&console.log("Service Worker waiting..."),n.active&&console.log("Service Worker active!"),n.waiting&&n.waiting.postMessage({type:"SKIP_WAITING"})}catch(e){console.error("Service Worker registration failed:",e)}},n=e=>{e.preventDefault(),t(e),i(!0)};return window.addEventListener("load",e),window.addEventListener("beforeinstallprompt",n),()=>{window.removeEventListener("load",e),window.removeEventListener("beforeinstallprompt",n)}},[]);let a=async()=>{if(e)try{let n=await e.prompt();console.log("Install prompt result:",n),t(null),i(!1)}catch(e){console.error("Error installing PWA:",e)}};return n?(0,r.jsx)("div",{className:"fixed bottom-4 right-4 z-50",children:(0,r.jsx)("button",{onClick:a,className:"bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors duration-200",children:"Install App"})}):null}},347:()=>{},8346:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}},3463:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(r&&(r+=" "),r+=t);return r}},5037:(e,t,n)=>{"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Toaster:()=>eN});var o,i=n(2115);let a={data:""},s=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||a,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,d=(e,t)=>{let n="",r="",o="";for(let i in e){let a=e[i];"@"==i[0]?"i"==i[1]?n=i+" "+a+";":r+="f"==i[1]?d(a,i):i+"{"+d(a,"k"==i[1]?"":t)+"}":"object"==typeof a?r+=d(a,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=a&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=d.p?d.p(i,a):i+":"+a+";")}return n+(t&&o?t+"{"+o+"}":o)+r},p={},f=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+f(e[n]);return t}return e},m=(e,t,n,r,o)=>{let i=f(e),a=p[i]||(p[i]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(i));if(!p[a]){let t=i!==e?e:(e=>{let t,n,r=[{}];for(;t=l.exec(e.replace(c,""));)t[4]?r.shift():t[3]?(n=t[3].replace(u," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);p[a]=d(o?{["@keyframes "+a]:t}:t,n?"":"."+a)}let s=n&&p.g?p.g:null;return n&&(p.g=p[a]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(p[a],t,r,s),a},g=(e,t,n)=>e.reduce((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function h(e){let t=this||{},n=e.call?e(t.p):e;return m(n.unshift?n.raw?g(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,s(t.target),t.g,t.o,t.k)}h.bind({g:1});let v,y,b,x=h.bind({k:1});function w(e,t){let n=this||{};return function(){let r=arguments;function o(i,a){let s=Object.assign({},i),l=s.className||o.className;n.p=Object.assign({theme:y&&y()},s),n.o=/ *go\d+/.test(l),s.className=h.apply(n,r)+(l?" "+l:""),t&&(s.ref=a);let c=e;return e[0]&&(c=s.as||e,delete s.as),b&&c[0]&&b(s),v(c,s)}return t?t(o):o}}function E(){let e=r(["\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return E=function(){return e},e}function k(){let e=r(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return k=function(){return e},e}function j(){let e=r(["\nfrom {\n  transform: scale(0) rotate(90deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n	opacity: 1;\n}"]);return j=function(){return e},e}function N(){let e=r(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return N=function(){return e},e}function P(){let e=r(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return P=function(){return e},e}function S(){let e=r(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return S=function(){return e},e}function A(){let e=r(["\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n	opacity: 1;\n}"]);return A=function(){return e},e}function O(){let e=r(["\n0% {\n	height: 0;\n	width: 0;\n	opacity: 0;\n}\n40% {\n  height: 0;\n	width: 6px;\n	opacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return O=function(){return e},e}function D(){let e=r(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return D=function(){return e},e}function C(){let e=r(["\n  position: absolute;\n"]);return C=function(){return e},e}function I(){let e=r(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return I=function(){return e},e}function _(){let e=r(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return _=function(){return e},e}function z(){let e=r(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return z=function(){return e},e}function W(){let e=r(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return W=function(){return e},e}function T(){let e=r(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]);return T=function(){return e},e}function L(){let e=r(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return L=function(){return e},e}var M=e=>"function"==typeof e,F=(e,t)=>M(e)?e(t):e,H=(()=>{let e=0;return()=>(++e).toString()})(),U=(()=>{let e;return()=>{if(void 0===e&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),R=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return R(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},q=[],B={toasts:[],pausedAt:void 0},G=e=>{B=R(B,e),q.forEach(e=>{e(B)})},K={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,i.useState)(B);(0,i.useEffect)(()=>(q.push(n),()=>{let e=q.indexOf(n);e>-1&&q.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var n,r,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(n=e[t.type])?void 0:n.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||K[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:r}},Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||H()}},$=e=>(t,n)=>{let r=Z(t,e,n);return G({type:2,toast:r}),r.id},J=(e,t)=>$("blank")(e,t);J.error=$("error"),J.success=$("success"),J.loading=$("loading"),J.custom=$("custom"),J.dismiss=e=>{G({type:3,toastId:e})},J.remove=e=>G({type:4,toastId:e}),J.promise=(e,t,n)=>{let r=J.loading(t.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?F(t.success,e):void 0;return o?J.success(o,{id:r,...n,...null==n?void 0:n.success}):J.dismiss(r),e}).catch(e=>{let o=t.error?F(t.error,e):void 0;o?J.error(o,{id:r,...n,...null==n?void 0:n.error}):J.dismiss(r)}),e};var Q=(e,t)=>{G({type:1,toast:{id:e,height:t}})},V=()=>{G({type:5,time:Date.now()})},X=new Map,ee=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(X.has(e))return;let n=setTimeout(()=>{X.delete(e),G({type:4,toastId:e})},t);X.set(e,n)},et=e=>{let{toasts:t,pausedAt:n}=Y(e);(0,i.useEffect)(()=>{if(n)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(n<0){t.visible&&J.dismiss(t.id);return}return setTimeout(()=>J.dismiss(t.id),n)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,n]);let r=(0,i.useCallback)(()=>{n&&G({type:6,time:Date.now()})},[n]),o=(0,i.useCallback)((e,n)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:i}=n||{},a=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),s=a.findIndex(t=>t.id===e.id),l=a.filter((e,t)=>t<s&&e.visible).length;return a.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return(0,i.useEffect)(()=>{t.forEach(e=>{if(e.dismissed)ee(e.id,e.removeDelay);else{let t=X.get(e.id);t&&(clearTimeout(t),X.delete(e.id))}})},[t]),{toasts:t,handlers:{updateHeight:Q,startPause:V,endPause:r,calculateOffset:o}}},en=x(E()),er=x(k()),eo=x(j()),ei=w("div")(N(),e=>e.primary||"#ff4b4b",en,er,e=>e.secondary||"#fff",eo),ea=x(P()),es=w("div")(S(),e=>e.secondary||"#e0e0e0",e=>e.primary||"#616161",ea),el=x(A()),ec=x(O()),eu=w("div")(D(),e=>e.primary||"#61d345",el,ec,e=>e.secondary||"#fff"),ed=w("div")(C()),ep=w("div")(I()),ef=x(_()),em=w("div")(z(),ef),eg=e=>{let{toast:t}=e,{icon:n,type:r,iconTheme:o}=t;return void 0!==n?"string"==typeof n?i.createElement(em,null,n):n:"blank"===r?null:i.createElement(ep,null,i.createElement(es,{...o}),"loading"!==r&&i.createElement(ed,null,"error"===r?i.createElement(ei,{...o}):i.createElement(eu,{...o})))},eh=e=>"\n0% {transform: translate3d(0,".concat(-200*e,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"),ev=e=>"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*e,"%,-1px) scale(.6); opacity:0;}\n"),ey=w("div")(W()),eb=w("div")(T()),ex=(e,t)=>{let n=e.includes("top")?1:-1,[r,o]=U()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[eh(n),ev(n)];return{animation:t?"".concat(x(r)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(x(o)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}},ew=i.memo(e=>{let{toast:t,position:n,style:r,children:o}=e,a=t.height?ex(t.position||n||"top-center",t.visible):{opacity:0},s=i.createElement(eg,{toast:t}),l=i.createElement(eb,{...t.ariaProps},F(t.message,t));return i.createElement(ey,{className:t.className,style:{...a,...r,...t.style}},"function"==typeof o?o({icon:s,message:l}):i.createElement(i.Fragment,null,s,l))});o=i.createElement,d.p=void 0,v=o,y=void 0,b=void 0;var eE=e=>{let{id:t,className:n,style:r,onHeightUpdate:o,children:a}=e,s=i.useCallback(e=>{if(e){let n=()=>{o(t,e.getBoundingClientRect().height)};n(),new MutationObserver(n).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,o]);return i.createElement("div",{ref:s,className:n,style:r},a)},ek=(e,t)=>{let n=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:U()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(n?1:-1),"px)"),...n?{top:0}:{bottom:0},...r}},ej=h(L()),eN=e=>{let{reverseOrder:t,position:n="top-center",toastOptions:r,gutter:o,children:a,containerStyle:s,containerClassName:l}=e,{toasts:c,handlers:u}=et(r);return i.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(e=>{let r=e.position||n,s=ek(r,u.calculateOffset(e,{reverseOrder:t,gutter:o,defaultPosition:n}));return i.createElement(eE,{id:e.id,key:e.id,onHeightUpdate:u.updateHeight,className:e.visible?ej:"",style:s},"custom"===e.type?F(e.message,e):a?a(e):i.createElement(ew,{toast:e,position:r}))}))}}},e=>{var t=t=>e(e.s=t);e.O(0,[838,173,441,517,358],()=>t(1175)),_N_E=e.O()}]);