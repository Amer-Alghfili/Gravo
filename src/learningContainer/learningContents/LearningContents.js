import ContentList from "./contentList/ContentList.js";
export default function LearningContents() {
  return (
    <section className="contents">
      <h4 className="contents__title list-label">Pick Content</h4>
      <ContentList />
    </section>
  );
}
