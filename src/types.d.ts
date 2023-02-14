/// <reference types="vite/client" />

declare module "webgl-utils.js";

declare module "*.glsl" {
  const value: string;
  export default value;
}

interface LayerData {
  points: [number, number][];
  color: [number, number, number, number];
}
