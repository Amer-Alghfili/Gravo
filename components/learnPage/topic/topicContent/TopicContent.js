import DialogItem from "../../dialogItem/DialogItem";
import styles from "./TopicContent.module.css";
import { v4 as uuidv4 } from "uuid";

export default function TopicContent({ dialogs, headline }) {
  const renderedDialogs = dialogs.map(({ type, text }) => {
    return (
      <DialogItem key={uuidv4()} type={type}>
        {text}
      </DialogItem>
    );
  });
  return (
    <article className={styles.topic__dialog}>
      <h3 className={styles.dialog__title}>{headline}:</h3>
      {renderedDialogs}
    </article>
  );
}
