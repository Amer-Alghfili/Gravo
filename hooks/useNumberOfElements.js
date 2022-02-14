import { useState, useEffect } from "react";

export function useNumberOfElements() {
  const [numberOfElements, setNumberOfElements] = useState(0);
  function calculateNumberOfElements() {
    const width = document.documentElement.clientWidth;
    switch (true) {
      case width > 900:
        return setNumberOfElements(6);
      case width <= 900 && width > 750:
        return setNumberOfElements(5);
      case width <= 750 && width > 600:
        return setNumberOfElements(4);
      case width <= 600 && width > 400:
        return setNumberOfElements(3);
      case width <= 400:
        return setNumberOfElements(2);
      default:
        return;
    }
  }

  useEffect(function resizeEffect() {
    calculateNumberOfElements();
    window.addEventListener("resize", calculateNumberOfElements);
  }, []);

  return numberOfElements;
}
