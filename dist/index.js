"use strict";var p=function(a,u){return function(){return u||a((u={exports:{}}).exports,u),u.exports}};var d=p(function(er,N){
function E(a,u,n,x){var i,e,v,r,t,y,s,c;if(s=u[0],!(s<=0))for(i=n[0],e=n[1],i<0?v=(1-s)*i:v=0,e<0?r=(1-s)*e:r=0,t=a[0],y=a[1],c=0;c<s;c++)y[r]=x(t[v]),v+=i,r+=e}N.exports=E
});var S=p(function(vr,G){
function F(a,u,n,x,i){var e,v,r,t,y,s,c,o,q,f;if(q=u[0],!(q<=0))for(r=n[0],t=n[1],r<0?y=(1-q)*r:y=0,t<0?s=(1-q)*t:s=0,c=a[0],o=a[1],e=x[0],v=x[1],f=0;f<q;f++)v(o,s,i(e(c,y))),y+=r,s+=t}G.exports=F
});var R=p(function(ar,O){
var m=require('@stdlib/array-base-assert-is-accessor-array/dist'),H=require('@stdlib/array-base-accessor-getter/dist'),I=require('@stdlib/array-base-accessor-setter/dist'),J=require('@stdlib/array-base-getter/dist'),K=require('@stdlib/array-base-setter/dist'),g=require('@stdlib/array-dtype/dist'),L=d(),M=S();function P(a,u,n,x){var i,e,v,r;return v=a[0],m(v)&&(i=H(g(v))),r=a[1],m(r)&&(e=I(g(r))),i||e?(i=i||J(g(v)),e=e||K(g(r)),M(a,u,n,[i,e],x)):L(a,u,n,x)}O.exports=P
});var j=p(function(ir,b){
function Q(a,u,n,x,i){var e,v,r,t,y,s,c,o;if(c=u[0],!(c<=0))for(r=x[0],t=x[1],e=n[0],v=n[1],y=a[0],s=a[1],o=0;o<c;o++)s[t]=i(y[r]),r+=e,t+=v}b.exports=Q
});var w=p(function(tr,k){
function T(a,u,n,x,i,e){var v,r,t,y,s,c,o,q,f,A;if(f=u[0],!(f<=0))for(s=x[0],c=x[1],t=n[0],y=n[1],o=a[0],q=a[1],v=i[0],r=i[1],A=0;A<f;A++)r(q,c,e(v(o,s))),s+=t,c+=y}k.exports=T
});var C=p(function(ur,B){
var z=require('@stdlib/array-base-assert-is-accessor-array/dist'),U=require('@stdlib/array-base-accessor-getter/dist'),V=require('@stdlib/array-base-accessor-setter/dist'),W=require('@stdlib/array-base-getter/dist'),X=require('@stdlib/array-base-setter/dist'),l=require('@stdlib/array-dtype/dist'),Y=j(),Z=w();function _(a,u,n,x,i){var e,v,r,t;return r=a[0],z(r)&&(e=U(l(r))),t=a[1],z(t)&&(v=V(l(t))),e||v?(e=e||W(l(r)),v=v||X(l(t)),Z(a,u,n,x,[e,v],i)):Y(a,u,n,x,i)}B.exports=_
});var $=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),D=R(),h=C();$(D,"ndarray",h);module.exports=D;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
