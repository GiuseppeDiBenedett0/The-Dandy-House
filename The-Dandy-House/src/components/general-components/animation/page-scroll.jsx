import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollPage = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [location.pathname]);

  return null;
};

export default ScrollPage;
