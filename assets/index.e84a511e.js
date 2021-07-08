var e,t,n,o,r,i,l,s,a,d,c,u,p,g,m=Object.defineProperty,h=Object.defineProperties,f=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&v(e,n,t[n]);if(b)for(var n of b(t))x.call(t,n)&&v(e,n,t[n]);return e},E=(e,t)=>h(e,f(t));import{l as _,c as k,u as C,a as S,C as I,R as N,q as D,b as P,d as O,e as M,f as j,g as L,h as T,A as z,_ as $,F as W,i as B,j as V,k as X,J as A,m as F,P as Y}from"./vendor.487704c8.js";(t=e||(e={})).START="START",t.MIDDLE="MIDDLE",t.END="END",(o=n||(n={})).Drawflow="drawflow",o.Groups="groups",(i=r||(r={})).NODE_SETTINGS="NODE_SETTINGS",i.GROUP_SETTINGS="GROUP_SETTINGS",(s=l||(l={})).backgroundOpacity="backgroundOpacity",s.backgroundBlur="backgroundBlur",s.backgroundImageUrl="backgroundImageUrl",(d=a||(a={})).in="in",d.out="out",(u=c||(c={}))[u.mainFlow=0]="mainFlow",u[u.codeEditor=1]="codeEditor",u[u.tem=2]="tem",u[u.templateNodeSettings=3]="templateNodeSettings",(g=p||(p={}))[g.groupSettings=0]="groupSettings",g[g.flowSettings=1]="flowSettings",g[g.none=2]="none";class G{constructor(e,t){this.spacingX=40,this.spacingY=60,this.id=e,this.flow=t,this.state=t.state,this.nodeState=this.state.drawflow[this.id]}get head(){return this.nodeState.head}get lane(){return this.nodeState.lane}get port(){return this.nodeState.port}get portInPos(){var e;return null==(e=this.state.ports.find((({nodeId:e,portId:t,type:n})=>e===this.id&&1===t&&n===a.in)))?void 0:e.pos}get outPorts(){return this.state.ports.filter((({type:e,nodeId:t})=>this.id===t&&e===a.out))}get parent(){var e;const t=null==(e=this.parentConnection)?void 0:e.startId;return t?this.flow.getNode(t):null}get parentConnection(){return this.state.connections.find((e=>{e||console.log({conn:e});const{endId:t,endPort:n}=e;return t===this.id&&1===n}))}get totalWidth(){if(!1===this.nodeState.visible)return 0;return Math.max(this.width+this.subnodesWidth,this.leftWidth+this.rightWidth)}get childrenTotalWidth(){const{out1:e}=this;if(!e.length)return 0;let t=0;return e.forEach((e=>{t+=e.totalWidth})),t+this.spacingX*(e.length-1)}alignChildren(){const{out1:e}=this;this.update({isSub:!1,port:{out:2}});let t=this.pos.x-(this.leftWidth-this.width/2);for(const o of e){const e=t+(o.leftWidth-o.width/2);o.setPos({x:e,y:this.pos.y+this.height+this.spacingY}),!1!==o.nodeState.visible&&(t+=o.totalWidth+this.spacingX),o.alignChildren()}const{subnodes:n}=this;n.length&&(t=this.pos.x+this.width+this.spacingX,n.forEach((e=>{e.update({isSub:!0,port:{out:1}}),e.setPos({x:t,y:this.pos.y+(this.height/2-e.height/2)}),t+=e.width+this.spacingX})))}get leftWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,n=this.width/2;if(!e.length)return n;const o=e[0].leftWidth,r=o+(t-o-e[e.length-1].rightWidth)/2;return Math.max(r,n)}get rightWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,n=this.width/2+this.subnodesWidth;if(!e.length)return n;const o=e[0].leftWidth,r=e[e.length-1].rightWidth,i=r+(t-o-r)/2;return Math.max(i,n)}get all2Successors(){const{subnodes:e,out1:t}=this,n=[...t];return e.forEach((e=>n.push(e))),this.out1.forEach((e=>n.push(e))),n}get allSuccessors(){const e=[...this.out1,...this.subnodes],t=[...e];return e.forEach((e=>t.push(...e.allSuccessors))),t}toggleVisibility(e){this.update({visible:e}),this.parentConnection&&(this.parentConnection.visible=e),this.outConnections.forEach((t=>{t.visible=e}))}toggleChildrenVisibility(){var e;const t=null==(e=this.nodeState.childrenVisibility)||e;this.update({childrenVisibility:!t});const{subnodes:n,allSuccessors:o}=this;o.forEach((e=>{n.includes(e)||e.toggleVisibility(!t)}))}toggleSubnodesVisibility(){var e;const t=null==(e=this.nodeState.subnodesVisibility)||e;this.update({subnodesVisibility:!t}),this.subnodes.forEach((e=>{e.toggleVisibility(!t)}))}get outConnections(){return this.state.connections.filter((({startId:e})=>e===this.id))}children(e){return this.state.connections.filter((({startId:t,startPort:n})=>t===this.id&&n===e)).map((e=>this.flow.getNode(e.endId)))}get out1(){return this.children(1)}get firstSubnode(){return this.children(2)[0]}get subnodes(){var e,t;return(null==(t=null==(e=this.firstSubnode)?void 0:e.flowLine)?void 0:t.flowLineNodes)||[]}get subnodesWidth(){return this.subnodes.reduce(((e,t)=>e+t.width+this.spacingX),0)}get isSub(){return null!==this.complexParentNode}get complexParentNode(){const e=this.parent;return e?e.firstSubnode===this?e:e.complexParentNode:null}get flowLine(){const e=[this];let t=this,n=t.firstSubnode;for(;1===t.out1.length;)t=t.out1[0],e.push(t),n=n||t.firstSubnode;return t.out1.length>1?null:{flowLineNodes:e,hasSubnodes:n}}get height(){return this.state.drawflow[this.id].height}get width(){return this.state.drawflow[this.id].width}get pos(){return this.state.drawflow[this.id].pos}setPos(e){const{pos:t}=this,{x:n,y:o}=e;this.flow.moveNode({nodeId:this.id,dx:n-t.x,dy:o-t.y})}update(e){const t=_.merge(this.nodeState,e);Object.assign(this.nodeState,t)}}class R{constructor(e){this.nodes={},this.distanceToConnect=100,this.distanceToDisconnect=0,this.state=e;const{drawflow:t}=this.state;Object.keys(t).map((e=>this.nodes[Number(e)]=new G(Number(e),this)))}get heads(){return Object.entries(this.nodes).filter((([,e])=>!e.parent)).map((e=>e[1]))}getNode(e){return this.nodes[e]}alignAll(){this.setLaneNumbers(),this.heads.forEach((e=>{e.alignChildren()}))}allowConnection(e){const{startId:t,startPort:n,endId:o}=e,r=this.getNode(o),i=this.getNode(t),l=2===n;if(r.parent||!1===i.nodeState.visible)return!1;const s=r.flowLine;return!((l||i.isSub)&&(!s||s.hasSubnodes))}addConnection(e){let{startId:t,startPort:n,endId:o,endPort:r}=e;const i=this.getNode(o),l=this.getNode(t),s=2===n;if(i.parent||!1===l.nodeState.visible)return!1;const a=i.flowLine;if((s||l.isSub)&&(!a||a.hasSubnodes))return!1;let d=null;if(s&&l.subnodes.length){if(!1===l.nodeState.subnodesVisibility){t=l.subnodes[l.subnodes.length-1].id,n=1,this.state.connections.push({startId:t,startPort:n,endId:o,endPort:r,visible:!0});const{flowLineNodes:e}=a;return void e.forEach((e=>e.toggleVisibility(!1)))}d=l.subnodes[0]}if(l.isSub&&l.out1.length&&(d=l.out1[0]),null!==d){const e=this.state.connections.find((e=>e.startId===t&&e.startPort===n&&e.endId===d.id&&1===e.endPort)),o=this.state.connections.indexOf(e);this.state.connections.splice(o,1);const{flowLineNodes:r}=a,i=r[r.length-1];this.state.connections.push({startId:i.id,startPort:1,endId:d.id,endPort:1,visible:!0})}this.state.connections.push({startId:t,startPort:n,endId:o,endPort:r,visible:!0})}moveNode({dx:e,dy:t,nodeId:n}){this.state.drawflow[n].pos.x+=e,this.state.drawflow[n].pos.y+=t}dragNode({dx:e,dy:t,nodeId:n}){this.moveNode({dx:e,dy:t,nodeId:n}),this.toggleAvailablePortToConnect(n)}toggleAvailablePortToConnect(e){const t=Date.now();if(this.state.computing&&t-this.state.computing<100)return;if(this.state.computing=t,!this.state.config.drag)return;const n=this.getNode(e),o=n.head;if(n.parentConnection){const e=this.state.connections.indexOf(n.parentConnection);this.state.connections.splice(e,1),this.alignAll()}const r=n.portInPos;if(!r)return;let i=null;Object.entries(this.nodes).filter((([,e])=>e.head!==o&&!1!==e.nodeState.visible)).forEach((([t,n])=>{Number(t)!==e&&n.outPorts.forEach((e=>{const{pos:t}=e,n=Math.hypot(r.x-t.x,r.y-t.y);n<this.distanceToConnect&&(null===i||n<i.distance)&&(i={port:e,distance:n})}))})),this.state.portToConnect=null!==i?i.port:void 0}setLaneNumbers(){let e=this.heads;for(e.forEach((e=>e.update({head:e.id,lane:0})));e.length;){const t=[];e.forEach((e=>{let n=e.lane+1;const{subnodes:o,head:r}=e;if(void 0===r)return void console.error("head is undefined in setLaneNumbers");if(o.length)for(const t of o)t.update({lane:n++,head:r});const i=e.children(1);i.forEach((e=>e.update({head:r,lane:n}))),t.push(...i)})),e=t}this.heads.forEach((e=>{const{head:t}=e;for(let n=0,o=0,r=[e];r.length;++n)r=Object.values(this.nodes).filter((e=>e.lane===n&&e.head===t)),r.forEach((e=>{e.update({positionNumber:o++})}))}))}}const J={nodeId:1,canvasDrag:!1,config:{drag:!1,connectionsLabelEnable:!1,canvasTranslate:{x:0,y:0},zoom:{value:1,max:2,min:.5,tick:.1}},drawflow:{},connections:[],connectionsLabel:{},ports:[],select:null,newPathDirection:null,modalType:null,editLock:!1,mouseBlockDragPos:{clientX:void 0,clientY:void 0}},U=e=>{new R(e).alignAll()},q=(e,{payload:t})=>{if("function"==typeof t)return void t(e);const n=_.merge(e,t);for(const o in n)e[o]=n[o]},K=k({name:n.Drawflow,initialState:J,reducers:{setState:q,setEditLock:(e,{payload:t})=>{e.editLock=t},align:U,moveNode:(e,t)=>new R(e).dragNode(t.payload),setMouseBlockDragPos:(e,{payload:t})=>{e.mouseBlockDragPos=t},unSelect:e=>{e.config.drag=!1,e.select=null},select:(e,{payload:t})=>{e.config.drag="node"===t.type,e.select=t},selectPort:(e,{payload:t})=>{const n=e.ports.find((({nodeId:e,portId:n,type:o})=>o===t.type&&n===t.portId&&e===t.nodeId));if(!n)return void console.error("Cannot find port to select in state.ports");const o=e.ports.indexOf(n);e.select={type:t.type,selectId:o}},moveCanvas:(e,{payload:{movementX:t,movementY:n}})=>{e.canvasDrag&&(e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=n)},canvasDrag:(e,{payload:t})=>{e.canvasDrag=t},canvasMouseMove:(e,{payload:{movementX:t,movementY:n,clientX:o,clientY:r}})=>{var i;if(e.clientCurrentMousePos={clientX:o,clientY:r},e.canvasDrag)e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=n;else if((null==(i=e.select)?void 0:i.type)===a.out)e.newPathDirection={clientX:o,clientY:r};else if(e.config.drag&&e.select){const t=e.select.selectId,{clientX:n,clientY:i}=e.mouseBlockDragPos;e.mouseBlockDragPos={clientX:o,clientY:r};const l=e.config.zoom.value,s=(o-n)/l,a=(r-i)/l;new R(e).dragNode({nodeId:t,dy:a,dx:s})}},canvasMouseUp:e=>{var t,n;const o=new R(e);if(e.portToConnect&&(null==(t=e.select)?void 0:t.selectId)){const{nodeId:t,portId:n}=e.portToConnect,r=e.select.selectId,i=1;o.addConnection({startId:t,startPort:n,endId:r,endPort:i})}e.portToConnect=void 0,e.newPathDirection=null,e.canvasDrag=!1,e.config.drag=!1,(null==(n=e.select)?void 0:n.type)===a.out&&(e.select=null),o.alignAll()},deleteNode:e=>{const{connections:t,drawflow:n,ports:o,select:r}=e;if("node"!==(null==r?void 0:r.type))return;const{selectId:i}=r;t.forEach((({endId:e,startId:n},o)=>{[n,e].includes(i)&&delete t[o]})),o.forEach((({nodeId:e},t)=>{e===i&&delete o[t]})),delete n[i],e.select=null},deletePath:e=>{const{connections:t,select:n}=e;"path"===(null==n?void 0:n.type)&&(console.log("delete"),t.splice(n.selectId,1))},load:(e,{payload:t})=>(Object.assign(e,J),e.drawflow=t.drawflow,e.nodeId=Object.keys(t.drawflow).length+1,e.connections=t.connections,e),portMouseUp:(e,{payload:{nodeId:t,portId:n,PortType:o}})=>{const{select:r}=e;if(o!==a.in||!r)return;const i=e.ports[r.selectId],l=t,s=n,d=i.nodeId,c=i.portId;if(d===l)return;new R(e).addConnection({startId:d,startPort:c,endId:l,endPort:s})},clear:()=>J,pushPorts:(e,{payload:t})=>{if(0===t.length)return;const{nodeId:n}=t[0];e.ports=e.ports.filter((e=>e.nodeId!==n)),e.ports.push(...t)},zoom:(e,{payload:t})=>{const{zoom:n}=e.config,{value:o,max:r,min:i,tick:l}=n,s=o+(t?l:-l);s<=r&&s>=i&&(n.value=s),null===t&&(e.config.canvasTranslate={x:0,y:0},n.value=1)},nodeSize:(e,{payload:{height:t,width:n,id:o}})=>{e.drawflow[o].height=t,e.drawflow[o].width=n},toggleSubnodes:(e,{payload:{id:t}})=>{new R(e).getNode(t).toggleSubnodesVisibility(),U(e)},toggleChildren:(e,{payload:{id:t}})=>{new R(e).getNode(t).toggleChildrenVisibility(),U(e)},copyNode:e=>{var t;"node"===(null==(t=e.select)?void 0:t.type)&&(e.nodeToCopyId=e.select.selectId)}}}),Q=K.actions,H=K.reducer,Z=e=>e.flows[e.version],ee=()=>C(),te=S;function ne(e,t){const[n,o]=I.exports.useState((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.log(n),t}}));return[n,t=>{try{const r=t instanceof Function?t(n):t;o(r),window.localStorage.setItem(e,JSON.stringify(r))}catch(r){console.log(r)}}]}const oe=e=>N.createElement("svg",E(y({},e),{viewBox:"0 0 16 16",fill:"none"}),N.createElement("path",{d:"M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),N.createElement("path",{d:"M14.0016 13.9996L11.1016 11.0996",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),re=e=>N.createElement("svg",E(y({},e),{viewBox:"0 0 10 14",fill:"none"}),N.createElement("path",{d:"M8 2L2.18437 6.84636C2.08842 6.92631 2.08842 7.07369 2.18437 7.15364L8 12",stroke:"#393C44",strokeWidth:"2.5",strokeLinecap:"round"})),ie=e=>N.createElement("svg",E(y({},e),{viewBox:"0 0 1792 1792"}),N.createElement("path",{fill:"#217CE8",d:"M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z"})),le=e=>N.createElement("svg",E(y({},e),{viewBox:"0 0 19 19",fill:"none"}),N.createElement("path",{d:"M14.25 4.75L4.75 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),N.createElement("path",{d:"M4.75 4.75L14.25 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),se=e=>N.createElement("svg",E(y({},e),{enableBackground:"new 0 0 512 512",viewBox:"0 0 512 512"}),N.createElement("g",null,N.createElement("path",{d:"m482.16 288.51 29.84-4.68v-55.66l-29.84-4.68c-24.56-4.14-33.19-36.67-13.99-52.45l22.52-18.55-27.71-47.98-27.56 10.32c-23.33 8.74-47-14.9-38.25-38.25l10.32-27.56-47.98-27.71-18.55 22.52c-15.75 19.16-48.3 10.61-52.45-13.99l-4.68-29.84h-55.66l-4.68 29.84c-4.17 24.56-36.67 33.19-52.45 13.99l-18.55-22.52-47.98 27.71 10.32 27.56c8.74 23.33-14.9 47-38.25 38.25l-27.56-10.32-27.71 47.98 22.52 18.55c19.12 15.74 10.67 48.29-13.99 52.45l-29.84 4.68v55.66l29.84 4.68c24.46 4.15 33.26 36.59 13.99 52.45l-22.52 18.55 27.71 47.98 27.56-10.32c23.22-8.7 47.04 14.81 38.25 38.25l-10.32 27.56 47.98 27.71 18.55-22.52c15.73-19.11 48.27-10.67 52.45 13.99l4.68 29.84h55.66l4.68-29.84c4.12-24.4 36.56-33.3 52.45-13.99l18.55 22.52 47.98-27.71-10.32-27.56c-8.7-23.22 14.81-47.04 38.25-38.25l27.56 10.32 27.71-47.98-22.52-18.55c-19.16-15.76-10.61-48.28 13.99-52.45zm-226.16 92.49c-68.93 0-125-56.07-125-125s56.07-125 125-125 125 56.07 125 125-56.07 125-125 125z",fill:"#7ed8f6"}),N.createElement("path",{d:"m468.17 340.96 22.52 18.55-27.71 47.98-27.56-10.32c-23.44-8.79-46.95 15.03-38.25 38.25l10.32 27.56-47.98 27.71-18.55-22.52c-15.89-19.31-48.33-10.41-52.45 13.99l-4.68 29.84h-27.83v-131c68.93 0 125-56.07 125-125s-56.07-125-125-125v-131h27.83l4.68 29.84c4.15 24.6 36.7 33.15 52.45 13.99l18.55-22.52 47.98 27.71-10.32 27.56c-8.75 23.35 14.92 46.99 38.25 38.25l27.56-10.32 27.71 47.98-22.52 18.55c-19.2 15.78-10.57 48.31 13.99 52.45l29.84 4.68v55.66l-29.84 4.68c-24.6 4.17-33.15 36.69-13.99 52.45z",fill:"#6aa9ff"}),N.createElement("path",{d:"m256 121c-74.44 0-135 60.56-135 135s60.56 135 135 135 135-60.56 135-135-60.56-135-135-135zm0 210c-41.35 0-75-33.64-75-75s33.65-75 75-75 75 33.64 75 75-33.65 75-75 75z",fill:"#6aa9ff"}),N.createElement("path",{d:"m391 256c0 74.44-60.56 135-135 135v-60c41.35 0 75-33.64 75-75s-33.65-75-75-75v-60c74.44 0 135 60.56 135 135z",fill:"#4895ff"}))),ae=e=>N.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},e),N.createElement("g",{transform:"matrix(1.06642 0 0 1.06642 -1.03 -1106.225)"},N.createElement("circle",{cx:"8.467",cy:"1044.829",r:"5.626",fill:"#c2e4f8"}),N.createElement("path",{fill:"#249fe6",fillRule:"evenodd",style:{lineHeight:"normal",textIndent:0,textAlign:"start",textDecorationLine:"none",textDecorationStyle:"solid",textDecorationColor:"#000",textTransform:"none",isolation:"auto",mixBlendMode:"normal"},d:"M 8 1 C 4.139959 1 1.0000428 4.1398846 1 8 C 0.99997942 11.860115 4.1399146 15 8 15 C 11.860086 15 15.00002 11.860115 15 8 C 14.999957 4.1398846 11.860041 1 8 1 z M 8 2 C 11.319604 2 13.999963 4.6803455 14 8 C 14.000018 11.319654 11.319644 14 8 14 C 4.6803565 14 1.9980292 11.319654 1.9980469 8 C 1.9980837 4.6803455 4.6803952 2 8 2 z M 7.9863281 4.0039062 A 0.50005001 0.50005001 0 0 0 7.4941406 4.5117188 L 7.5 7.5039062 L 4.5039062 7.5097656 A 0.50095123 0.50095123 0 0 0 4.5058594 8.5117188 L 7.5 8.5058594 L 7.5058594 11.5 A 0.50005001 0.50005001 0 1 0 8.5058594 11.5 L 8.5019531 8.5039062 L 11.494141 8.4980469 A 0.50005001 0.50005001 0 1 0 11.492188 7.4980469 L 8.5 7.5039062 L 8.4960938 4.5117188 A 0.50005001 0.50005001 0 0 0 7.9863281 4.0058594 L 7.9863281 4.0039062 z ",color:"#000",fontFamily:"sans-serif",fontWeight:400,overflow:"visible",transform:"matrix(.93772 0 0 .93772 .965 1037.328)","white-space":"normal"}))),de=e=>N.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 3",fill:"none"},e),N.createElement("circle",{cx:"1.2",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),N.createElement("circle",{cx:"5.9998",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),N.createElement("circle",{cx:"10.7996",cy:"1.2",r:"1.2",fill:"#C5C5D0"})),ce=D.button`
  position: absolute;
  right: 0.2em;
  top: 0.2em;
  display: grid;
  place-items: center;
  padding: 4px;
  padding-top: 8px;
  padding-right: 8px;
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
`,ue=D.div`
  /* width: min-content; */
  position: relative;
  display: grid;
  place-items: center;
  padding: 0.5em;

  background-color: white;
  box-shadow: 0px 4px 30px rgb(22 33 74 / 25%);
  border-radius: 5px;
  :hover {
    box-shadow: 0px 4px 30px rgb(22 33 74 / 15%);
    background-color: #f8f8f8;
  }
`,pe=D.img`
  max-height: 100%;
  max-width: 100%;
`,ge=D.span``,me=e=>{const{nodes_id:t}=e,n=ee(),o=I.exports.useRef(null),r=te((e=>e.precanvas));return N.createElement(ue,{ref:o,onMouseDown:e=>{if(void 0===Me)return;n(Me(t));const{current:i}=o;if(!i)return void console.error("No node to copy");const{left:l,top:s}=i.getBoundingClientRect(),a=e.clientX-l,d=e.clientY-s,c=i.cloneNode(!0);c.style.position="absolute",c.style.left=l+window.scrollX+"px",c.style.top=s+window.scrollY+"px",document.body.appendChild(c);const u=e=>{var t;const{clientX:n,clientY:o}=e;if(r){if(n>=r.x&&o>=r.y)return document.removeEventListener("mousemove",u),void(null==(t=c.parentNode)||t.removeChild(c));c.style.left=n-a+window.scrollX+"px",c.style.top=o-d+window.scrollY+"px"}else console.error("Canvas is not ready! Cannnot drag template")};document.addEventListener("mousemove",u),document.addEventListener("mouseup",(()=>{var e;document.removeEventListener("mousemove",u),null==(e=c.parentNode)||e.removeChild(c),n(Me(void 0))}),{once:!0});const{height:p,width:g}=getComputedStyle(i);c.style.height=p,c.style.width=g}},N.createElement(pe,{src:e.icon_link}),N.createElement(ge,null,e.name),N.createElement(ce,{onMouseDown:()=>{n(ze({windowConfig:{id:t,mainId:c.templateNodeSettings}}))}},N.createElement(de,{height:3,width:12})))},he=D.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, max-content));
  grid-auto-rows: minmax(1em, auto);
  grid-gap: 1em;
  background-color: #f5f5f5;

  overflow-y: auto;
  max-height: calc(100vh - 10%);
  /* width: 100%; */
`,fe=D(ue)`
  /* min-height: 5em; */
  padding: 25px;
  :hover {
    cursor: pointer;
  }
`,be=e=>{const t=te((e=>e.templates));ee();const{searchWord:n}=e,o=n.toLowerCase().split(" ").filter((e=>e.length>0));return N.createElement(he,null,t.map((e=>{const t=JSON.stringify(e,null,2);return(o.find((e=>t.toLowerCase().includes(e)))||!o.length)&&N.createElement(me,y({key:e.nodes_id},e))})),N.createElement(fe,null,N.createElement(ae,null)))},we=(e,t)=>{const n=(e.y-t.y)/2,o=e.x-t.x;return`M ${e.x} ${e.y} v ${-n} h ${-o} v ${-n} `},xe=(e,t,n,o)=>{const{x:r,y:i,width:l,height:s}=o;return{x:e*(l/(l*n))-r*(l/(l*n)),y:t*(s/(s*n))-i*(s/(s*n))}};var ve,ye;(ye=ve||(ve={}))[ye.getTemplateNodes=1156]="getTemplateNodes",ye[ye.postTemplateNodes=1157]="postTemplateNodes",ye[ye.getFlowDataVersion=1160]="getFlowDataVersion",ye[ye.postFlowDataVersion=1161]="postFlowDataVersion",ye[ye.getFlow=1162]="getFlow",ye[ye.postFlow=1163]="postFlow",ye[ye.fetchBackgroundImages=1164]="fetchBackgroundImages",ye[ye.getGroups=1154]="getGroups",ye[ye.postGroups=1155]="postGroups",ye[ye.getStepSettingsTemplates=1222]="getStepSettingsTemplates";const Ee=window.location.search,_e=new URLSearchParams(Ee).get("session_id");_e||(console.error("sessin_id is not provided!"),alert("sessin_id is not provided!"));const ke=async(e,t={})=>{const n=y({session_id:_e,sp_name:"OK",session_exp:"2021-02-12T02:57:45.453422",status:"OK",item_id:0,max_row_per_page:50,search_term:"",search_term_header:"",pagination:1,scrdata_id:e},t);return fetch("https://valerii.educationhost.cloud?csurl=https://tastypoints.io/akm/restapi.php",{method:"post",body:JSON.stringify({input:n}).replace(/'/g,"''")}).then((async e=>{let t=await e.json();if(!t.status||!t.data)throw console.error(t),alert(t),alert(JSON.stringify(t,null,2)),new Error(t);if(t=JSON.parse(t.data),t.response_error)throw console.error(t.response_error),alert(JSON.stringify(t.response_error,null,2)),new Error(t.response_error);if("OK"!==t.status&&"OK"!==t.sp_name)throw alert(JSON.stringify(t,null,2)),new Error(t.response_error);return t}))},Ce=P("fetchFlow",(async(e,{dispatch:t})=>{const n=await ke(1162,{item_id:25});if(null===n.flows)return void alert("Such flow do not exist or was deleted!");const o=n.flows[0];t($e.setStateAction({flowInfo:o}))})),Se=P("fetchFlow",(async(e,{getState:t})=>{const{flowInfo:n}=t();if(!n)return void console.error("Cannot save flow, data is not available");"OK"===(await ke(1163,{item_id:25,flows:[n]})).status?alert("Saved"):alert("Cannot save flow")})),Ie=P("fetchGroups",(async(e,{dispatch:t})=>{const n=await ke(1154),{flow_nodes_group:o}=n;return o.reduce(((e,t)=>(e[t.id]=t,e)),{})})),Ne=P("updateGroup",(async(e,{dispatch:t})=>{var n;console.log({group:e}),"delete"in e||(e.delete=0);const o=await ke(1155,{flow_nodes_group:[e],item_id:null!=(n=e.id)?n:0});console.log({resp:o}),"OK"===o.status?(t(Ie()),e.id||(e.id=o.item_id),alert(`Group ${e.id} updated`)):alert(`Error: cannot ${e.id?"update":"create"} group ${e.node_group_name}`)})),De=P("fetchTemplateNodes",(async()=>{const{flow_nodes:e}=await ke(1156,{});return console.log({flow_nodes:e}),e})),Pe=j("versions/changed"),Oe=j("addNewNode"),Me=j("dragTemplate"),je=j("canvasShapeUpdated"),Le=j("insertCopiedNode"),Te=j("toggleSidebar"),ze=j("setState"),$e={setStateAction:ze},We=M({reducer:O({version:0,flows:[J,J,J],templates:[],dragTemplate:0,groups:{},windowConfig:{id:0,mainId:c.mainFlow,sideId:p.none,background:{opacity:0,blur:0,imageUrl:""}}},(t=>{t.addCase(ze,q).addCase(Le,(e=>{const t=Z(e);if(void 0===t.nodeToCopyId)return;const{clientX:n,clientY:o}=t.clientCurrentMousePos,r=JSON.parse(JSON.stringify(t.drawflow[t.nodeToCopyId]));e.canvas?(r.pos=xe(n,o,t.config.zoom.value,e.canvas),t.drawflow[t.nodeId]=E(y({},r),{id:t.nodeId,height:0,width:0}),++t.nodeId):console.error("Canvas shape is not available")})).addCase(Pe,((e,{payload:t})=>{e.version=t})).addCase(Te,(e=>{var t;e.sidebarVisible=!(null==(t=e.sidebarVisible)||t)})).addCase(Oe,((t,{payload:{clientX:n,clientY:o}})=>{if(!t.dragTemplate)return;if(!t.canvas)return void console.error("Canvas shape is not available");const r=t.flows[t.version],i=(()=>{const t={flow_node_type_id:0,nodes_id:0,node_scrdata_id:0,flow_action_scrdata_id:0,order:0,nodes_group_id:0,name:"**",description:"**",icon_link:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",icon_link_selected:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:0,execute_node_specific_date_time:"2020-11-11T19:30",loop_cycles:0,node_settings_json:{},node_response_settings_json:{},loop_cycle_reached_jump_to_node:0,node_attributes:{},node_object_lists:{},node_story:"Node story"};return{id:0,type:e.MIDDLE,data:t,port:{in:1,out:2},pos:{x:-20,y:100},isSub:!1,height:0,width:0}})();i.pos=xe(n,o,r.config.zoom.value,t.canvas),r.mouseBlockDragPos={clientX:n,clientY:o},r.drawflow[r.nodeId]=E(y({},i),{id:r.nodeId,height:0,width:0}),r.select={type:"node",selectId:r.nodeId++},r.config.drag=!0,t.dragTemplate=void 0})).addCase(Me,((e,{payload:t})=>{e.dragTemplate=t})).addCase(je,((e,{payload:t})=>{e.canvas=t})).addCase(De.fulfilled,((e,{payload:t})=>{console.log(t),e.templates=t})).addCase(Ie.fulfilled,((e,{payload:t})=>{e.groups=t})).addMatcher((e=>e.type.startsWith(n.Drawflow)),((e,t)=>{e.flows[e.version]=H(e.flows[e.version],t)}))}))}),Be=D.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`,Ve=D.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
`,Xe=()=>{const e=te((e=>Z(e).editLock)),t=ee();return N.createElement(Be,null,!e&&N.createElement(Ve,null,"Clear"),N.createElement(Ve,{onClick:()=>t(Q.setEditLock(!e))},e?"UnLock":"Lock"))},Ae=D.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`,Fe=D.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  padding: 3px 10px;
`,Ye=()=>{const e=ee();return N.createElement(Ae,null,N.createElement(Fe,{onClick:()=>e(Q.zoom(!0))},"+"),N.createElement(Fe,{onClick:()=>e(Q.zoom(!1))},"-"),N.createElement(Fe,{onClick:()=>e(Q.zoom(null))},"reset"))},Ge=L(T,_.isEqual),Re=D.svg`
  position: absolute;
  overflow: visible;
`,Je=D.path`
  :hover {
    stroke-width: 6px;
    stroke: purple;
    cursor: pointer;
  }
  fill: none;
  stroke-width: 6px;
  stroke: steelblue;
  ${({selected:e})=>e&&z`
      stroke-width: 7px;
      stroke: red;
    `};
`,Ue=e=>{const{id:t,d:n}=e,o=(e=>te(I.exports.useMemo((()=>Ge((t=>{if(void 0===e)return!1;const n=Z(t).select;return"path"===(null==n?void 0:n.type)&&n.selectId===e}),(e=>e))),[e])))(t),r=ee();return N.createElement(Re,null,N.createElement(Je,{selected:o,d:n,onMouseDown:e=>{void 0!==t&&(e.stopPropagation(),r(Q.select({type:"path",selectId:t})))}}))},qe=()=>{var e;const t=null!=(e=te(I.exports.useMemo((()=>Ge((e=>{const t=Z(e);if(!t.select||t.select.type!==a.out||!t.newPathDirection)return void console.error("Cannot draw new path!");const n=t.ports[t.select.selectId];if(!n)return void console.error("No start port in newPath");const o=n.pos;if(!e.canvas)return void console.error("Canvas shape is not available");const{clientX:r,clientY:i}=t.newPathDirection,l=xe(r,i,t.config.zoom.value,e.canvas);return we(o,l)}),(e=>e))),[])))?e:"";return N.createElement(Ue,{d:t})},Ke=D.div`
  max-height: 100%;
  overflow: hidden;
`,Qe=e=>N.createElement(Ke,null,JSON.stringify(e,null,2)),He=100,Ze=60,et=D.div`
  width: 15px;
  height: 15px;
  border-radius: 60px;
  background-color: #217ce8;
  opacity: ${({visible:e})=>e?1:0};
  transform: scale(${({visible:e})=>e?1:0});
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
`,tt=D.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
`,nt=D(tt)`
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&z`
      left: 100%;
      top: 50%;
    `}
`,ot=D(tt)`
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&z`
      display: none;
    `}
`,rt=D(tt)`
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  ${({isSub:e})=>e&&z`
      left: 0;
      top: 50%;
    `}
`,it={[a.in]:[rt],[a.out]:[nt,ot]},lt=e=>{const{nodeId:t,portId:n,type:o}=e,r=ee(),i=(l=e,te(I.exports.useMemo((()=>Ge((e=>{const{portToConnect:t}=Z(e);if(void 0===t)return!1;const n=JSON.parse(JSON.stringify(t));return delete n.pos,_.isEqual(l,n)}),(e=>e))),[l])));var l;const s=(a=t,te(I.exports.useMemo((()=>Ge((e=>Z(e).drawflow[a].isSub),(e=>e))),[a])));var a;const d=it[o][n-1];return N.createElement(d,{isSub:s,onMouseDown:e=>{e.stopPropagation(),r(Q.selectPort({type:o,nodeId:t,portId:n}))},onMouseUp:()=>{r(Q.portMouseUp({nodeId:t,portId:n,PortType:o}))}},N.createElement(et,{visible:i}))},st=e=>{const{id:t,port:n,type:o}=e,r=[];for(let i=1;i<=n[o];i++)r.push(N.createElement(lt,{key:i,nodeId:t,portId:i,type:o}));return N.createElement("div",{className:`${o}puts`},r)},at=D.div`
  display: inline-block;
  position: absolute;
  padding: 5px;
  width: 200px;
  min-height: 60px;
  background-color: #d3d3d3;
  z-index: 1;
  cursor: move;

  ${({isSub:e})=>e&&z`
      height: ${Ze}px;
      width: ${He}px;
    `}
  ${({selected:e})=>e&&z`
      box-shadow: 0 2px 15px 2px #cacaca;
      z-index: 2;
    `};
`,dt=({id:e})=>{const t=te(I.exports.useMemo((()=>Ge((e=>Z(e).config.drag),(e=>e))),[])),n=te((e=>Z(e).nodeId)),o=(e=>te(I.exports.useMemo((()=>Ge((t=>Z(t).drawflow[e].pos),(e=>e))),[e])))(e),r=(e=>te(I.exports.useMemo((()=>Ge((t=>{const n=Z(t).select;return(null==n?void 0:n.selectId)===e&&"node"===n.type}),(e=>e))),[e])))(e),i=ee(),l=I.exports.useRef(null),s=(e=>te(I.exports.useMemo((()=>Ge((t=>{const n=JSON.parse(JSON.stringify(Z(t).drawflow[e]));return delete n.pos,n}),(e=>e))),[e])))(e),{port:d}=s;return I.exports.useEffect((()=>{if(l.current){const{offsetHeight:t,offsetWidth:n}=l.current;i(Q.nodeSize({height:t,width:n,id:e})),i(Q.align())}}),[i,e,s]),I.exports.useEffect((()=>{const t=(t,n)=>Array.from(n.querySelector(`.${t}puts`).children).map(((n,r)=>{const i=parseInt(getComputedStyle(n).left)+o.x,l=parseInt(getComputedStyle(n).top)+o.y;return{nodeId:e,pos:{x:i,y:l},portId:r+1,type:t}}));if(l.current){const e=t(a.in,l.current),n=t(a.out,l.current);i(Q.pushPorts([...e,...n]))}}),[i,e,o]),I.exports.useEffect((()=>{if(l.current&&n-1===e&&t){const{offsetHeight:t,offsetWidth:n}=l.current;i(Q.moveNode({nodeId:e,dx:.2*-n,dy:.2*-t}))}}),[]),N.createElement(at,{selected:r,ref:l,style:{left:o.x,top:o.y},isSub:s.isSub,onMouseDown:t=>{t.stopPropagation();const{clientX:n,clientY:o}=t;i(Q.select({type:"node",selectId:e})),i(Q.setMouseBlockDragPos({clientX:n,clientY:o}))},onContextMenu:()=>{},onDoubleClick:()=>{}},N.createElement(Qe,y(y({},s),o)),!s.isSub&&N.createElement(N.Fragment,null,N.createElement("div",{onClick:()=>{i(Q.toggleSubnodes({id:e}))}},"toggle sub"),N.createElement("div",{onClick:()=>{i(Q.toggleChildren({id:e}))}},"toggle children")),N.createElement(st,{id:e,port:d,type:a.in}),N.createElement(st,{id:e,port:d,type:a.out}),N.createElement("button",null,"X"))},ct=()=>{const e=te(I.exports.useMemo((()=>Ge((e=>{const{drawflow:t}=Z(e);return Object.entries(t).filter((([e,{visible:t}])=>!1!==t)).map((([e])=>Number(e)))}),(e=>e))),[]));return N.createElement(N.Fragment,null,e.map((e=>N.createElement(dt,{key:e,id:e}))))},ut=({id:e})=>{const t=(n=e,te(I.exports.useMemo((()=>Ge((e=>{var t,o;const r=Z(e),{startId:i,startPort:l,endId:s,endPort:d}=r.connections[n],c=null==(t=r.ports.find((e=>e.nodeId===i&&e.portId===l&&e.type===a.out)))?void 0:t.pos,u=null==(o=r.ports.find((e=>e.nodeId===s&&e.portId===d&&e.type===a.in)))?void 0:o.pos;return c&&u?we(c,u):""}),(e=>e))),[n])));var n;return N.createElement(Ue,{key:e,id:e,d:t})},pt=()=>{const e=te(I.exports.useMemo((()=>Ge((e=>{const{connections:t}=Z(e);return t.reduce(((e,t,n)=>(t.visible&&e.push(n),e)),[])}),(e=>e))),[])).map((e=>N.createElement(ut,{key:e,id:e})));return N.createElement(N.Fragment,null,e)};const gt=D.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-image: url(${"/Drawflow-react/assets/tile.07d222ee.png"});
  background-repeat: repeat;
  background-size: 30px 30px;
`,mt=D.div`
  width: 100%;
  height: 100%;
  position: relative;
`,ht=(e,t,n,o)=>{var r;const[i,l]=(null==(r=getComputedStyle(e).transform.match(/^matrix\((.+)\)$/))?void 0:r[1].split(",").slice(-2).map(Number))||[0,0];e.style.transform=`translate(${i+t}px, ${l+n}px) scale(${o})`},ft=D.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`,bt=()=>{(()=>{const e=ee(),[t]=ne(l.backgroundOpacity,50),[n]=ne(l.backgroundBlur,50),[o]=ne(l.backgroundImageUrl,"");I.exports.useEffect((()=>{e(ze({windowConfig:{background:{opacity:t,blur:n,imageUrl:o}}}))}),[])})();const{config:{zoom:e},newPathDirection:t,canvasDrag:n}=te(I.exports.useMemo((()=>Ge((e=>{const t=Z(e),{config:{zoom:n},newPathDirection:o,canvasDrag:r}=t;return{config:{zoom:n},newPathDirection:o,canvasDrag:r}}),(e=>e))),[])),o=ee(),r=I.exports.useRef(null),i=I.exports.useRef(null);I.exports.useEffect((()=>{const{current:t}=r;t&&ht(t,0,0,e.value)}),[n,e.value]),I.exports.useEffect((()=>{const{current:e}=r;if(e){const t=e.getBoundingClientRect(),n={x:t.x,y:t.y,width:e.clientWidth,height:e.clientHeight};o(je(n))}const{current:t}=i;if(t){const e=t.getBoundingClientRect(),n={x:e.x,y:e.y,width:t.clientWidth,height:t.clientHeight};o(ze({precanvas:n}))}}));const{opacity:s,blur:a,imageUrl:d}=te((e=>e.windowConfig.background));return N.createElement(gt,{ref:i,className:"drawflow",tabIndex:0,onKeyDownCapture:e=>{"Delete"===e.key&&(o(Q.deletePath()),o(Q.deleteNode())),e.ctrlKey&&"c"===e.key&&o(Q.copyNode()),e.ctrlKey&&"v"===e.key&&o(Le())},onMouseDown:()=>{o(Q.canvasDrag(!0)),o(Q.unSelect())},onMouseUp:()=>o(Q.canvasMouseUp()),onMouseMove:t=>{const{clientX:i,clientY:l,movementX:s,movementY:a}=t,{current:d}=r;n&&d&&ht(d,s,a,e.value),o(Q.canvasMouseMove({clientX:i,clientY:l,movementX:s,movementY:a}))},onMouseEnter:e=>{const{clientX:t,clientY:n}=e;o(Oe({clientX:t,clientY:n}))},style:{backgroundColor:`rgba(251, 251, 251, ${s}%)`}},N.createElement(ft,{style:{backgroundImage:`url(${d})`,filter:`blur(${a/10}px)`}}),N.createElement(Xe,null),N.createElement(Ye,null),N.createElement(mt,{ref:r,style:{}},N.createElement(ct,null),N.createElement(pt,null),t&&N.createElement(qe,null)))};const wt=D.div`
  width: 300px;
  order: -2;
  max-height: 100vh;
`,xt=D.div`
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

  :hover {
    max-height: 500px;
    div {
      order: unset;
    }
  }
`,vt=D.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-family: Roboto;
  color: #808292;
  font-size: 14px;
  height: 48px;
  width: calc(88% / 3);
  text-align: center;
  position: relative;
  color: black;
  font-size: medium;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
  ${({selected:e})=>e&&z`
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
`,yt=({selectedGroup:e,setSelectedGroup:t})=>{ee();const n=te((e=>e.groups));return N.createElement(xt,null,Object.values(n).map((({id:n,node_group_name:o,node_group_order:r})=>N.createElement(vt,{key:n,selected:n===e,onClick:()=>t(n)},o))))},Et=D.input`
  display: block;
  width: 75%;
  height: 40px;
  background-color: #fff;
  border: 1px solid #e8e8ef;
  box-shadow: 0px 2px 8px rgb(34 34 87 / 5%);
  border-radius: 5px;
  text-indent: 35px;
  font-size: 16px;
  margin-right: 3px;
`,_t=D.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`,kt=D.span`
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
`,Ct=D.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,St=({setSearchWord:e})=>{const t=ee();return N.createElement(_t,null,N.createElement(kt,null,N.createElement(oe,null)),N.createElement(Et,{type:"text",placeholder:"Search templates",onChange:t=>{e(t.target.value)}}),N.createElement(Ct,{onClick:()=>t(ze({windowConfig:{sideId:p.groupSettings}}))},N.createElement(se,{height:30})),N.createElement(Nt,null))},It=D.div`
  :hover {
    cursor: pointer;
  }

  ${({opened:e})=>e&&z`
      transform: rotate(180deg);
    `};
`,Nt=e=>{var t;const n=null==(t=te((e=>e.sidebarVisible)))||t,o=ee();return N.createElement(It,E(y({},e),{opened:!n,onClick:()=>o(Te())}),N.createElement(ie,{height:40}))},Dt=()=>{const[e,t]=I.exports.useState(""),[n,o]=I.exports.useState(0);return!1===te((e=>e.sidebarVisible))?null:N.createElement(wt,null,N.createElement(St,{setSearchWord:t}),N.createElement(yt,{selectedGroup:n,setSelectedGroup:o}),N.createElement(be,{searchWord:e}))};const Pt=D.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e8e8ef;
`,Ot=D.div`
  display: flex;
  justify-content: space-between;
`,Mt=z`
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
`,jt=D.div`
  display: flex;
  align-items: center;
`,Lt=D.button`
  ${Mt}
  :focus {
    background-color: #dfdfdf;
  }
`,Tt=D.div`
  display: flex;
  align-items: center;
`,zt=D.button`
  margin: 0 10px;
  background-color: #eaecf1;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: none;
`,$t=D.div`
  display: grid;
  place-items: left;
  div {
  }
`,Wt=D.div`
  font-size: 16px;
  color: #393c44;
  font-family: Roboto;
`,Bt=D.div`
  color: #808292;
  font-size: 14px;
`,Vt=D.button`
  ${Mt}

  background-color: #e31c5c;
  display: inline-block;
  margin-right: 10px;
  color: white;
`,Xt=D.button`
  background-color: #217ce8;
  ${Mt}
  color: white;
`,At=D.label`
  display: flex;
  align-items: center;
  justify-content: center;
  > span:first-child {
    display: inline-block;
    margin-right: 4px;
  }
`,Ft=()=>{const e=ee(),t=te((e=>e.flowInfo)),{flow_name:n,flow_description:o,flow_active:r}=t||{};return N.createElement(Pt,null,N.createElement(Ot,null,N.createElement(zt,null,N.createElement(re,{height:14})),N.createElement($t,null,N.createElement(Wt,null,n||"Loading ..."),N.createElement(Bt,null,o||"Loading ..."))),N.createElement(jt,null,N.createElement(Lt,{onClick:()=>e(ze({windowConfig:{mainId:c.mainFlow}}))},"Diagram view"),N.createElement(Lt,{onClick:()=>e(ze({windowConfig:{mainId:c.codeEditor}}))},"Code editor"),N.createElement(Lt,null,N.createElement(At,null,N.createElement("span",null,"Active"),N.createElement($,{checked:!!r,icons:{checked:null,unchecked:null},onChange:t=>e(ze({flowInfo:{flow_active:+t.target.checked}}))}))),N.createElement(Lt,{onClick:()=>e(ze({windowConfig:{sideId:p.flowSettings}}))},N.createElement("img",{src:"/Drawflow-react/assets/flowsettings.758f2330.png",alt:""}))),N.createElement(Tt,null,N.createElement(Vt,null,"Delete flow"),N.createElement(Xt,{onClick:()=>e(Se())},"Save flow")))},Yt=D.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  outline: none;
  border: none;
`,Gt=D.section`
  position: relative;
  flex: 0 0 400px;
  overflow-y: auto;
  max-height: calc(100vh + 40px);
  padding-top: 30px;
  border: 1px solid #e8e8ef;
`,Rt=D.label`
  margin: 10px;
  display: flex;
  flex-direction: column;
`,Jt=D.div`
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
`,Ut=D.div`
  background: #e8e8ef;
  label {
    margin: 10px;
    display: flex;
    flex-direction: column;
    input {
      margin-top: 2px;
    }
  }
`,qt=()=>{const e=te((e=>e.flowInfo)),t=ee(),[n,o]=I.exports.useState([]);I.exports.useEffect((()=>{(async()=>{const e=await ke(ve.fetchBackgroundImages,{lab_test:1}),{flow_canvas_background_image:t}=e,n=t.map((({image_link:e})=>e));o(n)})()}),[]);const{flow_name:r,flow_description:i,run_times_max:s,user_run_limit_seconds:a}=e||{},[d,c]=ne(l.backgroundOpacity,50),[u,g]=ne(l.backgroundBlur,50),[m,h]=ne(l.backgroundImageUrl,""),f=(e,n)=>{const o=Object.keys(e)[0],r=e[o];return N.createElement("input",E(y({},n),{value:null!=r?r:"Loading ...",onChange:e=>{t(ze({flowInfo:{[o]:e.target.value}}))}}))};return N.createElement(Gt,null,N.createElement(Yt,{onClick:()=>t(ze({windowConfig:{sideId:p.none}}))},N.createElement(le,{width:19,height:19})),N.createElement(Rt,null,"Flow name:",f({flow_name:r},{type:"text"})),N.createElement(Rt,null,"Flow description:",f({flow_description:i},{type:"text"})),N.createElement(Rt,null,"Max run times:",f({run_times_max:s},{type:"number"})),N.createElement(Rt,null,"User run limit seconds:",f({user_run_limit_seconds:a},{type:"number"})),N.createElement(Ut,null,N.createElement("label",null,"Opacity:",N.createElement("input",{type:"range",value:null!=d?d:0,min:0,max:100,onChange:e=>{const n=+e.target.value;c(n),t(ze({windowConfig:{background:{opacity:n}}}))}})),N.createElement("label",null,"Blur:",N.createElement("input",{onChange:e=>{const n=+e.target.value;g(n),t(ze({windowConfig:{background:{blur:n}}}))},type:"range",min:0,max:100,value:u})),N.createElement(Jt,null,n.map((e=>N.createElement("button",{key:e,onClick:()=>{h(e),t(ze({windowConfig:{background:{imageUrl:e}}}))}},N.createElement("img",{style:{border:m===e?"2px solid blue":""},src:e})))))))},Kt=D.div`
  /* text-align: center; */
`,Qt=D.div`
  padding: 0 10px;
  padding-bottom: 10px;
  position: relative;
  border: 1px solid #e8e8ef;
  flex: 0 0 300px;
  overflow-y: auto;
  max-height: 100%;
`,Ht=D.div`
  margin-bottom: 15px;
  padding: 5px;
  border-bottom: 2px solid lightgray;
`,Zt=D.span`
  color: blue;
  ::before {
    margin-left: 8px;
    content: " ID.";
  }
`,en=D.button`
  /* margin-left: auto; */
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
`,tn=D(en)`
  text-align: center;
`,nn=D(en)`
  margin-left: 5px;
`,on=D(en)`
  margin-left: 5px;
`,rn=D.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 8px;
`,ln=D.h2`
  text-align: center;
  border-bottom: 2px solid blue;
  color: #217ce8;
`,sn=D.input`
  margin-right: 10px;
  font-weight: bolder;
  border: 1px solid #217ce8;
  font-size: 0.9em;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 5px;
  width: 90%;
`,an=D.textarea`
  border-radius: 5px;
  border: 1px solid #217ce8;

  /* flex: 1; */
  width: 90%;
  /* text-align: center; */
`,dn=()=>{var e;const t=te((e=>e.groups)),n=ee(),[o,r]=I.exports.useState(t),i=(e,t)=>{const n=y(y({},o[e]),t);r(E(y({},o),{[e]:n}))};if(Object.keys(t).length!==Object.keys(o).length){const n={};for(const[r,i]of Object.entries(t))n[Number(r)]=_.merge(i,null!=(e=o[Number(r)])?e:{});r(n)}return N.createElement(Qt,null,N.createElement(ln,null,"Node groups"),Object.values(o).map((({id:e,node_group_name:t,node_group_order:r,node_group_description:l})=>N.createElement(Ht,{key:e},N.createElement(rn,null,N.createElement(Zt,null,e),N.createElement(nn,{onClick:()=>{window.confirm(`Do you really wanna delete group ${t}, ID.${e}`)&&n(Ne({id:e,delete:1}))}},"Delete"),N.createElement(on,{onClick:()=>{window.confirm(`Do you really wanna save group ${t}, ID.${e}`)&&n(Ne(o[e]))}},"Save")),N.createElement(sn,{value:t,type:"text",onChange:t=>{i(e,{node_group_name:t.target.value})}}),N.createElement(an,{value:l,onChange:t=>{i(e,{node_group_description:t.target.value})}})))),N.createElement(Kt,null,N.createElement(tn,{onClick:()=>{n(Ne({id:0,node_group_order:0,node_group_name:"Group name",node_group_description:"Group description"}))}},"Add new")))};const cn=D.div`
  display: grid;
  grid-template-columns: auto 1fr;
  flex: 1;
`,un=D(W)`
  min-width: 300px;
`,pn=D.div`
  font-weight: bold;
`,gn=D.div``,mn=D.div`
  display: grid;
  gap: 0.3em;
`,hn=D.header`
  padding: 10px;
  display: flex;
  align-items: center;
  color: #1f1a1a;
  order: -1;
  position: relative;
  ${({shift:e})=>e&&z`
      padding-left: 0;
    `}
`,fn=D.img`
  padding: 8px;
  margin-right: 10px;
  border: 3px solid #8db6f6;
  border-radius: 15px;
  max-height: 50px;
  max-width: 50px;
`,bn=D(D.details`
  summary svg {
    transform: rotate(-90deg);
  }

  &[open] > summary:first-child svg {
    transform: rotate(90deg);
  }

  summary ~ * {
    margin-left: 10px;
  }
`)``,wn=D.summary`
  color: #e0ebfd;
  background-color: #8db6f6;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 30px;
  margin-top: 0.05em;
`,xn=D.span`
  display: grid;
  place-items: center;
  svg {
    height: 1em;
    width: 1.4em;
  }
`,vn=D.label`
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 2px solid blue;
`,yn=D.div``,En=({children:e})=>N.createElement(wn,null,N.createElement(xn,null,N.createElement(re,null)),N.createElement("span",null,e));D.button``;const _n={node_settings_json:"Settings JSON",node_response_settings_json:"Response JSON",node_object_lists:"Object list",node_attributes:"Node attributes"},kn=({path:e})=>{const t=`['${e.join("']['")}']`,[n,o]=V(t),r=e[e.length-1],i="string"!=typeof(l=r.replace(/_/g," "))?"":l.charAt(0).toUpperCase()+l.slice(1);var l;const s={flow_node_type_id:0,nodes_id:0,node_scrdata_id:0,flow_action_scrdata_id:0,order:0,nodes_group_id:0,name:"**",description:"**",icon_link:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",icon_link_selected:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:0,execute_node_specific_date_time:"2020-11-11T19:30",loop_cycles:0,node_settings_json:{},node_response_settings_json:{},loop_cycle_reached_jump_to_node:0,node_attributes:{},node_object_lists:{},node_story:"Node story"};let a="string"==typeof(r in s?s[r]:n.value)?"text":"number";return null===n.value&&(r in s?n.value=s[r]:(a="text",n.value="")),N.createElement(vn,null,i,":",N.createElement(X,E(y({placeholder:r},n),{type:a})))},Cn=D.div`
  flex: 1;
  height: max-content;
`,Sn=D.div`
  margin-left: -0.2em;
`,In=D(en)``,Nn=D(en)``,Dn=D.div`
  text-align: center;
`,Pn=e=>{const{id:t}=e,n=te((e=>e.templates.find((({nodes_id:e})=>e===t))));return N.createElement(Cn,null,N.createElement(B,{initialValues:JSON.parse(JSON.stringify(n)),onSubmit:(e,t)=>{t.setSubmitting(!0),console.clear(),console.log(JSON.stringify(e,null,2))},validate:e=>{const t={flow_node_type_id:0,nodes_id:0,node_scrdata_id:0,flow_action_scrdata_id:0,order:0,nodes_group_id:0,name:"**",description:"**",icon_link:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",icon_link_selected:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:0,execute_node_specific_date_time:"2020-11-11T19:30",loop_cycles:0,node_settings_json:{},node_response_settings_json:{},loop_cycle_reached_jump_to_node:0,node_attributes:{},node_object_lists:{},node_story:"Node story"},n={};for(const o in t)typeof t[o]!=typeof e[o]&&null!==e[o]&&(n[o]="Type error");return n}},(({setValues:e,values:t,errors:o,isSubmitting:r,resetForm:i})=>{var l;const{name:s,description:a,icon_link:d}=t;I.exports.useEffect((()=>{e(n)}),[n]);const c=null==(l=te((e=>e.sidebarVisible)))||l;return N.createElement(cn,null,N.createElement(un,null,N.createElement(hn,{shift:!c},!c&&N.createElement(Sn,null,N.createElement(Nt,null)),N.createElement(fn,{src:d}),N.createElement(mn,null,N.createElement(pn,null,s),N.createElement(gn,null,a))),N.createElement(bn,{open:!0},N.createElement(En,null,"Default settings"),N.createElement(yn,null,Object.entries(t).map((([e,t])=>"object"==typeof t||e in _n?null:N.createElement(kn,{key:e,path:[e]}))))),!Object.keys(o).length&&!r&&N.createElement(Dn,null,N.createElement(In,{type:"submit"},"Save"),N.createElement(Nn,{onClick:()=>i()},"Reset"))))})))},On=D.div`
  flex: 1;
  ${({shift:e})=>e&&z`
      div.ql-toolbar.ql-snow {
        padding-left: 40px;
      }
      .jsoneditor-menu {
        padding-left: 40px;
      }
    `}
`,Mn=({values:e,setValues:t})=>{const n=te((e=>e.sidebarVisible)),o=I.exports.useRef(null),r=I.exports.useRef();return I.exports.useEffect((()=>{if(o.current&&!r.current){const e={mode:"tree",modes:["code","form","text","tree","view","preview"],onChangeText(e){try{const n=JSON.parse(e);t(n)}catch{}}};return r.current=new A(o.current,e),()=>{var e;return null==(e=r.current)?void 0:e.destroy()}}}),[]),I.exports.useEffect((()=>{r.current&&JSON.stringify(r.current.get())!==JSON.stringify(e)&&(r.current.set(e),r.current.expandAll())}),[e]),N.createElement(On,{shift:!(null==n||n),ref:o})},jn=D.div`
  display: flex;
  height: 40px;
`,Ln=D.div`
  flex: 1;
  order: -1;
`,Tn=D.main`
  display: flex;
  position: relative;
`,zn=D.div``,$n=()=>{const e=te((e=>e));return N.createElement(Mn,{values:e,setValues:e=>null})},Wn=()=>{var e;const t=ee(),n=null==(e=te((e=>e.sidebarVisible)))||e,o=te((e=>e.windowConfig.mainId)),r=te((e=>e.windowConfig.id));return o===c.templateNodeSettings?N.createElement(N.Fragment,null,N.createElement(Pn,{id:r})):o===c.mainFlow?N.createElement(Ln,null,N.createElement(jn,null,!n&&N.createElement(Nt,null),N.createElement("button",null,"Fetch flow version"),N.createElement("button",{onClick:()=>t(Pe(0))},"Version 1"),N.createElement("button",{onClick:()=>t(Pe(1))},"Version 2"),N.createElement("button",{onClick:()=>t(Pe(2))},"Version 3")),N.createElement(bt,null)):o===c.codeEditor?N.createElement(N.Fragment,null,N.createElement("span",{style:{position:"absolute",zIndex:2,backgroundColor:"white",top:-8}},!n&&N.createElement(Nt,null)),N.createElement($n,null)):null},Bn=()=>{const e=te((e=>e.windowConfig.sideId));return e===p.flowSettings?N.createElement(qt,null):e===p.groupSettings?N.createElement(dn,null):null},Vn=()=>{const e=ee();return I.exports.useEffect((()=>{e(Ce()),e(Ie()),e(De())}),[]),N.createElement(zn,null,N.createElement(Ft,null),N.createElement(Tn,null,N.createElement(Dt,null),N.createElement(Wn,null),N.createElement(Bn,null)))};F.render(N.createElement(I.exports.StrictMode,null,N.createElement(Y,{store:We},N.createElement(Vn,null))),document.getElementById("root"));
