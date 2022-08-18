import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';
import {
  useThreeCamera,
  useThreeControls,
  useThreeRenderer,
  useThreeScene,
} from '../hooks/useThree';
import { orbitControlSetup } from '../utils/camera';
import { sceneSetup } from '../utils/scene';

const StudioThreeDCanvas = () => {
  const threeDivRef = useRef<HTMLDivElement>(null);
  const threeScene = useThreeScene();
  const threeCamera = useThreeCamera();
  const threeRenderer = useThreeRenderer();
  const threeControls = useThreeControls();

  const [, setSceneReady] = useState(false);

  useEffect(() => {
    if (!threeDivRef.current) return;
    const { scene, renderer } = sceneSetup();
    const { camera, controls } = orbitControlSetup({
      domElement: renderer.domElement,
      enableDamping: true,
      cameraPosition: {
        x: 0,
        y: 0,
        z: 10,
      },
    });

    threeDivRef.current.appendChild(renderer.domElement);

    threeScene.current = scene;
    threeCamera.current = camera;
    threeRenderer.current = renderer;
    threeControls.current = controls;

    function animate() {
      requestAnimationFrame(animate);
      camera.lookAt(scene.position);
      camera.updateMatrixWorld();
      scene.updateMatrixWorld();

      controls.update();

      renderer.render(scene, camera);
    }

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    scene.add(cube);
    setSceneReady(true);
    animate();
  }, [threeCamera, threeControls, threeRenderer, threeScene]);

  return <div ref={threeDivRef}></div>;
};

export default StudioThreeDCanvas;
