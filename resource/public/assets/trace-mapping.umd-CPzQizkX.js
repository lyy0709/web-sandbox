import{c as Ue,g as qe}from"./_commonjsHelpers-Cpj98o6Y.js";function ke(ee,ne){for(var m=0;m<ne.length;m++){const G=ne[m];if(typeof G!="string"&&!Array.isArray(G)){for(const J in G)if(J!=="default"&&!(J in ee)){const K=Object.getOwnPropertyDescriptor(G,J);K&&Object.defineProperty(ee,J,K.get?K:{enumerable:!0,get:()=>G[J]})}}}return Object.freeze(Object.defineProperty(ee,Symbol.toStringTag,{value:"Module"}))}var Ie={exports:{}},Oe={exports:{}},De;function ze(){return De||(De=1,function(ee,ne){(function(m,G){G(ne)})(Ue,function(m){const K="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fe=new Uint8Array(64),D=new Uint8Array(128);for(let i=0;i<K.length;i++){const r=K.charCodeAt(i);fe[i]=r,D[r]=i}function y(i,r){let n=0,c=0,a=0;do{const R=i.next();a=D[R],n|=(a&31)<<c,c+=5}while(a&32);const S=n&1;return n>>>=1,S&&(n=-2147483648|-n),r+n}function p(i,r,n){let c=r-n;c=c<0?-c<<1|1:c<<1;do{let a=c&31;c>>>=5,c>0&&(a|=32),i.write(fe[a])}while(c>0);return r}function j(i,r){return i.pos>=r?!1:i.peek()!==44}const te=1024*16,$=typeof TextDecoder<"u"?new TextDecoder:typeof Buffer<"u"?{decode(i){return Buffer.from(i.buffer,i.byteOffset,i.byteLength).toString()}}:{decode(i){let r="";for(let n=0;n<i.length;n++)r+=String.fromCharCode(i[n]);return r}};class Z{constructor(){this.pos=0,this.out="",this.buffer=new Uint8Array(te)}write(r){const{buffer:n}=this;n[this.pos++]=r,this.pos===te&&(this.out+=$.decode(n),this.pos=0)}flush(){const{buffer:r,out:n,pos:c}=this;return c>0?n+$.decode(r.subarray(0,c)):n}}class oe{constructor(r){this.pos=0,this.buffer=r}next(){return this.buffer.charCodeAt(this.pos++)}peek(){return this.buffer.charCodeAt(this.pos)}indexOf(r){const{buffer:n,pos:c}=this,a=n.indexOf(r,c);return a===-1?n.length:a}}const se=[];function de(i){const{length:r}=i,n=new oe(i),c=[],a=[];let S=0;for(;n.pos<r;n.pos++){S=y(n,S);const R=y(n,0);if(!j(n,r)){const w=a.pop();w[2]=S,w[3]=R;continue}const v=y(n,0),b=y(n,0)&1?[S,R,0,0,v,y(n,0)]:[S,R,0,0,v];let I=se;if(j(n,r)){I=[];do{const w=y(n,0);I.push(w)}while(j(n,r))}b.vars=I,c.push(b),a.push(b)}return c}function pe(i){const r=new Z;for(let n=0;n<i.length;)n=u(i,n,r,[0]);return r.flush()}function u(i,r,n,c){const a=i[r],{0:S,1:R,2:v,3:U,4:x,vars:b}=a;r>0&&n.write(44),c[0]=p(n,S,c[0]),p(n,R,0),p(n,x,0);const I=a.length===6?1:0;p(n,I,0),a.length===6&&p(n,a[5],0);for(const w of b)p(n,w,0);for(r++;r<i.length;){const w=i[r],{0:C,1:L}=w;if(C>v||C===v&&L>=U)break;r=u(i,r,n,c)}return n.write(44),c[0]=p(n,v,c[0]),p(n,U,0),r}function d(i){const{length:r}=i,n=new oe(i),c=[],a=[];let S=0,R=0,v=0,U=0,x=0,b=0,I=0,w=0;do{const C=n.indexOf(";");let L=0;for(;n.pos<C;n.pos++){if(L=y(n,L),!j(n,C)){const W=a.pop();W[2]=S,W[3]=L;continue}const k=y(n,0),ae=k&1,re=k&2,ce=k&4;let be=null,he=se,Q;if(ae){const W=y(n,R);v=y(n,R===W?v:0),R=W,Q=[S,L,0,0,W,v]}else Q=[S,L,0,0];if(Q.isScope=!!ce,re){const W=U,Y=x;U=y(n,U);const ie=W===U;x=y(n,ie?x:0),b=y(n,ie&&Y===x?b:0),be=[U,x,b]}if(Q.callsite=be,j(n,C)){he=[];do{I=S,w=L;const W=y(n,0);let Y;if(W<-1){Y=[[y(n,0)]];for(let ie=-1;ie>W;ie--){const Me=I;I=y(n,I),w=y(n,I===Me?w:0);const _e=y(n,0);Y.push([_e,I,w])}}else Y=[[W]];he.push(Y)}while(j(n,C))}Q.bindings=he,c.push(Q),a.push(Q)}S++,n.pos=C+1}while(n.pos<r);return c}function h(i){if(i.length===0)return"";const r=new Z;for(let n=0;n<i.length;)n=A(i,n,r,[0,0,0,0,0,0,0]);return r.flush()}function A(i,r,n,c){const a=i[r],{0:S,1:R,2:v,3:U,isScope:x,callsite:b,bindings:I}=a;c[0]<S?(T(n,c[0],S),c[0]=S,c[1]=0):r>0&&n.write(44),c[1]=p(n,a[1],c[1]);const w=(a.length===6?1:0)|(b?2:0)|(x?4:0);if(p(n,w,0),a.length===6){const{4:C,5:L}=a;C!==c[2]&&(c[3]=0),c[2]=p(n,C,c[2]),c[3]=p(n,L,c[3])}if(b){const{0:C,1:L,2:k}=a.callsite;C!==c[4]?(c[5]=0,c[6]=0):L!==c[5]&&(c[6]=0),c[4]=p(n,C,c[4]),c[5]=p(n,L,c[5]),c[6]=p(n,k,c[6])}if(I)for(const C of I){C.length>1&&p(n,-C.length,0);const L=C[0][0];p(n,L,0);let k=S,ae=R;for(let re=1;re<C.length;re++){const ce=C[re];k=p(n,ce[1],k),ae=p(n,ce[2],ae),p(n,ce[0],0)}}for(r++;r<i.length;){const C=i[r],{0:L,1:k}=C;if(L>v||L===v&&k>=U)break;r=A(i,r,n,c)}return c[0]<v?(T(n,c[0],v),c[0]=v,c[1]=0):n.write(44),c[1]=p(n,U,c[1]),r}function T(i,r,n){do i.write(59);while(++r<n)}function E(i){const{length:r}=i,n=new oe(i),c=[];let a=0,S=0,R=0,v=0,U=0;do{const x=n.indexOf(";"),b=[];let I=!0,w=0;for(a=0;n.pos<x;){let C;a=y(n,a),a<w&&(I=!1),w=a,j(n,x)?(S=y(n,S),R=y(n,R),v=y(n,v),j(n,x)?(U=y(n,U),C=[a,S,R,v,U]):C=[a,S,R,v]):C=[a],b.push(C),n.pos++}I||B(b),c.push(b),n.pos=x+1}while(n.pos<=r);return c}function B(i){i.sort(H)}function H(i,r){return i[0]-r[0]}function V(i){const r=new Z;let n=0,c=0,a=0,S=0;for(let R=0;R<i.length;R++){const v=i[R];if(R>0&&r.write(59),v.length===0)continue;let U=0;for(let x=0;x<v.length;x++){const b=v[x];x>0&&r.write(44),U=p(r,b[0],U),b.length!==1&&(n=p(r,b[1],n),c=p(r,b[2],c),a=p(r,b[3],a),b.length!==4&&(S=p(r,b[4],S)))}}return r.flush()}m.decode=E,m.decodeGeneratedRanges=d,m.decodeOriginalScopes=de,m.encode=V,m.encodeGeneratedRanges=h,m.encodeOriginalScopes=pe,Object.defineProperty(m,"__esModule",{value:!0})})}(Oe,Oe.exports)),Oe.exports}var Ee={exports:{}},je;function Ke(){return je||(je=1,function(ee,ne){(function(m,G){ee.exports=G()})(Ue,function(){const m=/^[\w+.-]+:\/\//,G=/^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,J=/^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;function K(u){return m.test(u)}function fe(u){return u.startsWith("//")}function D(u){return u.startsWith("/")}function y(u){return u.startsWith("file:")}function p(u){return/^[.?#]/.test(u)}function j(u){const d=G.exec(u);return $(d[1],d[2]||"",d[3],d[4]||"",d[5]||"/",d[6]||"",d[7]||"")}function te(u){const d=J.exec(u),h=d[2];return $("file:","",d[1]||"","",D(h)?h:"/"+h,d[3]||"",d[4]||"")}function $(u,d,h,A,T,E,B){return{scheme:u,user:d,host:h,port:A,path:T,query:E,hash:B,type:7}}function Z(u){if(fe(u)){const h=j("http:"+u);return h.scheme="",h.type=6,h}if(D(u)){const h=j("http://foo.com"+u);return h.scheme="",h.host="",h.type=5,h}if(y(u))return te(u);if(K(u))return j(u);const d=j("http://foo.com/"+u);return d.scheme="",d.host="",d.type=u?u.startsWith("?")?3:u.startsWith("#")?2:4:1,d}function oe(u){if(u.endsWith("/.."))return u;const d=u.lastIndexOf("/");return u.slice(0,d+1)}function se(u,d){de(d,d.type),u.path==="/"?u.path=d.path:u.path=oe(d.path)+u.path}function de(u,d){const h=d<=4,A=u.path.split("/");let T=1,E=0,B=!1;for(let V=1;V<A.length;V++){const i=A[V];if(!i){B=!0;continue}if(B=!1,i!=="."){if(i===".."){E?(B=!0,E--,T--):h&&(A[T++]=i);continue}A[T++]=i,E++}}let H="";for(let V=1;V<T;V++)H+="/"+A[V];(!H||B&&!H.endsWith("/.."))&&(H+="/"),u.path=H}function pe(u,d){if(!u&&!d)return"";const h=Z(u);let A=h.type;if(d&&A!==7){const E=Z(d),B=E.type;switch(A){case 1:h.hash=E.hash;case 2:h.query=E.query;case 3:case 4:se(h,E);case 5:h.user=E.user,h.host=E.host,h.port=E.port;case 6:h.scheme=E.scheme}B>A&&(A=B)}de(h,A);const T=h.query+h.hash;switch(A){case 2:case 3:return T;case 4:{const E=h.path.slice(1);return E?p(d||u)&&!p(E)?"./"+E+T:E+T:T||"."}case 5:return h.path+T;default:return h.scheme+"//"+h.user+h.host+h.port+h.path+T}}return pe})}(Ee)),Ee.exports}(function(ee,ne){(function(m,G){G(ne,ze(),Ke())})(Ue,function(m,G,J){function K(e,t){return t&&!t.endsWith("/")&&(t+="/"),J(e,t)}function fe(e){if(!e)return"";const t=e.lastIndexOf("/");return e.slice(0,t+1)}const D=0,y=1,p=2,j=3,te=4,$=1,Z=2;function oe(e,t){const o=se(e,0);if(o===e.length)return e;t||(e=e.slice());for(let s=o;s<e.length;s=se(e,s+1))e[s]=pe(e[s],t);return e}function se(e,t){for(let o=t;o<e.length;o++)if(!de(e[o]))return o;return e.length}function de(e){for(let t=1;t<e.length;t++)if(e[t][D]<e[t-1][D])return!1;return!0}function pe(e,t){return t||(e=e.slice()),e.sort(u)}function u(e,t){return e[D]-t[D]}let d=!1;function h(e,t,o,s){for(;o<=s;){const f=o+(s-o>>1),l=e[f][D]-t;if(l===0)return d=!0,f;l<0?o=f+1:s=f-1}return d=!1,o-1}function A(e,t,o){for(let s=o+1;s<e.length&&e[s][D]===t;o=s++);return o}function T(e,t,o){for(let s=o-1;s>=0&&e[s][D]===t;o=s--);return o}function E(){return{lastKey:-1,lastNeedle:-1,lastIndex:-1}}function B(e,t,o,s){const{lastKey:f,lastNeedle:l,lastIndex:_}=o;let O=0,g=e.length-1;if(s===f){if(t===l)return d=_!==-1&&e[_][D]===t,_;t>=l?O=_===-1?0:_:g=_}return o.lastKey=s,o.lastNeedle=t,o.lastIndex=h(e,t,O,g)}function H(e,t){const o=t.map(i);for(let s=0;s<e.length;s++){const f=e[s];for(let l=0;l<f.length;l++){const _=f[l];if(_.length===1)continue;const O=_[y],g=_[p],M=_[j],q=o[O],P=q[g]||(q[g]=[]),N=t[O];let F=A(P,M,B(P,M,N,g));N.lastIndex=++F,V(P,F,[M,s,_[D]])}}return o}function V(e,t,o){for(let s=e.length;s>t;s--)e[s]=e[s-1];e[t]=o}function i(){return{__proto__:null}}const r=function(e,t){const o=n(e);if(!("sections"in o))return new I(o,t);const s=[],f=[],l=[],_=[],O=[];c(o,t,s,f,l,_,O,0,0,1/0,1/0);const g={version:3,file:o.file,names:_,sources:f,sourcesContent:l,mappings:s,ignoreList:O};return Y(g)};function n(e){return typeof e=="string"?JSON.parse(e):e}function c(e,t,o,s,f,l,_,O,g,M,q){const{sections:P}=e;for(let N=0;N<P.length;N++){const{map:F,offset:X}=P[N];let le=M,ge=q;if(N+1<P.length){const me=P[N+1].offset;le=Math.min(M,O+me.line),le===M?ge=Math.min(q,g+me.column):le<M&&(ge=g+me.column)}a(F,t,o,s,f,l,_,O+X.line,g+X.column,le,ge)}}function a(e,t,o,s,f,l,_,O,g,M,q){const P=n(e);if("sections"in P)return c(...arguments);const N=new I(P,t),F=s.length,X=l.length,le=L(N),{resolvedSources:ge,sourcesContent:me,ignoreList:xe}=N;if(S(s,ge),S(l,N.names),me)S(f,me);else for(let z=0;z<ge.length;z++)f.push(null);if(xe)for(let z=0;z<xe.length;z++)_.push(xe[z]+F);for(let z=0;z<le.length;z++){const Le=O+z;if(Le>M)return;const Ae=R(o,Le),We=z===0?g:0,Pe=le[z];for(let Re=0;Re<Pe.length;Re++){const ue=Pe[Re],ve=We+ue[D];if(Le===M&&ve>=q)return;if(ue.length===1){Ae.push([ve]);continue}const Te=F+ue[y],we=ue[p],Ge=ue[j];Ae.push(ue.length===4?[ve,Te,we,Ge]:[ve,Te,we,Ge,X+ue[te]])}}}function S(e,t){for(let o=0;o<t.length;o++)e.push(t[o])}function R(e,t){for(let o=e.length;o<=t;o++)e[o]=[];return e[t]}const v="`line` must be greater than 0 (lines start at line 1)",U="`column` must be greater than or equal to 0 (columns start at column 0)",x=-1,b=1;class I{constructor(t,o){const s=typeof t=="string";if(!s&&t._decodedMemo)return t;const f=s?JSON.parse(t):t,{version:l,file:_,names:O,sourceRoot:g,sources:M,sourcesContent:q}=f;this.version=l,this.file=_,this.names=O||[],this.sourceRoot=g,this.sources=M,this.sourcesContent=q,this.ignoreList=f.ignoreList||f.x_google_ignoreList||void 0;const P=K(g||"",fe(o));this.resolvedSources=M.map(F=>K(F||"",P));const{mappings:N}=f;typeof N=="string"?(this._encoded=N,this._decoded=void 0):(this._encoded=void 0,this._decoded=oe(N,s)),this._decodedMemo=E(),this._bySources=void 0,this._bySourceMemos=void 0}}function w(e){return e}function C(e){var t,o;return(t=(o=e)._encoded)!==null&&t!==void 0?t:o._encoded=G.encode(e._decoded)}function L(e){var t;return(t=e)._decoded||(t._decoded=G.decode(e._encoded))}function k(e,t,o){const s=L(e);if(t>=s.length)return null;const f=s[t],l=ye(f,e._decodedMemo,t,o,b);return l===-1?null:f[l]}function ae(e,t){let{line:o,column:s,bias:f}=t;if(o--,o<0)throw new Error(v);if(s<0)throw new Error(U);const l=L(e);if(o>=l.length)return Ce(null,null,null,null);const _=l[o],O=ye(_,e._decodedMemo,o,s,f||b);if(O===-1)return Ce(null,null,null,null);const g=_[O];if(g.length===1)return Ce(null,null,null,null);const{names:M,resolvedSources:q}=e;return Ce(q[g[y]],g[p]+1,g[j],g.length===5?M[g[te]]:null)}function re(e,t){const{source:o,line:s,column:f,bias:l}=t;return Ne(e,o,s,f,l||b,!1)}function ce(e,t){const{source:o,line:s,column:f,bias:l}=t;return Ne(e,o,s,f,l||x,!0)}function be(e,t){const o=L(e),{names:s,resolvedSources:f}=e;for(let l=0;l<o.length;l++){const _=o[l];for(let O=0;O<_.length;O++){const g=_[O],M=l+1,q=g[0];let P=null,N=null,F=null,X=null;g.length!==1&&(P=f[g[1]],N=g[2]+1,F=g[3]),g.length===5&&(X=s[g[4]]),t({generatedLine:M,generatedColumn:q,source:P,originalLine:N,originalColumn:F,name:X})}}}function he(e,t){const{sources:o,resolvedSources:s}=e;let f=o.indexOf(t);return f===-1&&(f=s.indexOf(t)),f}function Q(e,t){const{sourcesContent:o}=e;if(o==null)return null;const s=he(e,t);return s===-1?null:o[s]}function W(e,t){const{ignoreList:o}=e;if(o==null)return!1;const s=he(e,t);return s===-1?!1:o.includes(s)}function Y(e,t){const o=new I(_e(e,[]),t);return o._decoded=e.mappings,o}function ie(e){return _e(e,L(e))}function Me(e){return _e(e,C(e))}function _e(e,t){return{version:e.version,file:e.file,names:e.names,sourceRoot:e.sourceRoot,sources:e.sources,sourcesContent:e.sourcesContent,mappings:t,ignoreList:e.ignoreList||e.x_google_ignoreList}}function Ce(e,t,o,s){return{source:e,line:t,column:o,name:s}}function Se(e,t){return{line:e,column:t}}function ye(e,t,o,s,f){let l=B(e,s,t,o);return d?l=(f===x?A:T)(e,s,l):f===x&&l++,l===-1||l===e.length?-1:l}function Be(e,t,o,s,f){let l=ye(e,t,o,s,b);if(!d&&f===x&&l++,l===-1||l===e.length)return[];const _=d?s:e[l][D];d||(l=T(e,_,l));const O=A(e,_,l),g=[];for(;l<=O;l++){const M=e[l];g.push(Se(M[$]+1,M[Z]))}return g}function Ne(e,t,o,s,f,l){var _;if(o--,o<0)throw new Error(v);if(s<0)throw new Error(U);const{sources:O,resolvedSources:g}=e;let M=O.indexOf(t);if(M===-1&&(M=g.indexOf(t)),M===-1)return l?[]:Se(null,null);const P=((_=e)._bySources||(_._bySources=H(L(e),e._bySourceMemos=O.map(E))))[M][o];if(P==null)return l?[]:Se(null,null);const N=e._bySourceMemos[M];if(l)return Be(P,N,o,s,f);const F=ye(P,N,o,s,f);if(F===-1)return Se(null,null);const X=P[F];return Se(X[$]+1,X[Z])}m.AnyMap=r,m.GREATEST_LOWER_BOUND=b,m.LEAST_UPPER_BOUND=x,m.TraceMap=I,m.allGeneratedPositionsFor=ce,m.decodedMap=ie,m.decodedMappings=L,m.eachMapping=be,m.encodedMap=Me,m.encodedMappings=C,m.generatedPositionFor=re,m.isIgnored=W,m.originalPositionFor=ae,m.presortedDecodedMap=Y,m.sourceContentFor=Q,m.traceSegment=k})})(Ie,Ie.exports);var Fe=Ie.exports;const Ve=qe(Fe),Xe=ke({__proto__:null,default:Ve},[Fe]);export{Xe as t};
