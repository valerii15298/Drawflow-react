var e,t,n,o,r,i,l,s,a,d,c,u,p,g,m=Object.defineProperty,h=Object.defineProperties,f=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&v(e,n,t[n]);if(b)for(var n of b(t))x.call(t,n)&&v(e,n,t[n]);return e},E=(e,t)=>h(e,f(t));import{l as _,c as k,u as C,a as I,C as S,R as N,q as D,b as P,d as L,e as M,f as O,g as j,h as T,A as z,_ as $,J as W,i as B,P as X}from"./vendor.fa14fe69.js";(t=e||(e={})).START="START",t.MIDDLE="MIDDLE",t.END="END",(o=n||(n={})).Drawflow="drawflow",o.Groups="groups",(i=r||(r={})).NODE_SETTINGS="NODE_SETTINGS",i.GROUP_SETTINGS="GROUP_SETTINGS",(s=l||(l={})).backgroundOpacity="backgroundOpacity",s.backgroundBlur="backgroundBlur",s.backgroundImageUrl="backgroundImageUrl",(d=a||(a={})).in="in",d.out="out",(u=c||(c={}))[u.mainFlow=0]="mainFlow",u[u.codeEditor=1]="codeEditor",u[u.tem=2]="tem",u[u.templateNodeSettings=3]="templateNodeSettings",(g=p||(p={}))[g.groupSettings=0]="groupSettings",g[g.flowSettings=1]="flowSettings",g[g.none=2]="none";class A{constructor(e,t){this.spacingX=40,this.spacingY=60,this.id=e,this.flow=t,this.state=t.state,this.nodeState=this.state.drawflow[this.id]}get head(){return this.nodeState.head}get lane(){return this.nodeState.lane}get port(){return this.nodeState.port}get portInPos(){var e;return null==(e=this.state.ports.find((({nodeId:e,portId:t,type:n})=>e===this.id&&1===t&&n===a.in)))?void 0:e.pos}get outPorts(){return this.state.ports.filter((({type:e,nodeId:t})=>this.id===t&&e===a.out))}get parent(){var e;const t=null==(e=this.parentConnection)?void 0:e.startId;return t?this.flow.getNode(t):null}get parentConnection(){return this.state.connections.find((e=>{e||console.log({conn:e});const{endId:t,endPort:n}=e;return t===this.id&&1===n}))}get totalWidth(){if(!1===this.nodeState.visible)return 0;return Math.max(this.width+this.subnodesWidth,this.leftWidth+this.rightWidth)}get childrenTotalWidth(){const{out1:e}=this;if(!e.length)return 0;let t=0;return e.forEach((e=>{t+=e.totalWidth})),t+this.spacingX*(e.length-1)}alignChildren(){const{out1:e}=this;this.update({isSub:!1,port:{out:2}});let t=this.pos.x-(this.leftWidth-this.width/2);for(const o of e){const e=t+(o.leftWidth-o.width/2);o.setPos({x:e,y:this.pos.y+this.height+this.spacingY}),!1!==o.nodeState.visible&&(t+=o.totalWidth+this.spacingX),o.alignChildren()}const{subnodes:n}=this;n.length&&(t=this.pos.x+this.width+this.spacingX,n.forEach((e=>{e.update({isSub:!0,port:{out:1}}),e.setPos({x:t,y:this.pos.y+(this.height/2-e.height/2)}),t+=e.width+this.spacingX})))}get leftWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,n=this.width/2;if(!e.length)return n;const o=e[0].leftWidth,r=o+(t-o-e[e.length-1].rightWidth)/2;return Math.max(r,n)}get rightWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,n=this.width/2+this.subnodesWidth;if(!e.length)return n;const o=e[0].leftWidth,r=e[e.length-1].rightWidth,i=r+(t-o-r)/2;return Math.max(i,n)}get all2Successors(){const{subnodes:e,out1:t}=this,n=[...t];return e.forEach((e=>n.push(e))),this.out1.forEach((e=>n.push(e))),n}get allSuccessors(){const e=[...this.out1,...this.subnodes],t=[...e];return e.forEach((e=>t.push(...e.allSuccessors))),t}toggleVisibility(e){this.update({visible:e}),this.parentConnection&&(this.parentConnection.visible=e),this.outConnections.forEach((t=>{t.visible=e}))}toggleChildrenVisibility(){var e;const t=null==(e=this.nodeState.childrenVisibility)||e;this.update({childrenVisibility:!t});const{subnodes:n,allSuccessors:o}=this;o.forEach((e=>{n.includes(e)||e.toggleVisibility(!t)}))}toggleSubnodesVisibility(){var e;const t=null==(e=this.nodeState.subnodesVisibility)||e;this.update({subnodesVisibility:!t}),this.subnodes.forEach((e=>{e.toggleVisibility(!t)}))}get outConnections(){return this.state.connections.filter((({startId:e})=>e===this.id))}children(e){return this.state.connections.filter((({startId:t,startPort:n})=>t===this.id&&n===e)).map((e=>this.flow.getNode(e.endId)))}get out1(){return this.children(1)}get firstSubnode(){return this.children(2)[0]}get subnodes(){var e,t;return(null==(t=null==(e=this.firstSubnode)?void 0:e.flowLine)?void 0:t.flowLineNodes)||[]}get subnodesWidth(){return this.subnodes.reduce(((e,t)=>e+t.width+this.spacingX),0)}get isSub(){return null!==this.complexParentNode}get complexParentNode(){const e=this.parent;return e?e.firstSubnode===this?e:e.complexParentNode:null}get flowLine(){const e=[this];let t=this,n=t.firstSubnode;for(;1===t.out1.length;)t=t.out1[0],e.push(t),n=n||t.firstSubnode;return t.out1.length>1?null:{flowLineNodes:e,hasSubnodes:n}}get height(){return this.state.drawflow[this.id].height}get width(){return this.state.drawflow[this.id].width}get pos(){return this.state.drawflow[this.id].pos}setPos(e){const{pos:t}=this,{x:n,y:o}=e;this.flow.moveNode({nodeId:this.id,dx:n-t.x,dy:o-t.y})}update(e){const t=_.merge(this.nodeState,e);Object.assign(this.nodeState,t)}}class V{constructor(e){this.nodes={},this.distanceToConnect=100,this.distanceToDisconnect=0,this.state=e;const{drawflow:t}=this.state;Object.keys(t).map((e=>this.nodes[Number(e)]=new A(Number(e),this)))}get heads(){return Object.entries(this.nodes).filter((([,e])=>!e.parent)).map((e=>e[1]))}getNode(e){return this.nodes[e]}alignAll(){this.setLaneNumbers(),this.heads.forEach((e=>{e.alignChildren()}))}allowConnection(e){const{startId:t,startPort:n,endId:o}=e,r=this.getNode(o),i=this.getNode(t),l=2===n;if(r.parent||!1===i.nodeState.visible)return!1;const s=r.flowLine;return!((l||i.isSub)&&(!s||s.hasSubnodes))}addConnection(e){let{startId:t,startPort:n,endId:o,endPort:r}=e;const i=this.getNode(o),l=this.getNode(t),s=2===n;if(i.parent||!1===l.nodeState.visible)return!1;const a=i.flowLine;if((s||l.isSub)&&(!a||a.hasSubnodes))return!1;let d=null;if(s&&l.subnodes.length){if(!1===l.nodeState.subnodesVisibility){t=l.subnodes[l.subnodes.length-1].id,n=1,this.state.connections.push({startId:t,startPort:n,endId:o,endPort:r,visible:!0});const{flowLineNodes:e}=a;return void e.forEach((e=>e.toggleVisibility(!1)))}d=l.subnodes[0]}if(l.isSub&&l.out1.length&&(d=l.out1[0]),null!==d){const e=this.state.connections.find((e=>e.startId===t&&e.startPort===n&&e.endId===d.id&&1===e.endPort)),o=this.state.connections.indexOf(e);this.state.connections.splice(o,1);const{flowLineNodes:r}=a,i=r[r.length-1];this.state.connections.push({startId:i.id,startPort:1,endId:d.id,endPort:1,visible:!0})}this.state.connections.push({startId:t,startPort:n,endId:o,endPort:r,visible:!0})}moveNode({dx:e,dy:t,nodeId:n}){this.state.drawflow[n].pos.x+=e,this.state.drawflow[n].pos.y+=t}dragNode({dx:e,dy:t,nodeId:n}){this.moveNode({dx:e,dy:t,nodeId:n}),this.toggleAvailablePortToConnect(n)}toggleAvailablePortToConnect(e){const t=Date.now();if(this.state.computing&&t-this.state.computing<100)return;if(this.state.computing=t,!this.state.config.drag)return;const n=this.getNode(e),o=n.head;if(n.parentConnection){const e=this.state.connections.indexOf(n.parentConnection);this.state.connections.splice(e,1),this.alignAll()}const r=n.portInPos;if(!r)return;let i=null;Object.entries(this.nodes).filter((([,e])=>e.head!==o&&!1!==e.nodeState.visible)).forEach((([t,n])=>{Number(t)!==e&&n.outPorts.forEach((e=>{const{pos:t}=e,n=Math.hypot(r.x-t.x,r.y-t.y);n<this.distanceToConnect&&(null===i||n<i.distance)&&(i={port:e,distance:n})}))})),this.state.portToConnect=null!==i?i.port:void 0}setLaneNumbers(){let e=this.heads;for(e.forEach((e=>e.update({head:e.id,lane:0})));e.length;){const t=[];e.forEach((e=>{let n=e.lane+1;const{subnodes:o,head:r}=e;if(void 0===r)return void console.error("head is undefined in setLaneNumbers");if(o.length)for(const t of o)t.update({lane:n++,head:r});const i=e.children(1);i.forEach((e=>e.update({head:r,lane:n}))),t.push(...i)})),e=t}this.heads.forEach((e=>{const{head:t}=e;for(let n=0,o=0,r=[e];r.length;++n)r=Object.values(this.nodes).filter((e=>e.lane===n&&e.head===t)),r.forEach((e=>{e.update({positionNumber:o++})}))}))}}const Y={nodeId:1,canvasDrag:!1,config:{drag:!1,connectionsLabelEnable:!1,canvasTranslate:{x:0,y:0},zoom:{value:1,max:2,min:.5,tick:.1}},drawflow:{},connections:[],connectionsLabel:{},ports:[],select:null,newPathDirection:null,modalType:null,editLock:!1,mouseBlockDragPos:{clientX:void 0,clientY:void 0}},F=e=>{new V(e).alignAll()},U=(e,{payload:t})=>{if("function"==typeof t)return void t(e);const n=_.merge(e,t);for(const o in n)e[o]=n[o]},G=k({name:n.Drawflow,initialState:Y,reducers:{setState:U,setEditLock:(e,{payload:t})=>{e.editLock=t},align:F,moveNode:(e,t)=>new V(e).dragNode(t.payload),setMouseBlockDragPos:(e,{payload:t})=>{e.mouseBlockDragPos=t},unSelect:e=>{e.config.drag=!1,e.select=null},select:(e,{payload:t})=>{e.config.drag="node"===t.type,e.select=t},selectPort:(e,{payload:t})=>{const n=e.ports.find((({nodeId:e,portId:n,type:o})=>o===t.type&&n===t.portId&&e===t.nodeId));if(!n)return void console.error("Cannot find port to select in state.ports");const o=e.ports.indexOf(n);e.select={type:t.type,selectId:o}},moveCanvas:(e,{payload:{movementX:t,movementY:n}})=>{e.canvasDrag&&(e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=n)},canvasDrag:(e,{payload:t})=>{e.canvasDrag=t},canvasMouseMove:(e,{payload:{movementX:t,movementY:n,clientX:o,clientY:r}})=>{var i;if(e.clientCurrentMousePos={clientX:o,clientY:r},e.canvasDrag)e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=n;else if((null==(i=e.select)?void 0:i.type)===a.out)e.newPathDirection={clientX:o,clientY:r};else if(e.config.drag&&e.select){const t=e.select.selectId,{clientX:n,clientY:i}=e.mouseBlockDragPos;e.mouseBlockDragPos={clientX:o,clientY:r};const l=e.config.zoom.value,s=(o-n)/l,a=(r-i)/l;new V(e).dragNode({nodeId:t,dy:a,dx:s})}},canvasMouseUp:e=>{var t,n;const o=new V(e);if(e.portToConnect&&(null==(t=e.select)?void 0:t.selectId)){const{nodeId:t,portId:n}=e.portToConnect,r=e.select.selectId,i=1;o.addConnection({startId:t,startPort:n,endId:r,endPort:i})}e.portToConnect=void 0,e.newPathDirection=null,e.canvasDrag=!1,e.config.drag=!1,(null==(n=e.select)?void 0:n.type)===a.out&&(e.select=null),o.alignAll()},deleteNode:e=>{const{connections:t,drawflow:n,ports:o,select:r}=e;if("node"!==(null==r?void 0:r.type))return;const{selectId:i}=r;t.forEach((({endId:e,startId:n},o)=>{[n,e].includes(i)&&delete t[o]})),o.forEach((({nodeId:e},t)=>{e===i&&delete o[t]})),delete n[i],e.select=null},deletePath:e=>{const{connections:t,select:n}=e;"path"===(null==n?void 0:n.type)&&(console.log("delete"),t.splice(n.selectId,1))},load:(e,{payload:t})=>(Object.assign(e,Y),e.drawflow=t.drawflow,e.nodeId=Object.keys(t.drawflow).length+1,e.connections=t.connections,e),portMouseUp:(e,{payload:{nodeId:t,portId:n,PortType:o}})=>{const{select:r}=e;if(o!==a.in||!r)return;const i=e.ports[r.selectId],l=t,s=n,d=i.nodeId,c=i.portId;if(d===l)return;new V(e).addConnection({startId:d,startPort:c,endId:l,endPort:s})},clear:()=>Y,pushPorts:(e,{payload:t})=>{if(0===t.length)return;const{nodeId:n}=t[0];e.ports=e.ports.filter((e=>e.nodeId!==n)),e.ports.push(...t)},zoom:(e,{payload:t})=>{const{zoom:n}=e.config,{value:o,max:r,min:i,tick:l}=n,s=o+(t?l:-l);s<=r&&s>=i&&(n.value=s),null===t&&(e.config.canvasTranslate={x:0,y:0},n.value=1)},nodeSize:(e,{payload:{height:t,width:n,id:o}})=>{e.drawflow[o].height=t,e.drawflow[o].width=n},toggleSubnodes:(e,{payload:{id:t}})=>{new V(e).getNode(t).toggleSubnodesVisibility(),F(e)},toggleChildren:(e,{payload:{id:t}})=>{new V(e).getNode(t).toggleChildrenVisibility(),F(e)},copyNode:e=>{var t;"node"===(null==(t=e.select)?void 0:t.type)&&(e.nodeToCopyId=e.select.selectId)}}}),R=G.actions,q=G.reducer,J=e=>e.flows[e.version],K=()=>C(),H=I;function Z(e,t){const[n,o]=S.exports.useState((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.log(n),t}}));return[n,t=>{try{const r=t instanceof Function?t(n):t;o(r),window.localStorage.setItem(e,JSON.stringify(r))}catch(r){console.log(r)}}]}const Q=e=>N.createElement("svg",E(y({},e),{viewBox:"0 0 16 16",fill:"none"}),N.createElement("path",{d:"M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),N.createElement("path",{d:"M14.0016 13.9996L11.1016 11.0996",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),ee=e=>N.createElement("svg",E(y({},e),{viewBox:"0 0 10 14",fill:"none"}),N.createElement("path",{d:"M8 2L2.18437 6.84636C2.08842 6.92631 2.08842 7.07369 2.18437 7.15364L8 12",stroke:"#393C44",strokeWidth:"2.5",strokeLinecap:"round"})),te=e=>N.createElement("svg",E(y({},e),{viewBox:"0 0 1792 1792"}),N.createElement("path",{fill:"#217CE8",d:"M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z"})),ne=e=>N.createElement("svg",E(y({},e),{viewBox:"0 0 19 19",fill:"none"}),N.createElement("path",{d:"M14.25 4.75L4.75 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),N.createElement("path",{d:"M4.75 4.75L14.25 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),oe=e=>N.createElement("svg",E(y({},e),{enableBackground:"new 0 0 512 512",viewBox:"0 0 512 512"}),N.createElement("g",null,N.createElement("path",{d:"m482.16 288.51 29.84-4.68v-55.66l-29.84-4.68c-24.56-4.14-33.19-36.67-13.99-52.45l22.52-18.55-27.71-47.98-27.56 10.32c-23.33 8.74-47-14.9-38.25-38.25l10.32-27.56-47.98-27.71-18.55 22.52c-15.75 19.16-48.3 10.61-52.45-13.99l-4.68-29.84h-55.66l-4.68 29.84c-4.17 24.56-36.67 33.19-52.45 13.99l-18.55-22.52-47.98 27.71 10.32 27.56c8.74 23.33-14.9 47-38.25 38.25l-27.56-10.32-27.71 47.98 22.52 18.55c19.12 15.74 10.67 48.29-13.99 52.45l-29.84 4.68v55.66l29.84 4.68c24.46 4.15 33.26 36.59 13.99 52.45l-22.52 18.55 27.71 47.98 27.56-10.32c23.22-8.7 47.04 14.81 38.25 38.25l-10.32 27.56 47.98 27.71 18.55-22.52c15.73-19.11 48.27-10.67 52.45 13.99l4.68 29.84h55.66l4.68-29.84c4.12-24.4 36.56-33.3 52.45-13.99l18.55 22.52 47.98-27.71-10.32-27.56c-8.7-23.22 14.81-47.04 38.25-38.25l27.56 10.32 27.71-47.98-22.52-18.55c-19.16-15.76-10.61-48.28 13.99-52.45zm-226.16 92.49c-68.93 0-125-56.07-125-125s56.07-125 125-125 125 56.07 125 125-56.07 125-125 125z",fill:"#7ed8f6"}),N.createElement("path",{d:"m468.17 340.96 22.52 18.55-27.71 47.98-27.56-10.32c-23.44-8.79-46.95 15.03-38.25 38.25l10.32 27.56-47.98 27.71-18.55-22.52c-15.89-19.31-48.33-10.41-52.45 13.99l-4.68 29.84h-27.83v-131c68.93 0 125-56.07 125-125s-56.07-125-125-125v-131h27.83l4.68 29.84c4.15 24.6 36.7 33.15 52.45 13.99l18.55-22.52 47.98 27.71-10.32 27.56c-8.75 23.35 14.92 46.99 38.25 38.25l27.56-10.32 27.71 47.98-22.52 18.55c-19.2 15.78-10.57 48.31 13.99 52.45l29.84 4.68v55.66l-29.84 4.68c-24.6 4.17-33.15 36.69-13.99 52.45z",fill:"#6aa9ff"}),N.createElement("path",{d:"m256 121c-74.44 0-135 60.56-135 135s60.56 135 135 135 135-60.56 135-135-60.56-135-135-135zm0 210c-41.35 0-75-33.64-75-75s33.65-75 75-75 75 33.64 75 75-33.65 75-75 75z",fill:"#6aa9ff"}),N.createElement("path",{d:"m391 256c0 74.44-60.56 135-135 135v-60c41.35 0 75-33.64 75-75s-33.65-75-75-75v-60c74.44 0 135 60.56 135 135z",fill:"#4895ff"}))),re=e=>N.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},e),N.createElement("g",{transform:"matrix(1.06642 0 0 1.06642 -1.03 -1106.225)"},N.createElement("circle",{cx:"8.467",cy:"1044.829",r:"5.626",fill:"#c2e4f8"}),N.createElement("path",{fill:"#249fe6",fillRule:"evenodd",style:{lineHeight:"normal",textIndent:0,textAlign:"start",textDecorationLine:"none",textDecorationStyle:"solid",textDecorationColor:"#000",textTransform:"none",isolation:"auto",mixBlendMode:"normal"},d:"M 8 1 C 4.139959 1 1.0000428 4.1398846 1 8 C 0.99997942 11.860115 4.1399146 15 8 15 C 11.860086 15 15.00002 11.860115 15 8 C 14.999957 4.1398846 11.860041 1 8 1 z M 8 2 C 11.319604 2 13.999963 4.6803455 14 8 C 14.000018 11.319654 11.319644 14 8 14 C 4.6803565 14 1.9980292 11.319654 1.9980469 8 C 1.9980837 4.6803455 4.6803952 2 8 2 z M 7.9863281 4.0039062 A 0.50005001 0.50005001 0 0 0 7.4941406 4.5117188 L 7.5 7.5039062 L 4.5039062 7.5097656 A 0.50095123 0.50095123 0 0 0 4.5058594 8.5117188 L 7.5 8.5058594 L 7.5058594 11.5 A 0.50005001 0.50005001 0 1 0 8.5058594 11.5 L 8.5019531 8.5039062 L 11.494141 8.4980469 A 0.50005001 0.50005001 0 1 0 11.492188 7.4980469 L 8.5 7.5039062 L 8.4960938 4.5117188 A 0.50005001 0.50005001 0 0 0 7.9863281 4.0058594 L 7.9863281 4.0039062 z ",color:"#000",fontFamily:"sans-serif",fontWeight:400,overflow:"visible",transform:"matrix(.93772 0 0 .93772 .965 1037.328)","white-space":"normal"}))),ie=e=>N.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 3",fill:"none"},e),N.createElement("circle",{cx:"1.2",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),N.createElement("circle",{cx:"5.9998",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),N.createElement("circle",{cx:"10.7996",cy:"1.2",r:"1.2",fill:"#C5C5D0"})),le=D.button`
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
`,se=D.div`
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
`,ae=D.img`
  max-height: 100%;
  max-width: 100%;
`,de=D.span``,ce=e=>{const{nodes_id:t}=e,n=K(),o=S.exports.useRef(null),r=H((e=>e.precanvas));return N.createElement(se,{ref:o,onMouseDown:e=>{if(void 0===Ne)return;n(Ne(t));const{current:i}=o;if(!i)return void console.error("No node to copy");const{left:l,top:s}=i.getBoundingClientRect(),a=e.clientX-l,d=e.clientY-s,c=i.cloneNode(!0);c.style.position="absolute",c.style.left=l+window.scrollX+"px",c.style.top=s+window.scrollY+"px",document.body.appendChild(c);const u=e=>{var t;const{clientX:n,clientY:o}=e;if(r){if(n>=r.x&&o>=r.y)return document.removeEventListener("mousemove",u),void(null==(t=c.parentNode)||t.removeChild(c));c.style.left=n-a+window.scrollX+"px",c.style.top=o-d+window.scrollY+"px"}else console.error("Canvas is not ready! Cannnot drag template")};document.addEventListener("mousemove",u),document.addEventListener("mouseup",(()=>{var e;document.removeEventListener("mousemove",u),null==(e=c.parentNode)||e.removeChild(c),n(Ne(void 0))}),{once:!0});const{height:p,width:g}=getComputedStyle(i);c.style.height=p,c.style.width=g}},N.createElement(ae,{src:e.icon_link}),N.createElement(de,null,e.name),N.createElement(le,{onMouseDown:()=>{n(Me({windowConfig:{id:t,mainId:c.templateNodeSettings}}))}},N.createElement(ie,{height:3,width:12})))},ue=D.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, max-content));
  grid-auto-rows: minmax(1em, auto);
  grid-gap: 1em;
  background-color: #f5f5f5;

  overflow-y: auto;
  max-height: calc(100vh - 10%);
  /* width: 100%; */
`,pe=D(se)`
  /* min-height: 5em; */
  padding: 25px;
  :hover {
    cursor: pointer;
  }
`,ge=e=>{const t=H((e=>e.templates));K();const{searchWord:n}=e,o=n.toLowerCase().split(" ").filter((e=>e.length>0));return N.createElement(ue,null,t.map((e=>{const t=JSON.stringify(e,null,2);return(o.find((e=>t.toLowerCase().includes(e)))||!o.length)&&N.createElement(ce,y({key:e.nodes_id},e))})),N.createElement(pe,null,N.createElement(re,null)))},me=(e,t)=>{const n=(e.y-t.y)/2,o=e.x-t.x;return`M ${e.x} ${e.y} v ${-n} h ${-o} v ${-n} `},he=(e,t,n,o)=>{const{x:r,y:i,width:l,height:s}=o;return{x:e*(l/(l*n))-r*(l/(l*n)),y:t*(s/(s*n))-i*(s/(s*n))}};var fe,be;(be=fe||(fe={}))[be.getTemplateNodes=1156]="getTemplateNodes",be[be.postTemplateNodes=1157]="postTemplateNodes",be[be.getFlowDataVersion=1160]="getFlowDataVersion",be[be.postFlowDataVersion=1161]="postFlowDataVersion",be[be.getFlow=1162]="getFlow",be[be.postFlow=1163]="postFlow",be[be.fetchBackgroundImages=1164]="fetchBackgroundImages",be[be.getGroups=1154]="getGroups",be[be.postGroups=1155]="postGroups",be[be.getStepSettingsTemplates=1222]="getStepSettingsTemplates";const we=window.location.search,xe=new URLSearchParams(we).get("session_id");xe||(console.error("sessin_id is not provided!"),alert("sessin_id is not provided!"));const ve=async(e,t={})=>{const n=y({session_id:xe,session_exp:"2021-02-12T02:57:45.453422",item_id:0,max_row_per_page:50,search_term:"",search_term_header:"",pagination:1,scrdata_id:e},t);return fetch("https://valerii.educationhost.cloud?csurl=https://tastypoints.io/akm/restapi.php",{method:"post",body:JSON.stringify({input:n}).replace(/'/g,"''")}).then((async e=>{let t=await e.json();if(!t.status||!t.data)throw console.error(t),alert(t),new Error(t);if(t=JSON.parse(t.data),t.response_error)throw console.error(t.response_error),alert(t.response_error),new Error(t.response_error);if("OK"!==t.status&&"OK"!==t.sp_name)throw alert(t),new Error(t.response_error);return t}))},ye=P("fetchFlow",(async(e,{dispatch:t})=>{const n=await ve(1162,{item_id:25});if(null===n.flows)return void alert("Such flow do not exist or was deleted!");const o=n.flows[0];t(Oe.setStateAction({flowInfo:o}))})),Ee=P("fetchFlow",(async(e,{getState:t})=>{const{flowInfo:n}=t();if(!n)return void console.error("Cannot save flow, data is not available");"OK"===(await ve(1163,{item_id:25,flows:[n]})).status?alert("Saved"):alert("Cannot save flow")})),_e=P("fetchGroups",(async(e,{dispatch:t})=>{const n=await ve(1154),{flow_nodes_group:o}=n;return o.reduce(((e,t)=>(e[t.id]=t,e)),{})})),ke=P("updateGroup",(async(e,{dispatch:t})=>{var n;console.log({group:e}),"delete"in e||(e.delete=0);const o=await ve(1155,{flow_nodes_group:[e],item_id:null!=(n=e.id)?n:0});console.log({resp:o}),"OK"===o.status?(t(_e()),e.id||(e.id=o.item_id),alert(`Group ${e.id} updated`)):alert(`Error: cannot ${e.id?"update":"create"} group ${e.node_group_name}`)})),Ce=P("fetchTemplateNodes",(async()=>{const{flow_nodes:e}=await ve(1156,{});return console.log({flow_nodes:e}),e})),Ie=O("versions/changed"),Se=O("addNewNode"),Ne=O("dragTemplate"),De=O("canvasShapeUpdated"),Pe=O("insertCopiedNode"),Le=O("toggleSidebar"),Me=O("setState"),Oe={setStateAction:Me},je=M({reducer:L({version:0,flows:[Y,Y,Y],templates:[],dragTemplate:0,groups:{},windowConfig:{id:0,mainId:c.mainFlow,sideId:p.none,background:{opacity:0,blur:0,imageUrl:""}}},(t=>{t.addCase(Me,U).addCase(Pe,(e=>{const t=J(e);if(void 0===t.nodeToCopyId)return;const{clientX:n,clientY:o}=t.clientCurrentMousePos,r=JSON.parse(JSON.stringify(t.drawflow[t.nodeToCopyId]));e.canvas?(r.pos=he(n,o,t.config.zoom.value,e.canvas),t.drawflow[t.nodeId]=E(y({},r),{id:t.nodeId,height:0,width:0}),++t.nodeId):console.error("Canvas shape is not available")})).addCase(Ie,((e,{payload:t})=>{e.version=t})).addCase(Le,(e=>{var t;e.sidebarVisible=!(null==(t=e.sidebarVisible)||t)})).addCase(Se,((t,{payload:{clientX:n,clientY:o}})=>{if(!t.dragTemplate)return;if(!t.canvas)return void console.error("Canvas shape is not available");const r=t.flows[t.version],i=(()=>{const t={flow_node_type_id:2,nodes_id:0,node_scrdata_id:2002,flow_action_scrdata_id:78,order:1,nodes_group_id:3,name:"**",description:"**",icon_link:"assets/eye.svg",icon_link_selected:"assets/eyeblue.svg",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:6e4,execute_node_specific_date_time:null,loop_cycles:1,node_settings_json:{if_checkout_amount_is_in_range:{list_id:0,min:0,max:0},if_partner_is_in_group_id:{list_id:1,partner_group_id:""},if_tasty_lover_is_in_group_id:{list_id:1,tasty_lover_group_id:""},if_product_is_in_group_id:{list_id:1,product_group_id:""},if_specific_partners_id_is:{list_id:1,partners_id:[""]},if_specific_tasty_lover_id_is:{list_id:1,tasty_lover_id:[""]},if_specific_product_id_is:{list_id:1,product_id:[""]},if_date_time_range_is:{list_id:4,min:"",max:""}},node_response_settings_json:{},loop_cycle_reached_jump_to_node:null,node_attributes:null,node_object_lists:null,node_story:"Node story"};return{id:0,type:e.MIDDLE,data:t,port:{in:1,out:2},pos:{x:-20,y:100},isSub:!1,height:0,width:0}})();i.pos=he(n,o,r.config.zoom.value,t.canvas),r.mouseBlockDragPos={clientX:n,clientY:o},r.drawflow[r.nodeId]=E(y({},i),{id:r.nodeId,height:0,width:0}),r.select={type:"node",selectId:r.nodeId++},r.config.drag=!0,t.dragTemplate=void 0})).addCase(Ne,((e,{payload:t})=>{e.dragTemplate=t})).addCase(De,((e,{payload:t})=>{e.canvas=t})).addCase(Ce.fulfilled,((e,{payload:t})=>{console.log(t),e.templates=t})).addCase(_e.fulfilled,((e,{payload:t})=>{e.groups=t})).addMatcher((e=>e.type.startsWith(n.Drawflow)),((e,t)=>{e.flows[e.version]=q(e.flows[e.version],t)}))}))}),Te=D.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`,ze=D.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
`,$e=()=>{const e=H((e=>J(e).editLock)),t=K();return N.createElement(Te,null,!e&&N.createElement(ze,null,"Clear"),N.createElement(ze,{onClick:()=>t(R.setEditLock(!e))},e?"UnLock":"Lock"))},We=D.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`,Be=D.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  padding: 3px 10px;
`,Xe=()=>{const e=K();return N.createElement(We,null,N.createElement(Be,{onClick:()=>e(R.zoom(!0))},"+"),N.createElement(Be,{onClick:()=>e(R.zoom(!1))},"-"),N.createElement(Be,{onClick:()=>e(R.zoom(null))},"reset"))},Ae=j(T,_.isEqual),Ve=D.svg`
  position: absolute;
  overflow: visible;
`,Ye=D.path`
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
`,Fe=e=>{const{id:t,d:n}=e,o=(e=>H(S.exports.useMemo((()=>Ae((t=>{if(void 0===e)return!1;const n=J(t).select;return"path"===(null==n?void 0:n.type)&&n.selectId===e}),(e=>e))),[e])))(t),r=K();return N.createElement(Ve,null,N.createElement(Ye,{selected:o,d:n,onMouseDown:e=>{void 0!==t&&(e.stopPropagation(),r(R.select({type:"path",selectId:t})))}}))},Ue=()=>{var e;const t=null!=(e=H(S.exports.useMemo((()=>Ae((e=>{const t=J(e);if(!t.select||t.select.type!==a.out||!t.newPathDirection)return void console.error("Cannot draw new path!");const n=t.ports[t.select.selectId];if(!n)return void console.error("No start port in newPath");const o=n.pos;if(!e.canvas)return void console.error("Canvas shape is not available");const{clientX:r,clientY:i}=t.newPathDirection,l=he(r,i,t.config.zoom.value,e.canvas);return me(o,l)}),(e=>e))),[])))?e:"";return N.createElement(Fe,{d:t})},Ge=D.div`
  max-height: 100%;
  overflow: hidden;
`,Re=e=>N.createElement(Ge,null,JSON.stringify(e,null,2)),qe=100,Je=60,Ke=D.div`
  width: 15px;
  height: 15px;
  border-radius: 60px;
  background-color: #217ce8;
  opacity: ${({visible:e})=>e?1:0};
  transform: scale(${({visible:e})=>e?1:0});
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
`,He=D.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
`,Ze=D(He)`
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&z`
      left: 100%;
      top: 50%;
    `}
`,Qe=D(He)`
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&z`
      display: none;
    `}
`,et=D(He)`
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  ${({isSub:e})=>e&&z`
      left: 0;
      top: 50%;
    `}
`,tt={[a.in]:[et],[a.out]:[Ze,Qe]},nt=e=>{const{nodeId:t,portId:n,type:o}=e,r=K(),i=(l=e,H(S.exports.useMemo((()=>Ae((e=>{const{portToConnect:t}=J(e);if(void 0===t)return!1;const n=JSON.parse(JSON.stringify(t));return delete n.pos,_.isEqual(l,n)}),(e=>e))),[l])));var l;const s=(a=t,H(S.exports.useMemo((()=>Ae((e=>J(e).drawflow[a].isSub),(e=>e))),[a])));var a;const d=tt[o][n-1];return N.createElement(d,{isSub:s,onMouseDown:e=>{e.stopPropagation(),r(R.selectPort({type:o,nodeId:t,portId:n}))},onMouseUp:()=>{r(R.portMouseUp({nodeId:t,portId:n,PortType:o}))}},N.createElement(Ke,{visible:i}))},ot=e=>{const{id:t,port:n,type:o}=e,r=[];for(let i=1;i<=n[o];i++)r.push(N.createElement(nt,{key:i,nodeId:t,portId:i,type:o}));return N.createElement("div",{className:`${o}puts`},r)},rt=D.div`
  display: inline-block;
  position: absolute;
  padding: 5px;
  width: 200px;
  min-height: 60px;
  background-color: #d3d3d3;
  z-index: 1;
  cursor: move;

  ${({isSub:e})=>e&&z`
      height: ${Je}px;
      width: ${qe}px;
    `}
  ${({selected:e})=>e&&z`
      box-shadow: 0 2px 15px 2px #cacaca;
      z-index: 2;
    `};
`,it=({id:e})=>{const t=H(S.exports.useMemo((()=>Ae((e=>J(e).config.drag),(e=>e))),[])),n=H((e=>J(e).nodeId)),o=(e=>H(S.exports.useMemo((()=>Ae((t=>J(t).drawflow[e].pos),(e=>e))),[e])))(e),r=(e=>H(S.exports.useMemo((()=>Ae((t=>{const n=J(t).select;return(null==n?void 0:n.selectId)===e&&"node"===n.type}),(e=>e))),[e])))(e),i=K(),l=S.exports.useRef(null),s=(e=>H(S.exports.useMemo((()=>Ae((t=>{const n=JSON.parse(JSON.stringify(J(t).drawflow[e]));return delete n.pos,n}),(e=>e))),[e])))(e),{port:d}=s;return S.exports.useEffect((()=>{if(l.current){const{offsetHeight:t,offsetWidth:n}=l.current;i(R.nodeSize({height:t,width:n,id:e})),i(R.align())}}),[i,e,s]),S.exports.useEffect((()=>{const t=(t,n)=>Array.from(n.querySelector(`.${t}puts`).children).map(((n,r)=>{const i=parseInt(getComputedStyle(n).left)+o.x,l=parseInt(getComputedStyle(n).top)+o.y;return{nodeId:e,pos:{x:i,y:l},portId:r+1,type:t}}));if(l.current){const e=t(a.in,l.current),n=t(a.out,l.current);i(R.pushPorts([...e,...n]))}}),[i,e,o]),S.exports.useEffect((()=>{if(l.current&&n-1===e&&t){const{offsetHeight:t,offsetWidth:n}=l.current;i(R.moveNode({nodeId:e,dx:.2*-n,dy:.2*-t}))}}),[]),N.createElement(rt,{selected:r,ref:l,style:{left:o.x,top:o.y},isSub:s.isSub,onMouseDown:t=>{t.stopPropagation();const{clientX:n,clientY:o}=t;i(R.select({type:"node",selectId:e})),i(R.setMouseBlockDragPos({clientX:n,clientY:o}))},onContextMenu:()=>{},onDoubleClick:()=>{}},N.createElement(Re,y(y({},s),o)),!s.isSub&&N.createElement(N.Fragment,null,N.createElement("div",{onClick:()=>{i(R.toggleSubnodes({id:e}))}},"toggle sub"),N.createElement("div",{onClick:()=>{i(R.toggleChildren({id:e}))}},"toggle children")),N.createElement(ot,{id:e,port:d,type:a.in}),N.createElement(ot,{id:e,port:d,type:a.out}),N.createElement("button",null,"X"))},lt=()=>{const e=H(S.exports.useMemo((()=>Ae((e=>{const{drawflow:t}=J(e);return Object.entries(t).filter((([e,{visible:t}])=>!1!==t)).map((([e])=>Number(e)))}),(e=>e))),[]));return N.createElement(N.Fragment,null,e.map((e=>N.createElement(it,{key:e,id:e}))))},st=({id:e})=>{const t=(n=e,H(S.exports.useMemo((()=>Ae((e=>{var t,o;const r=J(e),{startId:i,startPort:l,endId:s,endPort:d}=r.connections[n],c=null==(t=r.ports.find((e=>e.nodeId===i&&e.portId===l&&e.type===a.out)))?void 0:t.pos,u=null==(o=r.ports.find((e=>e.nodeId===s&&e.portId===d&&e.type===a.in)))?void 0:o.pos;return c&&u?me(c,u):""}),(e=>e))),[n])));var n;return N.createElement(Fe,{key:e,id:e,d:t})},at=()=>{const e=H(S.exports.useMemo((()=>Ae((e=>{const{connections:t}=J(e);return t.reduce(((e,t,n)=>(t.visible&&e.push(n),e)),[])}),(e=>e))),[])).map((e=>N.createElement(st,{key:e,id:e})));return N.createElement(N.Fragment,null,e)};const dt=D.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-image: url(${"/Drawflow-react/assets/tile.07d222ee.png"});
  background-repeat: repeat;
  background-size: 30px 30px;
`,ct=D.div`
  width: 100%;
  height: 100%;
  position: relative;
`,ut=(e,t,n,o)=>{var r;const[i,l]=(null==(r=getComputedStyle(e).transform.match(/^matrix\((.+)\)$/))?void 0:r[1].split(",").slice(-2).map(Number))||[0,0];e.style.transform=`translate(${i+t}px, ${l+n}px) scale(${o})`},pt=D.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`,gt=()=>{(()=>{const e=K(),[t]=Z(l.backgroundOpacity,50),[n]=Z(l.backgroundBlur,50),[o]=Z(l.backgroundImageUrl,"");S.exports.useEffect((()=>{e(Me({windowConfig:{background:{opacity:t,blur:n,imageUrl:o}}}))}),[])})();const{config:{zoom:e},newPathDirection:t,canvasDrag:n}=H(S.exports.useMemo((()=>Ae((e=>{const t=J(e),{config:{zoom:n},newPathDirection:o,canvasDrag:r}=t;return{config:{zoom:n},newPathDirection:o,canvasDrag:r}}),(e=>e))),[])),o=K(),r=S.exports.useRef(null),i=S.exports.useRef(null);S.exports.useEffect((()=>{const{current:t}=r;t&&ut(t,0,0,e.value)}),[n,e.value]),S.exports.useEffect((()=>{const{current:e}=r;if(e){const t=e.getBoundingClientRect(),n={x:t.x,y:t.y,width:e.clientWidth,height:e.clientHeight};o(De(n))}const{current:t}=i;if(t){const e=t.getBoundingClientRect(),n={x:e.x,y:e.y,width:t.clientWidth,height:t.clientHeight};o(Me({precanvas:n}))}}));const{opacity:s,blur:a,imageUrl:d}=H((e=>e.windowConfig.background));return N.createElement(dt,{ref:i,className:"drawflow",tabIndex:0,onKeyDownCapture:e=>{"Delete"===e.key&&(o(R.deletePath()),o(R.deleteNode())),e.ctrlKey&&"c"===e.key&&o(R.copyNode()),e.ctrlKey&&"v"===e.key&&o(Pe())},onMouseDown:()=>{o(R.canvasDrag(!0)),o(R.unSelect())},onMouseUp:()=>o(R.canvasMouseUp()),onMouseMove:t=>{const{clientX:i,clientY:l,movementX:s,movementY:a}=t,{current:d}=r;n&&d&&ut(d,s,a,e.value),o(R.canvasMouseMove({clientX:i,clientY:l,movementX:s,movementY:a}))},onMouseEnter:e=>{const{clientX:t,clientY:n}=e;o(Se({clientX:t,clientY:n}))},style:{backgroundColor:`rgba(251, 251, 251, ${s}%)`}},N.createElement(pt,{style:{backgroundImage:`url(${d})`,filter:`blur(${a/10}px)`}}),N.createElement($e,null),N.createElement(Xe,null),N.createElement(ct,{ref:r,style:{}},N.createElement(lt,null),N.createElement(at,null),t&&N.createElement(Ue,null)))};const mt=D.div`
  width: 300px;
  order: -2;
  max-height: 100vh;
`,ht=D.div`
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
`,ft=D.div`
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
`,bt=({selectedGroup:e,setSelectedGroup:t})=>{K();const n=H((e=>e.groups));return N.createElement(ht,null,Object.values(n).map((({id:n,node_group_name:o,node_group_order:r})=>N.createElement(ft,{key:n,selected:n===e,onClick:()=>t(n)},o))))},wt=D.input`
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
`,xt=D.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`,vt=D.span`
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
`,yt=D.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,Et=({setSearchWord:e})=>{const t=K();return N.createElement(xt,null,N.createElement(vt,null,N.createElement(Q,null)),N.createElement(wt,{type:"text",placeholder:"Search templates",onChange:t=>{e(t.target.value)}}),N.createElement(yt,{onClick:()=>t(Me({windowConfig:{sideId:p.groupSettings}}))},N.createElement(oe,{height:30})),N.createElement(kt,null))},_t=D.div`
  :hover {
    cursor: pointer;
  }

  ${({opened:e})=>e&&z`
      transform: rotate(180deg);
    `};
`,kt=()=>{var e;const t=null==(e=H((e=>e.sidebarVisible)))||e,n=K();return N.createElement(_t,{opened:!t,onClick:()=>n(Le())},N.createElement(te,{height:40}))},Ct=()=>{const[e,t]=S.exports.useState(""),[n,o]=S.exports.useState(0);return!1===H((e=>e.sidebarVisible))?null:N.createElement(mt,null,N.createElement(Et,{setSearchWord:t}),N.createElement(bt,{selectedGroup:n,setSelectedGroup:o}),N.createElement(ge,{searchWord:e}))};const It=D.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e8e8ef;
`,St=D.div`
  display: flex;
  justify-content: space-between;
`,Nt=z`
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
`,Dt=D.div`
  display: flex;
  align-items: center;
`,Pt=D.button`
  ${Nt}
  :focus {
    background-color: #dfdfdf;
  }
`,Lt=D.div`
  display: flex;
  align-items: center;
`,Mt=D.button`
  margin: 0 10px;
  background-color: #eaecf1;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: none;
`,Ot=D.div`
  display: grid;
  place-items: left;
  div {
  }
`,jt=D.div`
  font-size: 16px;
  color: #393c44;
  font-family: Roboto;
`,Tt=D.div`
  color: #808292;
  font-size: 14px;
`,zt=D.button`
  ${Nt}

  background-color: #e31c5c;
  display: inline-block;
  margin-right: 10px;
  color: white;
`,$t=D.button`
  background-color: #217ce8;
  ${Nt}
  color: white;
`,Wt=D.label`
  display: flex;
  align-items: center;
  justify-content: center;
  > span:first-child {
    display: inline-block;
    margin-right: 4px;
  }
`,Bt=()=>{const e=K(),t=H((e=>e.flowInfo)),{flow_name:n,flow_description:o,flow_active:r}=t||{};return N.createElement(It,null,N.createElement(St,null,N.createElement(Mt,null,N.createElement(ee,{height:14})),N.createElement(Ot,null,N.createElement(jt,null,n||"Loading ..."),N.createElement(Tt,null,o||"Loading ..."))),N.createElement(Dt,null,N.createElement(Pt,{onClick:()=>e(Me({windowConfig:{mainId:c.mainFlow}}))},"Diagram view"),N.createElement(Pt,{onClick:()=>e(Me({windowConfig:{mainId:c.codeEditor}}))},"Code editor"),N.createElement(Pt,null,N.createElement(Wt,null,N.createElement("span",null,"Active"),N.createElement($,{checked:!!r,icons:{checked:null,unchecked:null},onChange:t=>e(Me({flowInfo:{flow_active:+t.target.checked}}))}))),N.createElement(Pt,{onClick:()=>e(Me({windowConfig:{sideId:p.flowSettings}}))},N.createElement("img",{src:"/Drawflow-react/assets/flowsettings.758f2330.png",alt:""}))),N.createElement(Lt,null,N.createElement(zt,null,"Delete flow"),N.createElement($t,{onClick:()=>e(Ee())},"Save flow")))},Xt=D.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  outline: none;
  border: none;
`,At=D.section`
  position: relative;
  flex: 0 0 400px;
  overflow-y: auto;
  max-height: calc(100vh + 40px);
  padding-top: 30px;
  border: 1px solid #e8e8ef;
`,Vt=D.label`
  margin: 10px;
  display: flex;
  flex-direction: column;
`,Yt=D.div`
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
`,Ft=D.div`
  background: #e8e8ef;
  label {
    margin: 10px;
    display: flex;
    flex-direction: column;
    input {
      margin-top: 2px;
    }
  }
`,Ut=()=>{const e=H((e=>e.flowInfo)),t=K(),[n,o]=S.exports.useState([]);S.exports.useEffect((()=>{(async()=>{const e=await ve(fe.fetchBackgroundImages,{lab_test:1}),{flow_canvas_background_image:t}=e,n=t.map((({image_link:e})=>e));o(n)})()}),[]);const{flow_name:r,flow_description:i,run_times_max:s,user_run_limit_seconds:a}=e||{},[d,c]=Z(l.backgroundOpacity,50),[u,g]=Z(l.backgroundBlur,50),[m,h]=Z(l.backgroundImageUrl,""),f=(e,n)=>{const o=Object.keys(e)[0],r=e[o];return N.createElement("input",E(y({},n),{value:null!=r?r:"Loading ...",onChange:e=>{t(Me({flowInfo:{[o]:e.target.value}}))}}))};return N.createElement(At,null,N.createElement(Xt,{onClick:()=>t(Me({windowConfig:{sideId:p.none}}))},N.createElement(ne,{width:19,height:19})),N.createElement(Vt,null,"Flow name:",f({flow_name:r},{type:"text"})),N.createElement(Vt,null,"Flow description:",f({flow_description:i},{type:"text"})),N.createElement(Vt,null,"Max run times:",f({run_times_max:s},{type:"number"})),N.createElement(Vt,null,"User run limit seconds:",f({user_run_limit_seconds:a},{type:"number"})),N.createElement(Ft,null,N.createElement("label",null,"Opacity:",N.createElement("input",{type:"range",value:null!=d?d:0,min:0,max:100,onChange:e=>{const n=+e.target.value;c(n),t(Me({windowConfig:{background:{opacity:n}}}))}})),N.createElement("label",null,"Blur:",N.createElement("input",{onChange:e=>{const n=+e.target.value;g(n),t(Me({windowConfig:{background:{blur:n}}}))},type:"range",min:0,max:100,value:u})),N.createElement(Yt,null,n.map((e=>N.createElement("button",{key:e,onClick:()=>{h(e),t(Me({windowConfig:{background:{imageUrl:e}}}))}},N.createElement("img",{style:{border:m===e?"2px solid blue":""},src:e})))))))},Gt=D.div`
  /* text-align: center; */
`,Rt=D.div`
  padding: 0 10px;
  padding-bottom: 10px;
  position: relative;
  border: 1px solid #e8e8ef;
  flex: 0 0 300px;
  overflow-y: auto;
  max-height: 100%;
`,qt=D.div`
  margin-bottom: 15px;
  padding: 5px;
  border-bottom: 2px solid lightgray;
`,Jt=D.span`
  color: blue;
  ::before {
    margin-left: 8px;
    content: " ID.";
  }
`,Kt=D.button`
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
`,Ht=D(Kt)`
  text-align: center;
`,Zt=D(Kt)`
  margin-left: 5px;
`,Qt=D(Kt)`
  margin-left: 5px;
`,en=D.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 8px;
`,tn=D.h2`
  text-align: center;
  border-bottom: 2px solid blue;
  color: #217ce8;
`,nn=D.input`
  margin-right: 10px;
  font-weight: bolder;
  border: 1px solid #217ce8;
  font-size: 0.9em;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 5px;
  width: 90%;
`,on=D.textarea`
  border-radius: 5px;
  border: 1px solid #217ce8;

  /* flex: 1; */
  width: 90%;
  /* text-align: center; */
`,rn=()=>{var e;const t=H((e=>e.groups)),n=K(),[o,r]=S.exports.useState(t),i=(e,t)=>{const n=y(y({},o[e]),t);r(E(y({},o),{[e]:n}))};if(Object.keys(t).length!==Object.keys(o).length){const n={};for(const[r,i]of Object.entries(t))n[Number(r)]=_.merge(i,null!=(e=o[Number(r)])?e:{});r(n)}return N.createElement(Rt,null,N.createElement(tn,null,"Node groups"),Object.values(o).map((({id:e,node_group_name:t,node_group_order:r,node_group_description:l})=>N.createElement(qt,{key:e},N.createElement(en,null,N.createElement(Jt,null,e),N.createElement(Zt,{onClick:()=>{window.confirm(`Do you really wanna delete group ${t}, ID.${e}`)&&n(ke({id:e,delete:1}))}},"Delete"),N.createElement(Qt,{onClick:()=>{window.confirm(`Do you really wanna save group ${t}, ID.${e}`)&&n(ke(o[e]))}},"Save")),N.createElement(nn,{value:t,type:"text",onChange:t=>{i(e,{node_group_name:t.target.value})}}),N.createElement(on,{value:l,onChange:t=>{i(e,{node_group_description:t.target.value})}})))),N.createElement(Gt,null,N.createElement(Ht,{onClick:()=>{n(ke({id:0,node_group_order:0,node_group_name:"Group name",node_group_description:"Group description"}))}},"Add new")))};const ln=D.div``,sn=e=>{const{id:t}=e,n=H((e=>e.templates.find((({nodes_id:e})=>e===t)))),o=S.exports.useRef(null),r=S.exports.useRef();return S.exports.useEffect((()=>{const{current:e}=o;if(e){const t={mode:"tree",modes:["code","form","text","tree","view","preview"],onChange(){const{current:e}=r;e?console.log(e.get()):console.trace("Something went wrong!")}};r.current&&r.current.destroy(),r.current=new W(e,t),r.current.set(n)}})),N.createElement(ln,{ref:o})},an=D.div`
  display: grid;
  grid-template-columns: auto 1fr;
  flex: 1;
`,dn=D.div``,cn=D.div`
  font-weight: bold;
`,un=D.div``,pn=D.div`
  display: grid;
  gap: 0.3em;
`,gn=D.header`
  padding: 10px;
  display: flex;
  align-items: center;
  color: #1f1a1a;
  order: -1;
  position: relative;
`,mn=D.img`
  padding: 8px;
  margin-right: 10px;
  border: 3px solid #8db6f6;
  border-radius: 15px;
  max-height: 50px;
  max-width: 50px;
`,hn=D.details`
  summary svg {
    transform: rotate(-90deg);
  }

  &[open] > summary:first-child svg {
    transform: rotate(90deg);
  }

  summary ~ * {
    margin-left: 10px;
  }
`,fn=D(hn)``,bn=D.summary`
  color: #e0ebfd;
  background-color: #8db6f6;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 30px;
  margin-top: 0.05em;
`,wn=D.span`
  display: grid;
  place-items: center;
  svg {
    height: 1em;
    width: 1.4em;
  }
`,xn=D.label`
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 2px solid blue;
`,vn=D.div``,yn=({children:e})=>N.createElement(bn,null,N.createElement(wn,null,N.createElement(ee,null)),N.createElement("span",null,e));D.button``;const En=({path:e,obj:t})=>{const n=e[e.length-1];if("object"!=typeof t||null===t)return N.createElement(xn,null,n,":",N.createElement("input",{onChange:e=>{console.log()},type:typeof t,defaultValue:t,placeholder:n}));const o=Object.entries(t).map((([t,n])=>N.createElement(En,{key:t,path:[...e,t],obj:n})));return N.createElement(hn,null,N.createElement(yn,null,n),N.createElement(vn,null,o))},_n=e=>{const{id:t}=e,n=H((e=>e.templates.find((({nodes_id:e})=>e===t)))),{name:o,description:r,icon_link:i}=n||{},l=Object.entries(n).map((([e,t])=>{if("object"!=typeof t&&null!==t){const o="string"!=typeof(n=e.replace(/_/g," "))?"":n.charAt(0).toUpperCase()+n.slice(1);return N.createElement(xn,{key:o},o,":",N.createElement("input",{type:typeof t,defaultValue:t,placeholder:o}))}var n;return null}));return N.createElement(dn,null,N.createElement(gn,null,N.createElement(mn,{src:i}),N.createElement(pn,null,N.createElement(cn,null,o),N.createElement(un,null,r))),N.createElement(fn,null,N.createElement(yn,null,"Default settings"),N.createElement(vn,null,l)),N.createElement(En,{obj:n.node_settings_json,path:["node_settings_json"]}),N.createElement(En,{obj:n.node_response_settings_json,path:["node_response_settings_json"]}))},kn=e=>{const{id:t}=e;return N.createElement(an,null,N.createElement(_n,{id:t}),N.createElement(sn,{id:t}))},Cn=D.div`
  display: flex;
  height: 40px;
`,In=D.div`
  flex: 1;
  order: -1;
`,Sn=D.main`
  display: flex;
  position: relative;
`,Nn=D.div``,Dn=D.div`
  flex: 1;
  ${({shift:e})=>e&&z`
      div.ql-toolbar.ql-snow {
        padding-left: 40px;
      }
      .jsoneditor-menu {
        padding-left: 40px;
      }
    `}
`,Pn=()=>{var e;const t=H((e=>e)),n=S.exports.useRef(null),o=S.exports.useRef();return S.exports.useEffect((()=>{const{current:e}=n;if(e){const n={mode:"tree",modes:["code","form","text","tree","view","preview"],onChange(){const{current:e}=o;e?console.log(e.get()):console.trace("Something went wrong!")}};o.current&&o.current.destroy(),o.current=new W(e,n),o.current.set(t)}})),N.createElement(Dn,{shift:!(null==(e=t.sidebarVisible)||e),ref:n})},Ln=()=>{var e;const t=K(),n=null==(e=H((e=>e.sidebarVisible)))||e,o=H((e=>e.windowConfig.mainId)),r=H((e=>e.windowConfig.id));return o===c.templateNodeSettings?N.createElement(kn,{id:r}):o===c.mainFlow?N.createElement(In,null,N.createElement(Cn,null,!n&&N.createElement(kt,null),N.createElement("button",null,"Fetch flow version"),N.createElement("button",{onClick:()=>t(Ie(0))},"Version 1"),N.createElement("button",{onClick:()=>t(Ie(1))},"Version 2"),N.createElement("button",{onClick:()=>t(Ie(2))},"Version 3")),N.createElement(gt,null)):o===c.codeEditor?N.createElement(N.Fragment,null,N.createElement("span",{style:{position:"absolute",zIndex:2,backgroundColor:"white",top:-8}},!n&&N.createElement(kt,null)),N.createElement(Pn,null)):null},Mn=()=>{const e=H((e=>e.windowConfig.sideId));return e===p.flowSettings?N.createElement(Ut,null):e===p.groupSettings?N.createElement(rn,null):null},On=()=>{const e=K();return S.exports.useEffect((()=>{e(ye()),e(_e()),e(Ce())}),[]),N.createElement(Nn,null,N.createElement(Bt,null),N.createElement(Sn,null,N.createElement(Ct,null),N.createElement(Ln,null),N.createElement(Mn,null)))};B.render(N.createElement(S.exports.StrictMode,null,N.createElement(X,{store:je},N.createElement(On,null))),document.getElementById("root"));
