import React from "react";
import "./ContentList.css";
import hospitalImg from "../../../img/hospital.svg";
import pharmacyImg from "../../../img/pharmacy.svg";
import ContentItem from "./contentItem/ContentItem.js";

export default function ContentList() {
  const contents = [
    {
      imgSrc: hospitalImg,
      imgAlt: "Hospital",
      title: "Hospital",
      category: "Health",
    },
    {
      imgSrc: pharmacyImg,
      imgAlt: "Pharmacy",
      title: "Pharmacy",
      category: "Health",
    },
    {
      imgSrc: hospitalImg,
      imgAlt: "Hospital",
      title: "Hospital",
      category: "Health",
    },
    {
      imgSrc: hospitalImg,
      imgAlt: "Hospital",
      title: "Hospital",
      category: "Health",
    },
    {
      imgSrc: hospitalImg,
      imgAlt: "Hospital",
      title: "Hospital",
      category: "Health",
    },
  ];
  const contentsComponent = contents.map((content) => {
    const { title, imgSrc, imgAlt, category } = content;
    return (
      <ContentItem
        title={title}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        category={category}
      />
    );
  });
  return <ul className="contents__list">{contentsComponent}</ul>;
}
