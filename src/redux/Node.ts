import {
  connection,
  node,
  port,
  portType,
  pos,
  stateData,
  updateNode,
} from "../types";
import lodash from "lodash";
import { Flow } from "./Flow";

export default class Node {
  public readonly id: number;
  public readonly flow: Flow;
  public readonly nodeState: node;
  public readonly spacingX = 40;
  public readonly spacingY = 60;
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

  get port(): port {
    return this.nodeState.port;
  }

  get portInPos(): pos | undefined {
    return this.state.ports.find(
      ({ nodeId, portId, type }) =>
        nodeId === this.id && portId === 1 && type === portType.in
    )?.pos;
  }

  get outPorts() {
    return this.state.ports.filter(
      ({ type, nodeId }) => this.id === nodeId && type === portType.out
    );
  }

  get parent(): Node | null {
    const parentId = this.parentConnection?.startId;
    return parentId ? this.flow.getNode(parentId) : null;
  }

  get parentConnection(): connection | undefined {
    return this.state.connections.find((conn) => {
      if (!conn) console.log({ conn });
      const { endId, endPort } = conn;
      return endId === this.id && endPort === 1;
    });
  }

  get totalWidth() {
    if (this.nodeState.visible === false) return 0;
    return Math.max(
      this.width + this.subnodesWidth,
      this.leftWidth + this.rightWidth
    );
  }

  get childrenTotalWidth() {
    const { out1 } = this;
    if (!out1.length) return 0;

    let totalWidth = 0;
    out1.forEach((node) => {
      totalWidth += node.totalWidth;
    });
    return totalWidth + this.spacingX * (out1.length - 1);
  }

  get leftWidth(): number {
    if (this.nodeState.visible === false) return 0;
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

  get rightWidth(): number {
    if (this.nodeState.visible === false) return 0;
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
    return this.state.connections.filter(({ startId }) => {
      return startId === this.id;
    });
  }

  get out1() {
    return this.children(1);
  }

  get firstSubnode(): Node | undefined {
    return this.children(2)[0];
  }

  get subnodes(): Node[] {
    return this.firstSubnode?.flowLine?.flowLineNodes || [];
  }

  get subnodesWidth(): number {
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

    return node.out1.length > 1 ? null : { flowLineNodes, hasSubnodes };
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

  alignChildren() {
    const { out1 } = this;
    this.update({ isSub: false, port: { out: 2 } });

    let xPos = this.pos.x - (this.leftWidth - this.width / 2);

    for (const node of out1) {
      const x = xPos + (node.leftWidth - node.width / 2);
      node.setPos({ x, y: this.pos.y + this.height + this.spacingY });
      if (node.nodeState.visible !== false) {
        xPos += node.totalWidth + this.spacingX;
      }
      node.alignChildren();
    }

    const { subnodes } = this;
    if (subnodes.length) {
      xPos = this.pos.x + this.width + this.spacingX;
      subnodes.forEach((subNode) => {
        subNode.update({ isSub: true, port: { out: 1 } });
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
    // set self visibility
    this.update({ visible });

    this.parentConnection && (this.parentConnection.visible = visible);

    // set conns visibility to false
    this.outConnections.forEach((conn) => {
      conn.visible = visible;
    });
  }

  toggleChildrenVisibility() {
    const visibility = this.nodeState.childrenVisibility ?? true;
    this.update({ childrenVisibility: !visibility });
    const { subnodes, allSuccessors } = this;
    allSuccessors.forEach((node) => {
      if (!subnodes.includes(node)) {
        node.toggleVisibility(!visibility);
      }
    });
  }

  toggleSubnodesVisibility() {
    const visibility = this.nodeState.subnodesVisibility ?? true;
    this.update({ subnodesVisibility: !visibility });
    this.subnodes.forEach((node) => {
      node.toggleVisibility(!visibility);
    });
  }

  children(portId: number) {
    return this.state.connections
      .filter(
        ({ startId, startPort }) => startId === this.id && startPort === portId
      )
      .map((conn) => this.flow.getNode(conn.endId));
  }

  setPos(newPos: pos) {
    const { pos } = this;
    const { x, y } = newPos;
    this.flow.moveNode({ nodeId: this.id, dx: x - pos.x, dy: y - pos.y });
  }

  update(data: updateNode) {
    const newData = lodash.merge(this.nodeState, data);
    Object.assign(this.nodeState, newData);
  }
}
