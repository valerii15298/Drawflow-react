import { CURV, stateData } from "../types";

import { pos } from "../types";

export const getPortListByNodeId = (nodeId: number, state: stateData) => {
  const { ports } = state;
  return Object.keys(ports).filter(key => key.split(/_/g)[0] === "" + nodeId);
}

const createCurvature = (start: pos, end: pos) => {
  let hx1, hx2
  let curv = (start.x >= end.x) ? -CURV : CURV

  hx1 = start.x + Math.abs(end.x - start.x) * curv;
  hx2 = end.x - Math.abs(end.x - start.x) * curv;

  return ' M ' + start.x + ' ' + start.y + ' C ' + hx1 + ' ' + start.y + ' ' + hx2 + ' ' + end.y + ' ' + end.x + '  ' + end.y;
}

const getCanvasInfo = () => {
  // TODO : replace querySelector to someting
  const canvas = (document.querySelector("#drawflow") as HTMLElement).querySelector(".drawflow") as HTMLElement;
  const canvasRect = canvas.getBoundingClientRect();
  return {
    x: canvasRect.x,
    y: canvasRect.y,
    width: canvas.clientWidth,
    height: canvas.clientHeight,
  };
}

const getPos = (clientX: number, clientY: number, zoom: number) => {
  const { x, y, width, height } = getCanvasInfo();
  return {
    x: clientX * (width / (width * zoom)) - (x * (width / (width * zoom))),
    y: clientY * (height / (height * zoom)) - (y * (height / (height * zoom))),
  }
}

const findIndexByElement = (elmt: HTMLElement) => {
  const parentElement = elmt.parentElement as HTMLElement;
  const arr = Array.from(parentElement.childNodes);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elmt) return i;
  }
  return -1;
}

const getPortPosWithZoom = (size: { width: number, height: number }, pos: pos, zoom: number) => {
  const canvas = handler.getCanvasInfo();
  const coef = 1 / zoom

  const x = size.width / 2 + (pos.x - canvas.x) * coef;
  const y = size.height / 2 + (pos.y - canvas.y) * coef;

  return { x, y };
}

const handler = {
  createCurvature,
  getCanvasInfo,
  getPos,
  findIndexByElement,
  getPortPosWithZoom,
}

export default handler
