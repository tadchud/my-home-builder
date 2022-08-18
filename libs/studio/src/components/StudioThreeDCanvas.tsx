import { useEffect, useRef } from 'react';
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';
import { orbitControlSetup } from '../utils/camera';
import { sceneSetup } from '../utils/scene';

const StudioThreeDCanvas = () => {
  const threeRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!threeRef.current) return;

    threeRef.current.appendChild(renderer.domElement);

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
    animate();
  }, [camera, controls, renderer, scene]);

  return <div ref={threeRef}></div>;
};

export default StudioThreeDCanvas;
