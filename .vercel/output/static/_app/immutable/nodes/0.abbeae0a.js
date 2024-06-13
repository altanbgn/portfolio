import{S as W,i as G,s as X,Y as uF,Z as eF,u as v,h,z as n,g as A,A as c,_ as U,R as aF,l as g,q as $,T as oF,U as iF,V as fF,t as S,b as I,e as pF,C as mF,N as cF,c as L,n as O,f as tF,a as H,r as V,$ as J,m as Y,L as R,G as _F,I as BF,d as q,M as dF,a6 as EF,p as T,v as j,O as nF,a7 as lF,a8 as sF}from"../chunks/vendor.f17ea74c.js";import{C as gF,a as hF}from"../chunks/avatar.7fa7efe4.js";function $F(s){let F,u;return{c(){F=uF("svg"),u=uF("path"),this.h()},l(e){F=eF(e,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var o=v(F);u=eF(o,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),v(u).forEach(h),o.forEach(h),this.h()},h(){n(u,"stroke-linecap","round"),n(u,"stroke-linejoin","round"),n(u,"d","M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"),n(F,"xmlns","http://www.w3.org/2000/svg"),n(F,"fill","none"),n(F,"viewBox","0 0 24 24"),n(F,"stroke-width","1.5"),n(F,"stroke","currentColor"),n(F,"class","w-6 h-6")},m(e,o){A(e,F,o),c(F,u)},p:U,i:U,o:U,d(e){e&&h(F)}}}class CF extends W{constructor(F){super(),G(this,F,null,$F,X,{})}}function vF(s){let F,u,e;const o=s[3].default,t=aF(o,s,s[2],null);return{c(){F=g("a"),t&&t.c(),this.h()},l(l){F=$(l,"A",{href:!0,class:!0});var r=v(F);t&&t.l(r),r.forEach(h),this.h()},h(){n(F,"href",s[0]),n(F,"class",u=`font-bold capitalize rounded-full hover:tracking-widest transition-all duration-300 px-6 py-2
    ${s[1].url.pathname.includes(s[0].length!==1?s[0].slice(1,s[0].length):s[1].url.pathname===s[0]?"":"!")?"bg-cyan-500":""}
  `)},m(l,r){A(l,F,r),t&&t.m(F,null),e=!0},p(l,[r]){t&&t.p&&(!e||r&4)&&oF(t,o,l,l[2],e?fF(o,l[2],r,null):iF(l[2]),null),(!e||r&1)&&n(F,"href",l[0]),(!e||r&3&&u!==(u=`font-bold capitalize rounded-full hover:tracking-widest transition-all duration-300 px-6 py-2
    ${l[1].url.pathname.includes(l[0].length!==1?l[0].slice(1,l[0].length):l[1].url.pathname===l[0]?"":"!")?"bg-cyan-500":""}
  `))&&n(F,"class",u)},i(l){e||(S(t,l),e=!0)},o(l){I(t,l),e=!1},d(l){l&&h(F),t&&t.d(l)}}}function bF(s,F,u){let e;pF(s,mF,r=>u(1,e=r));let{$$slots:o={},$$scope:t}=F,{href:l="/"}=F;return s.$$set=r=>{"href"in r&&u(0,l=r.href),"$$scope"in r&&u(2,t=r.$$scope)},[l,e,t,o]}class K extends W{constructor(F){super(),G(this,F,bF,vF,X,{href:0})}}const{window:Q}=EF;function wF(s){let F;return{c(){F=T("home")},l(u){F=j(u,"home")},m(u,e){A(u,F,e)},d(u){u&&h(F)}}}function kF(s){let F;return{c(){F=T("blogs")},l(u){F=j(u,"blogs")},m(u,e){A(u,F,e)},d(u){u&&h(F)}}}function yF(s){let F;return{c(){F=T("projects")},l(u){F=j(u,"projects")},m(u,e){A(u,F,e)},d(u){u&&h(F)}}}function rF(s){let F,u,e,o=`<img src="${hF}" width="64" height="64" alt="logo"/>`,t,l,r,f,a,d,b="Blogs",w,E,D="Projects",y,C,k,x;return r=new gF({}),{c(){F=g("div"),u=g("div"),e=g("a"),e.innerHTML=o,t=O(),l=g("button"),L(r.$$.fragment),f=O(),a=g("div"),d=g("a"),d.textContent=b,w=O(),E=g("a"),E.textContent=D,this.h()},l(m){F=$(m,"DIV",{class:!0});var _=v(F);u=$(_,"DIV",{class:!0});var M=v(u);e=$(M,"A",{href:!0,class:!0,"data-svelte-h":!0}),J(e)!=="svelte-cicjcp"&&(e.innerHTML=o),t=V(M),l=$(M,"BUTTON",{"aria-label":!0,class:!0});var z=v(l);H(r.$$.fragment,z),z.forEach(h),M.forEach(h),f=V(_),a=$(_,"DIV",{class:!0});var p=v(a);d=$(p,"A",{href:!0,class:!0,"data-svelte-h":!0}),J(d)!=="svelte-teevl"&&(d.textContent=b),w=V(p),E=$(p,"A",{href:!0,class:!0,"data-svelte-h":!0}),J(E)!=="svelte-xxcdyp"&&(E.textContent=D),p.forEach(h),_.forEach(h),this.h()},h(){n(e,"href","/"),n(e,"class","font-bold rounded-full py-4"),n(l,"aria-label","menu"),n(l,"class","py-4 px-4 pr-0"),n(u,"class","flex justify-between items-center w-full my-4 mb-10"),n(d,"href","/blogs"),n(d,"class","text-4xl uppercase font-secondary font-extrabold"),n(E,"href","/projects"),n(E,"class","text-4xl uppercase font-secondary font-extrabold"),n(a,"class","flex flex-col gap-10"),n(F,"class","lg:hidden absolute w-screen min-h-screen bg-black top-0 left-0 z-50 px-8")},m(m,_){A(m,F,_),c(F,u),c(u,e),c(u,t),c(u,l),Y(r,l,null),c(F,f),c(F,a),c(a,d),c(a,w),c(a,E),C=!0,k||(x=[R(e,"click",s[4]),R(l,"click",s[5]),R(d,"click",s[6]),R(E,"click",s[7])],k=!0)},p(m,_){s=m},i(m){C||(S(r.$$.fragment,m),m&&cF(()=>{C&&(y||(y=nF(F,sF,{duration:1200,x:window.innerWidth,opacity:1,easing:lF},!0)),y.run(1))}),C=!0)},o(m){I(r.$$.fragment,m),m&&(y||(y=nF(F,sF,{duration:1200,x:window.innerWidth,opacity:1,easing:lF},!1)),y.run(0)),C=!1},d(m){m&&h(F),q(r),m&&y&&y.end(),k=!1,dF(x)}}}function DF(s){let F=!1,u=()=>{F=!1},e,o,t,l,r,f,a,d,b,w,E,D=`<img src="${hF}" width="64" height="64" alt="logo"/>`,y,C,k,x,m,_,M,z;cF(s[2]),t=new K({props:{$$slots:{default:[wF]},$$scope:{ctx:s}}}),r=new K({props:{href:"/blogs",$$slots:{default:[kF]},$$scope:{ctx:s}}}),a=new K({props:{href:"/projects",$$slots:{default:[yF]},$$scope:{ctx:s}}}),k=new CF({});let p=s[0]===!0&&rF(s);return{c(){o=g("nav"),L(t.$$.fragment),l=O(),L(r.$$.fragment),f=O(),L(a.$$.fragment),b=O(),w=g("nav"),E=g("a"),E.innerHTML=D,y=O(),C=g("button"),L(k.$$.fragment),x=O(),p&&p.c(),m=tF(),this.h()},l(i){o=$(i,"NAV",{id:!0,class:!0});var B=v(o);H(t.$$.fragment,B),l=V(B),H(r.$$.fragment,B),f=V(B),H(a.$$.fragment,B),B.forEach(h),b=V(i),w=$(i,"NAV",{class:!0});var N=v(w);E=$(N,"A",{href:!0,class:!0,"data-svelte-h":!0}),J(E)!=="svelte-xc80aq"&&(E.innerHTML=D),y=V(N),C=$(N,"BUTTON",{"aria-label":!0,class:!0});var P=v(C);H(k.$$.fragment,P),P.forEach(h),N.forEach(h),x=V(i),p&&p.l(i),m=tF(),this.h()},h(){n(o,"id","desktopNav"),n(o,"class",d=`fixed hidden lg:flex justify-center items-center top-0 left-1/2 -translate-x-1/2 z-10 rounded-full gap-2 my-10 px-8 py-2
    ${s[1]<=100?"bg-none":"bg-neutral-600/40"}
  backdrop-blur-xl transition duration-300`),n(E,"href","/"),n(E,"class","font-bold rounded-full px-8 py-4"),n(C,"aria-label","menu"),n(C,"class","px-8 py-4"),n(w,"class","flex lg:hidden absolute top-0 z-10 w-screen items-center justify-between my-4")},m(i,B){A(i,o,B),Y(t,o,null),c(o,l),Y(r,o,null),c(o,f),Y(a,o,null),A(i,b,B),A(i,w,B),c(w,E),c(w,y),c(w,C),Y(k,C,null),A(i,x,B),p&&p.m(i,B),A(i,m,B),_=!0,M||(z=[R(Q,"scroll",()=>{F=!0,clearTimeout(e),e=setTimeout(u,100),s[2]()}),R(C,"click",s[3])],M=!0)},p(i,[B]){B&2&&!F&&(F=!0,clearTimeout(e),scrollTo(Q.pageXOffset,i[1]),e=setTimeout(u,100));const N={};B&256&&(N.$$scope={dirty:B,ctx:i}),t.$set(N);const P={};B&256&&(P.$$scope={dirty:B,ctx:i}),r.$set(P);const FF={};B&256&&(FF.$$scope={dirty:B,ctx:i}),a.$set(FF),(!_||B&2&&d!==(d=`fixed hidden lg:flex justify-center items-center top-0 left-1/2 -translate-x-1/2 z-10 rounded-full gap-2 my-10 px-8 py-2
    ${i[1]<=100?"bg-none":"bg-neutral-600/40"}
  backdrop-blur-xl transition duration-300`))&&n(o,"class",d),i[0]===!0?p?(p.p(i,B),B&1&&S(p,1)):(p=rF(i),p.c(),S(p,1),p.m(m.parentNode,m)):p&&(_F(),I(p,1,1,()=>{p=null}),BF())},i(i){_||(S(t.$$.fragment,i),S(r.$$.fragment,i),S(a.$$.fragment,i),S(k.$$.fragment,i),S(p),_=!0)},o(i){I(t.$$.fragment,i),I(r.$$.fragment,i),I(a.$$.fragment,i),I(k.$$.fragment,i),I(p),_=!1},d(i){i&&(h(o),h(b),h(w),h(x),h(m)),q(t),q(r),q(a),q(k),p&&p.d(i),M=!1,dF(z)}}}function AF(s,F,u){let e=!1,o=0;function t(){u(1,o=Q.pageYOffset)}return[e,o,t,()=>u(0,e=!0),()=>u(0,e=!1),()=>u(0,e=!1),()=>u(0,e=!1),()=>u(0,e=!1)]}class xF extends W{constructor(F){super(),G(this,F,AF,DF,X,{})}}function TF(s){let F,u,e,o,t,l,r,f,a,d,b,w,E,D,y,C;return{c(){F=g("div"),u=g("div"),e=g("p"),o=T(`Build with
			`),t=g("a"),l=T(`Svelte
			`),r=T(`,
			`),f=g("a"),a=T("Tailwind CSS"),d=T(`
			and
			`),b=g("a"),w=T(`Supabase
			`),E=T(`. Deployed on
			`),D=g("a"),y=T(`Railway
			`),C=T("."),this.h()},l(k){F=$(k,"DIV",{class:!0});var x=v(F);u=$(x,"DIV",{class:!0});var m=v(u);e=$(m,"P",{class:!0});var _=v(e);o=j(_,`Build with
			`),t=$(_,"A",{class:!0,target:!0,rel:!0,href:!0});var M=v(t);l=j(M,`Svelte
			`),M.forEach(h),r=j(_,`,
			`),f=$(_,"A",{class:!0,target:!0,rel:!0,href:!0});var z=v(f);a=j(z,"Tailwind CSS"),z.forEach(h),d=j(_,`
			and
			`),b=$(_,"A",{class:!0,target:!0,rel:!0,href:!0});var p=v(b);w=j(p,`Supabase
			`),p.forEach(h),E=j(_,`. Deployed on
			`),D=$(_,"A",{class:!0,target:!0,rel:!0,href:!0});var i=v(D);y=j(i,`Railway
			`),i.forEach(h),C=j(_,"."),_.forEach(h),m.forEach(h),x.forEach(h),this.h()},h(){n(t,"class",Z),n(t,"target","_blank"),n(t,"rel","noopener noreferrer"),n(t,"href","https://svelte.dev"),n(f,"class",Z),n(f,"target","_blank"),n(f,"rel","noopener noreferrer"),n(f,"href","https://tailwindcss.com"),n(b,"class",Z),n(b,"target","_blank"),n(b,"rel","noopener noreferrer"),n(b,"href","https://supabase.com"),n(D,"class",Z),n(D,"target","_blank"),n(D,"rel","noopener noreferrer"),n(D,"href","https://railway.app"),n(e,"class","text-sm tracking-wider text-neutral-400"),n(u,"class","container flex justify-center items-center mx-auto px-8 lg:px-32"),n(F,"class","bg-neutral-800 p-4")},m(k,x){A(k,F,x),c(F,u),c(u,e),c(e,o),c(e,t),c(t,l),c(e,r),c(e,f),c(f,a),c(e,d),c(e,b),c(b,w),c(e,E),c(e,D),c(D,y),c(e,C)},p:U,i:U,o:U,d(k){k&&h(F)}}}const Z="text-blue-400 hover:text-blue-300 hover:underline";class jF extends W{constructor(F){super(),G(this,F,null,TF,X,{})}}function SF(s){let F,u,e,o,t,l;u=new xF({});const r=s[1].default,f=aF(r,s,s[0],null);return t=new jF({}),{c(){F=g("body"),L(u.$$.fragment),e=O(),f&&f.c(),o=O(),L(t.$$.fragment)},l(a){F=$(a,"BODY",{});var d=v(F);H(u.$$.fragment,d),e=V(d),f&&f.l(d),o=V(d),H(t.$$.fragment,d),d.forEach(h)},m(a,d){A(a,F,d),Y(u,F,null),c(F,e),f&&f.m(F,null),c(F,o),Y(t,F,null),l=!0},p(a,[d]){f&&f.p&&(!l||d&1)&&oF(f,r,a,a[0],l?fF(r,a[0],d,null):iF(a[0]),null)},i(a){l||(S(u.$$.fragment,a),S(f,a),S(t.$$.fragment,a),l=!0)},o(a){I(u.$$.fragment,a),I(f,a),I(t.$$.fragment,a),l=!1},d(a){a&&h(F),q(u),f&&f.d(a),q(t)}}}function MF(s,F,u){let{$$slots:e={},$$scope:o}=F;return console.log(`
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠹⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣦⣤⣤⣴⣄⣀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⣿⣿⡟⠻⣿⣿⣿⣷⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠘⠻⢶⣤⣤⣤⣠⡾⠃⢀⣶⡆⠀⢻⣿⣷⣶⣿⡿⠿⠛⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⡈⠉⢭⡿⠁⠀⣿⣿⣿⡇⠀⠹⢯⣭⡁⠀⠀⢨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢠⣸⡿⣶⣀⡀⠀⢀⢙⢛⠛⠁⠀⠀⠀⣄⣸⣷⣆⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡤⠀⠈⠻⣼⣇⠛⢻⡟⠛⣿⠛⠛⣿⠛⢿⣨⡿⠃⠀⠠⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⡉⠉⠿⣿⣦⡀⠀⠈⠉⠷⢾⣧⣤⣿⣤⣤⣿⡴⠿⠉⠀⠀⣴⣶⠿⠉⢹⣭⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⡇⠀⠀⠘⠻⣿⣿⣿⡟⠻⣿⣿⣻⣿⣄⠀⠘⠛⢿⣿⣦⣤⣄⣀⣀⣠⣀⣄⣤⣀⡀⣦⣤⣼⣿⣿⡊⢀⣦⣿⣿⡜⣿⣧⡀⠻⣿⠛⠃⠀⠀⠀⣀⣾⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣷⣦⣤⠀⠀⠀⠈⠁⣤⣶⠿⣡⣿⣿⣿⣿⣿⣦⣀⠹⠿⢿⣿⣏⠻⠿⠿⠿⠉⣿⣿⣿⣿⢿⠉⠰⣤⣾⣿⣿⣿⣷⣄⠹⢷⣦⣤⣤⣤⣤⢰⣶⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⡹⣿⣿⣿⣿⣿⣤⢸⣿⣿⣷⡤⣿⣿⣿⣿⡏⢶⣤⣼⣻⣧⣤⣀⣀⣿⣟⢃⣈⣤⣼⣿⣿⣿⣿⡇⣿⣿⣿⣿⣸⣿⣿⣿⣿⣿⠻⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣧⡾⣿⣿⣿⣿⣿⣾⣿⣿⣿⡯⣿⣿⣿⣿⣿⢙⣛⠻⣿⡏⠉⠉⠹⣿⠟⠘⠋⣿⣿⣿⣿⣿⢋⢁⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡛⢿⣿⣿⣿⣿⣿⣿⣿⡇⣀⣻⣤⣤⣥⡟⢻⡿⣿⡇⠀⠀⠀⣿⠠⠾⠇⣿⣿⣛⣇⣧⣼⠋⢿⣿⣿⣿⣿⣿⣿⢟⣳⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⡝⢻⣿⣿⣿⠟⡟⣿⣿⣿⣿⣿⣿⡇⢨⣷⣾⡇⠀⠀⠀⣿⢠⣶⣶⣿⣸⣿⣿⣿⣿⣷⢮⣍⠹⠟⠛⢫⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣾⡏⢹⣿⣿⣿⣿⣿⣷⡞⣷⢸⡇⠀⠀⠀⣿⢰⡆⠸⣀⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠘⠛⢿⣿⣿⣿⣿⡇⠛⠘⠛⣻⣻⣿⣿⣤⠃⢸⠿⠿⠿⠿⣿⠟⠋⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⣀⣈⣻⣝⣿⣟⣷⣶⣶⣶⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣷⣶⣦⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠙⣿⣿⣿⣟⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢸⣿⠛⢶⣾⣿⣿⣿⣿⣿⣿⣟⢿⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⣿⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣸⣿⡀⢸⣿⣿⣿⣿⣿⣿⡇⢸⡀⣿⣿⣿⣿⡇⠀⠙⣿⣿⣿⣿⡼⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⡇⠘⣿⣿⣿⣿⣿⣿⣿⣃⣼⣿⢸⣿⣿⣿⣇⡀⠀⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⡇⠀⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⢸⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣾⣶⣾⣋⣉⣉⣉⣉⣙⣹⣾⣿⣿⣾⣋⣉⣉⣩⣥⣤⣘⣛⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⢿⣿⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠙⠛⠛⠛⠻⣿⣿⡿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠈⢻⣆⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⣀⣀⣀⡰⠟⠋⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣤⣤⣤⣤⣤⣤⣽⣧⣼⣿⣿⣿⣿⣿⣿⣿⣿⣥⣤⣤⣤⣾⣧⣤⣤⣤⣤⣤⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿

    👋 Hey there! Determined one.
    Feel free to checkout the source code of this website at https://github.com/altanbgn/portfolio

    Also, You can contact me on https://instagram.com/res0nan.ce or via altanbagana@pm.me
  `),s.$$set=t=>{"$$scope"in t&&u(0,o=t.$$scope)},[o,e]}class VF extends W{constructor(F){super(),G(this,F,MF,SF,X,{})}}export{VF as component};
