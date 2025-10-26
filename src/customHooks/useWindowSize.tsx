import React, { useEffect, useState } from "react";

export interface windowType {
  width: number;
  height: number;
}
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<windowType>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);

  return windowSize;
};

export default useWindowSize;
