import styles from "./TopicContainer.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Prismic from "@prismicio/client";
import { Client } from "../../../utils/prismicHelpers";
import TopicContent from "../topic/Topic";
import Slider from "../../slider/Slider";
import TopicHeadlines from "../topicHeadlines/TopicHeadlines";
import {
  formatHeadlinesResponse,
  formatDialogResponse,
} from "../../../utils/formatListResponse";

export default function TopContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [dialogs, setDialogs] = useState([]);
  const [headlineTitle, setHeadlineTitle] = useState();
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);
  const router = useRouter();
  const content = router.query.content;
  let canNavigateForward = false;
  let canNavigateBackward = false;
  if (headlines) {
    canNavigateForward =
      headlineIndex + 1 != headlines.length && headlines.length > 0;
    canNavigateBackward = headlineIndex > 0 && headlines.length > 0;
  }

  function handleSlideChange(direction) {
    if (
      direction + headlineIndex < 0 ||
      direction + headlineIndex === headlines.length
    ) {
      return;
    }
    const newIndex = headlineIndex + direction;
    const { uid } = headlines[newIndex];
    fetchDialogBasedOnHeadline(uid);
    setHeadlineIndex(newIndex);
  }

  function handleHeadlineChange(newUid) {
    const newHeadlineIndex = headlines.findIndex(({ uid }) => uid === newUid);
    setHeadlineIndex(newHeadlineIndex);
    fetchDialogBasedOnHeadline(newUid);
  }

  async function fetchDialogBasedOnHeadline(headlineUid) {
    setIsLoading(true);
    try {
      const {
        id,
        data: { headline },
      } = await Client().getByUID("headline", headlineUid);
      const { text: headlineTitle } = headline[0];
      const { results } = await Client().query(
        Prismic.Predicates.at("my.dialog.headline", id)
      );
      const {
        data: { dialogs },
      } = results[0];
      const newDialogs = formatDialogResponse(dialogs);
      setDialogs(newDialogs);
      setHeadlineTitle(headlineTitle);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  }

  useEffect(
    function fetchHeadlinesEffect() {
      async function fetchHeadlines() {
        try {
          const { id } = await Client().getByUID("content", content);
          const { results } = await Client().query(
            Prismic.Predicates.at("my.headline.content", id)
          );
          let newHeadlines;
          if (results.length > 0) {
            newHeadlines = formatHeadlinesResponse(results);
          } else {
            setIsEmpty(true);
            setIsLoading(false);
          }
          setHeadlines(newHeadlines);
        } catch (e) {
          console.log("Errorrrr", e);
        }
      }
      fetchHeadlines();
    },
    [content]
  );

  useEffect(
    function fetchFirstDialogContent() {
      if (isEmpty) {
        return;
      }
      if (headlines[0]) {
        fetchDialogBasedOnHeadline(headlines[0].uid);
      }
    },
    [headlines]
  );
  return (
    <section className={styles.topicSection}>
      <TopicHeadlines
        headlines={headlines}
        selectedHeadline={headlines ? headlines[headlineIndex]?.uid : -1}
        onHeadlineChange={handleHeadlineChange}
      />
      <div className={styles.topicContent}>
        <TopicContent
          loading={isLoading}
          dialogs={dialogs}
          content={content}
          headline={headlineTitle}
          isEmpty={isEmpty}
        />
        <div className={styles.sliderContainer}>
          <Slider
            onSlide={handleSlideChange.bind(this, -1)}
            isPrev={true}
            disable={!canNavigateBackward}
          >
            {canNavigateBackward ? headlines[headlineIndex - 1].text : ""}
          </Slider>
          <Slider
            onSlide={handleSlideChange.bind(this, 1)}
            isPrev={false}
            disable={!canNavigateForward}
          >
            {canNavigateForward ? headlines[headlineIndex + 1]?.text : ""}
          </Slider>
        </div>
      </div>
    </section>
  );
}
