var e,t,o,n,s,r,i,l=Object.defineProperty,a=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,o)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))u.call(t,o)&&h(e,o,t[o]);if(c)for(var o of c(t))p.call(t,o)&&h(e,o,t[o]);return e},f=(e,t)=>a(e,d(t));import{l as m,c as v,u as b,a as y,b as w,d as x,e as E,f as I,q as S,R as k,g as C,h as N,C as P,A as M,i as D,P as T}from"./vendor.0b5ec9ae.js";(t=e||(e={})).START="START",t.MIDDLE="MIDDLE",t.END="END",(o||(o={})).Drawflow="drawflow",(s=n||(n={})).NODE_SETTINGS="NODE_SETTINGS",s.GROUP_SETTINGS="GROUP_SETTINGS",(i=r||(r={})).in="in",i.out="out";class L{constructor(e,t){this.spacingX=40,this.spacingY=60,this.id=e,this.flow=t,this.state=t.state,this.nodeState=this.state.drawflow[this.id]}get head(){return this.nodeState.head}get lane(){return this.nodeState.lane}get port(){return this.nodeState.port}get portInPos(){var e;return null==(e=this.state.ports.find((({nodeId:e,portId:t,type:o})=>e===this.id&&1===t&&o===r.in)))?void 0:e.pos}get outPorts(){return this.state.ports.filter((({type:e,nodeId:t})=>this.id===t&&e===r.out))}get parent(){var e;const t=null==(e=this.parentConnection)?void 0:e.startId;return t?this.flow.getNode(t):null}get parentConnection(){return this.state.connections.find((e=>{e||console.log({conn:e});const{endId:t,endPort:o}=e;return t===this.id&&1===o}))}get totalWidth(){if(!1===this.nodeState.visible)return 0;return Math.max(this.width+this.subnodesWidth,this.leftWidth+this.rightWidth)}get childrenTotalWidth(){const{out1:e}=this;if(!e.length)return 0;let t=0;return e.forEach((e=>{t+=e.totalWidth})),t+this.spacingX*(e.length-1)}alignChildren(){const{out1:e}=this;this.update({isSub:!1,port:{out:2}});let t=this.pos.x-(this.leftWidth-this.width/2);for(const n of e){const e=t+(n.leftWidth-n.width/2);n.setPos({x:e,y:this.pos.y+this.height+this.spacingY}),!1!==n.nodeState.visible&&(t+=n.totalWidth+this.spacingX),n.alignChildren()}const{subnodes:o}=this;o.length&&(t=this.pos.x+this.width+this.spacingX,o.forEach((e=>{e.update({isSub:!0,port:{out:1}}),e.setPos({x:t,y:this.pos.y+(this.height/2-e.height/2)}),t+=e.width+this.spacingX})))}get leftWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,o=this.width/2;if(!e.length)return o;const n=e[0].leftWidth;let s=n+(t-n-e[e.length-1].rightWidth)/2;return Math.max(s,o)}get rightWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,o=this.width/2+this.subnodesWidth;if(!e.length)return o;const n=e[0].leftWidth,s=e[e.length-1].rightWidth;let r=s+(t-n-s)/2;return Math.max(r,o)}get all2Successors(){const{subnodes:e,out1:t}=this,o=[...t];return e.forEach((e=>o.push(e))),this.out1.forEach((e=>o.push(e))),o}get allSuccessors(){const e=[...this.out1,...this.subnodes],t=[...e];return e.forEach((e=>t.push(...e.allSuccessors))),t}toggleVisibility(e){this.update({visible:e}),this.parentConnection&&(this.parentConnection.visible=e),this.outConnections.forEach((t=>{t.visible=e}))}toggleChildrenVisibility(){var e;const t=null==(e=this.nodeState.childrenVisibility)||e;this.update({childrenVisibility:!t});const{subnodes:o,allSuccessors:n}=this;n.forEach((e=>{o.includes(e)||e.toggleVisibility(!t)}))}toggleSubnodesVisibility(){var e;const t=null==(e=this.nodeState.subnodesVisibility)||e;this.update({subnodesVisibility:!t}),this.subnodes.forEach((e=>{e.toggleVisibility(!t)}))}get outConnections(){return this.state.connections.filter((({startId:e})=>e===this.id))}children(e){return this.state.connections.filter((({startId:t,startPort:o})=>t===this.id&&o===e)).map((e=>this.flow.getNode(e.endId)))}get out1(){return this.children(1)}get firstSubnode(){return this.children(2)[0]}get subnodes(){var e,t;return(null==(t=null==(e=this.firstSubnode)?void 0:e.flowLine)?void 0:t.flowLineNodes)||[]}get subnodesWidth(){return this.subnodes.reduce(((e,t)=>e+t.width+this.spacingX),0)}get isSub(){return null!==this.complexParentNode}get complexParentNode(){let e=this.parent;return e?e.firstSubnode===this?e:e.complexParentNode:null}get flowLine(){const e=[this];let t=this,o=t.firstSubnode;for(;1===t.out1.length;)t=t.out1[0],e.push(t),o=o||t.firstSubnode;return t.out1.length>1?null:{flowLineNodes:e,hasSubnodes:o}}get height(){return this.state.drawflow[this.id].height}get width(){return this.state.drawflow[this.id].width}get pos(){return this.state.drawflow[this.id].pos}setPos(e){const{pos:t}=this,{x:o,y:n}=e;this.flow.moveNode({nodeId:this.id,dx:o-t.x,dy:n-t.y})}update(e){const t=m.merge(this.nodeState,e);Object.assign(this.nodeState,t)}}class O{constructor(e){this.nodes={},this.distanceToConnect=100,this.distanceToDisconnect=0,this.state=e;const{drawflow:t}=this.state;Object.keys(t).map((e=>this.nodes[Number(e)]=new L(Number(e),this)))}get heads(){return Object.entries(this.nodes).filter((([e,t])=>!t.parent)).map((e=>e[1]))}getNode(e){return this.nodes[e]}alignAll(){this.setLaneNumbers(),this.heads.forEach((e=>{e.alignChildren()}))}allowConnection(e){let{startId:t,startPort:o,endId:n}=e;const s=this.getNode(n),r=this.getNode(t),i=2===o;if(s.parent||!1===r.nodeState.visible)return!1;const l=s.flowLine;return!((i||r.isSub)&&(!l||l.hasSubnodes))}addConnection(e){let{startId:t,startPort:o,endId:n,endPort:s}=e;const r=this.getNode(n),i=this.getNode(t),l=2===o;if(r.parent||!1===i.nodeState.visible)return!1;const a=r.flowLine;if((l||i.isSub)&&(!a||a.hasSubnodes))return!1;let d=null;if(l&&i.subnodes.length){if(!1===i.nodeState.subnodesVisibility){t=i.subnodes[i.subnodes.length-1].id,o=1,this.state.connections.push({startId:t,startPort:o,endId:n,endPort:s,visible:!0});const{flowLineNodes:e}=a;return void e.forEach((e=>e.toggleVisibility(!1)))}d=i.subnodes[0]}if(i.isSub&&i.out1.length&&(d=i.out1[0]),null!==d){const e=this.state.connections.find((e=>e.startId===t&&e.startPort===o&&e.endId===d.id&&1===e.endPort)),n=this.state.connections.indexOf(e);this.state.connections.splice(n,1);const{flowLineNodes:s}=a,r=s[s.length-1];this.state.connections.push({startId:r.id,startPort:1,endId:d.id,endPort:1,visible:!0})}this.state.connections.push({startId:t,startPort:o,endId:n,endPort:s,visible:!0})}moveNode({dx:e,dy:t,nodeId:o}){this.state.drawflow[o].pos.x+=e,this.state.drawflow[o].pos.y+=t}dragNode({dx:e,dy:t,nodeId:o}){this.moveNode({dx:e,dy:t,nodeId:o}),this.toggleAvailablePortToConnect(o)}toggleAvailablePortToConnect(e){const t=Date.now();if(this.state.computing&&t-this.state.computing<100)return;if(this.state.computing=t,!this.state.config.drag)return;const o=this.getNode(e),n=o.head;if(o.parentConnection){const e=this.state.connections.indexOf(o.parentConnection);this.state.connections.splice(e,1),this.alignAll()}const s=o.portInPos;if(!s)return;let r=null;Object.entries(this.nodes).filter((([e,t])=>t.head!==n&&!1!==t.nodeState.visible)).forEach((([t,o])=>{Number(t)!==e&&o.outPorts.forEach((e=>{const{pos:t}=e,o=Math.hypot(s.x-t.x,s.y-t.y);o<this.distanceToConnect&&(null===r||o<r.distance)&&(r={port:e,distance:o})}))})),this.state.portToConnect=null!==r?r.port:void 0}setLaneNumbers(){let e=this.heads;for(e.forEach((e=>e.update({head:e.id,lane:0})));e.length;){const t=[];e.forEach((e=>{let o=e.lane+1;const{subnodes:n,head:s}=e;if(void 0===s)return void console.error("head is undefined in setLaneNumbers");if(n.length)for(const t of n)t.update({lane:o++,head:s});const r=e.children(1);r.forEach((e=>e.update({head:s,lane:o}))),t.push(...r)})),e=t}this.heads.forEach((e=>{const{head:t}=e;for(let o=0,n=0,s=[e];s.length;++o)s=Object.values(this.nodes).filter((e=>e.lane===o&&e.head===t)),s.forEach((e=>{e.update({positionNumber:n++})}))}))}}const W={nodeId:1,canvasDrag:!1,config:{drag:!1,connectionsLabelEnable:!1,canvasTranslate:{x:0,y:0},zoom:{value:1,max:2,min:.5,tick:.1}},drawflow:{},connections:[],connectionsLabel:{},ports:[],select:null,newPathDirection:null,modalType:null,editLock:!1,mouseBlockDragPos:{clientX:void 0,clientY:void 0}},X=e=>{new O(e).alignAll()},z=v({name:o.Drawflow,initialState:W,reducers:{setEditLock:(e,{payload:t})=>{e.editLock=t},align:X,moveNode:(e,t)=>new O(e).dragNode(t.payload),setMouseBlockDragPos:(e,{payload:t})=>{e.mouseBlockDragPos=t},unSelect:e=>{e.config.drag=!1,e.select=null},select:(e,{payload:t})=>{e.config.drag="node"===t.type,e.select=t},selectPort:(e,{payload:t})=>{const o=e.ports.find((({nodeId:e,portId:o,type:n})=>n===t.type&&o===t.portId&&e===t.nodeId));if(!o)return void console.error("Cannot find port to select in state.ports");const n=e.ports.indexOf(o);e.select={type:t.type,selectId:n}},moveCanvas:(e,{payload:{movementX:t,movementY:o}})=>{e.canvasDrag&&(e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=o)},canvasDrag:(e,{payload:t})=>{e.canvasDrag=t},canvasMouseMove:(e,{payload:{movementX:t,movementY:o,clientX:n,clientY:s}})=>{var i;if(e.clientCurrentMousePos={clientX:n,clientY:s},e.canvasDrag)e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=o;else if((null==(i=e.select)?void 0:i.type)===r.out)e.newPathDirection={clientX:n,clientY:s};else if(e.config.drag&&e.select){const t=e.select.selectId,{clientX:o,clientY:r}=e.mouseBlockDragPos;e.mouseBlockDragPos={clientX:n,clientY:s};const i=e.config.zoom.value,l=(n-o)/i,a=(s-r)/i;new O(e).dragNode({nodeId:t,dy:a,dx:l})}},canvasMouseUp:e=>{var t,o;const n=new O(e);if(e.portToConnect&&(null==(t=e.select)?void 0:t.selectId)){const{nodeId:t,portId:o}=e.portToConnect,s=e.select.selectId,r=1;n.addConnection({startId:t,startPort:o,endId:s,endPort:r})}e.portToConnect=void 0,e.newPathDirection=null,e.canvasDrag=!1,e.config.drag=!1,(null==(o=e.select)?void 0:o.type)===r.out&&(e.select=null),n.alignAll()},deleteNode:e=>{const{connections:t,drawflow:o,ports:n,select:s}=e;if("node"!==(null==s?void 0:s.type))return;const{selectId:r}=s;t.forEach((({endId:e,startId:o},n)=>{[o,e].includes(r)&&delete t[n]})),n.forEach((({nodeId:e},t)=>{e===r&&delete n[t]})),delete o[r],e.select=null},deletePath:e=>{const{connections:t,select:o}=e;"path"===(null==o?void 0:o.type)&&(console.log("delete"),t.splice(o.selectId,1))},load:(e,{payload:t})=>(Object.assign(e,W),e.drawflow=t.drawflow,e.nodeId=Object.keys(t.drawflow).length+1,e.connections=t.connections,e),portMouseUp:(e,{payload:{nodeId:t,portId:o,PortType:n}})=>{const{select:s}=e;if(n!==r.in||!s)return;const i=e.ports[s.selectId],l=t,a=o,d=i.nodeId,c=i.portId;if(d===l)return;new O(e).addConnection({startId:d,startPort:c,endId:l,endPort:a})},clear:()=>W,pushPorts:(e,{payload:t})=>{if(0===t.length)return;const{nodeId:o}=t[0];e.ports=e.ports.filter((e=>e.nodeId!==o)),e.ports.push(...t)},zoom:(e,{payload:t})=>{const{zoom:o}=e.config,{value:n,max:s,min:r,tick:i}=o,l=n+(t?i:-i);l<=s&&l>=r&&(o.value=l),null===t&&(e.config.canvasTranslate={x:0,y:0},o.value=1)},nodeSize:(e,{payload:{height:t,width:o,id:n}})=>{e.drawflow[n].height=t,e.drawflow[n].width=o},toggleSubnodes:(e,{payload:{id:t}})=>{new O(e).getNode(t).toggleSubnodesVisibility(),X(e)},toggleChildren:(e,{payload:{id:t}})=>{new O(e).getNode(t).toggleChildrenVisibility(),X(e)},copyNode:e=>{var t;"node"===(null==(t=e.select)?void 0:t.type)&&(e.nodeToCopyId=e.select.selectId)}}}),Y=z.actions,V=z.reducer,$=e=>e.flows[e.version],j=()=>b(),A=y,q=(e,t,o=15,n=5)=>{const s=[],r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<e;i++){let e="";for(let t=0;t<Math.floor(Math.random()*(o-n)+n);t++)e+=r.charAt(Math.floor(Math.random()*r.length));t.length>1&&(e+=t),s.push(e)}return s},B=()=>({id:0,type:e.MIDDLE,data:{type:"Node type",name:"Node name",value:"Node value"},port:{in:1,out:2},pos:{x:-20,y:100},isSub:!1,height:0,width:0}),R=async()=>{const e={nodes:{},connections:[]};for(let t=1;t<5;++t){const o=B();o.id=t,o.data.name=`Node ${t}`,o.pos.x=100*t,o.pos.y=50*t,e.nodes[t]=o}return e},G=async e=>{const t=[];for(let o=0;o<e;++o)t.push({type:"type",name:"name",value:q(1,"",4,2)[0]});return t},U=(e,t)=>{const o=(e.y-t.y)/2,n=e.x-t.x;return`M ${e.x} ${e.y} v ${-o} h ${-n} v ${-o} `},F=(e,t,o,n)=>{const{x:s,y:r,width:i,height:l}=n;return{x:e*(i/(i*o))-s*(i/(i*o)),y:t*(l/(l*o))-r*(l/(l*o))}},J=I("versions/changed"),H=I("addNewNode"),K=I("dragTemplate"),_=I("canvasShapeUpdated"),Z=I("insertCopiedNode"),Q=I("toggleSidebar"),ee={version:0,flows:[W,W,W],templates:[],dragTemplate:0},te=w("fetchPosts",(async()=>await G(10))),oe=w("fetchFlowVersion",(async()=>await R())),ne=E({reducer:x(ee,(e=>{e.addCase(Z,(e=>{const t=$(e);if(void 0===t.nodeToCopyId)return;const{clientX:o,clientY:n}=t.clientCurrentMousePos,s=JSON.parse(JSON.stringify(t.drawflow[t.nodeToCopyId]));e.canvas?(s.pos=F(o,n,t.config.zoom.value,e.canvas),t.drawflow[t.nodeId]=f(g({},s),{id:t.nodeId,height:0,width:0}),++t.nodeId):console.error("Canvas shape is not available")})).addCase(J,((e,{payload:t})=>{e.version=t})).addCase(Q,(e=>{var t;e.sidebarVisible=!(null==(t=e.sidebarVisible)||t)})).addCase(H,((e,{payload:{clientX:t,clientY:o}})=>{if(!e.dragTemplate)return;if(!e.canvas)return void console.error("Canvas shape is not available");const n=e.flows[e.version],s=B();s.pos=F(t,o,n.config.zoom.value,e.canvas),n.mouseBlockDragPos={clientX:t,clientY:o},n.drawflow[n.nodeId]=f(g({},s),{id:n.nodeId,height:0,width:0}),n.select={type:"node",selectId:n.nodeId++},n.config.drag=!0,e.dragTemplate=void 0})).addCase(K,((e,{payload:t})=>{e.dragTemplate=t})).addCase(_,((e,{payload:t})=>{e.canvas=t})).addCase(te.fulfilled,((e,t)=>{e.templates=t.payload})).addCase(oe.fulfilled,((e,t)=>{const{nodes:n,connections:s}=t.payload;e.flows[e.version]=V(e.flows[e.version],{type:o.Drawflow+"/load",payload:{drawflow:n,connections:s}})})).addMatcher((e=>e.type.startsWith(o.Drawflow)),((e,t)=>{e.flows[e.version]=V(e.flows[e.version],t)}))}))}),se=S.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`,re=S.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
`,ie=()=>{const e=A((e=>$(e).editLock)),t=j();return k.createElement(se,null,!e&&k.createElement(re,null,"Clear"),k.createElement(re,{onClick:()=>t(Y.setEditLock(!e))},e?"UnLock":"Lock"))},le=S.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`,ae=S.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  padding: 3px 10px;
`,de=()=>{const e=j();return k.createElement(le,null,k.createElement(ae,{onClick:()=>e(Y.zoom(!0))},"+"),k.createElement(ae,{onClick:()=>e(Y.zoom(!1))},"-"),k.createElement(ae,{onClick:()=>e(Y.zoom(null))},"reset"))},ce=C(N,m.isEqual),ue=S.svg`
  position: absolute;
  overflow: visible;
`,pe=S.path`
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
`,he=e=>{const{id:t,d:o}=e,n=(e=>A(P.exports.useMemo((()=>ce((t=>{if(void 0===e)return!1;const o=$(t).select;return"path"===(null==o?void 0:o.type)&&o.selectId===e}),(e=>e))),[e])))(t),s=j();return k.createElement(ue,null,k.createElement(pe,{selected:n,d:o,onMouseDown:e=>{void 0!==t&&(e.stopPropagation(),s(Y.select({type:"path",selectId:t})))}}))},ge=()=>{var e;console.log("Render new Path");const t=null!=(e=A(P.exports.useMemo((()=>ce((e=>{const t=$(e);if(!t.select||t.select.type!==r.out||!t.newPathDirection)return void console.error("Cannot draw new path!");const o=t.ports[t.select.selectId];if(!o)return void console.error("No start port in newPath");const n=o.pos;if(!e.canvas)return void console.error("Canvas shape is not available");const{clientX:s,clientY:i}=t.newPathDirection,l=F(s,i,t.config.zoom.value,e.canvas);return U(n,l)}),(e=>e))),[])))?e:"";return k.createElement(he,{d:t})},fe=S.div`
  max-height: 100%;
  overflow: hidden;
`,me=e=>k.createElement(fe,null,JSON.stringify(e,null,2)),ve=100,be=60,ye=S.div`
  width: 15px;
  height: 15px;
  border-radius: 60px;
  background-color: #217ce8;
  opacity: ${({visible:e})=>e?1:0};
  transform: scale(${({visible:e})=>e?1:0});
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
`,we=S.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
`,xe=S(we)`
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&M`
      left: 100%;
      top: 50%;
    `}
`,Ee=S(we)`
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&M`
      display: none;
    `}
`,Ie=S(we)`
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  ${({isSub:e})=>e&&M`
      left: 0;
      top: 50%;
    `}
`,Se={[r.in]:[Ie],[r.out]:[xe,Ee]},ke=e=>{const{nodeId:t,portId:o,type:n}=e,s=j(),r=(i=e,A(P.exports.useMemo((()=>ce((e=>{const{portToConnect:t}=$(e);if(void 0===t)return!1;const o=JSON.parse(JSON.stringify(t));return delete o.pos,m.isEqual(i,o)}),(e=>e))),[i])));var i;const l=(a=t,A(P.exports.useMemo((()=>ce((e=>$(e).drawflow[a].isSub),(e=>e))),[a])));var a;const d=Se[n][o-1];return k.createElement(d,{isSub:l,onMouseDown:e=>{e.stopPropagation(),s(Y.selectPort({type:n,nodeId:t,portId:o}))},onMouseUp:e=>{s(Y.portMouseUp({nodeId:t,portId:o,PortType:n}))}},k.createElement(ye,{visible:r}))},Ce=e=>{const{id:t,port:o,type:n}=e;let s=[];for(let r=1;r<=o[n];r++)s.push(k.createElement(ke,{key:r,nodeId:t,portId:r,type:n}));return k.createElement("div",{className:`${n}puts`},s)},Ne=S.div`
  display: inline-block;
  position: absolute;
  padding: 5px;
  width: 200px;
  min-height: 60px;
  background-color: #d3d3d3;
  z-index: 1;
  cursor: move;

  ${({isSub:e})=>e&&M`
      height: ${be}px;
      width: ${ve}px;
    `}
  ${({selected:e})=>e&&M`
      box-shadow: 0 2px 15px 2px #cacaca;
      z-index: 2;
    `};
`,Pe=({id:e})=>{const t=A(P.exports.useMemo((()=>ce((e=>$(e).config.drag),(e=>e))),[])),o=A((e=>$(e).nodeId)),n=(e=>A(P.exports.useMemo((()=>ce((t=>$(t).drawflow[e].pos),(e=>e))),[e])))(e),s=(e=>A(P.exports.useMemo((()=>ce((t=>{const o=$(t).select;return(null==o?void 0:o.selectId)===e&&"node"===o.type}),(e=>e))),[e])))(e),i=j(),l=P.exports.useRef(null),a=(e=>A(P.exports.useMemo((()=>ce((t=>{const o=JSON.parse(JSON.stringify($(t).drawflow[e]));return delete o.pos,o}),(e=>e))),[e])))(e),{port:d}=a;return P.exports.useEffect((()=>{if(l.current){const{offsetHeight:t,offsetWidth:o}=l.current;i(Y.nodeSize({height:t,width:o,id:e})),i(Y.align())}}),[i,e,a]),P.exports.useEffect((()=>{const t=(t,o)=>Array.from(o.querySelector(`.${t}puts`).children).map(((o,s)=>{const r=parseInt(getComputedStyle(o).left)+n.x,i=parseInt(getComputedStyle(o).top)+n.y;return{nodeId:e,pos:{x:r,y:i},portId:s+1,type:t}}));if(l.current){const e=t(r.in,l.current),o=t(r.out,l.current);i(Y.pushPorts([...e,...o]))}}),[i,e,n]),P.exports.useEffect((()=>{if(l.current&&o-1===e&&t){const{offsetHeight:t,offsetWidth:o}=l.current;i(Y.moveNode({nodeId:e,dx:.2*-o,dy:.2*-t}))}}),[]),k.createElement(Ne,{selected:s,ref:l,style:{left:n.x,top:n.y},isSub:a.isSub,onMouseDown:t=>{t.stopPropagation();const{clientX:o,clientY:n}=t;i(Y.select({type:"node",selectId:e})),i(Y.setMouseBlockDragPos({clientX:o,clientY:n}))},onContextMenu:e=>{},onDoubleClick:()=>{}},k.createElement(me,g(g({},a),n)),!a.isSub&&k.createElement(k.Fragment,null,k.createElement("div",{onClick:()=>{i(Y.toggleSubnodes({id:e}))}},"toggle sub"),k.createElement("div",{onClick:()=>{i(Y.toggleChildren({id:e}))}},"toggle children")),k.createElement(Ce,{id:e,port:d,type:r.in}),k.createElement(Ce,{id:e,port:d,type:r.out}),k.createElement("button",null,"X"))},Me=()=>{console.log("Render NodeList");const e=A(P.exports.useMemo((()=>ce((e=>{const{drawflow:t}=$(e);return Object.entries(t).filter((([e,{visible:t}])=>!1!==t)).map((([e])=>Number(e)))}),(e=>e))),[]));return k.createElement(k.Fragment,null,e.map((e=>k.createElement(Pe,{key:e,id:e}))))},De=({id:e})=>{const t=(o=e,A(P.exports.useMemo((()=>ce((e=>{var t,n;const s=$(e),{startId:i,startPort:l,endId:a,endPort:d}=s.connections[o],c=null==(t=s.ports.find((e=>e.nodeId===i&&e.portId===l&&e.type===r.out)))?void 0:t.pos,u=null==(n=s.ports.find((e=>e.nodeId===a&&e.portId===d&&e.type===r.in)))?void 0:n.pos;return c&&u?U(c,u):""}),(e=>e))),[o])));var o;return k.createElement(he,{key:e,id:e,d:t})},Te=()=>{const e=A(P.exports.useMemo((()=>ce((e=>{const{connections:t}=$(e);return t.reduce(((e,t,o)=>(t.visible&&e.push(o),e)),[])}),(e=>e))),[])).map((e=>k.createElement(De,{key:e,id:e})));return k.createElement(k.Fragment,null,e)},Le=S.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #282a36;
  background-size: 25px 25px;
  background-image: linear-gradient(to right, #2f323d 1px, transparent 1px),
    linear-gradient(to bottom, #2f323d 1px, transparent 1px);
`,Oe=S.div`
  width: 100%;
  height: 100%;
  position: relative;
`,We=(e,t,o,n)=>{var s;const[r,i]=(null==(s=getComputedStyle(e).transform.match(/^matrix\((.+)\)$/))?void 0:s[1].split(",").slice(-2).map(Number))||[0,0];e.style.transform=`translate(${r+t}px, ${i+o}px) scale(${n})`},Xe=()=>{console.log("Render Drawflow");const{config:{zoom:e},newPathDirection:t,canvasDrag:o}=A(P.exports.useMemo((()=>ce((e=>{const t=$(e),{config:{zoom:o},newPathDirection:n,canvasDrag:s}=t;return{config:{zoom:o},newPathDirection:n,canvasDrag:s}}),(e=>e))),[])),n=j();P.exports.useEffect((()=>{n(oe())}),[n]);const s=P.exports.useRef(null);return P.exports.useEffect((()=>{const{current:t}=s;t&&We(t,0,0,e.value)}),[o,e.value]),P.exports.useEffect((()=>{const{current:e}=s;if(e){const t=e.getBoundingClientRect(),o={x:t.x,y:t.y,width:e.clientWidth,height:e.clientHeight};n(_(o))}}),[n,s]),k.createElement(Le,{tabIndex:0,onKeyDownCapture:e=>{"Delete"===e.key&&(n(Y.deletePath()),n(Y.deleteNode())),e.ctrlKey&&"c"===e.key&&n(Y.copyNode()),e.ctrlKey&&"v"===e.key&&n(Z())},onMouseDown:e=>{n(Y.canvasDrag(!0)),n(Y.unSelect())},onMouseUp:()=>n(Y.canvasMouseUp()),onMouseMove:t=>{const{clientX:r,clientY:i,movementX:l,movementY:a}=t,{current:d}=s;o&&d&&We(d,l,a,e.value),n(Y.canvasMouseMove({clientX:r,clientY:i,movementX:l,movementY:a}))},onMouseEnter:e=>{const{clientX:t,clientY:o}=e;console.log("enter"),n(H({clientX:t,clientY:o}))}},k.createElement(ie,null),k.createElement(de,null),k.createElement(Oe,{ref:s,className:"drawflow",style:{}},k.createElement(Me,null),k.createElement(Te,null),t&&k.createElement(ge,null)))};const ze=e=>k.createElement("svg",f(g({},e),{viewBox:"0 0 24 24"}),k.createElement("path",{fill:"none",stroke:"#303c42",strokeLinecap:"round",strokeLinejoin:"round",d:"M21,1.5H3A1.5,1.5,0,0,0,1.5,3V22.5l5-5H21A1.5,1.5,0,0,0,22.5,16V3A1.5,1.5,0,0,0,21,1.5Z"})),Ye=e=>k.createElement("svg",f(g({},e),{viewBox:"0 0 16 16",fill:"none"}),k.createElement("path",{d:"M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),k.createElement("path",{d:"M14.0016 13.9996L11.1016 11.0996",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),Ve=e=>k.createElement("svg",f(g({},e),{viewBox:"0 0 10 14",fill:"none"}),k.createElement("path",{d:"M8 2L2.18437 6.84636C2.08842 6.92631 2.08842 7.07369 2.18437 7.15364L8 12",stroke:"#393C44",strokeWidth:"2.5",strokeLinecap:"round"})),$e=e=>k.createElement("svg",f(g({},e),{viewBox:"0 0 1792 1792"}),k.createElement("path",{fill:"#217CE8",d:"M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z"})),je=S.div`
  display: grid;
  place-items: center;
  padding: 0.5em;
  background-color: white;
  box-shadow: 0px 4px 30px rgb(22 33 74 / 25%);
  border-radius: 5px;
  :hover {
    background-color: red;
    box-shadow: 0px 4px 30px rgb(22 33 74 / 15%);
    background-color: #fff;
  }
`,Ae=e=>{const{name:t,type:o,value:n,id:s}=e,r=j(),i=P.exports.useRef(null),l=A((e=>e.canvas));return k.createElement(je,{ref:i,onMouseDownCapture:e=>{if(void 0===K)return;r(K(s));const{current:t}=i;if(!t)return void console.error("No node to copy");const{left:o,top:n}=t.getBoundingClientRect(),a=e.clientX-o,d=e.clientY-n,c=t.cloneNode(!0);c.style.position="absolute",c.style.left=o+window.scrollX+"px",c.style.top=n+window.scrollY+"px",document.body.appendChild(c);const u=e=>{var t;const{clientX:o,clientY:n}=e;if(l){if(o>=l.x&&n>=l.y)return document.removeEventListener("mousemove",u),void(null==(t=c.parentNode)||t.removeChild(c));c.style.left=o-a+"px",c.style.top=n-d+"px"}else console.error("Canvas is not ready! Cannnot drag template")};document.addEventListener("mousemove",u);const{height:p,width:h}=getComputedStyle(t);c.style.height=p,c.style.width=h}},k.createElement(ze,null),n)},qe=S.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(4, minmax(2.2em, 1fr));
  grid-auto-rows: minmax(1em, auto);
  grid-gap: 1em;
  background-color: #f5f5f5;
`,Be=e=>{const t=A((e=>e.templates)),o=j(),{searchWord:n}=e,s=n.toLowerCase().split(" ").filter((e=>e.length>0));return P.exports.useEffect((()=>{o(te())}),[o]),k.createElement(qe,null,t.map(((e,t)=>{const o=JSON.stringify(e,null,2);return(s.find((e=>o.toLowerCase().includes(e)))||!s.length)&&k.createElement(Ae,g({key:t,id:t},e))})))},Re=S.div`
  min-width: 300px;
`,Ge=S.div`
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
`,Ue=S.div`
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
`,Fe=({selectedGroup:e,setSelectedGroup:t})=>{const[o,n]=P.exports.useState(["Loading"]);return P.exports.useEffect((()=>{n(["Triggers","Actions","Loggers","Feedbacks","Pushes","Notifications","Hooks"])}),[]),k.createElement(Ge,null,o.map(((o,n)=>k.createElement(Ue,{key:n,selected:n===e,onClick:()=>t(n)},o))))},Je=S.input`
  display: block;
  width: 85%;
  height: 40px;
  background-color: #fff;
  border: 1px solid #e8e8ef;
  box-shadow: 0px 2px 8px rgb(34 34 87 / 5%);
  border-radius: 5px;
  text-indent: 35px;
  font-size: 16px;
`,He=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`,Ke=S.span`
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
`,_e=({setSearchWord:e})=>k.createElement(He,null,k.createElement(Ke,null,k.createElement(Ye,null)),k.createElement(Je,{type:"text",placeholder:"Search templates",onChange:t=>{e(t.target.value)}}),k.createElement(Qe,null)),Ze=S.div`
  :hover {
    cursor: pointer;
  }

  ${({opened:e})=>e&&M`
      transform: rotate(180deg);
    `};
`,Qe=()=>{var e;const t=null==(e=A((e=>e.sidebarVisible)))||e,o=j();return k.createElement(Ze,{opened:!t,onClick:()=>o(Q())},k.createElement($e,{height:40}))},et=()=>{const[e,t]=P.exports.useState(""),[o,n]=P.exports.useState(0);return!1===A((e=>e.sidebarVisible))?null:k.createElement(Re,null,k.createElement(_e,{setSearchWord:t}),k.createElement(Fe,{selectedGroup:o,setSelectedGroup:n}),k.createElement(Be,{searchWord:e}))},tt=S.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e8e8ef;
`,ot=S.div`
  display: flex;
  justify-content: space-between;
`,nt=S.div``,st=S.button`
  text-align: center;
  height: 39px;
  font-size: 14px;
  border: 1px solid #e8e8ef;
  :hover {
    opacity: 0.7;
  }
  :focus {
    background-color: #fbfbfb;
    font-weight: bold;
  }
`,rt=S.div``,it=S.button`
  margin: 0 10px;
  background-color: #dbdee7;
  height: 37px;
  width: 37px;
  display: grid;
  place-items: center;
  border-radius: 50%;
`,lt=S.div`
  display: grid;
  place-items: left;
  div {
  }
`,at=()=>k.createElement(tt,null,k.createElement(ot,null,k.createElement(it,null,k.createElement(Ve,{height:15})),k.createElement(lt,null,k.createElement("div",null,"Flow name"),k.createElement("div",null,"Flow description"))),k.createElement(nt,null,k.createElement(st,null,"Diagram view"),k.createElement(st,null,"Code editor"),k.createElement(st,null,"Active"),k.createElement(st,null,"Settings")),k.createElement(rt,null,k.createElement("button",null,"Delete flow"),k.createElement("button",null,"Save flow"))),dt=S.div`
  display: flex;
`;function ct(){var e;console.log("Render App");const t=j(),o=null==(e=A((e=>e.sidebarVisible)))||e;return k.createElement("div",{className:"App"},k.createElement(at,null),k.createElement("main",null,k.createElement(et,null),k.createElement("div",{className:"flow"},k.createElement(dt,null,!o&&k.createElement(Qe,null),k.createElement("button",{onClick:()=>t(oe())},"Fetch flow version"),k.createElement("button",{onClick:()=>t(J(0))},"Version 1"),k.createElement("button",{onClick:()=>t(J(1))},"Version 2"),k.createElement("button",{onClick:()=>t(J(2))},"Version 3")),k.createElement(Xe,null))))}D.render(k.createElement(P.exports.StrictMode,null,k.createElement(T,{store:ne},k.createElement(ct,null))),document.getElementById("root"));
