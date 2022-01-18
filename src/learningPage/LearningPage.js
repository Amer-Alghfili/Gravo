import "./LearningPage.css";
import { useState, useEffect } from "react";
import TopicHeadlines from "./topicHeadlines/TopicHeadlines";
import TopicContent from "./topic/Topic";

export default function LearningPage() {
  const headlines = [{ name: "Greetings" }, { name: "Asking for recepit" }];
  const [topicContent, setTopicContent] = useState();

  function handleHeadlineChange(headline) {
    // fetch new topicContent
    // setTopicContent(new content);
  }

  useEffect(function getFirstTopic() {
    // setTopicContent(first content);
  }, []);

  return (
    <section className="topic-section">
      <TopicHeadlines
        headlines={headlines}
        onHeadlineChange={handleHeadlineChange}
      />
      <TopicContent content={topicContent} />
    </section>
  );
}
