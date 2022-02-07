import lodash from "lodash";
import { memoize } from "../decorators";
import {
  canvasShape,
  connection,
  node,
  portType,
  pos,
  stateData,
  updateNode,
} from "../types";
import { Flow } from "./Flow";

export default class Node {
  public readonly id: number;
  public readonly flow: Flow;
  public readonly nodeState: node;
  public readonly spacingX = 40;
  public readonly spacingY = 60;
  public cache: { [key: string]: number } = {};
  private readonly state: stateData;

  constructor(id: number, flow: Flow) {
    this.id = id;
    this.flow = flow;
    this.state = flow.state;
    this.nodeState = this.state.drawflow[this.id];
  }

  get head() {
    return this.nodeState.head;
  }

  get lane() {
    return this.nodeState.lane;
  }

  // get port(): port {
  //   return this.nodeState.port;
  // }

  get portInPos(): pos {
    return this.inPort.pos;
  }

  get outPorts() {
    return Object.values(this.state.ports).filter(
      ({ type, nodeId }) => this.id === nodeId && type === portType.out
    );
  }

  get parent(): Node | null {
    const { parentConnection } = this;
    if (!parentConnection) {
      return null;
    }
    const parentId = this.state.ports[parentConnection.fromPort.id].nodeId;
    return parentId ? this.flow.getNode(parentId) : null;
  }

  get inPort() {
    const inPort = Object.values(this.state.ports).find(
      (port) => port.type === portType.in && port.nodeId === this.id
    );
    if (!inPort) {
      throw new TypeError("Port not found");
    }
    return inPort;
  }

  get nodePorts() {
    return Object.values(this.state.ports).filter(
      (port) => port.nodeId === this.id
    );
  }

  get portOut1() {
    const outPort = Object.values(this.state.ports).find(
      (port) =>
        port.type === portType.out &&
        port.nodeId === this.id &&
        port.portId === 1
    );
    if (!outPort) {
      throw new TypeError("Port not found");
    }
    return outPort;
  }

  get parentConnection() {
    const { inPort } = this;
    if (!inPort) return;
    return Object.values(this.state.connections).find((conn) => {
      if (!conn) {
        throw new TypeError("Connection is null!!!");
      }
      return conn.toPort.id === inPort.id;
    });
  }

  get all2Successors(): Array<Node> {
    const { subnodes, out1 } = this;
    const successors: Array<Node> = [...out1];

    subnodes.forEach((subNode) => successors.push(subNode));
    this.out1.forEach((node) => successors.push(node));

    return successors;
  }

  get allSuccessors() {
    const successors = [...this.out1, ...this.subnodes];
    const allSuccessors = [...successors];
    successors.forEach((node) => allSuccessors.push(...node.allSuccessors));
    return allSuccessors;
  }

  get outConnections() {
    const { outPorts } = this;
    return Object.values(this.state.connections).filter(({ fromPort }) => {
      return outPorts.some((port) => port.id === fromPort.id);
    });
  }

  get out1() {
    return this.children(1);
  }

  get prevDirectNodes() {
    const prevNodes = [];
    let nextParent = this.parent;
    while (nextParent) {
      // include subnodes of another nodes
      prevNodes.push(...nextParent.subnodes.reverse());
      prevNodes.push(nextParent);
      nextParent = nextParent.parent;
    }
    return prevNodes;
  }

  get firstSubnode(): Node | undefined {
    return this.children(2)[0];
  }

  get subnodes(): Node[] {
    return this.firstSubnode?.flowLine?.flowLineNodes || [];
  }

  @memoize()
  get subnodesWidth(): number {
    if (this.nodeState.subnodesVisibility === false) return 0;
    return this.subnodes.reduce((acc, subNode) => {
      return acc + subNode.width + this.spacingX;
    }, 0);
  }

  get isSub(): boolean {
    return this.complexParentNode !== null;
  }

  get complexParentNode(): Node | null {
    // if is sub return complexNode to which belongs this subnode
    const parent = this.parent;
    if (parent) {
      if (parent.firstSubnode === this) return parent;
      return parent.complexParentNode;
    }
    return null;
  }

  get flowLine(): null | {
    /**
     * If not flow line, - returns null
     */
    flowLineNodes: Node[];
    hasSubnodes: Node | undefined;
  } {
    const flowLineNodes: Node[] = [this];
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let node: Node = this;
    let hasSubnodes = node.firstSubnode;

    while (node.out1.length === 1) {
      node = node.out1[0];
      flowLineNodes.push(node);
      hasSubnodes = hasSubnodes || node.firstSubnode;
    }

    return node.out1.length > 1
      ? null
      : {
          flowLineNodes,
          hasSubnodes,
        };
  }

  get height() {
    return this.state.drawflow[this.id].height;
  }

  get width() {
    return this.state.drawflow[this.id].width;
  }

  get pos() {
    return this.state.drawflow[this.id].pos;
  }

  @memoize()
  private get totalWidth() {
    if (this.nodeState.visible < 0) return 0;
    return Math.max(
      this.width + this.subnodesWidth,
      this.leftWidth + this.rightWidth
    );
  }

  @memoize()
  private get childrenTotalWidth() {
    const { out1 } = this;
    if (!out1.length) return 0;

    let totalWidth = 0;
    out1.forEach((node) => {
      totalWidth += node.totalWidth;
    });
    return totalWidth + this.spacingX * (out1.length - 1);
  }

  @memoize()
  private get leftWidth(): number {
    if (this.nodeState.visible < 0) return 0;
    const { out1, childrenTotalWidth } = this;
    const selfLeftWidth = this.width / 2;
    if (!out1.length) {
      return selfLeftWidth;
    }

    const leftChildWidth = out1[0].leftWidth;
    const rightChildWidth = out1[out1.length - 1].rightWidth;

    const childrenRightWidth =
      leftChildWidth +
      (childrenTotalWidth - leftChildWidth - rightChildWidth) / 2;
    return Math.max(childrenRightWidth, selfLeftWidth);
  }

  @memoize()
  private get rightWidth(): number {
    if (this.nodeState.visible < 0) return 0;
    const { out1, childrenTotalWidth } = this;
    const selfRightWidth = this.width / 2 + this.subnodesWidth;
    if (!out1.length) {
      return selfRightWidth;
    }

    const leftChildWidth = out1[0].leftWidth;
    const rightChildWidth = out1[out1.length - 1].rightWidth;

    const childrenRightWidth =
      rightChildWidth +
      (childrenTotalWidth - leftChildWidth - rightChildWidth) / 2;
    return Math.max(childrenRightWidth, selfRightWidth);
  }

  alignChildren() {
    const { out1 } = this;
    this.update({
      isSub: false,
    });

    let xPos = this.pos.x - (this.leftWidth - this.width / 2);

    for (const node of out1) {
      const x = xPos + (node.leftWidth - node.width / 2);
      node.setPos({
        x,
        y: this.pos.y + this.height + this.spacingY,
      });
      if (node.nodeState.visible === 0) {
        xPos += node.totalWidth + this.spacingX;
      }
      node.alignChildren();
    }

    const { subnodes } = this;
    if (subnodes.length) {
      xPos = this.pos.x + this.width + this.spacingX;
      subnodes.forEach((subNode) => {
        subNode.update({
          isSub: true,
        });
        subNode.setPos({
          x: xPos,
          y: this.pos.y + (this.height / 2 - subNode.height / 2),
        });

        // delete this.state.ports[`${subNode.id}_out_2`]
        xPos += subNode.width + this.spacingX;
      });
    }
  }

  toggleVisibility(visible: boolean) {
    const v = visible ? 1 : -1;

    // set self visibility
    this.nodeState.visible += v;

    this.parentConnection && (this.parentConnection.visible += v);

    // set conns visibility to value of visible
    this.outConnections.forEach((conn) => {
      conn.visible += v;
    });
  }

  toggleChildrenVisibility() {
    const visibility = this.nodeState.childrenVisibility ?? true;
    this.nodeState.childrenVisibility = !visibility;
    const { subnodes, allSuccessors } = this;
    allSuccessors.forEach((node) => {
      if (!subnodes.includes(node)) {
        node.toggleVisibility(!visibility);
      }
    });
  }

  toggleSubnodesVisibility() {
    const visibility = this.nodeState.subnodesVisibility ?? true;
    this.nodeState.subnodesVisibility = !visibility;
    this.subnodes.forEach((node) => {
      node.toggleVisibility(!visibility);
    });
  }

  children(portId: number) {
    const outPort = this.outPorts.find(
      (port) => port.portId === portId && port.type === portType.out
    );
    if (!outPort) {
      throw new TypeError("Port not found");
    }
    return Object.values(this.state.connections)
      .filter(({ fromPort }) => fromPort.id === outPort.id)
      .map((conn) => {
        const port = this.state.ports[conn.toPort.id];
        if (!port) {
          throw new TypeError("Port not found");
        }
        return this.flow.getNode(port.nodeId);
      });
  }

  setPos(newPos: pos) {
    const { pos } = this;
    const { x, y } = newPos;
    this.flow.moveNode({
      nodeId: this.id,
      dx: x - pos.x,
      dy: y - pos.y,
    });
  }

  putInCenter(canvas: canvasShape) {
    const { width, height } = canvas;
    this.setPos({
      x: width / 3,
      y: height / 3,
    });
  }

  update(data: updateNode) {
    const newData = lodash.merge(this.nodeState, data);
    Object.assign(this.nodeState, newData);
  }
}
