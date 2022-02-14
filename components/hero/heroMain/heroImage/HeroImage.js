import { useEffect, useState } from "react";
import styles from "../../../HeroImage.module.css";
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
    <div className={styles.hero__imageContainer + " " + styles[orientation]}>
      <div className={styles.hero__imageContainer} />
      <div className={styles.pseudo}></div>
      <div className={styles.hero__image}></div>
    </div>
  );
}
