import { useState, useEffect } from "react";

export function useResponsiveSize(
  breakpoint = 768,
  smallSize = 4,
  largeSize = 6,
  factor = 4
) {
  const [size, setSize] = useState(smallSize * factor);

  useEffect(() => {
    function handleResize() {
      setSize(
        window.innerWidth >= breakpoint
          ? largeSize * factor
          : smallSize * factor
      );
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, smallSize, largeSize, factor]);

  return size;
}
