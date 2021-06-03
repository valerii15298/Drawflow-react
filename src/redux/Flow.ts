import { getPortListByNodeId } from "../components/drawflowHandler";
import { addConnectionType, moveNodeType, stateData } from "../types";
import Node from './Node'


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
        this.setLaneNumbers()
        this.heads.forEach(node => {
            // node.calculateFullWidth()
            node.alignChildren()
        })
    }

    addConnection(conn: addConnectionType) {
        const { startId, startPort, endId, endPort } = conn
        if (!this.connectionAllowed(conn)) return
        const key = `${startId}_${startPort}_${endId}_${endPort}`;
        this.state.connections[key] = []
        
    }

    connectionAllowed({ startId, startPort, endId, endPort }: addConnectionType): boolean {
        if ((startPort === 2 && this.getNode(startId).children(startPort).length)
            || this.getNode(endId).parent)
            return false
        const nodeIn = this.getNode(endId)
        const nodeOut = this.getNode(startId)

        const flowLine = nodeIn.flowLine

        const connectAsSub = startPort === 2

        if (connectAsSub) {
            // if (!flowLine || flowLine.hasSubnodes) { return false }
        }
        
        return true
    }

    moveNode({ dx, dy, nodeId }: moveNodeType) {
        this.state.drawflow[nodeId].pos.x += dx
        this.state.drawflow[nodeId].pos.y += dy
    }

    dragNode({ dx, dy, nodeId }: moveNodeType) {
        this.moveNode({ dx, dy, nodeId })

        /**
         * Attachment
         * 
         * traverse all other nodes except this one,
         * check if their ports are free for new conn, check distance
         */

        const currentNode = this.getNode(nodeId)
        const currentNodeHead = currentNode.head
        if (currentNode.parentConnection) {
            // remove connection
            delete this.state.connections[currentNode.parentConnection]
        }
        const nodeInPortPos = currentNode.portInPos
        if (!nodeInPortPos) return
        const portDistances: Array<{ key: string, distance: number }> = []
        Object.entries(this.nodes)
            .filter(([_, node]) => node.head !== currentNodeHead)
            .forEach(([id, node]) => {
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
                let lane = node.lane as number + 1
                const { subnodes, head } = node
                if (subnodes.length) {
                    console.log({ subnodes })
                    for (const sub of subnodes) {
                        sub.update({ lane: lane++, head })
                    }
                }
                const nextNodes = node.children(1)
                nextNodes.forEach(nextNode => nextNode.update({ head, lane }))
                nextLaneNodes.push(...nextNodes)
            })
            laneNodes = nextLaneNodes;
        }
    }
}
