import { useState, useEffect } from "react";

// function getViewportDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }

export function useDimensions() {
  const [dimensions, setDimensions] = useState(0);

  // function handleResizeChange() {
  //   setDimensions(getViewportDimensions());
  // }

  useEffect(function handleResizeEffect() {
    function handleResizeChange() {
      setDimensions(getViewportDimensions());
    }
    function getViewportDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    }

    window.addEventListener("resize", handleResizeChange);
    return function removeHandleReasizeChange() {
      window.removeEventListener("resize", handleResizeChange);
    };
  }, []);
  return dimensions;
}
