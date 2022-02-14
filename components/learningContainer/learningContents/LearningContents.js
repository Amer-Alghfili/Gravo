import ContentList from "./contentList/ContentList";
import styles from "./LearningContents.module.css";
import { useState, useEffect } from "react";
import Prismic from "@prismicio/client";
import { Client } from "../../../utils/prismicHelpers";
import LoadingSpinner from "../../loadingSpinner/LoadingSpinner";

export default function LearningContents({ contents, loading }) {
  return (
    <section>
      <h4 className={styles.listLabel}>Pick Content</h4>
      {loading ? <LoadingSpinner /> : <ContentList contents={contents} />}
    </section>
  );
}
