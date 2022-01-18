import "./HeroInfo.css";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function HeroInfo() {
  return (
    <h1 className="hero__introduction">
      <span className="hero__title">Start with Gravo</span>
      <span className="hero__sub-title">Practice English more effectively</span>
      <p className="hero__description">
        Gravo is designed to improve your English skills by using them in real
        situations, occasions and places
      </p>
      <div className="hero__links">
        <ScrollLink
          to="start"
          className="hero__link"
          duration="800"
          smooth={true}
        >
          <span className="hero__helper-link"></span>
          Start
        </ScrollLink>
      </div>
    </h1>
  );
}
