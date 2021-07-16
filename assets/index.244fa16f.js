var e,t,n,o,r,i,l,s,a=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&g(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&g(e,n,t[n]);return e},f=(e,t)=>d(e,c(t));import{l as w,c as b,D as v,a as x,b as y,d as E,e as _,u as k,f as S,C,q as I,R as N,g as D,h as P,A as O,_ as M,J as j,i as L,j as T,F as z,k as $,m as V,P as F}from"./vendor.6d95243b.js";(t=e||(e={})).START="START",t.MIDDLE="MIDDLE",t.END="END",(o=n||(n={})).Drawflow="drawflow",o.Groups="groups",(i=r||(r={})).backgroundOpacity="backgroundOpacity",i.backgroundBlur="backgroundBlur",i.backgroundImageUrl="backgroundImageUrl",(s=l||(l={})).in="in",s.out="out";const A=e=>Object.keys(e);var B,W,J,X;(W=B||(B={}))[W.mainFlow=0]="mainFlow",W[W.codeEditor=1]="codeEditor",W[W.templateNodeSettings=2]="templateNodeSettings",W[W.nodeSettings=3]="nodeSettings",(X=J||(J={}))[X.groupSettings=0]="groupSettings",X[X.flowSettings=1]="flowSettings",X[X.none=2]="none";class Y{constructor(e,t){this.spacingX=40,this.spacingY=60,this.id=e,this.flow=t,this.state=t.state,this.nodeState=this.state.drawflow[this.id]}get head(){return this.nodeState.head}get lane(){return this.nodeState.lane}get port(){return this.nodeState.port}get portInPos(){var e;return null==(e=this.state.ports.find((({nodeId:e,portId:t,type:n})=>e===this.id&&1===t&&n===l.in)))?void 0:e.pos}get outPorts(){return this.state.ports.filter((({type:e,nodeId:t})=>this.id===t&&e===l.out))}get parent(){var e;const t=null==(e=this.parentConnection)?void 0:e.startId;return t?this.flow.getNode(t):null}get parentConnection(){return this.state.connections.find((e=>{e||console.log({conn:e});const{endId:t,endPort:n}=e;return t===this.id&&1===n}))}get totalWidth(){return!1===this.nodeState.visible?0:Math.max(this.width+this.subnodesWidth,this.leftWidth+this.rightWidth)}get childrenTotalWidth(){const{out1:e}=this;if(!e.length)return 0;let t=0;return e.forEach((e=>{t+=e.totalWidth})),t+this.spacingX*(e.length-1)}get leftWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,n=this.width/2;if(!e.length)return n;const o=e[0].leftWidth,r=o+(t-o-e[e.length-1].rightWidth)/2;return Math.max(r,n)}get rightWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,n=this.width/2+this.subnodesWidth;if(!e.length)return n;const o=e[0].leftWidth,r=e[e.length-1].rightWidth,i=r+(t-o-r)/2;return Math.max(i,n)}get all2Successors(){const{subnodes:e,out1:t}=this,n=[...t];return e.forEach((e=>n.push(e))),this.out1.forEach((e=>n.push(e))),n}get allSuccessors(){const e=[...this.out1,...this.subnodes],t=[...e];return e.forEach((e=>t.push(...e.allSuccessors))),t}get outConnections(){return this.state.connections.filter((({startId:e})=>e===this.id))}get out1(){return this.children(1)}get prevDirectNodes(){const e=[];let t=this.parent;for(;t;)e.push(t),t=t.parent;return e}get firstSubnode(){return this.children(2)[0]}get subnodes(){var e,t;return(null==(t=null==(e=this.firstSubnode)?void 0:e.flowLine)?void 0:t.flowLineNodes)||[]}get subnodesWidth(){return!1===this.nodeState.subnodesVisibility?0:this.subnodes.reduce(((e,t)=>e+t.width+this.spacingX),0)}get isSub(){return null!==this.complexParentNode}get complexParentNode(){const e=this.parent;return e?e.firstSubnode===this?e:e.complexParentNode:null}get flowLine(){const e=[this];let t=this,n=t.firstSubnode;for(;1===t.out1.length;)t=t.out1[0],e.push(t),n=n||t.firstSubnode;return t.out1.length>1?null:{flowLineNodes:e,hasSubnodes:n}}get height(){return this.state.drawflow[this.id].height}get width(){return this.state.drawflow[this.id].width}get pos(){return this.state.drawflow[this.id].pos}alignChildren(){const{out1:e}=this;this.update({isSub:!1,port:{out:2}});let t=this.pos.x-(this.leftWidth-this.width/2);for(const o of e){const e=t+(o.leftWidth-o.width/2);o.setPos({x:e,y:this.pos.y+this.height+this.spacingY}),!1!==o.nodeState.visible&&(t+=o.totalWidth+this.spacingX),o.alignChildren()}const{subnodes:n}=this;n.length&&(t=this.pos.x+this.width+this.spacingX,n.forEach((e=>{e.update({isSub:!0,port:{out:1}}),e.setPos({x:t,y:this.pos.y+(this.height/2-e.height/2)}),t+=e.width+this.spacingX})))}toggleVisibility(e){this.update({visible:e}),this.parentConnection&&(this.parentConnection.visible=e),this.outConnections.forEach((t=>{t.visible=e}))}toggleChildrenVisibility(){var e;const t=null==(e=this.nodeState.childrenVisibility)||e;this.update({childrenVisibility:!t});const{subnodes:n,allSuccessors:o}=this;o.forEach((e=>{n.includes(e)||e.toggleVisibility(!t)}))}toggleSubnodesVisibility(){var e;const t=null==(e=this.nodeState.subnodesVisibility)||e;this.update({subnodesVisibility:!t}),this.subnodes.forEach((e=>{e.toggleVisibility(!t)}))}children(e){return this.state.connections.filter((({startId:t,startPort:n})=>t===this.id&&n===e)).map((e=>this.flow.getNode(e.endId)))}setPos(e){const{pos:t}=this,{x:n,y:o}=e;this.flow.moveNode({nodeId:this.id,dx:n-t.x,dy:o-t.y})}putInCenter(e){const{width:t,height:n}=e;this.setPos({x:t/3,y:n/3})}update(e){const t=w.merge(this.nodeState,e);Object.assign(this.nodeState,t)}}class q{constructor(e){this.nodes={},this.distanceToConnect=100,this.distanceToDisconnect=0,this.state=e;const{drawflow:t}=this.state;Object.keys(t).map((e=>this.nodes[Number(e)]=new Y(Number(e),this)))}get heads(){return Object.entries(this.nodes).filter((([,e])=>!e.parent)).map((e=>e[1]))}getNode(e){const t=this.nodes[e];if(void 0===t)throw new Error(`Cannot get node with id: ${e}. Node is not present in flow array of nodes`);return t}align(){return this.setLaneNumbers(),this.heads.forEach(((e,t)=>{e.alignChildren()})),this.state.drawflow}alignAll(){const{time:e,timeEnd:t}=console;e("Align"),this.state.drawflow=new q(JSON.parse(JSON.stringify(this.state))).align(),t("Align")}addConnection(e){let{startId:t,startPort:n,endId:o,endPort:r}=e;const i=this.getNode(o),l=this.getNode(t),s=2===n;if(i.parent||!1===l.nodeState.visible)return!1;const a=i.flowLine;if((s||l.isSub)&&(!a||a.hasSubnodes))return!1;let d=null;if(s&&l.subnodes.length){if(!1===l.nodeState.subnodesVisibility){t=l.subnodes[l.subnodes.length-1].id,n=1,this.state.connections.push({startId:t,startPort:n,endId:o,endPort:r,visible:!0});const{flowLineNodes:e}=a;return void e.forEach((e=>e.toggleVisibility(!1)))}d=l.subnodes[0]}if(l.isSub&&l.out1.length&&(d=l.out1[0]),null!==d){const e=this.state.connections.find((e=>e.startId===t&&e.startPort===n&&e.endId===d.id&&1===e.endPort)),o=this.state.connections.indexOf(e);this.state.connections.splice(o,1);const{flowLineNodes:r}=a,i=r[r.length-1];this.state.connections.push({startId:i.id,startPort:1,endId:d.id,endPort:1,visible:!0})}this.state.connections.push({startId:t,startPort:n,endId:o,endPort:r,visible:!0})}moveNode({dx:e,dy:t,nodeId:n}){this.state.drawflow[n].pos.x+=e,this.state.drawflow[n].pos.y+=t}dragNode({dx:e,dy:t,nodeId:n}){this.moveNode({dx:e,dy:t,nodeId:n}),this.toggleAvailablePortToConnect(n)}toggleAvailablePortToConnect(e){const t=Date.now();if(this.state.computing&&t-this.state.computing<100)return;if(this.state.computing=t,!this.state.config.drag)return;const n=this.getNode(e),o=n.head;if(n.parentConnection){const e=this.state.connections.indexOf(n.parentConnection);this.state.connections.splice(e,1),this.alignAll()}const r=n.portInPos;if(!r)return;let i=null;Object.entries(this.nodes).filter((([,e])=>e.head!==o&&!1!==e.nodeState.visible)).forEach((([t,n])=>{Number(t)!==e&&n.outPorts.forEach((e=>{const{pos:t}=e,n=Math.hypot(r.x-t.x,r.y-t.y);n<this.distanceToConnect&&(null===i||n<i.distance)&&(i={port:e,distance:n})}))})),this.state.portToConnect=null!==i?i.port:void 0}setLaneNumbers(){let e=this.heads;for(e.forEach((e=>e.update({head:e.id,lane:0})));e.length;){const t=[];e.forEach((e=>{let n=e.lane+1;const{subnodes:o,head:r}=e;if(void 0===r)return void console.error("head is undefined in setLaneNumbers");if(o.length)for(const t of o)t.update({lane:n++,head:r});const i=e.children(1);i.forEach((e=>e.update({head:r,lane:n}))),t.push(...i)})),e=t}this.heads.forEach((e=>{const{head:t}=e;for(let n=0,o=0,r=[e];r.length;++n)r=Object.values(this.nodes).filter((e=>e.lane===n&&e.head===t)),r.forEach((e=>{e.update({positionNumber:o++})}))}))}}const G={nodeId:1,canvasDrag:!1,config:{drag:!1,connectionsLabelEnable:!1,canvasTranslate:{x:0,y:0},zoom:{value:1,max:2,min:.5,tick:.1}},drawflow:{},connections:[],connectionsLabel:{},ports:[],select:null,newPathDirection:null,modalType:null,editLock:!1,mouseBlockDragPos:{clientX:void 0,clientY:void 0}},R=(e,{payload:t})=>{const n=w.merge(e,t);A(n).forEach((t=>{e[t]=n[t]}))},U=b({name:n.Drawflow,initialState:G,reducers:{setState:R,setEditLock:(e,{payload:t})=>{e.editLock=t},align:e=>{new q(e).alignAll()},moveNode:(e,t)=>{new q(e).dragNode(t.payload)},setMouseBlockDragPos:(e,{payload:t})=>{e.mouseBlockDragPos=t},unSelect:e=>{e.config.drag=!1,e.select=null},select:(e,{payload:t})=>{e.config.drag="node"===t.type,e.select=t},selectPort:(e,{payload:t})=>{const n=e.ports.find((({nodeId:e,portId:n,type:o})=>o===t.type&&n===t.portId&&e===t.nodeId));if(!n)return void console.error("Cannot find port to select in state.ports");const o=e.ports.indexOf(n);e.select={type:t.type,selectId:o}},moveCanvas:(e,{payload:{movementX:t,movementY:n}})=>{e.canvasDrag&&(e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=n)},canvasDrag:(e,{payload:t})=>{e.canvasDrag=t},canvasMouseMove:(e,{payload:{movementX:t,movementY:n,clientX:o,clientY:r}})=>{var i;if(e.clientCurrentMousePos={clientX:o,clientY:r},e.canvasDrag)e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=n;else if((null==(i=e.select)?void 0:i.type)===l.out)e.newPathDirection={clientX:o,clientY:r};else if(e.config.drag&&e.select){const t=e.select.selectId,{clientX:n,clientY:i}=e.mouseBlockDragPos;e.mouseBlockDragPos={clientX:o,clientY:r};const l=e.config.zoom.value,s=(o-n)/l,a=(r-i)/l;new q(e).dragNode({nodeId:t,dy:a,dx:s})}},canvasMouseUp:e=>{var t,n;const o=new q(e);if(e.portToConnect&&(null==(t=e.select)?void 0:t.selectId)){const{nodeId:t,portId:n}=e.portToConnect,r=e.select.selectId,i=1;o.addConnection({startId:t,startPort:n,endId:r,endPort:i})}e.portToConnect=void 0,e.newPathDirection=null,e.canvasDrag=!1,e.config.drag=!1,(null==(n=e.select)?void 0:n.type)===l.out&&(e.select=null),o.alignAll()},updateNode:(e,{payload:t})=>{const n=t.this_node_unique_id;e.drawflow[n].data=t},deleteNode:e=>{const{connections:t,drawflow:n,ports:o,select:r}=e;if("node"!==(null==r?void 0:r.type))return;const{selectId:i}=r;let l=t.length;for(;l--;){const{endId:e,startId:n}=t[l];[n,e].includes(i)&&(t.splice(l,1),console.log(v(t)))}let s=o.length;for(;s--;){const{nodeId:e}=o[s];e===i&&o.splice(s,1)}delete n[i],e.select=null,console.log("GGG")},deletePath:e=>{const{connections:t,select:n}=e;"path"===(null==n?void 0:n.type)&&(console.log("delete"),t.splice(n.selectId,1))},load:(e,{payload:{drawflow:t,connections:n}})=>{Object.assign(e,G),e.drawflow=t,e.nodeId=Math.max(...Object.keys(t).map(Number))+1,e.connections=n},portMouseUp:(e,{payload:{nodeId:t,portId:n,PortType:o}})=>{const{select:r}=e;if(o!==l.in||!r)return;const i=e.ports[r.selectId],s=t,a=n,d=i.nodeId,c=i.portId;if(d===s)return;new q(e).addConnection({startId:d,startPort:c,endId:s,endPort:a})},clear:()=>G,pushPorts:(e,{payload:t})=>{if(0===t.length)return;const{nodeId:n}=t[0];e.ports=e.ports.filter((e=>e.nodeId!==n)),e.ports.push(...t)},zoom:(e,{payload:t})=>{const{zoom:n}=e.config,{value:o,max:r,min:i,tick:l}=n,s=o+(t?l:-l);s<=r&&s>=i&&(n.value=s),null===t&&(e.config.canvasTranslate={x:0,y:0},n.value=1)},nodeSize:(e,{payload:{height:t,width:n,id:o}})=>{e.drawflow[o].height=t,e.drawflow[o].width=n},toggleSubnodes:(e,{payload:{id:t}})=>{const n=new q(e);n.getNode(t).toggleSubnodesVisibility(),n.alignAll()},toggleChildren:(e,{payload:{id:t}})=>{const n=new q(e);n.getNode(t).toggleChildrenVisibility(),n.alignAll()},copyNode:e=>{var t;"node"===(null==(t=e.select)?void 0:t.type)&&(e.nodeToCopyId=e.select.selectId)}}}),K=U.actions,H=U.reducer,Q=e=>e.flows[e.version],Z=(e,t)=>{const n=(e.y-t.y)/2,o=e.x-t.x;return`M ${e.x} ${e.y} v ${-n} h ${-o} v ${-n} `},ee=(e,t,n,o)=>{const{x:r,y:i,width:l,height:s}=o;return{x:e*(l/(l*n))-r*(l/(l*n)),y:t*(s/(s*n))-i*(s/(s*n))}};var te,ne;(ne=te||(te={}))[ne.getTemplateNodes=1156]="getTemplateNodes",ne[ne.postTemplateNodes=1157]="postTemplateNodes",ne[ne.getFlowDataVersion=1160]="getFlowDataVersion",ne[ne.postFlowDataVersion=1161]="postFlowDataVersion",ne[ne.getFlow=1162]="getFlow",ne[ne.postFlow=1163]="postFlow",ne[ne.fetchBackgroundImages=1164]="fetchBackgroundImages",ne[ne.getGroups=1154]="getGroups",ne[ne.postGroups=1155]="postGroups",ne[ne.getStepSettingsTemplates=1222]="getStepSettingsTemplates";const oe=async(e,t={})=>{const n=window.location.search,o=new URLSearchParams(n).get("session_id");o||(console.error("session_id is not provided!"),alert("session_id is not provided!"));const r=h({session_id:o,sp_name:"OK",session_exp:"2021-02-12T02:57:45.453422",status:"OK",item_id:0,max_row_per_page:50,search_term:"",search_term_header:"",pagination:1,scrdata_id:e},t);return fetch("https://valerii.educationhost.cloud?csurl=https://tastypoints.io/akm/restapi.php",{method:"post",body:JSON.stringify({input:r}).replace(/'/g,"''")}).then((async e=>{let t=await e.json();if(!t.status||!t.data)throw console.error(t),alert(t),alert(JSON.stringify(t,null,2)),new Error(t);if(t=JSON.parse(t.data),t.response_error)throw console.error(t.response_error),alert(JSON.stringify(t.response_error,null,2)),new Error(t.response_error);if("OK"!==t.status&&"OK"!==t.sp_name)throw alert(JSON.stringify(t,null,2)),new Error(t.response_error);return t}))},re=x("fetchFlow",(async(e,{dispatch:t})=>{const n=await oe(1162,{item_id:25});if(null===n.flows)return void alert("Such flow do not exist or was deleted!");const o=n.flows[0];t(_e.setStateAction({flowInfo:o}))})),ie=x("fetchFlow",(async(e,{getState:t})=>{const{flowInfo:n}=t();if(!n)return void console.error("Cannot save flow, data is not available");"OK"===(await oe(1163,{item_id:25,flows:[n]})).status?alert("Saved"):alert("Cannot save flow")})),le=x("fetchGroups",(async()=>{const e=await oe(1154),{flow_nodes_group:t}=e;return t.reduce(((e,t)=>(e[t.id]=t,e)),{})})),se=x("updateGroup",(async(e,{dispatch:t})=>{var n;"delete"in e||(e.delete=0);const o=await oe(1155,{flow_nodes_group:[e],item_id:null!=(n=e.id)?n:0});"OK"===o.status?(t(le()),e.id||(e.id=o.item_id),alert(`Group ${e.id} updated`)):alert(`Error: cannot ${e.id?"update":"create"} group ${e.node_group_name}`)})),ae=x("fetchTemplateNodes",(async()=>{const{flow_nodes:e}=await oe(1156,{});return e})),de=x("updateTemplateNode",(async(e,{dispatch:t})=>{var n;console.log({templateNode:e}),"delete"in e||(e.delete=0);const o=await oe(1157,{flow_nodes:[e],item_id:null!=(n=e.nodes_id)?n:0});console.log({resp:o}),"OK"===o.status?(t(ae()),e.nodes_id||(e.nodes_id=o.item_id,t(Ee({windowConfig:{id:e.nodes_id,mainId:B.templateNodeSettings}}))),alert(`TemplateNode ${e.nodes_id} updated`),1===e.delete&&t(Ee({windowConfig:{mainId:B.mainFlow}}))):alert(`Error: cannot ${e.nodes_id?"update":"create"} templateNode ${e.name}, ID: ${e.nodes_id}`)})),ce=x("fetchFlowVersion",(async e=>{const t=(await oe(1160,{item_id:25,show_ver:e})).flow_steps;return null===t?null:t.filter((({update_version:t})=>t===e||0===e))})),ue=x("postFlowVersion",(async(e,{getState:t,dispatch:n})=>{const o=t(),r=o.flows[o.version],i=new q(r),{drawflow:l}=r,s=Object.values(JSON.parse(JSON.stringify(l))).map((e=>{const{subnodes:t}=i.getNode(e.id),{data:n}=e;return n.flow_node={},["name","description","icon_link_selected"].forEach((e=>{n.flow_node[`node_${e}`]=n[e],delete n[e]})),n.flow_node.node_tooltip=n.nodes_tooltip,delete n.nodes_tooltip,f(h(h({},n),((e,t)=>{var n,o;const r=new q(e).getNode(t),{nodeState:i}=r;return{node_position:i.positionNumber,flow_lane_id:i.lane,flow_step_x:Math.round(i.pos.x),flow_step_y:Math.round(i.pos.y),prev_node_unique_id:null!=(o=null==(n=r.parent)?void 0:n.id)?o:null,this_node_unique_id:r.id}})(r,e.id)),{node_attributes:t.map((({id:e})=>e))})}));if(0===s.length)return void alert("Please add at least one node in flow to allow commit!");console.log(s);const a=await oe(1161,{item_id:25,flow_steps:s});"OK"!==a.status||"OK"!==a.sp_name?(console.error(a),alert(JSON.stringify(a))):(alert("Flow successfully updated."),n(ce(0)))})),pe=x("initFlow",(async(e,{dispatch:t})=>{t(ce(0))})),me=x("changeVersion",(async(e,{dispatch:t,getState:n})=>{const{flows:o}=n();return o[e]?e:void t(ce(e))})),ge=e=>{const t=JSON.parse(JSON.stringify(e));return t.id_nodes=t.nodes_id,["order","active","icon_link","nodes_group_id","nodes_id"].forEach((e=>delete t[e])),t},he={node_settings_json:"Settings JSON",node_response_settings_json:"Response JSON",node_object_lists:"Object list",node_attributes:"Node attributes"},fe=e=>"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1),we=_("addNewNode"),be=_("dragTemplate"),ve=_("canvasShapeUpdated"),xe=_("insertCopiedNode"),ye=_("toggleSidebar"),Ee=_("setState"),_e={setStateAction:Ee},ke=E({reducer:y({version:0,flows:[G],templates:[],dragTemplate:0,groups:{},windowConfig:{id:0,mainId:B.mainFlow,sideId:J.none,background:{opacity:0,blur:0,imageUrl:""}}},(t=>{t.addCase(Ee,R).addCase(xe,(e=>{const t=Q(e);if(void 0===t.nodeToCopyId)return;const{clientX:n,clientY:o}=t.clientCurrentMousePos,r=JSON.parse(JSON.stringify(t.drawflow[t.nodeToCopyId]));e.canvas?(r.pos=ee(n,o,t.config.zoom.value,e.canvas),t.drawflow[t.nodeId]=f(h({},r),{id:t.nodeId,height:0,width:0}),++t.nodeId):console.error("Canvas shape is not available")})).addCase(me.fulfilled,((e,{payload:t})=>{void 0!==t&&(e.version=t)})).addCase(ye,(e=>{var t;e.sidebarVisible=!(null==(t=e.sidebarVisible)||t)})).addCase(we,((t,{payload:{clientX:n,clientY:o}})=>{const r=t.flows[t.version],i=t.templates.find((({nodes_id:e})=>e===t.dragTemplate));if(!t.dragTemplate)return;if(!t.canvas)return void console.error("Canvas shape is not available");if(!i)return void console.error("Template node not found");const l={id:0,type:e.MIDDLE,data:ge(i),port:{in:1,out:2},pos:{x:0,y:0},isSub:!1,height:0,width:0};l.pos=ee(n,o,r.config.zoom.value,t.canvas),r.mouseBlockDragPos={clientX:n,clientY:o},r.drawflow[r.nodeId]=f(h({},l),{id:r.nodeId,height:0,width:0}),r.select={type:"node",selectId:r.nodeId++},r.config.drag=!0,t.dragTemplate=void 0})).addCase(be,((e,{payload:t})=>{e.dragTemplate=t})).addCase(ve,((e,{payload:t})=>{e.canvas=t})).addCase(ae.fulfilled,((e,{payload:t})=>{e.templates=t})).addCase(ce.fulfilled,((t,{payload:o})=>{if(!o||0===o.length)return;console.log(o),t.version=o[0].update_version;const r={},i=[],l={},s={};o.forEach((e=>{var t;null==(t=e.node_attributes)||t.forEach(((t,n)=>{l[t]=e.this_node_unique_id,0===n&&(s[t]=!0)}))})),o.forEach((t=>{var n,o;const{this_node_unique_id:a,prev_node_unique_id:d}=t,c=void 0!==l[a];null!==d&&i.push({startId:c?d:null!=(n=l[d])?n:d,endId:a,startPort:s[a]?2:1,endPort:1,visible:!0}),r[a]={id:a,height:0,width:0,type:e.MIDDLE,isSub:c,port:{out:c?1:2,in:1},pos:{x:0,y:0},data:t},["name","description","icon_link_selected"].forEach((e=>{var n;const o=`node_${e}`;t[e]=null==(n=t.flow_node)?void 0:n[o]})),t.nodes_tooltip=(null==(o=t.flow_node)?void 0:o.node_tooltip)||"",delete t.flow_node})),t.flows[t.version]=H(t.flows[t.version],{type:n.Drawflow+"/load",payload:{drawflow:r,connections:i}});const a=new q(JSON.parse(JSON.stringify(t.flows[t.version]))),{heads:d}=a;if(!t.canvas)return void console.error("Canvas not initialized");const{height:c,width:u}=t.canvas;d[0].setPos({x:u/3,y:c/10}),t.flows[t.version]=a.state})).addCase(le.fulfilled,((e,{payload:t})=>{e.groups=t})).addMatcher((e=>e.type.startsWith(n.Drawflow)),((e,t)=>{e.flows[e.version]=H(e.flows[e.version],t)}))}))});ke.getState;const Se=()=>k(),Ce=S;function Ie(e,t){const[n,o]=C.exports.useState((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.log(n),t}}));return[n,t=>{try{const r=t instanceof Function?t(n):t;o(r),window.localStorage.setItem(e,JSON.stringify(r))}catch(r){console.log(r)}}]}const Ne=I.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`,De=I.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
`,Pe=()=>{const e=Ce((e=>Q(e).editLock)),t=Se();return N.createElement(Ne,null,!e&&N.createElement(De,null,"Clear"),N.createElement(De,{onClick:()=>t(K.setEditLock(!e))},e?"UnLock":"Lock"))},Oe=I.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`,Me=I.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  padding: 3px 10px;
`,je=()=>{const e=Se();return N.createElement(Oe,null,N.createElement(Me,{onClick:()=>e(K.zoom(!0))},"+"),N.createElement(Me,{onClick:()=>e(K.zoom(!1))},"-"),N.createElement(Me,{onClick:()=>e(K.zoom(null))},"reset"))},Le=D(P,w.isEqual),Te=I.svg`
  position: absolute;
  overflow: visible;
`,ze=I.path`
  :hover {
    stroke-width: 6px;
    stroke: purple;
    cursor: pointer;
  }

  fill: none;
  stroke-width: 6px;
  stroke: steelblue;
  ${({selected:e})=>e&&O`
      stroke-width: 7px;
      stroke: red;
    `};
`,$e=e=>{const{id:t,d:n}=e,o=(e=>Ce(C.exports.useMemo((()=>Le((t=>{if(void 0===e)return!1;const n=Q(t).select;return"path"===(null==n?void 0:n.type)&&n.selectId===e}),(e=>e))),[e])))(t),r=Se();return N.createElement(Te,null,N.createElement(ze,{selected:o,d:n,onMouseDown:e=>{void 0!==t&&(e.stopPropagation(),r(K.select({type:"path",selectId:t})))}}))},Ve=()=>{var e;const t=null!=(e=Ce(C.exports.useMemo((()=>Le((e=>{const t=Q(e);if(!t.select||t.select.type!==l.out||!t.newPathDirection)return void console.error("Cannot draw new path!");const n=t.ports[t.select.selectId];if(!n)return void console.error("No start port in newPath");const o=n.pos;if(!e.canvas)return void console.error("Canvas shape is not available");const{clientX:r,clientY:i}=t.newPathDirection,s=ee(r,i,t.config.zoom.value,e.canvas);return Z(o,s)}),(e=>e))),[])))?e:"";return N.createElement($e,{d:t})},Fe=e=>N.createElement("svg",f(h({},e),{viewBox:"0 0 16 16",fill:"none"}),N.createElement("path",{d:"M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),N.createElement("path",{d:"M14.0016 13.9996L11.1016 11.0996",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),Ae=e=>N.createElement("svg",f(h({},e),{viewBox:"0 0 10 14",fill:"none"}),N.createElement("path",{d:"M8 2L2.18437 6.84636C2.08842 6.92631 2.08842 7.07369 2.18437 7.15364L8 12",stroke:"#393C44",strokeWidth:"2.5",strokeLinecap:"round"})),Be=e=>N.createElement("svg",f(h({},e),{viewBox:"0 0 1792 1792"}),N.createElement("path",{fill:"#217CE8",d:"M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z"})),We=e=>N.createElement("svg",f(h({},e),{viewBox:"0 0 19 19",fill:"none"}),N.createElement("path",{d:"M14.25 4.75L4.75 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),N.createElement("path",{d:"M4.75 4.75L14.25 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),Je=e=>N.createElement("svg",f(h({},e),{enableBackground:"new 0 0 512 512",viewBox:"0 0 512 512"}),N.createElement("g",null,N.createElement("path",{d:"m482.16 288.51 29.84-4.68v-55.66l-29.84-4.68c-24.56-4.14-33.19-36.67-13.99-52.45l22.52-18.55-27.71-47.98-27.56 10.32c-23.33 8.74-47-14.9-38.25-38.25l10.32-27.56-47.98-27.71-18.55 22.52c-15.75 19.16-48.3 10.61-52.45-13.99l-4.68-29.84h-55.66l-4.68 29.84c-4.17 24.56-36.67 33.19-52.45 13.99l-18.55-22.52-47.98 27.71 10.32 27.56c8.74 23.33-14.9 47-38.25 38.25l-27.56-10.32-27.71 47.98 22.52 18.55c19.12 15.74 10.67 48.29-13.99 52.45l-29.84 4.68v55.66l29.84 4.68c24.46 4.15 33.26 36.59 13.99 52.45l-22.52 18.55 27.71 47.98 27.56-10.32c23.22-8.7 47.04 14.81 38.25 38.25l-10.32 27.56 47.98 27.71 18.55-22.52c15.73-19.11 48.27-10.67 52.45 13.99l4.68 29.84h55.66l4.68-29.84c4.12-24.4 36.56-33.3 52.45-13.99l18.55 22.52 47.98-27.71-10.32-27.56c-8.7-23.22 14.81-47.04 38.25-38.25l27.56 10.32 27.71-47.98-22.52-18.55c-19.16-15.76-10.61-48.28 13.99-52.45zm-226.16 92.49c-68.93 0-125-56.07-125-125s56.07-125 125-125 125 56.07 125 125-56.07 125-125 125z",fill:"#7ed8f6"}),N.createElement("path",{d:"m468.17 340.96 22.52 18.55-27.71 47.98-27.56-10.32c-23.44-8.79-46.95 15.03-38.25 38.25l10.32 27.56-47.98 27.71-18.55-22.52c-15.89-19.31-48.33-10.41-52.45 13.99l-4.68 29.84h-27.83v-131c68.93 0 125-56.07 125-125s-56.07-125-125-125v-131h27.83l4.68 29.84c4.15 24.6 36.7 33.15 52.45 13.99l18.55-22.52 47.98 27.71-10.32 27.56c-8.75 23.35 14.92 46.99 38.25 38.25l27.56-10.32 27.71 47.98-22.52 18.55c-19.2 15.78-10.57 48.31 13.99 52.45l29.84 4.68v55.66l-29.84 4.68c-24.6 4.17-33.15 36.69-13.99 52.45z",fill:"#6aa9ff"}),N.createElement("path",{d:"m256 121c-74.44 0-135 60.56-135 135s60.56 135 135 135 135-60.56 135-135-60.56-135-135-135zm0 210c-41.35 0-75-33.64-75-75s33.65-75 75-75 75 33.64 75 75-33.65 75-75 75z",fill:"#6aa9ff"}),N.createElement("path",{d:"m391 256c0 74.44-60.56 135-135 135v-60c41.35 0 75-33.64 75-75s-33.65-75-75-75v-60c74.44 0 135 60.56 135 135z",fill:"#4895ff"}))),Xe=e=>N.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},e),N.createElement("g",{transform:"matrix(1.06642 0 0 1.06642 -1.03 -1106.225)"},N.createElement("circle",{cx:"8.467",cy:"1044.829",r:"5.626",fill:"#c2e4f8"}),N.createElement("path",{fill:"#249fe6",fillRule:"evenodd",style:{lineHeight:"normal",textIndent:0,textAlign:"start",textDecorationLine:"none",textDecorationStyle:"solid",textDecorationColor:"#000",textTransform:"none",isolation:"auto",mixBlendMode:"normal"},d:"M 8 1 C 4.139959 1 1.0000428 4.1398846 1 8 C 0.99997942 11.860115 4.1399146 15 8 15 C 11.860086 15 15.00002 11.860115 15 8 C 14.999957 4.1398846 11.860041 1 8 1 z M 8 2 C 11.319604 2 13.999963 4.6803455 14 8 C 14.000018 11.319654 11.319644 14 8 14 C 4.6803565 14 1.9980292 11.319654 1.9980469 8 C 1.9980837 4.6803455 4.6803952 2 8 2 z M 7.9863281 4.0039062 A 0.50005001 0.50005001 0 0 0 7.4941406 4.5117188 L 7.5 7.5039062 L 4.5039062 7.5097656 A 0.50095123 0.50095123 0 0 0 4.5058594 8.5117188 L 7.5 8.5058594 L 7.5058594 11.5 A 0.50005001 0.50005001 0 1 0 8.5058594 11.5 L 8.5019531 8.5039062 L 11.494141 8.4980469 A 0.50005001 0.50005001 0 1 0 11.492188 7.4980469 L 8.5 7.5039062 L 8.4960938 4.5117188 A 0.50005001 0.50005001 0 0 0 7.9863281 4.0058594 L 7.9863281 4.0039062 z ",color:"#000",fontFamily:"sans-serif",fontWeight:400,overflow:"visible",transform:"matrix(.93772 0 0 .93772 .965 1037.328)"}))),Ye=e=>N.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 3",fill:"none"},e),N.createElement("circle",{cx:"1.2",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),N.createElement("circle",{cx:"5.9998",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),N.createElement("circle",{cx:"10.7996",cy:"1.2",r:"1.2",fill:"#C5C5D0"})),qe=I.button`
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
`,Ge=I.div`
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
`,Re=I.img`
  max-height: 100%;
  max-width: 100%;
`,Ue=I.span``,Ke=e=>{const{nodes_id:t,order:n}=e,o=Se(),r=C.exports.useRef(null),i=Ce((e=>e.precanvas));return N.createElement(Ge,{style:{order:n},ref:r,onMouseDown:e=>{if(void 0===be)return;o(be(t));const{current:n}=r;if(!n)return void console.error("No node to copy");const{left:l,top:s}=n.getBoundingClientRect(),a=e.clientX-l,d=e.clientY-s,c=n.cloneNode(!0);c.style.position="absolute",c.style.left=l+window.scrollX+"px",c.style.top=s+window.scrollY+"px",document.body.appendChild(c);const u=e=>{var t;const{clientX:n,clientY:o}=e;if(i){if(n>=i.x&&o>=i.y)return document.removeEventListener("mousemove",u),void(null==(t=c.parentNode)||t.removeChild(c));c.style.left=n-a+window.scrollX+"px",c.style.top=o-d+window.scrollY+"px"}else console.error("Canvas is not ready! Cannot drag template")};document.addEventListener("mousemove",u),document.addEventListener("mouseup",(()=>{var e;document.removeEventListener("mousemove",u),null==(e=c.parentNode)||e.removeChild(c),o(be(void 0))}),{once:!0});const{height:p,width:m}=getComputedStyle(n);c.style.height=p,c.style.width=m}},N.createElement(Re,{src:e.icon_link}),N.createElement(Ue,null,e.name),N.createElement(qe,{onMouseDown:()=>{o(Ee({windowConfig:{id:t,mainId:B.templateNodeSettings}}))}},N.createElement(Ye,{height:3,width:12})))},He=I.div`
  max-height: 100%;
  overflow: hidden;
`,Qe=e=>{const t=Se();return N.createElement(He,null,N.createElement("div",null,e.id),e.data.description,N.createElement(qe,{onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(Ee({windowConfig:{id:e.id,mainId:B.nodeSettings}}))}},N.createElement(Ye,{height:3,width:12})))},Ze={width:100,height:60,padding:"0 0.5em"},et={width:200},tt=I.div`
  width: 15px;
  height: 15px;
  border-radius: 60px;
  background-color: #217ce8;
  opacity: ${({visible:e})=>e?1:0};
  transform: scale(${({visible:e})=>e?1:0});
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
`,nt=I.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
`,ot=I(nt)`
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&O`
      left: 100%;
      top: 50%;
    `}
`,rt=I(nt)`
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&O`
      display: none;
    `}
`,it=I(nt)`
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  ${({isSub:e})=>e&&O`
      left: 0;
      top: 50%;
    `}
`,lt={[l.in]:[it],[l.out]:[ot,rt]},st=e=>{const{nodeId:t,portId:n,type:o}=e,r=Se(),i=(l=e,Ce(C.exports.useMemo((()=>Le((e=>{const{portToConnect:t}=Q(e);if(void 0===t)return!1;const n=JSON.parse(JSON.stringify(t));return delete n.pos,w.isEqual(l,n)}),(e=>e))),[l])));var l;const s=(a=t,Ce(C.exports.useMemo((()=>Le((e=>Q(e).drawflow[a].isSub),(e=>e))),[a])));var a;const d=lt[o][n-1];return N.createElement(d,{isSub:s,onMouseDown:e=>{e.stopPropagation(),r(K.selectPort({type:o,nodeId:t,portId:n}))},onMouseUp:()=>{r(K.portMouseUp({nodeId:t,portId:n,PortType:o}))}},N.createElement(tt,{visible:i}))},at=e=>{const{id:t,port:n,type:o}=e,r=[];for(let i=1;i<=n[o];i++)r.push(N.createElement(st,{key:i,nodeId:t,portId:i,type:o}));return N.createElement("div",{className:`${o}puts`},r)},dt=I.div`
  display: inline-block;
  position: absolute;
  padding: 5px;
  width: 200px;
  min-height: 60px;
  background-color: #d3d3d3;
  z-index: 1;
  cursor: move;

  ${({selected:e})=>e&&O`
      box-shadow: 0 2px 15px 2px #cacaca;
      z-index: 2;
    `};
`,ct=({id:e})=>{const t=Ce(C.exports.useMemo((()=>Le((e=>Q(e).config.drag),(e=>e))),[])),n=Ce((e=>Q(e).nodeId)),o=(e=>Ce(C.exports.useMemo((()=>Le((t=>Q(t).drawflow[e].pos),(e=>e))),[e])))(e),r=(e=>Ce(C.exports.useMemo((()=>Le((t=>{const n=Q(t).select;return(null==n?void 0:n.selectId)===e&&"node"===n.type}),(e=>e))),[e])))(e),i=Se(),s=C.exports.useRef(null),a=(e=>Ce(C.exports.useMemo((()=>Le((t=>{const n=JSON.parse(JSON.stringify(Q(t).drawflow[e]));return delete n.pos,n}),(e=>e))),[e])))(e),{port:d}=a;return C.exports.useEffect((()=>{if(s.current){const{offsetHeight:t,offsetWidth:n}=s.current;i(K.nodeSize({height:t,width:n,id:e}))}}),[i,e,a]),C.exports.useEffect((()=>{const t=(t,n)=>Array.from(n.querySelector(`.${t}puts`).children).map(((n,r)=>{const i=parseInt(getComputedStyle(n).left)+o.x,l=parseInt(getComputedStyle(n).top)+o.y;return{nodeId:e,pos:{x:i,y:l},portId:r+1,type:t}}));if(s.current){const e=t(l.in,s.current),n=t(l.out,s.current);i(K.pushPorts([...e,...n]))}}),[i,e,o]),C.exports.useEffect((()=>{if(s.current&&n-1===e&&t){const{offsetHeight:t,offsetWidth:n}=s.current;i(K.moveNode({nodeId:e,dx:.2*-n,dy:.2*-t}))}}),[]),N.createElement(dt,{selected:r,ref:s,style:h({left:o.x,top:o.y},a.isSub?Ze:et),isSub:a.isSub,onMouseDown:t=>{t.stopPropagation();const{clientX:n,clientY:o}=t;i(K.select({type:"node",selectId:e})),i(K.setMouseBlockDragPos({clientX:n,clientY:o}))},onContextMenu:()=>{},onDoubleClick:()=>{}},N.createElement(Qe,h({},a)),!a.isSub&&N.createElement(N.Fragment,null,N.createElement("button",{onMouseDown:t=>{t.preventDefault(),i(K.toggleSubnodes({id:e})),t.stopPropagation()}},"toggle sub"),N.createElement("button",{onMouseDown:t=>{t.preventDefault(),i(K.toggleChildren({id:e})),t.stopPropagation()}},"toggle children")),N.createElement(at,{id:e,port:d,type:l.in}),N.createElement(at,{id:e,port:d,type:l.out}))},ut=()=>{const e=Ce(C.exports.useMemo((()=>Le((e=>{const{drawflow:t}=Q(e);return Object.entries(t).filter((([e,{visible:t}])=>!1!==t)).map((([e])=>Number(e)))}),(e=>e))),[]));return N.createElement(N.Fragment,null,e.map((e=>N.createElement(ct,{key:e,id:e}))))},pt=({id:e})=>{const t=(n=e,Ce(C.exports.useMemo((()=>Le((e=>{var t,o;const r=Q(e),{startId:i,startPort:s,endId:a,endPort:d}=r.connections[n],c=null==(t=r.ports.find((e=>e.nodeId===i&&e.portId===s&&e.type===l.out)))?void 0:t.pos,u=null==(o=r.ports.find((e=>e.nodeId===a&&e.portId===d&&e.type===l.in)))?void 0:o.pos;return c&&u?Z(c,u):""}),(e=>e))),[n])));var n;return N.createElement($e,{key:e,id:e,d:t})},mt=()=>{const e=Ce(C.exports.useMemo((()=>Le((e=>{const{connections:t}=Q(e);return t.reduce(((e,t,n)=>(t.visible&&e.push(n),e)),[])}),(e=>e))),[])).map((e=>N.createElement(pt,{key:e,id:e})));return N.createElement(N.Fragment,null,e)};const gt=I.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-image: url(${"/Drawflow-react/assets/tile.07d222ee.png"});
  background-repeat: repeat;
  background-size: 30px 30px;
`,ht=I.div`
  width: 100%;
  height: 100%;
  position: relative;
`,ft=(e,t,n,o)=>{var r;const[i,l]=(null==(r=getComputedStyle(e).transform.match(/^matrix\((.+)\)$/))?void 0:r[1].split(",").slice(-2).map(Number))||[0,0];e.style.transform=`translate(${i+t}px, ${l+n}px) scale(${o})`},wt=I.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`,bt=I.button`
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
`,vt=()=>{(()=>{const e=Se(),[t]=Ie(r.backgroundOpacity,50),[n]=Ie(r.backgroundBlur,50),[o]=Ie(r.backgroundImageUrl,"");C.exports.useEffect((()=>{e(Ee({windowConfig:{background:{opacity:t,blur:n,imageUrl:o}}}))}),[])})();const e=Ce(C.exports.useMemo((()=>Le((e=>{const t=Q(e),{config:{zoom:n},newPathDirection:o,canvasDrag:r}=t;return{config:{zoom:n},newPathDirection:o,canvasDrag:r}}),(e=>e))),[])),{config:{zoom:t},newPathDirection:n,canvasDrag:o}=e,i=Se(),l=C.exports.useRef(null),s=C.exports.useRef(null);C.exports.useEffect((()=>{i(K.align())}),[]),C.exports.useEffect((()=>{const{current:e}=l;e&&ft(e,0,0,t.value)}),[o,t.value]),C.exports.useEffect((()=>{const{current:e}=l;if(e){const t=e.getBoundingClientRect(),n={x:t.x,y:t.y,width:e.clientWidth,height:e.clientHeight};i(ve(n))}const{current:t}=s;if(t){const e=t.getBoundingClientRect(),n={x:e.x,y:e.y,width:t.clientWidth,height:t.clientHeight};i(Ee({precanvas:n}))}}));const{opacity:a,blur:d,imageUrl:c}=Ce((e=>e.windowConfig.background));return N.createElement(gt,{ref:s,className:"drawflow",tabIndex:0,onKeyDownCapture:e=>{"Delete"===e.key&&(i(K.deletePath()),i(K.deleteNode())),e.ctrlKey&&"c"===e.key&&i(K.copyNode()),e.ctrlKey&&"v"===e.key&&i(xe())},onMouseDown:()=>{i(K.canvasDrag(!0)),i(K.unSelect())},onMouseUp:()=>i(K.canvasMouseUp()),onMouseMove:e=>{const{clientX:n,clientY:r,movementX:s,movementY:a}=e,{current:d}=l;o&&d&&ft(d,s,a,t.value),i(K.canvasMouseMove({clientX:n,clientY:r,movementX:s,movementY:a}))},onMouseEnter:e=>{const{clientX:t,clientY:n}=e;i(we({clientX:t,clientY:n}))},style:{backgroundColor:`rgba(251, 251, 251, ${a}%)`}},N.createElement(wt,{style:{backgroundImage:`url(${c})`,filter:`blur(${d/10}px)`}}),N.createElement(Pe,null),N.createElement(je,null),N.createElement(bt,{onClick:e=>{e.preventDefault(),i(ue())}},"Commit"),N.createElement(ht,{ref:l,style:{}},N.createElement(ut,null),N.createElement(mt,null),n&&N.createElement(Ve,null)))};const xt=I.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, max-content));
  grid-auto-rows: minmax(1em, auto);
  grid-gap: 1em;
  background-color: #f5f5f5;

  overflow-y: auto;
  max-height: calc(100vh - 55px);
  &:after {
    grid-column: span 3;
    //background-color: red;
    height: 0.1em; /* 3em (desired padding effect) minus 1em (grid-gap setting) */
    content: "";
    order: 999;
  }
`,yt=I(Ge)`
  /* min-height: 5em; */
  padding: 25px;
  order: 998;

  :hover {
    cursor: pointer;
  }
`,Et=e=>{const t=Ce((e=>e.templates)),n=Se(),{searchWord:o,selectedGroup:r}=e,i=o.toLowerCase().split(" ").filter((e=>e.length>0));return N.createElement(xt,null,t.map((e=>{const t=JSON.stringify(e,null,2);return(0===r||e.nodes_group_id===r)&&(i.find((e=>t.toLowerCase().includes(e)))||!i.length)&&N.createElement(Ke,h({key:e.nodes_id},e))})),N.createElement(yt,{onClick:()=>n(de(f(h({},{flow_node_type_id:0,nodes_id:0,node_scrdata_id:0,flow_action_scrdata_id:0,order:0,nodes_group_id:0,name:"**",description:"**",icon_link:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",icon_link_selected:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:0,execute_node_specific_date_time:"2020-11-11T19:30",loop_cycles:0,node_settings_json:{},node_response_settings_json:{},loop_cycle_reached_jump_to_node:0,node_attributes:[],node_object_lists:{},node_story:"Node story"}),{order:Math.max(...t.map((e=>e.order)))+1})))},N.createElement(Xe,null)))},_t=I.div`
  width: 300px;
  order: -2;
  max-height: calc(100vh + 40px);
`,kt=I.div`
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
`,St=I.div`
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

  ${({selected:e})=>e&&O`
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
`,Ct=({selectedGroup:e,setSelectedGroup:t})=>{Se();const n=Ce((e=>e.groups));return N.createElement(kt,null,N.createElement(St,{key:0,selected:0===e,onClick:()=>t(0)},"All"),Object.values(n).map((({id:n,node_group_name:o,node_group_order:r})=>N.createElement(St,{key:n,selected:n===e,onClick:()=>t(n)},o))))},It=I.input`
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
`,Nt=I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-top: 10px;
`,Dt=I.span`
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
`,Pt=I.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,Ot=({setSearchWord:e})=>{const t=Se();return N.createElement(Nt,null,N.createElement(Dt,null,N.createElement(Fe,null)),N.createElement(It,{type:"text",placeholder:"Search templates",onChange:t=>{e(t.target.value)}}),N.createElement(Pt,{onClick:()=>t(Ee({windowConfig:{sideId:J.groupSettings}}))},N.createElement(Je,{height:30})),N.createElement(jt,null))},Mt=I.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  ${({opened:e})=>e&&O`
      transform: rotate(180deg);
    `};
`,jt=e=>{var t;const n=null==(t=Ce((e=>e.sidebarVisible)))||t,o=Se();return N.createElement(Mt,{opened:!n,onClick:()=>o(ye())},N.createElement(Be,h({height:40},e)))},Lt=()=>{const[e,t]=C.exports.useState(""),[n,o]=C.exports.useState(0);return!1===Ce((e=>e.sidebarVisible))?null:N.createElement(_t,null,N.createElement(Ot,{setSearchWord:t}),N.createElement(Ct,{selectedGroup:n,setSelectedGroup:o}),N.createElement(Et,{selectedGroup:n,searchWord:e}))};const Tt=I.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e8e8ef;
`,zt=I.div`
  display: flex;
  justify-content: space-between;
`,$t=O`
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
`,Vt=I.div`
  display: flex;
  align-items: center;
`,Ft=I.button`
  ${$t};

  &:focus {
    background-color: #dfdfdf;
  }
`,At=I.div`
  display: flex;
  align-items: center;
`,Bt=I.button`
  margin: 0 10px;
  background-color: #eaecf1;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: none;
`,Wt=I.div`
  display: grid;
  //place-items: left;
  div {
  }
`,Jt=I.div`
  font-size: 16px;
  color: #393c44;
  font-family: Roboto, serif;
`,Xt=I.div`
  color: #808292;
  font-size: 14px;
`,Yt=I.button`
  ${$t};

  background-color: #e31c5c;
  display: inline-block;
  margin-right: 10px;
  color: white;
`,qt=I.button`
  background-color: #217ce8;
  ${$t};
  color: white;
`,Gt=I.label`
  display: flex;
  align-items: center;
  justify-content: center;

  > span:first-child {
    display: inline-block;
    margin-right: 4px;
  }
`,Rt=()=>{const e=Se(),t=Ce((e=>e.flowInfo)),{flow_name:n,flow_description:o,flow_active:r}=t||{};return N.createElement(Tt,null,N.createElement(zt,null,N.createElement(Bt,null,N.createElement(Ae,{height:14})),N.createElement(Wt,null,N.createElement(Jt,null,n||"Loading ..."),N.createElement(Xt,null,o||"Loading ..."))),N.createElement(Vt,null,N.createElement(Ft,{onClick:()=>e(Ee({windowConfig:{mainId:B.mainFlow}}))},"Diagram view"),N.createElement(Ft,{onClick:()=>e(Ee({windowConfig:{mainId:B.codeEditor}}))},"Code editor"),N.createElement(Ft,null,N.createElement(Gt,null,N.createElement("span",null,"Active"),N.createElement(M,{checked:!!r,icons:{checked:null,unchecked:null},onChange:t=>e(Ee({flowInfo:{flow_active:+t.target.checked}}))}))),N.createElement(Ft,{onClick:()=>e(Ee({windowConfig:{sideId:J.flowSettings}}))},N.createElement("img",{src:"/Drawflow-react/assets/flowsettings.758f2330.png",alt:""}))),N.createElement(At,null,N.createElement(Yt,null,"Delete flow"),N.createElement(qt,{onClick:()=>e(ie())},"Save flow")))},Ut=I.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  outline: none;
  border: none;
`,Kt=I.section`
  position: relative;
  flex: 0 0 400px;
  overflow-y: auto;
  max-height: calc(100vh + 40px);
  padding-top: 30px;
  border: 1px solid #e8e8ef;
`,Ht=I.label`
  margin: 10px;
  display: flex;
  flex-direction: column;
`,Qt=I.div`
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
`,Zt=I.div`
  background: #e8e8ef;

  label {
    margin: 10px;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 2px;
    }
  }
`,en=()=>{const e=Ce((e=>e.flowInfo)),t=Se(),[n,o]=C.exports.useState([]);C.exports.useEffect((()=>{(async()=>{const e=await oe(te.fetchBackgroundImages,{lab_test:1}),{flow_canvas_background_image:t}=e,n=t.map((({image_link:e})=>e));o(n)})().then()}),[]);const{flow_name:i,flow_description:l,run_times_max:s,user_run_limit_seconds:a}=e||{},[d,c]=Ie(r.backgroundOpacity,50),[u,p]=Ie(r.backgroundBlur,50),[m,g]=Ie(r.backgroundImageUrl,""),w=(e,n)=>{const o=Object.keys(e)[0],r=e[o];return N.createElement("input",f(h({},n),{value:null!=r?r:"Loading ...",onChange:e=>{t(Ee({flowInfo:{[o]:e.target.value}}))}}))};return N.createElement(Kt,null,N.createElement(Ut,{onClick:()=>t(Ee({windowConfig:{sideId:J.none}}))},N.createElement(We,{width:19,height:19})),N.createElement(Ht,null,"Flow name:",w({flow_name:i},{type:"text"})),N.createElement(Ht,null,"Flow description:",w({flow_description:l},{type:"text"})),N.createElement(Ht,null,"Max run times:",w({run_times_max:s},{type:"number"})),N.createElement(Ht,null,"User run limit seconds:",w({user_run_limit_seconds:a},{type:"number"})),N.createElement(Zt,null,N.createElement("label",null,"Opacity:",N.createElement("input",{type:"range",value:null!=d?d:0,min:0,max:100,onChange:e=>{const n=+e.target.value;c(n),t(Ee({windowConfig:{background:{opacity:n}}}))}})),N.createElement("label",null,"Blur:",N.createElement("input",{onChange:e=>{const n=+e.target.value;p(n),t(Ee({windowConfig:{background:{blur:n}}}))},type:"range",min:0,max:100,value:u})),N.createElement(Qt,null,n.map((e=>N.createElement("button",{key:e,onClick:()=>{g(e),t(Ee({windowConfig:{background:{imageUrl:e}}}))}},N.createElement("img",{style:{border:m===e?"2px solid blue":""},src:e,alt:"Background image"})))))))},tn=I.button`
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
`,nn=I.div``,on=I.div`
  padding: 0 10px 10px;
  position: relative;
  border: 1px solid #e8e8ef;
  flex: 0 0 300px;
  overflow-y: auto;
  max-height: 100%;
`,rn=I.div`
  margin-bottom: 15px;
  padding: 5px;
  border-bottom: 2px solid lightgray;
`,ln=I.span`
  color: blue;

  ::before {
    margin-left: 8px;
    content: " ID.";
  }
`,sn=I(tn)`
  text-align: center;
`,an=I(tn)`
  margin-left: 5px;
`,dn=I(tn)`
  margin-left: 5px;
`,cn=I.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 8px;
`,un=I.h2`
  text-align: center;
  border-bottom: 2px solid blue;
  color: #217ce8;
`,pn=I.input`
  margin-right: 10px;
  font-weight: bolder;
  border: 1px solid #217ce8;
  font-size: 0.9em;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 5px;
  width: 90%;
`,mn=I.textarea`
  border-radius: 5px;
  border: 1px solid #217ce8;

  /* flex: 1; */
  width: 90%;
  /* text-align: center; */
`,gn=()=>{var e;const t=Ce((e=>e.groups)),n=Se(),[o,r]=C.exports.useState(t),i=(e,t)=>{const n=h(h({},o[e]),t);r(f(h({},o),{[e]:n}))};if(Object.keys(t).length!==Object.keys(o).length){const n={};for(const[r,i]of Object.entries(t))n[Number(r)]=w.merge(i,null!=(e=o[Number(r)])?e:{});r(n)}return N.createElement(on,null,N.createElement(un,null,"Node groups"),Object.values(o).map((({id:e,node_group_name:t,node_group_order:r,node_group_description:l})=>N.createElement(rn,{key:e},N.createElement(cn,null,N.createElement(ln,null,e),N.createElement(an,{onClick:()=>{window.confirm(`Do you really wanna delete group ${t}, ID.${e}`)&&n(se({id:e,delete:1}))}},"Delete"),N.createElement(dn,{onClick:()=>{window.confirm(`Do you really wanna save group ${t}, ID.${e}`)&&n(se(o[e]))}},"Save")),N.createElement(pn,{value:t,type:"text",onChange:t=>{i(e,{node_group_name:t.target.value})}}),N.createElement(mn,{value:l,onChange:t=>{i(e,{node_group_description:t.target.value})}})))),N.createElement(nn,null,N.createElement(sn,{onClick:()=>{n(se({id:0,node_group_order:0,node_group_name:"Group name",node_group_description:"Group description"}))}},"Add new")))};const hn=I.div`
  flex: 1;
  ${({shift:e})=>e&&O`
      div.ql-toolbar.ql-snow {
        padding-left: 40px;
      }

      .jsoneditor-menu {
        padding-left: 40px;
      }
    `}
`,fn=({values:e,setValues:t})=>{const n=Ce((e=>e.sidebarVisible)),o=C.exports.useRef(null),r=C.exports.useRef();return C.exports.useEffect((()=>{if(o.current&&!r.current){const e={mode:"tree",modes:["code","form","text","tree","view","preview"],onChangeText(e){try{const n=JSON.parse(e);t(n)}catch(n){console.log({e:n})}}};r.current=new j(o.current,e)}return()=>{var e;null==(e=r.current)||e.destroy()}}),[]),C.exports.useEffect((()=>{r.current&&JSON.stringify(r.current.get())!==JSON.stringify(e)&&r.current.update(e)}),[e]),N.createElement(hn,{shift:!(null==n||n),ref:o})},wn={flow_node_type_id:0,nodes_id:0,node_scrdata_id:0,flow_action_scrdata_id:0,order:0,nodes_group_id:0,name:"**",description:"**",icon_link:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",icon_link_selected:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:0,execute_node_specific_date_time:"2020-11-11T19:30",loop_cycles:0,node_settings_json:{},node_response_settings_json:{},loop_cycle_reached_jump_to_node:0,node_attributes:[],node_object_lists:{},node_story:"Node story"},bn=C.exports.createContext({type:"template"}),vn=I.div`
  display: grid;
  grid-template-columns: auto 1fr;
  flex: 1;
`,xn=I.form`
  min-width: 300px;
`,yn=I.div`
  font-weight: bold;
`,En=I.div``,_n=I.div`
  display: grid;
  gap: 0.3em;
`,kn=I.header`
  padding: 10px;
  display: flex;
  align-items: center;
  color: #1f1a1a;
  order: -1;
  position: relative;
  ${({shift:e})=>e&&O`
      padding-left: 0;
    `}
`,Sn=I.img`
  padding: 8px;
  margin-right: 10px;
  border: 3px solid #8db6f6;
  border-radius: 15px;
  max-height: 50px;
  max-width: 50px;
`,Cn=I.details`
  summary svg {
    transform: rotate(-90deg);
  }

  &[open] > summary:first-child svg {
    transform: rotate(90deg);
  }

  summary ~ * {
    margin-left: 10px;
  }
`,In=I(Cn)``,Nn=I.summary`
  color: #e0ebfd;
  background-color: #8db6f6;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 30px;
  margin-top: 0.05em;
`,Dn=I.span`
  display: grid;
  place-items: center;

  svg {
    height: 1em;
    width: 1.4em;
  }
`,Pn=I.label`
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 2px solid blue;
`,On=I.div``;I.button``;const Mn=I.div`
  flex: 1;
  height: max-content;
`,jn=I.div`
  margin-left: -0.2em;
`,Ln=I(tn)``,Tn=I(tn)``,zn=I(tn)``,$n=I.div`
  text-align: center;
`,Vn=({children:e})=>N.createElement(Nn,null,N.createElement(Dn,null,N.createElement(Ae,null)),N.createElement("span",null,e)),Fn=({setFormValues:e,control:t,remount:n,defaultValue:o})=>{const r=L({control:t,defaultValue:o}),[i,l]=C.exports.useState(!1);return N.createElement("div",{onMouseLeave:()=>i&&n()},N.createElement(fn,{values:r,setValues:t=>{l(!0),e(t)}}))},An=({path:e})=>{const t=e[e.length-1],n=`${e.join(".")}`,o=fe(t.replace(/_/g," "));return N.createElement(Pn,null,o,":",N.createElement($,{name:n,render:({field:e})=>{const{value:n}=e,o=null===n;(e=>{const n=!(t in wn)||null===e||typeof wn[t]==typeof e;n||console.log({key:t,value:e,properValue:wn[t]})})(n);const r=t in wn?wn[t]:n;let i="string"==typeof r||o?"text":typeof r;return N.createElement("input",f(h({type:i},e),{value:null!=n?n:"",onChange:t=>{const{value:n}=t.target;e.onChange("number"===i?parseInt(n):n)}}))}}))},Bn=({path:e,obj:t})=>{var n;if("object"!=typeof t||null===t)return N.createElement(An,{path:e});const o=A(t).map((n=>{const o=t[n];return N.createElement(Bn,{key:[...e,n].join("."),path:[...e,n],obj:o})})),r=e[e.length-1],i=null!=(n=he[r])?n:fe(r.replace(/_/g," "));return N.createElement(Cn,null,N.createElement(Vn,null,i),N.createElement(On,null,o))},Wn=I(Cn)`
  position: relative;

  summary ~ * {
    margin-left: ${({leftShift:e})=>e};
  }
`,Jn=I.div`
  position: absolute;
  z-index: 1;
  left: 0;
  width: max-content;
  max-width: 30vw;
  padding: 10px;
  background-color: #f5f0e5;
  border: 3px solid #3883fa;
  border-radius: 10px;
`,Xn=I.div`
  cursor: pointer;
  margin-top: 0.2em;
  padding: 0.4em;
  border-radius: 0.3em;
  background: #8db6f6;

  &:hover {
    background: #3377e4;
  }
`,Yn=I.div`
  display: flex;
  margin-left: 1em;

  & > * {
    margin-left: 0.1em;
    //padding: 1em;
  }

  summary {
    padding-right: 0.3em;
  }
`,qn=e=>{ke.dispatch(Ee({windowConfig:{id:e,mainId:B.nodeSettings}}))},Gn=I.button`
  background-color: white;
  border: 0;
  border-radius: 0.4em;
  padding: 0.3em;
  margin: 0.5em;
`,Rn=({node:e,getNextListFromNode:t})=>{const{id:n,nodeState:{positionNumber:o,data:{name:r}}}=e;return N.createElement(Wn,{leftShift:"1em"},N.createElement(Vn,null,r," #",n,":",o,N.createElement(Gn,{onClick:()=>qn(n),key:n},"Jump")),N.createElement(On,null,t(e).map((e=>N.createElement(Rn,{getNextListFromNode:t,key:e.id,node:e})))))},Un=({id:e})=>{const t=Ce(Q),n=new q(t).getNode(e),{subnodes:o,out1:r,prevDirectNodes:i}=n,l=C.exports.useRef(null),s=e=>{if(!0!==e.target.open)return;const t=e.target.parentNode;t===l.current&&Array.from(t.children).forEach((t=>{t!==e.target&&(t.open=!1)}))},a=N.createElement(Wn,{onToggle:s,leftShift:"0",open:!1},N.createElement(Vn,null,"Subnodes"),o.length>0&&N.createElement(Jn,{style:{zIndex:3}},o.map((({nodeState:{positionNumber:e,id:t,data:{name:n}}})=>N.createElement(Xn,{onClick:()=>qn(t),key:t},n," #",t,":",e))))),d=N.createElement(Wn,{leftShift:"0",onToggle:s},N.createElement(Vn,null,"Next nodes"),r.length>0&&N.createElement(Jn,{style:{zIndex:1}},r.map((e=>N.createElement(Rn,{getNextListFromNode:({out1:e})=>e,key:e.id,node:e}))))),c=N.createElement(Wn,{leftShift:"0",onToggle:s},N.createElement(Vn,null,"Prev nodes"),i.length>0&&N.createElement(Jn,{style:{zIndex:2}},i.map((({nodeState:{positionNumber:e,id:t,data:{name:n}}})=>N.createElement(Xn,{key:t},n," #",t,":",e)))));return N.createElement(Yn,{ref:l},a,c,d)},Kn=e=>{var t;const{type:n}=C.exports.useContext(bn),o=Se(),{defaultValues:r,setControl:i}=e,l=T({defaultValues:r}),{handleSubmit:s,formState:{errors:a},reset:d,control:c,getValues:u}=l;C.exports.useEffect((()=>{i(c)}),[]);const p=r,{name:m,description:g,icon_link:w}=p,b=null==(t=Ce((e=>e.sidebarVisible)))||t;return N.createElement(z,h({},l),N.createElement(xn,{onSubmit:s((e=>{"template"===n&&o(de(e)),"node"===n&&o(K.updateNode(e))}))},N.createElement(kn,{shift:!b},!b&&N.createElement(jn,null,N.createElement(jt,null)),N.createElement(Sn,{src:w}),N.createElement(_n,null,N.createElement(yn,null,m),N.createElement(En,null,g)),"node"===n&&N.createElement(Un,{id:r.this_node_unique_id})),N.createElement(In,{open:!0},N.createElement(Vn,null,"Default settings"),N.createElement(On,null,Object.entries(p).map((([e,t])=>"object"==typeof t&&null!==t||e in he?null:N.createElement(An,{key:e,path:[e]}))))),A(he).map((e=>p[e]?N.createElement(Bn,{key:e,obj:p[e],path:[e]}):null)),Object.keys(a).length&&N.createElement("div",null,N.createElement("pre",null,"Errors")),N.createElement($n,null,N.createElement(Ln,{type:"submit"},"Save"),N.createElement(zn,{type:"reset",onClick:()=>d()},"Reset"),N.createElement(Tn,{type:"button",onClick:()=>{"template"===n&&o(de(f(h({},u()),{delete:1})))}},"Delete"))))},Hn=({json:e})=>{const[t,n]=C.exports.useState(0),[o,r]=C.exports.useState(0),[i,l]=C.exports.useState(e),[s,a]=C.exports.useState();return N.createElement(Mn,null,N.createElement(vn,null,N.createElement(Kn,{key:`leftBar-${t}`,defaultValues:i,setControl:a}),s&&N.createElement(Fn,{key:`rightBar-${o}`,remount:()=>{r((e=>e+1))},setFormValues:e=>{l(e),n((e=>e+1))},control:s,defaultValue:i})))},Qn=({id:e})=>{const t=Ce((t=>Q(t).drawflow[e].data));return N.createElement(bn.Provider,{value:{type:"node"}},N.createElement(Hn,{json:t}))},Zn=({id:e})=>{const t=Ce((t=>t.templates.find((({nodes_id:t})=>t===e))));return void 0===t?N.createElement("div",null,"Loading..."):N.createElement(bn.Provider,{value:{type:"template"}},N.createElement(Hn,{json:t}))},eo=I.div`
  display: flex;
  align-items: normal;
  overflow-x: auto;

  &::-webkit-scrollbar-thumb {
    background-color: #217ce8;
  }

  &::-webkit-scrollbar {
    height: 5px;
  }
`,to=I.div`
  flex: 1;
  order: -1;
  width: 0;
`,no=I.main`
  display: flex;
  position: relative;
`,oo=I.div``,ro=()=>{const e=Ce((e=>e));return N.createElement(fn,{values:e,setValues:()=>null})},io=I.button`
  white-space: nowrap;
  //display: inline-block;
  ${({selected:e})=>e&&O`
      font-weight: bold;
    `}
`,lo=()=>{var e;const t=null==(e=Ce((e=>e.sidebarVisible)))||e,n=Ce((e=>e.flows)),o=Ce((e=>e.flows.length)),r=Ce((e=>e.version)),i=Se(),l=[t?null:N.createElement(jt,{style:{height:"2em"},key:-1}),N.createElement(io,{key:0,selected:0===r,onClick:()=>i(me(0))},"Prototyping",n[0]&&":"+Object.keys(n[0].drawflow).length)];for(let s=o-1;s>0;--s)l.push(N.createElement(io,{key:s,selected:s===r,onClick:()=>i(me(s))},"Version ",s,n[s]&&":"+Object.keys(n[s].drawflow).length));return N.createElement(eo,null,l)},so=()=>N.createElement(to,null,N.createElement(lo,null),N.createElement(vt,null)),ao=()=>{var e;Se();const t=null==(e=Ce((e=>e.sidebarVisible)))||e,n=Ce((e=>e.windowConfig.mainId)),o=Ce((e=>e.windowConfig.id)),r=Ce((e=>e.version));return n===B.templateNodeSettings?N.createElement(N.Fragment,null,N.createElement(Zn,{key:o,id:o})):n===B.nodeSettings?N.createElement(N.Fragment,null,N.createElement(Qn,{key:o,id:o})):n===B.mainFlow?N.createElement(so,{key:r}):n===B.codeEditor?N.createElement(N.Fragment,null,N.createElement("span",{style:{position:"absolute",zIndex:2,backgroundColor:"white",top:-8}},!t&&N.createElement(jt,null)),N.createElement(ro,null)):null},co=()=>{const e=Ce((e=>e.windowConfig.sideId));return e===J.flowSettings?N.createElement(en,null):e===J.groupSettings?N.createElement(gn,null):null},uo=()=>{const e=Se();return C.exports.useEffect((()=>{e(re()),e(le()),e(ae()),e(pe())}),[]),N.createElement(oo,null,N.createElement(Rt,null),N.createElement(no,null,N.createElement(Lt,null),N.createElement(ao,null),N.createElement(co,null)))};V.render(N.createElement(C.exports.StrictMode,null,N.createElement(F,{store:ke},N.createElement(uo,null))),document.getElementById("root"));
