import Spline from "@splinetool/react-spline";

interface SplineViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  scene?: string;
}

const SplineViewer = ({
  scene = "https://prod.spline.design/NcyoJX8P2GhGnhH1/scene.splinecode",
  ...props
}: SplineViewerProps) => (
  <div
    className="absolute inset-0 w-full h-full z-0 overflow-hidden"
    style={{ transform: "scale(2) translate(20%, 5%)" }}
    {...props}
  >
    <Spline scene={scene} style={{ width: "100%", height: "100%" }} />
  </div>
);

export default SplineViewer;
