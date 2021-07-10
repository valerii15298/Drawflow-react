import { optGroup } from "../types";

export const getGroupTemplate: () => optGroup = () => ({
  id: 0,
  node_group_order: 0,
  node_group_name: "Group name",
  node_group_description: "Group description",
});
