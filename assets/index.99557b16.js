var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,i=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&a(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&a(e,n,t[n]);return e},l=(e,o)=>t(e,n(o)),c=(e,t,n)=>(a(e,"symbol"!=typeof t?t+"":t,n),n);import{l as d,c as u,D as p,u as m,a as h,r as g,R as f,C as w,A as v,P as y,s as E,W as x,h as b,b as _,M as k,d as S,T as C,g as I,e as M,f as N,i as P,j as D,S as T,I as O,k as L,m as j,p as A,n as V,o as B,q as R,t as z,v as F,w as W,x as $,_ as U,J as q,y as G,z as J,B as H,F as X,E as K,G as Y,H as Z,K as Q}from"./vendor.c3c2774c.js";var ee,te,ne,oe,re,se,ae,ie;!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}(),(te=ee||(ee={})).START="START",te.MIDDLE="MIDDLE",te.END="END",(oe=ne||(ne={})).Drawflow="drawflow",oe.Groups="groups",(se=re||(re={})).backgroundOpacity="backgroundOpacity",se.backgroundBlur="backgroundBlur",se.backgroundImageUrl="backgroundImageUrl",(ie=ae||(ae={})).in="in",ie.out="out";const le=e=>Object.keys(e);var ce,de,ue,pe;(de=ce||(ce={}))[de.mainFlow=0]="mainFlow",de[de.codeEditor=1]="codeEditor",de[de.templateNodeSettings=2]="templateNodeSettings",de[de.nodeSettings=3]="nodeSettings",(pe=ue||(ue={}))[pe.groupSettings=0]="groupSettings",pe[pe.flowSettings=1]="flowSettings",pe[pe.none=2]="none";const me=()=>(e,t,n)=>{if("value"in n);else if("get"in n){const e=n.get;n.get=function(){if(this.cache[t])return this.cache[t];const n=e.bind(this)();return this.cache[t]=n,n}}return n};var he=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,fe=(e,t,n,o)=>{for(var r,s=o>1?void 0:o?ge(t,n):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,n,s):r(s))||s);return o&&s&&he(t,n,s),s};class we{constructor(e,t){c(this,"id"),c(this,"flow"),c(this,"nodeState"),c(this,"spacingX",40),c(this,"spacingY",60),c(this,"state"),c(this,"cache",{}),this.id=e,this.flow=t,this.state=t.state,this.nodeState=this.state.drawflow[this.id]}get head(){return this.nodeState.head}get lane(){return this.nodeState.lane}get port(){return this.nodeState.port}get portInPos(){var e;return null==(e=this.state.ports.find((({nodeId:e,portId:t,type:n})=>e===this.id&&1===t&&n===ae.in)))?void 0:e.pos}get outPorts(){return this.state.ports.filter((({type:e,nodeId:t})=>this.id===t&&e===ae.out))}get parent(){var e;const t=null==(e=this.parentConnection)?void 0:e.startId;return t?this.flow.getNode(t):null}get parentConnection(){return this.state.connections.find((e=>{e||console.error({conn:e});const{endId:t,endPort:n}=e;return t===this.id&&1===n}))}get totalWidth(){return!1===this.nodeState.visible?0:Math.max(this.width+this.subnodesWidth,this.leftWidth+this.rightWidth)}get childrenTotalWidth(){const{out1:e}=this;if(!e.length)return 0;let t=0;return e.forEach((e=>{t+=e.totalWidth})),t+this.spacingX*(e.length-1)}get leftWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,n=this.width/2;if(!e.length)return n;const o=e[0].leftWidth,r=o+(t-o-e[e.length-1].rightWidth)/2;return Math.max(r,n)}get rightWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,n=this.width/2+this.subnodesWidth;if(!e.length)return n;const o=e[0].leftWidth,r=e[e.length-1].rightWidth,s=r+(t-o-r)/2;return Math.max(s,n)}get all2Successors(){const{subnodes:e,out1:t}=this,n=[...t];return e.forEach((e=>n.push(e))),this.out1.forEach((e=>n.push(e))),n}get allSuccessors(){const e=[...this.out1,...this.subnodes],t=[...e];return e.forEach((e=>t.push(...e.allSuccessors))),t}get outConnections(){return this.state.connections.filter((({startId:e})=>e===this.id))}get out1(){return this.children(1)}get prevDirectNodes(){const e=[];let t=this.parent;for(;t;)e.push(...t.subnodes.reverse()),e.push(t),t=t.parent;return e}get firstSubnode(){return this.children(2)[0]}get subnodes(){var e,t;return(null==(t=null==(e=this.firstSubnode)?void 0:e.flowLine)?void 0:t.flowLineNodes)||[]}get subnodesWidth(){return!1===this.nodeState.subnodesVisibility?0:this.subnodes.reduce(((e,t)=>e+t.width+this.spacingX),0)}get isSub(){return null!==this.complexParentNode}get complexParentNode(){const e=this.parent;return e?e.firstSubnode===this?e:e.complexParentNode:null}get flowLine(){const e=[this];let t=this,n=t.firstSubnode;for(;1===t.out1.length;)t=t.out1[0],e.push(t),n=n||t.firstSubnode;return t.out1.length>1?null:{flowLineNodes:e,hasSubnodes:n}}get height(){return this.state.drawflow[this.id].height}get width(){return this.state.drawflow[this.id].width}get pos(){return this.state.drawflow[this.id].pos}alignChildren(){const{out1:e}=this;this.update({isSub:!1,port:{out:2}});let t=this.pos.x-(this.leftWidth-this.width/2);for(const o of e){const e=t+(o.leftWidth-o.width/2);o.setPos({x:e,y:this.pos.y+this.height+this.spacingY}),!1!==o.nodeState.visible&&(t+=o.totalWidth+this.spacingX),o.alignChildren()}const{subnodes:n}=this;n.length&&(t=this.pos.x+this.width+this.spacingX,n.forEach((e=>{e.update({isSub:!0,port:{out:1}}),e.setPos({x:t,y:this.pos.y+(this.height/2-e.height/2)}),t+=e.width+this.spacingX})))}toggleVisibility(e){this.update({visible:e}),this.parentConnection&&(this.parentConnection.visible=e),this.outConnections.forEach((t=>{t.visible=e}))}toggleChildrenVisibility(){var e;const t=null==(e=this.nodeState.childrenVisibility)||e;this.update({childrenVisibility:!t});const{subnodes:n,allSuccessors:o}=this;o.forEach((e=>{n.includes(e)||e.toggleVisibility(!t)}))}toggleSubnodesVisibility(){var e;const t=null==(e=this.nodeState.subnodesVisibility)||e;this.update({subnodesVisibility:!t}),this.subnodes.forEach((e=>{e.toggleVisibility(!t)}))}children(e){return this.state.connections.filter((({startId:t,startPort:n})=>t===this.id&&n===e)).map((e=>this.flow.getNode(e.endId)))}setPos(e){const{pos:t}=this,{x:n,y:o}=e;this.flow.moveNode({nodeId:this.id,dx:n-t.x,dy:o-t.y})}putInCenter(e){const{width:t,height:n}=e;this.setPos({x:t/3,y:n/3})}update(e){const t=d.merge(this.nodeState,e);Object.assign(this.nodeState,t)}}fe([me()],we.prototype,"totalWidth",1),fe([me()],we.prototype,"childrenTotalWidth",1),fe([me()],we.prototype,"leftWidth",1),fe([me()],we.prototype,"rightWidth",1),fe([me()],we.prototype,"subnodesWidth",1);class ve{constructor(e){c(this,"state"),c(this,"nodes",{}),c(this,"distanceToConnect",100),c(this,"distanceToDisconnect",10),this.state=e;const{drawflow:t}=this.state;Object.keys(t).map((e=>this.nodes[Number(e)]=new we(Number(e),this)))}get heads(){return Object.entries(this.nodes).filter((([,e])=>!e.parent)).map((e=>e[1]))}getNode(e){const t=this.nodes[e];if(void 0===t)throw new Error(`Cannot get node with id: ${e}. Node is not present in flow array of nodes`);return t}align(){return this.setLaneNumbers(),this.heads.forEach(((e,t)=>{e.alignChildren()})),this.state.drawflow}alignAll(){const{drawflow:e,connections:t,ports:n}=this.state,o={drawflow:e,connections:t,ports:n};this.state.drawflow=new ve(JSON.parse(JSON.stringify(o))).align()}addConnection(e){let{startId:t,startPort:n,endId:o,endPort:r}=e;const s=this.getNode(o),a=this.getNode(t),i=2===n;if(s.parent||!1===a.nodeState.visible)return!1;const l=s.flowLine;if((i||a.isSub)&&(!l||l.hasSubnodes))return!1;let c=null;if(i&&a.subnodes.length){if(!1===a.nodeState.subnodesVisibility){t=a.subnodes[a.subnodes.length-1].id,n=1,this.state.connections.push({startId:t,startPort:n,endId:o,endPort:r,visible:!0});const{flowLineNodes:e}=l;return void e.forEach((e=>e.toggleVisibility(!1)))}c=a.subnodes[0]}if(a.isSub&&a.out1.length&&(c=a.out1[0]),null!==c){const e=this.state.connections.find((e=>e.startId===t&&e.startPort===n&&e.endId===c.id&&1===e.endPort)),o=this.state.connections.indexOf(e);this.state.connections.splice(o,1);const{flowLineNodes:r}=l,s=r[r.length-1];this.state.connections.push({startId:s.id,startPort:1,endId:c.id,endPort:1,visible:!0})}this.state.connections.push({startId:t,startPort:n,endId:o,endPort:r,visible:!0})}moveNode({dx:e,dy:t,nodeId:n}){this.state.drawflow[n].pos.x+=e,this.state.drawflow[n].pos.y+=t}dragNode({dx:e,dy:t,nodeId:n}){this.moveNode({dx:e,dy:t,nodeId:n}),this.toggleAvailablePortToConnect(n)}untieNodeIfFarAway(e){const t=this.getNode(e);if(t.parentConnection){const{startPort:e,endPort:n,startId:o,endId:r}=t.parentConnection,{pos:{x:s,y:a}}=this.state.ports.find((({portId:t,nodeId:n,type:r})=>n===o&&"out"===r&&t===e)),{pos:{x:i,y:l}}=this.state.ports.find((({portId:e,nodeId:t,type:o})=>t===r&&"in"===o&&e===n)),c=Math.hypot(s-i,a-l);if(Math.abs(c-t.spacingY)<this.distanceToDisconnect)return;const d=this.state.connections.indexOf(t.parentConnection);this.state.connections.splice(d,1)}}toggleAvailablePortToConnect(e){if(!this.state.config.drag)return;const t=this.getNode(e),n=t.head,o=t.portInPos;if(!o)return;let r=null;Object.entries(this.nodes).filter((([,e])=>e.head!==n&&!1!==e.nodeState.visible)).forEach((([t,n])=>{Number(t)!==e&&n.outPorts.forEach((e=>{const{pos:t}=e,n=Math.hypot(o.x-t.x,o.y-t.y);n<this.distanceToConnect&&(null===r||n<r.distance)&&(r={port:e,distance:n})}))})),this.state.portToConnect=null!==r?r.port:null}setLaneNumbers(){let e=this.heads;for(e.forEach((e=>e.update({head:e.id,lane:0})));e.length;){const t=[];e.forEach((e=>{let n=e.lane+1;const{subnodes:o,head:r}=e;if(void 0===r)return void console.error("head is undefined in setLaneNumbers");if(o.length)for(const t of o)t.update({lane:n++,head:r});const s=e.children(1);s.forEach((e=>e.update({head:r,lane:n}))),t.push(...s)})),e=t}this.heads.forEach((e=>{const{head:t}=e;for(let n=0,o=0,r=[e];r.length;++n)r=Object.values(this.nodes).filter((e=>e.lane===n&&e.head===t)),r.forEach((e=>{e.update({positionNumber:o++})}))}))}}const ye={nodeId:1,canvasDrag:!1,config:{drag:!1,connectionsLabelEnable:!1,canvasTranslate:{x:0,y:0},zoom:{value:1,max:2,min:.5,tick:.1}},drawflow:{},connections:[],connectionsLabel:{},ports:[],select:null,newPathDirection:null,modalType:null,editLock:!1,mouseBlockDragPos:{clientX:void 0,clientY:void 0}},Ee=(e,{payload:t})=>{const n=d.merge(e,t);le(n).forEach((t=>{e[t]=n[t]}))},xe=u({name:ne.Drawflow,initialState:ye,reducers:{setState:Ee,setEditLock:(e,{payload:t})=>{e.editLock=t},moveNode:(e,t)=>{new ve(e).moveNode(t.payload)},setMouseBlockDragPos:(e,{payload:t})=>{e.mouseBlockDragPos=t},unSelect:e=>{e.config.drag=!1,e.select=null},select:(e,{payload:t})=>{e.config.drag="node"===t.type,e.select=t},selectPort:(e,{payload:t})=>{const n=e.ports.find((({nodeId:e,portId:n,type:o})=>o===t.type&&n===t.portId&&e===t.nodeId));if(!n)return void console.error("Cannot find port to select in state.ports");const o=e.ports.indexOf(n);e.select={type:t.type,selectId:o}},moveCanvas:(e,{payload:{movementX:t,movementY:n}})=>{e.canvasDrag&&(e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=n)},canvasDrag:(e,{payload:t})=>{e.canvasDrag=t},canvasMouseMove:(e,{payload:{movementX:t,movementY:n,clientX:o,clientY:r}})=>{var s;if(e.clientCurrentMousePos={clientX:o,clientY:r},e.canvasDrag)e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=n;else if((null==(s=e.select)?void 0:s.type)===ae.out)e.newPathDirection={clientX:o,clientY:r};else if(e.config.drag&&e.select){const t=e.select.selectId,{clientX:n,clientY:s}=e.mouseBlockDragPos;e.mouseBlockDragPos={clientX:o,clientY:r};const a=e.config.zoom.value,i=(o-n)/a,l=(r-s)/a;e.drawflow[t].pos.x+=i,e.drawflow[t].pos.y+=l,new ve(e).untieNodeIfFarAway(t)}},canvasMouseUp:e=>{var t,n;const o=new ve(e);if(e.portToConnect&&(null==(t=e.select)?void 0:t.selectId)){const{nodeId:t,portId:n}=e.portToConnect,r=e.select.selectId,s=1;o.addConnection({startId:t,startPort:n,endId:r,endPort:s})}e.portToConnect=void 0,e.newPathDirection=null,e.canvasDrag=!1,e.config.drag=!1,(null==(n=e.select)?void 0:n.type)===ae.out&&(e.select=null)},updateNode:(e,{payload:t})=>{const n=t.this_node_unique_id;e.drawflow[n].data=t},deleteNode:e=>{const{connections:t,drawflow:n,ports:o,select:r}=e;if("node"!==(null==r?void 0:r.type))return;const{selectId:s}=r;let a=t.length;for(;a--;){const{endId:e,startId:n}=t[a];[n,e].includes(s)&&(t.splice(a,1),console.log(p(t)))}let i=o.length;for(;i--;){const{nodeId:e}=o[i];e===s&&o.splice(i,1)}delete n[s],e.select=null,console.log("GGG")},deletePath:e=>{const{connections:t,select:n}=e;"path"===(null==n?void 0:n.type)&&(console.log("delete"),t.splice(n.selectId,1))},load:(e,{payload:{drawflow:t,connections:n}})=>{Object.assign(e,ye),e.drawflow=t,e.nodeId=Math.max(...Object.keys(t).map(Number))+1,e.connections=n},portMouseUp:(e,{payload:{nodeId:t,portId:n,PortType:o}})=>{const{select:r}=e;if(o!==ae.in||!r)return;const s=e.ports[r.selectId],a=t,i=n,l=s.nodeId,c=s.portId;if(l===a)return;new ve(e).addConnection({startId:l,startPort:c,endId:a,endPort:i})},clear:()=>ye,pushPorts:(e,{payload:t})=>{if(0===t.length)return;const{nodeId:n}=t[0];e.ports=e.ports.filter((e=>e.nodeId!==n)),e.ports.push(...t)},zoom:(e,{payload:t})=>{const{zoom:n}=e.config,{value:o,max:r,min:s,tick:a}=n,i=o+(t?a:-a);i<=r&&i>=s&&(n.value=i),null===t&&(e.config.canvasTranslate={x:0,y:0},n.value=1)},nodeSize:(e,{payload:{height:t,width:n,id:o}})=>{e.drawflow[o].height=t,e.drawflow[o].width=n},toggleSubnodes:(e,{payload:{id:t}})=>{new ve(e).getNode(t).toggleSubnodesVisibility()},toggleChildren:(e,{payload:{id:t}})=>{new ve(e).getNode(t).toggleChildrenVisibility()},copyNode:e=>{var t;"node"===(null==(t=e.select)?void 0:t.type)&&(e.nodeToCopyId=e.select.selectId)}}}),be=xe.actions,_e=xe.reducer,ke=e=>e.flows[e.version],Se=()=>m(),Ce=h;function Ie(e,t){const[n,o]=g.exports.useState((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.log(n),t}}));return[n,t=>{try{const r=t instanceof Function?t(n):t;o(r),window.localStorage.setItem(e,JSON.stringify(r))}catch(r){console.log(r)}}]}const Me=["text","audio","video","file","image"];var Ne,Pe,De,Te;(Pe=Ne||(Ne={})).Text="text",Pe.Audio="audio",Pe.Video="video",Pe.File="file",Pe.Image="image",Pe.Empty="empty",Pe.Link="link",Pe.Switch="switch",Pe.Countdown="countdown",Pe.Delay="delay",Pe.HttpRequest="httpRequest",Pe.AllowUserToSendMessages="allowUserToSendMessages",Pe.DisallowUserToSendMessages="disallowUserToSendMessages",Pe.ShowTypingIndicator="showTypingIndicator",Pe.HideTypingIndicator="hideTypingIndicator",(Te=De||(De={})).In="incoming",Te.Out="outgoing";const Oe=()=>({type:Ne.Text,src:"",direction:De.Out,renderable:!0}),Le=()=>({type:Ne.Empty,src:"",direction:De.In,renderable:!1,flowNodeId:0});const je=(e=(()=>null),t=(()=>null),n=(()=>null),o=300)=>{const[r,s]=g.exports.useState(!1),a=g.exports.useRef(null),i=g.exports.useCallback((t=>{a.current=setTimeout((()=>{s(!0),e(t)}),o)}),[e,o]),l=g.exports.useCallback((e=>{a.current&&clearTimeout(a.current),r?t(e):n(e),s(!1)}),[n,r,t]);return{onMouseDown:e=>i(e),onTouchStart:e=>i(e),onMouseUp:e=>l(e),onTouchEnd:e=>l(e)}},Ae=()=>navigator.permissions.query({name:"microphone"}).then((e=>e.state)),Ve=()=>navigator.permissions.query({name:"camera"}).then((e=>e.state)),Be=e=>e.getTracks().forEach((e=>e.stop())),Re=async(e,t,n={audio:!0})=>{if(n.audio&&n.video&&!(await(async()=>{const e=await Ve(),t=await Ae();return"denied"!==e&&"denied"!==t||alert("Access to camera or microphone is denied. Please give permissions and try again"),"prompt"!==e&&"prompt"!==t||(alert("Please allow access to camera and microphone and try again"),navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then(Be)),"granted"===e&&"granted"===t})()))return null;if(n.audio&&!(await(async()=>{const e=await Ae();return"denied"===e&&alert("Access to microphone is denied. Please allow access and try again"),"prompt"===e&&(alert("Please allow access to microphone and try again"),navigator.mediaDevices.getUserMedia({audio:!0}).then(Be)),"granted"===e})()))return null;if(n.video&&!(await(async()=>{const e=await Ve();return"denied"===e&&alert("Access to camera is denied. Please allow access to camera and try again"),"prompt"===e&&(alert("Please allow access to camera and try again"),navigator.mediaDevices.getUserMedia({video:!0}).then(Be)),"granted"===e})()))return null;const o=[],r=await navigator.mediaDevices.getUserMedia(n);t(r);const s=new MediaRecorder(r);return s.ondataavailable=e=>{o.push(e.data)},s.onstop=()=>{const t=new Blob(o,{type:n.video?"video/webm":"audio/ogg; codecs=opus"});o.splice(0,o.length);const r=window.URL.createObjectURL(t);e(r)},s.start(),()=>{s.stop(),Be(s.stream)}},ze=()=>f.createElement(w,null,f.createElement(v,{src:"https://chatscope.io/storybook/react/static/media/akane.b135c3e3.svg",name:"Zoe",status:"available"}),f.createElement(w.Content,{userName:"Zoe",info:"Active 10 mins ago"})),Fe=({onValue:e})=>f.createElement(y,{style:{width:"99vw",margin:"auto",alignSelf:"center"},onSelect:t=>{"native"in t?e(t.native):console.error("Emoji not supported",t)},native:!0}),We=e=>f.createElement("svg",i({viewBox:"0 0 100 100"},e),f.createElement("path",{d:"M52 75.9V86h14c1.1 0 2 .9 2 2s-.9 2-2 2H34c-1.1 0-2-.9-2-2s.9-2 2-2h14V75.9c-13.4-1-24-12.3-24-25.9 0-1.1.9-2 2-2s2 .9 2 2c0 12.1 9.9 22 22 22s22-9.9 22-22c0-1.1.9-2 2-2s2 .9 2 2c0 13.7-10.6 24.9-24 25.9zM65 25v25c0 8.3-6.7 15-15 15s-15-6.7-15-15V25c0-8.3 6.7-15 15-15s15 6.7 15 15zm-4 0c0-6.1-4.9-11-11-11s-11 4.9-11 11v25c0 6.1 4.9 11 11 11s11-4.9 11-11V25z"})),$e=e=>f.createElement("svg",l(i({},e),{viewBox:"0 0 16 16"}),f.createElement("g",{transform:"translate(0,-1036.3622)"},f.createElement("path",{d:"M 8 0 C 3.5876443 0 0 3.5877 0 8 C 0 12.4124 3.5876443 16 8 16 C 12.412356 16 16 12.4124 16 8 C 16 3.5877 12.412356 0 8 0 z M 8 1 C 11.871916 1 15 4.1281 15 8 C 15 11.8719 11.871916 15 8 15 C 4.1280844 15 1 11.8719 1 8 C 1 4.1281 4.1280844 1 8 1 z M 6 5 A 1.0000094 1.0000066 0 0 0 5 6 A 1.0000094 1.0000066 0 0 0 6 7 A 1.0000094 1.0000066 0 0 0 7 6 A 1.0000094 1.0000066 0 0 0 6 5 z M 10 5 A 1.0000094 1.0000066 0 0 0 9 6 A 1.0000094 1.0000066 0 0 0 10 7 A 1.0000094 1.0000066 0 0 0 11 6 A 1.0000094 1.0000066 0 0 0 10 5 z M 3.4921875 8.0351562 A 0.50004997 0.50004997 0 0 0 3 8.5429688 C 2.9999999 10.301869 3.9584546 11.925081 5.5039062 12.800781 C 7.0493581 13.676481 8.9506417 13.676481 10.496094 12.800781 C 12.041546 11.925081 13 10.301869 13 8.5429688 A 0.50004997 0.50004997 0 1 0 12 8.5429688 C 12 9.9394688 11.242844 11.229541 10.003906 11.931641 C 8.7649684 12.633641 7.2350319 12.633641 5.9960938 11.931641 C 4.7571555 11.229541 3.9999999 9.9394688 4 8.5429688 A 0.50004997 0.50004997 0 0 0 3.4921875 8.0351562 z ",transform:"translate(0,1036.3622)",id:"circle5164"}))),Ue=e=>f.createElement("svg",l(i({},e),{viewBox:"0 0 48 48"}),f.createElement("path",{d:"M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"})),qe=e=>f.createElement("svg",l(i({},e),{viewBox:"0 0 30 30"}),f.createElement("path",{strokeMiterlimit:"10",strokeWidth:"2",d:"M12 8v13M18 8v13"})),Ge=e=>f.createElement("svg",l(i({},e),{viewBox:"0 0 16 16"}),f.createElement("path",{d:"M6.5 2v1h-3v1h9V3h-3V2h-3zm-2 3v9h7V5h-7zm1 1h1v7h-1V6zm2 0h1v7h-1V6zm2 0h1v7h-1V6z",overflow:"visible"})),Je=e=>f.createElement("svg",l(i({},e),{viewBox:"0 0 45.187 45.188"}),f.createElement("g",null,f.createElement("g",null,f.createElement("path",{d:"M0,18.961h4.842V6.052c0-0.446,0.362-0.807,0.807-0.807H18.56V0.404H5.649C2.535,0.404,0,2.939,0,6.053V18.961z"}),f.createElement("path",{d:"M39.539,0.403h-12.91v4.841h12.91c0.445,0,0.807,0.362,0.807,0.807v12.91h4.842V6.052\n\t\t\tC45.189,2.938,42.654,0.403,39.539,0.403z"}),f.createElement("path",{d:"M4.842,39.136V26.225H0v12.911c0,3.113,2.535,5.648,5.649,5.648H18.56v-4.842H5.649\n\t\t\tC5.204,39.942,4.842,39.58,4.842,39.136z"}),f.createElement("path",{d:"M40.346,39.136c0,0.446-0.362,0.807-0.807,0.807H26.628v4.842h12.91c3.115,0,5.648-2.536,5.648-5.65V26.225h-4.842\n\t\t\tL40.346,39.136L40.346,39.136z"}),f.createElement("circle",{cx:"22.594",cy:"22.594",r:"6.455"})))),He=e=>f.createElement("svg",l(i({},e),{viewBox:"0 0 24 24"}),f.createElement("path",{d:"M8.8916,21.85352A6.25,6.25,0,0,1,4.47168,11.18457l7.95508-7.95508A4.49986,4.49986,0,0,1,18.791,9.59277L11.89648,16.4873a2.8164,2.8164,0,0,1-3.88964,0,2.75018,2.75018,0,0,1,.001-3.88867l5.126-5.12695a.99989.99989,0,1,1,1.41406,1.41406l-5.126,5.127a.74971.74971,0,0,0,0,1.06054.76811.76811,0,0,0,1.06054,0L17.377,8.17871a2.50263,2.50263,0,0,0,0-3.53516,2.5591,2.5591,0,0,0-3.53613,0L5.88574,12.59863a4.24989,4.24989,0,1,0,6.01074,6.00977l6.1875-6.18652a.99989.99989,0,1,1,1.41407,1.41406l-6.1875,6.18652A6.20551,6.20551,0,0,1,8.8916,21.85352Z"})),Xe=e=>f.createElement("svg",l(i({},e),{viewBox:"0 0 32 32"}),f.createElement("path",{fill:"#8c9eff",d:"M26,3V29a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9a1,1,0,0,1,.23-.64l5-6A1,1,0,0,1,12,2H25A1,1,0,0,1,26,3Z"}),f.createElement("path",{fill:"#5f7cf9",d:"M14,2v8a1,1,0,0,1-1,1H6V9a1,1,0,0,1,.23-.64l5-6A1,1,0,0,1,12,2Z"})),Ke=e=>f.createElement("svg",l(i({},e),{stroke:"#000",viewBox:"0 0 20 22"}),f.createElement("g",{fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",transform:"translate(1 1)"},f.createElement("path",{d:"M0 15v3a2 2 0 002 2h14a2 2 0 002-2v-3M5 10l4 4 4-4M9 0v14"}))),Ye=e=>f.createElement("svg",l(i({},e),{viewBox:"0 0 24 24"}),f.createElement("path",{d:"M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z"})),Ze=E.span`
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
`,Qe=({setFile:e})=>f.createElement(Ze,null,f.createElement("label",null,f.createElement("input",{type:"file",onChange:t=>{var n;if(!(null==(n=t.target.files)?void 0:n.length))return void console.error("No files chosen!");const o=t.target.files[0];t.target.value="",e(o)},style:{display:"none"}}),f.createElement(He,null))),et={},tt=({src:e})=>{const t=g.exports.useRef(null),n=g.exports.useRef(null),[o,r]=g.exports.useState(!1),[s,a]=g.exports.useState("00:00");return g.exports.useEffect((()=>(n.current=x.create({container:t.current,barWidth:1.7,barHeight:1,barMinHeight:1,barGap:1,height:30,progressColor:"orange",waveColor:"red",responsive:!0,cursorColor:"transparent"}),n.current.load(e),console.log(n.current.getDuration()),n.current.on("finish",(()=>{r(!1)})),n.current.on("audioprocess",(()=>{const e=n.current.getCurrentTime();let t=new Date(1e3*e).toISOString().substr(11,8);t.startsWith("00:")&&(t=t.slice(3)),a(t)})),n.current.on("ready",(()=>{console.log("WaveSurfer ready!");const e=n.current.getDuration();let t=new Date(1e3*e).toISOString().substr(11,8);t.startsWith("00:")&&(t=t.slice(3)),a(t)})),()=>{var e;return null==(e=n.current)?void 0:e.destroy()})),[e]),f.createElement("div",{className:"messageAudio"},f.createElement("div",{className:"playButtonWrapper"},o?f.createElement(qe,{onClick:()=>{var e;null==(e=n.current)||e.pause(),r(!1)},className:"pauseButton"}):f.createElement(Ue,{onClick:()=>{var e;null==(e=n.current)||e.play(),r(!0)},className:"playButton"})),f.createElement("div",{className:"wavesurfer",ref:t}),f.createElement("span",{className:"audioDuration"},s))};et[Ne.Audio]=tt;const nt=({src:e,file:t})=>{void 0===t&&console.error("`file` is not defined, component MessageFile");const{name:n,size:o,type:r}=null!=t?t:{};return f.createElement("div",{className:"MessageFile"},f.createElement(Xe,{className:"fileButton"}),f.createElement("div",{className:"info"},f.createElement("div",null,null!=n?n:"Unknown name"),f.createElement("div",{className:"details"},f.createElement("span",null,null!=o?o:"Unknown size"),f.createElement("span",null,null!=r?r:"Unknown type"))),f.createElement("a",{href:e,download:!0},f.createElement(Ke,{className:"downloadButton"})))};et[Ne.File]=nt;const ot=({src:e})=>e?f.createElement("div",{className:"mediaPreviewContainer"},f.createElement("img",{src:e,alt:"Selected by user"})):null;et[Ne.Image]=({src:e})=>f.createElement("img",{className:"messageImage",src:e,alt:"Message content"});et[Ne.Text]=({src:e})=>f.createElement("div",null,b.htmlToText(e));et[Ne.Video]=({src:e})=>{const t=g.exports.useRef(null);return f.createElement("video",{onClick:()=>{const e=t.current;e.paused?e.play().then():e.pause()},className:"messageVideo",ref:t,src:e})};et[Ne.Delay]=e=>{const{id:t,flowNodeId:n,executed:o,running:r,delay:s}=e,{actions:a}=Bt(),i=st(n);return g.exports.useEffect((()=>{if(o||r)return;a.setState({messages:{[t]:{running:!0}}}),console.log("Execute");(async()=>{var e;await(e=s,new Promise((t=>setTimeout(t,e))))})().then((()=>{a.setState({messages:{[t]:{running:!1,renderable:!1,executed:!0}}}),i()}))}),[a,o,n,s,i,t,r]),null};et[Ne.Switch]=e=>{const{id:t,flowNodeId:n}=e,{actions:o,flow:r}=Bt(),s=r.getNode(n).out1;return f.createElement("div",null,s.map(((e,t)=>f.createElement("button",{key:t,onClick:()=>(e=>{o.appendMessageNode(l(i({},Le()),{flowNodeId:e.out1[0].id}))})(e)},e.nodeState.data.flow_node.node_name))))};et[Ne.Countdown]=e=>{const{id:t,flowNodeId:n,executed:o,running:r,duration:s}=e,{actions:a}=Bt(),i=st(n);return g.exports.useEffect((()=>{o||r||a.setState({messages:{[t]:{running:!0}}})}),[a,o,n,i,t,r]),f.createElement(_.exports.CountdownCircleTimer,{isPlaying:!0,duration:s,colors:[["#004777",.33],["#F7B801",.33],["#A30000",.33]],onComplete:()=>{a.setState({messages:{[t]:{running:!1,executed:!0}}}),i()}},(({remainingTime:e})=>e))};const rt=e=>{const{flowNodeId:t,executed:n}=e,{flow:o,actions:r}=Bt();let{type:s}=e,a={};if(t){const e=o.state.drawflow[t].data.node_object_lists;if(!Object.values(Ne).includes(e.type))throw new Error("Invalid type of node");s=e.type,a=e}const l=st(t);g.exports.useEffect((()=>{!n&&Me.includes(s)&&(r.setState({messages:{[e.id]:{executed:!0}}}),l()),a&&(["executed","running","as","flowNodeId"].forEach((e=>{if(e in a)throw new Error(`Key ${e} is used internally and not allowed in node parameters`)})),r.setState({messages:{[e.id]:a}}))}),[]);const c=et[s];return f.createElement(c,i({},i(i({},e),a)))},st=e=>{const{actions:t,flow:n}=Bt();return g.exports.useCallback((()=>{var o;const r=null==(o=n.getNode(e).out1[0])?void 0:o.id;r&&t.appendMessageNode(l(i({},Le()),{flowNodeId:r}))}),[t,n,e])},at=({messages:e})=>{const t=[];return Object.entries(e).forEach((([e,n])=>{if(!n.renderable)return void t.push(f.createElement(rt,l(i({},n),{key:e,as:k})));const o=f.createElement("span",{className:"messageSide"},f.createElement("span",{className:"sentTime"},"10:42 PM"),f.createElement("span",{className:"marks"},f.createElement("span",null,"✓"),f.createElement("span",null,"✓")));t.push(f.createElement(k,{className:n.type+"_message",model:{direction:n.direction},key:e},f.createElement(k.CustomContent,null,f.createElement(rt,i({},n)),o)))})),f.createElement(S,{typingIndicator:f.createElement(C,{content:"Zoe is typing"})},t.map((e=>e)))},it=e=>{const t=e.target;t.paused?t.play().then():t.pause()},lt=({src:e,stream:t})=>{const n=g.exports.useRef(null);return g.exports.useEffect((()=>{const{current:o}=n;o&&(t?(o.srcObject=t,o.muted=!0,console.log("srcObject set")):e&&(o.srcObject=null,o.src=e,o.muted=!1,o.play().then()))}),[e,t]),f.createElement("div",{className:"mediaPreviewContainer"},f.createElement("video",{autoPlay:!0,className:"videoPreview",ref:n,onClick:it}))},ct=E.div`
  background: 0;
  display: grid;
  place-items: center;
  height: 2em;
  margin-right: 0.5em;

  svg {
    height: 90%;
    cursor: pointer;
  }
`,dt=e=>f.createElement(ct,null,f.createElement(Ye,i({},e)));var ut,pt;(pt=ut||(ut={})).BARS="bars",pt.BARS_BLOCKS="bars blocks",pt.BIG_BARS="big bars",pt.CUBES="cubes",pt.DUAL_BARS="dualbars",pt.DUAL_BARS_BLOCKS="dualbars blocks",pt.FIREWOKS="fireworks",pt.FLOWER="flower",pt.FLOWER_BLOCKS="flower blocks",pt.ORBS="orbs",pt.RING="ring",pt.RINGS="rings",pt.ROUND_WAVE="round wave",pt.SHOCKWAVE="shockwave",pt.SHINE="shine",pt.SHINE_RINGS="shine rings",pt.STAR="star",pt.STATIC="static",pt.STITCHES="stitches",pt.WAVE="wave",pt.WEB="web";var mt=ut;class ht extends Error{constructor(e){super(`The required generator "${e}" does not exist, please use one of the following:\n\n${Object.keys(mt).map((e=>`- "${mt[e]}"`)).join("\n")}`),this.name="InvalidGeneratorError"}}const gt=(e,t)=>{const n=`${t}.${e}`;return ft(window,n,{}),I(window,n)},ft=(e,t,n)=>{M(e,t)||N(e,t,n)},wt=e=>{(Array.isArray(e)?e:[e]).forEach((e=>{if(!Object.keys(mt).map((e=>mt[e])).includes(e))throw new ht(e)}))},vt=e=>{e&&e.getContext("2d").clearRect(0,0,e.width,e.height)};const yt=e=>e*Math.PI/180,Et=([e,t],[n,o],r)=>{const s=yt(r);return[Math.cos(s)*(e-n)-Math.sin(s)*(t-o)+n,Math.sin(s)*(e-n)+Math.cos(s)*(t-o)+o]},xt=(e,t,n,o,r,s)=>{const a=Math.sqrt((n-e)**2+(o-t)**2),i=s?r/a:(a-r)/a;return[e+i*(n-e),t+i*(o-t)]};class bt{constructor(e){this.ctx=null,this.ctx=e}mutateData(e,t,n=null){if("mirror"===t){let t=[];for(let n=0;n<e.length;n+=2)t.push(e[n]);return t=[...t,...t.reverse()],t}if("shrink"===t){n<1&&(n=e.length*n);const t=[],o=Math.floor(e.length/n);for(let r=1;r<=n;r++){const n=e.slice(r*o,r*o+o),s=n[Math.floor(n.length/2)];t.push(s)}return t}if("split"===t){const t=Math.floor(e.length/n),o=[];let r=[],s=0;for(let a=0;a<=t*n;a++)s===t&&(o.push(r),r=[],s=0),r.push(e[a]),s++;return o}if("scale"===t){let t=n/255;return n<=3&&n>=0&&(t=n),e.map((e=>e*t))}if("organize"===t)return{base:e.slice(60,120),vocals:e.slice(120,255),mids:e.slice(255,2e3)};if("reverb"===t){const t=[];return e.forEach(((n,o)=>{t.push(n-(e[o+1]||0))})),t}if("amp"===t){const t=[];return e.forEach((e=>{t.push(e*(n+1))})),t}if("min"===t){const t=[];return e.forEach((e=>{e<n&&(e=n),t.push(e)})),t}}getPoints(e,t,[n,o],r,s,a){const{offset:l,rotate:c,customOrigin:d}=i({offset:0,rotate:0,customOrigin:[]},a),u={start:[],end:[]};if("circle"===e){const e=yt(360/r),a=t/2;for(let t=1;t<=r;t++){const r=e*t,i=s[t-1],d=s[t-1]*(l/100);let p=n+(a-d)*Math.cos(r),m=o+(a-d)*Math.sin(r);const h=Et([p,m],[n,o],c);u.start.push(h),p=n+(a-d+i)*Math.cos(r),m=o+(a-d+i)*Math.sin(r);const g=Et([p,m],[n,o],c);u.end.push(g)}return u}if("line"===e){const e=t/r;n=d[0]||n,o=d[1]||o;for(let t=0;t<=r;t++){const r=c,a=s[t]*(l/100),i=Et([n+t*e,o-a],[n,o],r);u.start.push(i);const d=Et([n+t*e,o+s[t]-a],[n,o],r);u.end.push(d)}return u}}drawCircle([e,t],n,o){const{color:r,lineColor:s}=i({lineColor:this.ctx.strokeStyle},o);this.ctx.beginPath(),this.ctx.arc(e,t,n/2,0,2*Math.PI),this.ctx.strokeStyle=s,this.ctx.stroke(),this.ctx.fillStyle=r,r&&this.ctx.fill()}drawSquare([e,t],n,o){this.drawRectangle([e,t],n,n,o)}drawRectangle([e,t],n,o,r){const{color:s,lineColor:a,radius:l,rotate:c}=i({lineColor:this.ctx.strokeStyle,radius:0,rotate:0},r);this.ctx.beginPath(),this.ctx.moveTo(e+l,t);const d=Et([e+o,t],[e,t],c),u=Et([e+o,t+n],[e,t],c);this.ctx.arcTo(d[0],d[1],u[0],u[1],l);const p=Et([e+o,t+n],[e,t],c),m=Et([e,t+n],[e,t],c);this.ctx.arcTo(p[0],p[1],m[0],m[1],l);const h=Et([e,t+n],[e,t],c),g=Et([e,t],[e,t],c);this.ctx.arcTo(h[0],h[1],g[0],g[1],l);const f=Et([e,t],[e,t],c),w=Et([e+o,t],[e,t],c);this.ctx.arcTo(f[0],f[1],w[0],w[1],l),this.ctx.closePath(),this.ctx.strokeStyle=a,this.ctx.stroke(),this.ctx.fillStyle=s,s&&this.ctx.fill()}drawLine([e,t],[n,o],r){const{lineColor:s}=i({lineColor:this.ctx.strokeStyle},r);this.ctx.beginPath(),this.ctx.moveTo(e,t),this.ctx.lineTo(n,o),this.ctx.strokeStyle=s,this.ctx.stroke()}drawPolygon(e,t){const{color:n,lineColor:o,radius:r,close:s}=i({lineColor:this.ctx.strokeStyle,radius:0,close:!1},t);let a,l;r>0&&(e=((e,t)=>{const n=e.length,o=new Array(n);for(let r=0;r<n;r++){let s=r-1,a=r+1;s<0&&(s=n-1),a==n&&(a=0);const i=e[s],l=e[r],c=e[a],d=xt(i[0],i[1],l[0],l[1],t,!1),u=xt(l[0],l[1],c[0],c[1],t,!0);o[r]=[d[0],d[1],l[0],l[1],u[0],u[1]]}return o})(e,r));const c=e.length;for(a=0;a<c;a++)l=e[a],0==a?(this.ctx.beginPath(),this.ctx.moveTo(l[0],l[1])):this.ctx.lineTo(l[0],l[1]),r>0&&this.ctx.quadraticCurveTo(l[2],l[3],l[4],l[5]);s&&this.ctx.closePath(),this.ctx.strokeStyle=o,this.ctx.stroke(),this.ctx.fillStyle=n,n&&this.ctx.fill()}}const _t={stroke:1,colors:["#d92027","#ff9234","#ffcd3c","#35d0ba"],type:mt.BARS,globalAccessKey:"$wave",getGlobal:(e,t)=>{const{globalAccessKey:n}=_t;return gt(e,n),window[n][e][t]},setGlobal:(e,t,n)=>{const o=_t.globalAccessKey;let r=_t.getGlobal(e,t);return r||(ft(window[o][e],t,n),r=window[o][e][t]),r}};class kt extends Error{constructor(e){super(` Could not find the canvas with id "${e}"`),this.name="CanvasNotFoundError"}}const St={[mt.BARS]:e=>{const{data:t,options:n,ctx:o,h:r,w:s}=e,a=r/255,i=s/64,l=Math.floor(64/n.colors.length);for(let c=1;c<=64;c++){const e=t[c]*a,s=i*c;o.moveTo(s,r),o.lineTo(s,r-e),c%l==0&&(o.strokeStyle=n.colors[c/l-1],o.stroke(),o.beginPath())}},[mt.BARS_BLOCKS]:e=>{const{data:t,options:n,ctx:o,h:r,w:s}=e,a=r/255,i=s/64;for(let l=0;l<64;l++){let e=t[l];e*=a;const n=i*l;o.rect(n,r,i,-e)}o.fillStyle=n.colors[1]||n.colors[0],o.stroke(),o.fill()},[mt.BIG_BARS]:e=>{const{options:t,ctx:n,h:o,w:r}=e;let{data:s}=e;const{colors:a}=t,i=new bt(n);s=i.mutateData(s,"organize").vocals,s=i.mutateData(s,"shrink",10),s=i.mutateData(s,"scale",o),s=i.mutateData(s,"amp",1);const l=i.getPoints("line",r,[0,o/2],s.length,s,{offset:50});let c=0;const d=Math.ceil(s.length/a.length);l.start.forEach(((e,t)=>{(t+1)%d==0&&c++,i.drawRectangle(e,s[t],r/s.length,{color:a[c]})}))},[mt.CUBES]:e=>{const{options:t,ctx:n,h:o,w:r}=e;let{data:s}=e;const{colors:a}=t,i=new bt(n);s=i.mutateData(s,"organize").base,s=i.mutateData(s,"shrink",20).slice(0,19),s=i.mutateData(s,"scale",o);const l=i.getPoints("line",r,[0,o],s.length,s),c=r/20-5;let d=0;l.start.forEach(((e,t)=>{const n=Math.ceil(s[t]/c),r=(o-o/c*5)/c,l=Math.ceil(r/a.length);for(let o=1;o<=n;o++){const t=[e[0],e[1]-c*o-5*o];i.drawSquare(t,c,{color:a[d],lineColor:"black"}),o%l==0&&(d++,d>=a.length&&(d=a.length-1))}d=0}))},[mt.DUAL_BARS]:e=>{const{data:t,options:n,ctx:o,h:r,w:s}=e,a=r/255,i=s/128,l=Math.floor(128/n.colors.length);for(let c=1;c<=128;c++){let e=t[c];e+=5,e*=a;const s=i*c,d=r/2+e/2;if(o.moveTo(s,d),o.lineTo(s,d-e),c%l==0){const e=c/l-1;o.strokeStyle=n.colors[e],o.stroke(),o.beginPath()}}},[mt.DUAL_BARS_BLOCKS]:e=>{const{data:t,options:n,ctx:o,h:r,w:s}=e,a=r/255,i=s/50;for(let l=0;l<=50;l++){let e=t[l];e*=a;const n=i*l;o.rect(n,r/2+e/2,i,-e)}n.colors[1]&&(o.fillStyle=n.colors[1],o.fill()),o.stroke()},[mt.FIREWOKS]:e=>{const{options:t,ctx:n,h:o,w:r}=e,{colors:s}=t,a=new bt(n);let{data:i}=e;i=a.mutateData(i,"shrink",200).slice(0,120),i=a.mutateData(i,"mirror"),i=a.mutateData(i,"scale",o/4+o/4*.35);const l=a.getPoints("circle",o/2,[r/2,o/2],i.length,i,{offset:35,rotate:270});l.start.forEach(((e,t)=>{a.drawLine(e,l.end[t])})),a.drawPolygon(l.start,{close:!0}),l.end.forEach((e=>{a.drawCircle(e,.01*o,{color:s[0]})}))},[mt.FLOWER]:e=>{const{data:t,options:n,ctx:o,h:r,w:s}=e,a=r/4,i=a/2,l=s/2,c=r/2,d=(a-i)/255,u=2.8125*Math.PI/180,p=Math.floor(128/n.colors.length);for(let m=1;m<=128;m++){const e=(t[m]+5)*d,r=m*u,s=l+(a-(e-i))*Math.cos(r),h=c+(a-(e-i))*Math.sin(r);o.moveTo(s,h);const g=l+(a+e)*Math.cos(r),f=c+(a+e)*Math.sin(r);if(o.lineTo(g,f),m%p==0){const e=m/p-1;o.strokeStyle=n.colors[e],o.stroke(),o.beginPath()}}o.stroke()},[mt.FLOWER_BLOCKS]:e=>{const{data:t,options:n,ctx:o,h:r,w:s}=e,a=r/4,i=s/2,l=r/2,c=a/255,d=360/56*Math.PI/180;for(let u=1;u<=56;u++){const e=t[u]*c,n=u*d,r=i+(a-e/2)*Math.cos(n),s=l+(a-e/2)*Math.sin(n);o.moveTo(r,s);const p=i+(a+e)*Math.cos(n),m=l+(a+e)*Math.sin(n);o.lineTo(p,m);const h=i+(a+e)*Math.cos(n+d),g=l+(a+e)*Math.sin(n+d);o.lineTo(h,g);const f=i+(a-e/2)*Math.cos(n+d),w=l+(a-e/2)*Math.sin(n+d);o.lineTo(f,w),o.lineTo(r,s)}n.colors[1]&&(o.fillStyle=n.colors[1],o.fill()),o.stroke()},[mt.ORBS]:e=>{const{options:t,ctx:n,h:o,w:r}=e;let{data:s}=e;const{colors:a}=t,i=new bt(n);s=i.mutateData(s,"organize").mids,s=i.mutateData(s,"split",2)[0],s=i.mutateData(s,"shrink",100),s=i.mutateData(s,"mirror"),s=i.mutateData(s,"scale",o),s=i.mutateData(s,"amp",.75);const l=i.getPoints("line",r,[0,o/2],s.length,s,{offset:50});l.start.forEach(((e,t)=>{i.drawLine(e,l.end[t],{lineColor:a[0]}),i.drawCircle(e,.01*o,{color:a[1]||a[0]}),i.drawCircle(l.end[t],.01*o,{color:a[1]||a[0]})}))},[mt.RING]:e=>{const{data:t,options:n,ctx:o,h:r,w:s}=e,a=s/2,i=r/2,l=(r-10)/2,c=(l-l/5)/255,d=2.4*Math.PI/180;o.arc(a,i,l,0,2*Math.PI,!0);const u=a+(l-t[0]*c)*Math.cos(0),p=i+(l-t[0]*c)*Math.sin(0);o.moveTo(u,p);let m=0;for(let h=0;h<150;h++){m+=1,h>=75&&(m-=2);let e=t[m];e*=c;const n=h*d,r=a+(l-e)*Math.cos(n),s=i+(l-e)*Math.sin(n);o.lineTo(r,s),o.arc(r,s,2,0,2*Math.PI)}o.lineTo(u,p),o.stroke(),o.fillStyle=n.colors[1]||"#fff000",o.fill()},[mt.RINGS]:e=>{const{options:t,ctx:n,h:o,w:r}=e;let{data:s}=e;const a=o<r?o:r,i=new bt(n),{colors:l}=t;s=i.mutateData(s,"organize"),s=[s.mids,s.vocals],s[0]=i.mutateData(s[0],"scale",a/4),s[1]=i.mutateData(s[1],"scale",a/8),s[0]=i.mutateData(s[0],"shrink",.2),s[0]=i.mutateData(s[0],"split",2)[0],s[0]=i.mutateData(s[0],"reverb"),s[1]=i.mutateData(s[1],"reverb");const c=i.getPoints("circle",a/2,[r/2,o/2],s[0].length,s[0]),d=i.getPoints("circle",a/4,[r/2,o/2],s[1].length,s[1]);i.drawPolygon(c.end,{close:!0,radius:4,lineColor:l[0],color:l[1]}),i.drawPolygon(d.end,{close:!0,radius:4,lineColor:l[2],color:l[3]});const u=(a/4+a/2)/2,p=s[1]=i.mutateData(s[1],"scale",a/4-a/2),m=i.getPoints("circle",u,[r/2,o/2],s[1].length,p);m.start.forEach(((e,t)=>{i.drawLine(e,m.end[t],{lineColor:l[4]||l[2]})}))},[mt.ROUND_WAVE]:e=>{const{data:t,options:n,ctx:o,h:r,w:s}=e,a=r/4,i=s/2,l=r/2,c=a/255,d=3.6*Math.PI/180,u=i+(a+0)*Math.cos(0),p=l+(a+0)*Math.sin(0);o.moveTo(u,p);for(let m=1;m<=100;m++){const e=t[350%m]*c,n=m*d,r=i+(a+e)*Math.cos(n),s=l+(a+e)*Math.sin(n);o.lineTo(r,s)}o.closePath(),o.stroke(),n.colors[1]&&(o.fillStyle=n.colors[1],o.fill())},[mt.SHOCKWAVE]:e=>{const{options:t,ctx:n,h:o,w:r}=e;let{data:s}=e;const{colors:a}=t,i=new bt(n);s=i.mutateData(s,"shrink",300),s=i.mutateData(s,"scale",o/2),s=i.mutateData(s,"split",4).slice(0,3);let l=0;s.forEach((e=>{const t=i.getPoints("line",r,[0,o/2],e.length,e);i.drawPolygon(t.end,{lineColor:a[l],radius:.015*o});const n=i.getPoints("line",r,[0,o/2],e.length,e,{offset:100});i.drawPolygon(n.start,{lineColor:a[l],radius:.015*o}),l++}))},[mt.SHINE]:e=>{const{data:t,options:n,ctx:o,h:r,w:s}=e,a=r/4,i=s/2,l=r/2,c=a/255,d=360/56*Math.PI/180;for(let u=1;u<=56;u++){const e=t[u]*c,n=u*d,r=i+(a-e/2)*Math.cos(n),s=l+(a-e/2)*Math.sin(n);o.moveTo(r,s);const p=i+(a+e)*Math.cos(n),m=l+(a+e)*Math.sin(n);o.lineTo(p,m);const h=i+(a+e)*Math.cos(n+d),g=l+(a+e)*Math.sin(n+d);o.lineTo(h,g);const f=i+(a-e/2)*Math.cos(n+d),w=l+(a-e/2)*Math.sin(n+d);o.lineTo(f,w),o.lineTo(r,s)}n.colors[1]&&(o.fillStyle=n.colors[1],o.fill()),o.stroke()},[mt.SHINE_RINGS]:e=>{const{options:t,ctx:n,h:o,w:r}=e;let{data:s}=e;const{colors:a}=t,i=new bt(n),l=o<r?o:r;s=i.mutateData(s,"organize"),s.vocals=i.mutateData(s.vocals,"scale",l/2/2),s.base=i.mutateData(s.base,"scale",l/2/2);const c=i.getPoints("circle",l/2,[r/2,o/2],s.vocals.length,s.vocals),d=i.getPoints("circle",l/2,[r/2,o/2],s.vocals.length,s.vocals,{offset:100}),u=i.getPoints("circle",l/2,[r/2,o/2],s.base.length,s.base,{offset:100});c.start.forEach(((e,t)=>{i.drawLine(e,c.end[t],{lineColor:a[0]})})),i.drawPolygon(d.start,{close:!0,lineColor:a[1],color:a[3],radius:5}),i.drawPolygon(u.start,{close:!0,lineColor:a[2],color:a[4],radius:5})},[mt.STAR]:e=>{const{data:t,options:{colors:n},ctx:o,h:r,w:s}=e,a=r/4,i=a/4,l=s/2,c=r/2,d=(a-i-35)/255,u=3*Math.PI/180,p=[],m=[];for(let h=1;h<=120;h++){const e=t[200%h]*d,n=h*u,r=l+(a-e+i)*Math.cos(n),s=c+(a-e+i)*Math.sin(n);o.moveTo(r,s),m.push({x:r,y:s});const g=l+(a+e+i)*Math.cos(n),f=c+(a+e+i)*Math.sin(n);o.lineTo(g,f),p.push({x:g,y:f})}o.moveTo(p[0].x,p[0].y);for(let h in p)h=p[h],o.lineTo(h.x,h.y);o.closePath(),o.moveTo(m[0].x,m[0].y);for(let h=m.length-1;h>=0;h--)h=m[h],o.lineTo(h.x,h.y);o.closePath(),n[1]&&(o.fillStyle=n[1],o.fill()),o.stroke(),o.beginPath(),o.moveTo(m[0].x,m[0].y);for(let h in m)h=m[h],o.lineTo(h.x,h.y);o.closePath(),n[2]&&(o.fillStyle=n[2],o.fill()),o.stroke()},[mt.STATIC]:e=>{const{ctx:t,h:n,w:o}=e;let{data:r}=e;const s=new bt(t);r=s.mutateData(r,"shrink",1/8),r=s.mutateData(r,"split",2)[0],r=s.mutateData(r,"scale",n);const a=s.getPoints("line",o,[0,n/2],r.length,r,{offset:50});let i=null;a.start.forEach(((e,t)=>{i&&s.drawLine(i,e),s.drawLine(e,a.end[t]),i=a.end[t]}))},[mt.STITCHES]:e=>{const{ctx:t,h:n,w:o}=e;let{data:r}=e;const s=new bt(t),a=n<o?n:o;r=s.mutateData(r,"shrink",200),r=s.mutateData(r,"split",2)[0],r=s.mutateData(r,"scale",n/2);const i=s.getPoints("circle",a/2,[o/2,n/2],r.length,r,{offset:50});s.drawPolygon(i.end,{close:!0}),s.drawPolygon(i.start,{close:!0});for(let l=0;l<i.start.length;l+=1){const e=i.start[l];l++;const t=i.end[l]||i.end[0];s.drawLine(e,t),s.drawLine(t,i.start[l+1]||i.start[0])}},[mt.WAVE]:e=>{const{ctx:t,h:n,w:o,options:r}=e;let{data:s}=e;const a=new bt(t);s=a.mutateData(s,"split",4)[0],s=a.mutateData(s,"scale",n);const i=a.getPoints("line",o,[0,n],s.length,s,{offset:100});i.start=i.start.slice(0,i.end.length-1),i.start.push([o,n]),i.start.push([0,n]),a.drawPolygon(i.start,{lineColor:r[0],color:r[1],radius:.008*n})},[mt.WEB]:e=>{const{ctx:t,h:n,w:o,options:r}=e;let{data:s}=e;const a=new bt(t),i=n<o?n:o;s=a.mutateData(s,"shrink",100),s=a.mutateData(s,"split",2)[0],s=a.mutateData(s,"scale",n/4);let l=s,c=a.getPoints("circle",i/2,[o/2,n/2],s.length,s);a.drawPolygon(c.end,{close:!0}),c.start.forEach(((e,t)=>{a.drawLine(e,c.end[t])})),s=a.mutateData(s,"scale",.7),c=a.getPoints("circle",i/2,[o/2,n/2],s.length,s),a.drawPolygon(c.end,{close:!0}),s=a.mutateData(s,"scale",.3),c=a.getPoints("circle",i/2,[o/2,n/2],s.length,s),a.drawPolygon(c.end,{close:!0}),a.drawCircle([o/2,n/2],i/2,{color:r[2]}),l=a.mutateData(l,"scale",1.4),c=a.getPoints("circle",i/2,[o/2,n/2],l.length,l),c.end.forEach((e=>{a.drawCircle(e,.01*i,{color:r[1],lineColor:r[1]||r[0]})}))}},Ct={};function It(e,t,n,o){const r=i(i({},_t),n||{}),s="string"==typeof t?document.getElementById(t.toString()):t;if(!s)throw new kt(t.toString());const a=s.id,l=s.getContext("2d"),c=s.height,d=s.width;l.strokeStyle=r.colors[0],l.lineWidth=Number(r.stroke.toString());const u={data:e,options:r,ctx:l,h:c,w:d,canvasId:a},p=Array.isArray(r.type)?r.type:[r.type];ft(Ct,p[0].toString(),1),o%Ct[p[0].toString()]==0&&(l.clearRect(0,0,d,c),l.beginPath(),p.forEach((e=>{St[e.toString()](u)})))}class Mt extends Error{constructor(e){super(` Could not find the element with id "${e}"`),this.name="ElementNotFoundError"}}class Nt{constructor(e,t,n,o){this.element=e,this.canvasId=t,this.options=n,this.fromElementOptions=o,this.activated=!1,this.analyser=null,this.activeCanvas={},this.activeElements={},this.frameCount=1,this.currentCount=0,this.data=null,this.bufferLength=null,this.audioCtx=null,["touchstart","touchmove","touchend","mouseup","click"].forEach((e=>{document.body.removeEventListener(e,this.initialize)})),this.element.removeEventListener("play",this.initialize)}isActivated(){return this.activated}activate(){this.activated=!0}deactivate(){this.activated=!1,vt(document.getElementById(this.canvasId)),!this.fromElementOptions.existingMediaStreamSource&&this.audioCtx&&this.audioCtx.close().then()}initializeAfterUserGesture(){["touchstart","touchmove","touchend","mouseup","click"].forEach((e=>{document.body.addEventListener(e,this.initialize.bind(this),{once:!0})})),this.element.addEventListener("play",this.initialize.bind(this),{once:!0})}initialize(){this.activate(),this.activeCanvas[this.canvasId]=JSON.stringify(this.options);const e=this.element.id;ft(this.activeElements,e,{}),this.activeElements[e]=this.activeElements[e]||{},this.activeElements[e].count?this.activeElements[e].count+=1:this.activeElements[e].count=1;const{setGlobal:t,getGlobal:n}=this.options;this.currentCount=this.activeElements[e].count;let o=n(e,"source");if(!o||o.mediaElement!==this.element){const n=t(e,"audioCtx",new P);this.audioCtx=n,o=this.fromElementOptions.existingMediaStreamSource||n.createMediaElementSource(this.element)}this.analyser=t(e,"analyser",o.context.createAnalyser()),t(e,"source",o);const r=o.context.createOscillator();r.frequency.value=1,r.connect(o.context.destination),r.start(0),r.stop(0),this.fromElementOptions.connectDestination&&this.connectSource(o,o.context.destination),this.connectSource(o,this.analyser),this.analyser.fftsize=32768,this.bufferLength=this.analyser.frequencyBinCount,this.data=new Uint8Array(this.bufferLength),this.renderFrame()}renderFrame(){if(!this.isActivated())return;const e=this.element.id;if(JSON.stringify(this.options)===this.activeCanvas[this.canvasId]){if(!document.getElementById(e))throw new Mt(e);if(!document.getElementById(this.canvasId))throw new kt(this.canvasId);requestAnimationFrame(this.renderFrame.bind(this)),this.frameCount++,this.currentCount<this.activeElements[e].count||(this.analyser.getByteFrequencyData(this.data),this.activeElements[e].data=this.data),It(this.activeElements[e].data,this.canvasId,this.options,this.frameCount)}}connectSource(e,t){e.connect(t)}}const Pt=(e,t,n,o,r)=>{e.activated&&(t.getByteFrequencyData(e.data),It(e.data,e.canvasId,e.options,r),n[o.id].animation=requestAnimationFrame(e.loop))};var Dt={fromElement:function(e,t,n,o){const r="string"==typeof e?document.getElementById(e):e;if(!r)throw new Mt("string"==typeof e?e:"");const s="string"==typeof t?document.getElementById(t):t;if(!r)throw new kt("string"==typeof t?t:"");r.crossOrigin="anonymous";const a=i(i({},_t),n||{});wt(a.type);const l=i({connectDestination:!0,skipUserEventsWatcher:!1,existingMediaStreamSource:null},o||{}),c=new Nt(r,s.id,a,l);return c.isActivated()||l.skipUserEventsWatcher?c.initialize():c.initializeAfterUserGesture(),{deactivate:()=>{c.deactivate()}}},fromFile:function(e,t,n){const o=i(i({},_t),t||{}),{callback:r,width:s,height:a,format:l,drawRate:c}=i({width:window.innerWidth,height:window.innerHeight,format:"png",drawRate:20,callback:()=>null},n);wt(o.type);const d=`image/${l}`,u=((e,t)=>{const n=document.createElement("canvas");return n.height=t,n.width=e,n})(s,a),p=new Audio(e),m=new P,h=m.createAnalyser(),g=m.createMediaElementSource(p);h.fftSize=1024;const f=h.frequencyBinCount,w=new Uint8Array(f);let v=null;g.connect(h),p.addEventListener("loadedmetadata",(()=>p.play().then()));const y=()=>{let e=1;v=setInterval((()=>{h.getByteFrequencyData(w),It(w,u,o,e++),r(u.toDataURL(d))}),c)},E=()=>{p.currentTime===p.duration&&void 0!==w&&clearInterval(v)};return p.addEventListener("play",y),p.addEventListener("ended",E),{deactivate:()=>{p.removeEventListener("play",y),p.removeEventListener("ended",E),clearInterval(v),m.close().then(),vt(u),r(u.toDataURL(d))}}},fromStream:function(e,t,n,o){const r=i(i({},_t),n||{}),s=i({connectDestination:!0},o||{});wt(r.type);const{connectDestination:a}=s,l={canvasId:t,options:r,data:null,loop:null,animation:null,activated:!0},c=gt("stream-sources",r.globalAccessKey);c[e.id]&&cancelAnimationFrame(c[e.id].animation);const d=new P,u=d.createAnalyser(),p=d.createMediaStreamSource(e);p.connect(u),a&&p.connect(d.destination),c[e.id]={audioCtx:d,analyser:u,source:p},u.fftSize=32768;const m=u.frequencyBinCount;return l.data=new Uint8Array(m),this.frameCount=1,l.loop=()=>Pt(l,u,c,e,++this.frameCount),Pt(l,u,c,e,1),{deactivate:()=>{vt(document.getElementById(l.canvasId)),d.close().then(),l.activated=!1}}}};const Tt=({audioStream:e})=>{const t=g.exports.useRef(null);return g.exports.useEffect((()=>{if(!t.current)return;const n="_"+Math.random().toString(36).substr(2,9);t.current.id=`audioCanvas${n}`;const{deactivate:o}=Dt.fromStream(e,t.current.id,{type:"dualbars blocks",colors:["green","lightgreen"],stroke:3},{connectDestination:!1});return()=>{o()}}),[e]),f.createElement("div",{className:"audio"},f.createElement("canvas",{className:"audioCanvas",ref:t}))},Ot=()=>{const{state:e,actions:t}=Bt(),{messages:n,currentMessageValue:o,recordButtonIsAudio:r,recording:s,showEmojiPicker:a}=e,c=g.exports.useRef(),d=g.exports.useRef(null),u=g.exports.useRef(null),p=async e=>{if(s)return;const n=await Re((e=>{t.setState({currentMessageValue:{src:e}}),console.log({url:e})}),(e=>d.current=e),e);n&&(t.recordingStarted(e),u.current=n)},m=()=>!s&&t.setState({recordButtonIsAudio:!r}),h=je((()=>p({audio:!0})),void 0,m),v=je((()=>p({audio:!0,video:!0})),void 0,m),y=o.type===Ne.Text,E=y&&f.createElement($e,{className:"smile",onClick:()=>t.toggleEmojiPicker()}),x=(null==o?void 0:o.type)===Ne.Text&&f.createElement(D,{ref:c,onChange:e=>t.setState({currentMessageValue:{src:e}}),value:o.src,sendButton:!1,attachButton:!1,onSend:t.sendMessage,placeholder:"Type message here..."}),b=f.createElement("button",l(i({},h),{className:"recordMicrophone"+((null==s?void 0:s.audio)?" active":"")}),f.createElement(We,null)),_=f.createElement("button",l(i({},v),{className:"recordMicrophone"}),f.createElement(Je,null)),k=o.type!==Ne.Text&&o.src&&f.createElement(Ge,{onClick:t.cleanCurrentMessage,className:"trashButton"}),C=""!==o.src&&f.createElement(T,{className:"sendButton",onClick:t.sendMessage}),I=""===o.src&&!s&&f.createElement(Qe,{setFile:t.fileChosen}),M=(""===o.src||s)&&(r?b:_),N=s&&f.createElement(dt,{onClick:()=>{var n;d.current=null,null==(n=u.current)||n.call(u),t.recordingEnded(),console.log(e)}}),P=f.createElement("div",{as:O},o.type===Ne.Video&&f.createElement(lt,{stream:d.current,src:o.src}),o.type===Ne.Image&&f.createElement(ot,{src:o.src}),a&&f.createElement(Fe,{onValue:e=>y&&t.setState({currentMessageValue:{src:o.src+e}})}));return f.createElement("div",{className:"mainChatContainer"},f.createElement(L,{responsive:!0},f.createElement(j,null,f.createElement(ze,{as:w}),f.createElement(at,{as:S,messages:n}),f.createElement("div",{className:"MessageInput",as:D},k,E,d.current&&f.createElement(Tt,{audioStream:d.current}),o.type===Ne.Audio&&o.src&&f.createElement(tt,{src:o.src}),o.type===Ne.File&&f.createElement(nt,i({},l(i({},o),{file:o.file,type:void 0}))),x,C,I,N,M),P)))},Lt={recording:null,messages:[],recordButtonIsAudio:!0,showEmojiPicker:!1,currentMessageValue:Oe()},jt={toggleEmojiPicker:e=>{e.showEmojiPicker=!e.showEmojiPicker},recordingEnded:e=>{e.recording=null},setState:(e,t)=>"function"==typeof t?t(e):d.merge(e,t),recordingStarted:(e,t)=>{e.recording=t;const n=t.video?Ne.Video:Ne.Audio;e.currentMessageValue=l(i({},e.currentMessageValue),{type:n,src:"",direction:De.Out})},cleanCurrentMessage:e=>{e.recording=null,e.currentMessageValue=Oe()},fileChosen:(e,t)=>{const n=URL.createObjectURL(t);e.currentMessageValue={renderable:!0,src:n,type:Ne.File,direction:De.Out},e.currentMessageValue.file=t;const{type:o}=t;o.includes(Ne.Image)&&(e.currentMessageValue.type=Ne.Image),o.includes(Ne.Video)&&(e.currentMessageValue.type=Ne.Video),console.log("File chosen:",t)},sendMessage:e=>{const t=Object.keys(e.messages).length+1;e.messages[t]=l(i({},e.currentMessageValue),{id:t,executed:!0}),e.currentMessageValue=Oe()},appendMessageNode:(e,t)=>{const n=Object.keys(e.messages).length+1;e.messages[n]=l(i({},t),{id:n,executed:!1})}},At=(e,t)=>A(e,(e=>jt[t.type](e,t.payload))),Vt=g.exports.createContext({state:Lt,actions:{},flow:null}),Bt=()=>g.exports.useContext(Vt),Rt=()=>{console.log("Render Chat");const[e,t]=g.exports.useReducer(At,Lt),n=g.exports.useMemo((()=>le(jt).reduce(((e,n)=>(e[n]=e=>{t({type:n,payload:e})},e)),{})),[]),o=Ce((e=>{const{drawflow:t,connections:n,ports:o}=ke(e),r=le(o).reduce(((e,t)=>(e[t]=i({},o[t]),delete e[t].pos,e)),{});return{drawflow:le(t).reduce(((e,n)=>(e[n]={data:t[n].data},e)),{}),connections:n,ports:r}}),d.isEqual),r=g.exports.useMemo((()=>new ve(o)),[o]),s=r.heads[0];return f.createElement(Vt.Provider,{value:{state:e,actions:n,flow:r}},f.createElement("div",null,f.createElement("button",{onClick:()=>{if(!s)return;console.log("Run");const e=Le();e.flowNodeId=s.id,n.appendMessageNode(e)},style:{position:"absolute",zIndex:100,right:0}},"Start bot"),f.createElement(Ot,null)))};const zt=V("addNewNode"),Ft=V("dragTemplate"),Wt=V("canvasShapeUpdated"),$t=V("insertCopiedNode"),Ut=V("toggleSidebar"),qt=V("setState"),Gt=e=>{const t=["order","active","icon_link","nodes_group_id","nodes_id","nodes_tooltip","name","description","icon_link_selected"],n=JSON.parse(JSON.stringify(e)),o=le(n).reduce(((n,o)=>(o in t||(n[o]=e[o]),n)),{flow_lane_id:0,flow_node:{},node_position:0,prev_node_unique_id:0,this_node_unique_id:0,update_version:0,id_nodes:0});return["name","description","icon_link_selected"].forEach((e=>{o.flow_node[`node_${e}`]=n[e]})),o.flow_node.node_tooltip=n.nodes_tooltip,o.id_nodes=n.nodes_id,o},Jt={flow_node:"Flow node",node_settings_json:"Settings JSON",node_response_settings_json:"Response JSON",node_object_lists:"Object list",node_attributes:"Node attributes"},Ht=e=>"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1),Xt=(e,t)=>{const n=(e.y-t.y)/2,o=e.x-t.x;return`M ${e.x} ${e.y} v ${-n} h ${-o} v ${-n} `},Kt=(e,t,n,o)=>{const{x:r,y:s,width:a,height:i}=o;return{x:e*(a/(a*n))-r*(a/(a*n)),y:t*(i/(i*n))-s*(i/(i*n))}};var Yt,Zt;(Zt=Yt||(Yt={}))[Zt.getTemplateNodes=1156]="getTemplateNodes",Zt[Zt.postTemplateNodes=1157]="postTemplateNodes",Zt[Zt.getFlowDataVersion=1160]="getFlowDataVersion",Zt[Zt.postFlowDataVersion=1161]="postFlowDataVersion",Zt[Zt.getFlow=1162]="getFlow",Zt[Zt.postFlow=1163]="postFlow",Zt[Zt.fetchBackgroundImages=1164]="fetchBackgroundImages",Zt[Zt.getGroups=1154]="getGroups",Zt[Zt.postGroups=1155]="postGroups",Zt[Zt.getStepSettingsTemplates=1222]="getStepSettingsTemplates";const Qt=async(e,t={})=>{const n=window.location.search,o=new URLSearchParams(n).get("session_id");o||(console.error("session_id is not provided!"),alert("session_id is not provided!"));const r=i({session_id:o,sp_name:"OK",session_exp:"2021-02-12T02:57:45.453422",status:"OK",item_id:0,max_row_per_page:50,search_term:"",search_term_header:"",pagination:1,scrdata_id:e},t);return fetch("https://valerii.educationhost.cloud?csurl=https://tastypoints.io/akm/restapi.php",{method:"post",body:JSON.stringify({input:r}).replace(/'/g,"''")}).then((async e=>{let t=await e.json();if(!t.status||!t.data)throw console.error(t),alert(t),alert(JSON.stringify(t,null,2)),new Error(t);if(t=JSON.parse(t.data),t.response_error)throw console.error(t.response_error),alert(JSON.stringify(t.response_error,null,2)),new Error(t.response_error);if("OK"!==t.status&&"OK"!==t.sp_name)throw alert(JSON.stringify(t,null,2)),new Error(t.response_error);return t}))},en=B("fetchFlow",(async(e,{dispatch:t})=>{const n=await Qt(1162,{item_id:25});if(null===n.flows)return void alert("Such flow do not exist or was deleted!");const o=n.flows[0];t(qt({flowInfo:o}))})),tn=B("fetchFlow",(async(e,{getState:t})=>{const{flowInfo:n}=t();if(!n)return void console.error("Cannot save flow, data is not available");"OK"===(await Qt(1163,{item_id:25,flows:[n]})).status?alert("Saved"):alert("Cannot save flow")})),nn=B("fetchGroups",(async()=>{const e=await Qt(1154),{flow_nodes_group:t}=e;return t.reduce(((e,t)=>(e[t.id]=t,e)),{})})),on=B("updateGroup",(async(e,{dispatch:t})=>{var n;"delete"in e||(e.delete=0);const o=await Qt(1155,{flow_nodes_group:[e],item_id:null!=(n=e.id)?n:0});"OK"===o.status?(t(nn()),e.id||(e.id=o.item_id),alert(`Group ${e.id} updated`)):alert(`Error: cannot ${e.id?"update":"create"} group ${e.node_group_name}`)})),rn=B("fetchTemplateNodes",(async()=>{const{flow_nodes:e}=await Qt(1156,{});return e})),sn=B("updateTemplateNode",(async(e,{dispatch:t})=>{var n;console.log({templateNode:e}),"delete"in e||(e.delete=0);const o=await Qt(1157,{flow_nodes:[e],item_id:null!=(n=e.nodes_id)?n:0});console.log({resp:o}),"OK"===o.status?(t(rn()),e.nodes_id||(e.nodes_id=o.item_id,t(qt({windowConfig:{id:e.nodes_id,mainId:ce.templateNodeSettings}}))),alert(`TemplateNode ${e.nodes_id} updated`),1===e.delete&&t(qt({windowConfig:{mainId:ce.mainFlow}}))):alert(`Error: cannot ${e.nodes_id?"update":"create"} templateNode ${e.name}, ID: ${e.nodes_id}`)})),an=B("fetchFlowVersion",(async e=>{const t=(await Qt(1160,{item_id:25,show_ver:e})).flow_steps;return null===t?null:t.filter((({update_version:t})=>t===e||0===e))})),ln=B("postFlowVersion",(async(e,{getState:t,dispatch:n})=>{const o=t(),r=o.flows[o.version],s=new ve(r),{drawflow:a}=r,c=Object.values(JSON.parse(JSON.stringify(a))).map((e=>{const{subnodes:t}=s.getNode(e.id),{data:n}=e;return l(i(i({},n),((e,t)=>{var n,o;const r=new ve(e).getNode(t),{nodeState:s}=r;return{node_position:s.positionNumber,flow_lane_id:s.lane,flow_step_x:Math.round(s.pos.x),flow_step_y:Math.round(s.pos.y),prev_node_unique_id:null!=(o=null==(n=r.parent)?void 0:n.id)?o:null,this_node_unique_id:r.id}})(r,e.id)),{node_attributes:t.map((({id:e})=>e))})}));if(0===c.length)return void alert("Please add at least one node in flow to allow commit!");console.log(c);const d=await Qt(1161,{item_id:25,flow_steps:c});"OK"!==d.status||"OK"!==d.sp_name?(console.error(d),alert(JSON.stringify(d))):(alert("Flow successfully updated."),n(an(0)))})),cn=B("initFlow",(async(e,{dispatch:t})=>{t(an(0))})),dn=B("changeVersion",(async(e,{dispatch:t,getState:n})=>{const{flows:o}=n();return o[e]?e:void t(an(e))})),un=z({reducer:R({version:0,flows:[ye],templates:[],dragTemplate:0,groups:{},windowConfig:{id:0,mainId:ce.mainFlow,sideId:ue.none,background:{opacity:0,blur:0,imageUrl:""}}},(e=>{e.addCase(qt,Ee).addCase($t,(e=>{const t=ke(e);if(void 0===t.nodeToCopyId)return;const{clientX:n,clientY:o}=t.clientCurrentMousePos,r=JSON.parse(JSON.stringify(t.drawflow[t.nodeToCopyId]));e.canvas?(r.pos=Kt(n,o,t.config.zoom.value,e.canvas),t.drawflow[t.nodeId]=l(i({},r),{id:t.nodeId,height:0,width:0}),++t.nodeId):console.error("Canvas shape is not available")})).addCase(dn.fulfilled,((e,{payload:t})=>{void 0!==t&&(e.version=t)})).addCase(Ut,(e=>{var t;e.sidebarVisible=!(null==(t=e.sidebarVisible)||t)})).addCase(zt,((e,{payload:{clientX:t,clientY:n}})=>{const o=e.flows[e.version],r=e.templates.find((({nodes_id:t})=>t===e.dragTemplate));if(!e.dragTemplate)return;if(!e.canvas)return void console.error("Canvas shape is not available");if(!r)return void console.error("Template node not found");const s={id:0,type:ee.MIDDLE,data:Gt(r),port:{in:1,out:2},pos:{x:0,y:0},isSub:!1,height:0,width:0};s.data.this_node_unique_id=o.nodeId,s.pos=Kt(t,n,o.config.zoom.value,e.canvas),o.mouseBlockDragPos={clientX:t,clientY:n},o.drawflow[o.nodeId]=l(i({},s),{id:o.nodeId,height:0,width:0}),o.select={type:"node",selectId:o.nodeId++},o.config.drag=!0,e.dragTemplate=void 0})).addCase(Ft,((e,{payload:t})=>{e.dragTemplate=t})).addCase(Wt,((e,{payload:t})=>{e.canvas=t})).addCase(rn.fulfilled,((e,{payload:t})=>{e.templates=t})).addCase(an.fulfilled,((e,{payload:t})=>{if(!t||0===t.length)return;e.version=t[0].update_version;const n={},o=[],r={},s={};t.forEach((e=>{var t;null==(t=e.node_attributes)||t.forEach(((t,n)=>{r[t]=e.this_node_unique_id,s[t]=0===n}))})),t.forEach((e=>{var t;const{this_node_unique_id:a,prev_node_unique_id:i}=e,l=void 0!==r[a];null!==i&&o.push({startId:l?i:null!=(t=r[i])?t:i,endId:a,startPort:s[a]?2:1,endPort:1,visible:!0}),n[a]={id:a,height:0,width:0,type:ee.MIDDLE,isSub:l,port:{out:l?1:2,in:1},pos:{x:0,y:0},data:e}})),e.flows[e.version]=_e(e.flows[e.version],{type:ne.Drawflow+"/load",payload:{drawflow:n,connections:o}});const a=new ve(JSON.parse(JSON.stringify(e.flows[e.version]))),{heads:i}=a;if(!e.canvas)return void console.error("Canvas not initialized");const{height:l,width:c}=e.canvas;i[0].setPos({x:c/3,y:l/10}),e.flows[e.version]=a.state})).addCase(nn.fulfilled,((e,{payload:t})=>{e.groups=t})).addMatcher((e=>e.type.startsWith(ne.Drawflow)),((e,t)=>{e.flows[e.version]=_e(e.flows[e.version],t)}))}))});const pn=new function(){return new Worker("/Drawflow-react/assets/alignFlow.48cf15c1.js",{type:"module"})};pn.onmessage=e=>{const{version:t}=un.getState();t===e.data.version&&un.dispatch(be.setState({drawflow:e.data.drawflow}))};const mn=B("alignCurrentFlow",(async(e,{getState:t})=>{const n=t(),{version:o}=n,{drawflow:r,ports:s,connections:a}=ke(n);pn.postMessage([{drawflow:r,ports:s,connections:a},o])})),hn=F(W,d.isEqual);const gn=new function(){return new Worker("/Drawflow-react/assets/toggleAvailablePortToConnect.96a16395.js",{type:"module"})};gn.onmessage=e=>{const{version:t}=un.getState();t===e.data.version&&un.dispatch(be.setState({portToConnect:e.data.portToConnect}))};const fn=B("toggleAvailablePortToConnect",(async(e,{getState:t})=>{const n=t(),{version:o}=n,r=ke(n);gn.postMessage([r,o])})),wn=E.svg`
  position: absolute;
  overflow: visible;
`,vn=E.path`
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
`,yn=e=>{const{id:t,d:n}=e,o=(e=>Ce(g.exports.useMemo((()=>hn((t=>{if(void 0===e)return!1;const n=ke(t).select;return"path"===(null==n?void 0:n.type)&&n.selectId===e}),(e=>e))),[e])))(t),r=Se();return f.createElement(wn,null,f.createElement(vn,{selected:o,d:n,onMouseDown:e=>{void 0!==t&&(e.stopPropagation(),r(be.select({type:"path",selectId:t})))}}))},En=({id:e})=>{const t=(n=e,Ce(g.exports.useMemo((()=>hn((e=>{var t,o;const r=ke(e),{startId:s,startPort:a,endId:i,endPort:l}=r.connections[n],c=null==(t=r.ports.find((e=>e.nodeId===s&&e.portId===a&&e.type===ae.out)))?void 0:t.pos,d=null==(o=r.ports.find((e=>e.nodeId===i&&e.portId===l&&e.type===ae.in)))?void 0:o.pos;return c&&d?Xt(c,d):""}),(e=>e))),[n])));var n;return f.createElement(yn,{key:e,id:e,d:t})},xn=()=>{const e=Ce(g.exports.useMemo((()=>hn((e=>{const{connections:t}=ke(e);return t.reduce(((e,t,n)=>(t.visible&&e.push(n),e)),[])}),(e=>e))),[])).map((e=>f.createElement(En,{key:e,id:e})));return f.createElement(f.Fragment,null,e)},bn=E.div`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  z-index: 1;
`,_n=E.button`
  background-color: #333;
  color: white;
  font-size: 0.9em;
  margin: 0.1em;
  padding: 0.1em 0.5em;
  display: inline-grid;
  place-items: center;
`,kn=()=>{const e=Se();return f.createElement(bn,null,f.createElement(_n,{onClick:()=>e(be.zoom(!0))},"+"),f.createElement(_n,{onClick:()=>e(be.zoom(!1))},"-"),f.createElement(_n,{onClick:()=>e(be.zoom(null))},"reset"))},Sn=()=>{var e;const t=null!=(e=Ce(g.exports.useMemo((()=>hn((e=>{const t=ke(e);if(!t.select||t.select.type!==ae.out||!t.newPathDirection)return void console.error("Cannot draw new path!");const n=t.ports[t.select.selectId];if(!n)return void console.error("No start port in newPath");const o=n.pos;if(!e.canvas)return void console.error("Canvas shape is not available");const{clientX:r,clientY:s}=t.newPathDirection,a=Kt(r,s,t.config.zoom.value,e.canvas);return Xt(o,a)}),(e=>e))),[])))?e:"";return f.createElement(yn,{d:t})},Cn=e=>f.createElement("svg",l(i({},e),{viewBox:"0 0 16 16",fill:"none"}),f.createElement("path",{d:"M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),f.createElement("path",{d:"M14.0016 13.9996L11.1016 11.0996",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),In=e=>f.createElement("svg",l(i({},e),{viewBox:"0 0 10 14",fill:"none"}),f.createElement("path",{d:"M8 2L2.18437 6.84636C2.08842 6.92631 2.08842 7.07369 2.18437 7.15364L8 12",stroke:"#393C44",strokeWidth:"2.5",strokeLinecap:"round"})),Mn=e=>f.createElement("svg",l(i({},e),{viewBox:"0 0 1792 1792"}),f.createElement("path",{fill:"#217CE8",d:"M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z"})),Nn=e=>f.createElement("svg",l(i({},e),{viewBox:"0 0 19 19",fill:"none"}),f.createElement("path",{d:"M14.25 4.75L4.75 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),f.createElement("path",{d:"M4.75 4.75L14.25 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),Pn=e=>f.createElement("svg",l(i({},e),{enableBackground:"new 0 0 512 512",viewBox:"0 0 512 512"}),f.createElement("g",null,f.createElement("path",{d:"m482.16 288.51 29.84-4.68v-55.66l-29.84-4.68c-24.56-4.14-33.19-36.67-13.99-52.45l22.52-18.55-27.71-47.98-27.56 10.32c-23.33 8.74-47-14.9-38.25-38.25l10.32-27.56-47.98-27.71-18.55 22.52c-15.75 19.16-48.3 10.61-52.45-13.99l-4.68-29.84h-55.66l-4.68 29.84c-4.17 24.56-36.67 33.19-52.45 13.99l-18.55-22.52-47.98 27.71 10.32 27.56c8.74 23.33-14.9 47-38.25 38.25l-27.56-10.32-27.71 47.98 22.52 18.55c19.12 15.74 10.67 48.29-13.99 52.45l-29.84 4.68v55.66l29.84 4.68c24.46 4.15 33.26 36.59 13.99 52.45l-22.52 18.55 27.71 47.98 27.56-10.32c23.22-8.7 47.04 14.81 38.25 38.25l-10.32 27.56 47.98 27.71 18.55-22.52c15.73-19.11 48.27-10.67 52.45 13.99l4.68 29.84h55.66l4.68-29.84c4.12-24.4 36.56-33.3 52.45-13.99l18.55 22.52 47.98-27.71-10.32-27.56c-8.7-23.22 14.81-47.04 38.25-38.25l27.56 10.32 27.71-47.98-22.52-18.55c-19.16-15.76-10.61-48.28 13.99-52.45zm-226.16 92.49c-68.93 0-125-56.07-125-125s56.07-125 125-125 125 56.07 125 125-56.07 125-125 125z",fill:"#7ed8f6"}),f.createElement("path",{d:"m468.17 340.96 22.52 18.55-27.71 47.98-27.56-10.32c-23.44-8.79-46.95 15.03-38.25 38.25l10.32 27.56-47.98 27.71-18.55-22.52c-15.89-19.31-48.33-10.41-52.45 13.99l-4.68 29.84h-27.83v-131c68.93 0 125-56.07 125-125s-56.07-125-125-125v-131h27.83l4.68 29.84c4.15 24.6 36.7 33.15 52.45 13.99l18.55-22.52 47.98 27.71-10.32 27.56c-8.75 23.35 14.92 46.99 38.25 38.25l27.56-10.32 27.71 47.98-22.52 18.55c-19.2 15.78-10.57 48.31 13.99 52.45l29.84 4.68v55.66l-29.84 4.68c-24.6 4.17-33.15 36.69-13.99 52.45z",fill:"#6aa9ff"}),f.createElement("path",{d:"m256 121c-74.44 0-135 60.56-135 135s60.56 135 135 135 135-60.56 135-135-60.56-135-135-135zm0 210c-41.35 0-75-33.64-75-75s33.65-75 75-75 75 33.64 75 75-33.65 75-75 75z",fill:"#6aa9ff"}),f.createElement("path",{d:"m391 256c0 74.44-60.56 135-135 135v-60c41.35 0 75-33.64 75-75s-33.65-75-75-75v-60c74.44 0 135 60.56 135 135z",fill:"#4895ff"}))),Dn=e=>f.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},e),f.createElement("g",{transform:"matrix(1.06642 0 0 1.06642 -1.03 -1106.225)"},f.createElement("circle",{cx:"8.467",cy:"1044.829",r:"5.626",fill:"#c2e4f8"}),f.createElement("path",{fill:"#249fe6",fillRule:"evenodd",style:{lineHeight:"normal",textIndent:0,textAlign:"start",textDecorationLine:"none",textDecorationStyle:"solid",textDecorationColor:"#000",textTransform:"none",isolation:"auto",mixBlendMode:"normal"},d:"M 8 1 C 4.139959 1 1.0000428 4.1398846 1 8 C 0.99997942 11.860115 4.1399146 15 8 15 C 11.860086 15 15.00002 11.860115 15 8 C 14.999957 4.1398846 11.860041 1 8 1 z M 8 2 C 11.319604 2 13.999963 4.6803455 14 8 C 14.000018 11.319654 11.319644 14 8 14 C 4.6803565 14 1.9980292 11.319654 1.9980469 8 C 1.9980837 4.6803455 4.6803952 2 8 2 z M 7.9863281 4.0039062 A 0.50005001 0.50005001 0 0 0 7.4941406 4.5117188 L 7.5 7.5039062 L 4.5039062 7.5097656 A 0.50095123 0.50095123 0 0 0 4.5058594 8.5117188 L 7.5 8.5058594 L 7.5058594 11.5 A 0.50005001 0.50005001 0 1 0 8.5058594 11.5 L 8.5019531 8.5039062 L 11.494141 8.4980469 A 0.50005001 0.50005001 0 1 0 11.492188 7.4980469 L 8.5 7.5039062 L 8.4960938 4.5117188 A 0.50005001 0.50005001 0 0 0 7.9863281 4.0058594 L 7.9863281 4.0039062 z ",color:"#000",fontFamily:"sans-serif",fontWeight:400,overflow:"visible",transform:"matrix(.93772 0 0 .93772 .965 1037.328)"}))),Tn=e=>f.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 3",fill:"none"},e),f.createElement("circle",{cx:"1.2",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),f.createElement("circle",{cx:"5.9998",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),f.createElement("circle",{cx:"10.7996",cy:"1.2",r:"1.2",fill:"#C5C5D0"})),On=E.button`
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
`,Ln=E.div`
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
`,jn=E.img`
  max-height: 100%;
  max-width: 100%;
`,An=E.span``,Vn=e=>{const{nodes_id:t,order:n}=e,o=Se(),r=g.exports.useRef(null),s=Ce((e=>e.precanvas));return f.createElement(Ln,{style:{order:n},ref:r,onMouseDown:e=>{if(void 0===Ft)return;o(Ft(t));const{current:n}=r;if(!n)return void console.error("No node to copy");const{left:a,top:i}=n.getBoundingClientRect(),l=e.clientX-a,c=e.clientY-i,d=n.cloneNode(!0);d.style.position="absolute",d.style.left=a+window.scrollX+"px",d.style.top=i+window.scrollY+"px",document.body.appendChild(d);const u=e=>{var t;const{clientX:n,clientY:o}=e;if(s){if(n>=s.x&&o>=s.y)return document.removeEventListener("mousemove",u),void(null==(t=d.parentNode)||t.removeChild(d));d.style.left=n-l+window.scrollX+"px",d.style.top=o-c+window.scrollY+"px"}else console.error("Canvas is not ready! Cannot drag template")};document.addEventListener("mousemove",u),document.addEventListener("mouseup",(()=>{var e;document.removeEventListener("mousemove",u),null==(e=d.parentNode)||e.removeChild(d),o(Ft(void 0))}),{once:!0});const{height:p,width:m}=getComputedStyle(n);d.style.height=p,d.style.width=m}},f.createElement(jn,{src:e.icon_link}),f.createElement(An,null,e.name),f.createElement(On,{onMouseDown:()=>{o(qt({windowConfig:{id:t,mainId:ce.templateNodeSettings}}))}},f.createElement(Tn,{height:3,width:12})))},Bn=E.div`
  max-height: 100%;
  overflow: hidden;
`,Rn=e=>{const t=Se();return f.createElement(Bn,null,f.createElement("span",null,e.data.flow_node.node_name),f.createElement(On,{onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(qt({windowConfig:{id:e.id,mainId:ce.nodeSettings}}))}},f.createElement(Tn,{height:3,width:12})))},zn={width:100,height:60,padding:"0 0.5em"},Fn={width:200},Wn=E.div`
  width: 15px;
  height: 15px;
  border-radius: 60px;
  background-color: #217ce8;
  opacity: ${({visible:e})=>e?1:0};
  transform: scale(${({visible:e})=>e?1:0});
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
`,$n=E.div`
  height: 1em;
  width: 1em;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  border: 2px solid #cacaca;
  &:hover {
    background: #4ea9ff;
  }
`,Un=E($n)`
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&$`
      left: 100%;
      top: 50%;
    `}
`,qn=E($n)`
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&$`
      display: none;
    `}
`,Gn=E($n)`
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  ${({isSub:e})=>e&&$`
      left: 0;
      top: 50%;
    `}
`,Jn={[ae.in]:[Gn],[ae.out]:[Un,qn]},Hn=e=>{const{nodeId:t,portId:n,type:o}=e,r=Se(),s=(a=e,Ce(g.exports.useMemo((()=>hn((e=>{const{portToConnect:t}=ke(e);if(!t)return!1;const n=JSON.parse(JSON.stringify(t));return delete n.pos,d.isEqual(a,n)}),(e=>e))),[a])));var a;const i=(l=t,Ce(g.exports.useMemo((()=>hn((e=>ke(e).drawflow[l].isSub),(e=>e))),[l])));var l;const c=Jn[o][n-1];return f.createElement(c,{isSub:i,onMouseDown:e=>{e.stopPropagation(),r(be.selectPort({type:o,nodeId:t,portId:n}))},onMouseUp:()=>{r(be.portMouseUp({nodeId:t,portId:n,PortType:o}))}},f.createElement(Wn,{visible:s}))},Xn=e=>{const{id:t,port:n,type:o}=e,r=[];for(let s=1;s<=n[o];s++)r.push(f.createElement(Hn,{key:s,nodeId:t,portId:s,type:o}));return f.createElement("div",{className:`${o}puts`},r)},Kn=E.div`
  display: inline-block;
  position: absolute;
  padding: 5px;
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
`,Yn=({id:e})=>{const t=Ce(g.exports.useMemo((()=>hn((e=>ke(e).config.drag),(e=>e))),[])),n=Ce((e=>ke(e).nodeId)),o=(e=>Ce(g.exports.useMemo((()=>hn((t=>ke(t).drawflow[e].pos),(e=>e))),[e])))(e),r=(e=>Ce(g.exports.useMemo((()=>hn((t=>{const n=ke(t).select;return(null==n?void 0:n.selectId)===e&&"node"===n.type}),(e=>e))),[e])))(e),s=Se(),a=g.exports.useRef(null),l=(e=>Ce(g.exports.useMemo((()=>hn((t=>{const n=JSON.parse(JSON.stringify(ke(t).drawflow[e]));return delete n.pos,n}),(e=>e))),[e])))(e),{port:c}=l;return g.exports.useEffect((()=>{if(a.current){const{offsetHeight:t,offsetWidth:n}=a.current;s(be.nodeSize({height:t,width:n,id:e}))}}),[s,e,l]),g.exports.useEffect((()=>{const t=(t,n)=>Array.from(n.querySelector(`.${t}puts`).children).map(((n,r)=>{const s=parseInt(getComputedStyle(n).left)+o.x,a=parseInt(getComputedStyle(n).top)+o.y;return{nodeId:e,pos:{x:s,y:a},portId:r+1,type:t}}));if(a.current){const e=t(ae.in,a.current),n=t(ae.out,a.current);s(be.pushPorts([...e,...n]))}}),[s,e,o]),g.exports.useEffect((()=>{if(a.current&&n-1===e&&t){const{offsetHeight:t,offsetWidth:n}=a.current;s(be.moveNode({nodeId:e,dx:.2*-n,dy:.2*-t}))}}),[]),f.createElement(Kn,{selected:r,ref:a,style:i({left:o.x,top:o.y},l.isSub?zn:Fn),isSub:l.isSub,onMouseDown:t=>{t.stopPropagation();const{clientX:n,clientY:o}=t;s(be.select({type:"node",selectId:e})),s(be.setMouseBlockDragPos({clientX:n,clientY:o}))},onContextMenu:()=>{},onDoubleClick:()=>{}},f.createElement(Rn,i({},l)),!l.isSub&&f.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},f.createElement("button",{onMouseDown:t=>{t.preventDefault(),s(be.toggleSubnodes({id:e})),s(mn()),t.stopPropagation()}},"sub"),f.createElement("button",{onMouseDown:t=>{t.preventDefault(),s(be.toggleChildren({id:e})),s(mn()),t.stopPropagation()}},"children")),f.createElement(Xn,{id:e,port:c,type:ae.in}),f.createElement(Xn,{id:e,port:c,type:ae.out}))},Zn=()=>{const e=Ce(g.exports.useMemo((()=>hn((e=>{const{drawflow:t}=ke(e);return Object.entries(t).filter((([e,{visible:t}])=>!1!==t)).map((([e])=>Number(e)))}),(e=>e))),[]));return f.createElement(f.Fragment,null,e.map((e=>f.createElement(Yn,{key:e,id:e}))))},Qn=E.div`
  position: relative;
  height: 100vh;
  //height: 100%;
  overflow: hidden;
  background-image: url(${"/Drawflow-react/assets/tile.07d222ee.png"});
  background-repeat: repeat;
  background-size: 30px 30px;
`,eo=E.div`
  width: 100%;
  height: 100%;
  position: relative;
`,to=(e,t,n,o)=>{var r;const[s,a]=(null==(r=getComputedStyle(e).transform.match(/^matrix\((.+)\)$/))?void 0:r[1].split(",").slice(-2).map(Number))||[0,0];e.style.transform=`translate(${s+t}px, ${a+n}px) scale(${o})`},no=E.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`,oo=E.button`
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
`,ro=()=>{(()=>{const e=Se(),[t]=Ie(re.backgroundOpacity,50),[n]=Ie(re.backgroundBlur,50),[o]=Ie(re.backgroundImageUrl,"");g.exports.useEffect((()=>{e(qt({windowConfig:{background:{opacity:t,blur:n,imageUrl:o}}}))}),[])})();const e=Ce(g.exports.useMemo((()=>hn((e=>{const t=ke(e),{config:{canvasTranslate:{x:n,y:o},zoom:r},newPathDirection:s,canvasDrag:a}=t;return{config:{canvasTranslate:{x:n,y:o},zoom:r},newPathDirection:s,canvasDrag:a}}),(e=>e))),[])),{config:{canvasTranslate:{x:t,y:n},zoom:o},newPathDirection:r,canvasDrag:s}=e,a=Se(),i=g.exports.useRef(null),l=g.exports.useRef(null);g.exports.useEffect((()=>{a(mn())}),[]),g.exports.useEffect((()=>{const{current:e}=i;e&&to(e,0,0,o.value)}),[s,o.value]),g.exports.useEffect((()=>{const{current:e}=i;if(e){const t=e.getBoundingClientRect(),n={x:t.x,y:t.y,width:e.clientWidth,height:e.clientHeight};a(Wt(n))}const{current:t}=l;if(t){const e=t.getBoundingClientRect(),n={x:e.x,y:e.y,width:t.clientWidth,height:t.clientHeight};a(qt({precanvas:n}))}}));const{opacity:c,blur:d,imageUrl:u}=Ce((e=>e.windowConfig.background));return f.createElement(Qn,{ref:l,className:"drawflow",tabIndex:0,onKeyDownCapture:e=>{"Delete"===e.key&&(a(be.deletePath()),a(be.deleteNode())),e.ctrlKey&&"c"===e.key&&a(be.copyNode()),e.ctrlKey&&"v"===e.key&&a($t())},onMouseDown:()=>{a(be.canvasDrag(!0)),a(be.unSelect())},onMouseUp:()=>{a(be.canvasMouseUp()),a(mn())},onMouseMove:e=>{const{clientX:t,clientY:n,movementX:r,movementY:l}=e,{current:c}=i;s&&c&&to(c,r,l,o.value),a(be.canvasMouseMove({clientX:t,clientY:n,movementX:r,movementY:l})),a(fn())},onMouseEnter:e=>{const{clientX:t,clientY:n}=e;a(zt({clientX:t,clientY:n}))},style:{backgroundColor:`rgba(251, 251, 251, ${c}%)`}},f.createElement(no,{style:{backgroundImage:`url(${u})`,filter:`blur(${d/10}px)`}}),f.createElement(kn,null),f.createElement(oo,{onClick:e=>{e.preventDefault(),a(ln())}},"Commit"),f.createElement(eo,{ref:i,style:{}},f.createElement(Zn,null),f.createElement(xn,null),r&&f.createElement(Sn,null)))};const so=E.div`
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

  //&::-webkit-scrollbar-thumb {
  //  background-color: #217ce8;
  //  border-radius: 1em;
  //}

  &::-webkit-scrollbar {
    //display: none;
    //height: 0.1em;
    width: 0.5em;
  }
`,ao=E(Ln)`
  /* min-height: 5em; */
  padding: 25px;
  order: 998;

  :hover {
    cursor: pointer;
  }
`,io=e=>{const t=Ce((e=>e.templates)),n=Se(),{searchWord:o,selectedGroup:r}=e,s=o.toLowerCase().split(" ").filter((e=>e.length>0));return f.createElement(so,null,t.map((e=>{const t=e.name+" "+e.description;return(0===r||e.nodes_group_id===r)&&(s.find((e=>t.toLowerCase().includes(e)))||!s.length)&&f.createElement(Vn,i({key:e.nodes_id},e))})),f.createElement(ao,{onClick:()=>{const e={flow_node_type_id:0,nodes_id:0,node_scrdata_id:0,flow_action_scrdata_id:0,order:0,nodes_group_id:0,name:"**",description:"**",icon_link:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",icon_link_selected:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:0,execute_node_specific_date_time:"2020-11-11T19:30",loop_cycles:0,node_settings_json:{},node_response_settings_json:{},loop_cycle_reached_jump_to_node:0,node_attributes:[],node_object_lists:{},node_story:"Node story"};e.nodes_group_id=r,n(sn(l(i({},e),{order:Math.max(...t.map((e=>e.order)))+1})))}},f.createElement(Dn,null)))},lo=E.div`
  width: 300px;
  order: -2;
  max-height: calc(100vh + 40px);
`,co=E.div`
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
`,uo=E.div`
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
`,po=({selectedGroup:e,setSelectedGroup:t})=>{Se();const n=Ce((e=>e.groups));return f.createElement(co,null,f.createElement(uo,{key:0,selected:0===e,onClick:()=>t(0)},"All"),Object.values(n).map((({id:n,node_group_name:o,node_group_order:r})=>f.createElement(uo,{key:n,selected:n===e,onClick:()=>t(n)},o))))},mo=E.input`
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
`,ho=E.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-top: 10px;
`,go=E.span`
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
`,fo=E.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,wo=({setSearchWord:e})=>{const t=Se();return f.createElement(ho,null,f.createElement(go,null,f.createElement(Cn,null)),f.createElement(mo,{type:"text",placeholder:"Search templates",onChange:t=>{e(t.target.value)}}),f.createElement(fo,{onClick:()=>t(qt({windowConfig:{sideId:ue.groupSettings}}))},f.createElement(Pn,{height:30})),f.createElement(yo,null))},vo=E.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  ${({opened:e})=>e&&$`
      transform: rotate(180deg);
    `};
`,yo=e=>{var t;const n=null==(t=Ce((e=>e.sidebarVisible)))||t,o=Se();return f.createElement(vo,{opened:!n,onClick:()=>o(Ut())},f.createElement(Mn,i({height:40},e)))},Eo=()=>{const[e,t]=g.exports.useState(""),[n,o]=g.exports.useState(0);return!1===Ce((e=>e.sidebarVisible))?null:f.createElement(lo,null,f.createElement(wo,{setSearchWord:t}),f.createElement(po,{selectedGroup:n,setSelectedGroup:o}),f.createElement(io,{selectedGroup:n,searchWord:e}))};const xo=E.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e8e8ef;
`,bo=E.div`
  display: flex;
  justify-content: space-between;
`,_o=$`
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
`,ko=E.div`
  display: flex;
  align-items: center;
`,So=E.button`
  ${_o};

  &:focus {
    background-color: #dfdfdf;
  }
`,Co=E.div`
  display: flex;
  align-items: center;
`,Io=E.button`
  margin: 0 10px;
  background-color: #eaecf1;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: none;
`,Mo=E.div`
  display: grid;
  //place-items: left;
  div {
  }
`,No=E.div`
  font-size: 16px;
  color: #393c44;
  font-family: Roboto, serif;
`,Po=E.div`
  color: #808292;
  font-size: 14px;
`,Do=E.button`
  ${_o};

  background-color: #e31c5c;
  display: inline-block;
  margin-right: 10px;
  color: white;
`,To=E.button`
  background-color: #217ce8;
  ${_o};
  color: white;
`,Oo=E.label`
  display: flex;
  align-items: center;
  justify-content: center;

  > span:first-child {
    display: inline-block;
    margin-right: 4px;
  }
`,Lo=()=>{const e=Se(),t=Ce((e=>e.flowInfo)),{flow_name:n,flow_description:o,flow_active:r}=t||{};return f.createElement(xo,null,f.createElement(bo,null,f.createElement(Io,null,f.createElement(In,{height:14})),f.createElement(Mo,null,f.createElement(No,null,n||"Loading ..."),f.createElement(Po,null,o||"Loading ..."))),f.createElement(ko,null,f.createElement(So,{onClick:()=>e(qt({windowConfig:{mainId:ce.mainFlow}}))},"Diagram view"),f.createElement(So,{onClick:()=>e(qt({windowConfig:{mainId:ce.codeEditor}}))},"Code editor"),f.createElement(So,null,f.createElement(Oo,null,f.createElement("span",null,"Active"),f.createElement(U,{checked:!!r,icons:{checked:null,unchecked:null},onChange:t=>e(qt({flowInfo:{flow_active:+t.target.checked}}))}))),f.createElement(So,{onClick:()=>e(qt({windowConfig:{sideId:ue.flowSettings}}))},f.createElement("img",{src:"/Drawflow-react/assets/flowsettings.758f2330.png",alt:""}))),f.createElement(Co,null,f.createElement(Do,null,"Delete flow"),f.createElement(To,{onClick:()=>e(tn())},"Save flow")))},jo=E.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  outline: none;
  border: none;
`,Ao=E.section`
  position: relative;
  flex: 0 0 400px;
  overflow-y: auto;
  max-height: calc(100vh + 40px);
  padding-top: 30px;
  border: 1px solid #e8e8ef;
`,Vo=E.label`
  margin: 10px;
  display: flex;
  flex-direction: column;
`,Bo=E.div`
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
`,Ro=E.div`
  background: #e8e8ef;

  label {
    margin: 10px;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 2px;
    }
  }
`,zo=()=>{const e=Ce((e=>e.flowInfo)),t=Se(),[n,o]=g.exports.useState([]);g.exports.useEffect((()=>{(async()=>{const e=await Qt(Yt.fetchBackgroundImages,{lab_test:1}),{flow_canvas_background_image:t}=e,n=t.map((({image_link:e})=>e));o(n)})().then()}),[]);const{flow_name:r,flow_description:s,run_times_max:a,user_run_limit_seconds:c}=e||{},[d,u]=Ie(re.backgroundOpacity,50),[p,m]=Ie(re.backgroundBlur,50),[h,w]=Ie(re.backgroundImageUrl,""),v=(e,n)=>{const o=Object.keys(e)[0],r=e[o];return f.createElement("input",l(i({},n),{value:null!=r?r:"Loading ...",onChange:e=>{t(qt({flowInfo:{[o]:e.target.value}}))}}))};return f.createElement(Ao,null,f.createElement(jo,{onClick:()=>t(qt({windowConfig:{sideId:ue.none}}))},f.createElement(Nn,{width:19,height:19})),f.createElement(Vo,null,"Flow name:",v({flow_name:r},{type:"text"})),f.createElement(Vo,null,"Flow description:",v({flow_description:s},{type:"text"})),f.createElement(Vo,null,"Max run times:",v({run_times_max:a},{type:"number"})),f.createElement(Vo,null,"User run limit seconds:",v({user_run_limit_seconds:c},{type:"number"})),f.createElement(Ro,null,f.createElement("label",null,"Opacity:",f.createElement("input",{type:"range",value:null!=d?d:0,min:0,max:100,onChange:e=>{const n=+e.target.value;u(n),t(qt({windowConfig:{background:{opacity:n}}}))}})),f.createElement("label",null,"Blur:",f.createElement("input",{onChange:e=>{const n=+e.target.value;m(n),t(qt({windowConfig:{background:{blur:n}}}))},type:"range",min:0,max:100,value:p})),f.createElement(Bo,null,n.map((e=>f.createElement("button",{key:e,onClick:()=>{w(e),t(qt({windowConfig:{background:{imageUrl:e}}}))}},f.createElement("img",{style:{border:h===e?"2px solid blue":""},src:e,alt:"Background image"})))))))},Fo=E.button`
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
`,Wo=E.div``,$o=E.div`
  padding: 0 10px 10px;
  position: relative;
  border: 1px solid #e8e8ef;
  flex: 0 0 300px;
  overflow-y: auto;
  max-height: 100%;
`,Uo=E.div`
  margin-bottom: 15px;
  padding: 5px;
  border-bottom: 2px solid lightgray;
`,qo=E.span`
  color: blue;

  ::before {
    margin-left: 8px;
    content: " ID.";
  }
`,Go=E(Fo)`
  text-align: center;
`,Jo=E(Fo)`
  margin-left: 5px;
`,Ho=E(Fo)`
  margin-left: 5px;
`,Xo=E.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 8px;
`,Ko=E.h2`
  text-align: center;
  border-bottom: 2px solid blue;
  color: #217ce8;
`,Yo=E.input`
  margin-right: 10px;
  font-weight: bolder;
  border: 1px solid #217ce8;
  font-size: 0.9em;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 5px;
  width: 90%;
`,Zo=E.textarea`
  border-radius: 5px;
  border: 1px solid #217ce8;

  /* flex: 1; */
  width: 90%;
  /* text-align: center; */
`,Qo=()=>{var e;const t=Ce((e=>e.groups)),n=Se(),[o,r]=g.exports.useState(t),s=(e,t)=>{const n=i(i({},o[e]),t);r(l(i({},o),{[e]:n}))};if(Object.keys(t).length!==Object.keys(o).length){const n={};for(const[r,s]of Object.entries(t))n[Number(r)]=d.merge(s,null!=(e=o[Number(r)])?e:{});r(n)}return f.createElement($o,null,f.createElement(jo,{onClick:()=>n(qt({windowConfig:{sideId:ue.none}}))},f.createElement(Nn,{width:19,height:19})),f.createElement(Ko,null,"Node groups"),Object.values(o).map((({id:e,node_group_name:t,node_group_order:r,node_group_description:a})=>f.createElement(Uo,{key:e},f.createElement(Xo,null,f.createElement(qo,null,e),f.createElement(Jo,{onClick:()=>{window.confirm(`Do you really wanna delete group ${t}, ID.${e}`)&&n(on({id:e,delete:1}))}},"Delete"),f.createElement(Ho,{onClick:()=>{window.confirm(`Do you really wanna save group ${t}, ID.${e}`)&&n(on(o[e]))}},"Save")),f.createElement(Yo,{value:t,type:"text",onChange:t=>{s(e,{node_group_name:t.target.value})}}),f.createElement(Zo,{value:a,onChange:t=>{s(e,{node_group_description:t.target.value})}})))),f.createElement(Wo,null,f.createElement(Go,{onClick:()=>{n(on({id:0,node_group_order:0,node_group_name:"Group name",node_group_description:"Group description"}))}},"Add new")))};const er=E.div`
  flex: 1;
  height: 100%;
  ${({shift:e})=>e&&$`
      div.ql-toolbar.ql-snow {
        padding-left: 40px;
      }

      .jsoneditor-menu {
        padding-left: 40px;
      }
    `}
`,tr=({values:e,setValues:t})=>{const n=Ce((e=>e.sidebarVisible)),o=g.exports.useRef(null),r=g.exports.useRef();return g.exports.useEffect((()=>{if(o.current&&!r.current){const e={mode:"tree",modes:["code","form","text","tree","view","preview"],onChangeText(e){try{const n=JSON.parse(e);t(n)}catch(n){console.log({e:n})}}};r.current=new q(o.current,e)}return()=>{var e;null==(e=r.current)||e.destroy()}}),[]),g.exports.useEffect((()=>{r.current&&JSON.stringify(r.current.get())!==JSON.stringify(e)&&r.current.update(e)}),[e]),f.createElement(er,{shift:!(null==n||n),ref:o})},nr=(e,t,n)=>{const o=g.exports.useCallback((n=>{e.current&&!e.current.contains(n.target)&&t(n)}),[e,t]);g.exports.useEffect((()=>{const e=()=>document.removeEventListener("mousedown",o);if(!n)return document.addEventListener("mousedown",o),e;e()}),[o,n])},or=E.details`
  summary svg {
    transform: rotate(-90deg);
  }

  &[open] > summary:first-child svg {
    transform: rotate(90deg);
  }

  summary ~ * {
    margin-left: 10px;
  }
`,rr=E(or)`
  position: relative;

  summary ~ * {
    margin-left: ${({leftShift:e})=>e};
  }
`,sr=E.div`
  cursor: pointer;
  margin-top: 0.2em;
  padding: 0.4em;
  border-radius: 0.3em;
  background: #8db6f6;

  &:hover {
    background: #3377e4;
  }
`,ar=E.div`
  display: flex;
  margin-left: 1em;

  & > * {
    margin-left: 0.1em;
    //padding: 1em;
  }

  summary {
    padding-right: 0.3em;
  }
`,ir=E.button`
  background-color: white;
  border: 0;
  border-radius: 0.4em;
  padding: 0.3em;
  margin: 0.5em;
`,lr=E.div`
  display: grid;
  grid-template-columns: auto 1fr;
  flex: 1;
`,cr=E.form`
  min-width: fit-content;
`,dr=E.div`
  font-weight: bold;
`,ur=E.div``,pr=E.div`
  display: grid;
  gap: 0.3em;
`,mr=E.header`
  padding: 10px;
  display: flex;
  align-items: center;
  color: #1f1a1a;
  min-width: fit-content;
  ${({shift:e})=>e&&$`
      padding-left: 0;
    `}
`,hr=E.img`
  padding: 8px;
  margin-right: 10px;
  border: 3px solid #8db6f6;
  border-radius: 15px;
  max-height: 50px;
  max-width: 50px;
`,gr=E(or)``,fr=E.summary`
  color: #e0ebfd;
  background-color: #8db6f6;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 30px;
  margin-top: 0.05em;
`,wr=E.span`
  display: grid;
  place-items: center;

  svg {
    height: 1em;
    width: 1.4em;
  }
`,vr=E.label`
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 2px solid blue;
`,yr=E.div``,Er=E.div`
  flex: 1;
  height: max-content;
`,xr=E.div`
  margin-left: -0.2em;
`,br=E(Fo)``,_r=E(Fo)``,kr=E(Fo)``,Sr=E.div`
  text-align: center;
`,Cr=E.button`
  text-align: center;
  padding: 0;
  margin: 0;
  border: 0;
  background: 0;
`,Ir=E.div`
  position: relative;
  display: grid;
  place-items: center;
  //background-color: blue;
  margin-left: 0.2em;
`,Mr=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Nr=E.div`
  position: absolute;
  z-index: 1;
  left: 0;
  width: max-content;
  max-width: 30vw;
  padding: 10px;
  background-color: #f5f0e5;
  border: 3px solid #3883fa;
  border-radius: 10px;
`,Pr=E(Nr)`
  //position: absolute;
  left: 100%;
  //right: -100%;
  top: 0;
  //background-color: red;
`,Dr=({children:e})=>f.createElement(fr,null,f.createElement(wr,null,f.createElement(In,null)),f.createElement("span",null,e)),Tr=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Or=e=>{un.dispatch(qt({windowConfig:{id:e,mainId:ce.nodeSettings}}))},Lr=({node:e,getNextListFromNode:t})=>{const{id:n,nodeState:{positionNumber:o,data:{name:r}}}=e;return f.createElement(rr,{leftShift:"1em"},f.createElement(Dr,null,r," #",n,":",o,f.createElement(ir,{onClick:()=>Or(n),key:n},"Jump")),f.createElement(yr,null,t(e).map((e=>f.createElement(Lr,{getNextListFromNode:t,key:e.id,node:e})))))},jr=e=>{const{render:t,list:n,title:o}=e,r=g.exports.useRef(null);return nr(r,(()=>{r.current&&(r.current.open=!1)})),f.createElement(rr,{leftShift:"0",ref:r},f.createElement(Dr,null,o),n.length>0&&f.createElement(Nr,null,n.map(t)))},Ar=({id:e})=>{const t=Ce(ke),n=new ve(t).getNode(e),{subnodes:o,out1:r,prevDirectNodes:s}=n,a=({nodeState:{positionNumber:e,id:t,data:{name:n}}})=>f.createElement(sr,{onClick:()=>Or(t),key:t},n," #",t,":",e);return f.createElement(ar,null,f.createElement(jr,{list:o,render:a,title:"Subnodes"}),f.createElement(jr,{list:s,render:a,title:"Prev"}),f.createElement(jr,{list:r,render:e=>f.createElement(Lr,{getNextListFromNode:({out1:e})=>e,key:e.id,node:e}),title:"Next"}))};Ar.propTypes={id:G.number};const Vr={flow_node_type_id:0,nodes_id:0,node_scrdata_id:0,flow_action_scrdata_id:0,order:0,nodes_group_id:0,name:"**",description:"**",icon_link:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",icon_link_selected:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:0,execute_node_specific_date_time:"2020-11-11T19:30",loop_cycles:0,node_settings_json:{},node_response_settings_json:{},loop_cycle_reached_jump_to_node:0,node_attributes:[],node_object_lists:{},node_story:"Node story"},Br=g.exports.createContext({type:"template"}),Rr=g.exports.createContext({setFormValues:null}),zr=({setFormValues:e,control:t,remount:n,defaultValue:o})=>{const r=J({control:t,defaultValue:o}),[s,a]=g.exports.useState(!1);return f.createElement("div",{onMouseLeave:()=>s&&n()},f.createElement(tr,{values:r,setValues:t=>{a(!0),e(t)}}))},Fr=({path:e,obj:t,RenderElement:n})=>{var o;if("object"!=typeof t||null===t)return f.createElement(n,{path:e});const r=le(t).map((o=>{const r=t[o];return f.createElement(Fr,{key:[...e,o].join("."),path:[...e,o],obj:r,RenderElement:n})})),s=e[e.length-1],a=null!=(o=Jt[s])?o:Ht(s.replace(/_/g," "));return f.createElement(or,null,f.createElement(Dr,null,a),f.createElement(yr,null,r))},Wr=({pathToFieldValue:e})=>{var t;const[n,o]=g.exports.useState(!1),{getValues:r,setValue:s}=Y(),a=r(),i=null!=(t=a.node_settings_json.jparam_settings)?t:[],l=a.this_node_unique_id,c=Ce(ke),d=new ve(c).getNode(l),{prevDirectNodes:u}=d,p=g.exports.useRef(null);return nr(p,(()=>n&&o(!1)),!n),f.createElement(Ir,{ref:p},f.createElement(Cr,{onClick:()=>o(!n)},f.createElement(Pn,{height:15})),n&&f.createElement(Pr,null,f.createElement(or,null,f.createElement(Dr,null,"Prev nodes"),u.length>0&&f.createElement(yr,{style:{zIndex:2}},u.map((({nodeState:{positionNumber:t,id:n,data:o}})=>{const l=({path:t})=>{const o=t[t.length-1],l=Ce((e=>{const o=ke(e),{data:r}=o.drawflow[n];return((e,t)=>{for(const n of t){if(!(n in e))return;e=e[n]}return e})(r,t)}));return f.createElement(Tr,null,f.createElement("span",{onClick:()=>{const o=`&%jparam:${a.this_node_unique_id}:${i.length}%&`,l={replace_this_element:e.slice(1).join(","),replace_tag:o,with_this_element_value:{node_unique_id:n,settings:Number("node_settings_json"===e[0]),parameter:t.slice(1).join(",")}};i.push(l),s("node_settings_json.jparam_settings",i);const c=e.join("."),d=r(c);"string"==typeof d&&s(c,d+o)}},f.createElement(Dn,{height:15})),f.createElement("span",null,o,":"),f.createElement("span",null,l))};return f.createElement(or,{key:n},f.createElement(Dr,null,o.name," $",n,":",t),f.createElement(Fr,{RenderElement:l,obj:o.node_settings_json,path:["node_settings_json"]}),f.createElement(Fr,{RenderElement:l,obj:o.node_response_settings_json,path:["node_response_settings_json"]}))}))))))},$r=({path:e})=>{const{type:t}=g.exports.useContext(Br),n=e[e.length-1],o=`${e.join(".")}`,r=Ht(n.replace(/_/g," "));return f.createElement(vr,null,r,":",f.createElement(Mr,null,f.createElement(K,{name:o,render:({field:e})=>{const{value:t}=e,o=null===t;(e=>{const t=!(n in Vr)||null===e||typeof Vr[n]==typeof e;t||console.log({key:n,value:e,properValue:Vr[n]})})(t);const r=n in Vr?Vr[n]:t,s="string"==typeof r||o?"text":typeof r;return f.createElement("input",l(i({type:s},e),{value:null!=t?t:"",onChange:t=>{const{value:n}=t.target;e.onChange("number"===s?parseInt(n):n)}}))}}),"node"===t&&f.createElement(Wr,{pathToFieldValue:e})))},Ur=e=>{var t;const{type:n}=g.exports.useContext(Br),o=Se(),{defaultValues:r,setControl:s,id:a}=e,c=H({defaultValues:JSON.parse(JSON.stringify(r))}),{handleSubmit:d,formState:{errors:u},reset:p,control:m,getValues:h}=c;g.exports.useEffect((()=>{s(m)}),[]);const w=h();let{name:v,description:y,icon_link:E}=w;if([v,y,E].includes(void 0)&&"flow_node"in w){const{node_name:e,node_description:t,node_icon_link:n}=w.flow_node;v=e,y=t,E=n}const x=null==(t=Ce((e=>e.sidebarVisible)))||t;return f.createElement(X,i({},c),f.createElement(cr,{onSubmit:d((e=>{e=h(),"template"===n&&o(sn(JSON.parse(JSON.stringify(e)))),"node"===n&&o(be.updateNode(JSON.parse(JSON.stringify(e))))}))},f.createElement(mr,{shift:!x},!x&&f.createElement(xr,null,f.createElement(yo,null)),f.createElement(hr,{src:E}),f.createElement(pr,null,f.createElement(dr,null,v),f.createElement(ur,null,y)),"node"===n&&f.createElement(Ar,{id:a})),f.createElement(gr,{open:!0},f.createElement(Dr,null,"Default settings"),f.createElement(yr,null,Object.entries(w).map((([e,t])=>"object"==typeof t&&null!==t||e in Jt?null:f.createElement($r,{key:e,path:[e]}))))),le(Jt).map((e=>w[e]?f.createElement(Fr,{RenderElement:$r,key:e,obj:w[e],path:[e]}):null)),0!==Object.keys(u).length&&f.createElement("div",null,f.createElement("pre",null,JSON.stringify(u,null,2))),f.createElement(Sr,null,f.createElement(br,{type:"submit"},"Save"),f.createElement(kr,{type:"reset",onClick:()=>p()},"Reset"),f.createElement(_r,{type:"button",onClick:()=>{"template"===n&&o(sn(l(i({},h()),{delete:1})))}},"Delete"))))},qr=({json:e,id:t})=>{const[n,o]=g.exports.useState(0),[r,s]=g.exports.useState(0),[a,i]=g.exports.useState(e),[l,c]=g.exports.useState(),d=e=>{i(e),o((e=>e+1))};return f.createElement(Rr.Provider,{value:{setFormValues:d}},f.createElement(Er,null,f.createElement(lr,null,f.createElement(Ur,{key:`leftBar-${n}`,defaultValues:a,setControl:c,id:t}),l&&f.createElement(zr,{key:`rightBar-${r}`,remount:()=>{s((e=>e+1))},setFormValues:d,control:l,defaultValue:a}))))},Gr=({id:e})=>{const t=Ce((t=>ke(t).drawflow[e].data));return f.createElement(Br.Provider,{value:{type:"node"}},f.createElement(qr,{json:t,id:e}))},Jr=({id:e})=>{const t=Ce((t=>t.templates.find((({nodes_id:t})=>t===e))));return void 0===t?f.createElement("div",null,"Loading..."):f.createElement(Br.Provider,{value:{type:"template"}},f.createElement(qr,{json:t,id:e}))},Hr=E.div`
  display: flex;
  align-items: normal;
  overflow-x: auto;

  &::-webkit-scrollbar-thumb {
    background-color: #2986f5;
  }

  &::-webkit-scrollbar {
    height: 5px;
  }
`,Xr=E.div`
  flex: 1;
  order: -1;
  width: 0;
`,Kr=E.main`
  display: flex;
  position: relative;
`,Yr=E.div`
  display: flex;
`,Zr=()=>{const e=Ce((e=>e));return f.createElement(tr,{values:e,setValues:()=>null})},Qr=E.button`
  white-space: nowrap;
  //display: inline-block;
  ${({selected:e})=>e&&$`
      font-weight: bold;
    `}
`,es=()=>{var e;const t=null==(e=Ce((e=>e.sidebarVisible)))||e,n=Ce((e=>e.flows)),o=Ce((e=>e.flows.length)),r=Ce((e=>e.version)),s=Se(),a=[t?null:f.createElement(yo,{style:{height:"2em"},key:-1}),f.createElement(Qr,{key:0,selected:0===r,onClick:()=>s(dn(0))},"Prototyping",n[0]&&":"+Object.keys(n[0].drawflow).length)];for(let i=o-1;i>0;--i)a.push(f.createElement(Qr,{key:i,selected:i===r,onClick:()=>s(dn(i))},"Version ",i,n[i]&&":"+Object.keys(n[i].drawflow).length));return f.createElement(Hr,null,a)},ts=()=>f.createElement(Xr,null,f.createElement(es,null),f.createElement(ro,null)),ns=()=>{var e;Se();const t=null==(e=Ce((e=>e.sidebarVisible)))||e,n=Ce((e=>e.windowConfig.mainId)),o=Ce((e=>e.windowConfig.id)),r=Ce((e=>e.version));return n===ce.templateNodeSettings?f.createElement(f.Fragment,null,f.createElement(Jr,{key:o,id:o})):n===ce.nodeSettings?f.createElement(f.Fragment,null,f.createElement(Gr,{key:o,id:o})):n===ce.mainFlow?f.createElement(ts,{key:r}):n===ce.codeEditor?f.createElement(f.Fragment,null,f.createElement("span",{style:{position:"absolute",zIndex:2,backgroundColor:"white",top:-8}},!t&&f.createElement(yo,null)),f.createElement(Zr,null)):null},os=()=>{const e=Ce((e=>e.windowConfig.sideId));return e===ue.flowSettings?f.createElement(zo,null):e===ue.groupSettings?f.createElement(Qo,null):null},rs=E.div`
  width: calc(100vw - 408px);
  //border-right: 2px solid lightgray;
`,ss=()=>{const e=Se();return g.exports.useEffect((()=>{e(en()),e(nn()),e(rn()),e(cn())}),[]),f.createElement(Yr,null,f.createElement(rs,null,f.createElement(Lo,null),f.createElement(Kr,null,f.createElement(Eo,null),f.createElement(ns,null),f.createElement(os,null))),f.createElement(Rt,null))};var as=Object.defineProperty,is=Object.getOwnPropertyDescriptor;((e,t,n,o)=>{for(var r,s=o>1?void 0:o?is(t,n):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,n,s):r(s))||s);o&&s&&as(t,n,s)})([me()],class{get yy(){return console.log("GET yy"),2}}.prototype,"yy",1);Z.render(f.createElement(g.exports.StrictMode,null,f.createElement(Q,{store:un},f.createElement(ss,null))),document.getElementById("root"));
