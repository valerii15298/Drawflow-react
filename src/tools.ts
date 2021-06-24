import { canvasShape, pos } from "./types";

const createCurvature = (start: pos, end: pos) => {
  const halfHeiht = (start.y - end.y) / 2;
  const dx = start.x - end.x;
  return `M ${start.x} ${start.y} v ${-halfHeiht} h ${-dx} v ${-halfHeiht} `;
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
