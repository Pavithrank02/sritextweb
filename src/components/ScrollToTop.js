import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top left corner
  }, [pathname]); // This effect runs whenever the pathname changes

  return null;
}

export default ScrollToTop;