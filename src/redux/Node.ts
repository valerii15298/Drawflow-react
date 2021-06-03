import lodash from "lodash"
import { node, port, pos, stateData, updateNode } from "../types"
import { Flow } from "./Flow"

export default class Node {
    public readonly id: number
    private readonly state: stateData
    public readonly flow: Flow
    public readonly nodeState: node
    public readonly spacingX = 40
    public readonly spacingY = 60

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

    get fullWidth() {
        return this.nodeState.fullWidth
    }

    calculateFullWidth() {
        const children = this.out1
        let fullChildrenWidth = 0
        children.forEach(node => {
            fullChildrenWidth += node.calculateFullWidth()
        })
        const rez = Math.max(this.width,
            fullChildrenWidth + this.spacingX * (children.length - 1))
        this.update({ fullWidth: rez })
        return rez
    }

    alignChildren() {
        const { out1 } = this
        this.update({isSub: false})

        let xPos = this.pos.x - (this.calculateFullWidth() / 2 - this.width / 2)
        for (const node of out1) {
            const x = xPos + (node.calculateFullWidth() / 2 - node.width / 2)
            node.setPos({ x, y: this.pos.y + this.height + this.spacingY })
            xPos += node.calculateFullWidth() + this.spacingX
            node.alignChildren()
        }

        const { subnodes } = this
        // console.log(subnodes)
        if (subnodes.length) {
            xPos = this.pos.x + this.width + this.spacingX
            subnodes.forEach(subNode => {
                subNode.setPos({ x: xPos, y: this.pos.y })
                subNode.update({ isSub: true })
                xPos += subNode.width + this.spacingX
            })
        }
    }

    children(portId: number) {
        return Object.keys(this.state.connections)
            .filter(key => key.split('_')[0] === this.id.toString() && key.split('_')[1] === portId.toString())
            .map(conn => this.flow.getNode(Number((conn.split('_')[2]))))
    }

    get out1() {
        return this.children(1);
    }

    get firstSubnode(): Node | undefined {
        return this.children(2)[0];
    }

    get subnodes(): Node[] {
        return this.firstSubnode?.flowLine?.flowLineNodes || []
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
    get flowLine(): null | { flowLineNodes: Node[], hasSubnodes: Node | undefined } {
        const flowLineNodes: Node[] = [this];
        let node: Node = this;
        let hasSubnodes = node.firstSubnode;

        while (node.out1.length === 1) {
            hasSubnodes = hasSubnodes || node.firstSubnode;
            node = node.out1[0]
            flowLineNodes.push(node);
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

    update(data: updateNode) {
        const newData = lodash.merge(this.nodeState, data)
        Object.assign(this.nodeState, newData)
    }
}