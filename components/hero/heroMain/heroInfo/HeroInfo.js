// import "./HeroInfo.css";
// import styles from "../../../../styles/globals.css";
import styles from "../../../HeroInfo.module.css";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function HeroInfo() {
  return (
    <h1 className={styles.hero__introduction}>
      <span className={styles.hero__title}>Start with Gravo</span>
      <span className={styles.hero__subTitle}>
        Practice English more effectively
      </span>
      <p className={styles.hero__description}>
        Gravo is designed to improve your English skills by using them in real
        situations, occasions and places
      </p>
      <div className={styles.hero__links}>
        <ScrollLink
          to="start"
          className={styles.hero__link}
          duration={800}
          smooth={true}
        >
          <span className={styles.hero__helperLink}></span>
          Start
        </ScrollLink>
      </div>
    </h1>
  );
}
