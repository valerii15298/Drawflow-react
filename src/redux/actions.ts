import { createAction } from "@reduxjs/toolkit";
import {
  pureTemplateNode,
  canvasShape,
  clientPos,
  setStateFunction,
} from "../types";

export const addNewNode = createAction<
  clientPos & { templateNode: pureTemplateNode }
>("addNewNode");
export const canvasShapeUpdated =
  createAction<canvasShape>("canvasShapeUpdated");
export const insertCopiedNode = createAction("insertCopiedNode");
export const toggleSidebar = createAction("toggleSidebar");
export const setStateAction = createAction<
  Record<string, any> | setStateFunction
>("setState");
