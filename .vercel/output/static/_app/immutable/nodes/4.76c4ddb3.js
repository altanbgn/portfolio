import{S as J,i as K,s as O,c as Q,a as R,m as U,t as W,b as X,d as Z,e as Y,o as x,f as L,g as c,h as m,w as S,j as z,k as A,l as M,n as k,p as B,H as ee,q as w,r as D,u as q,v as G,x as te,y as N,z as _,A as T,B as V,C as ae}from"../chunks/vendor.f17ea74c.js";import{s as se}from"../chunks/supabaseClient.aed29dc7.js";import{L as le}from"../chunks/Layout.d87851e8.js";function F(r){var E,H,P,j;let a,t,e,l,i=(r[0]?"":(E=r[1])==null?void 0:E.title)+"",f,u,o,d=((H=r[1])!=null&&H.created_at?z((P=r[1])==null?void 0:P.created_at).format("DD MMMM YYYY"):"")+"",h,v,p,g,y=(r[0]?"":A((j=r[1])==null?void 0:j.body))+"";return{c(){a=M("img"),e=k(),l=M("p"),f=B(i),u=k(),o=M("p"),h=B(d),v=k(),p=M("div"),g=new ee(!1),this.h()},l(s){a=w(s,"IMG",{src:!0,alt:!0,class:!0}),e=D(s),l=w(s,"P",{class:!0});var n=q(l);f=G(n,i),n.forEach(m),u=D(s),o=w(s,"P",{class:!0});var b=q(o);h=G(b,d),b.forEach(m),v=D(s),p=w(s,"DIV",{class:!0});var $=q(p);g=te($,!1),$.forEach(m),this.h()},h(){N(a.src,t=r[0]?"":r[1].featured_image)||_(a,"src",t),_(a,"alt","featured"),_(a,"class","mb-16"),_(l,"class","text-2xl lg:text-6xl text-center font-bold mb-16"),_(o,"class","text-neutral-400 mb-16"),g.a=null,_(p,"class","prose lg:prose-xl prose-invert prose-pre:bg-neutral-800 max-w-none text-white")},m(s,n){c(s,a,n),c(s,e,n),c(s,l,n),T(l,f),c(s,u,n),c(s,o,n),T(o,h),c(s,v,n),c(s,p,n),g.m(y,p)},p(s,n){var b,$,C,I;n&3&&!N(a.src,t=s[0]?"":s[1].featured_image)&&_(a,"src",t),n&3&&i!==(i=(s[0]?"":(b=s[1])==null?void 0:b.title)+"")&&V(f,i),n&2&&d!==(d=(($=s[1])!=null&&$.created_at?z((C=s[1])==null?void 0:C.created_at).format("DD MMMM YYYY"):"")+"")&&V(h,d),n&3&&y!==(y=(s[0]?"":A((I=s[1])==null?void 0:I.body))+"")&&g.p(y)},d(s){s&&(m(a),m(e),m(l),m(u),m(o),m(v),m(p))}}}function re(r){let a,t=!r[0]&&F(r);return{c(){t&&t.c(),a=L()},l(e){t&&t.l(e),a=L()},m(e,l){t&&t.m(e,l),c(e,a,l)},p(e,l){e[0]?t&&(t.d(1),t=null):t?t.p(e,l):(t=F(e),t.c(),t.m(a.parentNode,a))},d(e){e&&m(a),t&&t.d(e)}}}function oe(r){let a,t;return a=new le({props:{class:"lg:px-96",$$slots:{default:[re]},$$scope:{ctx:r}}}),{c(){Q(a.$$.fragment)},l(e){R(a.$$.fragment,e)},m(e,l){U(a,e,l),t=!0},p(e,[l]){const i={};l&35&&(i.$$scope={dirty:l,ctx:e}),a.$set(i)},i(e){t||(W(a.$$.fragment,e),t=!0)},o(e){X(a.$$.fragment,e),t=!1},d(e){Z(a,e)}}}function ne(r,a,t){let e,l,i;Y(r,ae,o=>t(4,e=o));const f=S();Y(r,f,o=>t(1,i=o));const u=S(!0);return Y(r,u,o=>t(0,l=o)),x(async()=>{try{const{data:o}=await se.from("blogs").select("*").eq("slug",e.params.slug).single();f.set(o)}finally{u.set(!1)}}),[l,i,f,u]}class ue extends J{constructor(a){super(),K(this,a,ne,oe,O,{})}}export{ue as component};
