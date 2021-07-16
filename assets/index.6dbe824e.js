var e,t,o,n,r,i,l,s,a=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,m=(e,t,o)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&m(e,o,t[o]);if(u)for(var o of u(t))g.call(t,o)&&m(e,o,t[o]);return e},f=(e,t)=>d(e,c(t));import{l as w,c as b,D as v,a as x,b as y,d as E,e as _,u as k,f as C,C as S,q as I,R as N,g as D,h as P,A as O,_ as M,J as j,i as L,j as T,F as $,k as z,m as V,P as B}from"./vendor.6d95243b.js";(t=e||(e={})).START="START",t.MIDDLE="MIDDLE",t.END="END",(n=o||(o={})).Drawflow="drawflow",n.Groups="groups",(i=r||(r={})).backgroundOpacity="backgroundOpacity",i.backgroundBlur="backgroundBlur",i.backgroundImageUrl="backgroundImageUrl",(s=l||(l={})).in="in",s.out="out";const W=e=>Object.keys(e);var F,A,X,J;(A=F||(F={}))[A.mainFlow=0]="mainFlow",A[A.codeEditor=1]="codeEditor",A[A.templateNodeSettings=2]="templateNodeSettings",A[A.nodeSettings=3]="nodeSettings",(J=X||(X={}))[J.groupSettings=0]="groupSettings",J[J.flowSettings=1]="flowSettings",J[J.none=2]="none";class Y{constructor(e,t){this.spacingX=40,this.spacingY=60,this.id=e,this.flow=t,this.state=t.state,this.nodeState=this.state.drawflow[this.id]}get head(){return this.nodeState.head}get lane(){return this.nodeState.lane}get port(){return this.nodeState.port}get portInPos(){var e;return null==(e=this.state.ports.find((({nodeId:e,portId:t,type:o})=>e===this.id&&1===t&&o===l.in)))?void 0:e.pos}get outPorts(){return this.state.ports.filter((({type:e,nodeId:t})=>this.id===t&&e===l.out))}get parent(){var e;const t=null==(e=this.parentConnection)?void 0:e.startId;return t?this.flow.getNode(t):null}get parentConnection(){return this.state.connections.find((e=>{e||console.log({conn:e});const{endId:t,endPort:o}=e;return t===this.id&&1===o}))}get totalWidth(){return!1===this.nodeState.visible?0:Math.max(this.width+this.subnodesWidth,this.leftWidth+this.rightWidth)}get childrenTotalWidth(){const{out1:e}=this;if(!e.length)return 0;let t=0;return e.forEach((e=>{t+=e.totalWidth})),t+this.spacingX*(e.length-1)}get leftWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,o=this.width/2;if(!e.length)return o;const n=e[0].leftWidth,r=n+(t-n-e[e.length-1].rightWidth)/2;return Math.max(r,o)}get rightWidth(){if(!1===this.nodeState.visible)return 0;const{out1:e,childrenTotalWidth:t}=this,o=this.width/2+this.subnodesWidth;if(!e.length)return o;const n=e[0].leftWidth,r=e[e.length-1].rightWidth,i=r+(t-n-r)/2;return Math.max(i,o)}get all2Successors(){const{subnodes:e,out1:t}=this,o=[...t];return e.forEach((e=>o.push(e))),this.out1.forEach((e=>o.push(e))),o}get allSuccessors(){const e=[...this.out1,...this.subnodes],t=[...e];return e.forEach((e=>t.push(...e.allSuccessors))),t}get outConnections(){return this.state.connections.filter((({startId:e})=>e===this.id))}get out1(){return this.children(1)}get firstSubnode(){return this.children(2)[0]}get subnodes(){var e,t;return(null==(t=null==(e=this.firstSubnode)?void 0:e.flowLine)?void 0:t.flowLineNodes)||[]}get subnodesWidth(){return!1===this.nodeState.subnodesVisibility?0:this.subnodes.reduce(((e,t)=>e+t.width+this.spacingX),0)}get isSub(){return null!==this.complexParentNode}get complexParentNode(){const e=this.parent;return e?e.firstSubnode===this?e:e.complexParentNode:null}get flowLine(){const e=[this];let t=this,o=t.firstSubnode;for(;1===t.out1.length;)t=t.out1[0],e.push(t),o=o||t.firstSubnode;return t.out1.length>1?null:{flowLineNodes:e,hasSubnodes:o}}get height(){return this.state.drawflow[this.id].height}get width(){return this.state.drawflow[this.id].width}get pos(){return this.state.drawflow[this.id].pos}alignChildren(){const{out1:e}=this;this.update({isSub:!1,port:{out:2}});let t=this.pos.x-(this.leftWidth-this.width/2);for(const n of e){const e=t+(n.leftWidth-n.width/2);n.setPos({x:e,y:this.pos.y+this.height+this.spacingY}),!1!==n.nodeState.visible&&(t+=n.totalWidth+this.spacingX),n.alignChildren()}const{subnodes:o}=this;o.length&&(t=this.pos.x+this.width+this.spacingX,o.forEach((e=>{e.update({isSub:!0,port:{out:1}}),e.setPos({x:t,y:this.pos.y+(this.height/2-e.height/2)}),t+=e.width+this.spacingX})))}toggleVisibility(e){this.update({visible:e}),this.parentConnection&&(this.parentConnection.visible=e),this.outConnections.forEach((t=>{t.visible=e}))}toggleChildrenVisibility(){var e;const t=null==(e=this.nodeState.childrenVisibility)||e;this.update({childrenVisibility:!t});const{subnodes:o,allSuccessors:n}=this;n.forEach((e=>{o.includes(e)||e.toggleVisibility(!t)}))}toggleSubnodesVisibility(){var e;const t=null==(e=this.nodeState.subnodesVisibility)||e;this.update({subnodesVisibility:!t}),this.subnodes.forEach((e=>{e.toggleVisibility(!t)}))}children(e){return this.state.connections.filter((({startId:t,startPort:o})=>t===this.id&&o===e)).map((e=>this.flow.getNode(e.endId)))}setPos(e){const{pos:t}=this,{x:o,y:n}=e;this.flow.moveNode({nodeId:this.id,dx:o-t.x,dy:n-t.y})}putInCenter(e){const{width:t,height:o}=e;this.setPos({x:t/3,y:o/3})}update(e){const t=w.merge(this.nodeState,e);Object.assign(this.nodeState,t)}}class q{constructor(e){this.nodes={},this.distanceToConnect=100,this.distanceToDisconnect=0,this.state=e;const{drawflow:t}=this.state;Object.keys(t).map((e=>this.nodes[Number(e)]=new Y(Number(e),this)))}get heads(){return Object.entries(this.nodes).filter((([,e])=>!e.parent)).map((e=>e[1]))}getNode(e){return this.nodes[e]}alignAll(){this.setLaneNumbers(),this.heads.forEach((e=>{e.alignChildren()}))}addConnection(e){let{startId:t,startPort:o,endId:n,endPort:r}=e;const i=this.getNode(n),l=this.getNode(t),s=2===o;if(i.parent||!1===l.nodeState.visible)return!1;const a=i.flowLine;if((s||l.isSub)&&(!a||a.hasSubnodes))return!1;let d=null;if(s&&l.subnodes.length){if(!1===l.nodeState.subnodesVisibility){t=l.subnodes[l.subnodes.length-1].id,o=1,this.state.connections.push({startId:t,startPort:o,endId:n,endPort:r,visible:!0});const{flowLineNodes:e}=a;return void e.forEach((e=>e.toggleVisibility(!1)))}d=l.subnodes[0]}if(l.isSub&&l.out1.length&&(d=l.out1[0]),null!==d){const e=this.state.connections.find((e=>e.startId===t&&e.startPort===o&&e.endId===d.id&&1===e.endPort)),n=this.state.connections.indexOf(e);this.state.connections.splice(n,1);const{flowLineNodes:r}=a,i=r[r.length-1];this.state.connections.push({startId:i.id,startPort:1,endId:d.id,endPort:1,visible:!0})}this.state.connections.push({startId:t,startPort:o,endId:n,endPort:r,visible:!0})}moveNode({dx:e,dy:t,nodeId:o}){this.state.drawflow[o].pos.x+=e,this.state.drawflow[o].pos.y+=t}dragNode({dx:e,dy:t,nodeId:o}){this.moveNode({dx:e,dy:t,nodeId:o}),this.toggleAvailablePortToConnect(o)}toggleAvailablePortToConnect(e){const t=Date.now();if(this.state.computing&&t-this.state.computing<100)return;if(this.state.computing=t,!this.state.config.drag)return;const o=this.getNode(e),n=o.head;if(o.parentConnection){const e=this.state.connections.indexOf(o.parentConnection);this.state.connections.splice(e,1),this.alignAll()}const r=o.portInPos;if(!r)return;let i=null;Object.entries(this.nodes).filter((([,e])=>e.head!==n&&!1!==e.nodeState.visible)).forEach((([t,o])=>{Number(t)!==e&&o.outPorts.forEach((e=>{const{pos:t}=e,o=Math.hypot(r.x-t.x,r.y-t.y);o<this.distanceToConnect&&(null===i||o<i.distance)&&(i={port:e,distance:o})}))})),this.state.portToConnect=null!==i?i.port:void 0}setLaneNumbers(){let e=this.heads;for(e.forEach((e=>e.update({head:e.id,lane:0})));e.length;){const t=[];e.forEach((e=>{let o=e.lane+1;const{subnodes:n,head:r}=e;if(void 0===r)return void console.error("head is undefined in setLaneNumbers");if(n.length)for(const t of n)t.update({lane:o++,head:r});const i=e.children(1);i.forEach((e=>e.update({head:r,lane:o}))),t.push(...i)})),e=t}this.heads.forEach((e=>{const{head:t}=e;for(let o=0,n=0,r=[e];r.length;++o)r=Object.values(this.nodes).filter((e=>e.lane===o&&e.head===t)),r.forEach((e=>{e.update({positionNumber:n++})}))}))}}const G={nodeId:1,canvasDrag:!1,config:{drag:!1,connectionsLabelEnable:!1,canvasTranslate:{x:0,y:0},zoom:{value:1,max:2,min:.5,tick:.1}},drawflow:{},connections:[],connectionsLabel:{},ports:[],select:null,newPathDirection:null,modalType:null,editLock:!1,mouseBlockDragPos:{clientX:void 0,clientY:void 0}},R=e=>{new q(e).alignAll()},U=(e,{payload:t})=>{if("function"==typeof t)return void t(e);const o=w.merge(e,t);W(o).forEach((t=>{e[t]=o[t]}))},K=b({name:o.Drawflow,initialState:G,reducers:{setState:U,setEditLock:(e,{payload:t})=>{e.editLock=t},align:R,moveNode:(e,t)=>new q(e).dragNode(t.payload),setMouseBlockDragPos:(e,{payload:t})=>{e.mouseBlockDragPos=t},unSelect:e=>{e.config.drag=!1,e.select=null},select:(e,{payload:t})=>{e.config.drag="node"===t.type,e.select=t},selectPort:(e,{payload:t})=>{const o=e.ports.find((({nodeId:e,portId:o,type:n})=>n===t.type&&o===t.portId&&e===t.nodeId));if(!o)return void console.error("Cannot find port to select in state.ports");const n=e.ports.indexOf(o);e.select={type:t.type,selectId:n}},moveCanvas:(e,{payload:{movementX:t,movementY:o}})=>{e.canvasDrag&&(e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=o)},canvasDrag:(e,{payload:t})=>{e.canvasDrag=t},canvasMouseMove:(e,{payload:{movementX:t,movementY:o,clientX:n,clientY:r}})=>{var i;if(e.clientCurrentMousePos={clientX:n,clientY:r},e.canvasDrag)e.config.canvasTranslate.x+=t,e.config.canvasTranslate.y+=o;else if((null==(i=e.select)?void 0:i.type)===l.out)e.newPathDirection={clientX:n,clientY:r};else if(e.config.drag&&e.select){const t=e.select.selectId,{clientX:o,clientY:i}=e.mouseBlockDragPos;e.mouseBlockDragPos={clientX:n,clientY:r};const l=e.config.zoom.value,s=(n-o)/l,a=(r-i)/l;new q(e).dragNode({nodeId:t,dy:a,dx:s})}},canvasMouseUp:e=>{var t,o;const n=new q(e);if(e.portToConnect&&(null==(t=e.select)?void 0:t.selectId)){const{nodeId:t,portId:o}=e.portToConnect,r=e.select.selectId,i=1;n.addConnection({startId:t,startPort:o,endId:r,endPort:i})}e.portToConnect=void 0,e.newPathDirection=null,e.canvasDrag=!1,e.config.drag=!1,(null==(o=e.select)?void 0:o.type)===l.out&&(e.select=null),n.alignAll()},updateNode:(e,{payload:t})=>{const o=t.this_node_unique_id;e.drawflow[o].data=t},deleteNode:e=>{const{connections:t,drawflow:o,ports:n,select:r}=e;if("node"!==(null==r?void 0:r.type))return;const{selectId:i}=r;let l=t.length;for(;l--;){const{endId:e,startId:o}=t[l];[o,e].includes(i)&&(t.splice(l,1),console.log(v(t)))}let s=n.length;for(;s--;){const{nodeId:e}=n[s];e===i&&n.splice(s,1)}delete o[i],e.select=null,console.log("GGG")},deletePath:e=>{const{connections:t,select:o}=e;"path"===(null==o?void 0:o.type)&&(console.log("delete"),t.splice(o.selectId,1))},load:(e,{payload:{drawflow:t,connections:o}})=>{Object.assign(e,G),e.drawflow=t,e.nodeId=Math.max(...Object.keys(t).map(Number))+1,e.connections=o},portMouseUp:(e,{payload:{nodeId:t,portId:o,PortType:n}})=>{const{select:r}=e;if(n!==l.in||!r)return;const i=e.ports[r.selectId],s=t,a=o,d=i.nodeId,c=i.portId;if(d===s)return;new q(e).addConnection({startId:d,startPort:c,endId:s,endPort:a})},clear:()=>G,pushPorts:(e,{payload:t})=>{if(0===t.length)return;const{nodeId:o}=t[0];e.ports=e.ports.filter((e=>e.nodeId!==o)),e.ports.push(...t)},zoom:(e,{payload:t})=>{const{zoom:o}=e.config,{value:n,max:r,min:i,tick:l}=o,s=n+(t?l:-l);s<=r&&s>=i&&(o.value=s),null===t&&(e.config.canvasTranslate={x:0,y:0},o.value=1)},nodeSize:(e,{payload:{height:t,width:o,id:n}})=>{e.drawflow[n].height=t,e.drawflow[n].width=o},toggleSubnodes:(e,{payload:{id:t}})=>{new q(e).getNode(t).toggleSubnodesVisibility(),R(e)},toggleChildren:(e,{payload:{id:t}})=>{new q(e).getNode(t).toggleChildrenVisibility(),R(e)},copyNode:e=>{var t;"node"===(null==(t=e.select)?void 0:t.type)&&(e.nodeToCopyId=e.select.selectId)}}}),H=K.actions,Q=K.reducer,Z=e=>e.flows[e.version],ee=(e,t)=>{const o=(e.y-t.y)/2,n=e.x-t.x;return`M ${e.x} ${e.y} v ${-o} h ${-n} v ${-o} `},te=(e,t,o,n)=>{const{x:r,y:i,width:l,height:s}=n;return{x:e*(l/(l*o))-r*(l/(l*o)),y:t*(s/(s*o))-i*(s/(s*o))}};var oe,ne;(ne=oe||(oe={}))[ne.getTemplateNodes=1156]="getTemplateNodes",ne[ne.postTemplateNodes=1157]="postTemplateNodes",ne[ne.getFlowDataVersion=1160]="getFlowDataVersion",ne[ne.postFlowDataVersion=1161]="postFlowDataVersion",ne[ne.getFlow=1162]="getFlow",ne[ne.postFlow=1163]="postFlow",ne[ne.fetchBackgroundImages=1164]="fetchBackgroundImages",ne[ne.getGroups=1154]="getGroups",ne[ne.postGroups=1155]="postGroups",ne[ne.getStepSettingsTemplates=1222]="getStepSettingsTemplates";const re=async(e,t={})=>{const o=window.location.search,n=new URLSearchParams(o).get("session_id");n||(console.error("session_id is not provided!"),alert("session_id is not provided!"));const r=h({session_id:n,sp_name:"OK",session_exp:"2021-02-12T02:57:45.453422",status:"OK",item_id:0,max_row_per_page:50,search_term:"",search_term_header:"",pagination:1,scrdata_id:e},t);return fetch("https://valerii.educationhost.cloud?csurl=https://tastypoints.io/akm/restapi.php",{method:"post",body:JSON.stringify({input:r}).replace(/'/g,"''")}).then((async e=>{let t=await e.json();if(!t.status||!t.data)throw console.error(t),alert(t),alert(JSON.stringify(t,null,2)),new Error(t);if(t=JSON.parse(t.data),t.response_error)throw console.error(t.response_error),alert(JSON.stringify(t.response_error,null,2)),new Error(t.response_error);if("OK"!==t.status&&"OK"!==t.sp_name)throw alert(JSON.stringify(t,null,2)),new Error(t.response_error);return t}))},ie=x("fetchFlow",(async(e,{dispatch:t})=>{const o=await re(1162,{item_id:25});if(null===o.flows)return void alert("Such flow do not exist or was deleted!");const n=o.flows[0];t(ke.setStateAction({flowInfo:n}))})),le=x("fetchFlow",(async(e,{getState:t})=>{const{flowInfo:o}=t();if(!o)return void console.error("Cannot save flow, data is not available");"OK"===(await re(1163,{item_id:25,flows:[o]})).status?alert("Saved"):alert("Cannot save flow")})),se=x("fetchGroups",(async()=>{const e=await re(1154),{flow_nodes_group:t}=e;return t.reduce(((e,t)=>(e[t.id]=t,e)),{})})),ae=x("updateGroup",(async(e,{dispatch:t})=>{var o;"delete"in e||(e.delete=0);const n=await re(1155,{flow_nodes_group:[e],item_id:null!=(o=e.id)?o:0});"OK"===n.status?(t(se()),e.id||(e.id=n.item_id),alert(`Group ${e.id} updated`)):alert(`Error: cannot ${e.id?"update":"create"} group ${e.node_group_name}`)})),de=x("fetchTemplateNodes",(async()=>{const{flow_nodes:e}=await re(1156,{});return e})),ce=x("updateTemplateNode",(async(e,{dispatch:t})=>{var o;console.log({templateNode:e}),"delete"in e||(e.delete=0);const n=await re(1157,{flow_nodes:[e],item_id:null!=(o=e.nodes_id)?o:0});console.log({resp:n}),"OK"===n.status?(t(de()),e.nodes_id||(e.nodes_id=n.item_id,t(_e({windowConfig:{id:e.nodes_id,mainId:F.templateNodeSettings}}))),alert(`TemplateNode ${e.nodes_id} updated`),1===e.delete&&t(_e({windowConfig:{mainId:F.mainFlow}}))):alert(`Error: cannot ${e.nodes_id?"update":"create"} templateNode ${e.name}, ID: ${e.nodes_id}`)})),ue=x("fetchFlowVersion",(async e=>{const t=(await re(1160,{item_id:25,show_ver:e})).flow_steps;return null===t?null:t.filter((({update_version:t})=>t===e||0===e))})),pe=x("postFlowVersion",(async(e,{getState:t,dispatch:o})=>{const n=t(),r=n.flows[n.version],i=new q(r),{drawflow:l}=r,s=Object.values(JSON.parse(JSON.stringify(l))).map((e=>{const{subnodes:t}=i.getNode(e.id),{data:o}=e;return o.flow_node={},["name","description","icon_link_selected"].forEach((e=>{o.flow_node[`node_${e}`]=o[e],delete o[e]})),o.flow_node.node_tooltip=o.nodes_tooltip,delete o.nodes_tooltip,f(h(h({},o),((e,t)=>{var o,n;const r=new q(e).getNode(t),{nodeState:i}=r;return{node_position:i.positionNumber,flow_lane_id:i.lane,flow_step_x:Math.round(i.pos.x),flow_step_y:Math.round(i.pos.y),prev_node_unique_id:null!=(n=null==(o=r.parent)?void 0:o.id)?n:null,this_node_unique_id:r.id}})(r,e.id)),{node_attributes:t.map((({id:e})=>e))})}));if(0===s.length)return void alert("Please add at least one node in flow to allow commit!");console.log(s);const a=await re(1161,{item_id:25,flow_steps:s});"OK"!==a.status||"OK"!==a.sp_name?(console.error(a),alert(JSON.stringify(a))):(alert("Flow successfully updated."),o(ue(0)))})),ge=x("initFlow",(async(e,{dispatch:t})=>{t(ue(0))})),me=x("changeVersion",(async(e,{dispatch:t,getState:o})=>{const{flows:n}=o();return n[e]?e:void t(ue(e))})),he=e=>{const t=JSON.parse(JSON.stringify(e));return t.id_nodes=t.nodes_id,["order","active","icon_link","nodes_group_id","nodes_id"].forEach((e=>delete t[e])),t},fe={node_settings_json:"Settings JSON",node_response_settings_json:"Response JSON",node_object_lists:"Object list",node_attributes:"Node attributes"},we=e=>"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1),be=_("addNewNode"),ve=_("dragTemplate"),xe=_("canvasShapeUpdated"),ye=_("insertCopiedNode"),Ee=_("toggleSidebar"),_e=_("setState"),ke={setStateAction:_e},Ce=E({reducer:y({version:0,flows:[G],templates:[],dragTemplate:0,groups:{},windowConfig:{id:0,mainId:F.mainFlow,sideId:X.none,background:{opacity:0,blur:0,imageUrl:""}}},(t=>{t.addCase(_e,U).addCase(ye,(e=>{const t=Z(e);if(void 0===t.nodeToCopyId)return;const{clientX:o,clientY:n}=t.clientCurrentMousePos,r=JSON.parse(JSON.stringify(t.drawflow[t.nodeToCopyId]));e.canvas?(r.pos=te(o,n,t.config.zoom.value,e.canvas),t.drawflow[t.nodeId]=f(h({},r),{id:t.nodeId,height:0,width:0}),++t.nodeId):console.error("Canvas shape is not available")})).addCase(me.fulfilled,((e,{payload:t})=>{void 0!==t&&(e.version=t)})).addCase(Ee,(e=>{var t;e.sidebarVisible=!(null==(t=e.sidebarVisible)||t)})).addCase(be,((t,{payload:{clientX:o,clientY:n}})=>{const r=t.flows[t.version],i=t.templates.find((({nodes_id:e})=>e===t.dragTemplate));if(!t.dragTemplate)return;if(!t.canvas)return void console.error("Canvas shape is not available");if(!i)return void console.error("Template node not found");const l={id:0,type:e.MIDDLE,data:he(i),port:{in:1,out:2},pos:{x:0,y:0},isSub:!1,height:0,width:0};l.pos=te(o,n,r.config.zoom.value,t.canvas),r.mouseBlockDragPos={clientX:o,clientY:n},r.drawflow[r.nodeId]=f(h({},l),{id:r.nodeId,height:0,width:0}),r.select={type:"node",selectId:r.nodeId++},r.config.drag=!0,t.dragTemplate=void 0})).addCase(ve,((e,{payload:t})=>{e.dragTemplate=t})).addCase(xe,((e,{payload:t})=>{e.canvas=t})).addCase(de.fulfilled,((e,{payload:t})=>{e.templates=t})).addCase(ue.fulfilled,((t,{payload:n})=>{if(!n||0===n.length)return;console.log(n),t.version=n[0].update_version;const r={},i=[],l={},s={};n.forEach((e=>{var t;null==(t=e.node_attributes)||t.forEach(((t,o)=>{l[t]=e.this_node_unique_id,0===o&&(s[t]=!0)}))})),n.forEach((t=>{var o,n;const{this_node_unique_id:a,prev_node_unique_id:d}=t,c=void 0!==l[a];null!==d&&i.push({startId:c?d:null!=(o=l[d])?o:d,endId:a,startPort:s[a]?2:1,endPort:1,visible:!0}),r[a]={id:a,height:0,width:0,type:e.MIDDLE,isSub:c,port:{out:c?1:2,in:1},pos:{x:0,y:0},data:t},["name","description","icon_link_selected"].forEach((e=>{var o;const n=`node_${e}`;t[e]=null==(o=t.flow_node)?void 0:o[n]})),t.nodes_tooltip=(null==(n=t.flow_node)?void 0:n.node_tooltip)||"",delete t.flow_node})),t.flows[t.version]=Q(t.flows[t.version],{type:o.Drawflow+"/load",payload:{drawflow:r,connections:i}});const a=new q(JSON.parse(JSON.stringify(t.flows[t.version]))),{heads:d}=a;if(!t.canvas)return void console.error("Canvas not initialized");const{height:c,width:u}=t.canvas;d[0].setPos({x:u/3,y:c/10}),t.flows[t.version]=a.state})).addCase(se.fulfilled,((e,{payload:t})=>{e.groups=t})).addMatcher((e=>e.type.startsWith(o.Drawflow)),((e,t)=>{e.flows[e.version]=Q(e.flows[e.version],t)}))}))});Ce.getState;const Se=()=>k(),Ie=C;function Ne(e,t){const[o,n]=S.exports.useState((()=>{try{const o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.log(o),t}}));return[o,t=>{try{const r=t instanceof Function?t(o):t;n(r),window.localStorage.setItem(e,JSON.stringify(r))}catch(r){console.log(r)}}]}const De=I.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`,Pe=I.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
`,Oe=()=>{const e=Ie((e=>Z(e).editLock)),t=Se();return N.createElement(De,null,!e&&N.createElement(Pe,null,"Clear"),N.createElement(Pe,{onClick:()=>t(H.setEditLock(!e))},e?"UnLock":"Lock"))},Me=I.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`,je=I.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  padding: 3px 10px;
`,Le=()=>{const e=Se();return N.createElement(Me,null,N.createElement(je,{onClick:()=>e(H.zoom(!0))},"+"),N.createElement(je,{onClick:()=>e(H.zoom(!1))},"-"),N.createElement(je,{onClick:()=>e(H.zoom(null))},"reset"))},Te=D(P,w.isEqual),$e=I.svg`
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
`,Ve=e=>{const{id:t,d:o}=e,n=(e=>Ie(S.exports.useMemo((()=>Te((t=>{if(void 0===e)return!1;const o=Z(t).select;return"path"===(null==o?void 0:o.type)&&o.selectId===e}),(e=>e))),[e])))(t),r=Se();return N.createElement($e,null,N.createElement(ze,{selected:n,d:o,onMouseDown:e=>{void 0!==t&&(e.stopPropagation(),r(H.select({type:"path",selectId:t})))}}))},Be=()=>{var e;const t=null!=(e=Ie(S.exports.useMemo((()=>Te((e=>{const t=Z(e);if(!t.select||t.select.type!==l.out||!t.newPathDirection)return void console.error("Cannot draw new path!");const o=t.ports[t.select.selectId];if(!o)return void console.error("No start port in newPath");const n=o.pos;if(!e.canvas)return void console.error("Canvas shape is not available");const{clientX:r,clientY:i}=t.newPathDirection,s=te(r,i,t.config.zoom.value,e.canvas);return ee(n,s)}),(e=>e))),[])))?e:"";return N.createElement(Ve,{d:t})},We=e=>N.createElement("svg",f(h({},e),{viewBox:"0 0 16 16",fill:"none"}),N.createElement("path",{d:"M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),N.createElement("path",{d:"M14.0016 13.9996L11.1016 11.0996",stroke:"#A5A5B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),Fe=e=>N.createElement("svg",f(h({},e),{viewBox:"0 0 10 14",fill:"none"}),N.createElement("path",{d:"M8 2L2.18437 6.84636C2.08842 6.92631 2.08842 7.07369 2.18437 7.15364L8 12",stroke:"#393C44",strokeWidth:"2.5",strokeLinecap:"round"})),Ae=e=>N.createElement("svg",f(h({},e),{viewBox:"0 0 1792 1792"}),N.createElement("path",{fill:"#217CE8",d:"M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z"})),Xe=e=>N.createElement("svg",f(h({},e),{viewBox:"0 0 19 19",fill:"none"}),N.createElement("path",{d:"M14.25 4.75L4.75 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),N.createElement("path",{d:"M4.75 4.75L14.25 14.25",stroke:"#A6A6B3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),Je=e=>N.createElement("svg",f(h({},e),{enableBackground:"new 0 0 512 512",viewBox:"0 0 512 512"}),N.createElement("g",null,N.createElement("path",{d:"m482.16 288.51 29.84-4.68v-55.66l-29.84-4.68c-24.56-4.14-33.19-36.67-13.99-52.45l22.52-18.55-27.71-47.98-27.56 10.32c-23.33 8.74-47-14.9-38.25-38.25l10.32-27.56-47.98-27.71-18.55 22.52c-15.75 19.16-48.3 10.61-52.45-13.99l-4.68-29.84h-55.66l-4.68 29.84c-4.17 24.56-36.67 33.19-52.45 13.99l-18.55-22.52-47.98 27.71 10.32 27.56c8.74 23.33-14.9 47-38.25 38.25l-27.56-10.32-27.71 47.98 22.52 18.55c19.12 15.74 10.67 48.29-13.99 52.45l-29.84 4.68v55.66l29.84 4.68c24.46 4.15 33.26 36.59 13.99 52.45l-22.52 18.55 27.71 47.98 27.56-10.32c23.22-8.7 47.04 14.81 38.25 38.25l-10.32 27.56 47.98 27.71 18.55-22.52c15.73-19.11 48.27-10.67 52.45 13.99l4.68 29.84h55.66l4.68-29.84c4.12-24.4 36.56-33.3 52.45-13.99l18.55 22.52 47.98-27.71-10.32-27.56c-8.7-23.22 14.81-47.04 38.25-38.25l27.56 10.32 27.71-47.98-22.52-18.55c-19.16-15.76-10.61-48.28 13.99-52.45zm-226.16 92.49c-68.93 0-125-56.07-125-125s56.07-125 125-125 125 56.07 125 125-56.07 125-125 125z",fill:"#7ed8f6"}),N.createElement("path",{d:"m468.17 340.96 22.52 18.55-27.71 47.98-27.56-10.32c-23.44-8.79-46.95 15.03-38.25 38.25l10.32 27.56-47.98 27.71-18.55-22.52c-15.89-19.31-48.33-10.41-52.45 13.99l-4.68 29.84h-27.83v-131c68.93 0 125-56.07 125-125s-56.07-125-125-125v-131h27.83l4.68 29.84c4.15 24.6 36.7 33.15 52.45 13.99l18.55-22.52 47.98 27.71-10.32 27.56c-8.75 23.35 14.92 46.99 38.25 38.25l27.56-10.32 27.71 47.98-22.52 18.55c-19.2 15.78-10.57 48.31 13.99 52.45l29.84 4.68v55.66l-29.84 4.68c-24.6 4.17-33.15 36.69-13.99 52.45z",fill:"#6aa9ff"}),N.createElement("path",{d:"m256 121c-74.44 0-135 60.56-135 135s60.56 135 135 135 135-60.56 135-135-60.56-135-135-135zm0 210c-41.35 0-75-33.64-75-75s33.65-75 75-75 75 33.64 75 75-33.65 75-75 75z",fill:"#6aa9ff"}),N.createElement("path",{d:"m391 256c0 74.44-60.56 135-135 135v-60c41.35 0 75-33.64 75-75s-33.65-75-75-75v-60c74.44 0 135 60.56 135 135z",fill:"#4895ff"}))),Ye=e=>N.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},e),N.createElement("g",{transform:"matrix(1.06642 0 0 1.06642 -1.03 -1106.225)"},N.createElement("circle",{cx:"8.467",cy:"1044.829",r:"5.626",fill:"#c2e4f8"}),N.createElement("path",{fill:"#249fe6",fillRule:"evenodd",style:{lineHeight:"normal",textIndent:0,textAlign:"start",textDecorationLine:"none",textDecorationStyle:"solid",textDecorationColor:"#000",textTransform:"none",isolation:"auto",mixBlendMode:"normal"},d:"M 8 1 C 4.139959 1 1.0000428 4.1398846 1 8 C 0.99997942 11.860115 4.1399146 15 8 15 C 11.860086 15 15.00002 11.860115 15 8 C 14.999957 4.1398846 11.860041 1 8 1 z M 8 2 C 11.319604 2 13.999963 4.6803455 14 8 C 14.000018 11.319654 11.319644 14 8 14 C 4.6803565 14 1.9980292 11.319654 1.9980469 8 C 1.9980837 4.6803455 4.6803952 2 8 2 z M 7.9863281 4.0039062 A 0.50005001 0.50005001 0 0 0 7.4941406 4.5117188 L 7.5 7.5039062 L 4.5039062 7.5097656 A 0.50095123 0.50095123 0 0 0 4.5058594 8.5117188 L 7.5 8.5058594 L 7.5058594 11.5 A 0.50005001 0.50005001 0 1 0 8.5058594 11.5 L 8.5019531 8.5039062 L 11.494141 8.4980469 A 0.50005001 0.50005001 0 1 0 11.492188 7.4980469 L 8.5 7.5039062 L 8.4960938 4.5117188 A 0.50005001 0.50005001 0 0 0 7.9863281 4.0058594 L 7.9863281 4.0039062 z ",color:"#000",fontFamily:"sans-serif",fontWeight:400,overflow:"visible",transform:"matrix(.93772 0 0 .93772 .965 1037.328)"}))),qe=e=>N.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 3",fill:"none"},e),N.createElement("circle",{cx:"1.2",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),N.createElement("circle",{cx:"5.9998",cy:"1.2",r:"1.2",fill:"#C5C5D0"}),N.createElement("circle",{cx:"10.7996",cy:"1.2",r:"1.2",fill:"#C5C5D0"})),Ge=I.button`
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
`,Re=I.div`
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
`,Ue=I.img`
  max-height: 100%;
  max-width: 100%;
`,Ke=I.span``,He=e=>{const{nodes_id:t,order:o}=e,n=Se(),r=S.exports.useRef(null),i=Ie((e=>e.precanvas));return N.createElement(Re,{style:{order:o},ref:r,onMouseDown:e=>{if(void 0===ve)return;n(ve(t));const{current:o}=r;if(!o)return void console.error("No node to copy");const{left:l,top:s}=o.getBoundingClientRect(),a=e.clientX-l,d=e.clientY-s,c=o.cloneNode(!0);c.style.position="absolute",c.style.left=l+window.scrollX+"px",c.style.top=s+window.scrollY+"px",document.body.appendChild(c);const u=e=>{var t;const{clientX:o,clientY:n}=e;if(i){if(o>=i.x&&n>=i.y)return document.removeEventListener("mousemove",u),void(null==(t=c.parentNode)||t.removeChild(c));c.style.left=o-a+window.scrollX+"px",c.style.top=n-d+window.scrollY+"px"}else console.error("Canvas is not ready! Cannot drag template")};document.addEventListener("mousemove",u),document.addEventListener("mouseup",(()=>{var e;document.removeEventListener("mousemove",u),null==(e=c.parentNode)||e.removeChild(c),n(ve(void 0))}),{once:!0});const{height:p,width:g}=getComputedStyle(o);c.style.height=p,c.style.width=g}},N.createElement(Ue,{src:e.icon_link}),N.createElement(Ke,null,e.name),N.createElement(Ge,{onMouseDown:()=>{n(_e({windowConfig:{id:t,mainId:F.templateNodeSettings}}))}},N.createElement(qe,{height:3,width:12})))},Qe=I.div`
  max-height: 100%;
  overflow: hidden;
`,Ze=e=>{const t=Se();return N.createElement(Qe,null,N.createElement("div",null,e.id),e.data.description,N.createElement(Ge,{onMouseDown:o=>{o.preventDefault(),o.stopPropagation(),t(_e({windowConfig:{id:e.id,mainId:F.nodeSettings}}))}},N.createElement(qe,{height:3,width:12})))},et={width:100,height:60,padding:"0 0.5em"},tt={width:200},ot=I.div`
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
`,rt=I(nt)`
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&O`
      left: 100%;
      top: 50%;
    `}
`,it=I(nt)`
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({isSub:e})=>e&&O`
      display: none;
    `}
`,lt=I(nt)`
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  ${({isSub:e})=>e&&O`
      left: 0;
      top: 50%;
    `}
`,st={[l.in]:[lt],[l.out]:[rt,it]},at=e=>{const{nodeId:t,portId:o,type:n}=e,r=Se(),i=(l=e,Ie(S.exports.useMemo((()=>Te((e=>{const{portToConnect:t}=Z(e);if(void 0===t)return!1;const o=JSON.parse(JSON.stringify(t));return delete o.pos,w.isEqual(l,o)}),(e=>e))),[l])));var l;const s=(a=t,Ie(S.exports.useMemo((()=>Te((e=>Z(e).drawflow[a].isSub),(e=>e))),[a])));var a;const d=st[n][o-1];return N.createElement(d,{isSub:s,onMouseDown:e=>{e.stopPropagation(),r(H.selectPort({type:n,nodeId:t,portId:o}))},onMouseUp:()=>{r(H.portMouseUp({nodeId:t,portId:o,PortType:n}))}},N.createElement(ot,{visible:i}))},dt=e=>{const{id:t,port:o,type:n}=e,r=[];for(let i=1;i<=o[n];i++)r.push(N.createElement(at,{key:i,nodeId:t,portId:i,type:n}));return N.createElement("div",{className:`${n}puts`},r)},ct=I.div`
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
`,ut=({id:e})=>{const t=Ie(S.exports.useMemo((()=>Te((e=>Z(e).config.drag),(e=>e))),[])),o=Ie((e=>Z(e).nodeId)),n=(e=>Ie(S.exports.useMemo((()=>Te((t=>Z(t).drawflow[e].pos),(e=>e))),[e])))(e),r=(e=>Ie(S.exports.useMemo((()=>Te((t=>{const o=Z(t).select;return(null==o?void 0:o.selectId)===e&&"node"===o.type}),(e=>e))),[e])))(e),i=Se(),s=S.exports.useRef(null),a=(e=>Ie(S.exports.useMemo((()=>Te((t=>{const o=JSON.parse(JSON.stringify(Z(t).drawflow[e]));return delete o.pos,o}),(e=>e))),[e])))(e),{port:d}=a;return S.exports.useEffect((()=>{if(s.current){const{offsetHeight:t,offsetWidth:o}=s.current;i(H.nodeSize({height:t,width:o,id:e})),i(H.align())}}),[i,e,a]),S.exports.useEffect((()=>{const t=(t,o)=>Array.from(o.querySelector(`.${t}puts`).children).map(((o,r)=>{const i=parseInt(getComputedStyle(o).left)+n.x,l=parseInt(getComputedStyle(o).top)+n.y;return{nodeId:e,pos:{x:i,y:l},portId:r+1,type:t}}));if(s.current){const e=t(l.in,s.current),o=t(l.out,s.current);i(H.pushPorts([...e,...o]))}}),[i,e,n]),S.exports.useEffect((()=>{if(s.current&&o-1===e&&t){const{offsetHeight:t,offsetWidth:o}=s.current;i(H.moveNode({nodeId:e,dx:.2*-o,dy:.2*-t}))}}),[]),N.createElement(ct,{selected:r,ref:s,style:h({left:n.x,top:n.y},a.isSub?et:tt),isSub:a.isSub,onMouseDown:t=>{t.stopPropagation();const{clientX:o,clientY:n}=t;i(H.select({type:"node",selectId:e})),i(H.setMouseBlockDragPos({clientX:o,clientY:n}))},onContextMenu:()=>{},onDoubleClick:()=>{}},N.createElement(Ze,h({},a)),!a.isSub&&N.createElement(N.Fragment,null,N.createElement("button",{onMouseDown:t=>{t.preventDefault(),i(H.toggleSubnodes({id:e})),t.stopPropagation()}},"toggle sub"),N.createElement("button",{onMouseDown:t=>{t.preventDefault(),i(H.toggleChildren({id:e})),t.stopPropagation()}},"toggle children"),N.createElement("button",{onMouseDown:e=>{e.preventDefault(),e.stopPropagation()}},"settings")),N.createElement(dt,{id:e,port:d,type:l.in}),N.createElement(dt,{id:e,port:d,type:l.out}))},pt=()=>{const e=Ie(S.exports.useMemo((()=>Te((e=>{const{drawflow:t}=Z(e);return Object.entries(t).filter((([e,{visible:t}])=>!1!==t)).map((([e])=>Number(e)))}),(e=>e))),[]));return N.createElement(N.Fragment,null,e.map((e=>N.createElement(ut,{key:e,id:e}))))},gt=({id:e})=>{const t=(o=e,Ie(S.exports.useMemo((()=>Te((e=>{var t,n;const r=Z(e),{startId:i,startPort:s,endId:a,endPort:d}=r.connections[o],c=null==(t=r.ports.find((e=>e.nodeId===i&&e.portId===s&&e.type===l.out)))?void 0:t.pos,u=null==(n=r.ports.find((e=>e.nodeId===a&&e.portId===d&&e.type===l.in)))?void 0:n.pos;return c&&u?ee(c,u):""}),(e=>e))),[o])));var o;return N.createElement(Ve,{key:e,id:e,d:t})},mt=()=>{const e=Ie(S.exports.useMemo((()=>Te((e=>{const{connections:t}=Z(e);return t.reduce(((e,t,o)=>(t.visible&&e.push(o),e)),[])}),(e=>e))),[])).map((e=>N.createElement(gt,{key:e,id:e})));return N.createElement(N.Fragment,null,e)};const ht=I.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-image: url(${"/Drawflow-react/assets/tile.07d222ee.png"});
  background-repeat: repeat;
  background-size: 30px 30px;
`,ft=I.div`
  width: 100%;
  height: 100%;
  position: relative;
`,wt=(e,t,o,n)=>{var r;const[i,l]=(null==(r=getComputedStyle(e).transform.match(/^matrix\((.+)\)$/))?void 0:r[1].split(",").slice(-2).map(Number))||[0,0];e.style.transform=`translate(${i+t}px, ${l+o}px) scale(${n})`},bt=I.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`,vt=I.button`
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
`,xt=()=>{(()=>{const e=Se(),[t]=Ne(r.backgroundOpacity,50),[o]=Ne(r.backgroundBlur,50),[n]=Ne(r.backgroundImageUrl,"");S.exports.useEffect((()=>{e(_e({windowConfig:{background:{opacity:t,blur:o,imageUrl:n}}}))}),[])})();const e=Ie(S.exports.useMemo((()=>Te((e=>{const t=Z(e),{config:{zoom:o},newPathDirection:n,canvasDrag:r}=t;return{config:{zoom:o},newPathDirection:n,canvasDrag:r}}),(e=>e))),[])),{config:{zoom:t},newPathDirection:o,canvasDrag:n}=e,i=Se(),l=S.exports.useRef(null),s=S.exports.useRef(null);S.exports.useEffect((()=>{const{current:e}=l;e&&wt(e,0,0,t.value)}),[n,t.value]),S.exports.useEffect((()=>{const{current:e}=l;if(e){const t=e.getBoundingClientRect(),o={x:t.x,y:t.y,width:e.clientWidth,height:e.clientHeight};i(xe(o))}const{current:t}=s;if(t){const e=t.getBoundingClientRect(),o={x:e.x,y:e.y,width:t.clientWidth,height:t.clientHeight};i(_e({precanvas:o}))}}));const{opacity:a,blur:d,imageUrl:c}=Ie((e=>e.windowConfig.background));return N.createElement(ht,{ref:s,className:"drawflow",tabIndex:0,onKeyDownCapture:e=>{"Delete"===e.key&&(i(H.deletePath()),i(H.deleteNode())),e.ctrlKey&&"c"===e.key&&i(H.copyNode()),e.ctrlKey&&"v"===e.key&&i(ye())},onMouseDown:()=>{i(H.canvasDrag(!0)),i(H.unSelect())},onMouseUp:()=>i(H.canvasMouseUp()),onMouseMove:e=>{const{clientX:o,clientY:r,movementX:s,movementY:a}=e,{current:d}=l;n&&d&&wt(d,s,a,t.value),i(H.canvasMouseMove({clientX:o,clientY:r,movementX:s,movementY:a}))},onMouseEnter:e=>{const{clientX:t,clientY:o}=e;i(be({clientX:t,clientY:o}))},style:{backgroundColor:`rgba(251, 251, 251, ${a}%)`}},N.createElement(bt,{style:{backgroundImage:`url(${c})`,filter:`blur(${d/10}px)`}}),N.createElement(Oe,null),N.createElement(Le,null),N.createElement(vt,{onClick:e=>{e.preventDefault(),i(pe())}},"Commit"),N.createElement(ft,{ref:l,style:{}},N.createElement(pt,null),N.createElement(mt,null),o&&N.createElement(Be,null)))};const yt=I.div`
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
`,Et=I(Re)`
  /* min-height: 5em; */
  padding: 25px;
  order: 998;

  :hover {
    cursor: pointer;
  }
`,_t=e=>{const t=Ie((e=>e.templates)),o=Se(),{searchWord:n,selectedGroup:r}=e,i=n.toLowerCase().split(" ").filter((e=>e.length>0));return N.createElement(yt,null,t.map((e=>{const t=JSON.stringify(e,null,2);return(0===r||e.nodes_group_id===r)&&(i.find((e=>t.toLowerCase().includes(e)))||!i.length)&&N.createElement(He,h({key:e.nodes_id},e))})),N.createElement(Et,{onClick:()=>o(ce(f(h({},{flow_node_type_id:0,nodes_id:0,node_scrdata_id:0,flow_action_scrdata_id:0,order:0,nodes_group_id:0,name:"**",description:"**",icon_link:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",icon_link_selected:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:0,execute_node_specific_date_time:"2020-11-11T19:30",loop_cycles:0,node_settings_json:{},node_response_settings_json:{},loop_cycle_reached_jump_to_node:0,node_attributes:[],node_object_lists:{},node_story:"Node story"}),{order:Math.max(...t.map((e=>e.order)))+1})))},N.createElement(Ye,null)))},kt=I.div`
  width: 300px;
  order: -2;
  max-height: calc(100vh + 40px);
`,Ct=I.div`
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
`,It=({selectedGroup:e,setSelectedGroup:t})=>{Se();const o=Ie((e=>e.groups));return N.createElement(Ct,null,N.createElement(St,{key:0,selected:0===e,onClick:()=>t(0)},"All"),Object.values(o).map((({id:o,node_group_name:n,node_group_order:r})=>N.createElement(St,{key:o,selected:o===e,onClick:()=>t(o)},n))))},Nt=I.input`
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
`,Dt=I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-top: 10px;
`,Pt=I.span`
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
`,Ot=I.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,Mt=({setSearchWord:e})=>{const t=Se();return N.createElement(Dt,null,N.createElement(Pt,null,N.createElement(We,null)),N.createElement(Nt,{type:"text",placeholder:"Search templates",onChange:t=>{e(t.target.value)}}),N.createElement(Ot,{onClick:()=>t(_e({windowConfig:{sideId:X.groupSettings}}))},N.createElement(Je,{height:30})),N.createElement(Lt,null))},jt=I.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  ${({opened:e})=>e&&O`
      transform: rotate(180deg);
    `};
`,Lt=e=>{var t;const o=null==(t=Ie((e=>e.sidebarVisible)))||t,n=Se();return N.createElement(jt,{opened:!o,onClick:()=>n(Ee())},N.createElement(Ae,h({height:40},e)))},Tt=()=>{const[e,t]=S.exports.useState(""),[o,n]=S.exports.useState(0);return!1===Ie((e=>e.sidebarVisible))?null:N.createElement(kt,null,N.createElement(Mt,{setSearchWord:t}),N.createElement(It,{selectedGroup:o,setSelectedGroup:n}),N.createElement(_t,{selectedGroup:o,searchWord:e}))};const $t=I.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e8e8ef;
`,zt=I.div`
  display: flex;
  justify-content: space-between;
`,Vt=O`
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
`,Bt=I.div`
  display: flex;
  align-items: center;
`,Wt=I.button`
  ${Vt};

  &:focus {
    background-color: #dfdfdf;
  }
`,Ft=I.div`
  display: flex;
  align-items: center;
`,At=I.button`
  margin: 0 10px;
  background-color: #eaecf1;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: none;
`,Xt=I.div`
  display: grid;
  //place-items: left;
  div {
  }
`,Jt=I.div`
  font-size: 16px;
  color: #393c44;
  font-family: Roboto, serif;
`,Yt=I.div`
  color: #808292;
  font-size: 14px;
`,qt=I.button`
  ${Vt};

  background-color: #e31c5c;
  display: inline-block;
  margin-right: 10px;
  color: white;
`,Gt=I.button`
  background-color: #217ce8;
  ${Vt};
  color: white;
`,Rt=I.label`
  display: flex;
  align-items: center;
  justify-content: center;

  > span:first-child {
    display: inline-block;
    margin-right: 4px;
  }
`,Ut=()=>{const e=Se(),t=Ie((e=>e.flowInfo)),{flow_name:o,flow_description:n,flow_active:r}=t||{};return N.createElement($t,null,N.createElement(zt,null,N.createElement(At,null,N.createElement(Fe,{height:14})),N.createElement(Xt,null,N.createElement(Jt,null,o||"Loading ..."),N.createElement(Yt,null,n||"Loading ..."))),N.createElement(Bt,null,N.createElement(Wt,{onClick:()=>e(_e({windowConfig:{mainId:F.mainFlow}}))},"Diagram view"),N.createElement(Wt,{onClick:()=>e(_e({windowConfig:{mainId:F.codeEditor}}))},"Code editor"),N.createElement(Wt,null,N.createElement(Rt,null,N.createElement("span",null,"Active"),N.createElement(M,{checked:!!r,icons:{checked:null,unchecked:null},onChange:t=>e(_e({flowInfo:{flow_active:+t.target.checked}}))}))),N.createElement(Wt,{onClick:()=>e(_e({windowConfig:{sideId:X.flowSettings}}))},N.createElement("img",{src:"/Drawflow-react/assets/flowsettings.758f2330.png",alt:""}))),N.createElement(Ft,null,N.createElement(qt,null,"Delete flow"),N.createElement(Gt,{onClick:()=>e(le())},"Save flow")))},Kt=I.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  outline: none;
  border: none;
`,Ht=I.section`
  position: relative;
  flex: 0 0 400px;
  overflow-y: auto;
  max-height: calc(100vh + 40px);
  padding-top: 30px;
  border: 1px solid #e8e8ef;
`,Qt=I.label`
  margin: 10px;
  display: flex;
  flex-direction: column;
`,Zt=I.div`
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
`,eo=I.div`
  background: #e8e8ef;

  label {
    margin: 10px;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 2px;
    }
  }
`,to=()=>{const e=Ie((e=>e.flowInfo)),t=Se(),[o,n]=S.exports.useState([]);S.exports.useEffect((()=>{(async()=>{const e=await re(oe.fetchBackgroundImages,{lab_test:1}),{flow_canvas_background_image:t}=e,o=t.map((({image_link:e})=>e));n(o)})().then()}),[]);const{flow_name:i,flow_description:l,run_times_max:s,user_run_limit_seconds:a}=e||{},[d,c]=Ne(r.backgroundOpacity,50),[u,p]=Ne(r.backgroundBlur,50),[g,m]=Ne(r.backgroundImageUrl,""),w=(e,o)=>{const n=Object.keys(e)[0],r=e[n];return N.createElement("input",f(h({},o),{value:null!=r?r:"Loading ...",onChange:e=>{t(_e({flowInfo:{[n]:e.target.value}}))}}))};return N.createElement(Ht,null,N.createElement(Kt,{onClick:()=>t(_e({windowConfig:{sideId:X.none}}))},N.createElement(Xe,{width:19,height:19})),N.createElement(Qt,null,"Flow name:",w({flow_name:i},{type:"text"})),N.createElement(Qt,null,"Flow description:",w({flow_description:l},{type:"text"})),N.createElement(Qt,null,"Max run times:",w({run_times_max:s},{type:"number"})),N.createElement(Qt,null,"User run limit seconds:",w({user_run_limit_seconds:a},{type:"number"})),N.createElement(eo,null,N.createElement("label",null,"Opacity:",N.createElement("input",{type:"range",value:null!=d?d:0,min:0,max:100,onChange:e=>{const o=+e.target.value;c(o),t(_e({windowConfig:{background:{opacity:o}}}))}})),N.createElement("label",null,"Blur:",N.createElement("input",{onChange:e=>{const o=+e.target.value;p(o),t(_e({windowConfig:{background:{blur:o}}}))},type:"range",min:0,max:100,value:u})),N.createElement(Zt,null,o.map((e=>N.createElement("button",{key:e,onClick:()=>{m(e),t(_e({windowConfig:{background:{imageUrl:e}}}))}},N.createElement("img",{style:{border:g===e?"2px solid blue":""},src:e,alt:"Background image"})))))))},oo=I.button`
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
`,no=I.div``,ro=I.div`
  padding: 0 10px 10px;
  position: relative;
  border: 1px solid #e8e8ef;
  flex: 0 0 300px;
  overflow-y: auto;
  max-height: 100%;
`,io=I.div`
  margin-bottom: 15px;
  padding: 5px;
  border-bottom: 2px solid lightgray;
`,lo=I.span`
  color: blue;

  ::before {
    margin-left: 8px;
    content: " ID.";
  }
`,so=I(oo)`
  text-align: center;
`,ao=I(oo)`
  margin-left: 5px;
`,co=I(oo)`
  margin-left: 5px;
`,uo=I.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 8px;
`,po=I.h2`
  text-align: center;
  border-bottom: 2px solid blue;
  color: #217ce8;
`,go=I.input`
  margin-right: 10px;
  font-weight: bolder;
  border: 1px solid #217ce8;
  font-size: 0.9em;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 5px;
  width: 90%;
`,mo=I.textarea`
  border-radius: 5px;
  border: 1px solid #217ce8;

  /* flex: 1; */
  width: 90%;
  /* text-align: center; */
`,ho=()=>{var e;const t=Ie((e=>e.groups)),o=Se(),[n,r]=S.exports.useState(t),i=(e,t)=>{const o=h(h({},n[e]),t);r(f(h({},n),{[e]:o}))};if(Object.keys(t).length!==Object.keys(n).length){const o={};for(const[r,i]of Object.entries(t))o[Number(r)]=w.merge(i,null!=(e=n[Number(r)])?e:{});r(o)}return N.createElement(ro,null,N.createElement(po,null,"Node groups"),Object.values(n).map((({id:e,node_group_name:t,node_group_order:r,node_group_description:l})=>N.createElement(io,{key:e},N.createElement(uo,null,N.createElement(lo,null,e),N.createElement(ao,{onClick:()=>{window.confirm(`Do you really wanna delete group ${t}, ID.${e}`)&&o(ae({id:e,delete:1}))}},"Delete"),N.createElement(co,{onClick:()=>{window.confirm(`Do you really wanna save group ${t}, ID.${e}`)&&o(ae(n[e]))}},"Save")),N.createElement(go,{value:t,type:"text",onChange:t=>{i(e,{node_group_name:t.target.value})}}),N.createElement(mo,{value:l,onChange:t=>{i(e,{node_group_description:t.target.value})}})))),N.createElement(no,null,N.createElement(so,{onClick:()=>{o(ae({id:0,node_group_order:0,node_group_name:"Group name",node_group_description:"Group description"}))}},"Add new")))};const fo=I.div`
  flex: 1;
  ${({shift:e})=>e&&O`
      div.ql-toolbar.ql-snow {
        padding-left: 40px;
      }

      .jsoneditor-menu {
        padding-left: 40px;
      }
    `}
`,wo=({values:e,setValues:t})=>{const o=Ie((e=>e.sidebarVisible)),n=S.exports.useRef(null),r=S.exports.useRef();return S.exports.useEffect((()=>{if(n.current&&!r.current){const e={mode:"tree",modes:["code","form","text","tree","view","preview"],onChangeText(e){try{const o=JSON.parse(e);t(o)}catch(o){console.log({e:o})}}};r.current=new j(n.current,e)}return()=>{var e;null==(e=r.current)||e.destroy()}}),[]),S.exports.useEffect((()=>{r.current&&JSON.stringify(r.current.get())!==JSON.stringify(e)&&r.current.update(e)}),[e]),N.createElement(fo,{shift:!(null==o||o),ref:n})},bo={flow_node_type_id:0,nodes_id:0,node_scrdata_id:0,flow_action_scrdata_id:0,order:0,nodes_group_id:0,name:"**",description:"**",icon_link:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",icon_link_selected:"https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",nodes_tooltip:"",id_priority:0,active:0,execution_wait_time_seconds:0,execute_node_specific_date_time:"2020-11-11T19:30",loop_cycles:0,node_settings_json:{},node_response_settings_json:{},loop_cycle_reached_jump_to_node:0,node_attributes:[],node_object_lists:{},node_story:"Node story"},vo=S.exports.createContext({type:"template"}),xo=I.div`
  display: grid;
  grid-template-columns: auto 1fr;
  flex: 1;
`,yo=I.form`
  min-width: 300px;
`,Eo=I.div`
  font-weight: bold;
`,_o=I.div``,ko=I.div`
  display: grid;
  gap: 0.3em;
`,Co=I.header`
  padding: 10px;
  display: flex;
  align-items: center;
  color: #1f1a1a;
  order: -1;
  position: relative;
  ${({shift:e})=>e&&O`
      padding-left: 0;
    `}
`,So=I.img`
  padding: 8px;
  margin-right: 10px;
  border: 3px solid #8db6f6;
  border-radius: 15px;
  max-height: 50px;
  max-width: 50px;
`,Io=I.details`
  summary svg {
    transform: rotate(-90deg);
  }

  &[open] > summary:first-child svg {
    transform: rotate(90deg);
  }

  summary ~ * {
    margin-left: 10px;
  }
`,No=I(Io)``,Do=I.summary`
  color: #e0ebfd;
  background-color: #8db6f6;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 30px;
  margin-top: 0.05em;
`,Po=I.span`
  display: grid;
  place-items: center;

  svg {
    height: 1em;
    width: 1.4em;
  }
`,Oo=I.label`
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 2px solid blue;
`,Mo=I.div``;I.button``;const jo=I.div`
  flex: 1;
  height: max-content;
`,Lo=I.div`
  margin-left: -0.2em;
`,To=I(oo)``,$o=I(oo)``,zo=I(oo)``,Vo=I.div`
  text-align: center;
`,Bo=({children:e})=>N.createElement(Do,null,N.createElement(Po,null,N.createElement(Fe,null)),N.createElement("span",null,e)),Wo=({setFormValues:e,control:t,remount:o,defaultValue:n})=>{const r=L({control:t,defaultValue:n}),[i,l]=S.exports.useState(!1);return N.createElement("div",{onMouseLeave:()=>i&&o()},N.createElement(wo,{values:r,setValues:t=>{l(!0),e(t)}}))},Fo=({path:e})=>{const t=e[e.length-1],o=`${e.join(".")}`,n=we(t.replace(/_/g," "));return N.createElement(Oo,null,n,":",N.createElement(z,{name:o,render:({field:e})=>{const{value:o}=e,n=null===o;(e=>{const o=!(t in bo)||null===e||typeof bo[t]==typeof e;o||console.log({key:t,value:e,properValue:bo[t]})})(o);const r=t in bo?bo[t]:o;let i="string"==typeof r||n?"text":typeof r;return N.createElement("input",f(h({type:i},e),{value:null!=o?o:"",onChange:t=>{const{value:o}=t.target;e.onChange("number"===i?parseInt(o):o)}}))}}))},Ao=({path:e,obj:t})=>{var o;if("object"!=typeof t||null===t)return N.createElement(Fo,{path:e});const n=W(t).map((o=>{const n=t[o];return N.createElement(Ao,{key:[...e,o].join("."),path:[...e,o],obj:n})})),r=e[e.length-1],i=null!=(o=fe[r])?o:we(r.replace(/_/g," "));return N.createElement(Io,null,N.createElement(Bo,null,i),N.createElement(Mo,null,n))},Xo=e=>{var t;const{type:o}=S.exports.useContext(vo),n=Se(),{defaultValues:r,setControl:i}=e,l=T({defaultValues:r}),{handleSubmit:s,formState:{errors:a},reset:d,control:c,getValues:u}=l;S.exports.useEffect((()=>{i(c)}),[]);const p=r,{name:g,description:m,icon_link:w}=p,b=null==(t=Ie((e=>e.sidebarVisible)))||t;return N.createElement($,h({},l),N.createElement(yo,{onSubmit:s((e=>{"template"===o&&n(ce(e)),"node"===o&&n(H.updateNode(e))}))},N.createElement(Co,{shift:!b},!b&&N.createElement(Lo,null,N.createElement(Lt,null)),N.createElement(So,{src:w}),N.createElement(ko,null,N.createElement(Eo,null,g),N.createElement(_o,null,m))),N.createElement(No,{open:!0},N.createElement(Bo,null,"Default settings"),N.createElement(Mo,null,Object.entries(p).map((([e,t])=>"object"==typeof t&&null!==t||e in fe?null:N.createElement(Fo,{key:e,path:[e]}))))),W(fe).map((e=>p[e]?N.createElement(Ao,{key:e,obj:p[e],path:[e]}):null)),Object.keys(a).length&&N.createElement("div",null,N.createElement("pre",null,"Errors")),N.createElement(Vo,null,N.createElement(To,{type:"submit"},"Save"),N.createElement(zo,{type:"reset",onClick:()=>d()},"Reset"),N.createElement($o,{type:"button",onClick:()=>{"template"===o&&n(ce(f(h({},u()),{delete:1})))}},"Delete"))))},Jo=({json:e})=>{const[t,o]=S.exports.useState(0),[n,r]=S.exports.useState(0),[i,l]=S.exports.useState(e),[s,a]=S.exports.useState();return N.createElement(jo,null,N.createElement(xo,null,N.createElement(Xo,{key:`leftBar-${t}`,defaultValues:i,setControl:a}),s&&N.createElement(Wo,{key:`rightBar-${n}`,remount:()=>{r((e=>e+1))},setFormValues:e=>{l(e),o((e=>e+1))},control:s,defaultValue:i})))},Yo=({id:e})=>{const t=Ie((t=>Z(t).drawflow[e].data));return N.createElement(vo.Provider,{value:{type:"node"}},N.createElement(Jo,{json:t}))},qo=({id:e})=>{const t=Ie((t=>t.templates.find((({nodes_id:t})=>t===e))));return void 0===t?N.createElement("div",null,"Loading..."):N.createElement(vo.Provider,{value:{type:"template"}},N.createElement(Jo,{json:t}))},Go=I.div`
  display: flex;
  align-items: normal;
  overflow-x: auto;

  &::-webkit-scrollbar-thumb {
    background-color: #217ce8;
  }

  &::-webkit-scrollbar {
    height: 5px;
  }
`,Ro=I.div`
  flex: 1;
  order: -1;
  width: 0;
`,Uo=I.main`
  display: flex;
  position: relative;
`,Ko=I.div``,Ho=()=>{const e=Ie((e=>e));return N.createElement(wo,{values:e,setValues:()=>null})},Qo=I.button`
  white-space: nowrap;
  //display: inline-block;
  ${({selected:e})=>e&&O`
      font-weight: bold;
    `}
`,Zo=()=>{var e;const t=null==(e=Ie((e=>e.sidebarVisible)))||e,o=Ie((e=>e.flows)),n=Ie((e=>e.flows.length)),r=Ie((e=>e.version)),i=Se(),l=[t?null:N.createElement(Lt,{style:{height:"2em"},key:-1}),N.createElement(Qo,{key:0,selected:0===r,onClick:()=>i(me(0))},"Prototyping",o[0]&&":"+Object.keys(o[0].drawflow).length)];for(let s=n-1;s>0;--s)l.push(N.createElement(Qo,{key:s,selected:s===r,onClick:()=>i(me(s))},"Version ",s,o[s]&&":"+Object.keys(o[s].drawflow).length));return N.createElement(Go,null,l)},en=()=>N.createElement(Ro,null,N.createElement(Zo,null),N.createElement(xt,null)),tn=()=>{var e;Se();const t=null==(e=Ie((e=>e.sidebarVisible)))||e,o=Ie((e=>e.windowConfig.mainId)),n=Ie((e=>e.windowConfig.id)),r=Ie((e=>e.version));return o===F.templateNodeSettings?N.createElement(N.Fragment,null,N.createElement(qo,{key:n,id:n})):o===F.nodeSettings?N.createElement(N.Fragment,null,N.createElement(Yo,{key:n,id:n})):o===F.mainFlow?N.createElement(en,{key:r}):o===F.codeEditor?N.createElement(N.Fragment,null,N.createElement("span",{style:{position:"absolute",zIndex:2,backgroundColor:"white",top:-8}},!t&&N.createElement(Lt,null)),N.createElement(Ho,null)):null},on=()=>{const e=Ie((e=>e.windowConfig.sideId));return e===X.flowSettings?N.createElement(to,null):e===X.groupSettings?N.createElement(ho,null):null},nn=()=>{const e=Se();return S.exports.useEffect((()=>{e(ie()),e(se()),e(de()),e(ge())}),[]),N.createElement(Ko,null,N.createElement(Ut,null),N.createElement(Uo,null,N.createElement(Tt,null),N.createElement(tn,null),N.createElement(on,null)))};V.render(N.createElement(S.exports.StrictMode,null,N.createElement(B,{store:Ce},N.createElement(nn,null))),document.getElementById("root"));
