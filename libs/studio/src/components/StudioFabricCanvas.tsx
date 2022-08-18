import { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { useFabricCanvas } from '../hooks/useFabricCanvas';

const StudioFabricCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasParentElementRef = useRef<HTMLDivElement>(null);
  const fabricCanvas = useFabricCanvas();

  useEffect(() => {
    if (!canvasRef.current || !canvasParentElementRef.current) return;

    const width = canvasParentElementRef.current.clientWidth;
    const height = canvasParentElementRef.current.clientHeight;

    const canvas = new fabric.Canvas(canvasRef.current, {
      height,
      width,
      enableRetinaScaling: false,
      selection: false,
      skipOffscreen: true,
      renderOnAddRemove: false,
    });
    fabricCanvas.current = canvas;

    canvas.setDimensions({
      width,
      height,
    });

    canvas.renderAll();

    return () => {
      canvas.dispose();
    };
  }, [fabricCanvas]);

  return (
    <div ref={canvasParentElementRef}>
      <canvas
        touch-action="none"
        ref={canvasRef}
        id="placeholderCanvas"
        data-cy="embellish-canvas"
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  );
};

export default StudioFabricCanvas;
