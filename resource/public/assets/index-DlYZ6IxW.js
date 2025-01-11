const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/trace-mapping.umd-CPzQizkX.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/browser-s9dlvK3E.js","assets/babel-CQNmCINH.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const m of r)if(m.type==="childList")for(const a of m.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const m={};return r.integrity&&(m.integrity=r.integrity),r.referrerPolicy&&(m.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?m.credentials="include":r.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function l(r){if(r.ep)return;r.ep=!0;const m=o(r);fetch(r.href,m)}})();var w=(t=>(t.READY="ready",t.LOG="log",t.RUN_START="run_start",t.ENVIRONMENT_STATUS="environment_status",t.ENVIRONMENT_ERROR="environment_error",t.INSTRUMENT="instrument",t.OUTPUT="output",t.ERROR="error",t.RUN_COMPLETE="run_complete",t.FETCH_REQUEST="fetch_request",t))(w||{}),S=(t=>(t[t.INITIALIZING=0]="INITIALIZING",t[t.INSTALLING_PACKAGES=1]="INSTALLING_PACKAGES",t[t.RUNNING_CODE=2]="RUNNING_CODE",t))(S||{}),h=(t=>(t.RUN_CODE="run",t.STOP_CODE="stop",t.FETCH_RESPONSE="fetch_response",t.PREPARE_ENVIRONMENT="prepare_environment",t))(h||{});const B=new URLSearchParams(window.location.search);B.get("isStorybook");const G="serviceWorker"in navigator&&B.get("enableServiceWorker")==="true",F="root",tt=()=>document.getElementById(F),$=()=>{const t=tt();t==null||t.remove()},et=()=>{$();const t=document.createElement("iframe");return t.id=F,t.src="/blank.html",document.body.appendChild(t),t},rt=(t,...e)=>{},nt="fetch-confirmation-channel",j=new Set,ot=t=>{j.add(t)};let M=new MessageChannel;const it=()=>"https://chatgpt.com",y=t=>{const e=new MessageChannel;window.parent.postMessage(t,'*',[e.port2]),M=e,M.port1.onmessage=at},at=async t=>{const{data:e}=t;for(const o of j)o(e)},v=new BroadcastChannel(nt),st=()=>{v.postMessage({type:"flush"})};v.addEventListener("message",t=>{const{data:e}=t;t.data.type==="request"&&(y({...e,type:w.FETCH_REQUEST}),t.stopImmediatePropagation())});const lt=(t,e)=>v.postMessage({type:"response",requestId:t,isApproved:e}),O=new Map,f={log:(t,...e)=>{rt(t,...e)},error:(t,e)=>{console.error("[sandbox]",t,e),y({type:w.INSTRUMENT,instrument:{type:"error",message:t,error:e}})},count:(t,e)=>{y({type:w.INSTRUMENT,instrument:{type:"count",label:t,count:e}})},time:t=>{O.has(t),O.set(t,performance.now())},timeEnd:t=>{if(!O.has(t))return;const e=performance.now(),o=e-(O.get(t)??e);O.delete(t),y({type:w.INSTRUMENT,instrument:{type:"perf",label:t,time:o}})}},mt=({doc:t,onMessage:e,transformPosition:o})=>{const l=t.contentWindow;if(!l||!("console"in l))return;const r=(a,s)=>(o==null?void 0:o({line:a,column:s}).line)??a;l.addEventListener("error",({lineno:a,colno:s,error:d,message:u})=>{var p;const c=r(a,s);let i="",_=[];"name"in d&&"stack"in d&&(i=d.name,_=((p=d.stack)==null?void 0:p.split(`
`).slice(1))??[]),e({type:w.ERROR,error:{line:c,message:u,name:i,stack:_},line:c})},{passive:!0,capture:!0});const m=l.console;m.error=a=>{var _;const s=a.stack.split(`
`),d=(_=s[1]||s[0])==null?void 0:_.trim().match(/(\d+):(\d+)/),u=parseInt((d==null?void 0:d.at(1))??""),c=parseInt((d==null?void 0:d.at(2))??""),i=r(u,c);e({type:w.ERROR,line:i,error:{line:i,message:a.message,name:a.name,stack:[]}})},m.log=(...a)=>{var E;const u=(new Error().stack??"").split(`
`),c=(E=u[2]||u[1])==null?void 0:E.trim().match(/(\d+):(\d+)/),i=parseInt((c==null?void 0:c.at(1))??""),_=parseInt((c==null?void 0:c.at(2))??""),p=r(i,_);e({type:w.LOG,level:"info",line:p,log:a})}},W=({html:t,transformPosition:e,onMessage:o,expectReadySignal:l})=>{f.time("html.evaluation");const r=et();r.onload=()=>{if(mt({doc:r,transformPosition:e,onMessage:o}),!r.contentDocument)return;if(r.contentDocument.open(),r.contentDocument.write(t),r.contentDocument.close(),!l){requestAnimationFrame(()=>{requestAnimationFrame(()=>{f.timeEnd("html.evaluation"),o({type:w.ENVIRONMENT_STATUS,status:S.RUNNING_CODE})})});return}let m=null;const a=()=>{m==null||m.disconnect(),f.timeEnd("html.evaluation"),o({type:w.ENVIRONMENT_STATUS,status:S.RUNNING_CODE})},s=r.contentDocument.documentElement;m=new MutationObserver(d=>{for(const u of d)if(u.attributeName==="data-ready"&&s.getAttribute("data-ready")==="true"){a();break}}),m.observe(s,{attributes:!0}),s.getAttribute("data-ready")==="true"&&a()}};function dt(t){return new Worker("/assets/python-worker-B2Zc4rN5.js",{type:"module",name:t==null?void 0:t.name})}let x=null;const ct=()=>{const t=new dt;return new Promise(e=>{t.onmessage=o=>{o.data.type===w.READY&&e(t)}})},K=async(t,e)=>(x||(x=await ct()),new Promise((o,l)=>{if(!x)return l();f.time("python.evaluation"),x.postMessage({code:t}),x.onmessage=r=>{e(r.data),r.data.type===w.RUN_COMPLETE&&(f.timeEnd("python.evaluation"),o(r.data))}})),ut=async()=>K("",()=>{}),wt=()=>{try{x==null||x.terminate()}finally{x=null}},_t="modulepreload",pt=function(t){return"/"+t},H={},n=function(e,o,l){let r=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(o.map(d=>{if(d=pt(d),d in H)return;H[d]=!0;const u=d.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${c}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":_t,u||(i.as="script"),i.crossOrigin="",i.href=d,s&&i.setAttribute("nonce",s),document.head.appendChild(i),u)return new Promise((_,p)=>{i.addEventListener("load",_),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${d}`)))})}))}function m(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return r.then(a=>{for(const s of a||[])s.status==="rejected"&&m(s.reason);return e().catch(m)})},ft=async t=>{const{TraceMap:e,originalPositionFor:o}=await n(async()=>{const{TraceMap:r,originalPositionFor:m}=await import("./trace-mapping.umd-CPzQizkX.js").then(a=>a.t);return{TraceMap:r,originalPositionFor:m}},__vite__mapDeps([0,1]));f.time("source_maps.create");const l=t.map(r=>new e(r));return f.timeEnd("source_maps.create"),r=>{try{let m=r.line,a=r.column;for(const s of l)m!=null&&a!=null&&({line:m,column:a}=o(s,{line:m,column:a}));return{line:m,column:a}}catch{return{line:null,column:null}}}},A="user-component.js";let g=null;const k="0.24.2",q=async()=>{if(g)return g;g=await n(()=>import("./browser-s9dlvK3E.js").then(t=>t.b),__vite__mapDeps([2,1]));try{await g.initialize({wasmURL:`https://cdn.jsdelivr.net/npm/esbuild-wasm@${k}/esbuild.wasm`,worker:!1})}catch{await g.initialize({wasmURL:`https://unpkg.com/esbuild-wasm@${k}/esbuild.wasm`,worker:!1})}return g},yt=`
/*
! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  letter-spacing: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

:root {
  --background: 0 0% 100%;
  --foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 47.4% 11.2%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 47.4% 11.2%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 100% 50%;
  --destructive-foreground: 210 40% 98%;
  --ring: 215 20.2% 65.1%;
  --radius: 0.5rem;
  /* For https://ui.shadcn.com/docs/components/chart */
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
  /* For https://ui.shadcn.com/docs/components/sidebar */
  --sidebar-background: 0 0% 98%;
  --sidebar-foreground: 240 5.3% 26.1%;
  --sidebar-primary: 240 5.9% 10%;
  --sidebar-primary-foreground: 0 0% 98%;
  --sidebar-accent: 240 4.8% 95.9%;
  --sidebar-accent-foreground: 240 5.9% 10%;
  --sidebar-border: 220 13% 91%;
  --sidebar-ring: 217.2 91.2% 59.8%;
}

* {
  border-color: hsl(var(--border));
}

body {
  background-color: hsl(var(--background));
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: hsl(var(--foreground));
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8,0,1,1);
  }

  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.animate-none {
  animation: none;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes pulse {
  50% {
    opacity: .5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.delay-0 {
  transition-delay: 0s;
}

.delay-100 {
  transition-delay: 100ms;
}

.delay-1000 {
  transition-delay: 1000ms;
}

.delay-150 {
  transition-delay: 150ms;
}

.delay-200 {
  transition-delay: 200ms;
}

.delay-300 {
  transition-delay: 300ms;
}

.delay-500 {
  transition-delay: 500ms;
}

.delay-700 {
  transition-delay: 700ms;
}

.delay-75 {
  transition-delay: 75ms;
}

.duration-0 {
  transition-duration: 0s;
}

.duration-100 {
  transition-duration: 100ms;
}

.duration-1000 {
  transition-duration: 1000ms;
}

.duration-150 {
  transition-duration: 150ms;
}

.duration-200 {
  transition-duration: 200ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.duration-700 {
  transition-duration: 700ms;
}

.duration-75 {
  transition-duration: 75ms;
}

.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.ease-linear {
  transition-timing-function: linear;
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

@keyframes enter {
  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}

@keyframes exit {
  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}

.animate-in {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}

.animate-out {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}

.fade-in-0 {
  --tw-enter-opacity: 0;
}

.fade-in-10 {
  --tw-enter-opacity: 0.1;
}

.fade-in-100 {
  --tw-enter-opacity: 1;
}

.fade-in-15 {
  --tw-enter-opacity: 0.15;
}

.fade-in-20 {
  --tw-enter-opacity: 0.2;
}

.fade-in-25 {
  --tw-enter-opacity: 0.25;
}

.fade-in-30 {
  --tw-enter-opacity: 0.3;
}

.fade-in-35 {
  --tw-enter-opacity: 0.35;
}

.fade-in-40 {
  --tw-enter-opacity: 0.4;
}

.fade-in-45 {
  --tw-enter-opacity: 0.45;
}

.fade-in-5 {
  --tw-enter-opacity: 0.05;
}

.fade-in-50 {
  --tw-enter-opacity: 0.5;
}

.fade-in-55 {
  --tw-enter-opacity: 0.55;
}

.fade-in-60 {
  --tw-enter-opacity: 0.6;
}

.fade-in-65 {
  --tw-enter-opacity: 0.65;
}

.fade-in-70 {
  --tw-enter-opacity: 0.7;
}

.fade-in-75 {
  --tw-enter-opacity: 0.75;
}

.fade-in-80 {
  --tw-enter-opacity: 0.8;
}

.fade-in-85 {
  --tw-enter-opacity: 0.85;
}

.fade-in-90 {
  --tw-enter-opacity: 0.9;
}

.fade-in-95 {
  --tw-enter-opacity: 0.95;
}

.fade-out-0 {
  --tw-exit-opacity: 0;
}

.fade-out-10 {
  --tw-exit-opacity: 0.1;
}

.fade-out-100 {
  --tw-exit-opacity: 1;
}

.fade-out-15 {
  --tw-exit-opacity: 0.15;
}

.fade-out-20 {
  --tw-exit-opacity: 0.2;
}

.fade-out-25 {
  --tw-exit-opacity: 0.25;
}

.fade-out-30 {
  --tw-exit-opacity: 0.3;
}

.fade-out-35 {
  --tw-exit-opacity: 0.35;
}

.fade-out-40 {
  --tw-exit-opacity: 0.4;
}

.fade-out-45 {
  --tw-exit-opacity: 0.45;
}

.fade-out-5 {
  --tw-exit-opacity: 0.05;
}

.fade-out-50 {
  --tw-exit-opacity: 0.5;
}

.fade-out-55 {
  --tw-exit-opacity: 0.55;
}

.fade-out-60 {
  --tw-exit-opacity: 0.6;
}

.fade-out-65 {
  --tw-exit-opacity: 0.65;
}

.fade-out-70 {
  --tw-exit-opacity: 0.7;
}

.fade-out-75 {
  --tw-exit-opacity: 0.75;
}

.fade-out-80 {
  --tw-exit-opacity: 0.8;
}

.fade-out-85 {
  --tw-exit-opacity: 0.85;
}

.fade-out-90 {
  --tw-exit-opacity: 0.9;
}

.fade-out-95 {
  --tw-exit-opacity: 0.95;
}

.zoom-in-0 {
  --tw-enter-scale: 0;
}

.zoom-in-100 {
  --tw-enter-scale: 1;
}

.zoom-in-105 {
  --tw-enter-scale: 1.05;
}

.zoom-in-110 {
  --tw-enter-scale: 1.1;
}

.zoom-in-125 {
  --tw-enter-scale: 1.25;
}

.zoom-in-150 {
  --tw-enter-scale: 1.5;
}

.zoom-in-50 {
  --tw-enter-scale: .5;
}

.zoom-in-75 {
  --tw-enter-scale: .75;
}

.zoom-in-90 {
  --tw-enter-scale: .9;
}

.zoom-in-95 {
  --tw-enter-scale: .95;
}

.zoom-out-0 {
  --tw-exit-scale: 0;
}

.zoom-out-100 {
  --tw-exit-scale: 1;
}

.zoom-out-105 {
  --tw-exit-scale: 1.05;
}

.zoom-out-110 {
  --tw-exit-scale: 1.1;
}

.zoom-out-125 {
  --tw-exit-scale: 1.25;
}

.zoom-out-150 {
  --tw-exit-scale: 1.5;
}

.zoom-out-50 {
  --tw-exit-scale: .5;
}

.zoom-out-75 {
  --tw-exit-scale: .75;
}

.zoom-out-90 {
  --tw-exit-scale: .9;
}

.zoom-out-95 {
  --tw-exit-scale: .95;
}

.spin-in-0 {
  --tw-enter-rotate: 0deg;
}

.spin-in-1 {
  --tw-enter-rotate: 1deg;
}

.spin-in-12 {
  --tw-enter-rotate: 12deg;
}

.spin-in-180 {
  --tw-enter-rotate: 180deg;
}

.spin-in-2 {
  --tw-enter-rotate: 2deg;
}

.spin-in-3 {
  --tw-enter-rotate: 3deg;
}

.spin-in-45 {
  --tw-enter-rotate: 45deg;
}

.spin-in-6 {
  --tw-enter-rotate: 6deg;
}

.spin-in-90 {
  --tw-enter-rotate: 90deg;
}

.spin-out-0 {
  --tw-exit-rotate: 0deg;
}

.spin-out-1 {
  --tw-exit-rotate: 1deg;
}

.spin-out-12 {
  --tw-exit-rotate: 12deg;
}

.spin-out-180 {
  --tw-exit-rotate: 180deg;
}

.spin-out-2 {
  --tw-exit-rotate: 2deg;
}

.spin-out-3 {
  --tw-exit-rotate: 3deg;
}

.spin-out-45 {
  --tw-exit-rotate: 45deg;
}

.spin-out-6 {
  --tw-exit-rotate: 6deg;
}

.spin-out-90 {
  --tw-exit-rotate: 90deg;
}

.slide-in-from-bottom {
  --tw-enter-translate-y: 100%;
}

.slide-in-from-bottom-0 {
  --tw-enter-translate-y: 0px;
}

.slide-in-from-bottom-0.5 {
  --tw-enter-translate-y: 0.125rem;
}

.slide-in-from-bottom-1 {
  --tw-enter-translate-y: 0.25rem;
}

.slide-in-from-bottom-1.5 {
  --tw-enter-translate-y: 0.375rem;
}

.slide-in-from-bottom-1/2 {
  --tw-enter-translate-y: 50%;
}

.slide-in-from-bottom-1/3 {
  --tw-enter-translate-y: 33.333333%;
}

.slide-in-from-bottom-1/4 {
  --tw-enter-translate-y: 25%;
}

.slide-in-from-bottom-10 {
  --tw-enter-translate-y: 2.5rem;
}

.slide-in-from-bottom-11 {
  --tw-enter-translate-y: 2.75rem;
}

.slide-in-from-bottom-12 {
  --tw-enter-translate-y: 3rem;
}

.slide-in-from-bottom-14 {
  --tw-enter-translate-y: 3.5rem;
}

.slide-in-from-bottom-16 {
  --tw-enter-translate-y: 4rem;
}

.slide-in-from-bottom-2 {
  --tw-enter-translate-y: 0.5rem;
}

.slide-in-from-bottom-2.5 {
  --tw-enter-translate-y: 0.625rem;
}

.slide-in-from-bottom-2/3 {
  --tw-enter-translate-y: 66.666667%;
}

.slide-in-from-bottom-2/4 {
  --tw-enter-translate-y: 50%;
}

.slide-in-from-bottom-20 {
  --tw-enter-translate-y: 5rem;
}

.slide-in-from-bottom-24 {
  --tw-enter-translate-y: 6rem;
}

.slide-in-from-bottom-28 {
  --tw-enter-translate-y: 7rem;
}

.slide-in-from-bottom-3 {
  --tw-enter-translate-y: 0.75rem;
}

.slide-in-from-bottom-3.5 {
  --tw-enter-translate-y: 0.875rem;
}

.slide-in-from-bottom-3/4 {
  --tw-enter-translate-y: 75%;
}

.slide-in-from-bottom-32 {
  --tw-enter-translate-y: 8rem;
}

.slide-in-from-bottom-36 {
  --tw-enter-translate-y: 9rem;
}

.slide-in-from-bottom-4 {
  --tw-enter-translate-y: 1rem;
}

.slide-in-from-bottom-40 {
  --tw-enter-translate-y: 10rem;
}

.slide-in-from-bottom-44 {
  --tw-enter-translate-y: 11rem;
}

.slide-in-from-bottom-48 {
  --tw-enter-translate-y: 12rem;
}

.slide-in-from-bottom-5 {
  --tw-enter-translate-y: 1.25rem;
}

.slide-in-from-bottom-52 {
  --tw-enter-translate-y: 13rem;
}

.slide-in-from-bottom-56 {
  --tw-enter-translate-y: 14rem;
}

.slide-in-from-bottom-6 {
  --tw-enter-translate-y: 1.5rem;
}

.slide-in-from-bottom-60 {
  --tw-enter-translate-y: 15rem;
}

.slide-in-from-bottom-64 {
  --tw-enter-translate-y: 16rem;
}

.slide-in-from-bottom-7 {
  --tw-enter-translate-y: 1.75rem;
}

.slide-in-from-bottom-72 {
  --tw-enter-translate-y: 18rem;
}

.slide-in-from-bottom-8 {
  --tw-enter-translate-y: 2rem;
}

.slide-in-from-bottom-80 {
  --tw-enter-translate-y: 20rem;
}

.slide-in-from-bottom-9 {
  --tw-enter-translate-y: 2.25rem;
}

.slide-in-from-bottom-96 {
  --tw-enter-translate-y: 24rem;
}

.slide-in-from-bottom-full {
  --tw-enter-translate-y: 100%;
}

.slide-in-from-bottom-px {
  --tw-enter-translate-y: 1px;
}

.slide-in-from-left {
  --tw-enter-translate-x: -100%;
}

.slide-in-from-left-0 {
  --tw-enter-translate-x: -0px;
}

.slide-in-from-left-0.5 {
  --tw-enter-translate-x: -0.125rem;
}

.slide-in-from-left-1 {
  --tw-enter-translate-x: -0.25rem;
}

.slide-in-from-left-1.5 {
  --tw-enter-translate-x: -0.375rem;
}

.slide-in-from-left-1/2 {
  --tw-enter-translate-x: -50%;
}

.slide-in-from-left-1/3 {
  --tw-enter-translate-x: -33.333333%;
}

.slide-in-from-left-1/4 {
  --tw-enter-translate-x: -25%;
}

.slide-in-from-left-10 {
  --tw-enter-translate-x: -2.5rem;
}

.slide-in-from-left-11 {
  --tw-enter-translate-x: -2.75rem;
}

.slide-in-from-left-12 {
  --tw-enter-translate-x: -3rem;
}

.slide-in-from-left-14 {
  --tw-enter-translate-x: -3.5rem;
}

.slide-in-from-left-16 {
  --tw-enter-translate-x: -4rem;
}

.slide-in-from-left-2 {
  --tw-enter-translate-x: -0.5rem;
}

.slide-in-from-left-2.5 {
  --tw-enter-translate-x: -0.625rem;
}

.slide-in-from-left-2/3 {
  --tw-enter-translate-x: -66.666667%;
}

.slide-in-from-left-2/4 {
  --tw-enter-translate-x: -50%;
}

.slide-in-from-left-20 {
  --tw-enter-translate-x: -5rem;
}

.slide-in-from-left-24 {
  --tw-enter-translate-x: -6rem;
}

.slide-in-from-left-28 {
  --tw-enter-translate-x: -7rem;
}

.slide-in-from-left-3 {
  --tw-enter-translate-x: -0.75rem;
}

.slide-in-from-left-3.5 {
  --tw-enter-translate-x: -0.875rem;
}

.slide-in-from-left-3/4 {
  --tw-enter-translate-x: -75%;
}

.slide-in-from-left-32 {
  --tw-enter-translate-x: -8rem;
}

.slide-in-from-left-36 {
  --tw-enter-translate-x: -9rem;
}

.slide-in-from-left-4 {
  --tw-enter-translate-x: -1rem;
}

.slide-in-from-left-40 {
  --tw-enter-translate-x: -10rem;
}

.slide-in-from-left-44 {
  --tw-enter-translate-x: -11rem;
}

.slide-in-from-left-48 {
  --tw-enter-translate-x: -12rem;
}

.slide-in-from-left-5 {
  --tw-enter-translate-x: -1.25rem;
}

.slide-in-from-left-52 {
  --tw-enter-translate-x: -13rem;
}

.slide-in-from-left-56 {
  --tw-enter-translate-x: -14rem;
}

.slide-in-from-left-6 {
  --tw-enter-translate-x: -1.5rem;
}

.slide-in-from-left-60 {
  --tw-enter-translate-x: -15rem;
}

.slide-in-from-left-64 {
  --tw-enter-translate-x: -16rem;
}

.slide-in-from-left-7 {
  --tw-enter-translate-x: -1.75rem;
}

.slide-in-from-left-72 {
  --tw-enter-translate-x: -18rem;
}

.slide-in-from-left-8 {
  --tw-enter-translate-x: -2rem;
}

.slide-in-from-left-80 {
  --tw-enter-translate-x: -20rem;
}

.slide-in-from-left-9 {
  --tw-enter-translate-x: -2.25rem;
}

.slide-in-from-left-96 {
  --tw-enter-translate-x: -24rem;
}

.slide-in-from-left-full {
  --tw-enter-translate-x: -100%;
}

.slide-in-from-left-px {
  --tw-enter-translate-x: -1px;
}

.slide-in-from-right {
  --tw-enter-translate-x: 100%;
}

.slide-in-from-right-0 {
  --tw-enter-translate-x: 0px;
}

.slide-in-from-right-0.5 {
  --tw-enter-translate-x: 0.125rem;
}

.slide-in-from-right-1 {
  --tw-enter-translate-x: 0.25rem;
}

.slide-in-from-right-1.5 {
  --tw-enter-translate-x: 0.375rem;
}

.slide-in-from-right-1/2 {
  --tw-enter-translate-x: 50%;
}

.slide-in-from-right-1/3 {
  --tw-enter-translate-x: 33.333333%;
}

.slide-in-from-right-1/4 {
  --tw-enter-translate-x: 25%;
}

.slide-in-from-right-10 {
  --tw-enter-translate-x: 2.5rem;
}

.slide-in-from-right-11 {
  --tw-enter-translate-x: 2.75rem;
}

.slide-in-from-right-12 {
  --tw-enter-translate-x: 3rem;
}

.slide-in-from-right-14 {
  --tw-enter-translate-x: 3.5rem;
}

.slide-in-from-right-16 {
  --tw-enter-translate-x: 4rem;
}

.slide-in-from-right-2 {
  --tw-enter-translate-x: 0.5rem;
}

.slide-in-from-right-2.5 {
  --tw-enter-translate-x: 0.625rem;
}

.slide-in-from-right-2/3 {
  --tw-enter-translate-x: 66.666667%;
}

.slide-in-from-right-2/4 {
  --tw-enter-translate-x: 50%;
}

.slide-in-from-right-20 {
  --tw-enter-translate-x: 5rem;
}

.slide-in-from-right-24 {
  --tw-enter-translate-x: 6rem;
}

.slide-in-from-right-28 {
  --tw-enter-translate-x: 7rem;
}

.slide-in-from-right-3 {
  --tw-enter-translate-x: 0.75rem;
}

.slide-in-from-right-3.5 {
  --tw-enter-translate-x: 0.875rem;
}

.slide-in-from-right-3/4 {
  --tw-enter-translate-x: 75%;
}

.slide-in-from-right-32 {
  --tw-enter-translate-x: 8rem;
}

.slide-in-from-right-36 {
  --tw-enter-translate-x: 9rem;
}

.slide-in-from-right-4 {
  --tw-enter-translate-x: 1rem;
}

.slide-in-from-right-40 {
  --tw-enter-translate-x: 10rem;
}

.slide-in-from-right-44 {
  --tw-enter-translate-x: 11rem;
}

.slide-in-from-right-48 {
  --tw-enter-translate-x: 12rem;
}

.slide-in-from-right-5 {
  --tw-enter-translate-x: 1.25rem;
}

.slide-in-from-right-52 {
  --tw-enter-translate-x: 13rem;
}

.slide-in-from-right-56 {
  --tw-enter-translate-x: 14rem;
}

.slide-in-from-right-6 {
  --tw-enter-translate-x: 1.5rem;
}

.slide-in-from-right-60 {
  --tw-enter-translate-x: 15rem;
}

.slide-in-from-right-64 {
  --tw-enter-translate-x: 16rem;
}

.slide-in-from-right-7 {
  --tw-enter-translate-x: 1.75rem;
}

.slide-in-from-right-72 {
  --tw-enter-translate-x: 18rem;
}

.slide-in-from-right-8 {
  --tw-enter-translate-x: 2rem;
}

.slide-in-from-right-80 {
  --tw-enter-translate-x: 20rem;
}

.slide-in-from-right-9 {
  --tw-enter-translate-x: 2.25rem;
}

.slide-in-from-right-96 {
  --tw-enter-translate-x: 24rem;
}

.slide-in-from-right-full {
  --tw-enter-translate-x: 100%;
}

.slide-in-from-right-px {
  --tw-enter-translate-x: 1px;
}

.slide-in-from-top {
  --tw-enter-translate-y: -100%;
}

.slide-in-from-top-0 {
  --tw-enter-translate-y: -0px;
}

.slide-in-from-top-0.5 {
  --tw-enter-translate-y: -0.125rem;
}

.slide-in-from-top-1 {
  --tw-enter-translate-y: -0.25rem;
}

.slide-in-from-top-1.5 {
  --tw-enter-translate-y: -0.375rem;
}

.slide-in-from-top-1/2 {
  --tw-enter-translate-y: -50%;
}

.slide-in-from-top-1/3 {
  --tw-enter-translate-y: -33.333333%;
}

.slide-in-from-top-1/4 {
  --tw-enter-translate-y: -25%;
}

.slide-in-from-top-10 {
  --tw-enter-translate-y: -2.5rem;
}

.slide-in-from-top-11 {
  --tw-enter-translate-y: -2.75rem;
}

.slide-in-from-top-12 {
  --tw-enter-translate-y: -3rem;
}

.slide-in-from-top-14 {
  --tw-enter-translate-y: -3.5rem;
}

.slide-in-from-top-16 {
  --tw-enter-translate-y: -4rem;
}

.slide-in-from-top-2 {
  --tw-enter-translate-y: -0.5rem;
}

.slide-in-from-top-2.5 {
  --tw-enter-translate-y: -0.625rem;
}

.slide-in-from-top-2/3 {
  --tw-enter-translate-y: -66.666667%;
}

.slide-in-from-top-2/4 {
  --tw-enter-translate-y: -50%;
}

.slide-in-from-top-20 {
  --tw-enter-translate-y: -5rem;
}

.slide-in-from-top-24 {
  --tw-enter-translate-y: -6rem;
}

.slide-in-from-top-28 {
  --tw-enter-translate-y: -7rem;
}

.slide-in-from-top-3 {
  --tw-enter-translate-y: -0.75rem;
}

.slide-in-from-top-3.5 {
  --tw-enter-translate-y: -0.875rem;
}

.slide-in-from-top-3/4 {
  --tw-enter-translate-y: -75%;
}

.slide-in-from-top-32 {
  --tw-enter-translate-y: -8rem;
}

.slide-in-from-top-36 {
  --tw-enter-translate-y: -9rem;
}

.slide-in-from-top-4 {
  --tw-enter-translate-y: -1rem;
}

.slide-in-from-top-40 {
  --tw-enter-translate-y: -10rem;
}

.slide-in-from-top-44 {
  --tw-enter-translate-y: -11rem;
}

.slide-in-from-top-48 {
  --tw-enter-translate-y: -12rem;
}

.slide-in-from-top-5 {
  --tw-enter-translate-y: -1.25rem;
}

.slide-in-from-top-52 {
  --tw-enter-translate-y: -13rem;
}

.slide-in-from-top-56 {
  --tw-enter-translate-y: -14rem;
}

.slide-in-from-top-6 {
  --tw-enter-translate-y: -1.5rem;
}

.slide-in-from-top-60 {
  --tw-enter-translate-y: -15rem;
}

.slide-in-from-top-64 {
  --tw-enter-translate-y: -16rem;
}

.slide-in-from-top-7 {
  --tw-enter-translate-y: -1.75rem;
}

.slide-in-from-top-72 {
  --tw-enter-translate-y: -18rem;
}

.slide-in-from-top-8 {
  --tw-enter-translate-y: -2rem;
}

.slide-in-from-top-80 {
  --tw-enter-translate-y: -20rem;
}

.slide-in-from-top-9 {
  --tw-enter-translate-y: -2.25rem;
}

.slide-in-from-top-96 {
  --tw-enter-translate-y: -24rem;
}

.slide-in-from-top-full {
  --tw-enter-translate-y: -100%;
}

.slide-in-from-top-px {
  --tw-enter-translate-y: -1px;
}

.slide-out-to-bottom {
  --tw-exit-translate-y: 100%;
}

.slide-out-to-bottom-0 {
  --tw-exit-translate-y: 0px;
}

.slide-out-to-bottom-0.5 {
  --tw-exit-translate-y: 0.125rem;
}

.slide-out-to-bottom-1 {
  --tw-exit-translate-y: 0.25rem;
}

.slide-out-to-bottom-1.5 {
  --tw-exit-translate-y: 0.375rem;
}

.slide-out-to-bottom-1/2 {
  --tw-exit-translate-y: 50%;
}

.slide-out-to-bottom-1/3 {
  --tw-exit-translate-y: 33.333333%;
}

.slide-out-to-bottom-1/4 {
  --tw-exit-translate-y: 25%;
}

.slide-out-to-bottom-10 {
  --tw-exit-translate-y: 2.5rem;
}

.slide-out-to-bottom-11 {
  --tw-exit-translate-y: 2.75rem;
}

.slide-out-to-bottom-12 {
  --tw-exit-translate-y: 3rem;
}

.slide-out-to-bottom-14 {
  --tw-exit-translate-y: 3.5rem;
}

.slide-out-to-bottom-16 {
  --tw-exit-translate-y: 4rem;
}

.slide-out-to-bottom-2 {
  --tw-exit-translate-y: 0.5rem;
}

.slide-out-to-bottom-2.5 {
  --tw-exit-translate-y: 0.625rem;
}

.slide-out-to-bottom-2/3 {
  --tw-exit-translate-y: 66.666667%;
}

.slide-out-to-bottom-2/4 {
  --tw-exit-translate-y: 50%;
}

.slide-out-to-bottom-20 {
  --tw-exit-translate-y: 5rem;
}

.slide-out-to-bottom-24 {
  --tw-exit-translate-y: 6rem;
}

.slide-out-to-bottom-28 {
  --tw-exit-translate-y: 7rem;
}

.slide-out-to-bottom-3 {
  --tw-exit-translate-y: 0.75rem;
}

.slide-out-to-bottom-3.5 {
  --tw-exit-translate-y: 0.875rem;
}

.slide-out-to-bottom-3/4 {
  --tw-exit-translate-y: 75%;
}

.slide-out-to-bottom-32 {
  --tw-exit-translate-y: 8rem;
}

.slide-out-to-bottom-36 {
  --tw-exit-translate-y: 9rem;
}

.slide-out-to-bottom-4 {
  --tw-exit-translate-y: 1rem;
}

.slide-out-to-bottom-40 {
  --tw-exit-translate-y: 10rem;
}

.slide-out-to-bottom-44 {
  --tw-exit-translate-y: 11rem;
}

.slide-out-to-bottom-48 {
  --tw-exit-translate-y: 12rem;
}

.slide-out-to-bottom-5 {
  --tw-exit-translate-y: 1.25rem;
}

.slide-out-to-bottom-52 {
  --tw-exit-translate-y: 13rem;
}

.slide-out-to-bottom-56 {
  --tw-exit-translate-y: 14rem;
}

.slide-out-to-bottom-6 {
  --tw-exit-translate-y: 1.5rem;
}

.slide-out-to-bottom-60 {
  --tw-exit-translate-y: 15rem;
}

.slide-out-to-bottom-64 {
  --tw-exit-translate-y: 16rem;
}

.slide-out-to-bottom-7 {
  --tw-exit-translate-y: 1.75rem;
}

.slide-out-to-bottom-72 {
  --tw-exit-translate-y: 18rem;
}

.slide-out-to-bottom-8 {
  --tw-exit-translate-y: 2rem;
}

.slide-out-to-bottom-80 {
  --tw-exit-translate-y: 20rem;
}

.slide-out-to-bottom-9 {
  --tw-exit-translate-y: 2.25rem;
}

.slide-out-to-bottom-96 {
  --tw-exit-translate-y: 24rem;
}

.slide-out-to-bottom-full {
  --tw-exit-translate-y: 100%;
}

.slide-out-to-bottom-px {
  --tw-exit-translate-y: 1px;
}

.slide-out-to-left {
  --tw-exit-translate-x: -100%;
}

.slide-out-to-left-0 {
  --tw-exit-translate-x: -0px;
}

.slide-out-to-left-0.5 {
  --tw-exit-translate-x: -0.125rem;
}

.slide-out-to-left-1 {
  --tw-exit-translate-x: -0.25rem;
}

.slide-out-to-left-1.5 {
  --tw-exit-translate-x: -0.375rem;
}

.slide-out-to-left-1/2 {
  --tw-exit-translate-x: -50%;
}

.slide-out-to-left-1/3 {
  --tw-exit-translate-x: -33.333333%;
}

.slide-out-to-left-1/4 {
  --tw-exit-translate-x: -25%;
}

.slide-out-to-left-10 {
  --tw-exit-translate-x: -2.5rem;
}

.slide-out-to-left-11 {
  --tw-exit-translate-x: -2.75rem;
}

.slide-out-to-left-12 {
  --tw-exit-translate-x: -3rem;
}

.slide-out-to-left-14 {
  --tw-exit-translate-x: -3.5rem;
}

.slide-out-to-left-16 {
  --tw-exit-translate-x: -4rem;
}

.slide-out-to-left-2 {
  --tw-exit-translate-x: -0.5rem;
}

.slide-out-to-left-2.5 {
  --tw-exit-translate-x: -0.625rem;
}

.slide-out-to-left-2/3 {
  --tw-exit-translate-x: -66.666667%;
}

.slide-out-to-left-2/4 {
  --tw-exit-translate-x: -50%;
}

.slide-out-to-left-20 {
  --tw-exit-translate-x: -5rem;
}

.slide-out-to-left-24 {
  --tw-exit-translate-x: -6rem;
}

.slide-out-to-left-28 {
  --tw-exit-translate-x: -7rem;
}

.slide-out-to-left-3 {
  --tw-exit-translate-x: -0.75rem;
}

.slide-out-to-left-3.5 {
  --tw-exit-translate-x: -0.875rem;
}

.slide-out-to-left-3/4 {
  --tw-exit-translate-x: -75%;
}

.slide-out-to-left-32 {
  --tw-exit-translate-x: -8rem;
}

.slide-out-to-left-36 {
  --tw-exit-translate-x: -9rem;
}

.slide-out-to-left-4 {
  --tw-exit-translate-x: -1rem;
}

.slide-out-to-left-40 {
  --tw-exit-translate-x: -10rem;
}

.slide-out-to-left-44 {
  --tw-exit-translate-x: -11rem;
}

.slide-out-to-left-48 {
  --tw-exit-translate-x: -12rem;
}

.slide-out-to-left-5 {
  --tw-exit-translate-x: -1.25rem;
}

.slide-out-to-left-52 {
  --tw-exit-translate-x: -13rem;
}

.slide-out-to-left-56 {
  --tw-exit-translate-x: -14rem;
}

.slide-out-to-left-6 {
  --tw-exit-translate-x: -1.5rem;
}

.slide-out-to-left-60 {
  --tw-exit-translate-x: -15rem;
}

.slide-out-to-left-64 {
  --tw-exit-translate-x: -16rem;
}

.slide-out-to-left-7 {
  --tw-exit-translate-x: -1.75rem;
}

.slide-out-to-left-72 {
  --tw-exit-translate-x: -18rem;
}

.slide-out-to-left-8 {
  --tw-exit-translate-x: -2rem;
}

.slide-out-to-left-80 {
  --tw-exit-translate-x: -20rem;
}

.slide-out-to-left-9 {
  --tw-exit-translate-x: -2.25rem;
}

.slide-out-to-left-96 {
  --tw-exit-translate-x: -24rem;
}

.slide-out-to-left-full {
  --tw-exit-translate-x: -100%;
}

.slide-out-to-left-px {
  --tw-exit-translate-x: -1px;
}

.slide-out-to-right {
  --tw-exit-translate-x: 100%;
}

.slide-out-to-right-0 {
  --tw-exit-translate-x: 0px;
}

.slide-out-to-right-0.5 {
  --tw-exit-translate-x: 0.125rem;
}

.slide-out-to-right-1 {
  --tw-exit-translate-x: 0.25rem;
}

.slide-out-to-right-1.5 {
  --tw-exit-translate-x: 0.375rem;
}

.slide-out-to-right-1/2 {
  --tw-exit-translate-x: 50%;
}

.slide-out-to-right-1/3 {
  --tw-exit-translate-x: 33.333333%;
}

.slide-out-to-right-1/4 {
  --tw-exit-translate-x: 25%;
}

.slide-out-to-right-10 {
  --tw-exit-translate-x: 2.5rem;
}

.slide-out-to-right-11 {
  --tw-exit-translate-x: 2.75rem;
}

.slide-out-to-right-12 {
  --tw-exit-translate-x: 3rem;
}

.slide-out-to-right-14 {
  --tw-exit-translate-x: 3.5rem;
}

.slide-out-to-right-16 {
  --tw-exit-translate-x: 4rem;
}

.slide-out-to-right-2 {
  --tw-exit-translate-x: 0.5rem;
}

.slide-out-to-right-2.5 {
  --tw-exit-translate-x: 0.625rem;
}

.slide-out-to-right-2/3 {
  --tw-exit-translate-x: 66.666667%;
}

.slide-out-to-right-2/4 {
  --tw-exit-translate-x: 50%;
}

.slide-out-to-right-20 {
  --tw-exit-translate-x: 5rem;
}

.slide-out-to-right-24 {
  --tw-exit-translate-x: 6rem;
}

.slide-out-to-right-28 {
  --tw-exit-translate-x: 7rem;
}

.slide-out-to-right-3 {
  --tw-exit-translate-x: 0.75rem;
}

.slide-out-to-right-3.5 {
  --tw-exit-translate-x: 0.875rem;
}

.slide-out-to-right-3/4 {
  --tw-exit-translate-x: 75%;
}

.slide-out-to-right-32 {
  --tw-exit-translate-x: 8rem;
}

.slide-out-to-right-36 {
  --tw-exit-translate-x: 9rem;
}

.slide-out-to-right-4 {
  --tw-exit-translate-x: 1rem;
}

.slide-out-to-right-40 {
  --tw-exit-translate-x: 10rem;
}

.slide-out-to-right-44 {
  --tw-exit-translate-x: 11rem;
}

.slide-out-to-right-48 {
  --tw-exit-translate-x: 12rem;
}

.slide-out-to-right-5 {
  --tw-exit-translate-x: 1.25rem;
}

.slide-out-to-right-52 {
  --tw-exit-translate-x: 13rem;
}

.slide-out-to-right-56 {
  --tw-exit-translate-x: 14rem;
}

.slide-out-to-right-6 {
  --tw-exit-translate-x: 1.5rem;
}

.slide-out-to-right-60 {
  --tw-exit-translate-x: 15rem;
}

.slide-out-to-right-64 {
  --tw-exit-translate-x: 16rem;
}

.slide-out-to-right-7 {
  --tw-exit-translate-x: 1.75rem;
}

.slide-out-to-right-72 {
  --tw-exit-translate-x: 18rem;
}

.slide-out-to-right-8 {
  --tw-exit-translate-x: 2rem;
}

.slide-out-to-right-80 {
  --tw-exit-translate-x: 20rem;
}

.slide-out-to-right-9 {
  --tw-exit-translate-x: 2.25rem;
}

.slide-out-to-right-96 {
  --tw-exit-translate-x: 24rem;
}

.slide-out-to-right-full {
  --tw-exit-translate-x: 100%;
}

.slide-out-to-right-px {
  --tw-exit-translate-x: 1px;
}

.slide-out-to-top {
  --tw-exit-translate-y: -100%;
}

.slide-out-to-top-0 {
  --tw-exit-translate-y: -0px;
}

.slide-out-to-top-0.5 {
  --tw-exit-translate-y: -0.125rem;
}

.slide-out-to-top-1 {
  --tw-exit-translate-y: -0.25rem;
}

.slide-out-to-top-1.5 {
  --tw-exit-translate-y: -0.375rem;
}

.slide-out-to-top-1/2 {
  --tw-exit-translate-y: -50%;
}

.slide-out-to-top-1/3 {
  --tw-exit-translate-y: -33.333333%;
}

.slide-out-to-top-1/4 {
  --tw-exit-translate-y: -25%;
}

.slide-out-to-top-10 {
  --tw-exit-translate-y: -2.5rem;
}

.slide-out-to-top-11 {
  --tw-exit-translate-y: -2.75rem;
}

.slide-out-to-top-12 {
  --tw-exit-translate-y: -3rem;
}

.slide-out-to-top-14 {
  --tw-exit-translate-y: -3.5rem;
}

.slide-out-to-top-16 {
  --tw-exit-translate-y: -4rem;
}

.slide-out-to-top-2 {
  --tw-exit-translate-y: -0.5rem;
}

.slide-out-to-top-2.5 {
  --tw-exit-translate-y: -0.625rem;
}

.slide-out-to-top-2/3 {
  --tw-exit-translate-y: -66.666667%;
}

.slide-out-to-top-2/4 {
  --tw-exit-translate-y: -50%;
}

.slide-out-to-top-20 {
  --tw-exit-translate-y: -5rem;
}

.slide-out-to-top-24 {
  --tw-exit-translate-y: -6rem;
}

.slide-out-to-top-28 {
  --tw-exit-translate-y: -7rem;
}

.slide-out-to-top-3 {
  --tw-exit-translate-y: -0.75rem;
}

.slide-out-to-top-3.5 {
  --tw-exit-translate-y: -0.875rem;
}

.slide-out-to-top-3/4 {
  --tw-exit-translate-y: -75%;
}

.slide-out-to-top-32 {
  --tw-exit-translate-y: -8rem;
}

.slide-out-to-top-36 {
  --tw-exit-translate-y: -9rem;
}

.slide-out-to-top-4 {
  --tw-exit-translate-y: -1rem;
}

.slide-out-to-top-40 {
  --tw-exit-translate-y: -10rem;
}

.slide-out-to-top-44 {
  --tw-exit-translate-y: -11rem;
}

.slide-out-to-top-48 {
  --tw-exit-translate-y: -12rem;
}

.slide-out-to-top-5 {
  --tw-exit-translate-y: -1.25rem;
}

.slide-out-to-top-52 {
  --tw-exit-translate-y: -13rem;
}

.slide-out-to-top-56 {
  --tw-exit-translate-y: -14rem;
}

.slide-out-to-top-6 {
  --tw-exit-translate-y: -1.5rem;
}

.slide-out-to-top-60 {
  --tw-exit-translate-y: -15rem;
}

.slide-out-to-top-64 {
  --tw-exit-translate-y: -16rem;
}

.slide-out-to-top-7 {
  --tw-exit-translate-y: -1.75rem;
}

.slide-out-to-top-72 {
  --tw-exit-translate-y: -18rem;
}

.slide-out-to-top-8 {
  --tw-exit-translate-y: -2rem;
}

.slide-out-to-top-80 {
  --tw-exit-translate-y: -20rem;
}

.slide-out-to-top-9 {
  --tw-exit-translate-y: -2.25rem;
}

.slide-out-to-top-96 {
  --tw-exit-translate-y: -24rem;
}

.slide-out-to-top-full {
  --tw-exit-translate-y: -100%;
}

.slide-out-to-top-px {
  --tw-exit-translate-y: -1px;
}

.duration-0 {
  animation-duration: 0s;
}

.duration-100 {
  animation-duration: 100ms;
}

.duration-1000 {
  animation-duration: 1000ms;
}

.duration-150 {
  animation-duration: 150ms;
}

.duration-200 {
  animation-duration: 200ms;
}

.duration-300 {
  animation-duration: 300ms;
}

.duration-500 {
  animation-duration: 500ms;
}

.duration-700 {
  animation-duration: 700ms;
}

.duration-75 {
  animation-duration: 75ms;
}

.delay-0 {
  animation-delay: 0s;
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}

.delay-150 {
  animation-delay: 150ms;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-500 {
  animation-delay: 500ms;
}

.delay-700 {
  animation-delay: 700ms;
}

.delay-75 {
  animation-delay: 75ms;
}

.ease-in {
  animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.ease-in-out {
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.ease-linear {
  animation-timing-function: linear;
}

.ease-out {
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.running {
  animation-play-state: running;
}

.paused {
  animation-play-state: paused;
}

.fill-mode-backwards {
  animation-fill-mode: backwards;
}

.fill-mode-both {
  animation-fill-mode: both;
}

.fill-mode-forwards {
  animation-fill-mode: forwards;
}

.fill-mode-none {
  animation-fill-mode: none;
}

.direction-alternate {
  animation-direction: alternate;
}

.direction-alternate-reverse {
  animation-direction: alternate-reverse;
}

.direction-normal {
  animation-direction: normal;
}

.direction-reverse {
  animation-direction: reverse;
}

.repeat-0 {
  animation-iteration-count: 0;
}

.repeat-1 {
  animation-iteration-count: 1;
}

.repeat-infinite {
  animation-iteration-count: infinite;
}
`.trim(),Y="{USER_CODE}",xt={theme:{extend:{keyframes:{"accordion-down":{from:{height:"0"},to:{height:"var(--radix-accordion-content-height)"}},"accordion-up":{from:{height:"var(--radix-accordion-content-height)"},to:{height:"0"}}},animation:{"accordion-down":"accordion-down 0.2s ease-out","accordion-up":"accordion-up 0.2s ease-out"},colors:{border:"hsl(var(--border))",input:"hsl(var(--input))",ring:"hsl(var(--ring))",background:"hsl(var(--background))",foreground:"hsl(var(--foreground))",primary:{DEFAULT:"hsl(var(--primary))",foreground:"hsl(var(--primary-foreground))"},secondary:{DEFAULT:"hsl(var(--secondary))",foreground:"hsl(var(--secondary-foreground))"},destructive:{DEFAULT:"hsl(var(--destructive))",foreground:"hsl(var(--destructive-foreground))"},muted:{DEFAULT:"hsl(var(--muted))",foreground:"hsl(var(--muted-foreground))"},accent:{DEFAULT:"hsl(var(--accent))",foreground:"hsl(var(--accent-foreground))"},popover:{DEFAULT:"hsl(var(--popover))",foreground:"hsl(var(--popover-foreground))"},card:{DEFAULT:"hsl(var(--card))",foreground:"hsl(var(--card-foreground))"}},borderRadius:{lg:"var(--radius)",md:"calc(var(--radius) - 2px)",sm:"calc(var(--radius) - 4px)"},sidebar:{DEFAULT:"hsl(var(--sidebar-background))",foreground:"hsl(var(--sidebar-foreground))",primary:"hsl(var(--sidebar-primary))","primary-foreground":"hsl(var(--sidebar-primary-foreground))",accent:"hsl(var(--sidebar-accent))","accent-foreground":"hsl(var(--sidebar-accent-foreground))",border:"hsl(var(--sidebar-border))",ring:"hsl(var(--sidebar-ring))"}}}},P=`
<head>
  <meta charset="UTF-8" />
  <script src="https://cdn.tailwindcss.com"><\/script>
  <script>
    tailwind.config = ${JSON.stringify(xt)};
  <\/script>
  <style>${yt}</style>
  <!-- EXTRA_STYLES -->
</head>
`.trim(),Et=`
<script>
  const root = createRoot(document.getElementById("root"));
  root.render(createElement(UserComponent.default));
<\/script>
`.trim(),ht=`
<script>
  document.documentElement.setAttribute('data-ready', 'true');
<\/script>
`,gt=`
<!DOCTYPE html>
<html lang="en">
  ${P}
  <body>
    <div id="root"></div>
    <script>${Y}<\/script>
    ${Et}
    ${ht}
  </body>
</html>
`.trim(),Nt=(t,e=[])=>{const o=`<style>
${e.join(`
`)}
</style>`,l=P.replace("<!-- EXTRA_STYLES -->",o),r=gt.replace(P,l),[m,a]=r.split(Y);return`${m}${t}${a}`},X=async()=>Promise.all([n(()=>import("./browser-s9dlvK3E.js").then(t=>t.b),__vite__mapDeps([2,1])),n(()=>import("./trace-mapping.umd-CPzQizkX.js").then(t=>t.t),__vite__mapDeps([0,1])),n(()=>import("./babel-CQNmCINH.js").then(t=>t.b),__vite__mapDeps([3,1]))]),Ot=/\/\/# sourceMappingURL=data:application\/json;base64,([A-Za-z0-9+/=]+)/,bt=async t=>{var o;let e;try{e=(o=t.match(Ot))==null?void 0:o.at(1)}catch(l){f.error("Error extracting source map",l),e=null}return e?JSON.parse(atob(e)):null},T={"@/components/ui/accordion":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_ACCORDION:t}=await import("./accordion-CWuR90sb.js");return{SHADCN_COMPONENTS_UI_ACCORDION:t}},[])).SHADCN_COMPONENTS_UI_ACCORDION,"@/components/ui/alert":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_ALERT:t}=await import("./alert-BhjtPMRG.js");return{SHADCN_COMPONENTS_UI_ALERT:t}},[])).SHADCN_COMPONENTS_UI_ALERT,"@/components/ui/alert-dialog":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_ALERT_DIALOG:t}=await import("./alert-dialog-OVN5Wfd1.js");return{SHADCN_COMPONENTS_UI_ALERT_DIALOG:t}},[])).SHADCN_COMPONENTS_UI_ALERT_DIALOG,"@/components/ui/aspect-ratio":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_ASPECT_RATIO:t}=await import("./aspect-ratio-CPhfgjgQ.js");return{SHADCN_COMPONENTS_UI_ASPECT_RATIO:t}},[])).SHADCN_COMPONENTS_UI_ASPECT_RATIO,"@/components/ui/avatar":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_AVATAR:t}=await import("./avatar-zO-VYFcx.js");return{SHADCN_COMPONENTS_UI_AVATAR:t}},[])).SHADCN_COMPONENTS_UI_AVATAR,"@/components/ui/badge":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_BADGE:t}=await import("./badge-BHmFNq1-.js");return{SHADCN_COMPONENTS_UI_BADGE:t}},[])).SHADCN_COMPONENTS_UI_BADGE,"@/components/ui/breadcrumb":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_BREADCRUMB:t}=await import("./breadcrumb-ZeL-HJZY.js");return{SHADCN_COMPONENTS_UI_BREADCRUMB:t}},[])).SHADCN_COMPONENTS_UI_BREADCRUMB,"@/components/ui/button":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_BUTTON:t}=await import("./button-ByS60n3r.js");return{SHADCN_COMPONENTS_UI_BUTTON:t}},[])).SHADCN_COMPONENTS_UI_BUTTON,"@/components/ui/calendar":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_CALENDAR:t}=await import("./calendar-Hv5paKxM.js");return{SHADCN_COMPONENTS_UI_CALENDAR:t}},[])).SHADCN_COMPONENTS_UI_CALENDAR,"@/components/ui/card":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_CARD:t}=await import("./card-Vk2EcttK.js");return{SHADCN_COMPONENTS_UI_CARD:t}},[])).SHADCN_COMPONENTS_UI_CARD,"@/components/ui/carousel":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_CAROUSEL:t}=await import("./carousel-B2cQOTrt.js");return{SHADCN_COMPONENTS_UI_CAROUSEL:t}},[])).SHADCN_COMPONENTS_UI_CAROUSEL,"@/components/ui/chart":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_CHART:t}=await import("./chart-BkHzxZ7Z.js");return{SHADCN_COMPONENTS_UI_CHART:t}},[])).SHADCN_COMPONENTS_UI_CHART,"@/components/ui/checkbox":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_CHECKBOX:t}=await import("./checkbox-Iuc-TiAO.js");return{SHADCN_COMPONENTS_UI_CHECKBOX:t}},[])).SHADCN_COMPONENTS_UI_CHECKBOX,"@/components/ui/collapsible":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_COLLAPSIBLE:t}=await import("./collapsible-B09jc_sf.js");return{SHADCN_COMPONENTS_UI_COLLAPSIBLE:t}},[])).SHADCN_COMPONENTS_UI_COLLAPSIBLE,"@/components/ui/command":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_COMMAND:t}=await import("./command-TdFnMtqY.js");return{SHADCN_COMPONENTS_UI_COMMAND:t}},[])).SHADCN_COMPONENTS_UI_COMMAND,"@/components/ui/context-menu":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_CONTEXT_MENU:t}=await import("./context-menu-C_y7J4-L.js");return{SHADCN_COMPONENTS_UI_CONTEXT_MENU:t}},[])).SHADCN_COMPONENTS_UI_CONTEXT_MENU,"@/components/ui/dialog":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_DIALOG:t}=await import("./dialog-B9kpBpIV.js");return{SHADCN_COMPONENTS_UI_DIALOG:t}},[])).SHADCN_COMPONENTS_UI_DIALOG,"@/components/ui/drawer":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_DRAWER:t}=await import("./drawer-CNA5nJGF.js");return{SHADCN_COMPONENTS_UI_DRAWER:t}},[])).SHADCN_COMPONENTS_UI_DRAWER,"@/components/ui/dropdown-menu":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_DROPDOWN_MENU:t}=await import("./dropdown-menu-BvX0-C-p.js");return{SHADCN_COMPONENTS_UI_DROPDOWN_MENU:t}},[])).SHADCN_COMPONENTS_UI_DROPDOWN_MENU,"@/components/ui/form":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_FORM:t}=await import("./form-BXROMa7f.js");return{SHADCN_COMPONENTS_UI_FORM:t}},[])).SHADCN_COMPONENTS_UI_FORM,"@/components/ui/hover-card":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_HOVER_CARD:t}=await import("./hover-card-mePBisBS.js");return{SHADCN_COMPONENTS_UI_HOVER_CARD:t}},[])).SHADCN_COMPONENTS_UI_HOVER_CARD,"@/components/ui/input":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_INPUT:t}=await import("./input-BSJ0vnFa.js");return{SHADCN_COMPONENTS_UI_INPUT:t}},[])).SHADCN_COMPONENTS_UI_INPUT,"@/components/ui/input-otp":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_INPUT_OTP:t}=await import("./input-otp-D6cZBonY.js");return{SHADCN_COMPONENTS_UI_INPUT_OTP:t}},[])).SHADCN_COMPONENTS_UI_INPUT_OTP,"@/components/ui/label":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_LABEL:t}=await import("./label-BLZyNSx2.js");return{SHADCN_COMPONENTS_UI_LABEL:t}},[])).SHADCN_COMPONENTS_UI_LABEL,"@/components/ui/menubar":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_MENUBAR:t}=await import("./menubar-BOVBkIJB.js");return{SHADCN_COMPONENTS_UI_MENUBAR:t}},[])).SHADCN_COMPONENTS_UI_MENUBAR,"@/components/ui/navigation-menu":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_NAVIGATION_MENU:t}=await import("./navigation-menu-BLGJ0m0s.js");return{SHADCN_COMPONENTS_UI_NAVIGATION_MENU:t}},[])).SHADCN_COMPONENTS_UI_NAVIGATION_MENU,"@/components/ui/pagination":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_PAGINATION:t}=await import("./pagination-DGyXo3rm.js");return{SHADCN_COMPONENTS_UI_PAGINATION:t}},[])).SHADCN_COMPONENTS_UI_PAGINATION,"@/components/ui/popover":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_POPOVER:t}=await import("./popover-C351Cl6_.js");return{SHADCN_COMPONENTS_UI_POPOVER:t}},[])).SHADCN_COMPONENTS_UI_POPOVER,"@/components/ui/progress":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_PROGRESS:t}=await import("./progress-D2jqZrfx.js");return{SHADCN_COMPONENTS_UI_PROGRESS:t}},[])).SHADCN_COMPONENTS_UI_PROGRESS,"@/components/ui/radio-group":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_RADIO_GROUP:t}=await import("./radio-group-FqB3xBBZ.js");return{SHADCN_COMPONENTS_UI_RADIO_GROUP:t}},[])).SHADCN_COMPONENTS_UI_RADIO_GROUP,"@/components/ui/resizable":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_RESIZABLE:t}=await import("./resizable-YzvZKc_l.js");return{SHADCN_COMPONENTS_UI_RESIZABLE:t}},[])).SHADCN_COMPONENTS_UI_RESIZABLE,"@/components/ui/scroll-area":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SCROLL_AREA:t}=await import("./scroll-area-BYMAg6Oa.js");return{SHADCN_COMPONENTS_UI_SCROLL_AREA:t}},[])).SHADCN_COMPONENTS_UI_SCROLL_AREA,"@/components/ui/separator":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SEPARATOR:t}=await import("./separator-DEw6wN7X.js");return{SHADCN_COMPONENTS_UI_SEPARATOR:t}},[])).SHADCN_COMPONENTS_UI_SEPARATOR,"@/components/ui/select":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SELECT:t}=await import("./select-CVHtEdbM.js");return{SHADCN_COMPONENTS_UI_SELECT:t}},[])).SHADCN_COMPONENTS_UI_SELECT,"@/components/ui/sheet":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SHEET:t}=await import("./sheet-DLdFqe0W.js");return{SHADCN_COMPONENTS_UI_SHEET:t}},[])).SHADCN_COMPONENTS_UI_SHEET,"@/components/ui/sidebar":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SIDEBAR:t}=await import("./sidebar-yJWgrJe_.js");return{SHADCN_COMPONENTS_UI_SIDEBAR:t}},[])).SHADCN_COMPONENTS_UI_SIDEBAR,"@/components/ui/skeleton":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SKELETON:t}=await import("./skeleton-dofzgYEL.js");return{SHADCN_COMPONENTS_UI_SKELETON:t}},[])).SHADCN_COMPONENTS_UI_SKELETON,"@/components/ui/slider":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SLIDER:t}=await import("./slider-DxDpj_aO.js");return{SHADCN_COMPONENTS_UI_SLIDER:t}},[])).SHADCN_COMPONENTS_UI_SLIDER,"@/components/ui/sonner":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SONNER:t}=await import("./sonner-DFZ7NV4a.js");return{SHADCN_COMPONENTS_UI_SONNER:t}},[])).SHADCN_COMPONENTS_UI_SONNER,"@/components/ui/switch":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_SWITCH:t}=await import("./switch-BDJN6BDg.js");return{SHADCN_COMPONENTS_UI_SWITCH:t}},[])).SHADCN_COMPONENTS_UI_SWITCH,"@/components/ui/table":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TABLE:t}=await import("./table-B07MgB5-.js");return{SHADCN_COMPONENTS_UI_TABLE:t}},[])).SHADCN_COMPONENTS_UI_TABLE,"@/components/ui/tabs":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TABS:t}=await import("./tabs-B6xIqqWL.js");return{SHADCN_COMPONENTS_UI_TABS:t}},[])).SHADCN_COMPONENTS_UI_TABS,"@/components/ui/textarea":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TEXTAREA:t}=await import("./textarea-Cgw2UBQv.js");return{SHADCN_COMPONENTS_UI_TEXTAREA:t}},[])).SHADCN_COMPONENTS_UI_TEXTAREA,"@/components/ui/toast":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TOAST:t}=await import("./toast-B1xsqC_7.js");return{SHADCN_COMPONENTS_UI_TOAST:t}},[])).SHADCN_COMPONENTS_UI_TOAST,"@/components/ui/toaster":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TOASTER:t}=await import("./toaster-Ck15TlVm.js");return{SHADCN_COMPONENTS_UI_TOASTER:t}},[])).SHADCN_COMPONENTS_UI_TOASTER,"@/components/ui/toggle":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TOGGLE:t}=await import("./toggle-BNfwz9HK.js");return{SHADCN_COMPONENTS_UI_TOGGLE:t}},[])).SHADCN_COMPONENTS_UI_TOGGLE,"@/components/ui/toggle-group":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TOGGLE_GROUP:t}=await import("./toggle-group-DG8eVV66.js");return{SHADCN_COMPONENTS_UI_TOGGLE_GROUP:t}},[])).SHADCN_COMPONENTS_UI_TOGGLE_GROUP,"@/components/ui/tooltip":async()=>(await n(async()=>{const{SHADCN_COMPONENTS_UI_TOOLTIP:t}=await import("./tooltip-CHyFX41o.js");return{SHADCN_COMPONENTS_UI_TOOLTIP:t}},[])).SHADCN_COMPONENTS_UI_TOOLTIP,"@/hooks/use-toast":async()=>(await n(async()=>{const{SHADCN_HOOKS_USE_TOAST:t}=await import("./use-toast-CNAW1Aaw.js");return{SHADCN_HOOKS_USE_TOAST:t}},[])).SHADCN_HOOKS_USE_TOAST,"@/hooks/use-mobile":async()=>(await n(async()=>{const{SHADCN_HOOKS_USE_IS_MOBILE:t}=await import("./use-is-mobile-C5uV-qbD.js");return{SHADCN_HOOKS_USE_IS_MOBILE:t}},[])).SHADCN_HOOKS_USE_IS_MOBILE,"@/components/hooks/use-mobile":async()=>(await n(async()=>{const{SHADCN_HOOKS_USE_IS_MOBILE:t}=await import("./use-is-mobile-C5uV-qbD.js");return{SHADCN_HOOKS_USE_IS_MOBILE:t}},[])).SHADCN_HOOKS_USE_IS_MOBILE,"@/lib/utils":async()=>(await n(async()=>{const{SHADCN_LIB_UTILS:t}=await import("./utils-qa11U4rX.js");return{SHADCN_LIB_UTILS:t}},[])).SHADCN_LIB_UTILS,"@/components/lib/utils":async()=>(await n(async()=>{const{SHADCN_LIB_UTILS:t}=await import("./utils-qa11U4rX.js");return{SHADCN_LIB_UTILS:t}},[])).SHADCN_LIB_UTILS},St=async t=>{f.time("react.transform");const{transform:e,availablePlugins:o,packages:l}=await n(async()=>{const{transform:s,availablePlugins:d,packages:u}=await import("./babel-CQNmCINH.js").then(c=>c.b);return{transform:s,availablePlugins:d,packages:u}},__vite__mapDeps([3,1])),r=l.types,{code:m,map:a}=e(t,{plugins:[o["transform-typescript"],{name:"jsx",manipulateOptions(s,d){d.plugins.push("jsx")}},{visitor:{Function({node:s}){if(s.body&&r.isBlockStatement(s.body)&&s.body.body.length>0&&r.isTryStatement(s.body.body[0]))return;r.isBlockStatement(s.body)||(s.body=r.blockStatement([r.returnStatement(s.body)]));const d=s.body,u=r.catchClause(r.identifier("error"),r.blockStatement([r.expressionStatement(r.callExpression(r.memberExpression(r.identifier("console"),r.identifier("error")),[r.identifier("error")])),r.throwStatement(r.identifier("error"))])),c=r.tryStatement(d,u);s.body=r.blockStatement([c])}}}],sourceMaps:!0});return f.timeEnd("react.transform"),{transformedCode:m,sourceMap:a}},V="https://esm.sh",C={},Ct=`
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import UserComponent from './${A}';

window.createRoot = createRoot;
window.createElement = createElement;

export default UserComponent;
`,At=/https?:\/\/[^\s]+/,b="19.0.0",Tt=`react@${b}`,It=`react-dom@${b}`,z=`?deps=${Tt},${It}`;function I(t){let e=t;const o=/\/(stable|v\d+)\/react(-dom)?(@\d+\.\d+\.\d+)?\/|esm\.sh\/react(-dom)?(@\d+\.\d+\.\d+)?\//g;e=e.replace(o,r=>r.includes("react-dom")?r.replace(/react-dom(@\d+\.\d+\.\d+)?/,`react-dom@${b}`):r.replace(/react(@\d+\.\d+\.\d+)?/,`react@${b}`));const l=/react\/jsx-runtime/g;return e=e.replace(l,`react@${b}/jsx-runtime`),e}const Rt=async(t,e)=>{const{transformedCode:o,sourceMap:l}=await St(e),r=[],m={name:"onResolve-plugin",setup(c){c.onResolve({filter:/^index\.js$/},({path:i})=>({path:i,namespace:"internal"})),c.onResolve({filter:/^\.\/user-component\.js$/},()=>({path:A,namespace:"internal"})),c.onResolve({filter:/^\.+\//},({path:i,importer:_})=>{let p="";try{p=new URL(i,_).toString()}catch{if(!At.test(_))throw new Error(`File not found: ${i}`)}return{path:p,namespace:"external"}}),c.onResolve({filter:/^@\/.*/},({path:i})=>i in T?{path:i,namespace:"internal"}:null),c.onResolve({filter:/^[^./]/},({path:i})=>({path:I(`${V}/${i}${z}`),namespace:"external"})),c.onResolve({filter:/^\//},({path:i})=>({path:I(`${V}${i}${z}`),namespace:"external"}))}},a={name:"onLoad-plugin",setup(c){c.onLoad({filter:/^index\.js$/,namespace:"internal"},()=>({contents:Ct,loader:"tsx"})),c.onLoad({filter:new RegExp(`^${A}$`),namespace:"internal"},()=>({contents:o??"",loader:"tsx"})),c.onLoad({filter:/^@\/.*/,namespace:"internal"},async({path:i})=>{if(i in T){const _=await T[i]();if(_)return{contents:_,loader:"tsx"}}return null}),c.onLoad({filter:/.*/,namespace:"external"},async({path:i})=>{if(C[i])return C[i];const _=await fetch(i);if(!_.ok)throw new Error(`Failed to fetch ${i}`);const p=_.headers.get("Content-Type");let E="jsx";if(p!=null&&p.includes("application/typescript")||i.endsWith(".ts"))E="ts";else if(i.endsWith(".tsx"))E="tsx";else if(i.endsWith(".js"))E="jsx";else if(i.endsWith(".css")||p!=null&&p.includes("text/css")){const J=await _.text();r.push(J);const L={contents:"",loader:"js"};return C[i]=L,L}const Q=await _.text(),U={contents:I(Q),loader:E};return C[i]=U,U})}},{outputFiles:s}=await t.build({entryPoints:["index.js"],bundle:!0,write:!1,plugins:[m,a],format:"iife",globalName:"UserComponent",minify:!0,splitting:!1,jsx:"automatic",sourcemap:"inline",jsxImportSource:"react"}),[{text:d}]=s,u=[await bt(d),l].filter(c=>c!=null);return{transformedCode:d,sourceMaps:u,cssImports:r}},Dt=t=>{const e=new RegExp(`internal:${A}:(\\d+)`),o=t.match(e),l=o==null?void 0:o.at(1);return l?parseInt(l):null},Pt=async(t,e)=>{e({type:w.ENVIRONMENT_STATUS,status:S.INITIALIZING}),f.time("react.transpile"),await X();const o=await q();e({type:w.ENVIRONMENT_STATUS,status:S.INSTALLING_PACKAGES});let l=null,r=[],m=[];try{const{transformedCode:d,sourceMaps:u,cssImports:c}=await Rt(o,t);l=d,r=u,m=c}catch(d){if(d instanceof Error){const{name:u,message:c}=d,i=Dt(c),[_,...p]=c.split(`
`);e({type:w.ERROR,error:{message:_,name:u,line:i,stack:p},line:i})}}if(f.timeEnd("react.transpile"),!l)return e({type:w.RUN_COMPLETE,duration:null,wasCancelled:!1});const a=await ft(r),s=Nt(l,m);return W({expectReadySignal:!0,html:s,onMessage:e,transformPosition:a})},vt=async()=>{await X(),await q()};G&&navigator.serviceWorker.register("/service-worker.js",{type:"classic"});const N=t=>({runId:t,id:crypto.randomUUID(),timestamp:Date.now()}),Ut=(t,e,o)=>{switch(y({type:w.RUN_START,...N(t)}),o){case"python":return K(e,l=>{y({...l,...N(t)})});case"javascript":case"typescript":break;case"html":return W({html:e,onMessage:l=>{y({...l,...N(t)})}});case"react":return Pt(e,l=>{y({...l,...N(t)})})}},Lt=t=>{switch(t){case"python":return ut();case"react":return vt();default:return null}},Z=t=>{try{switch(t.type!==h.FETCH_RESPONSE&&st(),t.type){case h.STOP_CODE:{const{runId:e}=t;return wt(),$(),y({type:w.RUN_COMPLETE,duration:null,wasCancelled:!0,...N(e)})}case h.PREPARE_ENVIRONMENT:{const{language:e}=t;return Lt(e)}case h.RUN_CODE:{const{runId:e,code:o,language:l}=t;return Ut(e,o,l)}case h.FETCH_RESPONSE:{const{requestId:e,isApproved:o}=t;return lt(e,o)}}}catch(e){const o="runId"in t?t.runId:null;e instanceof Error&&y({type:w.ENVIRONMENT_ERROR,runId:o,error:{name:e.name,message:e.message}}),o&&y({type:w.RUN_COMPLETE,duration:null,...N(o)}),f.error("unexpected handleMessage error",e)}},R=[];let D=!1;const Mt=async t=>{if(R.push(t),!D){for(D=!0;R.length>0;){const e=R.shift();e&&await Z(e)}D=!1}};ot(t=>{t.type===h.FETCH_RESPONSE||t.type===h.STOP_CODE?Z(t):Mt(t)});G?navigator.serviceWorker.ready.then(()=>{f.log("service worker installed"),y({type:w.READY})}).catch(t=>{f.log("service worker failed to install",t),y({type:w.READY})}):(f.log("skipping service worker"),y({type:w.READY}));
