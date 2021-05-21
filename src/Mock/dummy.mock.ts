import { data } from "../types"
import { NODE_TYPE } from "../types"

const getData =  async (): Promise<data> => {
  return {
    "nodes": {
      "1": {
        "id": 1,
        "type": NODE_TYPE.MIDDLE,
        "data": {
          "type": "Numeric",
          "name": "HLuF7rwKIuD",
          "value": "asdf"
        },
        "port": {
          "in": 1,
          "out": 2
        },
        "pos": {
          "x": 43.3125,
          "y": 14
        }
      },
      "2": {
        "id": 2,
        "type": NODE_TYPE.MIDDLE,
        "data": {
          "type": "String",
          "name": "y24mqVYQtD",
          "value": "eeee"
        },
        "port": {
          "in": 1,
          "out": 1
        },
        "pos": {
          "x": 469.3125,
          "y": 286
        }
      },
      "3": {
        "id": 3,
        "type": NODE_TYPE.MIDDLE,
        "data": {
          "type": "String",
          "name": "y24mqVYQtD",
          "value": "asdffff"
        },
        "port": {
          "in": 1,
          "out": 1
        },
        "pos": {
          "x": 436.8125,
          "y": 92
        }
      },
      "4": {
        "id": 4,
        "type": NODE_TYPE.MIDDLE,
        "data": {
          "type": "String",
          "name": "1qdlCNXqYBsE",
          "value": "qqweee"
        },
        "port": {
          "in": 1,
          "out": 1
        },
        "pos": {
          "x": 36.3125,
          "y": 209
        }
      }
    },
    "connections": {
      "1_1_3_1": [
        {
          "x": 327.3125,
          "y": 327
        }
      ],
      "4_1_2_1": [
        {
          "x": 323.3125,
          "y": 57
        }
      ]
    },
  }
}

export default getData