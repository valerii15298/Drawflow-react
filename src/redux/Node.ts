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

    get totalWidth() {
        if (this.nodeState.visible === false) return 0
        const totalWidth = Math.max(this.width + this.subnodesWidth, this.leftWidth + this.rightWidth)
        return totalWidth
    }

    get childrenTotalWidth() {
        const { out1 } = this
        if (!out1.length) return 0

        let totalWidth = 0
        out1.forEach(node => {
            totalWidth += node.totalWidth
        })
        return totalWidth + this.spacingX * (out1.length - 1)
    }

    alignChildren() {
        const { out1 } = this
        this.update({ isSub: false, port: { out: 2 } })


        let xPos = this.pos.x - (this.leftWidth - this.width / 2)

        for (const node of out1) {
            const x = xPos + (node.leftWidth - node.width / 2)
            node.setPos({ x, y: this.pos.y + this.height + this.spacingY })
            if (node.nodeState.visible !== false) {
                xPos += node.totalWidth + this.spacingX
            }
            node.alignChildren()
        }

        const { subnodes } = this
        if (subnodes.length) {

            xPos = this.pos.x + this.width + this.spacingX
            subnodes.forEach(subNode => {
                subNode.update({ isSub: true, port: { out: 1 } })
                subNode.setPos({ x: xPos, y: this.pos.y + (this.height / 2 - subNode.height / 2) })
                delete this.state.ports[`${subNode.id}_out_2`]
                xPos += subNode.width + this.spacingX
            })
        }
    }

    get leftWidth(): number {
        if (this.nodeState.visible === false) return 0
        const { out1, childrenTotalWidth } = this
        const selfLeftWidth = this.width / 2
        if (!out1.length) {
            return selfLeftWidth
        }

        const leftChildWidth = out1[0].leftWidth
        const rightChildWidth = out1[out1.length - 1].rightWidth

        let childrenRightWidth = leftChildWidth + (childrenTotalWidth - leftChildWidth - rightChildWidth) / 2
        return Math.max(childrenRightWidth, selfLeftWidth)
    }

    get rightWidth(): number {
        if (this.nodeState.visible === false) return 0
        const { out1, childrenTotalWidth } = this
        const selfRightWidth = this.width / 2 + this.subnodesWidth
        if (!out1.length) {
            return selfRightWidth
        }

        const leftChildWidth = out1[0].leftWidth
        const rightChildWidth = out1[out1.length - 1].rightWidth

        let childrenRightWidth = rightChildWidth + (childrenTotalWidth - leftChildWidth - rightChildWidth) / 2
        return Math.max(childrenRightWidth, selfRightWidth)
    }

    get all2Successors(): Array<Node> {
        const { subnodes, out1 } = this
        const successors: Array<Node> = [...out1]

        subnodes.forEach(subNode => successors.push(subNode))
        this.out1.forEach(node => successors.push(node))

        return successors
    }

    get allSuccessors() {
        const successors = [...this.out1, ...this.subnodes]
        const allSuccessors = [...successors]
        successors.forEach(node => allSuccessors.push(...node.allSuccessors))
        return allSuccessors
    }

    toggleVisibility(visible: boolean) {
        // set self visibility
        this.update({ visible })

        this.parentConnection && (this.state.connections[this.parentConnection] = visible)

        // set conns visibility to false
        this.outConnections.forEach(connKey => {
            this.state.connections[connKey] = visible
        })
    }

    toggleChildrenVisibility() {
        const visibility = this.nodeState.childrenVisibility ?? true
        this.update({ childrenVisibility: !visibility })
        const { subnodes, allSuccessors } = this
        allSuccessors.forEach(node => {
            if (!subnodes.includes(node)) { node.toggleVisibility(!visibility) }
        })
    }

    toggleSubnodesVisibility() {
        const visibility = this.nodeState.subnodesVisibility ?? true
        this.update({ subnodesVisibility: !visibility })
        this.subnodes.forEach(node => {
            node.toggleVisibility(!visibility)
        })
    }

    get outConnections() {
        return Object.entries(this.state.connections)
            .filter(([key,]) => {
                // key: fromId_portNum_toId_portNum
                const arr = key.split("_").map(Number);
                return arr[0] === this.id
            })
            .map(arr => arr[0])
    }

    children(portId: number) {
        return Object.keys(this.state.connections)
            .filter(key => key.split('_')[0] === this.id.toString() && key.split('_')[1] === portId.toString())
            .map(conn => this.flow.getNode(Number((conn.split('_')[2]))))
    }

    get out1() {
        return this.children(1)
    }

    get firstSubnode(): Node | undefined {
        return this.children(2)[0]
    }

    get subnodes(): Node[] {
        return this.firstSubnode?.flowLine?.flowLineNodes || []
    }

    get subnodesWidth(): number {
        return this.subnodes.reduce((acc, subNode) => {
            return acc + subNode.width + this.spacingX
        }, 0)
    }

    get isSub(): boolean {
        return this.complexParentNode !== null
    }

    get complexParentNode(): Node | null {
        // if is sub eturn complexNode to which belongs this subnode
        let parent = this.parent
        if (parent) {
            if (parent.firstSubnode === this) return parent
            return parent.complexParentNode
        }
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