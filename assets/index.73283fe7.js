var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,i=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))a.call(t,n)&&s(e,n,t[n]);return e},l=(e,o)=>t(e,n(o));import{C as c,R as d,P as u,W as p,a as m,M as h,b as g,T as f,g as v,h as w,s as y,c as E,q as x,d as b,S as _,I as k,e as C,f as S,l as I,i as M,j as N,k as D,m as P,D as T,u as O,n as L,o as A,p as V,A as B,_ as j,J as z,r as R,t as F,v as W,w as $,F as U,x as q,y as G,z as J,B as X}from"./vendor.54417338.js";const Y=(e=(()=>null),t=(()=>null),n=(()=>null),o=300)=>{const[r,a]=c.exports.useState(!1),s=c.exports.useRef(null),i=c.exports.useCallback((t=>{s.current=setTimeout((()=>{a(!0),e(t)}),o)}),[e,o]),l=c.exports.useCallback((e=>{s.current&&clearTimeout(s.current),r?t(e):n(e),a(!1)}),[n,r,t]);return{onMouseDown:e=>i(e),onTouchStart:e=>i(e),onMouseUp:e=>l(e),onTouchEnd:e=>l(e)}},H=()=>navigator.permissions.query({name:"microphone"}).then((e=>e.state)),K=()=>navigator.permissions.query({name:"camera"}).then((e=>e.state)),Z=e=>e.getTracks().forEach((e=>e.stop())),Q=async(e,t,n={audio:!0})=>{if(n.audio&&n.video&&!(await(async()=>{const e=await K(),t=await H();return"denied"!==e&&"denied"!==t||alert("Access to camera or microphone is denied. Please give permissions and try again"),"prompt"!==e&&"prompt"!==t||(alert("Please allow access to camera and microphone and try again"),navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then(Z)),"granted"===e&&"granted"===t})()))return null;if(n.audio&&!(await(async()=>{const e=await H();return"denied"===e&&alert("Access to microphone is denied. Please allow access and try again"),"prompt"===e&&(alert("Please allow access to microphone and try again"),navigator.mediaDevices.getUserMedia({audio:!0}).then(Z)),"granted"===e})()))return null;if(n.video&&!(await(async()=>{const e=await K();return"denied"===e&&alert("Access to camera is denied. Please allow access to camera and try again"),"prompt"===e&&(alert("Please allow access to camera and try again"),navigator.mediaDevices.getUserMedia({video:!0}).then(Z)),"granted"===e})()))return null;const o=[],r=await navigator.mediaDevices.getUserMedia(n);t(r);const a=new MediaRecorder(r);return a.ondataavailable=e=>{o.push(e.data)},a.onstop=()=>{const t=new Blob(o,{type:n.video?"video/webm":"audio/ogg; codecs=opus"});o.splice(0,o.length);const r=window.URL.createObjectURL(t);e(r)},a.start(),()=>{a.stop(),Z(a.stream)}};var ee,te,ne,oe,re,ae,se,ie;(te=ee||(ee={})).START="START",te.MIDDLE="MIDDLE",te.END="END",(oe=ne||(ne={})).Drawflow="drawflow",oe.Groups="groups",(ae=re||(re={})).backgroundOpacity="backgroundOpacity",ae.backgroundBlur="backgroundBlur",ae.backgroundImageUrl="backgroundImageUrl",(ie=se||(se={})).in="in",ie.out="out";const le=e=>Object.keys(e);var ce,de,ue,pe,me,he,ge,fe;(de=ce||(ce={}))[de.mainFlow=0]="mainFlow",de[de.codeEditor=1]="codeEditor",de[de.templateNodeSettings=2]="templateNodeSettings",de[de.nodeSettings=3]="nodeSettings",(pe=ue||(ue={}))[pe.groupSettings=0]="groupSettings",pe[pe.flowSettings=1]="flowSettings",pe[pe.none=2]="none",(he=me||(me={})).Text="text",he.Audio="audio",he.Video="video",he.File="file",he.Image="image",(fe=ge||(ge={})).In="incoming",fe.Out="outgoing";const ve=({onValue:e})=>d.createElement(u,{style:{width:"99vw",margin:"auto",alignSelf:"center"},onSelect:t=>{"native"in t?e(t.native):console.error("Emoji not supported",t)},native:!0}),we=e=>d.createElement("svg",i({viewBox:"0 0 100 100"},e),d.createElement("path",{d:"M52 75.9V86h14c1.1 0 2 .9 2 2s-.9 2-2 2H34c-1.1 0-2-.9-2-2s.9-2 2-2h14V75.9c-13.4-1-24-12.3-24-25.9 0-1.1.9-2 2-2s2 .9 2 2c0 12.1 9.9 22 22 22s22-9.9 22-22c0-1.1.9-2 2-2s2 .9 2 2c0 13.7-10.6 24.9-24 25.9zM65 25v25c0 8.3-6.7 15-15 15s-15-6.7-15-15V25c0-8.3 6.7-15 15-15s15 6.7 15 15zm-4 0c0-6.1-4.9-11-11-11s-11 4.9-11 11v25c0 6.1 4.9 11 11 11s11-4.9 11-11V25z"})),ye=e=>d.createElement("svg",l(i({},e),{viewBox:"0 0 16 16"}),d.createElement("g",{transform:"translate(0,-1036.3622)"},d.createElement("path",{d:"M 8 0 C 3.5876443 0 0 3.5877 0 8 C 0 12.4124 3.5876443 16 8 16 C 12.412356 16 16 12.4124 16 8 C 16 3.5877 12.412356 0 8 0 z M 8 1 C 11.871916 1 15 4.1281 15 8 C 15 11.8719 11.871916 15 8 15 C 4.1280844 15 1 11.8719 1 8 C 1 4.1281 4.1280844 1 8 1 z M 6 5 A 1.0000094 1.0000066 0 0 0 5 6 A 1.0000094 1.0000066 0 0 0 6 7 A 1.0000094 1.0000066 0 0 0 7 6 A 1.0000094 1.0000066 0 0 0 6 5 z M 10 5 A 1.0000094 1.0000066 0 0 0 9 6 A 1.0000094 1.0000066 0 0 0 10 7 A 1.0000094 1.0000066 0 0 0 11 6 A 1.0000094 1.0000066 0 0 0 10 5 z M 3.4921875 8.0351562 A 0.50004997 0.50004997 0 0 0 3 8.5429688 C 2.9999999 10.301869 3.9584546 11.925081 5.5039062 12.800781 C 7.0493581 13.676481 8.9506417 13.676481 10.496094 12.800781 C 12.041546 11.925081 13 10.301869 13 8.5429688 A 0.50004997 0.50004997 0 1 0 12 8.5429688 C 12 9.9394688 11.242844 11.229541 10.003906 11.931641 C 8.7649684 12.633641 7.2350319 12.633641 5.9960938 11.931641 C 4.7571555 11.229541 3.9999999 9.9394688 4 8.5429688 A 0.50004997 0.50004997 0 0 0 3.4921875 8.0351562 z ",transform:"translate(0,1036.3622)",id:"circle5164"}))),Ee=e=>d.createElement("svg",l(i({},e),{viewBox:"0 0 48 48"}),d.createElement("path",{d:"M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"})),xe=e=>d.createElement("svg",l(i({},e),{viewBox:"0 0 30 30"}),d.createElement("path",{strokeMiterlimit:"10",strokeWidth:"2",d:"M12 8v13M18 8v13"})),be=e=>d.createElement("svg",l(i({},e),{viewBox:"0 0 16 16"}),d.createElement("path",{d:"M6.5 2v1h-3v1h9V3h-3V2h-3zm-2 3v9h7V5h-7zm1 1h1v7h-1V6zm2 0h1v7h-1V6zm2 0h1v7h-1V6z",overflow:"visible"})),_e=e=>d.createElement("svg",l(i({},e),{viewBox:"0 0 45.187 45.188"}),d.createElement("g",null,d.createElement("g",null,d.createElement("path",{d:"M0,18.961h4.842V6.052c0-0.446,0.362-0.807,0.807-0.807H18.56V0.404H5.649C2.535,0.404,0,2.939,0,6.053V18.961z"}),d.createElement("path",{d:"M39.539,0.403h-12.91v4.841h12.91c0.445,0,0.807,0.362,0.807,0.807v12.91h4.842V6.052\n\t\t\tC45.189,2.938,42.654,0.403,39.539,0.403z"}),d.createElement("path",{d:"M4.842,39.136V26.225H0v12.911c0,3.113,2.535,5.648,5.649,5.648H18.56v-4.842H5.649\n\t\t\tC5.204,39.942,4.842,39.58,4.842,39.136z"}),d.createElement("path",{d:"M40.346,39.136c0,0.446-0.362,0.807-0.807,0.807H26.628v4.842h12.91c3.115,0,5.648-2.536,5.648-5.65V26.225h-4.842\n\t\t\tL40.346,39.136L40.346,39.136z"}),d.createElement("circle",{cx:"22.594",cy:"22.594",r:"6.455"})))),ke=e=>d.createElement("svg",l(i({},e),{viewBox:"0 0 24 24"}),d.createElement("path",{d:"M8.8916,21.85352A6.25,6.25,0,0,1,4.47168,11.18457l7.95508-7.95508A4.49986,4.49986,0,0,1,18.791,9.59277L11.89648,16.4873a2.8164,2.8164,0,0,1-3.88964,0,2.75018,2.75018,0,0,1,.001-3.88867l5.126-5.12695a.99989.99989,0,1,1,1.41406,1.41406l-5.126,5.127a.74971.74971,0,0,0,0,1.06054.76811.76811,0,0,0,1.06054,0L17.377,8.17871a2.50263,2.50263,0,0,0,0-3.53516,2.5591,2.5591,0,0,0-3.53613,0L5.88574,12.59863a4.24989,4.24989,0,1,0,6.01074,6.00977l6.1875-6.18652a.99989.99989,0,1,1,1.41407,1.41406l-6.1875,6.18652A6.20551,6.20551,0,0,1,8.8916,21.85352Z"})),Ce=e=>d.createElement("svg",l(i({},e),{viewBox:"0 0 32 32"}),d.createElement("path",{fill:"#8c9eff",d:"M26,3V29a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9a1,1,0,0,1,.23-.64l5-6A1,1,0,0,1,12,2H25A1,1,0,0,1,26,3Z"}),d.createElement("path",{fill:"#5f7cf9",d:"M14,2v8a1,1,0,0,1-1,1H6V9a1,1,0,0,1,.23-.64l5-6A1,1,0,0,1,12,2Z"})),Se=e=>d.createElement("svg",l(i({},e),{stroke:"#000",viewBox:"0 0 20 22"}),d.createElement("g",{fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",transform:"translate(1 1)"},d.createElement("path",{d:"M0 15v3a2 2 0 002 2h14a2 2 0 002-2v-3M5 10l4 4 4-4M9 0v14"}))),Ie=e=>d.createElement("svg",l(i({},e),{viewBox:"0 0 24 24"}),d.createElement("path",{d:"M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z"})),Me=({src:e})=>{const t=c.exports.useRef(null),n=c.exports.useRef(null),[o,r]=c.exports.useState(!1),[a,s]=c.exports.useState("00:00");return c.exports.useEffect((()=>(n.current=p.create({container:t.current,barWidth:1.7,barHeight:1,barMinHeight:1,barGap:1,height:30,progressColor:"orange",waveColor:"red",responsive:!0,cursorColor:"transparent"}),n.current.load(e),console.log(n.current.getDuration()),n.current.on("finish",(()=>{r(!1)})),n.current.on("audioprocess",(()=>{const e=n.current.getCurrentTime();let t=new Date(1e3*e).toISOString().substr(11,8);t.startsWith("00:")&&(t=t.slice(3)),s(t)})),n.current.on("ready",(()=>{console.log("WaveSurfer ready!");const e=n.current.getDuration();let t=new Date(1e3*e).toISOString().substr(11,8);t.startsWith("00:")&&(t=t.slice(3)),s(t)})),()=>{var e;return null==(e=n.current)?void 0:e.destroy()})),[e]),d.createElement("div",{className:"messageAudio"},d.createElement("div",{className:"playButtonWrapper"},o?d.createElement(xe,{onClick:()=>{var e;null==(e=n.current)||e.pause(),r(!1)},className:"pauseButton"}):d.createElement(Ee,{onClick:()=>{var e;null==(e=n.current)||e.play(),r(!0)},className:"playButton"})),d.createElement("div",{className:"wavesurfer",ref:t}),d.createElement("span",{className:"audioDuration"},a))},Ne=({src:e,meta:t})=>{void 0===t&&console.error("`meta` is not defined, component MessageFile");const{name:n,size:o,type:r}=null!=t?t:{};return d.createElement("div",{className:"MessageFile"},d.createElement(Ce,{className:"fileButton"}),d.createElement("div",{className:"info"},d.createElement("div",null,null!=n?n:"Unknown name"),d.createElement("div",{className:"details"},d.createElement("span",null,null!=o?o:"Unknown size"),d.createElement("span",null,null!=r?r:"Unknown type"))),d.createElement("a",{href:e,download:!0},d.createElement(Se,{className:"downloadButton"})))},De=({src:e})=>d.createElement("img",{className:"messageImage",src:e,alt:"Message content"}),Pe=({src:e})=>{const t=c.exports.useRef(null);return d.createElement("video",{onClick:()=>{const e=t.current;e.paused?e.play().then():e.pause()},className:"messageVideo",ref:t,src:e})},Te=({messages:e})=>{const t=[];return e.forEach(((e,n)=>{const o=d.createElement("span",{className:"messageSide"},d.createElement("span",{className:"sentTime"},"10:42 PM"),d.createElement("span",{className:"marks"},d.createElement("span",null,"✓"),d.createElement("span",null,"✓")));let r;switch(e.type){case me.Text:r=d.createElement("div",null,m.htmlToText(e.src));break;case me.Audio:r=d.createElement(Me,{src:e.src});break;case me.Video:r=d.createElement(Pe,{src:e.src});break;case me.Image:r=d.createElement(De,{src:e.src});break;case me.File:r=d.createElement(Ne,i({},e));break;default:r="Invalid type"}t.push(d.createElement(h,{className:e.type+"_message",model:{direction:e.direction},key:n},d.createElement(h.CustomContent,null,r,o)))})),d.createElement(g,{typingIndicator:d.createElement(f,{content:"Zoe is typing"})},t.map((e=>e)))},Oe=e=>{const t=e.target;t.paused?t.play().then():t.pause()},Le=({src:e,stream:t})=>{const n=c.exports.useRef(null);return c.exports.useEffect((()=>{const{current:o}=n;o&&(t?(o.srcObject=t,o.muted=!0,console.log("srcObject set")):e&&(o.srcObject=null,o.src=e,o.muted=!1,o.play().then()))}),[e,t]),d.createElement("div",{className:"mediaPreviewContainer"},d.createElement("video",{autoPlay:!0,className:"videoPreview",ref:n,onClick:Oe}))};var Ae,Ve;(Ve=Ae||(Ae={})).BARS="bars",Ve.BARS_BLOCKS="bars blocks",Ve.BIG_BARS="big bars",Ve.CUBES="cubes",Ve.DUAL_BARS="dualbars",Ve.DUAL_BARS_BLOCKS="dualbars blocks",Ve.FIREWOKS="fireworks",Ve.FLOWER="flower",Ve.FLOWER_BLOCKS="flower blocks",Ve.ORBS="orbs",Ve.RING="ring",Ve.RINGS="rings",Ve.ROUND_WAVE="round wave",Ve.SHOCKWAVE="shockwave",Ve.SHINE="shine",Ve.SHINE_RINGS="shine rings",Ve.STAR="star",Ve.STATIC="static",Ve.STITCHES="stitches",Ve.WAVE="wave",Ve.WEB="web";var Be=Ae;class je extends Error{constructor(e){super(`The required generator "${e}" does not exist, please use one of the following:\n\n${Object.keys(Be).map((e=>`- "${Be[e]}"`)).join("\n")}`),this.name="InvalidGeneratorError"}}const ze=(e,t)=>{const n=`${t}.${e}`;return Re(window,n,{}),v(window,n)},Re=(e,t,n)=>{w(e,t)||y(e,t,n)},Fe=e=>{(Array.isArray(e)?e:[e]).forEach((e=>{if(!Object.keys(Be).map((e=>Be[e])).includes(e))throw new je(e)}))},We=e=>{e&&e.getContext("2d").clearRect(0,0,e.width,e.height)};const $e=e=>e*Math.PI/180,Ue=([e,t],[n,o],r)=>{const a=$e(r);return[Math.cos(a)*(e-n)-Math.sin(a)*(t-o)+n,Math.sin(a)*(e-n)+Math.cos(a)*(t-o)+o]},qe=(e,t,n,o,r,a)=>{const s=Math.sqrt((n-e)**2+(o-t)**2),i=a?r/s:(s-r)/s;return[e+i*(n-e),t+i*(o-t)]};class Ge{constructor(e){this.ctx=null,this.ctx=e}mutateData(e,t,n=null){if("mirror"===t){let t=[];for(let n=0;n<e.length;n+=2)t.push(e[n]);return t=[...t,...t.reverse()],t}if("shrink"===t){n<1&&(n=e.length*n);const t=[],o=Math.floor(e.length/n);for(let r=1;r<=n;r++){const n=e.slice(r*o,r*o+o),a=n[Math.floor(n.length/2)];t.push(a)}return t}if("split"===t){const t=Math.floor(e.length/n),o=[];let r=[],a=0;for(let s=0;s<=t*n;s++)a===t&&(o.push(r),r=[],a=0),r.push(e[s]),a++;return o}if("scale"===t){let t=n/255;return n<=3&&n>=0&&(t=n),e.map((e=>e*t))}if("organize"===t)return{base:e.slice(60,120),vocals:e.slice(120,255),mids:e.slice(255,2e3)};if("reverb"===t){const t=[];return e.forEach(((n,o)=>{t.push(n-(e[o+1]||0))})),t}if("amp"===t){const t=[];return e.forEach((e=>{t.push(e*(n+1))})),t}if("min"===t){const t=[];return e.forEach((e=>{e<n&&(e=n),t.push(e)})),t}}getPoints(e,t,[n,o],r,a,s){const{offset:l,rotate:c,customOrigin:d}=i({offset:0,rotate:0,customOrigin:[]},s),u={start:[],end:[]};if("circle"===e){const e=$e(360/r),s=t/2;for(let t=1;t<=r;t++){const r=e*t,i=a[t-1],d=a[t-1]*(l/100);let p=n+(s-d)*Math.cos(r),m=o+(s-d)*Math.sin(r);const h=Ue([p,m],[n,o],c);u.start.push(h),p=n+(s-d+i)*Math.cos(r),m=o+(s-d+i)*Math.sin(r);const g=Ue([p,m],[n,o],c);u.end.push(g)}return u}if("line"===e){const e=t/r;n=d[0]||n,o=d[1]||o;for(let t=0;t<=r;t++){const r=c,s=a[t]*(l/100),i=Ue([n+t*e,o-s],[n,o],r);u.start.push(i);const d=Ue([n+t*e,o+a[t]-s],[n,o],r);u.end.push(d)}return u}}drawCircle([e,t],n,o){const{color:r,lineColor:a}=i({lineColor:this.ctx.strokeStyle},o);this.ctx.beginPath(),this.ctx.arc(e,t,n/2,0,2*Math.PI),this.ctx.strokeStyle=a,this.ctx.stroke(),this.ctx.fillStyle=r,r&&this.ctx.fill()}drawSquare([e,t],n,o){this.drawRectangle([e,t],n,n,o)}drawRectangle([e,t],n,o,r){const{color:a,lineColor:s,radius:l,rotate:c}=i({lineColor:this.ctx.strokeStyle,radius:0,rotate:0},r);this.ctx.beginPath(),this.ctx.moveTo(e+l,t);const d=Ue([e+o,t],[e,t],c),u=Ue([e+o,t+n],[e,t],c);this.ctx.arcTo(d[0],d[1],u[0],u[1],l);const p=Ue([e+o,t+n],[e,t],c),m=Ue([e,t+n],[e,t],c);this.ctx.arcTo(p[0],p[1],m[0],m[1],l);const h=Ue([e,t+n],[e,t],c),g=Ue([e,t],[e,t],c);this.ctx.arcTo(h[0],h[1],g[0],g[1],l);const f=Ue([e,t],[e,t],c),v=Ue([e+o,t],[e,t],c);this.ctx.arcTo(f[0],f[1],v[0],v[1],l),this.ctx.closePath(),this.ctx.strokeStyle=s,this.ctx.stroke(),this.ctx.fillStyle=a,a&&this.ctx.fill()}drawLine([e,t],[n,o],r){const{lineColor:a}=i({lineColor:this.ctx.strokeStyle},r);this.ctx.beginPath(),this.ctx.moveTo(e,t),this.ctx.lineTo(n,o),this.ctx.strokeStyle=a,this.ctx.stroke()}drawPolygon(e,t){const{color:n,lineColor:o,radius:r,close:a}=i({lineColor:this.ctx.strokeStyle,radius:0,close:!1},t);let s,l;r>0&&(e=((e,t)=>{const n=e.length,o=new Array(n);for(let r=0;r<n;r++){let a=r-1,s=r+1;a<0&&(a=n-1),s==n&&(s=0);const i=e[a],l=e[r],c=e[s],d=qe(i[0],i[1],l[0],l[1],t,!1),u=qe(l[0],l[1],c[0],c[1],t,!0);o[r]=[d[0],d[1],l[0],l[1],u[0],u[1]]}return o})(e,r));const c=e.length;for(s=0;s<c;s++)l=e[s],0==s?(this.ctx.beginPath(),this.ctx.moveTo(l[0],l[1])):this.ctx.lineTo(l[0],l[1]),r>0&&this.ctx.quadraticCurveTo(l[2],l[3],l[4],l[5]);a&&this.ctx.closePath(),this.ctx.strokeStyle=o,this.ctx.stroke(),this.ctx.fillStyle=n,n&&this.ctx.fill()}}const Je={stroke:1,colors:["#d92027","#ff9234","#ffcd3c","#35d0ba"],type:Be.BARS,globalAccessKey:"$wave",getGlobal:(e,t)=>{const{globalAccessKey:n}=Je;return ze(e,n),window[n][e][t]},setGlobal:(e,t,n)=>{const o=Je.globalAccessKey;let r=Je.getGlobal(e,t);return r||(Re(window[o][e],t,n),r=window[o][e][t]),r}};class Xe extends Error{constructor(e){super(` Could not find the canvas with id "${e}"`),this.name="CanvasNotFoundError"}}const Ye={[Be.BARS]:e=>{const{data:t,options:n,ctx:o,h:r,w:a}=e,s=r/255,i=a/64,l=Math.floor(64/n.colors.length);for(let c=1;c<=64;c++){const e=t[c]*s,a=i*c;o.moveTo(a,r),o.lineTo(a,r-e),c%l==0&&(o.strokeStyle=n.colors[c/l-1],o.stroke(),o.beginPath())}},[Be.BARS_BLOCKS]:e=>{const{data:t,options:n,ctx:o,h:r,w:a}=e,s=r/255,i=a/64;for(let l=0;l<64;l++){let e=t[l];e*=s;const n=i*l;o.rect(n,r,i,-e)}o.fillStyle=n.colors[1]||n.colors[0],o.stroke(),o.fill()},[Be.BIG_BARS]:e=>{const{options:t,ctx:n,h:o,w:r}=e;let{data:a}=e;const{colors:s}=t,i=new Ge(n);a=i.mutateData(a,"organize").vocals,a=i.mutateData(a,"shrink",10),a=i.mutateData(a,"scale",o),a=i.mutateData(a,"amp",1);const l=i.getPoints("line",r,[0,o/2],a.length,a,{offset:50});let c=0;const d=Math.ceil(a.length/s.length);l.start.forEach(((e,t)=>{(t+1)%d==0&&c++,i.drawRectangle(e,a[t],r/a.length,{color:s[c]})}))},[Be.CUBES]:e=>{const{options:t,ctx:n,h:o,w:r}=e;let{data:a}=e;const{colors:s}=t,i=new Ge(n);a=i.mutateData(a,"organize").base,a=i.mutateData(a,"shrink",20).slice(0,19),a=i.mutateData(a,"scale",o);const l=i.getPoints("line",r,[0,o],a.length,a),c=r/20-5;let d=0;l.start.forEach(((e,t)=>{const n=Math.ceil(a[t]/c),r=(o-o/c*5)/c,l=Math.ceil(r/s.length);for(let o=1;o<=n;o++){const t=[e[0],e[1]-c*o-5*o];i.drawSquare(t,c,{color:s[d],lineColor:"black"}),o%l==0&&(d++,d>=s.length&&(d=s.length-1))}d=0}))},[Be.DUAL_BARS]:e=>{const{data:t,options:n,ctx:o,h:r,w:a}=e,s=r/255,i=a/128,l=Math.floor(128/n.colors.length);for(let c=1;c<=128;c++){let e=t[c];e+=5,e*=s;const a=i*c,d=r/2+e/2;if(o.moveTo(a,d),o.lineTo(a,d-e),c%l==0){const e=c/l-1;o.strokeStyle=n.colors[e],o.stroke(),o.beginPath()}}},[Be.DUAL_BARS_BLOCKS]:e=>{const{data:t,options:n,ctx:o,h:r,w:a}=e,s=r/255,i=a/50;for(let l=0;l<=50;l++){let e=t[l];e*=s;const n=i*l;o.rect(n,r/2+e/2,i,-e)}n.colors[1]&&(o.fillStyle=n.colors[1],o.fill()),o.stroke()},[Be.FIREWOKS]:e=>{const{options:t,ctx:n,h:o,w:r}=e,{colors:a}=t,s=new Ge(n);let{data:i}=e;i=s.mutateData(i,"shrink",200).slice(0,120),i=s.mutateData(i,"mirror"),i=s.mutateData(i,"scale",o/4+o/4*.35);const l=s.getPoints("circle",o/2,[r/2,o/2],i.length,i,{offset:35,rotate:270});l.start.forEach(((e,t)=>{s.drawLine(e,l.end[t])})),s.drawPolygon(l.start,{close:!0}),l.end.forEach((e=>{s.drawCircle(e,.01*o,{color:a[0]})}))},[Be.FLOWER]:e=>{const{data:t,options:n,ctx:o,h:r,w:a}=e,s=r/4,i=s/2,l=a/2,c=r/2,d=(s-i)/255,u=2.8125*Math.PI/180,p=Math.floor(128/n.colors.length);for(let m=1;m<=128;m++){const e=(t[m]+5)*d,r=m*u,a=l+(s-(e-i))*Math.cos(r),h=c+(s-(e-i))*Math.sin(r);o.moveTo(a,h);const g=l+(s+e)*Math.cos(r),f=c+(s+e)*Math.sin(r);if(o.lineTo(g,f),m%p==0){const e=m/p-1;o.strokeStyle=n.colors[e],o.stroke(),o.beginPath()}}o.stroke()},[Be.FLOWER_BLOCKS]:e=>{const{data:t,options:n,ctx:o,h:r,w:a}=e,s=r/4,i=a/2,l=r/2,c=s/255,d=360/56*Math.PI/180;for(let u=1;u<=56;u++){const e=t[u]*c,n=u*d,r=i+(s-e/2)*Math.cos(n),a=l+(s-e/2)*Math.sin(n);o.moveTo(r,a);const p=i+(s+e)*Math.cos(n),m=l+(s+e)*Math.sin(n);o.lineTo(p,m);const h=i+(s+e)*Math.cos(n+d),g=l+(s+e)*Math.sin(n+d);o.lineTo(h,g);const f=i+(s-e/2)*Math.cos(n+d),v=l+(s-e/2)*Math.sin(n+d);o.lineTo(f,v),o.lineTo(r,a)}n.colors[1]&&(o.fillStyle=n.colors[1],o.fill()),o.stroke()},[Be.ORBS]:e=>{const{options:t,ctx:n,h:o,w:r}=e;let{data:a}=e;const{colors:s}=t,i=new Ge(n);a=i.mutateData(a,"organize").mids,a=i.mutateData(a,"split",2)[0],a=i.mutateData(a,"shrink",100),a=i.mutateData(a,"mirror"),a=i.mutateData(a,"scale",o),a=i.mutateData(a,"amp",.75);const l=i.getPoints("line",r,[0,o/2],a.length,a,{offset:50});l.start.forEach(((e,t)=>{i.drawLine(e,l.end[t],{lineColor:s[0]}),i.drawCircle(e,.01*o,{color:s[1]||s[0]}),i.drawCircle(l.end[t],.01*o,{color:s[1]||s[0]})}))},[Be.RING]:e=>{const{data:t,options:n,ctx:o,h:r,w:a}=e,s=a/2,i=r/2,l=(r-10)/2,c=(l-l/5)/255,d=2.4*Math.PI/180;o.arc(s,i,l,0,2*Math.PI,!0);const u=s+(l-t[0]*c)*Math.cos(0),p=i+(l-t[0]*c)*Math.sin(0);o.moveTo(u,p);let m=0;for(let h=0;h<150;h++){m+=1,h>=75&&(m-=2);let e=t[m];e*=c;const n=h*d,r=s+(l-e)*Math.cos(n),a=i+(l-e)*Math.sin(n);o.lineTo(r,a),o.arc(r,a,2,0,2*Math.PI)}o.lineTo(u,p),o.stroke(),o.fillStyle=n.colors[1]||"#fff000",o.fill()},[Be.RINGS]:e=>{const{options:t,ctx:n,h:o,w:r}=e;let{data:a}=e;const s=o<r?o:r,i=new Ge(n),{colors:l}=t;a=i.mutateData(a,"organize"),a=[a.mids,a.vocals],a[0]=i.mutateData(a[0],"scale",s/4),a[1]=i.mutateData(a[1],"scale",s/8),a[0]=i.mutateData(a[0],"shrink",.2),a[0]=i.mutateData(a[0],"split",2)[0],a[0]=i.mutateData(a[0],"reverb"),a[1]=i.mutateData(a[1],"reverb");const c=i.getPoints("circle",s/2,[r/2,o/2],a[0].length,a[0]),d=i.getPoints("circle",s/4,[r/2,o/2],a[1].length,a[1]);i.drawPolygon(c.end,{close:!0,radius:4,lineColor:l[0],color:l[1]}),i.drawPolygon(d.end,{close:!0,radius:4,lineColor:l[2],color:l[3]});const u=(s/4+s/2)/2,p=a[1]=i.mutateData(a[1],"scale",s/4-s/2),m=i.getPoints("circle",u,[r/2,o/2],a[1].length,p);m.start.forEach(((e,t)=>{i.drawLine(e,m.end[t],{lineColor:l[4]||l[2]})}))},[Be.ROUND_WAVE]:e=>{const{data:t,options:n,ctx:o,h:r,w:a}=e,s=r/4,i=a/2,l=r/2,c=s/255,d=3.6*Math.PI/180,u=i+(s+0)*Math.cos(0),p=l+(s+0)*Math.sin(0);o.moveTo(u,p);for(let m=1;m<=100;m++){const e=t[350%m]*c,n=m*d,r=i+(s+e)*Math.cos(n),a=l+(s+e)*Math.sin(n);o.lineTo(r,a)}o.closePath(),o.stroke(),n.colors[1]&&(o.fillStyle=n.colors[1],o.fill())},[Be.SHOCKWAVE]:e=>{const{options:t,ctx:n,h:o,w:r}=e;let{data:a}=e;const{colors:s}=t,i=new Ge(n);a=i.mutateData(a,"shrink",300),a=i.mutateData(a,"scale",o/2),a=i.mutateData(a,"split",4).slice(0,3);let l=0;a.forEach((e=>{const t=i.getPoints("line",r,[0,o/2],e.length,e);i.drawPolygon(t.end,{lineColor:s[l],radius:.015*o});const n=i.getPoints("line",r,[0,o/2],e.length,e,{offset:100});i.drawPolygon(n.start,{lineColor:s[l],radius:.015*o}),l++}))},[Be.SHINE]:e=>{const{data:t,options:n,ctx:o,h:r,w:a}=e,s=r/4,i=a/2,l=r/2,c=s/255,d=360/56*Math.PI/180;for(let u=1;u<=56;u++){const e=t[u]*c,n=u*d,r=i+(s-e/2)*Math.cos(n),a=l+(s-e/2)*Math.sin(n);o.moveTo(r,a);const p=i+(s+e)*Math.cos(n),m=l+(s+e)*Math.sin(n);o.lineTo(p,m);const h=i+(s+e)*Math.cos(n+d),g=l+(s+e)*Math.sin(n+d);o.lineTo(h,g);const f=i+(s-e/2)*Math.cos(n+d),v=l+(s-e/2)*Math.sin(n+d);o.lineTo(f,v),o.lineTo(r,a)}n.colors[1]&&(o.fillStyle=n.colors[1],o.fill()),o.stroke()},[Be.SHINE_RINGS]:e=>{const{options:t,ctx:n,h:o,w:r}=e;let{data:a}=e;const{colors:s}=t,i=new Ge(n),l=o<r?o:r;a=i.mutateData(a,"organize"),a.vocals=i.mutateData(a.vocals,"scale",l/2/2),a.base=i.mutateData(a.base,"scale",l/2/2);const c=i.getPoints("circle",l/2,[r/2,o/2],a.vocals.length,a.vocals),d=i.getPoints("circle",l/2,[r/2,o/2],a.vocals.length,a.vocals,{offset:100}),u=i.getPoints("circle",l/2,[r/2,o/2],a.base.length,a.base,{offset:100});c.start.forEach(((e,t)=>{i.drawLine(e,c.end[t],{lineColor:s[0]})})),i.drawPolygon(d.start,{close:!0,lineColor:s[1],color:s[3],radius:5}),i.drawPolygon(u.start,{close:!0,lineColor:s[2],color:s[4],radius:5})},[Be.STAR]:e=>{const{data:t,options:{colors:n},ctx:o,h:r,w:a}=e,s=r/4,i=s/4,l=a/2,c=r/2,d=(s-i-35)/255,u=3*Math.PI/180,p=[],m=[];for(let h=1;h<=120;h++){const e=t[200%h]*d,n=h*u,r=l+(s-e+i)*Math.cos(n),a=c+(s-e+i)*Math.sin(n);o.moveTo(r,a),m.push({x:r,y:a});const g=l+(s+e+i)*Math.cos(n),f=c+(s+e+i)*Math.sin(n);o.lineTo(g,f),p.push({x:g,y:f})}o.moveTo(p[0].x,p[0].y);for(let h in p)h=p[h],o.lineTo(h.x,h.y);o.closePath(),o.moveTo(m[0].x,m[0].y);for(let h=m.length-1;h>=0;h--)h=m[h],o.lineTo(h.x,h.y);o.closePath(),n[1]&&(o.fillStyle=n[1],o.fill()),o.stroke(),o.beginPath(),o.moveTo(m[0].x,m[0].y);for(let h in m)h=m[h],o.lineTo(h.x,h.y);o.closePath(),n[2]&&(o.fillStyle=n[2],o.fill()),o.stroke()},[Be.STATIC]:e=>{const{ctx:t,h:n,w:o}=e;let{data:r}=e;const a=new Ge(t);r=a.mutateData(r,"shrink",1/8),r=a.mutateData(r,"split",2)[0],r=a.mutateData(r,"scale",n);const s=a.getPoints("line",o,[0,n/2],r.length,r,{offset:50});let i=null;s.start.forEach(((e,t)=>{i&&a.drawLine(i,e),a.drawLine(e,s.end[t]),i=s.end[t]}))},[Be.STITCHES]:e=>{const{ctx:t,h:n,w:o}=e;let{data:r}=e;const a=new Ge(t),s=n<o?n:o;r=a.mutateData(r,"shrink",200),r=a.mutateData(r,"split",2)[0],r=a.mutateData(r,"scale",n/2);const i=a.getPoints("circle",s/2,[o/2,n/2],r.length,r,{offset:50});a.drawPolygon(i.end,{close:!0}),a.drawPolygon(i.start,{close:!0});for(let l=0;l<i.start.length;l+=1){const e=i.start[l];l++;const t=i.end[l]||i.end[0];a.drawLine(e,t),a.drawLine(t,i.start[l+1]||i.start[0])}},[Be.WAVE]:e=>{const{ctx:t,h:n,w:o,options:r}=e;let{data:a}=e;const s=new Ge(t);a=s.mutateData(a,"split",4)[0],a=s.mutateData(a,"scale",n);const i=s.getPoints("line",o,[0,n],a.length,a,{offset:100});i.start=i.start.slice(0,i.end.length-1),i.start.push([o,n]),i.start.push([0,n]),s.drawPolygon(i.start,{lineColor:r[0],color:r[1],radius:.008*n})},[Be.WEB]:e=>{const{ctx:t,h:n,w:o,options:r}=e;let{data:a}=e;const s=new Ge(t),i=n<o?n:o;a=s.mutateData(a,"shrink",100),a=s.mutateData(a,"split",2)[0],a=s.mutateData(a,"scale",n/4);let l=a,c=s.getPoints("circle",i/2,[o/2,n/2],a.length,a);s.drawPolygon(c.end,{close:!0}),c.start.forEach(((e,t)=>{s.drawLine(e,c.end[t])})),a=s.mutateData(a,"scale",.7),c=s.getPoints("circle",i/2,[o/2,n/2],a.length,a),s.drawPolygon(c.end,{close:!0}),a=s.mutateData(a,"scale",.3),c=s.getPoints("circle",i/2,[o/2,n/2],a.length,a),s.drawPolygon(c.end,{close:!0}),s.drawCircle([o/2,n/2],i/2,{color:r[2]}),l=s.mutateData(l,"scale",1.4),c=s.getPoints("circle",i/2,[o/2,n/2],l.length,l),c.end.forEach((e=>{s.drawCircle(e,.01*i,{color:r[1],lineColor:r[1]||r[0]})}))}},He={};function Ke(e,t,n,o){const r=i(i({},Je),n||{}),a="string"==typeof t?document.getElementById(t.toString()):t;if(!a)throw new Xe(t.toString());const s=a.id,l=a.getContext("2d"),c=a.height,d=a.width;l.strokeStyle=r.colors[0],l.lineWidth=Number(r.stroke.toString());const u={data:e,options:r,ctx:l,h:c,w:d,canvasId:s},p=Array.isArray(r.type)?r.type:[r.type];Re(He,p[0].toString(),1),o%He[p[0].toString()]==0&&(l.clearRect(0,0,d,c),l.beginPath(),p.forEach((e=>{Ye[e.toString()](u)})))}class Ze extends Error{constructor(e){super(` Could not find the element with id "${e}"`),this.name="ElementNotFoundError"}}class Qe{constructor(e,t,n,o){this.element=e,this.canvasId=t,this.options=n,this.fromElementOptions=o,this.activated=!1,this.analyser=null,this.activeCanvas={},this.activeElements={},this.frameCount=1,this.currentCount=0,this.data=null,this.bufferLength=null,this.audioCtx=null,["touchstart","touchmove","touchend","mouseup","click"].forEach((e=>{document.body.removeEventListener(e,this.initialize)})),this.element.removeEventListener("play",this.initialize)}isActivated(){return this.activated}activate(){this.activated=!0}deactivate(){this.activated=!1,We(document.getElementById(this.canvasId)),!this.fromElementOptions.existingMediaStreamSource&&this.audioCtx&&this.audioCtx.close().then()}initializeAfterUserGesture(){["touchstart","touchmove","touchend","mouseup","click"].forEach((e=>{document.body.addEventListener(e,this.initialize.bind(this),{once:!0})})),this.element.addEventListener("play",this.initialize.bind(this),{once:!0})}initialize(){this.activate(),this.activeCanvas[this.canvasId]=JSON.stringify(this.options);const e=this.element.id;Re(this.activeElements,e,{}),this.activeElements[e]=this.activeElements[e]||{},this.activeElements[e].count?this.activeElements[e].count+=1:this.activeElements[e].count=1;const{setGlobal:t,getGlobal:n}=this.options;this.currentCount=this.activeElements[e].count;let o=n(e,"source");if(!o||o.mediaElement!==this.element){const n=t(e,"audioCtx",new E);this.audioCtx=n,o=this.fromElementOptions.existingMediaStreamSource||n.createMediaElementSource(this.element)}this.analyser=t(e,"analyser",o.context.createAnalyser()),t(e,"source",o);const r=o.context.createOscillator();r.frequency.value=1,r.connect(o.context.destination),r.start(0),r.stop(0),this.fromElementOptions.connectDestination&&this.connectSource(o,o.context.destination),this.connectSource(o,this.analyser),this.analyser.fftsize=32768,this.bufferLength=this.analyser.frequencyBinCount,this.data=new Uint8Array(this.bufferLength),this.renderFrame()}renderFrame(){if(!this.isActivated())return;const e=this.element.id;if(JSON.stringify(this.options)===this.activeCanvas[this.canvasId]){if(!document.getElementById(e))throw new Ze(e);if(!document.getElementById(this.canvasId))throw new Xe(this.canvasId);requestAnimationFrame(this.renderFrame.bind(this)),this.frameCount++,this.currentCount<this.activeElements[e].count||(this.analyser.getByteFrequencyData(this.data),this.activeElements[e].data=this.data),Ke(this.activeElements[e].data,this.canvasId,this.options,this.frameCount)}}connectSource(e,t){e.connect(t)}}const et=(e,t,n,o,r)=>{e.activated&&(t.getByteFrequencyData(e.data),Ke(e.data,e.canvasId,e.options,r),n[o.id].animation=requestAnimationFrame(e.loop))};var tt={fromElement:function(e,t,n,o){const r="string"==typeof e?document.getElementById(e):e;if(!r)throw new Ze("string"==typeof e?e:"");const a="string"==typeof t?document.getElementById(t):t;if(!r)throw new Xe("string"==typeof t?t:"");r.crossOrigin="anonymous";const s=i(i({},Je),n||{});Fe(s.type);const l=i({connectDestination:!0,skipUserEventsWatcher:!1,existingMediaStreamSource:null},o||{}),c=new Qe(r,a.id,s,l);return c.isActivated()||l.skipUserEventsWatcher?c.initialize():c.initializeAfterUserGesture(),{deactivate:()=>{c.deactivate()}}},fromFile:function(e,t,n){const o=i(i({},Je),t||{}),{callback:r,width:a,height:s,format:l,drawRate:c}=i({width:window.innerWidth,height:window.innerHeight,format:"png",drawRate:20,callback:()=>null},n);Fe(o.type);const d=`image/${l}`,u=((e,t)=>{const n=document.createElement("canvas");return n.height=t,n.width=e,n})(a,s),p=new Audio(e),m=new E,h=m.createAnalyser(),g=m.createMediaElementSource(p);h.fftSize=1024;const f=h.frequencyBinCount,v=new Uint8Array(f);let w=null;g.connect(h),p.addEventListener("loadedmetadata",(()=>p.play().then()));const y=()=>{let e=1;w=setInterval((()=>{h.getByteFrequencyData(v),Ke(v,u,o,e++),r(u.toDataURL(d))}),c)},x=()=>{p.currentTime===p.duration&&void 0!==v&&clearInterval(w)};return p.addEventListener("play",y),p.addEventListener("ended",x),{deactivate:()=>{p.removeEventListener("play",y),p.removeEventListener("ended",x),clearInterval(w),m.close().then(),We(u),r(u.toDataURL(d))}}},fromStream:function(e,t,n,o){const r=i(i({},Je),n||{}),a=i({connectDestination:!0},o||{});Fe(r.type);const{connectDestination:s}=a,l={canvasId:t,options:r,data:null,loop:null,animation:null,activated:!0},c=ze("stream-sources",r.globalAccessKey),d=new E,u=d.createAnalyser(),p=d.createMediaStreamSource(e);p.connect(u),s&&p.connect(d.destination),c[e.id]={audioCtx:d,analyser:u,source:p},u.fftSize=32768;const m=u.frequencyBinCount;return l.data=new Uint8Array(m),this.frameCount=1,l.loop=()=>et(l,u,c,e,++this.frameCount),et(l,u,c,e,1),{deactivate:()=>{We(document.getElementById(l.canvasId)),d.close().then(),l.activated=!1}}}};const nt=({audioStream:e})=>{const t=c.exports.useRef(null);return c.exports.useEffect((()=>{if(!t.current)return;const n="_"+Math.random().toString(36).substr(2,9);t.current.id=`audioCanvas${n}`;const{deactivate:o}=tt.fromStream(e,t.current.id,{type:"dualbars blocks",colors:["green","lightgreen"],stroke:3},{connectDestination:!1});return()=>{o()}}),[e]),d.createElement("div",{className:"audio"},d.createElement("canvas",{className:"audioCanvas",ref:t}))},ot=()=>({type:me.Text,src:"",direction:ge.Out}),rt={recording:null,messages:[],recordButtonIsAudio:!0,currentMessageValue:ot()},at={recordingEnded:e=>{e.recording=null},setState:(e,t)=>I.merge(e,t),recordingStarted:(e,t)=>{e.recording=t;const n=t.video?me.Video:me.Audio;e.currentMessageValue={type:n,src:"",direction:ge.Out}},cleanCurrentMessage:e=>{e.recording=null,e.currentMessageValue={type:me.Text,src:"",direction:ge.Out}},fileChosen:(e,t)=>{const n=URL.createObjectURL(t);e.currentMessageValue={src:n,type:me.File,direction:ge.Out},e.currentMessageValue.meta=t;const{type:o}=t;o.includes(me.Image)&&(e.currentMessageValue.type=me.Image),o.includes(me.Video)&&(e.currentMessageValue.type=me.Video),console.log("File chosen:",t)},sendMessage:e=>{e.messages.push(e.currentMessageValue),e.currentMessageValue=ot()}},st=(e,t)=>M(e,(e=>at[t.type](e,t.payload))),it=({src:e})=>e?d.createElement("div",{className:"mediaPreviewContainer"},d.createElement("img",{src:e,alt:"Selected by user"})):null,lt=x.span`
  background: 0;
  border: 0;
  display: grid;
  place-items: center;

  label {
    display: grid;
    place-items: center;

    svg {
      cursor: pointer;
      fill: #0084ff;
      height: 30px;
    }
  }
`,ct=({setFile:e})=>d.createElement(lt,null,d.createElement("label",null,d.createElement("input",{type:"file",onChange:t=>{var n;if(!(null==(n=t.target.files)?void 0:n.length))return void console.error("No files chosen!");const o=t.target.files[0];t.target.value="",e(o)},style:{display:"none"}}),d.createElement(ke,null))),dt=x.div`
  background: 0;
  display: grid;
  place-items: center;
  height: 2em;
  margin-right: 0.5em;

  svg {
    height: 90%;
    cursor: pointer;
  }
`,ut=()=>{const[e,t]=c.exports.useReducer(st,rt),n=c.exports.useMemo((()=>le(at).reduce(((e,n)=>(e[n]=e=>{t({type:n,payload:e})},e)),{})),[t]),{messages:o,currentMessageValue:r,recordButtonIsAudio:a,recording:s}=e,u=c.exports.useRef(),[p,m]=c.exports.useState(!1),h=c.exports.useRef(null),f=c.exports.useRef(null),v=async e=>{if(s)return;const t=await Q((e=>{n.setState({currentMessageValue:{src:e}}),console.log({url:e})}),(e=>h.current=e),e);t&&(n.recordingStarted(e),f.current=t)},w=()=>!s&&n.setState({recordButtonIsAudio:!a}),y=Y((()=>v({audio:!0})),void 0,w),E=Y((()=>v({audio:!0,video:!0})),void 0,w),x=r.type===me.Text&&d.createElement(ye,{className:"smile",onClick:()=>m(!p)}),I=(null==r?void 0:r.type)===me.Text&&d.createElement(b,{ref:u,onChange:e=>n.setState({currentMessageValue:{src:e}}),value:r.src,sendButton:!1,attachButton:!1,onSend:n.sendMessage,placeholder:"Type message here..."}),M=d.createElement("button",l(i({},y),{className:"recordMicrophone"+((null==s?void 0:s.audio)?" active":"")}),d.createElement(we,null)),N=d.createElement("button",l(i({},E),{className:"recordMicrophone"}),d.createElement(_e,null)),D=r.type!==me.Text&&r.src&&d.createElement(be,{onClick:n.cleanCurrentMessage,className:"trashButton"}),P=""!==r.src&&d.createElement(_,{className:"sendButton",onClick:n.sendMessage}),T=""===r.src&&!s&&d.createElement(ct,{setFile:n.fileChosen}),O=(""===r.src||s)&&(a?M:N),L=s&&d.createElement(dt,null,d.createElement(Ie,{onClick:()=>{var t;h.current=null,null==(t=f.current)||t.call(f),n.recordingEnded(void 0),console.log(e)}})),A=d.createElement("div",{as:k},r.type===me.Video&&d.createElement(Le,{stream:h.current,src:r.src}),r.type===me.Image&&d.createElement(it,{src:r.src}),p&&d.createElement(ve,{onValue:e=>n.setState({currentMessageValue:{src:r.src+e}})}));return d.createElement("div",{className:"mainChatContainer"},d.createElement(C,{responsive:!0},d.createElement(S,null,d.createElement(Te,{as:g,messages:o}),d.createElement("div",{className:"MessageInput",as:b},D,x,h.current&&d.createElement(nt,{audioStream:h.current}),r.type===me.Audio&&r.src&&d.createElement(Me,{src:r.src}),r.type===me.File&&d.createElement(Ne,i({},l(i({},r),{meta:r.meta,type:void 0}))),I,P,T,L,O),A)))};const pt=N("addNewNode"),mt=N("dragTemplate"),ht=N("canvasShapeUpdated"),gt=N("insertCopiedNode"),ft=N("toggleSidebar"),vt=N("setState");class wt{constructor(e,t){this.spacingX=40,this.spacingY=60,this.id=e,this.flow=t,this.state=t.state,this.nodeState=this.state.drawflow[this.id]}get head(){return this.nodeState.head}get lane(){return this.nodeState.lane}get port(){return this.nodeState.port}get portInPos(){var e;return null==(e=this.state.ports.find((({nodeId:e,portId:t,type:n})=>e===this.id&&1===t&&n===se.in)))?void 0:e.pos}get outPorts(){return this.state.ports.filter((({type:e,nodeId:t})=>this.id===t&&e===se.out))}get parent(){var e;const t=null==(e=this.parentConnection)?void 0:e.startId;return t?this.flow.getNode(t):null}get parentConnection(){return this.state.connections.find((e=>{e||console.error({conn:e});const{endId:t,endPort:n}=e;return t===this.id&&1===n}))}get totalWidth(){return!1===this.nodeState.visible?0:Math.max(this.width+this.subnodesWidth,this.leftWidth+this.rightWidth)}get childrenTotalWidth(){const{out1:e}=this;if(!e.length)return 0;let t=0;return e.forEach((e=>{t+=e.totalWidth})),t+this.spacingX*(e.length-1)}get leftWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,n=this.width/2;if(!e.length)return n;const o=e[0].leftWidth,r=o+(t-o-e[e.length-1].rightWidth)/2;return Math.max(r,n)}get rightWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,n=this.width/2+this.subnodesWidth;if(!e.length)return n;const o=e[0].leftWidth,r=e[e.length-1].rightWidth,a=r+(t-o-r)/2;return Math.max(a,n)}get all2Successors(){const{subnodes:e,out1:t}=this,n=[...t];return e.forEach((e=>n.push(e))),this.out1.forEach((e=>n.push(e))),n}get allSuccessors(){const e=[...this.out1,...this.subnodes],t=[...e];return e.forEach((e=>t.push(...e.allSuccessors))),t}get outConnections(){return this.state.connections.filter((({startId:e})=>e===this.id))}get out1(){return this.children(1)}get prevDirectNodes(){const e=[];let t=this.parent;for(;t;)e.push(...t.subnodes.reverse()),e.push(t),t=t.parent;return e}get firstSubnode(){return this.children(2)[0]}get subnodes(){var e,t;return(null==(t=null==(e=this.firstSubnode)?void 0:e.flowLine)?void 0:t.flowLineNodes)||[]}get subnodesWidth(){return!1===this.nodeState.subnodesVisibility?0:this.subnodes.reduce(((e,t)=>e+t.width+this.spacingX),0)}get isSub(){return null!==this.complexParentNode}get complexParentNode(){const e=this.parent;return e?e.firstSubnode===this?e:e.complexParentNode:null}get flowLine(){const e=[this];let t=this,n=t.firstSubnode;for(;1===t.out1.length;)t=t.out1[0],e.push(t),n=n||t.firstSubnode;return t.out1.length>1?null:{flowLineNodes:e,hasSubnodes:n}}get height(){return this.state.drawflow[this.id].height}get width(){return this.state.drawflow[this.id].width}get pos(){return this.state.drawflow[this.id].pos}alignChildren(){const{out1:e}=this;this.update({isSub:!1,port:{out:2}});let t=this.pos.x-(this.leftWidth-this.width/2);for(const o of e){const e=t+(o.leftWidth-o.width/2);o.setPos({x:e,y:this.pos.y+this.height+this.spacingY}),!1!==o.nodeState.visible&&(t+=o.totalWidth+this.spacingX),o.alignChildren()}const{subnodes:n}=this;n.length&&(t=this.pos.x+this.width+this.spacingX,n.forEach((e=>{e.update({isSub:!0,port:{out:1}}),e.setPos({x:t,y:this.pos.y+(this.height/2-e.height/2)}),t+=e.width+this.spacingX})))}toggleVisibility(e){this.update({visible:e}),this.parentConnection&&(this.parentConnection.visible=e),this.outConnections.forEach((t=>{t.visible=e}))}toggleChildrenVisibility(){var e;const t=null==(e=this.nodeState.childrenVisibility)||e;this.update({childrenVisibility:!t});const{subnodes:n,allSuccessors:o}=this;o.forEach((e=>{n.includes(e)||e.toggleVisibility(!t)}))}toggleSubnodesVisibility(){var e;const t=null==(e=this.nodeState.subnodesVisibility)||e;this.update({subnodesVisibility:!t}),this.subnodes.forEach((e=>{e.toggleVisibility(!t)}))}children(e){return this.state.connections.filter((({startId:t,startPort:n})=>t===this.id&&n===e)).map((e=>this.flow.getNode(e.endId)))}setPos(e){const{pos:t}=this,{x:n,y:o}=e;this.flow.moveNode({nodeId:this.id,dx:n-t.x,dy:o-t.y})}putInCenter(e){const{width:t,height:n}=e;this.setPos({x:t/3,y:n/3})}update(e){const t=I.merge(this.nodeState,e);Object.assign(this.nodeState,t)}}var yt=Object.defineProperty,Et=Object.getOwnPropertyDescriptor;const xt=class{constructor(e){this.nodes={},this.distanceToConnect=100,this.distanceToDisconnect=10,this.state=e;const{drawflow:t}=this.state;Object.keys(t).map((e=>this.nodes[Number(e)]=new wt(Number(e),this)))}get heads(){return Object.entries(this.nodes).filter((([,e])=>!e.parent)).map((e=>e[1]))}getNode(e){const t=this.nodes[e];if(void 0===t)throw new Error(`Cannot get node with id: ${e}. Node is not present in flow array of nodes`);return t}align(){return this.setLaneNumbers(),this.heads.forEach(((e,t)=>{e.alignChildren()})),this.state.drawflow}alignAll(){this.state.drawflow=new xt(JSON.parse(JSON.stringify(this.state))).align()}addConnection(e){let{startId:t,startPort:n,endId:o,endPort:r}=e;const a=this.getNode(o),s=this.getNode(t),i=2===n;if(a.parent||!1===s.nodeState.visible)return!1;const l=a.flowLine;if((i||s.isSub)&&(!l||l.hasSubnodes))return!1;let c=null;if(i&&s.subnodes.length){if(!1===s.nodeState.subnodesVisibility){t=s.subnodes[s.subnodes.length-1].id,n=1,this.state.connections.push({startId:t,startPort:n,endId:o,endPort:r,visible:!0});const{flowLineNodes:e}=l;return void e.forEach((e=>e.toggleVisibility(!1)))}c=s.subnodes[0]}if(s.isSub&&s.out1.length&&(c=s.out1[0]),null!==c){const e=this.state.connections.find((e=>e.startId===t&&e.startPort===n&&e.endId===c.id&&1===e.endPort)),o=this.state.connections.indexOf(e);this.state.connections.splice(o,1);const{flowLineNodes:r}=l,a=r[r.length-1];this.state.connections.push({startId:a.id,startPort:1,endId:c.id,endPort:1,visible:!0})}this.state.connections.push({startId:t,startPort:n,endId:o,endPort:r,visible:!0})}moveNode({dx:e,dy:t,nodeId:n}){this.state.drawflow[n].pos.x+=e,this.state.drawflow[n].pos.y+=t}dragNode({dx:e,dy:t,nodeId:n}){this.moveNode({dx:e,dy:t,nodeId:n}),this.toggleAvailablePortToConnect(n)}toggleAvailablePortToConnect(e){if(!this.state.config.drag)return;const t=this.getNode(e),n=t.head;if(t.parentConnection){const{startPort:e,endPort:n,startId:o,endId:r}=t.parentConnection,{pos:{x:a,y:s}}=this.state.ports.find((({portId:t,nodeId:n,type:r})=>n===o&&"out"===r&&t===e)),{pos:{x:i,y:l}}=this.state.ports.find((({portId:e,nodeId:t,type:o})=>t===r&&"in"===o&&e===n)),c=Math.hypot(a-i,s-l);if(Math.abs(c-t.spacingY)<this.distanceToDisconnect)return;const d=this.state.connections.indexOf(t.parentConnection);this.state.connections.splice(d,1),this.alignAll()}const o=t.portInPos;if(!o)return;let r=null;Object.entries(this.nodes).filter((([,e])=>e.head!==n&&!1!==e.nodeState.visible)).forEach((([t,n])=>{Number(t)!==e&&n.outPorts.forEach((e=>{const{pos:t}=e,n=Math.hypot(o.x-t.x,o.y-t.y);n<this.distanceToConnect&&(null===r||n<r.distance)&&(r={port:e,distance:n})}))})),this.state.portToConnect=null!==r?r.port:void 0}setLaneNumbers(){let e=this.heads;for(e.forEach((e=>e.update({head:e.id,lane:0})));e.length;){const t=[];e.forEach((e=>{let n=e.lane+1;const{subnodes:o,head:r}=e;if(void 0===r)return void console.error("head is undefined in setLaneNumbers");if(o.length)for(const t of o)t.update({lane:n++,head:r});const a=e.children(1);a.forEach((e=>e.update({head:r,lane:n}))),t.push(...a)})),e=t}this.heads.forEach((e=>{const{head:t}=e;for(let n=0,o=0,r=[e];r.length;++n)r=Object.values(this.nodes).filter((e=>e.lane===n&&e.head===t)),r.forEach((e=>{e.update({positionNumber:o++})}))}))}};let bt=xt;((e,t,n,o)=>{for(var r,a=o>1?void 0:o?Et(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o?r(t,n,a):r(a))||a);o&&a&&yt(t,n,a)})([(e,t,n)=>{const o=n.value;return n.value=function(...e){console.time(t);const n=o.apply(this,e);return console.timeEnd(t),n},n}],bt.prototype,"align",1);var _t,kt;(kt=_t||(_t={}))[kt.getTemplateNodes=1156]="getTemplateNodes",kt[kt.postTemplateNodes=1157]="postTemplateNodes",kt[kt.getFlowDataVersion=1160]="getFlowDataVersion",kt[kt.postFlowDataVersion=1161]="postFlowDataVersion",kt[kt.getFlow=1162]="getFlow",kt[kt.postFlow=1163]="postFlow",kt[kt.fetchBackgroundImages=1164]="fetchBackgroundImages",kt[kt.getGroups=1154]="getGroups",kt[kt.postGroups=1155]="postGroups",kt[kt.getStepSettingsTemplates=1222]="getStepSettingsTemplates";const Ct=async(e,t={})=>{const n=window.location.search,o=new URLSearchParams(n).get("session_id");o||(console.error("session_id is not provided!"),alert("session_id is not provided!"));const r=i({session_id:o,sp_name:"OK",session_exp:"2021-02-12T02:57:45.453422",status:"OK",item_id:0,max_row_per_page:50,search_term:"",search_term_header:"",pagination:1,scrdata_id:e},t);return fetch("https://valerii.educationhost.cloud?csurl=https://tastypoints.io/akm/restapi.php",{method:"post",body:JSON.stringify({input:r}).replace(/'/g,"''")}).then((async e=>{let t=await e.json();if(!t.status||!t.data)throw console.error(t),alert(t),alert(JSON.stringify(t,null,2)),new Error(t);if(t=JSON.parse(t.data),t.response_error)throw console.error(t.response_error),alert(JSON.stringify(t.response_error,null,2)),new Error(t.response_error);if("OK"!==t.status&&"OK"!==t.sp_name)throw alert(JSON.stringify(t,null,2)),new Error(t.response_error);return t}))},St=D("fetchFlow",(async(e,{dispatch:t})=>{const n=await Ct(1162,{item_id:25});if(null===n.flows)return void alert("Such flow do not exist or was deleted!");const o=n.flows[0];t(vt({flowInfo:o}))})),It=D("fetchFlow",(async(e,{getState:t})=>{const{flowInfo:n}=t();if(!n)return void console.error("Cannot save flow, data is not available");"OK"===(await Ct(1163,{item_id:25,flows:[n]})).status?alert("Saved"):alert("Cannot save flow")})),Mt=D("fetchGroups",(async()=>{const e=await Ct(1154),{flow_nodes_group:t}=e;return t.reduce(((e,t)=>(e[t.id]=t,e)),{})})),Nt=D("updateGroup",(async(e,{dispatch:t})=>{var n;"delete"in e||(e.delete=0);const o=await Ct(1155,{flow_nodes_group:[e],item_id:null!=(n=e.id)?n:0});"OK"===o.status?(t(Mt()),e.id||(e.id=o.item_id),alert(`Group ${e.id} updated`)):alert(`Error: cannot ${e.id?"update":"create"} group ${e.node_group_name}`)})),Dt=D("fetchTemplateNodes",(async()=>{const{flow_nodes:e}=await Ct(1156,{});return e})),Pt=D("updateTemplateNode",(async(e,{dispatch:t})=>{var n;console.log({templateNode:e}),"delete"in e||(e.delete=0);const o=await Ct(1157,{flow_nodes:[e],item_id:null!=(n=e.nodes_id)?n:0});console.log({resp:o}),"OK"===o.status?(t(Dt()),e.nodes_id||(e.nodes_id=o.item_id,t(vt({windowConfig:{id:e.nodes_id,mainId:ce.templateNodeSettings}}))),alert(`TemplateNode ${e.nodes_id} updated`),1===e.delete&&t(vt({windowConfig:{mainId:ce.mainFlow}}))):alert(`Error: cannot ${e.nodes_id?"update":"create"} templateNode ${e.name}, ID: ${e.nodes_id}`)})),Tt=D("fetchFlowVersion",(async e=>{const t=(await Ct(1160,{item_id:25,show_ver:e})).flow_steps;return null===t?null:t.filter((({update_version:t})=>t===e||0===e))})),Ot=D("postFlowVersion",(async(e,{getState:t,dispatch:n})=>{const o=t(),r=o.flows[o.version],a=new bt(r),{drawflow:s}=r,c=Object.values(JSON.parse(JSON.stringify(s))).map((e=>{const{subnodes:t}=a.getNode(e.id),{data:n}=e;return n.flow_node={},["name","description","icon_link_selected"].forEach((e=>{n.flow_node[`node_${e}`]=n[e],delete n[e]})),n.flow_node.node_tooltip=n.nodes_tooltip,delete n.nodes_tooltip,l(i(i({},n),((e,t)=>{var n,o;const r=new bt(e).getNode(t),{nodeState:a}=r;return{node_position:a.positionNumber,flow_lane_id:a.lane,flow_step_x:Math.round(a.pos.x),flow_step_y:Math.round(a.pos.y),prev_node_unique_id:null!=(o=null==(n=r.parent)?void 0:n.id)?o:null,this_node_unique_id:r.id}})(r,e.id)),{node_attributes:t.map((({id:e})=>e))})}));if(0===c.length)return void alert("Please add at least one node in flow to allow commit!");console.log(c);const d=await Ct(1161,{item_id:25,flow_steps:c});"OK"!==d.status||"OK"!==d.sp_name?(console.error(d),alert(JSON.stringify(d))):(alert("Flow successfully updated."),n(Tt(0)))})),Lt=D("initFlow",(async(e,{dispatch:t})=>{t(Tt(0))})),At=D("changeVersion",(async(e,{dispatch:t,getState:n})=>{const{flows:o}=n();return o[e]?e:void t(Tt(e))})),Vt={nodeId:1,canvasDrag:!1,config:{drag:!1,connectionsLabelEnable:!1,canvasTranslate:{x:0,y:0},zoom:{value:1,max:2,min:.5,tick:.1}},drawflow:{},connections:[],connectionsLabel:{},ports:[],select:null,newPathDirection:null,modalType:null,editLock:!1,mouseBlockDragPos:{clientX:void 0,clientY:void 0}},Bt=(e,{payload:t})=>{const n=I.merge(e,t);le(n).forEach((t=>{e[t]=n[t]}))},jt=P({name:ne.Drawflow,initialState:Vt,reducers:{setState:Bt,setEditLock:(e,{payload:t})=>{e.editLock=t},align:e=>{new bt(e).alignAll()},moveNode:(e,t)=>(e=JSON.parse(JSON.stringify(e)),new bt(e).dragNode(t.payload),e),setMouseBlockDragPos:(e,{payload:t})=>{e.mouseBlockDragPos=t},unSelect:e=>{e.config.drag=!1,e.select=null},select:(e,{payload:t})=>{e.config.drag="node"===t.type,e.select=t},selectPort:(e,{payload:t})=>{const n=e.ports.find((({nodeId:e,portId:n,type:o})=>o===t.type&&n===t.portId&&e===t.nodeId));if(!n)return void console.error("Cannot find port to select in state.ports");const o=e.ports.indexOf(n);e.select={type:t.type,selectId:o}},moveCanvas:(e,{payload:{movementX:t,movementY:n}})=>{e.canvasDrag&&(e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=n)},canvasDrag:(e,{payload:t})=>{e.canvasDrag=t},canvasMouseMove:(e,{payload:{movementX:t,movementY:n,clientX:o,clientY:r}})=>{var a;if(e.clientCurrentMousePos={clientX:o,clientY:r},e.canvasDrag)e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=n;else if((null==(a=e.select)?void 0:a.type)===se.out)e.newPathDirection={clientX:o,clientY:r};else if(e.config.drag&&e.select){const t=e.select.selectId,{clientX:n,clientY:a}=e.mouseBlockDragPos;e.mouseBlockDragPos={clientX:o,clientY:r};const s=e.config.zoom.value,i=(o-n)/s,l=(r-a)/s;new bt(e).dragNode({nodeId:t,dy:l,dx:i})}},canvasMouseUp:e=>{var t,n;const o=new bt(e);if(e.portToConnect&&(null==(t=e.select)?void 0:t.selectId)){const{nodeId:t,portId:n}=e.portToConnect,r=e.select.selectId,a=1;o.addConnection({startId:t,startPort:n,endId:r,endPort:a})}e.portToConnect=void 0,e.newPathDirection=null,e.canvasDrag=!1,e.config.drag=!1,(null==(n=e.select)?void 0:n.type)===se.out&&(e.select=null),o.alignAll()},updateNode:(e,{payload:t})=>{const n=t.this_node_unique_id;e.drawflow[n].data=t},deleteNode:e=>{const{connections:t,drawflow:n,ports:o,select:r}=e;if("node"!==(null==r?void 0:r.type))return;const{selectId:a}=r;let s=t.length;for(;s--;){const{endId:e,startId:n}=t[s];[n,e].includes(a)&&(t.splice(s,1),console.log(T(t)))}let i=o.length;for(;i--;){const{nodeId:e}=o[i];e===a&&o.splice(i,1)}delete n[a],e.select=null,console.log("GGG")},deletePath:e=>{const{connections:t,select:n}=e;"path"===(null==n?void 0:n.type)&&(console.log("delete"),t.splice(n.selectId,1))},load:(e,{payload:{drawflow:t,connections:n}})=>{Object.assign(e,Vt),e.drawflow=t,e.nodeId=Math.max(...Object.keys(t).map(Number))+1,e.connections=n},portMouseUp:(e,{payload:{nodeId:t,portId:n,PortType:o}})=>{const{select:r}=e;if(o!==se.in||!r)return;const a=e.ports[r.selectId],s=t,i=n,l=a.nodeId,c=a.portId;if(l===s)return;new bt(e).addConnection({startId:l,startPort:c,endId:s,endPort:i})},clear:()=>Vt,pushPorts:(e,{payload:t})=>{if(0===t.length)return;const{nodeId:n}=t[0];e.ports=e.ports.filter((e=>e.nodeId!==n)),e.ports.push(...t)},zoom:(e,{payload:t})=>{const{zoom:n}=e.config,{value:o,max:r,min:a,tick:s}=n,i=o+(t?s:-s);i<=r&&i>=a&&(n.value=i),null===t&&(e.config.canvasTranslate={x:0,y:0},n.value=1)},nodeSize:(e,{payload:{height:t,width:n,id:o}})=>{e.drawflow[o].height=t,e.drawflow[o].width=n},toggleSubnodes:(e,{payload:{id:t}})=>{const n=new bt(e);n.getNode(t).toggleSubnodesVisibility(),n.alignAll()},toggleChildren:(e,{payload:{id:t}})=>{const n=new bt(e);n.getNode(t).toggleChildrenVisibility(),n.alignAll()},copyNode:e=>{var t;"node"===(null==(t=e.select)?void 0:t.type)&&(e.nodeToCopyId=e.select.selectId)}}}),zt=jt.actions,Rt=jt.reducer,Ft=e=>e.flows[e.version],Wt=()=>O(),$t=L;function Ut(e,t){const[n,o]=c.exports.useState((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.log(n),t}}));return[n,t=>{try{const r=t instanceof Function?t(n):t;o(r),window.localStorage.setItem(e,JSON.stringify(r))}catch(r){console.log(r)}}]}const qt=e=>{const t=JSON.parse(JSON.stringify(e));return t.id_nodes=t.nodes_id,["order","active","icon_link","nodes_group_id","nodes_id"].forEach((e=>delete t[e])),t},Gt={node_settings_json:"Settings JSON",node_response_settings_json:"Response JSON",node_object_lists:"Object list",node_attributes:"Node attributes"},Jt=e=>"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1),Xt=(e,t)=>{const n=(e.y-t.y)/2,o=e.x-t.x;return`M ${e.x} ${e.y} v ${-n} h ${-o} v ${-n} `},Yt=(e,t,n,o)=>{const{x:r,y:a,width:s,height:i}=o;return{x:e*(s/(s*n))-r*(s/(s*n)),y:t*(i/(i*n))-a*(i/(i*n))}},Ht=A(V,I.isEqual),Kt=x.svg`
  position: absolute;
  overflow: visible;
`,Zt=x.path`
  :hover {
    stroke-width: 6px;
    stroke: purple;
    cursor: pointer;
  }

  fill: none;
  stroke-width: 6px;
  stroke: steelblue;
  ${({selected:e})=>e&&B`
      stroke-width: 7px;
      stroke: red;
    `};
`,Qt=e=>{const{id:t,d:n}=e,o=(e=>$t(c.exports.useMemo((()=>Ht((t=>{if(void 0===e)return!1;const n=Ft(t).select;return"path"===(null==n?void 0:n.type)&&n.selectId===e}),(e=>e))),[e])))(t),r=Wt();return d.createElement(Kt,null,d.createElement(Zt,{selected:o,d:n,onMouseDown:e=>{void 0!==t&&(e.stopPropagation(),r(zt.select({type:"path",selectId:t})))}}))},en=({id:e})=>{const t=(n=e,$t(c.exports.useMemo((()=>Ht((e=>{var t,o;const r=Ft(e),{startId:a,startPort:s,endId:i,endPort:l}=r.connections[n],c=null==(t=r.ports.find((e=>e.nodeId===a&&e.portId===s&&e.type===se.out)))?void 0:t.pos,d=null==(o=r.ports.find((e=>e.nodeId===i&&e.portId===l&&e.type===se.in)))?void 0:o.pos;return c&&d?Xt(c,d):""}),(e=>e))),[n])));var n;return d.createElement(Qt,{key:e,id:e,d:t})},tn=()=>{const e=$t(c.exports.useMemo((()=>Ht((e=>{const{connections:t}=Ft(e);return t.reduce(((e,t,n)=>(t.visible&&e.push(n),e)),[])}),(e=>e))),[])).map((e=>d.createElement(en,{key:e,id:e})));return d.createElement(d.Fragment,null,e)},nn=x.div`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  z-index: 1;
`,on=x.button`
  background-color: #333;
  color: white;
  font-size: 0.9em;
  margin: 0.1em;
  padding: 0.1em 0.5em;
  display: inline-grid;
  place-items: center;
`,rn=()=>{const e=Wt();return d.createElement(nn,null,d.createElement(on,{onClick:()=>e(zt.zoom(!0))},"+"),d.createElement(on,{onClick:()=>e(zt.zoom(!1))},"-"),d.createElement(on,{onClick:()=>e(zt.zoom(null))},"reset"))},an=()=>{var e;const t=null!=(e=$t(c.exports.useMemo((()=>Ht((e=>{const t=Ft(e);if(!t.select||t.select.type!==se.out||!t.newPathDirection)return void console.error("Cannot draw new path!");const n=t.ports[t.select.selectId];if(!n)return void console.error("No start port in newPath");const o=n.pos;if(!e.canvas)return void console.error("Canvas shape is not available");const{clientX:r,clientY:a}=t.newPathDirection,s=Yt(r,a,t.config.zoom.value,e.canvas);return Xt(o,s)}),(e=>e))),[])))?e:"";return d.createElement(Qt,{d:t})},sn=e=>d.createElement("svg",l(i({},e),{viewBox:"0 0 16 16",fill:"none"}),d.createElement("path",{d:"M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{d:"M14.0016 13.9996L11.1016 11.0996",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),ln=e=>d.createElement("svg",l(i({},e),{viewBox:"0 0 10 14",fill:"none"}),d.createElement("path",{d:"M8 2L2.18437 6.84636C2.08842 6.92631 2.08842 7.07369 2.18437 7.15364L8 12",stroke:"#393C44",strokeWidth:"2.5",strokeLinecap:"round"})),cn=e=>d.createElement("svg",l(i({},e),{viewBox:"0 0 1792 1792"}),d.createElement("path",{fill:"#217CE8",d:"M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z"})),dn=e=>d.createElement("svg",l(i({},e),{viewBox:"0 0 19 19",fill:"none"}),d.createElement("path",{d:"M14.25 4.75L4.75 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{d:"M4.75 4.75L14.25 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),un=e=>d.createElement("svg",l(i({},e),{enableBackground:"new 0 0 512 512",viewBox:"0 0 512 512"}),d.createElement("g",null,d.createElement("path",{d:"m482.16 288.51 29.84-4.68v-55.66l-29.84-4.68c-24.56-4.14-33.19-36.67-13.99-52.45l22.52-18.55-27.71-47.98-27.56 10.32c-23.33 8.74-47-14.9-38.25-38.25l10.32-27.56-47.98-27.71-18.55 22.52c-15.75 19.16-48.3 10.61-52.45-13.99l-4.68-29.84h-55.66l-4.68 29.84c-4.17 24.56-36.67 33.19-52.45 13.99l-18.55-22.52-47.98 27.71 10.32 27.56c8.74 23.33-14.9 47-38.25 38.25l-27.56-10.32-27.71 47.98 22.52 18.55c19.12 15.74 10.67 48.29-13.99 52.45l-29.84 4.68v55.66l29.84 4.68c24.46 4.15 33.26 36.59 13.99 52.45l-22.52 18.55 27.71 47.98 27.56-10.32c23.22-8.7 47.04 14.81 38.25 38.25l-10.32 27.56 47.98 27.71 18.55-22.52c15.73-19.11 48.27-10.67 52.45 13.99l4.68 29.84h55.66l4.68-29.84c4.12-24.4 36.56-33.3 52.45-13.99l18.55 22.52 47.98-27.71-10.32-27.56c-8.7-23.22 14.81-47.04 38.25-38.25l27.56 10.32 27.71-47.98-22.52-18.55c-19.16-15.76-10.61-48.28 13.99-52.45zm-226.16 92.49c-68.93 0-125-56.07-125-125s56.07-125 125-125 125 56.07 125 125-56.07 125-125 125z",fill:"#7ed8f6"}),d.createElement("path",{d:"m468.17 340.96 22.52 18.55-27.71 47.98-27.56-10.32c-23.44-8.79-46.95 15.03-38.25 38.25l10.32 27.56-47.98 27.71-18.55-22.52c-15.89-19.31-48.33-10.41-52.45 13.99l-4.68 29.84h-27.83v-131c68.93 0 125-56.07 125-125s-56.07-125-125-125v-131h27.83l4.68 29.84c4.15 24.6 36.7 33.15 52.45 13.99l18.55-22.52 47.98 27.71-10.32 27.56c-8.75 23.35 14.92 46.99 38.25 38.25l27.56-10.32 27.71 47.98-22.52 18.55c-19.2 15.78-10.57 48.31 13.99 52.45l29.84 4.68v55.66l-29.84 4.68c-24.6 4.17-33.15 36.69-13.99 52.45z",fill:"#6aa9ff"}),d.createElement("path",{d:"m256 121c-74.44 0-135 60.56-135 135s60.56 135 135 135 135-60.56 135-135-60.56-135-135-135zm0 210c-41.35 0-75-33.64-75-75s33.65-75 75-75 75 33.64 75 75-33.65 75-75 75z",fill:"#6aa9ff"}),d.createElement("path",{d:"m391 256c0 74.44-60.56 135-135 135v-60c41.35 0 75-33.64 75-75s-33.65-75-75-75v-60c74.44 0 135 60.56 135 135z",fill:"#4895ff"}))),pn=e=>d.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},e),d.createElement("g",{transform:"matrix(1.06642 0 0 1.06642 -1.03 -1106.225)"},d.createElement("circle",{cx:"8.467",cy:"1044.829",r:"5.626",fill:"#c2e4f8"}),d.createElement("path",{fill:"#249fe6",fillRule:"evenodd",style:{lineHeight:"normal",textIndent:0,textAlign:"start",textDecorationLine:"none",textDecorationStyle:"solid",textDecorationColor:"#000",textTransform:"none",isolation:"auto",mixBlendMode:"normal"},d:"M 8 1 C 4.139959 1 1.0000428 4.1398846 1 8 C 0.99997942 11.860115 4.1399146 15 8 15 C 11.860086 15 15.00002 11.860115 15 8 C 14.999957 4.1398846 11.860041 1 8 1 z M 8 2 C 11.319604 2 13.999963 4.6803455 14 8 C 14.000018 11.319654 11.319644 14 8 14 C 4.6803565 14 1.9980292 11.319654 1.9980469 8 C 1.9980837 4.6803455 4.6803952 2 8 2 z M 7.9863281 4.0039062 A 0.50005001 0.50005001 0 0 0 7.4941406 4.5117188 L 7.5 7.5039062 L 4.5039062 7.5097656 A 0.50095123 0.50095123 0 0 0 4.5058594 8.5117188 L 7.5 8.5058594 L 7.5058594 11.5 A 0.50005001 0.50005001 0 1 0 8.5058594 11.5 L 8.5019531 8.5039062 L 11.494141 8.4980469 A 0.50005001 0.50005001 0 1 0 11.492188 7.4980469 L 8.5 7.5039062 L 8.4960938 4.5117188 A 0.50005001 0.50005001 0 0 0 7.9863281 4.0058594 L 7.9863281 4.0039062 z ",color:"#000",fontFamily:"sans-serif",fontWeight:400,overflow:"visible",transform:"matrix(.93772 0 0 .93772 .965 1037.328)"}))),mn=e=>d.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 3",fill:"none"},e),d.createElement("circle",{cx:"1.2",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),d.createElement("circle",{cx:"5.9998",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),d.createElement("circle",{cx:"10.7996",cy:"1.2",r:"1.2",fill:"#C5C5D0"})),hn=x.button`
  position: absolute;
  right: 0.2em;
  top: 0.2em;
  display: grid;
  place-items: center;
  padding: 8px 8px 4px 4px;
  border: 0;
  background: 0;

  svg {
    /* stroke: red; */

    circle {
      fill: black;
    }
  }

  :hover {
    background-color: #d8d8d8;
    cursor: pointer;
    border-radius: 0.2em;
  }
`,gn=x.div`
  /* width: min-content; */
  position: relative;
  display: grid;
  place-items: center;
  padding: 0.5em;

  background-color: white;
  box-shadow: 0 4px 30px rgb(22 33 74 / 25%);
  border-radius: 5px;

  :hover {
    box-shadow: 0 4px 30px rgb(22 33 74 / 15%);
    background-color: #f8f8f8;
  }
`,fn=x.img`
  max-height: 100%;
  max-width: 100%;
`,vn=x.span``,wn=e=>{const{nodes_id:t,order:n}=e,o=Wt(),r=c.exports.useRef(null),a=$t((e=>e.precanvas));return d.createElement(gn,{style:{order:n},ref:r,onMouseDown:e=>{if(void 0===mt)return;o(mt(t));const{current:n}=r;if(!n)return void console.error("No node to copy");const{left:s,top:i}=n.getBoundingClientRect(),l=e.clientX-s,c=e.clientY-i,d=n.cloneNode(!0);d.style.position="absolute",d.style.left=s+window.scrollX+"px",d.style.top=i+window.scrollY+"px",document.body.appendChild(d);const u=e=>{var t;const{clientX:n,clientY:o}=e;if(a){if(n>=a.x&&o>=a.y)return document.removeEventListener("mousemove",u),void(null==(t=d.parentNode)||t.removeChild(d));d.style.left=n-l+window.scrollX+"px",d.style.top=o-c+window.scrollY+"px"}else console.error("Canvas is not ready! Cannot drag template")};document.addEventListener("mousemove",u),document.addEventListener("mouseup",(()=>{var e;document.removeEventListener("mousemove",u),null==(e=d.parentNode)||e.removeChild(d),o(mt(void 0))}),{once:!0});const{height:p,width:m}=getComputedStyle(n);d.style.height=p,d.style.width=m}},d.createElement(fn,{src:e.icon_link}),d.createElement(vn,null,e.name),d.createElement(hn,{onMouseDown:()=>{o(vt({windowConfig:{id:t,mainId:ce.templateNodeSettings}}))}},d.createElement(mn,{height:3,width:12})))},yn=x.div`
  max-height: 100%;
  overflow: hidden;
`,En=e=>{const t=Wt();return d.createElement(yn,null,d.createElement("div",null,e.id),e.data.description,d.createElement(hn,{onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(vt({windowConfig:{id:e.id,mainId:ce.nodeSettings}}))}},d.createElement(mn,{height:3,width:12})))},xn={width:100,height:60,padding:"0 0.5em"},bn={width:200},_n=x.div`
  width: 15px;
  height: 15px;
  border-radius: 60px;
  background-color: #217ce8;
  opacity: ${({visible:e})=>e?1:0};
  transform: scale(${({visible:e})=>e?1:0});
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
`,kn=x.div`
  height: 1em;
  width: 1em;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  border: 2px solid #cacaca;
  &:hover {
    background: #4ea9ff;
  }
`,Cn=x(kn)`
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&B`
      left: 100%;
      top: 50%;
    `}
`,Sn=x(kn)`
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&B`
      display: none;
    `}
`,In=x(kn)`
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  ${({isSub:e})=>e&&B`
      left: 0;
      top: 50%;
    `}
`,Mn={[se.in]:[In],[se.out]:[Cn,Sn]},Nn=e=>{const{nodeId:t,portId:n,type:o}=e,r=Wt(),a=(s=e,$t(c.exports.useMemo((()=>Ht((e=>{const{portToConnect:t}=Ft(e);if(void 0===t)return!1;const n=JSON.parse(JSON.stringify(t));return delete n.pos,I.isEqual(s,n)}),(e=>e))),[s])));var s;const i=(l=t,$t(c.exports.useMemo((()=>Ht((e=>Ft(e).drawflow[l].isSub),(e=>e))),[l])));var l;const u=Mn[o][n-1];return d.createElement(u,{isSub:i,onMouseDown:e=>{e.stopPropagation(),r(zt.selectPort({type:o,nodeId:t,portId:n}))},onMouseUp:()=>{r(zt.portMouseUp({nodeId:t,portId:n,PortType:o}))}},d.createElement(_n,{visible:a}))},Dn=e=>{const{id:t,port:n,type:o}=e,r=[];for(let a=1;a<=n[o];a++)r.push(d.createElement(Nn,{key:a,nodeId:t,portId:a,type:o}));return d.createElement("div",{className:`${o}puts`},r)},Pn=x.div`
  display: inline-block;
  position: absolute;
  padding: 5px;
  width: 200px;
  min-height: 60px;
  background-color: white;
  border-radius: 0.2em;
  z-index: 1;
  cursor: move;

  ${({selected:e})=>e&&B`
      //box-shadow: 0 2px 15px 2px #cacaca;
      box-shadow: 0 2px 20px 2px #4ea9ff;
      z-index: 2;
    `};
`,Tn=({id:e})=>{const t=$t(c.exports.useMemo((()=>Ht((e=>Ft(e).config.drag),(e=>e))),[])),n=$t((e=>Ft(e).nodeId)),o=(e=>$t(c.exports.useMemo((()=>Ht((t=>Ft(t).drawflow[e].pos),(e=>e))),[e])))(e),r=(e=>$t(c.exports.useMemo((()=>Ht((t=>{const n=Ft(t).select;return(null==n?void 0:n.selectId)===e&&"node"===n.type}),(e=>e))),[e])))(e),a=Wt(),s=c.exports.useRef(null),l=(e=>$t(c.exports.useMemo((()=>Ht((t=>{const n=JSON.parse(JSON.stringify(Ft(t).drawflow[e]));return delete n.pos,n}),(e=>e))),[e])))(e),{port:u}=l;return c.exports.useEffect((()=>{if(s.current){const{offsetHeight:t,offsetWidth:n}=s.current;a(zt.nodeSize({height:t,width:n,id:e}))}}),[a,e,l]),c.exports.useEffect((()=>{const t=(t,n)=>Array.from(n.querySelector(`.${t}puts`).children).map(((n,r)=>{const a=parseInt(getComputedStyle(n).left)+o.x,s=parseInt(getComputedStyle(n).top)+o.y;return{nodeId:e,pos:{x:a,y:s},portId:r+1,type:t}}));if(s.current){const e=t(se.in,s.current),n=t(se.out,s.current);a(zt.pushPorts([...e,...n]))}}),[a,e,o]),c.exports.useEffect((()=>{if(s.current&&n-1===e&&t){const{offsetHeight:t,offsetWidth:n}=s.current;a(zt.moveNode({nodeId:e,dx:.2*-n,dy:.2*-t}))}}),[]),d.createElement(Pn,{selected:r,ref:s,style:i({left:o.x,top:o.y},l.isSub?xn:bn),isSub:l.isSub,onMouseDown:t=>{t.stopPropagation();const{clientX:n,clientY:o}=t;a(zt.select({type:"node",selectId:e})),a(zt.setMouseBlockDragPos({clientX:n,clientY:o}))},onContextMenu:()=>{},onDoubleClick:()=>{}},d.createElement(En,i({},l)),!l.isSub&&d.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},d.createElement("button",{onMouseDown:t=>{t.preventDefault(),a(zt.toggleSubnodes({id:e})),t.stopPropagation()}},"sub"),d.createElement("button",{onMouseDown:t=>{t.preventDefault(),a(zt.toggleChildren({id:e})),t.stopPropagation()}},"children")),d.createElement(Dn,{id:e,port:u,type:se.in}),d.createElement(Dn,{id:e,port:u,type:se.out}))},On=()=>{const e=$t(c.exports.useMemo((()=>Ht((e=>{const{drawflow:t}=Ft(e);return Object.entries(t).filter((([e,{visible:t}])=>!1!==t)).map((([e])=>Number(e)))}),(e=>e))),[]));return d.createElement(d.Fragment,null,e.map((e=>d.createElement(Tn,{key:e,id:e}))))},Ln=x.div`
  position: relative;
  height: 100vh;
  //height: 100%;
  overflow: hidden;
  background-image: url(${"/Drawflow-react/assets/tile.07d222ee.png"});
  background-repeat: repeat;
  background-size: 30px 30px;
`,An=x.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Vn=x.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`,Bn=x.button`
  padding: 5px 10px;
  font-style: italic;
  font-size: 16px;
  top: 10px;
  position: absolute;
  cursor: pointer;
  z-index: 50;
  border: 1px solid #e8e8ef;
  border-radius: 5px;
  color: #fff;
  background-color: #217ce8;
  left: 10px;
`,jn=()=>{(()=>{const e=Wt(),[t]=Ut(re.backgroundOpacity,50),[n]=Ut(re.backgroundBlur,50),[o]=Ut(re.backgroundImageUrl,"");c.exports.useEffect((()=>{e(vt({windowConfig:{background:{opacity:t,blur:n,imageUrl:o}}}))}),[])})();const e=$t(c.exports.useMemo((()=>Ht((e=>{const t=Ft(e),{config:{canvasTranslate:{x:n,y:o},zoom:r},newPathDirection:a,canvasDrag:s}=t;return{config:{canvasTranslate:{x:n,y:o},zoom:r},newPathDirection:a,canvasDrag:s}}),(e=>e))),[])),{config:{canvasTranslate:{x:t,y:n},zoom:o},newPathDirection:r,canvasDrag:a}=e,s=Wt(),i=c.exports.useRef(null),l=c.exports.useRef(null);c.exports.useEffect((()=>{s(zt.align())}),[]),c.exports.useEffect((()=>{const{current:e}=i;e&&o.value}),[a,o.value]),c.exports.useEffect((()=>{const{current:e}=i;if(e){const t=e.getBoundingClientRect(),n={x:t.x,y:t.y,width:e.clientWidth,height:e.clientHeight};s(ht(n))}const{current:t}=l;if(t){const e=t.getBoundingClientRect(),n={x:e.x,y:e.y,width:t.clientWidth,height:t.clientHeight};s(vt({precanvas:n}))}}));const{opacity:u,blur:p,imageUrl:m}=$t((e=>e.windowConfig.background));return d.createElement(Ln,{ref:l,className:"drawflow",tabIndex:0,onKeyDownCapture:e=>{"Delete"===e.key&&(s(zt.deletePath()),s(zt.deleteNode())),e.ctrlKey&&"c"===e.key&&s(zt.copyNode()),e.ctrlKey&&"v"===e.key&&s(gt())},onMouseDown:()=>{s(zt.canvasDrag(!0)),s(zt.unSelect())},onMouseUp:()=>s(zt.canvasMouseUp()),onMouseMove:e=>{const{clientX:t,clientY:n,movementX:r,movementY:l}=e,{current:c}=i;a&&c&&o.value,s(zt.canvasMouseMove({clientX:t,clientY:n,movementX:r,movementY:l}))},onMouseEnter:e=>{const{clientX:t,clientY:n}=e;s(pt({clientX:t,clientY:n}))},style:{backgroundColor:`rgba(251, 251, 251, ${u}%)`}},d.createElement(Vn,{style:{backgroundImage:`url(${m})`,filter:`blur(${p/10}px)`}}),d.createElement(rn,null),d.createElement(Bn,{onClick:e=>{e.preventDefault(),s(Ot())}},"Commit"),d.createElement(An,{ref:i,style:{transform:`translate(${t}px, ${n}px) scale(${o.value})`}},d.createElement(On,null),d.createElement(tn,null),r&&d.createElement(an,null)))};const zn=x.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, max-content));
  grid-auto-rows: minmax(1em, auto);
  grid-gap: 1em;
  background-color: #f5f5f5;

  overflow-y: auto;
  //max-height: calc(100vh - 55px);
  max-height: calc(100vh - 64px);
  &:after {
    grid-column: span 3;
    //background-color: red;
    height: 0.1em; /* 3em (desired padding effect) minus 1em (grid-gap setting) */
    content: "";
    order: 999;
  }
`,Rn=x(gn)`
  /* min-height: 5em; */
  padding: 25px;
  order: 998;

  :hover {
    cursor: pointer;
  }
`,Fn=e=>{const t=$t((e=>e.templates)),n=Wt(),{searchWord:o,selectedGroup:r}=e,a=o.toLowerCase().split(" ").filter((e=>e.length>0));return d.createElement(zn,null,t.map((e=>{const t=JSON.stringify(e,null,2);return(0===r||e.nodes_group_id===r)&&(a.find((e=>t.toLowerCase().includes(e)))||!a.length)&&d.createElement(wn,i({key:e.nodes_id},e))})),d.createElement(Rn,{onClick:()=>n(Pt(l(i({},{flow_node_type_id:0,nodes_id:0,node_scrdata_id:0,flow_action_scrdata_id:0,order:0,nodes_group_id:0,name:"**",description:"**",icon_link:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",icon_link_selected:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:0,execute_node_specific_date_time:"2020-11-11T19:30",loop_cycles:0,node_settings_json:{},node_response_settings_json:{},loop_cycle_reached_jump_to_node:0,node_attributes:[],node_object_lists:{},node_story:"Node story"}),{order:Math.max(...t.map((e=>e.order)))+1})))},d.createElement(pn,null)))},Wn=x.div`
  width: 300px;
  order: -2;
  max-height: calc(100vh + 40px);
`,$n=x.div`
  border-bottom: 1px solid #e8e8ef;
  max-height: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  text-align: center;
  transition: all 0.5s ease;
  justify-content: space-around;

  :hover {
    max-height: 500px;

    div {
      order: unset;
    }
  }
`,Un=x.div`
  display: grid;
  place-items: center;
  font-family: Roboto, serif;
  height: 48px;
  padding: 1em;
  text-align: center;
  position: relative;

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }

  ${({selected:e})=>e&&B`
      order: -1;

      :after {
        position: absolute;
        display: block;
        content: "";
        width: 100%;
        height: 4px;
        background-color: #217ce8;
        bottom: 0;
      }
    `};
`,qn=({selectedGroup:e,setSelectedGroup:t})=>{Wt();const n=$t((e=>e.groups));return d.createElement($n,null,d.createElement(Un,{key:0,selected:0===e,onClick:()=>t(0)},"All"),Object.values(n).map((({id:n,node_group_name:o,node_group_order:r})=>d.createElement(Un,{key:n,selected:n===e,onClick:()=>t(n)},o))))},Gn=x.input`
  display: block;
  width: 75%;
  height: 40px;
  background-color: #fff;
  border: 1px solid #e8e8ef;
  box-shadow: 0 2px 8px rgb(34 34 87 / 5%);
  border-radius: 5px;
  text-indent: 35px;
  font-size: 16px;
  margin-right: 3px;
`,Jn=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-top: 10px;
`,Xn=x.span`
  margin-left: auto;
  margin-right: -25px;
  display: inline-block;
  z-index: 2;
  height: 18px;
  width: 18px;
  background-color: white;
  position: relative;

  ::before,
  ::after {
    content: "";
    background-color: white;
    width: 5px;
    height: 20px;
    position: absolute;
  }

  ::before {
    left: -5px;
  }

  ::after {
    right: -5px;
  }
`,Yn=x.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,Hn=({setSearchWord:e})=>{const t=Wt();return d.createElement(Jn,null,d.createElement(Xn,null,d.createElement(sn,null)),d.createElement(Gn,{type:"text",placeholder:"Search templates",onChange:t=>{e(t.target.value)}}),d.createElement(Yn,{onClick:()=>t(vt({windowConfig:{sideId:ue.groupSettings}}))},d.createElement(un,{height:30})),d.createElement(Zn,null))},Kn=x.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  ${({opened:e})=>e&&B`
      transform: rotate(180deg);
    `};
`,Zn=e=>{var t;const n=null==(t=$t((e=>e.sidebarVisible)))||t,o=Wt();return d.createElement(Kn,{opened:!n,onClick:()=>o(ft())},d.createElement(cn,i({height:40},e)))},Qn=()=>{const[e,t]=c.exports.useState(""),[n,o]=c.exports.useState(0);return!1===$t((e=>e.sidebarVisible))?null:d.createElement(Wn,null,d.createElement(Hn,{setSearchWord:t}),d.createElement(qn,{selectedGroup:n,setSelectedGroup:o}),d.createElement(Fn,{selectedGroup:n,searchWord:e}))};const eo=x.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e8e8ef;
`,to=x.div`
  display: flex;
  justify-content: space-between;
`,no=B`
  text-align: center;
  height: 39px;
  font-size: 14px;
  border: 1px solid #e8e8ef;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    max-height: 90%;
    max-width: 90%;
  }

  margin: 0;
`,oo=x.div`
  display: flex;
  align-items: center;
`,ro=x.button`
  ${no};

  &:focus {
    background-color: #dfdfdf;
  }
`,ao=x.div`
  display: flex;
  align-items: center;
`,so=x.button`
  margin: 0 10px;
  background-color: #eaecf1;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: none;
`,io=x.div`
  display: grid;
  //place-items: left;
  div {
  }
`,lo=x.div`
  font-size: 16px;
  color: #393c44;
  font-family: Roboto, serif;
`,co=x.div`
  color: #808292;
  font-size: 14px;
`,uo=x.button`
  ${no};

  background-color: #e31c5c;
  display: inline-block;
  margin-right: 10px;
  color: white;
`,po=x.button`
  background-color: #217ce8;
  ${no};
  color: white;
`,mo=x.label`
  display: flex;
  align-items: center;
  justify-content: center;

  > span:first-child {
    display: inline-block;
    margin-right: 4px;
  }
`,ho=()=>{const e=Wt(),t=$t((e=>e.flowInfo)),{flow_name:n,flow_description:o,flow_active:r}=t||{};return d.createElement(eo,null,d.createElement(to,null,d.createElement(so,null,d.createElement(ln,{height:14})),d.createElement(io,null,d.createElement(lo,null,n||"Loading ..."),d.createElement(co,null,o||"Loading ..."))),d.createElement(oo,null,d.createElement(ro,{onClick:()=>e(vt({windowConfig:{mainId:ce.mainFlow}}))},"Diagram view"),d.createElement(ro,{onClick:()=>e(vt({windowConfig:{mainId:ce.codeEditor}}))},"Code editor"),d.createElement(ro,null,d.createElement(mo,null,d.createElement("span",null,"Active"),d.createElement(j,{checked:!!r,icons:{checked:null,unchecked:null},onChange:t=>e(vt({flowInfo:{flow_active:+t.target.checked}}))}))),d.createElement(ro,{onClick:()=>e(vt({windowConfig:{sideId:ue.flowSettings}}))},d.createElement("img",{src:"/Drawflow-react/assets/flowsettings.758f2330.png",alt:""}))),d.createElement(ao,null,d.createElement(uo,null,"Delete flow"),d.createElement(po,{onClick:()=>e(It())},"Save flow")))},go=x.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  outline: none;
  border: none;
`,fo=x.section`
  position: relative;
  flex: 0 0 400px;
  overflow-y: auto;
  max-height: calc(100vh + 40px);
  padding-top: 30px;
  border: 1px solid #e8e8ef;
`,vo=x.label`
  margin: 10px;
  display: flex;
  flex-direction: column;
`,wo=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  margin-top: 10px;
  padding: 10px;

  button {
    background: none;
    border: none;
    outline: none;
  }

  img {
    height: 100px;
    width: 150px;
    object-fit: cover;
    border-radius: 10px;
  }
`,yo=x.div`
  background: #e8e8ef;

  label {
    margin: 10px;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 2px;
    }
  }
`,Eo=()=>{const e=$t((e=>e.flowInfo)),t=Wt(),[n,o]=c.exports.useState([]);c.exports.useEffect((()=>{(async()=>{const e=await Ct(_t.fetchBackgroundImages,{lab_test:1}),{flow_canvas_background_image:t}=e,n=t.map((({image_link:e})=>e));o(n)})().then()}),[]);const{flow_name:r,flow_description:a,run_times_max:s,user_run_limit_seconds:u}=e||{},[p,m]=Ut(re.backgroundOpacity,50),[h,g]=Ut(re.backgroundBlur,50),[f,v]=Ut(re.backgroundImageUrl,""),w=(e,n)=>{const o=Object.keys(e)[0],r=e[o];return d.createElement("input",l(i({},n),{value:null!=r?r:"Loading ...",onChange:e=>{t(vt({flowInfo:{[o]:e.target.value}}))}}))};return d.createElement(fo,null,d.createElement(go,{onClick:()=>t(vt({windowConfig:{sideId:ue.none}}))},d.createElement(dn,{width:19,height:19})),d.createElement(vo,null,"Flow name:",w({flow_name:r},{type:"text"})),d.createElement(vo,null,"Flow description:",w({flow_description:a},{type:"text"})),d.createElement(vo,null,"Max run times:",w({run_times_max:s},{type:"number"})),d.createElement(vo,null,"User run limit seconds:",w({user_run_limit_seconds:u},{type:"number"})),d.createElement(yo,null,d.createElement("label",null,"Opacity:",d.createElement("input",{type:"range",value:null!=p?p:0,min:0,max:100,onChange:e=>{const n=+e.target.value;m(n),t(vt({windowConfig:{background:{opacity:n}}}))}})),d.createElement("label",null,"Blur:",d.createElement("input",{onChange:e=>{const n=+e.target.value;g(n),t(vt({windowConfig:{background:{blur:n}}}))},type:"range",min:0,max:100,value:h})),d.createElement(wo,null,n.map((e=>d.createElement("button",{key:e,onClick:()=>{v(e),t(vt({windowConfig:{background:{imageUrl:e}}}))}},d.createElement("img",{style:{border:f===e?"2px solid blue":""},src:e,alt:"Background image"})))))))},xo=x.button`
  /* margin-left: auto */
  padding: 4px 6px;
  text-align: center;
  outline: none;
  color: #fff;
  background-color: #217ce8;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px #999;

  :active {
    background-color: red;
    color: black;
    font-weight: bold;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`,bo=x.div``,_o=x.div`
  padding: 0 10px 10px;
  position: relative;
  border: 1px solid #e8e8ef;
  flex: 0 0 300px;
  overflow-y: auto;
  max-height: 100%;
`,ko=x.div`
  margin-bottom: 15px;
  padding: 5px;
  border-bottom: 2px solid lightgray;
`,Co=x.span`
  color: blue;

  ::before {
    margin-left: 8px;
    content: " ID.";
  }
`,So=x(xo)`
  text-align: center;
`,Io=x(xo)`
  margin-left: 5px;
`,Mo=x(xo)`
  margin-left: 5px;
`,No=x.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 8px;
`,Do=x.h2`
  text-align: center;
  border-bottom: 2px solid blue;
  color: #217ce8;
`,Po=x.input`
  margin-right: 10px;
  font-weight: bolder;
  border: 1px solid #217ce8;
  font-size: 0.9em;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 5px;
  width: 90%;
`,To=x.textarea`
  border-radius: 5px;
  border: 1px solid #217ce8;

  /* flex: 1; */
  width: 90%;
  /* text-align: center; */
`,Oo=()=>{var e;const t=$t((e=>e.groups)),n=Wt(),[o,r]=c.exports.useState(t),a=(e,t)=>{const n=i(i({},o[e]),t);r(l(i({},o),{[e]:n}))};if(Object.keys(t).length!==Object.keys(o).length){const n={};for(const[r,a]of Object.entries(t))n[Number(r)]=I.merge(a,null!=(e=o[Number(r)])?e:{});r(n)}return d.createElement(_o,null,d.createElement(go,{onClick:()=>n(vt({windowConfig:{sideId:ue.none}}))},d.createElement(dn,{width:19,height:19})),d.createElement(Do,null,"Node groups"),Object.values(o).map((({id:e,node_group_name:t,node_group_order:r,node_group_description:s})=>d.createElement(ko,{key:e},d.createElement(No,null,d.createElement(Co,null,e),d.createElement(Io,{onClick:()=>{window.confirm(`Do you really wanna delete group ${t}, ID.${e}`)&&n(Nt({id:e,delete:1}))}},"Delete"),d.createElement(Mo,{onClick:()=>{window.confirm(`Do you really wanna save group ${t}, ID.${e}`)&&n(Nt(o[e]))}},"Save")),d.createElement(Po,{value:t,type:"text",onChange:t=>{a(e,{node_group_name:t.target.value})}}),d.createElement(To,{value:s,onChange:t=>{a(e,{node_group_description:t.target.value})}})))),d.createElement(bo,null,d.createElement(So,{onClick:()=>{n(Nt({id:0,node_group_order:0,node_group_name:"Group name",node_group_description:"Group description"}))}},"Add new")))};const Lo=x.div`
  flex: 1;
  ${({shift:e})=>e&&B`
      div.ql-toolbar.ql-snow {
        padding-left: 40px;
      }

      .jsoneditor-menu {
        padding-left: 40px;
      }
    `}
`,Ao=({values:e,setValues:t})=>{const n=$t((e=>e.sidebarVisible)),o=c.exports.useRef(null),r=c.exports.useRef();return c.exports.useEffect((()=>{if(o.current&&!r.current){const e={mode:"tree",modes:["code","form","text","tree","view","preview"],onChangeText(e){try{const n=JSON.parse(e);t(n)}catch(n){console.log({e:n})}}};r.current=new z(o.current,e)}return()=>{var e;null==(e=r.current)||e.destroy()}}),[]),c.exports.useEffect((()=>{r.current&&JSON.stringify(r.current.get())!==JSON.stringify(e)&&r.current.update(e)}),[e]),d.createElement(Lo,{shift:!(null==n||n),ref:o})},Vo=F({reducer:R({version:0,flows:[Vt],templates:[],dragTemplate:0,groups:{},windowConfig:{id:0,mainId:ce.mainFlow,sideId:ue.none,background:{opacity:0,blur:0,imageUrl:""}}},(e=>{e.addCase(vt,Bt).addCase(gt,(e=>{const t=Ft(e);if(void 0===t.nodeToCopyId)return;const{clientX:n,clientY:o}=t.clientCurrentMousePos,r=JSON.parse(JSON.stringify(t.drawflow[t.nodeToCopyId]));e.canvas?(r.pos=Yt(n,o,t.config.zoom.value,e.canvas),t.drawflow[t.nodeId]=l(i({},r),{id:t.nodeId,height:0,width:0}),++t.nodeId):console.error("Canvas shape is not available")})).addCase(At.fulfilled,((e,{payload:t})=>{void 0!==t&&(e.version=t)})).addCase(ft,(e=>{var t;e.sidebarVisible=!(null==(t=e.sidebarVisible)||t)})).addCase(pt,((e,{payload:{clientX:t,clientY:n}})=>{const o=e.flows[e.version],r=e.templates.find((({nodes_id:t})=>t===e.dragTemplate));if(!e.dragTemplate)return;if(!e.canvas)return void console.error("Canvas shape is not available");if(!r)return void console.error("Template node not found");const a={id:0,type:ee.MIDDLE,data:qt(r),port:{in:1,out:2},pos:{x:0,y:0},isSub:!1,height:0,width:0};a.pos=Yt(t,n,o.config.zoom.value,e.canvas),o.mouseBlockDragPos={clientX:t,clientY:n},o.drawflow[o.nodeId]=l(i({},a),{id:o.nodeId,height:0,width:0}),o.select={type:"node",selectId:o.nodeId++},o.config.drag=!0,e.dragTemplate=void 0})).addCase(mt,((e,{payload:t})=>{e.dragTemplate=t})).addCase(ht,((e,{payload:t})=>{e.canvas=t})).addCase(Dt.fulfilled,((e,{payload:t})=>{e.templates=t})).addCase(Tt.fulfilled,((e,{payload:t})=>{if(!t||0===t.length)return;e.version=t[0].update_version;const n={},o=[],r={},a={};t.forEach((e=>{var t;null==(t=e.node_attributes)||t.forEach(((t,n)=>{r[t]=e.this_node_unique_id,a[t]=0===n}))})),t.forEach((e=>{var t,s;const{this_node_unique_id:i,prev_node_unique_id:l}=e,c=void 0!==r[i];null!==l&&o.push({startId:c?l:null!=(t=r[l])?t:l,endId:i,startPort:a[i]?2:1,endPort:1,visible:!0}),n[i]={id:i,height:0,width:0,type:ee.MIDDLE,isSub:c,port:{out:c?1:2,in:1},pos:{x:0,y:0},data:e},["name","description","icon_link_selected"].forEach((t=>{var n;const o=`node_${t}`;e[t]=null==(n=e.flow_node)?void 0:n[o]})),e.nodes_tooltip=(null==(s=e.flow_node)?void 0:s.node_tooltip)||"",delete e.flow_node})),e.flows[e.version]=Rt(e.flows[e.version],{type:ne.Drawflow+"/load",payload:{drawflow:n,connections:o}});const s=new bt(JSON.parse(JSON.stringify(e.flows[e.version]))),{heads:i}=s;if(!e.canvas)return void console.error("Canvas not initialized");const{height:l,width:c}=e.canvas;i[0].setPos({x:c/3,y:l/10}),e.flows[e.version]=s.state})).addCase(Mt.fulfilled,((e,{payload:t})=>{e.groups=t})).addMatcher((e=>e.type.startsWith(ne.Drawflow)),((e,t)=>{e.flows[e.version]=Rt(e.flows[e.version],t)}))}))});Vo.getState;const Bo=x.details`
  summary svg {
    transform: rotate(-90deg);
  }

  &[open] > summary:first-child svg {
    transform: rotate(90deg);
  }

  summary ~ * {
    margin-left: 10px;
  }
`,jo=x(Bo)`
  position: relative;

  summary ~ * {
    margin-left: ${({leftShift:e})=>e};
  }
`,zo=x.div`
  cursor: pointer;
  margin-top: 0.2em;
  padding: 0.4em;
  border-radius: 0.3em;
  background: #8db6f6;

  &:hover {
    background: #3377e4;
  }
`,Ro=x.div`
  display: flex;
  margin-left: 1em;

  & > * {
    margin-left: 0.1em;
    //padding: 1em;
  }

  summary {
    padding-right: 0.3em;
  }
`,Fo=x.button`
  background-color: white;
  border: 0;
  border-radius: 0.4em;
  padding: 0.3em;
  margin: 0.5em;
`,Wo=x.div`
  display: grid;
  grid-template-columns: auto 1fr;
  flex: 1;
`,$o=x.form`
  min-width: fit-content;
`,Uo=x.div`
  font-weight: bold;
`,qo=x.div``,Go=x.div`
  display: grid;
  gap: 0.3em;
`,Jo=x.header`
  padding: 10px;
  display: flex;
  align-items: center;
  color: #1f1a1a;
  min-width: fit-content;
  ${({shift:e})=>e&&B`
      padding-left: 0;
    `}
`,Xo=x.img`
  padding: 8px;
  margin-right: 10px;
  border: 3px solid #8db6f6;
  border-radius: 15px;
  max-height: 50px;
  max-width: 50px;
`,Yo=x(Bo)``,Ho=x.summary`
  color: #e0ebfd;
  background-color: #8db6f6;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 30px;
  margin-top: 0.05em;
`,Ko=x.span`
  display: grid;
  place-items: center;

  svg {
    height: 1em;
    width: 1.4em;
  }
`,Zo=x.label`
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 2px solid blue;
`,Qo=x.div``,er=x.div`
  flex: 1;
  height: max-content;
`,tr=x.div`
  margin-left: -0.2em;
`,nr=x(xo)``,or=x(xo)``,rr=x(xo)``,ar=x.div`
  text-align: center;
`,sr=x.button`
  text-align: center;
  padding: 0;
  margin: 0;
  border: 0;
  background: 0;
`,ir=x.div`
  position: relative;
  display: grid;
  place-items: center;
  //background-color: blue;
  margin-left: 0.2em;
`,lr=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,cr=x.div`
  position: absolute;
  z-index: 1;
  left: 0;
  width: max-content;
  max-width: 30vw;
  padding: 10px;
  background-color: #f5f0e5;
  border: 3px solid #3883fa;
  border-radius: 10px;
`,dr=x(cr)`
  //position: absolute;
  left: 100%;
  //right: -100%;
  top: 0;
  //background-color: red;
`,ur=({children:e})=>d.createElement(Ho,null,d.createElement(Ko,null,d.createElement(ln,null)),d.createElement("span",null,e)),pr=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,mr=(e,t,n)=>{const o=c.exports.useCallback((n=>{e.current&&!e.current.contains(n.target)&&t(n)}),[e,t]);c.exports.useEffect((()=>{const e=()=>document.removeEventListener("mousedown",o);if(!n)return document.addEventListener("mousedown",o),e;e()}),[o,n])},hr=e=>{Vo.dispatch(vt({windowConfig:{id:e,mainId:ce.nodeSettings}}))},gr=({node:e,getNextListFromNode:t})=>{const{id:n,nodeState:{positionNumber:o,data:{name:r}}}=e;return d.createElement(jo,{leftShift:"1em"},d.createElement(ur,null,r," #",n,":",o,d.createElement(Fo,{onClick:()=>hr(n),key:n},"Jump")),d.createElement(Qo,null,t(e).map((e=>d.createElement(gr,{getNextListFromNode:t,key:e.id,node:e})))))},fr=e=>{const{render:t,list:n,title:o}=e,r=c.exports.useRef(null);return mr(r,(()=>{r.current&&(r.current.open=!1)})),d.createElement(jo,{leftShift:"0",ref:r},d.createElement(ur,null,o),n.length>0&&d.createElement(cr,null,n.map(t)))},vr=({id:e})=>{const t=$t(Ft),n=new bt(t).getNode(e),{subnodes:o,out1:r,prevDirectNodes:a}=n,s=({nodeState:{positionNumber:e,id:t,data:{name:n}}})=>d.createElement(zo,{onClick:()=>hr(t),key:t},n," #",t,":",e);return d.createElement(Ro,null,d.createElement(fr,{list:o,render:s,title:"Subnodes"}),d.createElement(fr,{list:a,render:s,title:"Prev"}),d.createElement(fr,{list:r,render:e=>d.createElement(gr,{getNextListFromNode:({out1:e})=>e,key:e.id,node:e}),title:"Next"}))},wr={flow_node_type_id:0,nodes_id:0,node_scrdata_id:0,flow_action_scrdata_id:0,order:0,nodes_group_id:0,name:"**",description:"**",icon_link:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",icon_link_selected:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:0,execute_node_specific_date_time:"2020-11-11T19:30",loop_cycles:0,node_settings_json:{},node_response_settings_json:{},loop_cycle_reached_jump_to_node:0,node_attributes:[],node_object_lists:{},node_story:"Node story"},yr=c.exports.createContext({type:"template"}),Er=c.exports.createContext({setFormValues:null}),xr=({setFormValues:e,control:t,remount:n,defaultValue:o})=>{const r=W({control:t,defaultValue:o}),[a,s]=c.exports.useState(!1);return d.createElement("div",{onMouseLeave:()=>a&&n()},d.createElement(Ao,{values:r,setValues:t=>{s(!0),e(t)}}))},br=({path:e,obj:t,RenderElement:n})=>{var o;if("object"!=typeof t||null===t)return d.createElement(n,{path:e});const r=le(t).map((o=>{const r=t[o];return d.createElement(br,{key:[...e,o].join("."),path:[...e,o],obj:r,RenderElement:n})})),a=e[e.length-1],s=null!=(o=Gt[a])?o:Jt(a.replace(/_/g," "));return d.createElement(Bo,null,d.createElement(ur,null,s),d.createElement(Qo,null,r))},_r=({pathToFieldValue:e})=>{var t;const[n,o]=c.exports.useState(!1),{getValues:r,setValue:a}=G(),s=r(),i=null!=(t=s.node_settings_json.jparam_settings)?t:[],l=s.this_node_unique_id,u=$t(Ft),p=new bt(u).getNode(l),{prevDirectNodes:m}=p,h=c.exports.useRef(null);return mr(h,(()=>n&&o(!1)),!n),d.createElement(ir,{ref:h},d.createElement(sr,{onClick:()=>o(!n)},d.createElement(un,{height:15})),n&&d.createElement(dr,null,d.createElement(Bo,null,d.createElement(ur,null,"Prev nodes"),m.length>0&&d.createElement(Qo,{style:{zIndex:2}},m.map((({nodeState:{positionNumber:t,id:n,data:o}})=>{const l=({path:t})=>{const o=t[t.length-1],l=$t((e=>{const o=Ft(e),{data:r}=o.drawflow[n];return((e,t)=>{for(const n of t){if(!(n in e))return;e=e[n]}return e})(r,t)}));return d.createElement(pr,null,d.createElement("span",{onClick:()=>{const o=`&%jparam:${s.this_node_unique_id}:${i.length}%&`,l={replace_this_element:e.slice(1).join(","),replace_tag:o,with_this_element_value:{node_unique_id:n,settings:Number("node_settings_json"===e[0]),parameter:t.slice(1).join(",")}};i.push(l),a("node_settings_json.jparam_settings",i);const c=e.join("."),d=r(c);"string"==typeof d&&a(c,d+o)}},d.createElement(pn,{height:15})),d.createElement("span",null,o,":"),d.createElement("span",null,l))};return d.createElement(Bo,{key:n},d.createElement(ur,null,o.name," $",n,":",t),d.createElement(br,{RenderElement:l,obj:o.node_settings_json,path:["node_settings_json"]}),d.createElement(br,{RenderElement:l,obj:o.node_response_settings_json,path:["node_response_settings_json"]}))}))))))},kr=({path:e})=>{const{type:t}=c.exports.useContext(yr),n=e[e.length-1],o=`${e.join(".")}`,r=Jt(n.replace(/_/g," "));return d.createElement(Zo,null,r,":",d.createElement(lr,null,d.createElement(q,{name:o,render:({field:e})=>{const{value:t}=e,o=null===t;(e=>{const t=!(n in wr)||null===e||typeof wr[n]==typeof e;t||console.log({key:n,value:e,properValue:wr[n]})})(t);const r=n in wr?wr[n]:t,a="string"==typeof r||o?"text":typeof r;return d.createElement("input",l(i({type:a},e),{value:null!=t?t:"",onChange:t=>{const{value:n}=t.target;e.onChange("number"===a?parseInt(n):n)}}))}}),"node"===t&&d.createElement(_r,{pathToFieldValue:e})))},Cr=e=>{var t;const{type:n}=c.exports.useContext(yr),o=Wt(),{defaultValues:r,setControl:a}=e,s=$({defaultValues:r}),{handleSubmit:u,formState:{errors:p},reset:m,control:h,getValues:g}=s;c.exports.useEffect((()=>{a(h)}),[]);const f=r,{name:v,description:w,icon_link:y}=f,E=null==(t=$t((e=>e.sidebarVisible)))||t;return d.createElement(U,i({},s),d.createElement($o,{onSubmit:u((e=>{"template"===n&&o(Pt(e)),"node"===n&&o(zt.updateNode(e))}))},d.createElement(Jo,{shift:!E},!E&&d.createElement(tr,null,d.createElement(Zn,null)),d.createElement(Xo,{src:y}),d.createElement(Go,null,d.createElement(Uo,null,v),d.createElement(qo,null,w)),"node"===n&&d.createElement(vr,{id:r.this_node_unique_id})),d.createElement(Yo,{open:!0},d.createElement(ur,null,"Default settings"),d.createElement(Qo,null,Object.entries(f).map((([e,t])=>"object"==typeof t&&null!==t||e in Gt?null:d.createElement(kr,{key:e,path:[e]}))))),le(Gt).map((e=>f[e]?d.createElement(br,{RenderElement:kr,key:e,obj:f[e],path:[e]}):null)),0!==Object.keys(p).length&&d.createElement("div",null,d.createElement("pre",null,JSON.stringify(p,null,2))),d.createElement(ar,null,d.createElement(nr,{type:"submit"},"Save"),d.createElement(rr,{type:"reset",onClick:()=>m()},"Reset"),d.createElement(or,{type:"button",onClick:()=>{"template"===n&&o(Pt(l(i({},g()),{delete:1})))}},"Delete"))))},Sr=({json:e})=>{const[t,n]=c.exports.useState(0),[o,r]=c.exports.useState(0),[a,s]=c.exports.useState(e),[i,l]=c.exports.useState(),u=e=>{s(e),n((e=>e+1))};return d.createElement(Er.Provider,{value:{setFormValues:u}},d.createElement(er,null,d.createElement(Wo,null,d.createElement(Cr,{key:`leftBar-${t}`,defaultValues:a,setControl:l}),i&&d.createElement(xr,{key:`rightBar-${o}`,remount:()=>{r((e=>e+1))},setFormValues:u,control:i,defaultValue:a}))))},Ir=({id:e})=>{const t=$t((t=>Ft(t).drawflow[e].data));return d.createElement(yr.Provider,{value:{type:"node"}},d.createElement(Sr,{json:t}))},Mr=({id:e})=>{const t=$t((t=>t.templates.find((({nodes_id:t})=>t===e))));return void 0===t?d.createElement("div",null,"Loading..."):d.createElement(yr.Provider,{value:{type:"template"}},d.createElement(Sr,{json:t}))},Nr=x.div`
  display: flex;
  align-items: normal;
  overflow-x: auto;

  &::-webkit-scrollbar-thumb {
    background-color: #217ce8;
  }

  &::-webkit-scrollbar {
    height: 5px;
  }
`,Dr=x.div`
  flex: 1;
  order: -1;
  width: 0;
`,Pr=x.main`
  display: flex;
  position: relative;
`,Tr=x.div`
  display: flex;
`,Or=()=>{const e=$t((e=>e));return d.createElement(Ao,{values:e,setValues:()=>null})},Lr=x.button`
  white-space: nowrap;
  //display: inline-block;
  ${({selected:e})=>e&&B`
      font-weight: bold;
    `}
`,Ar=()=>{var e;const t=null==(e=$t((e=>e.sidebarVisible)))||e,n=$t((e=>e.flows)),o=$t((e=>e.flows.length)),r=$t((e=>e.version)),a=Wt(),s=[t?null:d.createElement(Zn,{style:{height:"2em"},key:-1}),d.createElement(Lr,{key:0,selected:0===r,onClick:()=>a(At(0))},"Prototyping",n[0]&&":"+Object.keys(n[0].drawflow).length)];for(let i=o-1;i>0;--i)s.push(d.createElement(Lr,{key:i,selected:i===r,onClick:()=>a(At(i))},"Version ",i,n[i]&&":"+Object.keys(n[i].drawflow).length));return d.createElement(Nr,null,s)},Vr=()=>d.createElement(Dr,null,d.createElement(Ar,null),d.createElement(jn,null)),Br=()=>{var e;Wt();const t=null==(e=$t((e=>e.sidebarVisible)))||e,n=$t((e=>e.windowConfig.mainId)),o=$t((e=>e.windowConfig.id)),r=$t((e=>e.version));return n===ce.templateNodeSettings?d.createElement(d.Fragment,null,d.createElement(Mr,{key:o,id:o})):n===ce.nodeSettings?d.createElement(d.Fragment,null,d.createElement(Ir,{key:o,id:o})):n===ce.mainFlow?d.createElement(Vr,{key:r}):n===ce.codeEditor?d.createElement(d.Fragment,null,d.createElement("span",{style:{position:"absolute",zIndex:2,backgroundColor:"white",top:-8}},!t&&d.createElement(Zn,null)),d.createElement(Or,null)):null},jr=()=>{const e=$t((e=>e.windowConfig.sideId));return e===ue.flowSettings?d.createElement(Eo,null):e===ue.groupSettings?d.createElement(Oo,null):null},zr=x.div`
  flex: 1;
`,Rr=()=>{const e=Wt();return c.exports.useEffect((()=>{e(St()),e(Mt()),e(Dt()),e(Lt())}),[]),d.createElement(Tr,null,d.createElement(zr,null,d.createElement(ho,null),d.createElement(Pr,null,d.createElement(Qn,null),d.createElement(Br,null),d.createElement(jr,null))),d.createElement(ut,null))};J.render(d.createElement(c.exports.StrictMode,null,d.createElement(X,{store:Vo},d.createElement(Rr,null))),document.getElementById("root"));
