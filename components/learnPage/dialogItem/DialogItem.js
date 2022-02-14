import styles from "./DialogItem.module.css";
const customerImg = require("../../../img/customer-img.svg");
const hostImg = require("../../../img/icons8-customer-support-50.svg");
const customImgSrc = customerImg.default.src;
const hostImgSrc = hostImg.default.src;
export default function DialogItem({ type, children }) {
  return (
    <div className={`${styles.dialog} ${styles[type]}`}>
      <p>{children}</p>
      <div className={styles.dialog__imgContainer}>
        <img src={type === "customer" ? customImgSrc : hostImgSrc} alt={type} />
      </div>
    </div>
  );
}
