import React from "react";
import "./HeroNav.css";
// import WideNav from "./heroNavWide/HeroNavWide";
// import MobileNav from "./heroNavMobile/HeroNavMobile";
// import { useDimensions } from "../../../hooks/ViewportDimensions";
import Logo from "../../logo/Logo";
import { useLocation } from "react-router-dom";

export default function HeroNav() {
  const { pathname } = useLocation();
  // const { width } = useDimensions();
  // const navComponent = width >= 450 ? <WideNav /> : <MobileNav />;
  return (
    <nav className={`main-nav ${pathname !== "/" ? "main-nav-learn" : ""}`}>
      <Logo showFull={true} />
      {/* {navComponent} */}
    </nav>
  );
}
