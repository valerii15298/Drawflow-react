import { createAsyncThunk } from "@reduxjs/toolkit";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/graphql-request";
import {
  block,
  connections,
  drawflow,
  flowInfo,
  flowType,
  node,
  Port,
  portType,
  purePort,
  RecursivePartial,
  stateData,
} from "../types";
import { setStateAction } from "./actions";
import { getDefaultStateData } from "./drawflowSlice";
import { Flow } from "./Flow";

const client = new GraphQLClient("http://localhost:3000/graphql");
const sdk = getSdk(client);

export const fetchBotFlow = createAsyncThunk(
  "fetchBotFlow",
  async (_, { dispatch }) => {
    const data = await sdk.botFlow({ where: { id: 1 } });
    const { botFlow } = data;
    if (!botFlow) return;
    const versions = botFlow.versions.map((ver) => {
      const ports: Port[] = [];
      const data = getDefaultStateData();
      data.drawflow = ver.nodes.reduce((acc, v) => {
        acc[v.id] = {
          NodeProps: v.NodeProps,
          info: v.info,
          id: v.id,
          port: {
            in: 1,
            out: 2,
          },
          pos: {
            x: 0,
            y: 0,
          },
          isSub: false,
          height: 0,
          width: 0,
        };
        v.ports.forEach(({ id, index }) =>
          ports.push({
            id,
            type: index === 1 ? portType.in : portType.out,
            nodeId: v.id,
            portId: index === 1 ? 1 : index - 1,
            pos: {
              x: 0,
              y: 0,
            },
          })
        );
        return acc;
      }, {} as drawflow);
      data.ports = ports;
      data.connections = ver.connections;
      return data;
    });
    return versions;
  }
);

export const corsUrl = "http://localhost:8080/";

const apiUrl = "https://tastypoints.io/akm/restapi.php";
const baseUrl = corsUrl + apiUrl;

export const getFileUrl = async (file: File) => {
  /*Upload file to server
   * */
  const formData = new FormData();
  formData.append("profile_picture", file);
  const response = await fetch(
    `${corsUrl}https://tastypoints.io/akm/upload_image_process.php`,
    {
      method: "POST",
      body: formData,
    }
  );
  // console.log(await response.text());
  const { link } = (await response.json()) as { link: string };
  return link;
};

export enum REQUEST_TYPE {
  getTemplateNodes = 1156,
  postTemplateNodes = 1157,
  getFlowDataVersion = 1160,
  postFlowDataVersion = 1161,
  getFlow = 1162,
  postFlow = 1163,
  fetchBackgroundImages = 1164,
  getGroups = 1154,
  postGroups = 1155,
  getStepSettingsTemplates = 1222,
}

const flow_id = 25;

export const request = async (
  scrdata_id: REQUEST_TYPE,
  data: Record<string, unknown> = {}
): Promise<any> => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const session_id = urlParams.get("session_id");

  if (!session_id) {
    console.error("session_id is not provided!");
    alert("session_id is not provided!");
  }

  const data_json = {
    session_id,
    sp_name: "OK",
    session_exp: "2021-02-12T02:57:45.453422",
    status: "OK",
    item_id: 0,
    max_row_per_page: 50,
    search_term: "",
    search_term_header: "",
    pagination: 1,
    scrdata_id,
    ...data,
  };

  return fetch(baseUrl, {
    method: "post",
    body: JSON.stringify({ input: data_json }).replace(/'/g, "''"),
  }).then(async (resp) => {
    let json = await resp.json();
    // console.log(json);
    if (json.status && json.data) {
      json = JSON.parse(json.data);
    } else {
      console.error(json);
      alert(json);
      alert(JSON.stringify(json, null, 2));
      throw new Error(json);
    }
    if (json.response_error) {
      console.error(json.response_error);
      alert(JSON.stringify(json.response_error, null, 2));
      throw new Error(json.response_error);
    }
    if (json.status !== "OK" && json.sp_name !== "OK") {
      alert(JSON.stringify(json, null, 2));
      throw new Error(json.response_error);
    }
    return json;
  });
};

export const fetchFlow = createAsyncThunk(
  "fetchFlow",
  async (_, { dispatch }) => {
    const resp = await request(REQUEST_TYPE.getFlow, {
      item_id: flow_id,
    });
    if (resp.flows === null) {
      alert("Such flow do not exist or was deleted!");
      return;
    }
    const flowInfo = resp.flows[0] as flowInfo;
    dispatch(setStateAction({ flowInfo }));
  }
);

export const postFlow = createAsyncThunk(
  "fetchFlow",
  async (_, { getState }) => {
    const { flowInfo } = getState() as flowType;
    if (!flowInfo) {
      console.error("Cannot save flow, data is not available");
      return;
    }

    const resp = await request(REQUEST_TYPE.postFlow, {
      item_id: flow_id,
      flows: [flowInfo],
    });
    if (resp.status === "OK") {
      alert("Saved");
    } else {
      alert("Cannot save flow");
    }
  }
);

export const updateTemplateNode = createAsyncThunk(
  "updateTemplateNode",
  async (templateNode: RecursivePartial<string>, { dispatch }) => {
    console.log("dde");
  }
);

const fetchFlowVersionReqFunc = async (version: number) => {
  const resp = await request(REQUEST_TYPE.getFlowDataVersion, {
    item_id: flow_id,
    show_ver: version,
  });
  const flow_steps = resp.flow_steps as null | step[];
  if (flow_steps === null) {
    return null;
  }
  // console.log(flow_steps[0]);
  return flow_steps.filter(
    ({ update_version }) => update_version === version || version === 0
  );
};

export const fetchFlowVersion = createAsyncThunk(
  "fetchFlowVersion",
  fetchFlowVersionReqFunc
);

const getStepData = (state: stateData, id: number) => {
  const flow = new Flow(state);
  const node = flow.getNode(id);
  const { nodeState } = node;
  return {
    node_position: nodeState.positionNumber,
    flow_lane_id: nodeState.lane,
    flow_step_x: Math.round(nodeState.pos.x),
    flow_step_y: Math.round(nodeState.pos.y),
    prev_node_unique_id: node.parent?.id ?? null,
    this_node_unique_id: node.id,
  };
};

export const postFlowVersion = createAsyncThunk(
  "postFlowVersion",
  async (_, { getState, dispatch }) => {
    const appState = getState() as flowType;
    const state = appState.flows[appState.version];
    const flow = new Flow(state);
    const { drawflow } = state;
    const flow_steps = Object.values(
      JSON.parse(JSON.stringify(drawflow)) as drawflow
    ).map((node) => {
      const { subnodes } = flow.getNode(node.id);
      const { data } = node;
      // data.flow_node = {};
      // ["name", "description", "icon_link_selected"].forEach((key) => {
      //   data.flow_node[`node_${key}`] = data[key];
      //   delete data[key];
      // });
      // data.flow_node.node_tooltip = data.nodes_tooltip;
      // delete data.nodes_tooltip;
      return {
        ...data,
        ...getStepData(state, node.id),
        node_attributes: subnodes.map(({ id }) => id),
      };
    });
    if (flow_steps.length === 0) {
      alert("Please add at least one node in flow to allow commit!");
      return;
    }
    console.log(flow_steps);
    const resp = await request(REQUEST_TYPE.postFlowDataVersion, {
      item_id: flow_id,
      flow_steps,
    });
    if (!(resp.status === "OK" && resp.sp_name === "OK")) {
      console.error(resp);
      alert(JSON.stringify(resp));
    } else {
      alert(`Flow successfully updated.`);
      dispatch(fetchFlowVersion(0));
    }
  }
);

export const initFlow = createAsyncThunk(
  "initFlow",
  async (_, { dispatch }) => {
    dispatch(fetchFlowVersion(0));
  }
);

export const changeVersion = createAsyncThunk(
  "changeVersion",
  async (version: number, { dispatch, getState }) => {
    const { flows } = getState() as flowType;
    if (!flows[version]) {
      dispatch(fetchFlowVersion(version));
      return;
    } else {
      return version;
    }
  }
);
