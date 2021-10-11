import "./HeroImgs.css";
import WorkingImg from "../../img/Working.svg";
import glassImg from "../../img/glass.svg";
import lightImg from "../../img/light.svg";

export default function HeroImgs() {
  return (
    <div className="hero__images">
      <div id="another-before"></div>
      <div className="light-side">
        <img src={lightImg} alt="light-image" />
      </div>
      <div className="window-side">
        <img src={glassImg} alt="window-image" />
      </div>
      <div className="student-side">
        <img src={WorkingImg} alt="someone-study-img" />
      </div>
    </div>
  );
}
