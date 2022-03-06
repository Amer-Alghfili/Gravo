import React, { useContext } from "react";
import Image from "next/image";
import styles from "./Category.module.css";
import { categoryContext } from "../../../../../utils/context";
function loader(src) {
  return `http://localhost:3000/${src}`;
}

export default function Category({ category }) {
  const { categoryId, setCategoryId } = useContext(categoryContext);
  const { id, uid, src, alt, title } = category;
  const selectedCategoryId = uid === "all" ? "all" : id;
  return (
    <li
      className={styles.category}
      onClick={() => setCategoryId(selectedCategoryId)}
    >
      <div className={styles.category__imgContainer}>
        <Image
          className={styles.category__img}
          src={src}
          alt={alt}
          width={30}
          height={30}
          loading="eager"
        />
      </div>
      <p className={styles.category__title}>{title}</p>
    </li>
  );
}
