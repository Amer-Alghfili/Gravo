import styles from "./ContentItem.module.css";
import Link from "next/link";
import Image from "next/image";
export default function ContentItem({ imgSrc, imgAlt, title, slogan }) {
  return (
    <li className={styles.content}>
      <Link passHref={true} href={`/learn/${title.toLowerCase()}/`}>
        <div className={styles.content__link}>
          <div className={styles.content__imgContainer}>
            <Image
              className={styles.content__img}
              src={imgSrc}
              alt={imgAlt}
              width={80}
              height={80}
              loading="eager"
            />
          </div>
          <div className={styles.content__titleContainer}>
            <h3 className={styles.content__title}>{title}</h3>
            <p className={styles.content__category}>{slogan}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
