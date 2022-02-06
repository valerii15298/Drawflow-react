import { syncTimer } from "../decorators";
import { addConnectionType, moveNodeType, Port, stateData } from "../types";
import Node from "./Node";

export class Flow {
  // readonly because we are using only immer.js with redux-toolkit
  public readonly state: stateData;
  public readonly nodes: { [id: number]: Node } = {};
  public readonly distanceToConnect = 100;
  public readonly distanceToDisconnect = 10;

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
    const node = this.nodes[id];
    if (node === undefined) {
      throw new Error(
        `Cannot get node with id: ${id}. Node is not present in flow array of nodes`
      );
    }
    return node;
  }

  // @syncTimer()
  align() {
    this.setLaneNumbers();
    this.heads.forEach((node, idx) => {
      // time(`align ${idx}`);
      node.alignChildren();
      // timeEnd(`align ${idx}`);
    });
    return this.state.drawflow;
  }

  // @syncTimer()
  alignAll() {
    const { drawflow, connections, ports } = this.state;
    // console.log(this.state);
    const nextValue = {
      drawflow,
      connections,
      ports,
    };

    this.state.drawflow = new Flow(
      JSON.parse(JSON.stringify(nextValue))
    ).align();
  }

  /*allowConnection(conn: addConnectionType) {
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
  }*/

  addConnection(conn: addConnectionType) {
    // eslint-disable-next-line prefer-const
    const fromPort = this.state.ports[conn.fromPort.id];
    const toPort = this.state.ports[conn.toPort.id];
    if (!fromPort || !toPort) {
      throw new TypeError("Cannot find ports by id!!!");
    }

    const nodeIn = this.getNode(toPort.nodeId);
    const nodeOut = this.getNode(fromPort.nodeId);
    const connectAsSub = fromPort.portId === 2;

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

    // let startId = 0, startPort = 0
    // Insertion to the subnodes
    let nextNode: Node | null = null;
    if (connectAsSub && nodeOut.subnodes.length) {
      if (nodeOut.nodeState.subnodesVisibility === false) {
        // connect subnode to the end when subnodes are hidden
        fromPort.id = nodeOut.subnodes[nodeOut.subnodes.length - 1].id;
        fromPort.portId = 1;
        this.state.connections[999] = {
          // TODO Change id to one from server
          id: 999,
          fromPort,
          toPort,
          visible: true,
        };
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

    if (nextNode) {
      const connToDelete = Object.values(this.state.connections).find(
        (conn) =>
          conn.fromPort.id === fromPort.id &&
          conn.toPort.id === nextNode!.inPort.id
      );
      if (!connToDelete) {
        throw new TypeError("Connection not found");
      }
      delete this.state.connections[connToDelete.id];

      const { flowLineNodes } = flowLine as { flowLineNodes: Node[] };
      const lastNode = flowLineNodes[flowLineNodes.length - 1];
      this.state.connections[98] = {
        // TODO delete hardcoded id
        id: 98,
        fromPort: {
          id: lastNode.portOut1.id,
        },
        toPort: {
          id: nextNode.inPort.id,
        },
        visible: true,
      };
    }

    this.state.connections[187] = {
      // TODO delete hardcoded id
      id: 187,
      fromPort,
      toPort,
      visible: true,
    };
  }

  moveNode({ dx, dy, nodeId }: moveNodeType) {
    this.state.drawflow[nodeId].pos.x += dx;
    this.state.drawflow[nodeId].pos.y += dy;
  }

  dragNode({ dx, dy, nodeId }: moveNodeType) {
    this.moveNode({
      dx,
      dy,
      nodeId,
    });
    this.toggleAvailablePortToConnect(nodeId);
  }

  untieNodeIfFarAway(nodeId: number) {
    const currentNode = this.getNode(nodeId);
    if (currentNode.parentConnection) {
      const { fromPort } = currentNode.parentConnection;
      // console.log({ startPort, endPort });
      const {
        pos: { x: x1, y: y1 },
      } = this.state.ports[fromPort.id];

      const { inPort } = this.getNode(nodeId);
      if (!inPort) {
        throw new TypeError("No in port!!!");
      }
      const { x: x2, y: y2 } = inPort.pos;

      const distance = Math.hypot(x1 - x2, y1 - y2);
      // console.log({ distance });
      if (
        Math.abs(distance - currentNode.spacingY) < this.distanceToDisconnect
      ) {
        return;
      }

      // remove connection
      delete this.state.connections[currentNode.parentConnection.id];
      // this.alignAll();
    }
  }

  // @syncTimer()
  toggleAvailablePortToConnect(nodeId: number) {
    if (!this.state.config.drag) return;

    const currentNode = this.getNode(nodeId);
    const currentNodeHead = currentNode.head;

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
            nearestPort = {
              port,
              distance,
            };
          }
        });
      });

    if (nearestPort !== null) {
      //@ts-ignore
      this.state.portToConnect = nearestPort.port;
    } else {
      this.state.portToConnect = undefined;
    }
    // console.timeEnd("toggle");
  }

  setLaneNumbers() {
    let laneNodes = this.heads;
    laneNodes.forEach((node) =>
      node.update({
        head: node.id,
        lane: 0,
      })
    );

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
            sub.update({
              lane: lane++,
              head,
            });
          }
        }
        const nextNodes = node.children(1);
        nextNodes.forEach((nextNode) =>
          nextNode.update({
            head,
            lane,
          })
        );
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
