import Nodes from "../components/Drawflow/Nodes"

const CURV = 0.5;

const RULES = {
    SINGLE: "single",
    THRESHOLD: "threshold",
    CORRELATION: "correlation",
}

const NODE_BLOCK_TYPE = {
    FILTER: "filter",
    SINGLE: "single",
    THRESHOLD: "threshold",
}

const PAGE = {
    [RULES.SINGLE]: 5,
    [RULES.THRESHOLD]: 10,
    [RULES.CORRELATION]: 15,
}

const MODAL_TYPE = {
    import: "import",
    common: "common",
    [RULES.SINGLE]: "single",
    [RULES.THRESHOLD]: "threshold",
    [RULES.CORRELATION]: "correlation",
}

const MODAL_LABEL = {
    [MODAL_TYPE.import]: "Import Modal",
    [MODAL_TYPE.common]: "Node Modal",
    [MODAL_TYPE[RULES.SINGLE]]: "Single Rule Modal",
    [MODAL_TYPE[RULES.THRESHOLD]]: "Threshold Rule Modal",
    [MODAL_TYPE[RULES.CORRELATION]]: "Correlation Rule Modal",
}

const NODE_COMPONENT = {
    [NODE_BLOCK_TYPE.FILTER]: Nodes.Common,
    [NODE_BLOCK_TYPE.SINGLE]: Nodes.Round,
    [NODE_BLOCK_TYPE.THRESHOLD]: Nodes.Round,
}

export {
    CURV,
    // LIST_TYPE,
    // RULES,
    // RULES_LIST_TYPE,
    MODAL_TYPE,
    MODAL_LABEL,
    NODE_BLOCK_TYPE,
    PAGE,
    NODE_COMPONENT,
}
