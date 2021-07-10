import { createAsyncThunk } from "@reduxjs/toolkit";
import { block, flowInfo, flowType, group, groups, optGroup } from "../types";
import { flowTypeActions } from "./store";

const baseUrl =
  "https://valerii.educationhost.cloud?csurl=https://tastypoints.io/akm/restapi.php";

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

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const session_id = urlParams.get("session_id");
const flow_id = 25;

if (!session_id) {
  console.error("sessin_id is not provided!");
  alert("sessin_id is not provided!");
}

export const request = async (
  scrdata_id: REQUEST_TYPE,
  data: Record<string, unknown> = {}
) => {
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
    dispatch(flowTypeActions.setStateAction({ flowInfo }));
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

export const fetchGroups = createAsyncThunk(
  "fetchGroups",
  async (_, { dispatch }) => {
    const resp = (await request(REQUEST_TYPE.getGroups)) as {
      flow_nodes_group: group[];
    };
    const { flow_nodes_group } = resp;
    const groups = flow_nodes_group.reduce((acc: groups, next) => {
      acc[next.id] = next;
      return acc;
    }, {});
    return groups;
  }
);

export const updateGroup = createAsyncThunk(
  "updateGroup",
  async (group: optGroup, { dispatch }) => {
    console.log({ group });
    if (!("delete" in group)) {
      group.delete = 0;
    }
    const resp = await request(REQUEST_TYPE.postGroups, {
      flow_nodes_group: [group],
      item_id: group.id ?? 0,
    });
    console.log({ resp });

    if (resp.status === "OK") {
      dispatch(fetchGroups());

      // if creating new group
      if (!group.id) {
        group.id = resp.item_id;
      }
      alert(`Group ${group.id} updated`);
    } else {
      alert(
        `Error: cannot ${group.id ? "update" : "create"} group ${
          group.node_group_name
        }`
      );
    }
  }
);

export const fetchTemplateNodes = createAsyncThunk(
  "fetchTemplateNodes",
  async () => {
    const { flow_nodes } = (await request(
      REQUEST_TYPE.getTemplateNodes,
      {}
    )) as {
      flow_nodes: block[];
    };
    console.log({ flow_nodes });

    return flow_nodes;
  }
);

// export const fetchFlowVersion = createAsyncThunk(
//   "fetchFlowVersion",
//   async () => {
//     // fetch groups
//     // return await mock.getFilters(10);
//     // fetch templateNodes
//     // return await mock.getDummy();
//   }
// );
