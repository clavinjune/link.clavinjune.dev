import{S as w,i as $,s as q,e as _,t as y,k as b,c as v,a as p,h as L,m as S,d as h,b as m,g as d,H as g,j as E,n as k,L as M,w as T}from"../chunks/index-5019c391.js";function x(o,e,i){const s=o.slice();return s[1]=e[i],s}function j(o){let e,i=o[1].name+"",s,c,a;return{c(){e=_("a"),s=y(i),c=b(),this.h()},l(r){e=v(r,"A",{class:!0,href:!0,rel:!0,target:!0});var t=p(e);s=L(t,i),c=S(t),t.forEach(h),this.h()},h(){m(e,"class","center card svelte-ad5l6z"),m(e,"href",a=o[1].url),m(e,"rel","noreferrer noopener"),m(e,"target","_blank")},m(r,t){d(r,e,t),g(e,s),g(e,c)},p(r,t){t&1&&i!==(i=r[1].name+"")&&E(s,i),t&1&&a!==(a=r[1].url)&&m(e,"href",a)},d(r){r&&h(e)}}}function z(o){let e,i="Clavin June",s,c,a,r=o[0],t=[];for(let l=0;l<r.length;l+=1)t[l]=j(x(o,r,l));return{c(){e=_("div"),s=y(i),c=b(),a=_("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=v(l,"DIV",{class:!0});var u=p(e);s=L(u,i),u.forEach(h),c=S(l),a=v(l,"DIV",{class:!0});var n=p(a);for(let f=0;f<t.length;f+=1)t[f].l(n);n.forEach(h),this.h()},h(){m(e,"class","center title svelte-ad5l6z"),m(a,"class","center svelte-ad5l6z")},m(l,u){d(l,e,u),g(e,s),d(l,c,u),d(l,a,u);for(let n=0;n<t.length;n+=1)t[n].m(a,null)},p(l,[u]){if(u&1){r=l[0];let n;for(n=0;n<r.length;n+=1){const f=x(l,r,n);t[n]?t[n].p(f,u):(t[n]=j(f),t[n].c(),t[n].m(a,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=r.length}},i:k,o:k,d(l){l&&h(e),l&&h(c),l&&h(a),M(t,l)}}}function C(o,e,i){let s=[{name:"Loading latest article...",url:"https://clavinjune.dev/"},{name:"Email",url:"mailto:juneardoc@gmail.com"},{name:"Github",url:"https://github.com/ClavinJune/"},{name:"Ko-fi",url:"https://ko-fi.com/clavinjune"},{name:"LinkedIn",url:"https://linkedin.com/in/juneardoc/"},{name:"Trakteer",url:"https://trakteer.id/clavinjune"},{name:"Twitter",url:"https://twitter.com/clavinjune/"}];return T(async()=>{let c=await fetch("https://clavinjune.dev/en/index.xml").then(a=>a.text()).then(a=>new DOMParser().parseFromString(a,"text/xml")).then(a=>{let r=a.querySelector("item");return{name:`Latest Article - ${r.querySelector("title").innerHTML}`,url:r.querySelector("link").innerHTML}});i(0,s[0]=c,s)}),[s]}class H extends w{constructor(e){super(),$(this,e,C,z,q,{})}}export{H as default};
