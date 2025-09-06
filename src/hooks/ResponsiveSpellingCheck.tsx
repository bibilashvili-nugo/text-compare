import { useState, useEffect } from "react";

export function useResponsiveSize(
  breakpoint = 768,
  smallSize = "4",
  largeSize = "6"
) {
  const [size, setSize] = useState(smallSize);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth >= breakpoint ? largeSize : smallSize);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, smallSize, largeSize]);

  return size;
}
