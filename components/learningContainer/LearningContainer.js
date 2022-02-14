import { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { categoryContext } from "../../utils/context";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./LearningContainer.module.css";
import LearningCategories from "./learningCategories/LearningCategories";
import LearningContents from "./learningContents/LearningContents";
import Prismic from "@prismicio/client";
import { Client } from "../../utils/prismicHelpers";
import { formatListResponse } from "../../utils/formatListResponse";

export default function LearningContainer() {
  const [categoryId, setCategoryId] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingContents, setIsLoadingContents] = useState(true);
  const value = useMemo(() => ({ categoryId, setCategoryId }), [categoryId]);
  const img = require("../../img/undraw_building_blocks_re_rwls.svg");
  const imgSrc = img.default.src;
  const [search, setSearch] = useState();
  const [categories, setCategories] = useState([]);
  const [contents, setContents] = useState([]);
  async function handleSearchChange(event) {
    const { value } = event.target;
    setSearch(value);
    setIsLoadingContents(true);
    try {
      const res = await Client().query(
        Prismic.Predicates.fulltext("document", value)
      );
      const { results } = res;
      let filteredResults;
      if (results) {
        filteredResults = results.filter(({ type }) => type === "content");
      } else {
        setContents([]);
        setIsLoadingContents(false);
      }
      const newContents = formatListResponse(filteredResults);
      setContents(newContents);
      setIsLoadingContents(false);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchCategories() {
    try {
      const { results } = await Client().query(
        Prismic.Predicates.at("document.type", "category")
      );
      const newCategories = formatListResponse(results);
      setCategories(newCategories);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchContents() {
    try {
      const { results } = await Client().query(
        Prismic.Predicates.at("document.type", "content")
      );
      const newContents = formatListResponse(results);
      setContents(newContents);
      setIsLoading(false);
      setIsLoadingContents(false);
    } catch (e) {
      setIsLoading(false);
      setIsLoadingContents(false);
    }
  }

  useEffect(function fetchDataEffect() {
    fetchCategories();
    fetchContents();
  }, []);

  useEffect(
    function categoryChangeEffect() {
      if (!categoryId) {
        return;
      }
      if (!isLoadingContents) {
        setIsLoadingContents(true);
      }
      if (categoryId === "all") {
        fetchContents();
      } else {
        async function fetchContentsBasedOnCategory() {
          try {
            const { results } = await Client().query(
              Prismic.Predicates.at("my.content.category", categoryId)
            );
            const newContents = formatListResponse(results);
            setContents(newContents);
            setIsLoadingContents(false);
          } catch (e) {
            console.log("LearningContainer.js error: " + e);
            setIsLoadingContents(false);
          }
        }
        fetchContentsBasedOnCategory();
      }
    },
    [categoryId]
  );
  return (
    <categoryContext.Provider value={value}>
      <section className={styles.learn}>
        <div id="start" className={styles.learn__titleContainer}>
          <div className={styles.learn__intro}>
            <h2 className={styles.learn__title}>We made it easy for you</h2>
            <h3 className={styles.learn__subtitle}>
              Just choose a category you interested in or search for any content
              and start learning
            </h3>
            <div className={styles.learn__searchContainer}>
              <input
                className={styles.learn__search}
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search content"
              ></input>
              <SearchIcon className={styles.learn__searchIcon} />
            </div>
          </div>
          <div className={styles.learn__img}>
            <img src={imgSrc} alt="learn-img" />
          </div>
        </div>
        <LearningCategories categories={categories} loading={isLoading} />
        <LearningContents contents={contents} loading={isLoadingContents} />
      </section>
    </categoryContext.Provider>
  );
}
