import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./LearningContainer.css";
import LearningCategories from "./learningCategories/LearningCategories";
import LearningContents from "./learningContents/LearningContents";
import img from "../img/undraw_building_blocks_re_rwls.svg";
export default function LearningContainer() {
  const [search, setSearch] = useState();
  function handleSearchChange(event) {
    setSearch(event.target.value);
  }
  return (
    <section className="learn">
      <div id="start" className="learn__title--container">
        <div className="learn__intro">
          <h2 className="learn__title">We made it easy for you</h2>
          <h3 className="learn__subtitle">
            Just choose a category you interested in or search for any content
            and start learning
          </h3>
          <div className="learn__search--container">
            <input
              className="learn__search"
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search content"
            ></input>
            <SearchIcon className="learn__search-icon" />
          </div>
        </div>
        <div className="learn__img">
          <img src={img} alt="learn-img" />
        </div>
      </div>
      <LearningCategories />
      <LearningContents />
    </section>
  );
}
