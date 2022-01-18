import { useEffect, useState } from "react";
import "./HeroImage.css";
import { useDimensions } from "../../../../hooks/ViewportDimensions";

export default function HeroImage() {
  const { width, height } = useDimensions();
  const [orientation, setOrientation] = useState("landscape");

  useEffect(() => {
    if (width >= height) {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
    }
  }, [width, height]);
  return (
    <div className={"hero__image--container " + orientation}>
      <div className="pseudo"></div>
      <div className="hero__image"></div>
    </div>
  );
}
