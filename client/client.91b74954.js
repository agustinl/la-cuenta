function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,a){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=c(e,n,r,a);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return""===t?void 0:+t}function w(t){return Array.from(t.childNodes)}function E(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?d(e):p(e)}function x(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function S(t){return x(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function L(t,e){t.value=null==e?"":e}function R(t,e=document.body){return Array.from(e.querySelectorAll(t))}let k;function A(t){k=t}function N(){if(!k)throw new Error("Function called outside component initialization");return k}const C=[],P=[],q=[],O=[],j=Promise.resolve();let U=!1;function H(t){q.push(t)}let T=!1;const B=new Set;function D(){if(!T){T=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];A(e),I(e.$$)}for(C.length=0;P.length;)P.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];B.has(e)||(B.add(e),e())}q.length=0}while(C.length);for(;O.length;)O.pop()();U=!1,T=!1,B.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const M=new Set;let G;function J(){G={r:0,c:[],p:G}}function F(){G.r||o(G.c),G=G.p}function K(t,e){t&&t.i&&(M.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),G.c.push(()=>{M.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Y(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function z(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,e){t&&t.l(e)}function Q(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),H(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(H)}function Z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(C.push(t),U||(U=!0,j.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,n,s,a,c,i,l=[-1]){const u=k;A(e);const h=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(p.ctx=s?s(e,h,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&tt(e,t)),n}):[],p.update(),d=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=w(n.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&K(e.$$.fragment),Q(e,n.target,n.anchor),D()}A(u)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const rt=[];function ot(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!rt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const st={},at=()=>({});function ct(e){let n,r;return{c(){n=p("span"),r=m("-")},l(t){n=E(t,"SPAN",{});var e=w(n);r=x(e,"-"),e.forEach(f)},m(t,e){u(t,n,e),l(n,r)},p:t,d(t){t&&f(n)}}}function it(e){let n,r,o,s,a,c,i;return{c(){n=p("button"),r=d("svg"),o=d("path"),s=d("line"),a=d("path"),this.h()},l(t){n=E(t,"BUTTON",{class:!0});var e=w(n);r=E(e,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var c=w(r);o=E(c,"path",{stroke:!0,d:!0},1),w(o).forEach(f),s=E(c,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),w(s).forEach(f),a=E(c,"path",{d:!0},1),w(a).forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){v(o,"stroke","none"),v(o,"d","M0 0h24v24H0z"),v(s,"x1","10"),v(s,"y1","14"),v(s,"x2","21"),v(s,"y2","3"),v(a,"d","M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3"),v(r,"xmlns","http://www.w3.org/2000/svg"),v(r,"class","icon icon-tabler icon-tabler-send"),v(r,"width","24"),v(r,"height","24"),v(r,"viewBox","0 0 24 24"),v(r,"stroke-width","2"),v(r,"stroke","currentColor"),v(r,"fill","none"),v(r,"stroke-linecap","round"),v(r,"stroke-linejoin","round"),v(n,"class","btn-send")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(r,s),l(r,a),c||(i=y(n,"click",ut),c=!0)},p:t,d(t){t&&f(n),c=!1,i()}}}function lt(e){let n,r,o,s,a,c,i;function h(t,e){return t[0]?it:ct}let d=h(e),$=d(e);return{c(){n=p("header"),r=p("img"),s=g(),a=p("h1"),c=m("La Cuenta"),i=g(),$.c(),this.h()},l(t){n=E(t,"HEADER",{});var e=w(n);r=E(e,"IMG",{src:!0,alt:!0}),s=S(e),a=E(e,"H1",{});var o=w(a);c=x(o,"La Cuenta"),o.forEach(f),i=S(e),$.l(e),e.forEach(f),this.h()},h(){r.src!==(o="favicon.ico")&&v(r,"src","favicon.ico"),v(r,"alt","La Cuenta Logo")},m(t,e){u(t,n,e),l(n,r),l(n,s),l(n,a),l(a,c),l(n,i),$.m(n,null)},p(t,[e]){d===(d=h(t))&&$?$.p(t,e):($.d(1),$=d(t),$&&($.c(),$.m(n,null)))},i:t,o:t,d(t){t&&f(n),$.d()}}}function ut(){navigator.share({title:"La Cuenta",text:"Dividi la cuenta y todos a mano",url:"https://agustinl.github.io/la-cuenta/"}).then(()=>console.log("Successful share")).catch(t=>console.log("Error sharing",t))}function ft(t,e,n){let r=!1;return"undefined"!=typeof window&&(navigator.share?r=!0:console.log("Web Share is not supported")),[r]}class ht extends nt{constructor(t){super(),et(this,t,ft,lt,a,{})}}function pt(e){let n,r,o,s,a,c,i,h,d,$,y,b,_,L,R=(new Date).getFullYear()+"";return{c(){n=p("footer"),r=p("h5"),o=p("a"),s=m("GitHub Repo"),a=g(),c=p("h5"),i=m("by "),h=p("strong"),d=p("a"),$=m("agustinl.dev"),y=g(),b=p("h6"),_=m("v2.0.0 — "),L=m(R),this.h()},l(t){n=E(t,"FOOTER",{});var e=w(n);r=E(e,"H5",{});var l=w(r);o=E(l,"A",{href:!0});var u=w(o);s=x(u,"GitHub Repo"),u.forEach(f),l.forEach(f),a=S(e),c=E(e,"H5",{});var p=w(c);i=x(p,"by "),h=E(p,"STRONG",{});var m=w(h);d=E(m,"A",{href:!0});var g=w(d);$=x(g,"agustinl.dev"),g.forEach(f),m.forEach(f),p.forEach(f),y=S(e),b=E(e,"H6",{});var v=w(b);_=x(v,"v2.0.0 — "),L=x(v,R),v.forEach(f),e.forEach(f),this.h()},h(){v(o,"href","https://github.com/agustinl/cuentas-claras"),v(d,"href","https://www.agustinl.dev/")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(o,s),l(n,a),l(n,c),l(c,i),l(c,h),l(h,d),l(d,$),l(n,y),l(n,b),l(b,_),l(b,L)},p:t,i:t,o:t,d(t){t&&f(n)}}}class dt extends nt{constructor(t){super(),et(this,t,null,pt,a,{})}}function mt(t){let e,n,r,o;const s=new ht({}),a=t[1].default,h=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(a,t,t[0],null),d=new dt({});return{c(){e=p("main"),W(s.$$.fragment),n=g(),h&&h.c(),r=g(),W(d.$$.fragment)},l(t){e=E(t,"MAIN",{});var o=w(e);X(s.$$.fragment,o),n=S(o),h&&h.l(o),r=S(o),X(d.$$.fragment,o),o.forEach(f)},m(t,a){u(t,e,a),Q(s,e,null),l(e,n),h&&h.m(e,null),l(e,r),Q(d,e,null),o=!0},p(t,[e]){h&&h.p&&1&e&&i(h,a,t,t[0],e,null,null)},i(t){o||(K(s.$$.fragment,t),K(h,t),K(d.$$.fragment,t),o=!0)},o(t){V(s.$$.fragment,t),V(h,t),V(d.$$.fragment,t),o=!1},d(t){t&&f(e),Z(s),h&&h.d(t),Z(d)}}}function gt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class $t extends nt{constructor(t){super(),et(this,t,gt,mt,a,{})}}function yt(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=m(r)},l(t){e=E(t,"PRE",{});var o=w(e);n=x(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&f(e)}}}function vt(e){let n,r,o,s,a,c,i,h,d,y=e[1].message+"";document.title=n=e[0];let b=e[2]&&e[1].stack&&yt(e);return{c(){r=g(),o=p("h1"),s=m(e[0]),a=g(),c=p("p"),i=m(y),h=g(),b&&b.c(),d=$(),this.h()},l(t){R('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=S(t),o=E(t,"H1",{class:!0});var n=w(o);s=x(n,e[0]),n.forEach(f),a=S(t),c=E(t,"P",{class:!0});var l=w(c);i=x(l,y),l.forEach(f),h=S(t),b&&b.l(t),d=$(),this.h()},h(){v(o,"class","svelte-8od9u6"),v(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,a,e),u(t,c,e),l(c,i),u(t,h,e),b&&b.m(t,e),u(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&_(s,t[0]),2&e&&y!==(y=t[1].message+"")&&_(i,y),t[2]&&t[1].stack?b?b.p(t,e):(b=yt(t),b.c(),b.m(d.parentNode,d)):b&&(b.d(1),b=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(a),t&&f(c),t&&f(h),b&&b.d(t),t&&f(d)}}}function bt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class wt extends nt{constructor(t){super(),et(this,t,bt,vt,a,{status:0,error:1})}}function Et(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&W(c.$$.fragment),n=$()},l(t){c&&X(c.$$.fragment,t),n=$()},m(t,e){c&&Q(c,t,e),u(t,n,e),r=!0},p(t,e){const r=16&e?Y(o,[z(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){J();const t=c;V(t.$$.fragment,1,0,()=>{Z(t,1)}),F()}s?(W((c=new s(a())).$$.fragment),K(c.$$.fragment,1),Q(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&K(c.$$.fragment,t),r=!0)},o(t){c&&V(c.$$.fragment,t),r=!1},d(t){t&&f(n),c&&Z(c,t)}}}function xt(t){let e;const n=new wt({props:{error:t[0],status:t[1]}});return{c(){W(n.$$.fragment)},l(t){X(n.$$.fragment,t)},m(t,r){Q(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(K(n.$$.fragment,t),e=!0)},o(t){V(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function St(t){let e,n,r,o;const s=[xt,Et],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(J(),V(a[i],1,1,()=>{a[i]=null}),F(),n=a[e],n||(n=a[e]=s[e](t),n.c()),K(n,1),n.m(r.parentNode,r))},i(t){o||(K(n),o=!0)},o(t){V(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function _t(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[St]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new $t({props:o});return{c(){W(s.$$.fragment)},l(t){X(s.$$.fragment,t)},m(t,e){Q(s,t,e),n=!0},p(t,[e]){const n=12&e?Y(r,[4&e&&{segment:t[2][0]},8&e&&z(t[3].props)]):{};147&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(K(s.$$.fragment,t),n=!0)},o(t){V(s.$$.fragment,t),n=!1},d(t){Z(s,t)}}}function Lt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,h;return u=l,N().$$.after_update.push(u),f=st,h=r,N().$$.context.set(f,h),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class Rt extends nt{constructor(t){super(),et(this,t,Lt,_t,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const kt=[],At=[{js:()=>import("./index.3eec278e.js"),css:[]}],Nt=[{pattern:/^\/$/,parts:[{i:0}]}];const Ct="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pt,qt,Ot,jt=!1,Ut=[],Ht="{}";const Tt={page:function(t){const e=ot(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:ot(null),session:ot(Ct&&Ct.session)};let Bt,Dt;Tt.session.subscribe(async t=>{if(Bt=t,!jt)return;Dt=!0;const e=Yt(new URL(location.href)),n=qt={},{redirect:r,props:o,branch:s}=await Qt(e);n===qt&&await Xt(r,s,o,e.page)});let It,Mt=null;let Gt,Jt=1;const Ft="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Kt={};function Vt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Yt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ct.baseUrl))return null;let e=t.pathname.slice(Ct.baseUrl.length);if(""===e&&(e="/"),!kt.some(t=>t.test(e)))for(let n=0;n<Nt.length;n+=1){const r=Nt[n],o=r.pattern.exec(e);if(o){const n=Vt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function zt(){return{x:pageXOffset,y:pageYOffset}}async function Wt(t,e,n,r){if(e)Gt=e;else{const t=zt();Kt[Gt]=t,e=Gt=++Jt,Kt[Gt]=n?t:{x:0,y:0}}Gt=e,Pt&&Tt.preloading.set(!0);const o=Mt&&Mt.href===t.href?Mt.promise:Qt(t);Mt=null;const s=qt={},{redirect:a,props:c,branch:i}=await o;if(s===qt&&(await Xt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Kt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Kt[Gt]=t,t&&scrollTo(t.x,t.y)}}async function Xt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Yt(new URL(t,document.baseURI));return n?(Ft[e.replaceState?"replaceState":"pushState"]({id:Gt},"",t),Wt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Tt.page.set(r),Tt.preloading.set(!1),Pt)Pt.$set(n);else{n.stores={page:{subscribe:Tt.page.subscribe},preloading:{subscribe:Tt.preloading.subscribe},session:Tt.session},n.level0={props:await Ot},n.notify=Tt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)te(t.nextSibling);te(t),te(e)}Pt=new Rt({target:It,props:n,hydrate:!0})}Ut=e,Ht=JSON.stringify(r.query),jt=!0,Dt=!1}async function Qt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Ot||(Ot=Ct.preloaded[0]||at.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Bt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ht)return!0;const o=Ut[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const h=i++;if(!Dt&&!u&&Ut[c]&&Ut[c].part===e.i)return Ut[c];u=!1;const{default:p,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Zt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(At[e.i]);let m;return m=jt||!Ct.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Bt):{}:Ct.preloaded[c+1],s["level"+h]={component:p,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Zt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function te(t){t.parentNode.removeChild(t)}function ee(t){const e=Yt(new URL(t,document.baseURI));if(e)return Mt&&t===Mt.href||function(t,e){Mt={href:t,promise:e}}(t,Qt(e)),Mt.promise}let ne;function re(t){clearTimeout(ne),ne=setTimeout(()=>{oe(t)},20)}function oe(t){const e=ae(t.target);e&&"prefetch"===e.rel&&ee(e.href)}function se(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ae(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Yt(o);if(s){Wt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Ft.pushState({id:Gt},"",o.href)}}function ae(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ce(t){if(Kt[Gt]=zt(),t.state){const e=Yt(new URL(location.href));e?Wt(e,t.state.id):location.href=location.href}else Jt=Jt+1,function(t){Gt=t}(Jt),Ft.replaceState({id:Gt},"",location.href)}var ie;ie={target:document.querySelector("#sapper")},"scrollRestoration"in Ft&&(Ft.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ft.scrollRestoration="auto"}),addEventListener("load",()=>{Ft.scrollRestoration="manual"}),function(t){It=t}(ie.target),addEventListener("click",se),addEventListener("popstate",ce),addEventListener("touchstart",oe),addEventListener("mousemove",re),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ft.replaceState({id:Jt},"",e);const n=new URL(location.href);if(Ct.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=Ct;Ot||(Ot=s&&s[0]),Xt(null,[],{error:c,status:a,session:o,level0:{props:Ot},level1:{props:{status:a,error:c},component:wt},segments:s},{host:e,path:n,query:Vt(r),params:{}})}();const r=Yt(n);return r?Wt(r,Jt,!0,t):void 0});export{nt as S,g as a,d as b,E as c,w as d,p as e,x as f,f as g,S as h,et as i,v as j,u as k,l,L as m,y as n,b as o,_ as p,R as q,o as r,a as s,m as t,t as u,h as v};