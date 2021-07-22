import { block, canvasShape, pos } from "../types";

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
const createCurvature = (start: pos, end: pos) => {
  const halfHeight = (start.y - end.y) / 2;
  const dx = start.x - end.x;
  return `M ${start.x} ${start.y} v ${-halfHeight} h ${-dx} v ${-halfHeight} `;
};
const getPos = (
  clientX: number,
  clientY: number,
  zoom: number,
  canvas: canvasShape
): pos => {
  const { x, y, width, height } = canvas;
  return {
    x: clientX * (width / (width * zoom)) - x * (width / (width * zoom)),
    y: clientY * (height / (height * zoom)) - y * (height / (height * zoom)),
  };
};
const handler = {
  createCurvature,
  getPos,
};
export default handler;
