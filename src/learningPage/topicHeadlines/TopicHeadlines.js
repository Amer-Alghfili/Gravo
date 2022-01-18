import "./TopicHeadlines.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
export default function TopicHeadlines({ headlines, onHeadlineChange }) {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const headlinesItems = headlines.map(({ name }, index) => (
    <li className="headline__item" onClick={() => onHeadlineChange(index)}>
      <Link>{name}</Link>
    </li>
  ));
  return (
    <aside className="headlines">
      <Logo showFull={true} />
      <ul className="headlines__list">{headlinesItems}</ul>
    </aside>
  );
}
