import { FC, useEffect } from "react";
import { BotNode, IRenderable, mapBotTypeToClass } from "../BotNode";
import { useChatBotContext } from "../Chat";
import { botNodeType, chatState } from "../chat-types";

const waitNumberOfMilliseconds = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));
console.log("IAAAAAMMMMMMM");

export class Wait extends BotNode implements IRenderable {
  renderable: true;
  declare data: { delay: number; type: botNodeType };

  getComponent = () => {
    const Component = () => {
      const { state, actions } = useChatBotContext();
      useEffect(() => {
        console.log("Use effect");
        // const nextBotNode = this.getNextBotNode();
        // nextBotNode.execute(state);
      }, []);
      // we can generate our actions here to, for example async actions, etc...
      return <div>Hello delay</div>;
    };
    return Component;
  };

  async execute(chatState): Promise<void> {
    await super.execute(chatState);
    console.log("Wait started");
    const delayMs = this.data.delay;
    await waitNumberOfMilliseconds(delayMs);
    console.log("Wait ended");
    this.actions.appendMessageNode(this);
  }
}

mapBotTypeToClass[botNodeType.Delay] = Wait;
console.log(mapBotTypeToClass);
