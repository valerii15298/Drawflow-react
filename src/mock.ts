import { getTemplateNode } from "./components/TemplateNodesList";
import { block, node, NODE_TYPE } from "./types";
import { data } from "./types";

const makeRandomNames = (
  length: number,
  searchWord: string,
  max = 15,
  min = 5
) => {
  const result = [];
  const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let j = 0; j < length; j++) {
    let word = "";
    for (let i = 0; i < Math.floor(Math.random() * (max - min) + min); i++) {
      word += map.charAt(Math.floor(Math.random() * map.length));
    }
    if (searchWord.length > 1) {
      word += searchWord;
    }
    result.push(word);
  }
  return result;
};

const getFilters = async (number: number) => {
  const rnd = () => ({
    type: "type",
    name: "name",
    value: makeRandomNames(1, "", 4, 2)[0],
  });
  const rez = [];
  for (let i = 0; i < number; ++i) {
    rez.push(rnd());
  }
  return rez;
};

export const testNode = (): node => {
  const templateNode: block = getTemplateNode();

  return {
    id: 0,
    type: NODE_TYPE.MIDDLE,
    data: templateNode,
    port: {
      in: 1,
      out: 2,
    },
    pos: {
      x: -20,
      y: 100,
    },
    isSub: false,
    height: 0,
    width: 0,
  };
};

const getDummy = async (): Promise<data> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = {
    nodes: {},
    connections: [],
  };

  for (let i = 1; i < 5; ++i) {
    const node = testNode();
    node.id = i;
    node.data.name = `Node ${i}`;
    node.pos.x = 100 * i;
    node.pos.y = 50 * i;
    data.nodes[i] = node;
  }

  return data;
};

const mock = {
  getDummy,
  getFilters,
};

export default mock;
