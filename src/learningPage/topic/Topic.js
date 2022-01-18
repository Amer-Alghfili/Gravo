import "./Topic.css";
import TopicContent from "./topicContent/TopicContent";
import Slider from "../../components/slider/Slider";

export default function Topic({ content }) {
  function handleSlideChange(direction) {}
  return (
    <section className="topic">
      <div>
        <h2 className="topic__title">Pharmacy</h2>
        <TopicContent />
      </div>
      <div className="slider--container">
        <Slider onSlide={handleSlideChange} isPrev={true}>
          Greetings
        </Slider>
        <Slider onSlide={handleSlideChange} isPrev={false}>
          Asking for recepit
        </Slider>
      </div>
    </section>
  );
}
