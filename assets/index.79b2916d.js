var Qt=Object.defineProperty,Yt=Object.defineProperties;var en=Object.getOwnPropertyDescriptors;var Ye=Object.getOwnPropertySymbols;var tn=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable;var Me=(e,t,n)=>t in e?Qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))tn.call(t,n)&&Me(e,n,t[n]);if(Ye)for(var n of Ye(t))nn.call(t,n)&&Me(e,n,t[n]);return e},k=(e,t)=>Yt(e,en(t));var R=(e,t,n)=>(Me(e,typeof t!="symbol"?t+"":t,n),n);import{l as X,c as on,D as sn,u as rn,a as an,r as v,R as i,C as Pe,A as cn,P as ln,s as w,b as ee,d as j,W as dn,h as un,S as pn,e as mn,M as Be,f as et,T as hn,g as fn,i as gn,j as wn,k as Ae,m as tt,n as vn,I as xn,o as yn,p as bn,q as En,t as $,J as Sn,v as Cn,w as kn,x as _n,y as In,z as Nn,B as Dn,E as Mn,_ as Pn,F as Bn,G as An,H as Ln,K as On,L as Tn,N as Vn,O as Fn,Q as Rn,U as jn}from"./vendor.3e74c037.js";const zn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};zn();var fe;(function(e){e.START="START",e.MIDDLE="MIDDLE",e.END="END"})(fe||(fe={}));var ce;(function(e){e.Drawflow="drawflow",e.Groups="groups"})(ce||(ce={}));var Z;(function(e){e.backgroundOpacity="backgroundOpacity",e.backgroundBlur="backgroundBlur",e.backgroundImageUrl="backgroundImageUrl"})(Z||(Z={}));var T;(function(e){e.in="in",e.out="out"})(T||(T={}));const Q=e=>Object.keys(e);var V;(function(e){e[e.mainFlow=0]="mainFlow",e[e.codeEditor=1]="codeEditor",e[e.templateNodeSettings=2]="templateNodeSettings",e[e.nodeSettings=3]="nodeSettings"})(V||(V={}));var U;(function(e){e[e.groupSettings=0]="groupSettings",e[e.flowSettings=1]="flowSettings",e[e.none=2]="none"})(U||(U={}));const le=()=>(e,t,n)=>{if(!("value"in n)){if("get"in n){const o=n.get;n.get=function(){if(this.cache[t])return this.cache[t];const s=o.bind(this)();return this.cache[t]=s,s}}}return n};var Wn=Object.defineProperty,$n=Object.getOwnPropertyDescriptor,de=(e,t,n,o)=>{for(var s=o>1?void 0:o?$n(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,n,s):a(s))||s);return o&&s&&Wn(t,n,s),s};class te{constructor(t,n){R(this,"id");R(this,"flow");R(this,"nodeState");R(this,"spacingX",40);R(this,"spacingY",60);R(this,"state");R(this,"cache",{});this.id=t,this.flow=n,this.state=n.state,this.nodeState=this.state.drawflow[this.id]}get head(){return this.nodeState.head}get lane(){return this.nodeState.lane}get port(){return this.nodeState.port}get portInPos(){var t;return(t=this.state.ports.find(({nodeId:n,portId:o,type:s})=>n===this.id&&o===1&&s===T.in))==null?void 0:t.pos}get outPorts(){return this.state.ports.filter(({type:t,nodeId:n})=>this.id===n&&t===T.out)}get parent(){var n;const t=(n=this.parentConnection)==null?void 0:n.startId;return t?this.flow.getNode(t):null}get parentConnection(){return this.state.connections.find(t=>{t||console.error({conn:t});const{endId:n,endPort:o}=t;return n===this.id&&o===1})}get totalWidth(){return this.nodeState.visible===!1?0:Math.max(this.width+this.subnodesWidth,this.leftWidth+this.rightWidth)}get childrenTotalWidth(){const{out1:t}=this;if(!t.length)return 0;let n=0;return t.forEach(o=>{n+=o.totalWidth}),n+this.spacingX*(t.length-1)}get leftWidth(){if(this.nodeState.visible===!1)return 0;const{out1:t,childrenTotalWidth:n}=this,o=this.width/2;if(!t.length)return o;const s=t[0].leftWidth,r=t[t.length-1].rightWidth,a=s+(n-s-r)/2;return Math.max(a,o)}get rightWidth(){if(this.nodeState.visible===!1)return 0;const{out1:t,childrenTotalWidth:n}=this,o=this.width/2+this.subnodesWidth;if(!t.length)return o;const s=t[0].leftWidth,r=t[t.length-1].rightWidth,a=r+(n-s-r)/2;return Math.max(a,o)}get all2Successors(){const{subnodes:t,out1:n}=this,o=[...n];return t.forEach(s=>o.push(s)),this.out1.forEach(s=>o.push(s)),o}get allSuccessors(){const t=[...this.out1,...this.subnodes],n=[...t];return t.forEach(o=>n.push(...o.allSuccessors)),n}get outConnections(){return this.state.connections.filter(({startId:t})=>t===this.id)}get out1(){return this.children(1)}get prevDirectNodes(){const t=[];let n=this.parent;for(;n;)t.push(...n.subnodes.reverse()),t.push(n),n=n.parent;return t}get firstSubnode(){return this.children(2)[0]}get subnodes(){var t,n;return((n=(t=this.firstSubnode)==null?void 0:t.flowLine)==null?void 0:n.flowLineNodes)||[]}get subnodesWidth(){return this.nodeState.subnodesVisibility===!1?0:this.subnodes.reduce((t,n)=>t+n.width+this.spacingX,0)}get isSub(){return this.complexParentNode!==null}get complexParentNode(){const t=this.parent;return t?t.firstSubnode===this?t:t.complexParentNode:null}get flowLine(){const t=[this];let n=this,o=n.firstSubnode;for(;n.out1.length===1;)n=n.out1[0],t.push(n),o=o||n.firstSubnode;return n.out1.length>1?null:{flowLineNodes:t,hasSubnodes:o}}get height(){return this.state.drawflow[this.id].height}get width(){return this.state.drawflow[this.id].width}get pos(){return this.state.drawflow[this.id].pos}alignChildren(){const{out1:t}=this;this.update({isSub:!1,port:{out:2}});let n=this.pos.x-(this.leftWidth-this.width/2);for(const s of t){const r=n+(s.leftWidth-s.width/2);s.setPos({x:r,y:this.pos.y+this.height+this.spacingY}),s.nodeState.visible!==!1&&(n+=s.totalWidth+this.spacingX),s.alignChildren()}const{subnodes:o}=this;o.length&&(n=this.pos.x+this.width+this.spacingX,o.forEach(s=>{s.update({isSub:!0,port:{out:1}}),s.setPos({x:n,y:this.pos.y+(this.height/2-s.height/2)}),n+=s.width+this.spacingX}))}toggleVisibility(t){this.update({visible:t}),this.parentConnection&&(this.parentConnection.visible=t),this.outConnections.forEach(n=>{n.visible=t})}toggleChildrenVisibility(){var s;const t=(s=this.nodeState.childrenVisibility)!=null?s:!0;this.update({childrenVisibility:!t});const{subnodes:n,allSuccessors:o}=this;o.forEach(r=>{n.includes(r)||r.toggleVisibility(!t)})}toggleSubnodesVisibility(){var n;const t=(n=this.nodeState.subnodesVisibility)!=null?n:!0;this.update({subnodesVisibility:!t}),this.subnodes.forEach(o=>{o.toggleVisibility(!t)})}children(t){return this.state.connections.filter(({startId:n,startPort:o})=>n===this.id&&o===t).map(n=>this.flow.getNode(n.endId))}setPos(t){const{pos:n}=this,{x:o,y:s}=t;this.flow.moveNode({nodeId:this.id,dx:o-n.x,dy:s-n.y})}putInCenter(t){const{width:n,height:o}=t;this.setPos({x:n/3,y:o/3})}update(t){const n=X.merge(this.nodeState,t);Object.assign(this.nodeState,n)}}de([le()],te.prototype,"totalWidth",1);de([le()],te.prototype,"childrenTotalWidth",1);de([le()],te.prototype,"leftWidth",1);de([le()],te.prototype,"rightWidth",1);de([le()],te.prototype,"subnodesWidth",1);class F{constructor(t){R(this,"state");R(this,"nodes",{});R(this,"distanceToConnect",100);R(this,"distanceToDisconnect",10);this.state=t;const{drawflow:n}=this.state;Object.keys(n).map(o=>this.nodes[Number(o)]=new te(Number(o),this))}get heads(){return Object.entries(this.nodes).filter(([,t])=>!t.parent).map(t=>t[1])}getNode(t){const n=this.nodes[t];if(n===void 0)throw new Error(`Cannot get node with id: ${t}. Node is not present in flow array of nodes`);return n}align(){return this.setLaneNumbers(),this.heads.forEach((t,n)=>{t.alignChildren()}),this.state.drawflow}alignAll(){const{drawflow:t,connections:n,ports:o}=this.state,s={drawflow:t,connections:n,ports:o};this.state.drawflow=new F(JSON.parse(JSON.stringify(s))).align()}addConnection(t){let{startId:n,startPort:o,endId:s,endPort:r}=t;const a=this.getNode(s),c=this.getNode(n),l=o===2;if(a.parent||c.nodeState.visible===!1)return!1;const d=a.flowLine;if((l||c.isSub)&&(!d||d.hasSubnodes))return!1;let u=null;if(l&&c.subnodes.length)if(c.nodeState.subnodesVisibility===!1){n=c.subnodes[c.subnodes.length-1].id,o=1,this.state.connections.push({startId:n,startPort:o,endId:s,endPort:r,visible:!0});const{flowLineNodes:p}=d;p.forEach(m=>m.toggleVisibility(!1));return}else u=c.subnodes[0];if(c.isSub&&c.out1.length&&(u=c.out1[0]),u!==null){const p=this.state.connections.find(h=>h.startId===n&&h.startPort===o&&h.endId===u.id&&h.endPort===1),m=this.state.connections.indexOf(p);this.state.connections.splice(m,1);const{flowLineNodes:f}=d,g=f[f.length-1];this.state.connections.push({startId:g.id,startPort:1,endId:u.id,endPort:1,visible:!0})}this.state.connections.push({startId:n,startPort:o,endId:s,endPort:r,visible:!0})}moveNode({dx:t,dy:n,nodeId:o}){this.state.drawflow[o].pos.x+=t,this.state.drawflow[o].pos.y+=n}dragNode({dx:t,dy:n,nodeId:o}){this.moveNode({dx:t,dy:n,nodeId:o}),this.toggleAvailablePortToConnect(o)}untieNodeIfFarAway(t){const n=this.getNode(t);if(n.parentConnection){const{startPort:o,endPort:s,startId:r,endId:a}=n.parentConnection,{pos:{x:c,y:l}}=this.state.ports.find(({portId:f,nodeId:g,type:h})=>g===r&&h==="out"&&f===o),{pos:{x:d,y:u}}=this.state.ports.find(({portId:f,nodeId:g,type:h})=>g===a&&h==="in"&&f===s),p=Math.hypot(c-d,l-u);if(Math.abs(p-n.spacingY)<this.distanceToDisconnect)return;const m=this.state.connections.indexOf(n.parentConnection);this.state.connections.splice(m,1)}}toggleAvailablePortToConnect(t){if(!this.state.config.drag)return;const n=this.getNode(t),o=n.head,s=n.portInPos;if(!s)return;let r=null;Object.entries(this.nodes).filter(([,a])=>a.head!==o&&a.nodeState.visible!==!1).forEach(([a,c])=>{Number(a)!==t&&c.outPorts.forEach(l=>{const{pos:d}=l,u=Math.hypot(s.x-d.x,s.y-d.y);u<this.distanceToConnect&&(r===null||u<r.distance)&&(r={port:l,distance:u})})}),r!==null?this.state.portToConnect=r.port:this.state.portToConnect=null}setLaneNumbers(){let t=this.heads;for(t.forEach(n=>n.update({head:n.id,lane:0}));t.length;){const n=[];t.forEach(o=>{let s=o.lane+1;const{subnodes:r,head:a}=o;if(a===void 0){console.error("head is undefined in setLaneNumbers");return}if(r.length)for(const l of r)l.update({lane:s++,head:a});const c=o.children(1);c.forEach(l=>l.update({head:a,lane:s})),n.push(...c)}),t=n}this.heads.forEach(n=>{const{head:o}=n;for(let s=0,r=0,a=[n];a.length;++s)a=Object.values(this.nodes).filter(c=>c.lane===s&&c.head===o),a.forEach(c=>{c.update({positionNumber:r++})})})}}const ge={nodeId:1,canvasDrag:!1,config:{drag:!1,connectionsLabelEnable:!1,canvasTranslate:{x:0,y:0},zoom:{value:1,max:2,min:.5,tick:.1}},drawflow:{},connections:[],connectionsLabel:{},ports:[],select:null,newPathDirection:null,modalType:null,editLock:!1,mouseBlockDragPos:{clientX:void 0,clientY:void 0}},qn=(e,{payload:{drawflow:t,connections:n}})=>{Object.assign(e,ge),e.drawflow=t,e.nodeId=Math.max(...Object.keys(t).map(Number))+1,e.connections=n},nt=(e,{payload:t})=>{const n=X.merge(e,t);Q(n).forEach(o=>{e[o]=n[o]})},ot=on({name:ce.Drawflow,initialState:ge,reducers:{setState:nt,setEditLock:(e,{payload:t})=>{e.editLock=t},moveNode:(e,t)=>{new F(e).moveNode(t.payload)},setMouseBlockDragPos:(e,{payload:t})=>{e.mouseBlockDragPos=t},unSelect:e=>{e.config.drag=!1,e.select=null},select:(e,{payload:t})=>{e.config.drag=t.type==="node",e.select=t},selectPort:(e,{payload:t})=>{const n=e.ports.find(({nodeId:s,portId:r,type:a})=>a===t.type&&r===t.portId&&s===t.nodeId);if(!n){console.error("Cannot find port to select in state.ports");return}const o=e.ports.indexOf(n);e.select={type:t.type,selectId:o}},moveCanvas:(e,{payload:{movementX:t,movementY:n}})=>{e.canvasDrag&&(e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=n)},canvasDrag:(e,{payload:t})=>{e.canvasDrag=t},canvasMouseMove:(e,{payload:{movementX:t,movementY:n,clientX:o,clientY:s}})=>{var r;if(e.clientCurrentMousePos={clientX:o,clientY:s},e.canvasDrag)e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=n;else if(((r=e.select)==null?void 0:r.type)===T.out)e.newPathDirection={clientX:o,clientY:s};else if(e.config.drag&&e.select){const a=e.select.selectId,{clientX:c,clientY:l}=e.mouseBlockDragPos;e.mouseBlockDragPos={clientX:o,clientY:s};const d=e.config.zoom.value,u=(o-c)/d,p=(s-l)/d;e.drawflow[a].pos.x+=u,e.drawflow[a].pos.y+=p,new F(e).untieNodeIfFarAway(a)}},canvasMouseUp:e=>{var n,o;const t=new F(e);if(e.portToConnect&&((n=e.select)==null?void 0:n.selectId)){const{nodeId:s,portId:r}=e.portToConnect,a=e.select.selectId,c=1;t.addConnection({startId:s,startPort:r,endId:a,endPort:c})}e.portToConnect=void 0,e.newPathDirection=null,e.canvasDrag=!1,e.config.drag=!1,((o=e.select)==null?void 0:o.type)===T.out&&(e.select=null)},updateNode:(e,{payload:t})=>{const n=t.this_node_unique_id;e.drawflow[n].data=t},deleteNode:e=>{const{connections:t,drawflow:n,ports:o,select:s}=e;if((s==null?void 0:s.type)!=="node")return;const{selectId:r}=s;let a=t.length;for(;a--;){const{endId:l,startId:d}=t[a];[d,l].includes(r)&&(t.splice(a,1),console.log(sn(t)))}let c=o.length;for(;c--;){const{nodeId:l}=o[c];l===r&&o.splice(c,1)}delete n[r],e.select=null,console.log("GGG")},deletePath:e=>{const{connections:t,select:n}=e;(n==null?void 0:n.type)==="path"&&(console.log("delete"),t.splice(n.selectId,1))},load:qn,portMouseUp:(e,{payload:{nodeId:t,portId:n,PortType:o}})=>{const{select:s}=e;if(o!==T.in||!s)return;const r=e.ports[s.selectId],a=t,c=n,l=r.nodeId,d=r.portId;if(l===a)return;new F(e).addConnection({startId:l,startPort:d,endId:a,endPort:c})},clear:()=>ge,pushPorts:(e,{payload:t})=>{if(t.length===0)return;const{nodeId:n}=t[0];e.ports=e.ports.filter(o=>o.nodeId!==n),e.ports.push(...t)},zoom:(e,{payload:t})=>{const{zoom:n}=e.config,{value:o,max:s,min:r,tick:a}=n,c=o+(t?a:-a);c<=s&&c>=r&&(n.value=c),t===null&&(e.config.canvasTranslate={x:0,y:0},n.value=1)},nodeSize:(e,{payload:{height:t,width:n,id:o}})=>{e.drawflow[o].height=t,e.drawflow[o].width=n},toggleSubnodes:(e,{payload:{id:t}})=>{new F(e).getNode(t).toggleSubnodesVisibility()},toggleChildren:(e,{payload:{id:t}})=>{new F(e).getNode(t).toggleChildrenVisibility()},copyNode:e=>{var t;((t=e.select)==null?void 0:t.type)==="node"&&(e.nodeToCopyId=e.select.selectId)}}}),M=ot.actions,st=ot.reducer,B=e=>e.flows[e.version],L=()=>rn(),S=an;function ne(e,t){const[n,o]=v.exports.useState(()=>{try{const r=window.localStorage.getItem(e);return r?JSON.parse(r):t}catch(r){return console.log(r),t}});return[n,r=>{try{const a=r instanceof Function?r(n):r;o(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(a){console.log(a)}}]}var C;(function(e){e.Text="text",e.Audio="audio",e.Video="video",e.File="file",e.Image="image",e.Empty="empty",e.Link="link",e.Switch="switch",e.SwitchOption="switchOption",e.SetTypingIndicator="setTypingIndicator",e.Countdown="countdown",e.Delay="delay",e.HttpRequest="httpRequest"})(C||(C={}));const Jn=[C.Text,C.Audio,C.Video,C.File,C.Image,C.Empty,C.Link,C.Empty,C.SwitchOption,C.SetTypingIndicator];var oe;(function(e){e.In="incoming",e.Out="outgoing"})(oe||(oe={}));const Le=()=>({type:C.Text,src:"",direction:oe.Out,renderable:!0}),Oe=()=>({type:C.Empty,src:"",direction:oe.In,renderable:!1,flowNodeId:0});const rt=(e=()=>null,t=()=>null,n=()=>null,o=300)=>{const[s,r]=v.exports.useState(!1),a=v.exports.useRef(null),c=v.exports.useCallback(d=>{a.current=setTimeout(()=>{r(!0),e(d)},o)},[e,o]),l=v.exports.useCallback(d=>{a.current&&clearTimeout(a.current),s?t(d):n(d),r(!1)},[n,s,t]);return{onMouseDown:d=>c(d),onTouchStart:d=>c(d),onMouseUp:d=>l(d),onTouchEnd:d=>l(d)}},at=()=>navigator.permissions.query({name:"microphone"}).then(e=>e.state),it=()=>navigator.permissions.query({name:"camera"}).then(e=>e.state),we=e=>e.getTracks().forEach(t=>t.stop()),Gn=async()=>{const e=await at();return e==="denied"&&alert("Access to microphone is denied. Please allow access and try again"),e==="prompt"&&(alert("Please allow access to microphone and try again"),navigator.mediaDevices.getUserMedia({audio:!0}).then(we)),e==="granted"},Hn=async()=>{const e=await it();return e==="denied"&&alert("Access to camera is denied. Please allow access to camera and try again"),e==="prompt"&&(alert("Please allow access to camera and try again"),navigator.mediaDevices.getUserMedia({video:!0}).then(we)),e==="granted"},Un=async()=>{const e=await it(),t=await at();return(e==="denied"||t==="denied")&&alert("Access to camera or microphone is denied. Please give permissions and try again"),(e==="prompt"||t==="prompt")&&(alert("Please allow access to camera and microphone and try again"),navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then(we)),e==="granted"&&t==="granted"},Kn=async(e,t,n={audio:!0})=>{if(n.audio&&n.video&&!await Un()||n.audio&&!await Gn()||n.video&&!await Hn())return null;const o=[],s=await navigator.mediaDevices.getUserMedia(n);t(s);const r=new MediaRecorder(s);return r.ondataavailable=a=>{o.push(a.data)},r.onstop=()=>{const a=new Blob(o,{type:n.video?"video/webm":"audio/ogg; codecs=opus"});o.splice(0,o.length);const c=window.URL.createObjectURL(a);e(c)},r.start(),()=>{r.stop(),we(r.stream)}},Zn="https://chatscope.io/storybook/react/static/media/akane.b135c3e3.svg",Xn=()=>i.createElement(Pe,null,i.createElement(cn,{src:Zn,name:"Zoe",status:"available"}),i.createElement(Pe.Content,{userName:"Zoe",info:"Active 10 mins ago"})),Qn=({onValue:e})=>i.createElement(ln,{style:{width:"99vw",margin:"auto",alignSelf:"center"},onSelect:t=>{"native"in t?e(t.native):console.error("Emoji not supported",t)},native:!0}),Yn=e=>i.createElement("svg",y({viewBox:"0 0 100 100"},e),i.createElement("path",{d:"M52 75.9V86h14c1.1 0 2 .9 2 2s-.9 2-2 2H34c-1.1 0-2-.9-2-2s.9-2 2-2h14V75.9c-13.4-1-24-12.3-24-25.9 0-1.1.9-2 2-2s2 .9 2 2c0 12.1 9.9 22 22 22s22-9.9 22-22c0-1.1.9-2 2-2s2 .9 2 2c0 13.7-10.6 24.9-24 25.9zM65 25v25c0 8.3-6.7 15-15 15s-15-6.7-15-15V25c0-8.3 6.7-15 15-15s15 6.7 15 15zm-4 0c0-6.1-4.9-11-11-11s-11 4.9-11 11v25c0 6.1 4.9 11 11 11s11-4.9 11-11V25z"})),eo=e=>i.createElement("svg",k(y({},e),{viewBox:"0 0 16 16"}),i.createElement("g",{transform:"translate(0,-1036.3622)"},i.createElement("path",{d:"M 8 0 C 3.5876443 0 0 3.5877 0 8 C 0 12.4124 3.5876443 16 8 16 C 12.412356 16 16 12.4124 16 8 C 16 3.5877 12.412356 0 8 0 z M 8 1 C 11.871916 1 15 4.1281 15 8 C 15 11.8719 11.871916 15 8 15 C 4.1280844 15 1 11.8719 1 8 C 1 4.1281 4.1280844 1 8 1 z M 6 5 A 1.0000094 1.0000066 0 0 0 5 6 A 1.0000094 1.0000066 0 0 0 6 7 A 1.0000094 1.0000066 0 0 0 7 6 A 1.0000094 1.0000066 0 0 0 6 5 z M 10 5 A 1.0000094 1.0000066 0 0 0 9 6 A 1.0000094 1.0000066 0 0 0 10 7 A 1.0000094 1.0000066 0 0 0 11 6 A 1.0000094 1.0000066 0 0 0 10 5 z M 3.4921875 8.0351562 A 0.50004997 0.50004997 0 0 0 3 8.5429688 C 2.9999999 10.301869 3.9584546 11.925081 5.5039062 12.800781 C 7.0493581 13.676481 8.9506417 13.676481 10.496094 12.800781 C 12.041546 11.925081 13 10.301869 13 8.5429688 A 0.50004997 0.50004997 0 1 0 12 8.5429688 C 12 9.9394688 11.242844 11.229541 10.003906 11.931641 C 8.7649684 12.633641 7.2350319 12.633641 5.9960938 11.931641 C 4.7571555 11.229541 3.9999999 9.9394688 4 8.5429688 A 0.50004997 0.50004997 0 0 0 3.4921875 8.0351562 z ",transform:"translate(0,1036.3622)",id:"circle5164"}))),to=e=>i.createElement("svg",k(y({},e),{viewBox:"0 0 48 48"}),i.createElement("path",{d:"M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"})),no=e=>i.createElement("svg",k(y({},e),{viewBox:"0 0 30 30"}),i.createElement("path",{strokeMiterlimit:"10",strokeWidth:"2",d:"M12 8v13M18 8v13"})),oo=e=>i.createElement("svg",k(y({},e),{viewBox:"0 0 16 16"}),i.createElement("path",{d:"M6.5 2v1h-3v1h9V3h-3V2h-3zm-2 3v9h7V5h-7zm1 1h1v7h-1V6zm2 0h1v7h-1V6zm2 0h1v7h-1V6z",overflow:"visible"})),so=e=>i.createElement("svg",k(y({},e),{viewBox:"0 0 45.187 45.188"}),i.createElement("g",null,i.createElement("g",null,i.createElement("path",{d:"M0,18.961h4.842V6.052c0-0.446,0.362-0.807,0.807-0.807H18.56V0.404H5.649C2.535,0.404,0,2.939,0,6.053V18.961z"}),i.createElement("path",{d:`M39.539,0.403h-12.91v4.841h12.91c0.445,0,0.807,0.362,0.807,0.807v12.91h4.842V6.052
			C45.189,2.938,42.654,0.403,39.539,0.403z`}),i.createElement("path",{d:`M4.842,39.136V26.225H0v12.911c0,3.113,2.535,5.648,5.649,5.648H18.56v-4.842H5.649
			C5.204,39.942,4.842,39.58,4.842,39.136z`}),i.createElement("path",{d:`M40.346,39.136c0,0.446-0.362,0.807-0.807,0.807H26.628v4.842h12.91c3.115,0,5.648-2.536,5.648-5.65V26.225h-4.842
			L40.346,39.136L40.346,39.136z`}),i.createElement("circle",{cx:"22.594",cy:"22.594",r:"6.455"})))),ro=e=>i.createElement("svg",k(y({},e),{viewBox:"0 0 24 24"}),i.createElement("path",{d:"M8.8916,21.85352A6.25,6.25,0,0,1,4.47168,11.18457l7.95508-7.95508A4.49986,4.49986,0,0,1,18.791,9.59277L11.89648,16.4873a2.8164,2.8164,0,0,1-3.88964,0,2.75018,2.75018,0,0,1,.001-3.88867l5.126-5.12695a.99989.99989,0,1,1,1.41406,1.41406l-5.126,5.127a.74971.74971,0,0,0,0,1.06054.76811.76811,0,0,0,1.06054,0L17.377,8.17871a2.50263,2.50263,0,0,0,0-3.53516,2.5591,2.5591,0,0,0-3.53613,0L5.88574,12.59863a4.24989,4.24989,0,1,0,6.01074,6.00977l6.1875-6.18652a.99989.99989,0,1,1,1.41407,1.41406l-6.1875,6.18652A6.20551,6.20551,0,0,1,8.8916,21.85352Z"})),ao=e=>i.createElement("svg",k(y({},e),{viewBox:"0 0 32 32"}),i.createElement("path",{fill:"#8c9eff",d:"M26,3V29a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9a1,1,0,0,1,.23-.64l5-6A1,1,0,0,1,12,2H25A1,1,0,0,1,26,3Z"}),i.createElement("path",{fill:"#5f7cf9",d:"M14,2v8a1,1,0,0,1-1,1H6V9a1,1,0,0,1,.23-.64l5-6A1,1,0,0,1,12,2Z"})),io=e=>i.createElement("svg",k(y({},e),{stroke:"#000",viewBox:"0 0 20 22"}),i.createElement("g",{fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",transform:"translate(1 1)"},i.createElement("path",{d:"M0 15v3a2 2 0 002 2h14a2 2 0 002-2v-3M5 10l4 4 4-4M9 0v14"}))),co=e=>i.createElement("svg",k(y({},e),{viewBox:"0 0 24 24"}),i.createElement("path",{d:"M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z"})),lo=w.span`
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
`,uo=({setFile:e})=>i.createElement(lo,null,i.createElement("label",null,i.createElement("input",{type:"file",onChange:t=>{var o;if(!((o=t.target.files)==null?void 0:o.length)){console.error("No files chosen!");return}const n=t.target.files[0];t.target.value="",e(n)},style:{display:"none"}}),i.createElement(ro,null))),ct=ee("addNewNode"),ve=ee("dragTemplate"),lt=ee("canvasShapeUpdated"),dt=ee("insertCopiedNode"),ut=ee("toggleSidebar"),A=ee("setState"),pt="http://ec2-23-22-24-76.compute-1.amazonaws.com:8080/",po="https://tastypoints.io/akm/restapi.php",mo=pt+po;var Te;(function(e){e[e.getTemplateNodes=1156]="getTemplateNodes",e[e.postTemplateNodes=1157]="postTemplateNodes",e[e.getFlowDataVersion=1160]="getFlowDataVersion",e[e.postFlowDataVersion=1161]="postFlowDataVersion",e[e.getFlow=1162]="getFlow",e[e.postFlow=1163]="postFlow",e[e.fetchBackgroundImages=1164]="fetchBackgroundImages",e[e.getGroups=1154]="getGroups",e[e.postGroups=1155]="postGroups",e[e.getStepSettingsTemplates=1222]="getStepSettingsTemplates"})(Te||(Te={}));const xe=25,K=async(e,t={})=>{const n=window.location.search,s=new URLSearchParams(n).get("session_id");s||(console.error("session_id is not provided!"),alert("session_id is not provided!"));const r=y({session_id:s,sp_name:"OK",session_exp:"2021-02-12T02:57:45.453422",status:"OK",item_id:0,max_row_per_page:50,search_term:"",search_term_header:"",pagination:1,scrdata_id:e},t);return fetch(mo,{method:"post",body:JSON.stringify({input:r}).replace(/'/g,"''")}).then(async a=>{let c=await a.json();if(c.status&&c.data)c=JSON.parse(c.data);else throw console.error(c),alert(c),alert(JSON.stringify(c,null,2)),new Error(c);if(c.response_error)throw console.error(c.response_error),alert(JSON.stringify(c.response_error,null,2)),new Error(c.response_error);if(c.status!=="OK"&&c.sp_name!=="OK")throw alert(JSON.stringify(c,null,2)),new Error(c.response_error);return c})},ho=j("fetchFlow",async(e,{dispatch:t})=>{const n=await K(1162,{item_id:xe});if(n.flows===null){alert("Such flow do not exist or was deleted!");return}const o=n.flows[0];t(A({flowInfo:o}))}),fo=j("fetchFlow",async(e,{getState:t})=>{const{flowInfo:n}=t();if(!n){console.error("Cannot save flow, data is not available");return}(await K(1163,{item_id:xe,flows:[n]})).status==="OK"?alert("Saved"):alert("Cannot save flow")}),Ve=j("fetchGroups",async()=>{const e=await K(1154),{flow_nodes_group:t}=e;return t.reduce((n,o)=>(n[o.id]=o,n),{})}),Fe=j("updateGroup",async(e,{dispatch:t})=>{var o;"delete"in e||(e.delete=0);const n=await K(1155,{flow_nodes_group:[e],item_id:(o=e.id)!=null?o:0});n.status==="OK"?(t(Ve()),e.id||(e.id=n.item_id),alert(`Group ${e.id} updated`)):alert(`Error: cannot ${e.id?"update":"create"} group ${e.node_group_name}`)}),Re=j("fetchTemplateNodes",async()=>{const{flow_nodes:e}=await K(1156,{});return e}),je=j("updateTemplateNode",async(e,{dispatch:t})=>{var o;console.log({templateNode:e}),"delete"in e||(e.delete=0);const n=await K(1157,{flow_nodes:[e],item_id:(o=e.nodes_id)!=null?o:0});console.log({resp:n}),n.status==="OK"?(t(Re()),e.nodes_id||(e.nodes_id=n.item_id,t(A({windowConfig:{id:e.nodes_id,mainId:V.templateNodeSettings}}))),alert(`TemplateNode ${e.nodes_id} updated`),e.delete===1&&t(A({windowConfig:{mainId:V.mainFlow}}))):alert(`Error: cannot ${e.nodes_id?"update":"create"} templateNode ${e.name}, ID: ${e.nodes_id}`)}),go=async e=>{const n=(await K(1160,{item_id:xe,show_ver:e})).flow_steps;return n===null?null:n.filter(({update_version:o})=>o===e||e===0)},ye=j("fetchFlowVersion",go),wo=(e,t)=>{var r,a;const o=new F(e).getNode(t),{nodeState:s}=o;return{node_position:s.positionNumber,flow_lane_id:s.lane,flow_step_x:Math.round(s.pos.x),flow_step_y:Math.round(s.pos.y),prev_node_unique_id:(a=(r=o.parent)==null?void 0:r.id)!=null?a:null,this_node_unique_id:o.id}},vo=j("postFlowVersion",async(e,{getState:t,dispatch:n})=>{const o=t(),s=o.flows[o.version],r=new F(s),{drawflow:a}=s,c=Object.values(JSON.parse(JSON.stringify(a))).map(d=>{const{subnodes:u}=r.getNode(d.id),{data:p}=d;return k(y(y({},p),wo(s,d.id)),{node_attributes:u.map(({id:m})=>m)})});if(c.length===0){alert("Please add at least one node in flow to allow commit!");return}console.log(c);const l=await K(1161,{item_id:xe,flow_steps:c});l.status==="OK"&&l.sp_name==="OK"?(alert("Flow successfully updated."),n(ye(0))):(console.error(l),alert(JSON.stringify(l)))}),xo=j("initFlow",async(e,{dispatch:t})=>{t(ye(0))}),mt=j("changeVersion",async(e,{dispatch:t,getState:n})=>{const{flows:o}=n();if(o[e])return e;t(ye(e))}),J={},ht=({src:e})=>{e=pt+e;const t=v.exports.useRef(null),n=v.exports.useRef(null),[o,s]=v.exports.useState(!1),[r,a]=v.exports.useState("00:00"),c=()=>{var d;(d=n.current)==null||d.play(),s(!0)},l=()=>{var d;(d=n.current)==null||d.pause(),s(!1)};return v.exports.useEffect(()=>(n.current=dn.create({container:t.current,barWidth:1.7,barHeight:1,barMinHeight:1,barGap:1,height:30,progressColor:"orange",waveColor:"red",responsive:!0,cursorColor:"transparent"}),n.current.load(e),console.log(n.current.getDuration()),n.current.on("finish",()=>{s(!1)}),n.current.on("audioprocess",()=>{const d=n.current.getCurrentTime();let u=new Date(d*1e3).toISOString().substr(11,8);u.startsWith("00:")&&(u=u.slice(3)),a(u)}),n.current.on("ready",()=>{console.log("WaveSurfer ready!");const d=n.current.getDuration();let u=new Date(d*1e3).toISOString().substr(11,8);u.startsWith("00:")&&(u=u.slice(3)),a(u)}),()=>{var d;return(d=n.current)==null?void 0:d.destroy()}),[e]),i.createElement("div",{className:"messageAudio"},i.createElement("div",{className:"playButtonWrapper"},o?i.createElement(no,{onClick:l,className:"pauseButton"}):i.createElement(to,{onClick:c,className:"playButton"})),i.createElement("div",{className:"wavesurfer",ref:t}),i.createElement("span",{className:"audioDuration"},r))};J[C.Audio]=ht;const ft=({src:e,file:t})=>{t===void 0&&console.error("`file` is not defined, component MessageFile");const{name:n,size:o,type:s}=t!=null?t:{};return i.createElement("div",{className:"MessageFile"},i.createElement(ao,{className:"fileButton"}),i.createElement("div",{className:"info"},i.createElement("div",null,n!=null?n:"Unknown name"),i.createElement("div",{className:"details"},i.createElement("span",null,o!=null?o:"Unknown size"),i.createElement("span",null,s!=null?s:"Unknown type"))),i.createElement("a",{href:e,download:!0},i.createElement(io,{className:"downloadButton"})))};J[C.File]=ft;const yo=({src:e})=>e?i.createElement("div",{className:"mediaPreviewContainer"},i.createElement("img",{src:e,alt:"Selected by user"})):null,bo=({src:e})=>i.createElement("img",{className:"messageImage",src:e,alt:"Message content"});J[C.Image]=bo;const Eo=({src:e})=>i.createElement("div",null,un.htmlToText(e));J[C.Text]=Eo;const So=({src:e})=>{const t=v.exports.useRef(null),n=()=>{const o=t.current;o.paused?o.play().then():o.pause()};return i.createElement("video",{onClick:n,className:"messageVideo",ref:t,src:e})};J[C.Video]=So;const Co=e=>new Promise(t=>setTimeout(t,e)),ko=e=>{const{id:t,flowNodeId:n,executed:o,running:s,delay:r}=e,{actions:a,state:{id:c}}=se(),l=ze(n);return v.exports.useEffect(()=>{if(o||s)return;a.setState({messages:{[t]:{running:!0}}}),console.log("Execute"),(async()=>{await Co(r)})().then(()=>{a.setState({id:c,messages:{[t]:{running:!1,renderable:!1,executed:!0}}}),l()})},[]),null};J[C.Delay]=ko;var gt;(function(e){e.Select="select",e.Carousel="carousel",e.List="list"})(gt||(gt={}));const _o=e=>{const{id:t,flowNodeId:n}=e,{actions:o,flow:s}=se(),r={dots:!0,adaptiveHeight:!0,className:"myslider",arrows:!1},a=s.getNode(n).out1,c=l=>{l.id!==void 0&&o.appendMessageNode(k(y({},Oe()),{flowNodeId:l.id}))};return i.createElement(pn,y({},r),a.map((l,d)=>i.createElement("button",{key:d,onClick:()=>c(l)},l.nodeState.data.node_object_lists.props.text)))};J[C.Switch]=_o;const Io=e=>{const{id:t,flowNodeId:n,executed:o,running:s,duration:r}=e,{actions:a}=se(),c=ze(n);return v.exports.useEffect(()=>{o||s||a.setState({messages:{[t]:{running:!0}}})},[a,o,n,c,t,s]),i.createElement(mn.exports.CountdownCircleTimer,{isPlaying:!0,duration:r,colors:[["#004777",.33],["#F7B801",.33],["#A30000",.33]],onComplete:()=>{a.setState({messages:{[t]:{running:!1,executed:!0}}}),c()}},({remainingTime:l})=>l)};J[C.Countdown]=Io;const No=e=>null;J[C.Empty]=No;const wt=e=>{var u,p;const{flowNodeId:t,executed:n}=e,{flow:o,actions:s,state:{id:r}}=se();let{type:a}=e,c={};if(t!==void 0){const m=(p=(u=o.state.drawflow[t])==null?void 0:u.data.node_object_lists)!=null?p:{type:C.Empty,renderable:!1};if(!Object.values(C).includes(m.type))throw console.log(m,t),new Error("Invalid type of node");a=m.type,c=m}const l=ze(t);v.exports.useEffect(()=>{!n&&Jn.includes(a)&&(s.setState({messages:{[e.id]:{executed:!0}}}),l()),c&&(["executed","running","as","flowNodeId"].forEach(m=>{if(m in c)throw new Error(`Key ${m} is used internally and not allowed in node parameters`)}),s.setState({messages:{[e.id]:c}}))},[]);const d=J[a];return i.createElement(d,y({},y(y({},e),c)))},ze=e=>{const{actions:t,flow:n}=se();return v.exports.useCallback(()=>{var r;const s=(r=n.getNode(e).out1[0])==null?void 0:r.id;!s||t.appendMessageNode(k(y({},Oe()),{flowNodeId:s}))},[t,n,e])},Do=({messages:e})=>{const t=[];return Object.entries(e).forEach(([n,o])=>{if(!o.renderable||o.type===C.Empty){t.push(i.createElement(wt,k(y({},o),{key:n,as:Be})));return}const s=i.createElement("span",{className:"messageSide"},i.createElement("span",{className:"sentTime"},"10:42 PM"),i.createElement("span",{className:"marks"},i.createElement("span",null,"\u2713"),i.createElement("span",null,"\u2713")));t.push(i.createElement(Be,{className:o.type+"_message",model:{direction:o.direction},key:n},i.createElement(Be.CustomContent,null,i.createElement(wt,y({},o)),s)))}),i.createElement(et,{typingIndicator:i.createElement(hn,{content:"Zoe is typing"})},t.map(n=>n))},Mo=e=>{const t=e.target;t.paused?t.play().then():t.pause()},Po=({src:e,stream:t})=>{const n=v.exports.useRef(null);return v.exports.useEffect(()=>{const{current:o}=n;!o||(t?(o.srcObject=t,o.muted=!0,console.log("srcObject set")):e&&(o.srcObject=null,o.src=e,o.muted=!1,o.play().then()))},[e,t]),i.createElement("div",{className:"mediaPreviewContainer"},i.createElement("video",{autoPlay:!0,className:"videoPreview",ref:n,onClick:Mo}))},Bo=w.div`
  background: 0;
  display: grid;
  place-items: center;
  height: 2em;
  margin-right: 0.5em;

  svg {
    height: 90%;
    cursor: pointer;
  }
`,Ao=e=>i.createElement(Bo,null,i.createElement(co,y({},e)));var We;(function(e){e.BARS="bars",e.BARS_BLOCKS="bars blocks",e.BIG_BARS="big bars",e.CUBES="cubes",e.DUAL_BARS="dualbars",e.DUAL_BARS_BLOCKS="dualbars blocks",e.FIREWOKS="fireworks",e.FLOWER="flower",e.FLOWER_BLOCKS="flower blocks",e.ORBS="orbs",e.RING="ring",e.RINGS="rings",e.ROUND_WAVE="round wave",e.SHOCKWAVE="shockwave",e.SHINE="shine",e.SHINE_RINGS="shine rings",e.STAR="star",e.STATIC="static",e.STITCHES="stitches",e.WAVE="wave",e.WEB="web"})(We||(We={}));var N=We;class Lo extends Error{constructor(t){const n=Object.keys(N).map(s=>`- "${N[s]}"`).join(`
`),o=`The required generator "${t}" does not exist, please use one of the following:

${n}`;super(o);this.name="InvalidGeneratorError"}}const vt=(e,t)=>{const n=`${t}.${e}`;return be(window,n,{}),fn(window,n)},be=(e,t,n)=>{gn(e,t)||wn(e,t,n)},$e=e=>{(Array.isArray(e)?e:[e]).forEach(t=>{if(!Object.keys(N).map(n=>N[n]).includes(t))throw new Lo(t)})},qe=e=>{e&&e.getContext("2d").clearRect(0,0,e.width,e.height)};var Oo=e=>{const{data:t,options:n,ctx:o,h:s,w:r}=e,a=64,c=s/255,l=r/64,d=Math.floor(a/n.colors.length);for(let u=1;u<=a;u++){const p=t[u]*c,m=l*u;o.moveTo(m,s),o.lineTo(m,s-p),u%d==0&&(o.strokeStyle=n.colors[u/d-1],o.stroke(),o.beginPath())}},To=e=>{const{data:t,options:n,ctx:o,h:s,w:r}=e,a=s/255,c=r/64;for(let l=0;l<64;l++){let d=t[l];d*=a;const u=c*l;o.rect(u,s,c,-d)}o.fillStyle=n.colors[1]||n.colors[0],o.stroke(),o.fill()};const xt=e=>e*Math.PI/180,z=([e,t],[n,o],s)=>{const r=xt(s),a=Math.cos(r)*(e-n)-Math.sin(r)*(t-o)+n,c=Math.sin(r)*(e-n)+Math.cos(r)*(t-o)+o;return[a,c]},yt=(e,t,n,o,s,r)=>{const a=Math.sqrt((n-e)**2+(o-t)**2),c=r?s/a:(a-s)/a;return[e+c*(n-e),t+c*(o-t)]},Vo=(e,t)=>{const n=e.length,o=new Array(n);for(let s=0;s<n;s++){let r=s-1,a=s+1;r<0&&(r=n-1),a==n&&(a=0);const c=e[r],l=e[s],d=e[a],u=yt(c[0],c[1],l[0],l[1],t,!1),p=yt(l[0],l[1],d[0],d[1],t,!0);o[s]=[u[0],u[1],l[0],l[1],p[0],p[1]]}return o};class q{constructor(t){this.ctx=null,this.ctx=t}mutateData(t,n,o=null){if(n==="mirror"){let s=[];for(let r=0;r<t.length;r+=2)s.push(t[r]);return s=[...s,...s.reverse()],s}if(n==="shrink"){o<1&&(o=t.length*o);const s=[],r=Math.floor(t.length/o);for(let a=1;a<=o;a++){const c=t.slice(a*r,a*r+r),l=c[Math.floor(c.length/2)];s.push(l)}return s}if(n==="split"){const s=Math.floor(t.length/o),r=[];let a=[],c=0;for(let l=0;l<=s*o;l++)c===s&&(r.push(a),a=[],c=0),a.push(t[l]),c++;return r}if(n==="scale"){let s=o/255;return o<=3&&o>=0&&(s=o),t.map(r=>r*s)}if(n==="organize")return{base:t.slice(60,120),vocals:t.slice(120,255),mids:t.slice(255,2e3)};if(n==="reverb"){const s=[];return t.forEach((r,a)=>{s.push(r-(t[a+1]||0))}),s}if(n==="amp"){const s=[];return t.forEach(r=>{s.push(r*(o+1))}),s}if(n==="min"){const s=[];return t.forEach(r=>{r<o&&(r=o),s.push(r)}),s}}getPoints(t,n,[o,s],r,a,c){const{offset:l,rotate:d,customOrigin:u}=y({offset:0,rotate:0,customOrigin:[]},c),p={start:[],end:[]};if(t==="circle"){const m=360/r,f=xt(m),g=n/2;for(let h=1;h<=r;h++){const x=f*h,b=a[h-1],E=a[h-1]*(l/100);let _=o+(g-E)*Math.cos(x),I=s+(g-E)*Math.sin(x);const P=z([_,I],[o,s],d);p.start.push(P),_=o+(g-E+b)*Math.cos(x),I=s+(g-E+b)*Math.sin(x);const O=z([_,I],[o,s],d);p.end.push(O)}return p}if(t==="line"){const m=n/r;o=u[0]||o,s=u[1]||s;for(let f=0;f<=r;f++){const g=d,h=a[f]*(l/100),x=z([o+f*m,s-h],[o,s],g);p.start.push(x);const b=z([o+f*m,s+a[f]-h],[o,s],g);p.end.push(b)}return p}}drawCircle([t,n],o,s){const{color:r,lineColor:a}=y({lineColor:this.ctx.strokeStyle},s);this.ctx.beginPath(),this.ctx.arc(t,n,o/2,0,2*Math.PI),this.ctx.strokeStyle=a,this.ctx.stroke(),this.ctx.fillStyle=r,r&&this.ctx.fill()}drawSquare([t,n],o,s){this.drawRectangle([t,n],o,o,s)}drawRectangle([t,n],o,s,r){const{color:a,lineColor:c,radius:l,rotate:d}=y({lineColor:this.ctx.strokeStyle,radius:0,rotate:0},r);this.ctx.beginPath(),this.ctx.moveTo(t+l,n);const u=z([t+s,n],[t,n],d),p=z([t+s,n+o],[t,n],d);this.ctx.arcTo(u[0],u[1],p[0],p[1],l);const m=z([t+s,n+o],[t,n],d),f=z([t,n+o],[t,n],d);this.ctx.arcTo(m[0],m[1],f[0],f[1],l);const g=z([t,n+o],[t,n],d),h=z([t,n],[t,n],d);this.ctx.arcTo(g[0],g[1],h[0],h[1],l);const x=z([t,n],[t,n],d),b=z([t+s,n],[t,n],d);this.ctx.arcTo(x[0],x[1],b[0],b[1],l),this.ctx.closePath(),this.ctx.strokeStyle=c,this.ctx.stroke(),this.ctx.fillStyle=a,a&&this.ctx.fill()}drawLine([t,n],[o,s],r){const{lineColor:a}=y({lineColor:this.ctx.strokeStyle},r);this.ctx.beginPath(),this.ctx.moveTo(t,n),this.ctx.lineTo(o,s),this.ctx.strokeStyle=a,this.ctx.stroke()}drawPolygon(t,n){const{color:o,lineColor:s,radius:r,close:a}=y({lineColor:this.ctx.strokeStyle,radius:0,close:!1},n);r>0&&(t=Vo(t,r));let c,l;const d=t.length;for(c=0;c<d;c++)l=t[c],c==0?(this.ctx.beginPath(),this.ctx.moveTo(l[0],l[1])):this.ctx.lineTo(l[0],l[1]),r>0&&this.ctx.quadraticCurveTo(l[2],l[3],l[4],l[5]);a&&this.ctx.closePath(),this.ctx.strokeStyle=s,this.ctx.stroke(),this.ctx.fillStyle=o,o&&this.ctx.fill()}}var Fo=e=>{const{options:t,ctx:n,h:o,w:s}=e;let{data:r}=e;const{colors:a}=t,c=new q(n);r=c.mutateData(r,"organize").vocals,r=c.mutateData(r,"shrink",10),r=c.mutateData(r,"scale",o),r=c.mutateData(r,"amp",1);const l=c.getPoints("line",s,[0,o/2],r.length,r,{offset:50});let d=0;const u=Math.ceil(r.length/a.length);l.start.forEach((p,m)=>{(m+1)%u==0&&d++,c.drawRectangle(p,r[m],s/r.length,{color:a[d]})})},Ro=e=>{const{options:t,ctx:n,h:o,w:s}=e;let{data:r}=e;const{colors:a}=t,c=new q(n);r=c.mutateData(r,"organize").base,r=c.mutateData(r,"shrink",20).slice(0,19),r=c.mutateData(r,"scale",o);const l=c.getPoints("line",s,[0,o],r.length,r),d=5,u=s/20-d;let p=0;l.start.forEach((m,f)=>{const g=Math.ceil(r[f]/u),h=(o-d*(o/u))/u,x=Math.ceil(h/a.length);for(let b=1;b<=g;b++){const E=[m[0],m[1]-u*b-d*b];c.drawSquare(E,u,{color:a[p],lineColor:"black"}),b%x==0&&(p++,p>=a.length&&(p=a.length-1))}p=0})},jo=e=>{const{data:t,options:n,ctx:o,h:s,w:r}=e,a=s/255,c=r/128,l=128,d=5,u=Math.floor(l/n.colors.length);for(let p=1;p<=l;p++){let m=t[p];m+=d,m*=a;const f=c*p,g=s/2+m/2;if(o.moveTo(f,g),o.lineTo(f,g-m),p%u==0){const h=p/u-1;o.strokeStyle=n.colors[h],o.stroke(),o.beginPath()}}},zo=e=>{const{data:t,options:n,ctx:o,h:s,w:r}=e,a=s/255,c=r/50;for(let l=0;l<=50;l++){let d=t[l];d*=a;const u=c*l;o.rect(u,s/2+d/2,c,-d)}n.colors[1]&&(o.fillStyle=n.colors[1],o.fill()),o.stroke()},Wo=e=>{const{options:t,ctx:n,h:o,w:s}=e;let{data:r}=e;const{colors:a}=t,c=new q(n),l=o<s?o:s;r=c.mutateData(r,"organize"),r.vocals=c.mutateData(r.vocals,"scale",l/2/2),r.base=c.mutateData(r.base,"scale",l/2/2);const d=c.getPoints("circle",l/2,[s/2,o/2],r.vocals.length,r.vocals),u=c.getPoints("circle",l/2,[s/2,o/2],r.vocals.length,r.vocals,{offset:100}),p=c.getPoints("circle",l/2,[s/2,o/2],r.base.length,r.base,{offset:100});d.start.forEach((m,f)=>{c.drawLine(m,d.end[f],{lineColor:a[0]})}),c.drawPolygon(u.start,{close:!0,lineColor:a[1],color:a[3],radius:5}),c.drawPolygon(p.start,{close:!0,lineColor:a[2],color:a[4],radius:5})},$o=e=>{const{options:t,ctx:n,h:o,w:s}=e,{colors:r}=t,a=new q(n);let{data:c}=e;c=a.mutateData(c,"shrink",200).slice(0,120),c=a.mutateData(c,"mirror"),c=a.mutateData(c,"scale",o/4+o/4*.35);const l=a.getPoints("circle",o/2,[s/2,o/2],c.length,c,{offset:35,rotate:270});l.start.forEach((d,u)=>{a.drawLine(d,l.end[u])}),a.drawPolygon(l.start,{close:!0}),l.end.forEach(d=>{a.drawCircle(d,o*.01,{color:r[0]})})},qo=e=>{const{data:t,options:n,ctx:o,h:s,w:r}=e,a=5,c=s/4,l=c/2,d=r/2,u=s/2,p=128,m=(c-l)/255,f=360/p*Math.PI/180,g=Math.floor(p/n.colors.length);for(let h=1;h<=p;h++){const x=(t[h]+a)*m,b=h*f,E=d+(c-(x-l))*Math.cos(b),_=u+(c-(x-l))*Math.sin(b);o.moveTo(E,_);const I=d+(c+x)*Math.cos(b),P=u+(c+x)*Math.sin(b);if(o.lineTo(I,P),h%g==0){const O=h/g-1;o.strokeStyle=n.colors[O],o.stroke(),o.beginPath()}}o.stroke()},Jo=e=>{const{data:t,options:n,ctx:o,h:s,w:r}=e,a=s/4,c=r/2,l=s/2,d=56,u=a/255,p=360/d*Math.PI/180;for(let m=1;m<=d;m++){const f=t[m]*u,g=m*p,h=c+(a-f/2)*Math.cos(g),x=l+(a-f/2)*Math.sin(g);o.moveTo(h,x);const b=c+(a+f)*Math.cos(g),E=l+(a+f)*Math.sin(g);o.lineTo(b,E);const _=c+(a+f)*Math.cos(g+p),I=l+(a+f)*Math.sin(g+p);o.lineTo(_,I);const P=c+(a-f/2)*Math.cos(g+p),O=l+(a-f/2)*Math.sin(g+p);o.lineTo(P,O),o.lineTo(h,x)}n.colors[1]&&(o.fillStyle=n.colors[1],o.fill()),o.stroke()},Go=e=>{const{options:t,ctx:n,h:o,w:s}=e;let{data:r}=e;const{colors:a}=t,c=new q(n);r=c.mutateData(r,"organize").mids,r=c.mutateData(r,"split",2)[0],r=c.mutateData(r,"shrink",100),r=c.mutateData(r,"mirror"),r=c.mutateData(r,"scale",o),r=c.mutateData(r,"amp",.75);const l=c.getPoints("line",s,[0,o/2],r.length,r,{offset:50});l.start.forEach((d,u)=>{c.drawLine(d,l.end[u],{lineColor:a[0]}),c.drawCircle(d,o*.01,{color:a[1]||a[0]}),c.drawCircle(l.end[u],o*.01,{color:a[1]||a[0]})})},Ho=e=>{const{data:t,options:n,ctx:o,h:s,w:r}=e,a=r/2,c=s/2,l=(s-10)/2,d=l/5,u=(l-d)/255,p=150,m=360/p*Math.PI/180;o.arc(a,c,l,0,2*Math.PI,!0);const f=0,g=a+(l-t[0]*u)*Math.cos(f),h=c+(l-t[0]*u)*Math.sin(f);o.moveTo(g,h);let x=0;for(let b=0;b<p;b++){x+=1,b>=p/2&&(x-=2);let E=t[x];E*=u;const _=b*m,I=a+(l-E)*Math.cos(_),P=c+(l-E)*Math.sin(_);o.lineTo(I,P),o.arc(I,P,2,0,2*Math.PI)}o.lineTo(g,h),o.stroke(),o.fillStyle=n.colors[1]||"#fff000",o.fill()},Uo=e=>{const{options:t,ctx:n,h:o,w:s}=e;let{data:r}=e;const a=o<s?o:s,c=new q(n),{colors:l}=t;r=c.mutateData(r,"organize"),r=[r.mids,r.vocals],r[0]=c.mutateData(r[0],"scale",a/4),r[1]=c.mutateData(r[1],"scale",a/8),r[0]=c.mutateData(r[0],"shrink",1/5),r[0]=c.mutateData(r[0],"split",2)[0],r[0]=c.mutateData(r[0],"reverb"),r[1]=c.mutateData(r[1],"reverb");const d=c.getPoints("circle",a/2,[s/2,o/2],r[0].length,r[0]),u=c.getPoints("circle",a/4,[s/2,o/2],r[1].length,r[1]);c.drawPolygon(d.end,{close:!0,radius:4,lineColor:l[0],color:l[1]}),c.drawPolygon(u.end,{close:!0,radius:4,lineColor:l[2],color:l[3]});const p=(a/4+a/2)/2,m=r[1]=c.mutateData(r[1],"scale",a/4-a/2),f=c.getPoints("circle",p,[s/2,o/2],r[1].length,m);f.start.forEach((g,h)=>{c.drawLine(g,f.end[h],{lineColor:l[4]||l[2]})})},Ko=e=>{const{data:t,options:n,ctx:o,h:s,w:r}=e,a=s/4,c=r/2,l=s/2,d=100,u=a/255,p=360/d*Math.PI/180,m=0,f=c+(a+m)*Math.cos(0),g=l+(a+m)*Math.sin(0);o.moveTo(f,g);for(let h=1;h<=d;h++){const x=t[350%h]*u,b=h*p,E=c+(a+x)*Math.cos(b),_=l+(a+x)*Math.sin(b);o.lineTo(E,_)}o.closePath(),o.stroke(),n.colors[1]&&(o.fillStyle=n.colors[1],o.fill())},Zo=e=>{const{data:t,options:n,ctx:o,h:s,w:r}=e,a=s/4,c=r/2,l=s/2,d=56,u=a/255,p=360/d*Math.PI/180;for(let m=1;m<=d;m++){const f=t[m]*u,g=m*p,h=c+(a-f/2)*Math.cos(g),x=l+(a-f/2)*Math.sin(g);o.moveTo(h,x);const b=c+(a+f)*Math.cos(g),E=l+(a+f)*Math.sin(g);o.lineTo(b,E);const _=c+(a+f)*Math.cos(g+p),I=l+(a+f)*Math.sin(g+p);o.lineTo(_,I);const P=c+(a-f/2)*Math.cos(g+p),O=l+(a-f/2)*Math.sin(g+p);o.lineTo(P,O),o.lineTo(h,x)}n.colors[1]&&(o.fillStyle=n.colors[1],o.fill()),o.stroke()},Xo=e=>{const{options:t,ctx:n,h:o,w:s}=e;let{data:r}=e;const{colors:a}=t,c=new q(n);r=c.mutateData(r,"shrink",300),r=c.mutateData(r,"scale",o/2),r=c.mutateData(r,"split",4).slice(0,3);let l=0;r.forEach(d=>{const u=c.getPoints("line",s,[0,o/2],d.length,d);c.drawPolygon(u.end,{lineColor:a[l],radius:o*.015});const p=c.getPoints("line",s,[0,o/2],d.length,d,{offset:100});c.drawPolygon(p.start,{lineColor:a[l],radius:o*.015}),l++})},Qo=e=>{const{data:t,options:{colors:n},ctx:o,h:s,w:r}=e,a=s/4,c=a/4,l=r/2,d=s/2,u=120,p=(a-c-35)/255,m=360/u*Math.PI/180,f=[],g=[];for(let h=1;h<=u;h++){const x=t[200%h]*p,b=h*m,E=l+(a-x+c)*Math.cos(b),_=d+(a-x+c)*Math.sin(b);o.moveTo(E,_),g.push({x:E,y:_});const I=l+(a+x+c)*Math.cos(b),P=d+(a+x+c)*Math.sin(b);o.lineTo(I,P),f.push({x:I,y:P})}o.moveTo(f[0].x,f[0].y);for(let h in f)h=f[h],o.lineTo(h.x,h.y);o.closePath(),o.moveTo(g[0].x,g[0].y);for(let h=g.length-1;h>=0;h--)h=g[h],o.lineTo(h.x,h.y);o.closePath(),n[1]&&(o.fillStyle=n[1],o.fill()),o.stroke(),o.beginPath(),o.moveTo(g[0].x,g[0].y);for(let h in g)h=g[h],o.lineTo(h.x,h.y);o.closePath(),n[2]&&(o.fillStyle=n[2],o.fill()),o.stroke()},Yo=e=>{const{ctx:t,h:n,w:o}=e;let{data:s}=e;const r=new q(t);s=r.mutateData(s,"shrink",1/8),s=r.mutateData(s,"split",2)[0],s=r.mutateData(s,"scale",n);const a=r.getPoints("line",o,[0,n/2],s.length,s,{offset:50});let c=null;a.start.forEach((l,d)=>{c&&r.drawLine(c,l),r.drawLine(l,a.end[d]),c=a.end[d]})},es=e=>{const{ctx:t,h:n,w:o}=e;let{data:s}=e;const r=new q(t),a=n<o?n:o;s=r.mutateData(s,"shrink",200),s=r.mutateData(s,"split",2)[0],s=r.mutateData(s,"scale",n/2);const c=r.getPoints("circle",a/2,[o/2,n/2],s.length,s,{offset:50});r.drawPolygon(c.end,{close:!0}),r.drawPolygon(c.start,{close:!0});for(let l=0;l<c.start.length;l+=1){const d=c.start[l];l++;const u=c.end[l]||c.end[0];r.drawLine(d,u),r.drawLine(u,c.start[l+1]||c.start[0])}},ts=e=>{const{ctx:t,h:n,w:o,options:s}=e;let{data:r}=e;const a=new q(t);r=a.mutateData(r,"split",4)[0],r=a.mutateData(r,"scale",n);const c=a.getPoints("line",o,[0,n],r.length,r,{offset:100});c.start=c.start.slice(0,c.end.length-1),c.start.push([o,n]),c.start.push([0,n]),a.drawPolygon(c.start,{lineColor:s[0],color:s[1],radius:n*.008})},ns=e=>{const{ctx:t,h:n,w:o,options:s}=e;let{data:r}=e;const a=new q(t),c=n<o?n:o;r=a.mutateData(r,"shrink",100),r=a.mutateData(r,"split",2)[0],r=a.mutateData(r,"scale",n/4);let l=r,d=a.getPoints("circle",c/2,[o/2,n/2],r.length,r);a.drawPolygon(d.end,{close:!0}),d.start.forEach((u,p)=>{a.drawLine(u,d.end[p])}),r=a.mutateData(r,"scale",.7),d=a.getPoints("circle",c/2,[o/2,n/2],r.length,r),a.drawPolygon(d.end,{close:!0}),r=a.mutateData(r,"scale",.3),d=a.getPoints("circle",c/2,[o/2,n/2],r.length,r),a.drawPolygon(d.end,{close:!0}),a.drawCircle([o/2,n/2],c/2,{color:s[2]}),l=a.mutateData(l,"scale",1.4),d=a.getPoints("circle",c/2,[o/2,n/2],l.length,l),d.end.forEach(u=>{a.drawCircle(u,c*.01,{color:s[1],lineColor:s[1]||s[0]})})};const Y={stroke:1,colors:["#d92027","#ff9234","#ffcd3c","#35d0ba"],type:N.BARS,globalAccessKey:"$wave",getGlobal:(e,t)=>{const{globalAccessKey:n}=Y;return vt(e,n),window[n][e][t]},setGlobal:(e,t,n)=>{const o=Y.globalAccessKey;let s=Y.getGlobal(e,t);return s||(be(window[o][e],t,n),s=window[o][e][t]),s}};class Je extends Error{constructor(t){const n=` Could not find the canvas with id "${t}"`;super(n);this.name="CanvasNotFoundError"}}const os={[N.BARS]:Oo,[N.BARS_BLOCKS]:To,[N.BIG_BARS]:Fo,[N.CUBES]:Ro,[N.DUAL_BARS]:jo,[N.DUAL_BARS_BLOCKS]:zo,[N.FIREWOKS]:$o,[N.FLOWER]:qo,[N.FLOWER_BLOCKS]:Jo,[N.ORBS]:Go,[N.RING]:Ho,[N.RINGS]:Uo,[N.ROUND_WAVE]:Ko,[N.SHOCKWAVE]:Xo,[N.SHINE]:Zo,[N.SHINE_RINGS]:Wo,[N.STAR]:Qo,[N.STATIC]:Yo,[N.STITCHES]:es,[N.WAVE]:ts,[N.WEB]:ns},bt={};function Ge(e,t,n,o){const s=y(y({},Y),n||{}),r=typeof t=="string"?document.getElementById(t.toString()):t;if(!r)throw new Je(t.toString());const a=r.id,c=r.getContext("2d"),l=r.height,d=r.width;c.strokeStyle=s.colors[0],c.lineWidth=Number(s.stroke.toString());const u={data:e,options:s,ctx:c,h:l,w:d,canvasId:a},p=Array.isArray(s.type)?s.type:[s.type];be(bt,p[0].toString(),1),o%bt[p[0].toString()]==0&&(c.clearRect(0,0,d,l),c.beginPath(),p.forEach(m=>{os[m.toString()](u)}))}class Et extends Error{constructor(t){const n=` Could not find the element with id "${t}"`;super(n);this.name="ElementNotFoundError"}}class ss{constructor(t,n,o,s){this.element=t,this.canvasId=n,this.options=o,this.fromElementOptions=s,this.activated=!1,this.analyser=null,this.activeCanvas={},this.activeElements={},this.frameCount=1,this.currentCount=0,this.data=null,this.bufferLength=null,this.audioCtx=null,["touchstart","touchmove","touchend","mouseup","click"].forEach(r=>{document.body.removeEventListener(r,this.initialize)}),this.element.removeEventListener("play",this.initialize)}isActivated(){return this.activated}activate(){this.activated=!0}deactivate(){this.activated=!1,qe(document.getElementById(this.canvasId)),!this.fromElementOptions.existingMediaStreamSource&&this.audioCtx&&this.audioCtx.close().then()}initializeAfterUserGesture(){["touchstart","touchmove","touchend","mouseup","click"].forEach(t=>{document.body.addEventListener(t,this.initialize.bind(this),{once:!0})}),this.element.addEventListener("play",this.initialize.bind(this),{once:!0})}initialize(){this.activate(),this.activeCanvas[this.canvasId]=JSON.stringify(this.options);const t=this.element.id;be(this.activeElements,t,{}),this.activeElements[t]=this.activeElements[t]||{},this.activeElements[t].count?this.activeElements[t].count+=1:this.activeElements[t].count=1;const{setGlobal:n,getGlobal:o}=this.options;this.currentCount=this.activeElements[t].count;let s=o(t,"source");if(!s||s.mediaElement!==this.element){const a=n(t,"audioCtx",new Ae);this.audioCtx=a,s=this.fromElementOptions.existingMediaStreamSource||a.createMediaElementSource(this.element)}this.analyser=n(t,"analyser",s.context.createAnalyser()),n(t,"source",s);const r=s.context.createOscillator();r.frequency.value=1,r.connect(s.context.destination),r.start(0),r.stop(0),this.fromElementOptions.connectDestination&&this.connectSource(s,s.context.destination),this.connectSource(s,this.analyser),this.analyser.fftsize=32768,this.bufferLength=this.analyser.frequencyBinCount,this.data=new Uint8Array(this.bufferLength),this.renderFrame()}renderFrame(){if(!this.isActivated())return;const t=this.element.id;if(JSON.stringify(this.options)===this.activeCanvas[this.canvasId]){if(!document.getElementById(t))throw new Et(t);if(!document.getElementById(this.canvasId))throw new Je(this.canvasId);requestAnimationFrame(this.renderFrame.bind(this)),this.frameCount++,this.currentCount<this.activeElements[t].count||(this.analyser.getByteFrequencyData(this.data),this.activeElements[t].data=this.data),Ge(this.activeElements[t].data,this.canvasId,this.options,this.frameCount)}}connectSource(t,n){t.connect(n)}}function rs(e,t,n,o){const s=typeof e=="string"?document.getElementById(e):e;if(!s)throw new Et(typeof e=="string"?e:"");const r=typeof t=="string"?document.getElementById(t):t;if(!s)throw new Je(typeof t=="string"?t:"");s.crossOrigin="anonymous";const a=y(y({},Y),n||{});$e(a.type);const c=y({connectDestination:!0,skipUserEventsWatcher:!1,existingMediaStreamSource:null},o||{}),l=new ss(s,r.id,a,c);return l.isActivated()||c.skipUserEventsWatcher?l.initialize():l.initializeAfterUserGesture(),{deactivate:()=>{l.deactivate()}}}const as=(e,t)=>{const n=document.createElement("canvas");return n.height=t,n.width=e,n};function is(e,t,n){const o=y(y({},Y),t||{}),{callback:s,width:r,height:a,format:c,drawRate:l}=y({width:window.innerWidth,height:window.innerHeight,format:"png",drawRate:20,callback:()=>null},n);$e(o.type);const d=`image/${c}`,u=as(r,a),p=new Audio(e),m=new Ae,f=m.createAnalyser(),g=m.createMediaElementSource(p);f.fftSize=2**10;const h=f.frequencyBinCount,x=new Uint8Array(h);let b=null;g.connect(f),p.addEventListener("loadedmetadata",()=>p.play().then());const E=()=>{let I=1;b=setInterval(()=>{f.getByteFrequencyData(x),Ge(x,u,o,I++),s(u.toDataURL(d))},l)},_=()=>{p.currentTime===p.duration&&x!==void 0&&clearInterval(b)};return p.addEventListener("play",E),p.addEventListener("ended",_),{deactivate:()=>{p.removeEventListener("play",E),p.removeEventListener("ended",_),clearInterval(b),m.close().then(),qe(u),s(u.toDataURL(d))}}}const St=(e,t,n,o,s)=>{e.activated&&(t.getByteFrequencyData(e.data),Ge(e.data,e.canvasId,e.options,s),n[o.id].animation=requestAnimationFrame(e.loop))};function cs(e,t,n,o){const s=y(y({},Y),n||{}),r=y({connectDestination:!0},o||{});$e(s.type);const{connectDestination:a}=r,c={canvasId:t,options:s,data:null,loop:null,animation:null,activated:!0},l=vt("stream-sources",s.globalAccessKey);l[e.id]&&cancelAnimationFrame(l[e.id].animation);const d=new Ae,u=d.createAnalyser(),p=d.createMediaStreamSource(e);p.connect(u),a&&p.connect(d.destination),l[e.id]={audioCtx:d,analyser:u,source:p},u.fftSize=32768;const m=u.frequencyBinCount;return c.data=new Uint8Array(m),this.frameCount=1,c.loop=()=>St(c,u,l,e,++this.frameCount),St(c,u,l,e,1),{deactivate:()=>{qe(document.getElementById(c.canvasId)),d.close().then(),c.activated=!1}}}var ls={fromElement:rs,fromFile:is,fromStream:cs};const ds=({audioStream:e})=>{const t=v.exports.useRef(null);return v.exports.useEffect(()=>{if(!t.current)return;const o=function(){return"_"+Math.random().toString(36).substr(2,9)}();t.current.id=`audioCanvas${o}`;const{deactivate:s}=ls.fromStream(e,t.current.id,{type:"dualbars blocks",colors:["green","lightgreen"],stroke:3},{connectDestination:!1});return()=>{s()}},[e]),i.createElement("div",{className:"audio"},i.createElement("canvas",{className:"audioCanvas",ref:t}))},us=()=>{const{state:e,actions:t}=se(),{messages:n,currentMessageValue:o,recordButtonIsAudio:s,recording:r,showEmojiPicker:a}=e,c=v.exports.useRef(),l=v.exports.useRef(null),d=v.exports.useRef(null),u=async H=>{if(r)return;const Qe=await Kn(he=>{t.setState({currentMessageValue:{src:he}}),console.log({url:he})},he=>l.current=he,H);Qe&&(t.recordingStarted(H),d.current=Qe)},p=()=>{var H;l.current=null,(H=d.current)==null||H.call(d),t.recordingEnded(),console.log(e)},m=()=>!r&&t.setState({recordButtonIsAudio:!s}),f=rt(()=>u({audio:!0}),void 0,m),g=rt(()=>u({audio:!0,video:!0}),void 0,m),h=o.type===C.Text,x=h&&i.createElement(eo,{className:"smile",onClick:()=>t.toggleEmojiPicker()}),b=(o==null?void 0:o.type)===C.Text&&i.createElement(tt,{ref:c,onChange:H=>t.setState({currentMessageValue:{src:H}}),value:o.src,sendButton:!1,attachButton:!1,onSend:t.sendMessage,placeholder:"Type message here..."}),E=i.createElement("button",k(y({},f),{className:"recordMicrophone"+((r==null?void 0:r.audio)?" active":"")}),i.createElement(Yn,null)),_=i.createElement("button",k(y({},g),{className:"recordMicrophone"}),i.createElement(so,null)),I=o.type!==C.Text&&o.src&&i.createElement(oo,{onClick:t.cleanCurrentMessage,className:"trashButton"}),P=o.src!==""&&i.createElement(vn,{className:"sendButton",onClick:t.sendMessage}),O=o.src===""&&!r&&i.createElement(uo,{setFile:t.fileChosen}),D=(o.src===""||r)&&(s?E:_),G=r&&i.createElement(Ao,{onClick:p}),De=i.createElement("div",{as:xn},o.type===C.Video&&i.createElement(Po,{stream:l.current,src:o.src}),o.type===C.Image&&i.createElement(yo,{src:o.src}),a&&i.createElement(Qn,{onValue:H=>h&&t.setState({currentMessageValue:{src:o.src+H}})}));return i.createElement("div",{className:"mainChatContainer"},i.createElement(yn,{responsive:!0},i.createElement(bn,null,i.createElement(Xn,{as:Pe}),i.createElement(Do,{as:et,messages:n}),i.createElement("div",{className:"MessageInput",as:tt},I,x,l.current&&i.createElement(ds,{audioStream:l.current}),o.type===C.Audio&&o.src&&i.createElement(ht,{src:o.src}),o.type===C.File&&i.createElement(ft,y({},k(y({},o),{file:o.file,type:void 0}))),b,P,O,G,D),De)))},ps=()=>({id:0,recording:null,messages:{},recordButtonIsAudio:!0,showEmojiPicker:!1,currentMessageValue:Le()}),Ct=ps(),kt={clearChat:e=>{e.messages={}},toggleEmojiPicker:e=>{e.showEmojiPicker=!e.showEmojiPicker},recordingEnded:e=>{e.recording=null},setState:(e,t)=>{if(typeof t=="function")return t(e);if(!(t.id!==void 0&&t.id!==e.id))return X.merge(e,t)},recordingStarted:(e,t)=>{e.recording=t;const n=t.video?C.Video:C.Audio;e.currentMessageValue=k(y({},e.currentMessageValue),{type:n,src:"",direction:oe.Out})},cleanCurrentMessage:e=>{e.recording=null,e.currentMessageValue=Le()},fileChosen:(e,t)=>{const n=URL.createObjectURL(t);e.currentMessageValue={renderable:!0,src:n,type:C.File,direction:oe.Out},e.currentMessageValue.file=t;const{type:o}=t;o.includes("image")&&(e.currentMessageValue.type=C.Image),o.includes("video")&&(e.currentMessageValue.type=C.Video),console.log("File chosen:",t)},sendMessage:e=>{const t=Object.keys(e.messages).length+1;e.messages[t]=k(y({},e.currentMessageValue),{id:t,executed:!0}),e.currentMessageValue=Le()},appendMessageNode:(e,t)=>{const n=Object.keys(e.messages).length+1;e.messages[n]=k(y({},t),{id:n,executed:!1})}},ms=(e,t)=>En(e,n=>kt[t.type](n,t.payload)),_t=v.exports.createContext({state:Ct,actions:{},flow:null}),se=()=>v.exports.useContext(_t),hs=()=>{console.log("Render Chat");const[e,t]=v.exports.useReducer(ms,Ct),n=v.exports.useMemo(()=>Q(kt).reduce((u,p)=>(u[p]=m=>{t({type:p,payload:m})},u),{}),[]),o=S(u=>u.version);console.log(o),v.exports.useEffect(()=>{console.log("Clear chat"),n.clearChat()},[o,n]);const s=S(u=>{const{drawflow:p,connections:m,ports:f}=B(u),g=Q(f).reduce((x,b)=>(x[b]=y({},f[b]),delete x[b].pos,x),{});return{drawflow:Q(p).reduce((x,b)=>(x[b]={data:p[b].data},x),{}),connections:m,ports:g}},X.isEqual),r=v.exports.useMemo(()=>new F(s),[s]),a=r.heads[0],[c,l]=v.exports.useState(0),d=()=>{if(l(p=>p+1),console.log(e),n.clearChat(),!a)return;console.log("Run");const u=k(y(y({},Oe()),a.nodeState.data.node_object_lists),{flowNodeId:a.id});n.appendMessageNode(u)};return i.createElement(_t.Provider,{value:{state:e,actions:n,flow:r}},i.createElement("div",null,i.createElement("button",{onClick:d,style:{position:"fixed",top:0,zIndex:100,right:0}},"Start bot"),i.createElement("button",{onClick:()=>console.log(e),style:{position:"fixed",top:0,zIndex:100,right:100}},"state"),i.createElement(us,{key:c})))},fs=w.div`
  flex: 1;
  max-height: 100vh;
  min-width: 480px;
  ${({shift:e})=>e&&$`
      div.ql-toolbar.ql-snow {
        padding-left: 40px;
      }

      .jsoneditor-menu {
        padding-left: 40px;
      }
    `}
`,It=({values:e,setValues:t})=>{const n=S(r=>r.sidebarVisible),o=v.exports.useRef(null),s=v.exports.useRef();return v.exports.useEffect(()=>{if(o.current&&!s.current){const r={mode:"tree",modes:["code","form","text","tree","view","preview"],onChangeText(a){try{const c=JSON.parse(a);t(c)}catch{}},onModeChange(a){a==="code"&&s.current.aceEditor.setOptions({maxLines:1e4})}};s.current=new Sn(o.current,r)}return()=>{var r;(r=s.current)==null||r.destroy()}},[]),v.exports.useEffect(()=>{if(!s.current)return;const r=s.current.get();JSON.stringify(r)!==JSON.stringify(e)&&s.current.update(e)},[e]),i.createElement(fs,{shift:!(n!=null?n:!0),ref:o})};var gs="/Drawflow-react/assets/tile.07d222ee.png";const ws=e=>{const t=["order","active","icon_link","nodes_group_id","nodes_id","nodes_tooltip","name","description","icon_link_selected"],n=JSON.parse(JSON.stringify(e)),o=Q(n).reduce((r,a)=>(a in t||(r[a]=e[a]),r),{flow_lane_id:0,flow_node:{},node_position:0,prev_node_unique_id:0,this_node_unique_id:0,update_version:0,id_nodes:0});return["name","description","icon_link_selected"].forEach(r=>{o.flow_node[`node_${r}`]=n[r]}),o.flow_node.node_tooltip=n.nodes_tooltip,o.id_nodes=n.nodes_id,o},He={flow_node:"Flow node",node_settings_json:"Settings JSON",node_response_settings_json:"Response JSON",node_object_lists:"Object list",node_attributes:"Node attributes"},Nt=e=>typeof e!="string"?"":e.charAt(0).toUpperCase()+e.slice(1),vs=(e,t)=>{const n=(e.y-t.y)/2,o=e.x-t.x;return`M ${e.x} ${e.y} v ${-n} h ${-o} v ${-n} `},xs=(e,t,n,o)=>{const{x:s,y:r,width:a,height:c}=o;return{x:e*(a/(a*n))-s*(a/(a*n)),y:t*(c/(c*n))-r*(c/(c*n))}},ue={createCurvature:vs,getPos:xs},ys={version:0,flows:[ge],templates:[],dragTemplate:0,groups:{},windowConfig:{id:0,mainId:V.mainFlow,sideId:U.none,background:{opacity:0,blur:0,imageUrl:""}}},bs=Cn(ys,e=>{e.addCase(A,nt).addCase(dt,t=>{const n=B(t);if(n.nodeToCopyId===void 0)return;const{clientX:o,clientY:s}=n.clientCurrentMousePos,r=JSON.parse(JSON.stringify(n.drawflow[n.nodeToCopyId]));if(!t.canvas){console.error("Canvas shape is not available");return}r.pos=ue.getPos(o,s,n.config.zoom.value,t.canvas),n.drawflow[n.nodeId]=k(y({},r),{id:n.nodeId,height:0,width:0}),++n.nodeId}).addCase(mt.fulfilled,(t,{payload:n})=>{n!==void 0&&(t.version=n)}).addCase(ut,t=>{var n;t.sidebarVisible=!((n=t.sidebarVisible)!=null?n:!0)}).addCase(ct,(t,{payload:{clientX:n,clientY:o}})=>{const s=t.flows[t.version],r=t.templates.find(({nodes_id:c})=>c===t.dragTemplate);if(!t.dragTemplate)return;if(!t.canvas){console.error("Canvas shape is not available");return}if(!r){console.error("Template node not found");return}const a={id:0,type:fe.MIDDLE,data:ws(r),port:{in:1,out:2},pos:{x:0,y:0},isSub:!1,height:0,width:0};a.data.this_node_unique_id=s.nodeId,a.pos=ue.getPos(n,o,s.config.zoom.value,t.canvas),s.mouseBlockDragPos={clientX:n,clientY:o},s.drawflow[s.nodeId]=k(y({},a),{id:s.nodeId,height:0,width:0}),s.select={type:"node",selectId:s.nodeId++},s.config.drag=!0,t.dragTemplate=void 0}).addCase(ve,(t,{payload:n})=>{t.dragTemplate=n}).addCase(lt,(t,{payload:n})=>{t.canvas=n}).addCase(Re.fulfilled,(t,{payload:n})=>{t.templates=n}).addCase(ye.fulfilled,(t,{payload:n})=>{if(!n||n.length===0)return;t.version=n[0].update_version;const o={},s=[],r={},a={};n.forEach(p=>{var m;(m=p.node_attributes)==null||m.forEach((f,g)=>{r[f]=p.this_node_unique_id,a[f]=g===0})}),n.forEach(p=>{var h;const{this_node_unique_id:m,prev_node_unique_id:f}=p,g=r[m]!==void 0;f!==null&&s.push({startId:g?f:(h=r[f])!=null?h:f,endId:m,startPort:a[m]?2:1,endPort:1,visible:!0}),o[m]={id:m,height:0,width:0,type:fe.MIDDLE,isSub:g,port:{out:g?1:2,in:1},pos:{x:0,y:0},data:p}}),t.flows[t.version]=st(t.flows[t.version],{type:ce.Drawflow+"/load",payload:{drawflow:o,connections:s}});const c=new F(JSON.parse(JSON.stringify(t.flows[t.version]))),{heads:l}=c;if(!t.canvas){console.error("Canvas not initialized");return}const{height:d,width:u}=t.canvas;l[0].setPos({x:u/3,y:d/10}),t.flows[t.version]=c.state}).addCase(Ve.fulfilled,(t,{payload:n})=>{t.groups=n}).addMatcher(t=>t.type.startsWith(ce.Drawflow),(t,n)=>{t.flows[t.version]=st(t.flows[t.version],n)})}),re=kn({reducer:bs});function Es(){return new Worker("/Drawflow-react/assets/alignFlow.2b2802f3.js",{type:"module"})}const Dt=new Es;Dt.onmessage=e=>{const{version:t}=re.getState();t===e.data.version&&re.dispatch(M.setState({drawflow:e.data.drawflow}))};const Ee=j("alignCurrentFlow",async(e,{getState:t})=>{const n=t(),{version:o}=n,{drawflow:s,ports:r,connections:a}=B(n);Dt.postMessage([{drawflow:s,ports:r,connections:a},o])}),W=_n(In,X.isEqual),Ss=()=>S(v.exports.useMemo(()=>W(e=>{const{drawflow:t}=B(e);return Object.entries(t).filter(([n,{visible:o}])=>o!==!1).map(([n])=>Number(n))},e=>e),[])),Cs=()=>S(v.exports.useMemo(()=>W(e=>{const t=B(e),{config:{canvasTranslate:{x:n,y:o},zoom:s},newPathDirection:r,canvasDrag:a}=t;return{config:{canvasTranslate:{x:n,y:o},zoom:s},newPathDirection:r,canvasDrag:a}},e=>e),[])),ks=e=>S(v.exports.useMemo(()=>W(t=>B(t).drawflow[e].pos,t=>t),[e])),_s=e=>S(v.exports.useMemo(()=>W(t=>{const n=B(t).select;return(n==null?void 0:n.selectId)===e&&n.type==="node"},t=>t),[e])),Is=e=>S(v.exports.useMemo(()=>W(t=>{if(e===void 0)return!1;const n=B(t).select;return(n==null?void 0:n.type)==="path"&&n.selectId===e},t=>t),[e])),Ns=e=>S(v.exports.useMemo(()=>W(t=>{const{portToConnect:n}=B(t);if(!n)return!1;const o=JSON.parse(JSON.stringify(n));return delete o.pos,X.isEqual(e,o)},t=>t),[e])),Ds=e=>S(v.exports.useMemo(()=>W(t=>B(t).drawflow[e].isSub,t=>t),[e])),Ms=e=>S(v.exports.useMemo(()=>W(t=>{const n=JSON.parse(JSON.stringify(B(t).drawflow[e]));return delete n.pos,n},t=>t),[e])),Ps=()=>S(v.exports.useMemo(()=>W(e=>B(e).config.drag,e=>e),[])),Bs=()=>S(v.exports.useMemo(()=>W(e=>{const{connections:t}=B(e);return t.reduce((n,o,s)=>(o.visible&&n.push(s),n),[])},e=>e),[])),As=e=>S(v.exports.useMemo(()=>W(t=>{var d,u;const n=B(t),{startId:o,startPort:s,endId:r,endPort:a}=n.connections[e],c=(d=n.ports.find(p=>p.nodeId===o&&p.portId===s&&p.type===T.out))==null?void 0:d.pos,l=(u=n.ports.find(p=>p.nodeId===r&&p.portId===a&&p.type===T.in))==null?void 0:u.pos;return c&&l?ue.createCurvature(c,l):""},t=>t),[e])),Ls=()=>S(v.exports.useMemo(()=>W(e=>{const t=B(e);if(!t.select||t.select.type!==T.out||!t.newPathDirection){console.error("Cannot draw new path!");return}const n=t.ports[t.select.selectId];if(!n){console.error("No start port in newPath");return}const o=n.pos;if(!e.canvas){console.error("Canvas shape is not available");return}const{clientX:s,clientY:r}=t.newPathDirection,a=ue.getPos(s,r,t.config.zoom.value,e.canvas);return ue.createCurvature(o,a)},e=>e),[]));function Os(){return new Worker("/Drawflow-react/assets/toggleAvailablePortToConnect.8393e440.js",{type:"module"})}const Mt=new Os;Mt.onmessage=e=>{const{version:t}=re.getState();t===e.data.version&&re.dispatch(M.setState({portToConnect:e.data.portToConnect}))};const Ts=j("toggleAvailablePortToConnect",async(e,{getState:t})=>{const n=t(),{version:o}=n,s=B(n);Mt.postMessage([s,o])}),Vs=w.svg`
  position: absolute;
  overflow: visible;
`,Fs=w.path`
  :hover {
    stroke-width: 6px;
    stroke: purple;
    cursor: pointer;
  }

  fill: none;
  stroke-width: 6px;
  stroke: steelblue;
  ${({selected:e})=>e&&$`
      stroke-width: 7px;
      stroke: red;
    `};
`,Pt=e=>{const{id:t,d:n}=e,o=Is(t),s=L();return i.createElement(Vs,null,i.createElement(Fs,{selected:o,d:n,onMouseDown:r=>{t!==void 0&&(r.stopPropagation(),s(M.select({type:"path",selectId:t})))}}))},Rs=({id:e})=>{const t=As(e);return i.createElement(Pt,{key:e,id:e,d:t})},js=()=>{const t=Bs().map(n=>i.createElement(Rs,{key:n,id:n}));return i.createElement(i.Fragment,null,t)},zs=w.div`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  z-index: 1;
`,Ue=w.button`
  background-color: #333;
  color: white;
  font-size: 0.9em;
  margin: 0.1em;
  padding: 0.1em 0.5em;
  display: inline-grid;
  place-items: center;
`,Ws=()=>{const e=L();return i.createElement(zs,null,i.createElement(Ue,{onClick:()=>e(M.zoom(!0))},"+"),i.createElement(Ue,{onClick:()=>e(M.zoom(!1))},"-"),i.createElement(Ue,{onClick:()=>e(M.zoom(null))},"reset"))},$s=()=>{var t;const e=(t=Ls())!=null?t:"";return i.createElement(Pt,{d:e})},qs=e=>i.createElement("svg",k(y({},e),{viewBox:"0 0 16 16",fill:"none"}),i.createElement("path",{d:"M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M14.0016 13.9996L11.1016 11.0996",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),Js=e=>i.createElement("svg",k(y({},e),{viewBox:"0 0 10 14",fill:"none"}),i.createElement("path",{d:"M8 2L2.18437 6.84636C2.08842 6.92631 2.08842 7.07369 2.18437 7.15364L8 12",stroke:"#393C44",strokeWidth:"2.5",strokeLinecap:"round"})),Gs=e=>i.createElement("svg",k(y({},e),{viewBox:"0 0 1792 1792"}),i.createElement("path",{fill:"#217CE8",d:"M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z"})),Bt=e=>i.createElement("svg",k(y({},e),{viewBox:"0 0 19 19",fill:"none"}),i.createElement("path",{d:"M14.25 4.75L4.75 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M4.75 4.75L14.25 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),At=e=>i.createElement("svg",k(y({},e),{enableBackground:"new 0 0 512 512",viewBox:"0 0 512 512"}),i.createElement("g",null,i.createElement("path",{d:"m482.16 288.51 29.84-4.68v-55.66l-29.84-4.68c-24.56-4.14-33.19-36.67-13.99-52.45l22.52-18.55-27.71-47.98-27.56 10.32c-23.33 8.74-47-14.9-38.25-38.25l10.32-27.56-47.98-27.71-18.55 22.52c-15.75 19.16-48.3 10.61-52.45-13.99l-4.68-29.84h-55.66l-4.68 29.84c-4.17 24.56-36.67 33.19-52.45 13.99l-18.55-22.52-47.98 27.71 10.32 27.56c8.74 23.33-14.9 47-38.25 38.25l-27.56-10.32-27.71 47.98 22.52 18.55c19.12 15.74 10.67 48.29-13.99 52.45l-29.84 4.68v55.66l29.84 4.68c24.46 4.15 33.26 36.59 13.99 52.45l-22.52 18.55 27.71 47.98 27.56-10.32c23.22-8.7 47.04 14.81 38.25 38.25l-10.32 27.56 47.98 27.71 18.55-22.52c15.73-19.11 48.27-10.67 52.45 13.99l4.68 29.84h55.66l4.68-29.84c4.12-24.4 36.56-33.3 52.45-13.99l18.55 22.52 47.98-27.71-10.32-27.56c-8.7-23.22 14.81-47.04 38.25-38.25l27.56 10.32 27.71-47.98-22.52-18.55c-19.16-15.76-10.61-48.28 13.99-52.45zm-226.16 92.49c-68.93 0-125-56.07-125-125s56.07-125 125-125 125 56.07 125 125-56.07 125-125 125z",fill:"#7ed8f6"}),i.createElement("path",{d:"m468.17 340.96 22.52 18.55-27.71 47.98-27.56-10.32c-23.44-8.79-46.95 15.03-38.25 38.25l10.32 27.56-47.98 27.71-18.55-22.52c-15.89-19.31-48.33-10.41-52.45 13.99l-4.68 29.84h-27.83v-131c68.93 0 125-56.07 125-125s-56.07-125-125-125v-131h27.83l4.68 29.84c4.15 24.6 36.7 33.15 52.45 13.99l18.55-22.52 47.98 27.71-10.32 27.56c-8.75 23.35 14.92 46.99 38.25 38.25l27.56-10.32 27.71 47.98-22.52 18.55c-19.2 15.78-10.57 48.31 13.99 52.45l29.84 4.68v55.66l-29.84 4.68c-24.6 4.17-33.15 36.69-13.99 52.45z",fill:"#6aa9ff"}),i.createElement("path",{d:"m256 121c-74.44 0-135 60.56-135 135s60.56 135 135 135 135-60.56 135-135-60.56-135-135-135zm0 210c-41.35 0-75-33.64-75-75s33.65-75 75-75 75 33.64 75 75-33.65 75-75 75z",fill:"#6aa9ff"}),i.createElement("path",{d:"m391 256c0 74.44-60.56 135-135 135v-60c41.35 0 75-33.64 75-75s-33.65-75-75-75v-60c74.44 0 135 60.56 135 135z",fill:"#4895ff"}))),Lt=e=>i.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},e),i.createElement("g",{transform:"matrix(1.06642 0 0 1.06642 -1.03 -1106.225)"},i.createElement("circle",{cx:"8.467",cy:"1044.829",r:"5.626",fill:"#c2e4f8"}),i.createElement("path",{fill:"#249fe6",fillRule:"evenodd",style:{lineHeight:"normal",textIndent:0,textAlign:"start",textDecorationLine:"none",textDecorationStyle:"solid",textDecorationColor:"#000",textTransform:"none",isolation:"auto",mixBlendMode:"normal"},d:"M 8 1 C 4.139959 1 1.0000428 4.1398846 1 8 C 0.99997942 11.860115 4.1399146 15 8 15 C 11.860086 15 15.00002 11.860115 15 8 C 14.999957 4.1398846 11.860041 1 8 1 z M 8 2 C 11.319604 2 13.999963 4.6803455 14 8 C 14.000018 11.319654 11.319644 14 8 14 C 4.6803565 14 1.9980292 11.319654 1.9980469 8 C 1.9980837 4.6803455 4.6803952 2 8 2 z M 7.9863281 4.0039062 A 0.50005001 0.50005001 0 0 0 7.4941406 4.5117188 L 7.5 7.5039062 L 4.5039062 7.5097656 A 0.50095123 0.50095123 0 0 0 4.5058594 8.5117188 L 7.5 8.5058594 L 7.5058594 11.5 A 0.50005001 0.50005001 0 1 0 8.5058594 11.5 L 8.5019531 8.5039062 L 11.494141 8.4980469 A 0.50005001 0.50005001 0 1 0 11.492188 7.4980469 L 8.5 7.5039062 L 8.4960938 4.5117188 A 0.50005001 0.50005001 0 0 0 7.9863281 4.0058594 L 7.9863281 4.0039062 z ",color:"#000",fontFamily:"sans-serif",fontWeight:400,overflow:"visible",transform:"matrix(.93772 0 0 .93772 .965 1037.328)"}))),Ot=e=>i.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 3",fill:"none"},e),i.createElement("circle",{cx:"1.2",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),i.createElement("circle",{cx:"5.9998",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),i.createElement("circle",{cx:"10.7996",cy:"1.2",r:"1.2",fill:"#C5C5D0"})),Tt=w.button`
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
`,Vt=w.div`
  /* width: min-content; */
  position: relative;
  padding: 1em 0.3em 0.3em;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  text-align: center;
  background-color: white;
  box-shadow: 0 4px 30px rgb(22 33 74 / 25%);
  border-radius: 5px;

  //max-width: 100%;

  :hover {
    box-shadow: 0 4px 30px rgb(22 33 74 / 15%);
    background-color: #f8f8f8;
  }
`,Hs=w.img`
  max-height: 100%;
  max-width: 100%;
  margin-bottom: 0.2em;
`,Us=w.div`
  //word-break: break-word;
  //hyphens: auto;
`,Ks=e=>{const{nodes_id:t,order:n}=e,o=L(),s=v.exports.useRef(null),r=S(c=>c.precanvas),a=c=>{if(ve===void 0)return;o(ve(t));const{current:l}=s;if(!l){console.error("No node to copy");return}const{left:d,top:u}=l.getBoundingClientRect(),p=c.clientX-d,m=c.clientY-u,f=l.cloneNode(!0);f.style.position="absolute",f.style.left=d+window.scrollX+"px",f.style.top=u+window.scrollY+"px",document.body.appendChild(f);const g=b=>{var I;const{clientX:E,clientY:_}=b;if(!r){console.error("Canvas is not ready! Cannot drag template");return}if(E>=r.x&&_>=r.y){document.removeEventListener("mousemove",g),(I=f.parentNode)==null||I.removeChild(f);return}f.style.left=E-p+window.scrollX+"px",f.style.top=_-m+window.scrollY+"px"};document.addEventListener("mousemove",g),document.addEventListener("mouseup",()=>{var b;document.removeEventListener("mousemove",g),(b=f.parentNode)==null||b.removeChild(f),o(ve(void 0))},{once:!0});const{height:h,width:x}=getComputedStyle(l);f.style.height=h,f.style.width=x};return i.createElement(Vt,{style:{order:n},ref:s,onMouseDown:a},i.createElement(Tt,{onMouseDown:()=>{o(A({windowConfig:{id:t,mainId:V.templateNodeSettings}}))}},i.createElement(Ot,{height:3,width:12})),i.createElement(Hs,{draggable:!1,src:e.icon_link}),i.createElement(Us,null,e.name))},Zs=w.div`
  max-height: 100%;
  overflow: hidden;
`,Xs=e=>{const t=L();return i.createElement(Zs,null,i.createElement("span",null,e.data.flow_node.node_name),i.createElement(Tt,{onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(A({windowConfig:{id:e.id,mainId:V.nodeSettings}}))}},i.createElement(Ot,{height:3,width:12})))},Qs=w.div`
  width: 15px;
  height: 15px;
  border-radius: 60px;
  background-color: #217ce8;
  opacity: ${({visible:e})=>e?1:0};
  transform: scale(${({visible:e})=>e?1:0});
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
`,Ke=w.div`
  height: 1em;
  width: 1em;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  border: 2px solid #cacaca;
  &:hover {
    background: #4ea9ff;
  }
`,Ys=w(Ke)`
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&$`
      left: 100%;
      top: 50%;
    `}
`,er=w(Ke)`
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&$`
      display: none;
    `}
`,tr=w(Ke)`
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  ${({isSub:e})=>e&&$`
      left: 0;
      top: 50%;
    `}
`,nr={[T.in]:[tr],[T.out]:[Ys,er]},or=e=>{const{nodeId:t,portId:n,type:o}=e,s=L(),r=Ns(e),a=Ds(t),c=nr[o][n-1],l=m=>{m.preventDefault(),s(M.toggleSubnodes({id:t})),s(Ee()),m.stopPropagation()},d=m=>{m.preventDefault(),s(M.toggleChildren({id:t})),s(Ee()),m.stopPropagation()},u=i.createElement(c,{isSub:a,onMouseDown:m=>{m.stopPropagation(),s(M.selectPort({type:o,nodeId:t,portId:n}))},onMouseUp:()=>{s(M.portMouseUp({nodeId:t,portId:n,PortType:o}))},onContextMenu:m=>{o!=="in"&&(n===1&&d(m),n===2&&l(m))}},i.createElement(Qs,{visible:r}));if(o==="in"||a)return u;const p={1:"Right click to toggle children",2:"Right click to toggle subnodes"};return i.createElement(Nn,{title:p[n]},u)},Ft=e=>{const{id:t,port:n,type:o}=e,s=[];for(let r=1;r<=n[o];r++)s.push(i.createElement(or,{key:r,nodeId:t,portId:r,type:o}));return i.createElement("div",{className:`${o}puts`},s)},sr=w.div`
  display: inline-block;
  position: absolute;
  padding: 0 0.7em;
  width: 200px;
  min-height: 60px;
  background-color: white;
  border-radius: 0.2em;
  z-index: 1;
  cursor: move;

  ${({selected:e})=>e&&$`
      //box-shadow: 0 2px 15px 2px #cacaca;
      box-shadow: 0 2px 20px 2px #4ea9ff;
      z-index: 2;
    `};
`,rr=({id:e})=>{const t=Ps(),n=S(d=>B(d).nodeId),o=ks(e),s=_s(e),r=L(),a=v.exports.useRef(null),c=Ms(e),{port:l}=c;return v.exports.useEffect(()=>{if(a.current){const{offsetHeight:d,offsetWidth:u}=a.current;r(M.nodeSize({height:d,width:u,id:e}))}},[r,e,c]),v.exports.useEffect(()=>{const d=(u,p)=>Array.from(p.querySelector(`.${u}puts`).children).map((f,g)=>{const h=parseInt(getComputedStyle(f).left)+o.x,x=parseInt(getComputedStyle(f).top)+o.y;return{nodeId:e,pos:{x:h,y:x},portId:g+1,type:u}});if(a.current){const u=d(T.in,a.current),p=d(T.out,a.current);r(M.pushPorts([...u,...p]))}},[r,e,o]),v.exports.useEffect(()=>{if(a.current&&n-1===e&&t){const{offsetHeight:d,offsetWidth:u}=a.current;r(M.moveNode({nodeId:e,dx:-u*.2,dy:-d*.2}))}},[]),i.createElement(sr,{selected:s,ref:a,style:{left:o.x,top:o.y},isSub:c.isSub,onMouseDown:d=>{d.stopPropagation();const{clientX:u,clientY:p}=d;r(M.select({type:"node",selectId:e})),r(M.setMouseBlockDragPos({clientX:u,clientY:p}))},onContextMenu:()=>{},onDoubleClick:()=>{}},i.createElement("div",{style:{color:"blue"}},c.id,":",c.positionNumber),i.createElement(Xs,y({},c)),i.createElement(Ft,{id:e,port:l,type:T.in}),i.createElement(Ft,{id:e,port:l,type:T.out}))},ar=()=>{const e=Ss();return i.createElement(i.Fragment,null,e.map(t=>i.createElement(rr,{key:t,id:t})))},ir=w.div`
  position: relative;
  height: 100vh;
  //height: 100%;
  overflow: hidden;
  background-image: url(${gs});
  background-repeat: repeat;
  background-size: 30px 30px;
`,cr=w.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Rt=(e,t,n,o)=>{var a;const[s,r]=((a=getComputedStyle(e).transform.match(/^matrix\((.+)\)$/))==null?void 0:a[1].split(",").slice(-2).map(Number))||[0,0];e.style.transform=`translate(${s+t}px, ${r+n}px) scale(${o})`},lr=w.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`,dr=()=>{const e=L(),[t]=ne(Z.backgroundOpacity,50),[n]=ne(Z.backgroundBlur,50),[o]=ne(Z.backgroundImageUrl,"");v.exports.useEffect(()=>{e(A({windowConfig:{background:{opacity:t,blur:n,imageUrl:o}}}))},[])},ur=w.button`
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
`,pr=()=>{dr();const e=Cs(),{config:{canvasTranslate:{x:t,y:n},zoom:o},newPathDirection:s,canvasDrag:r}=e,a=L(),c=v.exports.useRef(null),l=v.exports.useRef(null);v.exports.useEffect(()=>{a(Ee())},[]),v.exports.useEffect(()=>{const{current:m}=c;m&&Rt(m,0,0,o.value)},[r,o.value]),v.exports.useEffect(()=>{const{current:m}=c;if(m){const g=m.getBoundingClientRect(),h={x:g.x,y:g.y,width:m.clientWidth,height:m.clientHeight};a(lt(h))}const{current:f}=l;if(f){const g=f.getBoundingClientRect(),h={x:g.x,y:g.y,width:f.clientWidth,height:f.clientHeight};a(A({precanvas:h}))}});const{opacity:d,blur:u,imageUrl:p}=S(m=>m.windowConfig.background);return i.createElement(ir,{ref:l,className:"drawflow",tabIndex:0,onKeyDownCapture:m=>{m.key==="Delete"&&(a(M.deletePath()),a(M.deleteNode())),m.ctrlKey&&m.key==="c"&&a(M.copyNode()),m.ctrlKey&&m.key==="v"&&a(dt())},onMouseDown:()=>{a(M.canvasDrag(!0)),a(M.unSelect())},onMouseUp:()=>{a(M.canvasMouseUp()),a(Ee())},onMouseMove:m=>{const{clientX:f,clientY:g,movementX:h,movementY:x}=m,{current:b}=c;r&&b&&Rt(b,h,x,o.value),a(M.canvasMouseMove({clientX:f,clientY:g,movementX:h,movementY:x})),a(Ts())},onMouseEnter:m=>{const{clientX:f,clientY:g}=m;a(ct({clientX:f,clientY:g}))},style:{backgroundColor:`rgba(251, 251, 251, ${d}%)`}},i.createElement(lr,{style:{backgroundImage:`url(${p})`,filter:`blur(${u/10}px)`}}),i.createElement(Ws,null),i.createElement(ur,{onClick:m=>{m.preventDefault(),a(vo())}},"Commit"),i.createElement(cr,{ref:c,style:{}},i.createElement(ar,null),i.createElement(js,null),s&&i.createElement($s,null)))},jt=w.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  outline: none;
  border: none;
`,mr=w.section`
  position: relative;
  flex: 0 0 400px;
  overflow-y: auto;
  max-height: calc(100vh + 40px);
  padding-top: 30px;
  border: 1px solid #e8e8ef;
`,Se=w.label`
  margin: 10px;
  display: flex;
  flex-direction: column;
`,hr=w.div`
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
`,fr=w.div`
  background: #e8e8ef;

  label {
    margin: 10px;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 2px;
    }
  }
`,gr=()=>{const e=S(h=>h.flowInfo),t=L(),[n,o]=v.exports.useState([]);v.exports.useEffect(()=>{(async()=>{const x=await K(Te.fetchBackgroundImages,{lab_test:1}),{flow_canvas_background_image:b}=x,E=b.map(({image_link:_})=>_);o(E)})().then()},[]);const{flow_name:s,flow_description:r,run_times_max:a,user_run_limit_seconds:c}=e||{},[l,d]=ne(Z.backgroundOpacity,50),[u,p]=ne(Z.backgroundBlur,50),[m,f]=ne(Z.backgroundImageUrl,""),g=(h,x)=>{const b=Object.keys(h)[0],E=h[b];return i.createElement("input",k(y({},x),{value:E!=null?E:"Loading ...",onChange:_=>{t(A({flowInfo:{[b]:_.target.value}}))}}))};return i.createElement(mr,null,i.createElement(jt,{onClick:()=>t(A({windowConfig:{sideId:U.none}}))},i.createElement(Bt,{width:19,height:19})),i.createElement(Se,null,"Flow name:",g({flow_name:s},{type:"text"})),i.createElement(Se,null,"Flow description:",g({flow_description:r},{type:"text"})),i.createElement(Se,null,"Max run times:",g({run_times_max:a},{type:"number"})),i.createElement(Se,null,"User run limit seconds:",g({user_run_limit_seconds:c},{type:"number"})),i.createElement(fr,null,i.createElement("label",null,"Opacity:",i.createElement("input",{type:"range",value:l!=null?l:0,min:0,max:100,onChange:h=>{const x=+h.target.value;d(x),t(A({windowConfig:{background:{opacity:x}}}))}})),i.createElement("label",null,"Blur:",i.createElement("input",{onChange:h=>{const x=+h.target.value;p(x),t(A({windowConfig:{background:{blur:x}}}))},type:"range",min:0,max:100,value:u})),i.createElement(hr,null,n.map(h=>i.createElement("button",{key:h,onClick:()=>{f(h),t(A({windowConfig:{background:{imageUrl:h}}}))}},i.createElement("img",{style:{border:m===h?"2px solid blue":""},src:h,alt:"Background image"}))))))},wr=()=>({id:0,node_group_order:0,node_group_name:"Group name",node_group_description:"Group description"}),ae=w.button`
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
`,vr=w.div``,xr=w.div`
  padding: 0 10px 10px;
  position: relative;
  border: 1px solid #e8e8ef;
  flex: 0 0 300px;
  overflow-y: auto;
  max-height: 100%;
`,yr=w.div`
  margin-bottom: 15px;
  padding: 5px;
  border-bottom: 2px solid lightgray;
`,br=w.span`
  color: blue;

  ::before {
    margin-left: 8px;
    content: " ID.";
  }
`,Er=w(ae)`
  text-align: center;
`,Sr=w(ae)`
  margin-left: 5px;
`,Cr=w(ae)`
  margin-left: 5px;
`,kr=w.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 8px;
`,_r=w.h2`
  text-align: center;
  border-bottom: 2px solid blue;
  color: #217ce8;
`,Ir=w.input`
  margin-right: 10px;
  font-weight: bolder;
  border: 1px solid #217ce8;
  font-size: 0.9em;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 5px;
  width: 90%;
`,Nr=w.textarea`
  border-radius: 5px;
  border: 1px solid #217ce8;

  /* flex: 1; */
  width: 90%;
  /* text-align: center; */
`,Dr=()=>{var r;const e=S(a=>a.groups),t=L(),[n,o]=v.exports.useState(e),s=(a,c)=>{const l=y(y({},n[a]),c);o(k(y({},n),{[a]:l}))};if(Object.keys(e).length!==Object.keys(n).length){const a={};for(const[c,l]of Object.entries(e))a[Number(c)]=X.merge(l,(r=n[Number(c)])!=null?r:{});o(a)}return i.createElement(xr,null,i.createElement(jt,{onClick:()=>t(A({windowConfig:{sideId:U.none}}))},i.createElement(Bt,{width:19,height:19})),i.createElement(_r,null,"Node groups"),Object.values(n).map(({id:a,node_group_name:c,node_group_order:l,node_group_description:d})=>i.createElement(yr,{key:a},i.createElement(kr,null,i.createElement(br,null,a),i.createElement(Sr,{onClick:()=>{!window.confirm(`Do you really wanna delete group ${c}, ID.${a}`)||t(Fe({id:a,delete:1}))}},"Delete"),i.createElement(Cr,{onClick:()=>{!window.confirm(`Do you really wanna save group ${c}, ID.${a}`)||t(Fe(n[a]))}},"Save")),i.createElement(Ir,{value:c,type:"text",onChange:u=>{s(a,{node_group_name:u.target.value})}}),i.createElement(Nr,{value:d,onChange:u=>{s(a,{node_group_description:u.target.value})}}))),i.createElement(vr,null,i.createElement(Er,{onClick:()=>{t(Fe(wr()))}},"Add new")))};var Mr="/Drawflow-react/assets/flowsettings.758f2330.png";const Pr=()=>{const e=S(r=>r.flows.length),t=S(r=>r.version),n=L(),o=e-1,s=Array.from({length:o},(r,a)=>a+1);return i.createElement(Dn,{getOptionLabel:r=>r.toString(),disablePortal:!0,size:"small",options:s,id:"versionNumber",sx:{width:"min-content"},value:t,onChange:(r,a)=>{n(mt(a))},renderInput:r=>i.createElement(Mn,k(y({},r),{label:"Version"}))})},zt=()=>({flow_node_type_id:0,nodes_id:0,node_scrdata_id:0,flow_action_scrdata_id:0,order:0,nodes_group_id:0,name:"**",description:"**",icon_link:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",icon_link_selected:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:0,execute_node_specific_date_time:"2020-11-11T19:30",loop_cycles:0,node_settings_json:{},node_response_settings_json:{},loop_cycle_reached_jump_to_node:0,node_attributes:[],node_object_lists:{props:null,type:C.Empty,renderable:!0},node_story:"Node story"}),Br=w.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, max-content));
  grid-auto-rows: minmax(1em, auto);
  grid-gap: 1em;
  background-color: #f5f5f5;

  overflow-y: auto;
  //max-height: calc(100vh - 55px);
  max-height: calc(100vh - 90px);

  min-height: 0; /* NEW */
  min-width: 0;

  &:after {
    grid-column: span 3;
    //background-color: red;
    height: 0.1em; /* 3em (desired padding effect) minus 1em (grid-gap setting) */
    content: "";
    order: 999;
  }

  //&::-webkit-scrollbar-thumb {
  //  background-color: #217ce8;
  //  border-radius: 1em;
  //}

  &::-webkit-scrollbar {
    //display: none;
    //height: 0.1em;
    width: 0.5em;
  }
`,Ar=w(Vt)`
  /* min-height: 5em; */
  padding: 25px;
  order: 998;

  :hover {
    cursor: pointer;
  }
`,Lr=e=>{const t=S(a=>a.templates),n=L(),{searchWord:o,selectedGroup:s}=e,r=o.toLowerCase().split(" ").filter(a=>a.length>0);return i.createElement(Br,null,t.map(a=>{const c=a.name+" "+a.description;return(s===0||a.nodes_group_id===s)&&(r.find(l=>c.toLowerCase().includes(l))||!r.length)&&i.createElement(Ks,y({key:a.nodes_id},a))}),i.createElement(Ar,{onClick:()=>{const a=zt();a.nodes_group_id=s,n(je(k(y({},a),{order:Math.max(...t.map(c=>c.order))+1})))}},i.createElement(Lt,null)))},Or=w.div`
  width: 300px;
  order: -2;
  max-height: calc(100vh + 40px);
`,Tr=w.div`
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
`,Wt=w.div`
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

  ${({selected:e})=>e&&$`
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
`,Vr=({selectedGroup:e,setSelectedGroup:t})=>{L();const n=S(o=>o.groups);return i.createElement(Tr,null,i.createElement(Wt,{key:0,selected:e===0,onClick:()=>t(0)},"All"),Object.values(n).map(({id:o,node_group_name:s,node_group_order:r})=>i.createElement(Wt,{key:o,selected:o===e,onClick:()=>t(o)},s)))},Fr=w.input`
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
`,Rr=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-top: 10px;
`,jr=w.span`
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
`,zr=w.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,Wr=({setSearchWord:e})=>{const t=L();return i.createElement(Rr,null,i.createElement(jr,null,i.createElement(qs,null)),i.createElement(Fr,{type:"text",placeholder:"Search templates",onChange:n=>{e(n.target.value)}}),i.createElement(zr,{onClick:()=>t(A({windowConfig:{sideId:U.groupSettings}}))},i.createElement(At,{height:30})),i.createElement(Ce,null))},$r=w.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  ${({opened:e})=>e&&$`
      transform: rotate(180deg);
    `};
`,Ce=e=>{var o;const t=(o=S(s=>s.sidebarVisible))!=null?o:!0,n=L();return i.createElement($r,{opened:!t,onClick:()=>n(ut())},i.createElement(Gs,y({height:40},e)))},qr=()=>{const[e,t]=v.exports.useState(""),[n,o]=v.exports.useState(0);return S(r=>r.sidebarVisible)===!1?null:i.createElement(Or,null,i.createElement(Wr,{setSearchWord:t}),i.createElement(Vr,{selectedGroup:n,setSelectedGroup:o}),i.createElement(Lr,{selectedGroup:n,searchWord:e}))},Jr=w.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e8e8ef;
`,Gr=w.div`
  display: flex;
  justify-content: space-between;
`,Ze=$`
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
`,Hr=w.div`
  display: flex;
  align-items: center;
`,ke=w.button`
  ${Ze};

  &:focus {
    background-color: #dfdfdf;
  }
`,Ur=w.div`
  display: flex;
  align-items: center;
`;w.button`
  margin: 0 10px;
  background-color: #eaecf1;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: none;
`;const Kr=w.div`
  display: grid;
  margin-left: 1em;
  //place-items: left;
  div {
  }
`,Zr=w.div`
  font-size: 16px;
  color: #393c44;
  font-family: Roboto, serif;
`,Xr=w.div`
  color: #808292;
  font-size: 14px;
`,Qr=w.button`
  ${Ze};

  background-color: #e31c5c;
  display: inline-block;
  margin-right: 10px;
  color: white;
`,Yr=w.button`
  background-color: #217ce8;
  ${Ze};
  color: white;
`,ea=w.label`
  display: flex;
  align-items: center;
  justify-content: center;

  > span:first-child {
    display: inline-block;
    margin-right: 4px;
  }
`,ta=()=>{var c;const e=L(),t=S(l=>l.flowInfo),n=(c=S(l=>l.sidebarVisible))!=null?c:!0,o=S(l=>l.windowConfig.mainId),{flow_name:s,flow_description:r,flow_active:a}=t||{};return i.createElement(Jr,null,i.createElement(Gr,null,n?null:i.createElement(Ce,null),i.createElement(Kr,null,i.createElement(Zr,null,s||"Loading ..."),i.createElement(Xr,null,r||"Loading ..."))),i.createElement(Hr,null,i.createElement(ke,{onClick:()=>e(A({windowConfig:{mainId:V.mainFlow}}))},"Diagram view"),i.createElement(ke,{onClick:()=>e(A({windowConfig:{mainId:V.codeEditor}}))},"Code editor"),i.createElement(ke,null,i.createElement(ea,null,i.createElement("span",null,"Active"),i.createElement(Pn,{checked:!!a,icons:{checked:null,unchecked:null},onChange:l=>e(A({flowInfo:{flow_active:+l.target.checked}}))}))),i.createElement(ke,{onClick:()=>e(A({windowConfig:{sideId:U.flowSettings}}))},i.createElement("img",{src:Mr,alt:""}))),o===V.mainFlow&&i.createElement(Pr,null),i.createElement(Ur,null,i.createElement(Qr,null,"Delete flow"),i.createElement(Yr,{onClick:()=>e(fo())},"Save flow")))},pe=w.details`
  summary svg {
    transform: rotate(-90deg);
  }

  &[open] > summary:first-child svg {
    transform: rotate(90deg);
  }

  summary ~ * {
    margin-left: 10px;
  }
`,$t=w(pe)`
  position: relative;

  summary ~ * {
    margin-left: ${({leftShift:e})=>e};
  }
`,na=w.div`
  cursor: pointer;
  margin-top: 0.2em;
  padding: 0.4em;
  border-radius: 0.3em;
  background: #8db6f6;

  &:hover {
    background: #3377e4;
  }
`,oa=w.div`
  display: flex;
  margin-left: 1em;

  & > * {
    margin-left: 0.1em;
    //padding: 1em;
  }

  summary {
    padding-right: 0.3em;
  }
`,sa=w.button`
  background-color: white;
  border: 0;
  border-radius: 0.4em;
  padding: 0.3em;
  margin: 0.5em;
`,ra=w.div`
  display: grid;
  grid-template-columns: auto 1fr;
  flex: 1;
`,aa=w.form`
  min-width: fit-content;
`,ia=w.div`
  font-weight: bold;
`,ca=w.div``,la=w.div`
  display: grid;
  gap: 0.3em;
`,da=w.header`
  padding: 10px;
  display: flex;
  align-items: center;
  color: #1f1a1a;
  min-width: fit-content;
  ${({shift:e})=>e&&$`
      padding-left: 0;
    `}
`,ua=w.img`
  padding: 8px;
  margin-right: 10px;
  border: 3px solid #8db6f6;
  border-radius: 15px;
  max-height: 50px;
  max-width: 50px;
`,pa=w(pe)``,ma=w.summary`
  color: #e0ebfd;
  background-color: #8db6f6;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 30px;
  margin-top: 0.05em;
`,ha=w.span`
  display: grid;
  place-items: center;

  svg {
    height: 1em;
    width: 1.4em;
  }
`,fa=w.label`
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 2px solid blue;
  align-items: center;
`,_e=w.div``,ga=w.div`
  flex: 1;
  height: max-content;
`,wa=w.div`
  margin-left: -0.2em;
`,va=w(ae)``,xa=w(ae)``,ya=w(ae)``,ba=w.div`
  text-align: center;
`,Ea=w.button`
  text-align: center;
  padding: 0;
  margin: 0;
  border: 0;
  background: 0;
`,Sa=w.div`
  position: relative;
  display: grid;
  place-items: center;
  //background-color: blue;
  margin-left: 0.2em;
`,Ca=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,qt=w.div`
  position: absolute;
  z-index: 1;
  left: 0;
  width: max-content;
  max-width: 30vw;
  padding: 10px;
  background-color: #f5f0e5;
  border: 3px solid #3883fa;
  border-radius: 10px;
`,ka=w(qt)`
  //position: absolute;
  left: 100%;
  //right: -100%;
  top: 0;
  //background-color: red;
`,ie=({children:e})=>i.createElement(ma,null,i.createElement(ha,null,i.createElement(Js,null)),i.createElement("span",null,e)),_a=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ie=({path:e,obj:t,RenderElement:n})=>{var a;if(typeof t!="object"||t===null)return i.createElement(n,{path:e});const o=Q(t).map(c=>{const l=t[c];return i.createElement(Ie,{key:[...e,c].join("."),path:[...e,c],obj:l,RenderElement:n})}),s=e[e.length-1],r=(a=He[s])!=null?a:Nt(s.replace(/_/g," "));return i.createElement(pe,null,i.createElement(ie,null,r),i.createElement(_e,null,o))},Jt=(e,t,n)=>{const o=v.exports.useCallback(s=>{e.current&&!e.current.contains(s.target)&&t(s)},[e,t]);v.exports.useEffect(()=>{const s=()=>document.removeEventListener("mousedown",o);if(n){s();return}return document.addEventListener("mousedown",o),s},[o,n])},Gt=e=>{re.dispatch(A({windowConfig:{id:e,mainId:V.nodeSettings}}))},Ht=({node:e,getNextListFromNode:t})=>{const{id:n,nodeState:{positionNumber:o,data:{name:s}}}=e;return i.createElement($t,{leftShift:"1em"},i.createElement(ie,null,s," #",n,":",o,i.createElement(sa,{onClick:()=>Gt(n),key:n},"Jump")),i.createElement(_e,null,t(e).map(r=>i.createElement(Ht,{getNextListFromNode:t,key:r.id,node:r}))))},Xe=e=>{const{render:t,list:n,title:o}=e,s=v.exports.useRef(null);return Jt(s,()=>{s.current&&(s.current.open=!1)}),i.createElement($t,{leftShift:"0",ref:s},i.createElement(ie,null,o),n.length>0&&i.createElement(qt,null,n.map(t)))},Ut=({id:e})=>{const t=S(B),o=new F(t).getNode(e),{subnodes:s,out1:r,prevDirectNodes:a}=o,c=({nodeState:{positionNumber:l,id:d,data:{name:u}}})=>i.createElement(na,{onClick:()=>Gt(d),key:d},u," #",d,":",l);return i.createElement(oa,null,i.createElement(Xe,{list:s,render:c,title:"Subnodes"}),i.createElement(Xe,{list:a,render:c,title:"Prev"}),i.createElement(Xe,{list:r,render:l=>i.createElement(Ht,{getNextListFromNode:({out1:d})=>d,key:l.id,node:l}),title:"Next"}))};Ut.propTypes={id:Bn.number};const Ia={node_object_lists:{type:({field:e})=>i.createElement("select",y({},e),Object.entries(C).map(([t,n],o)=>i.createElement("option",{key:o,value:n},t)))}},Kt=(e,t)=>{for(const n of t){if(!(n in e))return;e=e[n]}return e},Na=({pathToFieldValue:e})=>{var f;const[t,n]=v.exports.useState(!1),{getValues:o,setValue:s}=An(),r=o(),a=(f=r.node_settings_json.jparam_settings)!=null?f:[],c=r.this_node_unique_id,l=S(B),u=new F(l).getNode(c),{prevDirectNodes:p}=u,m=v.exports.useRef(null);return Jt(m,()=>t&&n(!1),!t),i.createElement(Sa,{ref:m},i.createElement(Ea,{onClick:()=>n(!t)},i.createElement(At,{height:15})),t&&i.createElement(ka,null,i.createElement(pe,null,i.createElement(ie,null,"Prev nodes"),p.length>0&&i.createElement(_e,{style:{zIndex:2}},p.map(({nodeState:{positionNumber:g,id:h,data:x}})=>{const b=({path:E})=>{const _=E[E.length-1],I=S(P=>{const O=B(P),{data:D}=O.drawflow[h];return Kt(D,E)});return i.createElement(_a,null,i.createElement("span",{onClick:()=>{const P=`&%jparam:${r.this_node_unique_id}:${a.length}%&`,O={replace_this_element:e.slice(1).join(","),replace_tag:P,with_this_element_value:{node_unique_id:h,settings:Number(e[0]==="node_settings_json"),parameter:E.slice(1).join(",")}};a.push(O),s("node_settings_json.jparam_settings",a);const D=e.join("."),G=o(D);typeof G=="string"&&s(D,G+P)}},i.createElement(Lt,{height:15})),i.createElement("span",null,_,":"),i.createElement("span",null,I))};return i.createElement(pe,{key:h},i.createElement(ie,null,x.name," $",h,":",g),i.createElement(Ie,{RenderElement:b,obj:x.node_settings_json,path:["node_settings_json"]}),i.createElement(Ie,{RenderElement:b,obj:x.node_response_settings_json,path:["node_response_settings_json"]}))})))))},Zt=({path:e})=>{const{type:t}=v.exports.useContext(Ne),n=e[e.length-1],o=`${e.join(".")}`,s=a=>{const c=n in me&&a!==null?typeof me[n]==typeof a:!0;return c||console.log({key:n,value:a,properValue:me[n]}),c},r=Nt(n.replace(/_/g," "));return i.createElement(fa,null,r,":",i.createElement(Ca,null,i.createElement(Ln,{name:o,render:({field:a})=>{const{value:c}=a;s(c);const l=n in me?me[n]:c;if(typeof l=="boolean")return i.createElement(On,k(y({sx:{p:0}},a),{checked:a.value,size:"small"}));const d=typeof l=="number"?"number":"text",u=Kt(Ia,e);return u?u({field:a}):i.createElement("input",k(y({type:d},a),{value:c!=null?c:"",onChange:p=>{const{value:m}=p.target;d==="number"?a.onChange(parseInt(m)):a.onChange(m)}}))}}),t==="node"&&i.createElement(Na,{pathToFieldValue:e})))},Da=e=>{var O;const{defaultValues:t,setControl:n,id:o,rightBarNeedsToRemount:s,remountRightBar:r}=e,a=v.exports.useRef(null);v.exports.useEffect(()=>{a.current&&a.current.addEventListener("focus",()=>{s&&r()},!0)},[]);const{type:c}=v.exports.useContext(Ne),l=L(),d=Tn({defaultValues:JSON.parse(JSON.stringify(t))}),{handleSubmit:u,formState:{errors:p},reset:m,control:f,getValues:g}=d;v.exports.useEffect(()=>{n(f)},[f,n]);const h=g();let{name:x,description:b,icon_link:E}=h;if([x,b,E].includes(void 0)&&"flow_node"in h){const{node_name:D,node_description:G,node_icon_link:De}=h.flow_node;x=D,b=G,E=De}const _=(O=S(D=>D.sidebarVisible))!=null?O:!0,I=D=>{D=g(),c==="template"&&l(je(JSON.parse(JSON.stringify(D)))),c==="node"&&l(M.updateNode(JSON.parse(JSON.stringify(D))))},P=()=>{c==="template"&&l(je(k(y({},g()),{delete:1})))};return i.createElement(Vn,y({},d),i.createElement(aa,{ref:a,onSubmit:u(I)},i.createElement(da,{shift:!_},!_&&i.createElement(wa,null,i.createElement(Ce,null)),i.createElement(ua,{src:E}),i.createElement(la,null,i.createElement(ia,null,x),i.createElement(ca,null,b))),c==="node"&&i.createElement(Ut,{id:o}),i.createElement(pa,{open:!0},i.createElement(ie,null,"Default settings"),i.createElement(_e,null,Object.entries(h).map(([D,G])=>(typeof G!="object"||G===null)&&!(D in He)?i.createElement(Zt,{key:D,path:[D]}):null))),Q(He).map(D=>h[D]?i.createElement(Ie,{RenderElement:Zt,key:D,obj:h[D],path:[D]}):null),Object.keys(p).length!==0&&i.createElement("div",null,i.createElement("pre",null,JSON.stringify(p,null,2))),i.createElement(ba,null,i.createElement(va,{type:"submit"},"Save"),i.createElement(ya,{type:"reset",onClick:()=>m()},"Reset"),i.createElement(xa,{type:"button",onClick:()=>P()},"Delete"))))},Ma=({setFormValues:e,control:t,remount:n,defaultValue:o})=>{const s=Fn({control:t,defaultValue:o}),[r,a]=v.exports.useState(!1),c=v.exports.useRef(null);return i.createElement("div",{onMouseLeave:()=>{},ref:c},i.createElement(It,{values:s,setValues:l=>{a(!0),e(l)}}))},me=zt(),Ne=v.exports.createContext({type:"template"}),Pa=v.exports.createContext({setFormValues:null}),Xt=({json:e,id:t})=>{const[n,o]=v.exports.useState(0),[s,r]=v.exports.useState(0),[a,c]=v.exports.useState(e),[l,d]=v.exports.useState(),[u,p]=v.exports.useState(!1),m=f=>{c(f),o(g=>g+1),p(!0)};return i.createElement(Pa.Provider,{value:{setFormValues:m}},i.createElement(ga,null,i.createElement(ra,null,i.createElement(Da,{key:`leftBar-${n}`,defaultValues:a,setControl:d,id:t,remountRightBar:()=>{p(!1),r(f=>f+1)},rightBarNeedsToRemount:u}),l&&i.createElement(Ma,{key:`rightBar-${s}`,remount:()=>{},setFormValues:m,control:l,defaultValue:a}))))},Ba=({id:e})=>{const t=S(n=>B(n).drawflow[e].data);return i.createElement(Ne.Provider,{value:{type:"node"}},i.createElement(Xt,{json:t,id:e}))},Aa=({id:e})=>{const t=S(n=>n.templates.find(({nodes_id:o})=>o===e));return t===void 0?i.createElement("div",null,"Loading..."):i.createElement(Ne.Provider,{value:{type:"template"}},i.createElement(Xt,{json:t,id:e}))};w.div`
  display: flex;
  align-items: normal;
  overflow-x: auto;

  &::-webkit-scrollbar-thumb {
    background-color: #2986f5;
  }

  &::-webkit-scrollbar {
    height: 5px;
  }
`;const La=w.div`
  flex: 1;
  order: -1;
  width: 0;
`,Oa=w.main`
  display: flex;
  position: relative;
`,Ta=w.div`
  //width: 100vw;
`,Va=()=>{const e=S(t=>t);return i.createElement(It,{values:e,setValues:()=>null})};w.button`
  white-space: nowrap;
  //display: inline-block;
  ${({selected:e})=>e&&$`
      font-weight: bold;
    `}
`;const Fa=()=>i.createElement(La,null,i.createElement(pr,null)),Ra=()=>{var s;L();const e=(s=S(r=>r.sidebarVisible))!=null?s:!0,t=S(r=>r.windowConfig.mainId),n=S(r=>r.windowConfig.id),o=S(r=>r.version);return t===V.templateNodeSettings?i.createElement(i.Fragment,null,i.createElement(Aa,{key:n,id:n})):t===V.nodeSettings?i.createElement(i.Fragment,null,i.createElement(Ba,{key:n,id:n})):t===V.mainFlow?i.createElement(Fa,{key:o}):t===V.codeEditor?i.createElement(i.Fragment,null,i.createElement("span",{style:{position:"absolute",zIndex:2,backgroundColor:"white",top:-8}},!e&&i.createElement(Ce,null)),i.createElement(Va,null)):null},ja=()=>{const e=S(t=>t.windowConfig.sideId);return e===U.flowSettings?i.createElement(gr,null):e===U.groupSettings?i.createElement(Dr,null):null},za=w.div`
  width: calc(100vw - 408px);
  //border-right: 2px solid lightgray;
`,Wa=()=>{const e=L();return v.exports.useEffect(()=>{e(ho()),e(Ve()),e(Re()),e(xo())},[]),i.createElement(Ta,null,i.createElement(za,null,i.createElement(ta,null),i.createElement(Oa,null,i.createElement(qr,null),i.createElement(Ra,null),i.createElement(ja,null))),i.createElement(hs,null))};Rn.render(i.createElement(v.exports.StrictMode,null,i.createElement(jn,{store:re},i.createElement(Wa,null))),document.getElementById("root"));
