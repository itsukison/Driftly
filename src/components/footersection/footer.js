import FallingText from "./section";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <FallingText
        text={`© 2025 Driftly. All rights reserved. | Leave a moment, find a connection.`}
        highlightWords={["Driftly", "moment", "connection", "rights"]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={1}
        fontSize="1.5rem"
        mouseConstraintStiffness={0.2}
      />
    </div>
  );
}
