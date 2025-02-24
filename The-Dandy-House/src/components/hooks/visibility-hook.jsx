import { useState, useEffect } from "react";

const useOnScreen = (ref, threshold = 0.03) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisibile] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    //Crea un observer per monitorare la visibilità dell'elemento.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        //Se l'elemento è visibile almeno una volta, lo stato si aggiorna.
        if (entry.isIntersecting) {
          setHasBeenVisibile(true);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    //Disiscrive observer quando il componente si smonta o il ref cambia.
    return () => observer.disconnect();
  }, [ref, threshold]); //L'effetto si riattiva se il ref o il threshold cambiano.

  return { isVisible, hasBeenVisible };
};

export default useOnScreen;
