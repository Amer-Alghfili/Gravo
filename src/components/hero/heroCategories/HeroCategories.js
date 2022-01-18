import "./HeroCategories.css";
import categoriesImg from "../../../img/undraw_building_blocks_re_rwls.svg";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function HeroCategories() {
  const [search, setSearch] = useState();
  function handleSearchChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="hero__categories">
      <h1 className="categories__info">
        <div className="categories__title">We made it easy for you</div>
        <div className="categories__subtitle">
          Just choose a category you interested in or search for any content
        </div>
        <input
          className="categories__search"
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search content"
        ></input>
        <SearchIcon className="categories__search-icon" />
      </h1>
      <div className="img--container">
        <img src={categoriesImg} />
      </div>
    </div>
  );
}
