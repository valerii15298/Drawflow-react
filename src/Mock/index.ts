import { node, NODE_TYPE } from "../types";
import getFilters from "./fields.mock";
import { data } from "../types"

export const testNode = (): node => {
    return {
        id: 0,
        "type": NODE_TYPE.MIDDLE,
        "data": {
            "type": "String",
            "name": "1qdlCNXqYBsE",
            "value": "qqweee"
        },
        "port": {
            "in": 1,
            "out": 2
        },
        "pos": {
            "x": -20,
            "y": 100
        },
        "isSub": false,
        height: 0,
        width: 0
    }
}

const getDummy = async (): Promise<data> => {
  const data: any = {
    "nodes": {
    },
    "connections": {
      "1_1_3_1": [],
      "4_1_2_1": []
    },
  }

  for (let i = 1; i < 5; ++i) {
    const node = testNode()
    node.id = i
    node.data.name = `Node ${i}`
    node.pos.x = 100 * i
    node.pos.y = 50 * i
    data.nodes[i] = node
  }


  return data
}


const mock = {
    getDummy,
    getFilters,
}

export default mock
