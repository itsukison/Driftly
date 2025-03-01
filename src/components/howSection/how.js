import SplitText from "../header/subtitle";
import "./how.css";
import CircularGallery from "./image";
import Stack from "./Stack";
import TiltedCard from "./TiltedCard";
import NotificationModal from "./notification";
import AnimatedContent from "./animation";
import StarBorder from "./StarBorder";

export default function How() {
  return (
    <div className="how-container">
      <div className="title">
        <p> How it works </p>
      </div>
      <div className="Step1-container">
        <div className="Step1-image">
          <TiltedCard
            imageSrc="https://i.ibb.co/vvshSS0C/13.png"
            altText="Image"
            captionText="2025.1.5"
            containerHeight="400px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            rotateAmplitude={24}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text"></p>}
          />
        </div>
        <div className="explanation1">
          <h1>
            Step 1 <br /> Create a Drift Bottle
          </h1>
          <p>
            Capture how you saw the world at a specific moment. Drop a bottle at
            the spot that moved you, leaving a photo, a thought, and a song
            behind, right where it was felt.
          </p>
        </div>
      </div>
      <div className="Step2-container">
        <div className="explanation2">
          <h1>
            Step 2 <br /> Discover and Connect
          </h1>
          <p>
            Receive a notification when you're near a bottle. Open it to
            experience a moment someone else left behind. Bottles disappear once
            picked up, making each encounter one-of-a-kind.
          </p>
        </div>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={100}
        >
              <div>
                <NotificationModal className="image2" />
              </div>
        </AnimatedContent>
      </div>
      <div className="Step3-container">
        <div className="image">
          <CircularGallery bend={2} textColor="#ffffff" borderRadius={0.05} />
        </div>
        <div className="explanation3">
          <h1>
            Capture <mark>Moments</mark>. <br /> Drift Memories. <br /> Connect
            Genuinely.
          </h1>
          <p>
            Cross paths with moments left behind by strangers, and build
            connections based on genuine emotions and experiences. Discover the
            world through someone else’s eyes.
          </p>
        </div>
      </div>
    </div>
  );
}
