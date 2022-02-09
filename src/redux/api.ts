import { createAsyncThunk } from "@reduxjs/toolkit";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/graphql-request";
import {
  connection,
  connections,
  drawflow,
  flowType,
  idConnType,
  idNodeType,
  idPortType,
  node,
  Port,
  ports,
  portType,
  RecursivePartial,
  stateData,
} from "../types";
import {
  actions,
  getDefaultStateData,
  selectActiveDrawflow,
} from "./drawflowSlice";
import { Flow } from "./Flow";

const client = new GraphQLClient("http://localhost:3000/graphql");
const sdk = getSdk(client);

export const fetchBotFlow = createAsyncThunk("fetchBotFlow", async () => {
  const data = await sdk.botFlow({ where: { id: 1 } });
  const arr = data.botFlow?.versions.map((ver) => {
    const ports: Record<idPortType, Omit<Port, "pos">> = {};
    const drawflow = ver.nodes.reduce((acc, v) => {
      acc[v.id] = v;
      v.ports.forEach(
        ({ id, index }) =>
          (ports[id] = {
            id,
            type: index === 1 ? portType.in : portType.out,
            nodeId: v.id,
            portId: index === 1 ? 1 : index - 1,
          })
      );
      return acc;
    }, {} as Record<idNodeType, Pick<node, "id" | "NodeProps" | "info">>);
    const connections = ver.connections.reduce((acc, v) => {
      acc[v.id] = {
        ...v,
      };
      return acc;
    }, {} as Record<idConnType, Omit<connection, "visible">>);
    return [
      ver.id,
      {
        drawflow,
        ports,
        connections,
      },
    ] as const;
  });
  if (!arr) return;
  // console.log({ arr });
  return Object.fromEntries(arr);
});

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

export const postFlow = createAsyncThunk("postFlow", () => {
  console.log("postFlow");
});

export const postFlowVersion = createAsyncThunk("postFlowVersion", () => {
  console.log("postFlowVersion");
});

export const addConnection = createAsyncThunk("addConnection", (ss) => {
  console.log("addConnection");
});

export const removeConnection = createAsyncThunk("removeConnection", () => {
  console.log("removeConnection");
});

export const addFlowNode = createAsyncThunk("addFlowNode", () => {
  console.log("addFlowNode");
});

export const removeFlowNode = createAsyncThunk("removeFlowNode", () => {
  console.log("removeFlowNode");
});

export const updateFlowNode = createAsyncThunk("updateFlowNode", () => {
  console.log("updateFlowNode");
});

export const canvasMouseUp = createAsyncThunk(
  "canvasMouseUp",
  (_, { dispatch, getState }) => {
    const appState = getState() as flowType;
    const state = selectActiveDrawflow(appState);
    const flow = new Flow(state);
    if (state.portToConnect && state.select?.selectId) {
      const { id } = state.portToConnect;
      const endId = state.select.selectId;
      const conns = flow.addConnection({
        visible: 0,
        fromPort: {
          id,
        },
        toPort: {
          id: flow.getNode(endId).inPort.id,
        },
      });
      // process conns:
      // delete conns, add generated ids to new ones,
      // insert into state new ones,
      // send to server as transactions,
      // if fail on server then:
      //    show error,
      //    keep local stop merging,
      //    push into queue to process as transaction
      //    and push to server later when will be online
    }
    dispatch(actions.canvasMouseUp());
  }
);
