"use strict";var x=function(e,t){return function(){try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw (t=0, a)}};};var A=x(function(ur,S){
function H(e,t,a,n,u){var r,v,i,c,y,o,s,q;if(s=t[0],!(s<=0))for(i=n[0],c=n[1],r=a[0],v=a[1],y=e[0],o=e[1],q=0;q<s;q++)o[c]=u(y[i]),i+=r,c+=v}S.exports=H
});var O=x(function(ir,m){
var l=require('@stdlib/strided-base-stride2offset/dist'),I=A();function J(e,t,a,n){var u,r;return r=t[0],u=[l(r,a[0]),l(r,a[1])],I(e,t,a,u,n)}m.exports=J
});var N=x(function(nr,R){
function K(e,t,a,n,u,r){var v,i,c,y,o,s,q,G,g,p;if(g=t[0],!(g<=0))for(o=n[0],s=n[1],c=a[0],y=a[1],q=e[0],G=e[1],v=u[0],i=u[1],p=0;p<g;p++)i(G,s,r(v(q,o))),o+=c,s+=y}R.exports=K
});var k=x(function(cr,j){
var b=require('@stdlib/strided-base-stride2offset/dist'),L=N();function M(e,t,a,n,u){var r,v;return v=t[0],r=[b(v,a[0]),b(v,a[1])],L(e,t,a,r,n,u)}j.exports=M
});var B=x(function(sr,z){
var w=require('@stdlib/array-base-assert-is-accessor-array/dist'),P=require('@stdlib/array-base-accessor-getter/dist'),Q=require('@stdlib/array-base-accessor-setter/dist'),T=require('@stdlib/array-base-getter/dist'),U=require('@stdlib/array-base-setter/dist'),f=require('@stdlib/array-dtype/dist'),V=O(),W=k();function X(e,t,a,n){var u,r,v,i;return v=e[0],w(v)&&(u=P(f(v))),i=e[1],w(i)&&(r=Q(f(i))),u||r?(u=u||T(f(v)),r=r||U(f(i)),W(e,t,a,[u,r],n)):V(e,t,a,n)}z.exports=X
});var E=x(function(or,D){
var C=require('@stdlib/array-base-assert-is-accessor-array/dist'),Y=require('@stdlib/array-base-accessor-getter/dist'),Z=require('@stdlib/array-base-accessor-setter/dist'),_=require('@stdlib/array-base-getter/dist'),$=require('@stdlib/array-base-setter/dist'),d=require('@stdlib/array-dtype/dist'),h=A(),rr=N();function er(e,t,a,n,u){var r,v,i,c;return i=e[0],C(i)&&(r=Y(d(i))),c=e[1],C(c)&&(v=Z(d(c))),r||v?(r=r||_(d(i)),v=v||$(d(c)),rr(e,t,a,n,[r,v],u)):h(e,t,a,n,u)}D.exports=er
});var tr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=B(),ar=E();tr(F,"ndarray",ar);module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
