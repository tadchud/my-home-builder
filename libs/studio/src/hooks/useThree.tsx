import { createRef, MutableRefObject } from 'react';
import { PerspectiveCamera, Renderer, Scene } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export interface IUseThreeRef {
  scene: Scene;
  renderer: Renderer;
  camera: PerspectiveCamera;
  controls: OrbitControls;
}

const useThreeSceneRef = createRef<Scene>();
export const useThreeScene = () => useThreeSceneRef as MutableRefObject<Scene>;

const useThreeCameraRef = createRef<PerspectiveCamera>();
export const useThreeCamera = () =>
  useThreeCameraRef as MutableRefObject<PerspectiveCamera>;

const useThreeRendererRef = createRef<Renderer>();
export const useThreeRenderer = () =>
  useThreeRendererRef as MutableRefObject<Renderer>;

const useThreeControlsRef = createRef<OrbitControls>();
export const useThreeControls = () =>
  useThreeControlsRef as MutableRefObject<OrbitControls>;

export const useThree = () => ({
  scene: useThreeSceneRef.current,
  renderer: useThreeRendererRef.current,
});
