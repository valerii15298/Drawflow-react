import { port, pos } from "../../types";
import Drawflow from "./Drawflow";

export default class Node {
    constructor(public id: number, private flow: Drawflow) { }

    get state() {
        return this.flow.state
    }

    get port(): port {
        return this.flow.state.drawflow[this.id].port
    }
    get parent(): Node | null {
        const parentId = Object.keys(this.state.connections).find(key => key.split('_')[2] === this.id.toString())?.split('_')[0]
        return parentId ? new Node(parseInt(parentId), this.flow) : null
    }

    clildren(portId: number) {
        return Object.keys(this.state.connections)
            .filter(key => key.split('_')[0] === this.id.toString() && key.split('_')[1] === portId.toString())
            .map(conn => new Node(parseInt((conn.split('_')[2])), this.flow))
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
        return 200
    }
    get width() {
        return 200
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
        this.flow.movePosition(this.id, { x: x - pos.x, y: y - pos.y })
    }
}

export class AppNode extends Node {
    get prev_node_unique_id() {
        return 2;
    }
    get this_node_unique_id() {
        return 2;
    }
    get next_node_unique_id() {
        return 2;
    }

}