import { useState, useEffect } from "react";

const useOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisibile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          setHasBeenVisibile(true);
        }
      },
      { threshold: 0.03 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return { isVisible, hasBeenVisible };
};

export default useOnScreen;
