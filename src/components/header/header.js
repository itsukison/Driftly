import BlurText from "./title";
import ShapeBlur from "./background";
import SplitText from "./subtitle";
import "./header.css";

export default function Header() {
  return (
    <>
      <div
        style={{ position: "relative", height: "500px", overflow: "visible" }}
      >
        <ShapeBlur
          variation={0}
          pixelRatioProp={window.devicePixelRatio || 1}
          shapeSize={1.3}
          roundness={0.6}
          borderSize={0.13}
          circleSize={0.3}
          circleEdge={1}
        />
        <h1 className="name">
          <BlurText
            text="Driftly"
            delay={150}
            animateBy="letters"
            direction="top"
            className="text-2xl mb-8"
          />
        </h1>
      </div>
      <div className="subtitle-container">
        <BlurText
          text="Leave behind a piece of your world, discover someone else’s."
          delay={100}
          animateBy="words"
          direction="top"
          className="text-2xl mb-8"
        />
      </div>
    </>
  );
}
