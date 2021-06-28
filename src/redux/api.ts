import { createAsyncThunk } from "@reduxjs/toolkit";
import { flowInfo } from "../types";
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
  data: Record<string, unknown>
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
    }
    if (json.response_error) {
      console.error(json.response_error);
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
