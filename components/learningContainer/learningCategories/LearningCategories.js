import { useState, useEffect } from "react";
import styles from "./LearningCategories.module.css";
import Categories from "./categories/Categories";
import Prismic from "@prismicio/client";
import { Client } from "../../../utils/prismicHelpers";
import LoadingSpinner from "../../loadingSpinner/LoadingSpinner";

export default function LearningCategories({ categories, loading }) {
  return (
    <section>
      <h4 className={styles.listLabel}>Select Category</h4>
      <div className={styles.categoriesContainer}>
        {loading ? <LoadingSpinner /> : <Categories categories={categories} />}
      </div>
    </section>
  );
}
