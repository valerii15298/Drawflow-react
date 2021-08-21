import { useEffect } from "react";
import Node from "../redux/Node";
import { ActionType, useChatBotContext } from "./Chat";
import { botNodeType, chatState, IMessage, msgDirection } from "./chat-types";

export const mapBotTypeToClass: { [p: string]: typeof BotNode } = {};

export const getBotNodeFromNode = (node: Node) => {};

export class BotNode implements IMessage {
  public readonly bot = true;
  public executed = false;
  public src = "";
  public type = botNodeType.Empty;
  public readonly direction = msgDirection.In;
  protected data: { type: botNodeType };

  // actions - related to chat useReducer, also we can create our own
  // based on chatState.
  constructor(protected node: Node, protected actions: ActionType) {
    // @ts-ignore
    this.data = this.node.nodeState.data.node_object_lists;
  }

  /*
   * We have access to flow and node
   * */
  async execute(chatState: chatState) {
    // optionally create next node and execute
    // if switch node then blocks and do not execute next node
  }

  getComponent = () => () => {
    const { state, actions } = useChatBotContext();
    useEffect(() => {
      console.log("Effect");
    }, []);
    // we can generate our actions here to, for example async actions, etc...
    return null;
  };

  getNextBotNode() {
    // TODO In future possible execute all in prrallel instead of just first next one
    const nextNode = this.node.out1[0];
    const type = nextNode.nodeState.data.node_object_lists.type as botNodeType;
    const classOf = mapBotTypeToClass[type];
    return new classOf(this.node, this.actions);
  }
}

export interface IRenderable {
  renderable: true;
}
