function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(r)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function l(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function u(t,e,n,r,o,s,a){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=l(e,n,r,a);t.p(o,c)}}const f="undefined"!=typeof window;let h=f?()=>window.performance.now():()=>Date.now(),d=f?t=>requestAnimationFrame(t):t;const p=new Set;function m(t){p.forEach(e=>{e.c(t)||(p.delete(e),e.f())}),0!==p.size&&d(m)}function g(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function b(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function E(){return _(" ")}function w(){return _("")}function x(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t){return""===t?void 0:+t}function R(t){return Array.from(t.childNodes)}function C(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):y(e)}function N(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return _(e)}function k(t){return N(t," ")}function L(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function P(t,e){t.value=null==e?"":e}function q(t,e=document.body){return Array.from(e.querySelectorAll(t))}const O=new Set;let j,T=0;function U(t,e,n,r,o,s,a,c=0){const i=16.666/r;let l="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*s(t);l+=100*t+`%{${a(r,1-r)}}\n`}const u=l+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,h=t.ownerDocument;O.add(h);const d=h.__svelte_stylesheet||(h.__svelte_stylesheet=h.head.appendChild(y("style")).sheet),p=h.__svelte_rules||(h.__svelte_rules={});p[f]||(p[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${f} ${r}ms linear ${o}ms 1 both`,T+=1,f}function I(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),T-=o,T||d(()=>{T||(O.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),O.clear())}))}function D(t){j=t}function V(){if(!j)throw new Error("Function called outside component initialization");return j}function B(t){V().$$.before_update.push(t)}function F(t){V().$$.after_update.push(t)}const z=[],G=[],H=[],M=[],J=Promise.resolve();let K=!1;function Y(t){H.push(t)}let W=!1;const X=new Set;function Q(){if(!W){W=!0;do{for(let t=0;t<z.length;t+=1){const e=z[t];D(e),Z(e.$$)}for(z.length=0;G.length;)G.pop()();for(let t=0;t<H.length;t+=1){const e=H[t];X.has(e)||(X.add(e),e())}H.length=0}while(z.length);for(;M.length;)M.pop()();K=!1,W=!1,X.clear()}}function Z(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}let tt;function et(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const nt=new Set;let rt;function ot(){rt={r:0,c:[],p:rt}}function st(){rt.r||s(rt.c),rt=rt.p}function at(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function ct(t,e,n,r){if(t&&t.o){if(nt.has(t))return;nt.add(t),rt.c.push(()=>{nt.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const it={duration:0};function lt(n,r,o,c){let i=r(n,o),l=c?0:1,u=null,f=null,g=null;function $(){g&&I(n,g)}function v(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(r){const{delay:o=0,duration:a=300,easing:c=e,tick:b=t,css:y}=i||it,_={start:h()+o,b:r};r||(_.group=rt,rt.r+=1),u?f=_:(y&&($(),g=U(n,l,r,a,o,c,y)),r&&b(0,1),u=v(_,a),Y(()=>et(n,r,"start")),function(t){let e;0===p.size&&d(m),new Promise(n=>{p.add(e={c:t,f:n})})}(t=>{if(f&&t>f.start&&(u=v(f,a),f=null,et(n,u.b,"start"),y&&($(),g=U(n,l,u.b,u.duration,0,c,i.css))),u)if(t>=u.end)b(l=u.b,1-l),et(n,u.b,"end"),f||(u.b?$():--u.group.r||s(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*c(e/u.duration),b(l,1-l)}return!(!u&&!f)}))}return{run(t){a(i)?(tt||(tt=Promise.resolve(),tt.then(()=>{tt=null})),tt).then(()=>{i=i(),b(t)}):b(t)},end(){$(),u=f=null}}}function ut(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function ft(t){return"object"==typeof t&&null!==t?t:{}}function ht(t){t&&t.c()}function dt(t,e){t&&t.l(e)}function pt(t,e,n){const{fragment:o,on_mount:c,on_destroy:i,after_update:l}=t.$$;o&&o.m(e,n),Y(()=>{const e=c.map(r).filter(a);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(Y)}function mt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){-1===t.$$.dirty[0]&&(z.push(t),K||(K=!0,J.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $t(e,n,r,a,c,i,l=[-1]){const u=j;D(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l,skip_bound:!1};let d=!1;if(h.ctx=r?r(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),d&&gt(e,t)),n}):[],h.update(),d=!0,s(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=R(n.target);h.fragment&&h.fragment.l(t),t.forEach(v)}else h.fragment&&h.fragment.c();n.intro&&at(e.$$.fragment),pt(e,n.target,n.anchor),Q()}D(u)}class vt{$destroy(){mt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const bt=[];function yt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!bt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),bt.push(n,e)}if(t){for(let t=0;t<bt.length;t+=2)bt[t][0](bt[t+1]);bt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const _t={},Et=()=>({}),wt=yt(0),xt=yt(0),St=yt(0),At=yt(0);function Rt(e){let n,r,o,s,a;return{c(){n=y("li"),r=y("a"),o=_("Compartir"),this.h()},l(t){n=C(t,"LI",{class:!0});var e=R(n);r=C(e,"A",{class:!0,href:!0});var s=R(r);o=N(s,"Compartir"),s.forEach(v),e.forEach(v),this.h()},h(){S(r,"class","nav-link"),S(r,"href","#!"),S(n,"class","nav-item")},m(t,c){$(t,n,c),g(n,r),g(r,o),s||(a=x(r,"click",e[1]),s=!0)},p:t,d(t){t&&v(n),s=!1,a()}}}function Ct(e){let n,r,o,s,a,c,i,l,u,f,h,d,p,m,b,w,x,A,L=e[0]&&Rt(e);return{c(){n=y("header"),r=y("nav"),o=y("a"),s=y("img"),c=E(),i=y("strong"),l=_("La Cuenta"),u=E(),f=y("button"),h=y("span"),d=E(),p=y("div"),m=y("ul"),b=y("li"),w=y("a"),x=_("Inicio"),A=E(),L&&L.c(),this.h()},l(t){n=C(t,"HEADER",{});var e=R(n);r=C(e,"NAV",{class:!0});var a=R(r);o=C(a,"A",{class:!0,href:!0});var g=R(o);s=C(g,"IMG",{src:!0,width:!0,height:!0,alt:!0,loading:!0,class:!0}),c=k(g),i=C(g,"STRONG",{});var $=R(i);l=N($,"La Cuenta"),$.forEach(v),g.forEach(v),u=k(a),f=C(a,"BUTTON",{class:!0,type:!0,"data-toggle":!0,"data-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var y=R(f);h=C(y,"SPAN",{class:!0}),R(h).forEach(v),y.forEach(v),d=k(a),p=C(a,"DIV",{class:!0,id:!0});var _=R(p);m=C(_,"UL",{class:!0});var E=R(m);b=C(E,"LI",{class:!0});var S=R(b);w=C(S,"A",{class:!0,href:!0});var P=R(w);x=N(P,"Inicio"),P.forEach(v),S.forEach(v),A=k(E),L&&L.l(E),E.forEach(v),_.forEach(v),a.forEach(v),e.forEach(v),this.h()},h(){s.src!==(a="apple-touch-icon.png")&&S(s,"src","apple-touch-icon.png"),S(s,"width","30"),S(s,"height","30"),S(s,"alt",""),S(s,"loading","lazy"),S(s,"class","d-inline-block align-top"),S(o,"class","navbar-brand"),S(o,"href","#!"),S(h,"class","navbar-toggler-icon"),S(f,"class","navbar-toggler"),S(f,"type","button"),S(f,"data-toggle","collapse"),S(f,"data-target","#navbarNav"),S(f,"aria-controls","navbarNav"),S(f,"aria-expanded","false"),S(f,"aria-label","Toggle navigation"),S(w,"class","nav-link"),S(w,"href","#!"),S(b,"class","nav-item active"),S(m,"class","navbar-nav"),S(p,"class","collapse navbar-collapse"),S(p,"id","navbarNav"),S(r,"class","navbar navbar-expand-sm navbar-dark bg-dark")},m(t,e){$(t,n,e),g(n,r),g(r,o),g(o,s),g(o,c),g(o,i),g(i,l),g(r,u),g(r,f),g(f,h),g(r,d),g(r,p),g(p,m),g(m,b),g(b,w),g(w,x),g(m,A),L&&L.m(m,null)},p(t,[e]){t[0]?L?L.p(t,e):(L=Rt(t),L.c(),L.m(m,null)):L&&(L.d(1),L=null)},i:t,o:t,d(t){t&&v(n),L&&L.d()}}}function Nt(t,e,n){let r,o,s,a;i(t,wt,t=>n(3,r=t)),i(t,St,t=>n(4,o=t)),i(t,At,t=>n(5,s=t)),i(t,xt,t=>n(6,a=t));let c,l=!1,u=new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS"});return"undefined"!=typeof window&&(navigator.share?l=!0:console.log("Web Share is not supported")),[l,function(){c="",c+="🧾 La Cuenta: \r\n\r\n";for(var t=0,e=r.length;t<e;t++)0===r[t].resto?c+=r[t].quien+" ya puso -- "+u.format(r[t].cuanto)+"\r\n":o>r[t].cuanto?c+=r[t].quien+" debe -- "+u.format(r[t].resto)+"\r\n":c+="A "+r[t].quien+" le deben -- "+u.format(r[t].resto)+"\r\n";s>r.length&&(c+="El resto debe -- "+u.format(o)+"\r\n"),c+="__________________\r\n\r\n",c+="💰 Total : "+u.format(a)+"\r\n",c+="Cada uno : "+u.format(o)+"\r\n",navigator.share({title:"La Cuenta",text:c,url:"https://agustinl.github.io/la-cuenta/"}).then(()=>console.log("Successful share")).catch(t=>console.log("Error sharing",t))}]}class kt extends vt{constructor(t){super(),$t(this,t,Nt,Ct,c,{})}}function Lt(e){let n,r,o,s,a,c,i,l=(new Date).getFullYear()+"";return{c(){n=y("footer"),r=y("span"),o=_(l),s=_(" — Hecho con 🧉 por "),a=y("strong"),c=y("a"),i=_("agustinl"),this.h()},l(t){n=C(t,"FOOTER",{class:!0});var e=R(n);r=C(e,"SPAN",{class:!0});var u=R(r);o=N(u,l),s=N(u," — Hecho con 🧉 por "),a=C(u,"STRONG",{});var f=R(a);c=C(f,"A",{href:!0});var h=R(c);i=N(h,"agustinl"),h.forEach(v),f.forEach(v),u.forEach(v),e.forEach(v),this.h()},h(){S(c,"href","https://www.agustinl.dev/"),S(r,"class","text-muted"),S(n,"class","container-fluid text-center mt-5 no-gutters footer")},m(t,e){$(t,n,e),g(n,r),g(r,o),g(r,s),g(r,a),g(a,c),g(c,i)},p:t,i:t,o:t,d(t){t&&v(n)}}}class Pt extends vt{constructor(t){super(),$t(this,t,null,Lt,c,{})}}function qt(t){let e,n,r,o,s,a,c,i,f;o=new kt({});const h=t[1].default,d=function(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}(h,t,t[0],null);return i=new Pt({}),{c(){e=y("meta"),n=E(),r=y("div"),ht(o.$$.fragment),s=E(),a=y("div"),d&&d.c(),c=E(),ht(i.$$.fragment),this.h()},l(t){const l=q('[data-svelte="svelte-1hsjmlw"]',document.head);e=C(l,"META",{name:!0,content:!0}),l.forEach(v),n=k(t),r=C(t,"DIV",{id:!0});var u=R(r);dt(o.$$.fragment,u),s=k(u),a=C(u,"DIV",{class:!0});var f=R(a);d&&d.l(f),f.forEach(v),c=k(u),dt(i.$$.fragment,u),u.forEach(v),this.h()},h(){document.title="La Cuenta",S(e,"name","description"),S(e,"content","Dividi la cuenta y todos a mano"),S(a,"class","container"),S(r,"id","app")},m(t,l){g(document.head,e),$(t,n,l),$(t,r,l),pt(o,r,null),g(r,s),g(r,a),d&&d.m(a,null),g(r,c),pt(i,r,null),f=!0},p(t,[e]){d&&d.p&&1&e&&u(d,h,t,t[0],e,null,null)},i(t){f||(at(o.$$.fragment,t),at(d,t),at(i.$$.fragment,t),f=!0)},o(t){ct(o.$$.fragment,t),ct(d,t),ct(i.$$.fragment,t),f=!1},d(t){v(e),t&&v(n),t&&v(r),mt(o),d&&d.d(t),mt(i)}}}function Ot(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class jt extends vt{constructor(t){super(),$t(this,t,Ot,qt,c,{})}}function Tt(t){let e,n,r=t[1].stack+"";return{c(){e=y("pre"),n=_(r)},l(t){e=C(t,"PRE",{});var o=R(e);n=N(o,r),o.forEach(v)},m(t,r){$(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&L(n,r)},d(t){t&&v(e)}}}function Ut(e){let n,r,o,s,a,c,i,l,u,f=e[1].message+"";document.title=n=e[0];let h=e[2]&&e[1].stack&&Tt(e);return{c(){r=E(),o=y("h1"),s=_(e[0]),a=E(),c=y("p"),i=_(f),l=E(),h&&h.c(),u=w(),this.h()},l(t){q('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(v),r=k(t),o=C(t,"H1",{class:!0});var n=R(o);s=N(n,e[0]),n.forEach(v),a=k(t),c=C(t,"P",{class:!0});var d=R(c);i=N(d,f),d.forEach(v),l=k(t),h&&h.l(t),u=w(),this.h()},h(){S(o,"class","svelte-8od9u6"),S(c,"class","svelte-8od9u6")},m(t,e){$(t,r,e),$(t,o,e),g(o,s),$(t,a,e),$(t,c,e),g(c,i),$(t,l,e),h&&h.m(t,e),$(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&L(s,t[0]),2&e&&f!==(f=t[1].message+"")&&L(i,f),t[2]&&t[1].stack?h?h.p(t,e):(h=Tt(t),h.c(),h.m(u.parentNode,u)):h&&(h.d(1),h=null)},i:t,o:t,d(t){t&&v(r),t&&v(o),t&&v(a),t&&v(c),t&&v(l),h&&h.d(t),t&&v(u)}}}function It(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class Dt extends vt{constructor(t){super(),$t(this,t,It,Ut,c,{status:0,error:1})}}function Vt(t){let e,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return a&&(e=new a(c())),{c(){e&&ht(e.$$.fragment),r=w()},l(t){e&&dt(e.$$.fragment,t),r=w()},m(t,n){e&&pt(e,t,n),$(t,r,n),o=!0},p(t,n){const o=16&n?ut(s,[ft(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){ot();const t=e;ct(t.$$.fragment,1,0,()=>{mt(t,1)}),st()}a?(e=new a(c()),ht(e.$$.fragment),at(e.$$.fragment,1),pt(e,r.parentNode,r)):e=null}else a&&e.$set(o)},i(t){o||(e&&at(e.$$.fragment,t),o=!0)},o(t){e&&ct(e.$$.fragment,t),o=!1},d(t){t&&v(r),e&&mt(e,t)}}}function Bt(t){let e,n;return e=new Dt({props:{error:t[0],status:t[1]}}),{c(){ht(e.$$.fragment)},l(t){dt(e.$$.fragment,t)},m(t,r){pt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(at(e.$$.fragment,t),n=!0)},o(t){ct(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function Ft(t){let e,n,r,o;const s=[Bt,Vt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=w()},l(t){n.l(t),r=w()},m(t,n){a[e].m(t,n),$(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(ot(),ct(a[i],1,1,()=>{a[i]=null}),st(),n=a[e],n||(n=a[e]=s[e](t),n.c()),at(n,1),n.m(r.parentNode,r))},i(t){o||(at(n),o=!0)},o(t){ct(n),o=!1},d(t){a[e].d(t),t&&v(r)}}}function zt(t){let e,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[Ft]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return e=new jt({props:s}),{c(){ht(e.$$.fragment)},l(t){dt(e.$$.fragment,t)},m(t,n){pt(e,t,n),r=!0},p(t,[n]){const r=12&n?ut(o,[4&n&&{segment:t[2][0]},8&n&&ft(t[3].props)]):{};147&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(at(e.$$.fragment,t),r=!0)},o(t){ct(e.$$.fragment,t),r=!1},d(t){mt(e,t)}}}function Gt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f;return F(l),u=_t,f=r,V().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class Ht extends vt{constructor(t){super(),$t(this,t,Gt,zt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Mt=[/^\/compartirCuenta\/?$/],Jt=[{js:()=>import("./index.a15cf8eb.js"),css:[]}],Kt=[{pattern:/^\/$/,parts:[{i:0}]}];const Yt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Wt,Xt,Qt,Zt=!1,te=[],ee="{}";const ne={page:function(t){const e=yt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:yt(null),session:yt(Yt&&Yt.session)};let re,oe;ne.session.subscribe(async t=>{if(re=t,!Zt)return;oe=!0;const e=he(new URL(location.href)),n=Xt={},{redirect:r,props:o,branch:s}=await ge(e);n===Xt&&await me(r,s,o,e.page)});let se,ae=null;let ce,ie=1;const le="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},ue={};function fe(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function he(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Yt.baseUrl))return null;let e=t.pathname.slice(Yt.baseUrl.length);if(""===e&&(e="/"),!Mt.some(t=>t.test(e)))for(let n=0;n<Kt.length;n+=1){const r=Kt[n],o=r.pattern.exec(e);if(o){const n=fe(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function de(){return{x:pageXOffset,y:pageYOffset}}async function pe(t,e,n,r){if(e)ce=e;else{const t=de();ue[ce]=t,e=ce=++ie,ue[ce]=n?t:{x:0,y:0}}ce=e,Wt&&ne.preloading.set(!0);const o=ae&&ae.href===t.href?ae.promise:ge(t);ae=null;const s=Xt={},{redirect:a,props:c,branch:i}=await o;if(s===Xt&&(await me(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=ue[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}ue[ce]=t,t&&scrollTo(t.x,t.y)}}async function me(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=he(new URL(t,document.baseURI));return n?(le[e.replaceState?"replaceState":"pushState"]({id:ce},"",t),pe(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(ne.page.set(r),ne.preloading.set(!1),Wt)Wt.$set(n);else{n.stores={page:{subscribe:ne.page.subscribe},preloading:{subscribe:ne.preloading.subscribe},session:ne.session},n.level0={props:await Qt},n.notify=ne.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)ve(t.nextSibling);ve(t),ve(e)}Wt=new Ht({target:se,props:n,hydrate:!0})}te=e,ee=JSON.stringify(r.query),Zt=!0,oe=!1}async function ge(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Qt||(Qt=Yt.preloaded[0]||Et.call(a,{host:n.host,path:n.path,query:n.query,params:{}},re));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==ee)return!0;const o=te[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const h=i++;if(!oe&&!u&&te[c]&&te[c].part===e.i)return te[c];u=!1;const{default:d,preload:p}=await function(t){const e="string"==typeof t.css?[]:t.css.map($e);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Jt[e.i]);let m;return m=Zt||!Yt.preloaded[c+1]?p?await p.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},re):{}:Yt.preloaded[c+1],s["level"+h]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function $e(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function ve(t){t.parentNode.removeChild(t)}function be(t){const e=he(new URL(t,document.baseURI));if(e)return ae&&t===ae.href||function(t,e){ae={href:t,promise:e}}(t,ge(e)),ae.promise}let ye;function _e(t){clearTimeout(ye),ye=setTimeout(()=>{Ee(t)},20)}function Ee(t){const e=xe(t.target);e&&"prefetch"===e.rel&&be(e.href)}function we(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=xe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=he(o);if(s){pe(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),le.pushState({id:ce},"",o.href)}}function xe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Se(t){if(ue[ce]=de(),t.state){const e=he(new URL(location.href));e?pe(e,t.state.id):location.href=location.href}else ie=ie+1,function(t){ce=t}(ie),le.replaceState({id:ce},"",location.href)}var Ae;Ae={target:document.querySelector("#sapper")},"scrollRestoration"in le&&(le.scrollRestoration="manual"),addEventListener("beforeunload",()=>{le.scrollRestoration="auto"}),addEventListener("load",()=>{le.scrollRestoration="manual"}),function(t){se=t}(Ae.target),addEventListener("click",we),addEventListener("popstate",Se),addEventListener("touchstart",Ee),addEventListener("mousemove",_e),Promise.resolve().then(()=>{const{hash:t,href:e}=location;le.replaceState({id:ie},"",e);const n=new URL(location.href);if(Yt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=Yt;Qt||(Qt=s&&s[0]),me(null,[],{error:c,status:a,session:o,level0:{props:Qt},level1:{props:{status:a,error:c},component:Dt},segments:s},{host:e,path:n,query:fe(r),params:{}})}();const r=he(n);return r?pe(r,ie,!0,t):void 0});export{Y as A,ot as B,wt as C,xt as D,St as E,At as F,t as G,vt as S,E as a,R as b,C as c,N as d,y as e,v as f,k as g,S as h,$t as i,$ as j,g as k,P as l,x as m,A as n,lt as o,w as p,L as q,s as r,c as s,_ as t,at as u,ct as v,st as w,b as x,B as y,F as z};
