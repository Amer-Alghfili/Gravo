import React from "react";
import styles from "../../HeroNav.module.css";
import Logo from "../../logo/Logo";

export default function HeroNav() {
  return (
    <nav className={styles.mainNav}>
      <Logo showFull={true} />
    </nav>
  );
}
