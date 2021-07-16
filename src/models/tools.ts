import { block } from "../types";

export const getNodeFromTemplate = (template: block) => {
  const data = JSON.parse(JSON.stringify(template));
  data.id_nodes = data.nodes_id;
  ["order", "active", "icon_link", "nodes_group_id", "nodes_id"].forEach(
    (key) => delete data[key]
  );
  return data;
};

export const mapKeyToDisplayName = {
  node_settings_json: "Settings JSON",
  node_response_settings_json: "Response JSON",
  node_object_lists: "Object list",
  node_attributes: "Node attributes",
};

export const capitalize = (s: any) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
