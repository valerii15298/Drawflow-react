import { data } from "../types"
import { NODE_TYPE } from "../types"

const getData = async (): Promise<data> => {
  const data: any = {
    "nodes": {
    },
    "connections": {
      "1_1_3_1": [],
      "4_1_2_1": []
    },
  }

  const node = {
    "id": 1,
    "type": NODE_TYPE.MIDDLE,
    "data": {
      "type": "Numeric",
      "name": "HLuF7rwKIuD",
      "value": "asdf",
    },
    "port": {
      "in": 1,
      "out": 2,
    },
    "pos": {
      "x": 43.3125,
      "y": 14,
    }
  }

  for (let i = 1; i < 5; ++i) {
    node.id = i
    node.data.name = `Node ${i}`
    node.pos.x = 100 * i
    node.pos.y = 50 * i
    data.nodes[i] = JSON.parse(JSON.stringify(node))
  }


  return data
}

export default getData