import { current } from "@reduxjs/toolkit";
import { addConnectionType, node, port, pos, stateData } from "../types";
import { moveNode } from "./drawflowSlice";

export class Flow {
    // readonly because we are using only immer.js with redux-toolkit
    public readonly state: stateData
    public readonly nodes: { [id: number]: Node } = {}

    constructor(state: stateData) {
        this.state = state
        const { drawflow } = this.state
        Object.keys(drawflow).map((id) => this.nodes[Number(id)] = new Node(Number(id), this))
    }

    get heads() {
        return []
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
    
    setLaneNumbers() {

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

    get port(): port {
        return this.nodeState.port
    }

    get parent(): Node | null {
        const parentId = Object.keys(this.state.connections).find(key => key.split('_')[2] === this.id.toString())?.split('_')[0]
        return parentId ? this.flow.getNode(Number(parentId)) : null
    }

    clildren(portId: number) {
        return Object.keys(this.state.connections)
            .filter(key => key.split('_')[0] === this.id.toString() && key.split('_')[1] === portId.toString())
            .map(conn => this.flow.getNode(Number((conn.split('_')[2]))))
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
        moveNode(this.state, { nodeId: this.id, dx: x - pos.x, dy: y - pos.y })
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