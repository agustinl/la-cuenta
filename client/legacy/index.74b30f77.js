import{_ as n,a,b as t,c as o,i as r,s as c,d as h,S as s,e as u,t as e,f as i,g as l,h as f,j as v,k as d,l as m,m as p,n as w,o as g,p as E,q as b,r as M,u as y,v as N,w as T,x as R,y as I,z as P,A}from"./client.382af5f7.js";function D(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,c=a(n);if(o){var h=a(this).constructor;r=Reflect.construct(c,arguments,h)}else r=c.apply(this,arguments);return t(this,r)}}function S(n,a,t){var o=n.slice();return o[12]=a[t],o[14]=t,o}function O(n,a,t){var o=n.slice();return o[12]=a[t],o[15]=a,o[14]=t,o}function B(n){var a,t,o,r,c,h,s,N,T,R,I,P,A,D,S;function O(){n[8].call(c,n[12])}function B(){n[9].call(R,n[12])}function C(){for(var a,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(a=n)[10].apply(a,[n[14]].concat(o))}return{c:function(){a=u("div"),t=u("label"),o=e("¿Quien puso?"),r=i(),c=u("input"),h=i(),s=u("label"),N=e("Cuanto puso?"),T=i(),R=u("input"),I=i(),P=u("button"),A=e("x"),this.h()},l:function(n){a=l(n,"DIV",{class:!0});var u=f(a);t=l(u,"LABEL",{for:!0,class:!0});var e=f(t);o=v(e,"¿Quien puso?"),e.forEach(d),r=m(u),c=l(u,"INPUT",{type:!0,name:!0,placeholder:!0}),h=m(u),s=l(u,"LABEL",{for:!0,class:!0});var i=f(s);N=v(i,"Cuanto puso?"),i.forEach(d),T=m(u),R=l(u,"INPUT",{type:!0,name:!0,min:!0,placeholder:!0}),I=m(u),P=l(u,"BUTTON",{class:!0});var p=f(P);A=v(p,"x"),p.forEach(d),u.forEach(d),this.h()},h:function(){p(t,"for","who"),p(t,"class","visuallyhidden"),p(c,"type","text"),p(c,"name","who"),p(c,"placeholder","¿Quien puso?"),p(s,"for","how-much"),p(s,"class","visuallyhidden"),p(R,"type","number"),p(R,"name","how-much"),p(R,"min","1"),p(R,"placeholder","¿Cuanto?"),p(P,"class","btn-delete"),p(a,"class","input-group")},m:function(u,e){w(u,a,e),g(a,t),g(t,o),g(a,r),g(a,c),E(c,n[12].who),g(a,h),g(a,s),g(s,N),g(a,T),g(a,R),E(R,n[12].howMuch),g(a,I),g(a,P),g(P,A),D||(S=[b(c,"input",O),b(R,"input",B),b(R,"keyup",n[7]),b(P,"click",C)],D=!0)},p:function(a,t){n=a,1&t&&c.value!==n[12].who&&E(c,n[12].who),1&t&&M(R.value)!==n[12].howMuch&&E(R,n[12].howMuch)},d:function(n){n&&d(a),D=!1,y(S)}}}function C(n){var a,t,o,r,c,h,s,E,b,M=n[12].who+"",y=n[3].format(Math.round(n[12].howMuch))+"";return{c:function(){a=u("p"),t=u("strong"),o=e(M),r=e(" ya puso"),c=i(),h=u("hr"),s=i(),E=u("p"),b=e(y),this.h()},l:function(n){a=l(n,"P",{class:!0});var u=f(a);t=l(u,"STRONG",{});var e=f(t);o=v(e,M),e.forEach(d),r=v(u," ya puso"),u.forEach(d),c=m(n),h=l(n,"HR",{}),s=m(n),E=l(n,"P",{class:!0});var i=f(E);b=v(i,y),i.forEach(d),this.h()},h:function(){p(a,"class","who"),p(E,"class","how-much without-debt")},m:function(n,u){w(n,a,u),g(a,t),g(t,o),g(a,r),w(n,c,u),w(n,h,u),w(n,s,u),w(n,E,u),g(E,b)},p:function(n,a){1&a&&M!==(M=n[12].who+"")&&N(o,M),1&a&&y!==(y=n[3].format(Math.round(n[12].howMuch))+"")&&N(b,y)},d:function(n){n&&d(a),n&&d(c),n&&d(h),n&&d(s),n&&d(E)}}}function G(n){var a,t,o,r,c,h,s,E,b,M=n[12].who+"",y=n[3].format(Math.round(n[1]/n[2]-n[12].howMuch))+"";return{c:function(){a=u("p"),t=u("strong"),o=e(M),r=e(" debe"),c=i(),h=u("hr"),s=i(),E=u("p"),b=e(y),this.h()},l:function(n){a=l(n,"P",{class:!0});var u=f(a);t=l(u,"STRONG",{});var e=f(t);o=v(e,M),e.forEach(d),r=v(u," debe"),u.forEach(d),c=m(n),h=l(n,"HR",{}),s=m(n),E=l(n,"P",{class:!0});var i=f(E);b=v(i,y),i.forEach(d),this.h()},h:function(){p(a,"class","who"),p(E,"class","how-much debit")},m:function(n,u){w(n,a,u),g(a,t),g(t,o),g(a,r),w(n,c,u),w(n,h,u),w(n,s,u),w(n,E,u),g(E,b)},p:function(n,a){1&a&&M!==(M=n[12].who+"")&&N(o,M),7&a&&y!==(y=n[3].format(Math.round(n[1]/n[2]-n[12].howMuch))+"")&&N(b,y)},d:function(n){n&&d(a),n&&d(c),n&&d(h),n&&d(s),n&&d(E)}}}function H(n){var a,t,o,r,c,h,s,E,b,M,y=n[12].who+"",T=n[3].format(Math.abs(Math.round(n[1]/n[2]-n[12].howMuch)))+"";return{c:function(){a=u("p"),t=e("A "),o=u("strong"),r=e(y),c=e(" le deben"),h=i(),s=u("hr"),E=i(),b=u("p"),M=e(T),this.h()},l:function(n){a=l(n,"P",{class:!0});var u=f(a);t=v(u,"A "),o=l(u,"STRONG",{});var e=f(o);r=v(e,y),e.forEach(d),c=v(u," le deben"),u.forEach(d),h=m(n),s=l(n,"HR",{}),E=m(n),b=l(n,"P",{class:!0});var i=f(b);M=v(i,T),i.forEach(d),this.h()},h:function(){p(a,"class","who"),p(b,"class","how-much receives")},m:function(n,u){w(n,a,u),g(a,t),g(a,o),g(o,r),g(a,c),w(n,h,u),w(n,s,u),w(n,E,u),w(n,b,u),g(b,M)},p:function(n,a){1&a&&y!==(y=n[12].who+"")&&N(r,y),7&a&&T!==(T=n[3].format(Math.abs(Math.round(n[1]/n[2]-n[12].howMuch)))+"")&&N(M,T)},d:function(n){n&&d(a),n&&d(h),n&&d(s),n&&d(E),n&&d(b)}}}function x(n){var a,t,o,r,c,h,s;function e(n,a){return(null==h||7&a)&&(h=!(-1!==Math.sign(n[1]/n[2]-n[12].howMuch))),h?H:((null==s||7&a)&&(s=!(1!==Math.sign(n[1]/n[2]-n[12].howMuch))),s?G:C)}var v=e(n,-1),E=v(n);return{c:function(){a=u("div"),t=u("img"),c=i(),E.c(),this.h()},l:function(n){a=l(n,"DIV",{class:!0});var o=f(a);t=l(o,"IMG",{src:!0,alt:!0}),c=m(o),E.l(o),o.forEach(d),this.h()},h:function(){t.src!==(o="https://avatars.dicebear.com/api/human/"+n[12].who+".svg?r=50&w=30")&&p(t,"src",o),p(t,"alt",r=n[12].who),p(a,"class","someone")},m:function(n,o){w(n,a,o),g(a,t),g(a,c),E.m(a,null)},p:function(n,c){1&c&&t.src!==(o="https://avatars.dicebear.com/api/human/"+n[12].who+".svg?r=50&w=30")&&p(t,"src",o),1&c&&r!==(r=n[12].who)&&p(t,"alt",r),v===(v=e(n,c))&&E?E.p(n,c):(E.d(1),(E=v(n))&&(E.c(),E.m(a,null)))},d:function(n){n&&d(a),E.d()}}}function L(n){var a,t,o,r,c,h,s,E,b,M,y,T,R,I,P,A,D,S,O,B,C,G,H=n[3].format(Math.round(n[1]/n[2]*(n[2]-n[0].length)))+"",x=n[3].format(Math.round(n[1]/n[2]))+"";return{c:function(){a=u("div"),t=u("img"),r=i(),c=u("p"),h=e("El "),s=u("strong"),E=e("resto"),b=e(" debe"),M=i(),y=u("hr"),T=i(),R=u("p"),I=e(H),P=i(),A=u("div"),D=u("p"),S=u("strong"),O=e(x),B=i(),C=u("span"),G=e("c/u"),this.h()},l:function(n){a=l(n,"DIV",{class:!0});var o=f(a);t=l(o,"IMG",{src:!0,alt:!0}),r=m(o),c=l(o,"P",{class:!0});var u=f(c);h=v(u,"El "),s=l(u,"STRONG",{});var e=f(s);E=v(e,"resto"),e.forEach(d),b=v(u," debe"),u.forEach(d),M=m(o),y=l(o,"HR",{}),T=m(o),R=l(o,"P",{class:!0});var i=f(R);I=v(i,H),i.forEach(d),o.forEach(d),P=m(n),A=l(n,"DIV",{class:!0});var p=f(A);D=l(p,"P",{});var w=f(D);S=l(w,"STRONG",{});var g=f(S);O=v(g,x),g.forEach(d),B=m(w),C=l(w,"SPAN",{});var N=f(C);G=v(N,"c/u"),N.forEach(d),w.forEach(d),p.forEach(d),this.h()},h:function(){t.src!==(o="https://avatars.dicebear.com/api/human/"+n[0].length+".svg?r=50&w=30")&&p(t,"src",o),p(t,"alt","Someone"),p(c,"class","who"),p(R,"class","how-much"),p(a,"class","someone"),p(A,"class","the-rest")},m:function(n,o){w(n,a,o),g(a,t),g(a,r),g(a,c),g(c,h),g(c,s),g(s,E),g(c,b),g(a,M),g(a,y),g(a,T),g(a,R),g(R,I),w(n,P,o),w(n,A,o),g(A,D),g(D,S),g(S,O),g(D,B),g(D,C),g(C,G)},p:function(n,a){1&a&&t.src!==(o="https://avatars.dicebear.com/api/human/"+n[0].length+".svg?r=50&w=30")&&p(t,"src",o),7&a&&H!==(H=n[3].format(Math.round(n[1]/n[2]*(n[2]-n[0].length)))+"")&&N(I,H),6&a&&x!==(x=n[3].format(Math.round(n[1]/n[2]))+"")&&N(O,x)},d:function(n){n&&d(a),n&&d(P),n&&d(A)}}}function U(n){for(var a,t,o,r,c,h,s,A,D,C,G,H,U,V,k,$,Q,X,j,q,z,F,_,J,K,W,Y,Z,nn,an,tn,on=n[3].format(n[1])+"",rn=n[0],cn=[],hn=0;hn<rn.length;hn+=1)cn[hn]=B(O(n,rn,hn));for(var sn=n[0],un=[],en=0;en<sn.length;en+=1)un[en]=x(S(n,sn,en));var ln=n[2]>n[0].length&&L(n);return{c:function(){a=u("meta"),t=i(),o=u("section");for(var n=0;n<cn.length;n+=1)cn[n].c();r=i(),c=u("button"),h=e("Agregar otro"),s=i(),A=u("section"),D=u("div"),C=u("h3"),G=e("Total"),H=i(),U=u("h3"),V=e(on),k=i(),$=u("div"),Q=u("h3"),X=e("Dividir por"),j=i(),q=u("label"),z=e("Divided By"),F=i(),_=u("input"),J=i(),K=u("section");for(var l=0;l<un.length;l+=1)un[l].c();W=i(),ln&&ln.c(),Y=i(),Z=u("button"),nn=e("Borrar lista"),this.h()},l:function(n){var u=T('[data-svelte="svelte-1l83u0v"]',document.head);a=l(u,"META",{name:!0,content:!0}),u.forEach(d),t=m(n),o=l(n,"SECTION",{});for(var e=f(o),i=0;i<cn.length;i+=1)cn[i].l(e);r=m(e),c=l(e,"BUTTON",{class:!0});var p=f(c);h=v(p,"Agregar otro"),p.forEach(d),e.forEach(d),s=m(n),A=l(n,"SECTION",{id:!0});var w=f(A);D=l(w,"DIV",{class:!0});var g=f(D);C=l(g,"H3",{});var E=f(C);G=v(E,"Total"),E.forEach(d),H=m(g),U=l(g,"H3",{});var b=f(U);V=v(b,on),b.forEach(d),g.forEach(d),k=m(w),$=l(w,"DIV",{class:!0});var M=f($);Q=l(M,"H3",{});var y=f(Q);X=v(y,"Dividir por"),y.forEach(d),j=m(M),q=l(M,"LABEL",{for:!0,class:!0});var N=f(q);z=v(N,"Divided By"),N.forEach(d),F=m(M),_=l(M,"INPUT",{type:!0,name:!0,min:!0}),M.forEach(d),w.forEach(d),J=m(n),K=l(n,"SECTION",{id:!0});for(var R=f(K),I=0;I<un.length;I+=1)un[I].l(R);W=m(R),ln&&ln.l(R),Y=m(R),Z=l(R,"BUTTON",{class:!0});var P=f(Z);nn=v(P,"Borrar lista"),P.forEach(d),R.forEach(d),this.h()},h:function(){document.title="Cuentas claras",p(a,"name","description"),p(a,"content","Dividi la cuenta entre amigos familias compañeros varios"),p(c,"class","btn-add"),p(D,"class","total"),p(q,"for","divided-by"),p(q,"class","visuallyhidden"),p(_,"type","number"),p(_,"name","divided-by"),p(_,"min","1"),p($,"class","divided-by"),p(A,"id","total"),p(Z,"class","btn-clean"),p(K,"id","division-list")},m:function(u,e){g(document.head,a),w(u,t,e),w(u,o,e);for(var i=0;i<cn.length;i+=1)cn[i].m(o,null);g(o,r),g(o,c),g(c,h),w(u,s,e),w(u,A,e),g(A,D),g(D,C),g(C,G),g(D,H),g(D,U),g(U,V),g(A,k),g(A,$),g($,Q),g(Q,X),g($,j),g($,q),g(q,z),g($,F),g($,_),E(_,n[2]),w(u,J,e),w(u,K,e);for(var l=0;l<un.length;l+=1)un[l].m(K,null);g(K,W),ln&&ln.m(K,null),g(K,Y),g(K,Z),g(Z,nn),an||(tn=[b(c,"click",n[4]),b(_,"input",n[11]),b(Z,"click",n[6])],an=!0)},p:function(n,a){var t=R(a,1)[0];if(161&t){var c;for(rn=n[0],c=0;c<rn.length;c+=1){var h=O(n,rn,c);cn[c]?cn[c].p(h,t):(cn[c]=B(h),cn[c].c(),cn[c].m(o,r))}for(;c<cn.length;c+=1)cn[c].d(1);cn.length=rn.length}if(2&t&&on!==(on=n[3].format(n[1])+"")&&N(V,on),4&t&&M(_.value)!==n[2]&&E(_,n[2]),15&t){var s;for(sn=n[0],s=0;s<sn.length;s+=1){var u=S(n,sn,s);un[s]?un[s].p(u,t):(un[s]=x(u),un[s].c(),un[s].m(K,W))}for(;s<un.length;s+=1)un[s].d(1);un.length=sn.length}n[2]>n[0].length?ln?ln.p(n,t):((ln=L(n)).c(),ln.m(K,Y)):ln&&(ln.d(1),ln=null)},i:I,o:I,d:function(n){d(a),n&&d(t),n&&d(o),P(cn,n),n&&d(s),n&&d(A),n&&d(J),n&&d(K),P(un,n),ln&&ln.d(),an=!1,y(tn)}}}function V(n,a,t){var o=new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS"});function r(n){1!==h.length&&(h.splice(n,1),t(0,h),c(),t(2,u-=1))}function c(){setTimeout((function(){t(1,s=h.reduce((function(n,a){return Number.isNaN(Number(a.howMuch))?Number(n)+0:Number(n)+Number(a.howMuch)}),0))}))}var h,s,u;return n.$$.update=function(){5&n.$$.dirty&&t(2,u=u||h.length)},t(0,h=[{who:"X",howMuch:0}]),t(1,s=c()),[h,s,u,o,function(){t(0,h=[].concat(A(h),[{who:"X",howMuch:0}])),t(2,u+=1)},r,function(){t(0,h=[]),t(0,h=[{who:"X",howMuch:0}]),c(),t(2,u=h.length)},c,function(n){n.who=this.value,t(0,h)},function(n){n.howMuch=M(this.value),t(0,h)},function(n){return r(n)},function(){u=M(this.value),t(2,u),t(0,h)}]}var k=function(a){n(u,s);var t=D(u);function u(n){var a;return o(this,u),a=t.call(this),r(h(a),n,V,U,c,{}),a}return u}();export default k;
