import dynamic from 'next/dynamic';
const StudioThreeDCanvas = dynamic(
  () => import('./components/StudioThreeDCanvas'),
  { ssr: false }
);

export const StudioWrapper = () => {
  return <StudioThreeDCanvas />;
};
