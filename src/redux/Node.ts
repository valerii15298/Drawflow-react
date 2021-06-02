import { current } from "@reduxjs/toolkit";
import { getPortListByNodeId } from "../components/drawflowHandler";
import { addConnectionType, moveNodeType, node, port, pos, stateData } from "../types";

export class Flow {
    // readonly because we are using only immer.js with redux-toolkit
    public readonly state: stateData
    public readonly nodes: { [id: number]: Node } = {}
    public readonly distanceToConnect = 100
    public readonly distanceToDisconnect = 0

    constructor(state: stateData) {
        this.state = state
        const { drawflow } = this.state
        Object.keys(drawflow).map((id) => this.nodes[Number(id)] = new Node(Number(id), this))
    }

    get heads() {
        return Object.entries(this.nodes).filter(([id, node]) => !node.parent).map(el => el[1])
    }

    getNode(id: number) {
        return this.nodes[id]
    }

    alignAll() {
        console.log(current(this.state))
        this.state.drawflow[1].pos.x = 0
    }

    addConnection({ startId, startPort, endId, endPort }: addConnectionType) {
        // restric conns
        if (this.getNode(startId).clildren(startPort).length || this.getNode(endId).parent)
            return

        const key = `${startId}_${startPort}_${endId}_${endPort}`;
        const { connections } = this.state;

        // if such connection already exist
        if (connections[key] !== undefined) return;

        // add connection:
        connections[key] = []
    }

    moveNode({ dx, dy, nodeId }: moveNodeType) {
        // update ports position
        const { state } = this
        const portKeys = getPortListByNodeId(nodeId, state)
        state.ports = portKeys.reduce((acc, portKey) => {
            acc[portKey] = {
                x: acc[portKey].x + dx,
                y: acc[portKey].y + dy,
            };
            return acc;
        }, { ...state.ports });

        // update node position
        state.drawflow[nodeId].pos.x += dx
        state.drawflow[nodeId].pos.y += dy

        /**
         * Attachment
         * 
         * traverse all other nodes except this one,
         * check if their ports are free for new conn, check distance
         */

        const currentNode = this.getNode(nodeId)
        if (currentNode.parentConnection) {
            // remove connection
            delete this.state.connections[currentNode.parentConnection]
        }
        const nodeInPortPos = currentNode.portInPos
        if (!nodeInPortPos) return
        const portDistances: Array<{ key: string, distance: number }> = []
        Object.entries(this.nodes).forEach(([id, node]) => {
            if (Number(id) === nodeId) return

            node.outPorts.forEach(([key, pos]) => {
                const distance = Math.hypot(nodeInPortPos.x - pos.x, nodeInPortPos.y - pos.y)
                portDistances.push({ key, distance })
            })
        });
        portDistances.sort((a, b) => (a.distance - b.distance))
        if (portDistances.length) {
            const nearestPort = portDistances[0]
            if (nearestPort.distance < this.distanceToConnect) {
                // set state to
                this.state.portToConnect = nearestPort.key
            } else {
                this.state.portToConnect = undefined
            }
        }
    }

    setLaneNumbers() {
        let laneNodes = this.heads
        laneNodes.forEach(node => node.update({ head: node.id, lane: 0 }))

        while (laneNodes.length) {
            const nextLaneNodes: Array<Node> = [];
            laneNodes.forEach(node => {
                let lane = node.lane + 1
                const { subnodes, head } = node
                if (subnodes.length) {
                    for (const sub of subnodes) {
                        sub.update({ lane: lane++, head })
                    }
                }
                const nextNodes = node.clildren(1)
                nextNodes.forEach(nextNode => nextNode.update({ head, lane }))
                nextLaneNodes.push(...nextNodes)
            })
            laneNodes = nextLaneNodes;
        }
    }

    setFlowNodeFullWidth(node: Node) {
        
    }
}

class Node {
    public readonly id: number
    private readonly state: stateData
    public readonly flow: Flow
    public readonly nodeState: node

    constructor(id: number, flow: Flow) {
        this.id = id
        this.flow = flow
        this.state = flow.state
        this.nodeState = this.state.drawflow[this.id]
    }

    get head() {
        return this.nodeState.head
    }

    get lane() {
        return this.nodeState.lane
    }

    get port(): port {
        return this.nodeState.port
    }

    get portInPos(): pos | undefined {
        return Object.entries(this.state.ports).find(([key, value]) => key === `${this.id}_in_1`)?.[1]
    }

    get outPorts() {
        return Object.entries(this.state.ports).filter(([key, pos]) => key.startsWith(`${this.id}_out`))
    }

    get parent(): Node | null {
        const parentId = Object.keys(this.state.connections).find(key => key.split('_')[2] === this.id.toString())?.split('_')[0]
        return parentId ? this.flow.getNode(Number(parentId)) : null
    }

    get parentConnection() {
        return Object.keys(this.state.connections).find((key) => {
            const arr = key.split('_').map(Number)
            return arr[0] === this.parent?.id && arr[2] === this.id && arr[3] === 1
        })
    }

    clildren(portId: number) {
        return Object.keys(this.state.connections)
            .filter(key => key.split('_')[0] === this.id.toString() && key.split('_')[1] === portId.toString())
            .map(conn => this.flow.getNode(Number((conn.split('_')[2]))))
    }

    setLaneNumbers() {
        if (this.parent) return

        let lane = 0
        const head = this.id
        this.update({ lane, head })
        let node = this

    }

    get out1() {
        return this.clildren(1);
    }

    get firstSubnode() {
        return this.clildren(2)[0];
    }

    get subnodes() {
        const { flowLine } = this;
        return flowLine ? flowLine.flowLineNodes : []
    }

    get isSub(): boolean {
        let parent = this.parent
        if (parent) {
            if (parent.firstSubnode === this) return true
            return parent.isSub
        }
        return false
    }

    get complexParentNode() {
        // if is sub eturn complexNode to which belongs this subnode
        return null
    }

    /**
     * If not flow line, - returns null
     */
    get flowLine(): null | { flowLineNodes: Node[], hasSubnodes: Node } {
        const flowLineNodes = [];
        let node: Node = this;
        let hasSubnodes = node.firstSubnode;

        while (node.out1.length === 1) {
            flowLineNodes.push(node);
            hasSubnodes = hasSubnodes || node.firstSubnode;
            node = node.out1[0]
        }

        return (node.out1.length > 1) ? null : { flowLineNodes, hasSubnodes };
    }

    get height() {
        return this.state.drawflow[this.id].height
    }
    get width() {
        return this.state.drawflow[this.id].width
    }

    get data() {
        return {}
    }

    get pos() {
        return this.state.drawflow[this.id].pos
    }

    setPos(newPos: pos) {
        const { pos } = this;
        const { x, y } = newPos;
        this.flow.moveNode({ nodeId: this.id, dx: x - pos.x, dy: y - pos.y })
    }

    update(data: node | any) {

    }
}

// export class AppNode extends Node {
//     get prev_node_unique_id() {
//         return 2;
//     }
//     get this_node_unique_id() {
//         return 2;
//     }
//     get next_node_unique_id() {
//         return 2;
//     }

// }