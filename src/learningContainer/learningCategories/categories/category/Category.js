import React from "react";
import "./Category.css";

export default React.forwardRef(({ category, lastElementClass }, ref) => {
  const { srcImg, altImg, type } = category;
  return (
    <li className={`category ${lastElementClass}`} ref={ref}>
      <div className="category__img--container">
        <img className="category__img" src={srcImg} alt={altImg} />
      </div>
      <p className="category__title">{type}</p>
    </li>
  );
});
