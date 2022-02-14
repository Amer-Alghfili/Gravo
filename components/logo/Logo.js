import styles from "./Logo.module.css";
import Link from "next/link";

export default function Logo({ showFull }) {
  let content = "";
  if (showFull) {
    content = <span className="logo__text">ravo</span>;
  }
  return (
    <div className={styles.logo}>
      <Link href="/" passHref={true}>
        <div className={styles.logo__link}>
          <div className={styles.logo__linkContainer}>
            <span className={styles.firstLetter}>G</span>
            {content}
          </div>
        </div>
      </Link>
    </div>
  );
}
