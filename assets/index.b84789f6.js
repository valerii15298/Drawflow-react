var e,t,o,n,s,r,i,l=Object.defineProperty,a=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,o)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))u.call(t,o)&&h(e,o,t[o]);if(c)for(var o of c(t))p.call(t,o)&&h(e,o,t[o]);return e},f=(e,t)=>a(e,d(t));import{l as m,c as v,u as b,a as w,b as y,d as x,e as E,f as I,q as S,R as k,g as C,h as N,C as P,A as D,_ as M,i as T,P as L}from"./vendor.a6ff37c1.js";(t=e||(e={})).START="START",t.MIDDLE="MIDDLE",t.END="END",(o||(o={})).Drawflow="drawflow",(s=n||(n={})).NODE_SETTINGS="NODE_SETTINGS",s.GROUP_SETTINGS="GROUP_SETTINGS",(i=r||(r={})).in="in",i.out="out";class O{constructor(e,t){this.spacingX=40,this.spacingY=60,this.id=e,this.flow=t,this.state=t.state,this.nodeState=this.state.drawflow[this.id]}get head(){return this.nodeState.head}get lane(){return this.nodeState.lane}get port(){return this.nodeState.port}get portInPos(){var e;return null==(e=this.state.ports.find((({nodeId:e,portId:t,type:o})=>e===this.id&&1===t&&o===r.in)))?void 0:e.pos}get outPorts(){return this.state.ports.filter((({type:e,nodeId:t})=>this.id===t&&e===r.out))}get parent(){var e;const t=null==(e=this.parentConnection)?void 0:e.startId;return t?this.flow.getNode(t):null}get parentConnection(){return this.state.connections.find((e=>{e||console.log({conn:e});const{endId:t,endPort:o}=e;return t===this.id&&1===o}))}get totalWidth(){if(!1===this.nodeState.visible)return 0;return Math.max(this.width+this.subnodesWidth,this.leftWidth+this.rightWidth)}get childrenTotalWidth(){const{out1:e}=this;if(!e.length)return 0;let t=0;return e.forEach((e=>{t+=e.totalWidth})),t+this.spacingX*(e.length-1)}alignChildren(){const{out1:e}=this;this.update({isSub:!1,port:{out:2}});let t=this.pos.x-(this.leftWidth-this.width/2);for(const n of e){const e=t+(n.leftWidth-n.width/2);n.setPos({x:e,y:this.pos.y+this.height+this.spacingY}),!1!==n.nodeState.visible&&(t+=n.totalWidth+this.spacingX),n.alignChildren()}const{subnodes:o}=this;o.length&&(t=this.pos.x+this.width+this.spacingX,o.forEach((e=>{e.update({isSub:!0,port:{out:1}}),e.setPos({x:t,y:this.pos.y+(this.height/2-e.height/2)}),t+=e.width+this.spacingX})))}get leftWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,o=this.width/2;if(!e.length)return o;const n=e[0].leftWidth,s=n+(t-n-e[e.length-1].rightWidth)/2;return Math.max(s,o)}get rightWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,o=this.width/2+this.subnodesWidth;if(!e.length)return o;const n=e[0].leftWidth,s=e[e.length-1].rightWidth,r=s+(t-n-s)/2;return Math.max(r,o)}get all2Successors(){const{subnodes:e,out1:t}=this,o=[...t];return e.forEach((e=>o.push(e))),this.out1.forEach((e=>o.push(e))),o}get allSuccessors(){const e=[...this.out1,...this.subnodes],t=[...e];return e.forEach((e=>t.push(...e.allSuccessors))),t}toggleVisibility(e){this.update({visible:e}),this.parentConnection&&(this.parentConnection.visible=e),this.outConnections.forEach((t=>{t.visible=e}))}toggleChildrenVisibility(){var e;const t=null==(e=this.nodeState.childrenVisibility)||e;this.update({childrenVisibility:!t});const{subnodes:o,allSuccessors:n}=this;n.forEach((e=>{o.includes(e)||e.toggleVisibility(!t)}))}toggleSubnodesVisibility(){var e;const t=null==(e=this.nodeState.subnodesVisibility)||e;this.update({subnodesVisibility:!t}),this.subnodes.forEach((e=>{e.toggleVisibility(!t)}))}get outConnections(){return this.state.connections.filter((({startId:e})=>e===this.id))}children(e){return this.state.connections.filter((({startId:t,startPort:o})=>t===this.id&&o===e)).map((e=>this.flow.getNode(e.endId)))}get out1(){return this.children(1)}get firstSubnode(){return this.children(2)[0]}get subnodes(){var e,t;return(null==(t=null==(e=this.firstSubnode)?void 0:e.flowLine)?void 0:t.flowLineNodes)||[]}get subnodesWidth(){return this.subnodes.reduce(((e,t)=>e+t.width+this.spacingX),0)}get isSub(){return null!==this.complexParentNode}get complexParentNode(){const e=this.parent;return e?e.firstSubnode===this?e:e.complexParentNode:null}get flowLine(){const e=[this];let t=this,o=t.firstSubnode;for(;1===t.out1.length;)t=t.out1[0],e.push(t),o=o||t.firstSubnode;return t.out1.length>1?null:{flowLineNodes:e,hasSubnodes:o}}get height(){return this.state.drawflow[this.id].height}get width(){return this.state.drawflow[this.id].width}get pos(){return this.state.drawflow[this.id].pos}setPos(e){const{pos:t}=this,{x:o,y:n}=e;this.flow.moveNode({nodeId:this.id,dx:o-t.x,dy:n-t.y})}update(e){const t=m.merge(this.nodeState,e);Object.assign(this.nodeState,t)}}class X{constructor(e){this.nodes={},this.distanceToConnect=100,this.distanceToDisconnect=0,this.state=e;const{drawflow:t}=this.state;Object.keys(t).map((e=>this.nodes[Number(e)]=new O(Number(e),this)))}get heads(){return Object.entries(this.nodes).filter((([,e])=>!e.parent)).map((e=>e[1]))}getNode(e){return this.nodes[e]}alignAll(){this.setLaneNumbers(),this.heads.forEach((e=>{e.alignChildren()}))}allowConnection(e){const{startId:t,startPort:o,endId:n}=e,s=this.getNode(n),r=this.getNode(t),i=2===o;if(s.parent||!1===r.nodeState.visible)return!1;const l=s.flowLine;return!((i||r.isSub)&&(!l||l.hasSubnodes))}addConnection(e){let{startId:t,startPort:o,endId:n,endPort:s}=e;const r=this.getNode(n),i=this.getNode(t),l=2===o;if(r.parent||!1===i.nodeState.visible)return!1;const a=r.flowLine;if((l||i.isSub)&&(!a||a.hasSubnodes))return!1;let d=null;if(l&&i.subnodes.length){if(!1===i.nodeState.subnodesVisibility){t=i.subnodes[i.subnodes.length-1].id,o=1,this.state.connections.push({startId:t,startPort:o,endId:n,endPort:s,visible:!0});const{flowLineNodes:e}=a;return void e.forEach((e=>e.toggleVisibility(!1)))}d=i.subnodes[0]}if(i.isSub&&i.out1.length&&(d=i.out1[0]),null!==d){const e=this.state.connections.find((e=>e.startId===t&&e.startPort===o&&e.endId===d.id&&1===e.endPort)),n=this.state.connections.indexOf(e);this.state.connections.splice(n,1);const{flowLineNodes:s}=a,r=s[s.length-1];this.state.connections.push({startId:r.id,startPort:1,endId:d.id,endPort:1,visible:!0})}this.state.connections.push({startId:t,startPort:o,endId:n,endPort:s,visible:!0})}moveNode({dx:e,dy:t,nodeId:o}){this.state.drawflow[o].pos.x+=e,this.state.drawflow[o].pos.y+=t}dragNode({dx:e,dy:t,nodeId:o}){this.moveNode({dx:e,dy:t,nodeId:o}),this.toggleAvailablePortToConnect(o)}toggleAvailablePortToConnect(e){const t=Date.now();if(this.state.computing&&t-this.state.computing<100)return;if(this.state.computing=t,!this.state.config.drag)return;const o=this.getNode(e),n=o.head;if(o.parentConnection){const e=this.state.connections.indexOf(o.parentConnection);this.state.connections.splice(e,1),this.alignAll()}const s=o.portInPos;if(!s)return;let r=null;Object.entries(this.nodes).filter((([,e])=>e.head!==n&&!1!==e.nodeState.visible)).forEach((([t,o])=>{Number(t)!==e&&o.outPorts.forEach((e=>{const{pos:t}=e,o=Math.hypot(s.x-t.x,s.y-t.y);o<this.distanceToConnect&&(null===r||o<r.distance)&&(r={port:e,distance:o})}))})),this.state.portToConnect=null!==r?r.port:void 0}setLaneNumbers(){let e=this.heads;for(e.forEach((e=>e.update({head:e.id,lane:0})));e.length;){const t=[];e.forEach((e=>{let o=e.lane+1;const{subnodes:n,head:s}=e;if(void 0===s)return void console.error("head is undefined in setLaneNumbers");if(n.length)for(const t of n)t.update({lane:o++,head:s});const r=e.children(1);r.forEach((e=>e.update({head:s,lane:o}))),t.push(...r)})),e=t}this.heads.forEach((e=>{const{head:t}=e;for(let o=0,n=0,s=[e];s.length;++o)s=Object.values(this.nodes).filter((e=>e.lane===o&&e.head===t)),s.forEach((e=>{e.update({positionNumber:n++})}))}))}}const z={nodeId:1,canvasDrag:!1,config:{drag:!1,connectionsLabelEnable:!1,canvasTranslate:{x:0,y:0},zoom:{value:1,max:2,min:.5,tick:.1}},drawflow:{},connections:[],connectionsLabel:{},ports:[],select:null,newPathDirection:null,modalType:null,editLock:!1,mouseBlockDragPos:{clientX:void 0,clientY:void 0}},W=e=>{new X(e).alignAll()},V=(e,{payload:t})=>{const o=m.merge(e,t);for(const n in o)e[n]=o[n]},Y=v({name:o.Drawflow,initialState:z,reducers:{setState:V,setEditLock:(e,{payload:t})=>{e.editLock=t},align:W,moveNode:(e,t)=>new X(e).dragNode(t.payload),setMouseBlockDragPos:(e,{payload:t})=>{e.mouseBlockDragPos=t},unSelect:e=>{e.config.drag=!1,e.select=null},select:(e,{payload:t})=>{e.config.drag="node"===t.type,e.select=t},selectPort:(e,{payload:t})=>{const o=e.ports.find((({nodeId:e,portId:o,type:n})=>n===t.type&&o===t.portId&&e===t.nodeId));if(!o)return void console.error("Cannot find port to select in state.ports");const n=e.ports.indexOf(o);e.select={type:t.type,selectId:n}},moveCanvas:(e,{payload:{movementX:t,movementY:o}})=>{e.canvasDrag&&(e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=o)},canvasDrag:(e,{payload:t})=>{e.canvasDrag=t},canvasMouseMove:(e,{payload:{movementX:t,movementY:o,clientX:n,clientY:s}})=>{var i;if(e.clientCurrentMousePos={clientX:n,clientY:s},e.canvasDrag)e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=o;else if((null==(i=e.select)?void 0:i.type)===r.out)e.newPathDirection={clientX:n,clientY:s};else if(e.config.drag&&e.select){const t=e.select.selectId,{clientX:o,clientY:r}=e.mouseBlockDragPos;e.mouseBlockDragPos={clientX:n,clientY:s};const i=e.config.zoom.value,l=(n-o)/i,a=(s-r)/i;new X(e).dragNode({nodeId:t,dy:a,dx:l})}},canvasMouseUp:e=>{var t,o;const n=new X(e);if(e.portToConnect&&(null==(t=e.select)?void 0:t.selectId)){const{nodeId:t,portId:o}=e.portToConnect,s=e.select.selectId,r=1;n.addConnection({startId:t,startPort:o,endId:s,endPort:r})}e.portToConnect=void 0,e.newPathDirection=null,e.canvasDrag=!1,e.config.drag=!1,(null==(o=e.select)?void 0:o.type)===r.out&&(e.select=null),n.alignAll()},deleteNode:e=>{const{connections:t,drawflow:o,ports:n,select:s}=e;if("node"!==(null==s?void 0:s.type))return;const{selectId:r}=s;t.forEach((({endId:e,startId:o},n)=>{[o,e].includes(r)&&delete t[n]})),n.forEach((({nodeId:e},t)=>{e===r&&delete n[t]})),delete o[r],e.select=null},deletePath:e=>{const{connections:t,select:o}=e;"path"===(null==o?void 0:o.type)&&(console.log("delete"),t.splice(o.selectId,1))},load:(e,{payload:t})=>(Object.assign(e,z),e.drawflow=t.drawflow,e.nodeId=Object.keys(t.drawflow).length+1,e.connections=t.connections,e),portMouseUp:(e,{payload:{nodeId:t,portId:o,PortType:n}})=>{const{select:s}=e;if(n!==r.in||!s)return;const i=e.ports[s.selectId],l=t,a=o,d=i.nodeId,c=i.portId;if(d===l)return;new X(e).addConnection({startId:d,startPort:c,endId:l,endPort:a})},clear:()=>z,pushPorts:(e,{payload:t})=>{if(0===t.length)return;const{nodeId:o}=t[0];e.ports=e.ports.filter((e=>e.nodeId!==o)),e.ports.push(...t)},zoom:(e,{payload:t})=>{const{zoom:o}=e.config,{value:n,max:s,min:r,tick:i}=o,l=n+(t?i:-i);l<=s&&l>=r&&(o.value=l),null===t&&(e.config.canvasTranslate={x:0,y:0},o.value=1)},nodeSize:(e,{payload:{height:t,width:o,id:n}})=>{e.drawflow[n].height=t,e.drawflow[n].width=o},toggleSubnodes:(e,{payload:{id:t}})=>{new X(e).getNode(t).toggleSubnodesVisibility(),W(e)},toggleChildren:(e,{payload:{id:t}})=>{new X(e).getNode(t).toggleChildrenVisibility(),W(e)},copyNode:e=>{var t;"node"===(null==(t=e.select)?void 0:t.type)&&(e.nodeToCopyId=e.select.selectId)}}}),$=Y.actions,j=Y.reducer,A=e=>e.flows[e.version],_=()=>b(),R=w,q=(e,t,o=15,n=5)=>{const s=[],r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<e;i++){let e="";for(let t=0;t<Math.floor(Math.random()*(o-n)+n);t++)e+=r.charAt(Math.floor(Math.random()*r.length));t.length>1&&(e+=t),s.push(e)}return s},B=()=>({id:0,type:e.MIDDLE,data:{type:"Node type",name:"Node name",value:"Node value"},port:{in:1,out:2},pos:{x:-20,y:100},isSub:!1,height:0,width:0}),F=async()=>{const e={nodes:{},connections:[]};for(let t=1;t<5;++t){const o=B();o.id=t,o.data.name=`Node ${t}`,o.pos.x=100*t,o.pos.y=50*t,e.nodes[t]=o}return e},G=async e=>{const t=[];for(let o=0;o<e;++o)t.push({type:"type",name:"name",value:q(1,"",4,2)[0]});return t},U=(e,t)=>{const o=(e.y-t.y)/2,n=e.x-t.x;return`M ${e.x} ${e.y} v ${-o} h ${-n} v ${-o} `},J=(e,t,o,n)=>{const{x:s,y:r,width:i,height:l}=n;return{x:e*(i/(i*o))-s*(i/(i*o)),y:t*(l/(l*o))-r*(l/(l*o))}},H=I("versions/changed"),K=I("addNewNode"),Z=I("dragTemplate"),Q=I("canvasShapeUpdated"),ee=I("insertCopiedNode"),te=I("toggleSidebar"),oe=I("setState"),ne={setStateAction:oe},se={version:0,flows:[z,z,z],templates:[],dragTemplate:0,groups:[],tabId:0},re=y("fetchPosts",(async()=>await G(10))),ie=y("fetchFlowVersion",(async()=>await F())),le=E({reducer:x(se,(e=>{e.addCase(oe,V).addCase(ee,(e=>{const t=A(e);if(void 0===t.nodeToCopyId)return;const{clientX:o,clientY:n}=t.clientCurrentMousePos,s=JSON.parse(JSON.stringify(t.drawflow[t.nodeToCopyId]));e.canvas?(s.pos=J(o,n,t.config.zoom.value,e.canvas),t.drawflow[t.nodeId]=f(g({},s),{id:t.nodeId,height:0,width:0}),++t.nodeId):console.error("Canvas shape is not available")})).addCase(H,((e,{payload:t})=>{e.version=t})).addCase(te,(e=>{var t;e.sidebarVisible=!(null==(t=e.sidebarVisible)||t)})).addCase(K,((e,{payload:{clientX:t,clientY:o}})=>{if(!e.dragTemplate)return;if(!e.canvas)return void console.error("Canvas shape is not available");const n=e.flows[e.version],s=B();s.pos=J(t,o,n.config.zoom.value,e.canvas),n.mouseBlockDragPos={clientX:t,clientY:o},n.drawflow[n.nodeId]=f(g({},s),{id:n.nodeId,height:0,width:0}),n.select={type:"node",selectId:n.nodeId++},n.config.drag=!0,e.dragTemplate=void 0})).addCase(Z,((e,{payload:t})=>{e.dragTemplate=t})).addCase(Q,((e,{payload:t})=>{e.canvas=t})).addCase(re.fulfilled,((e,t)=>{e.templates=t.payload})).addCase(ie.fulfilled,((e,t)=>{const{nodes:n,connections:s}=t.payload;e.flows[e.version]=j(e.flows[e.version],{type:o.Drawflow+"/load",payload:{drawflow:n,connections:s}})})).addMatcher((e=>e.type.startsWith(o.Drawflow)),((e,t)=>{e.flows[e.version]=j(e.flows[e.version],t)}))}))}),ae=S.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`,de=S.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
`,ce=()=>{const e=R((e=>A(e).editLock)),t=_();return k.createElement(ae,null,!e&&k.createElement(de,null,"Clear"),k.createElement(de,{onClick:()=>t($.setEditLock(!e))},e?"UnLock":"Lock"))},ue=S.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`,pe=S.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  padding: 3px 10px;
`,he=()=>{const e=_();return k.createElement(ue,null,k.createElement(pe,{onClick:()=>e($.zoom(!0))},"+"),k.createElement(pe,{onClick:()=>e($.zoom(!1))},"-"),k.createElement(pe,{onClick:()=>e($.zoom(null))},"reset"))},ge=C(N,m.isEqual),fe=S.svg`
  position: absolute;
  overflow: visible;
`,me=S.path`
  :hover {
    stroke-width: 6px;
    stroke: purple;
    cursor: pointer;
  }
  fill: none;
  stroke-width: 6px;
  stroke: steelblue;
  ${({selected:e})=>e&&D`
      stroke-width: 7px;
      stroke: red;
    `};
`,ve=e=>{const{id:t,d:o}=e,n=(e=>R(P.exports.useMemo((()=>ge((t=>{if(void 0===e)return!1;const o=A(t).select;return"path"===(null==o?void 0:o.type)&&o.selectId===e}),(e=>e))),[e])))(t),s=_();return k.createElement(fe,null,k.createElement(me,{selected:n,d:o,onMouseDown:e=>{void 0!==t&&(e.stopPropagation(),s($.select({type:"path",selectId:t})))}}))},be=()=>{var e;console.log("Render new Path");const t=null!=(e=R(P.exports.useMemo((()=>ge((e=>{const t=A(e);if(!t.select||t.select.type!==r.out||!t.newPathDirection)return void console.error("Cannot draw new path!");const o=t.ports[t.select.selectId];if(!o)return void console.error("No start port in newPath");const n=o.pos;if(!e.canvas)return void console.error("Canvas shape is not available");const{clientX:s,clientY:i}=t.newPathDirection,l=J(s,i,t.config.zoom.value,e.canvas);return U(n,l)}),(e=>e))),[])))?e:"";return k.createElement(ve,{d:t})},we=S.div`
  max-height: 100%;
  overflow: hidden;
`,ye=e=>k.createElement(we,null,JSON.stringify(e,null,2)),xe=100,Ee=60,Ie=S.div`
  width: 15px;
  height: 15px;
  border-radius: 60px;
  background-color: #217ce8;
  opacity: ${({visible:e})=>e?1:0};
  transform: scale(${({visible:e})=>e?1:0});
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
`,Se=S.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
`,ke=S(Se)`
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&D`
      left: 100%;
      top: 50%;
    `}
`,Ce=S(Se)`
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&D`
      display: none;
    `}
`,Ne=S(Se)`
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  ${({isSub:e})=>e&&D`
      left: 0;
      top: 50%;
    `}
`,Pe={[r.in]:[Ne],[r.out]:[ke,Ce]},De=e=>{const{nodeId:t,portId:o,type:n}=e,s=_(),r=(i=e,R(P.exports.useMemo((()=>ge((e=>{const{portToConnect:t}=A(e);if(void 0===t)return!1;const o=JSON.parse(JSON.stringify(t));return delete o.pos,m.isEqual(i,o)}),(e=>e))),[i])));var i;const l=(a=t,R(P.exports.useMemo((()=>ge((e=>A(e).drawflow[a].isSub),(e=>e))),[a])));var a;const d=Pe[n][o-1];return k.createElement(d,{isSub:l,onMouseDown:e=>{e.stopPropagation(),s($.selectPort({type:n,nodeId:t,portId:o}))},onMouseUp:()=>{s($.portMouseUp({nodeId:t,portId:o,PortType:n}))}},k.createElement(Ie,{visible:r}))},Me=e=>{const{id:t,port:o,type:n}=e,s=[];for(let r=1;r<=o[n];r++)s.push(k.createElement(De,{key:r,nodeId:t,portId:r,type:n}));return k.createElement("div",{className:`${n}puts`},s)},Te=S.div`
  display: inline-block;
  position: absolute;
  padding: 5px;
  width: 200px;
  min-height: 60px;
  background-color: #d3d3d3;
  z-index: 1;
  cursor: move;

  ${({isSub:e})=>e&&D`
      height: ${Ee}px;
      width: ${xe}px;
    `}
  ${({selected:e})=>e&&D`
      box-shadow: 0 2px 15px 2px #cacaca;
      z-index: 2;
    `};
`,Le=({id:e})=>{const t=R(P.exports.useMemo((()=>ge((e=>A(e).config.drag),(e=>e))),[])),o=R((e=>A(e).nodeId)),n=(e=>R(P.exports.useMemo((()=>ge((t=>A(t).drawflow[e].pos),(e=>e))),[e])))(e),s=(e=>R(P.exports.useMemo((()=>ge((t=>{const o=A(t).select;return(null==o?void 0:o.selectId)===e&&"node"===o.type}),(e=>e))),[e])))(e),i=_(),l=P.exports.useRef(null),a=(e=>R(P.exports.useMemo((()=>ge((t=>{const o=JSON.parse(JSON.stringify(A(t).drawflow[e]));return delete o.pos,o}),(e=>e))),[e])))(e),{port:d}=a;return P.exports.useEffect((()=>{if(l.current){const{offsetHeight:t,offsetWidth:o}=l.current;i($.nodeSize({height:t,width:o,id:e})),i($.align())}}),[i,e,a]),P.exports.useEffect((()=>{const t=(t,o)=>Array.from(o.querySelector(`.${t}puts`).children).map(((o,s)=>{const r=parseInt(getComputedStyle(o).left)+n.x,i=parseInt(getComputedStyle(o).top)+n.y;return{nodeId:e,pos:{x:r,y:i},portId:s+1,type:t}}));if(l.current){const e=t(r.in,l.current),o=t(r.out,l.current);i($.pushPorts([...e,...o]))}}),[i,e,n]),P.exports.useEffect((()=>{if(l.current&&o-1===e&&t){const{offsetHeight:t,offsetWidth:o}=l.current;i($.moveNode({nodeId:e,dx:.2*-o,dy:.2*-t}))}}),[]),k.createElement(Te,{selected:s,ref:l,style:{left:n.x,top:n.y},isSub:a.isSub,onMouseDown:t=>{t.stopPropagation();const{clientX:o,clientY:n}=t;i($.select({type:"node",selectId:e})),i($.setMouseBlockDragPos({clientX:o,clientY:n}))},onContextMenu:()=>{},onDoubleClick:()=>{}},k.createElement(ye,g(g({},a),n)),!a.isSub&&k.createElement(k.Fragment,null,k.createElement("div",{onClick:()=>{i($.toggleSubnodes({id:e}))}},"toggle sub"),k.createElement("div",{onClick:()=>{i($.toggleChildren({id:e}))}},"toggle children")),k.createElement(Me,{id:e,port:d,type:r.in}),k.createElement(Me,{id:e,port:d,type:r.out}),k.createElement("button",null,"X"))},Oe=()=>{console.log("Render NodeList");const e=R(P.exports.useMemo((()=>ge((e=>{const{drawflow:t}=A(e);return Object.entries(t).filter((([e,{visible:t}])=>!1!==t)).map((([e])=>Number(e)))}),(e=>e))),[]));return k.createElement(k.Fragment,null,e.map((e=>k.createElement(Le,{key:e,id:e}))))},Xe=({id:e})=>{const t=(o=e,R(P.exports.useMemo((()=>ge((e=>{var t,n;const s=A(e),{startId:i,startPort:l,endId:a,endPort:d}=s.connections[o],c=null==(t=s.ports.find((e=>e.nodeId===i&&e.portId===l&&e.type===r.out)))?void 0:t.pos,u=null==(n=s.ports.find((e=>e.nodeId===a&&e.portId===d&&e.type===r.in)))?void 0:n.pos;return c&&u?U(c,u):""}),(e=>e))),[o])));var o;return k.createElement(ve,{key:e,id:e,d:t})},ze=()=>{const e=R(P.exports.useMemo((()=>ge((e=>{const{connections:t}=A(e);return t.reduce(((e,t,o)=>(t.visible&&e.push(o),e)),[])}),(e=>e))),[])).map((e=>k.createElement(Xe,{key:e,id:e})));return k.createElement(k.Fragment,null,e)},We=S.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #282a36;
  background-size: 25px 25px;
  background-image: linear-gradient(to right, #2f323d 1px, transparent 1px),
    linear-gradient(to bottom, #2f323d 1px, transparent 1px);
`,Ve=S.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Ye=(e,t,o,n)=>{var s;const[r,i]=(null==(s=getComputedStyle(e).transform.match(/^matrix\((.+)\)$/))?void 0:s[1].split(",").slice(-2).map(Number))||[0,0];e.style.transform=`translate(${r+t}px, ${i+o}px) scale(${n})`},$e=()=>{console.log("Render Drawflow");const{config:{zoom:e},newPathDirection:t,canvasDrag:o}=R(P.exports.useMemo((()=>ge((e=>{const t=A(e),{config:{zoom:o},newPathDirection:n,canvasDrag:s}=t;return{config:{zoom:o},newPathDirection:n,canvasDrag:s}}),(e=>e))),[])),n=_();P.exports.useEffect((()=>{n(ie())}),[n]);const s=P.exports.useRef(null);return P.exports.useEffect((()=>{const{current:t}=s;t&&Ye(t,0,0,e.value)}),[o,e.value]),P.exports.useEffect((()=>{const{current:e}=s;if(e){const t=e.getBoundingClientRect(),o={x:t.x,y:t.y,width:e.clientWidth,height:e.clientHeight};n(Q(o))}}),[n,s]),k.createElement(We,{className:"drawflow",tabIndex:0,onKeyDownCapture:e=>{"Delete"===e.key&&(n($.deletePath()),n($.deleteNode())),e.ctrlKey&&"c"===e.key&&n($.copyNode()),e.ctrlKey&&"v"===e.key&&n(ee())},onMouseDown:()=>{n($.canvasDrag(!0)),n($.unSelect())},onMouseUp:()=>n($.canvasMouseUp()),onMouseMove:t=>{const{clientX:r,clientY:i,movementX:l,movementY:a}=t,{current:d}=s;o&&d&&Ye(d,l,a,e.value),n($.canvasMouseMove({clientX:r,clientY:i,movementX:l,movementY:a}))},onMouseEnter:e=>{const{clientX:t,clientY:o}=e;console.log("enter"),n(K({clientX:t,clientY:o}))}},k.createElement(ce,null),k.createElement(he,null),k.createElement(Ve,{ref:s,className:"drawflow",style:{}},k.createElement(Oe,null),k.createElement(ze,null),t&&k.createElement(be,null)))};const je=e=>k.createElement("svg",f(g({},e),{viewBox:"0 0 24 24"}),k.createElement("path",{fill:"none",stroke:"#303c42",strokeLinecap:"round",strokeLinejoin:"round",d:"M21,1.5H3A1.5,1.5,0,0,0,1.5,3V22.5l5-5H21A1.5,1.5,0,0,0,22.5,16V3A1.5,1.5,0,0,0,21,1.5Z"})),Ae=e=>k.createElement("svg",f(g({},e),{viewBox:"0 0 16 16",fill:"none"}),k.createElement("path",{d:"M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),k.createElement("path",{d:"M14.0016 13.9996L11.1016 11.0996",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),_e=e=>k.createElement("svg",f(g({},e),{viewBox:"0 0 10 14",fill:"none"}),k.createElement("path",{d:"M8 2L2.18437 6.84636C2.08842 6.92631 2.08842 7.07369 2.18437 7.15364L8 12",stroke:"#393C44",strokeWidth:"2.5",strokeLinecap:"round"})),Re=e=>k.createElement("svg",f(g({},e),{viewBox:"0 0 1792 1792"}),k.createElement("path",{fill:"#217CE8",d:"M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z"})),qe=S.div`
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
`,Be=e=>{const{value:t,id:o}=e,n=_(),s=P.exports.useRef(null),r=R((e=>e.canvas));return k.createElement(qe,{ref:s,onMouseDownCapture:e=>{if(void 0===Z)return;n(Z(o));const{current:t}=s;if(!t)return void console.error("No node to copy");const{left:i,top:l}=t.getBoundingClientRect(),a=e.clientX-i,d=e.clientY-l,c=t.cloneNode(!0);c.style.position="absolute",c.style.left=i+window.scrollX+"px",c.style.top=l+window.scrollY+"px",document.body.appendChild(c);const u=e=>{var t;const{clientX:o,clientY:n}=e;if(r){if(o>=r.x&&n>=r.y)return document.removeEventListener("mousemove",u),void(null==(t=c.parentNode)||t.removeChild(c));c.style.left=o-a+window.scrollX+"px",c.style.top=n-d+window.scrollY+"px"}else console.error("Canvas is not ready! Cannnot drag template")};document.addEventListener("mousemove",u),document.addEventListener("mouseup",(()=>{var e;document.removeEventListener("mousemove",u),null==(e=c.parentNode)||e.removeChild(c)}),{once:!0});const{height:p,width:h}=getComputedStyle(t);c.style.height=p,c.style.width=h}},k.createElement(je,null),t)},Fe=S.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(4, minmax(2.2em, 1fr));
  grid-auto-rows: minmax(1em, auto);
  grid-gap: 1em;
  background-color: #f5f5f5;
`,Ge=e=>{const t=R((e=>e.templates)),o=_(),{searchWord:n}=e,s=n.toLowerCase().split(" ").filter((e=>e.length>0));return P.exports.useEffect((()=>{o(re())}),[o]),k.createElement(Fe,null,t.map(((e,t)=>{const o=JSON.stringify(e,null,2);return(s.find((e=>o.toLowerCase().includes(e)))||!s.length)&&k.createElement(Be,g({key:t,id:t},e))})))},Ue=S.div`
  min-width: 300px;
`,Je=S.div`
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
`,He=S.div`
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
  ${({selected:e})=>e&&D`
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
`,Ke=({selectedGroup:e,setSelectedGroup:t})=>{const[o,n]=P.exports.useState(["Loading"]);return P.exports.useEffect((()=>{n(["Triggers","Actions","Loggers","Feedbacks","Pushes","Notifications","Hooks"])}),[]),k.createElement(Je,null,o.map(((o,n)=>k.createElement(He,{key:n,selected:n===e,onClick:()=>t(n)},o))))},Ze=S.input`
  display: block;
  width: 85%;
  height: 40px;
  background-color: #fff;
  border: 1px solid #e8e8ef;
  box-shadow: 0px 2px 8px rgb(34 34 87 / 5%);
  border-radius: 5px;
  text-indent: 35px;
  font-size: 16px;
`,Qe=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`,et=S.span`
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
`,tt=({setSearchWord:e})=>k.createElement(Qe,null,k.createElement(et,null,k.createElement(Ae,null)),k.createElement(Ze,{type:"text",placeholder:"Search templates",onChange:t=>{e(t.target.value)}}),k.createElement(nt,null)),ot=S.div`
  :hover {
    cursor: pointer;
  }

  ${({opened:e})=>e&&D`
      transform: rotate(180deg);
    `};
`,nt=()=>{var e;const t=null==(e=R((e=>e.sidebarVisible)))||e,o=_();return k.createElement(ot,{opened:!t,onClick:()=>o(te())},k.createElement(Re,{height:40}))},st=()=>{const[e,t]=P.exports.useState(""),[o,n]=P.exports.useState(0);return!1===R((e=>e.sidebarVisible))?null:k.createElement(Ue,null,k.createElement(tt,{setSearchWord:t}),k.createElement(Ke,{selectedGroup:o,setSelectedGroup:n}),k.createElement(Ge,{searchWord:e}))};const rt=S.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e8e8ef;
`,it=S.div`
  display: flex;
  justify-content: space-between;
`,lt=D`
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
`,at=S.div`
  display: flex;
  align-items: center;
`,dt=S.button`
  ${lt}
  :focus {
    background-color: #dfdfdf;
  }
`,ct=S.div`
  display: flex;
  align-items: center;
`,ut=S.button`
  margin: 0 10px;
  background-color: #eaecf1;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: none;
`,pt=S.div`
  display: grid;
  place-items: left;
  div {
  }
`,ht=S.div`
  font-size: 16px;
  color: #393c44;
  font-family: Roboto;
`,gt=S.div`
  color: #808292;
  font-size: 14px;
`,ft=S.button`
  ${lt}

  background-color: #e31c5c;
  display: inline-block;
  margin-right: 10px;
  color: white;
`,mt=S.button`
  background-color: #217ce8;
  ${lt}
  color: white;
`,vt=S.label`
  display: flex;
  align-items: center;
  justify-content: center;
  > span:first-child {
    display: inline-block;
    margin-right: 4px;
  }
`,bt=()=>{const e=R((e=>e.flowInfo)),{flow_name:t,flow_description:o,flow_active:n}=e||{};return k.createElement(rt,null,k.createElement(it,null,k.createElement(ut,null,k.createElement(_e,{height:14})),k.createElement(pt,null,k.createElement(ht,null,t||"Loading ..."),k.createElement(gt,null,o||"Loading ..."))),k.createElement(at,null,k.createElement(dt,null,"Diagram view"),k.createElement(dt,null,"Code editor"),k.createElement(dt,null,k.createElement(vt,null,k.createElement("span",null,"Active"),k.createElement(M,{defaultChecked:!!n,icons:{checked:null,unchecked:null},onChange:e=>console.log(e.target.checked)}))),k.createElement(dt,null,k.createElement("img",{src:"/Drawflow-react/assets/flowsettings.758f2330.png",alt:""}))),k.createElement(ct,null,k.createElement(ft,null,"Delete flow"),k.createElement(mt,null,"Save flow")))};var wt,yt;(yt=wt||(wt={}))[yt.getTemplateNodes=1156]="getTemplateNodes",yt[yt.postTemplateNodes=1157]="postTemplateNodes",yt[yt.getFlowDataVersion=1160]="getFlowDataVersion",yt[yt.postFlowDataVersion=1161]="postFlowDataVersion",yt[yt.getFlow=1162]="getFlow",yt[yt.postFlow=1163]="postFlow",yt[yt.getGroups=1154]="getGroups",yt[yt.postGroups=1155]="postGroups",yt[yt.getStepSettingsTemplates=1222]="getStepSettingsTemplates";const xt=window.location.search,Et=new URLSearchParams(xt).get("session_id");Et||(console.error("sessin_id is not provided!"),alert("sessin_id is not provided!"));const It=y("fetchFlow",(async(e,{dispatch:t})=>{const o=await(async(e,t)=>{const o=g({session_id:Et,sp_name:"OK",session_exp:"2021-02-12T02:57:45.453422",status:"OK",item_id:0,max_row_per_page:50,search_term:"",search_term_header:"",pagination:1,scrdata_id:e},t);return fetch("https://valerii.educationhost.cloud?csurl=https://tastypoints.io/akm/restapi.php",{method:"post",body:JSON.stringify({input:o}).replace(/'/g,"''")}).then((async e=>{let t=await e.json();return t.status&&t.data?t=JSON.parse(t.data):console.error(t),t.response_error&&console.error(t.response_error),t}))})(1162,{item_id:25});if(null===o.flows)return void alert("Such flow do not exist or was deleted!");const n=o.flows[0];t(ne.setStateAction({flowInfo:n}))})),St=S.div`
  display: flex;
  height: 40px;
`;function kt(){var e;console.log("Render App");const t=_(),o=null==(e=R((e=>e.sidebarVisible)))||e;return P.exports.useEffect((()=>{t(It())}),[]),k.createElement("div",{className:"App"},k.createElement(bt,null),k.createElement("main",null,k.createElement(st,null),k.createElement("div",{className:"flow"},k.createElement(St,null,!o&&k.createElement(nt,null),k.createElement("button",{onClick:()=>t(ie())},"Fetch flow version"),k.createElement("button",{onClick:()=>t(H(0))},"Version 1"),k.createElement("button",{onClick:()=>t(H(1))},"Version 2"),k.createElement("button",{onClick:()=>t(H(2))},"Version 3")),k.createElement($e,null))))}T.render(k.createElement(P.exports.StrictMode,null,k.createElement(L,{store:le},k.createElement(kt,null))),document.getElementById("root"));
