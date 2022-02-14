import styles from "./Topic.module.css";
import TopicContent from "./topicContent/TopicContent";
import { useState } from "react";
import LoadingSpinner from "../../loadingSpinner/LoadingSpinner";
import EmptyTopic from "../emptyTopic/EmptyTopic";
export default function Topic({
  dialogs,
  content,
  headline,
  loading,
  isEmpty,
}) {
  let renderedContent;
  if (isEmpty) {
    renderedContent = <EmptyTopic />;
  } else {
    renderedContent = loading ? (
      <LoadingSpinner />
    ) : (
      <>
        <h2 className={styles.topic__title}>{content}</h2>
        <TopicContent dialogs={dialogs} headline={headline} />
      </>
    );
  }
  return (
    <section className={styles.topic}>
      <div>{renderedContent}</div>
    </section>
  );
}
