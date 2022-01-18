import React from "react";
import "./ContentItem.css";
import { Link } from "react-router-dom";

export default function ContentItem({
  addBorderClass,
  imgSrc,
  imgAlt,
  title,
  category,
}) {
  return (
    <li className="content">
      <Link to="/learn">
        <div className="content__img--container">
          <img className="content__img" src={imgSrc} alt={imgAlt} />
        </div>
        <div className="content__title--container">
          <h3 className="content__title">{title}</h3>
          <p className="content__category">{category}</p>
        </div>
      </Link>
    </li>
  );
}
