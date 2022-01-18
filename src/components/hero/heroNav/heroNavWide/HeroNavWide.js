import React from "react";
import "./HeroNavWide.css";
import { NavLink } from "react-router-dom";

export default function HeroNavWide() {
  return (
    <ul className="main-nav__links">
      <li className="main-nav__link">
        <NavLink exact to="/learn" activeClassName="">
          Start
        </NavLink>
      </li>
      <li className="main-nav__link">
        <NavLink exact to="/learning-content" activeClassName="">
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
}
