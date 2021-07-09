var e,t,n,o,r,i,l,s,a,d,c=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(g)for(var n of g(t))h.call(t,n)&&f(e,n,t[n]);return e},x=(e,t)=>u(e,p(t));import{l as w,c as v,u as y,a as E,C as _,R as k,q as C,b as S,d as I,e as N,f as D,g as P,h as O,A as M,_ as j,J as L,i as T,F as z,j as $,k as V,P as W}from"./vendor.f73332fc.js";(t=e||(e={})).START="START",t.MIDDLE="MIDDLE",t.END="END",(o=n||(n={})).Drawflow="drawflow",o.Groups="groups",(i=r||(r={})).NODE_SETTINGS="NODE_SETTINGS",i.GROUP_SETTINGS="GROUP_SETTINGS",(s=l||(l={})).backgroundOpacity="backgroundOpacity",s.backgroundBlur="backgroundBlur",s.backgroundImageUrl="backgroundImageUrl",(d=a||(a={})).in="in",d.out="out";const B=e=>Object.keys(e);var X,A,F,Y;(A=X||(X={}))[A.mainFlow=0]="mainFlow",A[A.codeEditor=1]="codeEditor",A[A.tem=2]="tem",A[A.templateNodeSettings=3]="templateNodeSettings",(Y=F||(F={}))[Y.groupSettings=0]="groupSettings",Y[Y.flowSettings=1]="flowSettings",Y[Y.none=2]="none";class R{constructor(e,t){this.spacingX=40,this.spacingY=60,this.id=e,this.flow=t,this.state=t.state,this.nodeState=this.state.drawflow[this.id]}get head(){return this.nodeState.head}get lane(){return this.nodeState.lane}get port(){return this.nodeState.port}get portInPos(){var e;return null==(e=this.state.ports.find((({nodeId:e,portId:t,type:n})=>e===this.id&&1===t&&n===a.in)))?void 0:e.pos}get outPorts(){return this.state.ports.filter((({type:e,nodeId:t})=>this.id===t&&e===a.out))}get parent(){var e;const t=null==(e=this.parentConnection)?void 0:e.startId;return t?this.flow.getNode(t):null}get parentConnection(){return this.state.connections.find((e=>{e||console.log({conn:e});const{endId:t,endPort:n}=e;return t===this.id&&1===n}))}get totalWidth(){if(!1===this.nodeState.visible)return 0;return Math.max(this.width+this.subnodesWidth,this.leftWidth+this.rightWidth)}get childrenTotalWidth(){const{out1:e}=this;if(!e.length)return 0;let t=0;return e.forEach((e=>{t+=e.totalWidth})),t+this.spacingX*(e.length-1)}alignChildren(){const{out1:e}=this;this.update({isSub:!1,port:{out:2}});let t=this.pos.x-(this.leftWidth-this.width/2);for(const o of e){const e=t+(o.leftWidth-o.width/2);o.setPos({x:e,y:this.pos.y+this.height+this.spacingY}),!1!==o.nodeState.visible&&(t+=o.totalWidth+this.spacingX),o.alignChildren()}const{subnodes:n}=this;n.length&&(t=this.pos.x+this.width+this.spacingX,n.forEach((e=>{e.update({isSub:!0,port:{out:1}}),e.setPos({x:t,y:this.pos.y+(this.height/2-e.height/2)}),t+=e.width+this.spacingX})))}get leftWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,n=this.width/2;if(!e.length)return n;const o=e[0].leftWidth,r=o+(t-o-e[e.length-1].rightWidth)/2;return Math.max(r,n)}get rightWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,n=this.width/2+this.subnodesWidth;if(!e.length)return n;const o=e[0].leftWidth,r=e[e.length-1].rightWidth,i=r+(t-o-r)/2;return Math.max(i,n)}get all2Successors(){const{subnodes:e,out1:t}=this,n=[...t];return e.forEach((e=>n.push(e))),this.out1.forEach((e=>n.push(e))),n}get allSuccessors(){const e=[...this.out1,...this.subnodes],t=[...e];return e.forEach((e=>t.push(...e.allSuccessors))),t}toggleVisibility(e){this.update({visible:e}),this.parentConnection&&(this.parentConnection.visible=e),this.outConnections.forEach((t=>{t.visible=e}))}toggleChildrenVisibility(){var e;const t=null==(e=this.nodeState.childrenVisibility)||e;this.update({childrenVisibility:!t});const{subnodes:n,allSuccessors:o}=this;o.forEach((e=>{n.includes(e)||e.toggleVisibility(!t)}))}toggleSubnodesVisibility(){var e;const t=null==(e=this.nodeState.subnodesVisibility)||e;this.update({subnodesVisibility:!t}),this.subnodes.forEach((e=>{e.toggleVisibility(!t)}))}get outConnections(){return this.state.connections.filter((({startId:e})=>e===this.id))}children(e){return this.state.connections.filter((({startId:t,startPort:n})=>t===this.id&&n===e)).map((e=>this.flow.getNode(e.endId)))}get out1(){return this.children(1)}get firstSubnode(){return this.children(2)[0]}get subnodes(){var e,t;return(null==(t=null==(e=this.firstSubnode)?void 0:e.flowLine)?void 0:t.flowLineNodes)||[]}get subnodesWidth(){return this.subnodes.reduce(((e,t)=>e+t.width+this.spacingX),0)}get isSub(){return null!==this.complexParentNode}get complexParentNode(){const e=this.parent;return e?e.firstSubnode===this?e:e.complexParentNode:null}get flowLine(){const e=[this];let t=this,n=t.firstSubnode;for(;1===t.out1.length;)t=t.out1[0],e.push(t),n=n||t.firstSubnode;return t.out1.length>1?null:{flowLineNodes:e,hasSubnodes:n}}get height(){return this.state.drawflow[this.id].height}get width(){return this.state.drawflow[this.id].width}get pos(){return this.state.drawflow[this.id].pos}setPos(e){const{pos:t}=this,{x:n,y:o}=e;this.flow.moveNode({nodeId:this.id,dx:n-t.x,dy:o-t.y})}update(e){const t=w.merge(this.nodeState,e);Object.assign(this.nodeState,t)}}class G{constructor(e){this.nodes={},this.distanceToConnect=100,this.distanceToDisconnect=0,this.state=e;const{drawflow:t}=this.state;Object.keys(t).map((e=>this.nodes[Number(e)]=new R(Number(e),this)))}get heads(){return Object.entries(this.nodes).filter((([,e])=>!e.parent)).map((e=>e[1]))}getNode(e){return this.nodes[e]}alignAll(){this.setLaneNumbers(),this.heads.forEach((e=>{e.alignChildren()}))}allowConnection(e){const{startId:t,startPort:n,endId:o}=e,r=this.getNode(o),i=this.getNode(t),l=2===n;if(r.parent||!1===i.nodeState.visible)return!1;const s=r.flowLine;return!((l||i.isSub)&&(!s||s.hasSubnodes))}addConnection(e){let{startId:t,startPort:n,endId:o,endPort:r}=e;const i=this.getNode(o),l=this.getNode(t),s=2===n;if(i.parent||!1===l.nodeState.visible)return!1;const a=i.flowLine;if((s||l.isSub)&&(!a||a.hasSubnodes))return!1;let d=null;if(s&&l.subnodes.length){if(!1===l.nodeState.subnodesVisibility){t=l.subnodes[l.subnodes.length-1].id,n=1,this.state.connections.push({startId:t,startPort:n,endId:o,endPort:r,visible:!0});const{flowLineNodes:e}=a;return void e.forEach((e=>e.toggleVisibility(!1)))}d=l.subnodes[0]}if(l.isSub&&l.out1.length&&(d=l.out1[0]),null!==d){const e=this.state.connections.find((e=>e.startId===t&&e.startPort===n&&e.endId===d.id&&1===e.endPort)),o=this.state.connections.indexOf(e);this.state.connections.splice(o,1);const{flowLineNodes:r}=a,i=r[r.length-1];this.state.connections.push({startId:i.id,startPort:1,endId:d.id,endPort:1,visible:!0})}this.state.connections.push({startId:t,startPort:n,endId:o,endPort:r,visible:!0})}moveNode({dx:e,dy:t,nodeId:n}){this.state.drawflow[n].pos.x+=e,this.state.drawflow[n].pos.y+=t}dragNode({dx:e,dy:t,nodeId:n}){this.moveNode({dx:e,dy:t,nodeId:n}),this.toggleAvailablePortToConnect(n)}toggleAvailablePortToConnect(e){const t=Date.now();if(this.state.computing&&t-this.state.computing<100)return;if(this.state.computing=t,!this.state.config.drag)return;const n=this.getNode(e),o=n.head;if(n.parentConnection){const e=this.state.connections.indexOf(n.parentConnection);this.state.connections.splice(e,1),this.alignAll()}const r=n.portInPos;if(!r)return;let i=null;Object.entries(this.nodes).filter((([,e])=>e.head!==o&&!1!==e.nodeState.visible)).forEach((([t,n])=>{Number(t)!==e&&n.outPorts.forEach((e=>{const{pos:t}=e,n=Math.hypot(r.x-t.x,r.y-t.y);n<this.distanceToConnect&&(null===i||n<i.distance)&&(i={port:e,distance:n})}))})),this.state.portToConnect=null!==i?i.port:void 0}setLaneNumbers(){let e=this.heads;for(e.forEach((e=>e.update({head:e.id,lane:0})));e.length;){const t=[];e.forEach((e=>{let n=e.lane+1;const{subnodes:o,head:r}=e;if(void 0===r)return void console.error("head is undefined in setLaneNumbers");if(o.length)for(const t of o)t.update({lane:n++,head:r});const i=e.children(1);i.forEach((e=>e.update({head:r,lane:n}))),t.push(...i)})),e=t}this.heads.forEach((e=>{const{head:t}=e;for(let n=0,o=0,r=[e];r.length;++n)r=Object.values(this.nodes).filter((e=>e.lane===n&&e.head===t)),r.forEach((e=>{e.update({positionNumber:o++})}))}))}}const J={nodeId:1,canvasDrag:!1,config:{drag:!1,connectionsLabelEnable:!1,canvasTranslate:{x:0,y:0},zoom:{value:1,max:2,min:.5,tick:.1}},drawflow:{},connections:[],connectionsLabel:{},ports:[],select:null,newPathDirection:null,modalType:null,editLock:!1,mouseBlockDragPos:{clientX:void 0,clientY:void 0}},U=e=>{new G(e).alignAll()},q=(e,{payload:t})=>{if("function"==typeof t)return void t(e);const n=w.merge(e,t);for(const o in n)e[o]=n[o]},K=v({name:n.Drawflow,initialState:J,reducers:{setState:q,setEditLock:(e,{payload:t})=>{e.editLock=t},align:U,moveNode:(e,t)=>new G(e).dragNode(t.payload),setMouseBlockDragPos:(e,{payload:t})=>{e.mouseBlockDragPos=t},unSelect:e=>{e.config.drag=!1,e.select=null},select:(e,{payload:t})=>{e.config.drag="node"===t.type,e.select=t},selectPort:(e,{payload:t})=>{const n=e.ports.find((({nodeId:e,portId:n,type:o})=>o===t.type&&n===t.portId&&e===t.nodeId));if(!n)return void console.error("Cannot find port to select in state.ports");const o=e.ports.indexOf(n);e.select={type:t.type,selectId:o}},moveCanvas:(e,{payload:{movementX:t,movementY:n}})=>{e.canvasDrag&&(e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=n)},canvasDrag:(e,{payload:t})=>{e.canvasDrag=t},canvasMouseMove:(e,{payload:{movementX:t,movementY:n,clientX:o,clientY:r}})=>{var i;if(e.clientCurrentMousePos={clientX:o,clientY:r},e.canvasDrag)e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=n;else if((null==(i=e.select)?void 0:i.type)===a.out)e.newPathDirection={clientX:o,clientY:r};else if(e.config.drag&&e.select){const t=e.select.selectId,{clientX:n,clientY:i}=e.mouseBlockDragPos;e.mouseBlockDragPos={clientX:o,clientY:r};const l=e.config.zoom.value,s=(o-n)/l,a=(r-i)/l;new G(e).dragNode({nodeId:t,dy:a,dx:s})}},canvasMouseUp:e=>{var t,n;const o=new G(e);if(e.portToConnect&&(null==(t=e.select)?void 0:t.selectId)){const{nodeId:t,portId:n}=e.portToConnect,r=e.select.selectId,i=1;o.addConnection({startId:t,startPort:n,endId:r,endPort:i})}e.portToConnect=void 0,e.newPathDirection=null,e.canvasDrag=!1,e.config.drag=!1,(null==(n=e.select)?void 0:n.type)===a.out&&(e.select=null),o.alignAll()},deleteNode:e=>{const{connections:t,drawflow:n,ports:o,select:r}=e;if("node"!==(null==r?void 0:r.type))return;const{selectId:i}=r;t.forEach((({endId:e,startId:n},o)=>{[n,e].includes(i)&&delete t[o]})),o.forEach((({nodeId:e},t)=>{e===i&&delete o[t]})),delete n[i],e.select=null},deletePath:e=>{const{connections:t,select:n}=e;"path"===(null==n?void 0:n.type)&&(console.log("delete"),t.splice(n.selectId,1))},load:(e,{payload:t})=>(Object.assign(e,J),e.drawflow=t.drawflow,e.nodeId=Object.keys(t.drawflow).length+1,e.connections=t.connections,e),portMouseUp:(e,{payload:{nodeId:t,portId:n,PortType:o}})=>{const{select:r}=e;if(o!==a.in||!r)return;const i=e.ports[r.selectId],l=t,s=n,d=i.nodeId,c=i.portId;if(d===l)return;new G(e).addConnection({startId:d,startPort:c,endId:l,endPort:s})},clear:()=>J,pushPorts:(e,{payload:t})=>{if(0===t.length)return;const{nodeId:n}=t[0];e.ports=e.ports.filter((e=>e.nodeId!==n)),e.ports.push(...t)},zoom:(e,{payload:t})=>{const{zoom:n}=e.config,{value:o,max:r,min:i,tick:l}=n,s=o+(t?l:-l);s<=r&&s>=i&&(n.value=s),null===t&&(e.config.canvasTranslate={x:0,y:0},n.value=1)},nodeSize:(e,{payload:{height:t,width:n,id:o}})=>{e.drawflow[o].height=t,e.drawflow[o].width=n},toggleSubnodes:(e,{payload:{id:t}})=>{new G(e).getNode(t).toggleSubnodesVisibility(),U(e)},toggleChildren:(e,{payload:{id:t}})=>{new G(e).getNode(t).toggleChildrenVisibility(),U(e)},copyNode:e=>{var t;"node"===(null==(t=e.select)?void 0:t.type)&&(e.nodeToCopyId=e.select.selectId)}}}),H=K.actions,Q=K.reducer,Z=e=>e.flows[e.version],ee=()=>y(),te=E;function ne(e,t){const[n,o]=_.exports.useState((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.log(n),t}}));return[n,t=>{try{const r=t instanceof Function?t(n):t;o(r),window.localStorage.setItem(e,JSON.stringify(r))}catch(r){console.log(r)}}]}const oe=e=>k.createElement("svg",x(b({},e),{viewBox:"0 0 16 16",fill:"none"}),k.createElement("path",{d:"M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),k.createElement("path",{d:"M14.0016 13.9996L11.1016 11.0996",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),re=e=>k.createElement("svg",x(b({},e),{viewBox:"0 0 10 14",fill:"none"}),k.createElement("path",{d:"M8 2L2.18437 6.84636C2.08842 6.92631 2.08842 7.07369 2.18437 7.15364L8 12",stroke:"#393C44",strokeWidth:"2.5",strokeLinecap:"round"})),ie=e=>k.createElement("svg",x(b({},e),{viewBox:"0 0 1792 1792"}),k.createElement("path",{fill:"#217CE8",d:"M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z"})),le=e=>k.createElement("svg",x(b({},e),{viewBox:"0 0 19 19",fill:"none"}),k.createElement("path",{d:"M14.25 4.75L4.75 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),k.createElement("path",{d:"M4.75 4.75L14.25 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),se=e=>k.createElement("svg",x(b({},e),{enableBackground:"new 0 0 512 512",viewBox:"0 0 512 512"}),k.createElement("g",null,k.createElement("path",{d:"m482.16 288.51 29.84-4.68v-55.66l-29.84-4.68c-24.56-4.14-33.19-36.67-13.99-52.45l22.52-18.55-27.71-47.98-27.56 10.32c-23.33 8.74-47-14.9-38.25-38.25l10.32-27.56-47.98-27.71-18.55 22.52c-15.75 19.16-48.3 10.61-52.45-13.99l-4.68-29.84h-55.66l-4.68 29.84c-4.17 24.56-36.67 33.19-52.45 13.99l-18.55-22.52-47.98 27.71 10.32 27.56c8.74 23.33-14.9 47-38.25 38.25l-27.56-10.32-27.71 47.98 22.52 18.55c19.12 15.74 10.67 48.29-13.99 52.45l-29.84 4.68v55.66l29.84 4.68c24.46 4.15 33.26 36.59 13.99 52.45l-22.52 18.55 27.71 47.98 27.56-10.32c23.22-8.7 47.04 14.81 38.25 38.25l-10.32 27.56 47.98 27.71 18.55-22.52c15.73-19.11 48.27-10.67 52.45 13.99l4.68 29.84h55.66l4.68-29.84c4.12-24.4 36.56-33.3 52.45-13.99l18.55 22.52 47.98-27.71-10.32-27.56c-8.7-23.22 14.81-47.04 38.25-38.25l27.56 10.32 27.71-47.98-22.52-18.55c-19.16-15.76-10.61-48.28 13.99-52.45zm-226.16 92.49c-68.93 0-125-56.07-125-125s56.07-125 125-125 125 56.07 125 125-56.07 125-125 125z",fill:"#7ed8f6"}),k.createElement("path",{d:"m468.17 340.96 22.52 18.55-27.71 47.98-27.56-10.32c-23.44-8.79-46.95 15.03-38.25 38.25l10.32 27.56-47.98 27.71-18.55-22.52c-15.89-19.31-48.33-10.41-52.45 13.99l-4.68 29.84h-27.83v-131c68.93 0 125-56.07 125-125s-56.07-125-125-125v-131h27.83l4.68 29.84c4.15 24.6 36.7 33.15 52.45 13.99l18.55-22.52 47.98 27.71-10.32 27.56c-8.75 23.35 14.92 46.99 38.25 38.25l27.56-10.32 27.71 47.98-22.52 18.55c-19.2 15.78-10.57 48.31 13.99 52.45l29.84 4.68v55.66l-29.84 4.68c-24.6 4.17-33.15 36.69-13.99 52.45z",fill:"#6aa9ff"}),k.createElement("path",{d:"m256 121c-74.44 0-135 60.56-135 135s60.56 135 135 135 135-60.56 135-135-60.56-135-135-135zm0 210c-41.35 0-75-33.64-75-75s33.65-75 75-75 75 33.64 75 75-33.65 75-75 75z",fill:"#6aa9ff"}),k.createElement("path",{d:"m391 256c0 74.44-60.56 135-135 135v-60c41.35 0 75-33.64 75-75s-33.65-75-75-75v-60c74.44 0 135 60.56 135 135z",fill:"#4895ff"}))),ae=e=>k.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},e),k.createElement("g",{transform:"matrix(1.06642 0 0 1.06642 -1.03 -1106.225)"},k.createElement("circle",{cx:"8.467",cy:"1044.829",r:"5.626",fill:"#c2e4f8"}),k.createElement("path",{fill:"#249fe6",fillRule:"evenodd",style:{lineHeight:"normal",textIndent:0,textAlign:"start",textDecorationLine:"none",textDecorationStyle:"solid",textDecorationColor:"#000",textTransform:"none",isolation:"auto",mixBlendMode:"normal"},d:"M 8 1 C 4.139959 1 1.0000428 4.1398846 1 8 C 0.99997942 11.860115 4.1399146 15 8 15 C 11.860086 15 15.00002 11.860115 15 8 C 14.999957 4.1398846 11.860041 1 8 1 z M 8 2 C 11.319604 2 13.999963 4.6803455 14 8 C 14.000018 11.319654 11.319644 14 8 14 C 4.6803565 14 1.9980292 11.319654 1.9980469 8 C 1.9980837 4.6803455 4.6803952 2 8 2 z M 7.9863281 4.0039062 A 0.50005001 0.50005001 0 0 0 7.4941406 4.5117188 L 7.5 7.5039062 L 4.5039062 7.5097656 A 0.50095123 0.50095123 0 0 0 4.5058594 8.5117188 L 7.5 8.5058594 L 7.5058594 11.5 A 0.50005001 0.50005001 0 1 0 8.5058594 11.5 L 8.5019531 8.5039062 L 11.494141 8.4980469 A 0.50005001 0.50005001 0 1 0 11.492188 7.4980469 L 8.5 7.5039062 L 8.4960938 4.5117188 A 0.50005001 0.50005001 0 0 0 7.9863281 4.0058594 L 7.9863281 4.0039062 z ",color:"#000",fontFamily:"sans-serif",fontWeight:400,overflow:"visible",transform:"matrix(.93772 0 0 .93772 .965 1037.328)","white-space":"normal"}))),de=e=>k.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 3",fill:"none"},e),k.createElement("circle",{cx:"1.2",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),k.createElement("circle",{cx:"5.9998",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),k.createElement("circle",{cx:"10.7996",cy:"1.2",r:"1.2",fill:"#C5C5D0"})),ce=C.button`
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
`,ue=C.div`
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
`,pe=C.img`
  max-height: 100%;
  max-width: 100%;
`,ge=C.span``,me=e=>{const{nodes_id:t}=e,n=ee(),o=_.exports.useRef(null),r=te((e=>e.precanvas));return k.createElement(ue,{ref:o,onMouseDown:e=>{if(void 0===Me)return;n(Me(t));const{current:i}=o;if(!i)return void console.error("No node to copy");const{left:l,top:s}=i.getBoundingClientRect(),a=e.clientX-l,d=e.clientY-s,c=i.cloneNode(!0);c.style.position="absolute",c.style.left=l+window.scrollX+"px",c.style.top=s+window.scrollY+"px",document.body.appendChild(c);const u=e=>{var t;const{clientX:n,clientY:o}=e;if(r){if(n>=r.x&&o>=r.y)return document.removeEventListener("mousemove",u),void(null==(t=c.parentNode)||t.removeChild(c));c.style.left=n-a+window.scrollX+"px",c.style.top=o-d+window.scrollY+"px"}else console.error("Canvas is not ready! Cannnot drag template")};document.addEventListener("mousemove",u),document.addEventListener("mouseup",(()=>{var e;document.removeEventListener("mousemove",u),null==(e=c.parentNode)||e.removeChild(c),n(Me(void 0))}),{once:!0});const{height:p,width:g}=getComputedStyle(i);c.style.height=p,c.style.width=g}},k.createElement(pe,{src:e.icon_link}),k.createElement(ge,null,e.name),k.createElement(ce,{onMouseDown:()=>{n(ze({windowConfig:{id:t,mainId:X.templateNodeSettings}}))}},k.createElement(de,{height:3,width:12})))},he=C.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, max-content));
  grid-auto-rows: minmax(1em, auto);
  grid-gap: 1em;
  background-color: #f5f5f5;

  overflow-y: auto;
  max-height: calc(100vh - 10%);
  /* width: 100%; */
`,fe=C(ue)`
  /* min-height: 5em; */
  padding: 25px;
  :hover {
    cursor: pointer;
  }
`,be=e=>{const t=te((e=>e.templates));ee();const{searchWord:n}=e,o=n.toLowerCase().split(" ").filter((e=>e.length>0));return k.createElement(he,null,t.map((e=>{const t=JSON.stringify(e,null,2);return(o.find((e=>t.toLowerCase().includes(e)))||!o.length)&&k.createElement(me,b({key:e.nodes_id},e))})),k.createElement(fe,null,k.createElement(ae,null)))},xe=(e,t)=>{const n=(e.y-t.y)/2,o=e.x-t.x;return`M ${e.x} ${e.y} v ${-n} h ${-o} v ${-n} `},we=(e,t,n,o)=>{const{x:r,y:i,width:l,height:s}=o;return{x:e*(l/(l*n))-r*(l/(l*n)),y:t*(s/(s*n))-i*(s/(s*n))}};var ve,ye;(ye=ve||(ve={}))[ye.getTemplateNodes=1156]="getTemplateNodes",ye[ye.postTemplateNodes=1157]="postTemplateNodes",ye[ye.getFlowDataVersion=1160]="getFlowDataVersion",ye[ye.postFlowDataVersion=1161]="postFlowDataVersion",ye[ye.getFlow=1162]="getFlow",ye[ye.postFlow=1163]="postFlow",ye[ye.fetchBackgroundImages=1164]="fetchBackgroundImages",ye[ye.getGroups=1154]="getGroups",ye[ye.postGroups=1155]="postGroups",ye[ye.getStepSettingsTemplates=1222]="getStepSettingsTemplates";const Ee=window.location.search,_e=new URLSearchParams(Ee).get("session_id");_e||(console.error("sessin_id is not provided!"),alert("sessin_id is not provided!"));const ke=async(e,t={})=>{const n=b({session_id:_e,sp_name:"OK",session_exp:"2021-02-12T02:57:45.453422",status:"OK",item_id:0,max_row_per_page:50,search_term:"",search_term_header:"",pagination:1,scrdata_id:e},t);return fetch("https://valerii.educationhost.cloud?csurl=https://tastypoints.io/akm/restapi.php",{method:"post",body:JSON.stringify({input:n}).replace(/'/g,"''")}).then((async e=>{let t=await e.json();if(!t.status||!t.data)throw console.error(t),alert(t),alert(JSON.stringify(t,null,2)),new Error(t);if(t=JSON.parse(t.data),t.response_error)throw console.error(t.response_error),alert(JSON.stringify(t.response_error,null,2)),new Error(t.response_error);if("OK"!==t.status&&"OK"!==t.sp_name)throw alert(JSON.stringify(t,null,2)),new Error(t.response_error);return t}))},Ce=S("fetchFlow",(async(e,{dispatch:t})=>{const n=await ke(1162,{item_id:25});if(null===n.flows)return void alert("Such flow do not exist or was deleted!");const o=n.flows[0];t($e.setStateAction({flowInfo:o}))})),Se=S("fetchFlow",(async(e,{getState:t})=>{const{flowInfo:n}=t();if(!n)return void console.error("Cannot save flow, data is not available");"OK"===(await ke(1163,{item_id:25,flows:[n]})).status?alert("Saved"):alert("Cannot save flow")})),Ie=S("fetchGroups",(async(e,{dispatch:t})=>{const n=await ke(1154),{flow_nodes_group:o}=n;return o.reduce(((e,t)=>(e[t.id]=t,e)),{})})),Ne=S("updateGroup",(async(e,{dispatch:t})=>{var n;console.log({group:e}),"delete"in e||(e.delete=0);const o=await ke(1155,{flow_nodes_group:[e],item_id:null!=(n=e.id)?n:0});console.log({resp:o}),"OK"===o.status?(t(Ie()),e.id||(e.id=o.item_id),alert(`Group ${e.id} updated`)):alert(`Error: cannot ${e.id?"update":"create"} group ${e.node_group_name}`)})),De=S("fetchTemplateNodes",(async()=>{const{flow_nodes:e}=await ke(1156,{});return console.log({flow_nodes:e}),e})),Pe=D("versions/changed"),Oe=D("addNewNode"),Me=D("dragTemplate"),je=D("canvasShapeUpdated"),Le=D("insertCopiedNode"),Te=D("toggleSidebar"),ze=D("setState"),$e={setStateAction:ze},Ve=N({reducer:I({version:0,flows:[J,J,J],templates:[],dragTemplate:0,groups:{},windowConfig:{id:0,mainId:X.mainFlow,sideId:F.none,background:{opacity:0,blur:0,imageUrl:""}}},(t=>{t.addCase(ze,q).addCase(Le,(e=>{const t=Z(e);if(void 0===t.nodeToCopyId)return;const{clientX:n,clientY:o}=t.clientCurrentMousePos,r=JSON.parse(JSON.stringify(t.drawflow[t.nodeToCopyId]));e.canvas?(r.pos=we(n,o,t.config.zoom.value,e.canvas),t.drawflow[t.nodeId]=x(b({},r),{id:t.nodeId,height:0,width:0}),++t.nodeId):console.error("Canvas shape is not available")})).addCase(Pe,((e,{payload:t})=>{e.version=t})).addCase(Te,(e=>{var t;e.sidebarVisible=!(null==(t=e.sidebarVisible)||t)})).addCase(Oe,((t,{payload:{clientX:n,clientY:o}})=>{if(!t.dragTemplate)return;if(!t.canvas)return void console.error("Canvas shape is not available");const r=t.flows[t.version],i=(()=>{const t={flow_node_type_id:0,nodes_id:0,node_scrdata_id:0,flow_action_scrdata_id:0,order:0,nodes_group_id:0,name:"**",description:"**",icon_link:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",icon_link_selected:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:0,execute_node_specific_date_time:"2020-11-11T19:30",loop_cycles:0,node_settings_json:{},node_response_settings_json:{},loop_cycle_reached_jump_to_node:0,node_attributes:{},node_object_lists:{},node_story:"Node story"};return{id:0,type:e.MIDDLE,data:t,port:{in:1,out:2},pos:{x:-20,y:100},isSub:!1,height:0,width:0}})();i.pos=we(n,o,r.config.zoom.value,t.canvas),r.mouseBlockDragPos={clientX:n,clientY:o},r.drawflow[r.nodeId]=x(b({},i),{id:r.nodeId,height:0,width:0}),r.select={type:"node",selectId:r.nodeId++},r.config.drag=!0,t.dragTemplate=void 0})).addCase(Me,((e,{payload:t})=>{e.dragTemplate=t})).addCase(je,((e,{payload:t})=>{e.canvas=t})).addCase(De.fulfilled,((e,{payload:t})=>{console.log(t),e.templates=t})).addCase(Ie.fulfilled,((e,{payload:t})=>{e.groups=t})).addMatcher((e=>e.type.startsWith(n.Drawflow)),((e,t)=>{e.flows[e.version]=Q(e.flows[e.version],t)}))}))}),We=C.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`,Be=C.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
`,Xe=()=>{const e=te((e=>Z(e).editLock)),t=ee();return k.createElement(We,null,!e&&k.createElement(Be,null,"Clear"),k.createElement(Be,{onClick:()=>t(H.setEditLock(!e))},e?"UnLock":"Lock"))},Ae=C.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`,Fe=C.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  padding: 3px 10px;
`,Ye=()=>{const e=ee();return k.createElement(Ae,null,k.createElement(Fe,{onClick:()=>e(H.zoom(!0))},"+"),k.createElement(Fe,{onClick:()=>e(H.zoom(!1))},"-"),k.createElement(Fe,{onClick:()=>e(H.zoom(null))},"reset"))},Re=P(O,w.isEqual),Ge=C.svg`
  position: absolute;
  overflow: visible;
`,Je=C.path`
  :hover {
    stroke-width: 6px;
    stroke: purple;
    cursor: pointer;
  }
  fill: none;
  stroke-width: 6px;
  stroke: steelblue;
  ${({selected:e})=>e&&M`
      stroke-width: 7px;
      stroke: red;
    `};
`,Ue=e=>{const{id:t,d:n}=e,o=(e=>te(_.exports.useMemo((()=>Re((t=>{if(void 0===e)return!1;const n=Z(t).select;return"path"===(null==n?void 0:n.type)&&n.selectId===e}),(e=>e))),[e])))(t),r=ee();return k.createElement(Ge,null,k.createElement(Je,{selected:o,d:n,onMouseDown:e=>{void 0!==t&&(e.stopPropagation(),r(H.select({type:"path",selectId:t})))}}))},qe=()=>{var e;const t=null!=(e=te(_.exports.useMemo((()=>Re((e=>{const t=Z(e);if(!t.select||t.select.type!==a.out||!t.newPathDirection)return void console.error("Cannot draw new path!");const n=t.ports[t.select.selectId];if(!n)return void console.error("No start port in newPath");const o=n.pos;if(!e.canvas)return void console.error("Canvas shape is not available");const{clientX:r,clientY:i}=t.newPathDirection,l=we(r,i,t.config.zoom.value,e.canvas);return xe(o,l)}),(e=>e))),[])))?e:"";return k.createElement(Ue,{d:t})},Ke=C.div`
  max-height: 100%;
  overflow: hidden;
`,He=e=>k.createElement(Ke,null,JSON.stringify(e,null,2)),Qe=100,Ze=60,et=C.div`
  width: 15px;
  height: 15px;
  border-radius: 60px;
  background-color: #217ce8;
  opacity: ${({visible:e})=>e?1:0};
  transform: scale(${({visible:e})=>e?1:0});
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
`,tt=C.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
`,nt=C(tt)`
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&M`
      left: 100%;
      top: 50%;
    `}
`,ot=C(tt)`
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&M`
      display: none;
    `}
`,rt=C(tt)`
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  ${({isSub:e})=>e&&M`
      left: 0;
      top: 50%;
    `}
`,it={[a.in]:[rt],[a.out]:[nt,ot]},lt=e=>{const{nodeId:t,portId:n,type:o}=e,r=ee(),i=(l=e,te(_.exports.useMemo((()=>Re((e=>{const{portToConnect:t}=Z(e);if(void 0===t)return!1;const n=JSON.parse(JSON.stringify(t));return delete n.pos,w.isEqual(l,n)}),(e=>e))),[l])));var l;const s=(a=t,te(_.exports.useMemo((()=>Re((e=>Z(e).drawflow[a].isSub),(e=>e))),[a])));var a;const d=it[o][n-1];return k.createElement(d,{isSub:s,onMouseDown:e=>{e.stopPropagation(),r(H.selectPort({type:o,nodeId:t,portId:n}))},onMouseUp:()=>{r(H.portMouseUp({nodeId:t,portId:n,PortType:o}))}},k.createElement(et,{visible:i}))},st=e=>{const{id:t,port:n,type:o}=e,r=[];for(let i=1;i<=n[o];i++)r.push(k.createElement(lt,{key:i,nodeId:t,portId:i,type:o}));return k.createElement("div",{className:`${o}puts`},r)},at=C.div`
  display: inline-block;
  position: absolute;
  padding: 5px;
  width: 200px;
  min-height: 60px;
  background-color: #d3d3d3;
  z-index: 1;
  cursor: move;

  ${({isSub:e})=>e&&M`
      height: ${Ze}px;
      width: ${Qe}px;
    `}
  ${({selected:e})=>e&&M`
      box-shadow: 0 2px 15px 2px #cacaca;
      z-index: 2;
    `};
`,dt=({id:e})=>{const t=te(_.exports.useMemo((()=>Re((e=>Z(e).config.drag),(e=>e))),[])),n=te((e=>Z(e).nodeId)),o=(e=>te(_.exports.useMemo((()=>Re((t=>Z(t).drawflow[e].pos),(e=>e))),[e])))(e),r=(e=>te(_.exports.useMemo((()=>Re((t=>{const n=Z(t).select;return(null==n?void 0:n.selectId)===e&&"node"===n.type}),(e=>e))),[e])))(e),i=ee(),l=_.exports.useRef(null),s=(e=>te(_.exports.useMemo((()=>Re((t=>{const n=JSON.parse(JSON.stringify(Z(t).drawflow[e]));return delete n.pos,n}),(e=>e))),[e])))(e),{port:d}=s;return _.exports.useEffect((()=>{if(l.current){const{offsetHeight:t,offsetWidth:n}=l.current;i(H.nodeSize({height:t,width:n,id:e})),i(H.align())}}),[i,e,s]),_.exports.useEffect((()=>{const t=(t,n)=>Array.from(n.querySelector(`.${t}puts`).children).map(((n,r)=>{const i=parseInt(getComputedStyle(n).left)+o.x,l=parseInt(getComputedStyle(n).top)+o.y;return{nodeId:e,pos:{x:i,y:l},portId:r+1,type:t}}));if(l.current){const e=t(a.in,l.current),n=t(a.out,l.current);i(H.pushPorts([...e,...n]))}}),[i,e,o]),_.exports.useEffect((()=>{if(l.current&&n-1===e&&t){const{offsetHeight:t,offsetWidth:n}=l.current;i(H.moveNode({nodeId:e,dx:.2*-n,dy:.2*-t}))}}),[]),k.createElement(at,{selected:r,ref:l,style:{left:o.x,top:o.y},isSub:s.isSub,onMouseDown:t=>{t.stopPropagation();const{clientX:n,clientY:o}=t;i(H.select({type:"node",selectId:e})),i(H.setMouseBlockDragPos({clientX:n,clientY:o}))},onContextMenu:()=>{},onDoubleClick:()=>{}},k.createElement(He,b(b({},s),o)),!s.isSub&&k.createElement(k.Fragment,null,k.createElement("div",{onClick:()=>{i(H.toggleSubnodes({id:e}))}},"toggle sub"),k.createElement("div",{onClick:()=>{i(H.toggleChildren({id:e}))}},"toggle children")),k.createElement(st,{id:e,port:d,type:a.in}),k.createElement(st,{id:e,port:d,type:a.out}),k.createElement("button",null,"X"))},ct=()=>{const e=te(_.exports.useMemo((()=>Re((e=>{const{drawflow:t}=Z(e);return Object.entries(t).filter((([e,{visible:t}])=>!1!==t)).map((([e])=>Number(e)))}),(e=>e))),[]));return k.createElement(k.Fragment,null,e.map((e=>k.createElement(dt,{key:e,id:e}))))},ut=({id:e})=>{const t=(n=e,te(_.exports.useMemo((()=>Re((e=>{var t,o;const r=Z(e),{startId:i,startPort:l,endId:s,endPort:d}=r.connections[n],c=null==(t=r.ports.find((e=>e.nodeId===i&&e.portId===l&&e.type===a.out)))?void 0:t.pos,u=null==(o=r.ports.find((e=>e.nodeId===s&&e.portId===d&&e.type===a.in)))?void 0:o.pos;return c&&u?xe(c,u):""}),(e=>e))),[n])));var n;return k.createElement(Ue,{key:e,id:e,d:t})},pt=()=>{const e=te(_.exports.useMemo((()=>Re((e=>{const{connections:t}=Z(e);return t.reduce(((e,t,n)=>(t.visible&&e.push(n),e)),[])}),(e=>e))),[])).map((e=>k.createElement(ut,{key:e,id:e})));return k.createElement(k.Fragment,null,e)};const gt=C.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-image: url(${"/Drawflow-react/assets/tile.07d222ee.png"});
  background-repeat: repeat;
  background-size: 30px 30px;
`,mt=C.div`
  width: 100%;
  height: 100%;
  position: relative;
`,ht=(e,t,n,o)=>{var r;const[i,l]=(null==(r=getComputedStyle(e).transform.match(/^matrix\((.+)\)$/))?void 0:r[1].split(",").slice(-2).map(Number))||[0,0];e.style.transform=`translate(${i+t}px, ${l+n}px) scale(${o})`},ft=C.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`,bt=()=>{(()=>{const e=ee(),[t]=ne(l.backgroundOpacity,50),[n]=ne(l.backgroundBlur,50),[o]=ne(l.backgroundImageUrl,"");_.exports.useEffect((()=>{e(ze({windowConfig:{background:{opacity:t,blur:n,imageUrl:o}}}))}),[])})();const{config:{zoom:e},newPathDirection:t,canvasDrag:n}=te(_.exports.useMemo((()=>Re((e=>{const t=Z(e),{config:{zoom:n},newPathDirection:o,canvasDrag:r}=t;return{config:{zoom:n},newPathDirection:o,canvasDrag:r}}),(e=>e))),[])),o=ee(),r=_.exports.useRef(null),i=_.exports.useRef(null);_.exports.useEffect((()=>{const{current:t}=r;t&&ht(t,0,0,e.value)}),[n,e.value]),_.exports.useEffect((()=>{const{current:e}=r;if(e){const t=e.getBoundingClientRect(),n={x:t.x,y:t.y,width:e.clientWidth,height:e.clientHeight};o(je(n))}const{current:t}=i;if(t){const e=t.getBoundingClientRect(),n={x:e.x,y:e.y,width:t.clientWidth,height:t.clientHeight};o(ze({precanvas:n}))}}));const{opacity:s,blur:a,imageUrl:d}=te((e=>e.windowConfig.background));return k.createElement(gt,{ref:i,className:"drawflow",tabIndex:0,onKeyDownCapture:e=>{"Delete"===e.key&&(o(H.deletePath()),o(H.deleteNode())),e.ctrlKey&&"c"===e.key&&o(H.copyNode()),e.ctrlKey&&"v"===e.key&&o(Le())},onMouseDown:()=>{o(H.canvasDrag(!0)),o(H.unSelect())},onMouseUp:()=>o(H.canvasMouseUp()),onMouseMove:t=>{const{clientX:i,clientY:l,movementX:s,movementY:a}=t,{current:d}=r;n&&d&&ht(d,s,a,e.value),o(H.canvasMouseMove({clientX:i,clientY:l,movementX:s,movementY:a}))},onMouseEnter:e=>{const{clientX:t,clientY:n}=e;o(Oe({clientX:t,clientY:n}))},style:{backgroundColor:`rgba(251, 251, 251, ${s}%)`}},k.createElement(ft,{style:{backgroundImage:`url(${d})`,filter:`blur(${a/10}px)`}}),k.createElement(Xe,null),k.createElement(Ye,null),k.createElement(mt,{ref:r,style:{}},k.createElement(ct,null),k.createElement(pt,null),t&&k.createElement(qe,null)))};const xt=C.div`
  width: 300px;
  order: -2;
  max-height: 100vh;
`,wt=C.div`
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
`,vt=C.div`
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

  ${({selected:e})=>e&&M`
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
`,yt=({selectedGroup:e,setSelectedGroup:t})=>{ee();const n=te((e=>e.groups));return k.createElement(wt,null,Object.values(n).map((({id:n,node_group_name:o,node_group_order:r})=>k.createElement(vt,{key:n,selected:n===e,onClick:()=>t(n)},o))))},Et=C.input`
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
`,_t=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`,kt=C.span`
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
`,Ct=C.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,St=({setSearchWord:e})=>{const t=ee();return k.createElement(_t,null,k.createElement(kt,null,k.createElement(oe,null)),k.createElement(Et,{type:"text",placeholder:"Search templates",onChange:t=>{e(t.target.value)}}),k.createElement(Ct,{onClick:()=>t(ze({windowConfig:{sideId:F.groupSettings}}))},k.createElement(se,{height:30})),k.createElement(Nt,null))},It=C.div`
  :hover {
    cursor: pointer;
  }

  ${({opened:e})=>e&&M`
            transform: rotate(180deg);
          `};
`,Nt=e=>{var t;const n=null==(t=te((e=>e.sidebarVisible)))||t,o=ee();return k.createElement(It,x(b({},e),{opened:!n,onClick:()=>o(Te())}),k.createElement(ie,{height:40}))},Dt=()=>{const[e,t]=_.exports.useState(""),[n,o]=_.exports.useState(0);return!1===te((e=>e.sidebarVisible))?null:k.createElement(xt,null,k.createElement(St,{setSearchWord:t}),k.createElement(yt,{selectedGroup:n,setSelectedGroup:o}),k.createElement(be,{searchWord:e}))};const Pt=C.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e8e8ef;
`,Ot=C.div`
  display: flex;
  justify-content: space-between;
`,Mt=M`
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
`,jt=C.div`
  display: flex;
  align-items: center;
`,Lt=C.button`
  ${Mt}
  :focus {
    background-color: #dfdfdf;
  }
`,Tt=C.div`
  display: flex;
  align-items: center;
`,zt=C.button`
  margin: 0 10px;
  background-color: #eaecf1;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: none;
`,$t=C.div`
  display: grid;
  place-items: left;
  div {
  }
`,Vt=C.div`
  font-size: 16px;
  color: #393c44;
  font-family: Roboto;
`,Wt=C.div`
  color: #808292;
  font-size: 14px;
`,Bt=C.button`
  ${Mt}

  background-color: #e31c5c;
  display: inline-block;
  margin-right: 10px;
  color: white;
`,Xt=C.button`
  background-color: #217ce8;
  ${Mt}
  color: white;
`,At=C.label`
  display: flex;
  align-items: center;
  justify-content: center;
  > span:first-child {
    display: inline-block;
    margin-right: 4px;
  }
`,Ft=()=>{const e=ee(),t=te((e=>e.flowInfo)),{flow_name:n,flow_description:o,flow_active:r}=t||{};return k.createElement(Pt,null,k.createElement(Ot,null,k.createElement(zt,null,k.createElement(re,{height:14})),k.createElement($t,null,k.createElement(Vt,null,n||"Loading ..."),k.createElement(Wt,null,o||"Loading ..."))),k.createElement(jt,null,k.createElement(Lt,{onClick:()=>e(ze({windowConfig:{mainId:X.mainFlow}}))},"Diagram view"),k.createElement(Lt,{onClick:()=>e(ze({windowConfig:{mainId:X.codeEditor}}))},"Code editor"),k.createElement(Lt,null,k.createElement(At,null,k.createElement("span",null,"Active"),k.createElement(j,{checked:!!r,icons:{checked:null,unchecked:null},onChange:t=>e(ze({flowInfo:{flow_active:+t.target.checked}}))}))),k.createElement(Lt,{onClick:()=>e(ze({windowConfig:{sideId:F.flowSettings}}))},k.createElement("img",{src:"/Drawflow-react/assets/flowsettings.758f2330.png",alt:""}))),k.createElement(Tt,null,k.createElement(Bt,null,"Delete flow"),k.createElement(Xt,{onClick:()=>e(Se())},"Save flow")))},Yt=C.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  outline: none;
  border: none;
`,Rt=C.section`
  position: relative;
  flex: 0 0 400px;
  overflow-y: auto;
  max-height: calc(100vh + 40px);
  padding-top: 30px;
  border: 1px solid #e8e8ef;
`,Gt=C.label`
  margin: 10px;
  display: flex;
  flex-direction: column;
`,Jt=C.div`
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
`,Ut=C.div`
  background: #e8e8ef;
  label {
    margin: 10px;
    display: flex;
    flex-direction: column;
    input {
      margin-top: 2px;
    }
  }
`,qt=()=>{const e=te((e=>e.flowInfo)),t=ee(),[n,o]=_.exports.useState([]);_.exports.useEffect((()=>{(async()=>{const e=await ke(ve.fetchBackgroundImages,{lab_test:1}),{flow_canvas_background_image:t}=e,n=t.map((({image_link:e})=>e));o(n)})()}),[]);const{flow_name:r,flow_description:i,run_times_max:s,user_run_limit_seconds:a}=e||{},[d,c]=ne(l.backgroundOpacity,50),[u,p]=ne(l.backgroundBlur,50),[g,m]=ne(l.backgroundImageUrl,""),h=(e,n)=>{const o=Object.keys(e)[0],r=e[o];return k.createElement("input",x(b({},n),{value:null!=r?r:"Loading ...",onChange:e=>{t(ze({flowInfo:{[o]:e.target.value}}))}}))};return k.createElement(Rt,null,k.createElement(Yt,{onClick:()=>t(ze({windowConfig:{sideId:F.none}}))},k.createElement(le,{width:19,height:19})),k.createElement(Gt,null,"Flow name:",h({flow_name:r},{type:"text"})),k.createElement(Gt,null,"Flow description:",h({flow_description:i},{type:"text"})),k.createElement(Gt,null,"Max run times:",h({run_times_max:s},{type:"number"})),k.createElement(Gt,null,"User run limit seconds:",h({user_run_limit_seconds:a},{type:"number"})),k.createElement(Ut,null,k.createElement("label",null,"Opacity:",k.createElement("input",{type:"range",value:null!=d?d:0,min:0,max:100,onChange:e=>{const n=+e.target.value;c(n),t(ze({windowConfig:{background:{opacity:n}}}))}})),k.createElement("label",null,"Blur:",k.createElement("input",{onChange:e=>{const n=+e.target.value;p(n),t(ze({windowConfig:{background:{blur:n}}}))},type:"range",min:0,max:100,value:u})),k.createElement(Jt,null,n.map((e=>k.createElement("button",{key:e,onClick:()=>{m(e),t(ze({windowConfig:{background:{imageUrl:e}}}))}},k.createElement("img",{style:{border:g===e?"2px solid blue":""},src:e})))))))},Kt=C.div`
  /* text-align: center; */
`,Ht=C.div`
  padding: 0 10px;
  padding-bottom: 10px;
  position: relative;
  border: 1px solid #e8e8ef;
  flex: 0 0 300px;
  overflow-y: auto;
  max-height: 100%;
`,Qt=C.div`
  margin-bottom: 15px;
  padding: 5px;
  border-bottom: 2px solid lightgray;
`,Zt=C.span`
  color: blue;
  ::before {
    margin-left: 8px;
    content: " ID.";
  }
`,en=C.button`
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
`,tn=C(en)`
  text-align: center;
`,nn=C(en)`
  margin-left: 5px;
`,on=C(en)`
  margin-left: 5px;
`,rn=C.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 8px;
`,ln=C.h2`
  text-align: center;
  border-bottom: 2px solid blue;
  color: #217ce8;
`,sn=C.input`
  margin-right: 10px;
  font-weight: bolder;
  border: 1px solid #217ce8;
  font-size: 0.9em;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 5px;
  width: 90%;
`,an=C.textarea`
  border-radius: 5px;
  border: 1px solid #217ce8;

  /* flex: 1; */
  width: 90%;
  /* text-align: center; */
`,dn=()=>{var e;const t=te((e=>e.groups)),n=ee(),[o,r]=_.exports.useState(t),i=(e,t)=>{const n=b(b({},o[e]),t);r(x(b({},o),{[e]:n}))};if(Object.keys(t).length!==Object.keys(o).length){const n={};for(const[r,i]of Object.entries(t))n[Number(r)]=w.merge(i,null!=(e=o[Number(r)])?e:{});r(n)}return k.createElement(Ht,null,k.createElement(ln,null,"Node groups"),Object.values(o).map((({id:e,node_group_name:t,node_group_order:r,node_group_description:l})=>k.createElement(Qt,{key:e},k.createElement(rn,null,k.createElement(Zt,null,e),k.createElement(nn,{onClick:()=>{window.confirm(`Do you really wanna delete group ${t}, ID.${e}`)&&n(Ne({id:e,delete:1}))}},"Delete"),k.createElement(on,{onClick:()=>{window.confirm(`Do you really wanna save group ${t}, ID.${e}`)&&n(Ne(o[e]))}},"Save")),k.createElement(sn,{value:t,type:"text",onChange:t=>{i(e,{node_group_name:t.target.value})}}),k.createElement(an,{value:l,onChange:t=>{i(e,{node_group_description:t.target.value})}})))),k.createElement(Kt,null,k.createElement(tn,{onClick:()=>{n(Ne({id:0,node_group_order:0,node_group_name:"Group name",node_group_description:"Group description"}))}},"Add new")))};const cn=C.div`
  flex: 1;
  ${({shift:e})=>e&&M`
            div.ql-toolbar.ql-snow {
              padding-left: 40px;
            }

            .jsoneditor-menu {
              padding-left: 40px;
            }
          `}
`,un=({values:e,setValues:t})=>{const n=te((e=>e.sidebarVisible)),o=_.exports.useRef(null),r=_.exports.useRef();return _.exports.useEffect((()=>{if(o.current&&!r.current){const e={mode:"tree",modes:["code","form","text","tree","view","preview"],onChangeText(e){try{const n=JSON.parse(e);t(n)}catch{}}};return r.current=new L(o.current,e),()=>{var e;return null==(e=r.current)?void 0:e.destroy()}}}),[]),_.exports.useEffect((()=>{r.current&&JSON.stringify(r.current.get())!==JSON.stringify(e)&&r.current.set(e)}),[e]),k.createElement(cn,{shift:!(null==n||n),ref:o})},pn={flow_node_type_id:0,nodes_id:0,node_scrdata_id:0,flow_action_scrdata_id:0,order:0,nodes_group_id:0,name:"**",description:"**",icon_link:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",icon_link_selected:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:0,execute_node_specific_date_time:"2020-11-11T19:30",loop_cycles:0,node_settings_json:{},node_response_settings_json:{},loop_cycle_reached_jump_to_node:0,node_attributes:{},node_object_lists:{},node_story:"Node story"},gn=C.div`
  display: grid;
  grid-template-columns: auto 1fr;
  flex: 1;
`,mn=C.form`
  min-width: 300px;
`,hn=C.div`
  font-weight: bold;
`,fn=C.div``,bn=C.div`
  display: grid;
  gap: 0.3em;
`,xn=C.header`
  padding: 10px;
  display: flex;
  align-items: center;
  color: #1f1a1a;
  order: -1;
  position: relative;
  ${({shift:e})=>e&&M`
            padding-left: 0;
          `}
`,wn=C.img`
  padding: 8px;
  margin-right: 10px;
  border: 3px solid #8db6f6;
  border-radius: 15px;
  max-height: 50px;
  max-width: 50px;
`,vn=e=>"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1),yn=C.details`
  summary svg {
    transform: rotate(-90deg);
  }

  &[open] > summary:first-child svg {
    transform: rotate(90deg);
  }

  summary ~ * {
    margin-left: 10px;
  }
`,En=C(yn)``,_n=C.summary`
  color: #e0ebfd;
  background-color: #8db6f6;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 30px;
  margin-top: 0.05em;
`,kn=C.span`
  display: grid;
  place-items: center;

  svg {
    height: 1em;
    width: 1.4em;
  }
`,Cn=C.label`
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 2px solid blue;
`,Sn=C.div``,In=({children:e})=>k.createElement(_n,null,k.createElement(kn,null,k.createElement(re,null)),k.createElement("span",null,e));C.button``;const Nn={node_settings_json:"Settings JSON",node_response_settings_json:"Response JSON",node_object_lists:"Object list",node_attributes:"Node attributes"},Dn=({path:e})=>{const{register:t,getValues:n}=$(),o=e[e.length-1],r=t(`${e.join(".")}`,{validate:e=>{const t=!(o in pn)||null===e||typeof pn[o]==typeof e;return t||console.log({key:o,value:e,tvalue:pn[o]}),t}}),i=((e,t)=>{for(const n of t){if(!(n in e))return;e=e[n]}return e})(n(),e),l=o in pn?pn[o]:i;let s="string"==typeof l||null===i?"text":typeof l;const a=vn(o.replace(/_/g," "));return k.createElement(Cn,null,a,":",k.createElement("input",x(b({placeholder:o},r),{type:s})))},Pn=({path:e,obj:t})=>{var n;if("object"!=typeof t||null===t)return k.createElement(Dn,{path:e});const o=B(t).map((n=>{const o=t[n];return k.createElement(Pn,{key:n,path:[...e,n],obj:o})})),r=e[e.length-1],i=null!=(n=Nn[r])?n:vn(r.replace(/_/g," "));return k.createElement(yn,null,k.createElement(In,null,i),k.createElement(Sn,null,o))},On=C.div`
  flex: 1;
  height: max-content;
`,Mn=C.div`
  margin-left: -0.2em;
`,jn=C(en)``,Ln=C(en)``,Tn=C.div`
  text-align: center;
`,zn=({setFormValues:e})=>{const{getValues:t}=$(),[n,o]=_.exports.useState((()=>t())),r=_.exports.useRef(0),[i,l]=_.exports.useState(!0);return _.exports.useEffect((()=>{i?r.current=setInterval((()=>{console.log("Interval"),o(t())}),1e3):clearInterval(r.current)}),[i]),k.createElement("div",{onMouseEnter:()=>l(!1),onMouseLeave:()=>l(!0)},k.createElement(un,{values:n,setValues:e}))},$n=e=>{var t;const{id:n}=e,o=te((e=>e.templates.find((({nodes_id:e})=>e===n)))),r=JSON.parse(JSON.stringify(o)),i=T({defaultValues:r}),{register:l,handleSubmit:s,formState:{errors:a},getValues:d,reset:c,setValue:u}=i,[p,g]=_.exports.useState((()=>d())),{name:m,description:h,icon_link:f}=p,x=null==(t=te((e=>e.sidebarVisible)))||t;return k.createElement(On,null,k.createElement(z,b({},i),k.createElement(gn,null,k.createElement(mn,{onSubmit:s((e=>{console.clear(),console.log("submit",e.node_attributes.length)}))},k.createElement(xn,{shift:!x},!x&&k.createElement(Mn,null,k.createElement(Nt,null)),k.createElement(wn,{src:f}),k.createElement(bn,null,k.createElement(hn,null,m),k.createElement(fn,null,h))),k.createElement(En,{open:!0},k.createElement(In,null,"Default settings"),k.createElement(Sn,null,Object.entries(p).map((([e,t])=>"object"==typeof t||e in Nn?null:k.createElement(Dn,{key:e,path:[e]}))))),B(Nn).map((e=>p[e]?k.createElement(Pn,{key:e,obj:p[e],path:[e]}):null)),Object.keys(a).length&&k.createElement("div",null,k.createElement("pre",null,"Errors")),k.createElement(Tn,null,k.createElement(jn,{type:"submit"},"Save"),k.createElement(Ln,{onClick:()=>c()},"Reset"))),k.createElement(zn,{setFormValues:e=>{console.log("block",e.node_attributes.length),B(e).forEach((t=>{u(t,e[t])})),g(e),B(e).forEach((t=>{u(t,e[t])})),g(e)}}))))},Vn=C.div`
  display: flex;
  height: 40px;
`,Wn=C.div`
  flex: 1;
  order: -1;
`,Bn=C.main`
  display: flex;
  position: relative;
`,Xn=C.div``,An=()=>{const e=te((e=>e));return k.createElement(un,{values:e,setValues:e=>null})},Fn=()=>{var e;const t=ee(),n=null==(e=te((e=>e.sidebarVisible)))||e,o=te((e=>e.windowConfig.mainId)),r=te((e=>e.windowConfig.id));return o===X.templateNodeSettings?k.createElement(k.Fragment,null,k.createElement($n,{id:r})):o===X.mainFlow?k.createElement(Wn,null,k.createElement(Vn,null,!n&&k.createElement(Nt,null),k.createElement("button",null,"Fetch flow version"),k.createElement("button",{onClick:()=>t(Pe(0))},"Version 1"),k.createElement("button",{onClick:()=>t(Pe(1))},"Version 2"),k.createElement("button",{onClick:()=>t(Pe(2))},"Version 3")),k.createElement(bt,null)):o===X.codeEditor?k.createElement(k.Fragment,null,k.createElement("span",{style:{position:"absolute",zIndex:2,backgroundColor:"white",top:-8}},!n&&k.createElement(Nt,null)),k.createElement(An,null)):null},Yn=()=>{const e=te((e=>e.windowConfig.sideId));return e===F.flowSettings?k.createElement(qt,null):e===F.groupSettings?k.createElement(dn,null):null},Rn=()=>{const e=ee();return _.exports.useEffect((()=>{e(Ce()),e(Ie()),e(De())}),[]),k.createElement(Xn,null,k.createElement(Ft,null),k.createElement(Bn,null,k.createElement(Dt,null),k.createElement(Fn,null),k.createElement(Yn,null)))};V.render(k.createElement(_.exports.StrictMode,null,k.createElement(W,{store:Ve},k.createElement(Rn,null))),document.getElementById("root"));
