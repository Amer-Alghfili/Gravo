import { useState, useEffect } from "react";

function getViewportDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useDimensions() {
  const [dimensions, setDimensions] = useState(getViewportDimensions());

  function handleResizeChange() {
    setDimensions(getViewportDimensions());
  }

  useEffect(function handleResizeEffect() {
    window.addEventListener("resize", handleResizeChange);
    return function removeHandleReasizeChange() {
      window.removeEventListener("resize", handleResizeChange);
    };
  }, []);
  return dimensions;
}
