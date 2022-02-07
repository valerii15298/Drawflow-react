import { createAction } from "@reduxjs/toolkit";
import {
  pureTemplateNode,
  canvasShape,
  clientPos,
  RecursivePartial,
  flowType,
} from "../types";

export const addNewNode = createAction<
  clientPos & { templateNode: pureTemplateNode }
>("addNewNode");
export const canvasShapeUpdated =
  createAction<canvasShape>("canvasShapeUpdated");
export const insertCopiedNode = createAction("insertCopiedNode");
export const toggleSidebar = createAction("toggleSidebar");
export const setStateAction =
  createAction<RecursivePartial<flowType>>("setState");
