(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=l(n);fetch(n.href,r)}})();const ue=(e,t)=>e===t,ce=Symbol("solid-track"),k={equals:ue};let ae=ie;const I=1,U=2,te={owned:null,cleanups:null,context:null,owner:null};var h=null;let H=null,de=null,p=null,x=null,N=null,K=0;function B(e,t){const l=p,s=h,n=e.length===0,r=t===void 0?s:t,o=n?te:{owned:null,cleanups:null,context:r?r.context:null,owner:r},i=n?e:()=>e(()=>D(()=>Z(o)));h=o,p=null;try{return O(i,!0)}finally{p=l,h=s}}function pe(e,t){t=t?Object.assign({},k,t):k;const l={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=n=>(typeof n=="function"&&(n=n(l.value)),se(l,n));return[le.bind(l),s]}function E(e,t,l){const s=ne(e,t,!1,I);R(s)}function V(e,t,l){l=l?Object.assign({},k,l):k;const s=ne(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=l.equals||void 0,R(s),le.bind(s)}function D(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function he(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function le(){if(this.sources&&this.state)if(this.state===I)R(this);else{const e=x;x=null,O(()=>F(this),!1),x=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function se(e,t,l){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&O(()=>{for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n],o=H&&H.running;o&&H.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?x.push(r):N.push(r),r.observers&&oe(r)),o||(r.state=I)}if(x.length>1e6)throw x=[],new Error},!1)),t}function R(e){if(!e.fn)return;Z(e);const t=K;ye(e,e.value,t)}function ye(e,t,l){let s;const n=h,r=p;p=h=e;try{s=e.fn(t)}catch(o){return e.pure&&(e.state=I,e.owned&&e.owned.forEach(Z),e.owned=null),e.updatedAt=l+1,fe(o)}finally{p=r,h=n}(!e.updatedAt||e.updatedAt<=l)&&(e.updatedAt!=null&&"observers"in e?se(e,s):e.value=s,e.updatedAt=l)}function ne(e,t,l,s=I,n){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:l};return h===null||h!==te&&(h.owned?h.owned.push(r):h.owned=[r]),r}function re(e){if(e.state===0)return;if(e.state===U)return F(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<K);)e.state&&t.push(e);for(let l=t.length-1;l>=0;l--)if(e=t[l],e.state===I)R(e);else if(e.state===U){const s=x;x=null,O(()=>F(e,t[0]),!1),x=s}}function O(e,t){if(x)return e();let l=!1;t||(x=[]),N?l=!0:N=[],K++;try{const s=e();return ge(l),s}catch(s){l||(N=null),x=null,fe(s)}}function ge(e){if(x&&(ie(x),x=null),e)return;const t=N;N=null,t.length&&O(()=>ae(t),!1)}function ie(e){for(let t=0;t<e.length;t++)re(e[t])}function F(e,t){e.state=0;for(let l=0;l<e.sources.length;l+=1){const s=e.sources[l];if(s.sources){const n=s.state;n===I?s!==t&&(!s.updatedAt||s.updatedAt<K)&&re(s):n===U&&F(s,t)}}}function oe(e){for(let t=0;t<e.observers.length;t+=1){const l=e.observers[t];l.state||(l.state=U,l.pure?x.push(l):N.push(l),l.observers&&oe(l))}}function Z(e){let t;if(e.sources)for(;e.sources.length;){const l=e.sources.pop(),s=e.sourceSlots.pop(),n=l.observers;if(n&&n.length){const r=n.pop(),o=l.observerSlots.pop();s<n.length&&(r.sourceSlots[o]=s,n[s]=r,l.observerSlots[s]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function me(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function fe(e,t=h){throw me(e)}const we=Symbol("fallback");function W(e){for(let t=0;t<e.length;t++)e[t]()}function xe(e,t,l={}){let s=[],n=[],r=[],o=0,i=t.length>1?[]:null;return he(()=>W(r)),()=>{let u=e()||[],a,f;return u[ce],D(()=>{let c=u.length,v,A,L,$,T,d,m,w,_;if(c===0)o!==0&&(W(r),r=[],s=[],n=[],o=0,i&&(i=[])),l.fallback&&(s=[we],n[0]=B(M=>(r[0]=M,l.fallback())),o=1);else if(o===0){for(n=new Array(c),f=0;f<c;f++)s[f]=u[f],n[f]=B(g);o=c}else{for(L=new Array(c),$=new Array(c),i&&(T=new Array(c)),d=0,m=Math.min(o,c);d<m&&s[d]===u[d];d++);for(m=o-1,w=c-1;m>=d&&w>=d&&s[m]===u[w];m--,w--)L[w]=n[m],$[w]=r[m],i&&(T[w]=i[m]);for(v=new Map,A=new Array(w+1),f=w;f>=d;f--)_=u[f],a=v.get(_),A[f]=a===void 0?-1:a,v.set(_,f);for(a=d;a<=m;a++)_=s[a],f=v.get(_),f!==void 0&&f!==-1?(L[f]=n[a],$[f]=r[a],i&&(T[f]=i[a]),f=A[f],v.set(_,f)):r[a]();for(f=d;f<c;f++)f in L?(n[f]=L[f],r[f]=$[f],i&&(i[f]=T[f],i[f](f))):n[f]=B(g);n=n.slice(0,o=c),s=u.slice(0)}return n});function g(c){if(r[f]=c,i){const[v,A]=pe(f);return i[f]=A,t(u[f],v)}return t(u[f])}}}function y(e,t){return D(()=>e(t||{}))}const ve=e=>`Stale read from <${e}>.`;function z(e){const t="fallback"in e&&{fallback:()=>e.fallback};return V(xe(()=>e.each,e.children,t||void 0))}function $e(e){const t=e.keyed,l=V(()=>e.when,void 0,{equals:(s,n)=>t?s===n:!s==!n});return V(()=>{const s=l();if(s){const n=e.children;return typeof n=="function"&&n.length>0?D(()=>n(t?s:()=>{if(!D(l))throw ve("Show");return e.when})):n}return e.fallback},void 0,void 0)}function be(e,t,l){let s=l.length,n=t.length,r=s,o=0,i=0,u=t[n-1].nextSibling,a=null;for(;o<n||i<r;){if(t[o]===l[i]){o++,i++;continue}for(;t[n-1]===l[r-1];)n--,r--;if(n===o){const f=r<s?i?l[i-1].nextSibling:l[r-i]:u;for(;i<r;)e.insertBefore(l[i++],f)}else if(r===i)for(;o<n;)(!a||!a.has(t[o]))&&t[o].remove(),o++;else if(t[o]===l[r-1]&&l[i]===t[n-1]){const f=t[--n].nextSibling;e.insertBefore(l[i++],t[o++].nextSibling),e.insertBefore(l[--r],f),t[n]=l[r]}else{if(!a){a=new Map;let g=i;for(;g<r;)a.set(l[g],g++)}const f=a.get(t[o]);if(f!=null)if(i<f&&f<r){let g=o,c=1,v;for(;++g<n&&g<r&&!((v=a.get(t[g]))==null||v!==f+c);)c++;if(c>f-i){const A=t[o];for(;i<f;)e.insertBefore(l[i++],A)}else e.replaceChild(l[i++],t[o++])}else o++;else t[o++].remove()}}}function Se(e,t,l,s={}){let n;return B(r=>{n=r,t===document?e():S(t,e(),t.firstChild?null:void 0,l)},s.owner),()=>{n(),t.textContent=""}}function C(e,t,l){let s;const n=()=>{const o=document.createElement("template");return o.innerHTML=e,l?o.content.firstChild.firstChild:o.content.firstChild},r=t?()=>D(()=>document.importNode(s||(s=n()),!0)):()=>(s||(s=n())).cloneNode(!0);return r.cloneNode=r,r}function b(e,t,l){l==null?e.removeAttribute(t):e.setAttribute(t,l)}function q(e,t){t==null?e.removeAttribute("class"):e.className=t}function S(e,t,l,s){if(l!==void 0&&!s&&(s=[]),typeof t!="function")return j(e,t,s,l);E(n=>j(e,t(),n,l),s)}function j(e,t,l,s,n){for(;typeof l=="function";)l=l();if(t===l)return l;const r=typeof t,o=s!==void 0;if(e=o&&l[0]&&l[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),o){let i=l[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),l=G(e,l,s,i)}else l!==""&&typeof l=="string"?l=e.firstChild.data=t:l=e.textContent=t;else if(t==null||r==="boolean")l=G(e,l,s);else{if(r==="function")return E(()=>{let i=t();for(;typeof i=="function";)i=i();l=j(e,i,l,s)}),()=>l;if(Array.isArray(t)){const i=[],u=l&&Array.isArray(l);if(Y(i,t,l,n))return E(()=>l=j(e,i,l,s,!0)),()=>l;if(i.length===0){if(l=G(e,l,s),o)return l}else u?l.length===0?J(e,i,s):be(e,l,i):(l&&G(e),J(e,i));l=i}else if(t.nodeType){if(Array.isArray(l)){if(o)return l=G(e,l,s,t);G(e,l,null,t)}else l==null||l===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);l=t}}return l}function Y(e,t,l,s){let n=!1;for(let r=0,o=t.length;r<o;r++){let i=t[r],u=l&&l[r],a;if(!(i==null||i===!0||i===!1))if((a=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))n=Y(e,i,u)||n;else if(a==="function")if(s){for(;typeof i=="function";)i=i();n=Y(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||n}else e.push(i),n=!0;else{const f=String(i);u&&u.nodeType===3&&u.data===f?e.push(u):e.push(document.createTextNode(f))}}return n}function J(e,t,l=null){for(let s=0,n=t.length;s<n;s++)e.insertBefore(t[s],l)}function G(e,t,l,s){if(l===void 0)return e.textContent="";const n=s||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const i=t[o];if(n!==i){const u=i.parentNode===e;!r&&!o?u?e.replaceChild(n,i):e.insertBefore(n,l):u&&i.remove()}else r=!0}}else e.insertBefore(n,l);return[n]}const _e="_layers_52ggs_1",Ae="_hover_52ggs_1",Ce={layers:_e,hover:Ae};var Le=C("<svg><filter filterUnits=userSpaceOnUse x=-10 y=-10 width=120 height=120><feDropShadow dx=0 dy=1 stddeviation=2 flood-opacity=0.2></feDropShadow><feDropShadow dx=0 dy=-1 stddeviation=2 flood-opacity=0.2></svg>",!1,!0),Pe=C("<svg><linearGradient x1=0% y1=0% x2=100% y2=0%><stop offset=0%></stop><stop offset=100%></svg>",!1,!0),Ee=C('<svg><g transform="translate(110, 60)"><circle cx=106 cy=-7 r=2 fill=url(#yellowGlowGradient) filter=url(#yellowGlowFilter)></circle><defs><linearGradient id=yellowGlowGradient x1=0% y1=0% x2=100% y2=0%><stop offset=0% stop-color=#ffeb00></stop><stop offset=100% stop-color=#ffffff></svg>',!1,!0),Te=C("<svg><g><path></path><path></path><path></path><text dominant-baseline=middle text-anchor=middle></text><defs></svg>",!1,!0),Ne=C('<svg viewBox="0 0 100 90"xmlns=http://www.w3.org/2000/svg>');const De=5,X=7,ee=({color:e,id:t})=>(()=>{var l=Le(),s=l.firstChild,n=s.nextSibling;return b(l,"id",t),b(s,"flood-color",e),b(n,"flood-color",e),l})(),Ie=({from:e,to:t,id:l})=>(()=>{var s=Pe(),n=s.firstChild,r=n.nextSibling;return b(s,"id",l),b(n,"stop-color",e),b(r,"stop-color",t),s})(),P=({text:e,textcolor:t,gradient:l,size:s,offset:n=[0,0,0],selected:r=!1})=>{const o=s,i=40*(s/100),u=De,a=`gradient-${Math.random().toString(36).substr(2,9)}`,f=`filter-${Math.random().toString(36).substr(2,9)}`,g=()=>`${Math.round((Math.random()*1+.1)*10)/10}s`;return console.log(s),(()=>{var c=Te(),v=c.firstChild,A=v.nextSibling,L=A.nextSibling,$=L.nextSibling,T=$.nextSibling;return`${s}px`!=null?c.style.setProperty("--size",`${s}px`):c.style.removeProperty("--size"),b(v,"d",`M0,${i/2+u} v${-u} L${o/2},0 L${o},${i/2} v${u} L${o/2},${i+u} Z`),b(v,"fill",`url(#${a})`),b(v,"filter",`url(#${f})`),b(A,"d",`M0,${i/2+u} v${-u} L${o/2},${i} v${u} Z`),b(L,"d",`M${o/2},${i+u} v${-u} L${o},${i/2} v${u} Z`),b($,"x",o/2),b($,"y",i/2),`${X*s/100}px`!=null?$.style.setProperty("font-size",`${X*s/100}px`):$.style.removeProperty("font-size"),`skew(-68deg, 22deg) translate(calc(-1px * ${s/100}), calc(-3px * ${s/100})) scaleY(0.5)`!=null?$.style.setProperty("transform",`skew(-68deg, 22deg) translate(calc(-1px * ${s/100}), calc(-3px * ${s/100})) scaleY(0.5)`):$.style.removeProperty("transform"),t!=null?$.style.setProperty("fill",t):$.style.removeProperty("fill"),S($,e),S(T,y(Ie,{id:a,get from(){return l[0]},get to(){return l[1]}}),null),S(T,y(ee,{id:f,get color(){return l[0]}}),null),S(c,y($e,{when:r,get children(){var d=Ee(),m=d.firstChild,w=m.nextSibling,_=w.firstChild;return S(w,y(ee,{id:"yellowGlowFilter",color:"#ffeb00"}),_),d}}),null),E(d=>{var m=`${n[0]}px`,w=`${n[1]-30}px`,_=`${n[2]}px`,M=g();return m!==d.e&&((d.e=m)!=null?c.style.setProperty("--offset-x",m):c.style.removeProperty("--offset-x")),w!==d.t&&((d.t=w)!=null?c.style.setProperty("--offset-y",w):c.style.removeProperty("--offset-y")),_!==d.a&&((d.a=_)!=null?c.style.setProperty("--offset-z",_):c.style.removeProperty("--offset-z")),M!==d.o&&((d.o=M)!=null?c.style.setProperty("animation-delay",M):c.style.removeProperty("animation-delay")),d},{e:void 0,t:void 0,a:void 0,o:void 0}),c})()},Ge=({children:e})=>(()=>{var t=Ne();return S(t,e),E(()=>b(t,"class",Ce.layers)),t})(),Me=()=>y(Ge,{get children(){return[y(P,{text:"Lorem ",textcolor:"white",gradient:["#7d14e6","#7d14e6"],offset:[0,100,0],size:100}),y(P,{text:"Lorem",textcolor:"white",gradient:["#7d14e6","#7d14e6"],offset:[0,80,0],size:100}),y(P,{text:"Lorem",textcolor:"black",gradient:["#ffeb00","#ffeb00"],offset:[0,60,0],size:100,selected:!0}),y(P,{text:"dolor ",gradient:["#9bd7ff","#9bd7ff"],textcolor:"black",offset:[52,50,0],size:48}),y(P,{text:"Lorem",gradient:["#9bd7ff","#9bd7ff"],textcolor:"black",offset:[0,50,0],size:48}),y(P,{text:"ipsum",gradient:["#9bd7ff","#9bd7ff"],textcolor:"black",offset:[26,60,0],size:48}),y(P,{text:"Lorem",textcolor:"white",gradient:["#7d14e6","#7d14e6"],offset:[0,20,0],size:100}),y(P,{text:"Lorem",textcolor:"white",gradient:["#7d14e6","#7d14e6"],offset:[0,0,0],size:100})]}}),Oe="_LayerText_1s6ya_1",Be="_DiagramContainer_1s6ya_26",qe="_DiagramItem_1s6ya_42",Q={LayerText:Oe,DiagramContainer:Be,DiagramItem:qe};var ke=C("<div><div><svg width=20 height=20><circle cx=10 cy=10 r=8 fill=url(#yellowGlowGradient)></circle></svg><h1>Lorem ipsum layer</h1></div> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.</p><div>"),Ue=C("<div><h2>"),Fe=C("<p>");const je=[{title:"Lorem",items:["lorem ipsum"]},{title:"ipsum",items:["lorem ipsum"]},{title:"dolor",items:["lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum"]}],Ke=()=>(()=>{var e=ke(),t=e.firstChild,l=t.nextSibling,s=l.nextSibling,n=s.nextSibling;return t.style.setProperty("display","flex"),t.style.setProperty("align-items","center"),t.style.setProperty("gap","10px"),S(n,y(z,{each:je,children:(r,o)=>(()=>{var i=Ue(),u=i.firstChild;return S(u,()=>r.title),S(i,y(z,{get each(){return r.items},children:(a,f)=>(()=>{var g=Fe();return S(g,a),E(()=>q(g,Q.DiagramItem)),g})()}),null),i})()})),E(r=>{var o=Q.LayerText,i=Q.DiagramContainer;return o!==r.e&&q(e,r.e=o),i!==r.t&&q(n,r.t=i),r},{e:void 0,t:void 0}),e})(),Re="_App_xklxa_1",Ze={App:Re};var He=C("<div>");const Qe=()=>(()=>{var e=He();return S(e,y(Me,{}),null),S(e,y(Ke,{}),null),E(()=>q(e,Ze.App)),e})(),Ve=document.getElementById("root");Se(()=>y(Qe,{}),Ve);