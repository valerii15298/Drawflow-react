import { connection, Port } from "./../types";
import { addConnectionType, moveNodeType, stateData } from "../types";
import Node from "./Node";

export class Flow {
  // readonly because we are using only immer.js with redux-toolkit
  public readonly state: stateData;
  public readonly nodes: { [id: number]: Node } = {};
  public readonly distanceToConnect = 100;
  public readonly distanceToDisconnect = 0;

  constructor(state: stateData) {
    this.state = state;
    const { drawflow } = this.state;
    Object.keys(drawflow).map(
      (id) => (this.nodes[Number(id)] = new Node(Number(id), this))
    );
  }

  get heads() {
    return Object.entries(this.nodes)
      .filter(([, node]) => !node.parent)
      .map((el) => el[1]);
  }

  getNode(id: number) {
    return this.nodes[id];
  }

  alignAll() {
    this.setLaneNumbers();
    this.heads.forEach((node) => {
      // node.calculateFullWidth()
      node.alignChildren();
    });
    // console.log('Align all')
  }

  allowConnection(conn: addConnectionType) {
    const { startId, startPort, endId } = conn;
    const nodeIn = this.getNode(endId);
    const nodeOut = this.getNode(startId);
    const connectAsSub = startPort === 2;

    if (nodeIn.parent || nodeOut.nodeState.visible === false) {
      return false;
    }

    const flowLine = nodeIn.flowLine;

    if (
      (connectAsSub || nodeOut.isSub) &&
      (!flowLine || flowLine.hasSubnodes)
    ) {
      return false;
    }
    return true;
  }

  addConnection(conn: addConnectionType) {
    // eslint-disable-next-line prefer-const
    let { startId, startPort, endId, endPort } = conn;
    const nodeIn = this.getNode(endId);
    // console.log(startId);
    const nodeOut = this.getNode(startId);
    const connectAsSub = startPort === 2;

    if (nodeIn.parent || nodeOut.nodeState.visible === false) {
      return false;
    }

    const flowLine = nodeIn.flowLine;

    // console.log(flowLine);
    if (
      (connectAsSub || nodeOut.isSub) &&
      (!flowLine || flowLine.hasSubnodes)
    ) {
      return false;
    }

    // Insertion to the subnodes
    let nextNode: Node | null = null;
    if (connectAsSub && nodeOut.subnodes.length) {
      if (nodeOut.nodeState.subnodesVisibility === false) {
        // connect subnode to the end when subnodes are hidden
        startId = nodeOut.subnodes[nodeOut.subnodes.length - 1].id;
        startPort = 1;
        this.state.connections.push({
          startId,
          startPort,
          endId,
          endPort,
          visible: true,
        });
        const { flowLineNodes } = flowLine as { flowLineNodes: Node[] };
        flowLineNodes.forEach((node) => node.toggleVisibility(false));
        return;
      } else {
        nextNode = nodeOut.subnodes[0];
      }
    }
    if (nodeOut.isSub && nodeOut.out1.length) {
      nextNode = nodeOut.out1[0];
    }

    if (nextNode !== null) {
      const connToDelete = this.state.connections.find(
        (conn) =>
          conn.startId === startId &&
          conn.startPort === startPort &&
          conn.endId === (nextNode as Node).id &&
          conn.endPort === 1
      ) as connection;
      const indexConnToDelete = this.state.connections.indexOf(connToDelete);
      this.state.connections.splice(indexConnToDelete, 1);

      const { flowLineNodes } = flowLine as { flowLineNodes: Node[] };
      const lastNode = flowLineNodes[flowLineNodes.length - 1];
      this.state.connections.push({
        startId: lastNode.id,
        startPort: 1,
        endId: nextNode.id,
        endPort: 1,
        visible: true,
      });
    }

    this.state.connections.push({
      startId,
      startPort,
      endId,
      endPort,
      visible: true,
    });
  }

  moveNode({ dx, dy, nodeId }: moveNodeType) {
    this.state.drawflow[nodeId].pos.x += dx;
    this.state.drawflow[nodeId].pos.y += dy;
  }

  dragNode({ dx, dy, nodeId }: moveNodeType) {
    this.moveNode({ dx, dy, nodeId });
    this.toggleAvailablePortToConnect(nodeId);
  }

  toggleAvailablePortToConnect(nodeId: number) {
    /**
     * Because of long computatuon we executing
     * this action not often then 1 time per 200 milliseconds
     */

    const now = Date.now();
    if (this.state.computing && now - this.state.computing < 100) {
      return;
    }
    this.state.computing = now;

    /**
     * Attachment
     *
     * traverse all other nodes except this one,
     * check if their ports are free for new conn, check distance
     */

    if (!this.state.config.drag) return;

    const currentNode = this.getNode(nodeId);
    const currentNodeHead = currentNode.head;
    if (currentNode.parentConnection) {
      // remove connection
      const indexConnToDelete = this.state.connections.indexOf(
        currentNode.parentConnection
      );
      this.state.connections.splice(indexConnToDelete, 1);
      this.alignAll();
    }
    const nodeInPortPos = currentNode.portInPos;
    if (!nodeInPortPos) return;

    let nearestPort: { port: Port; distance: number } | null = null;

    Object.entries(this.nodes)
      .filter(
        ([, node]) =>
          node.head !== currentNodeHead && node.nodeState.visible !== false
      )
      .forEach(([id, node]) => {
        if (Number(id) === nodeId) return;
        node.outPorts.forEach((port) => {
          const { pos } = port;
          const distance = Math.hypot(
            nodeInPortPos.x - pos.x,
            nodeInPortPos.y - pos.y
          );

          if (
            distance < this.distanceToConnect &&
            (nearestPort === null || distance < nearestPort.distance)
          ) {
            nearestPort = { port, distance };
          }
        });
      });

    if (nearestPort !== null) {
      //@ts-ignore
      this.state.portToConnect = nearestPort.port;
    } else {
      this.state.portToConnect = undefined;
    }
  }

  setLaneNumbers() {
    let laneNodes = this.heads;
    laneNodes.forEach((node) => node.update({ head: node.id, lane: 0 }));

    while (laneNodes.length) {
      const nextLaneNodes: Array<Node> = [];
      laneNodes.forEach((node) => {
        let lane = (node.lane as number) + 1;
        const { subnodes, head } = node;
        if (head === undefined) {
          console.error("head is undefined in setLaneNumbers");
          return;
        }
        if (subnodes.length) {
          for (const sub of subnodes) {
            sub.update({ lane: lane++, head });
          }
        }
        const nextNodes = node.children(1);
        nextNodes.forEach((nextNode) => nextNode.update({ head, lane }));
        nextLaneNodes.push(...nextNodes);
      });
      laneNodes = nextLaneNodes;
    }

    this.heads.forEach((node) => {
      const { head } = node;
      for (
        let laneNumber = 0,
          positionNumber = 0,
          nextLaneNodes: Array<Node> = [node];
        nextLaneNodes.length;
        ++laneNumber
      ) {
        nextLaneNodes = Object.values(this.nodes).filter(
          (nextNode) => nextNode.lane === laneNumber && nextNode.head === head
        );

        nextLaneNodes.forEach((nextNode) => {
          nextNode.update({ positionNumber: positionNumber++ });
        });
      }
    });
  }
}