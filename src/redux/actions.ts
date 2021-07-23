import { createAction } from "@reduxjs/toolkit";
import { canvasShape, clientPos, setStateFunction } from "../types";

export const addNewNode = createAction<clientPos>("addNewNode");
export const dragTemplate = createAction<number | undefined>("dragTemplate");
export const canvasShapeUpdated =
  createAction<canvasShape>("canvasShapeUpdated");
export const insertCopiedNode = createAction("insertCopiedNode");
export const toggleSidebar = createAction("toggleSidebar");
export const setStateAction = createAction<
  Record<string, any> | setStateFunction
>("setState");
