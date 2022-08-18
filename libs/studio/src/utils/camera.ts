import { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export interface ICameraPositionOption {
  x: number;
  y: number;
  z: number;
}
export interface IOrbitControlOption {
  maxDistance?: number;
  minDistance?: number;
  maxPolarAngle?: number;
  enableDamping?: boolean;
  cameraPosition?: ICameraPositionOption;
  domElement: HTMLCanvasElement;
}

export const setDefaultCameraPosition = (
  cameraPosition?: ICameraPositionOption
) => {
  return [
    cameraPosition?.x ?? 0,
    cameraPosition?.y ?? 0,
    cameraPosition?.z ?? 5,
  ];
};

export const orbitControlSetup = ({
  maxDistance = 500,
  minDistance = 5,
  maxPolarAngle = Math.PI,
  enableDamping = true,
  domElement,
  cameraPosition,
}: IOrbitControlOption) => {
  const camera = new PerspectiveCamera();

  // camera.aspect = domElement.clientWidth / domElement.clientHeight;
  // camera.updateProjectionMatrix();
  const controls = new OrbitControls(camera, domElement);
  if (enableDamping) {
    controls.enableDamping = enableDamping;
    controls.dampingFactor = 1;
  }

  controls.screenSpacePanning = false;

  controls.minDistance = minDistance;
  controls.maxDistance = maxDistance;

  controls.maxPolarAngle = maxPolarAngle;
  const _cameraPosition = setDefaultCameraPosition(
    cameraPosition as ICameraPositionOption
  );

  camera.position.set(
    _cameraPosition[0],
    _cameraPosition[1],
    _cameraPosition[2]
  );

  return { controls, camera };
};
