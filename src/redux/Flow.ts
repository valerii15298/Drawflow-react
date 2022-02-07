import lodash from "lodash";
import { syncTimer } from "../decorators";
import {
  addConnectionType,
  moveNodeType,
  ObjectKeys,
  Port,
  stateData,
} from "../types";
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

  // @syncTimer()
  addConnection(conn: addConnectionType) {
    // eslint-disable-next-line prefer-const
    if (conn.fromPort.id === conn.toPort.id) {
      return;
    }
    // TODO change from hardcoded!!
    const getId = () => {
      const ids = ObjectKeys(this.state.connections);
      return ids.length ? Math.max(...ids) + 1 : 1;
    };
    let fromPort = lodash.cloneDeep(this.state.ports[conn.fromPort.id]);
    const toPort = lodash.cloneDeep(this.state.ports[conn.toPort.id]);
    if (!fromPort || !toPort) {
      throw new TypeError("Cannot find ports by id!!!");
    }

    const nodeTo = this.getNode(toPort.nodeId);
    const nodeFrom = this.getNode(fromPort.nodeId);
    const connectAsSub = fromPort.portId === 2;

    if (nodeTo.parent || nodeFrom.nodeState.visible < 0) {
      return false;
    }

    const flowLine = nodeTo.flowLine;

    // console.log(flowLine);
    if (
      (connectAsSub || nodeFrom.isSub) &&
      (!flowLine || flowLine.hasSubnodes)
    ) {
      return false;
    }

    // let startId = 0, startPort = 0
    // Insertion to the subnodes
    let nextNode: Node | null = null;
    if (connectAsSub && nodeFrom.subnodes.length) {
      if (nodeFrom.nodeState.subnodesVisibility === false) {
        // connect subnode to the end when subnodes are hidden
        fromPort = nodeFrom.subnodes.at(-1)!.portOut1;
        const id = getId();
        this.state.connections[id] = {
          // TODO Change id to one from server
          id,
          fromPort,
          toPort,
          visible: 0,
        };
        const { flowLineNodes } = flowLine as { flowLineNodes: Node[] };
        flowLineNodes.forEach((node) => node.toggleVisibility(false));
        return;
      } else {
        nextNode = nodeFrom.subnodes[0];
      }
    }
    // insert into middle subnodes
    if (nodeFrom.isSub && nodeFrom.out1.length) {
      //next subnode in line
      nextNode = nodeFrom.out1[0];
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
      if (!(connToDelete.id in this.state.connections)) {
        throw new TypeError("Cannot find connection");
      }
      delete this.state.connections[connToDelete.id];

      // conn nodeFrom -> nodeTo -> nextNode

      let id = getId();
      console.log({ id });
      this.state.connections[id] = {
        id,
        fromPort: {
          id: fromPort.id,
        },
        toPort: {
          id: toPort.id,
        },
        visible: 0,
      };

      id = getId();
      this.state.connections[id] = {
        id,
        fromPort: {
          id: nodeTo.portOut1.id,
        },
        toPort: {
          id: nextNode.inPort.id,
        },
        visible: 0,
      };
      return;
    }

    const id = getId();
    this.state.connections[id] = {
      id: id,
      fromPort,
      toPort,
      visible: 0,
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
        Math.abs(distance - currentNode.spacingY) >= this.distanceToDisconnect
      ) {
        // remove connection
        delete this.state.connections[currentNode.parentConnection.id];
        this.setLaneNumbers();
        // this.alignAll();
      }
    }
  }

  toggleAvailablePortToConnect(nodeId: number) {
    if (!this.state.config.drag) {
      this.state.portToConnect = null;
      return;
    }
    const currentNode = this.getNode(nodeId);
    const currentNodeHead = currentNode.head;

    const nodeInPortPos = currentNode.portInPos;

    let nearestPort: { port: Port; distance: number } | undefined;

    Object.entries(this.nodes)
      .filter(
        ([, node]) =>
          node.head !== currentNodeHead && node.nodeState.visible >= 0
      )
      .forEach(([id, node]) => {
        if (Number(id) === nodeId) return;
        const { isSub } = node;
        node.outPorts.forEach((port) => {
          // if it is port of subnode for subnodes,
          // because subnode cannot have subnodes itself
          if (isSub && port.portId === 2) return;
          const { pos } = port;
          const distance = Math.hypot(
            nodeInPortPos.x - pos.x,
            nodeInPortPos.y - pos.y
          );

          if (
            distance < this.distanceToConnect &&
            (!nearestPort || distance < nearestPort.distance)
          ) {
            nearestPort = {
              port,
              distance,
            };
          }
        });
      });

    if (nearestPort) {
      this.state.portToConnect = nearestPort.port;
    } else {
      this.state.portToConnect = null;
    }
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
