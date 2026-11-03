/*! Lanyard adapted from React Bits by David Haz. See react-bits-LICENSE.txt. */
var g1=Object.create;var u_=Object.defineProperty;var _1=Object.getOwnPropertyDescriptor;var v1=Object.getOwnPropertyNames;var y1=Object.getPrototypeOf,x1=Object.prototype.hasOwnProperty;var Vi=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var S1=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of v1(t))!x1.call(e,s)&&s!==n&&u_(e,s,{get:()=>t[s],enumerable:!(i=_1(t,s))||i.enumerable});return e};var Fa=(e,t,n)=>(n=e!=null?g1(y1(e)):{},S1(t||!e||!e.__esModule?u_(n,"default",{value:e,enumerable:!0}):n,e));var S_=Vi(Zt=>{"use strict";var Zd=Symbol.for("react.transitional.element"),M1=Symbol.for("react.portal"),b1=Symbol.for("react.fragment"),E1=Symbol.for("react.strict_mode"),T1=Symbol.for("react.profiler"),A1=Symbol.for("react.consumer"),w1=Symbol.for("react.context"),R1=Symbol.for("react.forward_ref"),C1=Symbol.for("react.suspense"),D1=Symbol.for("react.memo"),m_=Symbol.for("react.lazy"),U1=Symbol.for("react.activity"),h_=Symbol.iterator;function L1(e){return e===null||typeof e!="object"?null:(e=h_&&e[h_]||e["@@iterator"],typeof e=="function"?e:null)}var g_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},__=Object.assign,v_={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=v_,this.updater=n||g_}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function y_(){}y_.prototype=Nr.prototype;function Jd(e,t,n){this.props=e,this.context=t,this.refs=v_,this.updater=n||g_}var Kd=Jd.prototype=new y_;Kd.constructor=Jd;__(Kd,Nr.prototype);Kd.isPureReactComponent=!0;var f_=Array.isArray;function Yd(){}var Ce={H:null,A:null,T:null,S:null},x_=Object.prototype.hasOwnProperty;function Qd(e,t,n){var i=n.ref;return{$$typeof:Zd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function N1(e,t){return Qd(e.type,t,e.props)}function jd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zd}function I1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var d_=/\/+/g;function qd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?I1(""+e.key):t.toString(36)}function O1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Yd,Yd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Lr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Zd:case M1:r=!0;break;case m_:return r=e._init,Lr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+qd(e,0):i,f_(s)?(n="",r!=null&&(n=r.replace(d_,"$&/")+"/"),Lr(s,t,n,"",function(c){return c})):s!=null&&(jd(s)&&(s=N1(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(d_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(f_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+qd(i,l),r+=Lr(i,t,n,a,s);else if(l=L1(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+qd(i,l++),r+=Lr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Lr(O1(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function hu(e,t,n){if(e==null)return e;var i=[],s=0;return Lr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function P1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var p_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},z1={map:hu,forEach:function(e,t,n){hu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hu(e,function(){t++}),t},toArray:function(e){return hu(e,function(t){return t})||[]},only:function(e){if(!jd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Zt.Activity=U1;Zt.Children=z1;Zt.Component=Nr;Zt.Fragment=b1;Zt.Profiler=T1;Zt.PureComponent=Jd;Zt.StrictMode=E1;Zt.Suspense=C1;Zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ce;Zt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ce.H.useMemoCache(e)}};Zt.cache=function(e){return function(){return e.apply(null,arguments)}};Zt.cacheSignal=function(){return null};Zt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=__({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!x_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Qd(e.type,s,i)};Zt.createContext=function(e){return e={$$typeof:w1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:A1,_context:e},e};Zt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)x_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Qd(e,a,s)};Zt.createRef=function(){return{current:null}};Zt.forwardRef=function(e){return{$$typeof:R1,render:e}};Zt.isValidElement=jd;Zt.lazy=function(e){return{$$typeof:m_,_payload:{_status:-1,_result:e},_init:P1}};Zt.memo=function(e,t){return{$$typeof:D1,type:e,compare:t===void 0?null:t}};Zt.startTransition=function(e){var t=Ce.T,n={};Ce.T=n;try{var i=e(),s=Ce.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Yd,p_)}catch(a){p_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ce.T=t}};Zt.unstable_useCacheRefresh=function(){return Ce.H.useCacheRefresh()};Zt.use=function(e){return Ce.H.use(e)};Zt.useActionState=function(e,t,n){return Ce.H.useActionState(e,t,n)};Zt.useCallback=function(e,t){return Ce.H.useCallback(e,t)};Zt.useContext=function(e){return Ce.H.useContext(e)};Zt.useDebugValue=function(){};Zt.useDeferredValue=function(e,t){return Ce.H.useDeferredValue(e,t)};Zt.useEffect=function(e,t){return Ce.H.useEffect(e,t)};Zt.useEffectEvent=function(e){return Ce.H.useEffectEvent(e)};Zt.useId=function(){return Ce.H.useId()};Zt.useImperativeHandle=function(e,t,n){return Ce.H.useImperativeHandle(e,t,n)};Zt.useInsertionEffect=function(e,t){return Ce.H.useInsertionEffect(e,t)};Zt.useLayoutEffect=function(e,t){return Ce.H.useLayoutEffect(e,t)};Zt.useMemo=function(e,t){return Ce.H.useMemo(e,t)};Zt.useOptimistic=function(e,t){return Ce.H.useOptimistic(e,t)};Zt.useReducer=function(e,t,n){return Ce.H.useReducer(e,t,n)};Zt.useRef=function(e){return Ce.H.useRef(e)};Zt.useState=function(e){return Ce.H.useState(e)};Zt.useSyncExternalStore=function(e,t,n){return Ce.H.useSyncExternalStore(e,t,n)};Zt.useTransition=function(){return Ce.H.useTransition()};Zt.version="19.2.0"});var pl=Vi((CD,M_)=>{"use strict";M_.exports=S_()});var L_=Vi(ze=>{"use strict";function np(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<fu(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Gi(e){return e.length===0?null:e[0]}function pu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>fu(o,n))l<s&&0>fu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>fu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function fu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}ze.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(b_=performance,ze.unstable_now=function(){return b_.now()}):($d=Date,E_=$d.now(),ze.unstable_now=function(){return $d.now()-E_});var b_,$d,E_,ls=[],Ys=[],B1=1,gi=null,An=3,ip=!1,ml=!1,gl=!1,sp=!1,w_=typeof setTimeout=="function"?setTimeout:null,R_=typeof clearTimeout=="function"?clearTimeout:null,T_=typeof setImmediate<"u"?setImmediate:null;function du(e){for(var t=Gi(Ys);t!==null;){if(t.callback===null)pu(Ys);else if(t.startTime<=e)pu(Ys),t.sortIndex=t.expirationTime,np(ls,t);else break;t=Gi(Ys)}}function ap(e){if(gl=!1,du(e),!ml)if(Gi(ls)!==null)ml=!0,Or||(Or=!0,Ir());else{var t=Gi(Ys);t!==null&&rp(ap,t.startTime-e)}}var Or=!1,_l=-1,C_=5,D_=-1;function U_(){return sp?!0:!(ze.unstable_now()-D_<C_)}function tp(){if(sp=!1,Or){var e=ze.unstable_now();D_=e;var t=!0;try{t:{ml=!1,gl&&(gl=!1,R_(_l),_l=-1),ip=!0;var n=An;try{e:{for(du(e),gi=Gi(ls);gi!==null&&!(gi.expirationTime>e&&U_());){var i=gi.callback;if(typeof i=="function"){gi.callback=null,An=gi.priorityLevel;var s=i(gi.expirationTime<=e);if(e=ze.unstable_now(),typeof s=="function"){gi.callback=s,du(e),t=!0;break e}gi===Gi(ls)&&pu(ls),du(e)}else pu(ls);gi=Gi(ls)}if(gi!==null)t=!0;else{var a=Gi(Ys);a!==null&&rp(ap,a.startTime-e),t=!1}}break t}finally{gi=null,An=n,ip=!1}t=void 0}}finally{t?Ir():Or=!1}}}var Ir;typeof T_=="function"?Ir=function(){T_(tp)}:typeof MessageChannel<"u"?(ep=new MessageChannel,A_=ep.port2,ep.port1.onmessage=tp,Ir=function(){A_.postMessage(null)}):Ir=function(){w_(tp,0)};var ep,A_;function rp(e,t){_l=w_(function(){e(ze.unstable_now())},t)}ze.unstable_IdlePriority=5;ze.unstable_ImmediatePriority=1;ze.unstable_LowPriority=4;ze.unstable_NormalPriority=3;ze.unstable_Profiling=null;ze.unstable_UserBlockingPriority=2;ze.unstable_cancelCallback=function(e){e.callback=null};ze.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C_=0<e?Math.floor(1e3/e):5};ze.unstable_getCurrentPriorityLevel=function(){return An};ze.unstable_next=function(e){switch(An){case 1:case 2:case 3:var t=3;break;default:t=An}var n=An;An=t;try{return e()}finally{An=n}};ze.unstable_requestPaint=function(){sp=!0};ze.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=An;An=e;try{return t()}finally{An=n}};ze.unstable_scheduleCallback=function(e,t,n){var i=ze.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:B1++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,np(Ys,e),Gi(ls)===null&&e===Gi(Ys)&&(gl?(R_(_l),_l=-1):gl=!0,rp(ap,n-i))):(e.sortIndex=s,np(ls,e),ml||ip||(ml=!0,Or||(Or=!0,Ir()))),e};ze.unstable_shouldYield=U_;ze.unstable_wrapCallback=function(e){var t=An;return function(){var n=An;An=t;try{return e.apply(this,arguments)}finally{An=n}}}});var I_=Vi((UD,N_)=>{"use strict";N_.exports=L_()});var P_=Vi(In=>{"use strict";var F1=pl();function O_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Zs(){}var Nn={d:{f:Zs,r:function(){throw Error(O_(522))},D:Zs,C:Zs,L:Zs,m:Zs,X:Zs,S:Zs,M:Zs},p:0,findDOMNode:null},H1=Symbol.for("react.portal");function V1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H1,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var vl=F1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function mu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Nn;In.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(O_(299));return V1(e,t,null,n)};In.flushSync=function(e){var t=vl.T,n=Nn.p;try{if(vl.T=null,Nn.p=2,e)return e()}finally{vl.T=t,Nn.p=n,Nn.d.f()}};In.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Nn.d.C(e,t))};In.prefetchDNS=function(e){typeof e=="string"&&Nn.d.D(e)};In.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=mu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Nn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Nn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};In.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=mu(t.as,t.crossOrigin);Nn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Nn.d.M(e)};In.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=mu(n,t.crossOrigin);Nn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};In.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=mu(t.as,t.crossOrigin);Nn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Nn.d.m(e)};In.requestFormReset=function(e){Nn.d.r(e)};In.unstable_batchedUpdates=function(e,t){return e(t)};In.useFormState=function(e,t,n){return vl.H.useFormState(e,t,n)};In.useFormStatus=function(){return vl.H.useHostTransitionStatus()};In.version="19.2.0"});var F_=Vi((ND,B_)=>{"use strict";function z_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z_)}catch(e){console.error(e)}}z_(),B_.exports=P_()});var QS=Vi(Hh=>{"use strict";var $e=I_(),hy=pl(),G1=F_();function tt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sc(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function py(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function H_(e){if(sc(e)!==e)throw Error(tt(188))}function k1(e){var t=e.alternate;if(!t){if(t=sc(e),t===null)throw Error(tt(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return H_(s),e;if(a===i)return H_(s),t;a=a.sibling}throw Error(tt(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(tt(189))}}if(n.alternate!==i)throw Error(tt(190))}if(n.tag!==3)throw Error(tt(188));return n.stateNode.current===n?e:t}function my(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=my(e),t!==null)return t;e=e.sibling}return null}var Le=Object.assign,X1=Symbol.for("react.element"),gu=Symbol.for("react.transitional.element"),Al=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),gy=Symbol.for("react.strict_mode"),Hp=Symbol.for("react.profiler"),_y=Symbol.for("react.consumer"),gs=Symbol.for("react.context"),Om=Symbol.for("react.forward_ref"),Vp=Symbol.for("react.suspense"),Gp=Symbol.for("react.suspense_list"),Pm=Symbol.for("react.memo"),Js=Symbol.for("react.lazy");Symbol.for("react.scope");var kp=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var W1=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var V_=Symbol.iterator;function yl(e){return e===null||typeof e!="object"?null:(e=V_&&e[V_]||e["@@iterator"],typeof e=="function"?e:null)}var q1=Symbol.for("react.client.reference");function Xp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===q1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vr:return"Fragment";case Hp:return"Profiler";case gy:return"StrictMode";case Vp:return"Suspense";case Gp:return"SuspenseList";case kp:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Al:return"Portal";case gs:return e.displayName||"Context";case _y:return(e._context.displayName||"Context")+".Consumer";case Om:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pm:return t=e.displayName||null,t!==null?t:Xp(e.type)||"Memo";case Js:t=e._payload,e=e._init;try{return Xp(e(t))}catch{}}return null}var wl=Array.isArray,Gt=hy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge=G1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Wa={pending:!1,data:null,method:null,action:null},Wp=[],Gr=-1;function Yi(e){return{current:e}}function on(e){0>Gr||(e.current=Wp[Gr],Wp[Gr]=null,Gr--)}function we(e,t){Gr++,Wp[Gr]=e.current,e.current=t}var qi=Yi(null),Xl=Yi(null),ra=Yi(null),Ju=Yi(null);function Ku(e,t){switch(we(ra,t),we(Xl,e),we(qi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zv(t),e=zS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}on(qi),we(qi,e)}function ro(){on(qi),on(Xl),on(ra)}function qp(e){e.memoizedState!==null&&we(Ju,e);var t=qi.current,n=zS(t,e.type);t!==n&&(we(Xl,e),we(qi,n))}function Qu(e){Xl.current===e&&(on(qi),on(Xl)),Ju.current===e&&(on(Ju),ec._currentValue=Wa)}var op,G_;function Va(e){if(op===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);op=t&&t[1]||"",G_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+op+e+G_}var lp=!1;function cp(e,t){if(!e||lp)return"";lp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{lp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Va(n):""}function Y1(e,t){switch(e.tag){case 26:case 27:case 5:return Va(e.type);case 16:return Va("Lazy");case 13:return e.child!==t&&t!==null?Va("Suspense Fallback"):Va("Suspense");case 19:return Va("SuspenseList");case 0:case 15:return cp(e.type,!1);case 11:return cp(e.type.render,!1);case 1:return cp(e.type,!0);case 31:return Va("Activity");default:return""}}function k_(e){try{var t="",n=null;do t+=Y1(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Yp=Object.prototype.hasOwnProperty,zm=$e.unstable_scheduleCallback,up=$e.unstable_cancelCallback,Z1=$e.unstable_shouldYield,J1=$e.unstable_requestPaint,ei=$e.unstable_now,K1=$e.unstable_getCurrentPriorityLevel,vy=$e.unstable_ImmediatePriority,yy=$e.unstable_UserBlockingPriority,ju=$e.unstable_NormalPriority,Q1=$e.unstable_LowPriority,xy=$e.unstable_IdlePriority,j1=$e.log,$1=$e.unstable_setDisableYieldValue,ac=null,ni=null;function ea(e){if(typeof j1=="function"&&$1(e),ni&&typeof ni.setStrictMode=="function")try{ni.setStrictMode(ac,e)}catch{}}var ii=Math.clz32?Math.clz32:nE,tE=Math.log,eE=Math.LN2;function nE(e){return e>>>=0,e===0?32:31-(tE(e)/eE|0)|0}var _u=256,vu=262144,yu=4194304;function Ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Eh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ga(i):(r&=o,r!==0?s=Ga(r):n||(n=o&~e,n!==0&&(s=Ga(n))))):(o=i&~a,o!==0?s=Ga(o):r!==0?s=Ga(r):n||(n=i&~e,n!==0&&(s=Ga(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function rc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function iE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sy(){var e=yu;return yu<<=1,(yu&62914560)===0&&(yu=4194304),e}function hp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sE(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-ii(n),d=1<<u;o[u]=0,l[u]=-1;var f=c[u];if(f!==null)for(c[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&My(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function My(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ii(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function by(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ii(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Ey(e,t){var n=t&-t;return n=(n&42)!==0?1:Bm(n),(n&(e.suspendedLanes|t))!==0?0:n}function Bm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ty(){var e=ge.p;return e!==0?e:(e=window.event,e===void 0?32:ZS(e.type))}function X_(e,t){var n=ge.p;try{return ge.p=e,t()}finally{ge.p=n}}var ya=Math.random().toString(36).slice(2),dn="__reactFiber$"+ya,qn="__reactProps$"+ya,vo="__reactContainer$"+ya,Zp="__reactEvents$"+ya,aE="__reactListeners$"+ya,rE="__reactHandles$"+ya,W_="__reactResources$"+ya,lc="__reactMarker$"+ya;function Hm(e){delete e[dn],delete e[qn],delete e[Zp],delete e[aE],delete e[rE]}function kr(e){var t=e[dn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vo]||n[dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$v(e);e!==null;){if(n=e[dn])return n;e=$v(e)}return t}e=n,n=e.parentNode}return null}function yo(e){if(e=e[dn]||e[vo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Rl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(tt(33))}function $r(e){var t=e[W_];return t||(t=e[W_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rn(e){e[lc]=!0}var Ay=new Set,wy={};function er(e,t){oo(e,t),oo(e+"Capture",t)}function oo(e,t){for(wy[e]=t,e=0;e<t.length;e++)Ay.add(t[e])}var oE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),q_={},Y_={};function lE(e){return Yp.call(Y_,e)?!0:Yp.call(q_,e)?!1:oE.test(e)?Y_[e]=!0:(q_[e]=!0,!1)}function Iu(e,t,n){if(lE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function xu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function cs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function vi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ry(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jp(e){if(!e._valueTracker){var t=Ry(e)?"checked":"value";e._valueTracker=cE(e,t,""+e[t])}}function Cy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ry(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function $u(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var uE=/[\n"\\]/g;function Si(e){return e.replace(uE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Kp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vi(t)):e.value!==""+vi(t)&&(e.value=""+vi(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Qp(e,r,vi(t)):n!=null?Qp(e,r,vi(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+vi(o):e.removeAttribute("name")}function Dy(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Jp(e);return}n=n!=null?""+vi(n):"",t=t!=null?""+vi(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Jp(e)}function Qp(e,t,n){t==="number"&&$u(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function to(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+vi(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Uy(e,t,n){if(t!=null&&(t=""+vi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+vi(n):""}function Ly(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(tt(92));if(wl(i)){if(1<i.length)throw Error(tt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=vi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Jp(e)}function lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Z_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||hE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ny(e,t,n){if(t!=null&&typeof t!="object")throw Error(tt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Z_(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&Z_(e,a,t[a])}function Vm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ou(e){return dE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _s(){}var jp=null;function Gm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xr=null,eo=null;function J_(e){var t=yo(e);if(t&&(e=t.stateNode)){var n=e[qn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Kp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Si(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[qn]||null;if(!s)throw Error(tt(90));Kp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Cy(i)}break t;case"textarea":Uy(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&to(e,!!n.multiple,t,!1)}}}var fp=!1;function Iy(e,t,n){if(fp)return e(t,n);fp=!0;try{var i=e(t);return i}finally{if(fp=!1,(Xr!==null||eo!==null)&&(Ph(),Xr&&(t=Xr,e=eo,eo=Xr=null,J_(t),e)))for(t=0;t<e.length;t++)J_(e[t])}}function Wl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[qn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(tt(231,t,typeof n));return n}var Ms=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$p=!1;if(Ms)try{Pr={},Object.defineProperty(Pr,"passive",{get:function(){$p=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{$p=!1}var Pr,na=null,km=null,Pu=null;function Oy(){if(Pu)return Pu;var e,t=km,n=t.length,i,s="value"in na?na.value:na.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Pu=s.slice(e,1<i?1-i:void 0)}function zu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Su(){return!0}function K_(){return!1}function Yn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Su:K_,this.isPropagationStopped=K_,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Su)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Su)},persist:function(){},isPersistent:Su}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Th=Yn(nr),cc=Le({},nr,{view:0,detail:0}),pE=Yn(cc),dp,pp,xl,Ah=Le({},cc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xl&&(xl&&e.type==="mousemove"?(dp=e.screenX-xl.screenX,pp=e.screenY-xl.screenY):pp=dp=0,xl=e),dp)},movementY:function(e){return"movementY"in e?e.movementY:pp}}),Q_=Yn(Ah),mE=Le({},Ah,{dataTransfer:0}),gE=Yn(mE),_E=Le({},cc,{relatedTarget:0}),mp=Yn(_E),vE=Le({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),yE=Yn(vE),xE=Le({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),SE=Yn(xE),ME=Le({},nr,{data:0}),j_=Yn(ME),bE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=TE[e])?!!t[e]:!1}function Xm(){return AE}var wE=Le({},cc,{key:function(e){if(e.key){var t=bE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?EE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xm,charCode:function(e){return e.type==="keypress"?zu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),RE=Yn(wE),CE=Le({},Ah,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$_=Yn(CE),DE=Le({},cc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xm}),UE=Yn(DE),LE=Le({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),NE=Yn(LE),IE=Le({},Ah,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),OE=Yn(IE),PE=Le({},nr,{newState:0,oldState:0}),zE=Yn(PE),BE=[9,13,27,32],Wm=Ms&&"CompositionEvent"in window,Ul=null;Ms&&"documentMode"in document&&(Ul=document.documentMode);var FE=Ms&&"TextEvent"in window&&!Ul,Py=Ms&&(!Wm||Ul&&8<Ul&&11>=Ul),tv=" ",ev=!1;function zy(e,t){switch(e){case"keyup":return BE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function By(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wr=!1;function HE(e,t){switch(e){case"compositionend":return By(t);case"keypress":return t.which!==32?null:(ev=!0,tv);case"textInput":return e=t.data,e===tv&&ev?null:e;default:return null}}function VE(e,t){if(Wr)return e==="compositionend"||!Wm&&zy(e,t)?(e=Oy(),Pu=km=na=null,Wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Py&&t.locale!=="ko"?null:t.data;default:return null}}var GE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!GE[e.type]:t==="textarea"}function Fy(e,t,n,i){Xr?eo?eo.push(i):eo=[i]:Xr=i,t=_h(t,"onChange"),0<t.length&&(n=new Th("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ll=null,ql=null;function kE(e){IS(e,0)}function wh(e){var t=Rl(e);if(Cy(t))return e}function iv(e,t){if(e==="change")return t}var Hy=!1;Ms&&(Ms?(bu="oninput"in document,bu||(gp=document.createElement("div"),gp.setAttribute("oninput","return;"),bu=typeof gp.oninput=="function"),Mu=bu):Mu=!1,Hy=Mu&&(!document.documentMode||9<document.documentMode));var Mu,bu,gp;function sv(){Ll&&(Ll.detachEvent("onpropertychange",Vy),ql=Ll=null)}function Vy(e){if(e.propertyName==="value"&&wh(ql)){var t=[];Fy(t,ql,e,Gm(e)),Iy(kE,t)}}function XE(e,t,n){e==="focusin"?(sv(),Ll=t,ql=n,Ll.attachEvent("onpropertychange",Vy)):e==="focusout"&&sv()}function WE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wh(ql)}function qE(e,t){if(e==="click")return wh(t)}function YE(e,t){if(e==="input"||e==="change")return wh(t)}function ZE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ai=typeof Object.is=="function"?Object.is:ZE;function Yl(e,t){if(ai(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Yp.call(t,s)||!ai(e[s],t[s]))return!1}return!0}function av(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rv(e,t){var n=av(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=av(n)}}function Gy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ky(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$u(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$u(e.document)}return t}function qm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var JE=Ms&&"documentMode"in document&&11>=document.documentMode,qr=null,tm=null,Nl=null,em=!1;function ov(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;em||qr==null||qr!==$u(i)||(i=qr,"selectionStart"in i&&qm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Nl&&Yl(Nl,i)||(Nl=i,i=_h(tm,"onSelect"),0<i.length&&(t=new Th("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=qr)))}function Ha(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yr={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},_p={},Xy={};Ms&&(Xy=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function ir(e){if(_p[e])return _p[e];if(!Yr[e])return e;var t=Yr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xy)return _p[e]=t[n];return e}var Wy=ir("animationend"),qy=ir("animationiteration"),Yy=ir("animationstart"),KE=ir("transitionrun"),QE=ir("transitionstart"),jE=ir("transitioncancel"),Zy=ir("transitionend"),Jy=new Map,nm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nm.push("scrollEnd");function Ui(e,t){Jy.set(e,t),er(t,[e])}var th=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],Zr=0,Ym=0;function Rh(){for(var e=Zr,t=Ym=Zr=0;t<e;){var n=_i[t];_i[t++]=null;var i=_i[t];_i[t++]=null;var s=_i[t];_i[t++]=null;var a=_i[t];if(_i[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Ky(n,s,a)}}function Ch(e,t,n,i){_i[Zr++]=e,_i[Zr++]=t,_i[Zr++]=n,_i[Zr++]=i,Ym|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Zm(e,t,n,i){return Ch(e,t,n,i),eh(e)}function sr(e,t){return Ch(e,null,null,t),eh(e)}function Ky(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-ii(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function eh(e){if(50<Gl)throw Gl=0,bm=null,Error(tt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Jr={};function $E(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,t,n,i){return new $E(e,t,n,i)}function Jm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ys(e,t){var n=e.alternate;return n===null?(n=$n(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Qy(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Bu(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Jm(e)&&(r=1);else if(typeof e=="string")r=nA(e,n,qi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case kp:return e=$n(31,n,t,s),e.elementType=kp,e.lanes=a,e;case Vr:return qa(n.children,s,a,t);case gy:r=8,s|=24;break;case Hp:return e=$n(12,n,t,s|2),e.elementType=Hp,e.lanes=a,e;case Vp:return e=$n(13,n,t,s),e.elementType=Vp,e.lanes=a,e;case Gp:return e=$n(19,n,t,s),e.elementType=Gp,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gs:r=10;break t;case _y:r=9;break t;case Om:r=11;break t;case Pm:r=14;break t;case Js:r=16,i=null;break t}r=29,n=Error(tt(130,e===null?"null":typeof e,"")),i=null}return t=$n(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function qa(e,t,n,i){return e=$n(7,e,i,t),e.lanes=n,e}function vp(e,t,n){return e=$n(6,e,null,t),e.lanes=n,e}function jy(e){var t=$n(18,null,null,0);return t.stateNode=e,t}function yp(e,t,n){return t=$n(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var lv=new WeakMap;function Mi(e,t){if(typeof e=="object"&&e!==null){var n=lv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:k_(t)},lv.set(e,t),t)}return{value:e,source:t,stack:k_(t)}}var Kr=[],Qr=0,nh=null,Zl=0,yi=[],xi=0,ma=null,ki=1,Xi="";function ps(e,t){Kr[Qr++]=Zl,Kr[Qr++]=nh,nh=e,Zl=t}function $y(e,t,n){yi[xi++]=ki,yi[xi++]=Xi,yi[xi++]=ma,ma=e;var i=ki;e=Xi;var s=32-ii(i)-1;i&=~(1<<s),n+=1;var a=32-ii(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,ki=1<<32-ii(t)+s|n<<s|i,Xi=a+e}else ki=1<<a|n<<s|i,Xi=e}function Km(e){e.return!==null&&(ps(e,1),$y(e,1,0))}function Qm(e){for(;e===nh;)nh=Kr[--Qr],Kr[Qr]=null,Zl=Kr[--Qr],Kr[Qr]=null;for(;e===ma;)ma=yi[--xi],yi[xi]=null,Xi=yi[--xi],yi[xi]=null,ki=yi[--xi],yi[xi]=null}function tx(e,t){yi[xi++]=ki,yi[xi++]=Xi,yi[xi++]=ma,ki=t.id,Xi=t.overflow,ma=e}var pn=null,Ue=null,re=!1,oa=null,bi=!1,im=Error(tt(519));function ga(e){var t=Error(tt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jl(Mi(t,e)),im}function cv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[dn]=e,t[qn]=i,n){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(n=0;n<$l.length;n++)ne($l[n],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),Dy(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),Ly(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||PS(t.textContent,n)?(i.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),i.onScroll!=null&&ne("scroll",t),i.onScrollEnd!=null&&ne("scrollend",t),i.onClick!=null&&(t.onclick=_s),t=!0):t=!1,t||ga(e,!0)}function uv(e){for(pn=e.return;pn;)switch(pn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:pn=pn.return}}function zr(e){if(e!==pn)return!1;if(!re)return uv(e),re=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Rm(e.type,e.memoizedProps)),n=!n),n&&Ue&&ga(e),uv(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));Ue=jv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));Ue=jv(e)}else t===27?(t=Ue,xa(e.type)?(e=Lm,Lm=null,Ue=e):Ue=t):Ue=pn?Ti(e.stateNode.nextSibling):null;return!0}function Ka(){Ue=pn=null,re=!1}function xp(){var e=oa;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),oa=null),e}function Jl(e){oa===null?oa=[e]:oa.push(e)}var sm=Yi(null),ar=null,vs=null;function Qs(e,t,n){we(sm,t._currentValue),t._currentValue=n}function xs(e){e._currentValue=sm.current,on(sm)}function am(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function rm(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),am(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(tt(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),am(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function xo(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(tt(387));if(r=r.memoizedProps,r!==null){var o=s.type;ai(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Ju.current){if(r=s.alternate,r===null)throw Error(tt(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(ec):e=[ec])}s=s.return}e!==null&&rm(t,e,n,i),t.flags|=262144}function ih(e){for(e=e.firstContext;e!==null;){if(!ai(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qa(e){ar=e,vs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function mn(e){return ex(ar,e)}function Eu(e,t){return ar===null&&Qa(e),ex(e,t)}function ex(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},vs===null){if(e===null)throw Error(tt(308));vs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vs=vs.next=t;return n}var tT=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},eT=$e.unstable_scheduleCallback,nT=$e.unstable_NormalPriority,Je={$$typeof:gs,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jm(){return{controller:new tT,data:new Map,refCount:0}}function uc(e){e.refCount--,e.refCount===0&&eT(nT,function(){e.controller.abort()})}var Il=null,om=0,co=0,no=null;function iT(e,t){if(Il===null){var n=Il=[];om=0,co=bg(),no={status:"pending",value:void 0,then:function(i){n.push(i)}}}return om++,t.then(hv,hv),t}function hv(){if(--om===0&&Il!==null){no!==null&&(no.status="fulfilled");var e=Il;Il=null,co=0,no=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function sT(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var fv=Gt.S;Gt.S=function(e,t){mS=ei(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&iT(e,t),fv!==null&&fv(e,t)};var Ya=Yi(null);function $m(){var e=Ya.current;return e!==null?e:Ee.pooledCache}function Fu(e,t){t===null?we(Ya,Ya.current):we(Ya,t.pool)}function nx(){var e=$m();return e===null?null:{parent:Je._currentValue,pool:e}}var So=Error(tt(460)),tg=Error(tt(474)),Dh=Error(tt(542)),sh={then:function(){}};function dv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ix(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(_s,_s),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mv(e),e;default:if(typeof t.status=="string")t.then(_s,_s);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(tt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mv(e),e}throw Za=t,So}}function ka(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Za=n,So):n}}var Za=null;function pv(){if(Za===null)throw Error(tt(459));var e=Za;return Za=null,e}function mv(e){if(e===So||e===Dh)throw Error(tt(483))}var io=null,Kl=0;function Tu(e){var t=Kl;return Kl+=1,io===null&&(io=[]),ix(io,e,t)}function Sl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Au(e,t){throw t.$$typeof===X1?Error(tt(525)):(e=Object.prototype.toString.call(t),Error(tt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function sx(e){function t(h,_){if(e){var v=h.deletions;v===null?(h.deletions=[_],h.flags|=16):v.push(_)}}function n(h,_){if(!e)return null;for(;_!==null;)t(h,_),_=_.sibling;return null}function i(h){for(var _=new Map;h!==null;)h.key!==null?_.set(h.key,h):_.set(h.index,h),h=h.sibling;return _}function s(h,_){return h=ys(h,_),h.index=0,h.sibling=null,h}function a(h,_,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<_?(h.flags|=67108866,_):v):(h.flags|=67108866,_)):(h.flags|=1048576,_)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,_,v,y){return _===null||_.tag!==6?(_=vp(v,h.mode,y),_.return=h,_):(_=s(_,v),_.return=h,_)}function l(h,_,v,y){var A=v.type;return A===Vr?u(h,_,v.props.children,y,v.key):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Js&&ka(A)===_.type)?(_=s(_,v.props),Sl(_,v),_.return=h,_):(_=Bu(v.type,v.key,v.props,null,h.mode,y),Sl(_,v),_.return=h,_)}function c(h,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=yp(v,h.mode,y),_.return=h,_):(_=s(_,v.children||[]),_.return=h,_)}function u(h,_,v,y,A){return _===null||_.tag!==7?(_=qa(v,h.mode,y,A),_.return=h,_):(_=s(_,v),_.return=h,_)}function d(h,_,v){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=vp(""+_,h.mode,v),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case gu:return v=Bu(_.type,_.key,_.props,null,h.mode,v),Sl(v,_),v.return=h,v;case Al:return _=yp(_,h.mode,v),_.return=h,_;case Js:return _=ka(_),d(h,_,v)}if(wl(_)||yl(_))return _=qa(_,h.mode,v,null),_.return=h,_;if(typeof _.then=="function")return d(h,Tu(_),v);if(_.$$typeof===gs)return d(h,Eu(h,_),v);Au(h,_)}return null}function f(h,_,v,y){var A=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return A!==null?null:o(h,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gu:return v.key===A?l(h,_,v,y):null;case Al:return v.key===A?c(h,_,v,y):null;case Js:return v=ka(v),f(h,_,v,y)}if(wl(v)||yl(v))return A!==null?null:u(h,_,v,y,null);if(typeof v.then=="function")return f(h,_,Tu(v),y);if(v.$$typeof===gs)return f(h,_,Eu(h,v),y);Au(h,v)}return null}function p(h,_,v,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(v)||null,o(_,h,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case gu:return h=h.get(y.key===null?v:y.key)||null,l(_,h,y,A);case Al:return h=h.get(y.key===null?v:y.key)||null,c(_,h,y,A);case Js:return y=ka(y),p(h,_,v,y,A)}if(wl(y)||yl(y))return h=h.get(v)||null,u(_,h,y,A,null);if(typeof y.then=="function")return p(h,_,v,Tu(y),A);if(y.$$typeof===gs)return p(h,_,v,Eu(_,y),A);Au(_,y)}return null}function g(h,_,v,y){for(var A=null,R=null,w=_,U=_=0,E=null;w!==null&&U<v.length;U++){w.index>U?(E=w,w=null):E=w.sibling;var M=f(h,w,v[U],y);if(M===null){w===null&&(w=E);break}e&&w&&M.alternate===null&&t(h,w),_=a(M,_,U),R===null?A=M:R.sibling=M,R=M,w=E}if(U===v.length)return n(h,w),re&&ps(h,U),A;if(w===null){for(;U<v.length;U++)w=d(h,v[U],y),w!==null&&(_=a(w,_,U),R===null?A=w:R.sibling=w,R=w);return re&&ps(h,U),A}for(w=i(w);U<v.length;U++)E=p(w,h,U,v[U],y),E!==null&&(e&&E.alternate!==null&&w.delete(E.key===null?U:E.key),_=a(E,_,U),R===null?A=E:R.sibling=E,R=E);return e&&w.forEach(function(D){return t(h,D)}),re&&ps(h,U),A}function S(h,_,v,y){if(v==null)throw Error(tt(151));for(var A=null,R=null,w=_,U=_=0,E=null,M=v.next();w!==null&&!M.done;U++,M=v.next()){w.index>U?(E=w,w=null):E=w.sibling;var D=f(h,w,M.value,y);if(D===null){w===null&&(w=E);break}e&&w&&D.alternate===null&&t(h,w),_=a(D,_,U),R===null?A=D:R.sibling=D,R=D,w=E}if(M.done)return n(h,w),re&&ps(h,U),A;if(w===null){for(;!M.done;U++,M=v.next())M=d(h,M.value,y),M!==null&&(_=a(M,_,U),R===null?A=M:R.sibling=M,R=M);return re&&ps(h,U),A}for(w=i(w);!M.done;U++,M=v.next())M=p(w,h,U,M.value,y),M!==null&&(e&&M.alternate!==null&&w.delete(M.key===null?U:M.key),_=a(M,_,U),R===null?A=M:R.sibling=M,R=M);return e&&w.forEach(function(H){return t(h,H)}),re&&ps(h,U),A}function m(h,_,v,y){if(typeof v=="object"&&v!==null&&v.type===Vr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case gu:t:{for(var A=v.key;_!==null;){if(_.key===A){if(A=v.type,A===Vr){if(_.tag===7){n(h,_.sibling),y=s(_,v.props.children),y.return=h,h=y;break t}}else if(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Js&&ka(A)===_.type){n(h,_.sibling),y=s(_,v.props),Sl(y,v),y.return=h,h=y;break t}n(h,_);break}else t(h,_);_=_.sibling}v.type===Vr?(y=qa(v.props.children,h.mode,y,v.key),y.return=h,h=y):(y=Bu(v.type,v.key,v.props,null,h.mode,y),Sl(y,v),y.return=h,h=y)}return r(h);case Al:t:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(h,_.sibling),y=s(_,v.children||[]),y.return=h,h=y;break t}else{n(h,_);break}else t(h,_);_=_.sibling}y=yp(v,h.mode,y),y.return=h,h=y}return r(h);case Js:return v=ka(v),m(h,_,v,y)}if(wl(v))return g(h,_,v,y);if(yl(v)){if(A=yl(v),typeof A!="function")throw Error(tt(150));return v=A.call(v),S(h,_,v,y)}if(typeof v.then=="function")return m(h,_,Tu(v),y);if(v.$$typeof===gs)return m(h,_,Eu(h,v),y);Au(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,_!==null&&_.tag===6?(n(h,_.sibling),y=s(_,v),y.return=h,h=y):(n(h,_),y=vp(v,h.mode,y),y.return=h,h=y),r(h)):n(h,_)}return function(h,_,v,y){try{Kl=0;var A=m(h,_,v,y);return io=null,A}catch(w){if(w===So||w===Dh)throw w;var R=$n(29,w,null,h.mode);return R.lanes=y,R.return=h,R}finally{}}}var ja=sx(!0),ax=sx(!1),Ks=!1;function eg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ca(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(me&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=eh(e),Ky(e,null,n),t}return Ch(e,i,t,n),eh(e)}function Ol(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,by(e,n)}}function Sp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var cm=!1;function Pl(){if(cm){var e=no;if(e!==null)throw e}}function zl(e,t,n,i){cm=!1;var s=e.updateQueue;Ks=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,u=c=l=null,o=a;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(se&f)===f:(i&f)===f){f!==0&&f===co&&(cm=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,S=o;f=t;var m=n;switch(S.tag){case 1:if(g=S.payload,typeof g=="function"){d=g.call(m,d,f);break t}d=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break t;d=Le({},d,f);break t;case 2:Ks=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);u===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,a===null&&(s.shared.lanes=0),va|=r,e.lanes=r,e.memoizedState=d}}function rx(e,t){if(typeof e!="function")throw Error(tt(191,e));e.call(t)}function ox(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)rx(n[e],t)}var uo=Yi(null),ah=Yi(0);function gv(e,t){e=As,we(ah,e),we(uo,t),As=e|t.baseLanes}function um(){we(ah,As),we(uo,uo.current)}function ng(){As=ah.current,on(uo),on(ah)}var ri=Yi(null),Ei=null;function js(e){var t=e.alternate;we(ke,ke.current&1),we(ri,e),Ei===null&&(t===null||uo.current!==null||t.memoizedState!==null)&&(Ei=e)}function hm(e){we(ke,ke.current),we(ri,e),Ei===null&&(Ei=e)}function lx(e){e.tag===22?(we(ke,ke.current),we(ri,e),Ei===null&&(Ei=e)):$s(e)}function $s(){we(ke,ke.current),we(ri,ri.current)}function jn(e){on(ri),Ei===e&&(Ei=null),on(ke)}var ke=Yi(0);function rh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Dm(n)||Um(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bs=0,Jt=null,be=null,Ye=null,oh=!1,so=!1,$a=!1,lh=0,Ql=0,ao=null,aT=0;function Ve(){throw Error(tt(321))}function ig(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ai(e[n],t[n]))return!1;return!0}function sg(e,t,n,i,s,a){return bs=a,Jt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gt.H=e===null||e.memoizedState===null?Fx:mg,$a=!1,a=n(i,s),$a=!1,so&&(a=ux(t,n,i,s)),cx(e),a}function cx(e){Gt.H=jl;var t=be!==null&&be.next!==null;if(bs=0,Ye=be=Jt=null,oh=!1,Ql=0,ao=null,t)throw Error(tt(300));e===null||Ke||(e=e.dependencies,e!==null&&ih(e)&&(Ke=!0))}function ux(e,t,n,i){Jt=e;var s=0;do{if(so&&(ao=null),Ql=0,so=!1,25<=s)throw Error(tt(301));if(s+=1,Ye=be=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Gt.H=Hx,a=t(n,i)}while(so);return a}function rT(){var e=Gt.H,t=e.useState()[0];return t=typeof t.then=="function"?hc(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(Jt.flags|=1024),t}function ag(){var e=lh!==0;return lh=0,e}function rg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function og(e){if(oh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oh=!1}bs=0,Ye=be=Jt=null,so=!1,Ql=lh=0,ao=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Jt.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Xe(){if(be===null){var e=Jt.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Ye===null?Jt.memoizedState:Ye.next;if(t!==null)Ye=t,be=e;else{if(e===null)throw Jt.alternate===null?Error(tt(467)):Error(tt(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ye===null?Jt.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Uh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hc(e){var t=Ql;return Ql+=1,ao===null&&(ao=[]),e=ix(ao,e,t),t=Jt,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,Gt.H=t===null||t.memoizedState===null?Fx:mg),e}function Lh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hc(e);if(e.$$typeof===gs)return mn(e)}throw Error(tt(438,String(e)))}function lg(e){var t=null,n=Jt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Jt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Uh(),Jt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=W1;return t.index++,n}function Es(e,t){return typeof t=="function"?t(e):t}function Hu(e){var t=Xe();return cg(t,be,e)}function cg(e,t,n){var i=e.queue;if(i===null)throw Error(tt(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,u=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(se&d)===d:(bs&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===co&&(u=!0);else if((bs&f)===f){c=c.next,f===co&&(u=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Jt.lanes|=f,va|=f;d=c.action,$a&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Jt.lanes|=d,va|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!ai(a,e.memoizedState)&&(Ke=!0,u&&(n=no,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Mp(e){var t=Xe(),n=t.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);ai(a,t.memoizedState)||(Ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function hx(e,t,n){var i=Jt,s=Xe(),a=re;if(a){if(n===void 0)throw Error(tt(407));n=n()}else n=t();var r=!ai((be||s).memoizedState,n);if(r&&(s.memoizedState=n,Ke=!0),s=s.queue,ug(px.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||Ye!==null&&Ye.memoizedState.tag&1){if(i.flags|=2048,ho(9,{destroy:void 0},dx.bind(null,i,s,n,t),null),Ee===null)throw Error(tt(349));a||(bs&127)!==0||fx(i,t,n)}return n}function fx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Jt.updateQueue,t===null?(t=Uh(),Jt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dx(e,t,n,i){t.value=n,t.getSnapshot=i,mx(t)&&gx(e)}function px(e,t,n){return n(function(){mx(t)&&gx(e)})}function mx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ai(e,n)}catch{return!0}}function gx(e){var t=sr(e,2);t!==null&&Wn(t,e,2)}function fm(e){var t=On();if(typeof e=="function"){var n=e;if(e=n(),$a){ea(!0);try{n()}finally{ea(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:e},t}function _x(e,t,n,i){return e.baseState=n,cg(e,be,typeof i=="function"?i:Es)}function oT(e,t,n,i,s){if(Ih(e))throw Error(tt(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Gt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,vx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function vx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Gt.T,r={};Gt.T=r;try{var o=n(s,i),l=Gt.S;l!==null&&l(r,o),_v(e,t,o)}catch(c){dm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Gt.T=a}}else try{a=n(s,i),_v(e,t,a)}catch(c){dm(e,t,c)}}function _v(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){vv(e,t,i)},function(i){return dm(e,t,i)}):vv(e,t,n)}function vv(e,t,n){t.status="fulfilled",t.value=n,yx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,vx(e,n)))}function dm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,yx(t),t=t.next;while(t!==i)}e.action=null}function yx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xx(e,t){return t}function yv(e,t){if(re){var n=Ee.formState;if(n!==null){t:{var i=Jt;if(re){if(Ue){e:{for(var s=Ue,a=bi;s.nodeType!==8;){if(!a){s=null;break e}if(s=Ti(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Ue=Ti(s.nextSibling),i=s.data==="F!";break t}}ga(i)}i=!1}i&&(t=n[0])}}return n=On(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xx,lastRenderedState:t},n.queue=i,n=Px.bind(null,Jt,i),i.dispatch=n,i=fm(!1),a=pg.bind(null,Jt,!1,i.queue),i=On(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=oT.bind(null,Jt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function xv(e){var t=Xe();return Sx(t,be,e)}function Sx(e,t,n){if(t=cg(e,t,xx)[0],e=Hu(Es)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=hc(t)}catch(r){throw r===So?Dh:r}else i=t;t=Xe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Jt.flags|=2048,ho(9,{destroy:void 0},lT.bind(null,s,n),null)),[i,a,e]}function lT(e,t){e.action=t}function Sv(e){var t=Xe(),n=be;if(n!==null)return Sx(t,n,e);Xe(),t=t.memoizedState,n=Xe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ho(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Jt.updateQueue,t===null&&(t=Uh(),Jt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Mx(){return Xe().memoizedState}function Vu(e,t,n,i){var s=On();Jt.flags|=e,s.memoizedState=ho(1|t,{destroy:void 0},n,i===void 0?null:i)}function Nh(e,t,n,i){var s=Xe();i=i===void 0?null:i;var a=s.memoizedState.inst;be!==null&&i!==null&&ig(i,be.memoizedState.deps)?s.memoizedState=ho(t,a,n,i):(Jt.flags|=e,s.memoizedState=ho(1|t,a,n,i))}function Mv(e,t){Vu(8390656,8,e,t)}function ug(e,t){Nh(2048,8,e,t)}function cT(e){Jt.flags|=4;var t=Jt.updateQueue;if(t===null)t=Uh(),Jt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function bx(e){var t=Xe().memoizedState;return cT({ref:t,nextImpl:e}),function(){if((me&2)!==0)throw Error(tt(440));return t.impl.apply(void 0,arguments)}}function Ex(e,t){return Nh(4,2,e,t)}function Tx(e,t){return Nh(4,4,e,t)}function Ax(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wx(e,t,n){n=n!=null?n.concat([e]):null,Nh(4,4,Ax.bind(null,t,e),n)}function hg(){}function Rx(e,t){var n=Xe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ig(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Cx(e,t){var n=Xe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ig(t,i[1]))return i[0];if(i=e(),$a){ea(!0);try{e()}finally{ea(!1)}}return n.memoizedState=[i,t],i}function fg(e,t,n){return n===void 0||(bs&1073741824)!==0&&(se&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=_S(),Jt.lanes|=e,va|=e,n)}function Dx(e,t,n,i){return ai(n,t)?n:uo.current!==null?(e=fg(e,n,i),ai(e,t)||(Ke=!0),e):(bs&42)===0||(bs&1073741824)!==0&&(se&261930)===0?(Ke=!0,e.memoizedState=n):(e=_S(),Jt.lanes|=e,va|=e,t)}function Ux(e,t,n,i,s){var a=ge.p;ge.p=a!==0&&8>a?a:8;var r=Gt.T,o={};Gt.T=o,pg(e,!1,t,n);try{var l=s(),c=Gt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=sT(l,i);Bl(e,t,u,si(e))}else Bl(e,t,i,si(e))}catch(d){Bl(e,t,{then:function(){},status:"rejected",reason:d},si())}finally{ge.p=a,r!==null&&o.types!==null&&(r.types=o.types),Gt.T=r}}function uT(){}function pm(e,t,n,i){if(e.tag!==5)throw Error(tt(476));var s=Lx(e).queue;Ux(e,s,t,Wa,n===null?uT:function(){return Nx(e),n(i)})}function Lx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Wa,baseState:Wa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:Wa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Nx(e){var t=Lx(e);t.next===null&&(t=e.alternate.memoizedState),Bl(e,t.next.queue,{},si())}function dg(){return mn(ec)}function Ix(){return Xe().memoizedState}function Ox(){return Xe().memoizedState}function hT(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=si();e=la(n);var i=ca(t,e,n);i!==null&&(Wn(i,t,n),Ol(i,t,n)),t={cache:jm()},e.payload=t;return}t=t.return}}function fT(e,t,n){var i=si();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ih(e)?zx(t,n):(n=Zm(e,t,n,i),n!==null&&(Wn(n,e,i),Bx(n,t,i)))}function Px(e,t,n){var i=si();Bl(e,t,n,i)}function Bl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ih(e))zx(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,ai(o,r))return Ch(e,t,s,0),Ee===null&&Rh(),!1}catch{}finally{}if(n=Zm(e,t,s,i),n!==null)return Wn(n,e,i),Bx(n,t,i),!0}return!1}function pg(e,t,n,i){if(i={lane:2,revertLane:bg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ih(e)){if(t)throw Error(tt(479))}else t=Zm(e,n,i,2),t!==null&&Wn(t,e,2)}function Ih(e){var t=e.alternate;return e===Jt||t!==null&&t===Jt}function zx(e,t){so=oh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,by(e,n)}}var jl={readContext:mn,use:Lh,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};jl.useEffectEvent=Ve;var Fx={readContext:mn,use:Lh,useCallback:function(e,t){return On().memoizedState=[e,t===void 0?null:t],e},useContext:mn,useEffect:Mv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Vu(4194308,4,Ax.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vu(4194308,4,e,t)},useInsertionEffect:function(e,t){Vu(4,2,e,t)},useMemo:function(e,t){var n=On();t=t===void 0?null:t;var i=e();if($a){ea(!0);try{e()}finally{ea(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=On();if(n!==void 0){var s=n(t);if($a){ea(!0);try{n(t)}finally{ea(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=fT.bind(null,Jt,e),[i.memoizedState,e]},useRef:function(e){var t=On();return e={current:e},t.memoizedState=e},useState:function(e){e=fm(e);var t=e.queue,n=Px.bind(null,Jt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hg,useDeferredValue:function(e,t){var n=On();return fg(n,e,t)},useTransition:function(){var e=fm(!1);return e=Ux.bind(null,Jt,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Jt,s=On();if(re){if(n===void 0)throw Error(tt(407));n=n()}else{if(n=t(),Ee===null)throw Error(tt(349));(se&127)!==0||fx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Mv(px.bind(null,i,a,e),[e]),i.flags|=2048,ho(9,{destroy:void 0},dx.bind(null,i,a,n,t),null),n},useId:function(){var e=On(),t=Ee.identifierPrefix;if(re){var n=Xi,i=ki;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=lh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=aT++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:dg,useFormState:yv,useActionState:yv,useOptimistic:function(e){var t=On();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=pg.bind(null,Jt,!0,n),n.dispatch=t,[e,t]},useMemoCache:lg,useCacheRefresh:function(){return On().memoizedState=hT.bind(null,Jt)},useEffectEvent:function(e){var t=On(),n={impl:e};return t.memoizedState=n,function(){if((me&2)!==0)throw Error(tt(440));return n.impl.apply(void 0,arguments)}}},mg={readContext:mn,use:Lh,useCallback:Rx,useContext:mn,useEffect:ug,useImperativeHandle:wx,useInsertionEffect:Ex,useLayoutEffect:Tx,useMemo:Cx,useReducer:Hu,useRef:Mx,useState:function(){return Hu(Es)},useDebugValue:hg,useDeferredValue:function(e,t){var n=Xe();return Dx(n,be.memoizedState,e,t)},useTransition:function(){var e=Hu(Es)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:hc(e),t]},useSyncExternalStore:hx,useId:Ix,useHostTransitionStatus:dg,useFormState:xv,useActionState:xv,useOptimistic:function(e,t){var n=Xe();return _x(n,be,e,t)},useMemoCache:lg,useCacheRefresh:Ox};mg.useEffectEvent=bx;var Hx={readContext:mn,use:Lh,useCallback:Rx,useContext:mn,useEffect:ug,useImperativeHandle:wx,useInsertionEffect:Ex,useLayoutEffect:Tx,useMemo:Cx,useReducer:Mp,useRef:Mx,useState:function(){return Mp(Es)},useDebugValue:hg,useDeferredValue:function(e,t){var n=Xe();return be===null?fg(n,e,t):Dx(n,be.memoizedState,e,t)},useTransition:function(){var e=Mp(Es)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:hc(e),t]},useSyncExternalStore:hx,useId:Ix,useHostTransitionStatus:dg,useFormState:Sv,useActionState:Sv,useOptimistic:function(e,t){var n=Xe();return be!==null?_x(n,be,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:lg,useCacheRefresh:Ox};Hx.useEffectEvent=bx;function bp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=si(),s=la(i);s.payload=t,n!=null&&(s.callback=n),t=ca(e,s,i),t!==null&&(Wn(t,e,i),Ol(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=si(),s=la(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ca(e,s,i),t!==null&&(Wn(t,e,i),Ol(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=si(),i=la(n);i.tag=2,t!=null&&(i.callback=t),t=ca(e,i,n),t!==null&&(Wn(t,e,n),Ol(t,e,n))}};function bv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Yl(n,i)||!Yl(s,a):!0}function Ev(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&mm.enqueueReplaceState(t,t.state,null)}function tr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Le({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Vx(e){th(e)}function Gx(e){console.error(e)}function kx(e){th(e)}function ch(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Tv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function gm(e,t,n){return n=la(n),n.tag=3,n.payload={element:null},n.callback=function(){ch(e,t)},n}function Xx(e){return e=la(e),e.tag=3,e}function Wx(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Tv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Tv(t,n,i),typeof s!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function dT(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&xo(t,n,s,!0),n=ri.current,n!==null){switch(n.tag){case 31:case 13:return Ei===null?ph():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===sh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Ip(e,i,s)),!1;case 22:return n.flags|=65536,i===sh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Ip(e,i,s)),!1}throw Error(tt(435,n.tag))}return Ip(e,i,s),ph(),!1}if(re)return t=ri.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==im&&(e=Error(tt(422),{cause:i}),Jl(Mi(e,n)))):(i!==im&&(t=Error(tt(423),{cause:i}),Jl(Mi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Mi(i,n),s=gm(e.stateNode,i,s),Sp(e,s),Ge!==4&&(Ge=2)),!1;var a=Error(tt(520),{cause:i});if(a=Mi(a,n),Vl===null?Vl=[a]:Vl.push(a),Ge!==4&&(Ge=2),t===null)return!0;i=Mi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=gm(n.stateNode,i,e),Sp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ua===null||!ua.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Xx(s),Wx(s,e,n,i),Sp(n,s),!1}n=n.return}while(n!==null);return!1}var gg=Error(tt(461)),Ke=!1;function fn(e,t,n,i){t.child=e===null?ax(t,null,n,i):ja(t,e.child,n,i)}function Av(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Qa(t),i=sg(e,t,n,r,a,s),o=ag(),e!==null&&!Ke?(rg(e,t,s),Ts(e,t,s)):(re&&o&&Km(t),t.flags|=1,fn(e,t,i,s),t.child)}function wv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Jm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,qx(e,t,a,i,s)):(e=Bu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!_g(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Yl,n(r,i)&&e.ref===t.ref)return Ts(e,t,s)}return t.flags|=1,e=ys(a,i),e.ref=t.ref,e.return=t,t.child=e}function qx(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Yl(a,i)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=i=a,_g(e,s))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,Ts(e,t,s)}return _m(e,t,n,i,s)}function Yx(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Rv(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fu(t,a!==null?a.cachePool:null),a!==null?gv(t,a):um(),lx(t);else return i=t.lanes=536870912,Rv(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Fu(t,a.cachePool),gv(t,a),$s(t),t.memoizedState=null):(e!==null&&Fu(t,null),um(),$s(t));return fn(e,t,s,n),t.child}function Cl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rv(e,t,n,i,s){var a=$m();return a=a===null?null:{parent:Je._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Fu(t,null),um(),lx(t),e!==null&&xo(e,t,i,!0),t.childLanes=s,null}function Gu(e,t){return t=uh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Cv(e,t,n){return ja(t,e.child,null,n),e=Gu(t,t.pendingProps),e.flags|=2,jn(t),t.memoizedState=null,e}function pT(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(i.mode==="hidden")return e=Gu(t,i),t.lanes=536870912,Cl(null,e);if(hm(t),(e=Ue)?(e=FS(e,bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},n=jy(e),n.return=t,t.child=n,pn=t,Ue=null)):e=null,e===null)throw ga(t);return t.lanes=536870912,null}return Gu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(hm(t),s)if(t.flags&256)t.flags&=-257,t=Cv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(tt(558));else if(Ke||xo(e,t,n,!1),s=(n&e.childLanes)!==0,Ke||s){if(i=Ee,i!==null&&(r=Ey(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,sr(e,r),Wn(i,e,r),gg;ph(),t=Cv(e,t,n)}else e=a.treeContext,Ue=Ti(r.nextSibling),pn=t,re=!0,oa=null,bi=!1,e!==null&&tx(t,e),t=Gu(t,i),t.flags|=4096;return t}return e=ys(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ku(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(tt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _m(e,t,n,i,s){return Qa(t),n=sg(e,t,n,i,void 0,s),i=ag(),e!==null&&!Ke?(rg(e,t,s),Ts(e,t,s)):(re&&i&&Km(t),t.flags|=1,fn(e,t,n,s),t.child)}function Dv(e,t,n,i,s,a){return Qa(t),t.updateQueue=null,n=ux(t,i,n,s),cx(e),i=ag(),e!==null&&!Ke?(rg(e,t,a),Ts(e,t,a)):(re&&i&&Km(t),t.flags|=1,fn(e,t,n,a),t.child)}function Uv(e,t,n,i,s){if(Qa(t),t.stateNode===null){var a=Jr,r=n.contextType;typeof r=="object"&&r!==null&&(a=mn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=mm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},eg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?mn(r):Jr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(bp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&mm.enqueueReplaceState(a,a.state,null),zl(t,i,a,s),Pl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=tr(n,o);a.props=l;var c=a.context,u=n.contextType;r=Jr,typeof u=="object"&&u!==null&&(r=mn(u));var d=n.getDerivedStateFromProps;u=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Ev(t,a,i,r),Ks=!1;var f=t.memoizedState;a.state=f,zl(t,i,a,s),Pl(),c=t.memoizedState,o||f!==c||Ks?(typeof d=="function"&&(bp(t,n,d,i),c=t.memoizedState),(l=Ks||bv(t,n,l,i,f,c,r))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,lm(e,t),r=t.memoizedProps,u=tr(n,r),a.props=u,d=t.pendingProps,f=a.context,c=n.contextType,l=Jr,typeof c=="object"&&c!==null&&(l=mn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||f!==l)&&Ev(t,a,i,l),Ks=!1,f=t.memoizedState,a.state=f,zl(t,i,a,s),Pl();var p=t.memoizedState;r!==d||f!==p||Ks||e!==null&&e.dependencies!==null&&ih(e.dependencies)?(typeof o=="function"&&(bp(t,n,o,i),p=t.memoizedState),(u=Ks||bv(t,n,u,i,f,p,l)||e!==null&&e.dependencies!==null&&ih(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,ku(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=ja(t,e.child,null,s),t.child=ja(t,null,n,s)):fn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Ts(e,t,s),e}function Lv(e,t,n,i){return Ka(),t.flags|=256,fn(e,t,n,i),t.child}var Ep={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tp(e){return{baseLanes:e,cachePool:nx()}}function Ap(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ti),e}function Zx(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(s?js(t):$s(t),(e=Ue)?(e=FS(e,bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},n=jy(e),n.return=t,t.child=n,pn=t,Ue=null)):e=null,e===null)throw ga(t);return Um(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?($s(t),s=t.mode,o=uh({mode:"hidden",children:o},s),i=qa(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Tp(n),i.childLanes=Ap(e,r,n),t.memoizedState=Ep,Cl(null,i)):(js(t),vm(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(js(t),t.flags&=-257,t=wp(e,t,n)):t.memoizedState!==null?($s(t),t.child=e.child,t.flags|=128,t=null):($s(t),o=i.fallback,s=t.mode,i=uh({mode:"visible",children:i.children},s),o=qa(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ja(t,e.child,null,n),i=t.child,i.memoizedState=Tp(n),i.childLanes=Ap(e,r,n),t.memoizedState=Ep,t=Cl(null,i));else if(js(t),Um(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(tt(419)),i.stack="",i.digest=r,Jl({value:i,source:null,stack:null}),t=wp(e,t,n)}else if(Ke||xo(e,t,n,!1),r=(n&e.childLanes)!==0,Ke||r){if(r=Ee,r!==null&&(i=Ey(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,sr(e,i),Wn(r,e,i),gg;Dm(o)||ph(),t=wp(e,t,n)}else Dm(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ue=Ti(o.nextSibling),pn=t,re=!0,oa=null,bi=!1,e!==null&&tx(t,e),t=vm(t,i.children),t.flags|=4096);return t}return s?($s(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=ys(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ys(c,o):(o=qa(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Cl(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Tp(n):(s=o.cachePool,s!==null?(l=Je._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=nx(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Ap(e,r,n),t.memoizedState=Ep,Cl(e.child,i)):(js(t),n=e.child,e=n.sibling,n=ys(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function vm(e,t){return t=uh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function uh(e,t){return e=$n(22,e,null,t),e.lanes=0,e}function wp(e,t,n){return ja(t,e.child,null,n),e=vm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),am(e.return,t,n)}function Rp(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Jx(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=ke.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,we(ke,r),fn(e,t,i,n),i=re?Zl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nv(e,n,t);else if(e.tag===19)Nv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&rh(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Rp(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&rh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Rp(t,!0,n,null,a,i);break;case"together":Rp(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Ts(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),va|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(xo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(tt(153));if(t.child!==null){for(e=t.child,n=ys(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ys(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _g(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ih(e)))}function mT(e,t,n){switch(t.tag){case 3:Ku(t,t.stateNode.containerInfo),Qs(t,Je,e.memoizedState.cache),Ka();break;case 27:case 5:qp(t);break;case 4:Ku(t,t.stateNode.containerInfo);break;case 10:Qs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,hm(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(js(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Zx(e,t,n):(js(t),e=Ts(e,t,n),e!==null?e.sibling:null);js(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(xo(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Jx(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),we(ke,ke.current),i)break;return null;case 22:return t.lanes=0,Yx(e,t,n,t.pendingProps);case 24:Qs(t,Je,e.memoizedState.cache)}return Ts(e,t,n)}function Kx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!_g(e,n)&&(t.flags&128)===0)return Ke=!1,mT(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,re&&(t.flags&1048576)!==0&&$y(t,Zl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e=="function")Jm(e)?(i=tr(e,i),t.tag=1,t=Uv(null,t,e,i,n)):(t.tag=0,t=_m(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Om){t.tag=11,t=Av(null,t,e,i,n);break t}else if(s===Pm){t.tag=14,t=wv(null,t,e,i,n);break t}}throw t=Xp(e)||e,Error(tt(306,t,""))}}return t;case 0:return _m(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=tr(i,t.pendingProps),Uv(e,t,i,s,n);case 3:t:{if(Ku(t,t.stateNode.containerInfo),e===null)throw Error(tt(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,lm(e,t),zl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Qs(t,Je,i),i!==a.cache&&rm(t,[Je],n,!0),Pl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Lv(e,t,i,n);break t}else if(i!==s){s=Mi(Error(tt(424)),t),Jl(s),t=Lv(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Ti(e.firstChild),pn=t,re=!0,oa=null,bi=!0,n=ax(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ka(),i===s){t=Ts(e,t,n);break t}fn(e,t,i,n)}t=t.child}return t;case 26:return ku(e,t),e===null?(n=ey(t.type,null,t.pendingProps,null))?t.memoizedState=n:re||(n=t.type,e=t.pendingProps,i=vh(ra.current).createElement(n),i[dn]=t,i[qn]=e,gn(i,n,e),rn(i),t.stateNode=i):t.memoizedState=ey(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qp(t),e===null&&re&&(i=t.stateNode=HS(t.type,t.pendingProps,ra.current),pn=t,bi=!0,s=Ue,xa(t.type)?(Lm=s,Ue=Ti(i.firstChild)):Ue=s),fn(e,t,t.pendingProps.children,n),ku(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((s=i=Ue)&&(i=kT(i,t.type,t.pendingProps,bi),i!==null?(t.stateNode=i,pn=t,Ue=Ti(i.firstChild),bi=!1,s=!0):s=!1),s||ga(t)),qp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Rm(s,a)?i=null:r!==null&&Rm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=sg(e,t,rT,null,null,n),ec._currentValue=s),ku(e,t),fn(e,t,i,n),t.child;case 6:return e===null&&re&&((e=n=Ue)&&(n=XT(n,t.pendingProps,bi),n!==null?(t.stateNode=n,pn=t,Ue=null,e=!0):e=!1),e||ga(t)),null;case 13:return Zx(e,t,n);case 4:return Ku(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ja(t,null,i,n):fn(e,t,i,n),t.child;case 11:return Av(e,t,t.type,t.pendingProps,n);case 7:return fn(e,t,t.pendingProps,n),t.child;case 8:return fn(e,t,t.pendingProps.children,n),t.child;case 12:return fn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Qs(t,t.type,i.value),fn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Qa(t),s=mn(s),i=i(s),t.flags|=1,fn(e,t,i,n),t.child;case 14:return wv(e,t,t.type,t.pendingProps,n);case 15:return qx(e,t,t.type,t.pendingProps,n);case 19:return Jx(e,t,n);case 31:return pT(e,t,n);case 22:return Yx(e,t,n,t.pendingProps);case 24:return Qa(t),i=mn(Je),e===null?(s=$m(),s===null&&(s=Ee,a=jm(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},eg(t),Qs(t,Je,s)):((e.lanes&n)!==0&&(lm(e,t),zl(t,null,null,n),Pl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Qs(t,Je,i)):(i=a.cache,Qs(t,Je,i),i!==s.cache&&rm(t,[Je],n,!0))),fn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(tt(156,t.tag))}function us(e){e.flags|=4}function Cp(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(xS())e.flags|=8192;else throw Za=sh,tg}else e.flags&=-16777217}function Iv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kS(t))if(xS())e.flags|=8192;else throw Za=sh,tg}function wu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Sy():536870912,e.lanes|=t,fo|=t)}function Ml(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function gT(e,t,n){var i=t.pendingProps;switch(Qm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),xs(Je),ro(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zr(t)?us(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xp())),De(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(us(t),a!==null?(De(t),Iv(t,a)):(De(t),Cp(t,s,null,i,n))):a?a!==e.memoizedState?(us(t),De(t),Iv(t,a)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&us(t),De(t),Cp(t,s,e,i,n)),null;case 27:if(Qu(t),n=ra.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&us(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return De(t),null}e=qi.current,zr(t)?cv(t,e):(e=HS(s,i,n),t.stateNode=e,us(t))}return De(t),null;case 5:if(Qu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&us(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return De(t),null}if(a=qi.current,zr(t))cv(t,a);else{var r=vh(ra.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[dn]=t,a[qn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(gn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&us(t)}}return De(t),Cp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&us(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(tt(166));if(e=ra.current,zr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=pn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[dn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||PS(e.nodeValue,n)),e||ga(t,!0)}else e=vh(e).createTextNode(i),e[dn]=t,t.stateNode=e}return De(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=zr(t),n!==null){if(e===null){if(!i)throw Error(tt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(557));e[dn]=t}else Ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else n=xp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(jn(t),t):(jn(t),null);if((t.flags&128)!==0)throw Error(tt(558))}return De(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=zr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(tt(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(tt(317));s[dn]=t}else Ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),s=!1}else s=xp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(jn(t),t):(jn(t),null)}return jn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),wu(t,t.updateQueue),De(t),null);case 4:return ro(),e===null&&Eg(t.stateNode.containerInfo),De(t),null;case 10:return xs(t.type),De(t),null;case 19:if(on(ke),i=t.memoizedState,i===null)return De(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Ml(i,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=rh(e),a!==null){for(t.flags|=128,Ml(i,!1),e=a.updateQueue,t.updateQueue=e,wu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Qy(n,e),n=n.sibling;return we(ke,ke.current&1|2),re&&ps(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ei()>fh&&(t.flags|=128,s=!0,Ml(i,!1),t.lanes=4194304)}else{if(!s)if(e=rh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,wu(t,e),Ml(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!re)return De(t),null}else 2*ei()-i.renderingStartTime>fh&&n!==536870912&&(t.flags|=128,s=!0,Ml(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ei(),e.sibling=null,n=ke.current,we(ke,s?n&1|2:n&1),re&&ps(t,i.treeForkCount),e):(De(t),null);case 22:case 23:return jn(t),ng(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&wu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&on(Ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xs(Je),De(t),null;case 25:return null;case 30:return null}throw Error(tt(156,t.tag))}function _T(e,t){switch(Qm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xs(Je),ro(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Qu(t),null;case 31:if(t.memoizedState!==null){if(jn(t),t.alternate===null)throw Error(tt(340));Ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(tt(340));Ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return on(ke),null;case 4:return ro(),null;case 10:return xs(t.type),null;case 22:case 23:return jn(t),ng(),e!==null&&on(Ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xs(Je),null;case 25:return null;default:return null}}function Qx(e,t){switch(Qm(t),t.tag){case 3:xs(Je),ro();break;case 26:case 27:case 5:Qu(t);break;case 4:ro();break;case 31:t.memoizedState!==null&&jn(t);break;case 13:jn(t);break;case 19:on(ke);break;case 10:xs(t.type);break;case 22:case 23:jn(t),ng(),e!==null&&on(Ya);break;case 24:xs(Je)}}function fc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){xe(t,t.return,o)}}function _a(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){xe(s,l,u)}}}i=i.next}while(i!==a)}}catch(u){xe(t,t.return,u)}}function jx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ox(t,n)}catch(i){xe(e,e.return,i)}}}function $x(e,t,n){n.props=tr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){xe(e,t,i)}}function Fl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){xe(e,t,s)}}function Wi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){xe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){xe(e,t,s)}else n.current=null}function tS(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){xe(e,e.return,s)}}function Dp(e,t,n){try{var i=e.stateNode;zT(i,e.type,n,t),i[qn]=t}catch(s){xe(e,e.return,s)}}function eS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xa(e.type)||e.tag===4}function Up(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||eS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ym(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_s));else if(i!==4&&(i===27&&xa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ym(e,t,n),e=e.sibling;e!==null;)ym(e,t,n),e=e.sibling}function hh(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&xa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(hh(e,t,n),e=e.sibling;e!==null;)hh(e,t,n),e=e.sibling}function nS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);gn(t,i,n),t[dn]=e,t[qn]=n}catch(a){xe(e,e.return,a)}}var ms=!1,Ze=!1,Lp=!1,Ov=typeof WeakSet=="function"?WeakSet:Set,an=null;function vT(e,t){if(e=e.containerInfo,Am=Mh,e=ky(e),qm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,u=0,d=e,f=null;e:for(;;){for(var p;d!==n||s!==0&&d.nodeType!==3||(o=r+s),d!==a||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===s&&(o=r),f===a&&++u===i&&(l=r),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wm={focusedElem:e,selectionRange:n},Mh=!1,an=t;an!==null;)if(t=an,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,an=e;else for(;an!==null;){switch(t=an,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var g=tr(n.type,s);e=i.getSnapshotBeforeUpdate(g,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(S){xe(n,n.return,S)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Cm(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(tt(163))}if(e=t.sibling,e!==null){e.return=t.return,an=e;break}an=t.return}}function iS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:fs(e,n),i&4&&fc(5,n);break;case 1:if(fs(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){xe(n,n.return,r)}else{var s=tr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){xe(n,n.return,r)}}i&64&&jx(n),i&512&&Fl(n,n.return);break;case 3:if(fs(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ox(e,t)}catch(r){xe(n,n.return,r)}}break;case 27:t===null&&i&4&&nS(n);case 26:case 5:fs(e,n),t===null&&i&4&&tS(n),i&512&&Fl(n,n.return);break;case 12:fs(e,n);break;case 31:fs(e,n),i&4&&rS(e,n);break;case 13:fs(e,n),i&4&&oS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=wT.bind(null,n),WT(e,n))));break;case 22:if(i=n.memoizedState!==null||ms,!i){t=t!==null&&t.memoizedState!==null||Ze,s=ms;var a=Ze;ms=i,(Ze=t)&&!a?ds(e,n,(n.subtreeFlags&8772)!==0):fs(e,n),ms=s,Ze=a}break;case 30:break;default:fs(e,n)}}function sS(e){var t=e.alternate;t!==null&&(e.alternate=null,sS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Hm(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,kn=!1;function hs(e,t,n){for(n=n.child;n!==null;)aS(e,t,n),n=n.sibling}function aS(e,t,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(ac,n)}catch{}switch(n.tag){case 26:Ze||Wi(n,t),hs(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ze||Wi(n,t);var i=Be,s=kn;xa(n.type)&&(Be=n.stateNode,kn=!1),hs(e,t,n),kl(n.stateNode),Be=i,kn=s;break;case 5:Ze||Wi(n,t);case 6:if(i=Be,s=kn,Be=null,hs(e,t,n),Be=i,kn=s,Be!==null)if(kn)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(n.stateNode)}catch(a){xe(n,t,a)}else try{Be.removeChild(n.stateNode)}catch(a){xe(n,t,a)}break;case 18:Be!==null&&(kn?(e=Be,Kv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),_o(e)):Kv(Be,n.stateNode));break;case 4:i=Be,s=kn,Be=n.stateNode.containerInfo,kn=!0,hs(e,t,n),Be=i,kn=s;break;case 0:case 11:case 14:case 15:_a(2,n,t),Ze||_a(4,n,t),hs(e,t,n);break;case 1:Ze||(Wi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&$x(n,t,i)),hs(e,t,n);break;case 21:hs(e,t,n);break;case 22:Ze=(i=Ze)||n.memoizedState!==null,hs(e,t,n),Ze=i;break;default:hs(e,t,n)}}function rS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_o(e)}catch(n){xe(t,t.return,n)}}}function oS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_o(e)}catch(n){xe(t,t.return,n)}}function yT(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ov),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ov),t;default:throw Error(tt(435,e.tag))}}function Ru(e,t){var n=yT(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=RT.bind(null,e,i);i.then(s,s)}})}function Vn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(xa(o.type)){Be=o.stateNode,kn=!1;break t}break;case 5:Be=o.stateNode,kn=!1;break t;case 3:case 4:Be=o.stateNode.containerInfo,kn=!0;break t}o=o.return}if(Be===null)throw Error(tt(160));aS(a,r,s),Be=null,kn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)lS(t,e),t=t.sibling}var Di=null;function lS(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(t,e),Gn(e),i&4&&(_a(3,e,e.return),fc(3,e),_a(5,e,e.return));break;case 1:Vn(t,e),Gn(e),i&512&&(Ze||n===null||Wi(n,n.return)),i&64&&ms&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Di;if(Vn(t,e),Gn(e),i&512&&(Ze||n===null||Wi(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[lc]||a[dn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),gn(a,i,n),a[dn]=e,rn(a),i=a;break t;case"link":var r=iy("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),gn(a,i,n),s.head.appendChild(a);break;case"meta":if(r=iy("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),gn(a,i,n),s.head.appendChild(a);break;default:throw Error(tt(468,i))}a[dn]=e,rn(a),i=a}e.stateNode=i}else sy(s,e.type,e.stateNode);else e.stateNode=ny(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?sy(s,e.type,e.stateNode):ny(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Dp(e,e.memoizedProps,n.memoizedProps)}break;case 27:Vn(t,e),Gn(e),i&512&&(Ze||n===null||Wi(n,n.return)),n!==null&&i&4&&Dp(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Vn(t,e),Gn(e),i&512&&(Ze||n===null||Wi(n,n.return)),e.flags&32){s=e.stateNode;try{lo(s,"")}catch(g){xe(e,e.return,g)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Dp(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Lp=!0);break;case 6:if(Vn(t,e),Gn(e),i&4){if(e.stateNode===null)throw Error(tt(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(g){xe(e,e.return,g)}}break;case 3:if(qu=null,s=Di,Di=yh(t.containerInfo),Vn(t,e),Di=s,Gn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(t.containerInfo)}catch(g){xe(e,e.return,g)}Lp&&(Lp=!1,cS(e));break;case 4:i=Di,Di=yh(e.stateNode.containerInfo),Vn(t,e),Gn(e),Di=i;break;case 12:Vn(t,e),Gn(e);break;case 31:Vn(t,e),Gn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ru(e,i)));break;case 13:Vn(t,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Oh=ei()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ru(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ms,u=Ze;if(ms=c||s,Ze=u||l,Vn(t,e),Ze=u,ms=c,Gn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||ms||Ze||Xa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(g){xe(l,l.return,g)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(g){xe(l,l.return,g)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;s?Qv(p,!0):Qv(l.stateNode,!1)}catch(g){xe(l,l.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ru(e,n))));break;case 19:Vn(t,e),Gn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ru(e,i)));break;case 30:break;case 21:break;default:Vn(t,e),Gn(e)}}function Gn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(eS(i)){n=i;break}i=i.return}if(n==null)throw Error(tt(160));switch(n.tag){case 27:var s=n.stateNode,a=Up(e);hh(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(lo(r,""),n.flags&=-33);var o=Up(e);hh(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Up(e);ym(e,c,l);break;default:throw Error(tt(161))}}catch(u){xe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;cS(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)iS(e,t.alternate,t),t=t.sibling}function Xa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:_a(4,t,t.return),Xa(t);break;case 1:Wi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&$x(t,t.return,n),Xa(t);break;case 27:kl(t.stateNode);case 26:case 5:Wi(t,t.return),Xa(t);break;case 22:t.memoizedState===null&&Xa(t);break;case 30:Xa(t);break;default:Xa(t)}e=e.sibling}}function ds(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:ds(s,a,n),fc(4,a);break;case 1:if(ds(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){xe(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)rx(l[s],o)}catch(c){xe(i,i.return,c)}}n&&r&64&&jx(a),Fl(a,a.return);break;case 27:nS(a);case 26:case 5:ds(s,a,n),n&&i===null&&r&4&&tS(a),Fl(a,a.return);break;case 12:ds(s,a,n);break;case 31:ds(s,a,n),n&&r&4&&rS(s,a);break;case 13:ds(s,a,n),n&&r&4&&oS(s,a);break;case 22:a.memoizedState===null&&ds(s,a,n),Fl(a,a.return);break;case 30:break;default:ds(s,a,n)}t=t.sibling}}function vg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&uc(n))}function yg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&uc(e))}function Ci(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)uS(e,t,n,i),t=t.sibling}function uS(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Ci(e,t,n,i),s&2048&&fc(9,t);break;case 1:Ci(e,t,n,i);break;case 3:Ci(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&uc(e)));break;case 12:if(s&2048){Ci(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){xe(t,t.return,l)}}else Ci(e,t,n,i);break;case 31:Ci(e,t,n,i);break;case 13:Ci(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?Ci(e,t,n,i):Hl(e,t):a._visibility&2?Ci(e,t,n,i):(a._visibility|=2,Fr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&vg(r,t);break;case 24:Ci(e,t,n,i),s&2048&&yg(t.alternate,t);break;default:Ci(e,t,n,i)}}function Fr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Fr(a,r,o,l,s),fc(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?Fr(a,r,o,l,s):Hl(a,r):(u._visibility|=2,Fr(a,r,o,l,s)),s&&c&2048&&vg(r.alternate,r);break;case 24:Fr(a,r,o,l,s),s&&c&2048&&yg(r.alternate,r);break;default:Fr(a,r,o,l,s)}t=t.sibling}}function Hl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Hl(n,i),s&2048&&vg(i.alternate,i);break;case 24:Hl(n,i),s&2048&&yg(i.alternate,i);break;default:Hl(n,i)}t=t.sibling}}var Dl=8192;function Br(e,t,n){if(e.subtreeFlags&Dl)for(e=e.child;e!==null;)hS(e,t,n),e=e.sibling}function hS(e,t,n){switch(e.tag){case 26:Br(e,t,n),e.flags&Dl&&e.memoizedState!==null&&iA(n,Di,e.memoizedState,e.memoizedProps);break;case 5:Br(e,t,n);break;case 3:case 4:var i=Di;Di=yh(e.stateNode.containerInfo),Br(e,t,n),Di=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Dl,Dl=16777216,Br(e,t,n),Dl=i):Br(e,t,n));break;default:Br(e,t,n)}}function fS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function bl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];an=i,pS(i,e)}fS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dS(e),e=e.sibling}function dS(e){switch(e.tag){case 0:case 11:case 15:bl(e),e.flags&2048&&_a(9,e,e.return);break;case 3:bl(e);break;case 12:bl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xu(e)):bl(e);break;default:bl(e)}}function Xu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];an=i,pS(i,e)}fS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_a(8,t,t.return),Xu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xu(t));break;default:Xu(t)}e=e.sibling}}function pS(e,t){for(;an!==null;){var n=an;switch(n.tag){case 0:case 11:case 15:_a(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:uc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,an=i;else t:for(n=e;an!==null;){i=an;var s=i.sibling,a=i.return;if(sS(i),i===n){an=null;break t}if(s!==null){s.return=a,an=s;break t}an=a}}}var xT={getCacheForType:function(e){var t=mn(Je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return mn(Je).controller.signal}},ST=typeof WeakMap=="function"?WeakMap:Map,me=0,Ee=null,ie=null,se=0,ye=0,Qn=null,ia=!1,Mo=!1,xg=!1,As=0,Ge=0,va=0,Ja=0,Sg=0,ti=0,fo=0,Vl=null,Xn=null,xm=!1,Oh=0,mS=0,fh=1/0,dh=null,ua=null,je=0,ha=null,po=null,Ss=0,Sm=0,Mm=null,gS=null,Gl=0,bm=null;function si(){return(me&2)!==0&&se!==0?se&-se:Gt.T!==null?bg():Ty()}function _S(){if(ti===0)if((se&536870912)===0||re){var e=vu;vu<<=1,(vu&3932160)===0&&(vu=262144),ti=e}else ti=536870912;return e=ri.current,e!==null&&(e.flags|=32),ti}function Wn(e,t,n){(e===Ee&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(mo(e,0),sa(e,se,ti,!1)),oc(e,n),((me&2)===0||e!==Ee)&&(e===Ee&&((me&2)===0&&(Ja|=n),Ge===4&&sa(e,se,ti,!1)),Zi(e))}function vS(e,t,n){if((me&6)!==0)throw Error(tt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||rc(e,t),s=i?ET(e,t):Np(e,t,!0),a=i;do{if(s===0){Mo&&!i&&sa(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!MT(n)){s=Np(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Vl;var l=o.current.memoizedState.isDehydrated;if(l&&(mo(o,r).flags|=256),r=Np(o,r,!1),r!==2){if(xg&&!l){o.errorRecoveryDisabledLanes|=a,Ja|=a,s=4;break t}a=Xn,Xn=s,a!==null&&(Xn===null?Xn=a:Xn.push.apply(Xn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){mo(e,0),sa(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(tt(345));case 4:if((t&4194048)!==t)break;case 6:sa(i,t,ti,!ia);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(tt(329))}if((t&62914560)===t&&(s=Oh+300-ei(),10<s)){if(sa(i,t,ti,!ia),Eh(i,0,!0)!==0)break t;Ss=t,i.timeoutHandle=BS(Pv.bind(null,i,n,Xn,dh,xm,t,ti,Ja,fo,ia,a,"Throttled",-0,0),s);break t}Pv(i,n,Xn,dh,xm,t,ti,Ja,fo,ia,a,null,-0,0)}}break}while(!0);Zi(e)}function Pv(e,t,n,i,s,a,r,o,l,c,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_s},hS(t,a,d);var g=(a&62914560)===a?Oh-ei():(a&4194048)===a?mS-ei():0;if(g=sA(d,g),g!==null){Ss=a,e.cancelPendingCommit=g(Bv.bind(null,e,t,a,n,i,s,r,o,l,u,d,null,f,p)),sa(e,a,r,!c);return}}Bv(e,t,a,n,i,s,r,o,l)}function MT(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!ai(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sa(e,t,n,i){t&=~Sg,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-ii(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&My(e,n,t)}function Ph(){return(me&6)===0?(dc(0,!1),!1):!0}function Mg(){if(ie!==null){if(ye===0)var e=ie.return;else e=ie,vs=ar=null,og(e),io=null,Kl=0,e=ie;for(;e!==null;)Qx(e.alternate,e),e=e.return;ie=null}}function mo(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,HT(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ss=0,Mg(),Ee=e,ie=n=ys(e.current,null),se=t,ye=0,Qn=null,ia=!1,Mo=rc(e,t),xg=!1,fo=ti=Sg=Ja=va=Ge=0,Xn=Vl=null,xm=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-ii(i),a=1<<s;t|=e[s],i&=~a}return As=t,Rh(),n}function yS(e,t){Jt=null,Gt.H=jl,t===So||t===Dh?(t=pv(),ye=3):t===tg?(t=pv(),ye=4):ye=t===gg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Qn=t,ie===null&&(Ge=1,ch(e,Mi(t,e.current)))}function xS(){var e=ri.current;return e===null?!0:(se&4194048)===se?Ei===null:(se&62914560)===se||(se&536870912)!==0?e===Ei:!1}function SS(){var e=Gt.H;return Gt.H=jl,e===null?jl:e}function MS(){var e=Gt.A;return Gt.A=xT,e}function ph(){Ge=4,ia||(se&4194048)!==se&&ri.current!==null||(Mo=!0),(va&134217727)===0&&(Ja&134217727)===0||Ee===null||sa(Ee,se,ti,!1)}function Np(e,t,n){var i=me;me|=2;var s=SS(),a=MS();(Ee!==e||se!==t)&&(dh=null,mo(e,t)),t=!1;var r=Ge;t:do try{if(ye!==0&&ie!==null){var o=ie,l=Qn;switch(ye){case 8:Mg(),r=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(t=!0);var c=ye;if(ye=0,Qn=null,jr(e,o,l,c),n&&Mo){r=0;break t}break;default:c=ye,ye=0,Qn=null,jr(e,o,l,c)}}bT(),r=Ge;break}catch(u){yS(e,u)}while(!0);return t&&e.shellSuspendCounter++,vs=ar=null,me=i,Gt.H=s,Gt.A=a,ie===null&&(Ee=null,se=0,Rh()),r}function bT(){for(;ie!==null;)bS(ie)}function ET(e,t){var n=me;me|=2;var i=SS(),s=MS();Ee!==e||se!==t?(dh=null,fh=ei()+500,mo(e,t)):Mo=rc(e,t);t:do try{if(ye!==0&&ie!==null){t=ie;var a=Qn;e:switch(ye){case 1:ye=0,Qn=null,jr(e,t,a,1);break;case 2:case 9:if(dv(a)){ye=0,Qn=null,zv(t);break}t=function(){ye!==2&&ye!==9||Ee!==e||(ye=7),Zi(e)},a.then(t,t);break t;case 3:ye=7;break t;case 4:ye=5;break t;case 7:dv(a)?(ye=0,Qn=null,zv(t)):(ye=0,Qn=null,jr(e,t,a,7));break;case 5:var r=null;switch(ie.tag){case 26:r=ie.memoizedState;case 5:case 27:var o=ie;if(r?kS(r):o.stateNode.complete){ye=0,Qn=null;var l=o.sibling;if(l!==null)ie=l;else{var c=o.return;c!==null?(ie=c,zh(c)):ie=null}break e}}ye=0,Qn=null,jr(e,t,a,5);break;case 6:ye=0,Qn=null,jr(e,t,a,6);break;case 8:Mg(),Ge=6;break t;default:throw Error(tt(462))}}TT();break}catch(u){yS(e,u)}while(!0);return vs=ar=null,Gt.H=i,Gt.A=s,me=n,ie!==null?0:(Ee=null,se=0,Rh(),Ge)}function TT(){for(;ie!==null&&!Z1();)bS(ie)}function bS(e){var t=Kx(e.alternate,e,As);e.memoizedProps=e.pendingProps,t===null?zh(e):ie=t}function zv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Dv(n,t,t.pendingProps,t.type,void 0,se);break;case 11:t=Dv(n,t,t.pendingProps,t.type.render,t.ref,se);break;case 5:og(t);default:Qx(n,t),t=ie=Qy(t,As),t=Kx(n,t,As)}e.memoizedProps=e.pendingProps,t===null?zh(e):ie=t}function jr(e,t,n,i){vs=ar=null,og(t),io=null,Kl=0;var s=t.return;try{if(dT(e,s,t,n,se)){Ge=1,ch(e,Mi(n,e.current)),ie=null;return}}catch(a){if(s!==null)throw ie=s,a;Ge=1,ch(e,Mi(n,e.current)),ie=null;return}t.flags&32768?(re||i===1?e=!0:Mo||(se&536870912)!==0?e=!1:(ia=e=!0,(i===2||i===9||i===3||i===6)&&(i=ri.current,i!==null&&i.tag===13&&(i.flags|=16384))),ES(t,e)):zh(t)}function zh(e){var t=e;do{if((t.flags&32768)!==0){ES(t,ia);return}e=t.return;var n=gT(t.alternate,t,As);if(n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Ge===0&&(Ge=5)}function ES(e,t){do{var n=_T(e.alternate,e);if(n!==null){n.flags&=32767,ie=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=n}while(e!==null);Ge=6,ie=null}function Bv(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do Bh();while(je!==0);if((me&6)!==0)throw Error(tt(327));if(t!==null){if(t===e.current)throw Error(tt(177));if(a=t.lanes|t.childLanes,a|=Ym,sE(e,n,a,r,o,l),e===Ee&&(ie=Ee=null,se=0),po=t,ha=e,Ss=n,Sm=a,Mm=s,gS=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,CT(ju,function(){return CS(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Gt.T,Gt.T=null,s=ge.p,ge.p=2,r=me,me|=4;try{vT(e,t,n)}finally{me=r,ge.p=s,Gt.T=i}}je=1,TS(),AS(),wS()}}function TS(){if(je===1){je=0;var e=ha,t=po,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Gt.T,Gt.T=null;var i=ge.p;ge.p=2;var s=me;me|=4;try{lS(t,e);var a=wm,r=ky(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&Gy(o.ownerDocument.documentElement,o)){if(l!==null&&qm(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),g=o.textContent.length,S=Math.min(l.start,g),m=l.end===void 0?S:Math.min(l.end,g);!p.extend&&S>m&&(r=m,m=S,S=r);var h=rv(o,S),_=rv(o,m);if(h&&_&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==_.node||p.focusOffset!==_.offset)){var v=d.createRange();v.setStart(h.node,h.offset),p.removeAllRanges(),S>m?(p.addRange(v),p.extend(_.node,_.offset)):(v.setEnd(_.node,_.offset),p.addRange(v))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Mh=!!Am,wm=Am=null}finally{me=s,ge.p=i,Gt.T=n}}e.current=t,je=2}}function AS(){if(je===2){je=0;var e=ha,t=po,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Gt.T,Gt.T=null;var i=ge.p;ge.p=2;var s=me;me|=4;try{iS(e,t.alternate,t)}finally{me=s,ge.p=i,Gt.T=n}}je=3}}function wS(){if(je===4||je===3){je=0,J1();var e=ha,t=po,n=Ss,i=gS;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?je=5:(je=0,po=ha=null,RS(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(ua=null),Fm(n),t=t.stateNode,ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(ac,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Gt.T,s=ge.p,ge.p=2,Gt.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Gt.T=t,ge.p=s}}(Ss&3)!==0&&Bh(),Zi(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===bm?Gl++:(Gl=0,bm=e):Gl=0,dc(0,!1)}}function RS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,uc(t)))}function Bh(){return TS(),AS(),wS(),CS()}function CS(){if(je!==5)return!1;var e=ha,t=Sm;Sm=0;var n=Fm(Ss),i=Gt.T,s=ge.p;try{ge.p=32>n?32:n,Gt.T=null,n=Mm,Mm=null;var a=ha,r=Ss;if(je=0,po=ha=null,Ss=0,(me&6)!==0)throw Error(tt(331));var o=me;if(me|=4,dS(a.current),uS(a,a.current,r,n),me=o,dc(0,!1),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(ac,a)}catch{}return!0}finally{ge.p=s,Gt.T=i,RS(e,t)}}function Fv(e,t,n){t=Mi(n,t),t=gm(e.stateNode,t,2),e=ca(e,t,2),e!==null&&(oc(e,2),Zi(e))}function xe(e,t,n){if(e.tag===3)Fv(e,e,n);else for(;t!==null;){if(t.tag===3){Fv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ua===null||!ua.has(i))){e=Mi(n,e),n=Xx(2),i=ca(t,n,2),i!==null&&(Wx(n,i,t,e),oc(i,2),Zi(i));break}}t=t.return}}function Ip(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new ST;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(xg=!0,s.add(n),e=AT.bind(null,e,t,n),t.then(e,e))}function AT(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ee===e&&(se&n)===n&&(Ge===4||Ge===3&&(se&62914560)===se&&300>ei()-Oh?(me&2)===0&&mo(e,0):Sg|=n,fo===se&&(fo=0)),Zi(e)}function DS(e,t){t===0&&(t=Sy()),e=sr(e,t),e!==null&&(oc(e,t),Zi(e))}function wT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),DS(e,n)}function RT(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(tt(314))}i!==null&&i.delete(t),DS(e,n)}function CT(e,t){return zm(e,t)}var mh=null,Hr=null,Em=!1,gh=!1,Op=!1,aa=0;function Zi(e){e!==Hr&&e.next===null&&(Hr===null?mh=Hr=e:Hr=Hr.next=e),gh=!0,Em||(Em=!0,UT())}function dc(e,t){if(!Op&&gh){Op=!0;do for(var n=!1,i=mh;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-ii(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Hv(i,a))}else a=se,a=Eh(i,i===Ee?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||rc(i,a)||(n=!0,Hv(i,a));i=i.next}while(n);Op=!1}}function DT(){US()}function US(){gh=Em=!1;var e=0;aa!==0&&FT()&&(e=aa);for(var t=ei(),n=null,i=mh;i!==null;){var s=i.next,a=LS(i,t);a===0?(i.next=null,n===null?mh=s:n.next=s,s===null&&(Hr=n)):(n=i,(e!==0||(a&3)!==0)&&(gh=!0)),i=s}je!==0&&je!==5||dc(e,!1),aa!==0&&(aa=0)}function LS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-ii(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=iE(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Ee,n=se,n=Eh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&up(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||rc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&up(i),Fm(n)){case 2:case 8:n=yy;break;case 32:n=ju;break;case 268435456:n=xy;break;default:n=ju}return i=NS.bind(null,e),n=zm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&up(i),e.callbackPriority=2,e.callbackNode=null,2}function NS(e,t){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bh()&&e.callbackNode!==n)return null;var i=se;return i=Eh(e,e===Ee?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(vS(e,i,t),LS(e,ei()),e.callbackNode!=null&&e.callbackNode===n?NS.bind(null,e):null)}function Hv(e,t){if(Bh())return null;vS(e,t,!0)}function UT(){VT(function(){(me&6)!==0?zm(vy,DT):US()})}function bg(){if(aa===0){var e=co;e===0&&(e=_u,_u<<=1,(_u&261888)===0&&(_u=256)),aa=e}return aa}function Vv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ou(""+e)}function Gv(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function LT(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Vv((s[qn]||null).action),r=i.submitter;r&&(t=(t=r[qn]||null)?Vv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Th("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(aa!==0){var l=r?Gv(s,r):new FormData(s);pm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?Gv(s,r):new FormData(s),pm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Cu=0;Cu<nm.length;Cu++)Du=nm[Cu],kv=Du.toLowerCase(),Xv=Du[0].toUpperCase()+Du.slice(1),Ui(kv,"on"+Xv);var Du,kv,Xv,Cu;Ui(Wy,"onAnimationEnd");Ui(qy,"onAnimationIteration");Ui(Yy,"onAnimationStart");Ui("dblclick","onDoubleClick");Ui("focusin","onFocus");Ui("focusout","onBlur");Ui(KE,"onTransitionRun");Ui(QE,"onTransitionStart");Ui(jE,"onTransitionCancel");Ui(Zy,"onTransitionEnd");oo("onMouseEnter",["mouseout","mouseover"]);oo("onMouseLeave",["mouseout","mouseover"]);oo("onPointerEnter",["pointerout","pointerover"]);oo("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($l));function IS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){th(u)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){th(u)}s.currentTarget=null,a=l}}}}function ne(e,t){var n=t[Zp];n===void 0&&(n=t[Zp]=new Set);var i=e+"__bubble";n.has(i)||(OS(t,e,2,!1),n.add(i))}function Pp(e,t,n){var i=0;t&&(i|=4),OS(n,e,i,t)}var Uu="_reactListening"+Math.random().toString(36).slice(2);function Eg(e){if(!e[Uu]){e[Uu]=!0,Ay.forEach(function(n){n!=="selectionchange"&&(NT.has(n)||Pp(n,!1,e),Pp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uu]||(t[Uu]=!0,Pp("selectionchange",!1,t))}}function OS(e,t,n,i){switch(ZS(t)){case 2:var s=oA;break;case 8:s=lA;break;default:s=Rg}n=s.bind(null,t,n,e),s=void 0,!$p||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function zp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=kr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Iy(function(){var c=a,u=Gm(n),d=[];t:{var f=Jy.get(e);if(f!==void 0){var p=Th,g=e;switch(e){case"keypress":if(zu(n)===0)break t;case"keydown":case"keyup":p=RE;break;case"focusin":g="focus",p=mp;break;case"focusout":g="blur",p=mp;break;case"beforeblur":case"afterblur":p=mp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Q_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=UE;break;case Wy:case qy:case Yy:p=yE;break;case Zy:p=NE;break;case"scroll":case"scrollend":p=pE;break;case"wheel":p=OE;break;case"copy":case"cut":case"paste":p=SE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=$_;break;case"toggle":case"beforetoggle":p=zE}var S=(t&4)!==0,m=!S&&(e==="scroll"||e==="scrollend"),h=S?f!==null?f+"Capture":null:f;S=[];for(var _=c,v;_!==null;){var y=_;if(v=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||v===null||h===null||(y=Wl(_,h),y!=null&&S.push(tc(_,y,v))),m)break;_=_.return}0<S.length&&(f=new p(f,g,null,n,u),d.push({event:f,listeners:S}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==jp&&(g=n.relatedTarget||n.fromElement)&&(kr(g)||g[vo]))break t;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?kr(g):null,g!==null&&(m=sc(g),S=g.tag,g!==m||S!==5&&S!==27&&S!==6)&&(g=null)):(p=null,g=c),p!==g)){if(S=Q_,y="onMouseLeave",h="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(S=$_,y="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?f:Rl(p),v=g==null?f:Rl(g),f=new S(y,_+"leave",p,n,u),f.target=m,f.relatedTarget=v,y=null,kr(u)===c&&(S=new S(h,_+"enter",g,n,u),S.target=v,S.relatedTarget=m,y=S),m=y,p&&g)e:{for(S=IT,h=p,_=g,v=0,y=h;y;y=S(y))v++;y=0;for(var A=_;A;A=S(A))y++;for(;0<v-y;)h=S(h),v--;for(;0<y-v;)_=S(_),y--;for(;v--;){if(h===_||_!==null&&h===_.alternate){S=h;break e}h=S(h),_=S(_)}S=null}else S=null;p!==null&&Wv(d,f,p,S,!1),g!==null&&m!==null&&Wv(d,m,g,S,!0)}}t:{if(f=c?Rl(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=iv;else if(nv(f))if(Hy)R=YE;else{R=WE;var w=XE}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&Vm(c.elementType)&&(R=iv):R=qE;if(R&&(R=R(e,c))){Fy(d,R,n,u);break t}w&&w(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Qp(f,"number",f.value)}switch(w=c?Rl(c):window,e){case"focusin":(nv(w)||w.contentEditable==="true")&&(qr=w,tm=c,Nl=null);break;case"focusout":Nl=tm=qr=null;break;case"mousedown":em=!0;break;case"contextmenu":case"mouseup":case"dragend":em=!1,ov(d,n,u);break;case"selectionchange":if(JE)break;case"keydown":case"keyup":ov(d,n,u)}var U;if(Wm)t:{switch(e){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else Wr?zy(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Py&&n.locale!=="ko"&&(Wr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Wr&&(U=Oy()):(na=u,km="value"in na?na.value:na.textContent,Wr=!0)),w=_h(c,E),0<w.length&&(E=new j_(E,e,null,n,u),d.push({event:E,listeners:w}),U?E.data=U:(U=By(n),U!==null&&(E.data=U)))),(U=FE?HE(e,n):VE(e,n))&&(E=_h(c,"onBeforeInput"),0<E.length&&(w=new j_("onBeforeInput","beforeinput",null,n,u),d.push({event:w,listeners:E}),w.data=U)),LT(d,e,c,n,u)}IS(d,t)})}function tc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _h(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Wl(e,n),s!=null&&i.unshift(tc(e,s,a)),s=Wl(e,t),s!=null&&i.push(tc(e,s,a))),e.tag===3)return i;e=e.return}return[]}function IT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Wl(n,a),c!=null&&r.unshift(tc(n,c,l))):s||(c=Wl(n,a),c!=null&&r.push(tc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var OT=/\r\n?/g,PT=/\u0000|\uFFFD/g;function qv(e){return(typeof e=="string"?e:""+e).replace(OT,`
`).replace(PT,"")}function PS(e,t){return t=qv(t),qv(e)===t}function Me(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||lo(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&lo(e,""+i);break;case"className":xu(e,"class",i);break;case"tabIndex":xu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":xu(e,n,i);break;case"style":Ny(e,i,a);break;case"data":if(t!=="object"){xu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ou(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&Me(e,t,"name",s.name,s,null),Me(e,t,"formEncType",s.formEncType,s,null),Me(e,t,"formMethod",s.formMethod,s,null),Me(e,t,"formTarget",s.formTarget,s,null)):(Me(e,t,"encType",s.encType,s,null),Me(e,t,"method",s.method,s,null),Me(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ou(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=_s);break;case"onScroll":i!=null&&ne("scroll",e);break;case"onScrollEnd":i!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ou(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Iu(e,"popover",i);break;case"xlinkActuate":cs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":cs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":cs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":cs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":cs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":cs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":cs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":cs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":cs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Iu(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=fE.get(n)||n,Iu(e,n,i))}}function Tm(e,t,n,i,s,a){switch(n){case"style":Ny(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"children":typeof i=="string"?lo(e,i):(typeof i=="number"||typeof i=="bigint")&&lo(e,""+i);break;case"onScroll":i!=null&&ne("scroll",e);break;case"onScrollEnd":i!=null&&ne("scrollend",e);break;case"onClick":i!=null&&(e.onclick=_s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wy.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[qn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Iu(e,n,i)}}}function gn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:Me(e,t,a,r,n,null)}}s&&Me(e,t,"srcSet",n.srcSet,n,null),i&&Me(e,t,"src",n.src,n,null);return;case"input":ne("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(tt(137,t));break;default:Me(e,t,i,u,n,null)}}Dy(e,a,o,l,c,r,s,!1);return;case"select":ne("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Me(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?to(e,!!i,t,!1):n!=null&&to(e,!!i,n,!0);return;case"textarea":ne("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(tt(91));break;default:Me(e,t,r,o,n,null)}Ly(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Me(e,t,l,i,n,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(i=0;i<$l.length;i++)ne($l[i],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:Me(e,t,c,i,n,null)}return;default:if(Vm(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&Tm(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Me(e,t,o,i,n,null))}function zT(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,u=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||Me(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":a=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(tt(137,t));break;default:p!==d&&Me(e,t,f,p,i,d)}}Kp(e,r,o,l,c,u,a,s);return;case"select":p=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||Me(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":f=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&Me(e,t,s,a,i,l)}t=o,n=r,i=p,f!=null?to(e,!!n,f,!1):!!i!=!!n&&(t!=null?to(e,!!n,t,!0):to(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Me(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":f=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(tt(91));break;default:s!==a&&Me(e,t,r,s,i,a)}Uy(e,f,p);return;case"option":for(var g in n)if(f=n[g],n.hasOwnProperty(g)&&f!=null&&!i.hasOwnProperty(g))switch(g){case"selected":e.selected=!1;break;default:Me(e,t,g,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Me(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)f=n[S],n.hasOwnProperty(S)&&f!=null&&!i.hasOwnProperty(S)&&Me(e,t,S,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(tt(137,t));break;default:Me(e,t,c,f,i,p)}return;default:if(Vm(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&Tm(e,t,m,void 0,i,f);for(u in i)f=i[u],p=n[u],!i.hasOwnProperty(u)||f===p||f===void 0&&p===void 0||Tm(e,t,u,f,i,p);return}}for(var h in n)f=n[h],n.hasOwnProperty(h)&&f!=null&&!i.hasOwnProperty(h)&&Me(e,t,h,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||Me(e,t,d,f,i,p)}function Yv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function BT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Yv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,d=l.initiatorType;u&&Yv(d)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Am=null,wm=null;function vh(e){return e.nodeType===9?e:e.ownerDocument}function Zv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Rm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bp=null;function FT(){var e=window.event;return e&&e.type==="popstate"?e===Bp?!1:(Bp=e,!0):(Bp=null,!1)}var BS=typeof setTimeout=="function"?setTimeout:void 0,HT=typeof clearTimeout=="function"?clearTimeout:void 0,Jv=typeof Promise=="function"?Promise:void 0,VT=typeof queueMicrotask=="function"?queueMicrotask:typeof Jv<"u"?function(e){return Jv.resolve(null).then(e).catch(GT)}:BS;function GT(e){setTimeout(function(){throw e})}function xa(e){return e==="head"}function Kv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),_o(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")kl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,kl(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[lc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&kl(e.ownerDocument.body);n=s}while(n);_o(t)}function Qv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Cm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Cm(n),Hm(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function kT(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[lc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Ti(e.nextSibling),e===null)break}return null}function XT(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ti(e.nextSibling),e===null))return null;return e}function FS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ti(e.nextSibling),e===null))return null;return e}function Dm(e){return e.data==="$?"||e.data==="$~"}function Um(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function WT(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ti(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Lm=null;function jv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ti(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function $v(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function HS(e,t,n){switch(t=vh(n),e){case"html":if(e=t.documentElement,!e)throw Error(tt(452));return e;case"head":if(e=t.head,!e)throw Error(tt(453));return e;case"body":if(e=t.body,!e)throw Error(tt(454));return e;default:throw Error(tt(451))}}function kl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Hm(e)}var Ai=new Map,ty=new Set;function yh(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ws=ge.d;ge.d={f:qT,r:YT,D:ZT,C:JT,L:KT,m:QT,X:$T,S:jT,M:tA};function qT(){var e=ws.f(),t=Ph();return e||t}function YT(e){var t=yo(e);t!==null&&t.tag===5&&t.type==="form"?Nx(t):ws.r(e)}var bo=typeof document>"u"?null:document;function VS(e,t,n){var i=bo;if(i&&typeof t=="string"&&t){var s=Si(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),ty.has(s)||(ty.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),gn(t,"link",e),rn(t),i.head.appendChild(t)))}}function ZT(e){ws.D(e),VS("dns-prefetch",e,null)}function JT(e,t){ws.C(e,t),VS("preconnect",e,t)}function KT(e,t,n){ws.L(e,t,n);var i=bo;if(i&&e&&t){var s='link[rel="preload"][as="'+Si(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Si(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Si(n.imageSizes)+'"]')):s+='[href="'+Si(e)+'"]';var a=s;switch(t){case"style":a=go(e);break;case"script":a=Eo(e)}Ai.has(a)||(e=Le({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ai.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(pc(a))||t==="script"&&i.querySelector(mc(a))||(t=i.createElement("link"),gn(t,"link",e),rn(t),i.head.appendChild(t)))}}function QT(e,t){ws.m(e,t);var n=bo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Si(i)+'"][href="'+Si(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Eo(e)}if(!Ai.has(a)&&(e=Le({rel:"modulepreload",href:e},t),Ai.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(mc(a)))return}i=n.createElement("link"),gn(i,"link",e),rn(i),n.head.appendChild(i)}}}function jT(e,t,n){ws.S(e,t,n);var i=bo;if(i&&e){var s=$r(i).hoistableStyles,a=go(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(pc(a)))o.loading=5;else{e=Le({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ai.get(a))&&Tg(e,n);var l=r=i.createElement("link");rn(l),gn(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Wu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function $T(e,t){ws.X(e,t);var n=bo;if(n&&e){var i=$r(n).hoistableScripts,s=Eo(e),a=i.get(s);a||(a=n.querySelector(mc(s)),a||(e=Le({src:e,async:!0},t),(t=Ai.get(s))&&Ag(e,t),a=n.createElement("script"),rn(a),gn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function tA(e,t){ws.M(e,t);var n=bo;if(n&&e){var i=$r(n).hoistableScripts,s=Eo(e),a=i.get(s);a||(a=n.querySelector(mc(s)),a||(e=Le({src:e,async:!0,type:"module"},t),(t=Ai.get(s))&&Ag(e,t),a=n.createElement("script"),rn(a),gn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function ey(e,t,n,i){var s=(s=ra.current)?yh(s):null;if(!s)throw Error(tt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=go(n.href),n=$r(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=go(n.href);var a=$r(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(pc(e)))&&!a._p&&(r.instance=a,r.state.loading=5),Ai.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ai.set(e,n),a||eA(s,e,n,r.state))),t&&i===null)throw Error(tt(528,""));return r}if(t&&i!==null)throw Error(tt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Eo(n),n=$r(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(tt(444,e))}}function go(e){return'href="'+Si(e)+'"'}function pc(e){return'link[rel="stylesheet"]['+e+"]"}function GS(e){return Le({},e,{"data-precedence":e.precedence,precedence:null})}function eA(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),gn(t,"link",n),rn(t),e.head.appendChild(t))}function Eo(e){return'[src="'+Si(e)+'"]'}function mc(e){return"script[async]"+e}function ny(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Si(n.href)+'"]');if(i)return t.instance=i,rn(i),i;var s=Le({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),rn(i),gn(i,"style",s),Wu(i,n.precedence,e),t.instance=i;case"stylesheet":s=go(n.href);var a=e.querySelector(pc(s));if(a)return t.state.loading|=4,t.instance=a,rn(a),a;i=GS(n),(s=Ai.get(s))&&Tg(i,s),a=(e.ownerDocument||e).createElement("link"),rn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),gn(a,"link",i),t.state.loading|=4,Wu(a,n.precedence,e),t.instance=a;case"script":return a=Eo(n.src),(s=e.querySelector(mc(a)))?(t.instance=s,rn(s),s):(i=n,(s=Ai.get(a))&&(i=Le({},n),Ag(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),rn(s),gn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(tt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Wu(i,n.precedence,e));return t.instance}function Wu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Tg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ag(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var qu=null;function iy(e,t,n){if(qu===null){var i=new Map,s=qu=new Map;s.set(n,i)}else s=qu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[lc]||a[dn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function sy(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function nA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function kS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function iA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=go(i.href),a=t.querySelector(pc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=xh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,rn(a);return}a=t.ownerDocument||t,i=GS(i),(s=Ai.get(s))&&Tg(i,s),a=a.createElement("link"),rn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),gn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=xh.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Fp=0;function sA(e,t){return e.stylesheets&&e.count===0&&Yu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Yu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Fp===0&&(Fp=62500*BT());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Yu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Fp?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function xh(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Sh=null;function Yu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Sh=new Map,t.forEach(aA,e),Sh=null,xh.call(e))}function aA(e,t){if(!(t.state.loading&4)){var n=Sh.get(e);if(n)var i=n.get(null);else{n=new Map,Sh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=xh.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var ec={$$typeof:gs,Provider:null,Consumer:null,_currentValue:Wa,_currentValue2:Wa,_threadCount:0};function rA(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hp(0),this.hiddenUpdates=hp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function XS(e,t,n,i,s,a,r,o,l,c,u,d){return e=new rA(e,t,n,r,l,c,u,d,o),t=1,a===!0&&(t|=24),a=$n(3,null,null,t),e.current=a,a.stateNode=e,t=jm(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},eg(a),e}function WS(e){return e?(e=Jr,e):Jr}function qS(e,t,n,i,s,a){s=WS(s),i.context===null?i.context=s:i.pendingContext=s,i=la(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=ca(e,i,t),n!==null&&(Wn(n,e,t),Ol(n,e,t))}function ay(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wg(e,t){ay(e,t),(e=e.alternate)&&ay(e,t)}function YS(e){if(e.tag===13||e.tag===31){var t=sr(e,67108864);t!==null&&Wn(t,e,67108864),wg(e,67108864)}}function ry(e){if(e.tag===13||e.tag===31){var t=si();t=Bm(t);var n=sr(e,t);n!==null&&Wn(n,e,t),wg(e,t)}}var Mh=!0;function oA(e,t,n,i){var s=Gt.T;Gt.T=null;var a=ge.p;try{ge.p=2,Rg(e,t,n,i)}finally{ge.p=a,Gt.T=s}}function lA(e,t,n,i){var s=Gt.T;Gt.T=null;var a=ge.p;try{ge.p=8,Rg(e,t,n,i)}finally{ge.p=a,Gt.T=s}}function Rg(e,t,n,i){if(Mh){var s=Nm(i);if(s===null)zp(e,t,i,bh,n),oy(e,i);else if(uA(s,e,t,n,i))i.stopPropagation();else if(oy(e,i),t&4&&-1<cA.indexOf(e)){for(;s!==null;){var a=yo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ga(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-ii(r);o.entanglements[1]|=l,r&=~l}Zi(a),(me&6)===0&&(fh=ei()+500,dc(0,!1))}}break;case 31:case 13:o=sr(a,2),o!==null&&Wn(o,a,2),Ph(),wg(a,2)}if(a=Nm(i),a===null&&zp(e,t,i,bh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else zp(e,t,i,null,n)}}function Nm(e){return e=Gm(e),Cg(e)}var bh=null;function Cg(e){if(bh=null,e=kr(e),e!==null){var t=sc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=dy(t),e!==null)return e;e=null}else if(n===31){if(e=py(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return bh=e,null}function ZS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K1()){case vy:return 2;case yy:return 8;case ju:case Q1:return 32;case xy:return 268435456;default:return 32}default:return 32}}var Im=!1,fa=null,da=null,pa=null,nc=new Map,ic=new Map,ta=[],cA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function oy(e,t){switch(e){case"focusin":case"focusout":fa=null;break;case"dragenter":case"dragleave":da=null;break;case"mouseover":case"mouseout":pa=null;break;case"pointerover":case"pointerout":nc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ic.delete(t.pointerId)}}function El(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=yo(t),t!==null&&YS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function uA(e,t,n,i,s){switch(t){case"focusin":return fa=El(fa,e,t,n,i,s),!0;case"dragenter":return da=El(da,e,t,n,i,s),!0;case"mouseover":return pa=El(pa,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return nc.set(a,El(nc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,ic.set(a,El(ic.get(a)||null,e,t,n,i,s)),!0}return!1}function JS(e){var t=kr(e.target);if(t!==null){var n=sc(t);if(n!==null){if(t=n.tag,t===13){if(t=dy(n),t!==null){e.blockedOn=t,X_(e.priority,function(){ry(n)});return}}else if(t===31){if(t=py(n),t!==null){e.blockedOn=t,X_(e.priority,function(){ry(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);jp=i,n.target.dispatchEvent(i),jp=null}else return t=yo(n),t!==null&&YS(t),e.blockedOn=n,!1;t.shift()}return!0}function ly(e,t,n){Zu(e)&&n.delete(t)}function hA(){Im=!1,fa!==null&&Zu(fa)&&(fa=null),da!==null&&Zu(da)&&(da=null),pa!==null&&Zu(pa)&&(pa=null),nc.forEach(ly),ic.forEach(ly)}function Lu(e,t){e.blockedOn===t&&(e.blockedOn=null,Im||(Im=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,hA)))}var Nu=null;function cy(e){Nu!==e&&(Nu=e,$e.unstable_scheduleCallback($e.unstable_NormalPriority,function(){Nu===e&&(Nu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Cg(i||n)===null)continue;break}var a=yo(n);a!==null&&(e.splice(t,3),t-=3,pm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function _o(e){function t(l){return Lu(l,e)}fa!==null&&Lu(fa,e),da!==null&&Lu(da,e),pa!==null&&Lu(pa,e),nc.forEach(t),ic.forEach(t);for(var n=0;n<ta.length;n++){var i=ta[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ta.length&&(n=ta[0],n.blockedOn===null);)JS(n),n.blockedOn===null&&ta.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[qn]||null;if(typeof a=="function")r||cy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[qn]||null)o=r.formAction;else if(Cg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),cy(n)}}}function KS(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Dg(e){this._internalRoot=e}Fh.prototype.render=Dg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(tt(409));var n=t.current,i=si();qS(n,i,e,t,null,null)};Fh.prototype.unmount=Dg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qS(e.current,2,null,e,null,null),Ph(),t[vo]=null}};function Fh(e){this._internalRoot=e}Fh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ty();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ta.length&&t!==0&&t<ta[n].priority;n++);ta.splice(n,0,e),n===0&&JS(e)}};var uy=hy.version;if(uy!=="19.2.0")throw Error(tt(527,uy,"19.2.0"));ge.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(tt(188)):(e=Object.keys(e).join(","),Error(tt(268,e)));return e=k1(t),e=e!==null?my(e):null,e=e===null?null:e.stateNode,e};var fA={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:Gt,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Tl.isDisabled&&Tl.supportsFiber))try{ac=Tl.inject(fA),ni=Tl}catch{}var Tl;Hh.createRoot=function(e,t){if(!fy(e))throw Error(tt(299));var n=!1,i="",s=Vx,a=Gx,r=kx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=XS(e,1,!1,null,null,n,i,null,s,a,r,KS),e[vo]=t.current,Eg(e),new Dg(t)};Hh.hydrateRoot=function(e,t,n){if(!fy(e))throw Error(tt(299));var i=!1,s="",a=Vx,r=Gx,o=kx,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=XS(e,1,!0,t,n??null,i,s,l,a,r,o,KS),t.context=WS(null),n=t.current,i=si(),i=Bm(i),s=la(i),s.callback=null,ca(n,s,i),n=i,t.current.lanes=n,oc(t,n),Zi(t),e[vo]=t.current,Eg(e),new Fh(t)};Hh.version="19.2.0"});var tM=Vi((OD,$S)=>{"use strict";function jS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jS)}catch(e){console.error(e)}}jS(),$S.exports=QS()});var Kb=Vi(Id=>{"use strict";var Z3=Symbol.for("react.transitional.element"),J3=Symbol.for("react.fragment");function Jb(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:Z3,type:e,key:i,ref:t!==void 0?t:null,props:n}}Id.Fragment=J3;Id.jsx=Jb;Id.jsxs=Jb});var eu=Vi((KN,Qb)=>{"use strict";Qb.exports=Kb()});var Pa=Fa(pl(),1),d1=Fa(tM(),1);var wr=Fa(pl(),1);var AM=0,_0=1,wM=2;var v0=1,RM=2,es=3,Is=0,Fn=1,di=2,Ps=0,hr=1,y0=2,x0=3,S0=4,CM=5,Ra=100,DM=101,UM=102,LM=103,NM=104,IM=200,OM=201,PM=202,zM=203,uf=204,hf=205,BM=206,FM=207,HM=208,VM=209,GM=210,kM=211,XM=212,WM=213,qM=214,Bf=0,Ff=1,Hf=2,fr=3,Vf=4,Gf=5,kf=6,Xf=7,M0=0,YM=1,ZM=2,zs=0,JM=1,KM=2,QM=3,jM=4,$M=5,tb=6,Wf=7;var b0=300,xr=301,Sr=302,qf=303,Yf=304,Zc=306,$i=1e3,Ki=1001,ff=1002,Jn=1003,eb=1004;var Jc=1005;var ci=1006,Zf=1007;var ns=1008;var Bi=1009,E0=1010,T0=1011,tl=1012,Jf=1013,Oa=1014,is=1015,el=1016,Kf=1017,Qf=1018,nl=1020,A0=35902,w0=35899,R0=1021,C0=1022,Ri=1023,Bo=1026,il=1027,D0=1028,jf=1029,U0=1030,$f=1031;var td=1033,Kc=33776,Qc=33777,jc=33778,$c=33779,ed=35840,nd=35841,id=35842,sd=35843,ad=36196,rd=37492,od=37496,ld=37808,cd=37809,ud=37810,hd=37811,fd=37812,dd=37813,pd=37814,md=37815,gd=37816,_d=37817,vd=37818,yd=37819,xd=37820,Sd=37821,Md=36492,bd=36494,Ed=36495,Td=36283,Ad=36284,wd=36285,Rd=36286;var Ec=2300,df=2301,cf=2302,s0=2400,a0=2401,r0=2402;var nb=3200,ib=3201;var L0=0,sb=1,Bs="",_n="srgb",dr="srgb-linear",Tc="linear",Se="srgb";var ur=7680;var o0=519,ab=512,rb=513,ob=514,N0=515,lb=516,cb=517,ub=518,hb=519,l0=35044;var I0="300 es",Oi=2e3,Ac=2001;var Os=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ug=Math.PI/180,pf=180/Math.PI;function sl(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[e&255]+wn[e>>8&255]+wn[e>>16&255]+wn[e>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[n&63|128]+wn[n>>8&255]+"-"+wn[n>>16&255]+wn[n>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function ee(e,t,n){return Math.max(t,Math.min(n,e))}function dA(e,t){return(e%t+t)%t}function Lg(e,t,n){return(1-n)*e+n*t}function gc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Zn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var gt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ee(this.x,t.x,n.x),this.y=ee(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ee(this.x,t,n),this.y=ee(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pn=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=a[r+0],p=a[r+1],g=a[r+2],S=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=g,t[n+3]=S;return}if(d!==S||l!==f||c!==p||u!==g){let m=1-o,h=l*f+c*p+u*g+d*S,_=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){let A=Math.sqrt(v),R=Math.atan2(A,h*_);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}let y=o*_;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,d=d*m+S*y,m===1-o){let A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=a[r],f=a[r+1],p=a[r+2],g=a[r+3];return t[n]=o*g+u*d+l*p-c*f,t[n+1]=l*g+u*f+c*d-o*p,t[n+2]=c*g+u*p+o*f-l*d,t[n+3]=u*g-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(a/2),f=l(i/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(eM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(eM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*u,this.y=i+l*u+o*c-a*d,this.z=s+l*d+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ee(this.x,t.x,n.x),this.y=ee(this.y,t.y,n.y),this.z=ee(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ee(this.x,t,n),this.y=ee(this.y,t,n),this.z=ee(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ng.copy(this).projectOnVector(t),this.sub(Ng)}reflect(t){return this.sub(Ng.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ng=new L,eM=new Pn,Kt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],S=s[0],m=s[3],h=s[6],_=s[1],v=s[4],y=s[7],A=s[2],R=s[5],w=s[8];return a[0]=r*S+o*_+l*A,a[3]=r*m+o*v+l*R,a[6]=r*h+o*y+l*w,a[1]=c*S+u*_+d*A,a[4]=c*m+u*v+d*R,a[7]=c*h+u*y+d*w,a[2]=f*S+p*_+g*A,a[5]=f*m+p*v+g*R,a[8]=f*h+p*y+g*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*r-o*c,f=o*l-u*a,p=c*a-r*l,g=n*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return t[0]=d*S,t[1]=(s*c-u*i)*S,t[2]=(o*i-s*r)*S,t[3]=f*S,t[4]=(u*n-s*l)*S,t[5]=(s*a-o*n)*S,t[6]=p*S,t[7]=(i*l-c*n)*S,t[8]=(r*n-i*a)*S,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Ig.makeScale(t,n)),this}rotate(t){return this.premultiply(Ig.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ig.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ig=new Kt;function O0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function wc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function fb(){let e=wc("canvas");return e.style.display="block",e}var nM={};function Fo(e){e in nM||(nM[e]=!0,console.warn(e))}function db(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var iM=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sM=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pA(){let e={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Se&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Se&&(s.r=zo(s.r),s.g=zo(s.g),s.b=zo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bs?Tc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Fo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Fo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[dr]:{primaries:t,whitePoint:i,transfer:Tc,toXYZ:iM,fromXYZ:sM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:iM,fromXYZ:sM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),e}var fe=pA();function Ns(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function zo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var To,mf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{To===void 0&&(To=wc("canvas")),To.width=t.width,To.height=t.height;let s=To.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=To}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=wc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Ns(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ns(n[i]/255)*255):n[i]=Ns(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mA=0,Ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mA++}),this.uuid=sl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Og(s[r].image)):a.push(Og(s[r]))}else a=Og(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Og(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?mf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gA=0,Pg=new L,zn=class e extends Os{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ki,s=Ki,a=ci,r=ns,o=Ri,l=Bi,c=e.DEFAULT_ANISOTROPY,u=Bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gA++}),this.uuid=sl(),this.name="",this.source=new Ho(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pg).x}get height(){return this.source.getSize(Pg).y}get depth(){return this.source.getSize(Pg).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==b0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $i:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case ff:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $i:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case ff:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=b0;zn.DEFAULT_ANISOTROPY=1;var He=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],S=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let v=(c+1)/2,y=(p+1)/2,A=(h+1)/2,R=(u+f)/4,w=(d+S)/4,U=(g+m)/4;return v>y&&v>A?v<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(v),s=R/i,a=w/i):y>A?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=R/s,a=U/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=w/a,s=U/a),this.set(i,s,a,n),this}let _=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-S)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ee(this.x,t.x,n.x),this.y=ee(this.y,t.y,n.y),this.z=ee(this.z,t.z,n.z),this.w=ee(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ee(this.x,t,n),this.y=ee(this.y,t,n),this.z=ee(this.z,t,n),this.w=ee(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gf=class extends Os{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new He(0,0,t,n),this.scissorTest=!1,this.viewport=new He(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new zn(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Ho(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ts=class extends gf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Rc=class extends zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _f=class extends zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ca=class{constructor(t=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Li.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Li.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Li.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Li):Li.fromBufferAttribute(a,r),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vh.copy(i.boundingBox)),Vh.applyMatrix4(t.matrixWorld),this.union(Vh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_c),Gh.subVectors(this.max,_c),Ao.subVectors(t.a,_c),wo.subVectors(t.b,_c),Ro.subVectors(t.c,_c),Sa.subVectors(wo,Ao),Ma.subVectors(Ro,wo),rr.subVectors(Ao,Ro);let n=[0,-Sa.z,Sa.y,0,-Ma.z,Ma.y,0,-rr.z,rr.y,Sa.z,0,-Sa.x,Ma.z,0,-Ma.x,rr.z,0,-rr.x,-Sa.y,Sa.x,0,-Ma.y,Ma.x,0,-rr.y,rr.x,0];return!zg(n,Ao,wo,Ro,Gh)||(n=[1,0,0,0,1,0,0,0,1],!zg(n,Ao,wo,Ro,Gh))?!1:(kh.crossVectors(Sa,Ma),n=[kh.x,kh.y,kh.z],zg(n,Ao,wo,Ro,Gh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Rs=[new L,new L,new L,new L,new L,new L,new L,new L],Li=new L,Vh=new Ca,Ao=new L,wo=new L,Ro=new L,Sa=new L,Ma=new L,rr=new L,_c=new L,Gh=new L,kh=new L,or=new L;function zg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){or.fromArray(e,a);let o=s.x*Math.abs(or.x)+s.y*Math.abs(or.y)+s.z*Math.abs(or.z),l=t.dot(or),c=n.dot(or),u=i.dot(or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var _A=new Ca,vc=new L,Bg=new L,Vo=class{constructor(t=new L,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):_A.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vc.subVectors(t,this.center);let n=vc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(vc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vc.copy(t.center).add(Bg)),this.expandByPoint(vc.copy(t.center).sub(Bg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Cs=new L,Fg=new L,Xh=new L,ba=new L,Hg=new L,Wh=new L,Vg=new L,Cc=class{constructor(t=new L,n=new L(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Cs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Cs.copy(this.origin).addScaledVector(this.direction,n),Cs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Fg.copy(t).add(n).multiplyScalar(.5),Xh.copy(n).sub(t).normalize(),ba.copy(this.origin).sub(Fg);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Xh),o=ba.dot(this.direction),l=-ba.dot(Xh),c=ba.lengthSq(),u=Math.abs(1-r*r),d,f,p,g;if(u>0)if(d=r*l-o,f=r*o-l,g=a*u,d>=0)if(f>=-g)if(f<=g){let S=1/u;d*=S,f*=S,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fg).addScaledVector(Xh,f),p}intersectSphere(t,n){Cs.subVectors(t.center,this.origin);let i=Cs.dot(this.direction),s=Cs.dot(Cs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(a=(t.min.y-f.y)*u,r=(t.max.y-f.y)*u):(a=(t.max.y-f.y)*u,r=(t.min.y-f.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Cs)!==null}intersectTriangle(t,n,i,s,a){Hg.subVectors(n,t),Wh.subVectors(i,t),Vg.crossVectors(Hg,Wh);let r=this.direction.dot(Vg),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ba.subVectors(this.origin,t);let l=o*this.direction.dot(Wh.crossVectors(ba,Wh));if(l<0)return null;let c=o*this.direction.dot(Hg.cross(ba));if(c<0||l+c>r)return null;let u=-o*ba.dot(Vg);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class e{constructor(t,n,i,s,a,r,o,l,c,u,d,f,p,g,S,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,u,d,f,p,g,S,m)}set(t,n,i,s,a,r,o,l,c,u,d,f,p,g,S,m){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=S,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/Co.setFromMatrixColumn(t,0).length(),a=1/Co.setFromMatrixColumn(t,1).length(),r=1/Co.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let f=r*u,p=r*d,g=o*u,S=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-S*c,n[9]=-o*l,n[2]=S-f*c,n[6]=g+p*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*u,p=l*d,g=c*u,S=c*d;n[0]=f+S*o,n[4]=g*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*u,n[9]=-o,n[2]=p*o-g,n[6]=S+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*u,p=l*d,g=c*u,S=c*d;n[0]=f-S*o,n[4]=-r*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=r*u,n[9]=S-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*u,p=r*d,g=o*u,S=o*d;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+S,n[1]=l*d,n[5]=S*c+f,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,p=r*c,g=o*l,S=o*c;n[0]=l*u,n[4]=S-f*d,n[8]=g*d+p,n[1]=d,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+g,n[10]=f-S*d}else if(t.order==="XZY"){let f=r*l,p=r*c,g=o*l,S=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+S,n[5]=r*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*u,n[10]=S*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vA,t,yA)}lookAt(t,n,i){let s=this.elements;return oi.subVectors(t,n),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Ea.crossVectors(i,oi),Ea.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Ea.crossVectors(i,oi)),Ea.normalize(),qh.crossVectors(oi,Ea),s[0]=Ea.x,s[4]=qh.x,s[8]=oi.x,s[1]=Ea.y,s[5]=qh.y,s[9]=oi.y,s[2]=Ea.z,s[6]=qh.z,s[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],S=i[6],m=i[10],h=i[14],_=i[3],v=i[7],y=i[11],A=i[15],R=s[0],w=s[4],U=s[8],E=s[12],M=s[1],D=s[5],H=s[9],W=s[13],Q=s[2],Z=s[6],q=s[10],at=s[14],z=s[3],pt=s[7],_t=s[11],Mt=s[15];return a[0]=r*R+o*M+l*Q+c*z,a[4]=r*w+o*D+l*Z+c*pt,a[8]=r*U+o*H+l*q+c*_t,a[12]=r*E+o*W+l*at+c*Mt,a[1]=u*R+d*M+f*Q+p*z,a[5]=u*w+d*D+f*Z+p*pt,a[9]=u*U+d*H+f*q+p*_t,a[13]=u*E+d*W+f*at+p*Mt,a[2]=g*R+S*M+m*Q+h*z,a[6]=g*w+S*D+m*Z+h*pt,a[10]=g*U+S*H+m*q+h*_t,a[14]=g*E+S*W+m*at+h*Mt,a[3]=_*R+v*M+y*Q+A*z,a[7]=_*w+v*D+y*Z+A*pt,a[11]=_*U+v*H+y*q+A*_t,a[15]=_*E+v*W+y*at+A*Mt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],g=t[3],S=t[7],m=t[11],h=t[15];return g*(+a*l*d-s*c*d-a*o*f+i*c*f+s*o*p-i*l*p)+S*(+n*l*p-n*c*f+a*r*f-s*r*p+s*c*u-a*l*u)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*u-i*c*u)+h*(-s*o*u-n*l*d+n*o*f+s*r*d-i*r*f+i*l*u)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],g=t[12],S=t[13],m=t[14],h=t[15],_=d*m*c-S*f*c+S*l*p-o*m*p-d*l*h+o*f*h,v=g*f*c-u*m*c-g*l*p+r*m*p+u*l*h-r*f*h,y=u*S*c-g*d*c+g*o*p-r*S*p-u*o*h+r*d*h,A=g*d*l-u*S*l-g*o*f+r*S*f+u*o*m-r*d*m,R=n*_+i*v+s*y+a*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return t[0]=_*w,t[1]=(S*f*a-d*m*a-S*s*p+i*m*p+d*s*h-i*f*h)*w,t[2]=(o*m*a-S*l*a+S*s*c-i*m*c-o*s*h+i*l*h)*w,t[3]=(d*l*a-o*f*a-d*s*c+i*f*c+o*s*p-i*l*p)*w,t[4]=v*w,t[5]=(u*m*a-g*f*a+g*s*p-n*m*p-u*s*h+n*f*h)*w,t[6]=(g*l*a-r*m*a-g*s*c+n*m*c+r*s*h-n*l*h)*w,t[7]=(r*f*a-u*l*a+u*s*c-n*f*c-r*s*p+n*l*p)*w,t[8]=y*w,t[9]=(g*d*a-u*S*a-g*i*p+n*S*p+u*i*h-n*d*h)*w,t[10]=(r*S*a-g*o*a+g*i*c-n*S*c-r*i*h+n*o*h)*w,t[11]=(u*o*a-r*d*a-u*i*c+n*d*c+r*i*p-n*o*p)*w,t[12]=A*w,t[13]=(u*S*s-g*d*s+g*i*f-n*S*f-u*i*m+n*d*m)*w,t[14]=(g*o*s-r*S*s-g*i*l+n*S*l+r*i*m-n*o*m)*w,t[15]=(r*d*s-u*o*s+u*i*l-n*d*l-r*i*f+n*o*f)*w,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,u=r+r,d=o+o,f=a*c,p=a*u,g=a*d,S=r*u,m=r*d,h=o*d,_=l*c,v=l*u,y=l*d,A=i.x,R=i.y,w=i.z;return s[0]=(1-(S+h))*A,s[1]=(p+y)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(f+h))*R,s[6]=(m+_)*R,s[7]=0,s[8]=(g+v)*w,s[9]=(m-_)*w,s[10]=(1-(f+S))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=Co.set(s[0],s[1],s[2]).length(),r=Co.set(s[4],s[5],s[6]).length(),o=Co.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Ni.copy(this);let c=1/a,u=1/r,d=1/o;return Ni.elements[0]*=c,Ni.elements[1]*=c,Ni.elements[2]*=c,Ni.elements[4]*=u,Ni.elements[5]*=u,Ni.elements[6]*=u,Ni.elements[8]*=d,Ni.elements[9]*=d,Ni.elements[10]*=d,n.setFromRotationMatrix(Ni),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=Oi,l=!1){let c=this.elements,u=2*a/(n-t),d=2*a/(i-s),f=(n+t)/(n-t),p=(i+s)/(i-s),g,S;if(l)g=a/(r-a),S=r*a/(r-a);else if(o===Oi)g=-(r+a)/(r-a),S=-2*r*a/(r-a);else if(o===Ac)g=-r/(r-a),S=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Oi,l=!1){let c=this.elements,u=2/(n-t),d=2/(i-s),f=-(n+t)/(n-t),p=-(i+s)/(i-s),g,S;if(l)g=1/(r-a),S=r/(r-a);else if(o===Oi)g=-2/(r-a),S=-(r+a)/(r-a);else if(o===Ac)g=-1/(r-a),S=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Co=new L,Ni=new Ie,vA=new L(0,0,0),yA=new L(1,1,1),Ea=new L,qh=new L,oi=new L,aM=new Ie,rM=new Pn,Pi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ee(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return aM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(aM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return rM.setFromEuler(this),this.setFromQuaternion(rM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var Go=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xA=0,oM=new L,Do=new Pn,Ds=new Ie,Yh=new L,yc=new L,SA=new L,MA=new Pn,lM=new L(1,0,0),cM=new L(0,1,0),uM=new L(0,0,1),hM={type:"added"},bA={type:"removed"},Uo={type:"childadded",child:null},Gg={type:"childremoved",child:null},Bn=class e extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new L,n=new Pi,i=new Pn,s=new L(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Kt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Do.setFromAxisAngle(t,n),this.quaternion.multiply(Do),this}rotateOnWorldAxis(t,n){return Do.setFromAxisAngle(t,n),this.quaternion.premultiply(Do),this}rotateX(t){return this.rotateOnAxis(lM,t)}rotateY(t){return this.rotateOnAxis(cM,t)}rotateZ(t){return this.rotateOnAxis(uM,t)}translateOnAxis(t,n){return oM.copy(t).applyQuaternion(this.quaternion),this.position.add(oM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(lM,t)}translateY(t){return this.translateOnAxis(cM,t)}translateZ(t){return this.translateOnAxis(uM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ds.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Yh.copy(t):Yh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),yc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ds.lookAt(yc,Yh,this.up):Ds.lookAt(Yh,yc,this.up),this.quaternion.setFromRotationMatrix(Ds),s&&(Ds.extractRotation(s.matrixWorld),Do.setFromRotationMatrix(Ds),this.quaternion.premultiply(Do.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hM),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(bA),Gg.child=t,this.dispatchEvent(Gg),Gg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hM),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yc,t,SA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yc,MA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Bn.DEFAULT_UP=new L(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ii=new L,Us=new L,kg=new L,Ls=new L,Lo=new L,No=new L,fM=new L,Xg=new L,Wg=new L,qg=new L,Yg=new He,Zg=new He,Jg=new He,wa=class e{constructor(t=new L,n=new L,i=new L){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ii.subVectors(t,n),s.cross(Ii);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Ii.subVectors(s,n),Us.subVectors(i,n),kg.subVectors(t,n);let r=Ii.dot(Ii),o=Ii.dot(Us),l=Ii.dot(kg),c=Us.dot(Us),u=Us.dot(kg),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let f=1/d,p=(c*l-o*u)*f,g=(r*u-o*l)*f;return a.set(1-p-g,g,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ls)===null?!1:Ls.x>=0&&Ls.y>=0&&Ls.x+Ls.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ls)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ls.x),l.addScaledVector(r,Ls.y),l.addScaledVector(o,Ls.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Yg.setScalar(0),Zg.setScalar(0),Jg.setScalar(0),Yg.fromBufferAttribute(t,n),Zg.fromBufferAttribute(t,i),Jg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Yg,a.x),r.addScaledVector(Zg,a.y),r.addScaledVector(Jg,a.z),r}static isFrontFacing(t,n,i,s){return Ii.subVectors(i,n),Us.subVectors(t,n),Ii.cross(Us).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),Us.subVectors(this.a,this.b),Ii.cross(Us).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Lo.subVectors(s,i),No.subVectors(a,i),Xg.subVectors(t,i);let l=Lo.dot(Xg),c=No.dot(Xg);if(l<=0&&c<=0)return n.copy(i);Wg.subVectors(t,s);let u=Lo.dot(Wg),d=No.dot(Wg);if(u>=0&&d<=u)return n.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(Lo,r);qg.subVectors(t,a);let p=Lo.dot(qg),g=No.dot(qg);if(g>=0&&p<=g)return n.copy(a);let S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(No,o);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return fM.subVectors(a,s),o=(d-u)/(d-u+(p-g)),n.copy(s).addScaledVector(fM,o);let h=1/(m+S+f);return r=S*h,o=f*h,n.copy(i).addScaledVector(Lo,r).addScaledVector(No,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ta={h:0,s:0,l:0},Zh={h:0,s:0,l:0};function Kg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Qt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=fe.workingColorSpace){return this.r=t,this.g=n,this.b=i,fe.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=fe.workingColorSpace){if(t=dA(t,1),n=ee(n,0,1),i=ee(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Kg(r,a,t+1/3),this.g=Kg(r,a,t),this.b=Kg(r,a,t-1/3)}return fe.colorSpaceToWorking(this,s),this}setStyle(t,n=_n){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=_n){let i=pb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}copyLinearToSRGB(t){return this.r=zo(t.r),this.g=zo(t.g),this.b=zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return fe.workingToColorSpace(Rn.copy(this),t),Math.round(ee(Rn.r*255,0,255))*65536+Math.round(ee(Rn.g*255,0,255))*256+Math.round(ee(Rn.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=fe.workingColorSpace){fe.workingToColorSpace(Rn.copy(this),n);let i=Rn.r,s=Rn.g,a=Rn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=fe.workingColorSpace){return fe.workingToColorSpace(Rn.copy(this),n),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=_n){fe.workingToColorSpace(Rn.copy(this),t);let n=Rn.r,i=Rn.g,s=Rn.b;return t!==_n?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Ta),this.setHSL(Ta.h+t,Ta.s+n,Ta.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ta),t.getHSL(Zh);let i=Lg(Ta.h,Zh.h,n),s=Lg(Ta.s,Zh.s,n),a=Lg(Ta.l,Zh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new Qt;Qt.NAMES=pb;var EA=0,Da=class extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EA++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=hr,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=hf,this.blendEquation=Ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==Is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uf&&(i.blendSrc=this.blendSrc),this.blendDst!==hf&&(i.blendDst=this.blendDst),this.blendEquation!==Ra&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},pr=class extends Da{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=M0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Qe=new L,Jh=new gt,TA=0,vn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=l0,this.updateRanges=[],this.gpuType=is,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jh.fromBufferAttribute(this,n),Jh.applyMatrix3(t),this.setXY(n,Jh.x,Jh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Qe.fromBufferAttribute(this,n),Qe.applyMatrix3(t),this.setXYZ(n,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Qe.fromBufferAttribute(this,n),Qe.applyMatrix4(t),this.setXYZ(n,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Qe.fromBufferAttribute(this,n),Qe.applyNormalMatrix(t),this.setXYZ(n,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Qe.fromBufferAttribute(this,n),Qe.transformDirection(t),this.setXYZ(n,Qe.x,Qe.y,Qe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=gc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=gc(n,this.array)),n}setX(t,n){return this.normalized&&(n=Zn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=gc(n,this.array)),n}setY(t,n){return this.normalized&&(n=Zn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=gc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Zn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=gc(n,this.array)),n}setW(t,n){return this.normalized&&(n=Zn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Zn(n,this.array),i=Zn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Zn(n,this.array),i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Zn(n,this.array),i=Zn(i,this.array),s=Zn(s,this.array),a=Zn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==l0&&(t.usage=this.usage),t}};var Dc=class extends vn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Uc=class extends vn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var cn=class extends vn{constructor(t,n,i){super(new Float32Array(t),n,i)}},AA=0,wi=new Ie,Qg=new Bn,Io=new L,li=new Ca,xc=new Ca,ln=new L,ui=class e extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AA++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(O0(t)?Uc:Dc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Kt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,n,i){return wi.makeTranslation(t,n,i),this.applyMatrix4(wi),this}scale(t,n,i){return wi.makeScale(t,n,i),this.applyMatrix4(wi),this}lookAt(t){return Qg.lookAt(t),Qg.updateMatrix(),this.applyMatrix4(Qg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new cn(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];li.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];xc.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(li.min,xc.min),li.expandByPoint(ln),ln.addVectors(li.max,xc.max),li.expandByPoint(ln)):(li.expandByPoint(xc.min),li.expandByPoint(xc.max))}li.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)ln.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(ln));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ln.fromBufferAttribute(o,c),l&&(Io.fromBufferAttribute(t,c),ln.add(Io)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new L,l[U]=new L;let c=new L,u=new L,d=new L,f=new gt,p=new gt,g=new gt,S=new L,m=new L;function h(U,E,M){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(a,U),p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,M),u.sub(c),d.sub(c),p.sub(f),g.sub(f);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[U].add(S),o[E].add(S),o[M].add(S),l[U].add(m),l[E].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let U=0,E=_.length;U<E;++U){let M=_[U],D=M.start,H=M.count;for(let W=D,Q=D+H;W<Q;W+=3)h(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let v=new L,y=new L,A=new L,R=new L;function w(U){A.fromBufferAttribute(s,U),R.copy(A);let E=o[U];v.copy(E),v.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(R,E);let D=y.dot(l[U])<0?-1:1;r.setXYZW(U,v.x,v.y,v.z,D)}for(let U=0,E=_.length;U<E;++U){let M=_[U],D=M.start,H=M.count;for(let W=D,Q=D+H;W<Q;W+=3)w(t.getX(W+0)),w(t.getX(W+1)),w(t.getX(W+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new L,a=new L,r=new L,o=new L,l=new L,c=new L,u=new L,d=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),S=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,S),r.fromBufferAttribute(n,m),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)ln.fromBufferAttribute(t,n),ln.normalize(),t.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new vn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let a=t.morphAttributes;for(let c in a){let u=[],d=a[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dM=new Ie,lr=new Cc,Kh=new Vo,pM=new L,Qh=new L,jh=new L,$h=new L,jg=new L,tf=new L,mM=new L,ef=new L,We=class extends Bn{constructor(t=new ui,n=new pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){tf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],d=a[l];u!==0&&(jg.fromBufferAttribute(d,t),r?tf.addScaledVector(jg,u):tf.addScaledVector(jg.sub(n),u))}n.add(tf)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kh.copy(i.boundingSphere),Kh.applyMatrix4(a),lr.copy(t.ray).recast(t.near),!(Kh.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Kh,pM)===null||lr.origin.distanceToSquared(pM)>(t.far-t.near)**2))&&(dM.copy(a).invert(),lr.copy(t.ray).applyMatrix4(dM),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,lr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,S=f.length;g<S;g++){let m=f[g],h=r[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,A=v;y<A;y+=3){let R=o.getX(y),w=o.getX(y+1),U=o.getX(y+2);s=nf(this,h,t,i,c,u,d,R,w,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=g,h=S;m<h;m+=3){let _=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);s=nf(this,r,t,i,c,u,d,_,v,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,S=f.length;g<S;g++){let m=f[g],h=r[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,A=v;y<A;y+=3){let R=y,w=y+1,U=y+2;s=nf(this,h,t,i,c,u,d,R,w,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,h=S;m<h;m+=3){let _=m,v=m+1,y=m+2;s=nf(this,r,t,i,c,u,d,_,v,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function wA(e,t,n,i,s,a,r,o){let l;if(t.side===Fn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Is,o),l===null)return null;ef.copy(o),ef.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(ef);return c<n.near||c>n.far?null:{distance:c,point:ef.clone(),object:e}}function nf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Qh),e.getVertexPosition(l,jh),e.getVertexPosition(c,$h);let u=wA(e,t,n,i,Qh,jh,$h,mM);if(u){let d=new L;wa.getBarycoord(mM,Qh,jh,$h,d),s&&(u.uv=wa.getInterpolatedAttribute(s,o,l,c,d,new gt)),a&&(u.uv1=wa.getInterpolatedAttribute(a,o,l,c,d,new gt)),r&&(u.normal=wa.getInterpolatedAttribute(r,o,l,c,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new L,materialIndex:0};wa.getNormal(Qh,jh,$h,f.normal),u.face=f,u.barycoord=d}return u}var ko=class e extends ui{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(d,2));function g(S,m,h,_,v,y,A,R,w,U,E){let M=y/w,D=A/U,H=y/2,W=A/2,Q=R/2,Z=w+1,q=U+1,at=0,z=0,pt=new L;for(let _t=0;_t<q;_t++){let Mt=_t*D-W;for(let Pt=0;Pt<Z;Pt++){let zt=Pt*M-H;pt[S]=zt*_,pt[m]=Mt*v,pt[h]=Q,c.push(pt.x,pt.y,pt.z),pt[S]=0,pt[m]=0,pt[h]=R>0?1:-1,u.push(pt.x,pt.y,pt.z),d.push(Pt/w),d.push(1-_t/U),at+=1}}for(let _t=0;_t<U;_t++)for(let Mt=0;Mt<w;Mt++){let Pt=f+Mt+Z*_t,zt=f+Mt+Z*(_t+1),ue=f+(Mt+1)+Z*(_t+1),jt=f+(Mt+1)+Z*_t;l.push(Pt,zt,jt),l.push(zt,ue,jt),z+=6}o.addGroup(p,z,E),p+=z,f+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Mr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function Dn(e){let t={};for(let n=0;n<e.length;n++){let i=Mr(e[n]);for(let s in i)t[s]=i[s]}return t}function RA(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function P0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var mb={clone:Mr,merge:Dn},CA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zi=class extends Da{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CA,this.fragmentShader=DA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=RA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Lc=class extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Aa=new L,gM=new gt,_M=new gt,Cn=class extends Lc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=pf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ug*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pf*2*Math.atan(Math.tan(Ug*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Aa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Aa.x,Aa.y).multiplyScalar(-t/Aa.z),Aa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Aa.x,Aa.y).multiplyScalar(-t/Aa.z)}getViewSize(t,n){return this.getViewBounds(t,gM,_M),n.subVectors(_M,gM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Ug*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Oo=-90,Po=1,vf=class extends Bn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Cn(Oo,Po,t,n);s.layers=this.layers,this.add(s);let a=new Cn(Oo,Po,t,n);a.layers=this.layers,this.add(a);let r=new Cn(Oo,Po,t,n);r.layers=this.layers,this.add(r);let o=new Cn(Oo,Po,t,n);o.layers=this.layers,this.add(o);let l=new Cn(Oo,Po,t,n);l.layers=this.layers,this.add(l);let c=new Cn(Oo,Po,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),t.render(n,u),t.setRenderTarget(d,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Nc=class extends zn{constructor(t=[],n=xr,i,s,a,r,o,l,c,u){super(t,n,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yf=class extends ts{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Nc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ko(5,5,5),a=new zi({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:Ps});a.uniforms.tEquirect.value=n;let r=new We(s,a),o=n.minFilter;return n.minFilter===ns&&(n.minFilter=ci),new vf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Qi=class extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},UA={type:"move"},Xo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let S of t.hand.values()){let m=n.getJointPose(S,i),h=this._getHandJoint(c,S);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(UA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var Wo=class extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Ic=class extends zn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=Jn,u=Jn,d,f){super(null,r,o,l,c,u,s,a,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $g=new L,LA=new L,NA=new Kt,Ji=class{constructor(t=new L(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=$g.subVectors(i,n).cross(LA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta($g),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||NA.getNormalMatrix(t),s=this.coplanarPoint($g).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},cr=new Vo,IA=new gt(.5,.5),sf=new L,qo=class{constructor(t=new Ji,n=new Ji,i=new Ji,s=new Ji,a=new Ji,r=new Ji){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Oi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],d=a[5],f=a[6],p=a[7],g=a[8],S=a[9],m=a[10],h=a[11],_=a[12],v=a[13],y=a[14],A=a[15];if(s[0].setComponents(c-r,p-u,h-g,A-_).normalize(),s[1].setComponents(c+r,p+u,h+g,A+_).normalize(),s[2].setComponents(c+o,p+d,h+S,A+v).normalize(),s[3].setComponents(c-o,p-d,h-S,A-v).normalize(),i)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,p-f,h-m,A-y).normalize();else if(s[4].setComponents(c-l,p-f,h-m,A-y).normalize(),n===Oi)s[5].setComponents(c+l,p+f,h+m,A+y).normalize();else if(n===Ac)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){cr.center.set(0,0,0);let n=IA.distanceTo(t.center);return cr.radius=.7071067811865476+n,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(sf.x=s.normal.x>0?t.max.x:t.min.x,sf.y=s.normal.y>0?t.max.y:t.min.y,sf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mr=class extends zn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Oc=class extends zn{constructor(t,n,i=Oa,s,a,r,o=Jn,l=Jn,c,u=Bo,d=1){if(u!==Bo&&u!==il)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:d};super(f,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ho(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Pc=class extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),a=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),n.push(a),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,a=i.length,r;n?r=n:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let u=i[s],f=i[s+1]-u,p=(r-u)/f;return(s+p)/(a-1)}getTangent(t,n){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=n||(r.isVector2?new gt:new L);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new L,s=[],a=[],r=[],o=new L,l=new Ie;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new L)}a[0]=new L,r[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ee(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(s[p],a[p])}if(n===!0){let p=Math.acos(ee(a[0].dot(a[t]),-1,1));p/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Yo=class extends hi{constructor(t=0,n=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new gt){let i=n,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xf=class extends Yo{constructor(t,n,i,s,a,r){super(t,n,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function z0(){let e=0,t=0,n=0,i=0;function s(a,r,o,l){e=a,t=o,n=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,u,d){let f=(r-a)/c-(o-a)/(c+u)+(o-r)/u,p=(o-r)/u-(l-r)/(u+d)+(l-o)/d;f*=u,p*=u,s(r,o,f,p)},calc:function(a){let r=a*a,o=r*a;return e+t*a+n*r+i*o}}}var af=new L,t0=new z0,e0=new z0,n0=new z0,Zo=class extends hi{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new L){let i=n,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%a]:(af.subVectors(s[0],s[1]).add(s[0]),c=af);let d=s[o%a],f=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(af.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=af),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),S=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),t0.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,g,S,m),e0.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,g,S,m),n0.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,g,S,m)}else this.curveType==="catmullrom"&&(t0.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),e0.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),n0.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(t0.calc(l),e0.calc(l),n0.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vM(e,t,n,i,s){let a=(i-t)*.5,r=(s-n)*.5,o=e*e,l=e*o;return(2*n-2*i+a+r)*l+(-3*n+3*i-2*a-r)*o+a*e+n}function OA(e,t){let n=1-e;return n*n*t}function PA(e,t){return 2*(1-e)*e*t}function zA(e,t){return e*e*t}function Mc(e,t,n,i){return OA(e,t)+PA(e,n)+zA(e,i)}function BA(e,t){let n=1-e;return n*n*n*t}function FA(e,t){let n=1-e;return 3*n*n*e*t}function HA(e,t){return 3*(1-e)*e*e*t}function VA(e,t){return e*e*e*t}function bc(e,t,n,i,s){return BA(e,t)+FA(e,n)+HA(e,i)+VA(e,s)}var zc=class extends hi{constructor(t=new gt,n=new gt,i=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new gt){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(bc(t,s.x,a.x,r.x,o.x),bc(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sf=class extends hi{constructor(t=new L,n=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new L){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(bc(t,s.x,a.x,r.x,o.x),bc(t,s.y,a.y,r.y,o.y),bc(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bc=class extends hi{constructor(t=new gt,n=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new gt){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new gt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mf=class extends hi{constructor(t=new L,n=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new L){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new L){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fc=class extends hi{constructor(t=new gt,n=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new gt){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(Mc(t,s.x,a.x,r.x),Mc(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bf=class extends hi{constructor(t=new L,n=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new L){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(Mc(t,s.x,a.x,r.x),Mc(t,s.y,a.y,r.y),Mc(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hc=class extends hi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new gt){let i=n,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(vM(o,l.x,c.x,u.x,d.x),vM(o,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new gt().fromArray(s))}return this}},c0=Object.freeze({__proto__:null,ArcCurve:xf,CatmullRomCurve3:Zo,CubicBezierCurve:zc,CubicBezierCurve3:Sf,EllipseCurve:Yo,LineCurve:Bc,LineCurve3:Mf,QuadraticBezierCurve:Fc,QuadraticBezierCurve3:bf,SplineCurve:Hc}),Ef=class extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new c0[i](n,t))}return this}getPoint(t,n){let i=t*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let r=s[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,n)}a++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){let n=[],i;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(new c0[s.type]().fromJSON(s))}return this}},gr=class extends Ef{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){let i=new Bc(this.currentPoint.clone(),new gt(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,s){let a=new Fc(this.currentPoint.clone(),new gt(t,n),new gt(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,n,i,s,a,r){let o=new zc(this.currentPoint.clone(),new gt(t,n),new gt(i,s),new gt(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){let n=[this.currentPoint.clone()].concat(t),i=new Hc(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,s,a,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,n+l,i,s,a,r),this}absarc(t,n,i,s,a,r){return this.absellipse(t,n,i,i,s,a,r),this}ellipse(t,n,i,s,a,r,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,n+u,i,s,a,r,o,l),this}absellipse(t,n,i,s,a,r,o,l){let c=new Yo(t,n,i,s,a,r,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ua=class extends gr{constructor(t){super(t),this.uuid=sl(),this.type="Shape",this.holes=[]}getPointsHoles(t){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(new gr().fromJSON(s))}return this}};function GA(e,t,n=2){let i=t&&t.length,s=i?t[0]*n:e.length,a=gb(e,0,s,n,!0),r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(i&&(a=YA(e,t,a,n)),e.length>80*n){o=1/0,l=1/0;let u=-1/0,d=-1/0;for(let f=n;f<s;f+=n){let p=e[f],g=e[f+1];p<o&&(o=p),g<l&&(l=g),p>u&&(u=p),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Vc(a,r,n,o,l,c,0),r}function gb(e,t,n,i,s){let a;if(s===sw(e,t,n,i)>0)for(let r=t;r<n;r+=i)a=yM(r/i|0,e[r],e[r+1],a);else for(let r=n-i;r>=t;r-=i)a=yM(r/i|0,e[r],e[r+1],a);return a&&Jo(a,a.next)&&(kc(a),a=a.next),a}function _r(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(Jo(n,n.next)||Fe(n.prev,n,n.next)===0)){if(kc(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function Vc(e,t,n,i,s,a,r){if(!e)return;!r&&a&&jA(e,i,s,a);let o=e;for(;e.prev!==e.next;){let l=e.prev,c=e.next;if(a?XA(e,i,s,a):kA(e)){t.push(l.i,e.i,c.i),kc(e),e=c.next,o=c.next;continue}if(e=c,e===o){r?r===1?(e=WA(_r(e),t),Vc(e,t,n,i,s,a,2)):r===2&&qA(e,t,n,i,s,a):Vc(_r(e),t,n,i,s,a,1);break}}}function kA(e){let t=e.prev,n=e,i=e.next;if(Fe(t,n,i)>=0)return!1;let s=t.x,a=n.x,r=i.x,o=t.y,l=n.y,c=i.y,u=Math.min(s,a,r),d=Math.min(o,l,c),f=Math.max(s,a,r),p=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=d&&g.y<=p&&Sc(s,o,a,l,r,c,g.x,g.y)&&Fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function XA(e,t,n,i){let s=e.prev,a=e,r=e.next;if(Fe(s,a,r)>=0)return!1;let o=s.x,l=a.x,c=r.x,u=s.y,d=a.y,f=r.y,p=Math.min(o,l,c),g=Math.min(u,d,f),S=Math.max(o,l,c),m=Math.max(u,d,f),h=u0(p,g,t,n,i),_=u0(S,m,t,n,i),v=e.prevZ,y=e.nextZ;for(;v&&v.z>=h&&y&&y.z<=_;){if(v.x>=p&&v.x<=S&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&Sc(o,u,l,d,c,f,v.x,v.y)&&Fe(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=S&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Sc(o,u,l,d,c,f,y.x,y.y)&&Fe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=h;){if(v.x>=p&&v.x<=S&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&Sc(o,u,l,d,c,f,v.x,v.y)&&Fe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=S&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Sc(o,u,l,d,c,f,y.x,y.y)&&Fe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function WA(e,t){let n=e;do{let i=n.prev,s=n.next.next;!Jo(i,s)&&vb(i,n,n.next,s)&&Gc(i,s)&&Gc(s,i)&&(t.push(i.i,n.i,s.i),kc(n),kc(n.next),n=e=s),n=n.next}while(n!==e);return _r(n)}function qA(e,t,n,i,s,a){let r=e;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&ew(r,o)){let l=yb(r,o);r=_r(r,r.next),l=_r(l,l.next),Vc(r,t,n,i,s,a,0),Vc(l,t,n,i,s,a,0);return}o=o.next}r=r.next}while(r!==e)}function YA(e,t,n,i){let s=[];for(let a=0,r=t.length;a<r;a++){let o=t[a]*i,l=a<r-1?t[a+1]*i:e.length,c=gb(e,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(tw(c))}s.sort(ZA);for(let a=0;a<s.length;a++)n=JA(s[a],n);return n}function ZA(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){let i=(e.next.y-e.y)/(e.next.x-e.x),s=(t.next.y-t.y)/(t.next.x-t.x);n=i-s}return n}function JA(e,t){let n=KA(e,t);if(!n)return t;let i=yb(n,e);return _r(i,i.next),_r(n,n.next)}function KA(e,t){let n=t,i=e.x,s=e.y,a=-1/0,r;if(Jo(e,n))return n;do{if(Jo(e,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>a&&(a=d,r=n.x<n.next.x?n:n.next,d===i))return r}n=n.next}while(n!==t);if(!r)return null;let o=r,l=r.x,c=r.y,u=1/0;n=r;do{if(i>=n.x&&n.x>=l&&i!==n.x&&_b(s<c?i:a,s,l,c,s<c?a:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);Gc(n,e)&&(d<u||d===u&&(n.x>r.x||n.x===r.x&&QA(r,n)))&&(r=n,u=d)}n=n.next}while(n!==o);return r}function QA(e,t){return Fe(e.prev,e,t.prev)<0&&Fe(t.next,e,e.next)<0}function jA(e,t,n,i){let s=e;do s.z===0&&(s.z=u0(s.x,s.y,t,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,$A(s)}function $A(e){let t,n=1;do{let i=e,s;e=null;let a=null;for(t=0;i;){t++;let r=i,o=0;for(let c=0;c<n&&(o++,r=r.nextZ,!!r);c++);let l=n;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:e=s,s.prevZ=a,a=s;i=r}a.nextZ=null,n*=2}while(t>1);return e}function u0(e,t,n,i,s){return e=(e-n)*s|0,t=(t-i)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function tw(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function _b(e,t,n,i,s,a,r,o){return(s-r)*(t-o)>=(e-r)*(a-o)&&(e-r)*(i-o)>=(n-r)*(t-o)&&(n-r)*(a-o)>=(s-r)*(i-o)}function Sc(e,t,n,i,s,a,r,o){return!(e===r&&t===o)&&_b(e,t,n,i,s,a,r,o)}function ew(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!nw(e,t)&&(Gc(e,t)&&Gc(t,e)&&iw(e,t)&&(Fe(e.prev,e,t.prev)||Fe(e,t.prev,t))||Jo(e,t)&&Fe(e.prev,e,e.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Jo(e,t){return e.x===t.x&&e.y===t.y}function vb(e,t,n,i){let s=of(Fe(e,t,n)),a=of(Fe(e,t,i)),r=of(Fe(n,i,e)),o=of(Fe(n,i,t));return!!(s!==a&&r!==o||s===0&&rf(e,n,t)||a===0&&rf(e,i,t)||r===0&&rf(n,e,i)||o===0&&rf(n,t,i))}function rf(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function of(e){return e>0?1:e<0?-1:0}function nw(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&vb(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Gc(e,t){return Fe(e.prev,e,e.next)<0?Fe(e,t,e.next)>=0&&Fe(e,e.prev,t)>=0:Fe(e,t,e.prev)<0||Fe(e,e.next,t)<0}function iw(e,t){let n=e,i=!1,s=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&s<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function yb(e,t){let n=h0(e.i,e.x,e.y),i=h0(t.i,t.x,t.y),s=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,i.next=n,n.prev=i,a.next=i,i.prev=a,i}function yM(e,t,n,i){let s=h0(e,t,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function kc(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function h0(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sw(e,t,n,i){let s=0;for(let a=t,r=n-i;a<n;a+=i)s+=(e[r]-e[a])*(e[a+1]+e[r+1]),r=a;return s}var f0=class{static triangulate(t,n,i=2){return GA(t,n,i)}},ji=class e{static area(t){let n=t.length,i=0;for(let s=n-1,a=0;a<n;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(t,n){let i=[],s=[],a=[];xM(t),SM(i,t);let r=t.length;n.forEach(xM);for(let l=0;l<n.length;l++)s.push(r),r+=n[l].length,SM(i,n[l]);let o=f0.triangulate(i,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function xM(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function SM(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ko=class e extends ui{constructor(t=new Ua([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];let i=this,s=[],a=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];r(c)}this.setAttribute("position",new cn(s,3)),this.setAttribute("uv",new cn(a,2)),this.computeVertexNormals();function r(o){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1,f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,S=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,h=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:aw,v,y=!1,A,R,w,U;h&&(v=h.getSpacedPoints(u),y=!0,f=!1,A=h.computeFrenetFrames(u,!1),R=new L,w=new L,U=new L),f||(m=0,p=0,g=0,S=0);let E=o.extractPoints(c),M=E.shape,D=E.holes;if(!ji.isClockWise(M)){M=M.reverse();for(let st=0,et=D.length;st<et;st++){let j=D[st];ji.isClockWise(j)&&(D[st]=j.reverse())}}function W(st){let j=10000000000000001e-36,Y=st[0];for(let dt=1;dt<=st.length;dt++){let rt=dt%st.length,ht=st[rt],Wt=ht.x-Y.x,Ht=ht.y-Y.y,T=Wt*Wt+Ht*Ht,x=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(Y.x),Math.abs(Y.y)),P=j*x*x;if(T<=P){st.splice(rt,1),dt--;continue}Y=ht}}W(M),D.forEach(W);let Q=D.length,Z=M;for(let st=0;st<Q;st++){let et=D[st];M=M.concat(et)}function q(st,et,j){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(et,j)}let at=M.length;function z(st,et,j){let Y,dt,rt,ht=st.x-et.x,Wt=st.y-et.y,Ht=j.x-st.x,T=j.y-st.y,x=ht*ht+Wt*Wt,P=ht*T-Wt*Ht;if(Math.abs(P)>Number.EPSILON){let k=Math.sqrt(x),it=Math.sqrt(Ht*Ht+T*T),X=et.x-Wt/k,At=et.y+ht/k,ct=j.x-T/it,wt=j.y+Ht/it,Rt=((ct-X)*T-(wt-At)*Ht)/(ht*T-Wt*Ht);Y=X+ht*Rt-st.x,dt=At+Wt*Rt-st.y;let ot=Y*Y+dt*dt;if(ot<=2)return new gt(Y,dt);rt=Math.sqrt(ot/2)}else{let k=!1;ht>Number.EPSILON?Ht>Number.EPSILON&&(k=!0):ht<-Number.EPSILON?Ht<-Number.EPSILON&&(k=!0):Math.sign(Wt)===Math.sign(T)&&(k=!0),k?(Y=-Wt,dt=ht,rt=Math.sqrt(x)):(Y=ht,dt=Wt,rt=Math.sqrt(x/2))}return new gt(Y/rt,dt/rt)}let pt=[];for(let st=0,et=Z.length,j=et-1,Y=st+1;st<et;st++,j++,Y++)j===et&&(j=0),Y===et&&(Y=0),pt[st]=z(Z[st],Z[j],Z[Y]);let _t=[],Mt,Pt=pt.concat();for(let st=0,et=Q;st<et;st++){let j=D[st];Mt=[];for(let Y=0,dt=j.length,rt=dt-1,ht=Y+1;Y<dt;Y++,rt++,ht++)rt===dt&&(rt=0),ht===dt&&(ht=0),Mt[Y]=z(j[Y],j[rt],j[ht]);_t.push(Mt),Pt=Pt.concat(Mt)}let zt;if(m===0)zt=ji.triangulateShape(Z,D);else{let st=[],et=[];for(let j=0;j<m;j++){let Y=j/m,dt=p*Math.cos(Y*Math.PI/2),rt=g*Math.sin(Y*Math.PI/2)+S;for(let ht=0,Wt=Z.length;ht<Wt;ht++){let Ht=q(Z[ht],pt[ht],rt);Ut(Ht.x,Ht.y,-dt),Y===0&&st.push(Ht)}for(let ht=0,Wt=Q;ht<Wt;ht++){let Ht=D[ht];Mt=_t[ht];let T=[];for(let x=0,P=Ht.length;x<P;x++){let k=q(Ht[x],Mt[x],rt);Ut(k.x,k.y,-dt),Y===0&&T.push(k)}Y===0&&et.push(T)}}zt=ji.triangulateShape(st,et)}let ue=zt.length,jt=g+S;for(let st=0;st<at;st++){let et=f?q(M[st],Pt[st],jt):M[st];y?(w.copy(A.normals[0]).multiplyScalar(et.x),R.copy(A.binormals[0]).multiplyScalar(et.y),U.copy(v[0]).add(w).add(R),Ut(U.x,U.y,U.z)):Ut(et.x,et.y,0)}for(let st=1;st<=u;st++)for(let et=0;et<at;et++){let j=f?q(M[et],Pt[et],jt):M[et];y?(w.copy(A.normals[st]).multiplyScalar(j.x),R.copy(A.binormals[st]).multiplyScalar(j.y),U.copy(v[st]).add(w).add(R),Ut(U.x,U.y,U.z)):Ut(j.x,j.y,d/u*st)}for(let st=m-1;st>=0;st--){let et=st/m,j=p*Math.cos(et*Math.PI/2),Y=g*Math.sin(et*Math.PI/2)+S;for(let dt=0,rt=Z.length;dt<rt;dt++){let ht=q(Z[dt],pt[dt],Y);Ut(ht.x,ht.y,d+j)}for(let dt=0,rt=D.length;dt<rt;dt++){let ht=D[dt];Mt=_t[dt];for(let Wt=0,Ht=ht.length;Wt<Ht;Wt++){let T=q(ht[Wt],Mt[Wt],Y);y?Ut(T.x,T.y+v[u-1].y,v[u-1].x+j):Ut(T.x,T.y,d+j)}}}$(),J();function $(){let st=s.length/3;if(f){let et=0,j=at*et;for(let Y=0;Y<ue;Y++){let dt=zt[Y];Ct(dt[2]+j,dt[1]+j,dt[0]+j)}et=u+m*2,j=at*et;for(let Y=0;Y<ue;Y++){let dt=zt[Y];Ct(dt[0]+j,dt[1]+j,dt[2]+j)}}else{for(let et=0;et<ue;et++){let j=zt[et];Ct(j[2],j[1],j[0])}for(let et=0;et<ue;et++){let j=zt[et];Ct(j[0]+at*u,j[1]+at*u,j[2]+at*u)}}i.addGroup(st,s.length/3-st,0)}function J(){let st=s.length/3,et=0;bt(Z,et),et+=Z.length;for(let j=0,Y=D.length;j<Y;j++){let dt=D[j];bt(dt,et),et+=dt.length}i.addGroup(st,s.length/3-st,1)}function bt(st,et){let j=st.length;for(;--j>=0;){let Y=j,dt=j-1;dt<0&&(dt=st.length-1);for(let rt=0,ht=u+m*2;rt<ht;rt++){let Wt=at*rt,Ht=at*(rt+1),T=et+Y+Wt,x=et+dt+Wt,P=et+dt+Ht,k=et+Y+Ht;Yt(T,x,P,k)}}}function Ut(st,et,j){l.push(st),l.push(et),l.push(j)}function Ct(st,et,j){he(st),he(et),he(j);let Y=s.length/3,dt=_.generateTopUV(i,s,Y-3,Y-2,Y-1);C(dt[0]),C(dt[1]),C(dt[2])}function Yt(st,et,j,Y){he(st),he(et),he(Y),he(et),he(j),he(Y);let dt=s.length/3,rt=_.generateSideWallUV(i,s,dt-6,dt-3,dt-2,dt-1);C(rt[0]),C(rt[1]),C(rt[3]),C(rt[1]),C(rt[2]),C(rt[3])}function he(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function C(st){a.push(st.x),a.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return rw(n,i,t)}static fromJSON(t,n){let i=[];for(let a=0,r=t.shapes.length;a<r;a++){let o=n[t.shapes[a]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new c0[s.type]().fromJSON(s)),new e(i,t.options)}},aw={generateTopUV:function(e,t,n,i,s){let a=t[n*3],r=t[n*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new gt(a,r),new gt(o,l),new gt(c,u)]},generateSideWallUV:function(e,t,n,i,s,a){let r=t[n*3],o=t[n*3+1],l=t[n*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],S=t[a*3],m=t[a*3+1],h=t[a*3+2];return Math.abs(o-u)<Math.abs(r-c)?[new gt(r,1-l),new gt(c,1-d),new gt(f,1-g),new gt(S,1-h)]:[new gt(o,1-l),new gt(u,1-d),new gt(p,1-g),new gt(m,1-h)]}};function rw(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let a=e[i];n.shapes.push(a.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var vr=class e extends ui{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=n/l,p=[],g=[],S=[],m=[];for(let h=0;h<u;h++){let _=h*f-r;for(let v=0;v<c;v++){let y=v*d-a;g.push(y,-_,0),S.push(0,0,1),m.push(v/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<o;_++){let v=_+c*h,y=_+c*(h+1),A=_+1+c*(h+1),R=_+1+c*h;p.push(v,y,R),p.push(y,A,R)}this.setIndex(p),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(S,3)),this.setAttribute("uv",new cn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var Xc=class e extends ui{constructor(t=new Ua([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};let i=[],s=[],a=[],r=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new cn(s,3)),this.setAttribute("normal",new cn(a,3)),this.setAttribute("uv",new cn(r,2));function c(u){let d=s.length/3,f=u.extractPoints(n),p=f.shape,g=f.holes;ji.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,h=g.length;m<h;m++){let _=g[m];ji.isClockWise(_)===!0&&(g[m]=_.reverse())}let S=ji.triangulateShape(p,g);for(let m=0,h=g.length;m<h;m++){let _=g[m];p=p.concat(_)}for(let m=0,h=p.length;m<h;m++){let _=p[m];s.push(_.x,_.y,0),a.push(0,0,1),r.push(_.x,_.y)}for(let m=0,h=S.length;m<h;m++){let _=S[m],v=_[0]+d,y=_[1]+d,A=_[2]+d;i.push(v,y,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes;return ow(n,t)}static fromJSON(t,n){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let r=n[t.shapes[s]];i.push(r)}return new e(i,t.curveSegments)}};function ow(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let s=e[n];t.shapes.push(s.uuid)}else t.shapes.push(e.uuid);return t}var Qo=class e extends ui{constructor(t=1,n=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);let r=[],o=[],l=[],c=[],u=new L,d=new L,f=new L;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let S=g/s*a,m=p/i*Math.PI*2;d.x=(t+n*Math.cos(m))*Math.cos(S),d.y=(t+n*Math.cos(m))*Math.sin(S),d.z=n*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let S=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,h=(s+1)*(p-1)+g,_=(s+1)*p+g;r.push(S,m,_),r.push(m,h,_)}this.setIndex(r),this.setAttribute("position",new cn(o,3)),this.setAttribute("normal",new cn(l,3)),this.setAttribute("uv",new cn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var jo=class extends Da{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=L0,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},La=class extends jo{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Tf=class extends Da{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Af=class extends Da{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function lf(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function lw(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var yr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wf=class extends yr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:s0,endingEnd:s0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case a0:a=t,o=2*n-i;break;case r0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case a0:r=t,l=2*i-n;break;case r0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),S=g*g,m=S*g,h=-f*m+2*f*S-f*g,_=(1+f)*m+(-1.5-2*f)*S+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*S+.5*g,y=p*m-p*S;for(let A=0;A!==o;++A)a[A]=h*r[u+A]+_*r[c+A]+v*r[l+A]+y*r[d+A];return a}},Rf=class extends yr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),d=1-u;for(let f=0;f!==o;++f)a[f]=r[c+f]*d+r[l+f]*u;return a}},Cf=class extends yr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lf(n,this.TimeBufferType),this.values=lf(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:lf(t.times,Array),values:lf(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Cf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Ec:n=this.InterpolantFactoryMethodDiscrete;break;case df:n=this.InterpolantFactoryMethodLinear;break;case cf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ec;case this.InterpolantFactoryMethodLinear:return df;case this.InterpolantFactoryMethodSmooth:return cf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&lw(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===cf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let S=n[d+g];if(S!==n[f+g]||S!==n[p+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,f=r*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=df;var Na=class extends fi{constructor(t,n,i){super(t,n,i)}};Na.prototype.ValueTypeName="bool";Na.prototype.ValueBufferType=Array;Na.prototype.DefaultInterpolation=Ec;Na.prototype.InterpolantFactoryMethodLinear=void 0;Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Df=class extends fi{constructor(t,n,i,s){super(t,n,i,s)}};Df.prototype.ValueTypeName="color";var Uf=class extends fi{constructor(t,n,i,s){super(t,n,i,s)}};Uf.prototype.ValueTypeName="number";var Lf=class extends yr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)Pn.slerpFlat(a,0,r,c-o,r,c,l);return a}},Wc=class extends fi{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Lf(this.times,this.values,this.getValueSize(),t)}};Wc.prototype.ValueTypeName="quaternion";Wc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends fi{constructor(t,n,i){super(t,n,i)}};Ia.prototype.ValueTypeName="string";Ia.prototype.ValueBufferType=Array;Ia.prototype.DefaultInterpolation=Ec;Ia.prototype.InterpolantFactoryMethodLinear=void 0;Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Nf=class extends fi{constructor(t,n,i,s){super(t,n,i,s)}};Nf.prototype.ValueTypeName="vector";var If=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},xb=new If,Of=class{constructor(t){this.manager=t!==void 0?t:xb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Of.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pf=class extends Bn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}};var i0=new Ie,MM=new L,bM=new L,d0=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;MM.setFromMatrixPosition(t.matrixWorld),n.position.copy(MM),bM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(bM),n.updateMatrixWorld(),i0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(i0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var qc=class extends Lc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},p0=class extends d0{constructor(){super(new qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$o=class extends Pf{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new p0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var zf=class extends Cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var B0="\\[\\]\\.:\\/",cw=new RegExp("["+B0+"]","g"),F0="[^"+B0+"]",uw="[^"+B0.replace("\\.","")+"]",hw=/((?:WC+[\/:])*)/.source.replace("WC",F0),fw=/(WCOD+)?/.source.replace("WCOD",uw),dw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",F0),pw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",F0),mw=new RegExp("^"+hw+fw+dw+pw+"$"),gw=["material","materials","bones","map"],m0=class{constructor(t,n,i){let s=i||Ne.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ne=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cw,"")}static parseTrackName(t){let n=mw.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);gw.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=m0;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var PD=new Float32Array(1);var EM=new Ie,Yc=class{constructor(t,n,i=0,s=1/0){this.ray=new Cc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new Go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return EM.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(EM),this}intersectObject(t,n=!0,i=[]){return g0(t,this,i,n),i.sort(TM),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)g0(t[s],this,i,n);return i.sort(TM),i}};function TM(e,t){return e.distance-t.distance}function g0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)g0(a[r],t,n,!0)}}function H0(e,t,n,i){let s=_w(i);switch(n){case R0:return e*t;case D0:return e*t/s.components*s.byteLength;case jf:return e*t/s.components*s.byteLength;case U0:return e*t*2/s.components*s.byteLength;case $f:return e*t*2/s.components*s.byteLength;case C0:return e*t*3/s.components*s.byteLength;case Ri:return e*t*4/s.components*s.byteLength;case td:return e*t*4/s.components*s.byteLength;case Kc:case Qc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case jc:case $c:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case nd:case sd:return Math.max(e,16)*Math.max(t,8)/4;case ed:case id:return Math.max(e,8)*Math.max(t,8)/2;case ad:case rd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case od:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ld:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case cd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ud:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case hd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case fd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case dd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case pd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case md:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case gd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case _d:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case vd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case yd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Sd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Md:case bd:case Ed:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Td:case Ad:return Math.ceil(e/4)*Math.ceil(t/4)*8;case wd:case Rd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _w(e){switch(e){case Bi:case E0:return{byteLength:1,components:1};case tl:case T0:case el:return{byteLength:2,components:1};case Kf:case Qf:return{byteLength:2,components:4};case Oa:case Jf:case is:return{byteLength:4,components:1};case A0:case w0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Xb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function yw(e){let t=new WeakMap;function n(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],S=d[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++f,d[f]=S)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let S=d[p];e.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var xw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ew=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Aw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ww=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Iw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ww=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$w=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_R=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ER=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,CR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$R=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_C=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:xw,alphahash_pars_fragment:Sw,alphamap_fragment:Mw,alphamap_pars_fragment:bw,alphatest_fragment:Ew,alphatest_pars_fragment:Tw,aomap_fragment:Aw,aomap_pars_fragment:ww,batching_pars_vertex:Rw,batching_vertex:Cw,begin_vertex:Dw,beginnormal_vertex:Uw,bsdfs:Lw,iridescence_fragment:Nw,bumpmap_pars_fragment:Iw,clipping_planes_fragment:Ow,clipping_planes_pars_fragment:Pw,clipping_planes_pars_vertex:zw,clipping_planes_vertex:Bw,color_fragment:Fw,color_pars_fragment:Hw,color_pars_vertex:Vw,color_vertex:Gw,common:kw,cube_uv_reflection_fragment:Xw,defaultnormal_vertex:Ww,displacementmap_pars_vertex:qw,displacementmap_vertex:Yw,emissivemap_fragment:Zw,emissivemap_pars_fragment:Jw,colorspace_fragment:Kw,colorspace_pars_fragment:Qw,envmap_fragment:jw,envmap_common_pars_fragment:$w,envmap_pars_fragment:tR,envmap_pars_vertex:eR,envmap_physical_pars_fragment:fR,envmap_vertex:nR,fog_vertex:iR,fog_pars_vertex:sR,fog_fragment:aR,fog_pars_fragment:rR,gradientmap_pars_fragment:oR,lightmap_pars_fragment:lR,lights_lambert_fragment:cR,lights_lambert_pars_fragment:uR,lights_pars_begin:hR,lights_toon_fragment:dR,lights_toon_pars_fragment:pR,lights_phong_fragment:mR,lights_phong_pars_fragment:gR,lights_physical_fragment:_R,lights_physical_pars_fragment:vR,lights_fragment_begin:yR,lights_fragment_maps:xR,lights_fragment_end:SR,logdepthbuf_fragment:MR,logdepthbuf_pars_fragment:bR,logdepthbuf_pars_vertex:ER,logdepthbuf_vertex:TR,map_fragment:AR,map_pars_fragment:wR,map_particle_fragment:RR,map_particle_pars_fragment:CR,metalnessmap_fragment:DR,metalnessmap_pars_fragment:UR,morphinstance_vertex:LR,morphcolor_vertex:NR,morphnormal_vertex:IR,morphtarget_pars_vertex:OR,morphtarget_vertex:PR,normal_fragment_begin:zR,normal_fragment_maps:BR,normal_pars_fragment:FR,normal_pars_vertex:HR,normal_vertex:VR,normalmap_pars_fragment:GR,clearcoat_normal_fragment_begin:kR,clearcoat_normal_fragment_maps:XR,clearcoat_pars_fragment:WR,iridescence_pars_fragment:qR,opaque_fragment:YR,packing:ZR,premultiplied_alpha_fragment:JR,project_vertex:KR,dithering_fragment:QR,dithering_pars_fragment:jR,roughnessmap_fragment:$R,roughnessmap_pars_fragment:tC,shadowmap_pars_fragment:eC,shadowmap_pars_vertex:nC,shadowmap_vertex:iC,shadowmask_pars_fragment:sC,skinbase_vertex:aC,skinning_pars_vertex:rC,skinning_vertex:oC,skinnormal_vertex:lC,specularmap_fragment:cC,specularmap_pars_fragment:uC,tonemapping_fragment:hC,tonemapping_pars_fragment:fC,transmission_fragment:dC,transmission_pars_fragment:pC,uv_pars_fragment:mC,uv_pars_vertex:gC,uv_vertex:_C,worldpos_vertex:vC,background_vert:yC,background_frag:xC,backgroundCube_vert:SC,backgroundCube_frag:MC,cube_vert:bC,cube_frag:EC,depth_vert:TC,depth_frag:AC,distanceRGBA_vert:wC,distanceRGBA_frag:RC,equirect_vert:CC,equirect_frag:DC,linedashed_vert:UC,linedashed_frag:LC,meshbasic_vert:NC,meshbasic_frag:IC,meshlambert_vert:OC,meshlambert_frag:PC,meshmatcap_vert:zC,meshmatcap_frag:BC,meshnormal_vert:FC,meshnormal_frag:HC,meshphong_vert:VC,meshphong_frag:GC,meshphysical_vert:kC,meshphysical_frag:XC,meshtoon_vert:WC,meshtoon_frag:qC,points_vert:YC,points_frag:ZC,shadow_vert:JC,shadow_frag:KC,sprite_vert:QC,sprite_frag:jC},yt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},ss={basic:{uniforms:Dn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Dn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Dn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Dn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Dn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Dn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Dn([yt.points,yt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Dn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Dn([yt.common,yt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Dn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Dn([yt.sprite,yt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Dn([yt.common,yt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Dn([yt.lights,yt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};ss.physical={uniforms:Dn([ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Cd={r:0,b:0,g:0},br=new Pi,$C=new Ie;function t2(e,t,n,i,s,a,r){let o=new Qt(0),l=a===!0?0:1,c,u,d=null,f=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:t).get(y)),y}function S(v){let y=!1,A=g(v);A===null?h(o,l):A&&A.isColor&&(h(A,1),y=!0);let R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(v,y){let A=g(y);A&&(A.isCubeTexture||A.mapping===Zc)?(u===void 0&&(u=new We(new ko(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Mr(ss.backgroundCube.uniforms),vertexShader:ss.backgroundCube.vertexShader,fragmentShader:ss.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),br.copy(y.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($C.makeRotationFromEuler(br)),u.material.toneMapped=fe.getTransfer(A.colorSpace)!==Se,(d!==A||f!==A.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=A,f=A.version,p=e.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new We(new vr(2,2),new zi({name:"BackgroundMaterial",uniforms:Mr(ss.background.uniforms),vertexShader:ss.background.vertexShader,fragmentShader:ss.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=fe.getTransfer(A.colorSpace)!==Se,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,p=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,y){v.getRGB(Cd,P0(e)),i.buffers.color.setClear(Cd.r,Cd.g,Cd.b,y,r)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(o,l)},render:S,addToRenderList:m,dispose:_}}function e2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(M,D,H,W,Q){let Z=!1,q=d(W,H,D);a!==q&&(a=q,c(a.object)),Z=p(M,W,H,Q),Z&&g(M,W,H,Q),Q!==null&&t.update(Q,e.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,y(M,D,H,W),Q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function u(M){return e.deleteVertexArray(M)}function d(M,D,H){let W=H.wireframe===!0,Q=i[M.id];Q===void 0&&(Q={},i[M.id]=Q);let Z=Q[D.id];Z===void 0&&(Z={},Q[D.id]=Z);let q=Z[W];return q===void 0&&(q=f(l()),Z[W]=q),q}function f(M){let D=[],H=[],W=[];for(let Q=0;Q<n;Q++)D[Q]=0,H[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:W,object:M,attributes:{},index:null}}function p(M,D,H,W){let Q=a.attributes,Z=D.attributes,q=0,at=H.getAttributes();for(let z in at)if(at[z].location>=0){let _t=Q[z],Mt=Z[z];if(Mt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),_t===void 0||_t.attribute!==Mt||Mt&&_t.data!==Mt.data)return!0;q++}return a.attributesNum!==q||a.index!==W}function g(M,D,H,W){let Q={},Z=D.attributes,q=0,at=H.getAttributes();for(let z in at)if(at[z].location>=0){let _t=Z[z];_t===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));let Mt={};Mt.attribute=_t,_t&&_t.data&&(Mt.data=_t.data),Q[z]=Mt,q++}a.attributes=Q,a.attributesNum=q,a.index=W}function S(){let M=a.newAttributes;for(let D=0,H=M.length;D<H;D++)M[D]=0}function m(M){h(M,0)}function h(M,D){let H=a.newAttributes,W=a.enabledAttributes,Q=a.attributeDivisors;H[M]=1,W[M]===0&&(e.enableVertexAttribArray(M),W[M]=1),Q[M]!==D&&(e.vertexAttribDivisor(M,D),Q[M]=D)}function _(){let M=a.newAttributes,D=a.enabledAttributes;for(let H=0,W=D.length;H<W;H++)D[H]!==M[H]&&(e.disableVertexAttribArray(H),D[H]=0)}function v(M,D,H,W,Q,Z,q){q===!0?e.vertexAttribIPointer(M,D,H,Q,Z):e.vertexAttribPointer(M,D,H,W,Q,Z)}function y(M,D,H,W){S();let Q=W.attributes,Z=H.getAttributes(),q=D.defaultAttributeValues;for(let at in Z){let z=Z[at];if(z.location>=0){let pt=Q[at];if(pt===void 0&&(at==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),at==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),pt!==void 0){let _t=pt.normalized,Mt=pt.itemSize,Pt=t.get(pt);if(Pt===void 0)continue;let zt=Pt.buffer,ue=Pt.type,jt=Pt.bytesPerElement,$=ue===e.INT||ue===e.UNSIGNED_INT||pt.gpuType===Jf;if(pt.isInterleavedBufferAttribute){let J=pt.data,bt=J.stride,Ut=pt.offset;if(J.isInstancedInterleavedBuffer){for(let Ct=0;Ct<z.locationSize;Ct++)h(z.location+Ct,J.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ct=0;Ct<z.locationSize;Ct++)m(z.location+Ct);e.bindBuffer(e.ARRAY_BUFFER,zt);for(let Ct=0;Ct<z.locationSize;Ct++)v(z.location+Ct,Mt/z.locationSize,ue,_t,bt*jt,(Ut+Mt/z.locationSize*Ct)*jt,$)}else{if(pt.isInstancedBufferAttribute){for(let J=0;J<z.locationSize;J++)h(z.location+J,pt.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let J=0;J<z.locationSize;J++)m(z.location+J);e.bindBuffer(e.ARRAY_BUFFER,zt);for(let J=0;J<z.locationSize;J++)v(z.location+J,Mt/z.locationSize,ue,_t,Mt*jt,Mt/z.locationSize*J*jt,$)}}else if(q!==void 0){let _t=q[at];if(_t!==void 0)switch(_t.length){case 2:e.vertexAttrib2fv(z.location,_t);break;case 3:e.vertexAttrib3fv(z.location,_t);break;case 4:e.vertexAttrib4fv(z.location,_t);break;default:e.vertexAttrib1fv(z.location,_t)}}}}_()}function A(){U();for(let M in i){let D=i[M];for(let H in D){let W=D[H];for(let Q in W)u(W[Q].object),delete W[Q];delete D[H]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;let D=i[M.id];for(let H in D){let W=D[H];for(let Q in W)u(W[Q].object),delete W[Q];delete D[H]}delete i[M.id]}function w(M){for(let D in i){let H=i[D];if(H[M.id]===void 0)continue;let W=H[M.id];for(let Q in W)u(W[Q].object),delete W[Q];delete H[M.id]}}function U(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:_}}function n2(e,t,n){let i;function s(c){i=c}function a(c,u){e.drawArrays(i,c,u),n.update(u,i,1)}function r(c,u,d){d!==0&&(e.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let S=0;S<d;S++)g+=u[S]*f[S];n.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function i2(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Ri&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let U=w===el&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Bi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==is&&!U)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:A,maxSamples:R}}function s2(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Ji,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,h=e.get(d);if(!s||g===null||g.length===0||a&&!m)a?u(null):c();else{let _=a?0:i,v=_*4,y=h.clippingState||null;l.value=y,y=u(g,f,v,p);for(let A=0;A!==v;++A)y[A]=n[A];h.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,g){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,g!==!0||m===null){let h=p+S*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,y=p;v!==S;++v,y+=4)r.copy(d[v]).applyMatrix4(_,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function a2(e){let t=new WeakMap;function n(r,o){return o===qf?r.mapping=xr:o===Yf&&(r.mapping=Sr),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===qf||o===Yf)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new yf(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var rl=4,Sb=[.125,.215,.35,.446,.526,.582],Ar=20,V0=new qc,Mb=new Qt,G0=null,k0=0,X0=0,W0=!1,Tr=(1+Math.sqrt(5))/2,al=1/Tr,bb=[new L(-Tr,al,0),new L(Tr,al,0),new L(-al,0,Tr),new L(al,0,Tr),new L(0,Tr,-al),new L(0,Tr,al),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],r2=new L,ll=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=r2}=a;G0=this._renderer.getRenderTarget(),k0=this._renderer.getActiveCubeFace(),X0=this._renderer.getActiveMipmapLevel(),W0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ab(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(G0,k0,X0),this._renderer.xr.enabled=W0,t.scissorTest=!1,Dd(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===xr||t.mapping===Sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),G0=this._renderer.getRenderTarget(),k0=this._renderer.getActiveCubeFace(),X0=this._renderer.getActiveMipmapLevel(),W0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:el,format:Ri,colorSpace:dr,depthBuffer:!1},s=Eb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eb(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=o2(a)),this._blurMaterial=l2(a,t,n)}return s}_compileMaterial(t){let n=new We(this._lodPlanes[0],t);this._renderer.compile(n,V0)}_sceneToCubeUV(t,n,i,s,a){let l=new Cn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Mb),d.toneMapping=zs,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let S=new pr({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),m=new We(new ko,S),h=!1,_=t.background;_?_.isColor&&(S.color.copy(_),t.background=null,h=!0):(S.color.copy(Mb),h=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[v],a.y,a.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[v],a.z)):(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[v]));let A=this._cubeSize;Dd(s,y*A,v>2?A:0,A,A),d.setRenderTarget(s),h&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=_}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===xr||t.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ab()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new We(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Dd(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,V0)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=bb[(s-a-1)%bb.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new We(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Ar-1),S=a/g,m=isFinite(a)?1+Math.floor(u*S):Ar;m>Ar&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);let h=[],_=0;for(let w=0;w<Ar;++w){let U=w/S,E=Math.exp(-U*U/2);h.push(E),w===0?_+=E:w<m&&(_+=2*E)}for(let w=0;w<h.length;w++)h[w]=h[w]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let y=this._sizeLods[s],A=3*y*(s>v-rl?s-v+rl:0),R=4*(this._cubeSize-y);Dd(n,A,R,3*y,2*y),l.setRenderTarget(n),l.render(d,V0)}};function o2(e){let t=[],n=[],i=[],s=e,a=e-rl+1+Sb.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-rl?l=Sb[r-e+rl-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,S=3,m=2,h=1,_=new Float32Array(S*g*p),v=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let R=0;R<p;R++){let w=R%3*2/3-1,U=R>2?0:-1,E=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];_.set(E,S*g*R),v.set(f,m*g*R);let M=[R,R,R,R,R,R];y.set(M,h*g*R)}let A=new ui;A.setAttribute("position",new vn(_,S)),A.setAttribute("uv",new vn(v,m)),A.setAttribute("faceIndex",new vn(y,h)),t.push(A),s>rl&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Eb(e,t,n){let i=new ts(e,t,n);return i.texture.mapping=Zc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dd(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function l2(e,t,n){let i=new Float32Array(Ar),s=new L(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:e_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Tb(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:e_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Ab(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:e_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function e_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function c2(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===qf||l===Yf,u=l===xr||l===Sr;if(c||u){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new ll(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new ll(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function u2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Fo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function h2(e,t,n,i){let s={},a=new WeakMap;function r(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete s[f.id];let p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,g=d.attributes.position,S=0;if(p!==null){let _=p.array;S=p.version;for(let v=0,y=_.length;v<y;v+=3){let A=_[v+0],R=_[v+1],w=_[v+2];f.push(A,R,R,w,w,A)}}else if(g!==void 0){let _=g.array;S=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let A=v+0,R=v+1,w=v+2;f.push(A,R,R,w,w,A)}}else return;let m=new(O0(f)?Uc:Dc)(f,1);m.version=S;let h=a.get(d);h&&t.remove(h),a.set(d,m)}function u(d){let f=a.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function f2(e,t,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,p){e.drawElements(i,p,a,f*r),n.update(p,i,1)}function c(f,p,g){g!==0&&(e.drawElementsInstanced(i,p,a,f*r,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function d(f,p,g,S){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/r,p[h],S[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,f,0,S,0,g);let h=0;for(let _=0;_<g;_++)h+=p[_]*S[_];n.update(h,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function d2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function p2(e,t,n){let i=new WeakMap,s=new He;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(o);if(f===void 0||f.count!==d){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),S===!0&&(v=3);let y=o.attributes.position.count*v,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let R=new Float32Array(y*A*4*d),w=new Rc(R,y,A,d);w.type=is,w.needsUpdate=!0;let U=v*4;for(let M=0;M<d;M++){let D=m[M],H=h[M],W=_[M],Q=y*A*4*M;for(let Z=0;Z<D.count;Z++){let q=Z*U;p===!0&&(s.fromBufferAttribute(D,Z),R[Q+q+0]=s.x,R[Q+q+1]=s.y,R[Q+q+2]=s.z,R[Q+q+3]=0),g===!0&&(s.fromBufferAttribute(H,Z),R[Q+q+4]=s.x,R[Q+q+5]=s.y,R[Q+q+6]=s.z,R[Q+q+7]=0),S===!0&&(s.fromBufferAttribute(W,Z),R[Q+q+8]=s.x,R[Q+q+9]=s.y,R[Q+q+10]=s.z,R[Q+q+11]=W.itemSize===4?s.w:1)}}f={count:d,texture:w,size:new gt(y,A)},i.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:a}}function m2(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var Wb=new zn,wb=new Oc(1,1),qb=new Rc,Yb=new _f,Zb=new Nc,Rb=[],Cb=[],Db=new Float32Array(16),Ub=new Float32Array(9),Lb=new Float32Array(4);function cl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Rb[s];if(a===void 0&&(a=new Float32Array(s),Rb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function tn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function en(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Nd(e,t){let n=Cb[t];n===void 0&&(n=new Int32Array(t),Cb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function g2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function _2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2fv(this.addr,t),en(n,t)}}function v2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(tn(n,t))return;e.uniform3fv(this.addr,t),en(n,t)}}function y2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4fv(this.addr,t),en(n,t)}}function x2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;Lb.set(i),e.uniformMatrix2fv(this.addr,!1,Lb),en(n,i)}}function S2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;Ub.set(i),e.uniformMatrix3fv(this.addr,!1,Ub),en(n,i)}}function M2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;Db.set(i),e.uniformMatrix4fv(this.addr,!1,Db),en(n,i)}}function b2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function E2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2iv(this.addr,t),en(n,t)}}function T2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tn(n,t))return;e.uniform3iv(this.addr,t),en(n,t)}}function A2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4iv(this.addr,t),en(n,t)}}function w2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function R2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2uiv(this.addr,t),en(n,t)}}function C2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tn(n,t))return;e.uniform3uiv(this.addr,t),en(n,t)}}function D2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4uiv(this.addr,t),en(n,t)}}function U2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(wb.compareFunction=N0,a=wb):a=Wb,n.setTexture2D(t||a,s)}function L2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Yb,s)}function N2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Zb,s)}function I2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||qb,s)}function O2(e){switch(e){case 5126:return g2;case 35664:return _2;case 35665:return v2;case 35666:return y2;case 35674:return x2;case 35675:return S2;case 35676:return M2;case 5124:case 35670:return b2;case 35667:case 35671:return E2;case 35668:case 35672:return T2;case 35669:case 35673:return A2;case 5125:return w2;case 36294:return R2;case 36295:return C2;case 36296:return D2;case 35678:case 36198:case 36298:case 36306:case 35682:return U2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return N2;case 36289:case 36303:case 36311:case 36292:return I2}}function P2(e,t){e.uniform1fv(this.addr,t)}function z2(e,t){let n=cl(t,this.size,2);e.uniform2fv(this.addr,n)}function B2(e,t){let n=cl(t,this.size,3);e.uniform3fv(this.addr,n)}function F2(e,t){let n=cl(t,this.size,4);e.uniform4fv(this.addr,n)}function H2(e,t){let n=cl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function V2(e,t){let n=cl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function G2(e,t){let n=cl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function k2(e,t){e.uniform1iv(this.addr,t)}function X2(e,t){e.uniform2iv(this.addr,t)}function W2(e,t){e.uniform3iv(this.addr,t)}function q2(e,t){e.uniform4iv(this.addr,t)}function Y2(e,t){e.uniform1uiv(this.addr,t)}function Z2(e,t){e.uniform2uiv(this.addr,t)}function J2(e,t){e.uniform3uiv(this.addr,t)}function K2(e,t){e.uniform4uiv(this.addr,t)}function Q2(e,t,n){let i=this.cache,s=t.length,a=Nd(n,s);tn(i,a)||(e.uniform1iv(this.addr,a),en(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||Wb,a[r])}function j2(e,t,n){let i=this.cache,s=t.length,a=Nd(n,s);tn(i,a)||(e.uniform1iv(this.addr,a),en(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||Yb,a[r])}function $2(e,t,n){let i=this.cache,s=t.length,a=Nd(n,s);tn(i,a)||(e.uniform1iv(this.addr,a),en(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||Zb,a[r])}function t3(e,t,n){let i=this.cache,s=t.length,a=Nd(n,s);tn(i,a)||(e.uniform1iv(this.addr,a),en(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||qb,a[r])}function e3(e){switch(e){case 5126:return P2;case 35664:return z2;case 35665:return B2;case 35666:return F2;case 35674:return H2;case 35675:return V2;case 35676:return G2;case 5124:case 35670:return k2;case 35667:case 35671:return X2;case 35668:case 35672:return W2;case 35669:case 35673:return q2;case 5125:return Y2;case 36294:return Z2;case 36295:return J2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return Q2;case 35679:case 36299:case 36307:return j2;case 35680:case 36300:case 36308:case 36293:return $2;case 36289:case 36303:case 36311:case 36292:return t3}}var Y0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=O2(n.type)}},Z0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=e3(n.type)}},J0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},q0=/(\w+)(\])?(\[|\.)?/g;function Nb(e,t){e.seq.push(t),e.map[t.id]=t}function n3(e,t,n){let i=e.name,s=i.length;for(q0.lastIndex=0;;){let a=q0.exec(i),r=q0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Nb(n,c===void 0?new Y0(o,e,t):new Z0(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new J0(o),Nb(n,d)),n=d}}}var ol=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);n3(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Ib(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var i3=37297,s3=0;function a3(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var Ob=new Kt;function r3(e){fe._getMatrix(Ob,fe.workingColorSpace,e);let t=`mat3( ${Ob.elements.map(n=>n.toFixed(4))} )`;switch(fe.getTransfer(e)){case Tc:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Pb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+a3(e.getShaderSource(t),o)}else return a}function o3(e,t){let n=r3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function l3(e,t){let n;switch(t){case JM:n="Linear";break;case KM:n="Reinhard";break;case QM:n="Cineon";break;case jM:n="ACESFilmic";break;case tb:n="AgX";break;case Wf:n="Neutral";break;case $M:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ud=new L;function c3(){fe.getLuminanceCoefficients(Ud);let e=Ud.x.toFixed(4),t=Ud.y.toFixed(4),n=Ud.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tu).join(`
`)}function h3(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function f3(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function tu(e){return e!==""}function zb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var d3=/^[ \t]*#include +<([\w\d./]+)>/gm;function K0(e){return e.replace(d3,m3)}var p3=new Map;function m3(e,t){let n=te[t];if(n===void 0){let i=p3.get(t);if(i!==void 0)n=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return K0(n)}var g3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fb(e){return e.replace(g3,_3)}function _3(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Hb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function v3(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===v0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===RM?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===es&&(t="SHADOWMAP_TYPE_VSM"),t}function y3(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case xr:case Sr:t="ENVMAP_TYPE_CUBE";break;case Zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function x3(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Sr:t="ENVMAP_MODE_REFRACTION";break}return t}function S3(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case M0:t="ENVMAP_BLENDING_MULTIPLY";break;case YM:t="ENVMAP_BLENDING_MIX";break;case ZM:t="ENVMAP_BLENDING_ADD";break}return t}function M3(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function b3(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=v3(n),c=y3(n),u=x3(n),d=S3(n),f=M3(n),p=u3(n),g=h3(a),S=s.createProgram(),m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(tu).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(tu).join(`
`),h.length>0&&(h+=`
`)):(m=[Hb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tu).join(`
`),h=[Hb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zs?"#define TONE_MAPPING":"",n.toneMapping!==zs?te.tonemapping_pars_fragment:"",n.toneMapping!==zs?l3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,o3("linearToOutputTexel",n.outputColorSpace),c3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(tu).join(`
`)),r=K0(r),r=zb(r,n),r=Bb(r,n),o=K0(o),o=zb(o,n),o=Bb(o,n),r=Fb(r),o=Fb(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===I0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===I0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let v=_+m+r,y=_+h+o,A=Ib(s,s.VERTEX_SHADER,v),R=Ib(s,s.FRAGMENT_SHADER,y);s.attachShader(S,A),s.attachShader(S,R),n.index0AttributeName!==void 0?s.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function w(D){if(e.debug.checkShaderErrors){let H=s.getProgramInfoLog(S)||"",W=s.getShaderInfoLog(A)||"",Q=s.getShaderInfoLog(R)||"",Z=H.trim(),q=W.trim(),at=Q.trim(),z=!0,pt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,S,A,R);else{let _t=Pb(s,A,"vertex"),Mt=Pb(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Z+`
`+_t+`
`+Mt)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(q===""||at==="")&&(pt=!1);pt&&(D.diagnostics={runnable:z,programLog:Z,vertexShader:{log:q,prefix:m},fragmentShader:{log:at,prefix:h}})}s.deleteShader(A),s.deleteShader(R),U=new ol(s,S),E=f3(s,S)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(S,i3)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=s3++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=R,this}var E3=0,Q0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new j0(t),n.set(t,i)),i}},j0=class{constructor(t){this.id=E3++,this.code=t,this.usedTimes=0}};function T3(e,t,n,i,s,a,r){let o=new Go,l=new Q0,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,D,H,W){let Q=H.fog,Z=W.geometry,q=E.isMeshStandardMaterial?H.environment:null,at=(E.isMeshStandardMaterial?n:t).get(E.envMap||q),z=at&&at.mapping===Zc?at.image.height:null,pt=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let _t=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mt=_t!==void 0?_t.length:0,Pt=0;Z.morphAttributes.position!==void 0&&(Pt=1),Z.morphAttributes.normal!==void 0&&(Pt=2),Z.morphAttributes.color!==void 0&&(Pt=3);let zt,ue,jt,$;if(pt){let le=ss[pt];zt=le.vertexShader,ue=le.fragmentShader}else zt=E.vertexShader,ue=E.fragmentShader,l.update(E),jt=l.getVertexShaderID(E),$=l.getFragmentShaderID(E);let J=e.getRenderTarget(),bt=e.state.buffers.depth.getReversed(),Ut=W.isInstancedMesh===!0,Ct=W.isBatchedMesh===!0,Yt=!!E.map,he=!!E.matcap,C=!!at,st=!!E.aoMap,et=!!E.lightMap,j=!!E.bumpMap,Y=!!E.normalMap,dt=!!E.displacementMap,rt=!!E.emissiveMap,ht=!!E.metalnessMap,Wt=!!E.roughnessMap,Ht=E.anisotropy>0,T=E.clearcoat>0,x=E.dispersion>0,P=E.iridescence>0,k=E.sheen>0,it=E.transmission>0,X=Ht&&!!E.anisotropyMap,At=T&&!!E.clearcoatMap,ct=T&&!!E.clearcoatNormalMap,wt=T&&!!E.clearcoatRoughnessMap,Rt=P&&!!E.iridescenceMap,ot=P&&!!E.iridescenceThicknessMap,vt=k&&!!E.sheenColorMap,Bt=k&&!!E.sheenRoughnessMap,Dt=!!E.specularMap,B=!!E.specularColorMap,kt=!!E.specularIntensityMap,N=it&&!!E.transmissionMap,ut=it&&!!E.thicknessMap,mt=!!E.gradientMap,ft=!!E.alphaMap,nt=E.alphaTest>0,K=!!E.alphaHash,Et=!!E.extensions,Xt=zs;E.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Xt=e.toneMapping);let oe={shaderID:pt,shaderType:E.type,shaderName:E.name,vertexShader:zt,fragmentShader:ue,defines:E.defines,customVertexShaderID:jt,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&W._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&W.instanceColor!==null,instancingMorph:Ut&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?e.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:dr,alphaToCoverage:!!E.alphaToCoverage,map:Yt,matcap:he,envMap:C,envMapMode:C&&at.mapping,envMapCubeUVHeight:z,aoMap:st,lightMap:et,bumpMap:j,normalMap:Y,displacementMap:f&&dt,emissiveMap:rt,normalMapObjectSpace:Y&&E.normalMapType===sb,normalMapTangentSpace:Y&&E.normalMapType===L0,metalnessMap:ht,roughnessMap:Wt,anisotropy:Ht,anisotropyMap:X,clearcoat:T,clearcoatMap:At,clearcoatNormalMap:ct,clearcoatRoughnessMap:wt,dispersion:x,iridescence:P,iridescenceMap:Rt,iridescenceThicknessMap:ot,sheen:k,sheenColorMap:vt,sheenRoughnessMap:Bt,specularMap:Dt,specularColorMap:B,specularIntensityMap:kt,transmission:it,transmissionMap:N,thicknessMap:ut,gradientMap:mt,opaque:E.transparent===!1&&E.blending===hr&&E.alphaToCoverage===!1,alphaMap:ft,alphaTest:nt,alphaHash:K,combine:E.combine,mapUv:Yt&&S(E.map.channel),aoMapUv:st&&S(E.aoMap.channel),lightMapUv:et&&S(E.lightMap.channel),bumpMapUv:j&&S(E.bumpMap.channel),normalMapUv:Y&&S(E.normalMap.channel),displacementMapUv:dt&&S(E.displacementMap.channel),emissiveMapUv:rt&&S(E.emissiveMap.channel),metalnessMapUv:ht&&S(E.metalnessMap.channel),roughnessMapUv:Wt&&S(E.roughnessMap.channel),anisotropyMapUv:X&&S(E.anisotropyMap.channel),clearcoatMapUv:At&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:ct&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&S(E.sheenRoughnessMap.channel),specularMapUv:Dt&&S(E.specularMap.channel),specularColorMapUv:B&&S(E.specularColorMap.channel),specularIntensityMapUv:kt&&S(E.specularIntensityMap.channel),transmissionMapUv:N&&S(E.transmissionMap.channel),thicknessMapUv:ut&&S(E.thicknessMap.channel),alphaMapUv:ft&&S(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Y||Ht),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(Yt||ft),fog:!!Q,useFog:E.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:bt,skinning:W.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Pt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Yt&&E.map.isVideoTexture===!0&&fe.getTransfer(E.map.colorSpace)===Se,decodeVideoTextureEmissive:rt&&E.emissiveMap.isVideoTexture===!0&&fe.getTransfer(E.emissiveMap.colorSpace)===Se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===di,flipSided:E.side===Fn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Et&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&E.extensions.multiDraw===!0||Ct)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function h(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(_(M,E),v(M,E),M.push(e.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){let M=g[E.type],D;if(M){let H=ss[M];D=mb.clone(H.uniforms)}else D=E.uniforms;return D}function A(E,M){let D;for(let H=0,W=u.length;H<W;H++){let Q=u[H];if(Q.cacheKey===M){D=Q,++D.usedTimes;break}}return D===void 0&&(D=new b3(e,M,E,a),u.push(D)),D}function R(E){if(--E.usedTimes===0){let M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:U}}function A3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function w3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Vb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Gb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,f,p,g,S,m){let h=e[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:S,group:m},e[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=S,h.group=m),t++,h}function o(d,f,p,g,S,m){let h=r(d,f,p,g,S,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):n.push(h)}function l(d,f,p,g,S,m){let h=r(d,f,p,g,S,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||w3),i.length>1&&i.sort(f||Vb),s.length>1&&s.sort(f||Vb)}function u(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:u,sort:c}}function R3(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new Gb,e.set(i,[r])):s>=a.length?(r=new Gb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function C3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new L,color:new Qt};break;case"SpotLight":n={position:new L,direction:new L,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":n={color:new Qt,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=n,n}}}function D3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var U3=0;function L3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function N3(e){let t=new C3,n=D3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,a=new Ie,r=new Ie;function o(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,S=0,m=0,h=0,_=0,v=0,y=0,A=0,R=0,w=0;c.sort(L3);for(let E=0,M=c.length;E<M;E++){let D=c[E],H=D.color,W=D.intensity,Q=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=H.r*W,d+=H.g*W,f+=H.b*W;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],W);w++}else if(D.isDirectionalLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let at=D.shadow,z=n.get(D);z.shadowIntensity=at.intensity,z.shadowBias=at.bias,z.shadowNormalBias=at.normalBias,z.shadowRadius=at.radius,z.shadowMapSize=at.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=D.shadow.matrix,_++}i.directional[p]=q,p++}else if(D.isSpotLight){let q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(H).multiplyScalar(W),q.distance=Q,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[S]=q;let at=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,at.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[S]=at.matrix,D.castShadow){let z=n.get(D);z.shadowIntensity=at.intensity,z.shadowBias=at.bias,z.shadowNormalBias=at.normalBias,z.shadowRadius=at.radius,z.shadowMapSize=at.mapSize,i.spotShadow[S]=z,i.spotShadowMap[S]=Z,y++}S++}else if(D.isRectAreaLight){let q=t.get(D);q.color.copy(H).multiplyScalar(W),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=q,m++}else if(D.isPointLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let at=D.shadow,z=n.get(D);z.shadowIntensity=at.intensity,z.shadowBias=at.bias,z.shadowNormalBias=at.normalBias,z.shadowRadius=at.radius,z.shadowMapSize=at.mapSize,z.shadowCameraNear=at.camera.near,z.shadowCameraFar=at.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=D.shadow.matrix,v++}i.point[g]=q,g++}else if(D.isHemisphereLight){let q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(W),q.groundColor.copy(D.groundColor).multiplyScalar(W),i.hemi[h]=q,h++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==S||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==_||U.numPointShadows!==v||U.numSpotShadows!==y||U.numSpotMaps!==A||U.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,U.directionalLength=p,U.pointLength=g,U.spotLength=S,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=_,U.numPointShadows=v,U.numSpotShadows=y,U.numSpotMaps=A,U.numLightProbes=w,i.version=U3++)}function l(c,u){let d=0,f=0,p=0,g=0,S=0,m=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){let v=c[h];if(v.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let y=i.hemi[S];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function kb(e){let t=new N3(e),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function a(u){n.push(u)}function r(u){i.push(u)}function o(){t.setup(n)}function l(u){t.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function I3(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new kb(e),t.set(s,[o])):a>=r.length?(o=new kb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var O3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function z3(e,t,n){let i=new qo,s=new gt,a=new gt,r=new He,o=new Tf({depthPacking:ib}),l=new Af,c={},u=n.maxTextureSize,d={[Is]:Fn,[Fn]:Is,[di]:di},f=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:O3,fragmentShader:P3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new ui;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new We(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v0;let h=this.type;this.render=function(R,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let E=e.getRenderTarget(),M=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),H=e.state;H.setBlending(Ps),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let W=h!==es&&this.type===es,Q=h===es&&this.type!==es;for(let Z=0,q=R.length;Z<q;Z++){let at=R[Z],z=at.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let pt=z.getFrameExtents();if(s.multiply(pt),a.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/pt.x),s.x=a.x*pt.x,z.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/pt.y),s.y=a.y*pt.y,z.mapSize.y=a.y)),z.map===null||W===!0||Q===!0){let Mt=this.type!==es?{minFilter:Jn,magFilter:Jn}:{};z.map!==null&&z.map.dispose(),z.map=new ts(s.x,s.y,Mt),z.map.texture.name=at.name+".shadowMap",z.camera.updateProjectionMatrix()}e.setRenderTarget(z.map),e.clear();let _t=z.getViewportCount();for(let Mt=0;Mt<_t;Mt++){let Pt=z.getViewport(Mt);r.set(a.x*Pt.x,a.y*Pt.y,a.x*Pt.z,a.y*Pt.w),H.viewport(r),z.updateMatrices(at,Mt),i=z.getFrustum(),y(w,U,z.camera,at,this.type)}z.isPointLightShadow!==!0&&this.type===es&&_(z,U),z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(E,M,D)};function _(R,w){let U=t.update(S);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ts(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(w,null,U,f,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(w,null,U,p,S,null)}function v(R,w,U,E){let M=null,D=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)M=D;else if(M=U.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let H=M.uuid,W=w.uuid,Q=c[H];Q===void 0&&(Q={},c[H]=Q);let Z=Q[W];Z===void 0&&(Z=M.clone(),Q[W]=Z,w.addEventListener("dispose",A)),M=Z}if(M.visible=w.visible,M.wireframe=w.wireframe,E===es?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=e.properties.get(M);H.light=U}return M}function y(R,w,U,E,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===es)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let W=t.update(R),Q=R.material;if(Array.isArray(Q)){let Z=W.groups;for(let q=0,at=Z.length;q<at;q++){let z=Z[q],pt=Q[z.materialIndex];if(pt&&pt.visible){let _t=v(R,pt,E,M);R.onBeforeShadow(e,R,w,U,W,_t,z),e.renderBufferDirect(U,null,W,_t,R,z),R.onAfterShadow(e,R,w,U,W,_t,z)}}}else if(Q.visible){let Z=v(R,Q,E,M);R.onBeforeShadow(e,R,w,U,W,Z,null),e.renderBufferDirect(U,null,W,Z,R,null),R.onAfterShadow(e,R,w,U,W,Z,null)}}let H=R.children;for(let W=0,Q=H.length;W<Q;W++)y(H[W],w,U,E,M)}function A(R){R.target.removeEventListener("dispose",A);for(let U in c){let E=c[U],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var B3={[Bf]:Ff,[Hf]:kf,[Vf]:Xf,[fr]:Gf,[Ff]:Bf,[kf]:Hf,[Xf]:Vf,[Gf]:fr};function F3(e,t){function n(){let N=!1,ut=new He,mt=null,ft=new He(0,0,0,0);return{setMask:function(nt){mt!==nt&&!N&&(e.colorMask(nt,nt,nt,nt),mt=nt)},setLocked:function(nt){N=nt},setClear:function(nt,K,Et,Xt,oe){oe===!0&&(nt*=Xt,K*=Xt,Et*=Xt),ut.set(nt,K,Et,Xt),ft.equals(ut)===!1&&(e.clearColor(nt,K,Et,Xt),ft.copy(ut))},reset:function(){N=!1,mt=null,ft.set(-1,0,0,0)}}}function i(){let N=!1,ut=!1,mt=null,ft=null,nt=null;return{setReversed:function(K){if(ut!==K){let Et=t.get("EXT_clip_control");K?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ut=K;let Xt=nt;nt=null,this.setClear(Xt)}},getReversed:function(){return ut},setTest:function(K){K?J(e.DEPTH_TEST):bt(e.DEPTH_TEST)},setMask:function(K){mt!==K&&!N&&(e.depthMask(K),mt=K)},setFunc:function(K){if(ut&&(K=B3[K]),ft!==K){switch(K){case Bf:e.depthFunc(e.NEVER);break;case Ff:e.depthFunc(e.ALWAYS);break;case Hf:e.depthFunc(e.LESS);break;case fr:e.depthFunc(e.LEQUAL);break;case Vf:e.depthFunc(e.EQUAL);break;case Gf:e.depthFunc(e.GEQUAL);break;case kf:e.depthFunc(e.GREATER);break;case Xf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ft=K}},setLocked:function(K){N=K},setClear:function(K){nt!==K&&(ut&&(K=1-K),e.clearDepth(K),nt=K)},reset:function(){N=!1,mt=null,ft=null,nt=null,ut=!1}}}function s(){let N=!1,ut=null,mt=null,ft=null,nt=null,K=null,Et=null,Xt=null,oe=null;return{setTest:function(le){N||(le?J(e.STENCIL_TEST):bt(e.STENCIL_TEST))},setMask:function(le){ut!==le&&!N&&(e.stencilMask(le),ut=le)},setFunc:function(le,Kn,xn){(mt!==le||ft!==Kn||nt!==xn)&&(e.stencilFunc(le,Kn,xn),mt=le,ft=Kn,nt=xn)},setOp:function(le,Kn,xn){(K!==le||Et!==Kn||Xt!==xn)&&(e.stencilOp(le,Kn,xn),K=le,Et=Kn,Xt=xn)},setLocked:function(le){N=le},setClear:function(le){oe!==le&&(e.clearStencil(le),oe=le)},reset:function(){N=!1,ut=null,mt=null,ft=null,nt=null,K=null,Et=null,Xt=null,oe=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,p=[],g=null,S=!1,m=null,h=null,_=null,v=null,y=null,A=null,R=null,w=new Qt(0,0,0),U=0,E=!1,M=null,D=null,H=null,W=null,Q=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,at=0,z=e.getParameter(e.VERSION);z.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(z)[1]),q=at>=1):z.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),q=at>=2);let pt=null,_t={},Mt=e.getParameter(e.SCISSOR_BOX),Pt=e.getParameter(e.VIEWPORT),zt=new He().fromArray(Mt),ue=new He().fromArray(Pt);function jt(N,ut,mt,ft){let nt=new Uint8Array(4),K=e.createTexture();e.bindTexture(N,K),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Et=0;Et<mt;Et++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(ut,0,e.RGBA,1,1,ft,0,e.RGBA,e.UNSIGNED_BYTE,nt):e.texImage2D(ut+Et,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,nt);return K}let $={};$[e.TEXTURE_2D]=jt(e.TEXTURE_2D,e.TEXTURE_2D,1),$[e.TEXTURE_CUBE_MAP]=jt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[e.TEXTURE_2D_ARRAY]=jt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),$[e.TEXTURE_3D]=jt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),J(e.DEPTH_TEST),r.setFunc(fr),j(!1),Y(_0),J(e.CULL_FACE),st(Ps);function J(N){u[N]!==!0&&(e.enable(N),u[N]=!0)}function bt(N){u[N]!==!1&&(e.disable(N),u[N]=!1)}function Ut(N,ut){return d[N]!==ut?(e.bindFramebuffer(N,ut),d[N]=ut,N===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=ut),N===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ct(N,ut){let mt=p,ft=!1;if(N){mt=f.get(ut),mt===void 0&&(mt=[],f.set(ut,mt));let nt=N.textures;if(mt.length!==nt.length||mt[0]!==e.COLOR_ATTACHMENT0){for(let K=0,Et=nt.length;K<Et;K++)mt[K]=e.COLOR_ATTACHMENT0+K;mt.length=nt.length,ft=!0}}else mt[0]!==e.BACK&&(mt[0]=e.BACK,ft=!0);ft&&e.drawBuffers(mt)}function Yt(N){return g!==N?(e.useProgram(N),g=N,!0):!1}let he={[Ra]:e.FUNC_ADD,[DM]:e.FUNC_SUBTRACT,[UM]:e.FUNC_REVERSE_SUBTRACT};he[LM]=e.MIN,he[NM]=e.MAX;let C={[IM]:e.ZERO,[OM]:e.ONE,[PM]:e.SRC_COLOR,[uf]:e.SRC_ALPHA,[GM]:e.SRC_ALPHA_SATURATE,[HM]:e.DST_COLOR,[BM]:e.DST_ALPHA,[zM]:e.ONE_MINUS_SRC_COLOR,[hf]:e.ONE_MINUS_SRC_ALPHA,[VM]:e.ONE_MINUS_DST_COLOR,[FM]:e.ONE_MINUS_DST_ALPHA,[kM]:e.CONSTANT_COLOR,[XM]:e.ONE_MINUS_CONSTANT_COLOR,[WM]:e.CONSTANT_ALPHA,[qM]:e.ONE_MINUS_CONSTANT_ALPHA};function st(N,ut,mt,ft,nt,K,Et,Xt,oe,le){if(N===Ps){S===!0&&(bt(e.BLEND),S=!1);return}if(S===!1&&(J(e.BLEND),S=!0),N!==CM){if(N!==m||le!==E){if((h!==Ra||y!==Ra)&&(e.blendEquation(e.FUNC_ADD),h=Ra,y=Ra),le)switch(N){case hr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case y0:e.blendFunc(e.ONE,e.ONE);break;case x0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case S0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case hr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case y0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case x0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,v=null,A=null,R=null,w.set(0,0,0),U=0,m=N,E=le}return}nt=nt||ut,K=K||mt,Et=Et||ft,(ut!==h||nt!==y)&&(e.blendEquationSeparate(he[ut],he[nt]),h=ut,y=nt),(mt!==_||ft!==v||K!==A||Et!==R)&&(e.blendFuncSeparate(C[mt],C[ft],C[K],C[Et]),_=mt,v=ft,A=K,R=Et),(Xt.equals(w)===!1||oe!==U)&&(e.blendColor(Xt.r,Xt.g,Xt.b,oe),w.copy(Xt),U=oe),m=N,E=!1}function et(N,ut){N.side===di?bt(e.CULL_FACE):J(e.CULL_FACE);let mt=N.side===Fn;ut&&(mt=!mt),j(mt),N.blending===hr&&N.transparent===!1?st(Ps):st(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);let ft=N.stencilWrite;o.setTest(ft),ft&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),rt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(e.SAMPLE_ALPHA_TO_COVERAGE):bt(e.SAMPLE_ALPHA_TO_COVERAGE)}function j(N){M!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),M=N)}function Y(N){N!==AM?(J(e.CULL_FACE),N!==D&&(N===_0?e.cullFace(e.BACK):N===wM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):bt(e.CULL_FACE),D=N}function dt(N){N!==H&&(q&&e.lineWidth(N),H=N)}function rt(N,ut,mt){N?(J(e.POLYGON_OFFSET_FILL),(W!==ut||Q!==mt)&&(e.polygonOffset(ut,mt),W=ut,Q=mt)):bt(e.POLYGON_OFFSET_FILL)}function ht(N){N?J(e.SCISSOR_TEST):bt(e.SCISSOR_TEST)}function Wt(N){N===void 0&&(N=e.TEXTURE0+Z-1),pt!==N&&(e.activeTexture(N),pt=N)}function Ht(N,ut,mt){mt===void 0&&(pt===null?mt=e.TEXTURE0+Z-1:mt=pt);let ft=_t[mt];ft===void 0&&(ft={type:void 0,texture:void 0},_t[mt]=ft),(ft.type!==N||ft.texture!==ut)&&(pt!==mt&&(e.activeTexture(mt),pt=mt),e.bindTexture(N,ut||$[N]),ft.type=N,ft.texture=ut)}function T(){let N=_t[pt];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{e.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{e.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{e.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{e.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{e.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{e.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{e.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{e.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(N){zt.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),zt.copy(N))}function Bt(N){ue.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),ue.copy(N))}function Dt(N,ut){let mt=c.get(ut);mt===void 0&&(mt=new WeakMap,c.set(ut,mt));let ft=mt.get(N);ft===void 0&&(ft=e.getUniformBlockIndex(ut,N.name),mt.set(N,ft))}function B(N,ut){let ft=c.get(ut).get(N);l.get(ut)!==ft&&(e.uniformBlockBinding(ut,ft,N.__bindingPointIndex),l.set(ut,ft))}function kt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},pt=null,_t={},d={},f=new WeakMap,p=[],g=null,S=!1,m=null,h=null,_=null,v=null,y=null,A=null,R=null,w=new Qt(0,0,0),U=0,E=!1,M=null,D=null,H=null,W=null,Q=null,zt.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:J,disable:bt,bindFramebuffer:Ut,drawBuffers:Ct,useProgram:Yt,setBlending:st,setMaterial:et,setFlipSided:j,setCullFace:Y,setLineWidth:dt,setPolygonOffset:rt,setScissorTest:ht,activeTexture:Wt,bindTexture:Ht,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:P,texImage2D:Rt,texImage3D:ot,updateUBOMapping:Dt,uniformBlockBinding:B,texStorage2D:ct,texStorage3D:wt,texSubImage2D:k,texSubImage3D:it,compressedTexSubImage2D:X,compressedTexSubImage3D:At,scissor:vt,viewport:Bt,reset:kt}}function H3(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):wc("canvas")}function S(T,x,P){let k=1,it=Ht(T);if((it.width>P||it.height>P)&&(k=P/Math.max(it.width,it.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let X=Math.floor(k*it.width),At=Math.floor(k*it.height);d===void 0&&(d=g(X,At));let ct=x?g(X,At):d;return ct.width=X,ct.height=At,ct.getContext("2d").drawImage(T,0,0,X,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+X+"x"+At+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),T;return T}function m(T){return T.generateMipmaps}function h(T){e.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(T,x,P,k,it=!1){if(T!==null){if(e[T]!==void 0)return e[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;if(x===e.RED&&(P===e.FLOAT&&(X=e.R32F),P===e.HALF_FLOAT&&(X=e.R16F),P===e.UNSIGNED_BYTE&&(X=e.R8)),x===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(X=e.R8UI),P===e.UNSIGNED_SHORT&&(X=e.R16UI),P===e.UNSIGNED_INT&&(X=e.R32UI),P===e.BYTE&&(X=e.R8I),P===e.SHORT&&(X=e.R16I),P===e.INT&&(X=e.R32I)),x===e.RG&&(P===e.FLOAT&&(X=e.RG32F),P===e.HALF_FLOAT&&(X=e.RG16F),P===e.UNSIGNED_BYTE&&(X=e.RG8)),x===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(X=e.RG8UI),P===e.UNSIGNED_SHORT&&(X=e.RG16UI),P===e.UNSIGNED_INT&&(X=e.RG32UI),P===e.BYTE&&(X=e.RG8I),P===e.SHORT&&(X=e.RG16I),P===e.INT&&(X=e.RG32I)),x===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(X=e.RGB8UI),P===e.UNSIGNED_SHORT&&(X=e.RGB16UI),P===e.UNSIGNED_INT&&(X=e.RGB32UI),P===e.BYTE&&(X=e.RGB8I),P===e.SHORT&&(X=e.RGB16I),P===e.INT&&(X=e.RGB32I)),x===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),P===e.UNSIGNED_INT&&(X=e.RGBA32UI),P===e.BYTE&&(X=e.RGBA8I),P===e.SHORT&&(X=e.RGBA16I),P===e.INT&&(X=e.RGBA32I)),x===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(X=e.R11F_G11F_B10F)),x===e.RGBA){let At=it?Tc:fe.getTransfer(k);P===e.FLOAT&&(X=e.RGBA32F),P===e.HALF_FLOAT&&(X=e.RGBA16F),P===e.UNSIGNED_BYTE&&(X=At===Se?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function y(T,x){let P;return T?x===null||x===Oa||x===nl?P=e.DEPTH24_STENCIL8:x===is?P=e.DEPTH32F_STENCIL8:x===tl&&(P=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Oa||x===nl?P=e.DEPTH_COMPONENT24:x===is?P=e.DEPTH_COMPONENT32F:x===tl&&(P=e.DEPTH_COMPONENT16),P}function A(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Jn&&T.minFilter!==ci?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){let x=T.target;x.removeEventListener("dispose",R),U(x),x.isVideoTexture&&u.delete(x)}function w(T){let x=T.target;x.removeEventListener("dispose",w),M(x)}function U(T){let x=i.get(T);if(x.__webglInit===void 0)return;let P=T.source,k=f.get(P);if(k){let it=k[x.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(T),Object.keys(k).length===0&&f.delete(P)}i.remove(T)}function E(T){let x=i.get(T);e.deleteTexture(x.__webglTexture);let P=T.source,k=f.get(P);delete k[x.__cacheKey],r.memory.textures--}function M(T){let x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let it=0;it<x.__webglFramebuffer[k].length;it++)e.deleteFramebuffer(x.__webglFramebuffer[k][it]);else e.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)e.deleteFramebuffer(x.__webglFramebuffer[k]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let P=T.textures;for(let k=0,it=P.length;k<it;k++){let X=i.get(P[k]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),r.memory.textures--),i.remove(P[k])}i.remove(T)}let D=0;function H(){D=0}function W(){let T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function Q(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Z(T,x){let P=i.get(T);if(T.isVideoTexture&&ht(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&P.__version!==T.version){let k=T.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(P,T,x);return}}else T.isExternalTexture&&(P.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+x)}function q(T,x){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){$(P,T,x);return}n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+x)}function at(T,x){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){$(P,T,x);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+x)}function z(T,x){let P=i.get(T);if(T.version>0&&P.__version!==T.version){J(P,T,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+x)}let pt={[$i]:e.REPEAT,[Ki]:e.CLAMP_TO_EDGE,[ff]:e.MIRRORED_REPEAT},_t={[Jn]:e.NEAREST,[eb]:e.NEAREST_MIPMAP_NEAREST,[Jc]:e.NEAREST_MIPMAP_LINEAR,[ci]:e.LINEAR,[Zf]:e.LINEAR_MIPMAP_NEAREST,[ns]:e.LINEAR_MIPMAP_LINEAR},Mt={[ab]:e.NEVER,[hb]:e.ALWAYS,[rb]:e.LESS,[N0]:e.LEQUAL,[ob]:e.EQUAL,[ub]:e.GEQUAL,[lb]:e.GREATER,[cb]:e.NOTEQUAL};function Pt(T,x){if(x.type===is&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ci||x.magFilter===Zf||x.magFilter===Jc||x.magFilter===ns||x.minFilter===ci||x.minFilter===Zf||x.minFilter===Jc||x.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,pt[x.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,pt[x.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,pt[x.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,_t[x.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,_t[x.minFilter]),x.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,Mt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Jn||x.minFilter!==Jc&&x.minFilter!==ns||x.type===is&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function zt(T,x){let P=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));let k=x.source,it=f.get(k);it===void 0&&(it={},f.set(k,it));let X=Q(x);if(X!==T.__cacheKey){it[X]===void 0&&(it[X]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),it[X].usedTimes++;let At=it[T.__cacheKey];At!==void 0&&(it[T.__cacheKey].usedTimes--,At.usedTimes===0&&E(x)),T.__cacheKey=X,T.__webglTexture=it[X].texture}return P}function ue(T,x,P){return Math.floor(Math.floor(T/P)/x)}function jt(T,x,P,k){let X=T.updateRanges;if(X.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,P,k,x.data);else{X.sort((ot,vt)=>ot.start-vt.start);let At=0;for(let ot=1;ot<X.length;ot++){let vt=X[At],Bt=X[ot],Dt=vt.start+vt.count,B=ue(Bt.start,x.width,4),kt=ue(vt.start,x.width,4);Bt.start<=Dt+1&&B===kt&&ue(Bt.start+Bt.count-1,x.width,4)===B?vt.count=Math.max(vt.count,Bt.start+Bt.count-vt.start):(++At,X[At]=Bt)}X.length=At+1;let ct=e.getParameter(e.UNPACK_ROW_LENGTH),wt=e.getParameter(e.UNPACK_SKIP_PIXELS),Rt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let ot=0,vt=X.length;ot<vt;ot++){let Bt=X[ot],Dt=Math.floor(Bt.start/4),B=Math.ceil(Bt.count/4),kt=Dt%x.width,N=Math.floor(Dt/x.width),ut=B,mt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,kt),e.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,kt,N,ut,mt,P,k,x.data)}T.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ct),e.pixelStorei(e.UNPACK_SKIP_PIXELS,wt),e.pixelStorei(e.UNPACK_SKIP_ROWS,Rt)}}function $(T,x,P){let k=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=e.TEXTURE_3D);let it=zt(T,x),X=x.source;n.bindTexture(k,T.__webglTexture,e.TEXTURE0+P);let At=i.get(X);if(X.version!==At.__version||it===!0){n.activeTexture(e.TEXTURE0+P);let ct=fe.getPrimaries(fe.workingColorSpace),wt=x.colorSpace===Bs?null:fe.getPrimaries(x.colorSpace),Rt=x.colorSpace===Bs||ct===wt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ot=S(x.image,!1,s.maxTextureSize);ot=Wt(x,ot);let vt=a.convert(x.format,x.colorSpace),Bt=a.convert(x.type),Dt=v(x.internalFormat,vt,Bt,x.colorSpace,x.isVideoTexture);Pt(k,x);let B,kt=x.mipmaps,N=x.isVideoTexture!==!0,ut=At.__version===void 0||it===!0,mt=X.dataReady,ft=A(x,ot);if(x.isDepthTexture)Dt=y(x.format===il,x.type),ut&&(N?n.texStorage2D(e.TEXTURE_2D,1,Dt,ot.width,ot.height):n.texImage2D(e.TEXTURE_2D,0,Dt,ot.width,ot.height,0,vt,Bt,null));else if(x.isDataTexture)if(kt.length>0){N&&ut&&n.texStorage2D(e.TEXTURE_2D,ft,Dt,kt[0].width,kt[0].height);for(let nt=0,K=kt.length;nt<K;nt++)B=kt[nt],N?mt&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,B.width,B.height,vt,Bt,B.data):n.texImage2D(e.TEXTURE_2D,nt,Dt,B.width,B.height,0,vt,Bt,B.data);x.generateMipmaps=!1}else N?(ut&&n.texStorage2D(e.TEXTURE_2D,ft,Dt,ot.width,ot.height),mt&&jt(x,ot,vt,Bt)):n.texImage2D(e.TEXTURE_2D,0,Dt,ot.width,ot.height,0,vt,Bt,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&ut&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ft,Dt,kt[0].width,kt[0].height,ot.depth);for(let nt=0,K=kt.length;nt<K;nt++)if(B=kt[nt],x.format!==Ri)if(vt!==null)if(N){if(mt)if(x.layerUpdates.size>0){let Et=H0(B.width,B.height,x.format,x.type);for(let Xt of x.layerUpdates){let oe=B.data.subarray(Xt*Et/B.data.BYTES_PER_ELEMENT,(Xt+1)*Et/B.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,Xt,B.width,B.height,1,vt,oe)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,0,B.width,B.height,ot.depth,vt,B.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,nt,Dt,B.width,B.height,ot.depth,0,B.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?mt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,0,B.width,B.height,ot.depth,vt,Bt,B.data):n.texImage3D(e.TEXTURE_2D_ARRAY,nt,Dt,B.width,B.height,ot.depth,0,vt,Bt,B.data)}else{N&&ut&&n.texStorage2D(e.TEXTURE_2D,ft,Dt,kt[0].width,kt[0].height);for(let nt=0,K=kt.length;nt<K;nt++)B=kt[nt],x.format!==Ri?vt!==null?N?mt&&n.compressedTexSubImage2D(e.TEXTURE_2D,nt,0,0,B.width,B.height,vt,B.data):n.compressedTexImage2D(e.TEXTURE_2D,nt,Dt,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?mt&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,B.width,B.height,vt,Bt,B.data):n.texImage2D(e.TEXTURE_2D,nt,Dt,B.width,B.height,0,vt,Bt,B.data)}else if(x.isDataArrayTexture)if(N){if(ut&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ft,Dt,ot.width,ot.height,ot.depth),mt)if(x.layerUpdates.size>0){let nt=H0(ot.width,ot.height,x.format,x.type);for(let K of x.layerUpdates){let Et=ot.data.subarray(K*nt/ot.data.BYTES_PER_ELEMENT,(K+1)*nt/ot.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,ot.width,ot.height,1,vt,Bt,Et)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,vt,Bt,ot.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Dt,ot.width,ot.height,ot.depth,0,vt,Bt,ot.data);else if(x.isData3DTexture)N?(ut&&n.texStorage3D(e.TEXTURE_3D,ft,Dt,ot.width,ot.height,ot.depth),mt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,vt,Bt,ot.data)):n.texImage3D(e.TEXTURE_3D,0,Dt,ot.width,ot.height,ot.depth,0,vt,Bt,ot.data);else if(x.isFramebufferTexture){if(ut)if(N)n.texStorage2D(e.TEXTURE_2D,ft,Dt,ot.width,ot.height);else{let nt=ot.width,K=ot.height;for(let Et=0;Et<ft;Et++)n.texImage2D(e.TEXTURE_2D,Et,Dt,nt,K,0,vt,Bt,null),nt>>=1,K>>=1}}else if(kt.length>0){if(N&&ut){let nt=Ht(kt[0]);n.texStorage2D(e.TEXTURE_2D,ft,Dt,nt.width,nt.height)}for(let nt=0,K=kt.length;nt<K;nt++)B=kt[nt],N?mt&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,vt,Bt,B):n.texImage2D(e.TEXTURE_2D,nt,Dt,vt,Bt,B);x.generateMipmaps=!1}else if(N){if(ut){let nt=Ht(ot);n.texStorage2D(e.TEXTURE_2D,ft,Dt,nt.width,nt.height)}mt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,vt,Bt,ot)}else n.texImage2D(e.TEXTURE_2D,0,Dt,vt,Bt,ot);m(x)&&h(k),At.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function J(T,x,P){if(x.image.length!==6)return;let k=zt(T,x),it=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+P);let X=i.get(it);if(it.version!==X.__version||k===!0){n.activeTexture(e.TEXTURE0+P);let At=fe.getPrimaries(fe.workingColorSpace),ct=x.colorSpace===Bs?null:fe.getPrimaries(x.colorSpace),wt=x.colorSpace===Bs||At===ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Rt=x.isCompressedTexture||x.image[0].isCompressedTexture,ot=x.image[0]&&x.image[0].isDataTexture,vt=[];for(let K=0;K<6;K++)!Rt&&!ot?vt[K]=S(x.image[K],!0,s.maxCubemapSize):vt[K]=ot?x.image[K].image:x.image[K],vt[K]=Wt(x,vt[K]);let Bt=vt[0],Dt=a.convert(x.format,x.colorSpace),B=a.convert(x.type),kt=v(x.internalFormat,Dt,B,x.colorSpace),N=x.isVideoTexture!==!0,ut=X.__version===void 0||k===!0,mt=it.dataReady,ft=A(x,Bt);Pt(e.TEXTURE_CUBE_MAP,x);let nt;if(Rt){N&&ut&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ft,kt,Bt.width,Bt.height);for(let K=0;K<6;K++){nt=vt[K].mipmaps;for(let Et=0;Et<nt.length;Et++){let Xt=nt[Et];x.format!==Ri?Dt!==null?N?mt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,0,0,Xt.width,Xt.height,Dt,Xt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,kt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,0,0,Xt.width,Xt.height,Dt,B,Xt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,kt,Xt.width,Xt.height,0,Dt,B,Xt.data)}}}else{if(nt=x.mipmaps,N&&ut){nt.length>0&&ft++;let K=Ht(vt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ft,kt,K.width,K.height)}for(let K=0;K<6;K++)if(ot){N?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,vt[K].width,vt[K].height,Dt,B,vt[K].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,vt[K].width,vt[K].height,0,Dt,B,vt[K].data);for(let Et=0;Et<nt.length;Et++){let oe=nt[Et].image[K].image;N?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,0,0,oe.width,oe.height,Dt,B,oe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,kt,oe.width,oe.height,0,Dt,B,oe.data)}}else{N?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Dt,B,vt[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,Dt,B,vt[K]);for(let Et=0;Et<nt.length;Et++){let Xt=nt[Et];N?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,0,0,Dt,B,Xt.image[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,kt,Dt,B,Xt.image[K])}}}m(x)&&h(e.TEXTURE_CUBE_MAP),X.__version=it.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function bt(T,x,P,k,it,X){let At=a.convert(P.format,P.colorSpace),ct=a.convert(P.type),wt=v(P.internalFormat,At,ct,P.colorSpace),Rt=i.get(x),ot=i.get(P);if(ot.__renderTarget=x,!Rt.__hasExternalTextures){let vt=Math.max(1,x.width>>X),Bt=Math.max(1,x.height>>X);it===e.TEXTURE_3D||it===e.TEXTURE_2D_ARRAY?n.texImage3D(it,X,wt,vt,Bt,x.depth,0,At,ct,null):n.texImage2D(it,X,wt,vt,Bt,0,At,ct,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),rt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,it,ot.__webglTexture,0,dt(x)):(it===e.TEXTURE_2D||it>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,it,ot.__webglTexture,X),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ut(T,x,P){if(e.bindRenderbuffer(e.RENDERBUFFER,T),x.depthBuffer){let k=x.depthTexture,it=k&&k.isDepthTexture?k.type:null,X=y(x.stencilBuffer,it),At=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ct=dt(x);rt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ct,X,x.width,x.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,ct,X,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,X,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,At,e.RENDERBUFFER,T)}else{let k=x.textures;for(let it=0;it<k.length;it++){let X=k[it],At=a.convert(X.format,X.colorSpace),ct=a.convert(X.type),wt=v(X.internalFormat,At,ct,X.colorSpace),Rt=dt(x);P&&rt(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Rt,wt,x.width,x.height):rt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Rt,wt,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,wt,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ct(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let k=i.get(x.depthTexture);k.__renderTarget=x,(!k.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);let it=k.__webglTexture,X=dt(x);if(x.depthTexture.format===Bo)rt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,it,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,it,0);else if(x.depthTexture.format===il)rt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,it,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Yt(T){let x=i.get(T),P=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let k=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),k){let it=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,k.removeEventListener("dispose",it)};k.addEventListener("dispose",it),x.__depthDisposeCallback=it}x.__boundDepthTexture=k}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let k=T.texture.mipmaps;k&&k.length>0?Ct(x.__webglFramebuffer[0],T):Ct(x.__webglFramebuffer,T)}else if(P){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]===void 0)x.__webglDepthbuffer[k]=e.createRenderbuffer(),Ut(x.__webglDepthbuffer[k],T,!1);else{let it=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,it,e.RENDERBUFFER,X)}}else{let k=T.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Ut(x.__webglDepthbuffer,T,!1);else{let it=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,it,e.RENDERBUFFER,X)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function he(T,x,P){let k=i.get(T);x!==void 0&&bt(k.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&Yt(T)}function C(T){let x=T.texture,P=i.get(T),k=i.get(x);T.addEventListener("dispose",w);let it=T.textures,X=T.isWebGLCubeRenderTarget===!0,At=it.length>1;if(At||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=x.version,r.memory.textures++),X){P.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer[ct]=[];for(let wt=0;wt<x.mipmaps.length;wt++)P.__webglFramebuffer[ct][wt]=e.createFramebuffer()}else P.__webglFramebuffer[ct]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)P.__webglFramebuffer[ct]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(At)for(let ct=0,wt=it.length;ct<wt;ct++){let Rt=i.get(it[ct]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&rt(T)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ct=0;ct<it.length;ct++){let wt=it[ct];P.__webglColorRenderbuffer[ct]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[ct]);let Rt=a.convert(wt.format,wt.colorSpace),ot=a.convert(wt.type),vt=v(wt.internalFormat,Rt,ot,wt.colorSpace,T.isXRRenderTarget===!0),Bt=dt(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,Bt,vt,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.RENDERBUFFER,P.__webglColorRenderbuffer[ct])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Ut(P.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),Pt(e.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)bt(P.__webglFramebuffer[ct][wt],T,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt);else bt(P.__webglFramebuffer[ct],T,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&h(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(At){for(let ct=0,wt=it.length;ct<wt;ct++){let Rt=it[ct],ot=i.get(Rt),vt=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(vt=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(vt,ot.__webglTexture),Pt(vt,Rt),bt(P.__webglFramebuffer,T,Rt,e.COLOR_ATTACHMENT0+ct,vt,0),m(Rt)&&h(vt)}n.unbindTexture()}else{let ct=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ct,k.__webglTexture),Pt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)bt(P.__webglFramebuffer[wt],T,x,e.COLOR_ATTACHMENT0,ct,wt);else bt(P.__webglFramebuffer,T,x,e.COLOR_ATTACHMENT0,ct,0);m(x)&&h(ct),n.unbindTexture()}T.depthBuffer&&Yt(T)}function st(T){let x=T.textures;for(let P=0,k=x.length;P<k;P++){let it=x[P];if(m(it)){let X=_(T),At=i.get(it).__webglTexture;n.bindTexture(X,At),h(X),n.unbindTexture()}}}let et=[],j=[];function Y(T){if(T.samples>0){if(rt(T)===!1){let x=T.textures,P=T.width,k=T.height,it=e.COLOR_BUFFER_BIT,X=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,At=i.get(T),ct=x.length>1;if(ct)for(let Rt=0;Rt<x.length;Rt++)n.bindFramebuffer(e.FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,At.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);let wt=T.texture.mipmaps;wt&&wt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Rt=0;Rt<x.length;Rt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(it|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(it|=e.STENCIL_BUFFER_BIT)),ct){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,At.__webglColorRenderbuffer[Rt]);let ot=i.get(x[Rt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ot,0)}e.blitFramebuffer(0,0,P,k,0,0,P,k,it,e.NEAREST),l===!0&&(et.length=0,j.length=0,et.push(e.COLOR_ATTACHMENT0+Rt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(et.push(X),j.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,j)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,et))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ct)for(let Rt=0;Rt<x.length;Rt++){n.bindFramebuffer(e.FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.RENDERBUFFER,At.__webglColorRenderbuffer[Rt]);let ot=i.get(x[Rt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,At.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.TEXTURE_2D,ot,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function dt(T){return Math.min(s.maxSamples,T.samples)}function rt(T){let x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ht(T){let x=r.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Wt(T,x){let P=T.colorSpace,k=T.format,it=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||P!==dr&&P!==Bs&&(fe.getTransfer(P)===Se?(k!==Ri||it!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),x}function Ht(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=at,this.setTextureCube=z,this.rebindTextures=he,this.setupRenderTarget=C,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=rt}function V3(e,t){function n(i,s=Bs){let a,r=fe.getTransfer(s);if(i===Bi)return e.UNSIGNED_BYTE;if(i===Kf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Qf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===A0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===w0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===E0)return e.BYTE;if(i===T0)return e.SHORT;if(i===tl)return e.UNSIGNED_SHORT;if(i===Jf)return e.INT;if(i===Oa)return e.UNSIGNED_INT;if(i===is)return e.FLOAT;if(i===el)return e.HALF_FLOAT;if(i===R0)return e.ALPHA;if(i===C0)return e.RGB;if(i===Ri)return e.RGBA;if(i===Bo)return e.DEPTH_COMPONENT;if(i===il)return e.DEPTH_STENCIL;if(i===D0)return e.RED;if(i===jf)return e.RED_INTEGER;if(i===U0)return e.RG;if(i===$f)return e.RG_INTEGER;if(i===td)return e.RGBA_INTEGER;if(i===Kc||i===Qc||i===jc||i===$c)if(r===Se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Kc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Kc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$c)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ed||i===nd||i===id||i===sd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ed)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===id)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ad||i===rd||i===od)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ad||i===rd)return r===Se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===od)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ld||i===cd||i===ud||i===hd||i===fd||i===dd||i===pd||i===md||i===gd||i===_d||i===vd||i===yd||i===xd||i===Sd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ld)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ud)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===md)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_d)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Md||i===bd||i===Ed)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Md)return r===Se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ed)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Td||i===Ad||i===wd||i===Rd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Td)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ad)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var G3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Pc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new zi({vertexShader:G3,fragmentShader:k3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new We(new vr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},t_=class extends Os{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null,S=typeof XRWebGLBinding<"u",m=new $0,h={},_=n.getContextAttributes(),v=null,y=null,A=[],R=[],w=new gt,U=null,E=new Cn;E.viewport=new He;let M=new Cn;M.viewport=new He;let D=[E,M],H=new zf,W=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=A[$];return J===void 0&&(J=new Xo,A[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=A[$];return J===void 0&&(J=new Xo,A[$]=J),J.getGripSpace()},this.getHand=function($){let J=A[$];return J===void 0&&(J=new Xo,A[$]=J),J.getHandSpace()};function Z($){let J=R.indexOf($.inputSource);if(J===-1)return;let bt=A[J];bt!==void 0&&(bt.update($.inputSource,$.frame,c||r),bt.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",at);for(let $=0;$<A.length;$++){let J=R[$];J!==null&&(R[$]=null,A[$].disconnect(J))}W=null,Q=null,m.reset();for(let $ in h)delete h[$];t.setRenderTarget(v),p=null,f=null,d=null,s=null,y=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(U),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",at),_.xrCompatible!==!0&&await n.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ut=null,Ct=null;_.depth&&(Ct=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,bt=_.stencil?il:Bo,Ut=_.stencil?nl:Oa);let Yt={colorFormat:n.RGBA8,depthFormat:Ct,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(Yt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new ts(f.textureWidth,f.textureHeight,{format:Ri,type:Bi,depthTexture:new Oc(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let bt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,bt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ts(p.framebufferWidth,p.framebufferHeight,{format:Ri,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at($){for(let J=0;J<$.removed.length;J++){let bt=$.removed[J],Ut=R.indexOf(bt);Ut>=0&&(R[Ut]=null,A[Ut].disconnect(bt))}for(let J=0;J<$.added.length;J++){let bt=$.added[J],Ut=R.indexOf(bt);if(Ut===-1){for(let Yt=0;Yt<A.length;Yt++)if(Yt>=R.length){R.push(bt),Ut=Yt;break}else if(R[Yt]===null){R[Yt]=bt,Ut=Yt;break}if(Ut===-1)break}let Ct=A[Ut];Ct&&Ct.connect(bt)}}let z=new L,pt=new L;function _t($,J,bt){z.setFromMatrixPosition(J.matrixWorld),pt.setFromMatrixPosition(bt.matrixWorld);let Ut=z.distanceTo(pt),Ct=J.projectionMatrix.elements,Yt=bt.projectionMatrix.elements,he=Ct[14]/(Ct[10]-1),C=Ct[14]/(Ct[10]+1),st=(Ct[9]+1)/Ct[5],et=(Ct[9]-1)/Ct[5],j=(Ct[8]-1)/Ct[0],Y=(Yt[8]+1)/Yt[0],dt=he*j,rt=he*Y,ht=Ut/(-j+Y),Wt=ht*-j;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Wt),$.translateZ(ht),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ct[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let Ht=he+ht,T=C+ht,x=dt-Wt,P=rt+(Ut-Wt),k=st*C/T*Ht,it=et*C/T*Ht;$.projectionMatrix.makePerspective(x,P,k,it,Ht,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Mt($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let J=$.near,bt=$.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),H.near=M.near=E.near=J,H.far=M.far=E.far=bt,(W!==H.near||Q!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),W=H.near,Q=H.far),H.layers.mask=$.layers.mask|6,E.layers.mask=H.layers.mask&3,M.layers.mask=H.layers.mask&5;let Ut=$.parent,Ct=H.cameras;Mt(H,Ut);for(let Yt=0;Yt<Ct.length;Yt++)Mt(Ct[Yt],Ut);Ct.length===2?_t(H,E,M):H.projectionMatrix.copy(E.projectionMatrix),Pt($,H,Ut)};function Pt($,J,bt){bt===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(bt.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=pf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function($){return h[$]};let zt=null;function ue($,J){if(u=J.getViewerPose(c||r),g=J,u!==null){let bt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ut=!1;bt.length!==H.cameras.length&&(H.cameras.length=0,Ut=!0);for(let C=0;C<bt.length;C++){let st=bt[C],et=null;if(p!==null)et=p.getViewport(st);else{let Y=d.getViewSubImage(f,st);et=Y.viewport,C===0&&(t.setRenderTargetTextures(y,Y.colorTexture,Y.depthStencilTexture),t.setRenderTarget(y))}let j=D[C];j===void 0&&(j=new Cn,j.layers.enable(C),j.viewport=new He,D[C]=j),j.matrix.fromArray(st.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(st.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(et.x,et.y,et.width,et.height),C===0&&(H.matrix.copy(j.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ut===!0&&H.cameras.push(j)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let C=d.getDepthInformation(bt[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(Ct&&Ct.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let C=0;C<bt.length;C++){let st=bt[C].camera;if(st){let et=h[st];et||(et=new Pc,h[st]=et);let j=d.getCameraImage(st);et.sourceTexture=j}}}}for(let bt=0;bt<A.length;bt++){let Ut=R[bt],Ct=A[bt];Ut!==null&&Ct!==void 0&&Ct.update(Ut,J,c||r)}zt&&zt($,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let jt=new Xb;jt.setAnimationLoop(ue),this.setAnimationLoop=function($){zt=$},this.dispose=function(){}}},Er=new Pi,X3=new Ie;function W3(e,t){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,P0(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,_,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),d(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(a(m,h),g(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),S(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,_,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Fn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Fn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let _=t.get(h),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,Er.copy(y),Er.x*=-1,Er.y*=-1,Er.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),m.envMapRotation.value.setFromMatrix4(X3.makeRotationFromEuler(Er)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Fn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function S(m,h){let _=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function q3(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=s[_.id];y===void 0&&(g(_),y=u(_),s[_.id]=y,_.addEventListener("dispose",m));let A=v.program;i.updateUBOMapping(_,A);let R=t.render.frame;a[_.id]!==R&&(f(_),a[_.id]=R)}function u(_){let v=d();_.__bindingPointIndex=v;let y=e.createBuffer(),A=_.__size,R=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,A,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,y),y}function d(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=s[_.id],y=_.uniforms,A=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let R=0,w=y.length;R<w;R++){let U=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,M=U.length;E<M;E++){let D=U[E];if(p(D,R,E,A)===!0){let H=D.__offset,W=Array.isArray(D.value)?D.value:[D.value],Q=0;for(let Z=0;Z<W.length;Z++){let q=W[Z],at=S(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,e.bufferSubData(e.UNIFORM_BUFFER,H+Q,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,Q),Q+=at.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,H,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(_,v,y,A){let R=_.value,w=v+"_"+y;if(A[w]===void 0)return typeof R=="number"||typeof R=="boolean"?A[w]=R:A[w]=R.clone(),!0;{let U=A[w];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return A[w]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(_){let v=_.uniforms,y=0,A=16;for(let w=0,U=v.length;w<U;w++){let E=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,D=E.length;M<D;M++){let H=E[M],W=Array.isArray(H.value)?H.value:[H.value];for(let Q=0,Z=W.length;Q<Z;Q++){let q=W[Q],at=S(q),z=y%A,pt=z%at.boundary,_t=z+pt;y+=pt,_t!==0&&A-_t<at.storage&&(y+=A-_t),H.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=at.storage}}}let R=y%A;return R>0&&(y+=A-R),_.__size=y,_.__cache={},this}function S(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(s[v.id]),delete s[v.id],delete a[v.id]}function h(){for(let _ in s)e.deleteBuffer(s[_]);r=[],s={},a={}}return{bind:l,update:c,dispose:h}}var Ld=class{constructor(t={}){let{canvas:n=fb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let g=new Uint32Array(4),S=new Int32Array(4),m=null,h=null,_=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=_n;let R=0,w=0,U=null,E=-1,M=null,D=new He,H=new He,W=null,Q=new Qt(0),Z=0,q=n.width,at=n.height,z=1,pt=null,_t=null,Mt=new He(0,0,q,at),Pt=new He(0,0,q,at),zt=!1,ue=new qo,jt=!1,$=!1,J=new Ie,bt=new L,Ut=new He,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function he(){return U===null?z:1}let C=i;function st(b,I){return n.getContext(b,I)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",mt,!1),n.addEventListener("webglcontextrestored",ft,!1),n.addEventListener("webglcontextcreationerror",nt,!1),C===null){let I="webgl2";if(C=st(I,b),C===null)throw st(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let et,j,Y,dt,rt,ht,Wt,Ht,T,x,P,k,it,X,At,ct,wt,Rt,ot,vt,Bt,Dt,B,kt;function N(){et=new u2(C),et.init(),Dt=new V3(C,et),j=new i2(C,et,t,Dt),Y=new F3(C,et),j.reversedDepthBuffer&&f&&Y.buffers.depth.setReversed(!0),dt=new d2(C),rt=new A3,ht=new H3(C,et,Y,rt,j,Dt,dt),Wt=new a2(y),Ht=new c2(y),T=new yw(C),B=new e2(C,T),x=new h2(C,T,dt,B),P=new m2(C,x,T,dt),ot=new p2(C,j,ht),ct=new s2(rt),k=new T3(y,Wt,Ht,et,j,B,ct),it=new W3(y,rt),X=new R3,At=new I3(et),Rt=new t2(y,Wt,Ht,Y,P,p,l),wt=new z3(y,P,j),kt=new q3(C,dt,j,Y),vt=new n2(C,et,dt),Bt=new f2(C,et,dt),dt.programs=k.programs,y.capabilities=j,y.extensions=et,y.properties=rt,y.renderLists=X,y.shadowMap=wt,y.state=Y,y.info=dt}N();let ut=new t_(y,C);this.xr=ut,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(q,at,!1))},this.getSize=function(b){return b.set(q,at)},this.setSize=function(b,I,G=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,at=I,n.width=Math.floor(b*z),n.height=Math.floor(I*z),G===!0&&(n.style.width=b+"px",n.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(q*z,at*z).floor()},this.setDrawingBufferSize=function(b,I,G){q=b,at=I,z=G,n.width=Math.floor(b*G),n.height=Math.floor(I*G),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(Mt)},this.setViewport=function(b,I,G,F){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,I,G,F),Y.viewport(D.copy(Mt).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(Pt)},this.setScissor=function(b,I,G,F){b.isVector4?Pt.set(b.x,b.y,b.z,b.w):Pt.set(b,I,G,F),Y.scissor(H.copy(Pt).multiplyScalar(z).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(b){Y.setScissorTest(zt=b)},this.setOpaqueSort=function(b){pt=b},this.setTransparentSort=function(b){_t=b},this.getClearColor=function(b){return b.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,G=!0){let F=0;if(b){let O=!1;if(U!==null){let lt=U.texture.format;O=lt===td||lt===$f||lt===jf}if(O){let lt=U.texture.type,xt=lt===Bi||lt===Oa||lt===tl||lt===nl||lt===Kf||lt===Qf,Tt=Rt.getClearColor(),St=Rt.getClearAlpha(),Ft=Tt.r,Vt=Tt.g,Nt=Tt.b;xt?(g[0]=Ft,g[1]=Vt,g[2]=Nt,g[3]=St,C.clearBufferuiv(C.COLOR,0,g)):(S[0]=Ft,S[1]=Vt,S[2]=Nt,S[3]=St,C.clearBufferiv(C.COLOR,0,S))}else F|=C.COLOR_BUFFER_BIT}I&&(F|=C.DEPTH_BUFFER_BIT),G&&(F|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",mt,!1),n.removeEventListener("webglcontextrestored",ft,!1),n.removeEventListener("webglcontextcreationerror",nt,!1),Rt.dispose(),X.dispose(),At.dispose(),rt.dispose(),Wt.dispose(),Ht.dispose(),P.dispose(),B.dispose(),kt.dispose(),k.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",xn),ut.removeEventListener("sessionend",pi),Un.stop()};function mt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let b=dt.autoReset,I=wt.enabled,G=wt.autoUpdate,F=wt.needsUpdate,O=wt.type;N(),dt.autoReset=b,wt.enabled=I,wt.autoUpdate=G,wt.needsUpdate=F,wt.type=O}function nt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function K(b){let I=b.target;I.removeEventListener("dispose",K),Et(I)}function Et(b){Xt(b),rt.remove(b)}function Xt(b){let I=rt.get(b).programs;I!==void 0&&(I.forEach(function(G){k.releaseProgram(G)}),b.isShaderMaterial&&k.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,G,F,O,lt){I===null&&(I=Ct);let xt=O.isMesh&&O.matrixWorld.determinant()<0,Tt=hl(b,I,G,F,O);Y.setMaterial(F,xt);let St=G.index,Ft=1;if(F.wireframe===!0){if(St=x.getWireframeAttribute(G),St===void 0)return;Ft=2}let Vt=G.drawRange,Nt=G.attributes.position,qt=Vt.start*Ft,de=(Vt.start+Vt.count)*Ft;lt!==null&&(qt=Math.max(qt,lt.start*Ft),de=Math.min(de,(lt.start+lt.count)*Ft)),St!==null?(qt=Math.max(qt,0),de=Math.min(de,St.count)):Nt!=null&&(qt=Math.max(qt,0),de=Math.min(de,Nt.count));let Re=de-qt;if(Re<0||Re===1/0)return;B.setup(O,F,Tt,G,St);let ve,pe=vt;if(St!==null&&(ve=T.get(St),pe=Bt,pe.setIndex(ve)),O.isMesh)F.wireframe===!0?(Y.setLineWidth(F.wireframeLinewidth*he()),pe.setMode(C.LINES)):pe.setMode(C.TRIANGLES);else if(O.isLine){let It=F.linewidth;It===void 0&&(It=1),Y.setLineWidth(It*he()),O.isLineSegments?pe.setMode(C.LINES):O.isLineLoop?pe.setMode(C.LINE_LOOP):pe.setMode(C.LINE_STRIP)}else O.isPoints?pe.setMode(C.POINTS):O.isSprite&&pe.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Fo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))pe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let It=O._multiDrawStarts,Pe=O._multiDrawCounts,ae=O._multiDrawCount,Mn=St?T.get(St).bytesPerElement:1,rs=rt.get(F).currentProgram.getUniforms();for(let qe=0;qe<ae;qe++)rs.setValue(C,"_gl_DrawID",qe),pe.render(It[qe]/Mn,Pe[qe])}else if(O.isInstancedMesh)pe.renderInstances(qt,Re,O.count);else if(G.isInstancedBufferGeometry){let It=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Pe=Math.min(G.instanceCount,It);pe.renderInstances(qt,Re,Pe)}else pe.render(qt,Re)};function oe(b,I,G){b.transparent===!0&&b.side===di&&b.forceSinglePass===!1?(b.side=Fn,b.needsUpdate=!0,Ba(b,I,G),b.side=Is,b.needsUpdate=!0,Ba(b,I,G),b.side=di):Ba(b,I,G)}this.compile=function(b,I,G=null){G===null&&(G=b),h=At.get(G),h.init(I),v.push(h),G.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),b!==G&&b.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();let F=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let lt=O.material;if(lt)if(Array.isArray(lt))for(let xt=0;xt<lt.length;xt++){let Tt=lt[xt];oe(Tt,G,O),F.add(Tt)}else oe(lt,G,O),F.add(lt)}),h=v.pop(),F},this.compileAsync=function(b,I,G=null){let F=this.compile(b,I,G);return new Promise(O=>{function lt(){if(F.forEach(function(xt){rt.get(xt).currentProgram.isReady()&&F.delete(xt)}),F.size===0){O(b);return}setTimeout(lt,10)}et.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let le=null;function Kn(b){le&&le(b)}function xn(){Un.stop()}function pi(){Un.start()}let Un=new Xb;Un.setAnimationLoop(Kn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(b){le=b,ut.setAnimationLoop(b),b===null?Un.stop():Un.start()},ut.addEventListener("sessionstart",xn),ut.addEventListener("sessionend",pi),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(I),I=ut.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,I,U),h=At.get(b,v.length),h.init(I),v.push(h),J.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ue.setFromProjectionMatrix(J,Oi,I.reversedDepth),$=this.localClippingEnabled,jt=ct.init(this.clippingPlanes,$),m=X.get(b,_.length),m.init(),_.push(m),ut.enabled===!0&&ut.isPresenting===!0){let lt=y.xr.getDepthSensingMesh();lt!==null&&Hs(lt,I,-1/0,y.sortObjects)}Hs(b,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(pt,_t),Yt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Yt&&Rt.addToRenderList(m,b),this.info.render.frame++,jt===!0&&ct.beginShadows();let G=h.state.shadowsArray;wt.render(G,b,I),jt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=m.opaque,O=m.transmissive;if(h.setupLights(),I.isArrayCamera){let lt=I.cameras;if(O.length>0)for(let xt=0,Tt=lt.length;xt<Tt;xt++){let St=lt[xt];Vs(F,O,b,St)}Yt&&Rt.render(b);for(let xt=0,Tt=lt.length;xt<Tt;xt++){let St=lt[xt];ul(m,b,St,St.viewport)}}else O.length>0&&Vs(F,O,b,I),Yt&&Rt.render(b),ul(m,b,I);U!==null&&w===0&&(ht.updateMultisampleRenderTarget(U),ht.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(y,b,I),B.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(h=v[v.length-1],jt===!0&&ct.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Hs(b,I,G,F){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ue.intersectsSprite(b)){F&&Ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(J);let xt=P.update(b),Tt=b.material;Tt.visible&&m.push(b,xt,Tt,G,Ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ue.intersectsObject(b))){let xt=P.update(b),Tt=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ut.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ut.copy(xt.boundingSphere.center)),Ut.applyMatrix4(b.matrixWorld).applyMatrix4(J)),Array.isArray(Tt)){let St=xt.groups;for(let Ft=0,Vt=St.length;Ft<Vt;Ft++){let Nt=St[Ft],qt=Tt[Nt.materialIndex];qt&&qt.visible&&m.push(b,xt,qt,G,Ut.z,Nt)}}else Tt.visible&&m.push(b,xt,Tt,G,Ut.z,null)}}let lt=b.children;for(let xt=0,Tt=lt.length;xt<Tt;xt++)Hs(lt[xt],I,G,F)}function ul(b,I,G,F){let O=b.opaque,lt=b.transmissive,xt=b.transparent;h.setupLightsView(G),jt===!0&&ct.setGlobalState(y.clippingPlanes,G),F&&Y.viewport(D.copy(F)),O.length>0&&Sn(O,I,G),lt.length>0&&Sn(lt,I,G),xt.length>0&&Sn(xt,I,G),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Vs(b,I,G,F){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[F.id]===void 0&&(h.state.transmissionRenderTarget[F.id]=new ts(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?el:Bi,minFilter:ns,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));let lt=h.state.transmissionRenderTarget[F.id],xt=F.viewport||D;lt.setSize(xt.z*y.transmissionResolutionScale,xt.w*y.transmissionResolutionScale);let Tt=y.getRenderTarget(),St=y.getActiveCubeFace(),Ft=y.getActiveMipmapLevel();y.setRenderTarget(lt),y.getClearColor(Q),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Yt&&Rt.render(G);let Vt=y.toneMapping;y.toneMapping=zs;let Nt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),h.setupLightsView(F),jt===!0&&ct.setGlobalState(y.clippingPlanes,F),Sn(b,G,F),ht.updateMultisampleRenderTarget(lt),ht.updateRenderTargetMipmap(lt),et.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let de=0,Re=I.length;de<Re;de++){let ve=I[de],pe=ve.object,It=ve.geometry,Pe=ve.material,ae=ve.group;if(Pe.side===di&&pe.layers.test(F.layers)){let Mn=Pe.side;Pe.side=Fn,Pe.needsUpdate=!0,za(pe,G,F,It,Pe,ae),Pe.side=Mn,Pe.needsUpdate=!0,qt=!0}}qt===!0&&(ht.updateMultisampleRenderTarget(lt),ht.updateRenderTargetMipmap(lt))}y.setRenderTarget(Tt,St,Ft),y.setClearColor(Q,Z),Nt!==void 0&&(F.viewport=Nt),y.toneMapping=Vt}function Sn(b,I,G){let F=I.isScene===!0?I.overrideMaterial:null;for(let O=0,lt=b.length;O<lt;O++){let xt=b[O],Tt=xt.object,St=xt.geometry,Ft=xt.group,Vt=xt.material;Vt.allowOverride===!0&&F!==null&&(Vt=F),Tt.layers.test(G.layers)&&za(Tt,I,G,St,Vt,Ft)}}function za(b,I,G,F,O,lt){b.onBeforeRender(y,I,G,F,O,lt),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(y,I,G,F,b,lt),O.transparent===!0&&O.side===di&&O.forceSinglePass===!1?(O.side=Fn,O.needsUpdate=!0,y.renderBufferDirect(G,I,F,O,b,lt),O.side=Is,O.needsUpdate=!0,y.renderBufferDirect(G,I,F,O,b,lt),O.side=di):y.renderBufferDirect(G,I,F,O,b,lt),b.onAfterRender(y,I,G,F,O,lt)}function Ba(b,I,G){I.isScene!==!0&&(I=Ct);let F=rt.get(b),O=h.state.lights,lt=h.state.shadowsArray,xt=O.state.version,Tt=k.getParameters(b,O.state,lt,I,G),St=k.getProgramCacheKey(Tt),Ft=F.programs;F.environment=b.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(b.isMeshStandardMaterial?Ht:Wt).get(b.envMap||F.environment),F.envMapRotation=F.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Ft===void 0&&(b.addEventListener("dispose",K),Ft=new Map,F.programs=Ft);let Vt=Ft.get(St);if(Vt!==void 0){if(F.currentProgram===Vt&&F.lightsStateVersion===xt)return Gs(b,Tt),Vt}else Tt.uniforms=k.getUniforms(b),b.onBeforeCompile(Tt,y),Vt=k.acquireProgram(Tt,St),Ft.set(St,Vt),F.uniforms=Tt.uniforms;let Nt=F.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Nt.clippingPlanes=ct.uniform),Gs(b,Tt),F.needsLights=ru(b),F.lightsStateVersion=xt,F.needsLights&&(Nt.ambientLightColor.value=O.state.ambient,Nt.lightProbe.value=O.state.probe,Nt.directionalLights.value=O.state.directional,Nt.directionalLightShadows.value=O.state.directionalShadow,Nt.spotLights.value=O.state.spot,Nt.spotLightShadows.value=O.state.spotShadow,Nt.rectAreaLights.value=O.state.rectArea,Nt.ltc_1.value=O.state.rectAreaLTC1,Nt.ltc_2.value=O.state.rectAreaLTC2,Nt.pointLights.value=O.state.point,Nt.pointLightShadows.value=O.state.pointShadow,Nt.hemisphereLights.value=O.state.hemi,Nt.directionalShadowMap.value=O.state.directionalShadowMap,Nt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Nt.spotShadowMap.value=O.state.spotShadowMap,Nt.spotLightMatrix.value=O.state.spotLightMatrix,Nt.spotLightMap.value=O.state.spotLightMap,Nt.pointShadowMap.value=O.state.pointShadowMap,Nt.pointShadowMatrix.value=O.state.pointShadowMatrix),F.currentProgram=Vt,F.uniformsList=null,Vt}function Rr(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=ol.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Gs(b,I){let G=rt.get(b);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function hl(b,I,G,F,O){I.isScene!==!0&&(I=Ct),ht.resetTextureUnits();let lt=I.fog,xt=F.isMeshStandardMaterial?I.environment:null,Tt=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:dr,St=(F.isMeshStandardMaterial?Ht:Wt).get(F.envMap||xt),Ft=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Vt=!!G.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Nt=!!G.morphAttributes.position,qt=!!G.morphAttributes.normal,de=!!G.morphAttributes.color,Re=zs;F.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Re=y.toneMapping);let ve=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pe=ve!==void 0?ve.length:0,It=rt.get(F),Pe=h.state.lights;if(jt===!0&&($===!0||b!==M)){let nn=b===M&&F.id===E;ct.setState(F,b,nn)}let ae=!1;F.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Pe.state.version||It.outputColorSpace!==Tt||O.isBatchedMesh&&It.batching===!1||!O.isBatchedMesh&&It.batching===!0||O.isBatchedMesh&&It.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&It.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&It.instancing===!1||!O.isInstancedMesh&&It.instancing===!0||O.isSkinnedMesh&&It.skinning===!1||!O.isSkinnedMesh&&It.skinning===!0||O.isInstancedMesh&&It.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&It.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&It.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&It.instancingMorph===!1&&O.morphTexture!==null||It.envMap!==St||F.fog===!0&&It.fog!==lt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ct.numPlanes||It.numIntersection!==ct.numIntersection)||It.vertexAlphas!==Ft||It.vertexTangents!==Vt||It.morphTargets!==Nt||It.morphNormals!==qt||It.morphColors!==de||It.toneMapping!==Re||It.morphTargetsCount!==pe)&&(ae=!0):(ae=!0,It.__version=F.version);let Mn=It.currentProgram;ae===!0&&(Mn=Ba(F,I,O));let rs=!1,qe=!1,ks=!1,Te=Mn.getUniforms(),bn=It.uniforms;if(Y.useProgram(Mn.program)&&(rs=!0,qe=!0,ks=!0),F.id!==E&&(E=F.id,qe=!0),rs||M!==b){Y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Te.setValue(C,"projectionMatrix",b.projectionMatrix),Te.setValue(C,"viewMatrix",b.matrixWorldInverse);let un=Te.map.cameraPosition;un!==void 0&&un.setValue(C,bt.setFromMatrixPosition(b.matrixWorld)),j.logarithmicDepthBuffer&&Te.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Te.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,qe=!0,ks=!0)}if(O.isSkinnedMesh){Te.setOptional(C,O,"bindMatrix"),Te.setOptional(C,O,"bindMatrixInverse");let nn=O.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Te.setValue(C,"boneTexture",nn.boneTexture,ht))}O.isBatchedMesh&&(Te.setOptional(C,O,"batchingTexture"),Te.setValue(C,"batchingTexture",O._matricesTexture,ht),Te.setOptional(C,O,"batchingIdTexture"),Te.setValue(C,"batchingIdTexture",O._indirectTexture,ht),Te.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&Te.setValue(C,"batchingColorTexture",O._colorsTexture,ht));let Ln=G.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&ot.update(O,G,Mn),(qe||It.receiveShadow!==O.receiveShadow)&&(It.receiveShadow=O.receiveShadow,Te.setValue(C,"receiveShadow",O.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(bn.envMap.value=St,bn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&I.environment!==null&&(bn.envMapIntensity.value=I.environmentIntensity),qe&&(Te.setValue(C,"toneMappingExposure",y.toneMappingExposure),It.needsLights&&au(bn,ks),lt&&F.fog===!0&&it.refreshFogUniforms(bn,lt),it.refreshMaterialUniforms(bn,F,z,at,h.state.transmissionRenderTarget[b.id]),ol.upload(C,Rr(It),bn,ht)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ol.upload(C,Rr(It),bn,ht),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Te.setValue(C,"center",O.center),Te.setValue(C,"modelViewMatrix",O.modelViewMatrix),Te.setValue(C,"normalMatrix",O.normalMatrix),Te.setValue(C,"modelMatrix",O.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let nn=F.uniformsGroups;for(let un=0,Cr=nn.length;un<Cr;un++){let V=nn[un];kt.update(V,Mn),kt.bind(V,Mn)}}return Mn}function au(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function ru(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,I,G){let F=rt.get(b);F.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),rt.get(b.texture).__webglTexture=I,rt.get(b.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:G,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){let G=rt.get(b);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0};let Vd=C.createFramebuffer();this.setRenderTarget=function(b,I=0,G=0){U=b,R=I,w=G;let F=!0,O=null,lt=!1,xt=!1;if(b){let St=rt.get(b);if(St.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(C.FRAMEBUFFER,null),F=!1;else if(St.__webglFramebuffer===void 0)ht.setupRenderTarget(b);else if(St.__hasExternalTextures)ht.rebindTextures(b,rt.get(b.texture).__webglTexture,rt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Nt=b.depthTexture;if(St.__boundDepthTexture!==Nt){if(Nt!==null&&rt.has(Nt)&&(b.width!==Nt.image.width||b.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(b)}}let Ft=b.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(xt=!0);let Vt=rt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Vt[I])?O=Vt[I][G]:O=Vt[I],lt=!0):b.samples>0&&ht.useMultisampledRTT(b)===!1?O=rt.get(b).__webglMultisampledFramebuffer:Array.isArray(Vt)?O=Vt[G]:O=Vt,D.copy(b.viewport),H.copy(b.scissor),W=b.scissorTest}else D.copy(Mt).multiplyScalar(z).floor(),H.copy(Pt).multiplyScalar(z).floor(),W=zt;if(G!==0&&(O=Vd),Y.bindFramebuffer(C.FRAMEBUFFER,O)&&F&&Y.drawBuffers(b,O),Y.viewport(D),Y.scissor(H),Y.setScissorTest(W),lt){let St=rt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,St.__webglTexture,G)}else if(xt){let St=I;for(let Ft=0;Ft<b.textures.length;Ft++){let Vt=rt.get(b.textures[Ft]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ft,Vt.__webglTexture,G,St)}}else if(b!==null&&G!==0){let St=rt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,St.__webglTexture,G)}E=-1},this.readRenderTargetPixels=function(b,I,G,F,O,lt,xt,Tt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){Y.bindFramebuffer(C.FRAMEBUFFER,St);try{let Ft=b.textures[Tt],Vt=Ft.format,Nt=Ft.type;if(!j.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-F&&G>=0&&G<=b.height-O&&(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Tt),C.readPixels(I,G,F,O,Dt.convert(Vt),Dt.convert(Nt),lt))}finally{let Ft=U!==null?rt.get(U).__webglFramebuffer:null;Y.bindFramebuffer(C.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(b,I,G,F,O,lt,xt,Tt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St)if(I>=0&&I<=b.width-F&&G>=0&&G<=b.height-O){Y.bindFramebuffer(C.FRAMEBUFFER,St);let Ft=b.textures[Tt],Vt=Ft.format,Nt=Ft.type;if(!j.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,qt),C.bufferData(C.PIXEL_PACK_BUFFER,lt.byteLength,C.STREAM_READ),b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Tt),C.readPixels(I,G,F,O,Dt.convert(Vt),Dt.convert(Nt),0);let de=U!==null?rt.get(U).__webglFramebuffer:null;Y.bindFramebuffer(C.FRAMEBUFFER,de);let Re=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await db(C,Re,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,qt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,lt),C.deleteBuffer(qt),C.deleteSync(Re),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,G=0){let F=Math.pow(2,-G),O=Math.floor(b.image.width*F),lt=Math.floor(b.image.height*F),xt=I!==null?I.x:0,Tt=I!==null?I.y:0;ht.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,xt,Tt,O,lt),Y.unbindTexture()};let fl=C.createFramebuffer(),ou=C.createFramebuffer();this.copyTextureToTexture=function(b,I,G=null,F=null,O=0,lt=null){lt===null&&(O!==0?(Fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=O,O=0):lt=0);let xt,Tt,St,Ft,Vt,Nt,qt,de,Re,ve=b.isCompressedTexture?b.mipmaps[lt]:b.image;if(G!==null)xt=G.max.x-G.min.x,Tt=G.max.y-G.min.y,St=G.isBox3?G.max.z-G.min.z:1,Ft=G.min.x,Vt=G.min.y,Nt=G.isBox3?G.min.z:0;else{let Ln=Math.pow(2,-O);xt=Math.floor(ve.width*Ln),Tt=Math.floor(ve.height*Ln),b.isDataArrayTexture?St=ve.depth:b.isData3DTexture?St=Math.floor(ve.depth*Ln):St=1,Ft=0,Vt=0,Nt=0}F!==null?(qt=F.x,de=F.y,Re=F.z):(qt=0,de=0,Re=0);let pe=Dt.convert(I.format),It=Dt.convert(I.type),Pe;I.isData3DTexture?(ht.setTexture3D(I,0),Pe=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(ht.setTexture2DArray(I,0),Pe=C.TEXTURE_2D_ARRAY):(ht.setTexture2D(I,0),Pe=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);let ae=C.getParameter(C.UNPACK_ROW_LENGTH),Mn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),rs=C.getParameter(C.UNPACK_SKIP_PIXELS),qe=C.getParameter(C.UNPACK_SKIP_ROWS),ks=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ve.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ve.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,Vt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Nt);let Te=b.isDataArrayTexture||b.isData3DTexture,bn=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){let Ln=rt.get(b),nn=rt.get(I),un=rt.get(Ln.__renderTarget),Cr=rt.get(nn.__renderTarget);Y.bindFramebuffer(C.READ_FRAMEBUFFER,un.__webglFramebuffer),Y.bindFramebuffer(C.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let V=0;V<St;V++)Te&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,rt.get(b).__webglTexture,O,Nt+V),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,rt.get(I).__webglTexture,lt,Re+V)),C.blitFramebuffer(Ft,Vt,xt,Tt,qt,de,xt,Tt,C.DEPTH_BUFFER_BIT,C.NEAREST);Y.bindFramebuffer(C.READ_FRAMEBUFFER,null),Y.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(O!==0||b.isRenderTargetTexture||rt.has(b)){let Ln=rt.get(b),nn=rt.get(I);Y.bindFramebuffer(C.READ_FRAMEBUFFER,fl),Y.bindFramebuffer(C.DRAW_FRAMEBUFFER,ou);for(let un=0;un<St;un++)Te?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ln.__webglTexture,O,Nt+un):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ln.__webglTexture,O),bn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nn.__webglTexture,lt,Re+un):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,nn.__webglTexture,lt),O!==0?C.blitFramebuffer(Ft,Vt,xt,Tt,qt,de,xt,Tt,C.COLOR_BUFFER_BIT,C.NEAREST):bn?C.copyTexSubImage3D(Pe,lt,qt,de,Re+un,Ft,Vt,xt,Tt):C.copyTexSubImage2D(Pe,lt,qt,de,Ft,Vt,xt,Tt);Y.bindFramebuffer(C.READ_FRAMEBUFFER,null),Y.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else bn?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Pe,lt,qt,de,Re,xt,Tt,St,pe,It,ve.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Pe,lt,qt,de,Re,xt,Tt,St,pe,ve.data):C.texSubImage3D(Pe,lt,qt,de,Re,xt,Tt,St,pe,It,ve):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,lt,qt,de,xt,Tt,pe,It,ve.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,lt,qt,de,ve.width,ve.height,pe,ve.data):C.texSubImage2D(C.TEXTURE_2D,lt,qt,de,xt,Tt,pe,It,ve);C.pixelStorei(C.UNPACK_ROW_LENGTH,ae),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Mn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,rs),C.pixelStorei(C.UNPACK_SKIP_ROWS,qe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ks),lt===0&&I.generateMipmaps&&C.generateMipmap(Pe),Y.unbindTexture()},this.initRenderTarget=function(b){rt.get(b).__webglFramebuffer===void 0&&ht.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ht.setTextureCube(b,0):b.isData3DTexture?ht.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ht.setTexture2DArray(b,0):ht.setTexture2D(b,0),Y.unbindTexture()},this.resetState=function(){R=0,w=0,U=null,Y.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),n.unpackColorSpace=fe._getUnpackColorSpace()}};var f1=Fa(eu(),1),jb={portrait:[1.6,2.25],landscape:[2.25,1.6]},K3={left:.27,center:.5,right:.73},su=.018,Hn=.007,Oe=4,$b=1/.05,Q3=1/240,j3=2,Fs=40,Od=24,n_=.36,r1=.095,$3=.0135,Pd=.036,iu=.15,t1=1024,e1={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},Bd=[0,.07,.93,1],tD=[-.95,-.28,.28,.95],eD=9,nD=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,iD=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,sD=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,aD=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,n1={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},as=(e,t,n)=>Math.min(n,Math.max(t,e)),nu=(e,t,n)=>e+(t-e)*n,i_=(e,t)=>{try{let n=document.createElement("canvas").getContext("2d");if(!n)return t;n.fillStyle="#000000",n.fillStyle=e;let i=n.fillStyle;if(i.startsWith("#")){let a=parseInt(i.slice(1),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}let s=i.match(/[\d.]+/g);return!s||s.length<3?t:[Number(s[0])/255,Number(s[1])/255,Number(s[2])/255]}catch{return t}},rD=e=>.2126*e[0]+.7152*e[1]+.0722*e[2],Fd=(e,t=1)=>`rgba(${Math.round(e[0]*255)}, ${Math.round(e[1]*255)}, ${Math.round(e[2]*255)}, ${t})`,o1=e=>{let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},r_=(e,t,n,i,s,a)=>{let r=Math.max(0,Math.min(a,i/2,s/2)),o=r*.4477;e.moveTo(t+r,n),e.lineTo(t+i-r,n),e.bezierCurveTo(t+i-o,n,t+i,n+o,t+i,n+r),e.lineTo(t+i,n+s-r),e.bezierCurveTo(t+i,n+s-o,t+i-o,n+s,t+i-r,n+s),e.lineTo(t+r,n+s),e.bezierCurveTo(t+o,n+s,t,n+s-o,t,n+s-r),e.lineTo(t,n+r),e.bezierCurveTo(t,n+o,t+o,n,t+r,n)},s_=(e,t)=>{if(!t)return Promise.resolve(null);let n=e.get(t);if(n)return n;let i=new Promise(s=>{let a=new Image;a.crossOrigin="anonymous",a.decoding="async",a.onload=()=>s(a),a.onerror=()=>s(null),a.src=t});return e.set(t,i),i},i1=(e,t)=>{let[n,i]=jb[e]||jb.portrait,s=nu(.03,Math.min(n,i)*.2,as(t,0,1)),a={width:.34,height:.07,y:i/2-.13},r=i/2-.055;return{width:n,height:i,radius:s,slot:a,ringY:r,hangY:r+r1}},oD=e=>{let{width:t,height:n,radius:i,slot:s}=e,a=new Ua;r_(a,-t/2+Hn,-n/2+Hn,t-Hn*2,n-Hn*2,Math.max(i-Hn,.005));let r=new gr;r_(r,-s.width/2-Hn,s.y-s.height/2-Hn,s.width+Hn*2,s.height+Hn*2,s.height/2+Hn),a.holes.push(r);let o=new Ko(a,{depth:su,bevelEnabled:!0,bevelThickness:Hn,bevelSize:Hn,bevelSegments:5,curveSegments:24});o.translate(0,0,-su/2);let l=new Xc(a,24),c=l.getAttribute("position"),u=l.getAttribute("uv");for(let d=0;d<c.count;d++)u.setXY(d,(c.getX(d)+t/2)/t,(c.getY(d)+n/2)/n);return u.needsUpdate=!0,{body:o,face:l}},s1=e=>{let t=new Ua,n=e*1.16;r_(t,-n/2+.014,-iu/2+.014,n-.028,iu-.028,.024);let i=new Ko(t,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return i.translate(0,0,-.01),i},lD=e=>{let t=Bd.length,n=new ui;n.setAttribute("position",new vn(new Float32Array(e*t*3),3)),n.setAttribute("normal",new vn(new Float32Array(e*t*3),3)),n.setAttribute("uv",new vn(new Float32Array(e*t*2),2));let i=[];for(let s=0;s<e-1;s++)for(let a=0;a<t-1;a++){let r=s*t+a;i.push(r,r+t,r+1,r+1,r+t,r+t+1)}return n.setIndex(i),n},cD=(e,t=1)=>{let n=new Wo;n.background=new Qt(.035,.035,.04);let i=new vr(1,1),s=[],a=(l,c,u,d=0)=>{let f=new pr({color:new Qt(l,l,l),side:di});s.push(f);let p=new We(i,f);p.position.set(c[0]*t,c[1],c[2]),p.scale.set(u[0],u[1],1),p.lookAt(0,0,0),p.rotateZ(d*t),n.add(p)};a(2.6,[0,4.5,8],[9,4]),a(6,[-5.5,.5,7],[.9,14]),a(4,[5,-.5,8],[.6,14]),a(3.5,[0,-1,9],[24,.35],Math.PI/3),a(2.5,[1,2.5,9],[24,.2],Math.PI/3),a(1.4,[0,6,-6],[12,4]),a(.5,[0,-7,1],[16,6]),a(.9,[8,0,-2],[4,10]);let r=new ll(e),o=r.fromScene(n,.035);return r.dispose(),i.dispose(),s.forEach(l=>l.dispose()),o},a_=(e,t)=>{let n=new mr(e);return n.colorSpace=_n,n.anisotropy=t,n},uD=()=>{let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d");if(!n)return new mr(t);let i=o1(7),s=Float32Array.from({length:16384},()=>i()),a=(l,c)=>{let u=0;for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++)u+=s[(c+d+128)%128*128+(l+f+128)%128];return u/9*1.6},r=n.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=a((c-1+128)%128,l)-a((c+1)%128,l),d=a(c,(l-1+128)%128)-a(c,(l+1)%128),f=Math.hypot(u,d,1),p=(l*128+c)*4;r.data[p]=(u/f*.5+.5)*255,r.data[p+1]=(d/f*.5+.5)*255,r.data[p+2]=(1/f*.5+.5)*255,r.data[p+3]=255}n.putImageData(r,0,0);let o=new mr(t);return o.wrapS=$i,o.wrapT=$i,o.repeat.set(5,7),o},hD=()=>{let n=o1(19),i=Float32Array.from({length:16384},()=>n()),s=l=>Math.sqrt(Math.max(0,1-4*l*l)),a=(l,c)=>{let u=(l%128+128)%128,d=(c%128+128)%128,f=u/128*8,p=d/128*8,g=Math.floor(f),S=Math.floor(p),m=f-g-.5,h=p-S-.5,_=(g+S)%2===0,v=s(m)*(.55+.45*Math.cos(h*Math.PI*(_?1:.6))),y=s(h)*(.55+.45*Math.cos(m*Math.PI*(_?.6:1)));return(_?Math.max(v,y*.7):Math.max(y,v*.7))+i[d*128+u]*.08},r=new Uint8Array(16384*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=(a(c-1,l)-a(c+1,l))*1.6,d=(a(c,l-1)-a(c,l+1))*1.6,f=Math.hypot(u,d,1),p=(l*128+c)*4;r[p]=(u/f*.5+.5)*255,r[p+1]=(d/f*.5+.5)*255,r[p+2]=(1/f*.5+.5)*255,r[p+3]=255}let o=new Ic(r,128,128);return o.wrapS=$i,o.wrapT=$i,o.magFilter=ci,o.minFilter=ns,o.generateMipmaps=!0,o.needsUpdate=!0,o},fD=(e,t,n,i,s)=>{let a=(s==="contain"?Math.min:Math.max)(n/t.width,i/t.height),r=t.width*a,o=t.height*a;e.drawImage(t,(n-r)/2,(i-o)/2,r,o)},a1=(e,t,n,i)=>{let s=e.getContext("2d");s&&(s.fillStyle=Fd(n),s.fillRect(0,0,e.width,e.height),t&&fD(s,t,e.width,e.height,i))},dD=(e,t,n)=>{let s=t?Math.max(64,Math.round(t.width/t.height*192)):384;e.width=192,e.height=s;let a=e.getContext("2d");if(!a)return s/192;if(a.fillStyle=Fd(n),a.fillRect(0,0,192,s),t)return a.save(),a.translate(192,0),a.rotate(Math.PI/2),a.drawImage(t,0,0,s,192),a.restore(),s/192;let r=rD(n)>.5?[0,0,0]:[1,1,1];a.fillStyle=Fd(r,.05);for(let o=0;o<s;o+=4)a.fillRect(0,o,192,1);a.fillStyle=Fd(r,.2);for(let o=0;o<s;o+=14)a.fillRect(192*.075,o,2,8),a.fillRect(192*.925-2,o,2,8);return s/192},pD=()=>{let e=()=>Array.from({length:Oe+1},()=>new L);return{nodes:e(),previous:e(),velocities:e(),lengths:new Float64Array(Oe),impulses:new Float64Array(Oe),rest:1,anchor:new L,body:{position:new L,previous:new L,velocity:new L,quaternion:new Pn,previousQuaternion:new Pn,angular:new L,mass:1,inverseInertia:new L(1,1,1),hang:new L},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},_e={a:new L,b:new L,c:new L,d:new L,e:new L,f:new L,g:new L,pin:new L,q:new Pn,r:new Pn},o_=(e,t,n)=>(_e.r.copy(e.quaternion).invert(),n.copy(t).applyQuaternion(_e.r),n.set(n.x*e.inverseInertia.x,n.y*e.inverseInertia.y,n.z*e.inverseInertia.z),n.applyQuaternion(e.quaternion)),l1=(e,t)=>{let{x:n,y:i,z:s,w:a}=e;e.x+=.5*(t.x*a+t.y*s-t.z*i),e.y+=.5*(t.y*a+t.z*n-t.x*s),e.z+=.5*(t.z*a+t.x*i-t.y*n),e.w+=.5*(-t.x*n-t.y*i-t.z*s),e.normalize()},c1=(e,t,n)=>{let i=_e.c.crossVectors(t,n);return 1/e.mass+i.dot(o_(e,i,_e.d))},u1=(e,t,n)=>{e.position.addScaledVector(n,1/e.mass),l1(e.quaternion,o_(e,_e.e.crossVectors(t,n),_e.f))},mD=(e,t,n,i)=>{let{nodes:s,body:a}=e,r=s[t],o=t===0?0:$b,l=t===Oe-1,c=_e.g,u=s[t+1];l&&(c.copy(a.hang).applyQuaternion(a.quaternion),u=_e.b.copy(a.position).add(c));let d=_e.a.subVectors(u,r),f=d.length(),p=f-e.rest;if(p<=0||f<1e-9)return;let g=d.divideScalar(f),S=l?c1(a,c,g):$b,m=(f-e.lengths[t])/n,_=(i.hold*Math.tanh(i.stiffness*p/i.hold)+i.spring*p+i.bandDamping*Math.max(0,m))*n*n-e.impulses[t];if(_<=0)return;let v=Math.min(p/(o+S),_);e.impulses[t]+=v,o&&r.addScaledVector(g,v*o),l?u1(a,c,g.multiplyScalar(-v)):u.addScaledVector(g,-v*S)},gD=(e,t,n)=>{let i=_e.g.copy(t.local).applyQuaternion(e.quaternion),s=_e.a.copy(n).sub(e.position).sub(i),a=s.length();if(a<1e-9)return;let r=s.divideScalar(a),o=a/c1(e,i,r);u1(e,i,r.multiplyScalar(o))},zd=(e,t,n)=>{let{nodes:i,previous:s,velocities:a,body:r,anchor:o}=e;i[0].copy(o);for(let c=1;c<=Oe;c++)i[c].copy(i[c-1]),i[c].y-=e.rest,n&&(i[c].x+=e.rest*.18);r.quaternion.identity(),n&&r.quaternion.setFromAxisAngle(new L(0,0,1),-.12),r.hang.set(0,t.hangY,0);let l=_e.a.copy(r.hang).applyQuaternion(r.quaternion);r.position.copy(i[Oe]).sub(l),r.previous.copy(r.position),r.previousQuaternion.copy(r.quaternion),r.velocity.set(0,0,0),r.angular.set(0,0,0);for(let c=0;c<=Oe;c++)s[c].copy(i[c]),a[c].set(0,0,0);e.lengths.fill(e.rest),e.turn=0,e.twist=0,e.twistRaw=0,e.calm=0},_D=(e,t,n)=>{e.rest=n/Oe;let{width:i,height:s}=t,a=e.body,r=su+Hn*2;a.mass=1,a.inverseInertia.set(12/(s*s+r*r),12/(i*i+r*r),12/(i*i+s*s)),a.hang.set(0,t.hangY,0)},vD=(e,t,n,i)=>{let s=Math.max(1,Math.ceil(t/Q3-1e-6)),a=t/s,{nodes:r,previous:o,velocities:l,body:c}=e,u=n.breeze*(Math.sin(i*.53)*.7+Math.sin(i*1.31+1.7)*.3)*3,d=n.breeze*Math.sin(i*.37+.6)*2,f=e.grab,p=_e.pin,g=Math.exp(-n.nodeDrag*a),S=Math.exp(-n.linearDrag*a),m=Math.exp(-n.angularDrag*a);for(let _=0;_<s;_++){for(let M=1;M<Oe;M++){let D=l[M];D.y-=n.gravity*a,D.x+=u*a,D.z+=d*a,o[M].copy(r[M]),r[M].addScaledVector(D,a)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let v=c.quaternion;if(f){let M=_e.q.copy(f.rotation).multiply(_e.r.copy(v).invert());M.w<0&&M.set(-M.x,-M.y,-M.z,-M.w);let D=_e.a.set(M.x,M.y,M.z).multiplyScalar(2*n.grip);D.addScaledVector(c.angular,-n.gripDamping),c.angular.addScaledVector(o_(c,D,_e.b),a)}let y=_e.a.set(0,1,0).applyQuaternion(v),A=_e.b.set(-y.x*y.z,-y.y*y.z,1-y.z*y.z);if(A.lengthSq()>.001){let M=_e.d.set(0,0,1).applyQuaternion(v),D=Math.atan2(_e.e.crossVectors(A,M).dot(y),A.dot(M)),H=D-e.twistRaw;H>Math.PI?H-=Math.PI*2:H<-Math.PI&&(H+=Math.PI*2),e.twist+=H,e.twistRaw=D}if(!f){let M=c.angular.dot(y);c.angular.addScaledVector(y,(n.twist*(e.turn-e.twist)-n.twistDamping*M)*a)}c.velocity.y-=n.gravity*a,c.velocity.x+=u*.35*a,c.velocity.z+=d*.35*a,c.position.addScaledVector(c.velocity,a),l1(c.quaternion,_e.f.copy(c.angular).multiplyScalar(a)),e.impulses.fill(0),f&&p.lerpVectors(f.from,f.target,(_+1)/s);for(let M=0;M<j3;M++){for(let D=0;D<Oe;D++)mD(e,D,a,n);f&&gD(c,f,p)}for(let M=1;M<Oe;M++){let D=l[M].subVectors(r[M],o[M]).divideScalar(a).multiplyScalar(g);D.multiplyScalar(1/(1+n.nodeAir*D.length()*a))}c.velocity.subVectors(c.position,c.previous).divideScalar(a);let R=_e.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(R.x,R.y,R.z).multiplyScalar(2/a*(R.w<0?-1:1));let w=_e.a.set(0,0,1).applyQuaternion(c.quaternion),U=c.velocity.dot(w),E=_e.b.copy(c.velocity).addScaledVector(w,-U);E.multiplyScalar(1/(1+n.air*E.length()*a)),c.velocity.copy(E).addScaledVector(w,U/(1+n.broadside*Math.abs(U)*a)).multiplyScalar(S),c.angular.multiplyScalar(m/(1+n.spinAir*c.angular.length()*a)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),r[Oe].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let M=0;M<Oe;M++)e.lengths[M]=r[M].distanceTo(r[M+1])}f&&f.from.copy(f.target);let h=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let _=1;_<Oe;_++)h+=l[_].lengthSq()*.05;e.calm=h<2e-4?e.calm+t:0},yD=({frontImage:e,backImage:t,imageFit:n="cover",cardColor:i="#ffffff",edgeColor:s,metalColor:a,lightFrom:r="left",orientation:o="portrait",finish:l="glossy",cornerRadius:c=.3,size:u=.6,anchor:d="center",strapLength:f=.5,strapImage:p,strapColor:g="#111111",strapWidth:S=.65,metal:m="silver",gravity:h=1,damping:_=.5,elasticity:v=.5,breeze:y=.5,interactive:A=!0,intro:R=!0,frameSelector:w,autoSway:U=!1,controlRef:E,onReady:M,onTap:D,onFlip:H,onUnavailable:W,onSnapshot:Q,className:Z="",style:q})=>{let at=(0,wr.useRef)(null),z=(0,wr.useRef)(null),pt=(0,wr.useRef)(null);return z.current={frontImage:e,backImage:t,imageFit:n==="contain"?"contain":"cover",cardColor:i,edgeColor:s,metalColor:a,lightFrom:r,orientation:o==="landscape"?"landscape":"portrait",finish:l,cornerRadius:c,size:u,anchor:d,strapLength:f,strapImage:p,strapColor:g,strapWidth:S,metal:m,gravity:h,damping:_,elasticity:v,breeze:y,interactive:A,intro:R,frameSelector:w,autoSway:U,onReady:M,onTap:D,onFlip:H,onUnavailable:W,onSnapshot:Q},(0,wr.useEffect)(()=>{pt.current?.()}),(0,wr.useEffect)(()=>{let _t=at.current;if(!_t)return;let Mt=r==="right"?-1:1,Pt;try{Pt=new Ld({antialias:!0,alpha:!0,powerPreference:"default"})}catch{z.current.onUnavailable?.();return}Pt.setClearColor(0,0),Pt.outputColorSpace=_n,Pt.toneMapping=Wf,Pt.toneMappingExposure=1;let zt=Pt.domElement;zt.className="lanyard-canvas",zt.setAttribute("aria-hidden","true"),_t.appendChild(zt);let ue=Math.min(8,Pt.capabilities.getMaxAnisotropy()),jt=new Wo,$=cD(Pt,Mt);jt.environment=$.texture;let J=new Cn(Od,1,.1,200),bt=new $o(16777215,1.6);bt.position.set(-2.5*Mt,4,6);let Ut=new $o(16777215,.35);Ut.position.set(3*Mt,-1,4),jt.add(bt,Ut);let Ct=new Map,Yt={front:null,back:null,strap:null},he=document.createElement("canvas"),C=document.createElement("canvas"),st=document.createElement("canvas"),et=a_(he,ue),j=a_(C,ue),Y=a_(st,ue);Y.wrapS=Ki,Y.wrapT=$i;let dt=uD(),rt=hD(),ht={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new L},foilFill:{value:new L},foilTop:{value:new L}},Wt=V=>{Object.assign(V.uniforms,ht),V.vertexShader=V.vertexShader.replace("#include <common>",`#include <common>
${nD}`).replace("#include <project_vertex>",`#include <project_vertex>
${iD}`),V.fragmentShader=V.fragmentShader.replace("#include <common>",`#include <common>
${sD}`).replace("#include <opaque_fragment>",`${aD}
#include <opaque_fragment>`)},Ht=new La({map:et,normalMap:dt,normalScale:new gt(.06,.06)}),T=new La({map:j,normalMap:dt,normalScale:new gt(.06,.06)});Ht.onBeforeCompile=Wt,T.onBeforeCompile=Wt;let x=new La,P=new jo({metalness:1}),k=new La({map:Y,normalMap:rt,normalScale:new gt(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new Qt(.32,.32,.34),side:di}),it=new Qi,X=new We(void 0,x),At=new We(void 0,Ht),ct=new We(void 0,T),wt=new We(new Qo(r1,$3,18,72),P);wt.rotation.y=Math.PI/2-.7,it.add(X,At,ct,wt),jt.add(it);let Rt=lD(Fs),ot=new We(Rt,k);ot.frustumCulled=!1,jt.add(ot);let vt=new Qi,Bt=new We(s1(n_),P);Bt.position.y=Pd+iu/2-.004;let Dt=new We(new Qo(Pd,.0105,14,40),P);vt.add(Bt,Dt),jt.add(vt);let B=pD(),kt=[],N=new L,ut=new L,mt=new Zo(kt,!1,"centripetal"),ft={width:1,height:1,frame:null},nt=i1("portrait",.3),K={},Et=n_,Xt=2,oe=0,le=performance.now(),Kn=0,xn=performance.now(),pi=z.current.autoSway?{started:-1/0}:null,Un=!0,Hs=!0,ul=!1,Vs=!1,Sn=null,za=null,Ba=0,Rr=!1,Gs=!0,hl=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,au=()=>{let V=z.current,Ot=i_(V.cardColor,[1,1,1]),Lt=t1,ce=Math.round(t1*nt.height/nt.width);(he.width!==Lt||he.height!==ce)&&(he.width=Lt,he.height=ce,C.width=Lt,C.height=ce,et.dispose(),j.dispose()),a1(he,Yt.front,Ot,V.imageFit),a1(C,Yt.back||Yt.front,Ot,V.imageFit),et.needsUpdate=!0,j.needsUpdate=!0,qt()},ru=()=>{let V=z.current;Xt=dD(st,Yt.strap,i_(V.strapColor,[.07,.07,.07])),rt.repeat.set(2,2*Xt),Y.dispose(),Y.needsUpdate=!0,qt()},Vd=()=>{let V=z.current,Ot=_t.getBoundingClientRect(),Lt=(V.frameSelector&&document.querySelector(V.frameSelector))?.getBoundingClientRect()||Ot,ce=_t.closest(".badge-overlay"),$t=ce?new DOMMatrixReadOnly(getComputedStyle(ce).transform).m42:0;ft.frame={x:Lt.left-Ot.left,y:Lt.top-Ot.top+$t,width:Lt.width,height:Lt.height};let hn=Lt.width/Lt.height,sn=nt.height/as(V.size,.15,.9),os=nt.width/.72;sn*hn<os&&(sn=os/hn);let mi=sn/Lt.height,En=ft.height*mi,Xs=(ft.width/2-ft.frame.x-Lt.width/2)*mi,Ws=(ft.frame.y+Lt.height/2-ft.height/2)*mi;J.aspect=ft.width/ft.height,J.position.set(Xs,Ws,En/2/Math.tan(Od*Math.PI/360)),J.lookAt(Xs,Ws,0),J.updateProjectionMatrix(),J.updateMatrixWorld(),ht.foilKey.value.set(-2.5*Mt,4,6).normalize().transformDirection(J.matrixWorldInverse),ht.foilFill.value.set(3*Mt,-1,4).normalize().transformDirection(J.matrixWorldInverse),ht.foilTop.value.set(.5*Mt,4.5,8).normalize().transformDirection(J.matrixWorldInverse);let Dr=((K3[V.anchor]??.5)-.5)*sn*hn,lu=sn/2+.2,cu=sn/2-sn*nu(.12,.42,as(V.strapLength,0,1))+(nt.hangY-nt.height/2);B.anchor.set(Dr,lu,0),_D(B,nt,lu-cu);let Tn=document.querySelector(".landing-copy")?.getBoundingClientRect(),Fi=B.rest*Oe+nt.hangY+nt.height/2,Ae=Lt.left+Lt.width/2+Dr/mi,Hi=nt.width/2/mi,uu=Tn&&Tn.top<Lt.bottom?Tn.left-20:Ot.right-14,dl=Math.min(Ae-Hi-14,uu-Ae-Hi);ft.idleAmplitude=Math.max(0,Math.min(.14,dl*mi/Fi)),B.nodes[0].copy(B.anchor),B.previous[0].copy(B.anchor)},fl=()=>{if(!z.current.frameSelector||!ft.frame)return zt.toDataURL("image/png");let V=ft.frame,Ot=zt.width/ft.width,Lt=document.createElement("canvas");return Lt.width=Math.round(V.width*Ot),Lt.height=Math.round(V.height*Ot),Lt.getContext("2d").drawImage(zt,V.x*Ot,V.y*Ot,V.width*Ot,V.height*Ot,0,0,Lt.width,Lt.height),Lt.toDataURL("image/png")},ou=()=>{let V=z.current,Ot=`${V.orientation}|${V.cornerRadius}`;if(Ot!==K.layoutKey){nt=i1(V.orientation,V.cornerRadius);let En=oD(nt);X.geometry.dispose(),At.geometry.dispose(),ct.geometry.dispose(),X.geometry=En.body,At.geometry=En.face,ct.geometry=En.face.clone(),At.position.z=su/2+Hn+6e-4,ct.rotation.y=Math.PI,ct.position.z=-(su/2+Hn+6e-4),wt.position.set(0,nt.ringY,0),K.framingKey=""}let Lt=V.frameSelector&&document.querySelector(V.frameSelector)?.getBoundingClientRect(),ce=`${Ot}|${V.size}|${V.anchor}|${V.strapLength}|${ft.width}|${ft.height}|${Lt?.width}|${Lt?.height}`;ce!==K.framingKey&&(Vd(),ul?Ot!==K.layoutKey&&zd(B,nt,!1):(zd(B,nt,V.intro&&!hl),ul=!0));let $t=`${V.frontImage}|${V.backImage}|${V.strapImage}`;if($t!==K.imageKey){let En=++Ba;Promise.all([s_(Ct,V.frontImage),s_(Ct,V.backImage),s_(Ct,V.strapImage)]).then(([Xs,Ws,Dr])=>{!Hs||En!==Ba||(Yt.front=Xs,Yt.back=Ws,Yt.strap=Dr,au(),ru(),Xs&&Ws?(Rr=!0,lt(),z.current.onSnapshot?.(fl()),z.current.onReady?.()):z.current.onUnavailable?.())})}let hn=`${Ot}|${V.cardColor}|${V.imageFit}`;hn!==K.faceKey&&au(),V.strapColor!==K.strapColor&&ru();let sn=e1[V.finish]||e1.glossy,os=i_(V.cardColor,[1,1,1]);[Ht,T].forEach(En=>{En.roughness=sn.roughness,En.metalness=sn.metalness,En.clearcoat=sn.clearcoat,En.clearcoatRoughness=sn.clearcoatRoughness,En.anisotropy=sn.anisotropy}),ht.foilStrength.value=sn.foil,ht.foilAspect.value=nt.height/nt.width,V.edgeColor?x.color.set(V.edgeColor):x.color.setRGB(os[0]*.92,os[1]*.92,os[2]*.92,_n),x.roughness=Math.min(sn.roughness,.35),x.metalness=sn.metalness,x.clearcoat=1,x.clearcoatRoughness=.08;let mi=n1[V.metal]||n1.silver;P.color.set(V.metalColor||mi.color),P.roughness=mi.roughness,Et=n_*as(V.strapWidth,.4,2),Et!==K.strapScale&&(Bt.geometry.dispose(),Bt.geometry=s1(Et)),zt.style.touchAction=V.interactive?"pan-y":"auto",K={layoutKey:Ot,framingKey:ce,imageKey:$t,faceKey:hn,strapColor:V.strapColor,strapScale:Et},qt()},b=Array.from({length:Fs},()=>new L),I=Array.from({length:Fs},()=>new L),G=tD.map(V=>[Math.cos(V),Math.sin(V)]),F={offscreenTop:new L,tangent:new L,toCamera:new L,basis:new Ie,up:new L,across:new L,facing:new L,end:new L},O=()=>{let V=B.nodes[Oe],Ot=Pd+iu+.05,Lt=Oe-1;for(;Lt>0&&B.nodes[Lt].distanceTo(V)<Ot*1.1;)Lt--;let ce=F.up.subVectors(B.nodes[Lt],V);ce.lengthSq()<1e-8&&ce.set(0,1,0).applyQuaternion(B.body.quaternion),ce.normalize(),N.copy(V).addScaledVector(ce,Ot),ut.copy(V).addScaledVector(ce,Pd+iu*.35),kt.length=0;let $t=z.current.frameSelector?J.position.z*Math.tan(Od*Math.PI/360)*2*.18:0;$t&&(F.offscreenTop.copy(B.anchor).y+=$t,kt.push(F.offscreenTop));for(let Ae=0;Ae<=Lt;Ae++)kt.push(B.nodes[Ae]);kt.push(N,ut),mt.updateArcLengths();for(let Ae=0;Ae<Fs;Ae++)mt.getPointAt(Ae/(Fs-1),b[Ae]);let hn=mt.getLength(),sn=1-N.distanceTo(ut)/Math.max(hn,.001),os=Rt.getAttribute("position"),mi=Rt.getAttribute("normal"),En=Rt.getAttribute("uv"),Xs=Bd.length,Ws=B.rest*Oe,Dr=(Ws+$t)/(Et*Xt),lu=Et/Math.pow(Math.max(1,(hn-$t)/Math.max(Ws,.001)),.35),{tangent:qs,toCamera:cu,across:Tn,facing:Fi}=F;for(let Ae=0;Ae<Fs;Ae++){qs.subVectors(b[Math.min(Fs-1,Ae+1)],b[Math.max(0,Ae-1)]),qs.lengthSq()<1e-12&&qs.set(0,-1,0),qs.normalize(),cu.subVectors(J.position,b[Ae]).normalize();let Hi=I[Ae].crossVectors(cu,qs);Hi.lengthSq()<1e-10&&Hi.copy(Ae>0?I[Ae-1]:_e.a.set(1,0,0)),Hi.normalize(),Ae>0&&Hi.dot(I[Ae-1])<0&&Hi.negate();let uu=-B.twist*Math.pow(Math.min(1,Ae/(Fs-1)/sn),1.3);Fi.crossVectors(qs,Hi),Tn.copy(Hi).multiplyScalar(Math.cos(uu)).addScaledVector(Fi,Math.sin(uu)),Fi.crossVectors(qs,Tn);let dl=b[Ae],m1=(1-Ae/(Fs-1))*Dr;for(let Ur=0;Ur<Xs;Ur++){let Gd=Ae*Xs+Ur,kd=(Bd[Ur]-.5)*lu,[Xd,Wd]=G[Ur];os.setXYZ(Gd,dl.x+Tn.x*kd,dl.y+Tn.y*kd,dl.z+Tn.z*kd),mi.setXYZ(Gd,Fi.x*Xd+Tn.x*Wd,Fi.y*Xd+Tn.y*Wd,Fi.z*Xd+Tn.z*Wd),En.setXY(Gd,Bd[Ur],m1)}}F.end.copy(Tn),os.needsUpdate=!0,mi.needsUpdate=!0,En.needsUpdate=!0,Tn.copy(F.end).addScaledVector(ce,-F.end.dot(ce)).normalize(),Fi.crossVectors(Tn,ce).normalize(),F.basis.makeBasis(Tn,ce,Fi),vt.quaternion.setFromRotationMatrix(F.basis),vt.position.copy(V)},lt=()=>{!z.current.interactive&&!z.current.autoSway&&zd(B,nt,!1),it.position.copy(B.body.position),it.quaternion.copy(B.body.quaternion),O(),Pt.render(jt,J)},xt=()=>{let V=z.current,Ot=40*as(V.gravity,0,3),Lt=Math.max(Ot,20),ce=as(V.elasticity,0,1),$t=as(V.damping,0,1);return{gravity:Ot,hold:Lt*nu(2.2,5.5,ce),stiffness:Lt*10*Oe,spring:Lt*nu(.1,.4,ce)*Oe,bandDamping:Lt*nu(.3,.08,ce)*Oe,linearDrag:.25*Math.pow(16,$t),angularDrag:.5*Math.pow(12,$t),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:hl?0:as(V.breeze,0,1)}},Tt=new Pn,St=new L,Ft=new L(0,0,1),Vt=V=>{pi||(pi={started:V,nodes:B.nodes.map($t=>$t.clone()),position:B.body.position.clone(),rotation:B.body.quaternion.clone()});let Ot=Math.min(1,(V-pi.started)/1400),Lt=Ot*Ot*(3-2*Ot),ce=Math.sin(Kn*Math.PI/4)*ft.idleAmplitude;Tt.setFromAxisAngle(Ft,ce);for(let $t=0;$t<=Oe;$t++)St.set(0,-B.rest*$t,0).applyQuaternion(Tt).add(B.anchor),Ot<1?B.nodes[$t].lerpVectors(pi.nodes[$t],St,Lt):B.nodes[$t].copy(St),B.previous[$t].copy(B.nodes[$t]),B.velocities[$t].set(0,0,0);St.copy(B.body.hang).applyQuaternion(Tt).negate().add(B.nodes[Oe]),Ot<1?(B.body.position.lerpVectors(pi.position,St,Lt),B.body.quaternion.slerpQuaternions(pi.rotation,Tt,Lt)):(B.body.position.copy(St),B.body.quaternion.copy(Tt)),B.nodes[Oe].copy(B.body.hang).applyQuaternion(B.body.quaternion).add(B.body.position),B.body.previous.copy(B.body.position),B.body.previousQuaternion.copy(B.body.quaternion),B.body.velocity.set(0,0,0),B.body.angular.set(0,0,0);for(let $t=0;$t<Oe;$t++)B.lengths[$t]=B.nodes[$t].distanceTo(B.nodes[$t+1])},Nt=V=>{if(oe=0,!Hs)return;if(!z.current.interactive&&!z.current.autoSway){lt(),Rr&&Gs&&(z.current.onSnapshot?.(fl()),Gs=!1);return}let Ot=Math.min(1/30,Math.max(1/240,(V-le)/1e3));le=V,Kn+=Ot;let Lt=xt();z.current.autoSway&&!hl&&!B.grab&&(pi||V-xn>6e3)?Vt(V):vD(B,Ot,Lt,Kn);let $t=B.body;Number.isFinite($t.position.x+$t.position.y+$t.position.z+$t.quaternion.w)||(B.grab=null,zd(B,nt,!1)),lt();let hn=!z.current.autoSway&&B.calm>1.2&&!B.grab&&Lt.breeze===0;hn&&Rr&&Gs&&(z.current.onSnapshot?.(fl()),Gs=!1),Un&&!document.hidden&&!hn&&(oe=requestAnimationFrame(Nt))},qt=()=>{oe||!Un||document.hidden||!Hs||(B.calm=0,Gs=!0,le=performance.now(),oe=requestAnimationFrame(Nt))},de=new Yc,Re=new gt,ve=V=>{let Ot=zt.getBoundingClientRect();Re.set((V.clientX-Ot.left)/Ot.width*2-1,-((V.clientY-Ot.top)/Ot.height)*2+1),de.setFromCamera(Re,J)},pe=()=>(it.updateMatrixWorld(),de.intersectObjects([X,At,ct],!1)[0]||null),It=V=>{document.body.style.cursor!==V&&(document.body.style.cursor=V)},Pe=V=>{let Ot=B.body,Lt=_e.a.set(0,1,0).applyQuaternion(Ot.quaternion),ce=B.turn>0?-1:1;if(B.turn===0){let $t=_e.c.subVectors(V,J.position).normalize();ce=_e.b.subVectors(V,Ot.position).cross($t).dot(Lt)<0?-1:1}B.turn=B.turn===0?Math.PI*ce:0,Ot.angular.addScaledVector(Lt,eD*ce),z.current.onFlip?.(B.turn!==0)},ae=(V=1.3)=>{B.grab||(pi=null,xn=performance.now(),B.body.angular.z+=V,qt())};E&&(E.current={swing:ae});let Mn=V=>{if(V.isPrimary===!1||B.grab){Sn=null;return}if(!z.current.interactive||V.button>0||!Un||V.target.closest?.("a,button,summary,input,textarea,select"))return;let Ot=zt.getBoundingClientRect();if(V.clientX<Ot.left||V.clientX>Ot.right||V.clientY<Ot.top||V.clientY>Ot.bottom)return;ve(V);let Lt=pe();Lt&&(xn=performance.now(),pi=null,B.grab={local:Lt.point.clone().sub(B.body.position).applyQuaternion(B.body.quaternion.clone().invert()),rotation:B.body.quaternion.clone(),reach:Lt.distance,from:Lt.point.clone(),target:Lt.point.clone()},Sn={x:V.clientX,y:V.clientY,time:performance.now(),point:Lt.point.clone()},za=V.pointerId,zt.setPointerCapture?.(V.pointerId),It("grabbing"),V.preventDefault(),qt())},rs=V=>{if(!z.current.interactive||!Un||document.hidden||B.grab&&V.pointerId!==za)return;let Ot=zt.getBoundingClientRect();if(!B.grab&&(V.clientX<Ot.left||V.clientX>Ot.right||V.clientY<Ot.top||V.clientY>Ot.bottom)){Vs&&(Vs=!1,It(""));return}if(ve(V),B.grab){Sn&&Math.hypot(V.clientX-Sn.x,V.clientY-Sn.y)>6&&(Sn=null),de.ray.at(B.grab.reach,B.grab.target);let Lt=J.position.z*Math.tan(Od*Math.PI/360),ce=Math.hypot(nt.width,nt.height)*.58,$t=Math.max(.15,Lt*J.aspect-ce),hn=_e.a.copy(B.grab.local).applyQuaternion(B.body.quaternion);B.grab.target.x=as(B.grab.target.x,J.position.x-$t+hn.x,J.position.x+$t+hn.x),B.grab.target.y=as(B.grab.target.y,J.position.y-Lt+ce+hn.y,J.position.y+Lt-ce+hn.y),qt();return}V.pointerType!=="touch"&&(Vs=!!pe(),It(Vs?"grab":""))},qe=V=>{if(!B.grab||V.pointerId!==za)return;xn=performance.now();let Ot=Sn&&V.type==="pointerup"&&xn-Sn.time<450&&Math.hypot(V.clientX-Sn.x,V.clientY-Sn.y)<=6&&z.current.interactive&&Un&&!document.hidden;B.grab=null,Sn=null,za=null,zt.hasPointerCapture?.(V.pointerId)&&zt.releasePointerCapture(V.pointerId),It(Vs&&V.pointerType!=="touch"?"grab":""),Ot&&(z.current.onTap?z.current.onTap():ae()),qt()},ks=V=>{!z.current.interactive||V.touches.length!==1||(ve(V.touches[0]),pe()&&V.preventDefault())};window.addEventListener("pointerdown",Mn),window.addEventListener("pointermove",rs),window.addEventListener("pointerup",qe),window.addEventListener("pointercancel",qe),zt.addEventListener("lostpointercapture",qe),window.addEventListener("touchstart",ks,{passive:!1});let Te=()=>{ft.width=Math.max(1,_t.clientWidth),ft.height=Math.max(1,_t.clientHeight);let V=z.current.frameSelector?3e6:15e5;Pt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5,Math.sqrt(V/(ft.width*ft.height)))),Pt.setSize(ft.width,ft.height,!1),ou(),lt()},bn=new ResizeObserver(Te);bn.observe(_t);let Ln=z.current.frameSelector&&document.querySelector(z.current.frameSelector);Ln&&bn.observe(Ln);let nn=new IntersectionObserver(([V])=>{Un=V.isIntersecting,Un&&qt()});nn.observe(_t);let un=()=>{document.hidden?(cancelAnimationFrame(oe),oe=0):qt()};document.addEventListener("visibilitychange",un);let Cr=V=>{V.preventDefault(),z.current.onUnavailable?.()};return zt.addEventListener("webglcontextlost",Cr),pt.current=ou,Te(),()=>{Hs=!1,document.body.style.cursor="",cancelAnimationFrame(oe),pt.current=null,E&&(E.current=null),bn.disconnect(),nn.disconnect(),document.removeEventListener("visibilitychange",un),zt.removeEventListener("webglcontextlost",Cr),window.removeEventListener("pointerdown",Mn),window.removeEventListener("pointermove",rs),window.removeEventListener("pointerup",qe),window.removeEventListener("pointercancel",qe),zt.removeEventListener("lostpointercapture",qe),window.removeEventListener("touchstart",ks),[X,At,ct,wt,Bt,Dt,ot].forEach(V=>V.geometry?.dispose()),[Ht,T,x,P,k].forEach(V=>V.dispose()),[et,j,Y,dt,rt].forEach(V=>V.dispose()),$.dispose(),Pt.dispose(),zt.parentNode&&zt.parentNode.removeChild(zt)}},[r]),(0,f1.jsx)("div",{ref:at,className:`lanyard ${Z}`.trim(),style:q})},h1=yD;var c_=Fa(eu(),1),Hd=document.getElementById("badge-mount"),yn=document.getElementById("badge-fallback"),xD=document.getElementById("badge-announcement"),SD=document.querySelector(".badge-overlay"),l_=!0;try{l_=!sessionStorage.getItem("weiwei-badge-arrived-v2")}catch{}function MD(e){return new Promise((t,n)=>{let i=new Image;i.onload=()=>t(i),i.onerror=n,i.src=e})}function bD(e){let t=document.createElement("canvas");t.width=1024,t.height=1440;let n=t.getContext("2d");n.fillStyle="#fcfdff",n.fillRect(0,0,1024,1440),n.fillStyle="#171717",n.font="500 25px sans-serif",n.fillText("DESIGNER / MAKER",72,116),n.textAlign="right",n.font="24px monospace",n.fillText("01",950,116),n.textAlign="left",n.save(),n.beginPath(),n.roundRect(54,159,916,875,13),n.clip(),n.drawImage(e,e.width*.17,0,e.width*.66,e.width*.66*875/916,54,159,916,875),n.restore(),n.fillStyle="#171717",n.font='600 71px "PingFang SC",sans-serif',n.fillText("\u6BB5\u5FAE\u5FAE",66,1147),n.font="500 30px sans-serif",n.fillText("WEIWEI DUAN",70,1204),n.strokeStyle="#a5a5a3",n.lineWidth=1,n.beginPath(),n.moveTo(69,1255),n.lineTo(955,1255),n.stroke(),n.font="22px monospace",n.fillText("SYSTEMS, WITH A HUMAN SIDE.",70,1312),n.fillStyle="#7b7b78",n.font="18px monospace",n.fillText("CURIOUS / CARING / CREATING",70,1362);for(let i=0;i<35;i++)n.fillStyle="#363636",n.fillRect(725+i*6.3,1080,i%3===0?3.5:1.5,99);return t.toDataURL("image/png")}function ED(){let e=document.createElement("canvas");e.width=900,e.height=110;let t=e.getContext("2d");return t.fillStyle="#e1e6ed",t.fillRect(0,0,900,110),t.fillStyle="#363636",t.font="600 34px sans-serif",t.fillText("WEIWEI  /  DESIGN & MAKE   \u2733",24,67),e.toDataURL()}function p1(){window.dispatchEvent(new CustomEvent("weiwei:concierge-open",{detail:{source:"badge"}}))}function TD(){if(!yn)return;let e=null,t=yn.style.pointerEvents,n=yn.draggable;yn.style.pointerEvents="auto",yn.draggable=!1;let i=()=>{e=null},s=o=>{if(yn.hidden||o.button!==0||o.isPrimary===!1){i();return}e={pointerId:o.pointerId,x:o.clientX,y:o.clientY,time:performance.now()},o.stopPropagation()},a=o=>{e&&o.pointerId===e.pointerId&&Math.hypot(o.clientX-e.x,o.clientY-e.y)>6&&i()},r=o=>{if(!e||o.pointerId!==e.pointerId)return;let l=e;i(),!yn.hidden&&!document.hidden&&o.type==="pointerup"&&performance.now()-l.time<450&&Math.hypot(o.clientX-l.x,o.clientY-l.y)<=6&&p1()};return yn.addEventListener("pointerdown",s),yn.addEventListener("dragstart",i),window.addEventListener("pointermove",a),window.addEventListener("pointerup",r),window.addEventListener("pointercancel",i),window.addEventListener("blur",i),document.addEventListener("visibilitychange",i),()=>{yn.style.pointerEvents=t,yn.draggable=n,yn.removeEventListener("pointerdown",s),yn.removeEventListener("dragstart",i),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",i),window.removeEventListener("blur",i),document.removeEventListener("visibilitychange",i)}}function AD(){let[e,t]=(0,Pa.useState)(null),[n,i]=(0,Pa.useState)(matchMedia("(prefers-reduced-motion: reduce)").matches),[s,a]=(0,Pa.useState)(!1);return(0,Pa.useEffect)(TD,[]),(0,Pa.useEffect)(()=>{let r=!0;MD("assets/characters/weiwei-pearl-blue-v1.png").then(c=>{r&&t({card:bD(c),strap:ED()})}).catch(()=>{r&&a(!0)});let o=matchMedia("(prefers-reduced-motion: reduce)"),l=()=>i(o.matches);return o.addEventListener("change",l),()=>{r=!1,o.removeEventListener("change",l)}},[]),(0,Pa.useEffect)(()=>{Hd.style.opacity="0",yn.hidden=!1,(n||s)&&document.documentElement.classList.remove("badge-pending"),xD.textContent="\u6E29\u67D4\u3001\u597D\u5947\u3001\u559C\u6B22\u521B\u9020\u7684\u5FAE\u5FAE\u3002"},[n,s]),!e||n||s?null:(0,c_.jsx)(h1,{frontImage:e.card,backImage:e.card,strapImage:e.strap,size:.79,strapLength:.24,strapWidth:.57,cornerRadius:.18,finish:"glossy",metal:"silver",metalColor:"#e2e7ef",edgeColor:"#e5eaf2",lightFrom:"right",damping:.8,elasticity:.2,breeze:0,intro:!1,frameSelector:".badge-space",autoSway:!0,onTap:p1,onSnapshot:r=>{yn.src=r,yn.style.objectFit="fill"},onUnavailable:()=>a(!0),onReady:()=>{if(yn.hidden=!0,document.documentElement.classList.remove("badge-pending"),Hd.style.opacity="1",l_){SD.dataset.entry="arriving",l_=!1;try{sessionStorage.setItem("weiwei-badge-arrived-v2","1")}catch{}}}})}Hd&&(0,d1.createRoot)(Hd).render((0,c_.jsx)(AD,{}));
/*! For license information please see home-badge.js.LEGAL.txt */
