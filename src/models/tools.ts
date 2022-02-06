import { chatNodeType } from "../chat/chatNodes/chatNodeType";
import { block, canvasShape, ObjectKeys, pos } from "../types";

export const getNodeFromTemplate = (template: block) => {
  const keysToDeleteFromTemplate = [
    "order",
    "active",
    "icon_link",
    "nodes_group_id",
    "nodes_id",
    "nodes_tooltip",

    "name",
    "description",
    "icon_link_selected",
  ];
  const data: block = JSON.parse(JSON.stringify(template));
  const step: any = ObjectKeys(data).reduce(
    (acc, key) => {
      if (key in keysToDeleteFromTemplate) {
        return acc;
      }

      // @ts-ignore
      acc[key] = template[key];
      return acc;
    },
    {
      flow_lane_id: 0,
      flow_node: {},
      node_position: 0,
      prev_node_unique_id: 0,
      this_node_unique_id: 0,
      update_version: 0,
      id_nodes: 0,
    }
  );

  // const propsToChange: Array<keyof block> = [
  //   "name",
  //   "description",
  //   "icon_link_selected",
  // ];
  // propsToChange.forEach((key) => {
  //   //@ts-ignore
  //   step.flow_node[`node_${key}`] = data[key];
  // });
  // step.flow_node.node_tooltip = data.nodes_tooltip;
  // step.id_nodes = data.nodes_id;

  return step;
};

export const mapKeyToDisplayName = {
  flow_node: "Flow node",
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

// if in path node_object_lists
const NodeObjectLists = ({
  key,
  value,
}: {
  key: string;
  value: chatNodeType;
}) => {
  return null;
};
