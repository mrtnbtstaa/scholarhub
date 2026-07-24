import { useEffect } from "react";

export const useDisableScroll = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // Clean up to prevent memory leaks or stuck scrolling if the component unmounts
    return () => document.body.classList.remove("no-scroll");
  }, [isLocked]);
};
