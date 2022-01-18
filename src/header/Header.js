import "./Header.css";
import HeroNav from "../components/hero/heroNav/HeroNav";
import HeroMain from "../components/hero/heroMain/HeroMain";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Header() {
  const { pathname } = useLocation();
  return (
    <header
      className={`main-header ${pathname === "/learn" ? "learn-header" : ""}`}
    >
      <HeroNav />
      <Route path="/" exact component={HeroMain} />
    </header>
  );
}
