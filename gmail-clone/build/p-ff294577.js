let e,t,n=null,l=!1;const s="undefined"!=typeof window?window:{},o=s.document||{head:{}},i={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),u="http://www.w3.org/1999/xlink",a=new WeakMap,f=e=>"sc-"+e.o,y={},p=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,s=null,o=!1,i=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!p(l))&&(l+=""),o&&i?r[r.length-1].i+=l:r.push(o?h(null,l):l),i=o)};if(c(n),t){t.key&&(s=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,r,m);const u=h(e,null);return u.u=t,r.length>0&&(u.p=r),u.$=s,u},h=(e,t)=>({t:0,h:e,i:t,m:null,p:null,u:null,$:null}),d={},m={forEach:(e,t)=>e.map(w).forEach(t),map:(e,t)=>e.map(w).map(t).map(b)},w=e=>({vattrs:e.u,vchildren:e.p,vkey:e.$,vname:e.v,vtag:e.h,vtext:e.i}),b=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),$(e.vtag,t,...e.vchildren||[])}const t=h(e.vtag,e.vtext);return t.u=e.vattrs,t.p=e.vchildren,t.$=e.vkey,t.v=e.vname,t},v=(e,t,n,l,o,r)=>{if(n!==l){let c=X(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,s=S(n),o=S(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(c||"o"!==t[0]||"n"!==t[1]){const s=p(l);if((c||s&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}let i=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,i=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(i?e.removeAttributeNS(u,t):e.removeAttribute(t)):(!c||4&r||o)&&!s&&(l=!0===l?"":l,i?e.setAttributeNS(u,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):X(s,a)?a.slice(2):a[2]+t.slice(3),n&&i.rel(e,t,n,!1),l&&i.ael(e,t,l,!1)}},g=/\s/,S=e=>e?e.split(g):[],k=(e,t,n,l)=>{const s=11===t.m.nodeType&&t.m.host?t.m.host:t.m,o=e&&e.u||y,i=t.u||y;for(l in o)l in i||v(s,l,o[l],void 0,n,t.t);for(l in i)v(s,l,o[l],i[l],n,t.t)},j=(t,n,l)=>{let s,i,r=n.p[l],c=0;if(null!==r.i)s=r.m=o.createTextNode(r.i);else if(s=r.m=o.createElement(r.h),k(null,r,!1),null!=e&&s["s-si"]!==e&&s.classList.add(s["s-si"]=e),r.p)for(c=0;c<r.p.length;++c)i=j(t,r,c),i&&s.appendChild(i);return s},M=(e,n,l,s,o,i)=>{let r,c=e;for(c.shadowRoot&&c.tagName===t&&(c=c.shadowRoot);o<=i;++o)s[o]&&(r=j(null,l,o),r&&(s[o].m=r,c.insertBefore(r,n)))},O=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.m,E(l),s.remove())},x=(e,t)=>e.h===t.h&&e.$===t.$,C=(e,t)=>{const n=t.m=e.m,l=e.p,s=t.p,o=t.i;null===o?("slot"===t.h||k(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o,i=0,r=0,c=0,u=0,a=t.length-1,f=t[0],y=t[a],p=l.length-1,$=l[0],h=l[p];for(;i<=a&&r<=p;)if(null==f)f=t[++i];else if(null==y)y=t[--a];else if(null==$)$=l[++r];else if(null==h)h=l[--p];else if(x(f,$))C(f,$),f=t[++i],$=l[++r];else if(x(y,h))C(y,h),y=t[--a],h=l[--p];else if(x(f,h))C(f,h),e.insertBefore(f.m,y.m.nextSibling),f=t[++i],h=l[--p];else if(x(y,$))C(y,$),e.insertBefore(y.m,f.m),y=t[--a],$=l[++r];else{for(c=-1,u=i;u<=a;++u)if(t[u]&&null!==t[u].$&&t[u].$===$.$){c=u;break}c>=0?(o=t[c],o.h!==$.h?s=j(t&&t[r],n,c):(C(o,$),t[c]=void 0,s=o.m),$=l[++r]):(s=j(t&&t[r],n,r),$=l[++r]),s&&f.m.parentNode.insertBefore(s,f.m)}i>a?M(e,null==l[p+1]?null:l[p+1].m,n,l,r,p):r>p&&O(t,i,a)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),M(n,null,t,s,0,s.length-1)):null!==l&&O(l,0,l.length-1)):e.i!==o&&(n.data=o)},E=e=>{e.u&&e.u.ref&&e.u.ref(null),e.p&&e.p.map(E)},L=(e,t,n)=>{const l=(e=>J(e).g)(e);return{emit:e=>P(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},P=(e,t,n)=>{const l=i.ce(t,n);return e.dispatchEvent(l),l},R=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},T=(e,t)=>{if(e.t|=16,!(4&e.t))return R(e,e.k),ce((()=>U(e,t)));e.t|=512},U=(e,t)=>{const n=e.j;let l;return t&&(l=V(n,"componentWillLoad")),_(l,(()=>W(e,n,t)))},W=async(e,t,n)=>{const l=e.g,s=l["s-rc"];n&&(e=>{const t=e.M,n=e.g,l=t.t,s=((e,t)=>{let n=f(t),l=te.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=a.get(e=e.head||e);s||a.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);A(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>q(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},A=(l,s)=>{try{n=s,s=s.render(),l.t&=-17,l.t|=2,((n,l)=>{const s=n.g,o=n.O||h(null,null),i=(e=>e&&e.h===d)(l)?l:$(null,null,l);t=s.tagName,i.h=null,i.t|=4,n.O=i,i.m=o.m=s.shadowRoot||s,e=s["s-sc"],C(o,i)})(l,s)}catch(e){Y(e,l.g)}return n=null,null},H=()=>n,q=e=>{const t=e.g,n=e.k;64&e.t||(e.t|=64,z(t),e.C(t),n||N()),e.S&&(e.S(),e.S=void 0),512&e.t&&re((()=>T(e,!1))),e.t&=-517},F=e=>{{const t=J(e),n=t.g.isConnected;return n&&2==(18&t.t)&&T(t,!1),n}},N=()=>{z(o.documentElement),re((()=>P(s,"appload",{detail:{namespace:"app"}})))},V=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){Y(e)}},_=(e,t)=>e&&e.then?e.then(t):t(),z=e=>e.classList.add("hydrated"),B=(e,t,n)=>{if(t.L){const l=Object.entries(t.L),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>J(this).P.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=J(e),o=s.P.get(t),i=s.t,r=s.j;n=((e,t)=>null==e||p(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,l.L[t][0]),8&i&&void 0!==o||n===o||(s.P.set(t,n),r&&2==(18&i)&&T(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){i.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},D=(e,t={})=>{const n=[],l=t.exclude||[],r=s.customElements,u=o.head,a=u.querySelector("meta[charset]"),y=o.createElement("style"),p=[];let $,h=!0;Object.assign(i,t),i.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>{e[1].map((t=>{const s={t:t[0],o:t[1],L:t[2],R:t[3]};s.L=t[2];const o=s.o,u=class extends HTMLElement{constructor(e){super(e),Q(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){$&&(clearTimeout($),$=null),h?p.push(this):i.jmp((()=>(e=>{if(0==(1&i.t)){const t=J(e),n=t.M,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){R(t,t.k=n);break}}n.L&&Object.entries(n.L).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=ee(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(B(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){Y(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=f(n);if(!te.has(t)){const l=()=>{};((e,t,n)=>{let l=te.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,te.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.k,i=()=>T(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,n)}l()}})(this)))}disconnectedCallback(){i.jmp((()=>{}))}componentOnReady(){return J(this).T}};s.U=e[0],l.includes(o)||r.get(o)||(n.push(o),r.define(o,B(u,s,1)))}))})),y.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",y.setAttribute("data-styles",""),u.insertBefore(y,a?a.nextSibling:u.firstChild),h=!1,p.length?p.map((e=>e.connectedCallback())):i.jmp((()=>$=setTimeout(N,30)))},G=e=>{const t=new URL(e,i.l);return t.origin!==s.location.origin?t.href:t.pathname},I=new WeakMap,J=e=>I.get(e),K=(e,t)=>I.set(t.j=e,t),Q=(e,t)=>{const n={t:0,g:e,M:t,P:new Map};return n.T=new Promise((e=>n.C=e)),e["s-p"]=[],e["s-rc"]=[],I.set(e,n)},X=(e,t)=>t in e,Y=(e,t)=>(0,console.error)(e,t),Z=new Map,ee=e=>{const t=e.o.replace(/-/g,"_"),n=e.U,l=Z.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(Z.set(n,e),e[t])),Y)},te=new Map,ne=[],le=[],se=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&i.t?re(ie):i.raf(ie))},oe=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){Y(e)}e.length=0},ie=()=>{oe(ne),oe(le),(l=ne.length>0)&&i.raf(ie)},re=e=>r().then(e),ce=se(le,!0);export{d as H,G as a,D as b,L as c,F as f,H as g,$ as h,r as p,K as r,ce as w}