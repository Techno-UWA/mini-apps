"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{6085:(e,t,n)=>{function r(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function o(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function i(e){let t=null;return()=>(null==t&&(t=e()),t)}n.d(t,{dO:()=>eP});let l=i(function(){return o(/^Mac/i)}),a=i(function(){return o(/^iPhone/i)}),u=i(function(){return o(/^iPad/i)||l()&&navigator.maxTouchPoints>1}),s=i(function(){return a()||u()});i(function(){return l()||s()}),i(function(){return r(/AppleWebKit/i)&&!c()});let c=i(function(){return r(/Chrome/i)}),d=i(function(){return r(/Android/i)});i(function(){return r(/Firefox/i)});let f=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},p=e=>e&&"window"in e&&e.window===e?e:f(e).defaultView||window;var v=n(2115);let m=null,h=new Set,g=new Map,b=!1,y=!1,E={Tab:!0,Escape:!0};function w(e,t){for(let n of h)n(e,t)}function T(e){b=!0,e.metaKey||!l()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(m="keyboard",w("keyboard",e))}function k(e){m="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(b=!0,w("pointer",e))}function L(e){(0===e.mozInputSource&&e.isTrusted||(d()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType))&&(b=!0,m="virtual")}function P(e){e.target!==window&&e.target!==document&&(b||y||(m="virtual",w("virtual",e)),b=!1,y=!1)}function A(){b=!1,y=!0}function C(e){if("undefined"==typeof window||g.get(p(e)))return;let t=p(e),n=f(e),r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){b=!0,r.apply(this,arguments)},n.addEventListener("keydown",T,!0),n.addEventListener("keyup",T,!0),n.addEventListener("click",L,!0),t.addEventListener("focus",P,!0),t.addEventListener("blur",A,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",k,!0),n.addEventListener("pointermove",k,!0),n.addEventListener("pointerup",k,!0)):(n.addEventListener("mousedown",k,!0),n.addEventListener("mousemove",k,!0),n.addEventListener("mouseup",k,!0)),t.addEventListener("beforeunload",()=>{F(e)},{once:!0}),g.set(t,{focus:r})}let F=(e,t)=>{let n=p(e),r=f(e);t&&r.removeEventListener("DOMContentLoaded",t),g.has(n)&&(n.HTMLElement.prototype.focus=g.get(n).focus,r.removeEventListener("keydown",T,!0),r.removeEventListener("keyup",T,!0),r.removeEventListener("click",L,!0),n.removeEventListener("focus",P,!0),n.removeEventListener("blur",A,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",k,!0),r.removeEventListener("pointermove",k,!0),r.removeEventListener("pointerup",k,!0)):(r.removeEventListener("mousedown",k,!0),r.removeEventListener("mousemove",k,!0),r.removeEventListener("mouseup",k,!0)),g.delete(n))};function S(){return"pointer"!==m}"undefined"!=typeof document&&function(e){let t;let n=f(void 0);"loading"!==n.readyState?C(void 0):(t=()=>{C(void 0)},n.addEventListener("DOMContentLoaded",t)),()=>F(e,t)}();let M=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),x="undefined"!=typeof document?v.useLayoutEffect:()=>{};class H{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function j(e){let t=(0,v.useRef)({isFocused:!1,observer:null});x(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]);let n=function(e){let t=(0,v.useRef)(null);return x(()=>{t.current=e},[e]),(0,v.useCallback)((...e)=>{let n=t.current;return null==n?void 0:n(...e)},[])}(t=>{null==e||e(t)});return(0,v.useCallback)(e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target;r.addEventListener("focusout",e=>{t.current.isFocused=!1,r.disabled&&n(new H("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)},{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&r.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let n=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}}),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}},[n])}let O=!1,D=0;function N(){O=!0,setTimeout(()=>{O=!1},50)}function R(e){"touch"===e.pointerType&&N()}function I(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent?document.addEventListener("pointerup",R):document.addEventListener("touchend",N),D++,()=>{--D>0||("undefined"!=typeof PointerEvent?document.removeEventListener("pointerup",R):document.removeEventListener("touchend",N))}}var B=Object.defineProperty,W=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,U=(e,t,n)=>(W(e,"symbol"!=typeof t?t+"":t,n),n);class V{set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}constructor(){U(this,"current",this.detect()),U(this,"handoffState","pending"),U(this,"currentId",0)}}let K=new V;function q(){let[e]=(0,v.useState)(function e(){let t=[],n={addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add(()=>e.removeEventListener(t,r,o))),requestAnimationFrame(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let o=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(o))},nextFrame(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let o=setTimeout(...t);return n.add(()=>clearTimeout(o))},microTask(){for(var e,t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];let i={current:!0};return e=()=>{i.current&&r[0]()},"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e})),n.add(()=>{i.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.includes(e)||t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n});return(0,v.useEffect)(()=>()=>e.dispose(),[e]),e}let Y=(e,t)=>{K.isServer?(0,v.useEffect)(e,t):(0,v.useLayoutEffect)(e,t)},_=function(e){let t;let n=(t=(0,v.useRef)(e),Y(()=>{t.current=e},[e]),t);return v.useCallback(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.current(...t)},[n])},G=Symbol();function Z(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=(0,v.useRef)(t);(0,v.useEffect)(()=>{r.current=t},[t]);let o=_(e=>{for(let t of r.current)null!=t&&("function"==typeof t?t(e):t.current=e)});return t.every(e=>null==e||(null==e?void 0:e[G]))?void 0:o}let X=(0,v.createContext)(void 0);function z(){return(0,v.useContext)(X)}var $=n(7650);function J(e,t){return e?e+"["+t+"]":t}function Q(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return Array.from(new Set(t.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}var ee=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ee||{}),et=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(et||{});function en(){let e,t;let n=(e=(0,v.useRef)([]),t=(0,v.useCallback)(t=>{for(let n of e.current)null!=n&&("function"==typeof n?n(t):n.current=t)},[]),function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];if(!r.every(e=>null==e))return e.current=r,t});return(0,v.useCallback)(e=>(function(e){let{ourProps:t,theirProps:n,slot:r,defaultTag:o,features:i,visible:l=!0,name:a,mergeRefs:u}=e;u=null!=u?u:eo;let s=ei(n,t);if(l)return er(s,r,o,a,u);let c=null!=i?i:0;if(2&c){let{static:e=!1,...t}=s;if(e)return er(t,r,o,a,u)}if(1&c){let{unmount:e=!0,...t}=s;return function e(t,n){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];if(t in n){let e=n[t];return"function"==typeof e?e(...o):e}let l=Error('Tried to handle "'.concat(t,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(n).map(e=>'"'.concat(e,'"')).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(l,e),l}(e?0:1,{0:()=>null,1:()=>er({...t,hidden:!0,style:{display:"none"}},r,o,a,u)})}return er(s,r,o,a,u)})({mergeRefs:n,...e}),[n])}function er(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,{as:i=n,children:l,refName:a="ref",...u}=eu(e,["unmount","static"]),s=void 0!==e.ref?{[a]:e.ref}:{},c="function"==typeof l?l(t):l;"className"in u&&u.className&&"function"==typeof u.className&&(u.className=u.className(t)),u["aria-labelledby"]&&u["aria-labelledby"]===u.id&&(u["aria-labelledby"]=void 0);let d={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r.replace(/([A-Z])/g,e=>"-".concat(e.toLowerCase())));if(e)for(let e of(d["data-headlessui-state"]=n.join(" "),n))d["data-".concat(e)]=""}if(i===v.Fragment&&(Object.keys(ea(u)).length>0||Object.keys(ea(d)).length>0)){if(!(0,v.isValidElement)(c)||Array.isArray(c)&&c.length>1){if(Object.keys(ea(u)).length>0)throw Error(['Passing props on "Fragment"!',"","The current component <".concat(r,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(ea(u)).concat(Object.keys(ea(d))).map(e=>"  - ".concat(e)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>"  - ".concat(e)).join("\n")].join("\n"))}else{let e=c.props,t=null==e?void 0:e.className,n="function"==typeof t?function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return Q(t(...n),u.className)}:Q(t,u.className),r=ei(c.props,ea(eu(u,["ref"])));for(let e in d)e in r&&delete d[e];return(0,v.cloneElement)(c,Object.assign({},r,d,s,{ref:o(v.version.split(".")[0]>="19"?c.props.ref:c.ref,s.ref)},n?{className:n}:{}))}}return(0,v.createElement)(i,Object.assign({},eu(u,["ref"]),i!==v.Fragment&&s,i!==v.Fragment&&d),c)}function eo(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.every(e=>null==e)?void 0:e=>{for(let n of t)null!=n&&("function"==typeof n?n(e):n.current=e)}}function ei(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},o={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=o[t]||(o[t]=[]),o[t].push(e[t])):r[t]=e[t];if(r.disabled||r["aria-disabled"])for(let e in o)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e)&&(o[e]=[e=>{var t;return null==(t=null==e?void 0:e.preventDefault)?void 0:t.call(e)}]);for(let e in o)Object.assign(r,{[e](t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(let n of o[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;n(t,...r)}}});return r}function el(e){var t;return Object.assign((0,v.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function ea(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function eu(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var es=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(es||{});let ec=el(function(e,t){var n;let{features:r=1,...o}=e,i={ref:t,"aria-hidden":(2&r)==2||(null!=(n=o["aria-hidden"])?n:void 0),hidden:(4&r)==4||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&r)==4&&(2&r)!=2&&{display:"none"}}};return en()({ourProps:i,theirProps:o,slot:{},defaultTag:"span",name:"Hidden"})}),ed=(0,v.createContext)(null);function ef(e){let{children:t}=e,n=(0,v.useContext)(ed);if(!n)return v.createElement(v.Fragment,null,t);let{target:r}=n;return r?(0,$.createPortal)(v.createElement(v.Fragment,null,t),r):null}function ep(e){let{data:t,form:n,disabled:r,onReset:o,overrides:i}=e,[l,a]=(0,v.useState)(null),u=q();return(0,v.useEffect)(()=>{if(o&&l)return u.addEventListener(l,"reset",o)},[l,n,o]),v.createElement(ef,null,v.createElement(ev,{setForm:a,formId:n}),(function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];for(let[o,i]of Object.entries(t))!function t(n,r,o){if(Array.isArray(o))for(let[e,i]of o.entries())t(n,J(r,e.toString()),i);else o instanceof Date?n.push([r,o.toISOString()]):"boolean"==typeof o?n.push([r,o?"1":"0"]):"string"==typeof o?n.push([r,o]):"number"==typeof o?n.push([r,"".concat(o)]):null==o?n.push([r,""]):e(o,r,n)}(r,J(n,o),i);return r})(t).map(e=>{let[t,o]=e;return v.createElement(ec,{features:es.Hidden,...ea({key:t,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:n,disabled:r,name:t,value:o,...i})})}))}function ev(e){let{setForm:t,formId:n}=e;return(0,v.useEffect)(()=>{if(n){let e=document.getElementById(n);e&&t(e)}},[t,n]),n?null:v.createElement(ec,{features:es.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:e=>{if(!e)return;let n=e.closest("form");n&&t(n)}})}let em=(0,v.createContext)(void 0);function eh(){return(0,v.useContext)(em)}let eg=(0,v.createContext)(null);eg.displayName="DescriptionContext";let eb=Object.assign(el(function(e,t){let n=(0,v.useId)(),r=z(),{id:o="headlessui-description-".concat(n),...i}=e,l=function e(){let t=(0,v.useContext)(eg);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),a=Z(t);Y(()=>l.register(o),[o,l.register]);let u=r||!1,s=(0,v.useMemo)(()=>({...l.slot,disabled:u}),[l.slot,u]),c={ref:a,...l.props,id:o};return en()({ourProps:c,theirProps:i,slot:s,defaultTag:"p",name:l.name||"Description"})}),{});var ey=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ey||{});let eE=(0,v.createContext)(null);function ew(e){var t,n,r;let o=null!=(n=null==(t=(0,v.useContext)(eE))?void 0:t.value)?n:void 0;return(null!=(r=null==e?void 0:e.length)?r:0)>0?[o,...e].filter(Boolean).join(" "):o}eE.displayName="LabelContext";let eT=Object.assign(el(function(e,t){var n;let r=(0,v.useId)(),o=function e(){let t=(0,v.useContext)(eE);if(null===t){let t=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),i=eh(),l=z(),{id:a="headlessui-label-".concat(r),htmlFor:u=null!=i?i:null==(n=o.props)?void 0:n.htmlFor,passive:s=!1,...c}=e,d=Z(t);Y(()=>o.register(a),[a,o.register]);let f=_(e=>{let t=e.currentTarget;if(t instanceof HTMLLabelElement&&e.preventDefault(),o.props&&"onClick"in o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),t instanceof HTMLLabelElement){let e=document.getElementById(t.htmlFor);if(e){let t=e.getAttribute("disabled");if("true"===t||""===t)return;let n=e.getAttribute("aria-disabled");if("true"===n||""===n)return;(e instanceof HTMLInputElement&&("radio"===e.type||"checkbox"===e.type)||"radio"===e.role||"checkbox"===e.role||"switch"===e.role)&&e.click(),e.focus({preventScroll:!0})}}}),p=l||!1,m=(0,v.useMemo)(()=>({...o.slot,disabled:p}),[o.slot,p]),h={ref:d,...o.props,id:a,htmlFor:u,onClick:f};return s&&("onClick"in h&&(delete h.htmlFor,delete h.onClick),"onClick"in c&&delete c.onClick),en()({ourProps:h,theirProps:c,slot:m,defaultTag:u?"label":"div",name:o.name||"Label"})}),{}),ek=(0,v.createContext)(null);ek.displayName="GroupContext";let eL=v.Fragment,eP=Object.assign(el(function(e,t){var n,r,o;let i=(0,v.useId)(),l=eh(),a=z(),{id:u=l||"headlessui-switch-".concat(i),disabled:s=a||!1,checked:c,defaultChecked:d,onChange:m,name:g,value:b,form:y,autoFocus:w=!1,...T}=e,k=(0,v.useContext)(ek),[L,P]=(0,v.useState)(null),A=Z((0,v.useRef)(null),t,null===k?null:k.setSwitch,P),F=function(e){let[t]=(0,v.useState)(e);return t}(d),[x,H]=function(e,t,n){let[r,o]=(0,v.useState)(n),i=void 0!==e,l=(0,v.useRef)(i),a=(0,v.useRef)(!1),u=(0,v.useRef)(!1);return!i||l.current||a.current?i||!l.current||u.current||(u.current=!0,l.current=i,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(a.current=!0,l.current=i,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[i?e:r,_(e=>(i||o(e),null==t?void 0:t(e)))]}(c,m,null!=F&&F),D=q(),[N,R]=(0,v.useState)(!1),B=_(()=>{R(!0),null==H||H(!x),D.nextFrame(()=>{R(!1)})}),W=_(e=>{if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(e.currentTarget))return e.preventDefault();e.preventDefault(),B()}),U=_(e=>{e.key===ey.Space?(e.preventDefault(),B()):e.key===ey.Enter&&function(e){var t,n;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r){for(let t of r.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type)){t.click();return}null==(n=r.requestSubmit)||n.call(r)}}(e.currentTarget)}),V=_(e=>e.preventDefault()),Y=ew(),G=null!=(o=null==(r=(0,v.useContext)(eg))?void 0:r.value)?o:void 0,{isFocusVisible:X,focusProps:$}=function(e={}){var t,n,r;let{autoFocus:o=!1,isTextInput:i,within:l}=e,a=(0,v.useRef)({isFocused:!1,isFocusVisible:o||S()}),[u,s]=(0,v.useState)(!1),[c,d]=(0,v.useState)(()=>a.current.isFocused&&a.current.isFocusVisible),m=(0,v.useCallback)(()=>d(a.current.isFocused&&a.current.isFocusVisible),[]),g=(0,v.useCallback)(e=>{a.current.isFocused=e,s(e),m()},[m]);t=e=>{a.current.isFocusVisible=e,m()},n=[],r={isTextInput:i},C(),(0,v.useEffect)(()=>{let e=(e,n)=>{(function(e,t,n){var r;let o="undefined"!=typeof window?p(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,i="undefined"!=typeof window?p(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,l="undefined"!=typeof window?p(null==n?void 0:n.target).HTMLElement:HTMLElement,a="undefined"!=typeof window?p(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof o&&!M.has(null==n?void 0:null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof i||(null==n?void 0:n.target)instanceof l&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof a&&!E[n.key])})(!!(null==r?void 0:r.isTextInput),e,n)&&t(S())};return h.add(e),()=>{h.delete(e)}},n);let{focusProps:b}=function(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:o}=e,i=(0,v.useCallback)(e=>{if(e.target===e.currentTarget)return r&&r(e),o&&o(!1),!0},[r,o]),l=j(i),a=(0,v.useCallback)(e=>{let t=f(e.target);e.target===e.currentTarget&&t.activeElement===e.target&&(n&&n(e),o&&o(!0),l(e))},[o,n,l]);return{focusProps:{onFocus:!t&&(n||o||r)?a:void 0,onBlur:!t&&(r||o)?i:void 0}}}({isDisabled:l,onFocusChange:g}),{focusWithinProps:y}=function(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:o}=e,i=(0,v.useRef)({isFocusWithin:!1}),l=(0,v.useCallback)(e=>{i.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(i.current.isFocusWithin=!1,n&&n(e),o&&o(!1))},[n,o,i]),a=j(l),u=(0,v.useCallback)(e=>{i.current.isFocusWithin||document.activeElement!==e.target||(r&&r(e),o&&o(!0),i.current.isFocusWithin=!0,a(e))},[r,o,a]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:u,onBlur:l}}}({isDisabled:!l,onFocusWithinChange:g});return{isFocused:u,isFocusVisible:c,focusProps:l?y:b}}({autoFocus:w}),{isHovered:J,hoverProps:Q}=function(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:o}=e,[i,l]=(0,v.useState)(!1),a=(0,v.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,v.useEffect)(I,[]);let{hoverProps:u,triggerHoverEnd:s}=(0,v.useMemo)(()=>{let e=(e,r)=>{if(a.pointerType=r,o||"touch"===r||a.isHovered||!e.currentTarget.contains(e.target))return;a.isHovered=!0;let i=e.currentTarget;a.target=i,t&&t({type:"hoverstart",target:i,pointerType:r}),n&&n(!0),l(!0)},i=(e,t)=>{if(a.pointerType="",a.target=null,"touch"===t||!a.isHovered)return;a.isHovered=!1;let o=e.currentTarget;r&&r({type:"hoverend",target:o,pointerType:t}),n&&n(!1),l(!1)},u={};return"undefined"!=typeof PointerEvent?(u.onPointerEnter=t=>{O&&"mouse"===t.pointerType||e(t,t.pointerType)},u.onPointerLeave=e=>{!o&&e.currentTarget.contains(e.target)&&i(e,e.pointerType)}):(u.onTouchStart=()=>{a.ignoreEmulatedMouseEvents=!0},u.onMouseEnter=t=>{a.ignoreEmulatedMouseEvents||O||e(t,"mouse"),a.ignoreEmulatedMouseEvents=!1},u.onMouseLeave=e=>{!o&&e.currentTarget.contains(e.target)&&i(e,"mouse")}),{hoverProps:u,triggerHoverEnd:i}},[t,n,r,o,a]);return(0,v.useEffect)(()=>{o&&s({currentTarget:a.target},a.pointerType)},[o]),{hoverProps:u,isHovered:i}}({isDisabled:s}),{pressed:ee,pressProps:et}=function(){let{disabled:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,v.useRef)(null),[n,r]=(0,v.useState)(!1),o=q(),i=_(()=>{t.current=null,r(!1),o.dispose()}),l=_(e=>{if(o.dispose(),null===t.current){t.current=e.currentTarget,r(!0);{var n;let l=(n=e.currentTarget,K.isServer?null:n instanceof Node?n.ownerDocument:null!=n&&n.hasOwnProperty("current")&&n.current instanceof Node?n.current.ownerDocument:document);o.addEventListener(l,"pointerup",i,!1),o.addEventListener(l,"pointermove",e=>{if(t.current){var n,o;let i,l;r((i=e.width/2,l=e.height/2,n={top:e.clientY-l,right:e.clientX+i,bottom:e.clientY+l,left:e.clientX-i},o=t.current.getBoundingClientRect(),!(!n||!o||n.right<o.left||n.left>o.right||n.bottom<o.top||n.top>o.bottom)))}},!1),o.addEventListener(l,"pointercancel",i,!1)}}});return{pressed:n,pressProps:e?{}:{onPointerDown:l,onPointerUp:i,onClick:i}}}({disabled:s}),er=(0,v.useMemo)(()=>({checked:x,disabled:s,hover:J,focus:X,active:ee,autofocus:w,changing:N}),[x,J,X,ee,s,N,w]),eo=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},o={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=o[t]||(o[t]=[]),o[t].push(e[t])):r[t]=e[t];for(let e in o)Object.assign(r,{[e](){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];for(let t of o[e])null==t||t(...n)}});return r}({id:u,ref:A,role:"switch",type:(0,v.useMemo)(()=>{var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase()||(null==L?void 0:L.tagName)==="BUTTON"&&!L.hasAttribute("type"))return"button"},[e.type,e.as,L]),tabIndex:-1===e.tabIndex?0:null!=(n=e.tabIndex)?n:0,"aria-checked":x,"aria-labelledby":Y,"aria-describedby":G,disabled:s||void 0,autoFocus:w,onClick:W,onKeyUp:U,onKeyPress:V},$,Q,et),ei=(0,v.useCallback)(()=>{if(void 0!==F)return null==H?void 0:H(F)},[H,F]),el=en();return v.createElement(v.Fragment,null,null!=g&&v.createElement(ep,{disabled:s,data:{[g]:b||"on"},overrides:{type:"checkbox",checked:x},form:y,onReset:ei}),el({ourProps:eo,theirProps:T,slot:er,defaultTag:"button",name:"Switch"}))}),{Group:function(e){var t;let[n,r]=(0,v.useState)(null),[o,i]=function(){let{inherit:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=ew(),[n,r]=(0,v.useState)([]),o=e?[t,...n].filter(Boolean):n;return[o.length>0?o.join(" "):void 0,(0,v.useMemo)(()=>function(e){let t=_(e=>(r(t=>[...t,e]),()=>r(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),n=(0,v.useMemo)(()=>({register:t,slot:e.slot,name:e.name,props:e.props,value:e.value}),[t,e.slot,e.name,e.props,e.value]);return v.createElement(eE.Provider,{value:n},e.children)},[r])]}(),[l,a]=function(){let[e,t]=(0,v.useState)([]);return[e.length>0?e.join(" "):void 0,(0,v.useMemo)(()=>function(e){let n=_(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,v.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props,value:e.value}),[n,e.slot,e.name,e.props,e.value]);return v.createElement(eg.Provider,{value:r},e.children)},[t])]}(),u=(0,v.useMemo)(()=>({switch:n,setSwitch:r}),[n,r]),s=en();return v.createElement(a,{name:"Switch.Description",value:l},v.createElement(i,{name:"Switch.Label",value:o,props:{htmlFor:null==(t=u.switch)?void 0:t.id,onClick(e){n&&(e.currentTarget instanceof HTMLLabelElement&&e.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},v.createElement(ek.Provider,{value:u},s({ourProps:{},theirProps:e,slot:{},defaultTag:eL,name:"Switch.Group"}))))},Label:eT,Description:eb})},9613:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(2115);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},i),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"}))})},7604:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(2115);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},i),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"}))})},7964:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(2115);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},i),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"}))})},5844:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(2115);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},i),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))})},3463:(e,t,n)=>{n.d(t,{A:()=>r});let r=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(r&&(r+=" "),r+=t);return r}}}]);