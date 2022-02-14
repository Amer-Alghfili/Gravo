import styles from "./TopicHeadlines.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../logo/Logo";

export default function TopicHeadlines({
  headlines,
  selectedHeadline,
  onHeadlineChange,
}) {
  const {
    query: { content },
  } = useRouter();
  const [currentHeadline, setCurrentHeadline] = useState(0);
  let headlinesItems;
  if (headlines) {
    headlinesItems = headlines.map(({ id, text, uid }) => (
      <li
        key={id}
        className={`${styles.headline__item} ${
          selectedHeadline === uid ? styles.selected : ""
        }`}
        onClick={() => onHeadlineChange(uid)}
      >
        <Link href={`/learn/${content}`}>{text}</Link>
      </li>
    ));
  }
  const renderedContent = (
    <aside className={styles.headlines}>
      <Logo showFull={true} />
      <ul className={styles.headlines__list}>{headlinesItems}</ul>
    </aside>
  );
  return renderedContent;
}
