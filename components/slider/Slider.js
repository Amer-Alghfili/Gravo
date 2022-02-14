import styles from "./Slider.module.css";

export default function Slider({ onSlide, isPrev, disable, children }) {
  let content;
  const style = `${styles.slider} ${isPrev ? styles.prev : styles.next} ${
    disable ? styles.disable : ""
  }`;
  const attributes = {
    className: style,
    onClick: onSlide,
    tabIndex: disable ? -1 : 0,
  };
  // This check if we have to display arrow then text or vice versa
  if (isPrev) {
    content = (
      <button {...attributes}>
        <span className={styles.slider__arrows}></span>
        <span className={styles.slider__text}>{children}</span>
      </button>
    );
  } else {
    content = (
      <button {...attributes}>
        <span className={styles.slider__text}>
          <span>{children}</span>
        </span>
        <span className={styles.slider__arrows}></span>
      </button>
    );
  }
  return content;
}
