import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { setDefaultCameraPosition } from './camera';

export const sceneSetup = () => {
  const scene = new Scene();
  const renderer = new WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  // renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setSize(600, 400);
  const camera = new PerspectiveCamera();

  // camera.aspect = domElement.clientWidth / domElement.clientHeight;
  // camera.updateProjectionMatrix();
  const controls = new OrbitControls(camera, renderer.domElement);
  // if (enableDamping) {
  //   controls.enableDamping = enableDamping;
  //   controls.dampingFactor = 0.1;
  // }

  controls.screenSpacePanning = false;

  // controls.minDistance = minDistance;
  // controls.maxDistance = maxDistance;

  // controls.maxPolarAngle = maxPolarAngle;
  const _cameraPosition = setDefaultCameraPosition();

  camera.position.set(
    _cameraPosition[0],
    _cameraPosition[1],
    _cameraPosition[2]
  );

  return {
    scene,
    renderer,
    controls,
    camera,
  };
};
