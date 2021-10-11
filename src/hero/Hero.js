import HeroImgs from "../components/heroImgs/HeroImgs";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__introduction">
        <h1 className="hero__title">Start with Gravo</h1>
        <h2 className="hero__sub-title">Practice English more effectively</h2>
        <p className="hero__description">
          Gravo is designed to improve your English skills by using them in real
          situations, occasions and places
        </p>
        <div className="hero__links">
          <Link to="/" className="hero__link">
            <span className="hero__helper-link"></span>
            Start
          </Link>
        </div>
      </div>
      <HeroImgs />
    </div>
  );
}
