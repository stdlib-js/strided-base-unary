// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function t(n,t){return n[t]}function r(n,t){return n.get(t)}function e(n,t,r){n[t]=r}function f(n,t,r){n.set(r,t)}function i(n,i,o,u){var a,s,c,d;return(c=n[0]).get&&c.set&&(a=r),(d=n[1]).get&&d.set&&(s=f),a||s?function(n,t,r,e,f){var i,o,u,a,s,c,d,v,g,l;if(!((g=t[0])<=0))for(s=(u=r[0])<0?(1-g)*u:0,c=(a=r[1])<0?(1-g)*a:0,d=n[0],v=n[1],i=e[0],o=e[1],l=0;l<g;l++)o(v,c,f(i(d,s))),s+=u,c+=a}(n,i,o,[a=a||t,s=s||e],u):function(n,t,r,e){var f,i,o,u,a,s,c,d;if(!((c=t[0])<=0))for(o=(f=r[0])<0?(1-c)*f:0,u=(i=r[1])<0?(1-c)*i:0,a=n[0],s=n[1],d=0;d<c;d++)s[u]=e(a[o]),o+=f,u+=i}(n,i,o,u)}function o(n,i,o,u,a){var s,c,d,v;return(d=n[0]).get&&d.set&&(s=r),(v=n[1]).get&&v.set&&(c=f),s||c?function(n,t,r,e,f,i){var o,u,a,s,c,d,v,g,l,m;if(!((l=t[0])<=0))for(c=e[0],d=e[1],a=r[0],s=r[1],v=n[0],g=n[1],o=f[0],u=f[1],m=0;m<l;m++)u(g,d,i(o(v,c))),c+=a,d+=s}(n,i,o,u,[s=s||t,c=c||e],a):function(n,t,r,e,f){var i,o,u,a,s,c,d,v;if(!((d=t[0])<=0))for(u=e[0],a=e[1],i=r[0],o=r[1],s=n[0],c=n[1],v=0;v<d;v++)c[a]=f(s[u]),u+=i,a+=o}(n,i,o,u,a)}n(i,"ndarray",o);export{i as default,o as ndarray};
//# sourceMappingURL=index.mjs.map