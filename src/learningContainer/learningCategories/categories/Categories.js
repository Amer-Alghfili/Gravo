import Category from "./category/Category";
import "./Categories.css";
import { useNumberOfElements } from "../../../hooks/useNumberOfElements";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Categories({ categories }) {
  const numberOfElements = useNumberOfElements();
  console.log("numberOfElements", numberOfElements);
  const categoryComponentList = categories.map((category, index) => {
    // Define whether this element is in sixth position.
    //(sixth position is the last element in categories container)
    const lastElement =
      index === categories.length - 1 ||
      (index !== 0 && Number.isInteger((index + 1) / 6));
    return (
      <Category
        lastElementClass={lastElement ? "last-child" : ""}
        category={category}
      />
    );
  });

  const settings = {
    infinite: true,
    slidesToShow: numberOfElements,
    slidesToScroll: numberOfElements,
  };

  return (
    <ul style={{ padding: "3rem", position: "relative" }}>
      <Slider {...settings}>{categoryComponentList}</Slider>
    </ul>
  );
}
