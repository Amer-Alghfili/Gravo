import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <Link className="logo__link" to="/">
          <div className="logo__link--container">
            <span id="first-letter">G</span>
            <span className="logo__text">ravo</span>
          </div>
        </Link>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__links">
          <li className="main-nav__link">
            <a href="#">Start</a>
          </li>
          <li className="main-nav__link">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
