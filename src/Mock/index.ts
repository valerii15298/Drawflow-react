import { NODE_TYPE } from "../types";
import getDummy from "./dummy.mock";
import getFilters from "./fields.mock";

const mock = {
    getDummy,
    getFilters,
}

export default mock
export const testNode = () => {
    return {
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
    }
}