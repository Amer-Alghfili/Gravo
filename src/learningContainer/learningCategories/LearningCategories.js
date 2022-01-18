import { useState } from "react";
import "./LearningCategories.css";
import Categories from "./categories/Categories";
import healthImg from "../../img/health.svg";
import allImg from "../../img/all.svg";
import { v4 as uuidv4 } from "uuid";
const categories = [
  {
    srcImg: allImg,
    srcAlt: "All categories",
    type: "All",
  },
  {
    srcImg: healthImg,
    srcAlt: "Health category",
    type: "Health",
  },
  {
    srcImg: healthImg,
    srcAlt: "Health image",
    type: "Health",
  },
  {
    srcImg: healthImg,
    srcAlt: "Health image",
    type: "Health",
  },
  {
    srcImg: healthImg,
    srcAlt: "Health image",
    type: "Health",
  },
  {
    srcImg: healthImg,
    srcAlt: "Health image",
    type: "Health",
  },
  {
    srcImg: healthImg,
    srcAlt: "Health image",
    type: "Health",
  },
  {
    srcImg: healthImg,
    srcAlt: "Health image",
    type: "Health",
  },
  {
    srcImg: healthImg,
    srcAlt: "Health image",
    type: "Health",
  },
  {
    srcImg: healthImg,
    srcAlt: "Health image",
    type: "Health",
  },
];

export default function LearningCategories() {
  return (
    <section className="categories">
      <h4 className="categories__title list-label">Select Category</h4>
      <div className="categories--container">
        <Categories categories={categories} />
      </div>
    </section>
  );
}
