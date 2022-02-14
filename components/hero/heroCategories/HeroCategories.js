// import "./HeroCategories.css";
import styles from "../../HeroCategories.module.css";
// import categoriesImg from "../../../img/undraw_building_blocks_re_rwls.svg";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function HeroCategories() {
  const [search, setSearch] = useState();
  function handleSearchChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div className={styles.hero__categories}>
      <h1 className={styles.categories__info}>
        <div className={styles.categories__title}>We made it easy for you</div>
        <div className={styles.categories__subtitle}>
          Just choose a category you interested in or search for any content
        </div>
        <input
          className={styles.categories__search}
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search content"
        ></input>
        <SearchIcon className={styles.categories__searchIcon} />
      </h1>
      <div className={styles.imgContainer}>
        <img
          src={require("../../../assets/img/undraw_building_blocks_re_rwls.svg")}
        />
      </div>
    </div>
  );
}
