import React from "react";
import styles from "./ContentList.module.css";
import ContentItem from "./contentItem/ContentItem";

export default function ContentList({ contents }) {
  const contentsComponent = contents.map((content) => {
    const { title, src, alt, slogan } = content;
    return (
      <ContentItem
        key={content.id}
        title={title}
        imgSrc={src}
        imgAlt={alt}
        slogan={slogan}
      />
    );
  });
  return <ul className={styles.contents__list}>{contentsComponent}</ul>;
}
