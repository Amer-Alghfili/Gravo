import "./Slider.css";
export default function Slider({ onSlide, isPrev, children }) {
  let content;
  if (isPrev) {
    content = (
      <div className={`slider ${isPrev ? "prev" : "next"}`}>
        <span className="slider__arrows"></span>
        <span className="slider__text">{children}</span>
      </div>
    );
  } else {
    content = (
      <div className={`slider ${isPrev ? "prev" : "next"}`}>
        <span className="slider__text">
          <span>{children}</span>
        </span>
        <span className="slider__arrows"></span>
      </div>
    );
  }
  return content;
}
