import { createRef, MutableRefObject } from 'react';
import { fabric } from 'fabric';

const useFabricCanvasRef = createRef<fabric.Canvas>();

export const useFabricCanvas = () =>
  useFabricCanvasRef as MutableRefObject<fabric.Canvas>;
