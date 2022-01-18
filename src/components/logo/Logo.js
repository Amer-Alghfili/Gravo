import "./Logo.css";
import { Link } from "react-router-dom";

export default function Logo({ showFull }) {
  let content = "";
  if (showFull) {
    content = <span className="logo__text">ravo</span>;
  }
  return (
    <div className="logo">
      <Link className="logo__link" to="/">
        <div className="logo__link--container">
          <span id="first-letter">G</span>
          {content}
        </div>
      </Link>
    </div>
  );
}
