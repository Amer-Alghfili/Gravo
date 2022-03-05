import Category from "./category/Category";
import styles from "./Categories.module.css";
import { useNumberOfElements } from "../../../../hooks/useNumberOfElements";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Categories({ categories }) {
  const numberOfElementsBasedOnWidth = useNumberOfElements();
  const numberOfElements =
    numberOfElementsBasedOnWidth > categories.length
      ? categories.length
      : numberOfElementsBasedOnWidth;
  const categoryComponentList = categories.map((category) => {
    return <Category key={category.id} category={category} />;
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
